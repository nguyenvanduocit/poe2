---
name: lootfilter
description: Create and modify Path of Exile 2 loot filters (.filter) — POE2 0.5+ "Return of the Ancients" league-aware. Uses poe2filter.com data APIs, knows Waystone/Tablet/Charm/Relic class semantics, and validates filter syntax via the bundled POE2 filter parser. Use when user wants to create, edit, audit, or understand POE2 loot filters.
tags: [poe, poe2, lootfilter, filter, neversink, waystone, runes-of-aldur, poe2filter]
version: 1.0.0
---

# Scope

POE2 only. The POE2 filter file format **is similar to POE1 but not identical** — classes, conditions, and the file location all differ. Use the sister `lootfilter` skill for POE1.

POE2 0.5 "Runes of Aldur" (patch 2026-05-21, league launch ~2026-05-29) adds Remnant / Verisium / Ancient Rune / Mythical / Flux / Kalguuran Skill+Support items that may need filter rules — see the **0.5 New Items** section below for filter implications.

# Game Client Access

The POE2 client runs on a remote Windows machine accessible via SSH.

## Connection

```bash
ssh nguye@100.94.175.84
```

## Filter File Location (POE2)

POE2 uses a separate folder from POE1 — `Path of Exile 2` (note the `2`).

```
C:\Users\Nguye\Documents\My Games\Path of Exile 2\spectre.filter
```

## Direct Filter Management

### Download filter to local machine

```bash
scp "nguye@100.94.175.84:C:/Users/Nguye/Documents/My Games/Path of Exile 2/spectre.filter" /tmp/spectre.filter
```

### Upload modified filter to game client

```bash
scp /tmp/spectre.filter "nguye@100.94.175.84:C:/Users/Nguye/Documents/My Games/Path of Exile 2/spectre.filter"
```

### Read filter in-place via SSH

```bash
ssh nguye@100.94.175.84 'type "C:\Users\Nguye\Documents\My Games\Path of Exile 2\spectre.filter"'
```

### Workflow

