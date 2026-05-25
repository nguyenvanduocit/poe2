/**
 * POE2 Passive Skill Tree Analyzer CLI
 *
 * Analyze Path of Exile 2 Passive Skill Tree - lookup, paths, distances, values.
 * Data source: poe2db.tw mirror at data/poedb/<patch>/passive-skill-tree/data_us.json
 *
 * Commands:
 *   lookup <query>         - Find node by name or ID
 *   nearby <id> [count]    - Find nearest nodes to given node
 *   distance <id1> <id2>   - Calculate distance between two nodes
 *   path <from> <to>       - Find shortest path between nodes
 *   analyze <nodes...>     - Analyze allocated nodes (value, stats summary)
 *   search-stats <text>    - Find nodes with specific stat text
 *   suggest <from> <points> - Suggest best nodes within point budget
 *   types                  - Show skill tree statistics
 *   classes                - Show available classes
 *   ascendancies <class>   - Show ascendancies for a class
 *
 * Usage:
 *   bun .claude/skills/passive-skill-tree/scripts/analyze.ts lookup "Spirit"
 *   bun .claude/skills/passive-skill-tree/scripts/analyze.ts classes
 *   bun .claude/skills/passive-skill-tree/scripts/analyze.ts search-stats "minion damage"
 *   bun .claude/skills/passive-skill-tree/scripts/analyze.ts ascendancies "Witch"
 *
 * NOTE: POE2 tree URL encoding format is not publicly documented. The `url` command
 * inherits POE1 wiring and will not produce a valid POE2 share link — kept as stub
 * pending community decode. See SKILL.md "URL encoding" caveat.
 */

import { existsSync, readFileSync, writeFileSync, mkdirSync, readdirSync } from "fs";
import { resolve, dirname } from "path";

export interface SkillNode {
  skill: number;
  name: string;
  icon?: string;
  ascendancyName?: string;
  group?: number;
  orbit?: number;
  orbitIndex?: number;
  out?: string[];
  in?: string[];
  // POE2 stores edges here (directed, NOT symmetric) instead of out/in. orbit is positional metadata.
  connections?: { id: string; orbit?: number }[];
  isNotable?: boolean;
  isKeystone?: boolean;
  isMastery?: boolean;
  isJewelSocket?: boolean;
  isAscendancyStart?: boolean;
  // POE1: single class index (0-6). POE2: array of indices because one physical start node
  // serves two classes sharing an attribute corner (e.g. [0,6] = Marauder + Warrior).
  classStartIndex?: number | number[];
  stats?: string[];
}

interface SkillGroup {
  x: number;
  y: number;
  orbits?: number[];
  nodes?: string[];
}

export interface SkillTreeData {
  tree?: string;
  classes: { name: string; ascendancies: { id: string; name: string }[] }[];
  alternate_ascendancies?: { id: string; name: string }[];
  nodes: Record<string, SkillNode>;
  groups: Record<string, SkillGroup>;
  constants?: {
    skillsPerOrbit?: number[];
    orbitRadii?: number[];
  };
}

interface PositionedNode {
  id: string;
  name: string;
  x: number;
  y: number;
  node: SkillNode;
}

// Load tree data (cached)
let treeData: SkillTreeData | null = null;
let positionedNodes: Map<string, PositionedNode> | null = null;
let adjacencyList: Map<string, Set<string>> | null = null;

// Data source: poe2db.tw mirror, patch-versioned at <project-root>/data/poedb/<patch>/passive-skill-tree/data_us.json
// Schema is the same "grindinggear unified passive-tree export" used by POE1 (groups/nodes/sprites/constants/classes),
// but with POE2 class roster (Marauder/Witch/Ranger/Duelist/Shadow/Templar legacy + Warrior/Sorceress/Huntress/
// Mercenary/Monk/Druid POE2-new) and ascendancy ids like Witch3 (Lich), Huntress2 (Spirit Walker, 0.5), Monk1
// (Martial Artist, 0.5).
//
// Refresh: ./.claude/skills/poedb/scripts/download.sh <patch>  (full poedb mirror)
//          OR pass --force-update to this script (tree-only direct curl)
//
// poe2db version quirk: the data URL uses poe2db's INTERNAL counter, NOT the POE2 patch number.
// POE2 0.5.x maps to internal "4.4" (per data/poedb/0.5.0/passive-skill-tree/meta.json caveat:
// upstream "0.5" returns 404). Override via --source-version <X.Y> when poe2db bumps.
const POEDB_ROOT = resolve(dirname(new URL(import.meta.url).pathname), "../../../../data/poedb");
const POEDB_URL_TEMPLATE = "https://poe2db.tw/data/passive-skill-tree/{ver}/data_us.json";
const POEDB_DEFAULT_SOURCE_VERSION = "4.4"; // poe2db internal version for POE2 0.5.x

// Resolve the newest patch directory under data/poedb/. Returns "0.5.0" style patch label.
function findLatestPatch(): string | null {
  if (!existsSync(POEDB_ROOT)) return null;
  const entries = readdirSync(POEDB_ROOT, { withFileTypes: true })
    .filter((e) => e.isDirectory() && /^\d+\.\d+(\.\d+)?$/.test(e.name))
    .map((e) => e.name);
  if (entries.length === 0) return null;
  // Semver-style sort descending
  entries.sort((a, b) => {
    const pa = a.split(".").map(Number);
    const pb = b.split(".").map(Number);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
      const da = pa[i] ?? 0;
      const db = pb[i] ?? 0;
      if (da !== db) return db - da;
    }
    return 0;
  });
  return entries[0];
}

// POE2 patch → poe2db internal version. poe2db does NOT mirror the POE2 patch number
// (e.g. 0.5 returns 404). Returns the hardcoded default unless overridden.
function patchToUrlVersion(_patch: string, override?: string): string {
  return override ?? POEDB_DEFAULT_SOURCE_VERSION;
}

function dataPathForPatch(patch: string): string {
  return resolve(POEDB_ROOT, patch, "passive-skill-tree", "data_us.json");
}

