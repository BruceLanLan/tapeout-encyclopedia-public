---
id: tape-url
slug: tape-url
locale: zh
title: "tape://"
summary: TapeOut 链上网站地址格式；常经官方/网关打开，内容可存于电路容器。
type: concept
status: published
source_tier: official
tags: [concept, wave-b]
updated: "2026-09-27"
aliases: [".tape 名字", 链上网站]
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

**tape://** 是 TapeOut 链上网站的地址格式；名字常写作 `<电路ID>.<处理器编号>.tape`。

## How it works

站点文件可存放在对应电路的容器中。网关（如 tapekit.org）负责读取并打开。持有电路者可能替换内容。

## Boundaries / non-claims

- 域名与网关入口需核验；社区镜像不自动等于官方。
