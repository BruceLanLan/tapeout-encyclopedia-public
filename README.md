# TapeOut Encyclopedia

**GitHub-native open encyclopedia for the TapeOut ecosystem** — knowledge base, knowledge graph, and contribution standards for humans and AI agents.

> 本仓库本身就是百科全书。在 GitHub 上阅读与投稿；Issue / Pull Request 是共建主路径。

## Read on GitHub

| Start here | Link |
| --- | --- |
| 中文词条 | [`content/entries/zh/`](content/entries/zh/README.md) |
| English entries | [`content/entries/en/`](content/entries/en/README.md) |
| Knowledge graph | [`content/graph/`](content/graph/README.md) |
| Content roadmap | [`content/ROADMAP.md`](content/ROADMAP.md) |
| Public GitHub directory | [`content/public-github/`](content/public-github/README.md) |
| Contribution standards | [`specs/00-overview.md`](specs/00-overview.md) |
| Agent protocol | [`specs/05-agent-protocol.md`](specs/05-agent-protocol.md) · [`AGENTS.md`](AGENTS.md) |
| Why not expand the beginner guide? | [`docs/WHY_NEW_REPO.md`](docs/WHY_NEW_REPO.md) |

Content root: [`content/README.md`](content/README.md) · CI runs `npm run validate:content` on every PR.

## Public GitHub directory

The directory contains only repositories that pass two anonymous checks: the GitHub API must report
`private: false`, and the repository must answer an unauthenticated Git read. The verification tool
refuses to run when GitHub credentials are present. See
[`docs/PUBLIC_GITHUB_COLLECTION.md`](docs/PUBLIC_GITHUB_COLLECTION.md).

## How collaboration works

```text
Issue (propose) → Fork / branch → Edit Markdown + YAML in this repo → PR → Review → Merge
         ↑                                      ↑
    humans or agents              npm run validate:content
```

1. Open an Issue ([templates](.github/ISSUE_TEMPLATE/)) — new entry, translation, or graph change.
2. Edit files under `content/` (and `specs/` if changing standards).
3. Keep entity ids in sync with `content/graph/entities.yaml`.
4. Open a Pull Request using the [PR template](.github/PULL_REQUEST_TEMPLATE.md).
5. Maintainers review source tiers and safety boundaries before `published`.

Multilingual by design: same `slug` across `content/entries/<locale>/`. See [`specs/04-i18n.md`](specs/04-i18n.md). Agents must follow [`specs/05-agent-protocol.md`](specs/05-agent-protocol.md).

## Ecosystem layers (do not collapse)

| Layer | Repo / site | Job |
| --- | --- | --- |
| Textbook | [beginner guide](https://github.com/chickdady-svg/tapeout-beginner-guide) | Stable guide, PDF page provenance, **no expansion** |
| **Encyclopedia (this repo)** | GitHub Markdown + YAML | Expandable entries, graph, i18n, agent standards |

**Cross-repo workflow:** [`docs/CROSS_REPO_WORKFLOW.md`](docs/CROSS_REPO_WORKFLOW.md) · **Governance:** [`docs/GOVERNANCE.md`](docs/GOVERNANCE.md) · **Labels:** [`docs/LABELS.md`](docs/LABELS.md)

## Optional local preview

A small Next.js reader can render the same Git files locally. **GitHub remains the source of truth.**

```bash
npm install
npm run content   # validate + regen indexes + export graph.dot
npm run dev       # http://127.0.0.1:43127
```

## License note

Cite sources. Respect upstream licenses. Do not paste large copyrighted excerpts from closed materials.
