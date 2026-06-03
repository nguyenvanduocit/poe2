# Kanban Board
<!-- Updated: 2026-06-03 (T-018 DONE — gear-optimizer offline-confidence + canonical file + Workflow, live demo Rune Eye Ruby Ring 100ex fire 7→74. T-019 new: export-pob drops runemastered-unique body) -->

## Backlog

## Todo

- [T-021](tasks/T-021-generated-og-images.md) Per-page generated OG images (nuxt-og-image takumi, verify on CF) — medium/M
- [T-005](tasks/T-005-mobalytics-skill-cloudflare-stale-query.md) Mobalytics skill hỏng — Cloudflare 403 + stale query + profile-URL slug — medium/M
- [T-019](tasks/T-019-export-pob-drops-runemastered-unique.md) export-pob drops runemastered-unique body armour (+ mis-slots weapon) — high/M

## Doing

- [T-017](tasks/T-017-playwriter-replaces-poe-bridge-transport.md) Thay poe-bridge bằng playwriter làm transport GGG (cả poe1+poe2) — high/L
- [T-020](tasks/T-020-seo-full-support-gsc-bing.md) Full SEO support (@nuxtjs/seo) + GSC DNS-TXT + Bing registration — high/L

## Done

- [T-018](tasks/T-018-gear-optimizer-combination-engine.md) Gear-optimizer — offline-confidence-first, trade chỉ price-check — high/L (DONE 2026-06-03: 4 deliverable — (1) canonical mod-query file `data/gear-mods/0.5.0-gear-mods.json` 428 mod extract từ PoB data.itemMods (affix/group/tier/rollsOn/tradeHashes) → synthetic item constructible by-construction; (2) engine rewrite `search`(offline, zero-trade) + `price`(trade-only) — trade ra khỏi inner loop; constructibility reject ring 4-suffix; (3) SKILL v3.0.0 reconnect; (4) Workflow gear-upgrade.workflow.js hypotheses→search→verify→price. Live ThaoCamVienSaiGon: discovered+fixed OAuth-export-drops-Enfolding-Dawn body bug (baseline fire −22→7 body-corrected); workflow 468-combo diagnose fire-blocker; corrective search → Ring2 Gold→Ruby 1-slot caps fire+light giữ Int/Dex/Spirit; price thật "Rune Eye Ruby Ring" 100ex → fire 74 (engine honestly flags 1-short, loop-back). slot_item_ids order-agnostic fix. T-014 follow-up: patch export-pob để runemastered unique không bị drop)

- [T-011](tasks/T-011-trade-skill-bridge-only-transport.md) /trade skill chuyển sang poe-bridge làm transport DUY NHẤT — medium/M (SUPERSEDED bởi T-017 — migration đảo ngược: hard cut bridge→playwriter cả hai workspace. Goal "bridge làm transport duy nhất" obsolete trước khi đóng runtime criterion)

- [T-016](tasks/T-016-workspace-defrag.md) Workspace defrag — scripts + skills + knowledge — high/L (workflow wf_a6b565fe-942: 54 findings→29 confirmed→~23 disjoint lanes, 43 agents. Removed: gitnexus suite (6 non-POE), data/pobb-source 245M orphan clone, 3× __pycache__, poe-auth ggg lib (→poe-trade rename), nuxt upgrade-item-badges, pob/.omc, 12 orphan twister jpg frames, stash test fixtures. Consolidated: 11 SKILL.md (market/reference/trade/build clusters), spectre-shaman→raging-spectre-shaman, return-of-the-ancients→mechanics/leagues/, T-012 archived. Followup-fix: CLAUDE.md:92 pointer, 2 EN orphans (delete+rename slug-parity). Net 51 D/43 M/1 R/13 new. `bun run generate` 539 routes exit 0 (2× green). Uncommitted for review. DEFERRED: content/en lags VI by 17 missing EN twins — real served locale, backfill = re-translation = user decision, not defrag-trash)

- [T-015](tasks/T-015-pob-oauth-self-flow-poe2-charfetch.md) /pob OAuth self-flow — fetch full POE2 charData (client_id=pob PKCE, localhost catcher) — high/M (`pob-cli.sh --oauth <char>` → fetch-oauth.py: PKCE base64url + state, localhost:49082 catcher (GGG loopback cho client_id=pob), curl token-exchange (no secret) + Bearer fetch `api.pathofexile.com/character/poe2/<name>`, token cache tmp/.poe-oauth.json gitignored ~10h auto-refresh, `--token` reuse PoB Settings.xml lastToken. Verified ThaoCamVienSaiGon → full charData 16 equip+passives+9 skills → 9584-char code → calc Huntress/Spirit Walker/Lv66 keystone Trusted Kinship Life 1173/ES 158/Armour 555/Eva 825/res 56-55-59. Companion DPS unmodelled (combinedDPS 0, pob_coverage PARTIAL). Đây là đường DUY NHẤT lấy full POE2 charData — POESESSID = POE1-only. Owner-approved "mượn client_id=pob". SKILL.md v2.7.0)

