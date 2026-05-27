---
title: "Patch POE2 0.5.0 — Impact Analysis"
game: poe2
version: 0.5.0
release_date: 2026-05-29
patch_type: major
created: 2026-05-27
updated: 2026-05-27
sources:
  - "data/release-notes/Version_0.5.0.md (GGG forum thread 3932540, fetched 2026-05-27)"
  - "content/ doc dependency scan (rg cross-cut, 2026-05-27)"
confidence: high
---

# Patch POE2 0.5.0 — Impact Analysis

## Patch context

0.5.0 "Return of the Ancients" (league Runes of Aldur, launch 2026-05-29) là bản
overhaul lớn nhất POE2 từ EA launch: 6 storyline endgame mới, 2 ascendancy mới
(Spirit Walker/Huntress, Martial Artist/Monk), Atlas reset + 300+ node mới, hệ
crafting Remnant/Runic Recipe + Verisium Runeforging + Runic Ward, và một free
passive refund cho mọi character cũ. Patch notes 1132 dòng + 3 addendum
(22/5, 25/5, 26/5). Scope ảnh hưởng content/ rất rộng vì nhiều build/mechanic doc
được viết pre-0.5 (`patch: 0.4.0`) hoặc viết speculative trước khi patch notes drop.

Lưu ý cấu trúc workspace: `content/` (tiếng Việt, canonical) có một bản mirror 1:1
ở `content/en/` (bản dịch tiếng Anh). Mọi doc affected bên dưới có một twin EN cùng
nội dung — fix doc VI thì phải fix luôn doc EN tương ứng. Counts dưới đây đếm theo
**doc logic** (VI = EN = 1), không double-count.

## Change summary (categorized, verbatim-cited)

Liệt kê các thay đổi có doc trong content/ phụ thuộc. Số dòng trỏ về
`data/release-notes/Version_0.5.0.md`.

### REMOVED / DISABLED (entity biến mất hoặc không obtain được)

- **Infernal Legion III** — *"Infernal Legion III: Can no longer be obtained"* (L634). Đây là tier 5 IL, win-condition của Dinomancer Lich walking-simulator phase.
- **The Recombinator + Omen of Recombination** — *"The Recombinator has been disabled. The Omen of Recombination has been removed"* (L265).
- **Expedition (Standard)** tạm disable, tích hợp vào Runes of Aldur (L264). Rog/Gwennen/Dannig/Tujen thành doodad (L272).
- **The Road Warrior Unique Body Armour** — *"can no longer be obtained"* (L1096).
- **Overextend support, Shock Conduction II, Crystalline Potential notable** — không obtain được (L640, L646, L467).
- **Catalysts no longer drop từ monster** — chỉ từ Genesis Tree (L177).

### NERF

- **Infernal Legion I/II** — self-burn + ignite base *20% → 10%* cả hai (L632-633). Halve damage engine.
- **Infernal Legion crit bug fix** — *"calculation for Infernal Legion was always a critical hit"* nay fix (L927) — nerf gián tiếp.
- **Talisman implicit (Rabid/Fury/Maji)** *+8-12 → +7-10 Max Rage* (L714); Voltfang/Thunder shock magnitude tăng nhẹ (L715).
- **Comet** dmg cut ~5% mọi level, Fire-Infused Comet cut nặng hơn (L569).
- **Snipe** base + Icy Blast dmg cut (L601). **Ice Strike** quality more→increased (L583).
- **Boneshatter** quality attack speed 30%→20% (L568). **Shield Wall / Resonating Shield / Magma Barrier** added dmg per 15 armour *6-8 → 5-7* (L599, L595, L586).
- **Pounce** cooldown tăng 4.9-4s → 6-5.1s (L592). **Grim Feast** Grim Resurrection nay có 1s cooldown (L581).
- **Energy Shield recharge ecosystem** — quét toàn bộ "faster start of ES recharge" + "increased ES recharge rate" trên small passive, notable, suffix gear, essence, rune, cắt 50-70% (L500-547, L725, L739-742, L768-775). ES item-scaling lv65 chỉ +8% (so Evasion +33%) (L708). Vile Robe base ES 184→171 (L709). Atziri's Splendour +Max ES 100-200→66-100 (L237).
- **Trusted Kinship keystone reworked** — bỏ "two companions of different types / 30% less Defences / Companions +1 Defence per 2", nay là reservation efficiency split (L494). Đổi hoàn toàn cơ chế dual-companion.
- **Vaal Pact keystone reworked** (L495). **Ancestral Bond** nay double totem limit thay vì remove (L493).
- **Pathfinder/Witchhunter/Chronomancer/Gemling** notable nerf/rework (L471-478, L454-469).

