---
template: templates/build-template.md
document_type: build
title: Infernalist Spectre Legion
status: draft
author: duocnv
created: '2026-05-29'
updated: '2026-05-29'
class: Witch
ascendancy: Infernalist
league: '0.5'
patch: 0.5.0
budget_tier: league-starter
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Bind Spectre
  damage_type: elemental
  playstyle: minion
  content_focus: all-content
tags:
  - witch
  - infernalist
  - bind-spectre
  - spectre
  - minion
  - minion-army
  - summoner
  - 0-5
  - poe2
---

# Infernalist Spectre Legion

Đây là hướng summoner "đạo quân" đúng nghĩa: dựng một bầy :wiki-link{url="https://www.poe2wiki.net/wiki/Spectre"} hồi sinh vĩnh viễn cùng một giống quái mạnh rồi đứng sau cho chúng cày cả màn lẫn boss. Ai thích cảm giác có 5-6 con quái tự đánh, tự revive, phủ kín màn hình thay vì tự bấm skill sẽ thích build này. Core là :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} bắt một monster scale tốt làm trụ damage, gánh bởi spirit headroom và ES defense của :wiki-link{url="https://www.poe2wiki.net/wiki/Infernalist"} — một trong những hướng league-start mượt nhất của 0.5.

## Build Overview

Damage source là bầy spectre — mỗi con tái hiện gần như nguyên vẹn bộ skill của monster gốc khi còn sống, nên một spectre caster/projectile mạnh tự nó đã là một nguồn AoE rất sạch. Build chạy **bầy đồng giống**: 5-6 con cùng một loại spectre tốt nhất, vì như vậy mỗi điểm spirit và mỗi support đều dồn vào cùng một profile damage. Clear không cần Melee Splash như minion đánh tay đôi — AoE đến từ chính native skill của spectre, nhân lên theo số lượng con nuôi được.

Scaling vector gồm ba trục cộng hưởng: **gem level** (mỗi level nâng cả damage lẫn Life của spectre), **số lượng spectre** (trục then chốt, bị giới hạn bởi Spirit), và **buff minion toàn cục** mà 0.5 vừa sửa bug để mạnh hơn. Defense dựa vào pool Energy Shield của Witch cộng node :wiki-link{url="https://www.poe2wiki.net/wiki/Beidat's_Hand"} của Infernalist (đổi Life reserved thành ES); mobility và safety đến từ chính cái backline — mình hiếm khi đứng trong tầm đánh. Constraint xuyên suốt là **Spirit**: mỗi spectre reserve spirit theo sức mạnh monster gốc, nên gần như mọi quyết định gear/tree xoay quanh việc nặn thêm spirit để nuôi nhiều con hơn.

**Lưu ý tên gọi:** "Legion" ở đây là ẩn dụ cho đạo quân spectre — **không** liên quan tới support gem :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Legion"} (gem này bị nerf nặng trong 0.5: fire DoT 20%→10%, Infernal Legion III bị gỡ hẳn). Build này không bao giờ socket Infernal Legion, nên đợt nerf đó không đụng gì tới nó.

## Skill Gems & Links

Skill định danh là :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"}: cast lên xác một monster non-unique bất kỳ thì gem biến thành `Spectre: <tên monster>` (còn gọi Summon Spectre), một reviving minion account-bound. Quality của gem chuyển thành "Minions deal 0-20% more Damage", nên mình luôn đẩy quality lên 20 — đó là 20% more damage free cho cả bầy. Spirit reservation thay đổi theo sức mạnh monster bound: con càng khủng càng đắt spirit, đây chính là cây đòn bẩy — chọn monster scale mạnh thì mỗi điểm spirit đổi ra nhiều damage hơn.

Triết lý link 6 ô của một bầy bị giới hạn bởi spirit là **more-damage-trên-mỗi-điểm-spirit**, không phải more% thô. Lý do: bất kỳ support nào có Cost & Reservation Multiplier đều làm *mỗi* spectre đắt thêm, tức là *bớt* một con trong bầy. Vì thế mình ưu tiên các support 0% reservation multiplier.

Link mình chạy theo các guide đã publish của hướng này là :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area_Support"} (more AoE — clear sạch hơn cho caster backline) + :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Mastery"} (+1 gem level, không downside, không reservation multiplier) + :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Army"} (+30% all ele res cho minion — sống qua map ele weakness) + :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"} (minion bị đánh chết vẫn đánh tiếp 4 giây trước khi thật sự chết, và 0.5 vá để trong cửa sổ này nó không còn die do nhận damage vượt max Life — overkill-proof). Endgame swap Magnified Area sang :wiki-link{url="https://www.poe2wiki.net/wiki/Dialla's_Desire"} (Lineage, +5% quality cho skill được hỗ trợ) để ép thêm quality.

