---
template: templates/build-template.md
document_type: build
title: Spectre Summoner Curse Lich
status: draft
author: duocnv
created: '2026-05-30'
updated: '2026-06-10'
class: Witch
ascendancy: Lich
league: '0.5'
patch: 0.5.1
budget_tier: league-starter
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Bind Spectre
  damage_type: chaos
  playstyle: minion
  content_focus: all-content
tags:
  - witch
  - lich
  - bind-spectre
  - spectre
  - minion
  - curse
  - summoner
  - 0-5
  - poe2
---

# Spectre Summoner Curse Lich

Đây là hướng summoner đứng sau một bầy :wiki-link{url="https://www.poe2wiki.net/wiki/Spectre"} hồi sinh vĩnh viễn, dựng trên :wiki-link{url="https://www.poe2wiki.net/wiki/Lich"} để cộng một tầng damage mà các summoner Witch khác không có: spectre bắn lightning, Lich đổ chaos lên enemy bằng curse, rồi mỗi xác cursed chết lại nổ lan thành đợt chaos clear màn. Core là :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} bắt **Powered Zealot** variant Spark làm trụ damage. Ai thích cảm giác có 5-7 con tự đánh tự revive trong khi mình chỉ đứng dán curse và dodge sẽ thích build này. Archetype này sống thật trên ladder: 4.392 character toàn league đang field Spectre: Powered Zealot, trong đó 384 con là Lich — và gần như tất cả chạy spectre trong một đội minion nhiều loại chứ không phải bầy thuần, vì lý do cơ chế hẳn hoi nằm ở support Muster.

## Build Overview

Damage source là bầy spectre đồng giống — mỗi con tái hiện native skill của monster gốc, nên clear AoE đến thẳng từ skill của spectre và nhân theo số con. Đến đây engine giống hệt hướng [Infernalist Spectre Legion](/builds/witch/0-5-infernalist-spectre-legion) — cùng spectre, cùng support 0%-reservation, cùng trục Spirit. Cái khiến note này tồn tại là lớp Lich chồng lên trên.

Trục damage riêng của Lich là một chuỗi chuyển hoá chaos. Spectre hit bằng lightning; :wiki-link{url="https://www.poe2wiki.net/wiki/Necromantic_Conduit"} cấp :wiki-link{url="https://www.poe2wiki.net/wiki/Unholy_Might"} cho cả bầy (minion là Ally trong Presence) — "30% of all damage gained as extra Chaos damage" — và :wiki-link{url="https://www.poe2wiki.net/wiki/Blackened_Heart"} biến max mana thành magnitude cho buff đó. Lớp gained-as-chaos này chỉ đáng tiền khi chaos-res enemy bị kéo xuống, nên curse là damage multiplier chứ không phải utility: :wiki-link{url="https://www.poe2wiki.net/wiki/Despair"} shred chaos-res, rồi :wiki-link{url="https://www.poe2wiki.net/wiki/Rupture_the_Soul"} làm xác cursed nổ chaos lan màn. Spectre bắn lightning, mình quản chaos — đó là vòng damage Infernalist không có.

Patch 0.5.1 còn cho Lich một đòn bẩy Spirit mới. :wiki-link{url="https://www.poe2wiki.net/wiki/Eternal_Life"} không còn chặn Life Reservation, và Lineage support mới :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Communion"} chuyển Persistent skill sang reserve Life thay vì Spirit. Ghép hai cái lại: curse chạy qua Blasphemy và aura phụ đều route được sang Life pool, để dành nguyên Spirit nuôi spectre. Lich không có node Spirit trên cây ascendancy như Beidat's Will của Infernalist — tech này là câu trả lời trực tiếp cho điểm yếu đó.

Defense là ES pool chính cộng một Life pool thật, với :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} làm lớp đệm cuối ở 1 life. Live reference tốt nhất trên ladder là Ermiss, Lich Lv98 top-10 exp: Life 1.649, ES 11.286, Spirit 433, EHP 31.590, chaos res 72% — Powered Zealot trong đội skeleton hỗn hợp kèm Blasphemy + Atziri's Communion đúng tech trên. Đội lai không phải compromise mà là chủ đích: support :wiki-link{url="https://www.poe2wiki.net/wiki/Muster"} cho minion more damage theo số *loại* Reviving Minion khác nhau đang field, nên roster nhiều giống tự nó là một damage multiplier. Pattern phòng thủ phổ biến của top PZ Lich là low-life: Life đứng ở 1 sau khi reserve sạch, ES 6-14k, EHP mô phỏng 16-53k.

