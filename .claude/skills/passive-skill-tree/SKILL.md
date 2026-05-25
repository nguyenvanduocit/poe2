---
name: passive-skill-tree
description: Analyze, query, and retrieve POE2 passive skill tree data - lookup nodes, find paths, search stats, suggest optimal allocations (POE2 0.5+)
version: 1.0.0
license: MIT
compatibility: Requires bun runtime. Reads patch-versioned poe2db mirror under data/poedb/<patch>/passive-skill-tree/data_us.json.
metadata:
  author: poe-aio
  data-source: poe2db.tw
  status: live
allowed-tools: Bash(bun scripts/passive-skill-tree:*
---

# Passive Skill Tree Analytics — POE2

**Use this skill when:**
- User wants to analyze or optimize POE2 passive skill tree (Witch, Sorceress, Monk, Huntress, Warrior, Ranger, Mercenary, Druid, etc.)
- User asks về node/keystone/notable cụ thể trên POE2 tree
- User cần tìm node theo stats (e.g. "spirit", "minion damage", "lightning damage", "evasion")
- User cần shortest path giữa 2 node
- User muốn suggest cho allocation tối ưu
- Improving POE2 character's passive tree build

**Use POE1 skill `/passive-skill-tree`** khi user nói về POE1 (Mirage league, etc.). Hai skill tách biệt vì class roster + ascendancy + node id space khác nhau.

## Commands

```bash
bun .claude/skills/passive-skill-tree/scripts/analyze.ts lookup <query>
bun .claude/skills/passive-skill-tree/scripts/analyze.ts nearby <id> [count]
bun .claude/skills/passive-skill-tree/scripts/analyze.ts distance <id1> <id2>
bun .claude/skills/passive-skill-tree/scripts/analyze.ts path <from> <to>
bun .claude/skills/passive-skill-tree/scripts/analyze.ts analyze <nodes...>
bun .claude/skills/passive-skill-tree/scripts/analyze.ts validate <class> <nodes...>
bun .claude/skills/passive-skill-tree/scripts/analyze.ts search-stats <text>
bun .claude/skills/passive-skill-tree/scripts/analyze.ts suggest <start> <points>
bun .claude/skills/passive-skill-tree/scripts/analyze.ts types
bun .claude/skills/passive-skill-tree/scripts/analyze.ts classes
bun .claude/skills/passive-skill-tree/scripts/analyze.ts ascendancies <class>
bun .claude/skills/passive-skill-tree/scripts/analyze.ts export
```

Command surface matches `/passive-skill-tree` byte-for-byte; only the underlying class roster + node id space differ.

**`analyze`** does real stat aggregation: it parses the number out of every stat line, sums lines that share the same wording (template), and groups totals by category (life / energy shield / mana / spirit / resistance / defence / attributes / damage / critical / speed / recovery). It is additive bucketing, not a multiplicative damage engine — for true DPS/EHP use `/pob`.

**`validate <class> <nodes...>`** checks an allocation is actually reachable: main-tree nodes must connect back to the class start, ascendancy nodes back to their own ascendancy start (the two graphs are disjoint in tree topology — the game bridges ascendancy via Trials, not edges). Reports orphan (disconnected) nodes and the passive + ascendancy point cost.

**POE2 edge schema differs from POE1** — POE2 stores edges in `connections[]` (directed, asymmetric) while POE1 uses `out`/`in`. The shared adjacency builder unions every edge in both directions and drops the virtual `root` hub, so pathfinding (`path`, `suggest`, `validate`) works on both without per-game branching.

## Options

| Flag | Description |
|------|-------------|
| `--force-update` | Re-download tree data from poe2db.tw (overwrites cache for the selected patch) |
| `--patch <X.Y.Z>` | Use specific POE2 patch label (default: newest semver dir under `data/poedb/`) |
| `--source-version <X.Y>` | Override poe2db's internal version counter (default `4.4`, covers POE2 0.5.x). Bump only if poe2db publishes under a new internal path. |

## Data Source

- **poe2db.tw passive-skill-tree mirror** — patch-versioned, schema = grindinggear unified export (same shape as POE1).
- Direct URL: `https://poe2db.tw/data/passive-skill-tree/<internal-X.Y>/data_us.json`
- Local cache: `<project-root>/data/poedb/<X.Y.Z>/passive-skill-tree/data_us.json`
- Auto-resolve: skill scans `data/poedb/` and picks the highest semver folder. Override with `--patch <X.Y.Z>`.
- Refresh options:
  - Full mirror (HTML + JSON + everything under `/us/`): `./.claude/skills/poedb/scripts/download.sh <patch>`
  - Tree-only direct fetch (this skill): `bun .claude/skills/passive-skill-tree/scripts/analyze.ts <cmd> --force-update`

**poe2db version quirk:** the URL counter does NOT track POE2 patch numbers. POE2 0.5.x maps to internal `4.4` (per `data/poedb/0.5.0/passive-skill-tree/meta.json` caveat — `0.5` returns 404 upstream). When poe2db bumps, pass `--source-version <X.Y>` once and update `POEDB_DEFAULT_SOURCE_VERSION` in `scripts/analyze.ts`.

## POE2 vs POE1 — what to keep in mind

- **No Cluster Jewel / Threshold Jewel system** như POE1 — POE2 jewel slot ít hơn và không expandable.
- **Class roster (POE2 0.5)**: Marauder, Witch, Ranger, Duelist, Shadow, Templar (legacy carry-over, đa số `[DNT-UNUSED]` placeholder cho POE2), cộng Warrior, Sorceress, Huntress, Mercenary, Monk, Druid (POE2-native).
- **Ascendancy ids dạng `Witch3` (Lich), `Witch3b` (Abyssal Lich), `Huntress2` (Spirit Walker — mới 0.5), `Monk1` (Martial Artist — mới 0.5).** Display name khác id — dùng id khi scripting.
- **Spirit pool** — POE2-specific resource cho skill reservation (companions, auras, persistent skills). Dùng `search-stats "spirit"` để tìm +Max Spirit nodes + reservation-efficiency notables.
- **Pre-launch caveat (POE2 0.5)**: tại 2026-05-24 patch 0.5 chưa ship (~29/05). Spirit Walker có 1 real notable + 8 `[DNT-UNUSED]` placeholder; Martial Artist 0 real + 8 placeholder. Chạy `--force-update` sau launch để pull final nodes.

## Value Scoring Heuristic (inherited từ POE1)

Cùng weight: Maximum Life/Mana +5, Critical Strike +4, Spell/Attack Damage +3, etc. POE2-specific stat (Spirit, +Max Spirit) hiện rơi vào catch-all +1 — re-tune trong `estimateNodeValue()` khi đủ build data. Notable ×1.5, Keystone ×3, Jewel Socket +2.

## Typical Workflows

1. **Find best life/ES nodes**: `search-stats "maximum life"` hoặc `search-stats "energy shield"` → pick high-value → `path` để reach.
2. **Spirit budgeting cho minion / companion build**: `search-stats "spirit"` enumerate +Spirit nodes + reservation-efficiency notables.
3. **Compare ascendancy choice**: `ascendancies "Witch"` → so sánh Infernalist / Blood Mage / Lich / Abyssal Lich notables.
4. **Optimize allocation**: `analyze <current-nodes>` cho value score, sau đó `suggest` từ frontier trong budget còn lại.

## URL Encoding — NOT supported

POE2 official client export format chưa public-decoded. Command `url` inherit POE1 wiring (V6 base64 với POE1 class id map) và sẽ tạo link POE2 INVALID nếu invoke. Treat as stub. Khi community decode POE2 format (inspect PoB2 fork export hoặc reverse-engineer độc lập), update `url` handler.

## Status

- **Live** — data verified cho POE2 0.5.0 (4976 nodes, 12 classes, 1251 notables, 33 keystones, 12 jewel sockets).
- Evidence của last data fetch: `data/poedb/0.5.0/passive-skill-tree/meta.json`.
