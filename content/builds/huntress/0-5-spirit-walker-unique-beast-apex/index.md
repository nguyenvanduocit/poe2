---
template: templates/build-template.md
document_type: build
title: Spirit Walker Unique Beast Companion
status: draft
author: duocnv
created: '2026-05-29'
updated: '2026-05-29'
class: Huntress
ascendancy: Spirit Walker
league: '0.5'
patch: 0.5.0
budget_tier: high-budget
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Tame Beast
  damage_type: physical
  playstyle: minion
  content_focus: all-content
tags:
  - huntress
  - spirit-walker
  - tame-beast
  - companion
  - catha-balance
  - natural-order
  - unique-beast
  - idolatry
  - minion
  - 0-5
  - poe2
---

# Spirit Walker Unique Beast Companion

Đây là hướng companion đẩy tới trần: một con Unique Beast duy nhất, được nuôi bằng toàn bộ damage của nhân vật, gánh cả single-target lẫn phần lớn clear. Người thích cảm giác "có một con thú mạnh khủng khiếp đứng đánh thay mình" sẽ thích nhất hướng này, vì nó không chia damage cho cả đàn nhỏ mà dồn hết vào một con. Core là :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} đổi scaling companion sang vũ khí, :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"} mở slot Unique Beast, và một vũ khí flat-damage cao nhất có thể; chơi được all-content miễn cân đúng spirit và chấp nhận rủi ro single-point-of-failure.

## Build Overview

Điểm quan trọng nhất cần hiểu trước khi đụng vào gear: companion là minion. Wiki ghi thẳng "Companions are a special type of permanent minions", và minion thì "do not benefit from modifiers to stats that affect the player character's offences or defences; only modifiers that specify or affect minions or allies will apply." Câu này quyết định toàn bộ cách scale. Mọi dòng "increased attack damage" trên cây hay trên gear của *nhân vật* đều KHÔNG chạm tới con thú — nó chỉ ăn những modifier ghi rõ "Companions / Minions / Allies". Đây là chỗ catha doc cũ để ngỏ dưới dạng test-plan; ở đây mình chốt luôn: tree weapon-damage của nhân vật không feed companion, đừng phí điểm vào đó.

Vậy weapon damage tới con thú bằng đường nào? Đúng một đường: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} cho "Companions gain added Attack damage equal to 60% of your main hand Weapon's damage". Đây là *added* damage, được tiêm thẳng vào hit attack của companion như một dòng flat. Vì là added flat nên nó được nhân tiếp bởi mọi "increased/more companion damage" — nghĩa là main-hand càng flat lớn, mỗi % companion damage sau đó càng đáng giá. Loop vận hành: damage source là một con Unique Beast bắt qua :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}; scaling vector là flat main-hand weapon damage (qua Catha) cộng các lớp "more/increased companion damage"; defense layer dựa vào :wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} cùng aura còn dư spirit và lớp thủ của chính nhân vật; mobility và một phần clear do skill nhân vật lo. Constraint xuyên suốt là spirit reservation — con thú càng to càng ăn nhiều spirit, nên mỗi quyết định gear/tree là một bài toán "thêm damage cho beast" đấu với "giữ đủ lớp thủ".

## Skill Gems & Links

Skill định danh là :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} — dùng để *bắt* beast: rải Azmeri wisp lên một Beast, nếu giết nó khi còn wisp thì gem hoá thành dạng summon con beast đó như một Reviving Companion. Gem ở 0.5 đã được buff hẳn: "Summoned Beasts now deal 40% more damage at Gem Level 9 scaling up to 84% at Gem Level 20", và min gem level hạ xuống 7. Con số 1.84× more ở gem 20 là một multiplier riêng biệt cực mạnh, nên kéo gem level cao là một trong những đòn bẩy rẻ nhất. Beast giữ tối đa bốn monster modifier khi summon ("Tamed Beast retains up to four monster modifiers"), nên mỗi lần tame là một roll riêng — phải kiểm gem sau khi bắt và giữ bản có modifier hỗ trợ đúng.

