# Agent contribution protocol

Humans and coding agents follow the same schema. Agents must be more conservative.

## Allowed agent tasks

- Draft new entries with `status: draft`
- Add entity / relation stubs with citations
- Fix broken links, frontmatter, typos
- Propose translations marked as draft
- Generate PR descriptions that list sources

## Forbidden agent tasks

- Mark content `published` without human review
- Invent official statements, addresses, or APIs
- Copy large copyrighted text verbatim from closed sources
- Paste live market numbers as timeless facts
- Modify beginner-guide textbook rules inside that repo via this project

## Required agent frontmatter

```yaml
status: draft
agents:
  - name: <agent-or-model-label>
    role: draft
    at: 2026-09-27
```

## Self-check before opening a PR

1. `id` exists in `content/graph/entities.yaml` (add stub if needed).
2. Every hard claim has a `sources[]` entry with tier.
3. `related` ids resolve or are also stubbed.
4. Locale directory matches `locale` field.
5. Run local validation: `npm run validate:content`.
6. PR body includes: intent, locales touched, sources, residual risks.

## Suggested PR title prefixes

- `entry(zh): …`
- `entry(en): …`
- `graph: …`
- `i18n(ja): …`
- `spec: …`
- `chore: …`
