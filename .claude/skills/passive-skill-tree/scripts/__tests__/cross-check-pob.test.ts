// Cross-check the poe2db mirror + our graph logic against PoB2's canonical (GGG-derived) tree.
//
// CURRENTLY SKIPS: PoB2 ships tree data up to 0_4 only, while our poe2db snapshot is 0.5.0
// (0.5 launches ~2026-05-29). The matching PoB2 tree dir (0_5) does not exist yet — the test
// auto-activates once PoB2 publishes the 0.5 tree post-launch. It derives the PoB version from
// the poe2db patch (0.5.0 -> 0_5), so no edit is needed when that lands.
import { describe, test, expect } from "bun:test";
import { existsSync, readFileSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildAdjacency, classStartNodeId, type SkillTreeData } from "../analyze.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "../../../../..");
const POEDB_ROOT = resolve(ROOT, "data/poedb");
const DUMPER = resolve(__dirname, "dump-pob-tree.lua");

// Newest poe2db patch on disk (e.g. "0.5.0").
function latestPatch(): string | null {
  if (!existsSync(POEDB_ROOT)) return null;
  const dirs = readdirSync(POEDB_ROOT).filter((n) => /^\d+\.\d+(\.\d+)?$/.test(n)).sort();
  return dirs.length ? dirs[dirs.length - 1] : null;
}
const patch = latestPatch();
// poe2db "0.5.0" -> PoB2 TreeData dir "0_5".
const pobVer = patch ? `${patch.split(".")[0]}_${patch.split(".")[1]}` : null;
const POB_TREE = pobVer ? resolve(ROOT, `references/PathOfBuilding2/src/TreeData/${pobVer}/tree.lua`) : "";
const POEDB = patch ? resolve(POEDB_ROOT, patch, "passive-skill-tree/data_us.json") : "";

const haveLuajit = Bun.which("luajit") !== null;
const prereqs = haveLuajit && !!patch && existsSync(POB_TREE) && existsSync(POEDB);

function edgeSet(adj: Map<string, Set<string>>): Set<string> {
  const s = new Set<string>();
  for (const [a, nbrs] of adj) for (const b of nbrs) s.add(a < b ? `${a}-${b}` : `${b}-${a}`);
  return s;
}
const flags = (n: any) => `${!!n.isNotable}|${!!n.isKeystone}|${!!n.isJewelSocket}|${n.ascendancyName ?? ""}`;
const realIds = (data: SkillTreeData) =>
  new Set(Object.entries(data.nodes).filter(([id, n]) => id !== "root" && n.name).map(([id]) => id));

// NOTE: guard with `if (prereqs)` rather than describe.skip — bun runs a skipped describe's
// callback body to collect its tests, which would fire the luajit spawn below even when skipped.
if (prereqs) describe(`cross-check vs PoB2 ${pobVer} (references/PathOfBuilding2)`, () => {
  const proc = Bun.spawnSync(["luajit", DUMPER, POB_TREE]);
  if (proc.exitCode !== 0) throw new Error("luajit dump failed: " + proc.stderr.toString());
  const pob: SkillTreeData = JSON.parse(proc.stdout.toString());
  const poedb: SkillTreeData = JSON.parse(readFileSync(POEDB, "utf-8"));

  const pobIds = realIds(pob);
  const poedbIds = realIds(poedb);
  const shared = [...poedbIds].filter((id) => pobIds.has(id));

  test("every poe2db node exists in PoB2 (faithful subset)", () => {
    expect([...poedbIds].filter((id) => !pobIds.has(id))).toEqual([]);
  });

  test("classification matches on every shared node", () => {
    expect(shared.filter((id) => flags(pob.nodes[id]) !== flags(poedb.nodes[id]))).toEqual([]);
  });

  test("class-start nodes resolve identically for every class", () => {
    for (let i = 0; i < poedb.classes.length; i++) {
      expect(classStartNodeId(poedb, i)).toBe(classStartNodeId(pob, i));
    }
  });

  test("buildAdjacency produces the IDENTICAL undirected graph over shared nodes", () => {
    const sharedSet = new Set(shared);
    const bothShared = (e: string) => { const [a, b] = e.split("-"); return sharedSet.has(a) && sharedSet.has(b); };
    const ePob = edgeSet(buildAdjacency(pob.nodes));
    const ePoedb = edgeSet(buildAdjacency(poedb.nodes));
    expect([...ePob].filter((e) => !ePoedb.has(e) && bothShared(e))).toEqual([]);
    expect([...ePoedb].filter((e) => !ePob.has(e) && bothShared(e))).toEqual([]);
  });
});

if (!prereqs) {
  describe("cross-check vs PoB2 (skipped)", () => {
    test.skip(`needs luajit (${haveLuajit}) + PoB2 tree ${pobVer ?? "?"} (have 0_1..0_4) + ${POEDB || "poe2db data"}`, () => {});
  });
}