## Chọn spectre nào để bind

Anchor của build là :wiki-link{url="https://www.poe2wiki.net/wiki/Powered_Zealot"} — spectre số một tuyệt đối của league: 4.392 character đang field nó trong snapshot poe.ninja 2026-06-10, bỏ xa spectre đứng sau là Vaal Guard với 261. Nhưng Powered Zealot có nhiều variant trông gần giống nhau và bind nhầm là mất nguyên build:

- **Variant Spark** — cầm **spear mũi nhọn**, cast lightning orb xanh ở mọi khoảng cách, không bao giờ vào melee. Skill set gồm Spark, Spark Nova và Lightning Blast. Reserve **60 Spirit**. Đây là con cần bắt.
- **Variant melee** — cầm staff, thrust cận chiến, lightning yếu. Reserve 50 Spirit. Không phải con mình cần dù rẻ hơn.

Gem panel của spectre không hiện Spark, nên đừng tin panel — đứng quan sát animation trước khi bind: chỉ thấy orb xanh bay ra và con quái không lao vào đánh gần thì mới cast Bind Spectre. Powered Zealot xuất hiện ở Etched Ravine và The Ziggurat Refuge.

Nếu chưa tới zone đó hoặc muốn rẻ Spirit hơn, các lightning spectre khác theo poedb: :wiki-link{url="https://www.poe2wiki.net/wiki/Lost-men_Zealot"} (70 Spirit, lightning storm), :wiki-link{url="https://www.poe2wiki.net/wiki/Winged_Horror"} (70 Spirit, ball lightning), :wiki-link{url="https://www.poe2wiki.net/wiki/Vaal_Researcher"} (60 Spirit, Spark + flame wall), :wiki-link{url="https://www.poe2wiki.net/wiki/Ancient_Ezomyte"} (50 Spirit, lightning arrow) và :wiki-link{url="https://www.poe2wiki.net/wiki/Risen_Rattler"} (50 Spirit, lightning projectile). :wiki-link{url="https://www.poe2wiki.net/wiki/Vaal_Guard"} (50 Spirit, grenade physical + fire) lệch element — chỉ đáng cân nhắc nếu bỏ trục lightning-shred.

## Skill Gems & Links

Skill định danh là :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"}: cast lên xác một monster non-unique thì gem biến thành `Spectre: <tên monster>`, một reviving minion account-bound. Quality của gem chuyển thành "Minions deal 0-20% more Damage", nên luôn đẩy quality lên 20 — đó là 20% more damage free cho cả bầy.

Support trong gem Spectre được đánh giá theo skill con spectre cast, không phải theo gem Bind Spectre gốc — Powered Zealot cast Spark nên slot này ăn nguyên họ support Spell/Projectile. Bộ link là consensus của đúng 384 PZ Lich trên ladder (poe.ninja 2026-06-10): :wiki-link{url="https://www.poe2wiki.net/wiki/Wildshards"} **II** (98% dùng — chance bắn thêm một vòng projectile, biến mỗi cú Spark thành nova clear) + :wiki-link{url="https://www.poe2wiki.net/wiki/Pierce"} **III** (95% — projectile xuyên hết pack thay vì chặn ở con đầu) + :wiki-link{url="https://www.poe2wiki.net/wiki/Feeding_Frenzy"} **II** (78% — 30% more damage, minion take 15% more damage, chấp nhận được cho backline) + :wiki-link{url="https://www.poe2wiki.net/wiki/Muster"} (68% — minion more damage theo số *loại* Reviving Minion khác nhau đang field; chính support này biến đội lai thành multiplier và là lý do cơ chế khiến meta không chạy bầy thuần). Ô thứ năm chia giữa :wiki-link{url="https://www.poe2wiki.net/wiki/Vilenta's_Propulsion"} (31% — cast speed áp luôn vào projectile speed), Projectile Acceleration (~43% gộp hai bản) và :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Mastery"} (19% — +1 gem level nâng cả damage lẫn Life). Map roll ele weakness thì swap một ô sang :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Army"} cho +30% all res minion.

