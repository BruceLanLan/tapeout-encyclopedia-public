---
id: tapeout
slug: tapeout
locale: zh
title: TapeOut
summary: 运行在 BNB Chain 上的协议：把逻辑门做成代币，让人在链上搭电路、造处理器。
type: protocol
status: published
source_tier: official
tags: [protocol, bnb-chain]
updated: 2026-09-27
aliases: ["Tape Out", "链上芯片厂"]
official_url: https://tapeout.net
related: [nand, latch, circuit, processor, bem, pod, tapekit, beginner-guide, tapeout-work, canvas, tape-out, container, tape-url, factory, behemoth]
sources:
  - title: 新手指南第 1 章
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/05-chapter-01.md
    tier: community-reviewed-guide
  - title: tapeout.net
    url: https://tapeout.net
    tier: official
data_refs:
  - name: processors registry
    url: https://tapeout.work/api/v1/processors
---

## Definition

**TapeOut** 是运行在 BNB Chain 上的一套协议：它把“逻辑门”做成代币，让任何人都能用这些代币在链上搭电路、造处理器。官网把它描述为链上硬件制造基础设施。

名字借用半导体行业的「流片（tape-out）」：在网页画布上设计电路后，销毁晶体管代币，在链上铸造代表该电路的 NFT。它与真实硅片制造无关。

## How it works

核心资产链大致为：

**晶体管 → 画布 → 流片 → 电路 → 处理器 → 容器**

NAND 负责组合逻辑，LATCH 负责状态；画布仿真可在浏览器免费进行，流片才会消耗晶体管并上链。

## Boundaries / non-claims

- 不要与半导体开源项目 Tiny Tapeout 等「tapeout」关键词混淆。
- 本词条不预测代币价格或挖矿收益。
- 实时处理器与电路数量请查 [tapeout.work](https://tapeout.work) 观测 API，而不是把某一时刻的数字写成永恒事实。

## See also

- [新手完全指南](/entries/zh/beginner-guide)
- [tapeout.work](/entries/zh/tapeout-work)
