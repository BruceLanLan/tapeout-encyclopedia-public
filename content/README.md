# Content library · 内容库

This directory **is** the encyclopedia. Browse it on GitHub; contribute with Issues and Pull Requests.

| Path | What it is |
| --- | --- |
| [`entries/`](entries/) | Multilingual encyclopedia articles |
| [`graph/`](graph/) | Knowledge-graph entities & relations (YAML) |
| [`public-github/`](public-github/) | Anonymously verified public GitHub repositories |
| [`glossary.yaml`](glossary.yaml) | Shared term map across locales |
| [`locales.json`](locales.json) | Enabled BCP-47 locales |
| [`ROADMAP.md`](ROADMAP.md) | What to write next (claim via Issues) |

## Start reading

- Chinese index → [`entries/zh/README.md`](entries/zh/README.md)
- English index → [`entries/en/README.md`](entries/en/README.md)
- Graph nodes → [`graph/entities.yaml`](graph/entities.yaml)
- Graph edges → [`graph/relations.yaml`](graph/relations.yaml)

## Add content

1. Open an Issue (template: new entry / translation / graph).
2. Fork → branch → edit Markdown/YAML here.
3. Run `npm run validate:content` (optional locally; CI-friendly).
4. Open a Pull Request.

Standards: [`../specs/00-overview.md`](../specs/00-overview.md)
