---
id: tape-url
slug: tape-url
locale: en
title: "tape://"
summary: Address format for TapeOut on-chain sites; often opened via gateway; files may live in a circuit container.
type: concept
status: published
source_tier: official
tags: [concept, wave-b]
updated: "2026-09-27"
aliases: [".tape name"]
official_url: https://tapekit.org
related: [container, tapekit, hashport, circuit]
sources:
  - title: 新手指南第 4 章
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/08-chapter-04.md
    tier: community-reviewed-guide
  - title: tapekit.org
    url: https://tapekit.org
    tier: official
---

## Definition

**tape://** is the address format for TapeOut on-chain sites; names often look like `<circuitId>.<processorId>.tape`.

## How it works

Site files can live in the circuit’s container. Gateways such as tapekit.org read and open them. The circuit holder may replace contents.

## Boundaries / non-claims

- Verify gateway domains; community mirrors are not automatically official.