### BUFF

- **Tame Beast** — *"Summoned Beasts deal 40% more damage at Gem Level 9 scaling up to 84% at Gem Level 20. Now immediately summons newly Tamed Beasts"* + min gem level 9→7 (L604, L1092). Buff lớn cho companion.
- **Acolyte of Chayula / Into the Breach** — leech 15%→20% Life và Mana khi nhặt Flame (L446).
- **Tempest Bell** — max active 1→3, Ancestrally Boostable (L605). **Gathering Storm** reworked thành combo explode (L579).
- **Earthquake, Cull the Weak, Rolling Magma, Volcano** buff (L572, L570, L596, L609).
- **Salvo Support reworked** — 1 seal/giây, max 6, 1 proj/seal, bỏ restriction "không earn seal khi cast" (L621). Twister build phụ thuộc.
- **Armour/Evasion item scaling** tăng mạnh ở lv65+ (L706-707).

### NEW (entity mới — doc preview/speculation cần verify khi launch)

- 2 Ascendancy: **Spirit Walker** (Huntress), **Martial Artist** (Monk) (L360-361).
- League mechanic: Remnant/Runic Recipe, Verisium Runeforging, **Runic Ward** defence, 13 Alloy, 13 Ancient Rune, Kalguuran skill/support, Ocean Exploring (L48-82).
- Atlas overhaul: Origins of Divinity, Masters of the Atlas (Doryani/Hilda/Jado), 300+ node, Fortress (L98-128).
- New unique (chỉ có TÊN trong list, KHÔNG có stat block): **Facebreaker** (L396), **The Auspex** (L417), **Liminal Coil** (L403), **Sylvan's Effigy** (L416), **Twisted Empyrean** (L423), **Mageblood** (L405), **The Hollow Mask** (đã có stat — L672), Berek's set, Voices, v.v.
- "Destroy unique → rune" mechanic (60+ rune) (L65) — Olroth's Legacy.
- **The Hollow Mask** stat CONFIRMED (L672): *"grants Wildwood's Gifts Skill... Remnants you create affect Allies in your Presence... 80-100% increased Reservation Efficiency of Remnant Skills"*.

### REWORKED ENTITY có doc tham chiếu trực tiếp

- **Bogfelled Commoner now has a Spectre variant** (addendum L1116) — dinomancer bomber phase dùng Bogfeld Commoner spectre.
- **Unborn Lich staff skills reworked** (L1097-1101), **Husk of Dreams → renamed Reverie** (L673).

## Affected docs matrix

Tag: BROKEN / WEAKENED / STRENGTHENED / RENAMED / UNTOUCHED / CONFIRMED-NEW.
Mỗi doc liệt kê path VI; EN twin ở `content/en/<same-path>` (trừ `.json` characters).

