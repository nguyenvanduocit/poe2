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
- `content/` — markdown notes (`builds/`, `characters/`, `mechanics/`, `guides/`).
- `data/` — persistent download blobs: `wiki/`, `poedb/`, `release-notes/`, `poe-ninja/`, `passive-tree/`, `map-mods/`, `trade-static/`, `pob-source/` (see `../CLAUDE.md` for the canonical layout).
- `.claude/skills/` — ~27 gameplay skills (`/pob`, `/trade`, `/poewiki`, `/farming-strategy`, `/build-creator`, …); each owns its scripts under `scripts/`.
