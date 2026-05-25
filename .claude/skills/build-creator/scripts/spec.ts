/**
 * Build spec — the structured intermediate the LLM authors, which the
 * deterministic emitter (spec-to-xml.ts) turns into Path of Building XML.
 *
 * Grows incrementally (TDD): start with the Build header, add tree / items /
 * skills / flasks / jewels as their emitter behavior is tested in.
 */
export interface BuildItem {
  /** PoB slot name, e.g. "Body Armour", "Weapon 1", "Ring 1". */
  slot: string;
  /** Full PoB item text (Rarity line, name, base type, mods) authored by the LLM. */
  text: string;
}

export interface BuildGem {
  /** Display name, e.g. "Rolling Magma". */
  nameSpec: string;
  /** Internal skill id, e.g. "RollingMagma" — helps POB2 resolve the gem. */
  skillId?: string;
  /** Metadata path, e.g. "Metadata/Items/Gems/SkillGemMagmaOrb". */
  gemId?: string;
  level?: number; // default 20
  quality?: number; // default 0
  enabled?: boolean; // default true
}

export interface BuildSkillGroup {
  label?: string;
  /** Gems in the group; by default the first is the main active skill. */
  gems: BuildGem[];
  /** 1-based index of the main active gem (default 1). */
  mainActiveSkill?: number;
}

export interface BuildTree {
  /** POE2 tree version, e.g. "0_4". Default = latest known. */
  treeVersion?: string;
  /** Tree-internal class id (LLM resolves className → classId at authoring time). */
  classId: number;
  ascendClassId?: number; // default 0
  /** Allocated passive node ids. */
  nodes: number[];
}

export interface BuildSpec {
  level: number;
  className: string;
  ascendClassName?: string;
  items?: BuildItem[];
  skills?: BuildSkillGroup[];
  tree?: BuildTree;
}