Support gem ưu tiên added attack damage và minion attack speed hơn cooldown recovery. Lý do: Catha bơm flat vào *attack* của companion, nên thêm flat attack và để nó vung attack nhanh hơn là nhân thẳng vào phần damage lớn nhất; còn cooldown recovery dễ làm con thú spam các skill cooldown damage thấp thay vì attack chủ lực. Quan trọng: Catha ghi rõ "added **Attack** damage", nên những con beast đánh chủ yếu bằng spell/cast sẽ không hưởng phần 60% weapon này — phải chọn beast có hit profile là attack (slam/strike vật lý), không phải caster.

Phần spirit còn lại sau companion dành cho aura phòng thủ như :wiki-link{url="https://www.poe2wiki.net/wiki/Wind_Dancer"}. Đừng hy sinh aura thủ để cố nhét thêm con thú thứ hai — sheet đẹp hơn nhưng build thực tế tệ đi (lý do nằm ở mục Failure Modes).

**Main Skill (Companion):** :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} (gem level cao nhất có thể) + added attack damage support + minion attack speed support + một support nhân more minion/companion damage + utility support theo beast.

**Aura Setup:** :wiki-link{url="https://www.poe2wiki.net/wiki/Wind_Dancer"} hoặc một herald, tuỳ spirit còn dư sau khi reserve con thú.

**Movement:** skill di chuyển của Huntress (dodge roll + một dash/blink theo vũ khí).

**Utility:** một curse/mark để bù single-target (xem note Idol Sceptre và Sylvan's Effigy ở phần dưới).

Exclusion check: Catha chỉ feed phần **Attack** damage → beast caster mất phần 60% weapon (one-way block); :wiki-link{url="https://www.poe2wiki.net/wiki/Idolatry"} phạt -4% all-ele-res per non-Idol augment (xem Passive Tree); :wiki-link{url="https://www.poe2wiki.net/wiki/Lord_of_the_Wilds"} kèm "50% less Spirit" + "Non-Minion Skills have 50% less Reservation Efficiency".

## Ascendancy

:wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} là lý do hướng này tồn tại — gần như mọi node mạnh đều gắn vào companion. Thứ tự lab nên đi: Lab 1 lấy :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} sớm nhất có thể, vì nó là công tắc bật toàn bộ damage plan — không có nó thì con thú chỉ scale theo minion stat trần thấp. Lab 2 lấy :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"} để mở slot Unique Beast: node này cho "Tame Beast can capture Unique Beasts" và "Can have up to one Unique Tamed Beast summoned", kèm "+30% increased movement speed" cho con unique. Lab 3 nhặt các node "more/increased companion damage" trên cây ascendancy như :wiki-link{url="https://www.poe2wiki.net/wiki/Idolatry"} và cụm Shared Companion Damage. Uber dành cho node spirit/reservation hoặc lớp thủ tuỳ con thú đã chốt.

Có một cảnh báo phải nói thẳng ở The Natural Order: con Unique Tamed Beast bị "Possessed by random Azmeri Spirits, changing every 20 seconds". Nghĩa là profile sức mạnh con thú reroll ngẫu nhiên mỗi 20 giây — tuyệt cho mapping (luôn có buff nào đó), nhưng là rủi ro thật khi bossing vì có thể trúng nhịp buff yếu giữa pha damage. Đây là đánh đổi cố hữu của hướng "một con thú to", không phải lỗi build.

Ba node spirit-animal — :wiki-link{url="https://www.poe2wiki.net/wiki/The_Mórrigan%27s_Guidance"} (Stag), Primal Bounty (Owl), Sacred Unity (Bear) — đáng cân nhắc nếu mình muốn thêm một lớp damage/utility chủ động từ chính nhân vật. Mórrigan cho "Stags deal 20% more damage per leap", nhưng các node này scale spirit-animal skill của *mình*, không scale con companion chính, nên với hướng all-in một con beast thì chúng là bổ trợ chứ không phải core.

## Passive Tree & Mastery

Cluster chính xoay quanh ba thứ: companion damage, minion attack speed, và reservation efficiency. Đây là phần lớn cây cần đi, vì như đã nói, weapon-damage node của nhân vật không feed companion — đừng phí điểm vào nhánh attack damage thường. Thay vào đó nhắm các notable companion: 19 Companion-themed passive mới được thêm ở 0.5, gồm các node lặp "Companions deal 12% increased Damage", "Companions deal 12% increased Damage / 10% increased Damage while your Companion is in your Presence", và "Companions have 12% increased maximum Life / 10% increased Armour, Evasion and Energy Shield while your Companion is in your Presence" (vừa damage vừa thủ kép). Notable :wiki-link{url="https://www.poe2wiki.net/wiki/Inspiring_Ally"} đặc biệt đáng lấy vì "Increases and Reductions to Companion Damage also apply to you" — nó khiến mọi % companion damage cũng buff luôn damage clear của nhân vật.

