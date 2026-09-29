---
id: nand
slug: nand
locale: en
title: NAND
summary: The basic combinational transistor token in TapeOut; pairs with LATCH as a circuit primitive.
type: token
status: published
source_tier: official
tags: [token, primitive]
updated: 2026-09-27
aliases: []
related: [latch, transistor, circuit]
sources:
  - title: Beginner guide ch.2
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/06-chapter-02.md
    tier: community-reviewed-guide
---

## Definition

**NAND** is the NAND-gate transistor token in TapeOut. In the protocol narrative, NAND computes while LATCH remembers; together they can express arbitrary circuits.

## How it works

Transistors are typically ERC-1155 assets scoped to a processor and are not mixed across processors. On Canvas you wire them for free; on tape-out they are burned into a circuit NFT.

## Boundaries / non-claims

- This entry is not market advice for transistor trading.

## See also

- [LATCH](/entries/en/latch)
- [Transistor token](/entries/en/transistor)
