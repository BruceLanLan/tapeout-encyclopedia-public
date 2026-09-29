# JSON Schema for entry frontmatter

Machine-readable companion to [01-entry-schema.md](01-entry-schema.md).

## File

[`schemas/entry.schema.json`](../schemas/entry.schema.json) — Draft 2020-12 schema for the YAML frontmatter on every `content/entries/<locale>/<slug>.md` file.

- Required fields match what `npm run validate:content` (zod in `scripts/validate-content.mjs`) enforces.
- Optional fields (`aliases`, `official_url`, `data_refs`, …) are allowed via `additionalProperties: true` plus explicit property docs.
- `official_url` is a live link only — it does **not** upgrade `source_tier` to `official`.

## How to use

**CI / repo (authoritative):**

```bash
npm run validate:content
```

Skips `README.md` index files; checks frontmatter, locale/slug match, and graph entity ids.

**External agents (optional Ajv):**

```bash
# one file — extract frontmatter yourself, then:
npx --yes ajv-cli@5 validate -s schemas/entry.schema.json -d /tmp/frontmatter.json

# or against a JSON dump of matter(data)
```

Point `$id` consumers at the raw GitHub URL in the schema’s `$id` field once published on `main`.

## See also

- [Entry schema (human)](01-entry-schema.md)
- [Source tiers](03-source-tiers.md)
- [Agent protocol](05-agent-protocol.md)
