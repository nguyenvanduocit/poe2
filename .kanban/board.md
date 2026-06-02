# Kanban Board
<!-- Updated: 2026-06-02 (T-009 poe-ninja path fix — Done; T-010 price-forecast path — Todo) -->

## Backlog

## Todo

- [T-005](tasks/T-005-mobalytics-skill-cloudflare-stale-query.md) Mobalytics skill hỏng — Cloudflare 403 + stale query + profile-URL slug — medium/M
- [T-010](tasks/T-010-price-forecast-path-reconcile.md) price-forecast ghi data vào .claude/skills/data/ + lệch path nuxt build — medium/S

## Doing

## Done

- [T-009](tasks/T-009-poe-ninja-collect-builds-path.md) poe-ninja collect-builds ghi data sai chỗ (.claude/skills/data/) — high/XS (parents[2]→parents[4] + bỏ game segment `poe2/`; py_compile ok; resolve verify PROJECT_DIR=root, out_dir=data/poe-ninja/runesofaldur khớp data relocate, CACHE_DIR=tmp/; snapshot lạc đã move về canonical)

- [T-008](tasks/T-008-pob-skill-poeninja-profile-pull.md) Pull POE2 char đầy đủ từ poe.ninja profile API vào /pob — high/S (fetch-poeninja.sh +profile branch: events SSE → dynamic modelId → model JSON; verified ThaoCamVienSaiGon PoB 8900 + model 175KB saved, /pob analyze.sh route info=ok exit0; pob+stash SKILL.md docs; bonus: fixed broken .gitignore inline-comment patterns → char-exports/pob-source(572M) now actually ignored)

- [T-006](tasks/T-006-leveling-route-0-5-accuracy.md) Leveling route data đúng POE2 0.5 (4 Acts + 3 Interludes) — high/L (14-agent workflow → spec; surgical rewrite: +3 Interludes/22 zones, +4 Farrow, Fate of the Vaal beacons, Freythorn ritual-reward removed, Waterways pads, Navali rune, Dreadnought spelling, Azak Bog Lv40; 92 zones/337 steps; generate 535 routes + matcher 23/23 + reviewer APPROVE; interludes/Act3-order = in-league test plan)

- [T-007](tasks/T-007-dev-cloudflared-tunnel.md) Dev cloudflared tunnel cho live preview domain — low/XS (vite.server.allowedHosts `.trycloudflare.com` + `dev:tunnel` script via concurrently; verified URL+curl 200+kill cascade+generate 535 routes)

- [T-004](tasks/T-004-deploy-skill-wrong-project.md) Skill /deploy trỏ sai CF project → repoint poe2 — high/S (grep sạch + 10× /projects/poe2; verify-server snippet chạy ✅ HEAD=Deployed=45c698a)

- [T-003](tasks/T-003-leveling-style-consistency-overlay-space.md) Leveling tracker — style đồng nhất + overlay hug content — medium/S (overlay hug content -202px void; card 2-tier consistent; PiP fill inline; generate pass)

- [T-001](tasks/T-001-tag-listing-pages.md) Tag listing pages bị dead link — high/S (impl + local verify done; deploy/poe1/andy = follow-up)
- [T-002](tasks/T-002-leveling-tracker-pip-clienttxt.md) Leveling tracker — Client.txt auto-advance + PiP overlay — high/L (build+hydration+matcher verified; residual: in-game auto-advance + Firefox/Safari = follow-up)

## Blocked
