---
skill_name: pob
description: Analyze and calculate Path of Building 2 (POE2) builds from poe.ninja, mobalytics.gg, or pobb.in URLs
version: 2.4.0
tags: [pob, path-of-building, builds, decoder, pobb.in, poe.ninja, mobalytics, poe2, calculations, dps]
---

# Path of Building 2 Skill

Analyze PoE2 builds from **poe.ninja**, **mobalytics.gg**, or **pobb.in** URLs.

**Use this skill when:**
- User provides a build URL from any supported source
- User needs DPS/defensive calculations
- User wants to compare build stats
- User asks about equipment, gems, or keystones

## Quick Start

```bash
# Auto-detects source from URL
.claude/skills/pob/scripts/scripts/analyze.sh "https://mobalytics.gg/poe-2/builds/bear-druid-build"
.claude/skills/pob/scripts/scripts/analyze.sh "https://poe.ninja/poe2/builds/vaal/character/account/CharName"
.claude/skills/pob/scripts/scripts/analyze.sh "https://pobb.in/abc123"

# Or use the POB2 CLI directly (after setup) with raw POB code
data/pob-source/pob-cli.sh calc @/path/to/pob-code.txt
```

## Setup

If POB2 is not installed, run the setup script:

```bash
.claude/skills/pob/scripts/setup.sh
```

**Idempotent — safe to re-run.** Each step is skipped if its output is already in place:

1. **Clone PathOfBuilding-PoE2** → `<project-root>/data/pob-source/` via `fetch-poe2-data.sh` (skipped if `.git` exists; refresh by running the fetch script directly)
2. **Install lua-zlib** via luarocks for Lua 5.1 (skipped if `luarocks show lua-zlib` returns OK)
3. **Patch `src/HeadlessWrapper.lua`** with zlib `Deflate`/`Inflate` impls (skipped if marker `zlib.deflate()(data, "finish")` already present)
4. **Sync CLI helpers** (`pob-cli.sh`, `pob-cli.lua`, `cli_test.lua`) from skill dir → install dir (skipped per-file if `cmp -s` reports identical)
5. **Smoke test** by running `pob-cli.sh new`

**Requirements:**
- luajit (`brew install luajit`)
- luarocks (`brew install luarocks`)
- git

## Scripts

### analyze.sh

Unified analyzer that auto-detects the source from URL.

```bash
.claude/skills/pob/scripts/scripts/analyze.sh <url> [command]
```

**Supported sources:**
- `mobalytics.gg/poe-2/builds/...`
- `poe.ninja/poe2/builds/.../character/...`
- `pobb.in/...`

**Commands:**
- `calc` - Full build data (default): info, stats, equipment, gem links, keystones
- `stats` - DPS and defensive stats only
- `info` - Class, level only

**Examples:**
```bash
.claude/skills/pob/scripts/scripts/analyze.sh "https://mobalytics.gg/poe-2/builds/bear-druid-build"
.claude/skills/pob/scripts/scripts/analyze.sh "https://poe.ninja/poe2/builds/vaal/character/account/CharName"
.claude/skills/pob/scripts/scripts/analyze.sh "https://pobb.in/abc123" stats
```

### extract-tree.sh

Extract passive skill tree from a POB build.

```bash
.claude/skills/pob/scripts/scripts/extract-tree.sh <url-or-file> [format]
```

**Formats:**
- `json` - Full JSON with all nodes, mods, and IDs (default)
- `summary` - Counts and key node names only
- `nodes` - List all nodes with their mods, grouped by type

**Examples:**
```bash
# Summary view
.claude/skills/pob/scripts/scripts/extract-tree.sh "https://mobalytics.gg/poe-2/builds/bear-druid" summary

# Full JSON
.claude/skills/pob/scripts/scripts/extract-tree.sh @pob-code.txt json

# All nodes with mods
.claude/skills/pob/scripts/scripts/extract-tree.sh "https://poe.ninja/..." nodes
```

**Output includes:**
- Keystones (with mods)
- Notables (with mods)
- Ascendancy nodes (with mods)
- Small passive nodes
- Mastery selections

### fetch-poe2-data.sh

