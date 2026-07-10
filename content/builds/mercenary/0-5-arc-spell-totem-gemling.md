---
template: templates/build-template.md
document_type: build
title: Arc Spell Totem Gemling Legionnaire
status: draft
author: duocnv
created: '2026-06-30'
updated: '2026-06-30'
class: Mercenary
ascendancy: Gemling Legionnaire
league: '0.5'
patch: 0.5.3
budget_tier: high-budget
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Arc
  damage_type: lightning
  playstyle: totem-caster
  content_focus: all-content
tags:
  - mercenary
  - gemling-legionnaire
  - arc
  - spell-totem
  - archmage
  - lightning
  - totem
  - curse
  - offscreen
  - 0-5
  - poe2
---

# Arc Spell Totem Gemling Legionnaire

Build totem một nút bấm: cắm sáu :wiki-link{url="https://www.poe2wiki.net/wiki/Spell_Totem"} mang :wiki-link{url="https://www.poe2wiki.net/wiki/Arc"}, rồi đi vòng vòng trong khi totem tự target và bắn Arc chain xuyên màn hình. Build xoay quanh stack Gem Quality để Gemling cho mỗi gem một hiệu ứng quality thứ hai, cộng với một engine mana Archmage 6,000+ để biến lượng mana khổng lồ thành lightning damage. Hợp với người thích clear nhanh, low-input, đứng ngoài tầm đánh — nhưng KHÔNG phải league starter: build cần một viên :wiki-link{url="https://www.poe2wiki.net/wiki/Split_Personality"} corrupt đúng nhánh Templar và vài unique khóa drop mới khởi động được.

## Build Overview

Damage đi qua totem hoàn toàn: totem là entity cast Arc, người chơi không bao giờ tự đánh. Hai stat quality của Gemling gánh phần lớn sức mạnh. :wiki-link{url="https://www.poe2wiki.net/wiki/Gemling_Legionnaire"} có node Advanced Thaumaturgy cho mỗi socketed gem một hiệu ứng quality **thứ hai** ngoài quality gốc, nên Arc vừa giữ quality gốc (giờ là cộng số lần chain) vừa nhận thêm "more damage per remaining chain", còn Spell Totem vừa giữ duration gốc vừa nhận thêm cast speed per totem, nên build dồn mọi nguồn quality vào gear thay vì chỉ damage.

Scaling damage là chain nhân ba tầng. Tầng một là chain: :wiki-link{url="https://www.poe2wiki.net/wiki/Dominus'_Grasp"} nhân đôi số lần chain, đẩy Arc lên ~40-52 chain endgame, và mỗi remaining chain cộng ~6.75% more damage qua Gemling secondary (ở ~45% quality tổng) — cú hit đầu vào single target ăn gần gấp ba. Tầng hai là mana: :wiki-link{url="https://www.poe2wiki.net/wiki/Archmage"} cho spell của người chơi "4% damage as extra lightning per 100 max mana", ở 6,190 mana là ~247% as extra lightning, và totem thừa hưởng damage mod đó. Tầng ba là res-shred: ba lớp curse và exposure kéo lightning res của boss xuống âm sâu.

