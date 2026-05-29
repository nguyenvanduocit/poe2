---
template: templates/build-template.md
document_type: build
title: Spectre Summoner Curse Lich
status: draft
author: duocnv
created: '2026-05-30'
updated: '2026-05-30'
class: Witch
ascendancy: Lich
league: '0.5'
patch: 0.5.0
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

Đây là hướng summoner đứng sau một bầy :wiki-link{url="https://www.poe2wiki.net/wiki/Spectre"} hồi sinh vĩnh viễn, nhưng được dựng trên :wiki-link{url="https://www.poe2wiki.net/wiki/Lich"} để cộng thêm một tầng damage mà không ascendancy Witch nào khác chạm tới: spectre bắn lightning, Lich đổ chaos lên enemy bằng curse, rồi mỗi xác cursed chết lại nổ lan thành đợt chaos clear. Ai thích cảm giác có 5-6 con tự đánh tự revive trong khi mình chỉ đứng dán curse và dodge sẽ thích build này. Core là :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} bắt một spectre lightning làm trụ damage, còn Lich biến mỗi cú hit của bầy thành một đòn chaos hai-lớp — chơi tốt cả map lẫn boss.

## Build Overview

Damage source là bầy spectre đồng giống — mình field 5-6 con cùng một loại spectre lightning tốt nhất, mỗi con tái hiện native skill (:wiki-link{url="https://www.poe2wiki.net/wiki/Spark"} / orb lightning) của monster gốc, nên clear AoE đến thẳng từ skill của spectre, nhân lên theo số lượng con. Đến đây thì engine giống hệt hướng [Infernalist Spectre Legion](/builds/witch/0-5-infernalist-spectre-legion) — cùng spectre, cùng support 0%-reservation, cùng trục Spirit, cùng cách lên gem level. Cái khiến note này tồn tại không phải engine spectre, mà là cái Lich chồng lên trên nó.

Trục damage riêng của Lich là một chuỗi chuyển hoá chaos. Spectre hit bằng lightning; :wiki-link{url="https://www.poe2wiki.net/wiki/Necromantic_Conduit"} cấp :wiki-link{url="https://www.poe2wiki.net/wiki/Unholy_Might"} cho cả bầy (minion là Ally trong Presence) — "30% of all damage gained as extra Chaos damage"; và :wiki-link{url="https://www.poe2wiki.net/wiki/Esh's_Radiance"} (Lineage support có tag Minion) cộng thêm "40% of Lightning Damage as Extra Chaos". Hai lớp gained-as-chaos này chỉ thực sự đáng tiền khi enemy chaos-res bị kéo xuống — và đó là lý do mình curse: :wiki-link{url="https://www.poe2wiki.net/wiki/Despair"} shred chaos-res, :wiki-link{url="https://www.poe2wiki.net/wiki/Incessant_Cacophony"} giữ curse vĩnh viễn không cần recast, rồi :wiki-link{url="https://www.poe2wiki.net/wiki/Rupture_the_Soul"} làm xác cursed nổ chaos lan màn. Spectre bắn lightning, mình quản chaos — đó là vòng damage Infernalist không có.

Defense là ES pool chính cộng một Life pool thật, neo bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Soulless_Form"} (biến Life thành mana nuôi curse-engine) và keystone :wiki-link{url="https://www.poe2wiki.net/wiki/Eternal_Life"}, với :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} làm lớp đệm cuối ở 1 life. Mobility đến từ chính cái backline — mình hiếm khi đứng trong tầm đánh. Constraint xuyên suốt vẫn là **Spirit**: mỗi spectre reserve spirit theo sức mạnh monster gốc, và Lich là summoner nghèo Spirit nhất trong ba ascendancy Witch (không có node spirit ascendancy), nên gear/tree gần như đều xoay quanh việc nặn thêm spirit để nuôi nhiều con hơn.

## Skill Gems & Links

Skill định danh là :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"}: cast lên xác một monster non-unique thì gem biến thành `Spectre: <tên monster>`, một reviving minion account-bound. Quality của gem chuyển thành "Minions deal 0-20% more Damage", nên luôn đẩy quality lên 20 — đó là 20% more damage free cho cả bầy, và là một trong số rất ít *more* multiplier có được. Spirit reservation thay đổi theo sức mạnh monster bound: con càng khủng càng đắt spirit, đây chính là cây đòn bẩy — chọn spectre lightning mạnh thì mỗi điểm spirit đổi ra nhiều damage chaos hơn.