Nếu muốn dồn raw damage thay vì clear AoE, slot mạnh nhất theo lý thuyết per-spirit là :wiki-link{url="https://www.poe2wiki.net/wiki/Feeding_Frenzy"} — cụ thể là **Feeding Frenzy II** (30% more damage, chỉ 20%→**15%** more damage taken, 0% reservation multiplier). Dùng bản II chứ không phải bản I: cùng 30% more nhưng ăn ít damage hơn, hiển nhiên tốt hơn cho backline. Đây là support more-damage duy nhất tồn tại cho minion trong cả mirror — không có pen/exposure/crit/generic-more nào khác attach được vào Bind Spectre (gem chỉ có tag Minion + Persistent).

**Hai gem cố tình KHÔNG dùng dù tool gemcutting gợi ý:** :wiki-link{url="https://www.poe2wiki.net/wiki/Crazed_Minions"} (30% more damage nếu vừa Revived) nghe hấp dẫn nhưng nó mang **115% Cost & Reservation Multiplier** đánh thuế lên mọi spectre, làm bầy mỏng đi; tệ hơn, điều kiện "vừa Revived gần đây" chỉ bật khi spectre đang *chết* — một backline khỏe mạnh thì buff này gần như không lên, nên nó không "kết cặp" với chu kỳ Last Gasp mà ngược lại: nếu nó bật liên tục nghĩa là bầy đang chết liên tục. :wiki-link{url="https://www.poe2wiki.net/wiki/Hulking_Minions"} (Gigantic: 20% more Life/Damage/size) cũng "cost significantly more Spirit" — cùng vấn đề thuế spirit, chỉ đáng khi nuôi một con béo duy nhất lúc spirit dư, không hợp bầy rộng.

:wiki-link{url="https://www.poe2wiki.net/wiki/Muster"} (7% more damage mỗi *loại* reviving minion khác nhau đang có) chỉ đáng nếu thật sự field nhiều giống quái khác nhau — với bầy đồng giống 5x một spectre + :wiki-link{url="https://www.poe2wiki.net/wiki/Summon_Infernal_Hound"} = ~2 loại ≈ 14%, yếu. Đây là gem đầu tiên bị cắt khi không chạy lineup đa giống.

**Tip:** đừng nhét :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Splash"} vào spectre. Patch 0.5 ghi rõ Minion Splash hỗ trợ minion **Strike** (đánh cận chiến), trong khi spectre meta đều cast spell hoặc bắn projectile — gem sẽ không kích hoạt. Đó là support cho bầy skeleton đánh tay. Cũng đừng dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Meat_Shield"} dù tool gợi ý: nó cho 35% less damage, một backline damage-dealer không bao giờ vứt 35% nguồn damage duy nhất để đổi lấy thủ mà nó không cần.

