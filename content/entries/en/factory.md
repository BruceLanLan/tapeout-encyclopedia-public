---
id: factory
slug: factory
locale: en
title: Factory contract
summary: The contract entrypoint that creates processors (transistor issuers).
type: concept
status: published
source_tier: community-reviewed-guide
tags: [concept, wave-b]
updated: "2026-09-27"
aliases: [Factory]
related: [processor, tapeout, behemoth]
sources:
  - title: 新手指南第 2 章
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/06-chapter-02.md
    tier: community-reviewed-guide
  - title: 速查术语表
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/04-quick-reference.md
    tier: community-reviewed-guide
---

## Definition

The **factory contract** creates processors. Each processor then issues its own transistor set and hosts circuits.

## How it works

Creation parameters (supply, price, splits, …) are set at creation per public disclosures. Hackathons may require deployment on a specified chain — follow the event and official docs.

## Boundaries / non-claims

- This entry does not list every factory address; use official or verifiable deployment records.
