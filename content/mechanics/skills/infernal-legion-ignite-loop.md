---
template: templates/mechanic-template.md
document_type: mechanic
title: Infernal Legion Ignite Loop
status: draft
author: duocnv
created: '2026-05-19'
updated: '2026-05-19'
league: '0.5'
patch: 0.5.0
sub_class: skills
tags:
  - infernal-legion
  - ignite
  - synthesized-ignite
  - minion-mechanic
  - support-gem
  - lich
  - poe2
  - mechanic
---

# Infernal Legion Ignite Loop

Infernal Legion là support gem POE2 cho phép minion tự đốt bản thân để ignite kẻ địch trong bán kính. Cơ chế này là damage engine cốt lõi của [build Infernal Legion Lich](/builds/witch/dinomancer-lich-elephant) trên Witch ở patch 0.5.0 — toàn bộ DPS chain (Bomber phase + Walking Simulator phase) đều xoay quanh việc khai thác synthesized ignite từ IL. Hiểu được loop này quan trọng vì wording gem text rất đặc biệt: ignite không đến từ "Hit" theo nghĩa POE2 chuẩn, mà là synthesized non-hit ignite — và đặc điểm đó quyết định support gem nào amplify được damage, support gem nào không.

## How It Works

Infernal Legion có 3 tier (I/II/III) với cùng cấu trúc effect: minion mất một phần HP mỗi giây như fire damage, và ignite enemy quanh minion theo công thức cố định dựa trên minion max life. Tier 5 (Infernal Legion III) self-burn 30% minion max life mỗi giây và ignite "as though dealing Base Fire Damage equal to 25% of Minion's Maximum Life" trong bán kính 2 metres. Tier 4 (IL II) self-burn 20% và ignite base 20% trong cùng 2 metres. Tier 2 (IL I) cũng 20%/20% nhưng bán kính chỉ 1.5 metres. Lên tier không phải multiplier nhẹ — IL III vs IL I là +25% ignite base và +50% self-burn rate.

Wording quyết định mọi thứ là cụm "**as though dealing Base Fire Damage**". POE2 dùng cùng pattern này cho 5+ skill khác trong wiki: :wiki-link{url="https://www.poe2wiki.net/wiki/Flame_Wall"} ("Igniting enemies as though dealing Fire Damage equal to 20% of your Maximum Mana"), Birth of Fury ("equal to 500% of your maximum Life"), :wiki-link{url="https://www.poe2wiki.net/wiki/Saitha%27s_Spear"} ("equal to 10% of your maximum Life"). Đây là synthesized ignite source — không có damage event thực, không có hit, magnitude tính trực tiếp từ X% của Y. Trong khi standard POE2 ignite phải đi qua pipeline Hit → contribute fire damage to Flammability magnitude → roll chance to ignite → ignite magnitude = 20% of Hit fire damage per second, IL bỏ qua toàn bộ pipeline đó. Minion stand trong radius → enemy ignited ngay, với magnitude = 25% × minion max life × duration 4 giây.

Cơ chế self-burn tự nó là conditional trigger cho 2 support gem khác. Minion HP giảm monotonically với rate 30%/giây (IL III), nghĩa là sau ~2.17 giây minion rơi xuống Low Life threshold 35% (per :wiki-link{url="https://www.poe2wiki.net/wiki/Low_Life"} wiki — "considered low life if at 35% of maximum life or lower"). Đây là điều kiện trigger cho :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Instability"} — minion explode dealing 15% max life as fire damage AOE hit. Sau ~3.33 giây spawn-to-life-0, nếu socket :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"}, minion không die ngay mà "dark cloudy effect" trong đúng 4 giây cố định (gem text explicit: duration không scale với skill effect duration support). Trong window đó IL self-burn AOE vẫn radiate (wording wiki không deny — minion still on field as source point). Tổng spawn-to-revive cycle ~7.33 giây, trong đó ~4 giây cuối là "post-life-0 burn window" — đây là engine của Bomber phase trong build.

