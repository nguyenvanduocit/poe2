#!/usr/bin/env bun

/**
 * Unified Static Data Updater
 *
 * Updates all static/rarely-changed data files that serve as single source of truth:
 * - poe-static-cache.json (maps, currencies, etc.)
 * - poe-filters.json (trade stats, items, static data)
 *
 * Usage:
 *   bun tools/update-static-data.ts [options]
 *
 * Options:
 *   --all         Update all static files (default)
 *   --maps        Update maps cache only
 *   --filters     Update trade filters only
 *   --force       Force update even if cache is fresh
 */

import { createTradeClient } from '../ggg/client';

const POESESSID = process.env.POESESSID || 'f6f8b8d2dd2f7b2ee60c65077710f58a';

// File paths
const MAPS_CACHE_FILE = '.claude/skills/poe-auth/ggg/poe-static-cache.json';
const FILTERS_CACHE_FILE = '.claude/skills/poe-auth/ggg/poe-filters.json';

// Cache TTL
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

interface MapEntry {
  id: string;
  text: string;
  tier: number;
}

interface StaticData {
  maps: MapEntry[];
  fetchedAt: number;
}

interface UpdateOptions {
  all: boolean;
  maps: boolean;
  filters: boolean;
  force: boolean;
}

function parseArgs(): UpdateOptions {
  const args = process.argv.slice(2);

  const options: UpdateOptions = {
    all: false,
    maps: false,
    filters: false,
    force: false,
  };

  // If no specific options, update all
  const hasSpecificOption = args.includes('--maps') || args.includes('--filters');
  if (!hasSpecificOption) {
    options.all = true;
  }

  for (const arg of args) {
    switch (arg) {
      case '--all':
        options.all = true;
        break;
      case '--maps':
        options.maps = true;
        break;
      case '--filters':
        options.filters = true;
        break;
      case '--force':
        options.force = true;
        break;
    }
  }

  return options;
}

/**
 * Check if cache is still fresh
 */
async function isCacheFresh(filePath: string): Promise<boolean> {
  try {
    const file = Bun.file(filePath);
    if (!(await file.exists())) {
      return false;
    }

    const data = await file.json();
    if (!data.fetchedAt) {
      return false;
    }

    return Date.now() - data.fetchedAt < CACHE_TTL;
  } catch {
    return false;
  }
}

/**
 * Update maps static cache
 */
async function updateMapsCache(force: boolean): Promise<boolean> {
  console.log('\n📍 Maps Cache (poe-static-cache.json)');
  console.log('═'.repeat(50));

  // Check if update needed
  if (!force && (await isCacheFresh(MAPS_CACHE_FILE))) {
    const file = Bun.file(MAPS_CACHE_FILE);
    const data = (await file.json()) as StaticData;
    const age = Math.floor((Date.now() - data.fetchedAt) / 1000 / 60 / 60);
    console.log(`✓ Cache is fresh (${age}h old, ${data.maps.length} maps)`);
    return false;
  }

  console.log('⟳ Fetching maps data from PoE API...');

  try {
    // Fetch from API
    const response = await fetch('https://www.pathofexile.com/api/trade/data/static');

    // Add mandatory 1 second cooldown after each API call to POE servers
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const rawData = await response.json();

    // Parse maps
    const mapsCategory = rawData.result.find((cat: any) => cat.id === 'Maps');
    if (!mapsCategory) {
      throw new Error('Maps category not found in API response');
    }

    const maps: MapEntry[] = mapsCategory.entries
      .filter((entry: any) => entry.id !== 'sep')
      .map((entry: any) => ({
        id: entry.id,
        text: entry.text,
        tier: parseInt(entry.subtext?.replace('Tier ', '') || '0'),
      }));

    const data: StaticData = {
      maps,
      fetchedAt: Date.now(),
    };

    // Save to file
    await Bun.write(MAPS_CACHE_FILE, JSON.stringify(data, null, 2));

    console.log(`✓ Updated successfully (${maps.length} maps)`);
    return true;
  } catch (error) {
    console.error(`✗ Failed: ${error instanceof Error ? error.message : String(error)}`);
    return false;
  }
}

/**
 * Update trade filters cache
 */
async function updateFiltersCache(force: boolean): Promise<boolean> {
  console.log('\n🔍 Trade Filters (poe-filters.json)');
  console.log('═'.repeat(50));

  // Check if update needed
  if (!force && (await isCacheFresh(FILTERS_CACHE_FILE))) {
    const file = Bun.file(FILTERS_CACHE_FILE);
    const data = await file.json();
    const age = data.fetchedAt
      ? Math.floor((Date.now() - data.fetchedAt) / 1000 / 60 / 60)
      : '?';

    const statsCount = data.stats?.reduce((sum: number, cat: any) => sum + cat.entries.length, 0) || 0;
    const itemsCount = data.items?.length || 0;

    console.log(`✓ Cache is fresh (${age}h old, ${statsCount} stats, ${itemsCount} items)`);
    return false;
  }

  console.log('⟳ Fetching filters data from PoE API...');

  try {
    const client = createTradeClient({
      poesessid: POESESSID,
      league: 'Standard', // League doesn't matter for data endpoints
    });

    // Fetch all data
    console.log('  - Fetching stats...');
    const { result: stats } = await client.getStats();

    console.log('  - Fetching items...');
    const { result: items } = await client.getItems();

    console.log('  - Fetching static data...');
    const staticData = await client.getStatic();

    const data = {
      stats,
      items,
      static: staticData,
      fetchedAt: Date.now(),
    };

    // Save to file
    await Bun.write(FILTERS_CACHE_FILE, JSON.stringify(data, null, 2));

    const statsCount = stats.reduce((sum: number, cat: any) => sum + cat.entries.length, 0);
    console.log(`✓ Updated successfully (${statsCount} stats, ${items.length} items)`);
    return true;
  } catch (error) {
    console.error(`✗ Failed: ${error instanceof Error ? error.message : String(error)}`);
    return false;
  }
}

async function main() {
  const options = parseArgs();

  console.log('━'.repeat(50));
  console.log('  POE Static Data Updater');
  console.log('━'.repeat(50));

  if (options.force) {
    console.log('\n⚠️  Force mode: Updating regardless of cache age');
  }

  const updates: Promise<boolean>[] = [];

  if (options.all || options.maps) {
    updates.push(updateMapsCache(options.force));
  }

  if (options.all || options.filters) {
    updates.push(updateFiltersCache(options.force));
  }

  const results = await Promise.all(updates);

  console.log('\n' + '━'.repeat(50));
  const updated = results.filter(Boolean).length;
  const skipped = results.length - updated;

  if (updated > 0) {
    console.log(`✓ Done! ${updated} file(s) updated, ${skipped} skipped (fresh)`);
  } else {
    console.log('✓ All caches are fresh. Use --force to update anyway.');
  }
  console.log('━'.repeat(50));
}

main().catch((error) => {
  console.error('\n✗ Fatal error:', error.message);
  process.exit(1);
});
