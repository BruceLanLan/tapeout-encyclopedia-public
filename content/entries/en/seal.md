---
id: seal
slug: seal
locale: en
title: "Seal"
summary: "Admin permanently renounces upgrade rights; after sealing, rules cannot change. Verify on-chain isSealed/owner."
type: concept
status: published
source_tier: community-reviewed-guide
tags: [concept, yolo]
updated: "2026-09-27"
aliases: ["封印", "isSealed"]
related: [pod, bem, wallet-safety, upgradeability]
sources:
  - title: "新手指南第 9 章"
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/15-chapter-09.md
    tier: community-reviewed-guide
  - title: "速查术语表"
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/04-quick-reference.md
    tier: community-reviewed-guide
---

## Definition
**Seal**: after `seal()`, upgrade rights are permanently renounced; `isSealed()` becomes true and `owner` is the zero address.
## How it works
The guide reports read-only checks at its writing time for some contracts (e.g. PodMining and the transistor market sealed) and stresses: **do not read “some sealed” as “every contract renounced”**. Re-check via a block explorer’s Read Contract UI.
## Boundaries / non-claims
- Seal state can change over time until sealed; after sealing it should not — still verify live.
- A sealed protocol rule set does not secure CEX hot wallets or upgradeable third-party tool contracts.
