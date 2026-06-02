---
skill_name: stash
description: Manage POE stash tabs and list characters
version: 3.0.0
tags: [stash, inventory, poe]
---

> **POE2 has no stash API — this skill is POE1-only.** Verified 2026-06-01: GGG's stash endpoints
> (`/character-window/get-stash-items`, OAuth `/stash/<league>`) are **PoE1 only** and exclude POE2;
> the pathofexile.com web profile is POE1-only (no PoE 2 realm tab to DOM-scrape); poe.ninja does
> not expose personal stash. **POE2 stash = read in-game only.** For POE2 *character* data (gear,
> gems, passives) use `/pob` with a poe.ninja profile URL instead — see the `pob` skill. Details in
> memory `reference_poe2_char_stash_api`.

## Commands

```bash
# List characters
bun .claude/skills/poe-auth/ggg/poe-stash.ts list

# Stash management (auto-detects current league)
bun .claude/skills/poe-auth/ggg/poe-stash.ts stash                    # List all tabs
bun .claude/skills/poe-auth/ggg/poe-stash.ts stash 0                  # Get tab by index
bun .claude/skills/poe-auth/ggg/poe-stash.ts stash --name "Currency"  # Get tab by name

# Explicit league (optional)
bun .claude/skills/poe-auth/ggg/poe-stash.ts stash "Settlers"
bun .claude/skills/poe-auth/ggg/poe-stash.ts stash "Settlers" 0
```

> **Note:** The GGG stash API (`/api/stash/` and `/character-window/get-stash-items`) returns
> 403/404 for some accounts. Use Option 1 (CDP Relay DOM scraping) when the API is blocked.

---

## Setup

### Option 1: Via CDP Relay — DOM scraping (PRIMARY — works when API is blocked)

Navigate to the stash page in browser and read the DOM directly. No POESESSID needed —
uses the existing browser session.

```python
import sys, json, time
sys.path.insert(0, "/Users/firegroup/.claude/plugins/marketplaces/aiocean-plugins/plugins/aio-cdp-relay/skills/aio-cdp-relay/scripts")
from cdp_client import CDPClient

with CDPClient() as cdp:
    tab = cdp.find_tab(url_contains="pathofexile.com")
    cdp.attach(tab["targetId"])

    # Navigate to stash page (account name uses - not # separator)
    cdp.navigate(
        "https://www.pathofexile.com/account/view-stash/hopthuxacnhan-3062/Mirage",
        wait=5
    )

    # Read stash tab names from DOM
    tabs = cdp.evaluate("""
        (() => {
            const tabs = document.querySelectorAll('.stashTabList .tab, .inventoryTab');
            return Array.from(tabs).map((t, i) => ({
                index: i,
                name: t.textContent.trim() || t.getAttribute('data-tab-name') || 'Tab ' + i
            }));
        })()
    """)
    print("Tabs:", json.dumps(tabs, indent=2))

    # Click on a specific tab by name (e.g. Currency)
    cdp.evaluate("""
        (() => {
            const tabs = document.querySelectorAll('.stashTabList .tab, .inventoryTab');
            for (const t of tabs) {
                if (t.textContent.trim() === 'Currency') { t.click(); return true; }
            }
            return false;
        })()
    """)
    time.sleep(2)  # wait for tab contents to load

    # Read items from the active tab
    items = cdp.evaluate("""
        (() => {
            const cells = document.querySelectorAll('.inventorySlot .itemContainer, .stashItem');
            return Array.from(cells)
                .filter(el => el.querySelector('.itemName, .itemHeader'))
                .map(el => ({
                    name: (el.querySelector('.itemName')?.textContent || '').trim(),
                    stackSize: el.querySelector('.stackSize')?.textContent?.trim() || null,
                    x: el.getAttribute('data-x'),
                    y: el.getAttribute('data-y'),
                }));
        })()
    """)
    print("Items:", json.dumps(items, indent=2))
```

