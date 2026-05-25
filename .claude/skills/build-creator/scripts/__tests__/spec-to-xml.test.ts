import { test, expect } from 'bun:test';
import { specToXml } from '../spec-to-xml';
import { encode } from '../encode';
import { PobClient } from '../../../pob2/scripts/pob-client';

// Oracle: round-trip the emitted XML through the real pipeline
// (specToXml → encode → PobClient.decodeBuild) and assert the decoder
// reads back the fields we put in. PobClient is the project's canonical decoder.
const decode = (xml: string) => new PobClient().decodeBuild(encode(xml)).parsed;

test('specToXml emits a Build element carrying class, level, and ascendancy', () => {
  const spec = { level: 92, className: 'Witch', ascendClassName: 'Infernalist' };

  const parsed = decode(specToXml(spec));

  expect(parsed.className).toBe('Witch');
  expect(parsed.level).toBe('92');
  expect(parsed.ascendClassName).toBe('Infernalist');
});

test('specToXml places each item in <Items> and equips it via <Slot>', () => {
  const spec = {
    level: 90,
    className: 'Witch',
    items: [
      { slot: 'Body Armour', text: 'Rarity: RARE\nDoom Shroud\nWidowsilk Robe\nQuality: 20' },
      { slot: 'Weapon 1', text: 'Rarity: UNIQUE\nThe Searing Touch\nLathi' },
    ],
  };

  const parsed = decode(specToXml(spec));

  expect(parsed.items?.['Body Armour']?.rawText).toContain('Widowsilk Robe');
  expect(parsed.items?.['Weapon 1']?.rawText).toContain('The Searing Touch');
});

test('specToXml emits skill groups with their gems in order', () => {
  // POE2 gems are not socketed into gear (no slot=); a group is a main skill + supports.
  const spec = {
    level: 90,
    className: 'Witch',
    skills: [
      {
        gems: [
          { nameSpec: 'Rolling Magma', skillId: 'RollingMagma', level: 20, quality: 20 },
          { nameSpec: 'Spell Echo', skillId: 'SpellEcho' },
        ],
      },
    ],
  };

  const parsed = decode(specToXml(spec));
  const grp = parsed.skills?.find((s) => s.gems?.some((g) => g.nameSpec === 'Rolling Magma'));

  expect(grp?.gems?.map((g) => g.nameSpec)).toEqual(['Rolling Magma', 'Spell Echo']);
});

test('specToXml emits a passive tree spec with classId and allocated nodes', () => {
  const spec = {
    level: 90,
    className: 'Witch',
    tree: { classId: 1, ascendClassId: 2, nodes: [36542, 15081, 60791] },
  };

  const parsed = decode(specToXml(spec));
  const treeSpec = Object.values(parsed.tree?.specs ?? {})[0];

  expect(treeSpec?.classId).toBe(1);
  expect(treeSpec?.ascendClassId).toBe(2);
  expect(treeSpec?.nodes).toEqual(['36542', '15081', '60791']);
});