| Doc (VI path) | Tag | Confidence |
|---|---|---|
| builds/witch/dinomancer-lich-elephant.md | BROKEN | HIGH |
| mechanics/skills/infernal-legion-ignite-loop.md | BROKEN | HIGH |
| mechanics/crafting/talisman-crafting.md | BROKEN | HIGH |
| builds/warrior/shield-wall-warbringer.md | WEAKENED | MEDIUM |
| builds/druid/raging-spectre-shaman.md | WEAKENED | MEDIUM |
| builds/druid/spectre-shaman.md | WEAKENED | MEDIUM |
| builds/druid/meteor-bear-shaman.md | WEAKENED | LOW |
| builds/sorceress/djinn-commander-dook.md | WEAKENED | LOW |
| builds/sorceress/djinn-minion-disciple-of-varashta.md | WEAKENED | LOW |
| builds/monk/hollow-mask-acolyte-minion-hypothesis.md | STRENGTHENED | MEDIUM |
| builds/huntress/0-5-twister-huntress-starter/index.md | STRENGTHENED | MEDIUM |
| builds/huntress/0-5-spirit-walker-catha-companion/index.md | STRENGTHENED | MEDIUM |
| mechanics/energy-shield-recovery-rework.md | CONFIRMED-NEW | HIGH |
| mechanics/leagues/return-of-the-ancients.md | CONFIRMED-NEW | MEDIUM |
| mechanics/0-5-new-unique-items.md | CONFIRMED-NEW | MEDIUM |
| mechanics/olroth-s-legacy.md | CONFIRMED-NEW | MEDIUM |
| mechanics/armour-defensive-scaling.md | CONFIRMED-NEW | MEDIUM |
| mechanics/skills/twister.md | UNTOUCHED | MEDIUM |
| mechanics/spirit-walker-companion-beast-hunt.md | STRENGTHENED | MEDIUM |
| mechanics/items/the-auspex.md | UNTOUCHED (pre-launch) | LOW |
| mechanics/items/facebreaker.md | UNTOUCHED (pre-launch) | LOW |
| mechanics/items/liminal-coil.md | UNTOUCHED (pre-launch) | LOW |
| mechanics/items/sylvans-effigy.md | UNTOUCHED (pre-launch) | LOW |
| mechanics/items/twisted-empyrean.md | UNTOUCHED (pre-launch) | LOW |
| mechanics/leagues/fate-of-the-vaal-meta.md | WEAKENED (superseded) | HIGH |
| guides/poe2-0-5-prep.md | STRENGTHENED | MEDIUM |
| guides/challenge-guide.md | UNTOUCHED | HIGH |
| mechanics/leagues/0-5-0-patch-notes.md | UNTOUCHED (is the patch) | HIGH |
| characters/the-leader-a.* (POE1 leftover) | UNTOUCHED | HIGH |

## Action list per affected doc

### BROKEN — ưu tiên cao nhất

**builds/witch/dinomancer-lich-elephant.md** (+ EN twin) — BROKEN, HIGH
- Engine của build là Infernal Legion III (`L43`, `L53`, `L65` của doc) → patch L634 *"IL III can no longer be obtained"*. Phase 3 "walking simulator pure IL burn" không còn tồn tại.
- IL I/II self-burn + ignite base 20%→10% (patch L632-633) → toàn bộ damage math (ignite base = 25%/20% × companion HP, doc L41/L65/L95/L211) bị halve. IL III bug fix crit removal (patch L927) thêm nerf.
- Counter-current: Tame Beast buff +40-84% more dmg (patch L604) + Bogfelled Commoner spectre variant mới (patch L1116) là buff cho companion/bomber — nhưng không cứu được vì IL channel là primary.
- Trusted Kinship rework (patch L494) phá luôn dual-companion option doc đề cập (doc L57).
- **Action: re-verify-via-build-researcher** — re-research toàn bộ build hypothesis post-0.5.0. IL có còn viable không khi base halved + IL III gone? Có thể pivot sang Tame Beast pure damage (không qua IL ignite) hay Minion Instability bomber. KHÔNG patch số lẻ tẻ — cần re-PoB từ đầu.

