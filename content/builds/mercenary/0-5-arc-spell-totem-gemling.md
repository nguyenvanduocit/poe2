---
template: templates/build-template.md
document_type: build
title: Magic Find Arc Totem Gemling
status: draft
author: duocnv
created: '2026-06-30'
updated: '2026-07-13'
class: Mercenary
ascendancy: Gemling Legionnaire
league: '0.5'
patch: 0.5.3
budget_tier: mirror-tier
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Arc
  damage_type: lightning
  playstyle: totem-caster
  content_focus: currency-farming
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
  - mageblood
  - rarity
  - magic-find
  - andvarius
  - kalandras-touch
  - currency-farming
  - 0-5
  - poe2
---

# Magic Find Arc Totem Gemling

Con totem một nút bấm chỉnh sang hướng cày currency: cắm sáu :wiki-link{url="https://www.poe2wiki.net/wiki/Spell_Totem"} mang :wiki-link{url="https://www.poe2wiki.net/wiki/Arc"}, đi vòng vòng trong khi totem tự target và bắn Arc chain xuyên màn hình, còn gear thì stack **~250-285% Item Rarity** để mỗi con quái chết ra nhiều loot hơn. Damage đến từ :wiki-link{url="https://www.poe2wiki.net/wiki/Runeseeker's_Call"} (+9 spell level) cộng engine mana Archmage, đủ để clear T15-16 offscreen. Con farm map rarity mirror-tier này không phải bosser, cũng không phải league starter. Hợp người muốn cày currency bằng magic-find mà vẫn tự map được, không cần bám carry.

## Build chạy bằng gì

Damage đi qua totem hoàn toàn: totem là entity cast Arc, người chơi không bao giờ tự đánh, nên rarity của người chơi vẫn áp cho mọi drop vì kill tính cho mình. Chassis clear là bốn tầng nhân damage: Runeseeker's Call cho +9 spell level và 315% spell damage, :wiki-link{url="https://www.poe2wiki.net/wiki/Archmage"} biến mana thành lightning as-extra, :wiki-link{url="https://www.poe2wiki.net/wiki/Dominus'_Grasp"} nhân đôi chain lên ~40-52 lần, ba lớp curse/exposure kéo lightning res boss về âm. Sáu totem trải chain ra pack và giết offscreen trước khi enemy tới, nên nó là con clear tốc độ, không phải con dồn damage cực đại.

Rarity đến từ ba nguồn gear ghép lại mà không đụng tới engine damage: một :wiki-link{url="https://www.poe2wiki.net/wiki/Andvarius"} ở ring 1 mà :wiki-link{url="https://www.poe2wiki.net/wiki/Kalandra's_Touch"} ở ring 2 copy lại thành hai lần, một :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"} vừa cho rarity vừa vá res, và hai :wiki-link{url="https://www.poe2wiki.net/wiki/Golden_Charm"} cắm trong charm slot của Mageblood. Toàn bộ nằm ở ring + belt + boots, nên body/gloves/amulet vẫn giữ nguyên vai nuôi mana và quality.

## Rarity đến từ đâu

Ledger từng slot, stat headline của build nên hiểu trước khi mua:

- **Andvarius (ring 1)** — bản roll cao ~96% (implicit Gold Ring ~15 + explicit ~83). Bản floor 67-79% rẻ gấp mười nhưng tụt ~20% rarity, đừng mua nhầm — POE2 0.5 không có rarity catalyst nên không tự roll cao được, phải mua sẵn.
- **Kalandra's Touch (ring 2)** — copy con Andvarius kế bên → thêm ~96% nữa. Chỗ này khiến chassis Gemling gánh được rarity: một cây Andvarius đếm hai lần.
- **Mageblood (belt)** — một Legacy of Gold cho 45% rarity, ba slot Mage's Legacy còn lại đổ vào res/damage.
- **Golden Charm ×2** — 15% mỗi viên, tự kích khi giết rare/unique, cắm vào charm slot Mageblood.
- **Boots rare** — một dòng rarity ~18% đi kèm Movement Speed và res.

