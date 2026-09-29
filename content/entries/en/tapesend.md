---
id: tapesend
slug: tapesend
locale: en
title: "TapeSend"
summary: "Encrypted messaging between circuit containers; spec id TAP-10; metadata public, body encrypted."
type: tool
status: published
source_tier: official
tags: [tool, yolo]
updated: "2026-09-27"
aliases: ["TAP-10", "DeWEB messaging"]
official_url: https://github.com/TapeOutProtocol/TapeKit
related: [container, tapekit, tape-url, deqq]
sources:
  - title: "新手指南第 7 章"
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/12-chapter-07-part-1.md
    tier: community-reviewed-guide
  - title: "TapeKit send/README"
    url: https://github.com/TapeOutProtocol/TapeKit/blob/main/send/README.md
    tier: official
  - title: "新手指南第 7 章结语"
    url: https://github.com/chickdady-svg/tapeout-beginner-guide/blob/main/docs/13-chapter-07-part-2.md
    tier: community-reviewed-guide
---

## Definition
**TapeSend** lets circuit containers message each other. Its spec id is **TAP-10**: each container gets an on-chain mailbox; encrypted bodies are written to a hub contract on the sender’s chain.
## How it works
- Endpoint IDs combine reserved bits + chain id + container address (guide: 32-byte structure).
- Metadata such as who messaged whom is public on-chain; bodies are encrypted.
- The guide notes web/desktop/mobile clients and fast community forks.
- TAP-10 may still live as the TapeKit `send/README` draft without a separate standards PDF.
## Boundaries / non-claims
- Public metadata means social graphs are observable.
- Cross-chain deployment status changes — trust the TapeKit repo and on-chain code.
