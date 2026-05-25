---
skill_name: pob
description: Analyze and calculate Path of Building 2 (POE2) builds from poe.ninja, mobalytics.gg, or pobb.in URLs
version: 2.3.0
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

# Or use CLI directly with raw POB code
.claude/skills/pob/.claude/skills/pob/scripts/pob-cli.sh calc @/path/to/pob-code.txt
```

## Setup

If POB2 is not installed, run the setup script:

```bash
.claude/skills/pob/scripts/setup.sh
```

This will:
1. Clone POB2 from GitHub
2. Install lua-zlib for compression
3. Patch HeadlessWrapper.lua for CLI support
4. Test the installation

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
- Clones or updates PathOfBuilding-PoE2 repository to `<project-root>/data/pob-source/poe2/`
- Provides local access to game data (skills, items, gems, mods, minions)
- 572M git clone — kept out of skill tree so cloning the repo doesn't pull a Lua fork inside `.claude/skills/`.

**Key data locations:**
- `data/pob-source/poe2/src/Data/Skills/` - All skill definitions
- `data/pob-source/poe2/src/Data/Gems.lua` - Gem data
- `data/pob-source/poe2/src/Data/Uniques/` - Unique items
- `data/pob-source/poe2/src/Data/Minions.lua` - Minion data
- `data/pob-source/poe2/src/Data/Mod*.lua` - Item modifiers

**Use when:**
- Need to query game data programmatically
- Want to reference official PoB data sources
- Setting up local development environment

### fetch-poeninja.sh

Fetch only the PoB code from poe.ninja (without analysis).

```bash
.claude/skills/pob/scripts/scripts/fetch-poeninja.sh <url> [output-file]
```

**Example:**
```bash
# Output to stdout
.claude/skills/pob/scripts/scripts/fetch-poeninja.sh \
  "https://poe.ninja/poe2/builds/vaal/character/account/CharName"

# Save to file
.claude/skills/pob/scripts/scripts/fetch-poeninja.sh \
  "https://poe.ninja/poe2/builds/vaal/character/account/CharName" \
  build-code.txt
```

### pob-cli.sh

Direct POB2 CLI for analyzing build codes.

```bash
.claude/skills/pob/.claude/skills/pob/scripts/pob-cli.sh <command> [pob-code]
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
.claude/skills/pob/.claude/skills/pob/scripts/pob-cli.sh calc @/path/to/code.txt
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
.claude/skills/pob/.claude/skills/pob/scripts/pob-cli.sh calc @build.txt
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
.claude/skills/pob/.claude/skills/pob/scripts/pob-cli.sh stats @build1.txt > stats1.json
.claude/skills/pob/.claude/skills/pob/scripts/pob-cli.sh stats @build2.txt > stats2.json
```

### Extract skills for documentation

```bash
.claude/skills/pob/.claude/skills/pob/scripts/pob-cli.sh info @build.txt | jq '.info.skills'
```

### Check defensive stats

```bash
.claude/skills/pob/.claude/skills/pob/scripts/pob-cli.sh stats @build.txt | jq '{life, armour, evasion, fireRes, coldRes, lightningRes, chaosRes}'
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
.claude/skills/pob/scripts/
├── SKILL.md           # This file
├── setup.sh           # POB2 installation script
├── .gitignore         # Excludes pob/ from git
├── scripts/
│   ├── analyze.sh          # Unified analyzer (auto-detects source)
│   ├── extract-tree.sh     # Extract passive skill tree
│   ├── fetch-poe2-data.sh  # Fetch PathOfBuilding-PoE2 repo
│   └── fetch-poeninja.sh   # Fetch raw POB code from poe.ninja
└── pob/              # POB2 installation (gitignored)
    ├── src/           # POB2 source code
    ├── runtime/       # Lua runtime and assets
    └── pob-cli.sh     # POB2 CLI script
```

## Version History

- **2.3.0** - Added extract-tree.sh for passive tree extraction
- **2.2.0** - Unified analyze.sh with auto-detection, rich output
- **2.1.0** - Added mobalytics.gg integration
- **2.0.0** - Added POB2 headless CLI, poe.ninja integration
- **1.0.0** - Initial version with pobb.in support