**Curse lane là chỗ Lich tách khỏi mọi spectre summoner khác.** :wiki-link{url="https://www.poe2wiki.net/wiki/Despair"} kéo chaos-res enemy xuống, nhân thẳng vào toàn bộ lớp Unholy Might; :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Weakness"} shred lightning-res cho phần lightning gốc của Spark. Có hai cách giữ curse uptime. Cách một là :wiki-link{url="https://www.poe2wiki.net/wiki/Incessant_Cacophony"} trên ascendancy: thêm một curse slot + curse infinite duration, dán một lần lên boss là quên luôn. Cách hai — cách ladder đang chạy — là :wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"} biến curse thành aura quanh người, rồi socket :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Communion"} vào để cả cụm reserve **Life thay vì Spirit** ("Supports Persistent Skills, making them Reserve Life instead of Spirit"); keystone tree :wiki-link{url="https://www.poe2wiki.net/wiki/Whispers_of_Doom"} cho curse thứ hai. Cách hai hands-free hoàn toàn và trả Spirit về cho bầy, đổi lại curse radius quanh mình nên phải đứng gần pack hơn.

**Aura/Buff:** Unholy Might của Necromantic Conduit là buff chủ lực, zero socket cost, chỉ cần giữ mana trên ngưỡng Low Mana. Aura phụ nếu có cũng nhét chung ổ Atziri's Communion để ăn Life reservation. **Movement:** :wiki-link{url="https://www.poe2wiki.net/wiki/Blink"} — build đứng backline, mobility chỉ để reposition sau bức tường minion.

**Main Skill (6L):** Spectre: Powered Zealot (20% quality) + Wildshards II + Pierce III + Feeding Frenzy II + Muster + flex (Vilenta's Propulsion / Minion Mastery / Esh's Radiance khi endgame).

Exclusion check: :wiki-link{url="https://www.poe2wiki.net/wiki/Esh's_Radiance"} socket được vào spectre slot — nó đánh giá theo Spark của zealot như mọi support khác, và 27/384 PZ Lich live đang chạy — nhưng đây là slot endgame thuần: Requires Level 65, drop từ Xesht, và 120% Cost & Reservation Multiplier làm mỗi con đắt thêm gần một phần tư; lắp xong phải đo xem 40% lightning-as-chaos có thắng nổi việc mất bớt một con khỏi bầy không. Atziri's Communion "Cannot Support Skills which create Minions" — chỉ dùng cho Blasphemy/aura, đừng thử nhét vào Spectre. :wiki-link{url="https://www.poe2wiki.net/wiki/Kurgal's_Leash"} cấp Unholy Might khi **Command** minion mà spectre autonomous không Command được → không apply. Unholy Might không stack — Necromantic Conduit và :wiki-link{url="https://www.poe2wiki.net/wiki/Vis_Mortis"} chỉ lấy copy mạnh nhất. Last Gasp không dùng chung với bất kỳ nguồn :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Instability"} nào (Minion Instability bypass Last Gasp, giết minion ngay). Phần extra-chaos từ Unholy Might chỉ scale với chaos modifier + enemy chaos-res, không scale lightning mods và DoT không hưởng gained-as — đây là lý do Despair là bắt buộc.

## Ascendancy

Witch 0.5 có bốn ascendancy: Infernalist, Blood Mage, Lich và Abyssal Lich (nhánh mới tách từ base Lich, thiên chaos caster — không phải nhà của spectre). Trên cây Lich, nhánh Eldritch Empowerment / Price of Power là *Spell* more-damage — vô dụng cho bầy spectre vì spectre deal Minion damage. Tám điểm dồn hết vào nhánh minion + curse:

Lab 1 — :wiki-link{url="https://www.poe2wiki.net/wiki/Necromantic_Conduit"} (qua small Mana). Đóng góp damage duy nhất của ascendancy lên bầy, lấy đầu tiên: Unholy Might áp 30% gained-as-chaos lên cả bầy cùng lúc. Đổi lại "Lose 5% of maximum Mana per Second" — lý do cần giữ engine mana.

