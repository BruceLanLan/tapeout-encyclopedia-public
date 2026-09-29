# TapeOut Encyclopedia — Contribution Standards Overview

Bilingual standards for humans and agents. Locales start with `zh` and `en`; any BCP-47 tag may be added under `content/entries/<locale>/`.

## Layers

| Layer | Path | Purpose |
| --- | --- | --- |
| Entries (content library) | `content/entries/<locale>/<slug>.md` | Human-readable encyclopedia articles |
| Knowledge graph | `content/graph/*.yaml` | Machine-readable entities & relations |
| Specs | `specs/*.md` | Schemas, source tiers, agent protocol |
| Observed data | external: [tapeout.work](https://tapeout.work) APIs | Live metrics — cite, do not paste stale snapshots as facts |
| Textbook source | [tapeout-beginner-guide](https://github.com/chickdady-svg/tapeout-beginner-guide) | Stable beginner narrative — cite by chapter/page |

## Non-goals

- Do not rewrite or expand the beginner-guide textbook inside that repository.
- Do not invent on-chain facts, yields, or official status.
- Do not treat community tools as official unless `source_tier` says so.

## Start here

1. [Entry schema](01-entry-schema.md)
2. [Graph schema](02-graph-schema.md)
3. [Source tiers](03-source-tiers.md)
4. [i18n & multilingual contribution](04-i18n.md)
5. [Agent protocol](05-agent-protocol.md)
6. [Review checklist](06-review.md)
7. [JSON Schema (entry frontmatter)](07-json-schema.md)
8. [Why a new repo](../docs/WHY_NEW_REPO.md)
