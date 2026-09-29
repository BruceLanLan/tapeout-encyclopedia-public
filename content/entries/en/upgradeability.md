---
id: upgradeability
slug: upgradeability
locale: en
title: "Upgradeability"
summary: "While an admin can still upgrade a contract, rules and approval risk are not frozen; opposite of sealing."
type: concept
status: published
source_tier: community-reviewed-guide
tags: [concept, yolo]
updated: "2026-09-27"
aliases: ["upgradeable contracts"]
related: [seal, wallet-safety, gatepilot]
sources:
  - title: "新手指南第 9 章"
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/15-chapter-09.md
    tier: community-reviewed-guide
---

## Definition
**Upgradeability** means an admin can still change implementation or parameters. For users: the thing you approved today may become different code tomorrow.
## How it works
- Core protocol contracts: check `isSealed` / `owner` (see [seal](seal.md)).
- Third-party tools (leasing, claim proxies, aggregators): assume upgradeable until proven otherwise.
## Boundaries / non-claims
- “Some official contracts are sealed” does not make your third-party approvals safe.