Gear cộng lại ~250-285% character rarity. Trên nữa là lớp atlas: node rarity trên atlas tree (2% per monster modifier, 10% từ rare monster) nhân riêng với rarity gear và không tốn slot nào, nên allocate hết, rarity không mất gì.

Muốn đẩy trên ~400% thì phải thêm Greed's Embrace (body), Aurseize (gloves), Gold Amulet rarity, nhưng ba slot đó chính là body ES→mana, gloves +2 proj, amulet quality, tức bỏ nốt engine damage. Tới ngưỡng đó totem Gemling không còn là chassis đúng; [Magic Find Spell Ritualist](/builds/huntress/0-5-ritualist-rarity-solo-duo) lên ~627% rarity mà vẫn tự map, dùng nó thay vì ép build này gánh việc nó không sinh ra để làm. Build này dừng đúng chỗ ~250-285%: rarity đủ để loot map có nghĩa, mà giữ được tốc độ clear.

## Skill Gems & Links

Carry là **Spell Totem + Arc + :wiki-link{url="https://www.poe2wiki.net/wiki/Dominus'_Grasp"} + Execute III + Urgent Totems III + Embitter**. Dominus' Grasp là support quan trọng nhất: "Chain 100% more times" nhân đôi tổng số lần chain, gánh cả tầng damage-per-chain lẫn clear offscreen. Urgent Totems III cộng placement speed để đặt đủ sáu totem trong tích tắc, Execute III đẩy damage lên enemy gần chết cho clear mượt. Slot thứ sáu (Embitter / Scion's Temper / Ash's Prowess) là chỗ flex theo content — single target thì gem more-damage-on-full-life, clear thì AoE.

Engine mana là **Archmage + :wiki-link{url="https://www.poe2wiki.net/wiki/Lightning_Mastery"} + Her Declaration + Armour Demolisher II**. Lightning Mastery cộng +1 level Archmage để nâng scalar as-extra-lightning. :wiki-link{url="https://www.poe2wiki.net/wiki/Her_Declaration"} là debuff Intimidate lên enemy trong Presence (tăng damage taken của chúng), không phải buff damage cho mình. Archmage tăng cost spell rất nặng, nhưng totem không trả cost đó — GGG nói rõ "summoning the totem itself is not a spell so costs added to spells are not added to summoning a Spell Totem", nên người chơi chỉ ăn phần damage as-extra-lightning mà miễn phần cost. Armour Demolisher II ở đây để cân màu gem cho ascendancy.

Ba curse chạy song song. **Elemental Weakness + :wiki-link{url="https://www.poe2wiki.net/wiki/Heightened_Curse"} + Efficiency II + :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Allure"} + Cursed Ground** là curse tấn công: Atziri's Allure cho phép bỏ qua curse limit để nhét Elemental Weakness làm curse thứ ba, nhưng Allure có downside reflect curse về chính mình và còn 20% less Curse Effect; :wiki-link{url="https://www.poe2wiki.net/wiki/Cursed_Ground"} áp curse qua mặt đất thay vì curse thẳng enemy, nên né được cái reflect đó, và Heightened Curse bù lại phần 20% less. Hai curse phòng thủ **:wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"} + Ritualistic Curse + Magnified Area II + Enfeeble + Temporal Chains** chạy aura thường trực, tốn 120 spirit (60 mỗi curse). Cộng thêm **:wiki-link{url="https://www.poe2wiki.net/wiki/Frost_Bomb"} + Spell Echo + Potent Exposure + Zenith II + Efficiency II** cho Elemental Exposure (giảm cả ba res, không riêng lightning), thành lớp shred res thứ hai chồng lên curse.

