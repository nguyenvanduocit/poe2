---
skill_name: gear-upgrade2
description: "Find optimal POE2 gear upgrades within budget — searches trade2 endpoint via CDP Relay (browser API), simulates in PoB2, checks attribute + spirit requirements. Use when user says 'upgrade POE2 gear', 'find POE2 upgrade', 'optimize my POE2 character', 'what should I buy for POE2', or wants to improve their POE2 character's equipment."
version: 1.0.0
tags: [gear, upgrade, trade, pob, simulation, optimization, poe2, cdp-relay]
---

# POE2 Gear Upgrade Optimizer

End-to-end pipeline: analyze POE2 character → identify weak slots → search trade2 (via CDP Relay) → simulate in PoB2 → compare → present to user.

**ALL trade searches go through CDP Relay** (`cdp.evaluate_async(fetch(...))`) — never call GGG API directly. Account `hopthuxacnhan#3062` đã từng bị flag → respect rate limit.

## Core Philosophy (giống POE1)

**NEVER think slot-by-slot.** Always think in COMBINATIONS. Given a budget, optimal upgrade often swaps 2-4 pieces together:
- Resistance can be redistributed across slots
- Attribute requirements create hard constraints spanning multiple items
- **POE2 thêm Spirit constraint** — spirit reservation từ gear (helm/amulet/body) phải đủ cho support setup; thay 1 gear có spirit modifier có thể bể skill rotation

**NEVER whisper automatically.** Present full upgrade plan với cost breakdown. Only whisper after explicit user confirmation.

## Quick Start

```
1. Fetch character:     .claude/skills/pob2/scripts/scripts/analyze.sh "<mobalytics/ninja/pobb URL>"
2. Attribute audit:     check Str/Dex/Int vs requirements + Spirit reservation
3. Map attribute sources: which gear provides which attributes? Which provides spirit?
4. Identify weak slots: analyze equipment mods, resistances, life, ES
5. Search trade2:        CDP Relay cdp.evaluate_async(fetch(...)) for MULTIPLE slots
6. Evaluate combos:     calculate NET change across all slots
7. Simulate in PoB2:     .claude/skills/pob2/scripts/scripts/analyze.sh re-run với new gear in build
8. Present plan:        show combo table to user, wait for confirmation
```

## Step 1: Analyze Current Character

POE2 chưa có direct character-name fetch như POE1 `pob.sh fetch`. Dùng snapshot URL:

```bash
# Analyze build from poe.ninja / mobalytics / pobb.in
.claude/skills/pob2/scripts/scripts/analyze.sh "https://poe.ninja/poe2/builds/runesofaldur/character/<account>/<charname>"
.claude/skills/pob2/scripts/scripts/analyze.sh "https://mobalytics.gg/poe-2/builds/..."
.claude/skills/pob2/scripts/scripts/analyze.sh "https://pobb.in/<id>"
```

Output gồm stats, gear, gems, keystones. Lưu lại JSON/PoB export để feed back vào step 7.

### POE2-specific Audit Checklist

Compared với POE1, POE2 thêm 3 constraint phải check:

1. **Spirit budget** — total Spirit (từ Str/helm/amulet/body) phải ≥ tổng spirit cost của reserve skills (auras, banner, spectre/companion). Một upgrade làm mất 30 Spirit có thể bể setup.
2. **Attribute requirement** — POE2 strict hơn POE1 (gem requirement scale theo gem level + class)
3. **Resistance overcap** — POE2 max res 75% default (KHÔNG có +5% Purity), maps có -X% all res mod làm cap dễ trượt hơn POE1

### Attribute Danger Zone Analysis (giống POE1)

- **±0 margin** = DANGER — cannot lose ANY from this attr
- **< 10 margin** = CAUTION — limited room to lose
- **> 20 margin** = SAFE — can freely swap

POE2 thêm **Spirit margin** — danger zone tương tự.

## Step 2: Search Trade2 (via CDP Relay)

### Setup CDP Relay