Ví dụ số cụ thể từ Pr3vie endgame PoB (https://pobb.in/MzsIsZXdSp72) — Elephant Tortoise được wiki ghi rõ "Extremely high life pool. Great with Infernal Legion III". Giả định companion max life sau scaling H = 80,000 HP (rough endgame với +5 minion skill levels từ amulet stat-stick + minion life passives ~150% combined): IL III ignite base = 25% × 80,000 = 20,000 fire damage. Plug qua POE2 standard ignite formula 20%/sec for 4 sec → tick = 4,000 fire damage/sec/target trước modifier. Sau :wiki-link{url="https://www.poe2wiki.net/wiki/Searing_Flame"} II (+100% more Magnitude of Ignite) thì tick lên ~8,000/sec. Sau curse :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Weakness"} (-40 to -59% res) + shock 20% increased damage taken → effective ~12,000-16,800 fire damage/sec/target. Multi-target: 5 enemies trong radius → ~84,000 effective DPS từ ignite alone. Đây là DPS floor — build doc claim "23M DPS" là combined total tất cả channel (IL + MI explosion + companion auto-attack + skeleton bomber + curse explosion), không phải IL ignite alone.

## Key Interactions

Synergy mạnh nhất là **IL × :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Instability"}**. Self-burn rate 30%/sec đẩy minion qua Low Life threshold trong ~2.17 giây, MI trigger explosion = 15% max life as fire hit. MI explosion khác IL ignite ở chỗ đây là **real Hit** (per gem text mechanics section: "the explosion is an area Hit from the minion, dealing secondary damage") — có thể proc ignite riêng qua standard pipeline nếu skill có Flammability chance. Hai channel độc lập: IL synthesized ignite (floor damage) + MI explosion ignite (separate Hit channel). Trong build Bomber phase, đây là why DPS phase 2 cao hơn pure IL phase — explosion adds burst on top of continuous burn floor.

Synergy thứ hai là **IL × :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"}**. Last Gasp gate "Supports skills that create **Persistent Minions**" — :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"}, Skeletal Warrior family đều có Persistent tag → support hợp lệ. Sau khi life=0 từ IL self-burn, Last Gasp kéo dài 4 giây fixed. Trong window này IL AOE vẫn radiate (companion body còn trên field), kéo dài burn coverage thêm ~55% so với không có Last Gasp. Duration fixed không scale qua Prolonged Duration support — gem text explicit.

Synergy thứ ba là **IL × Searing Flame II**. SF II gem text có 2 effect lines tách biệt: "Supported Skills deal 30% less Damage with Hits" + "100% more Magnitude of Ignite inflicted with Supported Skills". Hit penalty chỉ áp lên hit damage — IL ignite không phải hit nên không bị 30% less. Ignite buff wording broad "inflicted with Supported Skills" — bao gồm cả IL synthesized ignite theo most natural reading vì IL ignite được inflict trên supported skill (Tame Beast / Bind Spectre). Gate ngoài "Supports any skill that **Hits** enemies" là gate trên skill, không trên ignite — companion có auto-attack hits → satisfy gate. Net effect: SF II doubles IL ignite base 25% → 50% of minion max life as effective fire damage. Wording broad nên working read là apply được — toggle SF II trong PoB để đo magnitude delta xác nhận khi vào league.

Synergy thứ tư là **IL × :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area"} II**. MA II thêm 45% increased Area of Effect. POE2 standard formula: radius scale theo sqrt(area), nên radius bonus = sqrt(1.45) - 1 ≈ 20.4%. IL III base 2 m → effective ~2.41 m. Đáng kể nhưng không "double radius" như nhiều người tưởng. Cost multiplier 130% là trade-off đáng cân nhắc khi build spirit budget tight.

