---
id: circuit
slug: circuit
locale: zh
title: 电路
summary: 流片后产生的 ERC-721 电路 NFT；逻辑上链，可被调用，并可挂容器。
type: concept
status: published
source_tier: official
tags: [concept, nft]
updated: 2026-09-27
aliases: ["Circuit NFT"]
related: [transistor, processor, pod, tapekit, tape-out, container, ref]
sources:
  - title: 新手指南第 2 章
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/06-chapter-02.md
    tier: community-reviewed-guide
data_refs:
  - name: market overview
    url: https://tapeout.work/api/v1/market-overview
---

## Definition

**电路**是流片动作的产物：销毁晶体管后铸造的 ERC-721 NFT，承载链上可验证的逻辑。

## How it works

电路属于某台处理器，标识常写作 `#ID@处理器编号`。持有电路可控制其容器；挖矿规则是否接受某种设计（例如 REF）以官方当期规则为准。

## Boundaries / non-claims

- 电路可交易，但不等于收益凭证。
- 成交与密度数据见 tapeout.work 市场 / registry API。