```python
import sys, json, time
sys.path.insert(0, "/Users/firegroup/.claude/plugins/marketplaces/aiocean-plugins/plugins/aio-cdp-relay/skills/aio-cdp-relay/scripts")
from cdp_client import CDPClient

LEAGUE = "Runes of Aldur"  # current POE2 league
LEAGUE_URL = LEAGUE.replace(" ", "%20")

with CDPClient() as cdp:
    tab = cdp.find_tab(url_contains="pathofexile.com/trade2")
    cdp.attach(tab["targetId"])
```

### Search for Gear (POE2 example)

```python
# Example: amulet với life + res + spirit
result = cdp.evaluate_async(f"""
    (async () => {{
        const res = await fetch("https://www.pathofexile.com/api/trade2/search/poe2/{LEAGUE_URL}", {{
            method: "POST",
            headers: {{ "Content-Type": "application/json" }},
            body: JSON.stringify({{
                query: {{
                    status: {{ option: "available" }},
                    type: "Lazuli Amulet",
                    stats: [{{
                        type: "and",
                        filters: [
                            {{ id: "pseudo.pseudo_total_life", value: {{ min: 60 }} }},
                            {{ id: "pseudo.pseudo_total_elemental_resistance", value: {{ min: 40 }} }},
                            {{ id: "explicit.stat_<SPIRIT_HASH>", value: {{ min: 30 }} }}
                        ]
                    }}],
                    filters: {{
                        trade_filters: {{ filters: {{ price: {{ max: 5, option: "exalted" }} }} }}
                    }}
                }},
                sort: {{ price: "asc" }}
            }})
        }});
        return await res.json();
    }})()
""")
print(f"Total: {result.get('total')}")
```

**Verify spirit stat hash:** POE2 stat ID khác POE1 hoàn toàn. Fetch live:
```python
stats = cdp.evaluate_async("""
    (async () => {
        const r = await fetch("https://www.pathofexile.com/api/trade2/data/stats");
        const d = await r.json();
        return d.result.flatMap(g => g.entries).filter(s => /spirit/i.test(s.text || ""));
    })()
""")
print(json.dumps(stats, indent=2))
```

### Fetch Item Details

```python
time.sleep(2)  # Rate limit: 3 req/5s, min 2s spacing
ids = result["result"][:10]
query_id = result["id"]
ids_str = ",".join(ids)

items = cdp.evaluate_async(f"""
    (async () => {{
        const res = await fetch("https://www.pathofexile.com/api/trade2/fetch/{ids_str}?query={query_id}&realm=poe2");
        return await res.json();
    }})()
""")

for r in items.get("result", []):
    item = r["item"]
    price = r["listing"]["price"]
    print(f"{item.get('name','')} {item['typeLine']} — {price['amount']} {price['currency']}")
    for m in item.get("explicitMods", []):
        print(f"  {m}")
```

### Key Rules

- **Use CDP Relay** for ALL trade2 searches — never direct curl/WebFetch
- **realm=poe2 query param** required on fetch endpoint
- **All filter categories** (`type_filters`, `socket_filters`, `trade_filters`) go INSIDE `filters` object
- **Check attribute + spirit requirements** — POE2 spirit là constraint cứng
- **Respect rate limits** — max 3 searches/5s, space requests ~2s apart
- **Currency default = `exalted`** — POE2 main trade currency (KHÔNG phải chaos như POE1)

### Common POE2 Stat IDs (Pending Verification)

POE2 stat hash khác POE1. Sau khi 0.5 launch, fetch và populate table sau:

| Stat | ID |
|------|----|
| Total life | `pseudo.pseudo_total_life` *(pseudo namespace giữ format, verify hash)* |
| Total elemental resistance | `pseudo.pseudo_total_elemental_resistance` *(verify)* |
| Cold resistance | `pseudo.pseudo_total_cold_resistance` *(verify)* |
| Fire resistance | `pseudo.pseudo_total_fire_resistance` *(verify)* |
| Lightning resistance | `pseudo.pseudo_total_lightning_resistance` *(verify)* |
| Chaos resistance | `pseudo.pseudo_total_chaos_resistance` *(verify)* |
| Spirit | `explicit.stat_<TBD>` *(POE2-only, no POE1 equivalent)* |
| +N to Spirit | `explicit.stat_<TBD>` |
| Runic Ward (POE2 0.5) | `explicit.stat_<TBD>` *(verify when 0.5 launches)* |