Anti-synergy quan trọng nhất là **IL × :wiki-link{url="https://www.poe2wiki.net/wiki/Xoph%27s_Pyre"}**. Đây là claim gây tranh cãi nhất trong build doc — gem text Xoph's Pyre có 2 effect lines, cả hai đều Hit-gated explicit. Effect 1: "Chaos Damage **from Hits** with Supported Skills also Contributes to Flammability and Ignite Magnitudes" — double-gated trên Hit (cần chaos damage AND cần from Hit). IL ignite không có chaos damage, không từ Hit → effect 1 không fire. Effect 2: "Supported Skills **Gain** 40% of Fire Damage as Extra Chaos Damage" — modifier class "Gain X% of Damage as extra Y". Precedent từ Minion Instability wiki mechanics section: "Minion Instability does not scale with the Gain X% of Damage as Y modifier." Same modifier class → cùng pattern likely fail cho IL synthesized ignite. Net effect Xoph's Pyre × IL channel: **~0% direct uplift**. Channel duy nhất Xoph's Pyre amplify là companion auto-attack hits — channel này lại bị IL "ignite does not stack — only highest applies" rule override bởi IL synthesized base. Build doc claim "40-60% damage uplift từ Xoph's Pyre" likely overstated 5-10×. Realistic uplift: 0-15%.

Anti-synergy thứ hai là **IL × IL multi-companion**. Gem text IL skill-functions section explicit: "the ignite debuff does not stack; enemies will only take damage from the **highest** ignite if in range of multiple Infernal Legion minions." Trusted Kinship keystone (2 companions) hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Yriel%27s_Fostering"} body armour không double IL ignite output — chỉ tăng coverage area, không tăng damage trên cùng enemy.

## Parallel Hit Channel Chain (Companion Auto-Attack)

Bên cạnh IL synthesized ignite channel (primary, non-hit, không scale với Hit-gated modifier), build chạy parallel **hit channel** từ companion auto-attack hits. Channel này thường được dismiss là "không matter vì IL ignite override", nhưng với gear stack đúng nó trở thành damage layer thứ 2 độc lập với IL channel.

Chain unlock theo điều kiện gear-gate:

**Step 1 — Companion gain chaos extra qua Evergrasping Ring**: :wiki-link{url="https://www.poe2wiki.net/wiki/Evergrasping_Ring"} (Pearl Ring unique) verbatim *"Allies in your Presence Gain (15-25)% of Damage as Extra Chaos Damage / Enemies in your Presence Gain (6-12)% of Damage as Extra Chaos Damage"*. Khi companion ở trong presence radius của player, mỗi auto-attack hit của companion gain 15-25% chaos damage extra (gear-gated, chỉ proc nếu ring equipped).

**Step 2 — Despair shred chaos res**: :wiki-link{url="https://www.poe2wiki.net/wiki/Despair"} curse verbatim *"Curse inflicts -(35-49)% to Chaos Resistance"*. Với Heightened Curse support +25% magnitude: effective -49% × 1.25 = **-61% chaos res** trên enemy. Companion auto-attack chaos extra damage portion lúc này được amplified bởi 1.61× target multiplier.

**Step 3 — Xoph's Pyre Effect 1 converts chaos → ignite contribution**: Xoph's Pyre verbatim effect 1 *"Chaos Damage from Hits with Supported Skills also Contributes to Flammability and Ignite Magnitudes"*. Gate: chaos damage phải từ Hits (qualify, companion auto-attack là Hit) **và** phải from "Supported Skills". Nếu Xoph's Pyre socketed lên Tame Beast (Path A) hoặc Bind Spectre (Path B), companion auto-attack qualify "Supported Skills" gate. Chaos contribution stack vào ignite magnitude tính trên hit damage.

