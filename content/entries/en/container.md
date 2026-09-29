---
id: container
slug: container
locale: en
title: Circuit container
summary: An ERC-6551 on-chain account bound to a circuit NFT; no private key — circuit holder controls it.
type: concept
status: published
source_tier: community-reviewed-guide
tags: [concept, wave-b]
updated: "2026-09-27"
aliases: [container, ERC-6551]
related: [circuit, tape-url, tapekit, hashport]
sources:
  - title: 新手指南第 4 章
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/08-chapter-04.md
    tier: community-reviewed-guide
  - title: 速查术语表
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/04-quick-reference.md
    tier: community-reviewed-guide
---

## Definition

A **circuit container** is an ERC-6551 account bound to a circuit NFT. It has no separate private key: whoever holds the circuit controls the container.

## How it works

Containers may hold assets, host tape:// site files, and participate in messaging endpoints (follow current official capabilities). Authority to replace site files moves with circuit ownership.

## Boundaries / non-claims

- Before opening unknown tape:// sites, check the circuit holder and entry point.
- Understand ownership-transfer consequences before sending assets into a container.
