# TapeOut 百科

[简体中文](README.md) · [English](README.en.md)

**以 GitHub 为核心的 TapeOut 开放百科**——面向人类和 AI Agent 的知识库、知识图谱与共建标准。

> 本仓库本身就是百科全书。在 GitHub 上阅读与投稿；Issue 和 Pull Request 是主要共建路径。

## 在 GitHub 上阅读

| 从这里开始 | 链接 |
| --- | --- |
| 中文词条 | [`content/entries/zh/`](content/entries/zh/README.md) |
| 英文词条 | [`content/entries/en/`](content/entries/en/README.md) |
| 知识图谱 | [`content/graph/`](content/graph/README.md) |
| 内容路线图 | [`content/ROADMAP.md`](content/ROADMAP.md) |
| 公开 GitHub 仓库目录 | [`content/public-github/`](content/public-github/README.zh-CN.md) |
| 共建标准 | [`specs/00-overview.md`](specs/00-overview.md) |
| Agent 协议 | [`specs/05-agent-protocol.md`](specs/05-agent-protocol.md) · [`AGENTS.md`](AGENTS.md) |
| 为什么不扩写新手指南？ | [`docs/WHY_NEW_REPO.md`](docs/WHY_NEW_REPO.md) |

内容根目录：[`content/README.md`](content/README.md)。每个 PR 都会通过 CI 运行 `npm run validate:content`。

## 怎么玩：把它当作社区报社

把这个仓库当作 TapeOut 生态的社区报社：姐妹仓库 [TapeOut 新手指南](https://github.com/chickdady-svg/tapeout-beginner-guide) 是负责校对、事实核验和稳定出版的「编辑部」，本百科则是面向社区开放的「小编辑邮箱与投稿台」。任何人都可以通过 Issue 投递公开线索、项目、术语或纠错，小编辑把材料整理成中英文词条、公开仓库目录和知识图谱，再通过 Pull Request 送审；涉及教材原文的修订转交编辑部，新增生态内容留在百科，实时数据只引用公开来源。最简单的玩法是：逛目录 → 开 Issue 投稿 → 认领词条 → 运行校验 → 提交 PR → 审阅发布。

## 公开 GitHub 仓库目录

目录只收录通过两项匿名检查的仓库：GitHub API 必须返回 `private: false`，并且仓库必须允许未登录用户执行 Git 读取。校验工具检测到 GitHub 凭据时会拒绝运行。详见[公开 GitHub 收录规则](docs/PUBLIC_GITHUB_COLLECTION.zh-CN.md)。

## 如何共建

```text
Issue（提议）→ Fork / 分支 → 修改仓库内的 Markdown + YAML → PR → 审阅 → 合并
       ↑                                           ↑
  人类或 Agent                         npm run validate:content
```

1. 使用 [Issue 模板](.github/ISSUE_TEMPLATE/)提出新词条、翻译或图谱变更。
2. 修改 `content/` 下的文件；若调整标准，则同时修改 `specs/`。
3. 保持实体 ID 与 `content/graph/entities.yaml` 一致。
4. 使用 [PR 模板](.github/PULL_REQUEST_TEMPLATE.md)提交 Pull Request。
5. 维护者核对来源等级和安全边界后，才能把内容标记为 `published`。

本项目原生支持多语言：同一实体在 `content/entries/<locale>/` 下使用相同的 `slug`。详见 [`specs/04-i18n.md`](specs/04-i18n.md)。Agent 必须遵守 [`specs/05-agent-protocol.md`](specs/05-agent-protocol.md)。

## 生态分层

| 层级 | 仓库 / 网站 | 职责 |
| --- | --- | --- |
| 教材 | [TapeOut 新手指南](https://github.com/chickdady-svg/tapeout-beginner-guide) | 稳定教材、PDF 页码溯源，不扩写 |
| **百科（本仓库）** | GitHub Markdown + YAML | 可扩展词条、知识图谱、国际化与 Agent 标准 |

跨仓流程：[`docs/CROSS_REPO_WORKFLOW.md`](docs/CROSS_REPO_WORKFLOW.md) · 治理：[`docs/GOVERNANCE.md`](docs/GOVERNANCE.md) · 标签：[`docs/LABELS.md`](docs/LABELS.md)

## 可选本地预览

仓库附带一个小型 Next.js 阅读器，用于在本地渲染相同的 Git 文件。GitHub 仍是真相源。

```bash
npm install
npm run content   # 校验内容、重建索引并导出 graph.dot
npm run dev       # http://127.0.0.1:43127
```

## 许可说明

请注明来源并遵守上游许可，不要大段转载封闭材料中的受版权保护内容。
