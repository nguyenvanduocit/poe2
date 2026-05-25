---
skill_name: poe-ninja2
description: Fetch poe.ninja POE2 build data via protobuf API — class/skill/item distribution, top builds, dictionaries cho POE2 leagues
version: 1.0.0
tags: [builds, poe-ninja, api, protobuf, poe2]
---

# poe.ninja POE2 Build Data (API)

poe.ninja POE2 uses **cùng protobuf API shape** với POE1 nhưng URL prefix là `/poe2/` thay vì `/poe1/`. No browser automation needed.

## Prerequisites

- `protoc` — `brew install protobuf`
- `python3` — for parsing
- `curl` — for fetching

## Quick Start

```bash
# List available POE2 leagues
.claude/skills/poe-ninja2/scripts/builds-api.sh leagues

# Build overview — class, skill, item, keystone distribution
.claude/skills/poe-ninja2/scripts/builds-api.sh overview                         # default: current POE2 SC league
.claude/skills/poe-ninja2/scripts/builds-api.sh overview runesofaldur            # specific league slug
.claude/skills/poe-ninja2/scripts/builds-api.sh overview vaal                    # previous league archive

# List dictionary entries (ID→name mappings)
.claude/skills/poe-ninja2/scripts/builds-api.sh dictionary class
.claude/skills/poe-ninja2/scripts/builds-api.sh dictionary gem
.claude/skills/poe-ninja2/scripts/builds-api.sh dictionary item
.claude/skills/poe-ninja2/scripts/builds-api.sh dictionary keypassive

# Show snapshot version
.claude/skills/poe-ninja2/scripts/builds-api.sh version runesofaldur

# Raw decoded protobuf (for debugging)
.claude/skills/poe-ninja2/scripts/builds-api.sh raw runesofaldur
```

## API Endpoints (POE2)

| Endpoint | Method | Response | Description |
|----------|--------|----------|-------------|
| `/poe2/api/data/index-state` | GET | JSON | League info, snapshot versions |
| `/poe2/api/builds/{version}/search?overview={snapshot}` | GET | Protobuf | Build data, dimensions, character list |
| `/poe2/api/builds/dictionary/{hash}` | GET | Protobuf | ID→name mapping for a dimension |
| `/poe2/api/economy/stash/current/currency/overview?league={league}&type=Currency` | GET | JSON | Economy/currency data |

### Key Difference vs POE1

**POE2 snapshots không có `type` field** — POE1 dùng `type=exp` (experience ladder) hoặc `type=depthsolo` (delve depth). POE2 chỉ có 1 ranking style, search URL không include `&type=...`.

`collect-builds.py` đã handle này: `snap.get("type")` trả None cho POE2, và `fetch_search` skip param nếu None.

### API Flow (giống POE1)

1. `index-state` → get `version` và `snapshotName`
2. `/builds/{version}/search?overview={snapshotName}` → protobuf with all build data
3. Response field 6 contains dictionary hashes (content-addressed, cacheable)
4. `/builds/dictionary/{hash}` → protobuf with ordered name list

### Search Response Structure (giống POE1)

Protobuf field layout identical to POE1 — same parser logic reuses.

### Dictionary Types (POE2 differences)

| Type | Description |
|------|-------------|
| `class` | POE2 ascendancy names (Lich, Infernalist, Blood Mage, Stormweaver, Chronomancer, Lightning Sorcerer, Acolyte of Chayula, Invoker, Martial Artist, Pathfinder, Deadeye, Ritualist, Amazon, Spirit Walker, Witchhunter, Gemling Legionnaire, Smith of Kitava, Titan, Warbringer, Tactician, Surveyor, ...) |
| `gem` | POE2 skill + support gem names — uncut/cut split + spirit gems |
| `item` | Unique + item type names — Remnant items 0.5+ |
| `keypassive` | POE2 keystone passive names |
| `mastery` | POE2 KHÔNG có mastery system tương đương POE1 — dimension này có thể vắng |
| `pantheon` | POE2 KHÔNG có pantheon — dimension này không tồn tại |
| `bandit` | POE2 KHÔNG có bandit quest — dimension này không tồn tại |
| `secondascendancy` | POE2 0.5+ có 2nd ascendancy — verify khi 0.5 launch |
| `atlasskill` | POE2 atlas passive names — overhauled trong 0.5 |

Khi POE2 không có dimension nào đó, `parse_overview` simply skip it (regex không match → empty list).

## Overview Output

Tương tự POE1 — class/skill/item/keystone distribution. POE2 đặc trưng:

- **Class Distribution** — 12 ascendancies launch 0.5 (3 base classes × 2 asc cũ + Spirit Walker + Martial Artist mới — verify khi launch)
- **Top Main Skills** — POE2 skill list khác hoàn toàn POE1 (Spark, Lightning Arrow, Ice Nova, Boneshatter trên Warrior, etc.)
- **Top Items** — Mageblood, Headhunter, Watcher's Eye chưa có ở POE2; meta uniques khác (Astramentis, The Three Dragons, The Auspex)
- **Top Keystones** — POE2 keystones khác POE1 (Chronomancer's Resolve, Infernal Memory, Eldritch Battery khác cost)

## Daily Snapshot — `collect-builds.py`

```bash
python3 .claude/skills/poe-ninja2/scripts/collect-builds.py
```

Auto-detects current POE2 main softcore league (POE2 ONLY — POE1 không touch). Snapshots build data + computes trends + builds top-DPS/EHP lists. Output vào `data/poe-ninja/poe2/<league>/`:

- `latest.json` — newest snapshot (overwrite)
- `snapshots/<YYYY-MM-DD>.json` — daily snapshot (idempotent rerun overwrites same date)
- `trends.json` — top rising/falling distributions vs. league day-1 / week-1 baselines

**Note:** poe-ninja skill POE1 sibling đã handle CẢ poe1 + poe2 trong cùng script (`GAMES = ("poe1", "poe2")`). Script này là POE2-only version cho khi user muốn fetch chỉ POE2 nhanh hơn. Output structure giống nhau (`data/poe-ninja/poe2/...`) nên không xung đột.

### Snapshot schema (`latest.json`)

Same fields as POE1: `game`, `league_url`, `league_name`, `snapshot_version`, `fetched_at`, `total_characters`, `distributions`, `top_characters`, `top_lists`.

#### `top_lists` field

Per-character data extracted từ value_lists trong search response. Sample ~100 chars top experience của league.

**POE2 caveat:** sample size có thể thấp hơn POE1 đáng kể trong early league (POE2 player base nhỏ hơn POE1). Trong sample <50 chars, "top DPS by skill" không meaningful — chỉ dùng overall top lists.

`top_lists` shape:
```jsonc
{
  "sample_size": 98,
  "with_dps_count": 65,           // POE2 PoB integration mới hơn → DPS coverage thấp hơn POE1
  "with_ehp_count": 92,
  "top_overall_dps": [...],
  "top_overall_ehp": [...],
  "by_skill": { ... }
}
```

### Caveats — POE2-specific

- **PoB sim coverage thấp hơn POE1** — poe.ninja's PoB integration cho POE2 còn mới; ~60-70% sample có DPS (so với 75-90% POE1). Đặc biệt build dùng new ascendancy (Spirit Walker, Martial Artist) hoặc 0.5 mechanic mới có thể chưa có DPS data.
- **`main_skill` classification có thể lệch** — POE2 archetype tagging chưa mature như POE1 (build dùng companion thay DPS skill chính có thể bị mistag là support gem).
- **`ehp` cap có thể khác** — chưa verify cap POE2; POE1 cap 10M. Update khi gặp giá trị thực.

## Caching

- `index-state` — cached 5 minutes
- Search results — cached 2 minutes
- Dictionaries — cached permanently (content-addressed by hash)
- Cache location: `tmp/poeninja-cache/` (shared với poe-ninja POE1)

## League URL Slugs (POE2)

Khi 0.5 launch (~2026-05-29):
- `runesofaldur` (main SC — guess, verify từ index-state)
- `runesofaldurhc` (HC)
- `runesofaldurssf` (SSF)
- `runesofaldurhcssf` (SSF HC)

Hiện tại (pre-0.5): `vaal` (0.4 league archive), `dawnofthehunt` (0.3), etc.

Verify chính xác slug bằng:
```bash
.claude/skills/poe-ninja2/scripts/builds-api.sh leagues
```

## Economy API (JSON, giống POE1)

```bash
# Currency prices
curl -sL "https://poe.ninja/poe2/api/economy/stash/current/currency/overview?league=Runes%20of%20Aldur&type=Currency"

# Unique weapons
curl -sL "https://poe.ninja/poe2/api/economy/stash/current/currency/overview?league=Runes%20of%20Aldur&type=UniqueWeapon"
```

POE2 item type list khác POE1 — Remnant, BattleAlloy, Verisium category thêm vào 0.5. Verify list types khi launch.

## File Structure

```
.claude/skills/poe-ninja2/scripts/
├── builds-api.sh          # CLI cho POE2 builds protobuf API
└── collect-builds.py      # Daily snapshot crawler POE2-only

data/poe-ninja/poe2/<league>/
├── latest.json            # Newest snapshot mirror
├── trends.json            # Top rising/falling vs. baselines
└── snapshots/<date>.json  # Daily idempotent snapshot
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "protoc not found" | `brew install protobuf` |
| "No snapshot found" | Check league slug với `builds-api.sh leagues` |
| "Failed to decode protobuf" | Ensure `protoc` supports `--decode_raw` (≥3.6) |
| Stale data | Delete `tmp/poeninja-cache/` (shared cache với POE1) |
| Empty class/skill distribution | POE2 build data delayed sau league launch ~24h |

## Cross-reference

POE1 sibling: `.claude/skills/poe-ninja1/SKILL.md`. Khi cần data CẢ poe1 + poe2 cùng lúc, dùng `python3 .claude/skills/poe-ninja1/scripts/collect-builds.py` (script đó loop qua `GAMES = ("poe1", "poe2")`).
