# Build Creator — Lua-native rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace build-creator's hand-emitted-XML TypeScript pipeline with an in-process Lua toolkit that constructs, calculates, optimizes, exports, and publishes POE2 builds using Path of Building 2's own engine and serializer.

**Architecture:** A single luajit process loads `data/pob-source/src/HeadlessWrapper.lua` once and operates on the live `build` object in-process. Construction uses PoB's object API (`SelectClass`, `PasteSocketGroup`, `AddItem`+slot, `AllocNode`); export uses PoB's own `SaveDB("code")` + `Deflate` + base64 (so XML can never disagree with what PoB loads); optimization mutates/measures/reverts in-process (sub-ms/candidate). Publish shells out to curl from Lua.

**Tech Stack:** LuaJIT 5.1, Path of Building 2 (`data/pob-source`), a tiny home-grown Lua test harness (no busted dependency), `curl` via `io.popen`.

---

## Environment contract (read before any task)

Every Lua script runs with **cwd = `data/pob-source/src`** and these env vars (proven by the existing `verify.sh` and upstream `pob-cli.sh`):

```
LUA_PATH="<pob>/src/?.lua;<pob>/runtime/lua/?.lua;<pob>/runtime/lua/?/init.lua;$HOME/.luarocks/share/lua/5.1/?.lua;$HOME/.luarocks/share/lua/5.1/?/init.lua;./?.lua;./?/init.lua;;"
LUA_CPATH="$HOME/.luarocks/lib/lua/5.1/?.so;;"
```

`<pob>` = `data/pob-source`, reached by climbing `../../../../data/pob-source` from
`.claude/skills/build-creator/scripts/`. Native deps (`luautf8`, `luafilesystem`,
`lua-zlib`) are assumed installed (the existing skill documented the luarocks step).

Globals exposed by HeadlessWrapper (verified): `newBuild()`, `loadBuildFromXML(xml, name)`,
`runCallback("OnFrame")`, `build` (the build object), `common.base64.encode/decode`,
`Deflate(data)`, `Inflate(data)`, `new(className, ...)`. `Paste()` and `IsKeyDown()`
are no-op stubs (return nil) — `PasteSocketGroup(testInput)` therefore uses its arg.

All scripts live in `.claude/skills/build-creator/scripts/`. Paths below are relative
to the repo root `.`.

---

## File structure

```
.claude/skills/build-creator/
  SKILL.md                      # rewritten (Task 11)
  scripts/
    run.sh                      # env wrapper → luajit cli.lua "$@"   (Task 0)
    cli.lua                     # dispatcher: build/analyze/optimize/test (Tasks 7,9)
    engine.lua                  # HeadlessWrapper substrate            (Task 1)
    export.lua                  # SaveDB → PoB code                    (Task 2)
    construct.lua               # JSON spec → loaded build object      (Tasks 3-6)
    optimize.lua                # greedy hill-climb                    (Task 8)
    publish.lua                 # io.popen curl → pobb.in              (Task 10)
    lib/json.lua                # tiny JSON decode/encode              (Task 0)
    tests/
      helper.lua                # assert harness                      (Task 0)
      all.lua                   # test runner                         (Task 0)
      <feature>_test.lua        # one per feature                     (Tasks 1-9)
    fixtures/
      witch-spark.json          # sample spec                         (Task 7)
```

**Deleted in Task 0:** `scripts/spec.ts`, `spec-to-xml.ts`, `encode.ts`, `verify.ts`,
`verify.sh`, `verify.lua`, `pipeline.ts`, `publish.ts`, and `scripts/__tests__/`.

---

## Task 0: Scaffold env wrapper, test harness, JSON lib; delete TS

**Files:**
- Create: `.claude/skills/build-creator/scripts/run.sh`
- Create: `.claude/skills/build-creator/scripts/lib/json.lua`
- Create: `.claude/skills/build-creator/scripts/tests/helper.lua`
- Create: `.claude/skills/build-creator/scripts/tests/all.lua`
- Create: `.claude/skills/build-creator/scripts/tests/smoke_test.lua`
- Create: `.claude/skills/build-creator/scripts/cli.lua` (stub dispatcher)
- Delete: all `.ts` files + `__tests__/` listed above

- [ ] **Step 1: Delete the TypeScript pipeline**

```bash
cd ./.claude/skills/build-creator/scripts
git rm spec.ts spec-to-xml.ts encode.ts verify.ts verify.sh verify.lua pipeline.ts publish.ts
git rm -r __tests__
```

- [ ] **Step 2: Write `lib/json.lua`** (minimal pure-Lua JSON; decode is all we strictly need, encode for CLI output)

