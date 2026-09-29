# Knowledge graph · 知识图谱

Machine-readable layer of the encyclopedia. Edit on GitHub; agents and tools consume the same files.

| File | Role |
| --- | --- |
| [`entities.yaml`](entities.yaml) | Nodes (`id`, labels, entry slugs, source tier) |
| [`relations.yaml`](relations.yaml) | Edges (`from`, `to`, `type`, confidence, sources) |
| [`public-github.yaml`](public-github.yaml) | Generated repository nodes and edges from the public GitHub catalog |
| [`graph.dot`](graph.dot) | Generated DOT (`npm run export:graph`); render SVG with Graphviz locally |

Schema: [`../../specs/02-graph-schema.md`](../../specs/02-graph-schema.md)

Rules of thumb:

1. Add an entity stub before linking it from an entry’s `related:` field.
2. Every relation needs `sources` and a `source_tier`.
3. Do not encode live prices/yields as graph facts — point to tapeout.work instead.
4. Edit `content/public-github/repositories.json`, then run `npm run content`; do not hand-edit `public-github.yaml`.
