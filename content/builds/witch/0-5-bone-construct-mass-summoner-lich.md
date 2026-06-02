---
template: templates/build-template.md
document_type: build
title: Unearth Bone Construct Mass Summoner
status: draft
author: duocnv
created: '2026-05-29'
updated: '2026-05-30'
class: Witch
ascendancy: Lich
league: '0.5'
patch: 0.5.0
budget_tier: low-budget
confidence_level: LOW
pob_coverage: NA
build_tags:
  primary_skill: Unearth
  damage_type: physical
  playstyle: minion
  content_focus: mapping
tags:
  - witch
  - lich
  - unearth
  - bone-construct
  - minion
  - minion-army
  - summoner
  - mana-stacking
  - life-stacking
  - 0-5
  - poe2
---

# Unearth Bone Construct Mass Summoner

Đây là build summoner số đông: không nuôi một con companion to mà thả ra hai ba chục con :wiki-link{url="https://www.poe2wiki.net/wiki/Bone_Construct"} cùng lúc, đứng backline điều cả bầy càn qua màn. Core là :wiki-link{url="https://www.poe2wiki.net/wiki/Unearth"} dựng Bone Construct từ xác, scale damage qua minion gem level, gánh bởi engine mana-từ-life của :wiki-link{url="https://www.poe2wiki.net/wiki/Lich"} — chơi tốt nhất ở mapping, và tối ưu cho fantasy số đông hơn là cho meta.

## Build Overview

Damage source là bầy Bone Construct. Mỗi construct yếu xìu nếu đứng một mình, nhưng build không chơi một con — nó chơi số đông. Damage scale theo hai trục tách biệt: **số lượng construct** (quyết bởi limit của tree, không phải gem level) và **hit damage mỗi con** (quyết bởi minion gem level của Unearth cộng các more-multiplier toàn cục cho minion). Minion trong 0.5 ăn thêm một loạt *more damage* lên non-unique và unique tự động, và bản 0.5 còn vá bug khiến bonus này không hiện trên tooltip nữa — nên DPS thực luôn cao hơn con số PoB/in-game báo. Đẩy Unearth lên gem level cao bằng `+to Level of Minion Skills` trên gear là đòn bẩy chính cho **hit damage**; còn muốn nhiều construct hơn thì phải đi node `+limit` trên tree, vì gem cap số construct ở 20 và level vượt 20 chỉ thêm damage chứ không thêm bodies.

