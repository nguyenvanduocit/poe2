# CLAUDE.md — PoE 2 Workspace

**PoE 2 League Gameplay Workspace** — AI skills, content/notes, scripts cho Path of Exile 2 mỗi league/patch. POE1 sống ở sibling project `../poe1/` — workspace này KHÔNG handle POE1.

Shared instructions (Current Context, Rules, Quantitative Reasoning, Content Folder Boundaries, Writing Voice, WikiLink) sống ở `../CLAUDE.md`. Claude Code auto-load file này TRƯỚC, rồi walk-up file parent.

File này chỉ chứa **workspace-specific bindings**: slash command aliases, frontmatter convention, pointer scripts. Tất cả đều POE2 native — không cross-game.

---

## Slash Command Aliases

Mọi command trong workspace này trỏ POE2. Không có command POE1 — muốn dùng POE1 thì `cd ../poe1/`.

- `/pob` → PoB2 calculator (community fork POE2)
- `/poewiki` → wiki mirror poe2wiki.net (qua `data/wiki/`)
- `/poedb` → database mirror poe2db.tw per patch (qua `data/poedb/<patch>/`)
- `/passive-skill-tree` → passive tree
- `/atlas-tree` → atlas passive tree
- `/trade` → trade qua CDP Relay
- `/gear-upgrade` → tìm gear upgrade (CDP Relay + PoB2 sim)
- `/poe-ninja` → popular builds + item prices
- `/farming-strategy` → analyze farming strategy
- `/lootfilter` → create/modify loot filter (poe2filter.com)
- `/map-mod-filter` → decode/generate stash regex cho waystone + tablet
- `/build-creator` → tạo build POE2 từ request + targets, materialize PoB2 code, verify headless, publish link

---

## Gameplay Workflows

### Check character status

```
.claude/skills/pob/scripts/scripts/analyze.sh "https://poe.ninja/poe2/builds/<league>/character/<account>/<charname>"
  # hoặc mobalytics.gg/poe-2/builds/... hoặc pobb.in link
  → stats, gear, gems, keystones (xem skill /pob)
```

Lưu ý: POE2 hiện chủ yếu dùng poe.ninja snapshot / pobb.in / mobalytics — chưa có fetch trực tiếp bằng tên character như POE1.

### Analyze a build

`/pob <url>` — accept pobb.in, mobalytics.gg/poe-2/..., poe.ninja/poe2/...

### Look up game mechanics

```
/poewiki <query>          → search wiki mirror (poe2wiki.net)
/poedb <patch>            → database mirror (poe2db.tw) per patch
/passive-skill-tree       → passive nodes, paths, stats (0.5+)
/atlas-tree               → atlas passive tree (0.5+)
```

### Fetch release notes / patch notes

```
./.claude/skills/poewiki/scripts/release-notes/fetch.sh             # latest (auto-detect from Version_history)
./.claude/skills/poewiki/scripts/release-notes/fetch.sh 0.5.0       # specific version
```

- Lightweight fetch qua `markitdown` → clean text-only Markdown (không hàng trăm icon/image).
- Output saved under `data/release-notes/Version_X.Y.Z.md`, tracked in git.
- Always tạo `latest.md` symlink trong cùng folder cho quick access.
- Dùng khi cần exact wording của changes cho league/patch mới (đặc biệt trước khi viết mechanics hoặc farming strategy notes).

### Trading & pricing

```
/trade <search>           → search trade qua CDP Relay (browser API, safest)
/gear-upgrade             → tìm gear upgrade qua CDP Relay + PoB2 sim
/poe-ninja                → popular builds, item prices
```

### Farming & filters

```
/farming-strategy → analyze farming strategy
/lootfilter       → create/modify loot filter (poe2filter.com)
/map-mod-filter   → decode/generate waystone + tablet regex
```

### Build authoring

```
/build-creator → tạo build POE2 từ request + targets, materialize PoB2 code, verify trong PoB2 headless, publish link
```

### TFT Discord

```
discord https://discord.com/channels/645607528297922560/1143637598313652344
```

---

## Frontmatter Convention

Áp dụng PoB Coverage Disclosure (xem `../CLAUDE.md ## Quantitative Reasoning`) với field tên neutral **`pob_coverage`** trong build note frontmatter:

```yaml
---
patch: 0.5.0
pob_coverage: PARTIAL
---
```

Field này signal PoB2 community fork đã model đủ league-mới mechanic chưa (`FULL` / `PARTIAL` / `NA`). POE2 PoB fork hay trễ patch — flag `PARTIAL` cho build dùng companion AI, Runeforging, Runic Ward, Kalguuran skill, Spirit Walker / Martial Artist mechanic chưa được community fork support.

---

## Data Paths

Mọi data persistent sống dưới `data/` (xem `../CLAUDE.md ## Rules` cho canonical layout):

- `data/wiki/` — wiki mirror poe2wiki.net (goscrape)
- `data/poedb/<patch>/` — database mirror poe2db.tw per patch
- `data/release-notes/Version_X.Y.Z.md` — patch notes (+ `latest.md` symlink)
- `data/atlas-tree/atlas-tree.json` — GGG atlas tree export
- `data/poe-ninja/<league>/{latest,trends}.json + snapshots/` — economy snapshot
- `data/price-history/{daily/,master.json}` — currency/item price time series cho price-forecast
- `data/map-mods/<corpus>-mods-X.Y.json` — waystone/tablet mod corpus
- `data/pob-source/` — PathOfBuildingCommunity clone (~572M, gitignored, fetch qua PoB fetch script)
- `data/character-exports/` — per-character JSON export (gitignored, instance data)
