# Agent guide — TapeOut Encyclopedia

This repository is a **GitHub-native encyclopedia**. Prefer editing Markdown/YAML under `content/` and `specs/` over changing the optional Next.js preview.

## Before you write

1. **Route the task** with [`docs/CROSS_REPO_WORKFLOW.md`](docs/CROSS_REPO_WORKFLOW.md) — guide fixes go to chickdady-svg/tapeout-beginner-guide, not here.
2. Read [`specs/00-overview.md`](specs/00-overview.md) and [`specs/05-agent-protocol.md`](specs/05-agent-protocol.md).
3. Pick an open item from [`content/ROADMAP.md`](content/ROADMAP.md) or an Issue.
4. Add/update `content/graph/entities.yaml` before linking new `related:` ids.
5. Keep the same `slug` across locales.
6. Run `npm run content` (validate + regen indexes).
7. In the PR body include: `Routed to: B (encyclopedia) because …`
8. For public repository directory changes, run `npm run verify:public-github` with no GitHub credentials.

## Hard rules

- New/changed agent prose stays `status: draft` unless a human explicitly publishes.
- Never invent official status, contract addresses, or yields.
- Cite sources with honest `source_tier` values.
- Live metrics → `data_refs` to https://tapeout.work APIs (do not freeze snapshots as eternal facts).
- Do not expand https://github.com/chickdady-svg/tapeout-beginner-guide beyond its CONTRIBUTING rules; cite it instead.
- Locale folder `README.md` files are indexes, not entries.
- Never discover or verify repository names from an authenticated GitHub session.

## Suggested PR titles

`entry(zh):` · `entry(en):` · `i18n(<locale>):` · `graph:` · `spec:` · `chore:`

## Optional preview app

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
