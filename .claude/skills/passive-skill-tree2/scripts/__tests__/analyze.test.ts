import { describe, test, expect } from "bun:test";
import { existsSync, readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import {
  buildAdjacency,
  bfsShortestPath,
  reachableWithin,
  categorizeStat,
  classifyKind,
  renderBucketLine,
  aggregateStats,
  resolveClassIndex,
  classStartNodeId,
  ascendancyStartNodeId,
  validateAllocation,
  type SkillNode,
  type SkillTreeData,
  type StatBucket,
} from "../analyze.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---------------------------------------------------------------------------
// Synthetic fixture — a tiny tree we control completely, so assertions never
// drift when poe2db re-publishes data. Topology:
//
//   root (virtual, name=null) --out--> S, I        [must be EXCLUDED from graph]
//   S (STR start, classStartIndex [0,1]) --conn--> a --conn--> b --conn--> c
//   I (INT start, classStartIndex 2)     --conn--> x
//   orphan (no edges)                              [disconnected main node]
//   asc0 (Wi1 ascendancy start) --conn--> asc1 --conn--> asc2   [separate component]
//   dnt ([DNT-UNUSED] placeholder, has stats)      [skipped by aggregator]
//
// `connections` is intentionally listed on ONLY ONE endpoint to prove the
// adjacency builder makes it undirected.
// ---------------------------------------------------------------------------
function node(partial: Partial<SkillNode> & { name: string }): SkillNode {
  return { skill: 0, ...partial } as SkillNode;
}

function makeFixture(): SkillTreeData {
  const nodes: Record<string, SkillNode> = {
    root: node({ name: null as unknown as string, out: ["S", "I"] }),
    S: node({ name: "STR START", classStartIndex: [0, 1], connections: [{ id: "a" }] }),
    I: node({ name: "INT START", classStartIndex: 2, connections: [{ id: "x" }] }),
    a: node({ name: "Node A", connections: [{ id: "b" }], stats: ["8% increased maximum Life"] }),
    b: node({ name: "Node B", connections: [{ id: "c" }], stats: ["8% increased maximum Life", "+10 to Strength"] }),
    c: node({ name: "Node C", isNotable: true, stats: ["12% increased maximum Life"] }),
    x: node({ name: "Node X", stats: ["+15 to maximum Mana"] }),
    orphan: node({ name: "Orphan Node", stats: ["5% increased Spell Damage"] }),
    asc0: node({ name: "AscStart", isAscendancyStart: true, ascendancyName: "Wi1", connections: [{ id: "asc1" }] }),
    asc1: node({ name: "Asc Small", ascendancyName: "Wi1", connections: [{ id: "asc2" }] }),
    asc2: node({ name: "Asc Notable", ascendancyName: "Wi1", isNotable: true }),
    dnt: node({ name: "[DNT-UNUSED] Placeholder", stats: ["+99 to Strength"] }),
  };
  return {
    classes: [
      { name: "Marauder", ascendancies: [] },
      { name: "Warrior", ascendancies: [] },
      { name: "Witch", ascendancies: [{ id: "Wi1", name: "Infernalist" }] },
    ],
    nodes,
    groups: {},
  };
}

const fx = makeFixture();
const adj = buildAdjacency(fx.nodes);

// ===========================================================================
describe("buildAdjacency", () => {
  test("makes directed connections undirected (edge listed on one endpoint only)", () => {
    // a.connections lists b, b does NOT list a → both directions must exist.
    expect(adj.get("a")?.has("b")).toBe(true);
    expect(adj.get("b")?.has("a")).toBe(true);
  });

  test("unions out/in edges too (POE1-style)", () => {
    // root.out lists S/I — but root is virtual, so those edges must NOT survive.
    // Use S->a (connections) already covered; assert chain S-a exists.
    expect(adj.get("S")?.has("a")).toBe(true);
    expect(adj.get("a")?.has("S")).toBe(true);
  });

  test("EXCLUDES virtual root node entirely", () => {
    expect(adj.has("root")).toBe(false);
  });

  test("root does NOT create a cross-class shortcut (S and I stay unlinked)", () => {
    // Both S and I are only reachable from root in the raw data; dropping root must
    // leave them disconnected from each other.
    expect(adj.get("S")?.has("I")).toBeFalsy();
    expect(adj.get("I")?.has("S")).toBeFalsy();
  });

  test("orphan node has an entry but no neighbours", () => {
    expect(adj.has("orphan")).toBe(true);
    expect(adj.get("orphan")?.size).toBe(0);
  });

  test("ascendancy cluster is its own component (no edge to main tree)", () => {
    expect(adj.get("asc0")?.has("asc1")).toBe(true);
    expect(adj.get("asc1")?.has("asc2")).toBe(true);
    // No bridge from ascendancy into the main chain.
    expect(bfsShortestPath(adj, "asc2", "S")).toBeNull();
  });
});

// ===========================================================================
describe("bfsShortestPath", () => {
  test("finds the shortest path along the main chain", () => {
    expect(bfsShortestPath(adj, "S", "c")).toEqual(["S", "a", "b", "c"]);
  });

  test("returns null for disconnected nodes", () => {
    expect(bfsShortestPath(adj, "S", "orphan")).toBeNull();
  });

  test("returns null when start has no edges", () => {
    expect(bfsShortestPath(adj, "orphan", "a")).toBeNull();
  });

  test("from === to yields a single-node path", () => {
    expect(bfsShortestPath(adj, "a", "a")).toEqual(["a"]);
  });

  test("cannot path between two class starts (no root shortcut)", () => {
    expect(bfsShortestPath(adj, "S", "I")).toBeNull();
  });
});

// ===========================================================================
describe("reachableWithin", () => {
  test("restricts traversal to the allowed set", () => {
    const reached = reachableWithin(adj, "S", new Set(["S", "a", "b"]));
    expect([...reached].sort()).toEqual(["S", "a", "b"]);
    expect(reached.has("c")).toBe(false); // c excluded from allowed → unreachable
  });

  test("start is always included even if isolated", () => {
    const reached = reachableWithin(adj, "orphan", new Set(["orphan", "a"]));
    expect([...reached]).toEqual(["orphan"]);
  });

  test("a gap in the allowed set blocks everything past it", () => {
    // allow S, a, c but NOT b → c is unreachable because the bridge b is missing.
    const reached = reachableWithin(adj, "S", new Set(["S", "a", "c"]));
    expect(reached.has("a")).toBe(true);
    expect(reached.has("c")).toBe(false);
  });
});

// ===========================================================================
describe("categorizeStat", () => {
  const cases: [string, string][] = [
    ["#% increased maximum Life", "life"],
    ["+# to maximum Energy Shield", "energy shield"],
    ["+# to maximum Mana", "mana"],
    ["+# Maximum Spirit", "spirit"],
    ["#% to Fire Resistance", "resistance"],
    ["+# to Strength", "attributes"],
    ["+# to all Attributes", "attributes"],
    ["#% increased Critical Strike Chance", "critical"],
    ["#% increased Armour", "defence"],
    ["#% increased Spell Damage", "damage"],
    ["#% increased Movement Speed", "speed"],
    ["Leech # Life per second", "life"], // "life" wins over recovery by order — acceptable
    ["Recoup #% of Damage as Life", "life"],
    ["Something Unrelated", "other"],
  ];
  for (const [input, expected] of cases) {
    test(`"${input}" → ${expected}`, () => expect(categorizeStat(input)).toBe(expected));
  }

  test("energy shield is matched before life", () => {
    expect(categorizeStat("#% increased maximum Energy Shield")).toBe("energy shield");
  });
});

// ===========================================================================
describe("classifyKind", () => {
  test("increased / reduced / more / less → increased", () => {
    expect(classifyKind("#% increased maximum Life")).toBe("increased");
    expect(classifyKind("#% reduced Mana Cost")).toBe("increased");
    expect(classifyKind("#% more Damage")).toBe("increased");
    expect(classifyKind("#% less Duration")).toBe("increased");
  });

  test("+ / adds / grants / to maximum / regenerate → flat", () => {
    expect(classifyKind("+# to Strength")).toBe("flat");
    expect(classifyKind("Adds # to # Physical Damage")).toBe("flat");
    expect(classifyKind("Grants Skill: Fireball")).toBe("flat");
    expect(classifyKind("+# to maximum Life")).toBe("flat");
    expect(classifyKind("Regenerate # Life per second")).toBe("flat");
  });

  test("neither → other", () => {
    expect(classifyKind("You cannot be Frozen")).toBe("other");
  });
});

// ===========================================================================
describe("renderBucketLine", () => {
  test("fills a single summed number", () => {
    const b: StatBucket = { template: "#% increased maximum Life", sums: [28], count: 3, category: "life", kind: "increased" };
    expect(renderBucketLine(b)).toBe("28% increased maximum Life  (3 nodes)");
  });

  test("single node → no count suffix", () => {
    const b: StatBucket = { template: "+# to Strength", sums: [10], count: 1, category: "attributes", kind: "flat" };
    expect(renderBucketLine(b)).toBe("+10 to Strength");
  });

  test("multi-number template fills positionally", () => {
    const b: StatBucket = { template: "Adds # to # Physical Damage", sums: [2, 6], count: 2, category: "damage", kind: "flat" };
    expect(renderBucketLine(b)).toBe("Adds 2 to 6 Physical Damage  (2 nodes)");
  });

  test("no-number stat renders with (xN) when repeated", () => {
    const b: StatBucket = { template: "Grants Skill: Fireball", sums: [], count: 2, category: "other", kind: "flat" };
    expect(renderBucketLine(b)).toBe("Grants Skill: Fireball (x2)");
  });

  test("decimal sums render with 2 places", () => {
    const b: StatBucket = { template: "#% increased Damage", sums: [3.5], count: 1, category: "damage", kind: "increased" };
    expect(renderBucketLine(b)).toBe("3.50% increased Damage");
  });
});

// ===========================================================================
describe("aggregateStats", () => {
  test("sums identical templates across nodes", () => {
    const { buckets } = aggregateStats(fx.nodes, ["a", "b", "c"]);
    const life = buckets.find((x) => x.template === "#% increased maximum Life");
    expect(life).toBeDefined();
    expect(life!.sums).toEqual([28]); // 8 + 8 + 12
    expect(life!.count).toBe(3);
    expect(life!.category).toBe("life");
    expect(life!.kind).toBe("increased");
  });

  test("flat attribute keeps its + sign and is separate from increased", () => {
    const { buckets } = aggregateStats(fx.nodes, ["a", "b", "c"]);
    const str = buckets.find((x) => x.template === "+# to Strength");
    expect(str).toBeDefined();
    expect(str!.sums).toEqual([10]);
    expect(str!.kind).toBe("flat");
    expect(renderBucketLine(str!)).toBe("+10 to Strength");
  });

  test("skips [DNT-UNUSED] placeholder nodes and reports the count", () => {
    const { buckets, skippedUnused } = aggregateStats(fx.nodes, ["b", "dnt"]);
    expect(skippedUnused).toBe(1);
    // dnt's "+99 to Strength" must NOT inflate the Strength total — only b's +10.
    const str = buckets.find((x) => x.template === "+# to Strength");
    expect(str!.sums).toEqual([10]);
  });

  test("ignores ids not present in the tree", () => {
    const { buckets } = aggregateStats(fx.nodes, ["a", "DOES_NOT_EXIST"]);
    const life = buckets.find((x) => x.template === "#% increased maximum Life");
    expect(life!.sums).toEqual([8]);
  });

  test("empty input → no buckets", () => {
    expect(aggregateStats(fx.nodes, []).buckets).toEqual([]);
  });
});

// ===========================================================================
describe("resolveClassIndex / classStartNodeId / ascendancyStartNodeId", () => {
  test("exact and partial class name match", () => {
    expect(resolveClassIndex(fx, "Witch")).toBe(2);
    expect(resolveClassIndex(fx, "wit")).toBe(2);
    expect(resolveClassIndex(fx, "Marauder")).toBe(0);
  });

  test("unknown class → -1", () => {
    expect(resolveClassIndex(fx, "Necromancer")).toBe(-1);
  });

  test("array classStartIndex: one physical start serves two classes", () => {
    expect(classStartNodeId(fx, 0)).toBe("S"); // Marauder
    expect(classStartNodeId(fx, 1)).toBe("S"); // Warrior shares S
  });

  test("number classStartIndex resolves too", () => {
    expect(classStartNodeId(fx, 2)).toBe("I"); // Witch (stored as plain number)
  });

  test("no start for an out-of-range class index", () => {
    expect(classStartNodeId(fx, 9)).toBeNull();
  });

  test("ascendancy start lookup", () => {
    expect(ascendancyStartNodeId(fx, "Wi1")).toBe("asc0");
    expect(ascendancyStartNodeId(fx, "Nope")).toBeNull();
  });
});

// ===========================================================================
describe("validateAllocation", () => {
  test("VALID: a fully connected main chain", () => {
    const r = validateAllocation(fx, adj, "Marauder", ["a", "b", "c"]);
    expect(r.valid).toBe(true);
    expect(r.mainOrphans).toEqual([]);
    expect(r.mainPointCost).toBe(3);
    expect(r.ascPointCost).toBe(0);
  });

  test("class start included is not counted as a passive point", () => {
    const r = validateAllocation(fx, adj, "Marauder", ["S", "a", "b"]);
    expect(r.valid).toBe(true);
    expect(r.mainPointCost).toBe(2); // S excluded
  });

  test("INVALID: a gap in the chain orphans everything past it", () => {
    const r = validateAllocation(fx, adj, "Marauder", ["a", "c"]); // b missing
    expect(r.valid).toBe(false);
    expect(r.mainOrphans).toEqual(["c"]);
  });

  test("VALID ascendancy: full chain back to its own start", () => {
    const r = validateAllocation(fx, adj, "Witch", ["asc1", "asc2"]);
    expect(r.valid).toBe(true);
    expect(r.ascPointCost).toBe(2);
    expect([...r.ascGroups.keys()]).toEqual(["Wi1"]);
  });

  test("INVALID ascendancy: notable with no path to its start", () => {
    const r = validateAllocation(fx, adj, "Witch", ["asc2"]); // asc1 missing
    expect(r.valid).toBe(false);
    expect(r.ascOrphans).toEqual(["asc2"]);
  });

  test("unknown node ids are flagged", () => {
    const r = validateAllocation(fx, adj, "Marauder", ["a", "ZZZ"]);
    expect(r.valid).toBe(false);
    expect(r.unknown).toEqual(["ZZZ"]);
  });

  test("unresolved class → no start, all main nodes orphaned", () => {
    const r = validateAllocation(fx, adj, "Nope", ["a", "b"]);
    expect(r.classIndex).toBe(-1);
    expect(r.startId).toBeNull();
    expect(r.mainOrphans.sort()).toEqual(["a", "b"]);
    expect(r.valid).toBe(false);
  });

  test("mixed main + ascendancy in one allocation", () => {
    const r = validateAllocation(fx, adj, "Witch", ["x", "asc1", "asc2"]);
    // x is main but Witch start is I; x connects to I → valid main; asc chain valid.
    expect(r.valid).toBe(true);
    expect(r.mainNodes).toEqual(["x"]);
    expect(r.ascPointCost).toBe(2);
  });
});

// ===========================================================================
// Integration: exercise the pure cores against the REAL poe2db snapshot when present.
// Skipped automatically if the data file is absent (keeps CI green on a clean checkout).
// ===========================================================================
const REAL_DATA = resolve(__dirname, "../../../../../data/poedb2/0.5.0/passive-skill-tree/data_us.json");
const hasReal = existsSync(REAL_DATA);
const describeReal = hasReal ? describe : describe.skip;

describeReal("integration (real poe2db 0.5.0 data)", () => {
  const data: SkillTreeData = JSON.parse(readFileSync(REAL_DATA, "utf-8"));
  const realAdj = buildAdjacency(data.nodes);

  test("the virtual root is excluded from the real graph", () => {
    expect(realAdj.has("root")).toBe(false);
  });

  test("Witch (54447) and Ranger (50459) starts are NOT a 2-hop shortcut", () => {
    const path = bfsShortestPath(realAdj, "54447", "50459");
    expect(path).not.toBeNull();
    expect(path!.length).toBeGreaterThan(3); // would be 3 (via root) if the hub leaked
  });

  test("Witch start resolves and a direct neighbour pathfinds in 2 nodes", () => {
    const idx = resolveClassIndex(data, "Witch");
    const start = classStartNodeId(data, idx);
    expect(start).toBe("54447");
    const path = bfsShortestPath(realAdj, "54447", "4739"); // 4739 is a main neighbour
    expect(path).toEqual(["54447", "4739"]);
  });

  test("a known 4-node spell-damage set sums to 44%", () => {
    const { buckets } = aggregateStats(data.nodes, ["6008", "29652", "39659", "34096"]);
    const dmg = buckets.find((b) => b.template === "#% increased Spell Damage");
    expect(dmg?.sums).toEqual([44]); // 10 + 10 + 12 + 12
  });

  test("a complete ascendancy chain validates", () => {
    // 32699 Infernalist (Witch1 start) -> 63484 -> 18158 (notable)
    const r = validateAllocation(data, realAdj, "Witch", ["63484", "18158"]);
    expect(r.valid).toBe(true);
  });
});