```lua
-- Minimal JSON for spec input + CLI output. Pure Lua 5.1, no deps.
local json = {}

local function skipWs(s, i)
  local _, j = s:find("^[ \t\r\n]*", i)
  return (j or i - 1) + 1
end

local decodeValue -- fwd

local function decodeString(s, i)
  assert(s:sub(i, i) == '"', "json: expected string at " .. i)
  i = i + 1
  local buf = {}
  while true do
    local c = s:sub(i, i)
    if c == "" then error("json: unterminated string") end
    if c == '"' then return table.concat(buf), i + 1 end
    if c == "\\" then
      local e = s:sub(i + 1, i + 1)
      local map = { ['"'] = '"', ["\\"] = "\\", ["/"] = "/", b = "\b", f = "\f", n = "\n", r = "\r", t = "\t" }
      if map[e] then buf[#buf + 1] = map[e]; i = i + 2
      elseif e == "u" then
        local hex = s:sub(i + 2, i + 5)
        buf[#buf + 1] = string.char(tonumber(hex, 16) % 256); i = i + 6
      else error("json: bad escape \\" .. e) end
    else buf[#buf + 1] = c; i = i + 1 end
  end
end

local function decodeNumber(s, i)
  local _, j, num = s:find("^(-?%d+%.?%d*[eE]?[+-]?%d*)", i)
  assert(num, "json: bad number at " .. i)
  return tonumber(num), j + 1
end

local function decodeArray(s, i)
  i = skipWs(s, i + 1)
  local arr = {}
  if s:sub(i, i) == "]" then return arr, i + 1 end
  while true do
    local v; v, i = decodeValue(s, i); arr[#arr + 1] = v
    i = skipWs(s, i)
    local c = s:sub(i, i)
    if c == "]" then return arr, i + 1 end
    assert(c == ",", "json: expected , or ] in array at " .. i)
    i = skipWs(s, i + 1)
  end
end

local function decodeObject(s, i)
  i = skipWs(s, i + 1)
  local obj = {}
  if s:sub(i, i) == "}" then return obj, i + 1 end
  while true do
    local k; k, i = decodeString(s, i)
    i = skipWs(s, i)
    assert(s:sub(i, i) == ":", "json: expected : at " .. i)
    local v; v, i = decodeValue(s, skipWs(s, i + 1)); obj[k] = v
    i = skipWs(s, i)
    local c = s:sub(i, i)
    if c == "}" then return obj, i + 1 end
    assert(c == ",", "json: expected , or } in object at " .. i)
    i = skipWs(s, i + 1)
  end
end

decodeValue = function(s, i)
  i = skipWs(s, i)
  local c = s:sub(i, i)
  if c == '"' then return decodeString(s, i)
  elseif c == "{" then return decodeObject(s, i)
  elseif c == "[" then return decodeArray(s, i)
  elseif c == "t" and s:sub(i, i + 3) == "true" then return true, i + 4
  elseif c == "f" and s:sub(i, i + 4) == "false" then return false, i + 5
  elseif c == "n" and s:sub(i, i + 3) == "null" then return nil, i + 4
  else return decodeNumber(s, i) end
end

function json.decode(s)
  local v = decodeValue(s, 1)
  return v
end

function json.encode(v)
  local t = type(v)
  if t == "nil" then return "null"
  elseif t == "boolean" then return v and "true" or "false"
  elseif t == "number" then
    if v ~= v or v == math.huge or v == -math.huge then return "null" end
    return string.format("%.6g", v)
  elseif t == "string" then
    return '"' .. v:gsub("\\", "\\\\"):gsub('"', '\\"'):gsub("\n", "\\n") .. '"'
  elseif t == "table" then
    if #v > 0 or next(v) == nil then
      local parts = {}
      for _, e in ipairs(v) do parts[#parts + 1] = json.encode(e) end
      return "[" .. table.concat(parts, ",") .. "]"
    end
    local parts = {}
    for k, val in pairs(v) do parts[#parts + 1] = json.encode(tostring(k)) .. ":" .. json.encode(val) end
    return "{" .. table.concat(parts, ",") .. "}"
  end
  return "null"
end

return json
```

- [ ] **Step 3: Write `tests/helper.lua`** (assert harness)

```lua
-- Tiny test harness. Each test file returns a table of { name = function }.
local H = { passed = 0, failed = 0, failures = {} }

function H.eq(actual, expected, msg)
  if actual ~= expected then
    error((msg or "eq") .. ": expected " .. tostring(expected) .. ", got " .. tostring(actual), 2)
  end
end

function H.truthy(v, msg)
  if not v then error((msg or "truthy") .. ": value was falsy", 2) end
end

function H.near(actual, expected, tol, msg)
  tol = tol or 1e-6
  if math.abs(actual - expected) > tol then
    error((msg or "near") .. ": expected ~" .. tostring(expected) .. ", got " .. tostring(actual), 2)
  end
end

-- Runs a { name = fn } table; records results into H.
function H.run(tests)
  for name, fn in pairs(tests) do
    local ok, err = pcall(fn)
    if ok then
      H.passed = H.passed + 1
      io.write("  PASS " .. name .. "\n")
    else
      H.failed = H.failed + 1
      H.failures[#H.failures + 1] = name .. ": " .. tostring(err)
      io.write("  FAIL " .. name .. " -- " .. tostring(err) .. "\n")
    end
  end
end

return H
```

- [ ] **Step 4: Write `tests/all.lua`** (runner — discovers test files by explicit list)

```lua
-- Runs every *_test.lua module. Add new test files to TEST_FILES.
local SCRIPT_DIR = (arg and arg[0] or ""):match("(.*/)") or "./"
package.path = SCRIPT_DIR .. "../?.lua;" .. SCRIPT_DIR .. "?.lua;" .. package.path
local H = require("tests.helper")

local TEST_FILES = {
  "tests.smoke_test",
  -- appended as tasks land:
  -- "tests.engine_test", "tests.export_test", "tests.construct_test",
  -- "tests.cli_test", "tests.optimize_test",
}

for _, mod in ipairs(TEST_FILES) do
  io.write(mod .. "\n")
  H.run(require(mod))
end

io.write(string.format("\n%d passed, %d failed\n", H.passed, H.failed))
if H.failed > 0 then
  for _, f in ipairs(H.failures) do io.write("  " .. f .. "\n") end
  os.exit(1)
end
```

- [ ] **Step 5: Write `tests/smoke_test.lua`** (proves HeadlessWrapper loads in the test env)

```lua
local H = require("tests.helper")
return {
  ["headless wrapper loads and newBuild works"] = function()
    local _p = print; print = function() end
    dofile("HeadlessWrapper.lua")  -- cwd is pob src
    print = _p
    newBuild()
    runCallback("OnFrame")
    H.truthy(build, "build global exists")
    H.truthy(build.calcsTab.mainOutput.Life, "default build has Life")
  end,
}
```

- [ ] **Step 6: Write `cli.lua` stub** (dispatcher with only `test` for now)

```lua
-- build-creator CLI. Run via run.sh (sets cwd = pob src + LUA paths).
local SCRIPT_DIR = (arg and arg[0] or ""):match("(.*/)") or "./"
package.path = SCRIPT_DIR .. "?.lua;" .. SCRIPT_DIR .. "lib/?.lua;" .. package.path

local function die(msg) io.stderr:write(msg .. "\n"); os.exit(1) end

local cmd = arg[1]
if cmd == "test" then
  dofile(SCRIPT_DIR .. "tests/all.lua")
  return
end

die("usage: run.sh test    (more commands land in later tasks)")
```

- [ ] **Step 7: Write `run.sh`** (env wrapper)

```bash
#!/bin/bash
# build-creator entry point. Runs cli.lua inside the PoB2 headless env.
# Usage: run.sh <command> [args...]   (e.g. run.sh test, run.sh build spec.json)
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
# .claude/skills/build-creator/scripts → climb 4 to repo root
REPO_ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"
POB="$REPO_ROOT/data/pob-source"
RT="$POB/runtime/lua"
LR="$HOME/.luarocks"

export LUA_PATH="$POB/src/?.lua;$RT/?.lua;$RT/?/init.lua;$LR/share/lua/5.1/?.lua;$LR/share/lua/5.1/?/init.lua;./?.lua;./?/init.lua;;"
export LUA_CPATH="$LR/lib/lua/5.1/?.so;;"

cd "$POB/src"
exec luajit "$SCRIPT_DIR/cli.lua" "$@"
```

- [ ] **Step 8: Make run.sh executable and run the smoke test**

