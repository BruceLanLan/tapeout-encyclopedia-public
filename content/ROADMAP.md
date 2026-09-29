# Content roadmap · 内容路线图

Open issues welcome. Claim via Issue → PR.

## Wave A — Core protocol

- [x] tapeout, nand, latch, transistor, circuit, processor
- [x] bem, pod, tapekit
- [x] beginner-guide, tapeout-work

## Wave B — Mechanics

- [x] canvas, tape-out, container, tape-url, factory, behemoth, ref

## Wave C — Official-adjacent

- [x] hashport, tapehub, tapesend (TAP-10)
- [ ] deeper per-chain deployment matrix for TapeSend hubs

## Wave D — Community tools

- [x] tapeout-market, firsto, tapeoutscan
- [x] siliconx, gatepilot, tapeout-club
- [x] dune-mining-intelligence, deqq, tapeout-build
- [x] tapechat / tapqq / tapeout.space / tapestar (opt-in)
- [x] tapelens
- [x] verifier / 芯市 / TapeWeb
- [ ] tapeout.vip / tapeout.link / container factory (id.tapeout.link)

## Wave E — Safety

- [x] wallet-safety
- [x] seal
- [x] upgradeability
- [x] spoof-token
- [ ] incident-log template (dated, sourced event cards)

## Wave F — Locales

- [x] zh + en parity for seeded Waves A–E
- [ ] ja / ko / es stubs when translators show up

## Wave G — Public GitHub directory / agent UX

- [x] `npm run validate:content`
- [x] `npm run regen:indexes`
- [x] GitHub Actions CI
- [x] JSON Schema export of entry frontmatter for external agents (`schemas/entry.schema.json` + `specs/07-json-schema.md`)
- [x] graph DOT export script (`npm run export:graph` → `content/graph/graph.dot`; SVG via local Graphviz)
- [x] Seed `content/public-github/repositories.json` with anonymously verified public repositories
- [x] Add a verifier that refuses GitHub credentials and checks `private: false` plus anonymous Git readability
- [ ] Review and merge the first community-submitted public repository
- [ ] Add public repositories from more independent maintainers
- [ ] Add optional topic and category metadata after human review

When adding community tools: public GitHub URL + non-official label + primary source. Run
`npm run verify:public-github` without GitHub credentials before opening a PR.
