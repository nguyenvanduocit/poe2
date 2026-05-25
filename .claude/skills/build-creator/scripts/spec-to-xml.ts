import type { BuildSpec, BuildItem, BuildSkillGroup, BuildTree } from './spec';

const LATEST_TREE_VERSION = '0_4';

/**
 * Deterministic emitter: BuildSpec → Path of Building XML.
 * Inverse of the parse logic in pob2/scripts/pob-client.ts.
 */
export function specToXml(spec: BuildSpec): string {
  const ascend = spec.ascendClassName ? ` ascendClassName="${spec.ascendClassName}"` : '';
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<PathOfBuilding>\n' +
    `\t<Build level="${spec.level}" className="${spec.className}"${ascend}/>\n` +
    skillsXml(spec.skills ?? []) +
    treeXml(spec.tree) +
    itemsXml(spec.items ?? []) +
    '</PathOfBuilding>'
  );
}

/**
 * Emit the <Tree> block. PassiveSpec:Load reads the `nodes` attribute directly
 * (gmatch over digits) plus classId/ascendClassId, so the <URL> is optional.
 */
function treeXml(tree?: BuildTree): string {
  if (!tree) return '';
  const version = tree.treeVersion ?? LATEST_TREE_VERSION;
  const ascend = tree.ascendClassId ?? 0;
  return (
    '\t<Tree activeSpec="1">\n' +
    `\t\t<Spec treeVersion="${version}" classId="${tree.classId}"` +
    ` ascendClassId="${ascend}" nodes="${tree.nodes.join(',')}">\n` +
    '\t\t</Spec>\n' +
    '\t</Tree>\n'
  );
}

/**
 * Emit the <Skills> block. POE2 gems live in skill groups (a main active +
 * supports), not socketed into gear — so no slot attribute.
 */
function skillsXml(groups: BuildSkillGroup[]): string {
  if (groups.length === 0) return '';

  const groupEls = groups
    .map((g) => {
      const main = g.mainActiveSkill ?? 1;
      const label = g.label ? ` label="${g.label}"` : ' label=""';
      const gems = g.gems
        .map((gem) => {
          const skillId = gem.skillId ? ` skillId="${gem.skillId}"` : '';
          const gemId = gem.gemId ? ` gemId="${gem.gemId}"` : '';
          const enabled = gem.enabled === false ? 'false' : 'true';
          return (
            `\t\t\t\t<Gem nameSpec="${gem.nameSpec}"${skillId}` +
            ` level="${gem.level ?? 20}" quality="${gem.quality ?? 0}"` +
            ` enabled="${enabled}"${gemId}/>\n`
          );
        })
        .join('');
      return (
        `\t\t\t<Skill${label} enabled="true" mainActiveSkill="${main}">\n` +
        gems +
        '\t\t\t</Skill>\n'
      );
    })
    .join('');

  return (
    '\t<Skills activeSkillSet="1">\n' +
    '\t\t<SkillSet id="1">\n' +
    groupEls +
    '\t\t</SkillSet>\n' +
    '\t</Skills>\n'
  );
}

/**
 * Emit the <Items> block: each item as <Item id="N">text</Item>, then an
 * <ItemSet> mapping slot names to item ids. Item ids are 1-based positional.
 */
function itemsXml(items: BuildItem[]): string {
  if (items.length === 0) return '';

  const itemEls = items
    .map((it, i) => `\t\t<Item id="${i + 1}">\n${it.text}\n\t\t</Item>\n`)
    .join('');
  const slotEls = items
    .map((it, i) => `\t\t\t<Slot name="${it.slot}" itemId="${i + 1}"/>\n`)
    .join('');

  return (
    '\t<Items activeItemSet="1">\n' +
    itemEls +
    '\t\t<ItemSet id="1">\n' +
    slotEls +
    '\t\t</ItemSet>\n' +
    '\t</Items>\n'
  );
}