**mechanics/skills/infernal-legion-ignite-loop.md** (+ EN twin) — BROKEN, HIGH
- Toàn bộ doc xây trên IL III 30%/25% (doc L29, L35) và IL I/II 20%/20%. Patch: IL III gone, I/II →10%/10%.
- Doc claim "MI explosion là real Hit có thể crit" (doc L39) — kiểm lại với patch L927 (IL crit bug fixed, khác MI nhưng cần recheck).
- **Action: re-verify-via-mechanic-researcher** — rewrite mechanic doc với số 0.5.0 thật (10% tier I/II, IL III removed). Synthesized-ignite mechanic vẫn đúng concept nhưng mọi số ví dụ sai. Giữ phần "as though dealing Base Fire Damage" analysis, sửa magnitude.

**mechanics/crafting/talisman-crafting.md** (+ EN twin) — BROKEN, HIGH
- Method 2 toàn bộ là Recombinator (doc L35, L87-99, L218-279) → patch L265 *"The Recombinator has been disabled"*. Cả farming path chết.
- Talisman implicit +8-12 → +7-10 Max Rage (patch L714) → số base damage advice nhẹ lệch.
- "Luôn dùng Magi Talisman" (doc L42) vẫn đúng (base damage), không bị patch.
- **Action: re-verify-via-mechanic-researcher** (đây là crafting mechanic doc, không phải farming taxonomy) — retire Method 2 (Recombinator) hoàn toàn, hoặc rewrite quanh Verisium Runeforging / Genesis Tree / Alloy crafting mới. Method 1 Budget Hybrid giữ được nhưng cần recheck implicit value.

### WEAKENED — ưu tiên trung bình

**builds/warrior/shield-wall-warbringer.md** (+ EN twin) — WEAKENED, MEDIUM
- `patch: 0.4.0` stale. Shield Wall added dmg 6-8→5-7 per 15 armour (patch L599), Boneshatter quality nerf (patch L568). Nhưng armour item-scaling buff lv65+ (patch L706) bù lại phần defense.
- **Action: update-stats + re-verify-via-build-researcher** nếu muốn promote lên 0.5 viable. Nếu giữ làm archive 0.4 → leave-alone + tag rõ "0.4 historical".

**builds/druid/raging-spectre-shaman.md, spectre-shaman.md** (+ EN twins) — WEAKENED, MEDIUM
- `patch: 0.4.0`. Dùng Bind Spectre + Last Gasp + Feeding Frenzy + Infernal Legion (raging-spectre). IL nerf ảnh hưởng nếu build dùng IL; Last Gasp/Bind Spectre core mechanic chưa đổi. Gargantuan Wasp/Death Knight spectre chưa bị patch trực tiếp.
- **Action: monitor-empirical / re-verify-via-build-researcher** khi muốn cập nhật 0.5. Low urgency — không phải build đang active.

**builds/druid/meteor-bear-shaman.md, builds/sorceress/djinn-*.md** (+ EN twins) — WEAKENED, LOW
- `patch: 0.4.0` archive. Djinn dùng Disciple of Varashta + Last Gasp; meteor-bear dùng Headhunter + Comet/Volcano. Comet nerf nhẹ (patch L569). Không có entity bị remove.
- **Action: leave-alone** (archive 0.4) hoặc re-verify khi có nhu cầu chơi lại. Tag historical.

**mechanics/leagues/fate-of-the-vaal-meta.md** (+ EN twin) — WEAKENED, HIGH
- Là "POE2 0.4 Meta Analysis" retrospective (doc L24). 0.5 overhaul meta → doc thành historical record.
- **Action: leave-alone** — doc intentionally là 0.4 archive, frontmatter `patch: 0.4.0` đã đúng. Có thể thêm 1 dòng cross-link tới return-of-the-ancients.md. Không retire.

### STRENGTHENED — opportunity

