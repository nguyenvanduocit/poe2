import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export interface BuildStats {
  Life: number;
  EnergyShield: number;
  Mana: number;
  TotalDPS: number;
  CombinedDPS: number;
  FullDPS: number;
  TotalEHP: number;
}

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));

/**
 * Load a build XML into real POB2 headless and return its calculated stats.
 * Shells out to verify.sh → luajit HeadlessWrapper. ~1-2s startup per call.
 */
export async function verifyBuild(xml: string): Promise<BuildStats> {
  const dir = mkdtempSync(join(tmpdir(), 'pob-verify-'));
  const xmlPath = join(dir, 'build.xml');
  writeFileSync(xmlPath, xml, 'utf-8');

  try {
    const proc = Bun.spawn(['bash', join(SCRIPT_DIR, 'verify.sh'), xmlPath], {
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const out = await new Response(proc.stdout).text();
    await proc.exited;

    const line = out.split('\n').find((l) => l.startsWith('##STATS##'));
    if (!line) {
      const err = await new Response(proc.stderr).text();
      throw new Error(`verify: no ##STATS## line in POB2 output.\nstdout tail:\n${out.slice(-800)}\nstderr tail:\n${err.slice(-800)}`);
    }
    return JSON.parse(line.slice('##STATS##'.length)) as BuildStats;
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}
