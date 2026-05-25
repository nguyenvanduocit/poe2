---
skill_name: poe2scout
description: Fetch POE2 market data from poe2scout.com — price, 7-day history, volume cho Currency + Unique items. Realm=poe2 (POE2 workspace). Use when user asks giá/price/volume/history items hoặc cần snapshot economy.
version: 1.0.0
tags: [economy, poe2scout, api, price, history, volume, poe2]
---

# poe2scout — POE2 market data (price + history + volume)

API: `https://api.poe2scout.com` — public REST API, **no auth required**, JSON, CORS-enabled. POE2 Scout track cả Currency (15 categories) lẫn Unique items (7 categories) cho POE2.

**Realm constants for this workspace:**
- Realm: `poe2`
- Auto-detected default league: current softcore (vd `vaal` cho Fate of the Vaal patch hiện tại). Override bằng env `POE2SCOUT_LEAGUE=<slug>`.

> **Note:** Sibling workspace `../poe1/` có skill poe2scout song song nhưng realm=`pc` và chỉ Currencies (POE1 không có Uniques trên scout). Hai workspace KHÔNG share data — mỗi cái có `data/poe2scout/<league>/` riêng.

## Why poe2scout (vs poe-ninja đã có)

| Need | poe2scout | poe-ninja |
|---|---|---|
| POE2 currency price + history + volume | ✅ Native, 7d granular | ⚠️ POE2 coverage thưa, không history |
| POE2 unique item price | ✅ Đầy đủ | ❌ |
| Build/character ladder | ❌ | ✅ Native |

→ Hai skill bổ sung nhau. Dùng poe2scout cho **price/economy**, poe-ninja cho **build distribution**.

## Quick start

```bash
# List leagues (auto-detect current softcore)
.claude/skills/poe2scout/scripts/api.sh leagues

# List categories có gì
.claude/skills/poe2scout/scripts/api.sh categories

# Top 25 currency items by current price
.claude/skills/poe2scout/scripts/api.sh list currency

# Top 10 weapon uniques
.claude/skills/poe2scout/scripts/api.sh list weapon vaal 10

# Lookup 1 item (price + 7d history + volume)
.claude/skills/poe2scout/scripts/api.sh item "mirror"
.claude/skills/poe2scout/scripts/api.sh item "the auspex"

# Reference currency rates (chaos ↔ divine ↔ exalted)
.claude/skills/poe2scout/scripts/api.sh reference

# Bulk snapshot tất cả categories (~30s, ~5MB), compute trend
.claude/skills/poe2scout/scripts/api.sh snapshot
```

## Endpoint reference

Base: `https://api.poe2scout.com`, realm path segment = `poe2`.

| Endpoint | Returns |
|---|---|
| `GET /Realms` | List realms (`pc`, `poe2`) |
| `GET /poe2/Leagues` | League list with `ShortName`, `IsCurrent`, `DivinePrice`, `ChaosDivinePrice` |
| `GET /poe2/Leagues/{league}/Items/Categories` | `UniqueCategories[]` + `CurrencyCategories[]` |
| `GET /poe2/Leagues/{league}/ReferenceCurrencies` | Reference currencies (chaos, divine, exalted) — `RelativePrice` |
| `GET /poe2/Leagues/{league}/Currencies/ByCategory?Category={c}&Page={p}&PerPage={n}` | Currency items paginated |
| `GET /poe2/Leagues/{league}/Uniques/ByCategory?Category={c}&Page={p}&PerPage={n}` | Unique items paginated |

**Per-item schema (cùng cho Currency + Unique, có vài field khác biệt nhỏ):**

```jsonc
{
  "ApiId": "mirror",                        // stable slug
  "Text": "Mirror of Kalandra",             // display name
  "CategoryApiId": "currency",
  "IconUrl": "https://web.poecdn.com/...",
  "ItemMetadata": {                         // optional, có lúc null
    "name": "...", "base_type": "...",
    "stack_size": 1, "max_stack_size": 10,
    "description": "...", "effect": [...]
  },
  "PriceLogs": [                            // 7 day daily snapshots, newest first
    { "Price": 1541316.22, "Time": "2026-05-25T00:00:00", "Quantity": 686 },
    { "Price": 1631410.28, "Time": "2026-05-24T00:00:00", "Quantity": 785 }
  ],
  "CurrentPrice": 1830204.91,               // realtime now
  "CurrentQuantity": 60,                    // volume listed now
  // Uniques-only:
  "Name": "Palm of the Dreamer",
  "Type": "Shrine Sceptre",
  "IsChanceable": false
}
```

