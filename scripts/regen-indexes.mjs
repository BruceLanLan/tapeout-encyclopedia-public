import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = path.join(process.cwd(), "content", "entries");
for (const locale of fs.readdirSync(root)) {
  const dir = path.join(root, locale);
  if (!fs.statSync(dir).isDirectory()) continue;
  const rows = [];
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md").sort()) {
    const { data } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
    rows.push({
      title: data.title,
      file,
      type: data.type,
      summary: data.summary,
    });
  }
  const zh = locale === "zh";
  const header = zh
    ? `# 中文词条索引\n\n同一实体在不同语言下使用**相同 slug**。\n\n| 词条 | 类型 | 摘要 |\n| --- | --- | --- |\n`
    : `# English entry index\n\nSame entity ⇒ **same slug** across locales.\n\n| Entry | Type | Summary |\n| --- | --- | --- |\n`;
  const footer = zh
    ? `\n投稿：[CONTRIBUTING.md](../../../CONTRIBUTING.md) · [路线图](../../ROADMAP.md) · [i18n](../../../specs/04-i18n.md)\n`
    : `\nContribute: [CONTRIBUTING.md](../../../CONTRIBUTING.md) · [Roadmap](../../ROADMAP.md) · [i18n](../../../specs/04-i18n.md)\n`;
  const body = rows.map((r) => `| [${r.title}](${r.file}) | ${r.type} | ${r.summary} |`).join("\n") + "\n";
  fs.writeFileSync(path.join(dir, "README.md"), header + body + footer);
  console.log(locale, rows.length);
}
