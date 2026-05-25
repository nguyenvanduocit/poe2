// Canonical slug rule for PoE item names.
//
// Rule: lowercase, every run of non-alphanumeric chars → single dash, trim
// leading/trailing dashes. So `Watcher's Eye` → `watcher-s-eye`,
// `Divine Orb` → `divine-orb`, `Sacrifice at Midnight` → `sacrifice-at-midnight`.
//
// Imported by `.claude/skills/nuxt/scripts/build-prices/build.ts` (writes the price index keyed by
// slug) and by `app/components/WikiLink.vue` (keys price lookup + feeds the
// poewiki.net search query when no `name` prop is provided).

export function toItemSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