Fetch the PathOfBuilding-PoE2 repository for local game data access.

```bash
.claude/skills/pob/scripts/scripts/fetch-poe2-data.sh
```

**What it does:**
- Clones or updates PathOfBuilding-PoE2 repository to `<project-root>/data/pob-source/`
- Provides local access to game data (skills, items, gems, mods, minions)
- 572M git clone — kept out of skill tree so cloning the repo doesn't pull a Lua fork inside `.claude/skills/`.

**Key data locations:**
- `data/pob-source/src/Data/Skills/` - All skill definitions
- `data/pob-source/src/Data/Gems.lua` - Gem data
- `data/pob-source/src/Data/Uniques/` - Unique items
- `data/pob-source/src/Data/Minions.lua` - Minion data
- `data/pob-source/src/Data/Mod*.lua` - Item modifiers

**Use when:**
- Need to query game data programmatically
- Want to reference official PoB data sources
- Setting up local development environment

### fetch-poeninja.sh

Fetch the PoB code from poe.ninja (without analysis). Handles **two** poe.ninja surfaces:

**A. Own profile (any connected character — including low-level leveling chars):**

```bash
.claude/skills/pob/scripts/scripts/fetch-poeninja.sh \
  "https://poe.ninja/poe2/profile/{account}/{league}/character/{character}"
# account uses '-' for '#', e.g. hopthuxacnhan-3062 ; league is the slug, e.g. runesofaldur
```

This is the **no-OAuth, zero-ban-risk path to a live-played POE2 character** — poe.ninja runs its
own OAuth integration with GGG, so it surfaces POE2 chars that GGG's own website profile does not
(the pathofexile.com profile is POE1-only — verified). The script resolves the latest snapshot id
dynamically via the events SSE stream (`events/character/...` → `data: {"version":<id>}`), then
fetches `.../model/<id>`. Besides printing the PoB code, it saves the **full model JSON** (rich
`defensiveStats`, `items`, `skills`, `keystones`, `jewels`, `passiveSelection` that poe.ninja
already computed) to `data/character-exports/export-<character>.json`.

> **Snapshot, not live — force a fresh crawl first.** poe.ninja only re-crawls on its own schedule
> (can be 6h+ stale). The script logs `updatedUtc` — if it's old, the numbers are old. To get current
> data on demand, click **"Refresh character"** on the poe.ninja profile page (it makes poe.ninja
> re-pull live from GGG via *their* OAuth — no GGG call from us, no ban risk), THEN run the fetch (it
> auto-resolves the new model via the events SSE). Refresh via playwriter:
> ```js
> await state.page.goto('https://poe.ninja/poe2/profile/<account>/<league>/character/<char>', {waitUntil:'domcontentloaded'});
> await state.page.getByRole('button', { name: 'Refresh character' }).click();   // → new model id
> await state.page.waitForTimeout(6000);
> ```
> Only works while the character stays public/connected on poe.ninja.
> **Analyze 0.5 chars from the saved model JSON, not PoB2** — PoB2 0.4 can't yet model 0.5 Spirit
> Walker / companion scaling (returns DPS 0). poe.ninja's `defensiveStats` + skill `damage` are the
> trustworthy numbers until the PoB2 fork catches up (`pob_coverage: PARTIAL`).

**B. Builds ladder (laddered characters only):**

```bash
.claude/skills/pob/scripts/scripts/fetch-poeninja.sh \
  "https://poe.ninja/poe2/builds/{league}/character/{account}/{character}" build-code.txt
```

> No OWN-stash / live-equipment pull exists for POE2 — GGG's character OAuth API (`/character/poe2/<name>`)
> would give live data but requires registering a developer app + token (heavyweight, and the account
> was previously flagged). Use it only if a future need demands true-live or a private/disconnected char.

### pob-cli.sh

Direct POB2 CLI for analyzing build codes. **Must run from the install dir** (`data/pob-source/`) because it expects `src/HeadlessWrapper.lua` and `runtime/lua/` siblings — the source-of-truth copy in `.claude/skills/pob/scripts/` is for git tracking, not direct execution.

```bash
data/pob-source/pob-cli.sh <command> [pob-code]
```