Engine nuôi cả cỗ máy này là Lich với keystone :wiki-link{url="https://www.poe2wiki.net/wiki/Soulless_Form"}: bỏ hết mana regen mặc định, đổi lấy "hồi mana bằng 6% maximum Life mỗi giây". Unearth ở gem level cao tốn mana kinh khủng (cost lên tới 76 mana/cast), nên thay vì stack mana regen, mình stack **maximum Life** để life pool cấp mana cho Unearth. Lớp thứ hai của engine là cặp :wiki-link{url="https://www.poe2wiki.net/wiki/Necromantic_Conduit"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Blackened_Heart"}: Conduit cho mình và allies trong Presence buff Unholy Might, còn Blackened Heart cộng 4% magnitude của Unholy Might cho mỗi 100 maximum Mana. Tức là build stack **cả Life lẫn Mana** — Life nuôi mana để cast Unearth, Mana khuếch đại Unholy Might đổ thẳng vào damage của construct. Defense dựa vào pool Energy Shield của Witch cộng node minion-defensive, còn mobility thì đến từ chính việc đứng backline sau bức tường xương. Constraint xuyên suốt là **corpse**: không có xác thì không có construct, nên mọi quyết định kỹ thuật xoay quanh việc sản xuất xác liên tục.

## Skill Gems & Links

Skill định danh là :wiki-link{url="https://www.poe2wiki.net/wiki/Unearth"} — spell hình nón deal Physical damage lên xác, mỗi xác bật ra một (xác lớn thì nhiều) Bone Construct. Gem cap số construct ở 8 tại level 1 và lên thẳng 20 tại level 20; base duration mỗi con là 15 giây. Quan trọng phải hiểu đúng: đẩy gem level **vượt 20** bằng gear chỉ tăng hit damage mỗi construct, **không** tăng số lượng construct — limit của gem dừng ở 20 vì range level của nó là 1-20. Muốn nhiều con hơn phải lấy node `+limit` trên tree (xem phần Passive Tree), trần thực tế của Witch/Lich rơi quanh ~24 con.

Link của Unearth xây quanh việc nó là một Physical hit spell. Mình chạy :wiki-link{url="https://www.poe2wiki.net/wiki/Armour_Break"} để mỗi nhát cast phá giáp đám đông dọn đường cho construct — Unearth tự nó là hit nên break được giáp; :wiki-link{url="https://www.poe2wiki.net/wiki/Heft"} cho more maximum physical hit damage; :wiki-link{url="https://www.poe2wiki.net/wiki/Physical_Mastery"} (+1 level skill Physical) và :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Mastery"} (+1 level skill Minion) — hai mastery này cộng dồn gem level, đẩy hit damage mỗi con. Ô AoE còn lại dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Effect"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Concentrated_Area"} tùy mình cần phủ rộng (mapping) hay dồn vùng (boss). Đừng tìm Faster Attacks — gem đó không tồn tại trong PoE 2, và Unearth là spell nên attack speed cũng vô nghĩa.

Một support đáng cân nhắc rồi quyết định bỏ là :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Instability"} (minion nổ khi xuống Low Life, deal 15% maximum Life as Fire). Nghe có vẻ hợp build minion dùng-một-lần này, nhưng Bone Construct có life pool cực nhỏ, nên 15% của một pool tí xíu gần như không đáng — không phải mình bỏ sót, mà là payoff quá thấp so với một ô AoE/damage khác.

**Tip:** patch 0.5 vá một loạt bug khiến support gem trước đây không gắn được vào Unearth. Nếu bạn từng thử một combo support ở league cũ thấy nó "không ăn", hãy test lại — nhiều support giờ mới thật sự kích hoạt.

Bầy :wiki-link{url="https://www.poe2wiki.net/wiki/Spectre"} qua :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} đóng vai trò nguồn sinh xác chứ không phải nguồn damage chính: chọn một monster mà sub-minion nó triệu hồi chết liên tục, mỗi cái chết để lại một xác cho Unearth ăn. Mình link spectre với :wiki-link{url="https://www.poe2wiki.net/wiki/Meat_Shield"} để nó lì hơn (đổi lại bớt damage — không sao, vai trò của nó là sống và sinh xác liên tục) và :wiki-link{url="https://www.poe2wiki.net/wiki/Corrosion"} nếu spectre gây poison để phá giáp thêm. **Đây là mắt xích yếu nhất khi port sang 0.5:** con spectre-đẻ-xác mạnh của các bản trước đã bị khóa hoặc disable, và league 0.5 vừa mở nên con tốt nhất hiện tại chưa rõ. Phải test in-league con nào spawn sub-minion nhiều và rẻ spirit nhất — đây là vấn đề mở của build, log lại khi vào league.