Lab 2 — :wiki-link{url="https://www.poe2wiki.net/wiki/Blackened_Heart"}: "4% increased Magnitude of Unholy Might Buffs you grant per 100 maximum Mana". Mỗi 1000 mana là +40% magnitude. Đây là trục scaling riêng của Lich — mana-stacking trở thành stat damage cho bầy, và là lý do tree path qua max-mana node.

Lab 3 — :wiki-link{url="https://www.poe2wiki.net/wiki/Rupture_the_Soul"} (qua small Curse Area): xác cursed bị bầy giết có 33% nổ một phần tư max Life thành chaos damage — clear speed nhảy vọt mà không tốn gì ngoài curse đã dán sẵn.

Lab 4 — chọn theo cách chạy curse. Nếu curse self-cast thì :wiki-link{url="https://www.poe2wiki.net/wiki/Incessant_Cacophony"} (thêm curse + infinite duration) là default. Nếu đã đi đường Blasphemy + Atziri's Communion thì curse uptime và slot thứ hai đã có sẵn, hai điểm cuối đáng cân nhắc đổ vào :wiki-link{url="https://www.poe2wiki.net/wiki/Soulless_Form"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Eternal_Life"} — từ 0.5.1 Eternal Life cho phép Life Reservation, nên nó ăn khớp với chính tech Atziri's thay vì khoá nó: Life bị reserve + phần còn lại đứng yên dưới ES ("Your Life cannot change while you have Energy Shield"), một combo phòng thủ rất Lich. Ladder đang nghiêng hẳn về hướng này — phần lớn top PZ Lich đứng ở Life 1 sau khi reserve sạch.

## Spirit budget nuôi được bao nhiêu con

Số con = floor(tổng Spirit ÷ cost mỗi con). Powered Zealot variant Spark ăn 60 Spirit, nên 300 Spirit là 5 con, 433 Spirit như Ermiss là trần 7 con nếu dồn thuần — thực tế phải chừa Spirit cho skeleton utility nếu chạy đội lai. Nguồn Spirit xếp theo độ đáng:

- **Sceptre base** ~100 Spirit + roll "% increased Spirit" — slot Spirit lớn nhất.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Communion"} **routing** — mỗi aura/Blasphemy chuyển sang Life là chừng đó Spirit trả về bầy, free về gear.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Bones_of_Ullr"} — 30% reservation efficiency cho skill tạo Undead Minion, làm *mỗi* spectre rẻ đi; Ermiss vẫn mang đôi này ở Lv98.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Soul_Mantle"} — +75 Spirit flat trên body, đổi bằng slot ES rare.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Ventor's_Gamble"} — ring có roll Spirit + res, stack được hai chiếc.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Self_Sacrificing"} trên tree — +40% Reservation Efficiency of Minion Skills, kèm −20% efficiency cho skill không-minion; đi cặp với Atziri's routing thì downside gần như trơ vì aura đã reserve Life.
- Timeless Jewel roll reservation efficiency theo tribute là tech min-max đang lưu hành trên ladder — roll seed khi đã ổn định gear, đo trước khi commit.

## Passive Tree & Mastery

Cây passive đi vào bốn nhóm: minion damage/life, reservation efficiency, max-mana (vì mana là stat damage qua Blackened Heart) và ES pool. Phần minion damage giống hệt sibling Infernalist (xem [Infernalist Spectre Legion](/builds/witch/0-5-infernalist-spectre-legion) cho bản đồ đầy đủ): mọi node minion trên tree đều là "increased" cộng dồn, more chỉ đến từ support + Unholy Might, ưu tiên các small double-dip rồi tới notable. Đừng phí điểm vào nhánh Spell Damage start-area — spectre không hưởng Spell mods.

Max-mana node làm double duty: vừa nuôi drain 5%/giây của Necromantic Conduit, vừa nâng magnitude Unholy Might. Đây là synergy sạch nhất của cây và là lý do Lich spectre path về mana thay vì pure ES. Keystone curse :wiki-link{url="https://www.poe2wiki.net/wiki/Whispers_of_Doom"} đáng một detour khi chạy đường Blasphemy — curse thứ hai từ tree trả ascendancy point về cho nhánh Life.

