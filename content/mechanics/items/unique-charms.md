---
template: templates/mechanic-template.md
document_type: mechanic
title: Unique charms
status: published
author: duocnv
created: '2026-06-10'
updated: '2026-06-10'
league: '0.5'
patch: 0.5.1
sub_class: items
tags:
  - item
  - unique
  - charm
  - ailment-immunity
  - freeze
  - ignite
  - poison
  - slow
  - rarity
  - poe2
  - mechanic
---

# Unique charms

:wiki-link{url="https://www.poe2wiki.net/wiki/Charm"} là loại trinket nằm trong charm slot trên belt, giữ một thanh charge, và tự kích hoạt theo điều kiện "Used when you become X" thay vì bấm tay như flask. Năm unique charm phủ gần hết charm slot trong meta 0.5.1: Nascent Hope, Beira's Anguish, Arakaali's Gift và The Fall of the Axe chặn bốn ailment nguy hiểm nhất — :wiki-link{url="https://www.poe2wiki.net/wiki/Freeze"} Freeze, :wiki-link{url="https://www.poe2wiki.net/wiki/Ignite"} Ignite, :wiki-link{url="https://www.poe2wiki.net/wiki/Poison"} Poison, :wiki-link{url="https://www.poe2wiki.net/wiki/Slow"} Slow — còn Rite of Passage là charm magic-find. Trong sample unique-charm của poe.ninja (mains top-XP), Nascent Hope đứng đầu ở 41,4% số character đeo unique charm, The Fall of the Axe 24,0%, Beira's Anguish 19,3%, Rite of Passage 11,2%, Arakaali's Gift 10,5% — bốn charm immunity gần như mặc định vì freeze/ignite/poison/slow là những disabler kết liễu nhanh nhất, và charm tự bật ngay khoảnh khắc dính ailment.

## Charm nằm trong belt và tự kích theo điều kiện

Charm chỉ giữ charge khi nằm trong charm slot trên belt — belt Vengeance Harness mình đang chạy mở 2 charm slot, đúng loại slot mấy charm này nhắm tới. Mỗi charm có một thanh charge tối đa (40 cho bốn charm immunity, 80 cho Golden Charm), và refill bằng cách giết quái hoặc nạp ở :wiki-link{url="https://www.poe2wiki.net/wiki/Wells"} Wells.

Cơ chế kích hoạt là điểm khác flask: thay vì bấm phím, charm tự dùng đúng lúc điều kiện trigger thỏa. Nascent Hope ghi "Used when you become Frozen" nên nó bật ngay khi mình bị Frozen; The Fall of the Axe ghi "Used when you are affected by a Slow" nên bật khi dính bất kỳ slow nào. Mỗi lần proc tiêu một lượng charge cố định ("Consumes X of Y Charges") rồi cấp effect trong thời lượng của charm — 3 giây cho bốn charm immunity, 1 giây cho Golden Charm.

Lượng charge tiêu mỗi lần proc quyết định nhịp sẵn sàng. Nascent Hope tiêu 40 of 40 nên một lần proc làm cạn sạch thanh charge, phải refill đầy mới có lần kế. Arakaali's Gift và The Fall of the Axe tiêu 20 of 40 nên đỡ được hai lần trước khi cạn. Rite of Passage tiêu 80 of 80, cạn hết mỗi lần dùng.

## Bốn charm chặn ailment lethal

Bốn charm này dựng trên bốn base charm khác nhau, và đây là chỗ dễ hiểu sai: dòng immunity cộng dòng trigger là property của **base charm**, không phải của unique. Một :wiki-link{url="https://www.poe2wiki.net/wiki/Thawing_Charm"} Thawing Charm rare cũng cho Immune to Freeze và "Used when you become Frozen" y hệt Nascent Hope. Cái mà unique thêm vào chỉ là dòng phụ — sustain charge on-kill, Energy Shield recharge, ignited ground, cross-recovery, hay Onslaught. Nên giá trị của bản unique nằm ở payload phụ đó, không phải ở bản thân immunity.

### Nascent Hope

```
Nascent Hope
Thawing Charm
Lasts 3.00 Seconds
Consumes 40 of 40 Charges on use
Immune to Freeze
Requires Level 12
Used when you become Frozen
──────────────────────────────
(20–25)% Chance to gain a Charge when you kill an enemy
Energy Shield Recharge starts on use
```

Nó chặn Freeze — ailment khóa hoàn toàn hành động, nên nguy hiểm nhất trong bốn loại và là lý do Nascent Hope dẫn đầu ở 41,4%. Dòng phụ "(20–25)% Chance to gain a Charge when you kill an enemy" cho self-sustain: vì charm tiêu 40 of 40 mỗi proc (cạn sạch), nguồn charge on-kill này là thứ giữ thanh charge đầy lại khi mapping mà không cần ghé Wells. Dòng "Energy Shield Recharge starts on use" reset delay :wiki-link{url="https://www.poe2wiki.net/wiki/Energy_Shield"} Energy Shield ngay lúc proc — với build ES, cú freeze thường đi kèm một hit lớn, nên kéo ES recharge khởi động sớm là một lớp hồi cộng thêm vào immunity.