Triết lý link 6 ô của một bầy bị giới hạn bởi spirit là **more-damage-trên-mỗi-điểm-spirit**, không phải more% thô: bất kỳ support nào có Cost & Reservation Multiplier đều làm *mỗi* spectre đắt thêm, tức bớt một con khỏi bầy. Vì thế core ưu tiên support 0% reservation multiplier. Bộ link core dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Mastery"} (+1 gem level, không downside, không reservation multiplier — level nâng cả damage lẫn Life của spectre) + :wiki-link{url="https://www.poe2wiki.net/wiki/Feeding_Frenzy"} bản **II** (30% more damage, minion chỉ take 15% more damage thay vì 20% như bản I — bản II strictly tốt hơn cho backline; đây là support more-damage *duy nhất* attach được vào Bind Spectre vì gem chỉ có tag Minion + Persistent) + :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Army"} (+30% all ele res cho minion, sống qua map ele weakness) + :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"} (minion chết vẫn đánh tiếp 4 giây, và 0.5 vá để cửa sổ này overkill-proof — không còn die do nhận damage vượt max Life). Ô AoE cho clear dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area_Support"} (more AoE).

Lớp damage chaos endgame là :wiki-link{url="https://www.poe2wiki.net/wiki/Esh's_Radiance"} — Lineage support "Gain 40% of Lightning Damage as Extra Chaos Damage", và quan trọng là nó **có tag Minion** nên support được lên Bind Spectre. Đây là layer extra-chaos lớn nhất trên một spectre lightning. Nhưng nó là slot **endgame**, không phải league-start: nó mang 120% Cost & Reservation Multiplier (ăn nguyên một con khỏi bầy vì spirit cost tăng vọt), Requires Level 65, và chỉ rớt từ Xesht, We That Are One (uber breach boss). Trước khi có Esh's, để ô đó cho một support 0%-reservation (Magnified Area cho clear, hoặc một utility/defensive gem cho boss).

**Curse lane — đây là chỗ Lich tách khỏi mọi spectre summoner khác.** Chuỗi gained-as-chaos ở Build Overview là dead weight nếu enemy chaos-res không bị shred, nên mình chạy curse như một damage multiplier chứ không phải utility: :wiki-link{url="https://www.poe2wiki.net/wiki/Despair"} kéo chaos-res enemy xuống sâu, nhân thẳng vào toàn bộ lớp Unholy Might + Esh's. :wiki-link{url="https://www.poe2wiki.net/wiki/Incessant_Cacophony"} (node Lich) cho "apply an additional Curse" + "Curses you inflict have infinite Duration" — nên dán Despair một lần lên boss là nó shred chaos-res cả trận, zero recast tax, và mình có slot thứ hai cho :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Weakness"} shred lightning-res (phần lightning gốc của Spark). Hai curse này còn nuôi :wiki-link{url="https://www.poe2wiki.net/wiki/Rupture_the_Soul"}: xác cursed mà bầy giết có 33% nổ thành chaos, nên curse làm cùng lúc ba việc — shred lightning-res, shred chaos-res, và mồi cho explosion clear.

**Aura/Buff:** Unholy Might của Necromantic Conduit chính là "aura" chủ lực — nó là Presence buff tự phủ lên bầy ở zero socket cost, chỉ cần giữ mana trên ngưỡng Low Mana. Spirit dư sau khi nuôi bầy đổ vào một herald/aura lightning hợp element, chốt sau khi tính spirit còn lại trong PoB.

**Movement:** :wiki-link{url="https://www.poe2wiki.net/wiki/Blink"} của Witch — build đứng backline nên mobility chỉ để reposition sau bức tường minion.

**Main Skill (6L):** Summon Spectre (Bind Spectre, 20% quality) + Minion Mastery + Feeding Frenzy II + Elemental Army + Last Gasp + ô flex (Magnified Area cho clear pre-Esh's / Esh's Radiance khi đã farm được Xesht).

Exclusion check: Esh's Radiance (120% reservation multiplier — endgame slot, không phải league-start); :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Splash"} (chỉ hỗ trợ minion Strike, spectre cast/projectile không kích hoạt); :wiki-link{url="https://www.poe2wiki.net/wiki/Kurgal's_Leash"} (cấp Unholy Might khi **Command** minion, mà spectre là minion autonomous không Command được → không apply); Unholy Might không stack (Necromantic Conduit và :wiki-link{url="https://www.poe2wiki.net/wiki/Vis_Mortis"} chỉ lấy copy mạnh nhất, không cộng dồn — Blackened Heart scale copy đang active, không cho phép hai buff cùng tồn tại); Last Gasp **không** dùng chung với bất kỳ nguồn :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Instability"} nào (0.5 vá để Minion Instability bypass Last Gasp, giết minion ngay lập tức); phần extra-chaos từ Unholy Might + Esh's chỉ scale với chaos modifier + enemy chaos-res, **không** scale với lightning mods của Spark gốc, và DoT không hưởng gained-as — đây là lý do curse (shred chaos-res) là bắt buộc, không phải optional.

## Ascendancy

Lich có đúng 8 điểm (4 lab × 2), và một nửa cây của nó (nhánh Eldritch Empowerment / Price of Power) là *Spell* more-damage — vô dụng cho một bầy spectre vì spectre deal Minion damage, không phải Spell damage của player. Nên allocation phải chính xác: lấy nhánh damage-cho-minion + curse, bỏ hẳn nhánh spell.

