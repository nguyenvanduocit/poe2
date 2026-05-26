# Build Creator — Lua-native rewrite (design)

**Date:** 2026-05-27
**Status:** Approved (design phase)
**Supersedes:** the TypeScript pipeline described in `2026-05-25-build-creator-design.md`

## Problem

The current `build-creator` skill hand-emits Path of Building 2 XML in TypeScript
(`spec-to-xml.ts`), then shells out to luajit to verify. This forces us to
reverse-engineer and replicate every PoB2 wire-format requirement by hand —
root tag `<PathOfBuilding2>`, `targetVersion="0_1"`, `mainSocketGroup`, a
placeholder `<PlayerStat>`, `classInternalId` vs the legacy `classId`,
`ascendancyInternalId` tokens. Each requirement is a silent-failure trap: get any
one wrong and PoB2 loads a default L1 Ranger, so verify reports real-looking
numbers for the wrong build. The file's comment block documents five such traps.

Two further costs:

- **`bakeStats` exists only because we emit XML ourselves** — poe.ninja's viewer
  renders embedded `<PlayerStat>` verbatim, so the TS pipeline re-emits XML with
  verified stats baked in after verify.
- **Verify spawns a fresh luajit + loads XML + calcs (~1–2s) every call.** This
  makes any optimization loop (try a node, measure, revert) impractical.

## Key insight (proven)

`build:SaveDB("code")` in pob-source serializes the **live build object** into
canonical `<PathOfBuilding2>` XML — the exact inverse of the loader, so it can
never disagree with what PoB2 accepts. `Build:Save` (`Build.lua:984+`) writes the
`<Build>` attribs (targetVersion, level, className, ascendClassName,
mainSocketGroup) and emits `<PlayerStat>` children straight from the calc'd
`mainOutput`. The canonical export recipe lives at `ImportTab.lua:131`:

```lua
common.base64.encode(Deflate(build:SaveDB("code"))):gsub("+","-"):gsub("/","_")
```

PoC (run 2026-05-27, luajit against `data/pob-source/src`): construct a Witch +
Spark socket group via the object API, `SaveDB("code")` → 3556-char code with
`<?xml ...><PathOfBuilding2><Build level="1" mainS...` root; decode + Inflate +
`loadBuildFromXML` round-trips to the same class and Life. **HIGH confidence.**

Consequences:

- Every wire-format trap **disappears** — PoB serializes its own XML.
- `bakeStats` **disappears** — `SaveDB` already embeds verified `<PlayerStat>`.
- The build object stays loaded **in-process**, so mutate → `runCallback("OnFrame")`
  → read `mainOutput` is sub-millisecond. Optimization becomes trivial.

## Decisions (locked with user)

1. **Optimizer is in-scope for this rewrite** — not a follow-up.
2. **Spec format: JSON in → PoB object API.** JSON stays LLM-friendly; the Lua
   API surface is what the optimizer mutates.
3. **Publish: `io.popen("curl ...")` from Lua** for pobb.in. poe.ninja stays a
   playwriter snippet (browser-gated, external by necessity).
4. **Greenfield cutover** — delete the entire TS pipeline. No external callers
   exist (verified: only `CLAUDE.md` and the prior design doc reference it; no
   persisted `spec.json` fixtures).
5. **Optimizer v1 = greedy hill-climb** over node alloc + gem swap + item swap.
6. **Env wrapper keeps the descriptive name `run.sh`.**

## Architecture

A single long-lived luajit process loads `HeadlessWrapper.lua` **once**, then
operates on the build object in-process for construction, calculation,
optimization, and export. All modules sit in
`.claude/skills/build-creator/scripts/` and run with cwd = `data/pob-source/src`
(the env contract from the existing `verify.sh` / upstream `pob-cli.sh`).

### Components (all Lua)

- **`engine.lua`** — substrate over HeadlessWrapper. `init()` loads the wrapper
  once (suppressing load chatter). `commit()` = `runCallback("OnFrame")` then
  return a **fresh** `build.calcsTab.mainOutput` reference (it is replaced each
  frame — callers must not cache it). `stats()` extracts the canonical metric
  set. `assertClass(expected)` compares `build.spec.curClassName` and exits loud
  on mismatch (catches a bad class-name→id lookup). Owns the metric whitelist
  (`Life`, `EnergyShield`, `Mana`, `TotalDPS`, `CombinedDPS`, `FullDPS`,
  `TotalEHP`, plus the offence/defence set the upstream CLI already reads).

- **`construct.lua`** — JSON spec → loaded build object:
  - `newBuild()`, then resolve `class` name → classId by iterating
    `build.spec.tree.classes` matching `.name` (the table is keyed by classId and
    each entry carries `.integerId` and `.name`; `Build.lua` proves the shape) →
    `build.spec:SelectClass(classId)`.
  - `ascendancy` name → ascendClassId within the selected class →
    `build.spec:SelectAscendClass(id)`.
  - set `build.characterLevel`.
  - each skill group → `build.skillsTab:PasteSocketGroup(<grammar>)`. The
    structured `gems: ["Name level/quality", ...]` array is formatted into the
    PasteSocketGroup text grammar (verify exact grammar at implement time —
    upstream uses `"Spark 20/0  1\n"` = `name level/quality  enabled`).
  - each item → `build.itemsTab:CreateDisplayItemFromRaw(text, true)` then equip
    to its named slot.
  - each tree node id → `build.spec:AllocNode(build.spec.nodes[id])`
    (`AllocNode` takes the node **table**, not the id), then
    `build.spec:BuildAllDependsAndPaths()`.
  - `commit()`, then `engine.assertClass(spec.class)`.