### Beira's Anguish

```
Beira's Anguish
Dousing Charm
Lasts 3.00 Seconds
Consumes 30 of 40 Charges on use
Immune to Ignite
Requires Level 32
Used when you become Ignited
──────────────────────────────
(20–25)% Chance to gain a Charge when you kill an enemy
Creates Ignited Ground for 4 seconds when used, Igniting enemies as though dealing Fire damage equal to 500% of your maximum Life
```

Nó chặn Ignite (fire DoT) và mang sustain on-kill giống Nascent Hope, tiêu 30 of 40 mỗi proc. Dòng riêng của nó là rider tấn công: khi proc, charm tạo :wiki-link{url="https://www.poe2wiki.net/wiki/Ignited_Ground"} Ignited Ground 4 giây, ignite quái như thể deal fire damage bằng 500% maximum Life. Với pool 2.000 max Life, mỗi lần proc bung ra ignite quy theo 10.000 fire damage — một cú dọn pack đi kèm phòng thủ. Nhưng vì rider scale theo max Life, nó gần như chết trên build CI (1 life) hoặc low-life ES pool thấp; những build đó chỉ dùng Beira's Anguish cho phần immunity, coi ignited ground như zero.

### Arakaali's Gift

```
Arakaali's Gift
Antidote Charm
Lasts 3.00 Seconds
Consumes 20 of 40 Charges on use
Immune to Poison
Requires Level 24
Used when you become Poisoned
──────────────────────────────
Recover Life equal to (15–20)% of Mana Flask's Recovery Amount when used
Recover Mana equal to (15–20)% of Life Flask's Recovery Amount when used
```

Nó chặn Poison (chaos DoT stacking) và tiêu 20 of 40 mỗi proc, đỡ được hai lần trước khi cạn. Hai dòng phụ là cross-recovery: khi proc, charm đổ một cục Life lấy theo (15–20)% Recovery Amount của Mana Flask, và một cục Mana lấy theo (15–20)% Recovery Amount của Life Flask. Điểm cần để ý là cả hai đều tính theo **Flask's Recovery Amount**, nên cục hồi bằng 0 nếu không slot mana flask (hoặc life flask) tương ứng — charm này muốn ăn full giá trị thì cần đủ cặp flask đang mang. Trong năm charm, Arakaali's Gift xếp cuối ở 10,5% vì Poison ít gặp hơn freeze/ignite/slow ở endgame 0.5.

### The Fall of the Axe

```
The Fall of the Axe
Silver Charm
Lasts 3.00 Seconds
Consumes 20 of 40 Charges on use
Your speed is unaffected by Slows
Requires Level 10
Used when you are affected by a Slow
──────────────────────────────
Grants Onslaught during effect
```

Nó khác ba charm kia ở chỗ không phải "Immune to ailment" mà "Your speed is unaffected by Slows" — chill, temporal chains, chilled ground đều không cắt được tốc độ khi charm đang active. Dòng phụ "Grants Onslaught during effect" mới là thứ đẩy nó lên hạng hai ở 24,0%: :wiki-link{url="https://www.poe2wiki.net/wiki/Onslaught"} Onslaught cho 20% increased Skill Speed và 10% increased Movement Speed, nên đây vừa là chống slow vừa là buff tấn công thuần. Bị slow là chuyện xảy ra liên tục — mọi cold hit, mọi sàn debuff đều slow — nên charm gần như luôn active và Onslaught gần như có uptime cao. Đó là lý do một charm anti-slow lại được đeo nhiều hơn cả ignite lẫn poison immunity: nó trả về cả phòng thủ lẫn offensive trong cùng một slot.

## Rite of Passage gánh magic-find

```
Rite of Passage
Golden Charm
Lasts 1.00 Second
Consumes 80 of 80 Charges on use
15% increased Rarity of Items found
Requires Level 50
Used when you kill a Rare or Unique enemy
──────────────────────────────
Possessed by Spirit Of The <random Azmeri Spirit> for (10–20) seconds on use
```

Đây là charm thuần kinh tế, không phải phòng thủ. Base :wiki-link{url="https://www.poe2wiki.net/wiki/Golden_Charm"} Golden Charm cho 15% increased :wiki-link{url="https://www.poe2wiki.net/wiki/Rarity"} Rarity of Items found và trigger khi giết một Rare hoặc Unique. Dòng riêng của Rite of Passage là "Possessed by Spirit Of The <random Azmeri Spirit>" trong (10–20) giây mỗi lần proc: nó random một trong các :wiki-link{url="https://www.poe2wiki.net/wiki/Azmeri_Spirit"} Azmeri Spirit non-Sacred khi drop và khoá variant đó, không reroll được. Ví dụ Spirit of the Bear cấp 20% increased maximum Life, 100% increased Stun Threshold, 60% increased Stun Buildup, 20% reduced Damage taken, kèm định kỳ triệu hồi một con Bear spiritual đánh slam.