Về ES, 0.5 cắt mạnh nhánh ES recharge (small "increased Recharge Rate" bị xoá, notable bị cắt sâu), nên pool dựa raw + Runic Ward + recoup thay vì recharge — context cho cả Stat Priorities lẫn Failure Modes. Late-game cân nhắc :wiki-link{url="https://www.poe2wiki.net/wiki/Necromantic_Talisman"} (toàn bộ bonus amulet áp lên Minion thay vì mình) khi amulet đã là +minion-level thuần và res đã cap từ slot khác.

## Stat Priorities & Defenses

DPS chain mỗi con: `base_hit_lightning × (1 + Σ increased_minion) × ∏(1 + more_i) × shred_multiplier × hit_rate`, với `∏ more_i` gồm Feeding Frenzy II (1.30), Bind Spectre quality (1.20) và gem level. Lớp chaos từ Unholy Might là một gained-as-extra layer song song — chỉ scale với chaos modifier + enemy chaos-res qua Despair, đừng cộng nó như more lên tổng. Tổng damage bầy = DPS mỗi con × số con.

Hai caveat số liệu phải nhớ. Một, late-game minion mang một hidden multiplier ~25-35% vs non-unique / ~20-25% vs unique từ bản fix 0.5 — **một** modifier, đừng double-count. Hai, multiplier này ẩn khỏi tooltip và PoB2 ("no longer factored into the damage numbers displayed for skills of your minions") nên mọi số hiển thị under-report ~20-35% — đây là caveat `pob_coverage: PARTIAL` cốt lõi, đo clear speed bằng thực chiến chứ đừng tin tooltip.

Defense xếp theo EHP layer order 0.5: res cap → ES pool → Life → Runic Ward → recovery. Build bỏ armour/evasion/block có chủ đích (Ermiss Lv98 armour 0, evasion 11 — vẫn EHP 31.590 nhờ ES 11.286) — physical và chaos hit ăn thẳng vào ES, bù bằng minion soak aggro + đứng xa. Chaos là trục yếu nhất vì không CI và chaos deal 2× lên ES — push chaos-res dương càng cao càng tốt, Ermiss giữ 72%. Runic Ward không ăn keyword "Defences" nên armour/eva/ES mod không tăng nó — scale qua Runic Ward Runes craft từ Remnant, và từ 0.5.1 flask :wiki-link{url="https://www.poe2wiki.net/wiki/Olroth's_Resolve"} regen được Runic Ward + cấp Guard bằng đúng lượng Ward hiện có.

### Performance Ratings

| Aspect          | Rating (1-5) |
|-----------------|--------------|
| clear_speed     | 4            |
| boss_damage     | 3            |
| survivability   | 3            |
| mobility        | 3            |
| league_start    | 3            |
| budget_scaling  | 4            |

## Gear Progression

