---
id: seal
slug: seal
locale: zh
title: "封印"
summary: "合约管理员永久放弃升级权；封印后规则不可再改。以链上 isSealed/owner 自查为准。"
type: concept
status: published
source_tier: community-reviewed-guide
tags: [concept, yolo]
updated: "2026-09-27"
aliases: ["seal", "isSealed"]
related: [pod, bem, wallet-safety, upgradeability]
sources:
  - title: "新手指南第 9 章"
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/15-chapter-09.md
    tier: community-reviewed-guide
  - title: "速查术语表"
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/04-quick-reference.md
    tier: community-reviewed-guide
---

## Definition
**封印（seal）**：调用合约的 `seal()` 后永久放弃升级权；`isSealed()` 为 true，`owner` 变为零地址。
## How it works
指南在写作时点对部分合约做了只读实测（如 PodMining、晶体管市场已封印等），并强调：**不要把“部分已封印”理解成所有合约都已放弃权限**。请在区块浏览器 Read Contract 自行复查。
## Boundaries / non-claims
- 封印状态会随时间变化；以你查询当下的链上数据为准。
- 已封印的协议规则，管不到中心化交易所热钱包或第三方可升级工具合约。