Hai điểm vận hành đáng nhớ: nhiều bản Rite of Passage có thể dùng đồng thời miễn là khác Spirit effect, nên gom được nhiều buff possession khác loại cùng lúc; và 3 bản reforge ở :wiki-link{url="https://www.poe2wiki.net/wiki/Reforging_Bench"} Reforging Bench luôn ra Owl variant — đường nhắm tới variant cụ thể nếu muốn. Item drop-restricted: chỉ rơi từ quái bị Azmeri spirit possess, không chance được bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Chance"} Orb of Chance.

## Vì sao charm immunity gần như mặc định trong meta

Belt mở charm slot, và slot đó gần như luôn nên dành cho ailment immunity vì freeze/ignite/poison/slow là nhóm disabler giết nhanh nhất — đặc biệt Freeze khoá toàn bộ hành động, một cú freeze giữa pack hay ngay trước boss slam là chết. Charm tự bật khoảnh khắc dính ailment nên nó biến một cú freeze có thể chết thành sự kiện gần như không hậu quả. Vì immunity đến từ base charm, mọi character serious đều muốn ít nhất một charm ailment-immunity trong slot; bản unique thắng slot nhờ payload phụ — on-kill sustain của Nascent Hope và Beira's Anguish giữ uptime khi mapping, Onslaught của The Fall of the Axe biến slot anti-slow thành buff offensive.

Chọn charm nào thì theo ailment phổ biến nhất ở content đang chạy. Belt thường có 2 charm slot, nên ưu tiên hai ailment đáng sợ nhất với build mình: Nascent Hope cho slot đầu vì freeze khoá hành động, The Fall of the Axe cho slot hai vì nó cộng cả Onslaught. Về charge economy, Nascent Hope và Rite of Passage cạn full bar mỗi proc (40 of 40, 80 of 80) nên cần refill đầy trước lần kế — on-kill sustain của Nascent bù lại phần đó khi mapping. The Fall of the Axe và Arakaali's Gift tiêu nửa bar (20 of 40) nên đỡ được hai proc; chúng không có mod sustain bonus, nhưng vẫn nạp charge bằng cách giết quái như mọi charm.

## Điểm yếu cần lường trước

Charm bật **sau** khi dính ailment, không chặn cú hit gây ra ailment. Immunity cleanse ngay và chặn re-apply trong 3 giây, nhưng đòn đánh tạo ra freeze vẫn trúng trước đó — charm cứu phần lockout kéo dài, không cứu cú hit mở màn.

Charge có thể cạn giữa chuỗi nguy hiểm. Nếu bị freeze liên tiếp nhanh hơn tốc độ refill — đặc biệt trong boss fight không có add để giết nên không nạp được charge on-kill — thì lần freeze thứ hai có thể không còn charm đỡ. Nascent Hope chịu rủi ro này cao nhất vì cạn 40 of 40 mỗi proc.

Mỗi charm chỉ phủ một ailment, và belt 2 slot chỉ phủ tối đa hai loại; nếu đã chọn Freeze + Slow thì Poison hoặc Ignite bỏ ngỏ. Ngoài ra hai rider phụ có điều kiện chết: Beira's Anguish "500% of maximum Life" gần như vô dụng trên CI/low-life, còn cross-recovery của Arakaali's Gift bằng 0 nếu không slot mana/life flask tương ứng.

Trong fight kéo dài, đáng log xem Nascent Hope có kịp refill 40 charge giữa hai lần freeze của boss không có add hay không — đó là kịch bản charge economy mỏng nhất.

## Version History

### Patch 0.3.0

Beira's Anguish đổi sang "Creates Ignited Ground for 4 seconds when used, Igniting enemies as though dealing Fire damage equal to 500% of your maximum Life" — trước đó nó ignite enemies in Presence on use. Dòng hiện tại trên item là bản 0.3.0 này.

### Patch 0.2.0f

Mọi charm trừ Golden Charm bị halve maximum Charges và halve Charges per Use, làm chúng refill nhanh hơn. Đây là lý do các charm immunity giờ làm việc trên thang charge nhỏ (40), và Golden Charm vẫn đứng riêng ở 80.

## Relationships

- **related** [Unique Items Mới](/mechanics/0-5-new-unique-items) — danh mục unique nổi bật của 0.5; charm bổ sung lớp trinket cho bức tranh trang bị đó.
- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — overview league 0.5 và meta trang bị hiện tại.
- **used_by** [Spirit Walker Companion Carry](/builds/huntress/0-5-spirit-walker-companion-carry) — build chạy 2 charm slot trên belt Vengeance Harness, đúng loại slot các charm này nhắm tới.
