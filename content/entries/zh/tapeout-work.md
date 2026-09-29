---
id: tapeout-work
slug: tapeout-work
locale: zh
title: tapeout.work
summary: TapeOut 生态公开数据与布道终端；百科把它当作 observed-data 层引用。
type: site
status: published
source_tier: observed-data
tags: [data, api, site]
updated: 2026-09-27
official_url: https://tapeout.work
related: [tapeout, beginner-guide, processor, bem]
sources:
  - title: tapeout.work
    url: https://tapeout.work
    tier: observed-data
data_refs:
  - name: updates
    url: https://tapeout.work/api/v1/updates
  - name: processors
    url: https://tapeout.work/api/v1/processors
  - name: events
    url: https://tapeout.work/api/v1/events
---

## Definition

**[tapeout.work](https://tapeout.work)** 是面向 TapeOut 的公开源分析终端：处理器铸造、电路活动、市场与 PoD 相关快照等。数据为独立观测，方法对外披露，不等同官方 registry 本身。

## How it works

百科词条通过 `data_refs` 链到其 `/api/v1/*` 端点，避免把某一时刻的统计抄进 Markdown 当永恒事实。Agent 与机器人更应消费 `/api/v1/events` 等带证据的信息流。

## Boundaries / non-claims

- 观测 ≠ 官方背书。
- 站点不代用户连接钱包、下单或领取。
