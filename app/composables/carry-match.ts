// Pure Client.txt → party-carry events. No Vue/Nuxt imports so it can be
// unit-tested standalone (functional core; the imperative shell — file polling,
// roster state — lives in useCarryTracker.ts, mirroring leveling-match.ts).
//
// POE2 writes party-relevant lines after the `] : ` INFO system marker:
//   `… [INFO Client n] : <name> (<class>) is now level <N>`  ← party-only broadcast
//   `… [INFO Client n] : <name> has joined the area.`         ← entered your instance
//   `… [INFO Client n] : <name> has left the area.`           ← left your instance
//   `… [INFO Client n] : <name> has been slain.`              ← a player died (10% XP loss)
// and incoming whispers after `] @From` (NO `: ` system marker):
//   `… [INFO Client n] @From <buyer>: WTB level 78 to 90`     ← a buyer's order request
//
// The level-up line is the anchor: it ONLY broadcasts for players in your party,
// so it carries name + class + current level in one verified format (regex matched
// against the real fixture in Exiled-Exchange-2's client-log corpus). Join/leave
// give best-effort presence. Anchoring level/join/leave/slain on the bare `] : `
// system marker keeps a player typing "is now level 99" in chat from spoofing an
// event — whispers go down their OWN `@From` branch (order pre-fill only, never a
// level/death), so they cannot forge progress either.

export type CarryEvent =
  | { type: 'level', name: string, charClass: string, level: number }
  | { type: 'join', name: string }
  | { type: 'leave', name: string }
  | { type: 'slain', name: string }
  | { type: 'whisper', name: string, body: string, fromLevel: number | null, toLevel: number | null }

// System message body = everything after the `] : ` INFO marker.
const MSG_RE = /\] : (.+?)\s*$/
const LEVEL_RE = /^(.+) \((.+)\) is now level (\d+)$/
const JOIN_RE = /^(.+) has joined the area\.$/
const LEAVE_RE = /^(.+) has left the area\.$/
const SLAIN_RE = /^(.+) has been slain\.$/

// Incoming whisper: `] @From [<guild tag> ]<name>: <body>` (verified format from
// Exiled-Exchange-2 client_strings.js CHAT_WHISPER_FROM). `@To` and channel sigils
// (`#`/`%`/`$`/`&`) are intentionally ignored.
const WHISPER_FROM_RE = /\] @From (?:<[^>]*> )?(.+?): (.+?)\s*$/
// A level order inside the whisper body: "78 to 90", "78-90", "lvl 78 đến 90", …
const RANGE_RE = /\b(\d{1,3})\s*(?:to|-|–|->|→|tới|đến|den)\s*(\d{1,3})\b/i
// Light guard so random chat numbers ("lol 2 to 3") don't spawn rows — accept only
// when the body reads like a service request, or the start is already in level range.
const SERVICE_RE = /\b(wtb|buy|carry|rush|service|lvl|level|exp|act)\b/i

/** One Client.txt line → a carry event, or null if the line is not relevant. */
export function parseClientLine(line: string): CarryEvent | null {
  const m = line.match(MSG_RE)
  if (m) {
    const msg = m[1]!
    const lvl = msg.match(LEVEL_RE)
    if (lvl) return { type: 'level', name: lvl[1]!, charClass: lvl[2]!, level: Number(lvl[3]) }
    const join = msg.match(JOIN_RE)
    if (join) return { type: 'join', name: join[1]! }
    const leave = msg.match(LEAVE_RE)
    if (leave) return { type: 'leave', name: leave[1]! }
    const slain = msg.match(SLAIN_RE)
    if (slain) return { type: 'slain', name: slain[1]! }
    return null
  }

  const w = line.match(WHISPER_FROM_RE)
  if (w) {
    const name = w[1]!.trim()
    const body = w[2]!
    const r = body.match(RANGE_RE)
    if (!r) return null
    const from = Number(r[1])
    const to = Number(r[2])
    if (to <= from || to > 100 || from < 1) return null
    if (!SERVICE_RE.test(body) && from < 40) return null // bare low numbers, no service keyword → likely not an order
    return { type: 'whisper', name, body, fromLevel: from, toLevel: to }
  }

  return null
}

/** Parse a block of log text into carry events, in order. */
export function parseClientChunk(text: string): CarryEvent[] {
  const out: CarryEvent[] = []
  for (const line of text.split('\n')) {
    const ev = parseClientLine(line)
    if (ev) out.push(ev)
  }
  return out
}