**Step 4 — IL ignite stacking rule competing**: Gem text IL skill-functions explicit *"the ignite debuff does not stack; enemies will only take damage from the highest ignite if in range of multiple Infernal Legion minions"*. Hit channel ignite (từ companion auto-attack via Xoph's Pyre conversion) và IL synthesized ignite cùng nguồn minion → tính như "multiple Infernal Legion minions" theo loose interpretation? Hoặc 2 channel độc lập vì IL synthesized ignite không phải standard ignite tick từ Hit pipeline? Đây là **gate ambiguous nhất** trong build math, cần PoB falsifier test confirm.

Treatment với 2 interpretation:
- **Interpretation A (loose)**: 2 channel cùng compete, IL synthesized base (25% × 80k = 20,000 fire) thường cao hơn hit channel ignite → IL dominates, hit channel value = 0
- **Interpretation B (strict)**: 2 channel độc lập (IL synthesized không phải standard ignite, không qualify "Infernal Legion minions ignite"), tick song song → combined uplift ~30-50% với gear stack

Per video Lich PoB (Ranny El) thực tế socket Despair + Heightened Curse + Decaying Hex + Evergrasping Ring + Grip of Kulemak — implementation choice consistent với Interpretation B — đây là working interpretation. Khi vào league, toggle Evergrasping Ring + Despair on/off trong PoB và đọc combined DPS delta để xác nhận 2 channel tick song song.

**Conditional value summary:**
- Pre-Evergrasping Ring: 3rd curse Despair value chỉ = Decaying Hex chaos DoT (~250-300/sec/target từ 100% INT × 250-300 INT stack), không qua hit channel chain
- Pre-Xoph's Pyre: hit channel chaos extra exists qua Evergrasping nhưng không convert sang ignite contribution → enemy chỉ ăn flat chaos hit damage trên auto-attack tick frequency (small channel)
- Full stack (Evergrasping + Xoph's Pyre + Despair): hit channel ignite contribution + IL synthesized ignite parallel, combined uplift ~30-50%

Đây là gap mà mechanic doc trước đây không cover — chỉ analyze IL synthesized ignite single channel. Hit channel chain là parallel system, không thay thế IL channel mà add-on.

## Optimization

Lever chính là **companion max life H**. Toàn bộ formula DPS scale 1:1 với H, nên investment ưu tiên là minion life passive nodes + +X to minion skill levels từ amulet/wand/shield. Pr3vie endgame stack companion HP rough 80k-200k qua combo +5 minion skill levels (Apocalypse Curio amulet stat-stick — verify identity tại trade time vì wiki không document item này) + tier-zero jewel mods + Lich ascendancy spirit gem level bonus. Tame Elephant Tortoise specifically vì wiki note "extremely high life pool" — spirit reservation 56.1% spawn ở :wiki-link{url="https://www.poe2wiki.net/wiki/Whakapanu_Island"} hoặc Kriar Village (không phải Azmerian Ranges như nhiều guide cũ ghi sai).

Lever thứ hai là **Searing Flame magnitude stacking**. SF II là +100% more Magnitude of Ignite — base requirement. Layer thêm "more/increased Magnitude of Ignite" từ passive tree, jewel mods, ascendancy. Mỗi 10% more magnitude = +10% DPS linear. Tránh confusion: "more Damage with Ignite" và "increased Magnitude of Ignite" là 2 modifier class khác nhau trong POE2 — wiki distinction quan trọng khi đọc gear roll.

Lever thứ ba là **target's damage-taken multiplier**. Áp Elemental Weakness curse (-40 to -59% all elemental res per gem text 0.5 baseline) + Frost Bomb exposure (Potent Exposure -20% to -50% ramping) + Skeletal Storm Mage shock 20% increased damage taken. Combined có thể đẩy enemy damage-taken multiplier lên 1.5-1.8×. Stack với Lich's Rupture the Soul cho curse explosion 33% chance → quarter max life as chaos damage on cursed kill — synergy phụ.

Spirit budget là constraint cứng. Elephant Tortoise 56.1% + Bind Spectre Persistent + Blasphemy/Temporal Chains aura + 1-2 utility minion (Skeletal Cleric heal, Skeletal Storm Mage shock) easily đẩy total reservation lên 80-90%. Tối ưu spirit reservation efficiency qua jewel mod hoặc body armour mod. Đừng cố stack 4-5 minion — quality > quantity.

Phase progression matter. Phase 1-2 (level 1-22) chạy ED/Contagion standard — không touch IL vì gem tier không unlock. Phase 2 (level 22+) socket IL I + Minion Instability + Last Gasp lên Bind Spectre bomber. Phase 3 (endgame mapping, gem tier 5 unlock) swap sang Tame Beast + Elephant Tortoise + IL III. Đừng cố skip phase — gem tier requirement gate execution.

## Interactions with Other Content

POE2 0.5 endgame content tương tác với IL build chủ yếu qua boss mechanics:

- **Xesht, We That Are One** là drop source duy nhất của Xoph's Pyre lineage gem. Chicken-and-egg: cần Xoph's Pyre cho "endgame DPS jump" theo build doc, nhưng must clear Xesht first. Per gate-split analysis ở section trên, Xoph's Pyre × IL không cho jump lớn như doc claim — vẫn worth grab cho secondary skill (Frost Bomb, Storm Mage shock) nhưng không phải tier-zero priority.
- **King in the Mists** drops :wiki-link{url="https://www.poe2wiki.net/wiki/From_Nothing"} unique jewel (radius 2000, allocate passives near keystone). Build dùng cho Glancing Blows region pass-through — note rằng POE2 0.5 Glancing Blows wording đã bị change ("Chance to Evade is Unlucky. Chance to Deflect is Lucky", không phải POE1 block mechanic). Build skip GB không vì block penalty mà vì không stack evasion.
- **Trials of Sekhemas / Trials of Chaos** grant ascendancy points cho Lich notable tree. Lich ascendancy không có "trial 1 cluster / trial 2 cluster" như POE1 — flat notable list với prerequisite chain.
- **Simulacrum** drops :wiki-link{url="https://www.poe2wiki.net/wiki/Megalomaniac"} unique jewel (random 2-3 notables). Per 0.2.0 patch, không thể roll Witch/Sorceress starting-area notables → companion-specific notable pool limited, không reliable cho build planning.

Map mod compatibility: IL build chịu được hầu hết map mod nhờ companion tank front-line. Avoid **No regen** (companion HP loss permanent), **Less recovery** (Shavronne's Satchel ES sustain weakened), **Reduced effect of curses** (Blasphemy Temporal Chains slow uptime giảm). Embrace **Increased monster damage** (companion deal more damage when taking damage = irrelevant) và **Reduced player resistances** (player CI immunity to chaos mitigate phần lớn).

## What Doesn't Work

**Fire Penetration Support × IL ignite KHÔNG hoạt động**. Fire Pen áp "on Hit". IL ignite synthesized không có Hit instance để áp penetration. Penetrate enemy fire res phải qua curse (Elemental Weakness) hoặc Fire Exposure debuff trên enemy — modifier ở enemy side, không source side.

**"Gain X% of Damage as Extra Y" modifiers KHÔNG amplify IL ignite**. Bao gồm Xoph's Pyre 40% fire→chaos extra, weapon mods "Gain X% physical as extra fire", flask "Gain X% as extra fire on use". Precedent rõ ràng từ Minion Instability gem wiki: "does not scale with the Gain X% of Damage as Y modifier." Cùng modifier class cùng pattern → likely fail cho mọi non-hit synthesized ignite.

**Crit support gems × IL ignite KHÔNG hoạt động**. IL ignite không phải Hit nên không có crit roll. Investing crit chance / crit multiplier passives cho IL channel = wasted. Chỉ áp lên companion auto-attack channel (channel nhỏ thường bị IL ignite override).

**Multiple IL companions KHÔNG stack ignite**. Trusted Kinship 2-companion hoặc Yriel's Fostering không nhân đôi IL ignite output. Gem text explicit "only the highest ignite if in range of multiple Infernal Legion minions". Second companion chỉ add coverage area + auto-attack contribution (small).

**Duration support × Last Gasp window KHÔNG extend được**. Gem text Last Gasp explicit: "this duration is fixed and does not appear to be modifiable with skill effect duration." 4 giây là 4 giây, không stack với Prolonged Duration support, Increased Skill Duration jewels, ascendancy duration nodes.

**Last Gasp × non-Persistent minion KHÔNG hoạt động**. Gate gem text: "Supports skills that create **Persistent Minions**". POE2 0.5 không có gem SRS analog non-persistent — closest là Skeletal Arsonist (Persistent + Detonator tag, qualified). Nếu thử ghép Last Gasp với non-persistent gem, support sẽ greyed out trong UI.

**Spectre/companion 1-shot KHÔNG trigger Minion Instability**. MI gem text mechanics: "must be **reduced** to Low Life to explode. Anything that causes a minion to die without ever having low life (e.g. dying in 1 hit, replacement, expiring duration) will not cause an explosion." Boss slam 1-shot companion → no explosion. Đây là why Last Gasp critical — bridge gap giữa "took heavy hit but not instant death" và "drop xuống Low Life threshold".

## Common Mistakes

**Sai: Socket Xoph's Pyre lên Tame Beast vì doc claim 40-60% uplift cho IL — Đúng: Socket Xoph's Pyre lên Frost Bomb hoặc Storm Mage skill — Lý do: Xoph's Pyre amplify hit-based ignite, IL synthesized ignite không qualify; Frost Bomb / Storm Mage có real hits, hưởng đầy đủ 40% fire→chaos + chaos-contributes-to-ignite. Verify bằng PoB toggle test trên Pr3vie endgame PoB.**

**Sai: Stack 3-4 companion qua Trusted Kinship + Yriel's Fostering để nhân IL ignite — Đúng: 1 companion với HP cao nhất (Elephant Tortoise) + cluster utility skeleton — Lý do: IL ignite không stack giữa multiple IL minions, chỉ highest applies. Second companion phí spirit + defense penalty (Trusted Kinship -30% defences, Yriel's 15% damage taken from companion's life).**

**Sai: Lên IL II tier 4 từ level 22 và giữ đến endgame — Đúng: IL I tier 2 → IL II tier 4 → IL III tier 5 mỗi khi gem tier unlock — Lý do: IL III vs IL I là +25% ignite base (25% vs 20% min life) và +50% self-burn rate. Mỗi tier upgrade tự nó đã +25% DPS không cần thay đổi gì khác.**

**Sai: Crit chance/crit multi build phase 3 walking simulator — Đúng: Pure ignite magnitude + minion life scaling — Lý do: IL ignite không có Hit nên không có crit roll. Mọi crit stat wasted trên IL channel. Crit gear chỉ amplify companion auto-attack channel (channel nhỏ).**

**Sai: Skip Last Gasp ở phase 2 bomber vì "Minion Instability đã trigger trước khi Last Gasp matter" — Đúng: Last Gasp critical cho bomber phase, không phải optional — Lý do: MI trigger ở Low Life (35% HP). Sau MI explosion, companion vẫn ở ~20-35% HP nếu MI explosion damage không 1-shot companion. Last Gasp bridge khoảng từ 0 HP đến chính thức die, kéo dài IL burn window thêm 4 giây. Skip Last Gasp = bomber cycle ngắn hơn ~55%.**

**Sai: Farm Elephant Tortoise từ Azmerian Ranges — Đúng: Farm từ Whakapanu Island hoặc Kriar Village — Lý do: Tame Beast wiki beast list xác nhận spawn map. Azmerian Ranges là Azmerian wisp territory (spawn rate hiện bị bug per wiki).**

**Sai: Mua Apocalypse Curio amulet trên trade với 50+ div vì doc reference — Đúng: Verify item identity trước, có thể là community nickname — Lý do: Wiki không có page cho item này (kiểm tra mirror 2026-05-18). Mods listed individually plausible nhưng tên item chưa confirmed. Có thể là 0.5 league-mechanic-specific desecrated item chưa được wiki hóa, hoặc community-coined nickname.**

## Summary

- Infernal Legion là synthesized ignite source — bypass POE2 standard Hit→Flammability→Ignite-Magnitude pipeline. Magnitude fixed = X% of minion max life (25% ở IL III tier 5).
- Modifier requirements: cần "more/increased Magnitude of Ignite" và enemy-side res reduction (curse, exposure). KHÔNG cần "Gain X as Y" modifiers, KHÔNG cần Hit-based supports (Fire Pen, crit), KHÔNG cần Xoph's Pyre (gate-split fails IL channel).
- Closed-form DPS per target: `DPS = 0.05 × H × M_sf × M_other × D_target`. H = companion max life (PoB-derived), M_sf = Searing Flame II amplifier (2.0 if applies), M_other = other magnitude modifiers, D_target = enemy damage-taken multiplier.
- Bomber phase chain: IL self-burn 30%/sec → Low Life ở ~2.17 sec → Minion Instability explosion 15% max life as Hit → Last Gasp window 4-sec post-life-0 → revive cycle.
- Walking Simulator phase: Tame Beast + Elephant Tortoise + IL III pure burn. Companion auto-tank front-line, IL ignite kill mọi enemy trong 2-2.4 m radius continuously.
- Build doc "23M DPS" claim là combined-channel total, không IL alone. Build doc "40-60% Xoph's Pyre uplift" claim likely overstated 5-10×. Cần PoB toggle test confirm trước khi đầu tư Xoph's Pyre với giá tier-zero.

## Version History

### Patch 0.5.0 (Return of the Ancients) — 2026-05-19

- Infernal Legion gem unchanged từ 0.3.0 introduction. Cùng wording, cùng số.
- Xoph's Pyre buffed 0.4.0 từ 20% → 40% fire→chaos extra damage. Doc reflect current 0.5 number.
- Searing Flame I/II numbers stable từ 0.3.0.
- Magnified Area II patched 0.3.0 to remove "deal less damage" penalty — now pure AoE buff.
- Elemental Weakness 0.3.0 consolidation: Flammability + Hypothermia + Conductivity merged into single Elemental Weakness curse với -40 to -59% all elemental res.
- Glancing Blows 0.3.0 reworked: "Chance to Evade is Unlucky. Chance to Deflect is Lucky." — no longer block-penalty keystone.
- Last Gasp 0.3.0 description update: clarified that supported minions die before duration expires if they take damage exceeding maximum life while fatally wounded.
- Minion Instability 0.3.1b: fixed bug allowing MI to trigger on Spectres removed after weapon swapping.

Mirror snapshot: 2026-05-18. Mọi advice trong doc cần re-verify nếu GGG ship 0.5.1+ patch sau date này. Walking simulator playstyle là archetype GGG dislike — rủi ro bị nerf trong 0.5.x rất cao theo monitoring patch pattern.

### 2026-05-19 (parallel hit channel addition — Ranny El video integration)
- Added new section **Parallel Hit Channel Chain (Companion Auto-Attack)** giữa Key Interactions và Optimization. Documented 4-step chain: Evergrasping Ring chaos extra → Despair chaos res shred → Xoph's Pyre Effect 1 chaos→ignite contribution → competing/parallel với IL synthesized ignite stacking rule.
- Identified gap analysis trước đây: mechanic doc chỉ cover IL synthesized ignite single channel, không cover companion auto-attack hit channel chain. Triple-curse build (Whispers of Doom keystone allocate) khai thác chain này qua 3rd curse Despair stacking trên Evergrasping Ring presence buff.
- Interpretation A (loose, IL dominates) vs Interpretation B (strict, 2 channel độc lập) documented; B là working interpretation, cần PoB toggle empirical xác nhận. Video Lich PoB (Ranny El, poe.ninja/poe2/pob/1863a) implementation consistent với Interpretation B — confirm via inspection của gem socket layout (Despair + Heightened Curse + Decaying Hex + Evergrasping Ring + Grip of Kulemak co-equipped).
- Conditional value labeled per gear stack tier: pre-Evergrasping = chỉ Decaying Hex chaos DoT, pre-Xoph's = chaos hit flat damage, full stack = combined uplift ~30-50%.

## Relationships

- **used_by** [Infernal Legion Lich](/builds/witch/dinomancer-lich-elephant) — Build dùng IL III làm primary damage engine — toàn bộ DPS chain phụ thuộc vào ignite loop này
