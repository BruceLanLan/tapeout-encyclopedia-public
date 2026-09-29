# Shared labels · 两边对齐标签

Create these labels in **both** repos (Settings → Labels). Colors are suggestions only.

| Name | Color | Description |
| --- | --- | --- |
| `layer/guide` | `#0E8A16` | Task belongs in beginner-guide (PDF-backed) |
| `layer/encyclopedia` | `#1D76DB` | Task belongs in the public encyclopedia |
| `layer/data` | `#FBCA04` | Live metrics / tapeout.work |
| `sync` | `#D93F0B` | Cross-repo follow-up after a merge |
| `agent-draft` | `#BFDADC` | Agent-authored; needs human publish |
| `good-first-issue` | `#7057FF` | Small, well-scoped starter task |

## How to create (UI)

1. Open repo → **Issues** → **Labels** → **New label**.
2. Paste name / description / color from the table.
3. Repeat in the sister repo.

## How to use

- Put the layer label on every new Issue / PR.
- After a guide factual merge, open an encyclopedia Issue with `sync` + `layer/encyclopedia`.
- Agent PRs that still need a human to flip `status: published` get `agent-draft`.

Encyclopedia ops tracker: [#1](https://github.com/BruceLanLan/tapeout-encyclopedia-public/issues/1).
