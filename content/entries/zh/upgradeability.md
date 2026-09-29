---
id: upgradeability
slug: upgradeability
locale: zh
title: "可升级性"
summary: "合约仍可被管理员升级时，规则与授权风险未冻结；与封印相对。"
type: concept
status: published
source_tier: community-reviewed-guide
tags: [concept, yolo]
updated: "2026-09-27"
aliases: ["可升级合约"]
related: [seal, wallet-safety, gatepilot]
sources:
  - title: "新手指南第 9 章"
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/15-chapter-09.md
    tier: community-reviewed-guide
---

## Definition
**可升级性**指合约管理员仍能改变实现或参数。对用戶而言：你今天理解的授权对象，明天可能变成另一套代码。
## How it works
- 协议核心合约：查 `isSealed` / `owner`（见 [seal](seal.md)）。
- 第三方工具（租赁、代领、聚合器）：假设可升级，直到你能证明相反。
## Boundaries / non-claims
- “官方已封印部分合约”不等于“你授权的第三方合约也安全”。
