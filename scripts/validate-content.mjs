import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { parse as parseYaml } from "yaml";
import { z } from "zod";

const root = process.cwd();
/** Machine-readable twin: schemas/entry.schema.json (see specs/07-json-schema.md). */
const ENTRY_JSON_SCHEMA = path.join(root, "schemas", "entry.schema.json");
const sourceTier = z.enum([
  "official",
  "community-reviewed-guide",
  "observed-data",
  "community",
  "unverified",
  "deprecated",
]);

const entrySchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  locale: z.string().min(2),
  title: z.string().min(1),
  summary: z.string().min(1),
  type: z.string().min(1),
  status: z.enum(["draft", "review", "published", "deprecated"]),
  source_tier: sourceTier,
  tags: z.array(z.string()).default([]),
  updated: z.preprocess((v) => {
    if (v instanceof Date) return v.toISOString().slice(0, 10);
    return v;
  }, z.string().min(4)),
  related: z.array(z.string()).default([]),
  sources: z
    .array(
      z.object({
        title: z.string(),
        url: z.string().url(),
        tier: sourceTier,
      }),
    )
    .min(1),
});

if (!fs.existsSync(ENTRY_JSON_SCHEMA)) {
  console.warn(
    `Warning: missing ${path.relative(root, ENTRY_JSON_SCHEMA)} (external agents use it; zod below remains authoritative).`,
  );
}

const errors = [];
const entriesRoot = path.join(root, "content", "entries");
const entityIds = new Set();
const relationIds = new Set();

const entitiesDoc = parseYaml(
  fs.readFileSync(path.join(root, "content", "graph", "entities.yaml"), "utf8"),
);
for (const e of entitiesDoc.entities ?? []) {
  if (entityIds.has(e.id)) errors.push(`Duplicate entity id: ${e.id}`);
  entityIds.add(e.id);
}

const publicGitHubGraph = parseYaml(
  fs.readFileSync(
    path.join(root, "content", "graph", "public-github.yaml"),
    "utf8",
  ),
);
const publicGitHubCatalog = JSON.parse(
  fs.readFileSync(
    path.join(root, "content", "public-github", "repositories.json"),
    "utf8",
  ),
);
const repositoryEntityId = (fullName) =>
  `repo-${fullName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
const repositoryEntities = publicGitHubGraph.entities ?? [];
const repositoryRelations = publicGitHubGraph.relations ?? [];

if (repositoryEntities.length !== publicGitHubCatalog.length) {
  errors.push(
    `Public GitHub graph entity count ${repositoryEntities.length} does not match catalog ${publicGitHubCatalog.length}`,
  );
}
if (repositoryRelations.length !== publicGitHubCatalog.length) {
  errors.push(
    `Public GitHub graph relation count ${repositoryRelations.length} does not match catalog ${publicGitHubCatalog.length}`,
  );
}

const repositoryEntityById = new Map(
  repositoryEntities.map((entity) => [entity.id, entity]),
);
for (const repository of publicGitHubCatalog) {
  const id = repositoryEntityId(repository.full_name);
  const entity = repositoryEntityById.get(id);
  if (!entity) {
    errors.push(`Missing public repository graph entity: ${id}`);
    continue;
  }
  if (entity.official_url !== repository.url) {
    errors.push(`Public repository graph URL mismatch: ${id}`);
  }
  const expectedTier =
    repository.category === "official" ? "official" : "community";
  if (entity.source_tier !== expectedTier) {
    errors.push(`Public repository graph source tier mismatch: ${id}`);
  }
}
for (const e of repositoryEntities) {
  if (entityIds.has(e.id)) errors.push(`Duplicate entity id: ${e.id}`);
  entityIds.add(e.id);
}

const relationsDoc = parseYaml(
  fs.readFileSync(path.join(root, "content", "graph", "relations.yaml"), "utf8"),
);
for (const r of relationsDoc.relations ?? []) {
  if (relationIds.has(r.id)) errors.push(`Duplicate relation id: ${r.id}`);
  relationIds.add(r.id);
  if (!entityIds.has(r.from))
    errors.push(`Relation ${r.id} from unknown entity: ${r.from}`);
  if (!entityIds.has(r.to))
    errors.push(`Relation ${r.id} to unknown entity: ${r.to}`);
}
for (const r of repositoryRelations) {
  if (relationIds.has(r.id)) errors.push(`Duplicate relation id: ${r.id}`);
  relationIds.add(r.id);
  if (!entityIds.has(r.from))
    errors.push(`Relation ${r.id} from unknown entity: ${r.from}`);
  if (!entityIds.has(r.to))
    errors.push(`Relation ${r.id} to unknown entity: ${r.to}`);
}

for (const locale of fs.readdirSync(entriesRoot)) {
  const dir = path.join(entriesRoot, locale);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const file of fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md")) {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);
    const parsed = entrySchema.safeParse(data);
    if (!parsed.success) {
      errors.push(`${locale}/${file}: ${parsed.error.message}`);
      continue;
    }
    if (parsed.data.locale !== locale)
      errors.push(`${locale}/${file}: locale mismatch`);
    if (parsed.data.slug !== slug)
      errors.push(`${locale}/${file}: slug mismatch`);
    if (!entityIds.has(parsed.data.id))
      errors.push(`${locale}/${file}: unknown entity id ${parsed.data.id}`);
    for (const rel of parsed.data.related) {
      if (!entityIds.has(rel))
        errors.push(`${locale}/${file}: related unknown id ${rel}`);
    }
  }
}

if (errors.length) {
  console.error("Content validation failed:\n" + errors.map((e) => `- ${e}`).join("\n"));
  process.exit(1);
}
console.log(
  `Content validation passed. Entry JSON Schema: ${path.relative(root, ENTRY_JSON_SCHEMA)}`,
);