Price quoted in default currency của realm — POE2 dùng **Exalted Orb** làm base (1 Divine ≈ 190 Exalted at Vaal launch). POE1 dùng **Chaos Orb**. Confirm bằng `api.sh reference`.

## Categories có sẵn (Vaal league snapshot 2026-05)

**Currency** (15): `currency`, `fragments`, `runes`, `essences`, `ultimatum` (Soul Cores), `delirium`, `expedition`, `breach`, `azurite`, `sanctum`, `talisman`, `omens`, `socketables`, `corrupted`, `vaalstones`.

**Unique** (7): `weapon`, `armour`, `accessory`, `flask`, `jewel`, `map`, `relic` (or similar — confirm runtime).

Run `api.sh categories` để lấy danh sách live (poe2scout có thể đổi).

## Data layout

```
data/poe2scout/<league>/
├── latest.json                # Merged dump (items + metadata) — ~5-10MB
├── trends.json                # Top 20 gainer/loser/liquid/illiquid (7d)
└── snapshots/<YYYY-MM-DD>.json
                               # Daily snapshot, idempotent rerun overwrite,
                               # keep 30 most recent
```

Snapshot script gentle-paces requests (100ms gap) — không hammer server. Cache HTTP responses 5 phút trong `tmp/poe2scout-cache/` cho ad-hoc CLI calls.

## Confidence labels

- **HIGH** — `CurrentPrice` từ snapshot < 24h. Use for build cost estimate, gear shopping budget.
- **MEDIUM** — `PriceLogs[0]` (yesterday's daily). OK cho trend pattern, không OK cho buy/sell decision.
- **LOW** — `PriceLogs[-1]` (7 days ago) — chỉ dùng so sánh trend, không quote như giá hiện tại.

Khi quote giá trong build/farming note → **luôn kèm timestamp** (`fetched_at` từ latest.json hoặc `Time` của price log).

## Use cases (workflow)

### Quick price check khi user hỏi "giá X"
```bash
.claude/skills/poe2scout/scripts/api.sh item "X"
```
→ in current price, 7d history, Δ%, volume. Đủ để answer "giá hiện tại + có tăng/giảm tuần qua không + thanh khoản ra sao".

### Build cost estimate
1. Run snapshot 1 lần đầu phiên: `api.sh snapshot` (~30s).
2. Sau đó `api.sh item <gear>` instant từ cache snapshot.
3. Tổng cost = sum `CurrentPrice` per item, convert qua `reference` để có price chung.

### Liquidity check trước khi flip
Vào `data/poe2scout/<league>/trends.json` field `low_liquid` — item priced cao nhưng `avgVolume` thấp = giá ảo, khó bán. Tránh.

### Detect economy shift (post-patch / post-event)
Run snapshot daily. Compare `trends.json` qua 2-3 ngày. Sudden mover thường flag league mechanic change hoặc whale dumping.

## Caveats

- **Server pacing**: snapshot fetch ~100 categories × multi-page = ~50-150 requests. Script đã 100ms gap. Đừng spam.
- **POE1 limitation**: workspace song song (../poe1/) chỉ có Currencies — UniqueCategories rỗng cho realm `pc`. Skill code đã handle (skip Uniques nếu rỗng).
- **Price spikes from low volume**: 1-2 listing tạo % swing lớn. `trends.json` đã filter `avgVolume >= 5` cho gainers/losers, nhưng vẫn double-check volume trước khi báo "price tăng 200%".
- **Snapshot stale 24h max**: rerun nếu price feed > 24h old (check `fetched_at`).

## File structure

```
.claude/skills/poe2scout/
├── SKILL.md           # this file
└── scripts/
    ├── api.sh         # bash CLI dispatcher (leagues/categories/list/item/reference/snapshot)
    └── snapshot.ts    # bun TypeScript bulk-dump + trend computation
```

## Troubleshooting

| Issue | Fix |
|---|---|
| `curl ... HTTP 404` | Check league slug bằng `api.sh leagues`. Slug case-sensitive (`vaal` not `Vaal`). |
| `bun: command not found` | `brew install oven-sh/bun/bun` |
| Snapshot quá chậm (>2 phút) | Server có thể rate-limit. Tăng `REQUEST_GAP_MS` trong snapshot.ts từ 100 → 250. |
| Stale cache | `rm -rf tmp/poe2scout-cache/` hoặc `POE2SCOUT_NOCACHE=1 api.sh ...` |
| `item` không tìm thấy | Snapshot có thể thiếu item đó (ItemMetadata null). Thử exact ApiId từ `api.sh list <category>`. |
