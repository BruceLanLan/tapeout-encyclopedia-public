---
id: processor
slug: processor
locale: en
title: Processor
summary: A factory-created “transistor issuer” that mints its own NAND/LATCH set and hosts circuits.
type: concept
status: published
source_tier: official
tags: [concept, registry]
updated: 2026-09-27
aliases: []
related: [circuit, nand, latch, tapeout, factory, behemoth]
sources:
  - title: Beginner guide ch.2
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/06-chapter-02.md
    tier: community-reviewed-guide
data_refs:
  - name: processors
    url: https://tapeout.work/api/v1/processors
---

## Definition

In TapeOut, a **processor** behaves like a transistor factory: created by a factory contract, issuing its own transistor set and hosting circuits.

## How it works

Creation parameters can include supply, mint price, and disclosed splits. Which processors qualify for PoD mining follows official rules. Prefer live registry APIs over copying counts from older articles.

## Boundaries / non-claims

- Historical counts go stale; use the registry / tapeout.work.
- Upgradeability of contracts is a safety-relevant disclosure — read official sources before acting.