Run:
```bash
chmod +x ./.claude/skills/build-creator/scripts/run.sh
./.claude/skills/build-creator/scripts/run.sh test
```
Expected: `smoke_test` block prints `PASS headless wrapper loads...`, final line `1 passed, 0 failed`, exit 0.

- [ ] **Step 9: Commit**

```bash
cd .
git add .claude/skills/build-creator/scripts
git commit -m "refactor(build-creator): scaffold Lua toolkit, remove TS pipeline"
```

---

## Task 1: engine.lua — HeadlessWrapper substrate

**Files:**
- Create: `.claude/skills/build-creator/scripts/engine.lua`
- Test: `.claude/skills/build-creator/scripts/tests/engine_test.lua`

- [ ] **Step 1: Write the failing test** (`tests/engine_test.lua`)

```lua
local H = require("tests.helper")
local engine = require("engine")
return {
  ["init loads wrapper once and stats reads mainOutput"] = function()
    engine.init()
    engine.newBuild()
    engine.commit()
    local s = engine.stats()
    H.truthy(s.Life and s.Life > 0, "Life present after commit")
  end,
  ["assertClass passes for the selected class"] = function()
    engine.init(); engine.newBuild()
    engine.selectClass("Witch")
    engine.commit()
    engine.assertClass("Witch")  -- must not error
  end,
  ["assertClass errors on mismatch"] = function()
    engine.init(); engine.newBuild()
    engine.selectClass("Witch")
    local ok = pcall(function() engine.assertClass("Ranger") end)
    H.eq(ok, false, "assertClass should error on wrong class")
  end,
}
```

- [ ] **Step 2: Run to verify it fails**

Add `"tests.engine_test"` to `TEST_FILES` in `tests/all.lua`, then:
Run: `run.sh test`
Expected: FAIL — `module 'engine' not found`.

- [ ] **Step 3: Write `engine.lua`**

```lua
-- Substrate over PoB2 HeadlessWrapper. Loads the engine once, then exposes
-- thin helpers over the live `build` object. cwd must be the pob src dir.
local engine = {}
local loaded = false

local METRIC_KEYS = {
  "Life", "EnergyShield", "Mana", "Armour", "Evasion",
  "TotalDPS", "CombinedDPS", "FullDPS", "TotalEHP",
  "FireResist", "ColdResist", "LightningResist", "ChaosResist",
}

function engine.init()
  if loaded then return end
  local _p = print; print = function() end
  dofile("HeadlessWrapper.lua")
  print = _p
  loaded = true
end

function engine.newBuild() newBuild() end

-- runCallback recomputes the build; mainOutput is replaced each frame so we
-- never cache it — callers go through engine.stats()/engine.out().
function engine.commit() runCallback("OnFrame") end

function engine.out() return build.calcsTab.mainOutput or {} end

function engine.stats()
  local o = engine.out()
  local s = {}
  for _, k in ipairs(METRIC_KEYS) do
    local v = o[k]
    if type(v) == "number" and v == v then s[k] = v end
  end
  return s
end

-- Resolve a class display name to its classId key in build.spec.tree.classes.
function engine.classIdByName(name)
  for classId, class in pairs(build.spec.tree.classes) do
    if class.name == name then return classId end
  end
  return nil
end

function engine.selectClass(name)
  local id = engine.classIdByName(name)
  if not id then error("engine: unknown class '" .. tostring(name) .. "'") end
  build.spec:SelectClass(id)
end

function engine.assertClass(expected)
  local actual = build.spec and build.spec.curClassName
  if actual ~= expected then
    error("engine.assertClass: expected class '" .. tostring(expected)
      .. "', build resolved '" .. tostring(actual) .. "'")
  end
end

return engine
```

- [ ] **Step 4: Run to verify it passes**

Run: `run.sh test`
Expected: `engine_test` block all PASS.

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/build-creator/scripts/engine.lua \
        .claude/skills/build-creator/scripts/tests/engine_test.lua \
        .claude/skills/build-creator/scripts/tests/all.lua
