// Pure Client.txt → route-position matching. No Vue/Nuxt imports so it can be
// unit-tested in isolation (functional core, imperative shell lives in
// useLeveling.ts). The English POE2 client writes one line per zone entry:
//   `<ts> <hex> [INFO Client <n>] : You have entered <Zone>.`
export const ENTER_RE = /\] : You have entered (.+?)\.\s*$/

/** Zone name from one log line, or null if it is not a zone-entry line. */
export function parseEnteredZone(line: string): string | null {
  const m = line.match(ENTER_RE)
  return m ? m[1]! : null
}

/** The LAST entered-zone name in a block of log text — the player's latest area. */
export function latestEnteredZone(text: string): string | null {
  let latest: string | null = null
  for (const line of text.split('\n')) {
    const z = parseEnteredZone(line)
    if (z) latest = z
  }
  return latest
}

/**
 * Forward-only resolution for the live poll: given the ascending route indices a
 * zone name maps to and the current pointer, return the nearest index at/after
 * the pointer, or null if the zone only exists behind it (a backtrack to town /
 * hideout / an earlier area — ignored so the pointer never regresses).
 */
export function pickForwardIndex(idxs: number[] | undefined, currentIdx: number): number | null {
  if (!idxs || idxs.length === 0) return null
  const fwd = idxs.find(i => i >= currentIdx)
  return fwd === undefined ? null : fwd
}

/**
 * Latest resolution for first connect: pick where the player actually is now,
 * even if behind the furthest zone reached. With a unique name there is one
 * index; with repeats (a revisited zone) the last occurrence is the better guess.
 */
export function pickLatestIndex(idxs: number[] | undefined): number | null {
  if (!idxs || idxs.length === 0) return null
  return idxs[idxs.length - 1]!
}