Phần spirit còn lại nuôi **Mana Tempest + Advancing Storm + Efficiency II + Armour Demolisher II + Arcane Surge** và **:wiki-link{url="https://www.poe2wiki.net/wiki/Mana_Remnants"} + Remnant Potency I + Harmonic Remnants II** để sustain mana cho engine Archmage, cộng **:wiki-link{url="https://www.poe2wiki.net/wiki/Purity_of_Fire"} + Vitality II + Seraph's Heart + Cool Headed + Clarity II + Warm Blooded** làm aura phòng thủ và :wiki-link{url="https://www.poe2wiki.net/wiki/Virtuous_Barrier"} cho lớp armour tạm thời. Slot cuối là **Power Siphon + đống red support rác** (Brutality, Bleed, Armour Demolisher, Execute) — không dùng để đánh, chỉ để cân số gem đỏ cho Gem Studded.

Exclusion check: Archmage quality KHÔNG cho damage — nó là increased Reservation Efficiency, nên Gemling double-quality trên Archmage chỉ giảm spirit cost chứ không tăng lightning. Đừng tính quality Archmage vào DPS sheet. Blasphemy không bỏ qua curse limit, nên chạy cùng lúc cả Enfeeble và Temporal Chains cần curse limit ≥ 2 từ một nguồn ngoài (gear/tree) — verify nguồn này khi lắp.

## Ascendancy

Thứ tự ascend Gemling Legionnaire là **Essence of Virtue → Advanced Thaumaturgy → Neurological Implants → Gem Studded**. Essence of Virtue mở cổng bắt buộc vì cả Advanced Thaumaturgy lẫn Neurological Implants đều gate sau nó.

Advanced Thaumaturgy là node định nghĩa build: "Gem Quality grants Socketed Skills an additional effect". Nó KHÔNG nhân đôi giá trị quality — nó cho mỗi gem một hiệu ứng quality thứ hai độc lập. Nhờ vậy Arc lấy được "more damage per remaining chain" (quality gốc của Arc giờ chỉ cộng số lần chain) và Spell Totem lấy được "cast speed per summoned totem" (quality gốc của Spell Totem là totem duration). Neurological Implants cộng +2 level cho skill theo Int requirement, nuôi pool gem cao của build.

Gem Studded cho bonus theo **màu support gem nhiều nhất**: đỏ = enemy không có crit damage bonus lên mình (phòng thủ), xanh dương = 30% less skill cost, xanh lá = giảm movement penalty. Build chủ yếu xài gem xanh dương nên ăn sẵn 30% less cost — phần này gánh trực tiếp cho engine mana. Để ăn luôn bonus đỏ, build nhồi mấy red support rác lên Power Siphon cho số gem đỏ HÒA với số xanh dương, kích cả hai bonus cùng lúc. Lưu ý Gem Studded chỉ đếm support gem; cân lệch một gem xanh dương là rớt im lặng bonus đỏ.

## Passive Tree & Mastery

Ba keystone định hình build. :wiki-link{url="https://www.poe2wiki.net/wiki/Eldritch_Battery"} convert base ES sang mana và nhân đôi mana cost để build có pool mana cho Archmage; chỉ flat mana và % increased Mana scale phần convert, % increased ES thì không. Vì rarity ring bỏ nguồn flat mana lớn (xem Gear), pool ở build này quanh ~4,300 chứ không phải mức cao nhất chassis đạt được. :wiki-link{url="https://www.poe2wiki.net/wiki/Ancestral_Bond"} ở POE2 là totem limit nhân đôi, bỏ charge khi đặt, mỗi totem reserve 75 spirit (không còn clause "tự mình không gây damage" như POE1). Sáu totem ăn 450 spirit, vừa khít pool 501. :wiki-link{url="https://www.poe2wiki.net/wiki/Pain_Attunement"} chỉ đáng lấy ở variant low-life; ở variant full-life trong PoB hiện tại nó là phạt −30% crit damage, nên node này tách hẳn theo lựa chọn low-life hay không.