- **`export.lua`** — the proven recipe: `SaveDB("code")` → `Deflate` →
  `base64.encode` → url-safe gsub. No `bakeStats` step.

- **`optimize.lua`** — primitives reused for node / gem / item:
  given a candidate list + a target metric name, for each candidate: apply the
  mutation → `commit()` → read target → keep if it improved by ≥ epsilon, else
  revert to the prior state. Greedy hill-climb, one pass per candidate, clean
  revert before the next try. Returns the chosen mutations + before/after metric.

- **`publish.lua`** — `io.popen` curl POST to `https://pobb.in/pob/` with the
  code as body and the PoB User-Agent → returns `https://pobb.in/<id>`. Emits the
  poe.ninja playwriter snippet (POST `/poe2/pob/api/upload` with
  `URLSearchParams({code})`) as text for the caller to run in the user's Chrome.

- **`cli.lua`** — dispatcher. Subcommands:
  - `build <spec.json>` → construct, print stats + code.
  - `build <spec.json> --publish` → also publish to pobb.in.
  - `optimize <spec.json>` → run the spec's `optimize` block, print chosen
    mutations + before/after + final code.
  - `analyze <pob-code>` → load foreign code, print stats (replaces the read-only
    bits; keeps the level/class assert ONLY on this foreign-load path).

- **`run.sh`** — env wrapper: sets `LUA_PATH`/`LUA_CPATH` (runtime/lua +
  ~/.luarocks), `cd`s to `data/pob-source/src`, `exec luajit cli.lua "$@"`.
  Climbs `../../../../data/pob-source` from the script dir (the canonical
  data-path pattern).

### Data flow

```
spec.json ──cli.lua──▶ construct.lua ──▶ [build object loaded in-process]
                                              │
                          (optional) optimize.lua mutates/measures/reverts
                                              │
                                          export.lua ──▶ PoB code
                                              │
                                   (optional) publish.lua ──▶ pobb.in URL
```

### JSON spec shape

```json
{
  "level": 90,
  "class": "Witch",
  "ascendancy": "Lich",
  "skills": [
    { "label": "Main", "gems": ["Spark 20/20", "Spell Echo 20/0"], "main": 1 }
  ],
  "items": [
    { "slot": "Weapon 1", "text": "Rarity: Rare\n..." }
  ],
  "tree": { "treeVersion": "0_4", "nodes": [123, 456] },
  "optimize": { "target": "TotalDPS", "tryNodes": [789], "trySwaps": [] }
}
```

`classInternalId` / `ascendancyInternalId` are gone — names only; PoB resolves
them. `optimize` is optional; absent ⇒ plain materialize.

## Error handling

- Construction wraps each PoB call in `pcall`; a failure prints
  `{"status":"error","error":...}` JSON and exits non-zero (matches upstream CLI
  convention) so the caller never reads stats from a half-built build.
- `engine.assertClass` is the load-correctness guard. For constructed builds it
  catches a wrong class-name→id mapping; for `analyze` it catches a silently
  rejected foreign code (the role the old `verify.lua` assert played).
- `publish.lua` checks curl's HTTP status; non-2xx → error, no URL returned.

## Testing

Lua tests run through the same `run.sh` env (luajit + pob-source). Reuse the
upstream `describe/it` (busted) convention already present in
`data/pob-source/tests/`. Cases:

1. **Round-trip**: construct a known spec → export → `analyze` the code →
   class, level, and stats match the constructed build.
2. **Baseline**: naked L1 Witch produces the same baseline stats the engine
   reports directly (guards against construction side effects).
3. **Class mapping**: `class: "Witch"` resolves to `curClassName == "Witch"`
   (not Ranger/Huntress — the array-index trap).
4. **Optimizer monotonicity**: after `optimize` with target `TotalDPS`, the
   final metric is ≥ the starting metric (revert never loses ground).
5. **Export determinism**: same spec → same code (stable serialization).

Delete the bun test suite (`__tests__/*.ts`).

## Files

**Delete:** `scripts/spec.ts`, `spec-to-xml.ts`, `encode.ts`, `verify.ts`,
`verify.sh`, `verify.lua`, `pipeline.ts`, `publish.ts`, `__tests__/*.ts`.

**Create:** `scripts/engine.lua`, `construct.lua`, `export.lua`, `optimize.lua`,
`publish.lua`, `cli.lua`, `run.sh`, `tests/*.lua`.

**Rewrite:** `SKILL.md` — new workflow (JSON spec → `run.sh build`/`optimize`),
new file map, document the in-process optimizer and the `io.popen` publish.

## Risk / confidence

- Export recipe + round-trip — **HIGH** (PoC).
- `SaveDB` embeds verified PlayerStat — **HIGH** (read `Build.lua:984+`).
- Construct API exact grammars (`PasteSocketGroup`, `AllocNode` arg shape, class
  lookup) — **MEDIUM**, signatures seen, exact format verified at implement time.
- Optimizer in-process revert cleanliness — **MEDIUM**, test #4 is the guard.
- `data/pob-source` is 0.4-era; after 0.5 launch (2026-05-29) refresh it and
  re-check `treeVersion`/`targetVersion`. The Lua approach is *more* robust to
  this than hand-XML because PoB serializes whatever version it loaded.
```