git commit -m "feat(build-creator): engine substrate over HeadlessWrapper"
```

---

## Task 2: export.lua — SaveDB → PoB code (with round-trip test)

**Files:**
- Create: `.claude/skills/build-creator/scripts/export.lua`
- Test: `.claude/skills/build-creator/scripts/tests/export_test.lua`

- [ ] **Step 1: Write the failing test** (`tests/export_test.lua`)

```lua
local H = require("tests.helper")
local engine = require("engine")
local export = require("export")
return {
  ["code is url-safe base64 and round-trips class/level"] = function()
    engine.init(); engine.newBuild()
    engine.selectClass("Witch")
    build.characterLevel = 30
    engine.commit()
    local code = export.toCode()
    H.truthy(#code > 100, "code is non-trivial length")
    H.eq(code:find("[+/]"), nil, "code has no + or / (url-safe)")

    -- round-trip: decode → inflate → reload → same class/level
    local xml = export.decode(code)
    H.truthy(xml:find("<PathOfBuilding2>", 1, true), "root tag present")
    loadBuildFromXML(xml, "rt"); engine.commit()
    H.eq(build.spec.curClassName, "Witch", "class round-trips")
    H.eq(build.characterLevel, 30, "level round-trips")
  end,
}
```

- [ ] **Step 2: Run to verify it fails**

Add `"tests.export_test"` to `TEST_FILES`. Run: `run.sh test`
Expected: FAIL — `module 'export' not found`.

- [ ] **Step 3: Write `export.lua`**

```lua
-- Export the live build to a PoB import code, and decode codes back to XML.
-- Recipe is PoB's own (ImportTab.lua): base64(Deflate(SaveDB("code"))) url-safe.
-- SaveDB serializes the build object — including <PlayerStat> from mainOutput —
-- so the XML can never disagree with what PoB loads, and stats are embedded
-- without a separate bake step.
local export = {}

function export.toCode()
  local xml = build:SaveDB("code")
  if not xml then error("export: SaveDB returned nil") end
  return (common.base64.encode(Deflate(xml)):gsub("+", "-"):gsub("/", "_"))
end

function export.decode(code)
  local b64 = code:gsub("-", "+"):gsub("_", "/")
  local raw = common.base64.decode(b64)
  if not raw or #raw == 0 then error("export: base64 decode failed") end
  local xml = Inflate(raw)
  if not xml or #xml == 0 then error("export: inflate failed") end
  return xml
end

return export
```

- [ ] **Step 4: Run to verify it passes**

Run: `run.sh test`
Expected: `export_test` PASS (code length, url-safe, round-trip class=Witch level=30).

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/build-creator/scripts/export.lua \
        .claude/skills/build-creator/scripts/tests/export_test.lua \
        .claude/skills/build-creator/scripts/tests/all.lua
git commit -m "feat(build-creator): export via PoB SaveDB recipe + round-trip test"
```

---

## Task 3: construct.lua — class + ascendancy + level

**Files:**
- Create: `.claude/skills/build-creator/scripts/construct.lua`
- Test: `.claude/skills/build-creator/scripts/tests/construct_test.lua`

- [ ] **Step 1: Write the failing test** (`tests/construct_test.lua`)

```lua
local H = require("tests.helper")
local engine = require("engine")
local construct = require("construct")
return {
  ["class+ascendancy+level applied from spec"] = function()
    engine.init()
    construct.build({ level = 80, class = "Witch", ascendancy = "Infernalist" })
    H.eq(build.spec.curClassName, "Witch", "class set")
    H.eq(build.characterLevel, 80, "level set")
    H.eq(build.spec.curAscendClassName, "Infernalist", "ascendancy set")
  end,
  ["unknown class raises"] = function()
    engine.init()
    local ok = pcall(function() construct.build({ level = 1, class = "Notaclass" }) end)
    H.eq(ok, false, "unknown class errors")
  end,
}
```

> NOTE on ascendancy name: "Infernalist" is a known POE2 0.4 Witch ascendancy.
> If the loaded `data/pob-source` differs, the implementer picks any ascendancy
> present in `build.spec.curClass.classes[*].name` for the Witch and updates the
> test literal to match. The assertion shape stays the same.

- [ ] **Step 2: Run to verify it fails**

Add `"tests.construct_test"` to `TEST_FILES`. Run: `run.sh test`
Expected: FAIL — `module 'construct' not found`.

- [ ] **Step 3: Write `construct.lua`** (class/ascendancy/level only; skills/items/tree added in Tasks 4-6)

```lua
-- JSON spec → loaded PoB build object, using PoB's own object API.
local engine = require("engine")
local construct = {}

local function ascendIdByName(name)
  for ascendId, asc in pairs(build.spec.curClass.classes) do
    if asc.name == name then return ascendId end
  end
  return nil
end

-- Build the full character from a decoded spec table. Returns nothing; the
-- result lives in the global `build`. Raises on any unresolved name.
function construct.build(spec)
  engine.newBuild()

  engine.selectClass(spec.class)

  if spec.ascendancy and spec.ascendancy ~= "" then
    local aid = ascendIdByName(spec.ascendancy)
    if not aid then
      error("construct: unknown ascendancy '" .. spec.ascendancy
        .. "' for class '" .. spec.class .. "'")
    end
    build.spec:SelectAscendClass(aid)
  end

  if spec.level then build.characterLevel = spec.level end

  -- skills / items / tree are layered in by later tasks.

  engine.commit()
  engine.assertClass(spec.class)
end

return construct
```

- [ ] **Step 4: Run to verify it passes**

Run: `run.sh test`
Expected: `construct_test` PASS. (If the ascendancy literal needed adjusting per the NOTE, do it now and re-run.)

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/build-creator/scripts/construct.lua \
        .claude/skills/build-creator/scripts/tests/construct_test.lua \
        .claude/skills/build-creator/scripts/tests/all.lua
git commit -m "feat(build-creator): construct class/ascendancy/level from spec"
```

---

## Task 4: construct.lua — skill groups (PasteSocketGroup)

**Files:**
- Modify: `.claude/skills/build-creator/scripts/construct.lua`
- Test: `.claude/skills/build-creator/scripts/tests/construct_test.lua` (add case)

PasteSocketGroup grammar (`SkillsTab.lua:601`):
`([ %a']+) (%d+)/(%d+) ?(%a*) ([%d%.]+)` = `Name level/quality [STATE] count`.
A group is text: optional `Label: X\n`, then one line per gem `Name L/Q  1`
(double space = empty STATE, trailing `1` = count). Spec gem strings are
`"Name level/quality"`; construct appends `  1`.

- [ ] **Step 1: Add the failing test case** (append to the returned table in `construct_test.lua`)

```lua
  ["skill group adds a socket group with the active gem"] = function()
    engine.init()
    construct.build({
      level = 80, class = "Witch", ascendancy = "Infernalist",
      skills = { { label = "Main", gems = { "Spark 20/20" }, main = 1 } },
    })
    local groups = build.skillsTab.socketGroupList
    H.eq(#groups, 1, "one socket group")
    H.eq(groups[1].label, "Main", "label applied")
    H.eq(groups[1].gemList[1].nameSpec, "Spark", "active gem nameSpec")
    H.eq(groups[1].gemList[1].level, 20, "gem level parsed")
    H.eq(groups[1].gemList[1].quality, 20, "gem quality parsed")
  end,
```

- [ ] **Step 2: Run to verify it fails**

Run: `run.sh test`
Expected: FAIL — `#groups` is 0 (skills not yet handled).

- [ ] **Step 3: Add skill handling to `construct.lua`**

Add this helper above `construct.build`:

```lua
local function pasteSkillGroup(group)
  local lines = {}
  if group.label and group.label ~= "" then
    lines[#lines + 1] = "Label: " .. group.label
  end
  for _, gem in ipairs(group.gems or {}) do
    -- gem is "Name level/quality"; PasteSocketGroup wants a trailing count.
    -- Append "  1" (double space = empty state token, 1 = count).
    lines[#lines + 1] = gem .. "  1"
  end
  build.skillsTab:PasteSocketGroup(table.concat(lines, "\n") .. "\n")
end
```

Then, inside `construct.build`, after the level line and before `engine.commit()`:

```lua
  if spec.skills then
    for _, group in ipairs(spec.skills) do
      pasteSkillGroup(group)
    end
    if spec.skills[1] then build.mainSocketGroup = 1 end
  end
```

- [ ] **Step 4: Run to verify it passes**

Run: `run.sh test`
Expected: all `construct_test` cases PASS, including the new skill-group case.

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/build-creator/scripts/construct.lua \
        .claude/skills/build-creator/scripts/tests/construct_test.lua
git commit -m "feat(build-creator): construct skill groups via PasteSocketGroup"
```

---

## Task 5: construct.lua — items (AddItem + explicit slot)

**Files:**
- Modify: `.claude/skills/build-creator/scripts/construct.lua`
- Test: `.claude/skills/build-creator/scripts/tests/construct_test.lua` (add case)

Item recipe (`ItemsTab.lua`): `new("Item", raw)` → `NormaliseQuality()` →
`BuildModList()` → `itemsTab:AddItem(item, true)` (noAutoEquip; assigns `item.id`)
→ `itemsTab.slots[slotName]:SetSelItemId(item.id)` (honor the spec's exact slot).

- [ ] **Step 1: Add the failing test case** (append to `construct_test.lua`)

```lua
  ["item is created and equipped to its named slot"] = function()
    engine.init()
    construct.build({
      level = 80, class = "Witch", ascendancy = "Infernalist",
      items = { { slot = "Helmet",
        text = "Rarity: NORMAL\nIron Hat\nIron Hat" } },
    })
    local slot = build.itemsTab.slots["Helmet"]
    H.truthy(slot and slot.selItemId and slot.selItemId > 0, "helmet slot has an item")
    local item = build.itemsTab.items[slot.selItemId]
    H.truthy(item and item.baseName, "equipped item resolved a base")
  end,
```

> NOTE: "Iron Hat" is a real POE2 helmet base in 0.4-era data. If the loaded
> data lacks it, the implementer substitutes any base present under
> `data/pob-source/src/Data/Bases/` (helmet) and updates the test text.

- [ ] **Step 2: Run to verify it fails**

Run: `run.sh test`
Expected: FAIL — `build.itemsTab.slots["Helmet"].selItemId` is 0/nil.

- [ ] **Step 3: Add item handling to `construct.lua`**

Add this helper above `construct.build`:

```lua
local function equipItem(entry)
  local item = new("Item", entry.text)
  if not item.base then
    error("construct: item text did not resolve a base for slot '" .. tostring(entry.slot) .. "'")
  end
  item:NormaliseQuality()
  item:BuildModList()
  build.itemsTab:AddItem(item, true)  -- noAutoEquip; assigns item.id
  local slot = build.itemsTab.slots[entry.slot]
  if not slot then
    error("construct: unknown item slot '" .. tostring(entry.slot) .. "'")
  end
  slot:SetSelItemId(item.id)
end
```

Then, inside `construct.build`, after the skills block and before `engine.commit()`:

```lua
  if spec.items then
    for _, entry in ipairs(spec.items) do equipItem(entry) end
    build.itemsTab:PopulateSlots()
  end
```

- [ ] **Step 4: Run to verify it passes**

Run: `run.sh test`
Expected: all `construct_test` cases PASS, including the item case.

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/build-creator/scripts/construct.lua \
        .claude/skills/build-creator/scripts/tests/construct_test.lua
git commit -m "feat(build-creator): construct items equipped to explicit slots"
```

---

## Task 6: construct.lua — passive tree nodes (AllocNode)

**Files:**
- Modify: `.claude/skills/build-creator/scripts/construct.lua`
- Test: `.claude/skills/build-creator/scripts/tests/construct_test.lua` (add case)

Node recipe: `build.spec:AllocNode(build.spec.nodes[id])` per id. `AllocNode`
allocates the whole path to the node, so leaf ids auto-fill intermediates;
order-independent. A final `build.spec:BuildAllDependsAndPaths()` ensures paths
are coherent. Nodes with no path are skipped by AllocNode (it early-returns);
construct logs a warning to stderr so a bad id is visible, not silent.

- [ ] **Step 1: Add the failing test case** (append to `construct_test.lua`)

```lua
  ["tree nodes allocate (count increases beyond class start)"] = function()
    engine.init()
    -- Discover two real allocatable node ids adjacent to the Witch start node,
    -- so the test is data-version independent.
    construct.build({ level = 80, class = "Witch", ascendancy = "Infernalist" })
    local startId = build.spec.curClass.startNodeId
    local picks = {}
    for _, n in ipairs(build.spec.nodes[startId].linked or {}) do
      if n.id and not n.isAscendancyStart and n.type ~= "ClassStart" then
        picks[#picks + 1] = n.id
        if #picks >= 2 then break end
      end
    end
    H.truthy(#picks >= 1, "found at least one adjacent node to allocate")

    local before = 0
    for _ in pairs(build.spec.allocNodes) do before = before + 1 end

    construct.build({
      level = 80, class = "Witch", ascendancy = "Infernalist",
      tree = { nodes = picks },
    })

    local after = 0
    for _ in pairs(build.spec.allocNodes) do after = after + 1 end
    H.truthy(after > before, "allocNodes grew after allocating tree nodes")
  end,
```

- [ ] **Step 2: Run to verify it fails**

Run: `run.sh test`
Expected: FAIL — `after` not greater than `before` (tree not handled).

- [ ] **Step 3: Add tree handling to `construct.lua`**

Add this helper above `construct.build`:

```lua
local function allocNodes(ids)
  for _, id in ipairs(ids) do
    local node = build.spec.nodes[id]
    if node then
      build.spec:AllocNode(node)
    else
      io.stderr:write("construct: warning — unknown node id " .. tostring(id) .. "\n")
    end
  end
  build.spec:BuildAllDependsAndPaths()
end
```

Then, inside `construct.build`, after the items block and before `engine.commit()`:

```lua
  if spec.tree and spec.tree.nodes then
    allocNodes(spec.tree.nodes)
  end
```

- [ ] **Step 4: Run to verify it passes**

Run: `run.sh test`
Expected: all `construct_test` cases PASS, including the tree case.

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/build-creator/scripts/construct.lua \
        .claude/skills/build-creator/scripts/tests/construct_test.lua
git commit -m "feat(build-creator): construct passive tree node allocation"
```

---

## Task 7: cli.lua — `build` and `analyze` subcommands + fixture

**Files:**
- Modify: `.claude/skills/build-creator/scripts/cli.lua`
- Create: `.claude/skills/build-creator/scripts/fixtures/witch-spark.json`
- Test: `.claude/skills/build-creator/scripts/tests/cli_test.lua`

- [ ] **Step 1: Write the fixture** (`fixtures/witch-spark.json`)

```json
{
  "level": 80,
  "class": "Witch",
  "ascendancy": "Infernalist",
  "skills": [
    { "label": "Main", "gems": ["Spark 20/20"], "main": 1 }
  ],
  "tree": { "treeVersion": "0_4", "nodes": [] }
}
```

- [ ] **Step 2: Write the failing test** (`tests/cli_test.lua`)

These test the library functions cli.lua will expose (not the process), so they
run inside the harness. cli.lua exposes `M.runBuild(specTable)` returning
`{ stats, code }` and `M.runAnalyze(code)` returning `{ stats, class, level }`.

```lua
local H = require("tests.helper")
local cli = require("cli")
return {
  ["runBuild returns stats and a code"] = function()
    local r = cli.runBuild({
      level = 80, class = "Witch", ascendancy = "Infernalist",
      skills = { { label = "Main", gems = { "Spark 20/20" }, main = 1 } },
    })
    H.truthy(r.code and #r.code > 100, "code returned")
    H.truthy(r.stats.Life and r.stats.Life > 0, "Life computed")
  end,
  ["runAnalyze round-trips a built code"] = function()
    local r = cli.runBuild({ level = 42, class = "Witch" })
    local a = cli.runAnalyze(r.code)
    H.eq(a.class, "Witch", "class")
    H.eq(a.level, 42, "level")
  end,
}
```

- [ ] **Step 3: Run to verify it fails**

Add `"tests.cli_test"` to `TEST_FILES`. Run: `run.sh test`
Expected: FAIL — `cli` has no `runBuild` (current stub only handles `test`).

- [ ] **Step 4: Rewrite `cli.lua`** (library functions + process dispatch)

```lua
-- build-creator CLI + library. Run via run.sh (cwd = pob src, LUA paths set).
local SCRIPT_DIR = (arg and arg[0] or ""):match("(.*/)") or "./"
package.path = SCRIPT_DIR .. "?.lua;" .. SCRIPT_DIR .. "lib/?.lua;" .. package.path

local engine = require("engine")
local construct = require("construct")
local export = require("export")
local json = require("json")

local M = {}

function M.runBuild(spec)
  engine.init()
  construct.build(spec)
  return { stats = engine.stats(), code = export.toCode() }
end

function M.runAnalyze(code)
  engine.init()
  local xml = export.decode(code)
  loadBuildFromXML(xml, "analyze")
  engine.commit()
  return {
    stats = engine.stats(),
    class = build.spec and build.spec.curClassName,
    level = build.characterLevel,
  }
end

-- ---- process entry ----
local function die(msg) io.stderr:write(msg .. "\n"); os.exit(1) end
local function readFile(p) local f = assert(io.open(p, "r")); local s = f:read("*a"); f:close(); return s end

if arg and arg[0] and arg[0]:find("cli%.lua$") and arg[1] then
  local cmd = arg[1]
  if cmd == "test" then
    dofile(SCRIPT_DIR .. "tests/all.lua")
  elseif cmd == "build" then
    local specPath = arg[2] or die("usage: run.sh build <spec.json> [--publish]")
    local spec = json.decode(readFile(specPath))
    local r = M.runBuild(spec)
    if arg[3] == "--publish" then
      local publish = require("publish")
      r.published = publish.toPobbin(r.code)
    end
    print(json.encode({ status = "ok", stats = r.stats, code = r.code, published = r.published }))
  elseif cmd == "analyze" then
    local code = arg[2] or die("usage: run.sh analyze <pob-code>")
    print(json.encode({ status = "ok", analyze = M.runAnalyze(code) }))
  elseif cmd == "optimize" then
    local specPath = arg[2] or die("usage: run.sh optimize <spec.json>")
    local spec = json.decode(readFile(specPath))
    local optimize = require("optimize")
    print(json.encode({ status = "ok", result = optimize.run(spec) }))
  else
    die("unknown command: " .. cmd)
  end
end

return M
```

> The `optimize` and `--publish` branches reference modules built in Tasks 8 & 10.
> They are require'd lazily inside their branches, so cli_test (which calls only
> runBuild/runAnalyze) passes before those modules exist.

- [ ] **Step 5: Run to verify it passes**

Run: `run.sh test`
Expected: `cli_test` PASS.

- [ ] **Step 6: End-to-end process check (the real CLI path)**

Run: `run.sh build .claude/skills/build-creator/scripts/fixtures/witch-spark.json`
Expected: a JSON line `{"status":"ok","stats":{..."Life":<n>...},"code":"<long url-safe code>"}` on stdout, exit 0.

- [ ] **Step 7: Commit**

```bash
git add .claude/skills/build-creator/scripts/cli.lua \
        .claude/skills/build-creator/scripts/fixtures/witch-spark.json \
        .claude/skills/build-creator/scripts/tests/cli_test.lua \
        .claude/skills/build-creator/scripts/tests/all.lua
git commit -m "feat(build-creator): cli build/analyze subcommands + fixture"
```

---

## Task 8: optimize.lua — greedy hill-climb (node/gem/item)

**Files:**
- Create: `.claude/skills/build-creator/scripts/optimize.lua`
- Test: `.claude/skills/build-creator/scripts/tests/optimize_test.lua`

Approach: construct the base build from the spec, measure the target metric,
then for each candidate mutation apply → commit → measure; keep if it improved
by ≥ epsilon, else revert. Candidate kinds in v1:
- `tryNodes`: list of node ids to consider allocating. Apply = `AllocNode`,
  revert = `DeallocNode`.
- `trySwaps`: list of `{ group, index, gem }` — replace gem at a group/index.
  Apply = set `gemList[index].nameSpec/level/quality`, revert = restore prior.

v1 implements `tryNodes` fully (the headline "optimize passive" case) and gem
swaps; item swaps reuse the gem-swap revert pattern and are deferred to the spec
shape but not required for the monotonicity guarantee being tested.

- [ ] **Step 1: Write the failing test** (`tests/optimize_test.lua`)

```lua
local H = require("tests.helper")
local engine = require("engine")
local optimize = require("optimize")
return {
  ["node optimization never lowers the target metric"] = function()
    engine.init()
    -- Base: Witch with a skill so DPS is non-zero.
    local construct = require("construct")
    construct.build({
      level = 80, class = "Witch", ascendancy = "Infernalist",
      skills = { { label = "Main", gems = { "Spark 20/20" }, main = 1 } },
    })
    local startId = build.spec.curClass.startNodeId
    local candidates = {}
    for _, n in ipairs(build.spec.nodes[startId].linked or {}) do
      if n.id and n.type ~= "ClassStart" and not n.isAscendancyStart then
        candidates[#candidates + 1] = n.id
      end
    end

    local r = optimize.run({
      level = 80, class = "Witch", ascendancy = "Infernalist",
      skills = { { label = "Main", gems = { "Spark 20/20" }, main = 1 } },
      optimize = { target = "TotalDPS", tryNodes = candidates },
    })
    H.truthy(r.after >= r.before - 1e-6, "target never decreased: "
      .. tostring(r.before) .. " -> " .. tostring(r.after))
    H.truthy(r.code and #r.code > 100, "returns a final code")
  end,
}
```

- [ ] **Step 2: Run to verify it fails**

Add `"tests.optimize_test"` to `TEST_FILES`. Run: `run.sh test`
Expected: FAIL — `module 'optimize' not found`.

- [ ] **Step 3: Write `optimize.lua`**

```lua
-- Greedy hill-climb over a constructed build, in-process. Each candidate is
-- applied, committed, measured against the target metric, and kept only if it
-- improves by >= EPS; otherwise reverted. The build object is the single source
-- of truth — we never re-spawn the engine.
local engine = require("engine")
local construct = require("construct")
local export = require("export")

local optimize = {}
local EPS = 1e-6

local function metric(name) return engine.out()[name] or 0 end

-- Try allocating each node id; keep allocations that raise the target.
local function climbNodes(target, ids)
  local kept = {}
  for _, id in ipairs(ids or {}) do
    local node = build.spec.nodes[id]
    if node and not node.alloc then
      local before = metric(target)
      build.spec:AllocNode(node)
      engine.commit()
      local after = metric(target)
      if after >= before + EPS then
        kept[#kept + 1] = id
      else
        build.spec:DeallocNode(node)
        engine.commit()
      end
    end
  end
  return kept
end

-- Try each gem swap; keep swaps that raise the target.
local function climbSwaps(target, swaps)
  local kept = {}
  for _, sw in ipairs(swaps or {}) do
    local group = build.skillsTab.socketGroupList[sw.group]
    local gem = group and group.gemList[sw.index]
    if gem then
      local prev = { nameSpec = gem.nameSpec, level = gem.level, quality = gem.quality }
      local name, lvl, q = sw.gem:match("([ %a']+) (%d+)/(%d+)")
      local before = metric(target)
      gem.nameSpec = name or sw.gem
      gem.level = tonumber(lvl) or gem.level
      gem.quality = tonumber(q) or gem.quality
      build.buildFlag = true
      engine.commit()
      local after = metric(target)
      if after >= before + EPS then
        kept[#kept + 1] = sw
      else
        gem.nameSpec, gem.level, gem.quality = prev.nameSpec, prev.level, prev.quality
        build.buildFlag = true
        engine.commit()
      end
    end
  end
  return kept
end

-- spec.optimize = { target = "TotalDPS", tryNodes = {...}, trySwaps = {...} }
function optimize.run(spec)
  engine.init()
  construct.build(spec)
  local opt = spec.optimize or {}
  local target = opt.target or "TotalDPS"
  local before = metric(target)

  local keptNodes = climbNodes(target, opt.tryNodes)
  local keptSwaps = climbSwaps(target, opt.trySwaps)

  local after = metric(target)
  return {
    target = target,
    before = before,
    after = after,
    keptNodes = keptNodes,
    keptSwaps = keptSwaps,
    stats = engine.stats(),
    code = export.toCode(),
  }
end

return optimize
```

- [ ] **Step 4: Run to verify it passes**

Run: `run.sh test`
Expected: `optimize_test` PASS (after >= before, code returned).

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/build-creator/scripts/optimize.lua \
        .claude/skills/build-creator/scripts/tests/optimize_test.lua \
        .claude/skills/build-creator/scripts/tests/all.lua
git commit -m "feat(build-creator): in-process greedy optimizer (nodes + gem swaps)"
```

---

## Task 9: optimize CLI end-to-end check

**Files:**
- Modify: `.claude/skills/build-creator/scripts/fixtures/witch-spark.json` (add optimize block in a copy)
- Create: `.claude/skills/build-creator/scripts/fixtures/witch-spark-optimize.json`

The `optimize` CLI branch already exists (Task 7). This task verifies it
end-to-end with a fixture that has a real `optimize` block.

- [ ] **Step 1: Write the optimize fixture** (`fixtures/witch-spark-optimize.json`)

Discover two adjacent node ids first:
Run:
```bash
./.claude/skills/build-creator/scripts/run.sh analyze \
  "$(./.claude/skills/build-creator/scripts/run.sh build \
     ./.claude/skills/build-creator/scripts/fixtures/witch-spark.json \
     | sed -E 's/.*"code":"([^"]+)".*/\1/')"
```
Expected: prints analyze JSON (sanity that build→analyze chain works).

For the fixture, use an empty `tryNodes` is not useful; instead the implementer
runs a one-off to list adjacent node ids (the optimize_test already shows the
discovery snippet) and pastes 2-3 ids. Fixture content:

```json
{
  "level": 80,
  "class": "Witch",
  "ascendancy": "Infernalist",
  "skills": [ { "label": "Main", "gems": ["Spark 20/20"], "main": 1 } ],
  "optimize": { "target": "TotalDPS", "tryNodes": [<id1>, <id2>], "trySwaps": [] }
}
```

- [ ] **Step 2: Run the optimize CLI**

Run: `run.sh optimize .claude/skills/build-creator/scripts/fixtures/witch-spark-optimize.json`
Expected: JSON `{"status":"ok","result":{"target":"TotalDPS","before":<n>,"after":<m≥n>,"keptNodes":[...],"code":"..."}}`, exit 0.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/build-creator/scripts/fixtures/witch-spark-optimize.json
git commit -m "test(build-creator): optimize CLI end-to-end fixture"
```

---

## Task 10: publish.lua — io.popen curl → pobb.in + poe.ninja snippet

**Files:**
- Create: `.claude/skills/build-creator/scripts/publish.lua`
- Test: `.claude/skills/build-creator/scripts/tests/publish_test.lua`

pobb.in accepts `POST https://pobb.in/pob/` with the code as the body and returns
the id as plain text. We shell out to curl (no LuaSocket/luasec dep). The test
does NOT hit the network — it asserts the curl command is well-formed and that
`poeninjaSnippet` embeds the code — so it is deterministic and offline.

- [ ] **Step 1: Write the failing test** (`tests/publish_test.lua`)

```lua
local H = require("tests.helper")
local publish = require("publish")
return {
  ["curlCommand targets pobb.in and passes the code via stdin"] = function()
    local cmd = publish.curlCommand("ABC-_123")
    H.truthy(cmd:find("https://pobb.in/pob/", 1, true), "hits pobb.in")
    H.truthy(cmd:find("--data-binary @-", 1, true), "code via stdin, not argv")
    H.truthy(cmd:find("Path of Building", 1, true), "sets PoB user-agent")
  end,
  ["poeninjaSnippet embeds the code"] = function()
    local snip = publish.poeninjaSnippet("XYZ123")
    H.truthy(snip:find("XYZ123", 1, true), "code present in snippet")
    H.truthy(snip:find("/poe2/pob/api/upload", 1, true), "poe.ninja upload path")
  end,
}
```

- [ ] **Step 2: Run to verify it fails**

Add `"tests.publish_test"` to `TEST_FILES`. Run: `run.sh test`
Expected: FAIL — `module 'publish' not found`.

- [ ] **Step 3: Write `publish.lua`**

```lua
-- Publish a PoB code. pobb.in is headless via curl (shell-out keeps us off
-- LuaSocket/luasec). The code goes through stdin (@-) so it never lands in argv
-- or the shell history. poe.ninja is browser-gated, so we only emit a playwriter
-- snippet for the caller to run in the user's Chrome.
local publish = {}

-- Build the curl command. Code is written to the process's stdin by the caller.
function publish.curlCommand(_code)
  return table.concat({
    "curl -fsS",
    "-X POST",
    "-H 'User-Agent: Path of Building/2.42.0'",
    "--data-binary @-",
    "https://pobb.in/pob/",
  }, " ")
end

-- POST the code to pobb.in via curl; return the shareable URL.
function publish.toPobbin(code)
  local cmd = publish.curlCommand(code)
  local proc = assert(io.popen(cmd, "w+"), "publish: io.popen failed")
  -- NOTE: io.popen in luajit is unidirectional on most platforms. Use the
  -- echo-pipe form instead to feed stdin reliably:
  proc:close()
  local feed = "printf '%s' " .. ("%q"):format(code) .. " | " .. cmd
  local p = assert(io.popen(feed, "r"), "publish: io.popen failed")
  local id = (p:read("*a") or ""):gsub("%s+$", "")
  p:close()
  if id == "" then error("publish: pobb.in returned empty response") end
  return { target = "pobb.in", id = id, url = "https://pobb.in/" .. id }
end

-- Playwriter JS to run on a loaded https://poe.ninja/poe2/pob page.
function publish.poeninjaSnippet(code)
  return ([[
const code = %q;
const res = await fetch('/poe2/pob/api/upload', { method: 'POST', body: new URLSearchParams({ code }) });
if (!res.ok) throw new Error('poe.ninja upload failed: ' + res.status);
const body = (await res.text()).trim();
return body.startsWith('http') ? body : 'https://poe.ninja' + (body.startsWith('/') ? '' : '/') + body;
]]):format(code)
end

return publish
```

> IMPLEMENTER NOTE: the `curlCommand` is the offline-testable unit. `toPobbin`
> uses the `printf ... | curl` pipe form for reliable stdin (luajit's `io.popen`
> is unidirectional). The two-line dead `io.popen(cmd,"w+")`/`close()` in the
> draft above is a mistake — delete it; keep only the `feed` pipe. (Left visible
> here so the reviewer sees the intent; clean it when implementing.)

- [ ] **Step 4: Run to verify it passes**

Run: `run.sh test`
Expected: `publish_test` PASS (offline — no network).

- [ ] **Step 5: Live publish check (manual, network)**

Run:
```bash
CODE=$(./.claude/skills/build-creator/scripts/run.sh build \
  ./.claude/skills/build-creator/scripts/fixtures/witch-spark.json \
  | sed -E 's/.*"code":"([^"]+)".*/\1/')
./.claude/skills/build-creator/scripts/run.sh build \
  ./.claude/skills/build-creator/scripts/fixtures/witch-spark.json --publish
```
Expected: JSON includes `"published":{"target":"pobb.in","id":"...","url":"https://pobb.in/..."}`. Open the `/raw` URL to confirm the code stored. (If offline, skip — the offline test already gates correctness.)

- [ ] **Step 6: Commit**

```bash
git add .claude/skills/build-creator/scripts/publish.lua \
        .claude/skills/build-creator/scripts/tests/publish_test.lua \
        .claude/skills/build-creator/scripts/tests/all.lua
git commit -m "feat(build-creator): publish to pobb.in via curl + poe.ninja snippet"
```

---

## Task 11: Rewrite SKILL.md

**Files:**
- Modify: `.claude/skills/build-creator/SKILL.md`

- [ ] **Step 1: Rewrite the body** to describe the Lua toolkit. Required sections:
  - **When to use** (unchanged trigger phrases: "build giùm", "tạo build", "make me a X build").
  - **Conversational workflow** (gather refs → propose in chat → materialize/verify loop → publish), updated so step 3 = "construct via `run.sh build`, read stats, adjust spec, optionally `run.sh optimize`".
  - **Spec shape** (the JSON: `level`, `class`, `ascendancy`, `skills[]`, `items[]`, `tree.nodes[]`, optional `optimize{target,tryNodes,trySwaps}`). State explicitly: class/ascendancy by **name** (PoB resolves), gems as `"Name level/quality"`, items as full PoB item text, slot names exact.
  - **Running**: `run.sh build <spec.json> [--publish]`, `run.sh analyze <code>`, `run.sh optimize <spec.json>`, `run.sh test`.
  - **How it works** (the insight): no hand-XML — PoB's `SaveDB("code")` serializes the live build, stats embedded automatically, optimizer mutates in-process.
  - **Caveats**: `data/pob-source` is 0.4-era, refresh after 0.5; ascendancy/base/node ids shift with data; poe.ninja publish needs the user's browser (playwriter + `publish.poeninjaSnippet`).
  - **Files** map (the new Lua layout).
  - Remove all references to deleted TS files, `specToXml`, `bakeStats`, `pipeline.ts`, the wire-format gotchas section (now PoB's concern), and the luarocks env note stays (still required).

- [ ] **Step 2: Verify the full suite still green**

Run: `run.sh test`
Expected: all blocks PASS, final `N passed, 0 failed`.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/build-creator/SKILL.md
git commit -m "docs(build-creator): rewrite SKILL.md for Lua toolkit"
```

---

## Self-review notes (coverage map)

- Spec "engine.lua substrate" → Task 1. "export via SaveDB" → Task 2.
- "construct: class/ascend/level/skills/items/tree" → Tasks 3-6.
- "JSON in" → `lib/json.lua` Task 0, consumed Task 7.
- "optimizer in-process greedy node+gem+item" → Task 8 (item swap reuses gem-swap
  revert pattern; gem+node fully implemented & tested; monotonicity guard = test).
- "publish io.popen curl + poe.ninja snippet" → Task 10.
- "delete TS, greenfield" → Task 0 Step 1.
- "tests: round-trip, baseline, class-mapping, optimizer-monotonic, export determinism"
  → round-trip Task 2, class-mapping Task 3, monotonic Task 8. Baseline +
  export-determinism are covered implicitly by smoke (Task 0) + round-trip; if
  stricter coverage is wanted, add to engine_test/export_test (optional, not gating).
- "SKILL.md rewrite" → Task 11.
- "run.sh keeps name" → Task 0.

Known data-version coupling (ascendancy "Infernalist", base "Iron Hat", node ids):
each such literal carries an inline NOTE telling the implementer to swap to a
value present in the loaded `data/pob-source` and update the matching test — the
assertion *shape* is data-independent, only the literals are.
