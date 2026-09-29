---
id: container
slug: container
locale: zh
title: 电路容器
summary: 绑定电路 NFT 的 ERC-6551 链上账户；无私钥，持有电路者控制。
type: concept
status: published
source_tier: community-reviewed-guide
tags: [concept, wave-b]
updated: "2026-09-27"
aliases: [容器, ERC-6551]
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

**电路容器**是绑定在电路 NFT 上的链上账户（ERC-6551）。它没有独立私钥：谁持有该电路，谁控制容器。

## How it works

容器可存放资产、挂载 tape:// 站点文件、参与消息端点等能力（以官方当期功能为准）。替换站点内容的权限随电路持有权转移。

## Boundaries / non-claims

- 打开未知 tape:// 站点前，核对电路持有者与入口。
- 向容器转入资产前，确认你理解持有权变更的后果。