async function downloadTreeData(patch?: string, force = false, sourceVersion?: string): Promise<SkillTreeData> {
  const target = patch ?? findLatestPatch() ?? "0.5.0";
  const cachePath = dataPathForPatch(target);

  if (!force && existsSync(cachePath)) {
    console.log(`Using cached skill tree data: ${cachePath}`);
    return JSON.parse(readFileSync(cachePath, "utf-8"));
  }

  const urlVer = patchToUrlVersion(target, sourceVersion);
  const url = POEDB_URL_TEMPLATE.replace("{ver}", urlVer);
  console.log(`Downloading POE2 skill tree from poe2db (internal ver ${urlVer}, patch ${target}) ...`);
  mkdirSync(dirname(cachePath), { recursive: true });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download from ${url}: HTTP ${response.status}. Try --source-version <X.Y> if poe2db bumped its internal counter.`);
  }
  const data = (await response.json()) as SkillTreeData;
  writeFileSync(cachePath, JSON.stringify(data, null, 2));
  console.log(`Downloaded and cached to ${cachePath}`);
  return data;
}

function loadTreeData(): SkillTreeData {
  if (treeData) return treeData;

  const patch = findLatestPatch();
  if (!patch) {
    console.error("No patch data found under data/poedb/.");
    console.error("Run: ./.claude/skills/poedb/scripts/download.sh <patch>   (full mirror)");
    console.error("Or:  bun .claude/skills/passive-skill-tree/scripts/analyze.ts --force-update   (tree-only direct fetch)");
    process.exit(1);
  }
  const cachePath = dataPathForPatch(patch);
  if (!existsSync(cachePath)) {
    console.error(`Tree data missing at ${cachePath} (patch ${patch} folder exists but no passive tree).`);
    console.error("Run with --force-update to fetch it from poe2db directly.");
    process.exit(1);
  }
  console.log(`Loading POE2 tree from patch ${patch}`);
  treeData = JSON.parse(readFileSync(cachePath, "utf-8"));
  return treeData;
}

function calculatePositions(): Map<string, PositionedNode> {
  if (positionedNodes) return positionedNodes;

  const data = loadTreeData();
  const nodes = new Map<string, PositionedNode>();
  const constants = data.constants || { skillsPerOrbit: [1, 6, 16, 16, 40, 72, 72], orbitRadii: [0, 82, 164, 246, 328, 410, 492] };

  for (const [nodeId, node] of Object.entries(data.nodes)) {
    if (!node.name && nodeId !== "root") continue;

    let x = 0, y = 0;

    if (node.group !== undefined && data.groups[node.group.toString()]) {
      const group = data.groups[node.group.toString()];

      if (node.orbit !== undefined && node.orbitIndex !== undefined) {
        const orbitRadius = constants.orbitRadii?.[node.orbit] || getOrbitRadius(node.orbit);
        const skillsPerOrbit = constants.skillsPerOrbit?.[node.orbit] || getSkillsPerOrbit(node.orbit);

        let angle: number;
        if (node.orbit === 4) {
          // Orbit 4 uses special non-uniform angles
          angle = (getOrbit4Angle(node.orbitIndex) / 360) * 2 * Math.PI - Math.PI / 2;
        } else {
          angle = (node.orbitIndex / skillsPerOrbit) * 2 * Math.PI - Math.PI / 2;
        }

        x = group.x + Math.cos(angle) * orbitRadius;
        y = group.y + Math.sin(angle) * orbitRadius;
      } else {
        x = group.x;
        y = group.y;
      }
    }

    const name = node.name || nodeId;
    nodes.set(nodeId, { id: nodeId, name, x, y, node });
  }

  positionedNodes = nodes;
  return nodes;
}

function getOrbitRadius(orbit: number): number {
  const radii = [0, 82, 164, 246, 328, 410, 492];
  return radii[orbit] || 100;
}

function getSkillsPerOrbit(orbit: number): number {
  const skills = [1, 6, 16, 16, 40, 72, 72];
  return skills[orbit] || 36;
}

// Special angles for orbit 4 (non-uniform)
function getOrbit4Angle(index: number): number {
  const angles = [0, 10, 20, 30, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130, 135, 140, 150, 160, 170, 180, 190, 200, 210, 220, 225, 230, 240, 250, 260, 270, 280, 290, 300, 310, 315, 320, 330, 340, 350];
  return angles[index] || 0;
}

function distance(n1: PositionedNode, n2: PositionedNode): number {
  return Math.sqrt(Math.pow(n2.x - n1.x, 2) + Math.pow(n2.y - n1.y, 2));
}

// Build an undirected adjacency list from raw node records (pure — exported for tests).
// Edges live in different fields per game: POE1 uses out/in, POE2 uses connections.
// Both are DIRECTED and POE2's connections are NOT symmetric (54447→23710 but 23710 has no 54447),
// so we union every edge in BOTH directions to get an undirected graph for BFS. Dedup via Set.
//
// "root" (and any name-less anchor) is a VIRTUAL node that wires every class start to one hub.
// It is not allocatable in-game, so keeping it would create impossible cross-class shortcuts
// (e.g. Marauder start -> root -> Ranger start in 2 steps). Exclude it from the graph entirely.
export function buildAdjacency(nodes: Record<string, SkillNode>): Map<string, Set<string>> {
  const adj = new Map<string, Set<string>>();
  const ensure = (id: string): Set<string> => {
    let s = adj.get(id);
    if (!s) { s = new Set(); adj.set(id, s); }
    return s;
  };
  const isVirtual = (id: string): boolean => id === "root" || !nodes[id]?.name;
  const link = (a: string, b: string) => { ensure(a).add(b); ensure(b).add(a); };

  for (const [nodeId, node] of Object.entries(nodes)) {
    if (isVirtual(nodeId)) continue;
    ensure(nodeId);
    for (const outId of node.out ?? []) if (!isVirtual(outId)) link(nodeId, outId);
    for (const inId of node.in ?? []) if (!isVirtual(inId)) link(nodeId, inId);
    for (const conn of node.connections ?? []) if (!isVirtual(conn.id)) link(nodeId, conn.id);
  }

  return adj;
}

// Memoized wrapper over loaded tree data — `suggest` calls pathfinding per-node (O(N) calls).
function buildAdjacencyList(): Map<string, Set<string>> {
  if (adjacencyList) return adjacencyList;
  adjacencyList = buildAdjacency(loadTreeData().nodes);
  return adjacencyList;
}

// BFS shortest path between two nodes on an adjacency graph (pure — exported for tests).
export function bfsShortestPath(adj: Map<string, Set<string>>, from: string, to: string): string[] | null {
  const visited = new Set<string>();
  const queue: { node: string; path: string[] }[] = [{ node: from, path: [from] }];

  while (queue.length > 0) {
    const { node, path } = queue.shift()!;
    if (node === to) return path;
    if (visited.has(node)) continue;
    visited.add(node);
    for (const neighbor of adj.get(node) ?? []) {
      if (!visited.has(neighbor)) queue.push({ node: neighbor, path: [...path, neighbor] });
    }
  }

  return null;
}

// Set of nodes reachable from `start`, only stepping through nodes in `allowed` (pure — exported).
// Used by the allocation validator: restricts traversal to the allocated set + the start node.
export function reachableWithin(adj: Map<string, Set<string>>, start: string, allowed: Set<string>): Set<string> {
  const seen = new Set<string>([start]);
  const queue: string[] = [start];
  while (queue.length) {
    const cur = queue.shift()!;
    for (const nb of adj.get(cur) ?? []) {
      if (!seen.has(nb) && allowed.has(nb)) { seen.add(nb); queue.push(nb); }
    }
  }
  return seen;
}

function findShortestPath(from: string, to: string): string[] | null {
  return bfsShortestPath(buildAdjacencyList(), from, to);
}

// Simple stat value estimator (heuristic)
function estimateNodeValue(node: SkillNode): number {
  let value = 0;
  const stats = node.stats || [];

  // Heuristic scoring based on stat types
  for (const stat of stats) {
    const lowerStat = stat.toLowerCase();

    // High value stats
    if (lowerStat.includes("maximum") && (lowerStat.includes("life") || lowerStat.includes("mana"))) value += 5;
    if (lowerStat.includes("unique")) value += 5;
    if (lowerStat.includes("-critical")) value += 4;
    if (lowerStat.includes("spell damage") && !lowerStat.includes("reduced")) value += 3;
    if (lowerStat.includes("attack damage")) value += 3;

    // Medium value stats
    if (lowerStat.includes("life") && lowerStat.includes("regen")) value += 3;
    if (lowerStat.includes("mana") && lowerStat.includes("regen")) value += 3;
    if (lowerStat.includes("elemental resistance")) value += 2;
    if (lowerStat.includes("physical damage reduction")) value += 3;
    if (lowerStat.includes("movement speed")) value += 3;

    // Basic stats
    if (lowerStat.includes("strength")) value += 1;
    if (lowerStat.includes("dexterity")) value += 1;
    if (lowerStat.includes("intelligence")) value += 1;
    if (lowerStat.includes("damage")) value += 1;
    if (lowerStat.includes("life")) value += 1;
  }

  // Bonuses for notable/keystone
  if (node.isNotable) value *= 1.5;
  if (node.isKeystone) value *= 3;
  if (node.isJewelSocket) value += 2;

  return Math.round(value * 10) / 10;
}

// ---- Stat aggregation -------------------------------------------------------
// Passive stats are free text ("8% increased maximum Life", "Adds 1 to 3 Physical Damage").
// We normalize each line into a TEMPLATE by replacing every number with "#", then sum the
// extracted numbers positionally across all lines sharing that template. This yields a real
// per-tree total instead of just counting how many nodes mention a keyword.
//
// Limitations (by design — additive bucketing, NOT a damage engine like PoB):
//   * Only sums lines with IDENTICAL wording (same template, including any conditional clause),
//     so "10% increased Damage" and "10% increased Damage if you've killed Recently" stay separate.
//   * "increased/reduced %" and "flat/+" land in different templates naturally (different text);
//     we never multiply increased% buckets together — that is PoB's job.
const NUMBER_RE = /[+-]?\d+(?:\.\d+)?/g;

export interface StatBucket {
  template: string; // display template with # placeholders, original casing
  sums: number[]; // positional sums of the numbers across contributing nodes
  count: number; // how many stat lines contributed
  category: string; // life / energy shield / mana / damage / ...
  kind: "increased" | "flat" | "other";
}

export function categorizeStat(template: string): string {
  const t = template.toLowerCase();
  if (t.includes("energy shield")) return "energy shield";
  if (t.includes("life")) return "life";
  if (t.includes("spirit")) return "spirit"; // POE2 reservation resource
  if (t.includes("mana")) return "mana";
  if (t.includes("resistance")) return "resistance";
  if (t.includes("strength") || t.includes("dexterity") || t.includes("intelligence") || t.includes("all attributes")) return "attributes";
  if (t.includes("critical")) return "critical";
  if (t.includes("armour") || t.includes("evasion") || t.includes("block")) return "defence";
  if (t.includes("regenerat") || t.includes("recoup") || t.includes("recovery") || t.includes("leech")) return "recovery";
  if (t.includes("speed")) return "speed";
  if (t.includes("damage")) return "damage";
  return "other";
}

export function classifyKind(template: string): "increased" | "flat" | "other" {
  const t = template.toLowerCase();
  if (/\b(increased|reduced|more|less)\b/.test(t)) return "increased";
  if (t.includes("+#") || /\badds?\b/.test(t) || /\bgrants?\b/.test(t) || t.includes("to maximum") || t.includes("regenerate")) return "flat";
  return "other";
}

// Aggregate stat totals over a set of node ids (pure — exported for tests). Reads name/stats only.
export function aggregateStats(nodes: Record<string, SkillNode>, nodeIds: string[]): { buckets: StatBucket[]; skippedUnused: number } {
  const byTemplate = new Map<string, StatBucket>();
  let skippedUnused = 0;

  for (const id of nodeIds) {
    const node = nodes[id];
    if (!node) continue;
    if (node.name && node.name.includes("[DNT")) { skippedUnused++; continue; } // POE2 placeholder nodes
    for (const raw of node.stats ?? []) {
      const stat = raw.trim();
      if (!stat) continue;
      // Keep the +/- sign in the template (canonical POE display is "+50 to Strength"), and sum
      // magnitudes — lines sharing a sign share a template, so the rendered sign stays correct.
      const numbers = (stat.match(NUMBER_RE) ?? []).map((m) => Math.abs(Number(m)));
      const template = stat.replace(NUMBER_RE, (m) => m.replace(/\d[\d.]*/, "#"));
      const bucket = byTemplate.get(template);
      if (!bucket) {
        byTemplate.set(template, {
          template,
          sums: numbers.slice(),
          count: 1,
          category: categorizeStat(template),
          kind: classifyKind(template),
        });
      } else {
        for (let i = 0; i < numbers.length; i++) bucket.sums[i] = (bucket.sums[i] ?? 0) + numbers[i];
        bucket.count++;
      }
    }
  }

  return { buckets: [...byTemplate.values()], skippedUnused };
}

export function renderBucketLine(b: StatBucket): string {
  if (b.sums.length === 0) {
    return b.count > 1 ? `${b.template} (x${b.count})` : b.template;
  }
  let i = 0;
  const filled = b.template.replace(/#/g, () => {
    const v = b.sums[i++] ?? 0;
    return Number.isInteger(v) ? String(v) : v.toFixed(2);
  });
  return b.count > 1 ? `${filled}  (${b.count} nodes)` : filled;
}

const CATEGORY_ORDER = ["life", "energy shield", "mana", "spirit", "resistance", "defence", "attributes", "damage", "critical", "speed", "recovery", "other"];

function printBucketsByCategory(buckets: StatBucket[]): void {
  if (buckets.length === 0) { console.log("  (no parseable stats)"); return; }
  const grouped = new Map<string, StatBucket[]>();
  for (const b of buckets) {
    if (!grouped.has(b.category)) grouped.set(b.category, []);
    grouped.get(b.category)!.push(b);
  }
  const cats = [...grouped.keys()].sort((a, b) => {
    const ia = CATEGORY_ORDER.indexOf(a), ib = CATEGORY_ORDER.indexOf(b);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
  for (const cat of cats) {
    console.log(`\n  [${cat}]`);
    const items = grouped.get(cat)!;
    items.sort((a, b) => a.kind.localeCompare(b.kind)); // flat, increased, other
    for (const b of items) console.log(`    ${renderBucketLine(b)}`);
  }
}

// ---- Class / ascendancy start resolution ------------------------------------
// Used by the allocation validator. Ascendancy node clusters are DISCONNECTED from the main
// tree (the game bridges them via Trials, not tree edges), so reachability must run as separate
// components: one from the class start, one from each ascendancy start. All pure — exported.
export function resolveClassIndex(data: SkillTreeData, className: string): number {
  const q = className.toLowerCase();
  let idx = data.classes.findIndex((c) => c.name.toLowerCase() === q);
  if (idx < 0) idx = data.classes.findIndex((c) => c.name.toLowerCase().includes(q));
  return idx;
}

export function classStartNodeId(data: SkillTreeData, classIndex: number): string | null {
  for (const [id, node] of Object.entries(data.nodes)) {
    const csi = node.classStartIndex;
    if (csi === undefined || csi === null) continue;
    // POE1 stores a single index, POE2 an array (one physical start serves two classes) — normalize.
    const indices = Array.isArray(csi) ? csi : [csi];
    if (indices.includes(classIndex)) return id;
  }
  return null;
}

export function ascendancyStartNodeId(data: SkillTreeData, ascName: string): string | null {
  for (const [id, node] of Object.entries(data.nodes)) {
    if (node.isAscendancyStart && node.ascendancyName === ascName) return id;
  }
  return null;
}

export interface ValidationResult {
  className: string; // resolved display name (empty if class not found)
  classIndex: number; // -1 if class name unresolved
  startId: string | null; // class start node id
  mainNodes: string[]; // allocated main-tree node ids
  ascGroups: Map<string, string[]>; // ascendancyName -> allocated node ids
  mainOrphans: string[]; // allocated main nodes not reachable from class start
  ascOrphans: string[]; // allocated ascendancy nodes not reachable from their ascendancy start
  unknown: string[]; // ids not present in the tree
  ascStartMissing: string[]; // ascendancies with no resolvable start node
  mainPointCost: number; // main passive points (excludes the class start itself)
  ascPointCost: number; // ascendancy points
  valid: boolean; // true iff zero orphans and zero unknown ids
}

// Two-component allocation check (pure — exported for tests). Main-tree nodes must connect to the
// class start; ascendancy nodes must connect to their own ascendancy start (graphs are disjoint).
export function validateAllocation(data: SkillTreeData, adj: Map<string, Set<string>>, className: string, allocated: string[]): ValidationResult {
  const classIndex = resolveClassIndex(data, className);
  const startId = classIndex < 0 ? null : classStartNodeId(data, classIndex);

  const mainNodes: string[] = [];
  const ascGroups = new Map<string, string[]>();
  const unknown: string[] = [];
  for (const id of allocated) {
    const node = data.nodes[id];
    if (!node) { unknown.push(id); continue; }
    const asc = node.ascendancyName;
    if (asc) {
      if (!ascGroups.has(asc)) ascGroups.set(asc, []);
      ascGroups.get(asc)!.push(id);
    } else {
      mainNodes.push(id);
    }
  }

  // Main component: class start + allocated main nodes.
  let mainOrphans: string[] = [];
  if (startId) {
    const mainReached = reachableWithin(adj, startId, new Set<string>([startId, ...mainNodes]));
    mainOrphans = mainNodes.filter((id) => !mainReached.has(id));
  } else {
    mainOrphans = [...mainNodes]; // no start resolved → all main nodes are orphans
  }

  // Ascendancy components: each ascendancy start + its allocated nodes.
  const ascOrphans: string[] = [];
  const ascStartMissing: string[] = [];
  for (const [asc, ids] of ascGroups) {
    const ascStart = ascendancyStartNodeId(data, asc);
    if (!ascStart) { ascStartMissing.push(asc); ascOrphans.push(...ids); continue; }
    const reached = reachableWithin(adj, ascStart, new Set<string>([ascStart, ...ids]));
    ascOrphans.push(...ids.filter((id) => !reached.has(id)));
  }

  const mainPointCost = mainNodes.filter((id) => id !== startId).length;
  const ascPointCost = [...ascGroups.values()].reduce((s, ids) => s + ids.length, 0);

  return {
    className: classIndex < 0 ? "" : data.classes[classIndex].name,
    classIndex,
    startId,
    mainNodes,
    ascGroups,
    mainOrphans,
    ascOrphans,
    unknown,
    ascStartMissing,
    mainPointCost,
    ascPointCost,
    valid: mainOrphans.length === 0 && ascOrphans.length === 0 && unknown.length === 0,
  };
}

// Command handlers
const commands: Record<string, (args: string[]) => void | Promise<void>> = {
  // Lookup node by name or ID
  lookup: (args) => {
    if (args.length === 0) {
      console.error("Usage: lookup <name or ID>");
      process.exit(1);
    }

    const query = args.join(" ").toLowerCase();
    const nodes = calculatePositions();
    const results: PositionedNode[] = [];

    for (const node of nodes.values()) {
      if (node.id === query || node.name.toLowerCase().includes(query)) {
        results.push(node);
      }
    }

    if (results.length === 0) {
      console.log(`No nodes found matching: ${query}`);
      return;
    }

    console.log(`\n=== Found ${results.length} node(s) ===\n`);

    for (const node of results.slice(0, 20)) {
      const value = estimateNodeValue(node.node);
      console.log(`ID: ${node.id}`);
      console.log(`Name: ${node.name}`);
      console.log(`Type: ${node.node.isKeystone ? "Keystone" : node.node.isNotable ? "Notable" : "Small"}${node.node.ascendancyName ? ` (${node.node.ascendancyName})` : ""}`);
      console.log(`Position: (${node.x.toFixed(1)}, ${node.y.toFixed(1)})`);
      console.log(`Group: ${node.node.group}`);
      console.log(`Value Score: ${value}`);
      if (node.node.stats) {
        console.log(`Stats:`);
        for (const stat of node.node.stats) {
          console.log(`  - ${stat}`);
        }
      }
      console.log("");
    }
  },

  // Find nearby nodes
  nearby: (args) => {
    const nodeId = args[0];
    const count = parseInt(args[1] || "10");

    const nodes = calculatePositions();
    const target = nodes.get(nodeId);

    if (!target) {
      console.error(`Node not found: ${nodeId}`);
      return;
    }

    console.log(`\n=== Nodes near ${target.name} (${nodeId}) ===\n`);

    const distances: { id: string; name: string; dist: number; node: SkillNode }[] = [];

    for (const node of nodes.values()) {
      if (node.id === nodeId) continue;
      const d = distance(target, node);
      distances.push({ id: node.id, name: node.name, dist: d, node: node.node });
    }

    distances.sort((a, b) => a.dist - b.dist);

    for (const d of distances.slice(0, count)) {
      const value = estimateNodeValue(d.node);
      const type = d.node.isKeystone ? "Keystone" : d.node.isNotable ? "Notable" : d.node.isJewelSocket ? "Jewel Socket" : "Small";
      console.log(`${d.id}: ${d.name}`);
      console.log(`  Distance: ${d.dist.toFixed(1)} | Value: ${value} | ${type}`);
      if (d.node.stats && d.node.stats.length > 0) {
        console.log(`  Stats: ${d.node.stats[0].substring(0, 60)}...`);
      }
      console.log("");
    }
  },

  // Calculate distance between two nodes
  distance: (args) => {
    if (args.length < 2) {
      console.error("Usage: distance <id1> <id2>");
      process.exit(1);
    }

    const [id1, id2] = args;
    const nodes = calculatePositions();

    const n1 = nodes.get(id1);
    const n2 = nodes.get(id2);

    if (!n1) { console.error(`Node not found: ${id1}`); return; }
    if (!n2) { console.error(`Node not found: ${id2}`); return; }

    const d = distance(n1, n2);

    console.log(`\n=== Distance: ${n1.name} → ${n2.name} ===`);
    console.log(`Node 1: ${id1} (${n1.name})`);
    console.log(`Node 2: ${id2} (${n2.name})`);
    console.log(`Distance: ${d.toFixed(2)} units`);
    console.log(`Direct path would be: ${(d / 500 * 100).toFixed(1)}% of max orbit`);
  },

  // Find path between nodes
  path: (args) => {
    if (args.length < 2) {
      console.error("Usage: path <from> <to>");
      process.exit(1);
    }

    const [from, to] = args;
    const nodes = calculatePositions();

    const n1 = nodes.get(from);
    const n2 = nodes.get(to);

    if (!n1) { console.error(`Node not found: ${from}`); return; }
    if (!n2) { console.error(`Node not found: ${to}`); return; }

    console.log(`\n=== Path: ${n1.name} → ${n2.name} ===\n`);

    const path = findShortestPath(from, to);

    if (!path) {
      console.log("No path found (nodes may be disconnected)");
      return;
    }

    console.log(`Path length: ${path.length} nodes\n`);

    // Calculate total path distance
    let totalDist = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const curr = nodes.get(path[i])!;
      const next = nodes.get(path[i + 1])!;
      totalDist += distance(curr, next);
    }

    console.log(`Total path distance: ${totalDist.toFixed(1)} units\n`);

    for (let i = 0; i < path.length; i++) {
      const nodeId = path[i];
      const node = nodes.get(nodeId)!;
      const prefix = i === 0 ? "→ " : i === path.length - 1 ? "└─ " : "├─ ";
      const value = estimateNodeValue(node.node);

      console.log(`${prefix}${nodeId}: ${node.name} [value: ${value}]`);
    }
  },

  // Analyze allocated nodes — per-node list + REAL aggregated stat totals (grouped by category).
  analyze: (args) => {
    if (args.length === 0) {
      console.error("Usage: analyze <node-id-1> <node-id-2> ...");
      process.exit(1);
    }

    const nodes = calculatePositions();
    let totalValue = 0;
    let found = 0;

    console.log(`\n=== Analysis of ${args.length} nodes ===\n`);

    for (const nodeId of args) {
      const node = nodes.get(nodeId);
      if (!node) {
        console.log(`Warning: Node not found: ${nodeId}`);
        continue;
      }
      found++;
      const value = estimateNodeValue(node.node);
      totalValue += value;
      const type = node.node.isKeystone ? "Keystone" : node.node.isNotable ? "Notable" : node.node.isJewelSocket ? "Jewel Socket" : "Small";
      const asc = node.node.ascendancyName ? ` {${node.node.ascendancyName}}` : "";
      console.log(`${nodeId}: ${node.name} [${type}, value ${value}]${asc}`);
    }

    // Real stat totals: parse numbers from each stat line, sum across nodes by template, group by category.
    const { buckets, skippedUnused } = aggregateStats(loadTreeData().nodes, args);
    console.log(`\n=== Aggregated Stats (${found} nodes) ===`);
    printBucketsByCategory(buckets);
    if (skippedUnused > 0) console.log(`\n(${skippedUnused} [DNT-UNUSED] placeholder node(s) skipped)`);
    console.log(`\nTotal heuristic value score: ${totalValue.toFixed(1)} (avg ${(totalValue / Math.max(found, 1)).toFixed(1)}/node)`);
  },

  // Validate that an allocation is reachable from the class start (and ascendancy starts).
  // Two-component check: main-tree nodes must connect to the class start; ascendancy nodes must
  // connect to their own ascendancy start (the two graphs are disjoint in tree topology).
  validate: (args) => {
    if (args.length < 2) {
      console.error("Usage: validate <class> <node-id-1> <node-id-2> ...");
      console.error("  Checks every allocated node connects back to its start node.");
      console.error("  Main-tree nodes -> class start; ascendancy nodes -> ascendancy start.");
      console.error("  Run 'classes' to see class names.");
      process.exit(1);
    }

    const className = args[0];
    const allocated = args.slice(1);
    const data = loadTreeData();
    const nodes = calculatePositions();

    const r = validateAllocation(data, buildAdjacencyList(), className, allocated);
    if (r.classIndex < 0) { console.error(`Class not found: ${className}. Run 'classes' to list.`); return; }
    if (!r.startId) { console.error(`No start node found for class index ${r.classIndex}.`); return; }

    console.log(`\n=== Allocation Validation: ${r.className} ===\n`);
    console.log(`Class start: ${r.startId} (${nodes.get(r.startId)?.name})`);
    console.log(`Allocated: ${allocated.length} node(s) — ${r.mainNodes.length} main, ${r.ascPointCost} ascendancy`);
    console.log(`Passive point cost (main): ${r.mainPointCost}`);
    if (r.ascGroups.size) console.log(`Ascendancy point cost: ${r.ascPointCost} (${[...r.ascGroups.keys()].join(", ")})`);

    const totalOrphans = r.mainOrphans.length + r.ascOrphans.length + r.unknown.length;
    if (r.valid) {
      console.log(`\nVALID — every allocated node connects back to its start.`);
    } else {
      console.log(`\nINVALID — ${totalOrphans} disconnected node(s):`);
      for (const id of r.mainOrphans) console.log(`  orphan (main): ${id} ${nodes.get(id)?.name ?? ""}`);
      for (const id of r.ascOrphans) console.log(`  orphan (ascendancy): ${id} ${nodes.get(id)?.name ?? ""}`);
      for (const id of r.unknown) console.log(`  unknown id: ${id}`);
      if (r.ascStartMissing.length) console.log(`  (no ascendancy start found for: ${r.ascStartMissing.join(", ")})`);
    }
  },

  // Search nodes by stat text
  "search-stats": (args) => {
    if (args.length === 0) {
      console.error("Usage: search-stats <search-text>");
      process.exit(1);
    }

    const query = args.join(" ").toLowerCase();
    const nodes = calculatePositions();
    const results: PositionedNode[] = [];

    for (const node of nodes.values()) {
      if (!node.node.stats) continue;
      for (const stat of node.node.stats) {
        if (stat.toLowerCase().includes(query)) {
          results.push(node);
          break;
        }
      }
    }

    if (results.length === 0) {
      console.log(`No nodes found with stat containing: ${query}`);
      return;
    }

    console.log(`\n=== Found ${results.length} nodes with "${query}" ===\n`);

    for (const node of results.slice(0, 15)) {
      const value = estimateNodeValue(node.node);
      console.log(`${node.id}: ${node.name} [value: ${value}]`);

      if (node.node.stats) {
        for (const stat of node.node.stats) {
          if (stat.toLowerCase().includes(query)) {
            console.log(`  → ${stat}`);
          }
        }
      }
      console.log("");
    }
  },

  // Suggest best nodes within budget
  suggest: (args) => {
    if (args.length < 2) {
      console.error("Usage: suggest <start-node-id> <max-points>");
      process.exit(1);
    }

    const startId = args[0];
    const maxPoints = parseInt(args[1]);

    const nodes = calculatePositions();
    const startNode = nodes.get(startId);

    if (!startNode) {
      console.error(`Start node not found: ${startId}`);
      return;
    }

    console.log(`\n=== Finding best nodes within ${maxPoints} points from ${startNode.name} ===\n`);

    // Get all reachable nodes within reasonable distance
    const candidates: { id: string; name: string; dist: number; value: number; path: string[] }[] = [];

    for (const [nodeId, node] of nodes.entries()) {
      if (nodeId === startId) continue;

      const path = findShortestPath(startId, nodeId);
      if (!path) continue;

      // Calculate path "cost" (roughly equal to number of nodes)
      const cost = path.length;

      if (cost <= maxPoints) {
        let pathDist = 0;
        for (let i = 0; i < path.length - 1; i++) {
          const curr = nodes.get(path[i])!;
          const next = nodes.get(path[i + 1])!;
          pathDist += distance(curr, next);
        }

        candidates.push({
          id: nodeId,
          name: node.name,
          dist: pathDist,
          value: estimateNodeValue(node.node),
          path
        });
      }
    }

    // Sort by value/distance ratio
    candidates.sort((a, b) => (b.value / b.dist) - (a.value / a.dist));

    console.log("Top recommendations:\n");

    for (const c of candidates.slice(0, 10)) {
      console.log(`${c.id}: ${c.name}`);
      console.log(`  Path: ${c.path.length} nodes | Distance: ${c.dist.toFixed(0)} | Value: ${c.value.toFixed(1)}`);
      console.log(`  Path: ${c.path.join(" → ")}`);
      console.log("");
    }
  },

  // List all node types
  types: () => {
    const nodes = calculatePositions();
    let keystones = 0, notables = 0, jewelSockets = 0, small = 0;

    for (const node of nodes.values()) {
      if (node.node.isKeystone) keystones++;
      else if (node.node.isNotable) notables++;
      else if (node.node.isJewelSocket) jewelSockets++;
      else small++;
    }

    console.log(`\n=== Skill Tree Stats ===`);
    console.log(`Total nodes: ${nodes.size}`);
    console.log(`Keystones: ${keystones}`);
    console.log(`Notables: ${notables}`);
    console.log(`Jewel Sockets: ${jewelSockets}`);
    console.log(`Small: ${small}`);
  },

  // List classes
  classes: () => {
    const data = loadTreeData();

    console.log(`\n=== Available Classes ===\n`);

    for (const cls of data.classes) {
      console.log(`${cls.name}`);
      if (cls.ascendancies && cls.ascendancies.length > 0) {
        for (const asc of cls.ascendancies) {
          console.log(`  → ${asc.name} (${asc.id})`);
        }
      }
    }

    // Also show alternate ascendancies if available
    if (data.alternate_ascendancies && data.alternate_ascendancies.length > 0) {
      console.log(`\n=== Alternate Ascendancies ===\n`);
      for (const asc of data.alternate_ascendancies) {
        console.log(`${asc.name} (${asc.id})`);
      }
    }
  },

  // Show ascendancies for a class
  ascendancies: (args) => {
    if (args.length === 0) {
      console.error("Usage: ascendancies <class-name>");
      process.exit(1);
    }

    const className = args.join(" ").toLowerCase();
    const data = loadTreeData();

    for (const cls of data.classes) {
      if (cls.name.toLowerCase().includes(className)) {
        console.log(`\n=== ${cls.name} Ascendancies ===\n`);

        if (cls.ascendancies && cls.ascendancies.length > 0) {
          for (const asc of cls.ascendancies) {
            console.log(`${asc.id}: ${asc.name}`);
          }
        } else {
          console.log("No ascendancies");
        }
        return;
      }
    }

    console.log(`Class not found: ${className}`);
  },

  // Export all nodes as JSON for external use
  export: () => {
    const nodes = calculatePositions();
    const output: Record<string, any> = {};

    for (const [id, node] of nodes.entries()) {
      output[id] = {
        name: node.name,
        x: Math.round(node.x),
        y: Math.round(node.y),
        isNotable: node.node.isNotable,
        isKeystone: node.node.isKeystone,
        isJewelSocket: node.node.isJewelSocket,
        ascendancyName: node.node.ascendancyName,
        stats: node.node.stats,
        out: node.node.out,
        in: node.node.in,
        value: estimateNodeValue(node.node)
      };
    }

    console.log(JSON.stringify(output, null, 2));
  },

  // Generate official pathofexile.com tree URL from character hashes
  url: (args) => {
    if (args.length === 0) {
      console.error("Usage: url <character-export.json> [--class <name>] [--ascendancy <name>]");
      console.error("  Reads hashes from character export JSON and generates official tree URL");
      console.error("  Class/ascendancy auto-detected from export data if available");
      process.exit(1);
    }

    const jsonPath = resolve(args[0]);
    if (!existsSync(jsonPath)) {
      console.error(`File not found: ${jsonPath}`);
      process.exit(1);
    }

    const charData = JSON.parse(readFileSync(jsonPath, "utf-8"));

    // Extract hashes - support both direct array and character export format
    let hashes: number[];
    if (Array.isArray(charData)) {
      hashes = charData;
    } else if (charData.passives?.hashes) {
      hashes = charData.passives.hashes;
    } else {
      console.error("Could not find passive hashes in JSON. Expected { passives: { hashes: [...] } }");
      process.exit(1);
    }

    // Class ID mapping from PoESkillTree tests:
    // Scion=0(BgA), Marauder=1(BgE), Ranger=2(BgI), Witch=3(BgM), Duelist=4(BgQ), Templar=5(BgU), Shadow=6
    const classIdMap: Record<string, number> = {
      scion: 0, marauder: 1, ranger: 2, witch: 3, duelist: 4, templar: 5, shadow: 6
    };

    // Ascendancy mapping per class (index within class, 1-based)
    const ascendancyMap: Record<string, Record<string, number>> = {
      scion: { "ascendant": 1 },
      marauder: { "juggernaut": 1, "berserker": 2, "chieftain": 3 },
      ranger: { "raider": 1, "deadeye": 2, "pathfinder": 3 },
      witch: { "occultist": 1, "elementalist": 2, "necromancer": 3 },
      duelist: { "slayer": 1, "gladiator": 2, "champion": 3 },
      templar: { "inquisitor": 1, "hierophant": 2, "guardian": 3 },
      shadow: { "assassin": 1, "trickster": 2, "saboteur": 3 },
    };

    // Auto-detect class and ascendancy from export data
    let className = "witch";
    let ascendancyName = "necromancer";

    if (charData.character?.class) {
      const charClass = charData.character.class.toLowerCase();
      // The class field in export is the ascendancy name
      for (const [cls, ascMap] of Object.entries(ascendancyMap)) {
        if (ascMap[charClass]) {
          className = cls;
          ascendancyName = charClass;
          break;
        }
        if (cls === charClass) {
          className = cls;
          break;
        }
      }
    }

    // Override from CLI args
    const classArgIdx = args.indexOf("--class");
    if (classArgIdx >= 0 && args[classArgIdx + 1]) {
      className = args[classArgIdx + 1].toLowerCase();
    }
    const ascArgIdx = args.indexOf("--ascendancy");
    if (ascArgIdx >= 0 && args[ascArgIdx + 1]) {
      ascendancyName = args[ascArgIdx + 1].toLowerCase();
    }

    const classId = classIdMap[className] ?? 0;
    const ascendancyId = ascendancyMap[className]?.[ascendancyName] ?? 0;

    // V6 binary format (from PoESkillTree source):
    // Bytes 0-3: version (uint32 BE) = 6
    // Byte 4: classId
    // Byte 5: ascendancyId
    // Byte 6: nodeCount (uint8)
    // Next nodeCount*2: node IDs (uint16 BE)
    // 1 byte: clusterJewelCount (uint8)
    // 1 byte: masteryEffectPairsCount (uint8)
    const version = 6;
    const headerSize = 7;
    const trailerSize = 2;
    const buf = Buffer.alloc(headerSize + hashes.length * 2 + trailerSize);

    buf.writeUInt32BE(version, 0);
    buf.writeUInt8(classId, 4);
    buf.writeUInt8(ascendancyId, 5);
    buf.writeUInt8(hashes.length, 6);

    for (let i = 0; i < hashes.length; i++) {
      buf.writeUInt16BE(hashes[i], headerSize + i * 2);
    }

    const trailerOffset = headerSize + hashes.length * 2;
    buf.writeUInt8(0, trailerOffset);
    buf.writeUInt8(0, trailerOffset + 1);

    const encoded = buf.toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    console.log(`Class: ${className} (${classId}), Ascendancy: ${ascendancyName} (${ascendancyId})`);
    console.log(`Nodes: ${hashes.length}`);
    console.log("");
    console.log("=== Official Tree Viewer (fullscreen) ===");
    console.log(`https://www.pathofexile.com/fullscreen-passive-skill-tree/${encoded}`);
    console.log("");
    console.log("=== Official Tree Viewer ===");
    console.log(`https://www.pathofexile.com/passive-skill-tree/${encoded}`);
  }
};