Lab 1 — :wiki-link{url="https://www.poe2wiki.net/wiki/Necromantic_Conduit"} (qua small Mana). Đây là đóng góp damage *duy nhất* của ascendancy lên bầy, nên lấy đầu tiên: "you and Allies in your Presence have Unholy Might" áp 30% gained-as-chaos lên cả 5-6 spectre cùng lúc, một more-multiplier toàn bầy chỉ tốn một node. Đổi lại "Lose 5% of maximum Mana per Second" — đây là lý do cần engine mana (xem Lab 4). Khác với hướng [Unearth Bone Construct](/builds/witch/0-5-bone-construct-mass-summoner-lich), spectre sau khi summon không tốn mana để duy trì, nên áp lực mana thấp hơn, cho phép bật damage-aura sớm.

Lab 2 — :wiki-link{url="https://www.poe2wiki.net/wiki/Blackened_Heart"} (nối liền sau Conduit, không tốn small prerequisite mới): "4% increased Magnitude of Unholy Might Buffs you grant per 100 maximum Mana". Mỗi 1000 mana là +40% magnitude trên Unholy Might. Đây là trục scaling riêng của Lich — nó biến mana-stacking từ "chỉ để cast/sustain" thành một stat damage cho bầy. Đây là lý do build path qua max-mana node thay vì ES thuần.

Lab 3 — :wiki-link{url="https://www.poe2wiki.net/wiki/Rupture_the_Soul"} (qua small Curse Area): "Cursed Enemies killed by you, or by Allies in your Presence, have a 33% chance to explode, dealing a quarter of their maximum Life as Chaos damage". Spectre kill cursed pack → nổ dây chuyền chaos → clear speed tăng vọt mà không tốn gì ngoài curse đã dán sẵn. Lấy sau damage vì ở campaign single-target quan trọng hơn explode-chaining.

Lab 4 — :wiki-link{url="https://www.poe2wiki.net/wiki/Incessant_Cacophony"} (nối sau Rupture the Soul) cho map/boss smoothness: "apply an additional Curse" + "Curses you inflict have infinite Duration". Hai curse stack được (Despair shred chaos-res + Elemental Weakness shred lightning-res) và infinite-duration nghĩa là dán một lần rồi quên — đúng tinh thần walking-simulator. Điểm thứ tám có thể đổi sang :wiki-link{url="https://www.poe2wiki.net/wiki/Crystalline_Phylactery"} (jewel socket thứ hai, 100% increased effect — downside "50% more mana cost if no ES" trơ vì build luôn giữ ES) khi muốn min-max một rare jewel minion-damage/spirit.

