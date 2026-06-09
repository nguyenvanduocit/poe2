// Pure tiered pricing for the carry tracker. No Vue/Nuxt imports → unit-testable
// (functional core; state + persistence live in useCarryTracker.ts).
//
// A tier prices each level GAINED while inside its [fromLevel, toLevel) band:
//   "55-80: 1 div/level" → every level from 55 up to (not including) 80 costs 1 div.
// priceForRange walks each band L→L+1 across [from, to) and charges the tier that
// contains L, so an order spanning several tiers sums piecewise. This is exactly
// how the leveling listings on Discord bill a multi-range order.

export interface PriceTier {
  id: string
  fromLevel: number
  toLevel: number
  pricePerLevel: number
}

/** Price of the single band L→L+1: the tier whose [fromLevel, toLevel) contains L, else 0. */
export function priceOfBand(tiers: PriceTier[], level: number): number {
  for (const t of tiers) {
    if (level >= t.fromLevel && level < t.toLevel) return t.pricePerLevel
  }
  return 0
}

/** Total price to take a character from `from` to `to` (to > from), summed across tiers. */
export function priceForRange(tiers: PriceTier[], from: number | null, to: number | null): number {
  if (from == null || to == null) return 0
  const a = Math.trunc(from)
  const b = Math.trunc(to)
  if (b <= a) return 0
  let sum = 0
  for (let L = a; L < b; L++) sum += priceOfBand(tiers, L)
  return sum
}

export interface DiscordMessageOpts {
  title: string
  realm: string
  ign: string
  extraLine: string
  tiers: PriceTier[]
  currency: string // e.g. 'div'
}

/** Build a WTS-style Discord listing from the pricing tiers + service info. */
export function buildDiscordMessage(o: DiscordMessageOpts): string {
  const cur = o.currency.trim() || 'div'
  const lines: string[] = ['WTS Softcore']
  if (o.title.trim()) lines.push(o.title.trim())
  if (o.realm.trim()) lines.push(`Realm: ${o.realm.trim()}`)
  lines.push('')
  for (const t of o.tiers) lines.push(`${t.fromLevel}-${t.toLevel}: ${t.pricePerLevel} ${cur} / level`)
  if (o.extraLine.trim()) { lines.push(''); lines.push(o.extraLine.trim()) }
  lines.push('')
  lines.push('IGN: `@' + (o.ign.trim() || 'YourIGN') + ' WTB level xx to xx`')
  return lines.join('\n')
}