**Main Skill (6L):** Summon Spectre (Bind Spectre, 20% quality) + Magnified Area II + Minion Mastery + Elemental Army + Last Gasp + ô linh hoạt (Feeding Frenzy II cho boss-damage / Muster nếu chạy lineup đa giống / Dialla's Desire khi có). Elemental Army và Last Gasp là hai ô thủ có thể swap theo content; Minion Mastery + slot damage là core.

**Aura Setup:** spirit dư sau khi nuôi spectre đổ vào một aura/herald minion tùy element của spectre đang chạy — chốt sau khi tính spirit còn lại.

**Movement:** :wiki-link{url="https://www.poe2wiki.net/wiki/Blink"} của Witch — build đứng backline nên mobility chỉ để reposition.

**Utility:** :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Arsonist"} làm body phụ kiêm detonator giai đoạn leveling (xem Leveling Notes).

Exclusion check: Minion Splash (chỉ hỗ trợ minion Strike, spectre cast/projectile không kích hoạt); Crazed Minions + Hulking Minions (mang reservation multiplier, mâu thuẫn với mục tiêu tối đa số spectre trên budget spirit cố định); Last Gasp **không** được dùng chung với bất kỳ nguồn :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Instability"} nào — 0.5 đã vá để Minion Instability bypass Last Gasp, tức giết minion ngay lập tức thay vì cho cửa sổ 4 giây.

## Ascendancy

Mình chọn :wiki-link{url="https://www.poe2wiki.net/wiki/Infernalist"} không phải vì nó là spirit-king (Druid Shaman mới stack spirit nhiều hơn), mà vì nó cho **ES defense layer** và **damage-taken conversion** giúp một summoner backline league-start cực mượt. Infernalist có đúng 8 điểm ascendancy (4 lab × 2), nên việc allocation phải tính sát — không có chỗ cho node phí.

Cổng bắt buộc là **Altered Flesh**: nó cho 20% Physical taken as Chaos + 20% Cold taken as Fire + 20% Lightning taken as Fire (một lớp giảm sốc), và quan trọng hơn, nó là *prerequisite* mở khoá cả ba hợp đồng Beidat. Build trước đây của mình bỏ sót node này — sai, vì không qua Altered Flesh thì không chạm được Beidat's Will. Mỗi hợp đồng Beidat reserve 25% Life.

Thứ tự 8 điểm: **Altered Flesh** (2 điểm: small Life + notable) → :wiki-link{url="https://www.poe2wiki.net/wiki/Beidat's_Will"} (2 điểm: +1 max Spirit mỗi 25 max Life — trục spirit-scaling cốt lõi, biến pool Life vốn Witch không dùng làm thủ chính thành spirit để nuôi thêm spectre) → :wiki-link{url="https://www.poe2wiki.net/wiki/Beidat's_Hand"} (2 điểm: +1 max ES mỗi 8 max Life — lớp ES chính, và vì nó key theo Life nên vẫn chạy kể cả khi lấy Pyromantic Pact) → **Loyal Hellhound** (2 điểm: free :wiki-link{url="https://www.poe2wiki.net/wiki/Summon_Infernal_Hound"}, thêm một thân thịt tank đòn kéo aggro khỏi mình, và là một reviving type cho Muster). Không bao giờ lấy :wiki-link{url="https://www.poe2wiki.net/wiki/Beidat's_Gaze"} — nó cho Mana per Life, dead value với ES Witch và chết hẳn dưới Pyromantic Pact.

**Cảnh báo quan trọng về Demon Form:** node Uber **Demonic Possession** mở :wiki-link{url="https://www.poe2wiki.net/wiki/Demon_Form"} — và đây là cái bẫy lớn nhất cho summoner. Demon Form cho "3% more **Spell** damage mỗi Demonflame" và "vastly boosting the power of your **Spells**". Spectre deal **Minion** damage, **không phải** Spell damage của player — nên Demon Form, Demonic Possession và Mastered Darkness cho một bầy spectre thuần đúng **0 damage**. Ngoại lệ Bind Spectre (re-summon không phá form) là có thật, nhưng nó chỉ giữ form, không route buff sang minion. Vì vậy **bỏ hẳn nhánh Demon Form** khỏi build spectre thuần — 4 điểm đó dùng vào Loyal Hellhound + Beidat hữu ích hơn nhiều.

Tương tự, **Bringer of Flame** (mọi damage từ mình và Allies trong Presence đóng góp vào magnitude của Flammability và Ignite — minion có tính là Ally) *về kỹ thuật* có áp lên spectre, nhưng chỉ nâng lớp Ignite/Flammability (DoT), không phải hit damage, và **chết** nếu spectre không phải fire. Vì meta spectre của 0.5 là lightning/physical (xem mục spectre selection), nhánh fire-Infernalist không còn là hướng tối ưu. Chỉ đi Bringer of Flame nếu cố tình build một bầy fire-spectre — và phải biết đó là lựa chọn yếu hơn meta.

## Passive Tree & Mastery

Cây passive đi vào ba cụm: **minion damage/life**, **reservation efficiency**, và **Energy Shield** cho lớp thủ bản thân.

Phải nói rõ một hiểu lầm phổ biến: **không có "spirit cluster" trên cây**. Notable Spirit generic duy nhất là Profane Commander (4% increased Spirit). Toàn bộ spirit headroom đến từ Beidat's Will + gear + unique, *không phải* tree. Cái tree cho được cho spirit là **reservation efficiency** — Lord of Horrors (+12% reservation efficiency of Minion Skills) và Self Sacrificing (+40% nhưng -20% spirit reservation efficiency của mọi skill) — làm *mỗi* spectre rẻ đi, gián tiếp thêm con.

Về damage, cũng cần đính chính: **mọi node minion damage trên cây đều là "increased" (cộng dồn), không có "more" nào**. More multiplier chỉ đến từ support gem (Feeding Frenzy, Bind Spectre quality). Ưu tiên các small double-dip vì chúng scale cả damage lẫn minion damage cùng lúc: "Spell and Minion Damage" (10%+10%, ×3), "Damage and Minion Damage" (15%+15%, ×3), "Sentinels" (10%+10%, ×5), rồi tới các notable Comradery (30% increased) và Bringer of Order (20% increased). Có tới 26 small "Minion Damage" (10-16%) rải đường để lấp path.

Cho map ele weakness, ba notable minion-res mạnh hơn cả gem Elemental Army: Crystalline Flesh (+20% all ele res + 5% max ele res), Living Death (+22% + 3% max), Silent Guardian (+20% + ailment threshold) — các node +max-ele-res là lớp giữ bầy sống đáng giá nhất.

Vì Witch đi ES, mình path qua maximum ES, nhưng phải nhớ 0.5 cắt mạnh nhánh ES recharge: small faster-start tụt từ 15% xuống **6%**, và small "ES Recharge Rate" bị **xoá hẳn**. Các notable còn sống cũng giảm: Rapid Recharge (12% faster start + 12% recharge rate, đều từ 25%), Dependable Ward (12% faster start + 8% chaos res, từ 25%), Mystic Stance (12% từ 30%), Devoted Protector (10% từ 15%). ES recharge của player giờ khởi động chậm hơn 0.4 nhiều — đây là context cho mục Gearing.

Một keystone đáng cân nhắc late-game: :wiki-link{url="https://www.poe2wiki.net/wiki/Necromantic_Talisman"} ("toàn bộ bonus từ Amulet áp lên Minion thay vì mình") biến một amulet mạnh thành stat thuần cho bầy — nhưng nó tước phần ES/res phòng thủ của amulet khỏi player ES, nên cân nhắc kỹ.

Mastery có nhóm Minion (Minion Mastery, Minion Offence/Defence Mastery) và Reservation Mastery trên cây 0.5, nhưng GGG export lưu stats rỗng cho mastery node nên giá trị chính xác cần đối chiếu poedb/wiki trước khi quote — mình để PoB làm nguồn allocation và log số thật khi vào league.

## Stat Priorities & Defenses

Chưa có sim PoB2 0.5 public cho hướng này tại ngày league start, nên mình **không bịa** một con số headline. Đây là chuỗi nhân damage symbolic đã chỉnh đúng để tự kiểm trong game, kèm priority list cho defense:

- **DPS chain (mỗi spectre):** `base_hit_của_monster × (1 + Σ increased_minion_dmg) × ∏(1 + more_i) × global_minion_buff × hit_rate × ailment_uptime` — với `∏ more_i` gồm slot damage support (Feeding Frenzy II 1.30 nếu dùng), Bind Spectre quality (1.20), Magnified Area (more AoE, không phải more damage). Tree minion damage nằm trong bucket `(1 + Σ increased)` (cộng dồn, không phải more). Tổng damage bầy = `DPS_mỗi_spectre × số_spectre`.
- **Global minion buff — KHÔNG double-count:** đây là **một** modifier, không phải hai. Cơ chế gốc 0.3 cho minion "more damage with hits and ailments vs non-unique", 3% ở skill level 3 lên 50% ở level 8. Bản vá 0.5 *sửa bug* của chính modifier đó, làm late-game ~25-35% more vs non-unique / ~20-25% more vs unique. Không cộng hai số này với nhau. Magnitude thực tế ≈ **1.25-1.35 lên non-unique / ~1.20-1.25 lên unique** — dùng số này, không phải 1.50.
- **Buff này ẨN khỏi tooltip:** patch 0.5 ghi rõ "no longer factored into the damage numbers displayed for skills of your minions". Tức tooltip spectre và PoB2 *under-report* damage thật lên non-unique — đừng tin số tooltip cho clear-speed math. Đây là caveat `pob_coverage: PARTIAL` cốt lõi.
- **Spirit budget:** trục then chốt. `Spirit = 100 (quest reward campaign, universal mọi class — không phải bonus riêng Witch) + 50 (Chober Chaber) hoặc +75 (Soul Mantle) + floor(maxLife/25) (Beidat's Will) + sceptre base (~100 nếu không dùng 2H) + gear/idol`. Ở ~1500-2000 Life, Beidat's Will cộng ~60-80, cho pool ~210-230 trước gear. Số đó nuôi được **~3 con premium** (Priest 100 + Doryani 70 + Vaal Guard 50 = 220) **hoặc ~5 con rẻ** (Vaal Guard 50 + 4× con 40 = 210). "Nuôi 5-6 spectre" chỉ đạt với spectre rẻ + reservation efficiency + +Spirit gear.
- **Energy Shield / Life:** ES là pool chính qua Beidat's Hand; Life bị reserve qua các node Beidat (mỗi node 25%) — đo lại EHP trong game vì reserve 50% (2 Beidat) khác hẳn 75% (3 Beidat).
- **Resistances:** cap 75% Fire/Cold/Lightning trước maps; Chaos res càng cao càng tốt vì hay phải đứng gần để re-summon.

Toàn bộ con số tuyệt đối (ES, EHP, DPS/giây) chưa chốt được cho tới khi materialize character trong league và chạy PoB2 0.5. Test plan: log tooltip damage mỗi spectre × số spectre × uptime, rồi nhân tay ×1.25-1.35 (non-unique) cho phần buff ẩn, so với clear thực tế trên T15-T16; log riêng số trên unique boss (chỉ ~1.20-1.25).

### Performance Ratings

| Aspect          | Rating (1-5) |
|-----------------|--------------|
| clear_speed     | 4            |
| boss_damage     | 3            |
| survivability   | 4            |
| mobility        | 3            |
| league_start    | 4            |
| budget_scaling  | 4            |

## Resources

Chưa có PoB2 0.5 sim public cho character thật của hướng này tại ngày league start — mình sẽ gắn link PoB sau khi materialize character và xuất từ PoB2 fork hỗ trợ 0.5.

- **PoB:** _(sẽ cập nhật sau khi build vào league + PoB2 0.5 ra số)_
- **Spectre reference:** danh sách spectre cộng đồng — dùng để khảo monster nào đáng bind, không quote số tuyệt đối.

## Gear Progression

### Leveling
Act đầu chưa cần unique và **không** level bằng spectre. Tập trung vũ khí có "+to Level of Minion Skills" và "increased minion damage" + item cho Spirit. Một món rẻ đáng nhớ là :wiki-link{url="https://www.poe2wiki.net/wiki/Trenchtimbre"} (Spiked Club, Lvl 16, +1-2 to Level of all Minion Skills) — pair với off-hand spirit/focus; clause "also affect you" của nó là minion Attack Speed, vô hại với caster spectre. Ưu tiên Intelligence đủ requirement cho gem minion Int.

### Early Mapping
Mục tiêu cap 75% ba res elemental và đủ Spirit nuôi 3-4 spectre. Quality Bind Spectre lên 20 sớm. Hai socketable idol rẻ đáng nhét ngay: :wiki-link{url="https://www.poe2wiki.net/wiki/Primate_Idol"} trong Sceptre cho "Allies in your Presence deal 40% increased Damage" (multiplier toàn bầy chỉ tốn một socket), Primate Idol trong Helmet cho minion 15% increased max Life; :wiki-link{url="https://www.poe2wiki.net/wiki/Rabbit_Idol"} trong Sceptre cho 15% increased Spirit (limit 1).

### Endgame
Trục đầu tư số một là **số lượng spectre** — nên unique endgame đáng nhất là :wiki-link{url="https://www.poe2wiki.net/wiki/Bones_of_Ullr"} (boots) vì nó thêm thẳng minion count, đúng mục tiêu cốt lõi của build. Body slot lấy :wiki-link{url="https://www.poe2wiki.net/wiki/Soul_Mantle"} — sau 0.5 nó cho **+75 to Spirit** (thay vì reduced Totem Life cũ), và downside "random curse khi Totem chết" trơ vô hại vì bầy không chạy totem; +75 spirit còn hơn +50 của Chober và không tranh slot vũ khí.

Vũ khí là một tradeoff thật, không phải coronation tự động. :wiki-link{url="https://www.poe2wiki.net/wiki/Chober_Chaber"} là **Two-Hand Leaden Greathammer** (Requires Lvl 33, 60 Str, 100 Int — không phải sceptre) cho +50 Spirit, +(80-100) Mana, +2-3 to Level of All Minion Skills, và clause "Increases/Reductions to Minion Damage also affect you" (trơ với summoner không tự đánh). Đối thủ là :wiki-link{url="https://www.poe2wiki.net/wiki/The_Raven's_Flock"} (Perching Staff, Lvl 70): Minions deal 111% increased Damage + 34% increased Spirit Reservation Efficiency + 14% Cast Speed + 24 Int — chạm ba đòn bẩy caster (raw minion damage, cast speed, reservation efficiency) mà Chober thiếu, đổi lại không có flat Spirit/gem level và là staff nên mất luôn base-spirit của off-hand. Chober thắng ở +50 flat Spirit + 2-3 gem level (level nâng cả minion Life); Raven's Flock thắng ở reservation efficiency + cast speed. Kẻ thắng là câu hỏi PoB, quyết khi có character thật.

Slot Last Gasp endgame có thể nâng lên :wiki-link{url="https://www.poe2wiki.net/wiki/Tecrod's_Revenge"} (Lineage support, chia sẻ cơ chế "không die trong cửa sổ" với Last Gasp).

### Mirror Tier (BiS)
Stack tối đa +Spirit (flat), % increased Spirit, và reservation efficiency trên mọi slot — ba đòn bẩy spirit khác nhau, đừng double-count: flat (Chober +50, Soul Mantle +75, sceptre base ~100, suffix "Lord's" 20-26% increased), % increased (:wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} 54-63%, Rabbit Idol 15%), reservation efficiency (Raven's Flock 34%, Bones of Ullr cho Undead). Reservation efficiency thường mạnh nhất per-point vì làm *mọi* spectre rẻ đi. Diminishing returns đến khi bầy đã đầy — lúc đó tiền đổ vào minion damage % và một spectre cao cấp.

**Reframe Quipolatl's Thesis:** :wiki-link{url="https://www.poe2wiki.net/wiki/Quipolatl's_Thesis"} soul core trong Gloves cho "ES Recharge starts when your Minions are Reformed". Đây là tech của riêng mình, **không guide meta nào dùng** — và nó kém tin cậy: "Reform" là điều kiện nghiêm ngặt hơn revive, chỉ kích hoạt khi minion permanent hồi sau hết timer ~7.5 giây, *không* tính revive nhanh/Last-Gasp/leash. Tức trên backline an toàn (spectre hiếm chết) hoặc boss dài (spectre sống) nó **không** fire đúng lúc cần ES nhất. Xếp nó là utility mapping tình huống, không phải cornerstone.

**Anti-recommendation:** đừng dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Heartbound_Loop"} — "300 Physical Damage taken on Minion Death" sẽ cascade giết mình khi bầy 5-6 con chết/hồi liên tục.

## Flasks

Build đi ES nên flask nghiêng về Energy Shield và utility. Một :wiki-link{url="https://www.poe2wiki.net/wiki/Life_Flask"} vẫn nên giữ vì nó mở khoá một panic-button cực mạnh: :wiki-link{url="https://www.poe2wiki.net/wiki/Umbilicus_Immortalis"} (belt) cho "Minions cannot Die while affected by a Life Flask" + "Your Life Flask also applies to your Minions" — đây là câu trả lời trực tiếp cho failure mode boss AoE xoá bầy. Pyromantic Pact xoá Mana chứ không xoá Life, nên Life Flask (và belt này) vẫn chạy kể cả trên variant Infernal Flame. Còn lại: một flask kháng ailment (freeze/stun), một flask movement/speed, và một slot tùy content. **Quan trọng:** nếu lấy Pyromantic Pact, KHÔNG dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Mana_Flask"} vì pool Mana không còn.

## Pantheon & Bandits

POE2 0.5 không dùng hệ Pantheon kiểu POE1. Điểm tương đương là các lựa chọn ascendancy và atlas đã cover ở trên — không có god power riêng để gán. Bandit/quest reward trong campaign cứ lấy passive point (luôn đáng hơn buff cố định cho summoner). Phần này giữ để đúng cấu trúc template; cơ chế thật của 0.5 nằm ở ascendancy + atlas tree.

## Leveling Notes

Điểm quan trọng nhất cho người mới: **không** level bằng spectre từ level 1. Act 1-3 chơi bằng minion Int cơ bản — skeleton và zombie gem-independent, summon ngay, không cần gear hay corpse đặc biệt. :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Arsonist"} là cầu nối tuyệt vời: nó là reviving minion (auto-revive sau 7 giây), và có "Command: Explosive Demise" detonate một minion gần đó cho 300% base attack damage + 8% max Life của minion đó dạng fire — vừa làm body phụ vừa cho một nút bom dọn pack. Dùng *cùng bộ support* cho Skeletal Arsonist và Bind Spectre (Magnified Area II + Minion Mastery + Elemental Army + Last Gasp).

Khi đủ Spirit và tới cuối Act 3, engrave :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} và chuyển trụ damage sang spectre. Endgame thì re-bind khi gặp con mạnh hơn: disenchant gem cũ (trả về Bind Spectre trắng) và bắt con mới.

