import { test, expect } from 'bun:test';
import { inflateSync } from 'node:zlib';
import { encode } from '../encode';

// Real PoB codes are zlib-deflate(xml) → url-safe base64.
// Verified 2026-05-25: pobb.in raw code decodes via inflateSync(Buffer.from(code,'base64')),
// header bytes 78da (zlib best-compression), charset uses - and _ (url-safe), never + or /.

test('encode round-trips: decoding the output yields the original XML', () => {
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<PathOfBuilding>\n\t<Build level="90" className="Witch" ascendClassName="Infernalist"/>\n</PathOfBuilding>';

  const code = encode(xml);
  const decoded = inflateSync(Buffer.from(code, 'base64')).toString('utf-8');

  expect(decoded).toBe(xml);
});

test('encode produces URL-safe base64 (never + or /)', () => {
  // Long, varied content makes standard base64 very likely to emit + and / —
  // url-safe encoding must translate those to - and _.
  const xml = Array.from({ length: 200 }, (_, i) => `<Item id="${i}">~~~///+++${i}</Item>`).join('');

  const code = encode(xml);

  expect(code).not.toMatch(/[+/]/);
});