### Leveling
Act đầu không level bằng spectre — Bind Spectre cần corpse + Spirit + gem level mà Lv1-12 chưa có cả ba. Chạy minion Int cơ bản (:wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Warrior"} tank đòn) + một spell filler. Ưu tiên vũ khí "+to Level of Minion Skills" + Spirit implicit. :wiki-link{url="https://www.poe2wiki.net/wiki/Bones_of_Ullr"} (Lv16, 23 Int) vào sớm và giữ tới endgame — reservation efficiency cho Undead Minion là enabler swarm size từ Act 1.

### Early Mapping
Mục tiêu: cap 75% ba res elemental, đủ Spirit nuôi 3-4 con, Bind Spectre quality 20. Body dùng rare ES base; idol vào sceptre cho buff toàn bầy một socket (:wiki-link{url="https://www.poe2wiki.net/wiki/Primate_Idol"} "Allies in your Presence deal 40% increased Damage", :wiki-link{url="https://www.poe2wiki.net/wiki/Rabbit_Idol"} 15% increased Spirit). Engrave Despair ngay khi có để mở lớp chaos.

### Endgame
Trục đầu tư số một là số lượng spectre, sau đó gem level (+2 helm, +3 sceptre là hai breakpoint lớn nhất) rồi minion-damage %. Body có ba hướng: rare ES thuần (đường Ermiss đi — ES pool là layer thủ duy nhất nên slot này gánh nặng nhất), :wiki-link{url="https://www.poe2wiki.net/wiki/Soul_Mantle"} +75 Spirit cho max swarm, hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Vis_Mortis"} (+ES +mana, Minions have Unholy Might vô điều kiện — gỡ phụ thuộc Presence-geometry và mana drain, đổi bằng −50% minion Life đau cho swarm reviving). Ring cân nhắc :wiki-link{url="https://www.poe2wiki.net/wiki/Ventor's_Gamble"} khi cần Spirit + res cùng slot. Vũ khí là tradeoff PoB: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Raven's_Flock"} (+111% Minion Damage + 34% reservation efficiency, Int-gated hợp Witch) vs :wiki-link{url="https://www.poe2wiki.net/wiki/Chober_Chaber"} (+50 Spirit +2-3 minion gem level, nhưng 60 Str gating trên class Int thuần) vs rare sceptre +3 minion level + % Spirit.

### Mirror Tier (BiS)
Stack ba đòn bẩy Spirit cùng lúc: flat (Chober +50, Soul Mantle +75, sceptre base ~100), % increased (:wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} 54%, Rabbit Idol 15%), reservation efficiency (Raven's Flock 34%, Bones of Ullr, Self Sacrificing, Atziri's routing). Reservation efficiency thường mạnh nhất per-point vì làm mọi con rẻ đi. Khi bầy đã chạm trần thì tiền đổ vào mana-stack cho Blackened Heart + chaos modifier cho lớp gained-as + một rare jewel double-effect qua :wiki-link{url="https://www.poe2wiki.net/wiki/Crystalline_Phylactery"} — con thứ tám hiếm khi đáng hơn các trục đó. Lớp chaos cuối cùng khi Spirit đã dư hẳn là Esh's Radiance vào ô flex: 40% lightning-as-chaos cho Spark đổi bằng 120% reservation, đo uplift trước khi commit.

## Flasks

Một :wiki-link{url="https://www.poe2wiki.net/wiki/Mana_Flask"} là panic-button thật sự của build: kéo mana lên trên ngưỡng Low Mana giữ Unholy Might uptime khi drain 5%/giây cộng spike đẩy mana xuống. Life flask slot dành cho một trong hai unique: :wiki-link{url="https://www.poe2wiki.net/wiki/Olroth's_Resolve"} (từ 0.5.1 regen Runic Ward + Guard theo Ward hiện có — lớp đệm cuối của build thành chủ động kích được) hoặc giữ vessel cho :wiki-link{url="https://www.poe2wiki.net/wiki/Umbilicus_Immortalis"} ("Minions cannot Die while affected by a Life Flask") — câu trả lời trực tiếp cho boss AoE xoá bầy; nếu đã commit Eternal Life thì Life Flask không heal được mình nữa, nó thuần là minion-tech. Còn lại một flask kháng ailment (freeze/stun — không CI nên không miễn gì) và một flask movement. Đừng giả định :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"} bật flask như POE1 — Mageblood 0.5 chỉ là charm-slot belt.

## Leveling Notes

Act 1-2 chơi bằng minion Int cơ bản — Skeletal Warrior tank + spell filler. Cầu nối engine leveling thật là :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Arsonist"}: reviving minion vừa làm body phụ vừa cho nút bom "Command: Explosive Demise" dọn pack — nguồn clear chính suốt Act 2, và dùng *cùng bộ support* với Bind Spectre sau này để khỏi farm gem riêng.

