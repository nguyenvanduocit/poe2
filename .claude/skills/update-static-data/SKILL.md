---
skill_name: update-static-data
description: Update cached PoE API data (maps, trade filters, static game data)
version: 1.0.0
tags: [update, cache, api, data, poe]
---

# PoE Static Data Updater

Updates cached/rarely-changed data files from the official Path of Exile API.

**Use this skill when:**
- Trade search returns outdated results
- Filter data is missing or incomplete
- Maps cache needs refreshing
- Initial project setup

## Commands

```bash
bun .claude/skills/update-static-data/scripts/update-static-data.ts [options]

# Options:
--all         Update all static files (default)
--maps        Update maps cache only
--filters     Update trade filters only
--force       Force update even if cache is fresh
```

## What It Updates

### 1. Maps Cache (`.claude/skills/poe-auth/ggg/poe-static-cache.json`)

All PoE maps with tiers:
- Map IDs for trade search
- Display names
- Tier information

### 2. Trade Filters (`.claude/skills/poe-auth/ggg/poe-filters.json`)

Complete trade API data:
- All stat filters with IDs
- Item categories and types
- Static game data
- Used for fuzzy stat search

## Usage Examples

```bash
# Update everything (if cache is stale)
bun .claude/skills/update-static-data/scripts/update-static-data.ts

# Force update regardless of cache age
bun .claude/skills/update-static-data/scripts/update-static-data.ts --force

# Update only maps
bun .claude/skills/update-static-data/scripts/update-static-data.ts --maps

# Update only trade filters
bun .claude/skills/update-static-data/scripts/update-static-data.ts --filters
```

## Cache Policy

- **TTL:** 24 hours
- **Files update automatically** when running trade commands if stale
- **Manual update** with `--force` when needed

## Integration with Trade Commands

The `poe-trade` and `poe-watch` skills auto-detect stale cache:
```bash
bun .claude/skills/poe-auth/ggg/price.ts search "Divine Orb"
# Auto-updates filters if cache is >24h old
```
