#!/usr/bin/env bun

/**
 * POE Trade Whisper CLI
 *
 * Send in-game whispers using tokens from trade search results.
 * Tokens expire after ~5 minutes. Player must be in town or hideout.
 *
 * Usage:
 *   bun .claude/skills/poe-auth/ggg/whisper.ts <token>
 *   bun .claude/skills/poe-auth/ggg/whisper.ts <token> --game poe2
 */

import { createTradeClient } from './client.ts';

const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help')) {
  console.log(`
POE Trade Whisper CLI

USAGE:
  bun .claude/skills/poe-auth/ggg/whisper.ts <token> [--game poe1|poe2]

ARGUMENTS:
  token       hideout_token or whisper_token from trade search results

OPTIONS:
  --game      Game version: poe1 (default) or poe2
  --help      Show this help

NOTES:
  - Token expires ~5 minutes after search
  - Player must be in town or hideout in-game
  - Requires POESESSID env var

EXAMPLES:
  bun .claude/skills/poe-auth/ggg/whisper.ts eyJ0eXAi...
  bun .claude/skills/poe-auth/ggg/whisper.ts eyJ0eXAi... --game poe2
`);
  process.exit(0);
}

const token = args.find(a => !a.startsWith('--'));
if (!token) {
  console.error('Error: token required');
  process.exit(1);
}

const gameIdx = args.indexOf('--game');
const game = gameIdx !== -1 ? (args[gameIdx + 1] as 'poe1' | 'poe2') : 'poe1';

const poesessid = process.env.POESESSID || '';
if (!poesessid) {
  console.error('Error: POESESSID env var required');
  process.exit(1);
}

const client = createTradeClient({ poesessid, league: 'Mirage', game });
const result = await client.sendWhisper(token);

if (result.success) {
  console.log('Whisper sent!');
} else {
  console.error('Failed:', result.error);
  process.exit(1);
}