## Budget & Investment

Sàn để chạy build rất thấp — spectre legion là một trong những hướng league-start rẻ nhất vì damage đến từ gem level + buff toàn cục free, không cần unique đắt. Vài chaos đủ cap res và mua sceptre minion-level + nhét Primate/Rabbit Idol để vào maps. Breakpoint đầu tiên là Bones of Ullr (thêm spectre = thêm damage tuyến tính) và Soul Mantle (+75 Spirit). Breakpoint sau là vũ khí endgame (Chober Chaber rẻ league-start, hoặc Raven's Flock đắt hơn) và stack +Spirit/reservation efficiency. Diminishing returns đến khi bầy đã đầy và spirit dư — lúc đó tiền nên đổ vào minion damage % và một spectre cao cấp thay vì thêm con thứ bảy.

## Strengths & Limitations

Build làm tốt ba thứ: clear speed cao nhờ AoE native của nhiều spectre phủ màn cùng lúc (đặc biệt với Magnified Area); survivability backline tốt vì mình hiếm khi đứng trong tầm đánh và bầy có chu kỳ Last Gasp giờ overkill-proof; và league-start mượt — chạy gần như free, scale dần bằng spirit/số spectre, ES defense của Infernalist đỡ đòn campaign tốt.

Đổi lại nó struggle ở ba chỗ. Boss single-target thua các hướng dồn-một-mục-tiêu vì buff toàn cục lên unique chỉ ~20-25% so với ~50% như lên trash, và bầy chia damage ra N con thay vì dồn một mục tiêu. Spirit là trần cứng: thiếu gear thì bầy mỏng và damage tụt tuyến tính. Và meta spectre chính xác con nào đáng bind vẫn là ẩn số ngày đầu league — cần datamine để chốt.

## Failure Modes

**Map mod hostile.** Mod "minions deal no/less damage" cắt thẳng nguồn damage duy nhất — gần như không clear được, reroll waystone gặp mod này. "Less recovery"/"less recovery rate" làm hỏng chu kỳ revive: spectre chết rồi phục hồi chậm, bầy mỏng dần giữa pack. Ele weakness map ăn vào minion res — mitigate bằng Elemental Army + ba notable max-ele-res trên tree, nhưng vẫn cẩn thận ele weakness + extra ele damage chồng nhau.

**One-shot encounter qua cửa sổ 4 giây.** Last Gasp chỉ cho 4 giây chiến đấu sau khi Life về 0 rồi mới revive. Patch 0.5 vá để minion trong cửa sổ này không còn die do nhận damage vượt max Life, nên cửa sổ đáng tin hơn — nhưng boss AoE kéo dài hơn 4 giây (slam liên hoàn, beam quét, degen vùng) vẫn xoá sạch bầy sau khi cửa sổ đóng, để lại quãng trống damage trong lúc cả legion cùng revive. Câu trả lời tốt nhất là Umbilicus Immortalis (Life Flask khiến minion bất tử tạm thời) — boss pinnacle với AoE phủ sàn liên tục vẫn là khắc tinh.

**Spirit / gear floor + patch sensitivity.** Paper math giả định đủ Spirit nuôi 5-6 spectre; dưới sàn đó (thiếu Bones of Ullr/Soul Mantle/Beidat) bầy chỉ 3-4 con và damage tụt tuyến tính. Build cũng nhạy với hai thứ GGG dễ chỉnh: buff minion toàn cục (vừa được sửa bug trong 0.5) và spirit cost spectre — nếu tăng cost thì bầy mỏng đi ngay.

**League-start viability vs meta companion.** So với hướng single-companion :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} (dồn toàn bộ đầu tư vào một beast), legion *chia* đầu tư ra N con — và Tame Beast vừa được **buff** trong 0.5 (+40% more dmg ở gem level 9 lên +84% ở level 20, min gem level hạ 9→7), nên khoảng cách boss-DPS với hướng tập trung còn rộng hơn. Legion thắng ở clear, budget thấp, độ lì backline; nếu mục tiêu là pinnacle bossing tối thượng thì companion tập trung mạnh hơn.

