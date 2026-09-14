# PoE 2 Gameplay Workspace

Path of Exile 2 league/patch gameplay workspace — a Nuxt 4 SSG "second brain" site (`poe2.aiocean.io`) plus the AI skills, content notes, and data pipelines that feed it. Current focus: PoE2 0.5 "Return of the Ancients" (Runes of Aldur league).

## Where the real instructions live

- `CLAUDE.md` — workspace-specific bindings (slash command aliases, frontmatter convention, data paths, gameplay workflows).
- `../CLAUDE.md` — shared instructions (rules, quantitative-reasoning discipline, content folder boundaries, writing voice, wiki-link usage).

Read those first; they are the de-facto onboarding docs for both humans and agents.

## Commands

```bash
bun install        # install dependencies
bun run dev        # dev server on http://localhost:3000
bun run generate   # static build — also the type/SSR gate before commit
bun run preview    # preview the generated site
```

## Price tracking CI

`.github/workflows/collect-prices.yml` runs every three hours and supports manual
runs in GitHub Actions. It reads `currentLeague` from `nuxt.config.ts` and fetches
all available currency and unique categories from poe2scout.

The configured price league is **Forbidden Rites**. Runes of Aldur records remain
in the historical master file.

```bash
python3 .claude/skills/price-forecast/scripts/collect.py
bun run build:prices
bun run test:prices
bun run typecheck:prices
```

The collector merges dated prices into `data/price-history/master.json` and
replaces `daily/YYYY-MM-DD.json` with the latest crawl for that UTC day. Repeated
runs refresh that day's prices; older days and leagues remain in history. The
site index uses only today's snapshot for the configured league. The legacy
`price_chaos` and `divine_chaos` fields hold **Exalted Orb** values in POE2.

Collection fails before saving on API errors, incomplete pagination, missing
reference currencies, or an unsupported price unit. Tests and a scoped TypeScript
check run before the workflow commits the data to `main`. The existing Cloudflare
Pages Git integration handles deployment. If `main` changes during collection,
the job fails and must run again against the new commit.

For a full per-item history backfill, pass `--history`; the scheduled job uses
current quotes and recent `PriceLogs` from category pages to limit API calls.
Backfills also merge history. There is no destructive `--force` option. Use
`--data-dir /tmp/poe2-price-smoke` to collect into an isolated directory.

When switching leagues, set `currentLeague` and add its verified start date to
`.claude/skills/price-forecast/scripts/leagues.py`. Multiple POE2 leagues may be
active at once, so the collector does not pick the first API result.

## Layout

- `app/`, `server/` — Nuxt app + Nitro routes.
- `content/` — markdown notes (`builds/`, `characters/`, `guides/`, `farming/`, `crafting/`).
- `data/` — own-generated reference/economy data (`release-notes/`, `poe-ninja/`, `poe2scout/`, `passive-tree/`, `map-mods/`, `price-history/`). Large third-party mirrors (`wiki/`, `poedb/`, `pob-source/`, `trade-static/`) are gitignored — refresh them locally via the skills.
- `.claude/skills/` — gameplay skills (`/pob`, `/trade`, `/poewiki`, `/farming-strategy`, `/build-creator`, …); each owns its scripts under `scripts/`.

## License

- **Code** (the Nuxt app, `.claude/` skills and scripts, filter/stream tooling, config) — MIT. See [`LICENSE`](LICENSE).
- **Content** (the gameplay notes under `content/`) — CC BY-NC 4.0. See [`LICENSE-CONTENT`](LICENSE-CONTENT).

Path of Exile 2 is a trademark of Grinding Gear Games. This is an unofficial fan project, not affiliated with or endorsed by GGG.
