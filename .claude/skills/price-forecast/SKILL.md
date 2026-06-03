---
skill_name: price-forecast
description: "Predict POE2 item/currency prices using Chronos-2 ML model. Collect price history from poe.ninja POE2 endpoint, forecast 7-day trends, output BUY/SELL/HOLD recommendations. Use when user asks about POE2 price predictions, investment advice, market trends, or 'should I buy/sell X in POE2'."
version: 1.0.0
tags: [prices, forecast, ml, chronos, economy, investment, poe2]
---

# POE2 Price Forecaster (Chronos-2)

Predict POE2 item + currency price movements using Amazon Chronos-2 time-series model. Fetches history từ poe.ninja POE2 endpoint, runs ML forecast, gives actionable BUY/SELL/HOLD recommendations.

**Currency unit:** POE2 dùng **Exalted Orb** làm trade default thay vì Chaos Orb của POE1. Tất cả price baseline trong skill này là Exalted.

## When to Use

- User asks "should I buy X in POE2?", "will X go up?", "POE2 price prediction"
- User asks về investment opportunities trong POE2 economy
- User wants best time to buy/sell expensive POE2 items
- User asks "giá X POE2 có tăng không?", "POE2 nên mua gì?", "đầu tư POE2"

## Scripts

### 1. Collect History (`collect.py`)

Fetches POE2 price history từ poe.ninja cho multiple POE2 leagues. Run first to build training data.

```bash
# Collect all POE2 leagues
python .claude/skills/price-forecast/scripts/collect.py

# Specific league only
python .claude/skills/price-forecast/scripts/collect.py --leagues "Runes of Aldur"

# Specific items only
python .claude/skills/price-forecast/scripts/collect.py --items "Divine Orb,Mageblood"
```

Output: `data/price-history/master.json` + `daily/<date>.json` snapshots.

### 2. Forecast (`forecast.py`)

Reads collected `master.json`, forecasts ALL items. Uses Chronos-2 nếu available, fallback to multiplicative trend analysis. Results sorted by confidence (signal-to-noise ratio).

```bash
# All items ≥5ex với ≥5 days history
python .claude/skills/price-forecast/scripts/forecast.py

# Top 20 movers
python .claude/skills/price-forecast/scripts/forecast.py --top 20

# Filter by item type
python .claude/skills/price-forecast/scripts/forecast.py --type Currency
python .claude/skills/price-forecast/scripts/forecast.py --type UniqueWeapon,UniqueArmour

# Specific items only
python .claude/skills/price-forecast/scripts/forecast.py --items "Divine Orb,The Auspex"

# Higher minimum price threshold (exalted)
python .claude/skills/price-forecast/scripts/forecast.py --min-price 50

# Custom prediction window
python .claude/skills/price-forecast/scripts/forecast.py --days 14

# JSON output (for piping)
python .claude/skills/price-forecast/scripts/forecast.py --json
```

## Output Format

```
       Item                          Now    Predict   Change                  Range
------------------------------------------------------------------------------------------
  BUY  The Auspex                   170ex      239ex   +40.5% (222—256ex)
  SELL Astramentis                 5,191ex   3,027ex   -41.7% (2,663—3,390ex)
  HOLD Divine Orb                   269ex      282ex    +5.0% (268—296ex)

--- Summary: 17 BUY | 13 SELL | 5 HOLD ---
```

**Note giá unit "ex" thay vì "c"** — POE2 economy denominate Exalted.

## Item Coverage (POE2)

**Currency & consumables only** (flippable items):
- `Currency`, `Fragment` — Exalted, Divine, Chaos, Annul, Mirror, fragments
- `Catalyst` — POE2-specific (cho amulet quality)
- `Waystone` — POE2 map equivalent (T1-T16)
- `Essence` — POE2 essence rework
- `DistilledEmotion` — POE2 0.4+ Beast crafting
- `Omen` — POE2 currency mod
- `Soul Core` — POE2 ultimatum drop crafting