Build không đi tree thường của Mercenary mà luồn qua :wiki-link{url="https://www.poe2wiki.net/wiki/Split_Personality"} (Ruby corrupt) cắm ở jewel socket ngay nam điểm xuất phát Mercenary để mở "Can Allocate Passive Skills from the Templar's starting point" — chính nhánh Templar mới có cụm totem + mana + spell mật độ cao build cần. Điểm khiến build không phải league starter: viên Split Personality roll ngẫu nhiên 1 trong 6 class start khi corrupt, phải săn đúng bản Templar (có bản Warrior thay thế nếu Templar đắt). Trên đường đi qua nhánh này gặp node rarity nào thì allocate luôn — mỗi 1-2 điểm cộng vào lớp rarity gốc không mất gì.

Hai pool điểm weapon-set tách biệt là phần đáng swap. Set 1 gánh damage: Supportive Ancestors (cast speed + 25% damage với totem), Barbaric Strength (+45% crit damage, kèm +10% mana cost — cost này KHÔNG được totem bỏ qua cho khâu đặt totem), Electrifying Nature, Sigil of Lightning (+30% vs shocked), Pure Power (10% more max lightning, nhân chứ không cộng). Set 2 gánh curse/exposure: Lingering Whispers, Master of Hexes, Overexposure (+30% exposure effect), Decrepifying Curse, Impending Doom. Hai cluster chỉ active khi đúng set đang cầm, nên swap nhầm là rớt nguyên cụm damage hoặc nguyên cụm curse.

## Gear Progression

### Chỉ số chính cần tìm trên từng slot

Lớp rarity — đây là điểm bán của build, phải đúng roll:

- **Ring 1 — Andvarius (Gold Ring):** lọc explicit rarity ≥82 để khớp ~96% total. Bản floor 67-79% rẻ mạt nhưng tụt cả total, đừng ham.
- **Ring 2 — Kalandra's Touch:** copy nguyên con Andvarius cạnh nó → ~96% miễn phí. Ring 1 càng cao thì ring 2 nhân đôi càng cao.
- **Belt — Mageblood:** roll bốn Mage's Legacy theo hướng một Legacy of Gold (45% rarity) + Legacy of Bismuth (+45% all res) + Legacy of Sulphur (60% increased damage, kèm consecrated ground khi đứng yên — hợp totem đứng cast) + một dòng max-res (Ruby/Sapphire/Topaz). Charm slot cắm Golden Charm.
- **Charm ×2 — Golden Charm:** 15% rarity mỗi viên, proc khi giết rare/unique, refill ở Well hoặc bằng kill.
- **Boots — rare:** Movement Speed 30%+ → rarity ~18% → res đang hở → ES/mana. Lọc cả res chứ không chỉ MS + rarity.

Lớp damage + mana — giữ nguyên từ chassis, không đổi:

- **Weapon (×2) — Runeseeker's Call (Runic Fork):** 200% increased socketed-rune effect biến sáu rune thành +9 spell level + mana + crit khổng lồ. Weapon là DPS engine, không có bản budget thay được. Bonded mana mod chỉ active ở set đang cầm.
- **Helmet:** rune :wiki-link{url="https://www.poe2wiki.net/wiki/Kurgal's_Gaze"} ("life regen rate cũng áp cho mana regen" — item giữ mạng) → tổng ES + mana cao nhất → res suffix. Lấy trước khi vào red map.
- **Body:** ES tổng cao (convert sang mana qua Eldritch Battery) → spirit → 2 res. Slot này là nguồn mana chính, đừng đổi sang rarity body nếu không mất luôn Archmage.
- **Gloves:** +2 projectile level → mana + ES → crit damage bonus → res. Tham chiếu Vortex Nails (Sirenscale).
- **Amulet:** quality của tất cả skill (anoint Paragon + dòng desecrated +5% quality) → +spell level → spirit → res. Tham chiếu Victory Choker (Stellar).
- **Jewels:** :wiki-link{url="https://www.poe2wiki.net/wiki/Split_Personality"} Ruby bản Templar (mở nhánh tree); Heart of the Well (Diamond, gain as cold + lightning + crit); còn lại rare Sapphire roll crit damage / spell damage.

