---
id: transistor
slug: transistor
locale: en
title: Transistor token
summary: Umbrella term for NAND/LATCH building-block tokens burned when a circuit is taped out.
type: concept
status: published
source_tier: community-reviewed-guide
tags: [concept, token]
updated: 2026-09-27
related: [nand, latch, circuit, processor]
sources:
  - title: Beginner guide ch.2
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/06-chapter-02.md
    tier: community-reviewed-guide
---

## Definition

In TapeOut, a **transistor token** is a building-block asset (typically NAND or LATCH) used to assemble circuits. The manifesto phrasing is “one token, one transistor.”

## How it works

Canvas use does not burn tokens; tape-out burns the transistors used in the design and mints an irreversible circuit NFT. Transistors are usually issued per processor.

## Boundaries / non-claims

- “Transistor” is a protocol metaphor, not a physical semiconductor device.