Reservation efficiency là nhánh sống còn. Keystone :wiki-link{url="https://www.poe2wiki.net/wiki/Trusted_Kinship"} ở 0.5 được rework thành "30% more Reservation Efficiency of Companion Skills, 20% less Reservation Efficiency of non-Companion Skills" — nó từng kèm penalty "30% less Defences" nhưng patch note 0.5.0 đã gỡ phần đó. Với build chỉ chạy một con companion to, 30% more reservation efficiency cho phép kéo gem level cao hơn / con thú to hơn mà vẫn dư spirit cho một aura. Phần "20% less non-companion reservation efficiency" gần như không đau vì mình vốn không chạy aura nhân vật nặng. Lưu ý: tree data 0.5 vẫn để dòng "You can have two Companions of different types" trên Trusted Kinship — nhưng mình lấy keystone này vì reservation, không vì fantasy hai con thú; chạy một con to vẫn là cấu trúc mạnh nhất cho single-target.

:wiki-link{url="https://www.poe2wiki.net/wiki/Idolatry"} là notable điều kiện cao trần: "Companions deal 10% increased damage per Idol in your Equipment", "2% increased Reservation Efficiency of Skills per Idol", nhưng phạt "-4% to all Elemental Resistances per non-Idol Augment in your Equipment". Đây là node cần tính kỹ (xem Budget) — chỉ đáng lấy khi mình đã commit Idol vào đa số augment slot, nếu không phần phạt res nuốt sạch lợi ích. Đường tree cụ thể (node id, mastery) cần chốt khi PoB2 có data 0.5; hiện ghi nhận intent: ưu tiên path qua companion-damage + reservation cluster, lấy Inspiring Ally, rồi rẽ sang lớp thủ.

## Stat Priorities & Defenses

Build này chưa chốt số thật vì PoB2 hiện chỉ có data 0.4 — chưa có Spirit Walker, The Catha's Balance, hay tree 0.5 để verify. Mọi con số dưới đây là test-plan, log lại trong league cho từng cấu hình beast/weapon. Đây là measurement plan, không phải build yếu.

- **Companion DPS** ở mức spirit thực tế đang reserve, đo cả basic attack lẫn hit package đầy đủ, và đo riêng cho từng buff Azmeri possession (vì nó đổi mỗi 20s).
- **Spirit budget breakdown:** con thú reserve bao nhiêu sau Trusted Kinship, còn lại đủ chạy aura nào.
- **Catha contribution:** so companion DPS khi đeo :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} vs khi tháo, để xác nhận phần 60%-weapon là phần lớn damage.
- **Global minion bonus reach:** companion là minion nên nó ăn "minion damage bonus against non-unique enemies" mà patch 0.5.0 sửa lại — "approximately 25-35% more late-game minion damage against non-unique enemies, and approximately 20-25% more late-game minion damage against unique enemies", và "no longer factored into the damage numbers displayed for skills of your minions". Nghĩa là DPS thực cao hơn số PoB hiển thị đúng khoảng này. Đánh white pack vs rare/unique đo delta để confirm.
- **Character EHP**, life/ES, armour/evasion, resistance cap 75%+ cả ba element (đặc biệt nếu chạy Idolatry với penalty res).
- **Beast modifier package** thật đã giữ (4 modifier) — cùng monster base cho kết quả khác nhau rất nhiều tuỳ roll.

### Performance Ratings

| Aspect          | Rating (1-5) |
|-----------------|--------------|
| clear_speed     | 3            |
| boss_damage     | 4            |
| survivability   | 3            |
| mobility        | 4            |
| league_start    | 2            |
| budget_scaling  | 5            |

## Gear Progression