**builds/monk/hollow-mask-acolyte-minion-hypothesis.md** (+ EN twin) — STRENGTHENED, MEDIUM
- The Hollow Mask stat nay CONFIRMED khớp doc (patch L672 = doc L45/L55: "Remnants affect Allies in Presence", "80-100% reservation efficiency" — doc ghi 94%, nằm trong range). Acolyte Into the Breach leech buff 15%→20% (patch L446) tăng sustain.
- **Action: update-stats** — confirm The Hollow Mask block khớp patch verbatim L672, thêm Wildwood's Gifts skill detail mới (patch L672), update Into the Breach leech 20%. Build mạnh hơn post-patch. Promote `status: published` (đã published) — chỉ refresh số.

**builds/huntress/0-5-twister-huntress-starter/index.md** (+ EN twin) — STRENGTHENED, MEDIUM
- Đã author WITH patch: doc L44 reference Salvo rework đúng, doc L38 reference Pounce nerf đúng. Twister bản thân không bị nerf. Spirit Walker mới = đúng meta S-tier league starter.
- **Action: update-stats** nhẹ — confirm mọi gem number khớp patch (Salvo, Pounce, Projectile skills implicit Quiver +2→+1 patch L721). Low urgency, doc đã `status: review`. Đây là build league-start ưu tiên — verify kỹ trước launch.

**builds/huntress/0-5-spirit-walker-catha-companion/index.md** (+ EN twin) — STRENGTHENED, MEDIUM
- Spirit Walker + Tame Beast (buffed +40-84%, patch L604/L1092). Companion build hưởng lợi trực tiếp.
- **Action: update-stats** — incorporate Tame Beast buff number vào DPS math. Verify Catha's Brilliance lineage support (patch L364, new).

**mechanics/spirit-walker-companion-beast-hunt.md** (+ EN twin) — STRENGTHENED, MEDIUM
- Mechanic doc về Spirit Walker + Tame Beast. Tame Beast buff + min level 9→7 (patch L604/L1092).
- **Action: re-verify-via-mechanic-researcher** light — update Tame Beast number (40-84% more dmg, immediate summon, min level 7).

**guides/poe2-0-5-prep.md** (+ EN twin) — STRENGTHENED, MEDIUM
- Guide league-start prep, đề cập Twister/Spirit Walker/Runic Ward/companion/Tame Beast/Vaal Pact/Trusted Kinship. Nhiều entity bị rework (Trusted Kinship patch L494, Vaal Pact L495).
- **Action: update-stats** — recheck mọi keystone/skill reference khớp 0.5 final (đặc biệt Trusted Kinship rework đã đổi cơ chế dual-companion). Priority cao vì là guide prep cho launch.

### CONFIRMED-NEW — verify-stats (doc về content mới, không phải victim)

**mechanics/energy-shield-recovery-rework.md** (+ EN twin) — CONFIRMED-NEW, HIGH
- Doc CHÍNH LÀ phân tích đợt nerf ES recharge của 0.5. Mọi số doc nêu khớp patch verbatim (Convalescence 40%, Mystic Stance 30→12%, Rapid Recharge 25→12%, of Buffering 36-40→12-15%, Vile Robe 184→171, Rebirth Rune 12/15/18→4/6/8). Đối chiếu patch L500-547, L709, L739-742, L773-775 → khớp.
- **Action: leave-alone** — doc accurate. Chỉ cần đổi Verdict từ "sẽ verify sau patch 0.5 PoB" thành verified khi PoB2 0.5 release.

**mechanics/return-of-the-ancients.md, 0-5-new-unique-items.md, olroth-s-legacy.md, armour-defensive-scaling.md** (+ EN twins) — CONFIRMED-NEW, MEDIUM
- Doc preview/overview league mechanic 0.5. Patch confirm phần lớn claim (Remnant, Runeforging, Runic Ward, destroy-unique-rune L65, armour scaling L706).
- **Action: verify-stats** — đối chiếu từng số với patch verbatim, đổi `status: draft` → published khi confirm. olroth's-legacy "random vs predetermined extraction" vẫn LOW (patch không nói rõ) → giữ test plan.

### UNTOUCHED / pre-launch speculation

