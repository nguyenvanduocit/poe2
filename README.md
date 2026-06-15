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

## Layout

- `app/`, `server/` — Nuxt app + Nitro routes.
- `content/` — markdown notes (`builds/`, `characters/`, `guides/`, `farming/`, `crafting/`).
- `data/` — own-generated reference/economy data (`release-notes/`, `poe-ninja/`, `poe2scout/`, `passive-tree/`, `map-mods/`, `price-history/`). Large third-party mirrors (`wiki/`, `poedb/`, `pob-source/`, `trade-static/`) are gitignored — refresh them locally via the skills.
- `.claude/skills/` — gameplay skills (`/pob`, `/trade`, `/poewiki`, `/farming-strategy`, `/build-creator`, …); each owns its scripts under `scripts/`.

## License

- **Code** (the Nuxt app, `.claude/` skills and scripts, filter/stream tooling, config) — MIT. See [`LICENSE`](LICENSE).
- **Content** (the gameplay notes under `content/`) — CC BY-NC 4.0. See [`LICENSE-CONTENT`](LICENSE-CONTENT).

Path of Exile 2 is a trademark of Grinding Gear Games. This is an unofficial fan project, not affiliated with or endorsed by GGG.