### Leveling
Leveling như Huntress tiêu chuẩn bằng attack skill (spear/bow theo sở thích), không cố ép companion sớm. Tìm sceptre rare có minion attack speed + minion damage + một aura mod, dùng rare Beast bắt được trong campaign làm companion tạm. Giai đoạn này con thú scale theo minion stat thường — mục tiêu là sống và làm quen nhịp tame, không phải DPS.

### Early Mapping
Khi vào maps và lấy được :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} + :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"}, pivot: đổi main-hand sang vũ khí flat-damage cao và bắt một Unique Beast có hit profile attack. Low-friction là :wiki-link{url="https://www.poe2wiki.net/wiki/Spire_of_Ire"} — spear chaos với "(167-201) to (267-333) Chaos damage", requirement nhẹ (Level 65, 36 Str, 89 Dex), và chaos ít bị monster resist; flat chaos này feed thẳng vào phần Catha added-attack. Mục tiêu giai đoạn này là cap res 75% cả ba element và đủ companion DPS clear T16.

### Endgame
Trần flat nằm ở Giant's Blood two-hander cầm một tay: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Hammer_of_Faith"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Ironwood_Greathammer"} qua :wiki-link{url="https://www.poe2wiki.net/wiki/Giant%27s_Blood"} cho flat damage cao nhất feed vào 60% của Catha — vì Catha lấy theo *damage* main-hand nên two-hander flat lớn là đỉnh của đòn bẩy này. Đánh đổi là attribute pressure rất nặng: phải giải đủ Strength để cầm một tay, ngốn điểm passive và gear slot. Hướng sceptre thay thế: socket Idol vào sceptre để vừa được "Allies in your Presence deal increased Damage" (:wiki-link{url="https://www.poe2wiki.net/wiki/Primate_Idol"} cho Allies deal increased damage trong sceptre, :wiki-link{url="https://www.poe2wiki.net/wiki/Bear_Idol"} cho "Allies in your Presence deal 12 to 18 added Attack Physical Damage") vừa nuôi Idolatry stack — nhưng sceptre flat thấp nên đây là route low-ceiling so với Giant's Blood.

### Mirror Tier (BiS)
Đỉnh đầu tư là một two-hander flat max-roll cầm một tay với attribute pressure đã giải sạch trên tree/gear, gem :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} level 20+ cho 1.84× more, full companion-damage cluster + Inspiring Ally, và Idol setup đủ dày để Idolatry net dương. Diminishing returns tới khi con thú đã cap spirit hữu dụng — thêm weapon damage nữa mà không thêm spirit/attack speed thì giá trị giảm nhanh. Một lưu ý alternative: :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan%27s_Effigy"} sceptre cho "You can have any number of Companions of different types" + "Companions deal increased damage to your Marked targets" — đây là lever cho hướng *nhiều companion*, ngược với fantasy một con thú to, vì sceptre flat thấp giết axis Catha; nhắc ở đây như nhánh rẽ, không phải BiS của hướng này.

## Flasks

POE2 0.5 dùng life/mana flask đơn giản cộng charm, không có hệ flask phức tạp như POE1. Ưu tiên một :wiki-link{url="https://www.poe2wiki.net/wiki/Life_Flask"} instant/recovery để sống qua spike khi con thú chưa kịp tank, một :wiki-link{url="https://www.poe2wiki.net/wiki/Mana_Flask"} nếu skill clear nhân vật tốn mana, và charm chống ailment nguy hiểm nhất với playstyle đứng sau — thường là freeze/stun, vì khi mình bị khoá thì con thú vẫn đánh nhưng mình không reposition được. Chốt charm cụ thể theo content sau khi vào league.

## Pantheon & Bandits

POE2 0.5 không có hệ Pantheon hay Bandit như POE1 — không có lựa chọn nào ở mục này. Reward campaign của POE2 đi theo cơ chế khác và không cần khai báo trong build doc.

## Leveling Notes

Companion build không phải hướng leveling mượt nhất, nhưng vẫn ổn nếu chơi đúng. Câu chuyện act 1-3: leveling như một attack-Huntress bình thường (spear/bow), giữ một :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} gem rỗng trong túi để bắt thử mỗi khi gặp rare Beast ngon — con thú tạm giúp tank và chia aggro suốt campaign. Engine companion thật chỉ online ở giai đoạn map: lúc đó mới đủ spirit, lấy được The Natural Order để mở Unique Beast slot, và có :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} để chuyển scaling sang vũ khí. Mốc pivot rõ ràng: ngay khi vào maps + có Catha, đổi main-hand sang vũ khí flat cao và đi săn một Unique Beast attack-based. Trước mốc đó, đừng đầu tư vào weapon flat — con thú chưa thừa hưởng được.

