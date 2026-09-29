---
id: transistor
slug: transistor
locale: zh
title: 晶体管代币
summary: NAND / LATCH 等积木代币的统称；流片时被销毁以铸造电路 NFT。
type: concept
status: published
source_tier: community-reviewed-guide
tags: [concept, token]
updated: 2026-09-27
related: [nand, latch, circuit, processor]
sources:
  - title: 新手指南第 2 章
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/06-chapter-02.md
    tier: community-reviewed-guide
---

## Definition

在 TapeOut 语境中，**晶体管代币**指用于搭电路的积木资产（典型为 NAND 与 LATCH）。宣言式说法是「一个 Token，就是一颗晶体管」。

## How it works

画布阶段不销毁代币；确认流片后，设计所用的晶体管被烧掉，换来链上不可逆的电路 NFT。晶体管通常按处理器隔离发行。

## Boundaries / non-claims

- 「晶体管」是协议隐喻，不是物理半导体器件。
