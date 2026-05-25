import { test, expect } from 'bun:test';
import { inflateSync } from 'node:zlib';
import { runPipeline } from '../pipeline';

// Integration: spec → xml → encode → verify, composed. Confirms the tested
// units actually chain: the emitted code decodes back to the same xml AND
// POB2 calculates real stats from it.
test('runPipeline emits a decodable code and verified stats from a spec', async () => {
  const result = await runPipeline({ level: 90, className: 'Witch' });

  const decoded = inflateSync(Buffer.from(result.code, 'base64')).toString('utf-8');
  expect(decoded).toBe(result.xml);
  expect(result.stats.Life).toBeGreaterThan(0);
}, 30000);
