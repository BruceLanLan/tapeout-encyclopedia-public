# TapeOut 知识图谱概览

当前快照：**86 个实体 · 91 条关系 · 44 个匿名验证的公开 GitHub 仓库**。

> 这是便于在 GitHub 上阅读的核心关系概览。完整节点与边以 YAML 和 DOT 文件为准。

```mermaid
flowchart LR
  community["社区投稿"] -->|Issue / PR| encyclopedia["TapeOut 百科<br/>词条 · 图谱 · i18n"]
  guide["新手指南<br/>编辑部"] -->|documents| tapeout["TapeOut"]
  encyclopedia -->|documents| tapeout
  repositories["公开 GitHub 目录<br/>44 repositories"] -->|related_to| tapeout
  data["tapeout.work<br/>公开观测数据"] -->|observes| tapeout
  tapekit["TapeKit"] -->|part_of| tapeout
  canvas["Canvas"] -->|part_of| tapeout
  processor["Processor"] -->|part_of| tapeout
  circuit["Circuit"] -->|part_of| processor
  circuit -->|uses| transistor["Transistor"]
  nand["NAND"] -->|is_a| transistor
  latch["LATCH"] -->|is_a| transistor
  pod["PoD"] -->|uses| circuit
  pod -->|produces| bem["BEM"]
```

## 浏览完整图谱

- [百科核心实体](entities.yaml)
- [百科核心关系](relations.yaml)
- [公开仓库节点与关系](public-github.yaml)
- [完整 DOT 图谱](graph.dot)
- [公开 GitHub 仓库目录](../public-github/README.zh-CN.md)

运行 `npm run content` 会从公开仓库目录同步仓库节点，并重新生成本页与完整 DOT 图谱。