:wiki-link{url="https://www.poe2wiki.net/wiki/Soulless_Form"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Eternal_Life"} là hai node defensive/engine nằm trên nhánh Life — mình lấy chúng *khi* commit defensive identity Life/ES hybrid endgame (xem Stat Priorities). Vì chỉ có 8 điểm, đây là tradeoff thật với cặp curse (Rupture/Incessant): build damage-max dồn cả 8 điểm vào Conduit→Blackened Heart→Rupture→Incessant và dựa thuần ES pool + minion soak aggro; build muốn engine mana ổn định hơn đổi Incessant lấy Soulless Form. Default cho smoothness là cặp curse, vì spectre ngốn ít mana sau khi summon nên Conduit drain sustain được bằng mana regen + pool conventional.

## Passive Tree & Mastery

Cây passive đi vào bốn nhóm: **minion damage/life**, **reservation efficiency** (trục Spirit thật của tree), **max-mana** (vì mana là stat damage qua Blackened Heart), và **ES pool** cho lớp thủ.

Phần minion damage giống hệt sibling Infernalist nên không lặp lại dài ở đây (xem [Infernalist Spectre Legion](/builds/witch/0-5-infernalist-spectre-legion) cho bản đồ đầy đủ). Tóm tắt: **mọi node minion damage trên cây đều là "increased" (cộng dồn), không có "more" nào** — more chỉ đến từ support + Unholy Might + minion bug-fix. Ưu tiên các small double-dip vì chúng scale hai bucket cùng lúc (Sentinels 10%+10% ×5, Comradery notable 30%+30%), rồi tới các notable minion damage. Đừng phí điểm vào nhánh Spell Damage start-area — spectre không hưởng Spell mods.

Trục Spirit của tree **không phải** một "spirit cluster" — không có cluster như vậy. Spirit headroom đến từ gear/unique; cái tree cho được là **reservation efficiency**, làm *mỗi* spectre rẻ đi (gián tiếp thêm con). :wiki-link{url="https://www.poe2wiki.net/wiki/Self_Sacrificing"} cho "+40% Reservation Efficiency of Minion Skills" (kèm "-20% reservation efficiency of Skills" áp lên skill không-minion như aura — cân với mọi aura reserved trước khi lấy). Đây là trục đặc biệt quan trọng với Lich vì Lich nghèo Spirit nhất ba ascendancy: cùng spectre, Lich field bầy nhỏ hơn Infernalist (vốn có node spirit), nên reservation-efficiency node và support 0%-multiplier là bắt buộc.

Max-mana node làm **double duty** trên build này: chúng vừa nuôi drain 5%/giây của Necromantic Conduit, vừa nâng magnitude Unholy Might qua Blackened Heart. Đây là synergy sạch nhất của cây — một lý do thật để Lich spectre path về mana thay vì pure ES.

Về ES, build path qua maximum-ES nhưng phải nhớ 0.5 cắt mạnh nhánh ES recharge: small "increased ES Recharge Rate" bị **xoá hẳn**, thay bằng "faster start" giá thấp (6% từ 15%), và nhiều notable bị cắt sâu. Recharge-based ES sustain yếu hơn 0.4 đáng kể — đây là context cho Stat Priorities và Failure Modes, build dựa pool raw + Runic Ward + recoup thay vì recharge.

Một keystone đáng cân nhắc late-game cho summoner thuần: :wiki-link{url="https://www.poe2wiki.net/wiki/Necromantic_Talisman"} ("toàn bộ bonus từ Amulet áp lên Minion thay vì mình") route nguyên một amulet +minion-level/minion-damage vào bầy — nhưng nó tước phần res/attribute phòng thủ của amulet khỏi player, nên cân nhắc kỹ. PoB làm nguồn allocation chính xác; mastery node lưu stats rỗng trong export nên log số thật khi vào league.

## Stat Priorities & Defenses

Chưa có sim PoB2 0.5 public cho hướng này tại ngày league start, nên không bịa một con số headline. Đây là chuỗi nhân damage symbolic để tự kiểm trong game, kèm priority list cho defense:

- **DPS chain (mỗi spectre):** `base_hit_lightning × (1 + Σ increased_minion_dmg) × ∏(1 + more_i) × pen/exposure × hit_rate`, với `∏ more_i` gồm Feeding Frenzy II (1.30), Bind Spectre quality (1.20), gem level, và minion bug-fix. Lớp chaos (Unholy Might + Esh's) là một gained-as-extra parallel layer — **không** phải +70% more lên tổng damage: nó chỉ scale với chaos modifier + enemy chaos-res (qua Despair), nên đừng quote "+70% more". Tổng damage bầy = `DPS_mỗi_spectre × số_spectre`.
- **Minion bug-fix — KHÔNG double-count:** patch 0.5 sửa một bug cũ, làm late-game **~25-35% more vs non-unique / ~20-25% more vs unique** — một modifier, dùng magnitude ~1.25-1.35 (trash) / ~1.20-1.25 (boss), không cộng hai số. Đây là buff chung với Infernalist, không phải Lich-specific.
- **Buff này ẨN khỏi tooltip:** patch ghi "no longer factored into the damage numbers displayed for skills of your minions" → PoB2 và tooltip *under-report* damage thật ~20-35%. Đây là caveat `pob_coverage: PARTIAL` cốt lõi — đừng tin số tooltip cho clear-speed math.
- **Spirit budget:** trục then chốt, `số_spectre = floor(total Spirit / spirit_cost_mỗi_con)`. Lich không có node spirit ascendancy nên dựa hoàn toàn gear: base sceptre (~100), :wiki-link{url="https://www.poe2wiki.net/wiki/Soul_Mantle"} (+75 Spirit ở 0.5), :wiki-link{url="https://www.poe2wiki.net/wiki/Chober_Chaber"} (+50 Spirit), % increased Spirit + reservation efficiency từ unique/tree.
- **Energy Shield / Life:** ES là pool chính; Life pool thật (~1.5-2.5k) làm tầng hai + nhiên liệu cho Soulless Form. **Chaos là trục EHP yếu nhất** — không CI nên chaos-res ~0% và chaos deal 2× lên ES, nên push chaos-res dương càng cao càng tốt.
- **Resistances:** cap 75% Fire/Cold/Lightning trước maps; Chaos res là layer thật (vì không CI) — push dương vì spectre play đứng gần pack.

### EHP layer order

Theo EHP layer order POE2 0.5+: armour → evasion → block → max res → ES/Life pool → Runic Ward → recovery. Build này **bỏ armour/evasion/block có chủ đích** (Int caster summoner, không stack defence physical) — physical/chaos hit ăn thẳng vào ES, đây là weak axis có ý thức, bù bằng minion soak aggro + đứng xa. Chuỗi hit thực tế: res cap → ES pool → (Soulless Form cho 10% damage bypass ES, nhưng Eternal Life "Life cannot change while you have ES" khiến phần bypass đó bị ignore tới khi ES cạn ≈ ~10% less damage taken) → khi ES cạn, phần dư spill vào Life → ở 1 life, :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} kích hoạt làm buffer cuối, hồi độc lập. Lưu ý: keyword "Defences" KHÔNG buff Runic Ward — armour/eva/ES mod không tăng nó, phải scale qua Runic Ward Runes (craftable từ Remnant) + item như :wiki-link{url="https://www.poe2wiki.net/wiki/Eventide_Petals"} (+32) hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Svalinn"} shield (+50-100).

Toàn bộ con số tuyệt đối (ES, EHP, DPS/giây) ở mức **LOW confidence** cho tới khi materialize character + chạy PoB2 0.5.

### Performance Ratings

| Aspect          | Rating (1-5) |
|-----------------|--------------|
| clear_speed     | 4            |
| boss_damage     | 3            |
| survivability   | 3            |
| mobility        | 3            |
| league_start    | 4            |
| budget_scaling  | 4            |

## Resources

Chưa có PoB2 0.5 sim public cho character thật của hướng này tại ngày league start — sẽ gắn link PoB sau khi materialize character và xuất từ PoB2 fork hỗ trợ 0.5.

- **PoB:** _(sẽ cập nhật sau khi build vào league + PoB2 0.5 ra số)_
- **Video guide:** [GhazzyTV — Powered Zealots Spectre Full Guide](https://www.youtube.com/watch?v=OqUeT7FEwpo) (tham khảo playstyle archetype; không quote số, các claim "winner min-max" chưa verify được)

## Gear Progression

### Leveling
Act đầu **không** level bằng spectre — Bind Spectre cần corpse non-unique + Spirit + gem level mà Lv1-12 chưa có cả ba. Chạy minion Int cơ bản (:wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Warrior"} tank đòn) + một spell filler tự cast. Ưu tiên vũ khí có "+to Level of Minion Skills" + Spirit implicit. Boots vào sớm và giữ tới endgame là :wiki-link{url="https://www.poe2wiki.net/wiki/Bones_of_Ullr"} (Lv16, 23 Int — qua dễ): +reservation efficiency cho skill tạo Undead Minion (áp cho spectre) + ES/Life/Mana — enabler swarm size ngay từ Act 1.

### Early Mapping
Mục tiêu cap 75% ba res elemental + đủ Spirit nuôi 3-4 spectre + Bind Spectre quality lên 20. Body slot dùng rare ES base (0.5 cho ES từ item nhiều hơn ~8% ở Lv65); idol vào sceptre cho buff toàn bầy chỉ một socket (:wiki-link{url="https://www.poe2wiki.net/wiki/Primate_Idol"} "Allies in your Presence deal 40% increased Damage", :wiki-link{url="https://www.poe2wiki.net/wiki/Rabbit_Idol"} 15% increased Spirit). Engrave Despair ngay khi có để bắt đầu shred chaos-res cho lớp gained-as.

### Endgame
Trục đầu tư số một là **số lượng spectre** (mỗi con là một bản sao toàn bộ damage chain), sau đó là gem level và minion-damage %. Giữ Bones of Ullr (reservation efficiency Undead). Body slot có hai hướng: :wiki-link{url="https://www.poe2wiki.net/wiki/Vis_Mortis"} (Lv58, 92 Int: +70-100% ES, +70-100 Mana, **Minions have Unholy Might** vô điều kiện, đổi lại -50% minion Life) cho phép lấy Unholy Might rảnh tay khỏi Presence-geometry + mana drain của Conduit, và +max-mana nuôi Blackened Heart — nhưng -50% minion Life đau cho swarm reviving (bù bằng Last Gasp + gem level); hoặc Soul Mantle (+75 Spirit) cho max swarm size. Vũ khí là tradeoff PoB: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Raven's_Flock"} (Perching Staff Lv70, +24 Int: +111% increased Minion Damage + 34% reservation efficiency + cast speed — Int-gated hợp Witch) vs Chober Chaber (Two-Hand Mace, +50 Spirit + +2-3 minion gem level, nhưng **60 Str gating** trên class Int thuần là chi phí thật).

### Mirror Tier (BiS)
Stack tối đa ba đòn bẩy Spirit (đừng double-count): flat (Chober +50, Soul Mantle +75, sceptre base ~100), % increased (:wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} 54%, Rabbit Idol 15%), reservation efficiency (Raven's Flock 34%, Bones of Ullr cho Undead). Reservation efficiency thường mạnh nhất per-point vì làm *mọi* spectre rẻ đi. Damage layer cuối là Esh's Radiance (Xesht-gated, 120% reservation — ăn một con đổi lấy 40% lightning-as-chaos toàn bầy) và một rare jewel double-effect cho Crystalline Phylactery (jewel non-unique basic, "increased Minion Damage" + "increased Spirit"). Diminishing returns đến khi bầy đã đầy — lúc đó tiền đổ vào minion damage % + chaos scaling (để lớp gained-as-chaos đáng tiền) hơn là con thứ bảy.

## Flasks

Build đi ES/Life hybrid nên flask nghiêng về sustain + utility. Một :wiki-link{url="https://www.poe2wiki.net/wiki/Mana_Flask"} **genuinely relevant** ở đây (khác hẳn variant Infernalist không pool mana): nó là panic-button kéo mana lên trên ngưỡng Low Mana, giữ Unholy Might uptime khi drain 5%/giây + spike đẩy mana xuống. Một :wiki-link{url="https://www.poe2wiki.net/wiki/Life_Flask"} giữ làm vessel cho :wiki-link{url="https://www.poe2wiki.net/wiki/Umbilicus_Immortalis"} ("Minions cannot Die while affected by a Life Flask" + "Your Life Flask also applies to your Minions") — câu trả lời trực tiếp cho failure mode boss AoE xoá bầy; lưu ý nếu commit Eternal Life thì Life Flask không còn heal Life khi còn ES, nên nó thuần là minion-tech. Còn lại: một ES flask burst-restore (bù recharge yếu), một flask kháng ailment (freeze/stun — vì không CI nên không miễn nhiễm gì), một flask movement. **Đừng giả định** :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"} bật flask như POE1 — Mageblood 0.5 chỉ là charm-slot belt.

## Pantheon & Bandits

POE2 0.5 không dùng hệ Pantheon kiểu POE1, và không có Bandit reward dạng god power — campaign quest reward cứ lấy passive point (luôn đáng hơn buff cố định cho summoner). Lớp tương đương ở đây là ascendancy + atlas tree đã cover ở trên. Phần này giữ để đúng cấu trúc template; cơ chế thật của 0.5 nằm ở ascendancy + atlas + charm. Về charm, ưu tiên charm chống disable cứng cho một build đứng gần pack không có armour/block: **freeze charm** và **stun charm** là hai charm phòng thủ giá trị nhất (mất action = mất uptime curse + không dodge được).

## Leveling Notes

Điểm quan trọng nhất: **không** level bằng spectre từ level 1. Act 1-2 chơi bằng minion Int cơ bản — Skeletal Warrior tank đòn + spell filler, gem-independent, summon ngay. Cầu nối engine leveling thật là :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Arsonist"}: reviving minion (auto-revive sau 7 giây) vừa làm body phụ vừa cho nút bom "Command: Explosive Demise" dọn pack — đây là nguồn clear chính suốt Act 2 trước khi có spectre. Dùng *cùng bộ support* cho Arsonist và (sau này) Bind Spectre để khỏi farm gem riêng.

Spirit milestone: :wiki-link{url="https://www.poe2wiki.net/wiki/Gembloom_Skull"} (+30 Spirit, Freythorn Act 1) rồi :wiki-link{url="https://www.poe2wiki.net/wiki/Gemrot_Skull"} (+30 Spirit, The Azak Bog Act 3) — cộng base campaign reward dần tới 100 cap. Pivot sang spectre ở **Act 3** khi đủ Spirit + tới zone có spectre đáng bắt: con lightning wiki-confirmed để anchor là :wiki-link{url="https://www.poe2wiki.net/wiki/Doryani's_Elite"} (70 Spirit, The Black Chambers, area level 45 — fires decelerating orb projectiles explode dealing lightning damage + summons exploding skitterbots). Alternative rẻ Spirit hơn là :wiki-link{url="https://www.poe2wiki.net/wiki/Vaal_Guard"} (50 Spirit, physical+fire grenade, Utzaal). Engrave Bind Spectre cạnh xác con muốn, cast → gem thành `Spectre: <tên>`; re-bind sau bằng disenchant gem cũ rồi bắt con mới. Về ascendancy, lấy Necromantic Conduit ngay lab đầu để bật Unholy Might sớm; delay nhánh Soulless Form/Eternal Life tới khi pool Life đủ lớn (Act 3+) để 6%-max-Life cho mana đáng kể.

## Budget & Investment

Sàn để chạy build thấp — damage đến từ gem level + minion bug-fix free + Unholy Might (một node ascendancy), không cần unique đắt để khởi động. Vài chaos đủ cap res + sceptre minion-level + nhét Primate/Rabbit Idol để vào maps, engrave Despair cho lớp chaos. Breakpoint đầu tiên là Bones of Ullr (reservation efficiency → thêm con) + Soul Mantle (+75 Spirit). Breakpoint divine là khi gói Unholy Might mở hết: Necromantic Conduit + mana-stack + Blackened Heart đẩy magnitude — đây là sweet spot kinh tế, nơi Lich tách khỏi Infernalist. Mirror tier (Esh's Radiance Xesht-gated + Raven's Flock Delirium-gated + Vis Mortis) là min-max marginal: mỗi layer 120%-reservation lại trade một con, nên net là damage/con cao hơn × count thấp hơn. Diminishing returns rõ ở đây — sweet spot thật là divine breakpoint, không phải mirror.

## Strengths & Limitations

Build làm tốt ba thứ: clear speed cao nhờ AoE native của nhiều spectre cộng explosion chaos từ Rupture the Soul phủ pack cursed; ease-of-play đỉnh — pure summoner, minion auto-target, zero aim, mình chỉ dán curse + dodge; và một trục damage chaos riêng mà spectre summoner ascendancy khác không có (lightning Spark → gained-as-chaos → Despair shred → explode-clear).

Đổi lại nó struggle ở ba chỗ. Boss single-target thua các hướng dồn-một-mục-tiêu: minion bug-fix lên unique chỉ ~20-25% (vs ~25-35% trash), và bầy chia damage ra N con. Spirit là trần cứng, và Lich là summoner nghèo Spirit nhất ba ascendancy Witch (không node spirit) — thiếu gear thì bầy mỏng và damage tụt tuyến tính, floor cao hơn Infernalist. Và defensive: không CI nên chaos hit là lỗ thủng thật (chaos deal 2× lên ES, chaos-res ~0%), cộng nerf ES recharge 0.5 làm sustain yếu — đây là một ES tank moderate, không phải tanky.

## Failure Modes

**Map mod hostile.** Mod "minions deal no/less damage" cắt thẳng nguồn damage duy nhất — gần như không clear được, reroll waystone gặp mod này. "Less recovery rate" làm hỏng chu kỳ revive spectre, bầy mỏng dần giữa pack. Ele weakness ăn minion lightning-res (bù bằng Elemental Army + node max-ele-res). "No regen" siết mana → mất uptime Necromantic Conduit → mất Unholy Might (more-multiplier lớn nhất). Nền tảng: nerf ES recharge 0.5 broad làm pool ES — lớp thủ duy nhất của Lich (không armour/evasion) — sustain yếu hơn 0.4 đáng kể; spreadsheet ES recharge 0.4 sẽ over-estimate.

**One-shot encounter + chaos là lỗ thủng.** Sustained boss AoE wipe bầy nhanh hơn revive cycle (Last Gasp 4s + re-summon), để lại quãng trống damage trong khi cả legion cùng revive — Umbilicus Immortalis (minion bất tử tạm thời qua Life Flask) là câu trả lời tốt nhất. Riêng về phía player: chaos hit là khắc tinh structural — không CI nên chaos-res ~0%, và chaos deal 2× lên ES → max-hit chaos thấp hơn nhiều max-hit elemental. Một boss/encounter chaos-heavy có thể chọc thủng ES nhanh hơn dự đoán; physical slam cũng ăn thẳng vào ES vì zero armour. Death-spiral cần để ý: khi ES cạn, Crystalline Phylactery "50% more mana cost if no ES" bật → mana cost vọt → dễ tụt Low Mana → Unholy Might tắt đúng lúc nguy hiểm nhất.

**Spirit / gear floor cao hơn quảng cáo.** Paper math giả định full 5-6 spectre, nhưng Lich là summoner spirit-nghèo nhất — day-1 chỉ nuôi 1-2 con (sceptre base ~100, ~55-70 Spirit/con). "Swarm 5-6" là gear-floor outcome (cần Soul Mantle + Bones of Ullr + reservation efficiency), không phải day-1 reality. Engine spectre còn **dead** tới khi capture spectre cuối Act 3 + stack Spirit — taxing framing "league-start" cho cả archetype. Esh's Radiance (lớp chaos headline) là Lv65 + Xesht-gated + 120% reservation tax = một con spectre.

**Patch sensitivity.** Build cưỡi minion-damage bug-fix (vừa được sửa) — đây là nerf target hiển nhiên nhất nếu summoner over-perform, re-nerf gut cả build này lẫn Infernalist sibling. Esh's Radiance vừa buff 20%→40% patch này → retune candidate. Đây là **fix, không phải exploit** (patch risk thấp hơn Infernal Legion loop), nhưng vẫn là layer dễ bị đụng nhất. Build cũng không socket :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Legion"} nên miễn nhiễm đợt nerf IL 0.5.

**Uptime Necromantic Conduit.** Unholy Might chỉ lên "while not on Low Mana" (≤35% max mana). Giữ mana >35% chống drain 5%/giây là live failure mode — tụt xuống là mất more-multiplier lớn nhất giữa fight, đặc biệt khi spike đẩy mana xuống cùng lúc ES thủng.

**Day-1 live test plan.** Vì pre-league không verify được, log khi character materialize: (1) **Spectre identity** — Powered Zealot (community-cited 55 Spirit lightning Spark) hiện **không có trong wiki mirror**, nên ngày 1 confirm con này tồn tại + spirit cost thật + skill nó cast; nếu không, anchor vào Doryani's Elite (đã confirm) hoặc Vaal Guard. Log DPS thực mỗi candidate trên cùng pack/boss; (2) **Spirit budget** — đo base sceptre Spirit + cost mỗi con → tính swarm count thật mỗi gear tier; (3) **Chaos uplift thực** — đo Unholy Might + Esh's gained-as-chaos sau khi shred chaos-res qua Despair (nghi ngờ << 70% naive), xác nhận có cần thêm chaos scaling không; (4) **Necromantic Conduit uptime** — log % thời gian mana >35% trong clear vs boss; (5) **Runic Ward magnitude** thật sau khi craft Runic Ward Runes + log EHP order ES→Life→Runic Ward; (6) **chaos max-hit** — đo ngưỡng one-shot chaos so với elemental để xác nhận lỗ thủng chaos. **Về claim "Lich là winner trên Infernalist": LOW** — engine damage chia sẻ với Infernalist, Lich nghèo Spirit hơn (bầy nhỏ hơn ở cùng gear), edge thật của Lich là ceiling chaos-conversion + mana-scaling endgame, không phải floor league-start. Đợi datamine ngày 3-7 để chốt thứ tự Lich vs Infernalist.

## Summary

- Core: Witch :wiki-link{url="https://www.poe2wiki.net/wiki/Lich"} + bầy đồng giống :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} lightning hồi sinh vĩnh viễn; link 6 ô = Summon Spectre (20% quality) + Minion Mastery + Feeding Frenzy II + Elemental Army + Last Gasp + flex (Magnified Area / Esh's Radiance).
- Trục damage riêng của Lich: spectre lightning → Unholy Might (30%) + Esh's (40%) gained-as-chaos → :wiki-link{url="https://www.poe2wiki.net/wiki/Despair"} shred chaos-res → :wiki-link{url="https://www.poe2wiki.net/wiki/Rupture_the_Soul"} explode clear. Curse là damage multiplier, không phải utility — đây là cái Infernalist không có.
- Ascendancy 8 điểm: Necromantic Conduit → Blackened Heart → Rupture the Soul → Incessant Cacophony (default), defensive neo bằng Soulless Form + Eternal Life. Bỏ nhánh Spell (Eldritch Empowerment/Price of Power) — spectre deal Minion damage không phải Spell.
- Minion bug-fix là **một** modifier (~1.25-1.35 trash / ~1.20-1.25 boss), **ẩn khỏi tooltip** (PoB under-report ~20-35%) — caveat pob_coverage cốt lõi, và chung với Infernalist không phải Lich-specific.
- Spirit là trần cứng và Lich nghèo Spirit nhất; endgame ưu tiên Bones of Ullr + Soul Mantle + reservation efficiency, vũ khí Raven's Flock vs Chober là tradeoff PoB.
- Honest: Lich cho ceiling cao hơn nhờ Blackened Heart mana-scaling + curse-explosion, đổi lấy swarm nhỏ hơn do thiếu spirit node. Claim "Lich beats Infernalist" ở mức LOW — đợi datamine ngày 3-7.

## Changelog

### 2026-05-30
- Initial draft (research-derived, pre-league theorycraft). Dựng từ patch 0.5.0 verbatim + wiki mirror 0.5 + cross-check sibling Infernalist Spectre Legion. Engine spectre chia sẻ với Infernalist; spine riêng là chuỗi chaos-conversion của Lich (Necromantic Conduit Unholy Might + Esh's Radiance gained-as-chaos + Despair/Incessant Cacophony/Rupture the Soul curse explosion) — verified verbatim trên Lich tree. Defensive identity Life/ES hybrid neo Eternal Life + Soulless Form + Runic Ward. DPS/EHP tuyệt đối để LOW (chưa có PoB2 0.5 sim); minion bug-fix ẩn khỏi tooltip → pob_coverage PARTIAL. Spectre Powered Zealot chưa có trong wiki mirror → anchor lightning spectre vào Doryani's Elite, để Powered Zealot làm test target ngày 3-7. Claim "winner over Infernalist" labeled LOW.

## Relationships

- **alternative_to** [Infernalist Spectre Legion](/builds/witch/0-5-infernalist-spectre-legion) — cùng engine spectre, khác ascendancy: Infernalist thiên league-start floor + Spirit (Beidat's Will) + ES defense, Lich thiên endgame ceiling qua chaos-conversion + mana-scaling. So sánh Lich-vs-Infernalist đầy đủ ở đây.
- **alternative_to** [Unearth Bone Construct Mass Summoner](/builds/witch/0-5-bone-construct-mass-summoner-lich) — cùng Lich nhưng minion physical mass-summon (Soulless-Form-first vì Unearth ngốn mana), đối trọng spectre swarm.
- **related_mechanics** [Spirit Walker companion beast hunt](/mechanics/spirit-walker-companion-beast-hunt) — cơ chế minion/companion + spirit reservation nền tảng cho mọi summoner 0.5.
- **related_mechanics** [Energy Shield recovery](/mechanics/energy-shield-recovery) — giải thích nerf ES recharge 0.5 mà build phải path qua cẩn thận.
- **references** [New unique items](/mechanics/0-5-new-unique-items) — Vis Mortis, Soul Mantle, Raven's Flock, Bones of Ullr, Esh's Radiance và các unique 0.5 build dùng.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — overview league 0.5.0 chứa context endgame + Remnant/Runic Ward + meta build đang nghiên cứu.
```