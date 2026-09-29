---
id: ref
slug: ref
locale: zh
title: REF
summary: 在新电路中引用已有电路作黑盒复用；指南记载当前挖矿规则禁止带 REF 的电路参赛。
type: concept
status: published
source_tier: community-reviewed-guide
tags: [concept, wave-b]
updated: "2026-09-27"
aliases: [引用]
related: [circuit, pod, canvas]
sources:
  - title: 速查术语表
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/04-quick-reference.md
    tier: community-reviewed-guide
  - title: 新手指南第 5 章
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/09-chapter-05-part-1.md
    tier: community-reviewed-guide
---

## Definition

**REF（引用）** 指在新电路里把别人已有的电路当作黑盒复用。

## How it works

设计层可能支持引用以复用模块；但指南记载**当前版本的挖矿规则禁止**带引用的电路参与 PoD。规则以官方当期为准。

## Boundaries / non-claims

- 不要把「画布能引用」理解成「一定能挖矿」。
