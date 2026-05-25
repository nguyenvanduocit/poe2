# POE2 Mod Corpus Data — TODO

The regex generator (`../generate-regex.ts`) needs JSON corpora of all POE2 0.5 waystone and tablet mods to produce **correct shortest-unique-substring** output. Until they're bundled, the generator falls back to a hardcoded minimal sample (good for smoke tests only — DO NOT use its output for real bulk trade).

## Required Files

| File | Source |
|------|--------|
| `waystone-mods-0.5.json` | Combined low-tier + mid-tier + high-tier waystone modifiers from poe2wiki.net |
| `tablet-mods-0.5.json` | Precursor Tablet modifiers from poe2wiki.net |

## Schema

```json
[
  {
    "id": "infernal",
    "text": "Monsters deal 26-30% of Damage as Extra Fire",
    "fallback": "ex fi"
  },
  ...
]
```

- `id` — stable identifier (snake_case, matches wiki Modifier: page slug where possible)
- `text` — full mod text exactly as it appears on the waystone (the algorithm lowercases internally)
- `fallback` — optional regex string to use when the algorithm cannot find a unique substring (rare — usually only needed for mods that share a long substring with many others)

## Fetch Recipe (at 0.5 launch / 2026-05-29)

Source pages exist in the local wiki mirror:
- `data/wiki/wiki/List_of_modifiers_for_waystones_(low_tier).md`
- `data/wiki/wiki/List_of_modifiers_for_waystones_(mid_tier).md`
- `data/wiki/wiki/List_of_modifiers_for_waystones_(high_tier).md`

Refresh from upstream first to get 0.5 mods:

```bash
# Fetch the 3 waystone mod pages via the poewiki skill / goscrape mirror
# (whatever the project's standard wiki refresh command is at 0.5 launch)
```

Then write a one-off parser script (in `tmp/`, not here — per project rules) that:
1. Reads each `List_of_modifiers_for_waystones_*.md`
2. Extracts each mod's `text` from the italicized line under each `Modifier:` block
3. Generates a stable `id` from the wiki modifier name (e.g. `MapMonsterDamageAsFire3` → `infernal_t3`)
4. Strips % roll ranges where they don't affect the algorithm (e.g. `(26-30)%` → `#%`)
5. Writes the combined array to `waystone-mods-0.5.json` in this folder

Same recipe for `tablet-mods-0.5.json` against the Precursor Tablet mod pages.

## Why Bundle vs Fetch-on-Run

Bundled JSON makes the script:
- **Hermetic** — no network call at generation time, works offline
- **Reproducible** — same input → same regex across sessions
- **Auditable** — git-diffable when GGG changes mods mid-league

The trade is staleness: re-run the fetch recipe at every patch boundary (0.5.1, 0.5.2, 0.6.0, etc.) and commit the updated JSON.

## Validation

After bundling, smoke-test:

```bash
cd .claude/skills/map-mod-filter2
bun scripts/generate-regex.ts --exclude "extra cold,extra lightning,additional projectiles"
# Expect: a regex like "!s extra co|extra li|2 add" (or similar — exact substrings depend on the full corpus)

bun scripts/generate-regex.ts --include "pack size,quantity"
# Expect: a regex like "pack s|quantity" (or similar)
```

Compare the output against poe.re's live POE2 mode to verify your corpus matches the upstream community-maintained one.
