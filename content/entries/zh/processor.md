---
id: processor
slug: processor
locale: zh
title: 处理器
summary: 由工厂合约创建的「晶体管发行厂」；每台处理器发行自己的 NAND/LATCH 套件。
type: concept
status: published
source_tier: official
tags: [concept, registry]
updated: 2026-09-27
aliases: ["晶体管发行厂"]
related: [circuit, nand, latch, tapeout, factory, behemoth]
sources:
  - title: 新手指南第 2 章
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/06-chapter-02.md
    tier: community-reviewed-guide
data_refs:
  - name: processors
    url: https://tapeout.work/api/v1/processors
---

## Definition

在 TapeOut 里，**处理器**更像一座晶体管发行厂：由工厂合约创建，发行自己的晶体管套件，并承载其下电路。

## How it works

创建时可设定供给、铸造价格与公开披露的分成等参数。哪些处理器可参与 PoD 挖矿以官方规则为准。实时名录请用观测 API，勿把旧文章里的数量抄成现状。

## Boundaries / non-claims

- 教程中的历史数量会过期；以 registry / tapeout.work 为准。
- 合约可升级状态属于安全关键信息，行动前阅读官方披露。
