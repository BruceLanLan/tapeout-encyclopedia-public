# Entry schema

Every encyclopedia entry is a Markdown file with YAML frontmatter.

## Path

```
content/entries/<locale>/<slug>.md
```

- `locale`: BCP-47, lowercase (`zh`, `en`, `ja`, …)
- `slug`: kebab-case ASCII, identical across languages for the same entity
- One file = one language version of one entity

## Frontmatter (required)

```yaml
id: tapeout                 # stable entity id (matches graph)
slug: tapeout               # must match filename without .md
locale: zh
title: TapeOut
summary: 一句话摘要（≤160 字 / ≤240 chars）
type: protocol              # see types below
status: draft               # draft | review | published | deprecated
source_tier: official       # see specs/03-source-tiers.md
tags: [protocol, bnb-chain]
updated: 2026-09-27
sources:
  - title: TapeOut beginner guide ch.1
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/05-chapter-01.md
    tier: community-reviewed-guide
related: [nand, latch, circuit, processor]
```

## Frontmatter (optional)

```yaml
aliases: ["Tape Out", "流片协议"]
official_url: https://tapeout.net
data_refs:
  - name: processors registry
    url: https://tapeout.work/api/v1/processors
safety_notes: 连接钱包前核验域名；本站不代操作。
translation_of: null          # or slug if this is a translation PR
translators: []
agents:
  - name: cursor-agent
    role: draft
```

## Types

`protocol` · `concept` · `token` · `tool` · `site` · `person` · `event` · `formula` · `address` · `other`

## Body structure (recommended)

```markdown
## Definition
## How it works
## Boundaries / non-claims
## See also
```

Keep claims tied to `sources`. If unsure, write the uncertainty explicitly.