**TODO:** populate sau khi fetch `/api/trade2/data/stats` thực tế.

## Step 3: Simulate in PoB2

POE2 PoB workflow khác POE1 (PoB2 community fork, separate calc engine):

```bash
# Re-analyze build với gear mới swapped vào — feed updated PoB export
.claude/skills/pob2/scripts/scripts/analyze.sh "<updated PoB export URL or path>"
```

**Note:** Per CLAUDE.md, `analyze.sh` accepts mobalytics/ninja/pobb URL. Khi muốn simulate single item swap, hiện cách workaround là:
1. Export PoB từ character snapshot
2. Edit PoB XML để swap item slot
3. Re-paste vào pobb.in để get URL
4. Feed URL vào `analyze.sh`

PoB2 chưa có CLI `swap` command tương đương POE1 `pob.sh swap` — đây là known limit. Track upstream PoB2 fork for CLI improvements.

**Slot names (POE2):** `Weapon 1`, `Weapon 2`, `Helmet`, `Body Armour`, `Gloves`, `Boots`, `Ring 1`, `Ring 2`, `Amulet`, `Belt`, `Quiver` (cho ranged). POE2 KHÔNG có flask slot trade-able (flask drop-only, no trade meta).

## Step 4: Present Plan

**NEVER whisper automatically.** Present full upgrade plan first:

1. Show combo table với all items, slots, costs
2. Show NET change calculation across ALL swapped slots (life, ES, res, spirit, DPS)
3. Show attribute + **spirit** safety check
4. List whisper messages từ trade results
5. **Wait for user to confirm**

## Decision Framework

### Think in Combos (giống POE1)

**Wrong:** "Ring 2 yếu → tìm best Ring 2 → mua"
**Right:** "Với 50ex budget, COMBINATION nào của 2-3 swap cho overall improvement tốt nhất?"

### Priority when evaluating combos (POE2-specific order):

1. **Attribute + Spirit requirements met** — MUST pass, non-negotiable (POE2 spirit cứng hơn POE1 attribute)
2. **Resistance caps** — uncapped res = highest priority (POE2 max 75%, ít overcap source)
3. **EHP improvement** — life, ES, armour, evasion. POE2 mới có **Runic Ward** layer 0.5+
4. **Spirit headroom** — for adding new support/aura/companion
5. **Build-specific mods** — minion damage cho minion build, spell damage cho caster, etc.
6. **Cost efficiency** — cheaper is better when stats similar

## Files

| File | Purpose |
|------|---------|
| `.claude/skills/pob2/scripts/scripts/analyze.sh` | POE2 build snapshot analyzer (URL-based) |
| `.claude/skills/trade2/SKILL.md` | POE2 trade skill (CDP Relay-based) |
| `.claude/skills/poe-ninja2/SKILL.md` | POE2 build meta data |
| `.claude/skills/poewiki2/SKILL.md` | POE2 wiki lookup (`/poe2-wiki/`) |
| `.claude/skills/poedb2/SKILL.md` | POE2 database lookup (`/poedb2/<patch>/us/`) — patch-versioned base stats / mod rolls |

## POE2-specific Gotchas

1. **PoB2 swap CLI chưa có** — workaround qua PoB export edit + re-import (xem step 3)
2. **Spirit constraint cứng** — luôn check trước khi commit upgrade
3. **Currency default = exalted** (POE2), KHÔNG phải chaos (POE1)
4. **Trade volume thấp hơn POE1** — `status: "any"` quan trọng để thấy real supply
5. **Stat ID khác POE1** — fetch live mỗi session, đừng copy hash từ POE1 skill
6. **Spirit Walker companion gear** — companion item là category mới 0.5; trade schema chưa verified