### Leveling → Early Map → Endgame → Mirror tier

Leveling chạy variant twink Spark (không phải Arc Totem) xuyên campaign rồi transition sang Arc Spell Totem khi đủ tree + Split Personality. Early map là setup damage tối thiểu: Split Personality Templar, Kurgal's Gaze, một Runeseeker's hoặc wand +5, đủ ~5k mana — lúc này chưa gắn rarity, chỉ lo build đứng được đã. Endgame ráp lớp rarity: Andvarius + Kalandra double-dip, Mageblood với Legacy đúng roll, Golden Charm, boots rarity — từ đây build thành farmer. Mirror tier là dual Runeseeker's corrupt pre-load Perfect rune, Andvarius roll top, Mageblood roll bốn Legacy đúng ý.

## Stat Priorities & Defenses

Con số chắc chắn của build là **rarity ~250-285%** (ledger ở trên, verify từ mod Andvarius/Legacy of Gold/Golden Charm). Phần damage và phòng thủ dưới đây là ước tính từ chain nhân — PoB2 chưa model cấu hình rarity này, nên đeo full set xong Alt-hover Arc và đọc lại số thật trong client.

- **Item Rarity:** ~250-285% (gear) + atlas node — stat headline
- **Life:** ~1,578 · **ES:** 0 (convert hết sang mana) · **Mana:** ~4,300 · **Spirit:** 501
- **Resistances:** ba res elemental cap hoặc over-cap nhờ Bismuth legacy; **Chaos kéo từ mức thủng lên gần cap** — đây là chỗ Mageblood vá tốt hơn mọi belt khác
- **Crit:** ~40% chance / ~890% multiplier · **Cast:** ~3/totem/giây
- **Str 86 / Dex 56 / Int 312** · **Power Charges:** 3

Damage engine giữ nguyên bốn tầng, nhưng stack rarity làm rơi đỉnh của hai tầng. Mana về ~4,300 vì bỏ nguồn flat mana lớn nhất (Mnemonic ring và bản Kalandra copy nó), nên Archmage as-extra tụt từ ~247% xuống ~180%. Bỏ Fox Idol của một belt quality lấy Mageblood cũng kéo total quality xuống nên damage-per-chain nhỏ lại. Ghép hai cái, single-target trần rơi khoảng 30% còn **~15-16M**. Vẫn thừa cho clear T15-16 offscreen, hụt cho pinnacle boss. Với con farm map thì đây là đánh đổi đúng: tốc độ clear ăn hơn raw damage khi mục tiêu là loot.

Phòng thủ khá lên nhờ Mageblood. Legacy of Bismuth +45% all res kéo Chaos từ mức thủng lên gần cap và over-cap ba res elemental, Legacy of Sulphur thêm consecrated ground khi đứng yên. Life vẫn mỏng ~1,578 và mana không đỡ đòn (Eldritch Battery chỉ là cơ chế cost, không phải Mind over Matter), nên EHP thực quanh ~13k, chỗ yếu nhất vẫn là phys max hit khi Strength Mote của Virtuous Barrier cạn. Cái thực sự giữ mạng là Blasphemy bóp enemy, res-shred làm enemy chết nhanh, totem chắn, và tầm offscreen.

### Performance Ratings

| Aspect | Rating (1-5) |
|---|---|
| clear_speed | 5 |
| boss_damage | 2 |
| survivability | 4 |
| mobility | 3 |
| league_start | 1 |
| budget_scaling | 5 |

## Budget & Investment