**Commands:**
- `new` - Create empty build and show default stats
- `calc <code>` - Full calculation (info + stats)
- `stats <code>` - Stats only
- `info <code>` - Info only
- `help` - Show help

**File Input:**
Use `@` prefix to read code from file:
```bash
data/pob-source/pob-cli.sh calc @/path/to/code.txt
```

## poe.ninja API Reference

### Get Snapshot Versions

```bash
curl -s "https://poe.ninja/poe2/api/data/index-state"
```

Response includes `snapshotVersions` array with:
- `url` - League URL slug (e.g., "vaal", "vaalhc")
- `name` - League name (e.g., "Fate of the Vaal")
- `version` - Snapshot version ID (e.g., "1054-20251218-53431")
- `snapshotName` - Snapshot name (e.g., "fate-of-the-vaal")

### Get Character Build

```bash
curl -s "https://poe.ninja/poe2/api/builds/{version}/character?account={account}&name={name}&overview={snapshotName}"
```

**Parameters:**
- `{version}` - From index-state snapshotVersions
- `{account}` - Account name (URL encoded)
- `{name}` - Character name (URL encoded)
- `{snapshotName}` - From index-state snapshotVersions

**Response includes:**
- `pathOfBuildingExport` - Base64 zlib-compressed XML
- `defensiveStats` - Life, ES, resistances, etc.
- `skills` - All equipped skills with gems
- `items` - All equipped items
- `keystones` - Allocated keystones
- `level`, `class` - Character info

### Example Workflow

```bash
# 1. Get current snapshot version for "vaal" league
VERSION=$(curl -s "https://poe.ninja/poe2/api/data/index-state" | \
  python3 -c "import json,sys; d=json.load(sys.stdin); print([s['version'] for s in d['snapshotVersions'] if s['url']=='vaal'][0])")

# 2. Fetch character
curl -s "https://poe.ninja/poe2/api/builds/$VERSION/character?account=wongklun-2431&name=Kai_FotV&overview=fate-of-the-vaal" | \
  python3 -c "import json,sys; print(json.load(sys.stdin)['pathOfBuildingExport'])" > build.txt

# 3. Analyze
data/pob-source/pob-cli.sh calc @build.txt
```

## pobb.in Integration

For pobb.in URLs, use the TypeScript client:

```bash
bun .claude/skills/pob/scripts/pob.ts summary https://pobb.in/8-9u-rZYxc0a
bun .claude/skills/pob/scripts/pob.ts skills https://pobb.in/8-9u-rZYxc0a
bun .claude/skills/pob/scripts/pob.ts items https://pobb.in/8-9u-rZYxc0a
```

Or programmatically:

```typescript
import { pobClient } from './.claude/skills/pob/scripts/pob-client';

const build = await pobClient.fetchBuild('https://pobb.in/8-9u-rZYxc0a');
console.log(build.parsed.className);      // "Druid"
console.log(build.parsed.ascendClassName); // "Shaman"
console.log(build.parsed.skills);          // Skill array
```

## Output Stats Reference

The POB CLI outputs these stats:

### Offensive Stats
- `totalDPS` - Total damage per second
- `combinedDPS` - Combined DPS including DoT
- `speed` - Attack/cast speed
- `hitChance` - Chance to hit (%)
- `critChance` - Critical strike chance (%)
- `critMultiplier` - Critical strike multiplier

### Defensive Stats
- `life` - Maximum life
- `energyShield` - Maximum energy shield
- `mana` - Maximum mana
- `armour` - Armour rating
- `evasion` - Evasion rating
- `block` - Block chance (%)

### Resistances
- `fireRes` - Fire resistance (%)
- `coldRes` - Cold resistance (%)
- `lightningRes` - Lightning resistance (%)
- `chaosRes` - Chaos resistance (%)

### Resources
- `lifeRegen` - Life regeneration per second
- `manaRegen` - Mana regeneration per second
- `manaCost` - Mana cost of main skill

## Common Workflows

### Analyze any build

```bash
# Just pass any supported URL
.claude/skills/pob/scripts/scripts/analyze.sh "https://mobalytics.gg/poe-2/builds/bear-druid-build"
.claude/skills/pob/scripts/scripts/analyze.sh "https://poe.ninja/poe2/builds/vaal/character/account/CharName"
```

