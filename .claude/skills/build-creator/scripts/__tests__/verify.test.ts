import { test, expect } from 'bun:test';
import { verifyBuild } from '../verify';
import { specToXml } from '../spec-to-xml';

// Integration test: emit a minimal build, load it in real POB2 headless, read
// back calc'd stats. This is the ONLY test that exercises the actual POB2
// parser (not the lenient PobClient decoder) — it catches silent mod/structure
// parse failures the round-trip tests cannot. POB2 startup ~1-2s.

test('verifyBuild returns positive Life for a minimal emitted build', async () => {
  const xml = specToXml({ level: 90, className: 'Witch' });

  const stats = await verifyBuild(xml);

  expect(stats.Life).toBeGreaterThan(0);
}, 30000);
