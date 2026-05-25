---
skill_name: build-creator
description: Author a full POE2 build from a request + targets, materialize it as a PoB2 code, verify stats in POB2 headless, and publish a viewable link (poe.ninja / pobb.in). Use when user says "build giùm", "tạo build", "make me a build", or wants a build they can view/edit in PoB.
version: 0.1.0
tags: [poe2, path-of-building, build-creator, author, pob, poe.ninja, pobb.in]
---

# Build Creator (POE2)

Author a Path of Exile 2 build from a natural-language request, verify it in real
POB2 headless, and publish a shareable link the user can open on poe.ninja/poe2/pob
or pobb.in.

This is the **write** counterpart to `/pob` (which only reads/analyzes builds).

## When to use

- User says "build giùm <class/skill>", "tạo build", "make me a X build".
- User gives an archetype + targets ("spectre witch ~2M DPS, 5k ES").
- User wants a starting PoB they can open and tweak.

## The conversational workflow (you drive this)

1. **Gather references.** Pull the relevant POE2 data before designing:
   - Top builds of the archetype from poe.ninja (use `/pob` analyze on a poe.ninja/poe2 URL) — for tree/gear/gem ideas, NOT to fork.
   - Skill/gem data: `data/pob-source/poe2/src/Data/Gems.lua` (gem `name`, `variantId`, `grantedEffectId`/skillId, `gemId` metadata path).
   - Uniques: `data/pob-source/poe2/src/Data/Uniques/` for real item text.
   - Passive nodes: `/passive-skill-tree` for node ids + the class's `classId`.
2. **Propose the build in chat** (owner voice, prose): class/ascendancy, main skill + supports, key uniques, tree notable plan, expected stats + reasoning. Let the user steer BEFORE materializing.
3. **Materialize → verify loop.** Build a `BuildSpec`, run the pipeline, read POB2 stats, compare to targets, adjust the spec, re-verify. Bounded (~5 passes); if you can't hit the bar, report best-effort + the gap honestly.
4. **Publish** → return the viewable link.

## Spec shape (`scripts/spec.ts`)

```ts
BuildSpec {
  level, className, ascendClassName?,
  tree?:   { treeVersion?, classId, ascendClassId?, nodes: number[] },
  skills?: [{ label?, mainActiveSkill?, gems: [{ nameSpec, skillId?, gemId?, level?, quality?, enabled? }] }],
  items?:  [{ slot, text }],   // text = full PoB item text. Flasks are items: slot "Flask 1".."Flask 2"
}
```

POE2 notes baked into the emitter: gems are NOT socketed into gear (no `slot=` on
`<Skill>`); tree uses `0_N` versions (latest known `0_4`); `<Spec nodes="...">` is
authoritative (URL optional).

## Running the pipeline

```bash
# spec.json → POB2-verified stats + PoB code (+ optional pobb.in publish)
bun .claude/skills/build-creator/scripts/pipeline.ts /path/to/spec.json
bun .claude/skills/build-creator/scripts/pipeline.ts /path/to/spec.json --publish
```

Programmatic:

```ts
import { runPipeline } from './scripts/pipeline';
const { code, stats, published } = await runPipeline(spec, { publish: true });
```

## Verify (POB2 headless)

`scripts/verify.sh <xml-file>` loads a build into real POB2 and prints a
`##STATS##{...}` JSON line (Life, EnergyShield, Mana, TotalDPS, CombinedDPS,
FullDPS, TotalEHP). `scripts/verify.ts` wraps it. Loads raw XML directly via
`loadBuildFromXML` — no zlib needed.

**Always verify before publishing.** The round-trip tests only prove wiring
through a lenient decoder; only POB2 catches silent mod-text parse failures
(spec risk #1). If a mod you set doesn't move the expected stat, the mod text
didn't parse — fix it (ground item text in real `Uniques/` / poedb exports).

### One-time env setup

POB2 headless runs on `luajit` against `data/pob-source/poe2`. Native lua deps:

```bash
luarocks --lua-version=5.1 --lua-dir=/opt/homebrew/opt/luajit install luautf8 luafilesystem lua-zlib
```

(If `luarocks` errors with a bad lua interpreter, `brew reinstall luarocks` first.)

## Publish

- **pobb.in** (headless, default/fallback): `publishToPobbin(code)` → `https://pobb.in/<id>`. Works without a browser.
- **poe.ninja** (the viewer the user usually wants): the upload API gates headless
  requests, so it must run inside the user's Chrome. Use `playwriter`: navigate to
  `https://poe.ninja/poe2/pob`, then eval `poeninjaUploadSnippet(code)` (in `scripts/publish.ts`)
  in the page context — it POSTs `/poe2/pob/api/upload` with `URLSearchParams({code})`
  and returns the absolute `poe.ninja/poe2/pob/<id>` link. **This step needs the user's browser running.**

## Caveats

- `data/pob-source/poe2` is POE2 0.4-era. After 0.5 launch (2026-05-29) refresh it
  (`/pob` `fetch-poe2-data.sh`); node ids / gems / item bases shift, `treeVersion` → `0_5`.
- Jewels socketed into tree sockets are not emitted yet (needs `<Sockets>` in `<Spec>`) — v1.1.
- "Optimized" = per-request targets the user sets; the verify loop is the judge, not vibes.

## Files

```
scripts/
  spec.ts          # BuildSpec types
  spec-to-xml.ts   # deterministic BuildSpec → PoB2 XML emitter
  encode.ts        # XML → url-safe base64 PoB code (pure TS)
  verify.lua       # POB2 headless driver (load XML → stats JSON)
  verify.sh        # env + cd wrapper for verify.lua
  verify.ts        # TS interface to verify.sh
  publish.ts       # pobb.in POST + poe.ninja playwriter snippet
  pipeline.ts      # compose spec→xml→code→verify→publish (+ CLI)
  __tests__/       # bun tests (encode, spec-to-xml, verify, publish, pipeline)
```
```bash
bun test ./.claude/skills/build-creator/scripts/__tests__/
```