Build mirror-tier. Lớp rarity hoá ra là phần rẻ: Andvarius roll cao ~40 div/cây (~80 div cặp), Kalandra's Touch ~22 div, Golden Charm vài ex, boots rare vài chục ex tới ~1-2 div. Tiền thật nằm ở damage + belt: Runeseeker's Call ~349 div (corrupted) và Mageblood ~520 div (corrupted) là hai món không có bản budget. Cộng body/gloves/amulet/helm damage của chassis, bản đầy đủ rơi vào **~1,400-1,600 div**. Giá securable đọc 2026-06-29, quá 7 ngày nên re-check trước khi mua — đặc biệt Mageblood và Runeseeker biến động mạnh.

Power của build nhảy hai mốc riêng. Mốc damage (~800 div): Runeseeker + Split Personality Templar + Kurgal's Gaze + ~5k mana, đủ để build đứng và clear. Mốc rarity (~1,400 div trở lên): Andvarius + Kalandra + Mageblood + Golden Charm, từ đây mỗi map ra nhiều loot hơn hẳn. Dưới mốc rarity thì build vẫn clear tốt nhưng chưa phải farmer — nó chỉ là con totem clear nhanh không có magic-find.

## Failure Modes

Build làm tốt ba thứ: clear offscreen auto-target T15-16 cực nhanh, nhân loot mỗi map nhờ ~250-285% rarity, và input thấp một nút. Những chỗ nó gãy:

**Damage đủ farm nhưng hụt cho boss.** Stack rarity đổi ~30% single-target lấy magic-find, nên trần ~15-16M chỉ dư cho map clear chứ không kéo nổi pinnacle boss trong thời gian hợp lý. Đừng mang build này đi Uber pinnacle; nó là con cày map, cần boss thì mượn carry hoặc đổi sang bản dồn-damage của chassis.

**Damage engine nhạy patch.** Quality gốc của Arc giờ chỉ cộng số lần chain; toàn bộ "more damage per remaining chain" chỉ còn sống ở Gemling Advanced Thaumaturgy secondary. Không có lớp damage dự phòng nào dưới nó — một nerf vào Advanced Thaumaturgy hoặc chain damage là build sập. Vào client nhớ Alt-hover Arc sau khi lấy Advanced Thaumaturgy để xác nhận dòng "more damage per remaining chain" vẫn còn.

**One-shot physical khi Mote cạn.** Phys max hit phụ thuộc Strength Mote của Virtuous Barrier đầy; khi cạn thì đệm chỉ là Life ~1,578 ở 0% phys DR. Mageblood Bismuth vá được res elemental và chaos, nhưng phys thì không — slam pinnacle vẫn one-shot. Cách sống là giết từ tầm offscreen, không đứng vào slam.

