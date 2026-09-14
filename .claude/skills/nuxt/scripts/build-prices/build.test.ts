import { afterEach, beforeEach, describe, expect, test } from 'bun:test'
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, resolve } from 'node:path'

const repoRoot = resolve(import.meta.dir, '../../../../..')
const builderPath = '.claude/skills/nuxt/scripts/build-prices/build.ts'
const outputPath = 'app/composables/data/prices.generated.ts'
const today = new Date().toISOString().slice(0, 10)
const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10)
const previousIndex = '// existing Fate of the Vaal index must not count as a successful build\n'
let fixtureRoot: string

function writeFixture(path: string, contents: string) {
  const target = resolve(fixtureRoot, path)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, contents)
}

function record(league: string, date = today, item = 'Divine Orb', price = 250) {
  return {
    league, date, item, variant: '', type: 'Currency', league_day: 49,
    price_chaos: price, listings: 100, day_of_week: 4,
    price_unit: 'exalted',
  }
}

function snapshot(records: unknown[], date = today) {
  writeFixture(`data/price-history/daily/${date}.json`, JSON.stringify(records))
}

function runBuilder() {
  const result = Bun.spawnSync([process.execPath, resolve(fixtureRoot, builderPath)], {
    cwd: fixtureRoot,
    stdout: 'pipe',
    stderr: 'pipe',
  })
  return { exitCode: result.exitCode, stderr: result.stderr.toString() }
}

beforeEach(() => {
  fixtureRoot = mkdtempSync(resolve(tmpdir(), 'poe-price-index-test-'))
  for (const path of [builderPath, 'app/utils/itemSlug.ts']) {
    mkdirSync(dirname(resolve(fixtureRoot, path)), { recursive: true })
    copyFileSync(resolve(repoRoot, path), resolve(fixtureRoot, path))
  }
  writeFixture('nuxt.config.ts', "export default { runtimeConfig: { public: { site: { currentLeague: 'Runes of Aldur' } } } }\n")
  writeFixture('data/price-history/master.json', JSON.stringify([
    record('Fate of the Vaal', today, 'Fate of the Vaal Only', 500),
    record('Fate of the Vaal', today, 'Divine Orb', 999),
    record('Runes of Aldur', yesterday, 'Historical Only', 20),
  ]))
  writeFixture(outputPath, previousIndex)
})

afterEach(() => {
  rmSync(fixtureRoot, { recursive: true, force: true })
})

describe('price index requires a current-league daily snapshot', () => {
  test('missing today snapshot fails despite historical master and an existing index', () => {
    snapshot([record('Runes of Aldur', yesterday)], yesterday)
    const result = runBuilder()
    expect(result.exitCode).not.toBe(0)
    expect(result.stderr).toContain("Missing today's UTC price snapshot")
    expect(readFileSync(resolve(fixtureRoot, outputPath), 'utf8')).toBe(previousIndex)
  })

  test.each([
    ['old league', [record('Fate of the Vaal')]],
    ['mixed leagues', [record('Runes of Aldur'), record('Fate of the Vaal')]],
    ['stale records in today file', [record('Runes of Aldur', yesterday)]],
  ])('%s fails before replacing the existing index', (_description, records) => {
    snapshot(records as unknown[])
    const result = runBuilder()
    expect(result.exitCode).not.toBe(0)
    expect(result.stderr).toContain('must contain only league "Runes of Aldur" records dated')
    expect(readFileSync(resolve(fixtureRoot, outputPath), 'utf8')).toBe(previousIndex)
  })

  test('empty snapshot fails', () => {
    snapshot([])
    const result = runBuilder()
    expect(result.exitCode).not.toBe(0)
    expect(result.stderr).toContain('Empty or invalid price snapshot')
    expect(readFileSync(resolve(fixtureRoot, outputPath), 'utf8')).toBe(previousIndex)
  })

  test.each([0, -1, null, '100'])('invalid price %s preserves the index', price => {
    snapshot([{ ...record('Runes of Aldur'), price_chaos: price }])
    expect(runBuilder().exitCode).not.toBe(0)
    expect(readFileSync(resolve(fixtureRoot, outputPath), 'utf8')).toBe(previousIndex)
  })

  test('wrong currency unit fails', () => {
    snapshot([{ ...record('Runes of Aldur'), price_unit: 'chaos' }])
    expect(runBuilder().exitCode).not.toBe(0)
    expect(readFileSync(resolve(fixtureRoot, outputPath), 'utf8')).toBe(previousIndex)
  })

  test('missing Divine Orb fails', () => {
    snapshot([record('Runes of Aldur', today, 'Exalted Orb', 1)])
    expect(runBuilder().stderr).toContain('Missing Divine Orb')
    expect(readFileSync(resolve(fixtureRoot, outputPath), 'utf8')).toBe(previousIndex)
  })

  test('fresh Runes of Aldur prices exclude Fate of the Vaal and stale master-only items', async () => {
    snapshot([record('Runes of Aldur'), record('Runes of Aldur', today, 'Chaos Orb', 1)])
    const masterBefore = readFileSync(resolve(fixtureRoot, 'data/price-history/master.json'), 'utf8')
    const result = runBuilder()
    expect(result.exitCode).toBe(0)
    const { PRICES } = await import(resolve(fixtureRoot, outputPath))
    expect(PRICES.league).toBe('Runes of Aldur')
    expect(PRICES.divine_chaos).toBe(250)
    expect(Object.keys(PRICES.items).sort()).toEqual(['chaos-orb', 'divine-orb'])
    expect(PRICES.items['divine-orb'].as_of).toBe(today)
    expect(readFileSync(resolve(fixtureRoot, 'data/price-history/master.json'), 'utf8')).toBe(masterBefore)
  })
})
