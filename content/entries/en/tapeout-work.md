---
id: tapeout-work
slug: tapeout-work
locale: en
title: tapeout.work
summary: Public TapeOut analytics and evangelism terminal; cited here as the observed-data layer.
type: site
status: published
source_tier: observed-data
tags: [data, api, site]
updated: 2026-09-27
official_url: https://tapeout.work
related: [tapeout, beginner-guide, processor, bem]
sources:
  - title: tapeout.work
    url: https://tapeout.work
    tier: observed-data
data_refs:
  - name: updates
    url: https://tapeout.work/api/v1/updates
  - name: processors
    url: https://tapeout.work/api/v1/processors
  - name: events
    url: https://tapeout.work/api/v1/events
---

## Definition

**[tapeout.work](https://tapeout.work)** is a public-source analytics surface for TapeOut — processor mints, circuit activity, market and PoD-related snapshots. Observations are independent and method-disclosed; they are not the official registry itself.

## How it works

Encyclopedia entries link `data_refs` to `/api/v1/*` endpoints instead of freezing timestamps as eternal prose. Agents should prefer evidence-bearing feeds such as `/api/v1/events`.

## Boundaries / non-claims

- Observation is not official endorsement.
- The site does not connect wallets, trade, or claim on a user’s behalf.