**Tips:**
- Account URL format: `hopthuxacnhan-3062` (replace `#` with `-`)
- League name is case-sensitive: `Mirage`, `Standard`
- Wait at least 2s after clicking a tab before reading items
- If the DOM selectors change between PoE patches, inspect the page with DevTools to find new ones

### Option 2: Via CLI with POESESSID (fallback — only works when API is not blocked)

```bash
export POESESSID="your-session-id-here"
export POE_ACCOUNT_NAME="your-account-name"   # optional
bun .claude/skills/poe-auth/ggg/poe-stash.ts stash
```

To get POESESSID: log in to pathofexile.com in browser, open DevTools > Application > Cookies,
copy the value of `POESESSID`.

---

## Common Use Cases

### 1. List All Characters
```bash
bun .claude/skills/poe-auth/ggg/poe-stash.ts list
```

**Returns:**
- Character name, level, class
- League assignment
- Ascendancy class

### 2. Browse Stash Tabs
```bash
# List all tabs (auto-detects current league)
bun .claude/skills/poe-auth/ggg/poe-stash.ts stash

# Get specific tab contents
bun .claude/skills/poe-auth/ggg/poe-stash.ts stash 0                  # By index
bun .claude/skills/poe-auth/ggg/poe-stash.ts stash --name "Currency"  # By name

# Specify league explicitly
bun .claude/skills/poe-auth/ggg/poe-stash.ts stash "Standard"
bun .claude/skills/poe-auth/ggg/poe-stash.ts stash "Standard" --name "Maps"
```

**Returns:**
- Tab names, indices, and types
- Full item details with mods
- Item positions in stash

---

## Programmatic Usage (API path — may be blocked)

```typescript
import { createStashClient } from './.claude/skills/poe-auth/ggg/poe-client';

const client = createStashClient({
  poesessid: 'your-session-id',
  accountName: 'optional-account-name',
});

const stash = await client.getStashTabs('Mirage', 0);
const tab = await client.getStashTabByName('Mirage', 'Currency');
```

**Key Methods:**
- `.getStashTabs(league, index)` - Get tab contents
- `.getAllStashTabs(league)` - List all tabs
- `.getStashTabByName(league, name)` - Find tab by name

---

## Output Format

### Item Display

Each item shows:
```
  Item Name [CORRUPTED]
  Base Type (iLvl: 86)
  Property: Value
  Requirements: Level 68, Str 120
  Sockets: R-R-R-G-G-B (6S6L)
  Implicit:
    +50 to maximum Life
  Explicit:
    +80 to maximum Life
    +45% to Fire Resistance
  Crafted:
    +20% to Quality
```

### Stash Tab List
```
[0] Currency - CurrencyStash
[1] Maps - MapStash
[2] Gems [HIDDEN] - PremiumStash (RGB: 255,0,0)
[3] Dump - NormalStash

Total: 4 tabs
```

---

## League Auto-Detection

The `stash` command automatically detects your current league:
- Uses same logic as `trade` commands
- Caches league to avoid repeated API calls
- Shows "Detecting current league..." on first run
- Can override with explicit league name

---

## Token Efficiency

**Efficient:**
- `stash:list` (5-20 lines per character)
- `stash:stash` without index (10-50 lines for tab list)

**Moderate:**
- `stash:stash <index>` (50-500 lines depending on tab contents)

**Tips:**
- List tabs before fetching contents
- Query specific tabs by name or index

---

## Quick Reference

**stash:list**
- No arguments
- Shows all characters with level, class, league

**stash:stash [league] [index|--name]**
- `[league]` - Optional, auto-detects if omitted
- `[index]` - Tab index (0-based)
- `--name <name>` - Tab name for search

**When API returns 403/404:** Use Option 1 (CDP Relay DOM scraping) — navigate the browser
to `pathofexile.com/account/view-stash/<account>/<league>` and read the DOM directly.