// Main
const cmd = process.argv[2];
const cmdArgs = process.argv.slice(3);

// Check for --force-update flag and optional --patch <X.Y.Z> / --source-version <X.Y> selectors.
const forceUpdate = cmdArgs.includes("--force-update") || process.argv.includes("--force-update");
const patchIdx = process.argv.indexOf("--patch");
const patchOverride = patchIdx !== -1 ? process.argv[patchIdx + 1] : undefined;
const sourceVerIdx = process.argv.indexOf("--source-version");
const sourceVerOverride = sourceVerIdx !== -1 ? process.argv[sourceVerIdx + 1] : undefined;

async function main() {
  if (!cmd) {
    console.log(`
Passive Skill Tree Analyzer CLI

Commands:
  lookup <query>           Find node by name or ID
  nearby <id> [count]      Find nearest nodes to given node
  distance <id1> <id2>    Calculate distance between two nodes
  path <from> <to>        Find shortest path between nodes
  analyze <nodes...>      Analyze allocated nodes (per-node + aggregated stat totals by category)
  validate <class> <nodes...>  Check allocation connects to class/ascendancy start (orphans + point cost)
  search-stats <text>     Find nodes with specific stat text
  suggest <from> <points> Suggest best nodes within point budget
  types                   Show skill tree statistics
  classes                 Show available classes
  ascendancies <class>    Show ascendancies for a class
  export                  Export all nodes as JSON
  url <export.json>       Generate official tree URL from character export

Options:
  --force-update              Re-download tree data from poe2db.tw (overwrites cache)
  --patch <X.Y.Z>             Use specific POE2 patch (default: newest under data/poedb/)
  --source-version <X.Y>      Override poe2db internal version (default: 4.4 for POE2 0.5.x)

Examples:
  lookup "Life"
  nearby 49633 10
  path 52349 49633
  analyze 52349 21785 43376
  validate Witch 54447 23710 59822
  search-stats "life regeneration"
  suggest 49633 20
  classes
  ascendancies "Witch"
`);
    process.exit(1);
  }

  // Ensure data is loaded (only download if forced; otherwise loadTreeData reads cache lazily)
  if (forceUpdate) {
    await downloadTreeData(patchOverride, true, sourceVerOverride);
  }

  const handler = commands[cmd];
  if (!handler) {
    console.error(`Unknown command: ${cmd}`);
    console.error("Run without arguments to see available commands.");
    process.exit(1);
  }

  // Strip optional flags + their values from positional args passed to handlers.
  const cleanArgs = cmdArgs.filter((a, i) => {
    if (a === "--force-update") return false;
    if (a === "--patch" || a === "--source-version") return false;
    if (i > 0 && (cmdArgs[i - 1] === "--patch" || cmdArgs[i - 1] === "--source-version")) return false;
    return true;
  });
  handler(cleanArgs);
}

// Only run the CLI when executed directly — importing this module (e.g. from tests) must not
// trigger argv parsing / process.exit.
if (import.meta.main) {
  main().catch(console.error);
}