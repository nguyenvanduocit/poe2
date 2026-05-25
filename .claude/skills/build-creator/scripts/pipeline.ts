import type { BuildSpec } from './spec';
import { specToXml } from './spec-to-xml';
import { encode } from './encode';
import { verifyBuild, type BuildStats } from './verify';
import { publishToPobbin, type PublishResult } from './publish';

export interface PipelineResult {
  xml: string;
  code: string;
  stats: BuildStats;
  published?: PublishResult;
}

/**
 * Compose the full author pipeline: spec → xml → code → POB2-verified stats.
 * Optionally publish to pobb.in (headless, proven). poe.ninja publish runs via
 * playwriter at handoff (see publish.poeninjaUploadSnippet), not here.
 */
export async function runPipeline(
  spec: BuildSpec,
  opts: { publish?: boolean } = {},
): Promise<PipelineResult> {
  const xml = specToXml(spec);
  const code = encode(xml);
  const stats = await verifyBuild(xml);
  const published = opts.publish ? await publishToPobbin(code) : undefined;
  return { xml, code, stats, published };
}

// CLI: bun pipeline.ts <spec.json> [--publish]
if (import.meta.main) {
  const specPath = process.argv[2];
  if (!specPath) {
    console.error('usage: bun pipeline.ts <spec.json> [--publish]');
    process.exit(1);
  }
  const spec = JSON.parse(await Bun.file(specPath).text()) as BuildSpec;
  const result = await runPipeline(spec, { publish: process.argv.includes('--publish') });
  console.log(JSON.stringify({ stats: result.stats, code: result.code, published: result.published }, null, 2));
}