Hai offering chạy nền cho cả bầy: :wiki-link{url="https://www.poe2wiki.net/wiki/Pain_Offering"} (buff minion damage, hi sinh máu) link với :wiki-link{url="https://www.poe2wiki.net/wiki/Guatelitzi's_Ablation"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Danse_Macabre"}; :wiki-link{url="https://www.poe2wiki.net/wiki/Bone_Offering"} link với :wiki-link{url="https://www.poe2wiki.net/wiki/Concentrated_Area"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Considered_Casting"}. Đừng tìm Rage Fountain (Font of Rage) — support đó đã bị gỡ khỏi game ở 0.4.

**Main Skill (6L):** Unearth + Armour Break + Heft + Physical Mastery + Minion Mastery + Magnified Effect (swap Concentrated Area khi đánh boss).

**Spirit Reservation:** Bind Spectre (con đẻ-xác) + Meat Shield + Corrosion · cộng :wiki-link{url="https://www.poe2wiki.net/wiki/Sacrifice"} ở weapon set 2 cho opener (xem Leveling Notes).

**Offerings:** Pain Offering + Guatelitzi's Ablation + Danse Macabre · Bone Offering + Concentrated Area + Considered Casting.

**Utility:** một curse như :wiki-link{url="https://www.poe2wiki.net/wiki/Vulnerability"} hard-cast khi cần — đừng đặt blasphemy aura vì Presence range nhỏ ép mình lại quá gần, chết oan.

Exclusion check: Soulless Form xoá mana regen mặc định nên mọi node "increased Mana Regeneration" thành vô dụng — đừng phí điểm vào chúng; :wiki-link{url="https://www.poe2wiki.net/wiki/Cooldown_Recovery_I"} (Ingenuity) không sửa được skill của minion nên không dùng cho spectre; Guatelitzi's Ablation và Danse Macabre chỉ hỗ trợ Offering, không gắn vào Unearth được.

## Ascendancy

Lich là ascendancy curse/Unholy-Might/hi-sinh-ES, không có node minion riêng — synergy với mass-summoner là gián tiếp qua Unholy Might. Node phải lấy đầu tiên là Soulless Form, vì không có nó thì Unearth gem-level-cao chết vì hết mana ngay; lưu ý mặt trái của nó là "10% damage taken bypasses Energy Shield", một lỗ thủng thật sự trên lớp ES nên đừng coi ES là tường tuyệt đối.

Sau đó đi Necromantic Conduit để mở Unholy Might cho mình và allies trong Presence (đổi lại mất 5% max mana mỗi giây — engine mana-từ-life gánh được), rồi Blackened Heart để biến mỗi 100 max mana thành 4% magnitude Unholy Might. Đây là điểm khiến stack mana không chỉ để cast mà còn để nhân damage construct. Hai điểm cuối linh hoạt: nếu thấy bầy chết nhiều thì lấy node phòng thủ/curse của Lich, còn nếu đã đủ tanky thì nhặt thêm node khuếch đại debuff. Lich không nhận đợt rebalance nào ở 0.5 nên toàn bộ wording trên giữ nguyên từ league trước — đây là một trong những phần ổn định nhất của build.

## Passive Tree & Mastery

Trục chính của tree là cluster minion của Witch, kéo theo ba nhóm node phục vụ đúng cơ chế build. Quan trọng nhất cho mass-summoner là cặp node `+limit` cho temporary minion — vì số construct cap ở 20 từ gem, đây là cách duy nhất nâng quân số. Notable **Expendable Army** cho "+2 to Limit of Minions summoned" cho temporary minion (Bone Construct chính là temporary minion vì sống 15 giây rồi despawn) kèm 20% increased Minion Duration; **Known by All** cho thêm "+2 to Limit". Hai node này là toàn bộ nguồn `+limit-for-temporary-minion` trong cây, nên trần construct thực tế là 20 (gem) + 2 + 2 = **~24 con** — đó là con số mục tiêu, không phải ba bốn chục như cảm giác RTS gợi ý. Số lượng chính là damage, nên hai node này đáng giá hơn hầu hết node "increased minion damage" lẻ.

Nhóm thứ hai là **duration**: Bone Construct là minion tạm thời, despawn liên tục làm gãy đà mapping. Base 15 giây cộng 20% từ Expendable Army cộng quality (tối đa +5 giây) cộng vài node Minion Duration nhỏ đưa duration lên khoảng giữa-hai-mươi giây — muốn dài hơn nữa phải gắn hẳn support duration nặng (kiểu Prolonged Duration), đổi một ô link lấy thời gian sống. Coi đây là dải giá trị tùy đầu tư chứ không phải một con số cố định.

Nhóm thứ ba là **crit cho minion** — qua notable **Necrotic Touch** (40% increased minion critical chance) và **Grip of Evil** (40% increased minion critical damage bonus), kèm jewel crit socket. Phần damage nền lấy **Comradery**, **Pack Encouragement** và **Lust for Sacrifice**. Lưu ý Pack Encouragement cho 5% increased **Attack** Damage cho mỗi minion trong Presence, **cap ở 80%** — nó chỉ ăn vào phần Attack damage của construct (construct là melee có dash attack nên có ăn), không phải generic minion damage, và đụng trần 80% là dừng. Lust for Sacrifice cho 50% increased minion damage khi có 2 offering đang chạy — đúng setup Pain + Bone Offering của mình, đây mới là node generic damage to nhất trong nhóm.

Spirit của Lich đến từ gear + tree generic, không từ ascendancy: base sceptre (Rattling Sceptre cho ~100 flat), suffix `% increased Spirit` ("Lord's" 20-26%), flat `+Spirit`, notable generic **Profane Commander** (4% increased Spirit + mở rộng Presence area), và unique :wiki-link{url="https://www.poe2wiki.net/wiki/Soul_Mantle"} (+75 Spirit ở 0.5). Việc life-stack ở đây phục vụ Soulless Form (mana) và EHP — Life của Lich nuôi mana để cast Unearth, không đổi trực tiếp ra spirit. Bổ sung node reservation efficiency như **Self Sacrificing** để nhét thêm con vào cùng pool spirit; nhớ node này có hai vế — `+40% Reservation Efficiency of Minion Skills` (lãi cho spectre/offering minion) nhưng kèm `20% reduced Spirit Reservation Efficiency of Skills` áp lên skill không-phải-minion (aura/utility hard-cast), nên đừng tính nó là lãi thuần cho mọi thứ. Mảng minion-defensive như **Fleshcrafting** (minion 15% max life as ES) thêm vào khi construct bị fry quá nhanh. Tổng allocation rơi quanh ~100 điểm main tree; ưu tiên defensive và limit/duration trước damage lẻ ở giai đoạn đầu, vì không giữ được minion sống và đông thì không có gì để snowball.

## Stat Priorities & Defenses

Đây là các con số target ở giai đoạn budget — coi như mốc tham chiếu, không phải số mình tự đo, và sẽ dịch khi 0.5 ổn định:

- **Life:** ~1,500 — đủ để Soulless Form cấp mana và làm đệm EHP; càng cao càng tốt vì nó vừa là EHP vừa là nguồn mana cho Unearth.
- **Energy Shield:** ~4,000 — lớp đệm chính, nhưng nhớ 10% damage xuyên qua nó vì Soulless Form.
- **Resistances:** 76/76/71 (fire/cold/lightning), Chaos ~36% — cap được fire/cold là đủ chạy red map an toàn cơ bản.
- **Unearth gem level:** ~36 nhờ `+minion skill level` trên gear — đẩy cao hơn nữa chỉ thêm hit damage mỗi con, không thêm số con.
- **Construct limit / duration:** ~24 con (20 base + Expendable Army 2 + Known by All 2), duration khoảng giữa-hai-mươi giây sau quality + node — log lại khi vào league để xác nhận con số thật.

Lớp phòng thủ thực dụng: ES pool gánh phần lớn, nhưng vì xuyên 10% nên cần res cap chắc và đủ Life để không bị burst phá thủng — physical slam và burst lớn chọc thẳng vào Life (stack thấp, ~1.5k) bất kể ES. Không có lớp armour/evasion nào đỡ. Bone Construct đứng trước làm vật cản vật lý, giảm số đòn tới người. Đây không phải build tanky — nó sống bằng việc đứng xa và bằng bức tường minion, không bằng spreadsheet EHP.

### Performance Ratings

| Aspect          | Rating (1-5) |
|-----------------|--------------|
| clear_speed     | 4            |
| boss_damage     | 2            |
| survivability   | 2            |
| mobility        | 2            |
| league_start    | 4            |
| budget_scaling  | 2            |

## Resources

Build này chưa có PoB của riêng mình vì league vừa mở và nhiều con số còn là target chưa log in-game (vì vậy `pob_coverage: NA`) — phần Stat Priorities ở trên là mốc tham chiếu để dựng PoB2 đầu tiên khi vào league. Về tham khảo ngoài, đã có ít nhất một creator đẩy archetype Bone Construct (Unearth) vào endgame: [Endgame Bone Construct Minion Build Overview](https://www.youtube.com/watch?v=t1hCin0Esks). Một video không phải bằng chứng build clear được Uber, nhưng nó cho thấy archetype không thuần lý thuyết — dùng để hình dung playstyle và setup, không quote số.

- **PoB:** chưa có — dựng từ Stat Priorities khi vào league.
- **Video guide:** https://www.youtube.com/watch?v=t1hCin0Esks (endgame Bone Construct overview — tham khảo playstyle, không phải proof boss-tier)

## Gear Progression

### Leveling
Chạy minion thường (skeletal warrior/sniper) cho tới khi vào được Lich và lấy Soulless Form; trước đó dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Considered_Casting"} hoặc node mana để gồng cost Unearth. Nhặt mọi base có `+to Level of Minion Skills` và max life — đây là build "gear rẻ vẫn chạy", không cần unique đắt để khởi động.

### Early Mapping
Weapon trục là một sceptre như :wiki-link{url="https://www.poe2wiki.net/wiki/Rattling_Sceptre"} (~100 spirit, sceptre cap +4 minion skill level) ghép off-hand/focus cho thêm spirit + ES. Helmet dùng base int ES (:wiki-link{url="https://www.poe2wiki.net/wiki/Jade_Tiara"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Magus_Tiara"}) roll mod `of the Despot` (+2 minion skill level) cộng spirit reservation efficiency — không có base nào tên "Sorcerous Tiara", +minion level đến từ mod chứ không từ base. Body như :wiki-link{url="https://www.poe2wiki.net/wiki/Vile_Robe"} cho ES nền, spirit trên body đến từ mod `% increased Spirit`. Mọi slot còn lại nhồi max life, max mana, resistances, chaos res (hai :wiki-link{url="https://www.poe2wiki.net/wiki/Amethyst_Ring"}) và ES.

### Endgame
Ưu tiên đẩy `+minion skill level` lên tối đa (sceptre +4, helmet +2, amulet, jewel) để Unearth chạm gem level cao — đây là nơi hit damage mỗi construct bùng (số lượng con thì đã chốt ~24 từ tree). Tăng song song spirit (nuôi thêm spectre/offering) và max mana (khuếch đại Unholy Might qua Blackened Heart). Vũ khí thay thế cho hướng push minion level là mace :wiki-link{url="https://www.poe2wiki.net/wiki/Chober_Chaber"} (+2-3 to Level of all Minion Skills) hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Trenchtimbre"} (+1-2), cân nhắc nếu mất ít spirit hơn là gain damage.

### Mirror Tier (BiS)
Ở tier cao nhất, jewel :wiki-link{url="https://www.poe2wiki.net/wiki/Prism_of_Belief"} có thể roll `+1-3 to Level of all <random> Skills` trúng Unearth — nhưng nó random skill (không chỉ định được) và drop từ :wiki-link{url="https://www.poe2wiki.net/wiki/The_Arbiter_of_Ash"} nên đắt và hên xui, không phải món rẻ như ở các bản trước. Phần còn lại là double-corrupt gear cho +minion level implicit và tối đa hoá cùng lúc Life + Mana + Spirit. Lưu ý: vì construct cap ở ~24, tiền đổ vào mirror tier chủ yếu mua hit damage và survivability, không mua thêm quân số.

## Flasks

Hai charm/flask slot dành cho ailment mình hay chết nhất: :wiki-link{url="https://www.poe2wiki.net/wiki/Thawing_Charm"} chống freeze (đứng yên cast giữa bầy mà bị freeze là chết) và :wiki-link{url="https://www.poe2wiki.net/wiki/Staunching_Charm"} chống bleed. Life/mana flask theo nhu cầu — vì Soulless Form đã cấp mana từ life nên mana flask ít cần, ưu tiên flask life/ES instant để chữa burst xuyên ES. Slot còn lại linh hoạt theo map mod (granite/quartz cho phòng thủ tức thời).

## Pantheon & Bandits

PoE 2 0.5 không có hệ Pantheon/Bandit như PoE 1; "lựa chọn ngoài tree" tương đương là phân bổ điểm Atlas và Idol. Với build mapping thuần, ưu tiên Atlas node tăng mật độ quái (để có nhiều xác và nhiều mob cho construct cày) hơn là node boss. Idol (socket vào sceptre/helmet ở 0.5) chọn loại buff "Allies in your Presence" — tăng tốc/res cho cả bầy — thay cho cơ chế Haste aura cũ vốn không tồn tại trong PoE 2.

## Leveling Notes

Campaign chạy minion mặc định của Witch tới Act 2-3, swap dần sang Unearth làm trục một khi có đủ corpse-generation và vào được Lich. Opener mỗi map/boss dùng tech weapon-swap: để :wiki-link{url="https://www.poe2wiki.net/wiki/Sacrifice"} (reservation skill, "Must be active in both Weapon Sets") trên set 2 cùng một minion rẻ spirit như :wiki-link{url="https://www.poe2wiki.net/wiki/Terracotta_Soldier"}, swap sang set 2 để Sacrifice cho phép dùng chính minion làm xác, cast Unearth ra một loạt construct, rồi swap về set 1 mà đi.

**Tip — snapshot:** Bone Construct sinh ra mang theo buff/gem level ở đúng thời điểm summon. Nếu off-hand set 2 yếu hơn set 1 thì construct spawn ra cũng yếu theo. Cách rẻ nhất là giữ lại weapon cũ mỗi lần upgrade rồi nhét vào set 2, để off-hand luôn "đủ tốt" — nếu không, bạn sẽ phải làm cả setup spirit-shuffle trên một weapon set ở đầu mỗi map, rất lề mề.

## Budget & Investment

Build chạy được từ rất rẻ — đây là điểm mạnh: chỉ cần một sceptre spirit + vài mảnh gear có `+minion skill level` và max life là đã clear red map cơ bản. Divine breakpoint nằm ở chỗ gom đủ `+minion skill level` để Unearth chạm gem level cao và đủ spirit nuôi cả bầy spectre + 2 offering cùng lúc; trước mốc đó build clear chậm và hay gãy đà vì construct chết nhanh không kịp tái tạo. Diminishing returns đến sớm: một khi đã max minion level và limit construct chạm trần ~24, tiền đổ thêm chỉ mua hit damage lẻ và ES/Life/res để sống sâu hơn chứ không tăng clear nhiều — không có node nào nâng quân số quá 24. Đây là build "rẻ để vui", không phải build để bung mọi divine vào đẩy boss tier cao.

## Strengths & Limitations

Mạnh nhất ở **fantasy và clear mật độ cao**: cảm giác RTS điều một đạo quân hai ba chục con càn map là thứ ít build nào cho được, và vì đứng backline nên độ an toàn cơ bản tốt khi bầy còn đông. Hai phần ổn định nhất là core ascendancy (Lich không bị động ở 0.5) và global minion damage bonus vừa được 0.5 vá lại (~25-35% lên non-unique). Gear rẻ, league-start-friendly, scale dễ hiểu.

Hạn chế thì nhiều và thật. Build **clunky** — Bone Construct là minion melee có dash attack để đuổi địch, nhưng nó không player-follow như reviving minion; chạy traversal xa hoặc qua chokepoint là bỏ cả đám lại phía sau, gãy snowball. **Lag** với 20+ minion có thể tụt xuống 10-15 FPS, console gần như không chơi nổi. Boss tier cao chưa được chứng minh ở patch này: single-target dựa vào một đạo quân dùng-một-lần với life/damage mỗi con bé và cap ~24, mà solo boss không có adds thì xác cạn — construct cũ despawn ở 15 giây mà không có xác mới để bù. Build hợp đẩy map/early pinnacle hơn là farm Uber. Và mắt xích corpse-generation phụ thuộc vào việc tìm được con spectre-đẻ-xác tốt cho 0.5 — chưa có lời giải chắc.

## Failure Modes

- **Map mod "no corpse / cannot raise"** hoặc mod làm minion chết quá nhanh → engine ngừng hẳn: không xác = không construct = không damage. Đây là cách build die phổ biến nhất, vì toàn bộ damage phụ thuộc nguồn xác liên tục.
- **One-shot xuyên ES:** Soulless Form cho 10% damage taken bypasses Energy Shield, nên một slam boss lớn hoặc burst vật lý có thể chọc thẳng qua lớp ES vốn là phòng thủ chính — và đập vào Life pool chỉ ~1.5k. EHP spreadsheet không phản ánh cú này. Cần đủ Life đệm và tránh đứng ăn đòn.
- **Solo boss làm cạn corpse:** bầy construct sống 15 giây rồi despawn. Trên boss không có adds, sau vài giây đầu không còn xác mới để tái tạo, quân số tụt dần về 0 trong khi boss còn nguyên máu — đây là lý do single-target yếu, không chỉ vì damage mỗi con bé.
- **Gear floor:** dưới mốc đủ `+minion skill level` + đủ spirit nuôi cả bầy, build clear chậm rõ rệt và gãy đà liên tục vì construct chết nhanh — số DPS "trên giấy" chỉ đúng khi đã chạm floor đó.
- **Patch sensitivity:** build sống nhờ Unearth scale theo gem level, Soulless Form đổi life thành mana, và global minion damage bonus mà 0.5 vừa re-tune lên +25-35% — chính cái bonus mới chỉnh đó là mục tiêu nerf tương lai dễ thấy nhất. Mass-minion lag cũng là thứ GGG hay nhắm để cân bằng. Nếu bất kỳ trụ nào bị đụng, engine gãy.
- **Corpse-spectre chưa proven ở 0.5:** con spectre-đẻ-xác mạnh của các bản trước đã bị khóa/disable; cho tới khi tìm ra con thay thế tốt trên 0.5, đây là rủi ro mở của build và là risk league-start lớn nhất (lớn hơn cả chi phí gear).

## Summary

- Mass-summoner Witch/Lich dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Unearth"} dựng Bone Construct, scale qua hai trục tách biệt: số lượng (~24 con, cap bởi tree) và hit damage mỗi con (minion gem level + global bonus) — fantasy "đạo quân RTS" hiếm có.
- Engine kép: :wiki-link{url="https://www.poe2wiki.net/wiki/Soulless_Form"} biến Life thành mana nuôi Unearth, còn :wiki-link{url="https://www.poe2wiki.net/wiki/Blackened_Heart"} biến Mana thành magnitude Unholy Might đổ vào damage construct — nên stack cả Life lẫn Mana. Construct là mana-cast (không reserve Spirit), nên Spirit chỉ gating spectre + offering chứ không gating quân số.
- Gear rẻ, league-start-friendly; đòn bẩy chính là `+minion skill level` (hit damage) và cặp `+limit` Expendable Army + Known by All (quân số). Spirit của Lich đến từ gear + Profane Commander + Soul Mantle + Self Sacrificing efficiency — trần spirit khiêm tốn hơn Infernalist hay Shaman vốn có node spirit ascendancy riêng.
- Điểm yếu cần biết trước khi chơi: clunky (construct không player-follow), lag với đông minion, phụ thuộc nguồn corpse, single-target yếu trên solo boss, và corpse-spectre cho 0.5 chưa chốt.
- Đây là build adapt từ bản cũ sang 0.5; core mechanic đã verify còn nguyên trên 0.5, nhưng nhiều con số là target cần log lại khi thật sự vào league.

## Changelog

### 2026-05-30
- Rebuild theo verify pass trên nguồn 0.5.0. Sửa hai lỗi mechanic gánh build: (1) Beidat's Will là node ascendancy **Infernalist** (`ascendancyName: Infernalist`, tree 0.5.0) kèm "Reserves 25% of Life" — Lich (Witch3) không bao giờ allocate được; (2) Tribute to Utula là node **Smith of Kitava**, cũng ngoài tầm Witch/Lich. Viết lại nguồn spirit thành gear + Profane Commander + Soul Mantle + Self Sacrificing efficiency.
- Sửa construct count: gem cap Limit ở 20 (range level 1-20), `+to Level of Minion Skills` vượt 20 chỉ thêm hit damage **không** thêm con. Trần thực tế là 20 + Expendable Army (+2) + Known by All (+2) = **~24**, thay con số "~30" cũ ở mọi chỗ. Bỏ target "44 giây duration" cố định, đổi thành dải giá trị derive từ base 15s + quality + node.
- Qualify node: Pack Encouragement là 5% increased **Attack** Damage/minion, cap 80% (không phải generic minion damage); Self Sacrificing có downside `20% reduced Spirit Reservation Efficiency of Skills` cho skill không-phải-minion. Thêm note Minion Instability (available nhưng low-value vì construct life pool bé).
- Thêm Performance Ratings table (6 dimension) và external Resources (endgame Bone Construct video). Reframe hệ quả spirit: construct là mana-cast nên mất nguồn life→spirit chỉ siết budget spectre/offering, không giảm quân số.

### 2026-05-29
- Bản nháp đầu, adapt build Bone Construct mass-summoner từ patch cũ sang 0.5.0. Verify core (Unearth → Bone Construct, Soulless Form, Necromantic Conduit + Blackened Heart) còn nguyên trên 0.5. Gỡ các phần đã chết ở 0.5: spectre-đẻ-xác bản cũ (khóa/disabled), Faster Attacks và Haste (không tồn tại trong PoE 2), Rage Fountain (gỡ ở 0.4). Sửa gear: không có base "Sorcerous Tiara", Prism of Belief là +random skill drop từ Arbiter. Đánh dấu corpse-spectre cho 0.5 là vấn đề mở cần test in-league.

## Relationships

- **alternative_to** [Infernalist Spectre Legion](/builds/witch/0-5-infernalist-spectre-legion) — hướng summoner khác cùng class Witch, dùng spectre vĩnh viễn làm damage thay vì construct tạm thời; so sánh độ ổn định vs fantasy số đông.
- **alternative_to** [Dinomancer Lich Elephant](/builds/witch/dinomancer-lich-elephant) — cùng ascendancy Lich nhưng dồn vào companion + Infernal Legion thay vì đạo quân construct.
- **related_guides** [Minion Army Build Comparison](/guides/0-5-minion-army-build-comparison) — so sánh các hướng minion-army 0.5 (construct tạm thời vs spectre vĩnh viễn vs companion) theo trần quân số, spirit và độ ổn định.
- **related_mechanics** [Energy Shield recovery](/mechanics/energy-shield-recovery) — bối cảnh lớp ES mà Soulless Form chọc thủng 10%, lý do không coi ES là tường tuyệt đối.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — overview league 0.5.0, context endgame và meta summoner đang nghiên cứu.