**0.5-specific (Runes of Aldur):**
- `Remnant` — Runic Recipe slot items
- `Alloy` (13 mới) — Verisium runeforging
- `AncientRune` (13 mới) — Verisium runeforging
- `RuneRecipe` — recipe blueprints

**NOT collected by default:** Unique gear (weapons, armour, accessories, jewels) — flip inefficient cho gear.

Use `--type`, `--items`, `--min-price`, `--top` to filter.

## Collect Features

- **Progressive** — skips items đã collect today, only fetches new ones
- **Auto-select leagues** — only active POE2 leagues + ended without data
- **Merge & dedup** — gộp data cũ + mới, xóa trùng theo (league, item, variant, type, date)
- `--force` to re-fetch everything

## Model Details (giống POE1)

- **Model:** Amazon Chronos-2 (time-series foundation model)
- **Device:** Apple MPS (Metal Performance Shaders)
- **Covariates:** league_day, listings count
- **Quantiles:** 10% (pessimistic), 50% (median), 90% (optimistic)
- **Cross-league learning** — prepends previous POE2 league data (Vaal, Dawn of the Hunt) cho better patterns

**POE2 caveat:** league history còn ngắn (POE2 EA mới ~12 tháng), ít data so với POE1. Forecast confidence thấp hơn POE1 trong early phase mỗi league mới.

## Dependencies

```bash
pip install pandas numpy
# For ML forecast (optional, has fallback):
pip install torch chronos-forecasting
```

## Workflow

1. **Collect** history first if no recent data: `python .claude/skills/price-forecast/scripts/collect.py`
2. **Forecast**: `python .claude/skills/price-forecast/scripts/forecast.py`
3. Interpret results — BUY items predicted to rise >5%, SELL items predicted to drop >5%
4. Cross-reference với `/farming-strategy` cho farming-relevant items
5. Check `/trade` cho actual current listings trước khi acting

## POE2 League Timeline

| League | Start | End | Slug |
|--------|-------|-----|------|
| Runes of Aldur (0.5) | 2026-05-29 *(launch)* | TBD | `Runes of Aldur` |
| Vaal (0.4) | 2026-01-?? | 2026-05-29 *(transition)* | `Vaal` |
| Dawn of the Hunt (0.3) | 2025-09-?? | 2026-01-?? | `Dawn of the Hunt` |
| Early Access (0.1-0.2) | 2024-12-06 | 2025-09-?? | `Early Access` *(may not exist on poe.ninja)* |

**TODO khi 0.5 launch:** verify exact launch date + adjust the `LEAGUES` table trong `scripts/leagues.py` (single source — collect.py + forecast.py đều import từ đó). Verify slug khớp với poe.ninja URL bằng:
```bash
curl -sL "https://poe.ninja/poe2/api/data/index-state" | python3 -m json.tool | head -50
```

## Notes

- poe.ninja POE2 history limited (~30 days per league, same as POE1)
- Predictions probabilistic — use the range (low—high) not just median
- Early league data (<7 days) produces unreliable forecasts
- Chronos-2 first run downloads ~500MB model weights to `tmp/.hf_cache/`
- POE2 economy volatile hơn POE1 (mỗi 0.X patch reshape meta drastically) — recompute trends sau mỗi patch note
- **0.5 specific:** Runes of Aldur introduces 13 Alloy + 13 Ancient Rune currency types mới — first 7 days, prices wild oscillate; chỉ trust forecast sau day 14

## Boundary vs poe2scout

`price-forecast` = poe.ninja-sourced automated price pipeline (site badge index + Chronos-2 forecast). Nó own data collection + ML prediction loop trên poe.ninja POE2 endpoint. Cần spot-check một giá/volume/OHLC history thật của một item lẻ → dùng `/poe2scout` (poe2scout.com catalog + per-item history). Forecast nói "giá sẽ đi đâu", poe2scout nói "giá đang là bao nhiêu".
