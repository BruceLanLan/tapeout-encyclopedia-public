# Cross-repo workflow · 三层任务怎么串

TapeOut 知识共建分三层。**先选层，再开 Issue / PR**，避免把百科扩写塞进教材仓，或把 PDF 校对塞进百科仓。

## 报社协作模型

把两座仓库想成一间社区报社：`tapeout-beginner-guide` 是「编辑部」，守住原 PDF、页码溯源、事实核验和稳定出版；`tapeout-encyclopedia-public` 是「小编辑邮箱与投稿台」，接收社区公开投稿，把新项目、新术语、新线索和纠错整理成中英词条、仓库目录与知识图谱。投稿先在百科开 Issue，小编辑完成来源核验和结构化整理；若稿件属于教材原文纠错，就转成 guide 的 Issue / PR 并链回原投稿；若属于生态扩展，就留在百科送审发布。两个仓库用公开 Issue、PR 和 commit 互相引用，不复制私有材料，也不把未经核验的线索直接当作定稿。

```text
社区投稿 / 公开线索
        │
        ▼
百科 Issue（小编辑邮箱）──整理、查源、分流──┬──新生态内容──▶ 百科 PR
                                            └──教材纠错────▶ Guide Issue / PR
                                                                     │
                                                   编辑部复核、合并、稳定出版
```

```text
官方披露 / 链上事实
        │
        ▼
┌───────────────────────────────────────┐
│ A. beginner-guide                     │  教材 · 页码溯源 · 不扩写
│ chickdady-svg/tapeout-beginner-guide  │
└───────────────────┬───────────────────┘
                    │ 引用章节 + source 页码
                    ▼
┌───────────────────────────────────────┐
│ B. encyclopedia (this repo)           │  词条 · 图谱 · i18n · Agent
│ BruceLanLan/tapeout-encyclopedia-public │
└───────────────────┬───────────────────┘
                    │ data_refs
                    ▼
┌───────────────────────────────────────┐
│ C. tapeout.work                       │  观测数据 · 公开 API
└───────────────────────────────────────┘
```

## 任务路由表

| 你想做的事 | 去哪里 | Issue / PR 前缀建议 |
| --- | --- | --- |
| 错字、断词、表格、坏图、死链（PDF 有据） | **A** beginner-guide | `fix:` / `link:` / `table:` |
| 更新 `manifest.md` 页码/图片映射 | **A** | `manifest:` |
| 新概念、新工具、多语言词条、图谱边 | **B** encyclopedia | `entry(zh\|en):` / `graph:` / `i18n:` |
| 改共建标准 / Agent 协议 | **B** | `spec:` |
| 直播数量、市场、PoD 快照、API | **C** tapeout.work（或 B 里加 `data_refs`） | 勿把瞬时数字写进 A/B 正文当永恒事实 |
| 「教材里没有、但生态需要写」 | **B**，并在词条 `sources` 标明缺口 | 不要 PR 进 A 扩写 |

## 串联节奏（推荐）

### 1) 教材维护（A）

1. 在 beginner-guide 开 Issue（章节 + 原 PDF 页码）。
2. 短分支 → 只改相关 `docs/*.md` / `docs/assets/` / 必要时 `manifest.md`。
3. PR 描述写清：文件、页码、修改类型；请另一人按 PDF 复核。
4. 若修正影响百科表述 → 在 encyclopedia 开 follow-up Issue：`sync(guide): …`，链回 A 的 PR。

### 2) 百科扩展（B）

1. 看 [`content/ROADMAP.md`](../content/ROADMAP.md) 或开 Issue（模板：new entry / translation / graph）。
2. 先补 `content/graph/entities.yaml`，再写 `content/entries/<locale>/<slug>.md`。
3. `sources` 优先链 A 的章节 URL + `tier: community-reviewed-guide`；活数据用 `data_refs` 指 C。
4. `npm run validate:content` → PR。

### 3) 跨仓同步（A ↔ B）

当 A 合并了事实性修正（术语、链接、规则边界）：

1. encyclopedia Issue：`sync(guide): <topic>`，body 链 A 的 PR/commit。
2. 更新对应词条 / 图谱边；必要时改 `glossary.yaml`。
3. 不要反向把百科新段落 paste 回 A。

## 标签约定（两边尽量对齐）

| Label | 含义 |
| --- | --- |
| `layer/guide` | 属于教材仓 |
| `layer/encyclopedia` | 属于百科仓 |
| `layer/data` | 属于观测数据 |
| `sync` | 跨仓跟进 |
| `agent-draft` | Agent 起草，需人工发布 |
| `good-first-issue` | 新人可做 |

（GitHub 标签需在各仓 Settings → Labels 里创建；Issue 正文也可先写这些关键字。创建步骤见 [`LABELS.md`](LABELS.md)。）

## 进行中的跨仓 PR

| PR | 仓 | 目的 | 状态 |
| --- | --- | --- |
| [#2](https://github.com/chickdady-svg/tapeout-beginner-guide/pull/2) | guide | 姊妹百科链接 + 任务路由 | 待 chickdady 审 |
| [#3](https://github.com/chickdady-svg/tapeout-beginner-guide/pull/3) | guide | OCR 断链修复（M04 / M05 PANews URL） | 待 chickdady 审 |
| [#4](https://github.com/chickdady-svg/tapeout-beginner-guide/pull/4) | guide | TAPQQ 网关主机名 `1888`→`1-888` | 待 chickdady 审 |

## Owner / Reviewer

| 仓 | Write（已确认） | 审稿习惯 |
| --- | --- | --- |
| beginner-guide | chickdady-svg (admin), BruceLanLan (write) | PDF 人工复核后合并 |
| encyclopedia | BruceLanLan | schema + source tier；Agent 草稿不得直接 `published` |

欢迎 chickdady-svg 加入 encyclopedia 为 collaborator / reviewer（GitHub → Settings → Collaborators）。

## Agent 怎么跑这条流水线

1. 读本文件 + 目标仓 `CONTRIBUTING` / `AGENTS.md`。
2. **先路由**：扩写 → 只动 B；校对 → 只动 A。
3. 在 B 起草时 `status: draft` + `agents:` frontmatter。
4. 打开 PR 时在描述里粘贴「路由选择」一行：`Routed to: A|B|C because …`。

详见 [`specs/05-agent-protocol.md`](../specs/05-agent-protocol.md)。
