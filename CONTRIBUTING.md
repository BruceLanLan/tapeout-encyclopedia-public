# Contributing · 参与共建

This GitHub repository **is** the TapeOut encyclopedia.  
本仓库就是百科：用 Issue / PR 改 `content/` 与 `specs/`。

English, 中文, and other locales are first-class. Agents may draft; humans publish.

## 先路由 / Route first

读 [`docs/CROSS_REPO_WORKFLOW.md`](docs/CROSS_REPO_WORKFLOW.md)。

- PDF 校对 / 死链 / 不扩写的教材修复 → **不要开在这里**，去 [tapeout-beginner-guide](https://github.com/chickdady-svg/tapeout-beginner-guide)
- 新词条 / 翻译 / 图谱 / 标准 → 本仓库
- 活数据 → [tapeout.work](https://tapeout.work) API（本仓只用 `data_refs` 引用）

## 最快路径 / Quick path

1. 读标准：[specs/00-overview.md](specs/00-overview.md)
2. 开 Issue（词条 / 翻译 / 图谱 / sync-from-guide）— [templates](.github/ISSUE_TEMPLATE/)
3. 改文件：
   - 词条 → `content/entries/<locale>/<slug>.md`
   - 图谱 → `content/graph/*.yaml`
   - 术语 → `content/glossary.yaml`
   - 公开 GitHub 仓库 → `content/public-github/repositories.json`
4. `npm run content`（validate + regen indexes）
5. 开 Pull Request；若跟进了教材修正，PR 描述链上 guide 的 PR/commit

## 目录约定

```text
content/
  entries/<locale>/<slug>.md   # 百科正文（GitHub 可读）
  graph/entities.yaml          # 实体
  graph/relations.yaml         # 关系
  glossary.yaml
  locales.json
specs/                         # 共建规范（中英可读）
.github/                       # Issue / PR 模板
```

## Do

- Cite sources with honest tiers (`official`, `community-reviewed-guide`, `observed-data`, …)
- Keep the same `slug` across locales for one entity
- Link live metrics to [tapeout.work](https://tapeout.work) APIs instead of freezing numbers
- Mark agent drafts as `status: draft`
- Verify repository-directory changes with `npm run verify:public-github` in an environment without GitHub credentials

## Don’t

- Expand or rewrite the [beginner-guide textbook](https://github.com/chickdady-svg/tapeout-beginner-guide) inside that repository
- Claim official status without an official source
- Promise yields, prices, or guaranteed outcomes
- Merge agent output to `published` without human review

## PR title prefixes

`entry(zh):` · `entry(en):` · `i18n(<locale>):` · `graph:` · `spec:` · `chore:`
