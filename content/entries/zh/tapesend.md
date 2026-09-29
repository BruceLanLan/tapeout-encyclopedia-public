---
id: tapesend
slug: tapesend
locale: zh
title: "TapeSend"
summary: "电路容器之间的加密消息层；规范编号 TAP-10；元数据公开、正文加密。"
type: tool
status: published
source_tier: official
tags: [tool, yolo]
updated: "2026-09-27"
aliases: ["TAP-10", "DeWEB 消息层"]
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
**TapeSend** 让电路容器互发消息。其规范编号为 **TAP-10**：给容器配“链上信箱”，正文加密写入发件链上的中枢合约。
## How it works
- 端点号（Endpoint ID）由保留位 + 链 ID + 容器地址构成（指南记述为 32 字节结构）。
- 谁给谁发、何时发等元数据在链上公开；正文加密。
- 指南记载已有网页/桌面/移动客戶端，并出现社区二次客户端。
- 写作时 TAP-10 仍可能以 TapeKit `send/README` 草案形式存在，未必有独立标准文本。
## Boundaries / non-claims
- 元数据公开意味着社交图可被观察。
- 跨链部署状态会变化，以 TapeKit 仓库与链上代码为准。