- [T-014](tasks/T-014-pob-export-pob-charjson-to-code.md) /pob export-pob — GGG character JSON → PoB2 code (reuse PoB import/export, headless) — high/M (export-pob.sh + export-pob.lua: reuse `ImportItemsAndSkills`/`ImportPassiveTreeAndJewels` + `base64(Deflate(SaveDB("code")))`, zero engine edit, no in-tool network — JSON fetch out-of-band ban-safe. Verified: live equipment → 7400-char code → calc khớp 100%; combined test (16 equipment + 6 real tree hashes) → items:true+passives:true → round-trip class/level Huntress 65 preserved. 3 fix: arg-capture trước dofile (Launch.lua rewrite arg), normalize skills/jewels {} (ImportItemsAndSkills:955 pairs(nil) crash), double OnFrame settle calc. Serializer cho cả `--oauth` (full charData, T-015) lẫn fetch-live (equipment-only → gear-only code). SKILL.md v2.6.0)

- [T-013](tasks/T-013-pob-live-equipment-pathofexile2-internal-api.md) /pob live equipment fetch từ pathofexile2.com internal-api (playwriter) — high/M (fetch-live.sh + fetch-live.js: navigate tab đã login → intercept response của SPA, KHÔNG replay DPoP token; name→id từ localStorage `common.characters-pcache` roster (list network call chỉ fire lần đầu → unreliable), equipment re-fetch fresh mỗi visit của char page; CDP setCacheDisabled + poll thay fixed-sleep, CLI `--timeout 60000` vì exec timeout mặc định 10s; verified 2× repeatable items=16 full mods EXIT=0, list-mode 9 chars, not-found EXIT=1; scope EQUIPMENT-ONLY — JWT perms chỉ `my-account|character`+`characters`, passives/skills/quest vẫn fetch-poeninja.sh; live-*.json gitignored; SKILL.md v2.5.0; interim playwriter, sau reimpl trong extension)

- [T-012](archive/T-012-update-static-data-broken-ggg-import.md) update-static-data script — broken ggg/client import path — medium/XS (import `../ggg`→`../../poe-trade/ggg/client`; +2 bug phụ fix gộp: maps category POE1 `'Maps'`→POE2 `'Waystones'` + tier parse từ `text` regex, reporting bug boolean→`UpdateResult` 3-state + exit non-zero khi failed; verified 16 waystones tier 1–16 tier=0 count 0, 7109 stats/10 items, `--all` fresh EXIT=0; quan sát: poe-static-cache.json chưa có consumer → prune candidate; Waystones là divergence cố ý, đừng sync poe1)

- [T-010](tasks/T-010-price-forecast-path-reconcile.md) price-forecast ghi data vào .claude/skills/data/ + lệch path nuxt build — medium/S (collect.py + forecast.py: climb 2→4 `..` + bỏ segment `poe2/`; cả 3 consumer (collect/forecast/build.ts) đồng quy `data/price-history/master.json`; py_compile ok cả 2; resolve verify khớp build.ts REPO_ROOT; no stale ref, no blob migrate)

- [T-009](tasks/T-009-poe-ninja-collect-builds-path.md) poe-ninja collect-builds ghi data sai chỗ (.claude/skills/data/) — high/XS (parents[2]→parents[4] + bỏ game segment `poe2/`; py_compile ok; resolve verify PROJECT_DIR=root, out_dir=data/poe-ninja/runesofaldur khớp data relocate, CACHE_DIR=tmp/; snapshot lạc đã move về canonical)

- [T-008](tasks/T-008-pob-skill-poeninja-profile-pull.md) Pull POE2 char đầy đủ từ poe.ninja profile API vào /pob — high/S (fetch-poeninja.sh +profile branch: events SSE → dynamic modelId → model JSON; verified ThaoCamVienSaiGon PoB 8900 + model 175KB saved, /pob analyze.sh route info=ok exit0; pob+stash SKILL.md docs; bonus: fixed broken .gitignore inline-comment patterns → char-exports/pob-source(572M) now actually ignored)

- [T-006](tasks/T-006-leveling-route-0-5-accuracy.md) Leveling route data đúng POE2 0.5 (4 Acts + 3 Interludes) — high/L (14-agent workflow → spec; surgical rewrite: +3 Interludes/22 zones, +4 Farrow, Fate of the Vaal beacons, Freythorn ritual-reward removed, Waterways pads, Navali rune, Dreadnought spelling, Azak Bog Lv40; 92 zones/337 steps; generate 535 routes + matcher 23/23 + reviewer APPROVE; interludes/Act3-order = in-league test plan)

- [T-007](tasks/T-007-dev-cloudflared-tunnel.md) Dev cloudflared tunnel cho live preview domain — low/XS (vite.server.allowedHosts `.trycloudflare.com` + `dev:tunnel` script via concurrently; verified URL+curl 200+kill cascade+generate 535 routes)

- [T-004](tasks/T-004-deploy-skill-wrong-project.md) Skill /deploy trỏ sai CF project → repoint poe2 — high/S (grep sạch + 10× /projects/poe2; verify-server snippet chạy ✅ HEAD=Deployed=45c698a)

- [T-003](tasks/T-003-leveling-style-consistency-overlay-space.md) Leveling tracker — style đồng nhất + overlay hug content — medium/S (overlay hug content -202px void; card 2-tier consistent; PiP fill inline; generate pass)

- [T-001](tasks/T-001-tag-listing-pages.md) Tag listing pages bị dead link — high/S (impl + local verify done; deploy/poe1/andy = follow-up)
- [T-002](tasks/T-002-leveling-tracker-pip-clienttxt.md) Leveling tracker — Client.txt auto-advance + PiP overlay — high/L (build+hydration+matcher verified; residual: in-game auto-advance + Firefox/Safari = follow-up)

## Blocked
