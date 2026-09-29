import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

const credentialVariables = ["GH_TOKEN", "GITHUB_TOKEN", "GITHUB_PAT"];
if (credentialVariables.some((name) => process.env[name])) {
  console.error("Refusing to verify while GitHub credentials are present.");
  process.exit(1);
}

const catalogPath = path.join(
  process.cwd(),
  "content",
  "public-github",
  "repositories.json",
);
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
if (!Array.isArray(catalog) || catalog.length === 0) {
  throw new Error("Public GitHub catalog must be a non-empty array.");
}

const temporaryHome = fs.mkdtempSync(path.join(os.tmpdir(), "public-github-check-"));
const gitEnvironment = {
  PATH: process.env.PATH,
  HOME: temporaryHome,
  XDG_CONFIG_HOME: temporaryHome,
  GIT_CONFIG_NOSYSTEM: "1",
  GIT_TERMINAL_PROMPT: "0",
};

let failures = 0;
const seen = new Set();

try {
  for (const item of catalog) {
    const fullName = item?.full_name;
    const expectedUrl = `https://github.com/${fullName}`;
    if (
      typeof fullName !== "string" ||
      !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(fullName) ||
      item.url !== expectedUrl ||
      !["official", "community"].includes(item.category) ||
      typeof item.summary !== "string" ||
      !/^\d{4}-\d{2}-\d{2}$/.test(item.verified_at) ||
      seen.has(fullName.toLowerCase())
    ) {
      failures += 1;
      continue;
    }
    seen.add(fullName.toLowerCase());

    let metadata;
    try {
      const response = await fetch(`https://api.github.com/repos/${fullName}`, {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "tapeout-public-catalog-verifier",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      metadata = await response.json();
    } catch {
      failures += 1;
      continue;
    }

    if (
      metadata.full_name !== fullName ||
      metadata.html_url !== expectedUrl ||
      metadata.private !== false ||
      metadata.visibility !== "public"
    ) {
      failures += 1;
      continue;
    }

    const gitCheck = spawnSync(
      "git",
      ["ls-remote", `${expectedUrl}.git`, "HEAD"],
      { env: gitEnvironment, encoding: "utf8", timeout: 30_000 },
    );
    if (gitCheck.status !== 0 || !/\tHEAD\s*$/.test(gitCheck.stdout)) {
      failures += 1;
    }
  }
} finally {
  fs.rmSync(temporaryHome, { recursive: true, force: true });
}

if (failures > 0) {
  console.error(`Public GitHub verification failed: ${failures} item(s).`);
  process.exit(1);
}

console.log(`Public GitHub verification passed: ${catalog.length} item(s).`);
