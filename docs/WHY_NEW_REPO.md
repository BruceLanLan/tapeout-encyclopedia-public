# 为什么要新建 TapeOut 百科全书仓库

> 中英对照 / bilingual. 给原作者、协作者与社区读者的说明。

## 中文

### 一句话结论

[`chickdady-svg/tapeout-beginner-guide`](https://github.com/chickdady-svg/tapeout-beginner-guide) 是一份**已校对、可溯源的新手教材**；TapeOut 生态还需要一份**可扩写、可多语言、可被 Agent 共建的百科与知识图谱**。两者目标不同，应分仓协作，而不是把教材仓库改造成百科。

### 现有新手指南仓库的价值（应保留）

- 把《TapeOut 新手完全指南》拆成章节 Markdown，便于 Issue / PR 校对。
- 用 `<!-- source: ... p.N -->` 与 `manifest.md` 保留原稿页码溯源。
- 提供更新版 PDF 与 MkDocs 预览，阅读路径清晰。
- 公开页面对应：[TapeOut Daily · 指南](https://tapeoutdaily.ai/learn/guide)。

这是生态里极重要的**权威教材层**，不该被日常百科扩写冲散。

### 现有仓库的硬限制（为何不适合直接当百科）

摘自该仓库 [`CONTRIBUTING.md`](https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/CONTRIBUTING.md)：

| 限制 | 对百科的影响 |
| --- | --- |
| 「不要翻译或扩写原文没有的内容」 | 百科必须持续增补词条、工具、事件与多语言译本 |
| 「只修正有原 PDF 依据的错字/格式」 | 无法收录 PDF 出版后的协议变更、新工具、新数据口径 |
| 一个 PR 尽量只处理一章或一类格式问题 | 不适合批量导入知识图谱边、Agent 生成草稿、跨语言同步 |
| 修改范围主要在 `docs/*.md` | 没有实体/关系 schema、source tier、Agent 协议等共建标准位 |
| 人工对照原 PDF 复核是合并前提 | 与「人类 + AI Agent 共建」的吞吐模型冲突 |

结论：在原仓库内硬做百科，会**破坏教材溯源契约**，也会让审稿标准互相打架。

### 新建仓库要解决什么

以 **GitHub 开源仓库为核心**（不是另做封闭站点）：词条、图谱与规范都是仓里的文件，Issue / PR 是共建主路径。

1. **内容库**：词条（概念 / 协议 / 工具 / 人物 / 事件）以 Markdown 存在仓内，可独立投稿与审阅。
2. **知识图谱**：实体与关系用机器可读 schema（YAML + 校验），供 Agent 与工具消费。
3. **多语言**：中英优先，结构支持任意 locale；翻译是一等公民，不是附属备注。
4. **Agent 协议**：统一 frontmatter、来源分级、禁止臆测、PR 自检清单。
5. **数据层对接**：引用 [tapeout.work](https://tapeout.work) 公开 API 作为「可观测数据」层，不与教材正文混写。

可选的本地网页预览只是方便阅读同一批 Git 文件；**真相源始终是本 GitHub 仓库**。

### 与新手指南的关系（互补，不替代）

```
官方公开材料 / 链上事实
        ↓
新手指南仓库  ——  权威教材、页码溯源、入门叙事
        ↓ 引用
百科全书仓库  ——  词条、图谱、多语言、Agent 共建
        ↓ 引用
tapeout.work  ——  观测数据、API、布道终端
```

百科会把新手指南标为高优先级来源（`source_tier: community-reviewed-guide`），并链回章节与页码；**不会 fork 后改写其正文契约**。

### 请求原作者的协作方式

1. 请将 GitHub 用户 **BruceLanLan** 加为该新手指南仓库的 Collaborator（Write），便于：
   - 提修校对、链接失效、manifest 同步等教材向 PR；
   - 在两边 README 互链，避免社区分叉误解。
2. 百科新建在独立仓库，尊重 `CONTRIBUTING` 的「不扩写」边界。
3. 欢迎原作者成为百科仓库的 maintainer / reviewer。

---

## English

### Bottom line

The beginner-guide repo is a **proofread, page-traceable textbook**. The ecosystem also needs an **expandable, multilingual, agent-friendly encyclopedia and knowledge graph**. Different jobs → separate repositories, coordinated by citation — not by overloading the textbook repo.

### Hard limits in the beginner guide

Its contribution rules forbid translating or expanding beyond the original PDF, restrict edits to PDF-backed corrections, and require human PDF review. That is excellent for a stable guide; it blocks encyclopedia growth, post-publication updates, multilingual contribution, and agent-scale drafts.

### What the new repo adds

A **GitHub-native** encyclopedia: Markdown entries, YAML graph, source tiers, i18n-first contribution, an agent protocol, and read-only citation of [tapeout.work](https://tapeout.work) public APIs — while treating the beginner guide as a high-trust cited source, not a dump ground for new prose. Optional web preview is secondary; the repository is the product.