Spirit milestone: :wiki-link{url="https://www.poe2wiki.net/wiki/Gembloom_Skull"} (+30 Spirit, Freythorn Act 1) rồi :wiki-link{url="https://www.poe2wiki.net/wiki/Gemrot_Skull"} (+30 Spirit, The Azak Bog Act 3). Pivot sang spectre khi đủ Spirit + tới zone có con đáng bắt: hai con 50-Spirit lên sớm được là :wiki-link{url="https://www.poe2wiki.net/wiki/Risen_Rattler"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Ancient_Ezomyte"}, rồi đổi sang Powered Zealot variant Spark khi tới Etched Ravine / The Ziggurat Refuge — nhớ quy trình quan sát animation ở mục chọn spectre, bind nhầm con melee là phải đi bắt lại. Re-bind bằng disenchant gem cũ rồi bắt con mới. Lab đầu lấy Necromantic Conduit ngay để bật Unholy Might sớm.

## Budget & Investment

Sàn để chạy build thấp — damage đến từ gem level + hidden multiplier free + Unholy Might một node ascendancy, không cần unique đắt để khởi động. Vài chaos đủ cap res + sceptre minion-level + Primate/Rabbit Idol để vào maps, engrave Despair cho lớp chaos. Breakpoint đầu là Bones of Ullr + body Spirit/ES; breakpoint divine là khi gói Unholy Might mở hết — mana-stack + Blackened Heart đẩy magnitude, cộng Atziri's Communion route aura sang Life — đây là sweet spot kinh tế, nơi Lich tách khỏi Infernalist. Mirror tier (Raven's Flock, jewel double-effect, swarm trần) là min-max marginal — sweet spot thật là divine breakpoint.

## Resources

