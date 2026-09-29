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
