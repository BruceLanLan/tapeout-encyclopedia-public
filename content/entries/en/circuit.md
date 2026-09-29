---
id: circuit
slug: circuit
locale: en
title: Circuit
summary: The ERC-721 circuit NFT minted when transistors are burned at tape-out.
type: concept
status: published
source_tier: official
tags: [concept, nft]
updated: 2026-09-27
aliases: ["Circuit NFT"]
related: [transistor, processor, pod, tapekit, tape-out, container, ref]
sources:
  - title: Beginner guide ch.2
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/06-chapter-02.md
    tier: community-reviewed-guide
data_refs:
  - name: market overview
    url: https://tapeout.work/api/v1/market-overview
---

## Definition

A **circuit** is the ERC-721 NFT created when transistors are burned at tape-out. It carries on-chain verifiable logic.

## How it works

A circuit belongs to a processor and is often written as `#ID@processor`. Holding the circuit controls its container. Whether a design qualifies for mining (for example REF rules) follows current official PoD rules.

## Boundaries / non-claims

- Tradability is not a yield guarantee.
- For sales and density metrics, use tapeout.work APIs.