## Budget & Investment

Đường đầu tư đi từ rẻ tới đắt theo từng mảnh. Giai đoạn rare-sceptre companion gần như free. Bước nhảy đầu là Catha's Balance qua ascendancy (chỉ tốn lab, không tốn currency) — đây là gate mở khoá toàn bộ damage plan. Trần đầu tư nằm ở Giant's Blood weapon route: vũ khí không nhất thiết đắt, nhưng giải attribute pressure (đủ Strength cầm một tay) ngốn nhiều passive point và gear slot — đó mới là chi phí thật.

Idolatry cần một phép tính tỉnh táo trước khi đầu tư. Node phạt "-4% to all Elemental Resistances per non-Idol Augment". Idol chỉ socket được vào sceptre và armour, trong khi mình có rất nhiều augment slot trên toàn bộ gear; nếu chỉ 3-4 slot là Idol còn lại ~6 slot là non-Idol augment thường, mình ăn khoảng -24% all-ele-res — đủ để phá cap res, buộc phải bù lại bằng res roll khác, ăn mòn gần hết lợi ích "10% companion damage per Idol". Vì vậy Idolatry là node pivot late-game investment-gated, không phải node lấy sớm: chỉ bật khi đã đủ Idol để stack dày VÀ giải được res. League-start thì bỏ qua Idolatry, đi companion-damage cluster thường trước. Đây là lý do build xếp budget_tier high — số DPS giấy chỉ ra khi weapon flat cao + Idol stack đủ; dưới floor đó build vẫn chạy nhưng yếu hơn nhiều paper math.

## Strengths & Limitations

Mạnh nhất là trần single-target và linh hoạt gear: vì damage đến từ flat weapon damage qua Catha chứ không từ một unique sceptre cố định, mình tự do chọn vũ khí flat cao nhất, và một con Unique Beast vừa tank vừa gánh boss trong khi nhân vật rảnh tay lo mobility/clear. Companion là minion nên nó còn ăn free phần "minion damage bonus" 20-35% mà PoB không hiển thị — DPS thực luôn cao hơn sheet. Inspiring Ally khiến companion-damage cluster buff luôn nhân vật, nên clear không bị bỏ rơi.

Điểm yếu phải thành thật. Spirit budget luôn căng: con thú mạnh đồng nghĩa hy sinh aura, build dễ "giàu damage nghèo thủ" nếu tham. Toàn bộ damage đặt vào *một* con thú — nó chết/despawn là gần như mất sạch damage tới khi revive (xem Failure Modes). Azmeri possession reroll mỗi 20s làm boss DPS dao động ngẫu nhiên. Giant's Blood route bị attribute pressure nặng. Và build này **chưa verify bằng PoB** vì PoB2 đang là data 0.4 — toàn bộ damage hiện ở mức thiết kế trên giấy, phải đo lại trong league trước khi tin.

## Failure Modes

**Single-point-of-failure (rủi ro số 1).** Toàn bộ damage build dồn vào một con companion duy nhất. Companion là Reviving Minion nên khi chết nó tự revive sau "a short delay", nhưng trong khoảng downtime đó build gần như mất hết damage — không có đàn minion nhỏ để gánh đỡ như hướng army. Reviving minion còn "automatically die/despawn if they are too far away from the player" rồi mới revive lại; nếu mình dash vượt quá tầm hoặc map có teleport/đoạn dài, con thú despawn đúng lúc cần damage. Ở boss khó, một combo "con thú ăn slam chết → revive downtime → mình hứng pha tiếp theo một mình" là kịch bản wipe điển hình. Giảm thiểu bằng companion-life cluster (các node "Companions have 12-15% increased maximum Life") và không over-extend khỏi con thú.