**Map mod khắc chế.** "Players take X% as Chaos" nhẹ hơn nhờ Bismuth kéo chaos res lên, nhưng "no Mana Regeneration" (giết sustain Kurgal's Gaze + đặt totem dưới Barbaric Strength +10% cost), "Hexproof" (vô hiệu Blasphemy aura phòng thủ), "Cannot Leech" (cắt mana overflow) vẫn khắc chế nặng. Lọc waystone bỏ no-regen/Hexproof ở map device.

**Hai curse Blasphemy cần curse limit ≥ 2 từ nguồn chưa chốt.** Chạy cùng lúc Enfeeble và Temporal Chains đòi curse limit tối thiểu 2; ba keystone của build không có nguồn +1 curse. Vào client phải xác nhận nguồn nâng limit (gear/tree), nếu không một trong hai curse phòng thủ rớt im lặng.

**League start không khả thi.** Runeseeker's Call + Mageblood + Andvarius đều khóa sau drop/corrupt đặc thù và giá cao, cộng hai Lab trước khi engine quality bật. Cách chơi là level skill khác rồi transition mid-league, ráp damage trước rồi mới ráp rarity.

## Verdict

Build trả lời câu "làm sao vừa cày currency bằng rarity vừa tự map được, không cần carry." Chassis Arc Totem Gemling vốn clear tốc độ 5, gắn ~250-285% rarity vào là thành máy farm map T15-16 — đổi lại ~30% single-target nên không đụng được boss lớn. Điểm khiến chassis này gánh được rarity là Kalandra's Touch copy Andvarius: một cây rarity đếm hai lần, để dành body/gloves/amulet cho mana và quality. Giá phải trả là mirror-tier ~1,400-1,600 div, phần lớn nằm ở Runeseeker và Mageblood chứ không phải lớp rarity. Ai muốn đẩy rarity trên ~400% hoặc cần bản farmer rẻ hơn thì [Magic Find Spell Ritualist](/builds/huntress/0-5-ritualist-rarity-solo-duo) là chassis đúng hơn; build này hợp người đã thích totem một nút và muốn nó ra tiền.

## Optimization

- Mua Andvarius bản 88-95% (~40 div) thay vì floor — đây là biến số quyết định total rarity, đừng tiếc, vì Kalandra copy lại nên roll thấp bị nhân đôi cái thiệt.
- Roll Mageblood ưu tiên Bismuth + Sulphur + Gold + max-res; nếu muốn thêm rarity thì đổi max-res lấy Gold thứ hai, nhưng "chỉ một instance áp bonus" nên phần thêm chủ yếu đến từ dòng "25-50% increased effect per duplicate", không phải cộng thẳng 45%.
- Allocate đủ node rarity trên nhánh Templar và atlas trước khi than total thấp — lớp map-side này miễn phí.
- Khi vào league chạy thật, log DPS/EHP/mana/res in-client sau khi đeo full set: PoB2 chưa model cấu hình rarity nên số damage ~15-16M và mana ~4,300 ở trên là ước tính, phải verify.
- Cân Mageblood vs rare charm belt: nếu res đã cap từ chỗ khác, một rare belt hai dòng res + charm slot rẻ hơn nhiều, nhường ~520 div đó cho Runeseeker roll tốt hơn — chỉ mất 45% rarity của Legacy of Gold.

## Version History

### 2026-07-13

- Viết lại thành con farm map magic-find: gear stack ~250-285% Item Rarity (Andvarius ring 1 ~96% + Kalandra's Touch copy ~96% + Mageblood Legacy of Gold 45% + 2× Golden Charm 15% + boots rare 18%), giữ nguyên chassis damage (Runeseeker's Call +9 spell + Archmage + chain + curse/exposure). Damage trần ~15-16M (ước tính, tụt ~30% khỏi mức dồn-damage vì mana về ~4,300 và mất Fox Idol quality) — đủ clear T15-16, hụt boss. Nguồn rarity verify poedb 0.5.0 (Mageblood Mage's Legacy pool, Legacy of Gold 45%, Bismuth +45 all res, Sulphur 60% damage) + ledger Magic Find Spell Ritualist (Andvarius ~96%, Kalandra copy ~96%, Golden Charm 15%). Budget mirror-tier ~1,400-1,600 div.

## Relationships

- **related_mechanics** [Spirit và spirit reservation](/guides/spirit-and-spirit-reservation) — sáu totem reserve 450/501 spirit qua Ancestral Bond, cộng 120 spirit cho hai Blasphemy curse và 100 cho Archmage là khung spirit của build.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — Gemling Legionnaire quality double-dip, Archmage mana engine, và Mageblood magic-find trong meta 0.5.
- **alternative_to** [Magic Find Spell Ritualist](/builds/huntress/0-5-ritualist-rarity-solo-duo) — khi mục tiêu là farm rarity thuần, chassis Ritualist đẩy tới ~627% rarity và tự map được, thay vì ép totem Gemling gánh rarity mà mất mana/quality; build này dừng ~250-285% để giữ tốc độ clear.
- **competes_with** [Twister Spirit Walker](/builds/huntress/0-5-spirit-walker-twister) — cùng hạng clear-mạnh nhưng ngược triết lý: bên kia self-cast crit-freeze tự chơi, bên này totem một nút auto-target offscreen.