1. Download filter from Windows → `/tmp/spectre.filter`
2. Parse + validate + modify locally (use the `parser/` bundle)
3. Upload back to Windows
4. In-game: open Options → Game → reload filter (or hotkey if bound — POE2 doesn't auto-reload like POE1, **you must re-select the filter from the dropdown** after every edit)

## Other Useful Paths (POE2)

| Path | Content |
|------|---------|
| `C:\Users\Nguye\Documents\My Games\Path of Exile 2\` | Settings, filters, screenshots, production_Config.ini |
| `C:\Users\Nguye\AppData\Roaming\Path of Exile 2\` | Cache, shader cache |
| `C:\Users\Nguye\Documents\My Games\Path of Exile 2\Screenshots\` | In-game screenshots |

**Note:** POE1 and POE2 keep **independent** filter folders. Do not symlink them — POE2 filter syntax uses classes (`Waystones`, `Tablet`, `Charm`, `Relic`) that POE1's filter parser rejects, and vice versa for POE1-only classes (`Maps`, `Map Fragments`, `Atlas Region Upgrade Item`, `Heist*`, `Sentinel`, etc.).

---

# POE2 Loot Filter Architecture

## Filter File Structure

```
#===============================================================================================================
# HEADER - Version, Type, Author, Links
#===============================================================================================================

#===============================================================================================================
# TABLE OF CONTENTS + QUICKJUMP
#===============================================================================================================
# [[0100]] Section Name
#   [0101] Subsection Name
# [[0200]] Next Section
# ...

#===============================================================================================================
# [[0100]] Section Name
#===============================================================================================================
# !! Waypoint c0.start : "Description for editors"

Show # %D6 $type->category $tier->subcategory !rule_id
    Condition1 Value
    Condition2 Operator Value
    Action1 Value
    Action2 Value

Hide # %H3 $type->category $tier->subcategory !rule_id
    Condition Value
```

## Rule Block Anatomy

```
Show|Hide|Minimal  # [priority] [tags] [rule_id]
    [Conditions]   # What items to match
    [Actions]      # How to display
    [Continue]     # Optional: don't stop, keep processing
```

### Comment Tag System

| Tag | Purpose | Values |
|-----|---------|--------|
| `%D6` - `%D1` | Display priority (Show rules) | D6 = highest |
| `%H5` - `%H1` | Hide priority (strictness levels) | H5 = strictest |
| `$type->category` | Item category | gold, currency, gear, gems, etc. |
| `$tier->subcategory` | Value tier within category | stack1, atier, btier, etc. |
| `!rule_id` | Unique rule identifier | For editor reference |

### Waypoint Comments

```
# !! Waypoint c0.start : "Override ALL rules"
# !! Waypoint c3.gear.chancing : "Chancing bases"
```

Used by filter editors (FilterBlade) to navigate and organize sections.

## Rule Processing Order

**Critical:** Rules are processed **top-to-bottom**. First matching rule wins (unless `Continue`).

```
┌─────────────────────────────────────────────┐
│ Item drops                                  │
└─────────────────┬───────────────────────────┘
                  ▼
┌─────────────────────────────────────────────┐
│ Rule 1: Show Divine Orb (high priority)     │ ← Match? Apply & STOP
└─────────────────┬───────────────────────────┘
                  ▼ (no match)
┌─────────────────────────────────────────────┐
│ Rule 2: Show Chaos Orb                      │ ← Match? Apply & STOP
└─────────────────┬───────────────────────────┘
                  ▼ (no match)
┌─────────────────────────────────────────────┐
│ Rule 3: Hide currency (catch-all)           │ ← Match? Apply & STOP
└─────────────────────────────────────────────┘
```

**Consequence:** More specific rules MUST come before general rules.

## CRITICAL: Rule Order Pitfalls (POE2-specific)

### The Rarity-vs-Class Problem

**This is the #1 cause of "my items aren't showing" bugs in POE2.**

POE2 has many class-typed valuables that *also* roll Rare (Waystones, Jewels, Charms, Tablets, Relics). Generic `Hide Rarity Rare` rules catch them BEFORE class-specific rules unless ordered correctly.

```
# WRONG ORDER - Waystones get hidden!
Hide
    Rarity Rare           # ← Catches ALL rare items, including waystones
    DisableDropSound True

Show                      # ← Never reached for rare waystones!
    WaystoneTier >= 14
    Class == "Waystones"
    PlayEffect Red
```

```
# CORRECT ORDER - Waystones show properly
Show                      # ← Class-specific rule FIRST
    WaystoneTier >= 14
    Class == "Waystones"
    PlayEffect Red

Hide                      # ← Lower-tier waystone hide is fine here
    Class == "Waystones"

Hide                      # ← Generic rarity rule AFTER all class rules
    Rarity Rare           # ← Now only catches non-waystone rares
    DisableDropSound True
```

### Classes That Need Priority Over Rarity Rules

These POE2 item types have their own Class and MUST be handled before generic `Hide Rarity` rules:

| Class | Why It Needs Priority |
|-------|----------------------|
| `Waystones` | Filter by WaystoneTier before hiding by rarity |
| `Jewels` | All jewel slots are valuable regardless of rarity |
| `Charms` | Golden Charms + utility charms are valuable |
| `Relics` | All relics are valuable (Sekhemas / hideout) |
| `Support Gems` | Lineage / corrupted gems are high value |
| `Skill Gems` | Specific gems for chase setups |
| `Tablet` | Precursor Tablets augment the Atlas |
| `Expedition Logbooks` | Always valuable |
| `Pinnacle Keys` | Pinnacle boss access |
| `Vault Keys` | Trial of the Sekhemas vault access |

### Correct Section Order

```
1. GOD-TIER CURRENCY (Mirror, Divine)
2. S-TIER CURRENCY
3. T0 UNIQUES (specific BaseTypes)
4. S-TIER KEYS (Pinnacle Keys, Vault Keys, Expedition Logbooks)
5. SOUL CORES / RUNES (Class == "Augment")
6. LINEAGE GEMS (Class == "Support Gems")
7. QUEST ITEMS
8. ─────────────────────────────────────
   HIDE sections for specific classes:
   - Hide other Augments
   - Hide other Support Gems
   - Hide Currency (catch-all)
   - Hide Omens
   - Hide Uniques (not matched above)
9. ─────────────────────────────────────
   CLASS-SPECIFIC SHOW RULES (before rarity hides!):
   - Waystones (WaystoneTier >= X)
   - Tablets (specific BaseTypes)
   - Jewels (if showing any)
   - Charms (if showing any)
   - Relics (if showing any)
10. ─────────────────────────────────────
    HIDE CLASS CATCH-ALLS:
    - Hide Waystones (lower tiers)
    - Hide Tablets
    - Hide Jewels
    - Hide Flasks
    - Hide Charms
    - Hide Belts
    - Hide Relics
11. ─────────────────────────────────────
    HIDE RARITY (generic gear) - MUST BE LAST:
    - Hide Rarity Rare
    - Hide Rarity Magic
    - Hide Rarity Normal
12. ─────────────────────────────────────
    HIDE EVERYTHING ELSE (final catch-all)
```

### Quick Checklist

Before finalizing a POE2 filter, verify:

- [ ] All `Show Class == "Waystones"` rules come BEFORE `Hide Rarity`
- [ ] All `Show Class == "Jewels"` rules come BEFORE `Hide Rarity`
- [ ] All `Show Class == "Tablet"` rules come BEFORE `Hide Rarity`
- [ ] All `Show Class == "Charms"` and `Show Class == "Relics"` rules come BEFORE `Hide Rarity`
- [ ] All class-specific hide rules (`Hide Class == "X"`) come BEFORE generic `Hide Rarity`
- [ ] The final `Hide` (catch-all) is at the very end

## Continue Directive

`Continue` allows a rule to apply styling without stopping rule processing.

```
# Decorator: Add border to all ilvl82+ rares, then continue
Show # $type->decorators $tier->ilvl82
    ItemLevel >= 82
    Rarity Rare
    SetTextColor 245 175 0
    Continue              # ← Don't stop, keep checking rules

# Actual visibility rule comes later
Show # $type->gear $tier->rare
    Rarity Rare
    SetFontSize 36
```

**Use case:** Layer multiple visual effects (border + sound + minimap icon) without duplicating conditions.

## Rule Composition

### Conditions (Match Items)

```
# Identity conditions
BaseType == "Chaos Orb" "Divine Orb"    # Exact item names
Class == "Stackable Currency"            # Item class/category
Rarity Normal Magic Rare Unique          # Rarity (no operator)

# Numeric conditions
ItemLevel >= 82                          # Item level
AreaLevel >= 65                          # Zone level (endgame check)
DropLevel >= 60                          # Base drop level
Quality >= 20                            # Quality %
StackSize >= 1000                        # Stack quantity
WaystoneTier >= 15                       # Waystone tier 1-16 (POE2)
UnidentifiedItemTier >= 4                # Tier of unidentified rare gear (POE2)

# Defense conditions
BaseArmour > 0                           # Has armour
BaseEvasion > 0                          # Has evasion
BaseEnergyShield > 0                     # Has ES

# State conditions
Corrupted True|False
Mirrored True|False
Identified True|False
AnyEnchantment True|False
TwiceCorrupted True|False                # Yes — POE2 has 2x corrupted items too

# Size conditions
Width >= 2
Height >= 3

# Mod conditions (identified items)
HasExplicitMod >=1 "Hellion's" "of the Wizard"
```

> POE2 currently **does NOT support** the POE1-only conditions `Sockets`, `LinkedSockets`, `SocketGroup`, `MapTier`, `HasInfluence`, `GemLevel`, `HasEaterOfWorldsImplicit`, `HasSearingExarchImplicit`, etc. Filtering by sockets/links is a POE1 concept — POE2 uses runes embedded directly in gear.

### Actions (Display Style)

```
# Text styling
SetFontSize 45                           # 18-45
SetTextColor 255 215 0 255               # R G B A (0-255)
SetBorderColor 255 0 0 255
SetBackgroundColor 0 0 0 255

# Effects
PlayEffect Red|Orange|Yellow|Green|Blue|Purple|White|Cyan|Grey|Brown|Pink|Black [Temp]
MinimapIcon 0|1|2 Color Shape            # Size Color Shape
PlayAlertSound 1-16 Volume               # ID
CustomAlertSound "file.mp3" Volume
DisableDropSound True
```

**MinimapIcon Shapes:** Circle, Diamond, Hexagon, Square, Star, Triangle, Cross, Moon, Raindrop, Pentagon, UpsideDownHouse

## POE2 Item Classes (canonical, validated against parser)

Source: `parser/src/types.ts` → `POE2_CLASSES` (43 classes total).

```
# Equipment
"Body Armours" "Boots" "Gloves" "Helmets"
"Shields" "Bucklers" "Foci"
"Bows" "Crossbows" "Quarterstaves" "Staves" "Wands" "Sceptres"
"One Hand Maces" "Two Hand Maces" "Spears" "Talismans"
"Amulets" "Rings" "Belts" "Quivers"

# Currency
"Stackable Currency" "Augment" "Omen" "Incubators"

# Consumables
"Life Flasks" "Mana Flasks" "Charms"

# Other
"Jewels" "Relics" "Skill Gems" "Support Gems"
"Waystones" "Tablet" "Map Fragments"
"Expedition Logbooks" "Pinnacle Keys" "Vault Keys"
"Quest Items" "Instance Local Items" "Fishing Rods"
```

> Note vs POE1: POE2 has `Waystones` (no `Maps`), `Tablet` (no `Atlas Region Upgrade Item` / `Watchstone` / `Sextant`), `Charms` + `Relics` + `Foci` + `Quarterstaves` + `Sceptres` + `Spears` + `Talismans` (all POE2-only), `Pinnacle Keys` + `Vault Keys` (POE2 endgame access), `Augment` (POE2 umbrella for Soul Cores + Runes). POE2 **does not** have POE1 classes: `Maps`, `Heist*`, `Sentinel`, `Tinctures`, `Memory Line`, `Misc Map Items`.

## 0.5 "Runes of Aldur" — New Items / Currency

POE2 0.5 (patch 2026-05-21) adds a large block of craftable items that drop from Remnant encounters. Filter implications below — note these are **predictions from patch notes**; verify exact `Class` / `BaseType` in-game on 2026-05-29 and update.

| 0.5 Item Family | Drop Source | Predicted Class | Filter Recommendation |
|---|---|---|---|
| **Verisium** (metal currency) | Remnant monsters | `Stackable Currency` | Show all stacks — new currency, unknown chaos value early league |
| **13 Alloys** (replace-mod, Essence-like) | Unlock via Farrow quest Act 2 | `Stackable Currency` (assumed) | Show all — high crafting value |
| **13 Ancient Runes** (weapon-type bonus runes) | Remnant encounters post-Farrow Act 4 | `Augment` (likely — same umbrella as Soul Cores / regular Runes) | Show all early league; tier down after prices stabilise |
| **13 Mythical Runes** (early-game boost, lvl 15+) | Remnant encounters | `Augment` (assumed) | Show — leveling demand |
| **3 Flux** (resistance element swap) | Remnant encounters | `Stackable Currency` (assumed) | Show all — niche craft, rare drop |
| **15+ Meta Crafting Runes** | Remnant encounters | `Augment` or `Stackable Currency` | Show all early league |
| **15+ Runic Ward Runes** | Remnant encounters | `Augment` (assumed) | Show all early league |
| **21 Kalguuran Skill Gems** (Animus Exchange, Frostflame Nova, Verisium Manifestations, etc.) | Remnant encounters | `Skill Gems` (with `Corrupted False` likely) | Show all by BaseType — chase craftable skill access |
| **8 Kalguuran Support Gems** (Healing Runes, Runic Infusion, Scouring Flame, etc.) | Remnant encounters | `Support Gems` | Show all by BaseType |

**Critical filter audit at 0.5 launch:** Run `parser/src/cli.ts` against your existing filter — any `BaseType` matching a 0.5 Kalguuran skill/support that's currently hidden under a generic `Hide Class == "Skill Gems"` will be invisible. Add explicit `Show` rules **before** the catch-all hide.

## Filter Architecture Layers

### 1. Override Layer (Top)

High-priority rules that should always match first:
- God-tier currency (Mirror of Kalandra, Divine Orb)
- Quest items
- Fishing rods

### 2. Decorator Layer

`Continue` rules that add visual styling:
- ItemLevel 82+ highlighting
- Corrupted item borders
- Small item (jewelry) indicators

### 3. Exception Layer

Specific valuable items within categories:
- Specific uniques by BaseType
- Specific currency by BaseType (Divine, Mirror, Chaos)
- High-value gems (Kalguuran skill/support gems for 0.5)

### 4. Category Layer

General rules by item type:
- Currency tiering (S/A/B/C)
- Gear by class
- Waystones by tier

### 5. Hide Layer (Bottom)

Catch-all rules to hide unwanted items:
```
Hide # $type->hidelayer $tier->normalmagicendgame
    Rarity Normal Magic
    AreaLevel >= 65

Hide # $type->hidelayer $tier->raresendgame
    Rarity Rare
    AreaLevel >= 65
```

## Common Patterns

### Tiered Currency

```
# S-Tier (always show, max highlight)
Show # $type->currency $tier->stier
    BaseType == "Divine Orb" "Mirror of Kalandra"
    SetFontSize 45
    PlayEffect Red
    MinimapIcon 0 Red Star

# A-Tier (always show)
Show # $type->currency $tier->atier
    BaseType == "Chaos Orb" "Exalted Orb" "Greater Jeweller's Orb" "Perfect Jeweller's Orb"
    SetFontSize 40
    PlayEffect Orange

# B-Tier (show with less emphasis)
Show # $type->currency $tier->btier
    BaseType == "Orb of Alchemy" "Regal Orb" "Vaal Orb"
    SetFontSize 36

# Hide rest
Hide # $type->currency $tier->hide
    Class == "Stackable Currency"
```

### Waystones by Tier (POE2)

```
# T15-16 corrupted highest priority
Show # $type->waystones $tier->t15plus
    Class == "Waystones"
    WaystoneTier >= 15
    SetFontSize 45
    PlayEffect Red
    MinimapIcon 0 Red Diamond

# T11-14 visible but lower priority
Show # $type->waystones $tier->t11
    Class == "Waystones"
    WaystoneTier >= 11
    SetFontSize 40
    PlayEffect Yellow

# Sub-T11 hide entirely in endgame
Hide # $type->waystones $tier->lowtier
    Class == "Waystones"
    WaystoneTier < 11
    AreaLevel >= 75
```

### StackSize Tiering (Gold)

```
Show # $type->gold $tier->huge
    StackSize >= 5000
    BaseType == "Gold"
    PlayEffect Orange
    MinimapIcon 1 Yellow Cross

Show # $type->gold $tier->large
    StackSize >= 2000
    BaseType == "Gold"
    PlayEffect Orange Temp

Hide # $type->gold $tier->small
    BaseType == "Gold"
```

### Multi-Condition Filtering

```
Show # $type->exotic $tier->highilvl
    Corrupted False
    ItemLevel >= 82
    Rarity Normal Magic Rare
    Class == "Body Armours"
    BaseArmour > 0
    PlayEffect Blue
```

## Data APIs

Base URL: `https://poe2filter.com/data/poe2/`

| Endpoint | Content | Key Fields |
|----------|---------|------------|
| `uniques-data.json` | Unique items | category, baseType, name, explicitMods |
| `gear-data.json` | Base gear | name, implicits, lvl, arm/ev/es, str/dex/int |
| `jewellery-data.json` | Rings/amulets/belts | name, implicits, lvl |
| `flask-data.json` | Flasks (Life + Mana) + Charms | name, effects |
| `currency-data.json` | Currency items | baseType, effects, description |
| `currency-data-manual.json` | Support gems + special items | baseType, gemDescription, effects |
| `mod-data.json` | Affixes (pipe-delimited) | ID\|Rarity\|Type\|Category\|Weight\|Name\|Effect\|ItemClasses |

### Unique Item Schema

```typescript
interface UniqueItem {
  category: "Armour" | "Weapons" | "Jewellery" | "Flasks" | "Waystones" | "Jewels"
  baseType: string    // For filter BaseType condition
  name: string        // Unique name (display only — DO NOT use in BaseType)
  explicitMods: string[]
}
```

> Filter convention: match `BaseType == "Coral Ring"` not `BaseType == "Andvarius"`. The unique name is identification metadata, the base type is the drop predicate. To Show a specific unique, gate by `BaseType` + `Rarity Unique` together.

### Gear Schema

```typescript
interface GearItem {
  name: string        // BaseType name
  implicits: string[]
  lvl?: number        // Level requirement
  arm?: number; ev?: number; es?: number; block?: number
  minDmg?: number; maxDmg?: number; crit?: number; aps?: number
  str?: number; dex?: number; int?: number
}
```

## Filter Generation Workflow

1. **Define tiers** for each item category (S/A/B/C/Hide)
2. **Fetch item data** from poe2filter.com APIs (cache locally if iterating)
3. **Categorize items** into tiers by current league market value
4. **Generate rules** top-to-bottom:
   - Override rules first (quest items, god-tier currency)
   - Decorator rules with `Continue`
   - Category rules by tier (S → A → B → C)
   - Class-specific Show before generic Hide
   - Hide rules last (catch-all)
5. **Validate** rule order (specific before general) — run parser CLI
6. **Upload** to Windows client + reload in-game

## Filter Parser & Validator (POE2)

The skill includes a TypeScript parser at `parser/` that parses and validates POE2 `.filter` files.

### Usage

```typescript
import { parseAsync, validate, loadGameData } from './parser/src'

const blocks = await parseAsync(filterContent)
const gameData = await loadGameData()
const result = validate(blocks, { gameData })

if (!result.valid) {
  console.error('Errors:', result.errors)
}
```

### CLI Validation

```bash
cd .claude/skills/lootfilter/parser

# Run tests
bun test

# Validate a filter file
bun -e "
import { parseAsync, validate } from './src'
import { readFileSync } from 'fs'

const content = readFileSync('/tmp/spectre.filter', 'utf-8')
const blocks = await parseAsync(content)
const result = validate(blocks)

console.log('Blocks:', blocks.length)
console.log('Valid:', result.valid)
console.log('Errors:', result.errors.length)
console.log('Warnings:', result.warnings.length)
"
```

### Validation Features

- **Syntax validation:** Ensures filter syntax is correct (PEG grammar in `parser/src/poe2-filter.pegjs`)
- **Class validation:** Checks `Class` values against the canonical `POE2_CLASSES` list (`parser/src/types.ts`)
- **BaseType validation:** Validates against game data from poe2filter.com
- **Numeric range validation:** ItemLevel (1-100), Quality (0-30), WaystoneTier (1-16)
- **Hidden valuables warning:** Warns when hiding Support Gems / Uniques / Currency without a specific BaseType (catches the "hidden Kalguuran gem" bug pattern for 0.5)
- **Statistics:** Reports condition/action usage counts

### When to Validate

**Always validate filters after:**
1. Creating a new filter
2. Adding/modifying rules
3. **At every league/patch boundary** — 0.5 introduces new item classes/bases that older filters won't account for
4. Before saving to `filter/` directory or uploading to client

```typescript
const blocks = await parseAsync(newFilterContent)
const result = validate(blocks, {
  validateClasses: true,
  validateBaseTypes: true,
  warnHiddenValuables: true,
  gameData: await loadGameData()
})

if (result.errors.length > 0) {
  throw new Error(`Filter has errors:\n${formatErrors(result.errors)}`)
}

writeFileSync('filter/MyFilter.filter', newFilterContent)
```

## TODOs at 0.5 Launch (2026-05-29)

- [ ] Verify Verisium / Alloy / Ancient Rune / Mythical Rune / Flux exact `Class` (currently inferred from patch notes — likely `Stackable Currency` or `Augment`)
- [ ] Fetch updated `currency-data.json` from poe2filter.com and refresh parser baseTypes set
- [ ] Add Kalguuran Skill Gem + Support Gem BaseType list to a `Show` block before any generic `Hide Class == "Skill Gems"` / `Hide Class == "Support Gems"` rule
- [ ] Check if 0.5 changed `WaystoneTier` upper bound (likely still 1-16 — re-verify)
- [ ] Update `POE2_CLASSES` in `parser/src/types.ts` if 0.5 introduces new item classes (e.g. `Remnant` might be a new class)
- [ ] Re-run parser test suite (`bun test`) against the 0.5 sample filter from poe2filter.com

## References

- [poe2filter.com](https://poe2filter.com/) — POE2 community filter editor + data APIs
- [FilterBlade](https://www.filterblade.xyz/) — also covers POE2 (separate POE2 mode)
- [NeverSink Filter for PoE2 syntax reference](https://deepwiki.com/NeverSinkDev/NeverSink-Filter-for-PoE2/6.3-filter-syntax-reference)
- [POE2 Wiki — Item filter](https://www.poe2wiki.net/wiki/Item_filter)
- Local POE2 wiki mirror: `data/poe2-wiki/`
- POE2 0.5 patch notes: `data/release-notes/poe2/Version_0.5.0.md`
