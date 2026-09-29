import fs from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";

const root = process.cwd();
const entities = parseYaml(
  fs.readFileSync(path.join(root, "content", "graph", "entities.yaml"), "utf8"),
).entities;
const relations = parseYaml(
  fs.readFileSync(path.join(root, "content", "graph", "relations.yaml"), "utf8"),
).relations;
const publicGitHub = parseYaml(
  fs.readFileSync(
    path.join(root, "content", "graph", "public-github.yaml"),
    "utf8",
  ),
);
entities.push(...(publicGitHub.entities ?? []));
relations.push(...(publicGitHub.relations ?? []));

const escape = (s) => String(s).replace(/"/g, '\\"');
const lines = [
  "digraph TapeOutEncyclopedia {",
  "  rankdir=LR;",
  '  node [shape=box, fontname="Helvetica"];',
  '  edge [fontname="Helvetica", fontsize=10];',
];

for (const e of entities) {
  const label = e.label?.en || e.id;
  lines.push(`  "${escape(e.id)}" [label="${escape(label)}\\n(${escape(e.type)})"];`);
}
for (const r of relations) {
  lines.push(
    `  "${escape(r.from)}" -> "${escape(r.to)}" [label="${escape(r.type)}"];`,
  );
}
lines.push("}");

const outDir = path.join(root, "content", "graph");
const outPath = path.join(outDir, "graph.dot");
fs.writeFileSync(outPath, lines.join("\n") + "\n");
console.log(`Wrote ${outPath} (${entities.length} nodes, ${relations.length} edges)`);
console.log("Render SVG locally: dot -Tsvg content/graph/graph.dot -o content/graph/graph.svg");

const repositoryCount = entities.filter(
  (entity) => entity.type === "repository",
).length;
const overviewPath = path.join(outDir, "overview.md");
const overview = `# TapeOut 知识图谱概览

当前快照：**${entities.length} 个实体 · ${relations.length} 条关系 · ${repositoryCount} 个匿名验证的公开 GitHub 仓库**。

> 这是便于在 GitHub 上阅读的核心关系概览。完整节点与边以 YAML 和 DOT 文件为准。

\`\`\`mermaid
flowchart LR
  community["社区投稿"] -->|Issue / PR| encyclopedia["TapeOut 百科<br/>词条 · 图谱 · i18n"]
  guide["新手指南<br/>编辑部"] -->|documents| tapeout["TapeOut"]
  encyclopedia -->|documents| tapeout
  repositories["公开 GitHub 目录<br/>${repositoryCount} repositories"] -->|related_to| tapeout
  data["tapeout.work<br/>公开观测数据"] -->|observes| tapeout
  tapekit["TapeKit"] -->|part_of| tapeout
  canvas["Canvas"] -->|part_of| tapeout
  processor["Processor"] -->|part_of| tapeout
  circuit["Circuit"] -->|part_of| processor
  circuit -->|uses| transistor["Transistor"]
  nand["NAND"] -->|is_a| transistor
  latch["LATCH"] -->|is_a| transistor
  pod["PoD"] -->|uses| circuit
  pod -->|produces| bem["BEM"]
\`\`\`

## 浏览完整图谱

- [百科核心实体](entities.yaml)
- [百科核心关系](relations.yaml)
- [公开仓库节点与关系](public-github.yaml)
- [完整 DOT 图谱](graph.dot)
- [公开 GitHub 仓库目录](../public-github/README.zh-CN.md)

运行 \`npm run content\` 会从公开仓库目录同步仓库节点，并重新生成本页与完整 DOT 图谱。
`;
fs.writeFileSync(overviewPath, overview);
console.log(`Wrote ${overviewPath} (GitHub Mermaid overview)`);
