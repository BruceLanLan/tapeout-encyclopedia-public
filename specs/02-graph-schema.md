# Knowledge graph schema

Machine-readable layer consumed by the site and agents.

## Files

| File | Role |
| --- | --- |
| `content/graph/entities.yaml` | Nodes |
| `content/graph/relations.yaml` | Edges |
| `content/graph/public-github.yaml` | Generated public-repository nodes and TapeOut edges |

## Entity

```yaml
- id: nand
  type: token
  label:
    zh: NAND
    en: NAND
  aliases: ["与非门"]
  entry_slugs:
    zh: nand
    en: nand
  source_tier: official
  official_url: null
  data_refs: []
```

Rules:

- `id` is global, kebab-case or short token, never reused for a different meaning.
- `label` should include at least `en` or `zh`; add more locales as available.
- `entry_slugs.<locale>` points to `content/entries/<locale>/<slug>.md` when that locale exists.

## Relation

```yaml
- id: nand-is-a-transistor-token
  from: nand
  to: transistor
  type: is_a
  confidence: high          # high | medium | low
  source_tier: community-reviewed-guide
  sources:
    - https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/06-chapter-02.md
```

## Relation types

`is_a` · `part_of` · `uses` · `produces` · `depends_on` · `operated_by` · `documents` · `observes` · `related_to` · `supersedes`

## Validation

- Every `from` / `to` must exist in `entities.yaml`.
- Prefer adding an entity stub before adding edges.
- Do not encode market prices or yields as graph facts; link `data_refs` instead.
- Repository nodes use `type: repository` and are generated from `content/public-github/repositories.json` by `npm run content`.