### Compare two builds

```bash
# Save both builds
.claude/skills/pob/scripts/scripts/fetch-poeninja.sh "url1" build1.txt
.claude/skills/pob/scripts/scripts/fetch-poeninja.sh "url2" build2.txt

# Compare stats
data/pob-source/pob-cli.sh stats @build1.txt > stats1.json
data/pob-source/pob-cli.sh stats @build2.txt > stats2.json
```

### Extract skills for documentation

```bash
data/pob-source/pob-cli.sh info @build.txt | jq '.info.skills'
```

### Check defensive stats

```bash
data/pob-source/pob-cli.sh stats @build.txt | jq '{life, armour, evasion, fireRes, coldRes, lightningRes, chaosRes}'
```

## Troubleshooting

### "POB2 not installed"
Run the setup script:
```bash
.claude/skills/pob/scripts/setup.sh
```

### "lua-zlib not found"
Install lua-zlib for LuaJIT:
```bash
luarocks install lua-zlib --lua-version=5.1
```

### "Character not found"
- Check the URL format: `https://poe.ninja/poe2/builds/{league}/character/{account}/{name}`
- Verify the character exists on poe.ninja
- The character may not be in the current snapshot (try different time machine)

### "Inflate failed"
The PoB code may be corrupted or in an unsupported format. Try:
1. Re-fetch from poe.ninja
2. Check if the code is URL-safe base64 encoded
3. Verify zlib is properly installed

## File Structure

```
.claude/skills/pob/                  # Skill source-of-truth (tracked in git)
├── SKILL.md                         # This file
└── scripts/
    ├── setup.sh                     # Idempotent installer
    ├── pob.ts                       # pobb.in TypeScript client (bun runner)
    ├── pob-client.ts                # pobb.in TypeScript module
    ├── pob-cli.sh                   # POB2 bash CLI (synced to install dir)
    ├── pob-cli.lua                  # POB2 pure-Lua CLI (synced to install dir)
    ├── cli_test.lua                 # CLI test scaffold (synced to install dir)
    └── scripts/
        ├── analyze.sh               # Unified URL analyzer (auto-detects source)
        ├── extract-tree.sh          # Extract passive skill tree
        ├── fetch-poe2-data.sh       # Clone/update PathOfBuilding-PoE2
        └── fetch-poeninja.sh        # Fetch raw POB code from poe.ninja

<project-root>/data/pob-source/      # POB2 install + game data (gitignored, ~572MB)
├── .git/                            # Shallow clone of PathOfBuildingCommunity/PathOfBuilding-PoE2
├── src/
│   ├── HeadlessWrapper.lua          # Patched with zlib Deflate/Inflate by setup.sh
│   └── Data/                        # Skills/, Gems.lua, Uniques/, Minions.lua, Mod*.lua
├── runtime/                         # Lua runtime + Windows DLLs (used by HeadlessWrapper)
├── pob-cli.sh                       # Synced from skill dir by setup.sh
├── pob-cli.lua                      # Synced from skill dir by setup.sh
└── cli_test.lua                     # Synced from skill dir by setup.sh
```

**Why split:** the skill dir is tracked in git (so helpers + setup logic survive a wipe of `data/`). The install dir is gitignored — too big to commit, regenerable via `fetch-poe2-data.sh` + `setup.sh`. The CLI must execute from the install dir because `pob-cli.sh` resolves `src/` and `runtime/` relative to its own location.

## Version History

- **2.4.0** - Consolidated POB2 install at `data/pob-source/` (single clone shared with `fetch-poe2-data.sh`). Setup.sh now idempotent — skips clone/lua-zlib/patch/copy steps when output already in place. CLI helpers tracked in skill dir, synced to install dir.
- **2.3.0** - Added extract-tree.sh for passive tree extraction
- **2.2.0** - Unified analyze.sh with auto-detection, rich output
- **2.1.0** - Added mobalytics.gg integration
- **2.0.0** - Added POB2 headless CLI, poe.ninja integration
- **1.0.0** - Initial version with pobb.in support