**mechanics/items/{facebreaker,the-auspex,liminal-coil,sylvans-effigy,twisted-empyrean}.md** (+ EN twins) — UNTOUCHED (pre-launch), LOW
- Đều là doc speculation viết trước patch ("Số chính xác sẽ public sau patch notes 2026-05-21"). Patch L396/L403/L416/L417/L423 confirm các unique này TỒN TẠI (đúng tên) nhưng KHÔNG cấp stat block (chỉ liệt kê tên trong "New Unique item").
- **Action: monitor-empirical** — chờ stat block từ datamine/wiki post-launch (poe2db.tw / poe2wiki). KHÔNG phải victim của nerf — đây là content mới chưa đủ data. Riêng The Hollow Mask đã có stat (patch L672) → có thể verify ngay.

**mechanics/skills/twister.md** (+ EN twin) — UNTOUCHED, MEDIUM
- Twister skill không nằm trong Skill Changes 0.5. Salvo support (hay dùng với Twister) thì có rework (patch L621) nhưng đó là support, không phải Twister.
- **Action: leave-alone** — verify Salvo interaction note nếu có. Twister core unchanged.

**guides/challenge-guide.md** — UNTOUCHED, HIGH
- Challenge guide cho 8 challenge Runes of Aldur — đây là content 0.5 native (first challenge system), mention Twister/Spirit Walker chỉ làm build reference.
- **Action: leave-alone**.

**mechanics/leagues/0-5-0-patch-notes.md** (+ EN twin) — UNTOUCHED, HIGH
- Doc này LÀ bản patch notes 0.5.0 trong content/. Self-referential, accurate by definition.
- **Action: leave-alone**.

## High-priority retire candidates (BROKEN + HIGH)

1. `content/builds/witch/dinomancer-lich-elephant.md` — IL III removed + IL base halved. Build có thể không còn viable. Cần re-research, không phải patch số.
2. `content/mechanics/skills/infernal-legion-ignite-loop.md` — mọi số ví dụ sai sau IL nerf. Rewrite magnitude.
3. `content/mechanics/crafting/talisman-crafting.md` — Recombinator method (50% của doc) chết hoàn toàn.

## New opportunity hints (research mới khả thi từ entity 0.5)

- **Tame Beast pure-damage companion build** (không qua IL) — buff +40-84% more dmg + immediate summon (patch L604) làm companion damage tự nó viable. → build-researcher.
- **Spirit Walker spectral companion** + Catha's Brilliance lineage (patch L364) — ascendancy mới chưa có build doc đầy đủ. → build-researcher.
- **Martial Artist Monk** (illusory bells, hands-as-weapons) + Facebreaker (patch L360, L396) — chưa có build doc. → build-researcher.
- **Genesis Tree crafting** (Breach) — caster/minion mod craft mới (patch L176), thay Recombinator path. → mechanic-researcher / farming angle.
- **Verisium Runeforging + Runic Ward defense layer** — defence mới chưa có deep-dive mechanic doc riêng (chỉ nằm trong return-of-the-ancients overview). → mechanic-researcher.
- **Olroth's Legacy unique-destroy rune** economy play — value inversion của unique 1-mod (Svalinn). → mechanic-researcher / farming-researcher.

## Source confidence summary

- Patch notes verbatim (source #1, GGG official): mọi REMOVED/NERF/BUFF claim trên trích dòng cụ thể `data/release-notes/Version_0.5.0.md` → HIGH cho fact "entity X changed".
- Doc dependency (file:line trong content/): scan rg đầy đủ + đọc line range dependency → HIGH cho "doc Y phụ thuộc entity X".
- Impact judgment (build còn viable không): HIGH cho BROKEN khi entity là win-condition explicit (dinomancer IL III); MEDIUM khi cần re-tune (shield-wall); LOW cho speculation pre-launch (item docs chưa có stat).
- KHÔNG single-source: impact judgment kết hợp patch verbatim + doc dependency citation. Phần "build có còn viable" cần re-PoB (build-researcher) để lên HIGH — hiện tại là projection MEDIUM.