**Azmeri possession randomness (boss).** The Natural Order ép con Unique Beast "Possessed by random Azmeri Spirits, changing every 20 seconds". Khi mapping điều này luôn dương vì luôn có buff gì đó, nhưng vào boss pha damage ngắn, trúng nhịp buff yếu là mất một phần lớn burst — và mình không kiểm soát được nhịp này. Với boss cần burst đúng cửa sổ (pha mở giáp, phase transition), đây là biến số rủi ro thật. Không có cách tắt; chỉ có thể kéo dài fight để trải qua nhiều chu kỳ possession.

**Spirit reservation floor.** Build chỉ ra số khi con thú đủ to, mà con thú to ăn nhiều spirit. Nếu spirit chưa đủ (thiếu Trusted Kinship, thiếu reservation node, gem level thấp), mình buộc phải chọn: hoặc chạy con thú nhỏ (damage thấp), hoặc bỏ aura thủ (chết dễ). Dưới floor spirit, build vừa yếu damage vừa mỏng thủ — đây là lý do nó không phải league-start mượt.

**Hostile map mod.** Mod "Minions deal reduced damage" / "less recovery" đánh thẳng vào companion (vì companion là minion). Mod "monsters have increased life/elemental resistance" kéo dài fight, làm Azmeri randomness lộ rõ hơn. Reflect ít đau hơn build self-damage nhưng "cannot regenerate" + spike vẫn nguy vì lớp thủ nhân vật vốn đã bị ép mỏng để nhường spirit cho beast. Skip các map mod đánh minion damage/recovery khi farm.

**League-start viability.** Không phải hướng league-start lý tưởng: Catha + Unique Beast + spirit budget đều chỉ online ở map, và Idolatry là late-pivot. Chơi shell attack-Huntress qua campaign rồi mới pivot là bắt buộc — vào league mà cố ép companion engine từ act 1 sẽ vừa yếu vừa thiếu spirit.

## Summary

- Companion là minion: weapon-damage tree của nhân vật KHÔNG feed nó; chỉ :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} ("added Attack damage equal to 60% of main hand Weapon's damage") đưa flat weapon sang con thú — đây là chốt quan trọng nhất.
- Core scaling: flat main-hand (Giant's Blood two-hander là trần) × các lớp "more/increased companion damage" × :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} 1.84× more ở gem 20 × global minion bonus 20-35% (không hiện trên PoB).
- :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"} mở slot một Unique Beast cho trần single-target; chọn beast hit bằng attack, không phải caster (Catha chỉ feed Attack damage).
- :wiki-link{url="https://www.poe2wiki.net/wiki/Trusted_Kinship"} lấy vì 30% more companion reservation efficiency (không vì fantasy hai con thú); :wiki-link{url="https://www.poe2wiki.net/wiki/Idolatry"} là late-pivot vì penalty -4% res per non-Idol augment dễ phá cap res.
- Rủi ro cốt lõi: single-point-of-failure (một con thú chết = mất damage), Azmeri possession randomness khi boss, spirit reservation floor. Số liệu là test-plan — log companion DPS, spirit budget, EHP, beast modifier package trong league trước khi tin.

## Changelog

### 2026-05-29

- Draft concept ngày launch 0.5.0 (29/05). Chốt verbatim từ patch notes + tree 0.5 + wiki mirror: companion là minion (weapon-tree nhân vật không feed, chỉ Catha added-attack feed); Tame Beast 1.84× more ở gem 20; Trusted Kinship rework bỏ penalty defences; Idolatry penalty -4% res per non-Idol augment; global minion bonus 20-35% áp dụng cho companion. Số DPS để trống dạng test-plan vì PoB2 hiện là data 0.4.

## Relationships

- **alternative_to** [Spirit Walker Catha Companion](/builds/huntress/0-5-spirit-walker-catha-companion) — cùng core Catha weapon-scaling; bản này all-in một Unique Beast qua The Natural Order + Idolatry idol-stack, chốt rõ minion-modifier resolution mà bản kia để ngỏ test-plan.
- **derived_from** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — build hiện thực hoá hướng companion damage mà mechanic doc phân tích.
- **related** [Twister Huntress Starter](/builds/huntress/0-5-twister-huntress-starter) — cùng Spirit Walker; Twister là leveling shell và hướng projectile cạnh tranh spirit slot với companion.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — tổng quan league 0.5.0 Runes of Aldur, nơi Spirit Walker và hệ companion/idol được giới thiệu.