- **Live reference:** [Ermiss — Lich Lv98 trên poe.ninja](https://poe.ninja/poe2/builds/runesofaldur/character/Ermiss-7734/Ermiss) — spectre Powered Zealot trong đội skeleton lai, Blasphemy + Atziri's Communion, ES 11.286 / EHP 31.590 / Spirit 433.
- **Ladder filter:** [Lich + Spectre: Powered Zealot](https://poe.ninja/poe2/builds/runesofaldur?class=Lich&skills=Spectre%3A+Powered+Zealot) — 384 character live để soi gear/tree/support, top dồn ở Lv97-98.
- **Guide archetype:** [Storm Mage Lich — maxroll](https://maxroll.gg/poe2/build-guides/storm-mage-lich-build-guide) — cùng họ lightning minion Lich với Powered Zealots, tham khảo tree/gear layout.

## Failure Modes

Trước khi nói chỗ gãy: build làm tốt ba thứ — clear speed cao nhờ AoE native của nhiều con cộng explosion chaos từ Rupture the Soul, ease-of-play đỉnh vì pure summoner zero aim, và một trục chaos riêng mà spectre summoner khác không có. Đổi lại nó có những lỗ sau.

**Map mod hostile.** Mod "minions deal no/less damage" cắt thẳng nguồn damage duy nhất — reroll waystone gặp mod này. "Less recovery rate" làm hỏng chu kỳ revive, bầy mỏng dần giữa pack. "No regen" siết mana → mất uptime Necromantic Conduit → mất more-multiplier lớn nhất. Nền tảng: ES recharge bị cắt sâu từ 0.5 nên pool ES — lớp thủ duy nhất — sustain yếu, đừng mang spreadsheet recharge cũ vào.

**One-shot encounter và lỗ chaos.** Sustained boss AoE wipe bầy nhanh hơn revive cycle, để lại quãng trống damage khi cả bầy cùng revive — Umbilicus Immortalis là câu trả lời tốt nhất. Phía player: chaos hit là khắc tinh structural — không CI, chaos deal 2× lên ES, max-hit chaos thấp hơn nhiều max-hit elemental; physical slam cũng ăn thẳng ES vì zero armour. Death-spiral cần để ý: ES cạn đúng lúc mana spike → tụt Low Mana → Unholy Might tắt giữa pha nguy hiểm nhất.

**Spirit floor và rủi ro bind nhầm.** Day-1 sceptre base ~100 Spirit chỉ nuôi 1-2 con 60-Spirit — "bầy 5-7 con" là outcome của gear floor (Bones of Ullr + body Spirit + Atziri's routing), không phải league-start reality; engine spectre còn dead tới khi qua được Act 3. Cộng thêm rủi ro thao tác: Powered Zealot có variant melee nhìn gần giống variant Spark, bind nhầm là damage tụt thẳng và phải đi bắt lại — lỗi này đã đốt thời gian của rất nhiều người trong tuần đầu league.

**Meta reality.** Powered Zealot sống khoẻ trên ladder (4.392 character đang field) nhưng bầy spectre *thuần* một giống thì không ai top-exp chạy — cấu hình sống là spectre trong đội minion lai ăn Muster. Chạy bầy thuần là đánh đổi multiplier Muster lấy identity: ít nhân chứng để học theo, mọi số phải tự đo.

**Patch sensitivity.** Build cưỡi hidden minion multiplier từ bản fix 0.5 — nerf target hiển nhiên nhất nếu summoner over-perform; re-nerf là gut cả build này lẫn sibling Infernalist. 0.5.1 không đụng gì vào minion/spectre/curse nên hiện tại an toàn, nhưng tech Atziri's Communion + Eternal Life mới một patch tuổi — nếu GGG đánh giá nó cho Lich quá nhiều Spirit free, chỗ bị sửa sẽ là một trong hai đầu đó.

## Verdict

Spectre Lich 0.5 là build niche có thật, không phải paper-craft: spectre Powered Zealot live trên ladder, tech Spirit của 0.5.1 trả lời đúng điểm yếu cố hữu của Lich, và lớp curse-chaos vẫn là thứ không ascendancy summoner nào khác có. Đường vào an toàn nhất là dạng lai — spectre làm trụ damage trong đội minion hỗn hợp như Ermiss đang chạy — rồi dồn dần về bầy thuần khi Spirit qua mốc ~350-400. Hợp với người thích playstyle walking-simulator và chấp nhận tự đo số thay vì chép guide; ngưỡng đầu tư để chạy đúng như mô tả là divine breakpoint (mana-stack + Bones of Ullr + body Spirit/ES), không phải day-1.

## Changelog

### 2026-06-10
- Rewrite theo live data ngày 12 của league (poe.ninja snapshot 2026-06-10, poedb 0.5.0, patch notes 0.5.1). Anchor spectre chốt Powered Zealot variant Spark 60 Spirit — 4.392 character toàn ladder field nó, 384 trên Lich; Doryani's Elite hoá ra là cannon napalm fire nên rời vai trò lightning anchor; thêm hướng dẫn phân biệt variant spear/staff. Bộ link đổi theo consensus live: Wildshards II + Pierce III + Feeding Frenzy II + Muster thay bộ minion-generic (support đánh giá theo Spark của spectre); Esh's Radiance từ core endgame thành option 7%-adoption với cost framing 120% reservation. Thêm tech 0.5.1: Atziri's Communion + Eternal Life route reservation sang Life giải phóng Spirit (pattern low-life Life 1 phổ biến top ladder); Olroth's Resolve regen Runic Ward. Sửa số ascendancy Witch thành bốn (Abyssal Lich mới). Thêm live reference Ermiss Lv98. Performance league_start 4→3.

### 2026-05-30
- Initial draft (research-derived, pre-league theorycraft) từ patch 0.5.0 verbatim + wiki mirror + cross-check sibling Infernalist Spectre Legion.

## Relationships

- **alternative_to** [Infernalist Spectre Legion](/builds/witch/0-5-infernalist-spectre-legion) — cùng engine spectre, khác ascendancy: Infernalist thiên league-start floor + Spirit (Beidat's Will) + ES defense, Lich thiên endgame ceiling qua chaos-conversion + mana-scaling.
- **alternative_to** [Unearth Bone Construct Mass Summoner](/builds/witch/0-5-bone-construct-mass-summoner-lich) — cùng Lich nhưng minion physical mass-summon, đối trọng spectre swarm.
- **related_mechanics** [Spirit Walker companion beast hunt](/guides/spirit-walker-companion-beast-hunt) — cơ chế minion/companion + spirit reservation nền tảng cho mọi summoner 0.5.
- **related_mechanics** [Energy Shield recovery](/guides/energy-shield-recovery) — giải thích nerf ES recharge 0.5 mà build phải path qua cẩn thận.
- **references** [New unique items](/guides/0-5-new-unique-items) — Vis Mortis, Soul Mantle, Raven's Flock, Bones of Ullr và các unique 0.5 build dùng.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — overview league 0.5.0 chứa context endgame + Remnant/Runic Ward + meta build đang nghiên cứu.