## Optimization

Các điểm cần log/test khi character materialize trong league — chưa verify được, đừng treat như fact:

- **Spectre nào là #1 meta.** Các guide đã publish nghiêng về :wiki-link{url="https://www.poe2wiki.net/wiki/Vaal_Guard"} (Bomber variant, 50 Spirit, oil grenade physical+fire — kiếm ở Utzaal Act 3, tránh variant cùng tên melee/ranged) và :wiki-link{url="https://www.poe2wiki.net/wiki/Powered_Zealot"} (55 Spirit, lightning Spark). Các con caster wiki-confirmed khác — Priest of the Sun (100, Firebolt/Solar Orb), Doryani's Elite (70, lightning orb) — vẫn hợp lệ nhưng đắt spirit hơn. Log DPS thực tế mỗi con trên cùng pack/boss để chốt con đáng bind.
- **Infernalist vs Lich vs Shaman.** Đừng claim Infernalist thắng tuyệt đối. Sự thật day-0: Shaman stack spirit nhiều hơn (con đường legion lớn nhất), Lich miễn nhiễm các nerf 0.5 nên cộng đồng nghiêng Lich cho endgame. Edge thật của Infernalist là ES defense + league-start smoothness + Altered Flesh conversion, không phải spirit supremacy. Log so sánh khi có cả ba.
- **Quipolatl's Thesis có đáng không.** Test xem "Reform" có fire đủ thường xuyên trong map thực tế không, hay nó dead trên backline an toàn như lý thuyết dự đoán.