Defense của build là offense-first, không phải pool máu. Life chỉ 1,578 và mana KHÔNG đỡ đòn (:wiki-link{url="https://www.poe2wiki.net/wiki/Eldritch_Battery"} chỉ convert ES sang mana để trả cost, không phải Mind over Matter). Cái giữ mạng là Blasphemy aura :wiki-link{url="https://www.poe2wiki.net/wiki/Enfeeble"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Chains"} bóp damage và tốc độ enemy, totem chắn aggro, và tầm bắn offscreen giết enemy trước khi chúng tới. Mobility là chạy bộ thuần — totem làm hết phần damage nên không cần combo di chuyển.

## Skill Gems & Links

Carry là **Spell Totem + Arc + :wiki-link{url="https://www.poe2wiki.net/wiki/Dominus'_Grasp"} + Execute III + Urgent Totems III + Embitter**. Dominus' Grasp là support quan trọng nhất: "Chain 100% more times" nhân đôi tổng số lần chain — gánh cả tầng damage-per-chain lẫn clear offscreen. Urgent Totems III cộng placement speed để đặt đủ sáu totem trong tích tắc, Execute III đẩy damage lên enemy gần chết cho clear mượt. Slot thứ sáu (Embitter / Scion's Temper / Ash's Prowess) là chỗ flex theo content — single target thì gem more-damage-on-full-life, clear thì AoE.

Engine mana là **Archmage + :wiki-link{url="https://www.poe2wiki.net/wiki/Lightning_Mastery"} + Her Declaration + Armour Demolisher II**. Lightning Mastery cộng +1 level Archmage để nâng scalar as-extra-lightning. :wiki-link{url="https://www.poe2wiki.net/wiki/Her_Declaration"} là debuff Intimidate lên enemy trong Presence (tăng damage taken của chúng), không phải buff damage cho mình. Archmage tăng cost spell rất nặng, nhưng totem không trả cost đó — GGG nói rõ "summoning the totem itself is not a spell so costs added to spells are not added to summoning a Spell Totem", nên người chơi chỉ ăn phần damage as-extra-lightning mà miễn phần cost. Armour Demolisher II ở đây để cân màu gem cho ascendancy (xem Ascendancy).

Ba curse chạy song song. **Elemental Weakness + :wiki-link{url="https://www.poe2wiki.net/wiki/Heightened_Curse"} + Efficiency II + :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Allure"} + Cursed Ground** là curse tấn công: Atziri's Allure cho phép bỏ qua curse limit để nhét Elemental Weakness làm curse thứ ba, nhưng Allure có downside reflect curse về chính mình và còn 20% less Curse Effect; :wiki-link{url="https://www.poe2wiki.net/wiki/Cursed_Ground"} áp curse qua mặt đất thay vì curse thẳng enemy, nên né được cái reflect đó, và Heightened Curse bù lại phần 20% less. Hai curse phòng thủ **:wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"} + Ritualistic Curse + Magnified Area II + Enfeeble + Temporal Chains** chạy aura thường trực, tốn 120 spirit (60 mỗi curse). Cộng thêm **:wiki-link{url="https://www.poe2wiki.net/wiki/Frost_Bomb"} + Spell Echo + Potent Exposure + Zenith II + Efficiency II** cho Elemental Exposure (giảm cả ba res, không riêng lightning) — đây là lớp shred res thứ hai chồng lên curse.

Phần spirit còn lại nuôi **Mana Tempest + Advancing Storm + Efficiency II + Armour Demolisher II + Arcane Surge** và **:wiki-link{url="https://www.poe2wiki.net/wiki/Mana_Remnants"} + Remnant Potency I + Harmonic Remnants II** để sustain mana cho engine Archmage, cộng **:wiki-link{url="https://www.poe2wiki.net/wiki/Purity_of_Fire"} + Vitality II + Seraph's Heart + Cool Headed + Clarity II + Warm Blooded** làm aura phòng thủ và :wiki-link{url="https://www.poe2wiki.net/wiki/Virtuous_Barrier"} cho lớp armour tạm thời. Slot cuối là **Power Siphon + đống red support rác** (Brutality, Bleed, Armour Demolisher, Execute) — không dùng để đánh, chỉ để cân số gem đỏ cho Gem Studded.

Exclusion check: Archmage quality KHÔNG cho damage — nó là increased Reservation Efficiency, nên Gemling double-quality trên Archmage chỉ giảm spirit cost chứ không tăng lightning. Đừng tính quality Archmage vào DPS sheet. Blasphemy không bỏ qua curse limit, nên chạy cùng lúc cả Enfeeble và Temporal Chains cần curse limit ≥ 2 từ một nguồn ngoài (gear/tree) — verify nguồn này khi lắp.

## Ascendancy

Thứ tự ascend Gemling Legionnaire là **Essence of Virtue → Advanced Thaumaturgy → Neurological Implants → Gem Studded**. Essence of Virtue mở cổng bắt buộc vì cả Advanced Thaumaturgy lẫn Neurological Implants đều gate sau nó.

Advanced Thaumaturgy là node định nghĩa build: "Gem Quality grants Socketed Skills an additional effect". Nó KHÔNG nhân đôi giá trị quality — nó cho mỗi gem một hiệu ứng quality thứ hai độc lập. Nhờ vậy Arc lấy được "more damage per remaining chain" (quality gốc của Arc giờ chỉ cộng số lần chain) và Spell Totem lấy được "cast speed per summoned totem" (quality gốc của Spell Totem là totem duration). Neurological Implants cộng +2 level cho skill theo Int requirement, nuôi pool gem cao của build.

Gem Studded cho bonus theo **màu support gem nhiều nhất**: đỏ = enemy không có crit damage bonus lên mình (phòng thủ), xanh dương = 30% less skill cost, xanh lá = giảm movement penalty. Build chủ yếu xài gem xanh dương nên ăn sẵn 30% less cost — phần này gánh trực tiếp cho engine mana. Để ăn luôn bonus đỏ, build nhồi mấy red support rác lên Power Siphon cho số gem đỏ HÒA với số xanh dương, kích cả hai bonus cùng lúc. Lưu ý Gem Studded chỉ đếm support gem; cân lệch một gem xanh dương là rớt im lặng bonus đỏ.

## Passive Tree & Mastery

Ba keystone định hình build. :wiki-link{url="https://www.poe2wiki.net/wiki/Eldritch_Battery"} convert base ES sang mana và nhân đôi mana cost để build có pool 6,190 mana cho Archmage; chỉ flat mana và % increased Mana scale phần convert, % increased ES thì không. :wiki-link{url="https://www.poe2wiki.net/wiki/Ancestral_Bond"} ở POE2 là totem limit nhân đôi, bỏ charge khi đặt, mỗi totem reserve 75 spirit (không còn clause "tự mình không gây damage" như POE1) — sáu totem ăn 450 spirit, vừa khít pool 501. :wiki-link{url="https://www.poe2wiki.net/wiki/Pain_Attunement"} chỉ đáng lấy ở variant low-life; ở variant full-life trong PoB hiện tại nó là phạt −30% crit damage, nên node này tách hẳn theo lựa chọn low-life hay không.

Build không đi tree thường của Mercenary mà luồn qua :wiki-link{url="https://www.poe2wiki.net/wiki/Split_Personality"} (Ruby corrupt) cắm ở jewel socket ngay nam điểm xuất phát Mercenary để mở "Can Allocate Passive Skills from the Templar's starting point" — chính nhánh Templar mới có cụm totem + mana + spell mật độ cao build cần. Điểm khiến build không phải league starter: viên Split Personality roll ngẫu nhiên 1 trong 6 class start khi corrupt, phải săn đúng bản Templar (có bản Warrior thay thế nếu Templar đắt).

Hai pool điểm weapon-set tách biệt là phần đáng swap. Set 1 gánh damage: Supportive Ancestors (cast speed + 25% damage với totem), Barbaric Strength (+45% crit damage, kèm +10% mana cost — cost này KHÔNG được totem bỏ qua cho khâu đặt totem), Electrifying Nature, Sigil of Lightning (+30% vs shocked), Pure Power (10% more max lightning, nhân chứ không cộng). Set 2 gánh curse/exposure: Lingering Whispers, Master of Hexes, Overexposure (+30% exposure effect), Decrepifying Curse, Impending Doom. Hai cluster chỉ active khi đúng set đang cầm, nên swap nhầm là rớt nguyên cụm damage hoặc nguyên cụm curse.

## Stat Priorities & Defenses

Số từ PoB export Lv97 (`pob_coverage: PARTIAL` — engine Arc/Spell Totem/Archmage model đủ, nhưng quality 0.5 từ Fox Idol qua Darkness Enthroned và Bonded mod của rune có thể chưa được PoB2 bắt hết; nếu thiếu thì DPS thực cao hơn số dưới một chút):

- **Life:** 1,578 · **ES:** 0 (convert hết sang mana) · **Mana:** 6,190 · **Spirit:** 501
- **EHP:** 13,161 (weighted, KHÔNG phải pool mana — xem dưới)
- **Resistances:** Fire 68 / Cold 75 / Light 75 / **Chaos 14**
- **Max hit per type:** Phys 6,742 / Light 24,080 — phys là chỗ yếu nhất
- **Crit:** 40.3% chance / 892% multiplier · **Cast:** 3.16/totem/giây
- **FullDPS:** ~23.2M (sáu totem, single target đứng yên, full stack curse) · **AverageHit:** 1.22M
- **Str 86 / Dex 56 / Int 312** · **Power Charges:** 3

DPS đi như sau: Arc base × ~4.57 (Archmage 247% + Heart of the Well + Mana Tempest as-extra-lightning) × ~4 (increased từ Runeseeker's 105% spell + tree) × 1.10 (Pure Power, nhân) × ~1.94 (lightning res boss về âm sau Elemental Weakness + Frost Bomb exposure) × 1.30 (Sigil of Lightning vs shocked) ≈ 98k pre-chain non-crit. Tầng chain Gemling nhân thêm: ~29 remaining chain × 6.75% ≈ ×2.96 ở cú hit đầu single target. Crit trung bình ×4.19. Ra ~1.22M mỗi hit, ×3.16 cast ×6 totem = ~23.2M. Con số 23.2M là trần single-target đứng yên với toàn bộ curse/exposure/charge stack; clear thì chain trải ra pack nên per-enemy thấp hơn nhưng throughput vẫn cao nhờ AoE chain.

EHP thật mỏng hơn con 13,161 trông thấy. Mana không hấp thụ damage (Eldritch Battery chỉ là cơ chế cost, không có Mind over Matter), nên pool đỡ đòn trực tiếp chỉ là Life 1,578. Quy ra theo từng element: light/cold (75%) ≈ 6,312, fire (68%) ≈ 4,931, **chaos (14%) chỉ ~1,835 — chỗ element yếu nhất, creator không nhắc**. Phys max hit 6,742 phụ thuộc vào Strength Mote của Virtuous Barrier đầy; khi Mote cạn dưới hỏa lực liên tục thì phys max hit tụt về gần 1,578 — breakpoint phòng thủ dễ vỡ nhất. Cái thực sự giữ mạng là Blasphemy bóp enemy, res-shred làm enemy chết nhanh, totem chắn, và tầm offscreen.

### Performance Ratings

| Aspect | Rating (1-5) |
|---|---|
| clear_speed | 5 |
| boss_damage | 4 |
| survivability | 3 |
| mobility | 3 |
| league_start | 1 |
| budget_scaling | 4 |

## Gear Progression

### Chỉ số chính cần tìm trên từng slot

- **Weapon (×2):** unique bắt buộc endgame là :wiki-link{url="https://www.poe2wiki.net/wiki/Runeseeker's_Call"} (Runic Fork) vì 200% increased socketed-rune effect biến sáu rune thành +9 spell level + mana + crit khổng lồ; budget thì "any wand +5 to level of all lightning spell skills" → crit chance suffix → +1 spell level/mana hybrid → spell/ele damage. Bonded mana mod chỉ active ở set đang cầm.
- **Helmet:** rune bắt buộc là :wiki-link{url="https://www.poe2wiki.net/wiki/Kurgal's_Gaze"} ("life regen rate cũng áp cho mana regen" — đây là item "feeling tanky") → sau đó tổng ES + mana cao nhất → res suffix → spirit reservation efficiency desecrated. Lấy Kurgal's Gaze trước khi vào red map.
- **Body:** ES tổng cao (convert sang mana) → spirit → 2 res → spirit reservation efficiency desecrated. Slot này là nguồn mana chính qua Eldritch Battery.
- **Gloves:** +2 projectile level → mana + ES → crit damage bonus suffix → res. Mình tham chiếu Vortex Nails (Sirenscale).
- **Boots:** Movement Speed 30%+ → ES/mana → res → increased effect of socketed augment (Essence of Horror corrupt). 
- **Belt:** unique bắt buộc là :wiki-link{url="https://www.poe2wiki.net/wiki/Darkness_Enthroned"} bản body-armour variant với 90-99% increased augment effect, cắm Fox Idol (cho quality, kích Bonded của idol khác) + Rune of the Blossom (cho spirit). Bản body-armour không reroll được khi drop nên phải nhắm đúng.
- **Amulet:** quality của tất cả skill (anoint Paragon + dòng desecrated +5% quality = +10% từ một slot) → +spell level → spirit → cast speed → res. Mình chạy Victory Choker (Stellar).
- **Ring 1:** increased maximum mana implicit (Mnemonic Ring base) → flat mana cao → res đang hở → Int. Essence of the Mind cho flat mana, không phải %.
- **Ring 2:** unique bắt buộc :wiki-link{url="https://www.poe2wiki.net/wiki/Kalandra's_Touch"} — copy toàn bộ mod của ring đối diện (gồm enchant), nên ring 1 càng tốt thì ring 2 nhân đôi.
- **Jewels:** unique bắt buộc :wiki-link{url="https://www.poe2wiki.net/wiki/Split_Personality"} Ruby bản Templar (mở nhánh tree); Heart of the Well (Diamond, gain as cold + lightning + crit); còn lại rare Sapphire roll crit damage / spell damage / freeze. :wiki-link{url="https://www.poe2wiki.net/wiki/Prism_of_Belief"} +Arc là optional, creator nói nó gần như ngang rare jewel thường.

### Leveling → Early Map → Endgame → Mirror tier

Leveling chạy variant twink Spark (không phải Arc Totem) xuyên campaign rồi transition sang Arc Spell Totem khi đủ tree + Split Personality. Early map (~45 div) là setup tối thiểu: Split Personality Templar, Kurgal's Gaze, đủ ~5k mana — dưới ngưỡng này build chưa "feeling tanky". Endgame (~200-600 div) thêm Darkness Enthroned body-variant, Runeseeker's Call, quality stack đầy. Mirror tier (~1,100-1,800 div) là dual Runeseeker's corrupt pre-load Perfect rune, Kalandra's Touch nhân ring T1, jewel crit cao.

## Budget & Investment

Build chạy từ ~45 div (early map, một Runeseeker's hoặc wand +5, Split Personality, Kurgal's Gaze) và leo tới ~1,800 div bản full. Đây KHÔNG phải league starter: ba trong bốn item lõi khóa sau drop/corrupt đặc thù (Darkness Enthroned body-variant không reroll, Split Personality corrupt đúng Templar, dual Runeseeker's pre-load rune) và cần hai Lab ascendancy trước khi engine quality bật. Power nhảy mạnh nhất ở mốc ~200 div khi quality stack đủ để cast speed per totem và damage per chain lên trần. Trên ~600 div thì diminishing returns rõ — mirror tier chủ yếu mua thêm độ ổn defense và crit cao hơn chứ DPS đã thừa cho mọi content.

## Failure Modes

Build làm tốt ba thứ: clear offscreen auto-target T15-T16 cực nhanh nhờ chain ~40-52 lần trải pack, single-target boss thừa damage (~23M trần) khi totem đứng yên stack curse, và input thấp một nút. Những chỗ nó gãy:

**Damage engine nhạy patch và đã từng bị cắt một nửa.** Quality gốc của Arc giờ chỉ cộng số lần chain; toàn bộ "more damage per remaining chain" chỉ còn sống ở Gemling Advanced Thaumaturgy secondary (3% per chain ở 20% quality). Không có lớp damage dự phòng nào dưới nó — một nerf nữa vào Advanced Thaumaturgy hoặc chain damage là build sập. Vào client nhớ Alt-hover Arc sau khi lấy Advanced Thaumaturgy để xác nhận dòng "more damage per remaining chain" vẫn còn, và coi mọi guide ghi "6% / 180% / 6 totem cố định" là stale tới khi tự verify.

**One-shot physical khi Mote cạn.** Phys max hit 6,742 cần Strength Mote của Virtuous Barrier đầy; khi cạn thì đệm chỉ là Life 1,578 ở 0% phys DR. Slam pinnacle vượt xa ngưỡng đó, và chaos res 14% làm chaos damage gần như full mặt. Cách sống là giết từ tầm offscreen, không đứng vào slam, và craft chaos res trước khi đẩy T17 juiced.

**Map mod khắc chế.** "Players take X% as Chaos" (chaos res 14% nhân damage vào nhiều), "no Mana Regeneration" (giết sustain Kurgal's Gaze + đặt totem dưới Barbaric Strength +10% cost), "Hexproof" (vô hiệu toàn bộ Blasphemy aura phòng thủ — lớp defense chính), "Cannot Leech" (cắt mana overflow). Lọc waystone bỏ chaos/no-regen/Hexproof ở map device và craft chaos res là hai cách giảm thiểu.

**Hai curse Blasphemy cần curse limit ≥ 2 từ nguồn chưa chốt.** Elemental Weakness làm curse thứ ba qua Atziri's Allure thì ổn, nhưng chạy cùng lúc Enfeeble và Temporal Chains đòi curse limit tối thiểu 2 — ba keystone của build (Eldritch Battery, Ancestral Bond, Pain Attunement) không có nguồn +1 curse. Vào client phải xác nhận nguồn nâng limit (gear/tree) thực sự có, nếu không một trong hai curse phòng thủ rớt im lặng.

**Cursed Ground bypass reflect chưa được patch xác nhận.** Lý thuyết Cursed Ground áp curse qua đất nên né reflect của Atziri's Allure, nhưng không gem text nào ghi rõ. Nếu một hotfix sửa wording, Elemental Weakness reflect về chính mình và res element rớt thẳng. Test ở encounter an toàn (nhìn debuff bar xem Elemental Weakness có hiện trên mình không) trước khi chạy HC hoặc T17.

**League start không khả thi.** Ba item lõi khóa drop/corrupt đặc thù cộng hai Lab trước khi engine quality hoạt động. Cách chơi là level skill khác rồi transition mid-league sang build này.

## Verdict

Build hợp với người thích totem caster low-input, clear offscreen, và sẵn sàng đầu tư mid-league chứ không khởi động từ ngày một. Ngưỡng để build đạt đúng số tính toán là ~200 div (Split Personality Templar, Darkness Enthroned body-variant, Runeseeker's, quality stack đủ) cộng ~5k mana và Kurgal's Gaze cho lớp defense tối thiểu; dưới ngưỡng đó build clear vẫn ổn nhưng mong manh, đặc biệt trước slam phys và chaos damage. Trần damage 23M là con single-target đứng yên stack đủ buff, không phải DPS di chuyển — và toàn bộ damage engine treo trên một dòng quality Gemling duy nhất, nên build mạnh-nhưng-giòn về cả phòng thủ lẫn độ bền trước patch.

## Changelog

### 2026-06-30

- Initial draft. Research từ build "Ky's 1 Button Arc Totems Gemling Legionnaire" (YouTube + mobalytics, updated 2026-06-27) + PoB endgame export Lv97 (FullDPS 23.2M, EHP 13.1k, mana 6190, spirit 501). Verify verbatim các cơ chế lõi vs poedb 0.5.0 + wiki mirror + Version_0.5.md: Arc quality gốc đổi sang "+chains" (damage-per-chain giờ chỉ ở Gemling Advanced Thaumaturgy secondary 3%/20% quality), Spell Totem cast-speed-per-totem là AT secondary, Archmage quality = reservation efficiency (không damage), totem bỏ qua spell cost theo patch note GGG, Ancestral Bond POE2 = limit doubled + 75 spirit (không clause self-damage), Pain Attunement là phạt ở full-life. Còn cần verify in-client: số chain trên gem level 20, nguồn +1 curse limit cho hai Blasphemy curse, Cursed Ground bypass reflect, giá trị armour mỗi Mote.

## Relationships

- **related_mechanics** [Spirit và spirit reservation](/guides/spirit-and-spirit-reservation) — sáu totem reserve 450/501 spirit qua Ancestral Bond, cộng 120 spirit cho hai Blasphemy curse và 100 cho Archmage là khung spirit của build.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — Gemling Legionnaire quality double-dip và Archmage mana engine trong meta 0.5.
- **competes_with** [Twister Spirit Walker](/builds/huntress/0-5-spirit-walker-twister) — cùng hạng clear-mạnh nhưng ngược triết lý: bên kia self-cast crit-freeze tự chơi, bên này totem một nút auto-target offscreen.
