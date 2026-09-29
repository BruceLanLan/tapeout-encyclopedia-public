# Governance · 双仓怎么一起建

## Repositories

| Repo | Role | Merge bar |
| --- | --- | --- |
| [chickdady-svg/tapeout-beginner-guide](https://github.com/chickdady-svg/tapeout-beginner-guide) | Textbook, PDF provenance | Human PDF review; no expansion |
| [BruceLanLan/tapeout-encyclopedia-public](https://github.com/BruceLanLan/tapeout-encyclopedia-public) | Entries, graph, i18n, agents | Schema + source tiers; agent drafts stay `draft` |
| [tapeout.work](https://tapeout.work) | Observed data / APIs | Cite via `data_refs` only |

Workflow detail: [`CROSS_REPO_WORKFLOW.md`](CROSS_REPO_WORKFLOW.md)

## People

| Person | Guide | Encyclopedia |
| --- | --- | --- |
| @chickdady-svg | admin | invited as collaborator/reviewer (pending) |
| @BruceLanLan | write | admin |

## Cadence

1. **Weekly (lightweight):** scan guide Issues/PRs for factual fixes → open encyclopedia `sync(guide):` if needed.
2. **Ongoing:** encyclopedia ROADMAP Waves; guide textbook-fix Issues only.
3. **Agents:** may draft in encyclopedia; may propose guide link/typo PRs but never expand guide prose.

## Labels (create in both repos when convenient)

`layer/guide` · `layer/encyclopedia` · `layer/data` · `sync` · `agent-draft` · `good-first-issue` · `textbook`

## Do not

- Expand beginner-guide beyond PDF-backed corrections.
- Publish agent encyclopedia text without human review.
- Freeze live metrics into Markdown as eternal facts.
