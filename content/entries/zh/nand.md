---
id: nand
slug: nand
locale: zh
title: NAND
summary: TapeOut 的基础组合逻辑晶体管代币；与 LATCH 一起构成电路积木。
type: token
status: published
source_tier: official
tags: [token, primitive]
updated: 2026-09-27
aliases: ["与非门"]
related: [latch, transistor, circuit]
sources:
  - title: 新手指南第 2 章
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/06-chapter-02.md
    tier: community-reviewed-guide
---

## Definition

**NAND** 是 TapeOut 中的与非门晶体管代币。协议叙事里，NAND 负责“算”，与负责“记”的 LATCH 一起，可搭出任意电路。

## How it works

晶体管通常以 ERC-1155 形式存在，且绑定具体处理器，不能跨处理器混用。设计时在 Canvas 中拖入连线；流片时才会被销毁并铸成电路 NFT。

## Boundaries / non-claims

- NAND 本身不是投资品说明书；流转与定价属于市场层，另见观测数据源。

## See also

- [LATCH](/entries/zh/latch)
- [晶体管代币](/entries/zh/transistor)
