---
skill_name: poe-auth
description: >-
  Auto-extract POESESSID and cf_clearance cookies from your browser for Path of Exile API access.
  Use when trade/price skills fail due to missing auth, when user says "poe auth", "poe login",
  "poe setup", "get poesessid", "refresh cookies", or before any trade operation that needs authentication.
version: 1.0.0
tags: [poe, auth, cookies, poesessid, setup, login]
---

# POE Auth - Auto Cookie Extraction

Automatically extracts `POESESSID` and `cf_clearance` cookies from your browser (Arc, Chrome, Edge, Firefox, Brave) so you don't need to manually copy them from DevTools.

## Prerequisites

- `uv` (Python package runner) — dependencies are auto-installed via inline script metadata
- A browser logged into pathofexile.com

## When to Use

- Before trade/price operations when `POESESSID` is not set
- User says "poe auth", "poe login", "poe setup", "get cookies", "refresh session"
- Trade API returns auth errors
- Starting a new session that needs POE API access

## Commands

### Quick: Get POESESSID for piping

```bash
# Just the session ID
uv run .claude/skills/poe-auth/scripts/poe_cookies.py --quiet

# JSON output
uv run .claude/skills/poe-auth/scripts/poe_cookies.py --json

# Export commands (copy-paste into shell)
uv run .claude/skills/poe-auth/scripts/poe_cookies.py --export

# Write to .env.poe file
uv run .claude/skills/poe-auth/scripts/poe_cookies.py --env
```

### Use with trade skills (inline)

```bash
# Set env vars inline for price check
POESESSID=$(uv run .claude/skills/poe-auth/scripts/poe_cookies.py -q) bun .claude/skills/poe-auth/ggg/price.ts --game poe2 --item "Mageblood"
```

### Export for current session

```bash
eval "$(uv run .claude/skills/poe-auth/scripts/poe_cookies.py --export)"
# Now POESESSID and CF_CLEARANCE are set for all subsequent commands
```

## Workflow

1. **Extract** - Run the script to pull cookies from browser
2. **Verify** - Check output is valid (32-char hex for POESESSID)
3. **Use** - Either export to env or pipe inline to trade commands

## Output Formats

### Default (key=value)
```
POESESSID=abc123...
cf_clearance=xyz789...
```

### JSON (`--json`)
```json
{
  "POESESSID": "abc123...",
  "cf_clearance": "xyz789..."
}
```

### Export (`--export`)
```bash
export POESESSID='abc123...'
export CF_CLEARANCE='xyz789...'
```

### Env file (`--env`)
Writes `POESESSID` and `CF_CLEARANCE` to `.env.poe` in current directory.

## Troubleshooting

- **"No PoE cookies found"** - Log into pathofexile.com in your browser first
- **"browser-cookie3 not installed"** - Run `pip3 install browser-cookie3`
- **macOS keychain prompt** - Allow access when macOS asks for keychain permission (needed to decrypt Chrome cookies)
- **Stale session** - Re-login to pathofexile.com in browser, then re-run

## Integration with Other Skills

**Note:** For trade operations, prefer using `/trade1` (CDP Relay-based) which uses your browser's existing session — no POESESSID extraction needed. CDP Relay's `cdp.evaluate_async(fetch(...))` automatically uses browser cookies.

This skill is still useful for:
- `/stash` - Stash tab management (TypeScript CLI, needs POESESSID)
- `/pob1 fetch` - Character fetching (needs POESESSID)
- Any non-CDP-Relay script that calls `pathofexile.com/api/*`

## Supported Browsers

| Browser | macOS | Windows | Linux |
|---------|-------|---------|-------|
| Arc     | Yes   | -       | -     |
| Chrome  | Yes   | Yes     | Yes   |
| Edge    | Yes   | Yes     | Yes   |
| Firefox | Yes   | Yes     | Yes   |
| Brave   | Yes   | Yes     | Yes   |