## Summary

- Core: Witch :wiki-link{url="https://www.poe2wiki.net/wiki/Infernalist"} + bầy đồng giống :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} hồi sinh vĩnh viễn; link 6 ô = Summon Spectre (20% quality) + Magnified Area II + Minion Mastery + Elemental Army + Last Gasp + slot damage/flex (Feeding Frenzy II / Dialla's Desire).
- Spectre meta nghiêng Vaal Guard (50 Spirit, physical) và Powered Zealot (55 Spirit, lightning) — **không** phải fire-spectre, vì fire/ignite path đã chết (Infernal Legion bị gut, meta spectre không phải fire).
- Ascendancy 8 điểm: **Altered Flesh** (gate bắt buộc) → Beidat's Will (spirit) → Beidat's Hand (ES) → Loyal Hellhound. **Bỏ Demon Form** — nó buff Spell damage của player, không phải Minion damage, nên cho spectre đúng 0 damage.
- Damage buff toàn cục là **một** modifier (không double-count): ~1.25-1.35 lên non-unique / ~1.20-1.25 lên unique, và **ẩn khỏi tooltip** (PoB under-report) — đây là caveat pob_coverage cốt lõi.
- Spirit ~210-230 trước gear nuôi ~3 con premium hoặc ~5 con rẻ; endgame ưu tiên Bones of Ullr (+minion count) + Soul Mantle (+75 Spirit), vũ khí Chober Chaber vs Raven's Flock là tradeoff PoB.
- Honest: Infernalist là pick league-start/ES-defense mạnh, không phải spirit-king (Shaman) hay endgame-king (Lich). Meta day-0 chưa chốt được — đợi datamine ngày 3-7.

## Changelog

### 2026-05-29
- Dựng lại toàn diện sau verification từ patch 0.5.0 + wiki mirror + passive tree 0.5 + meta live. Sửa các lỗi: bỏ nhánh Demon Form (buff Spell không phải Minion), thêm Altered Flesh gate + thứ tự 8 điểm ascendancy, hết double-count global minion buff (một modifier ~1.25-1.35 non-unique, ẩn khỏi tooltip), đổi exemplar spectre sang Vaal Guard + Powered Zealot, đổi link sang Magnified Area II + Minion Mastery + Elemental Army + Last Gasp (bench Crazed/Hulking vì reservation tax), ưu tiên Bones of Ullr + Soul Mantle endgame, demote Quipolatl/Chober, thêm Umbilicus Immortalis + anti-rec Heartbound Loop, reframe Infernalist vs Lich/Shaman. DPS tuyệt đối chưa chốt vì chưa có PoB2 0.5 sim.
- Initial draft (cùng ngày, đã thay thế): core + ascendancy chốt verbatim từ patch 0.5.0.

## Relationships

- **alternative_to** [Spirit Walker Unique Beast Apex](/builds/huntress/0-5-spirit-walker-unique-beast-apex) — hướng single-companion dồn-một-mục-tiêu, đối trọng với legion chia đầu tư; so sánh boss DPS vs clear.
- **alternative_to** [Bone Construct Mass Summoner Lich](/builds/witch/0-5-bone-construct-mass-summoner-lich) — hướng summoner Lich, endgame-king miễn nhiễm nerf 0.5; đối trọng ascendancy với Infernalist.
- **related_builds** [Raging Spectre Shaman](/builds/druid/raging-spectre-shaman) — cùng dùng spectre nhưng trên Druid Shaman (spirit-king thật của 0.5); so sánh trục spirit headroom.
- **related_mechanics** [Spirit Walker companion beast hunt](/mechanics/spirit-walker-companion-beast-hunt) — cơ chế minion/companion + spirit reservation nền tảng cho mọi summoner 0.5.
- **related_mechanics** [Energy Shield recovery](/mechanics/energy-shield-recovery) — giải thích nerf ES recharge 0.5 mà build phải path qua cẩn thận.
- **references** [New unique items](/mechanics/0-5-new-unique-items) — Chober Chaber, Soul Mantle, Raven's Flock, Bones of Ullr và các unique 0.5 build dùng.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — overview league 0.5.0 chứa context endgame + meta build đang nghiên cứu.
