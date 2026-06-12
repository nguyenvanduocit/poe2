---
template: templates/mechanic-template.md
document_type: mechanic
title: Heart of the Well
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
  - jewel
  - desecrated
  - charm
  - poe2
  - mechanic
---

# Heart of the Well

Heart of the Well là unique :wiki-link{url="https://www.poe2wiki.net/wiki/Diamond"} jewel, Limited to 1, cắm vào một allocated jewel socket trên passive tree. Khác mọi unique jewel khác, item này không tới với mod cố định: nó luôn drop kèm bốn dòng :wiki-link{url="https://www.poe2wiki.net/wiki/Desecrated_Modifier"} chưa reveal — hai prefix và hai suffix — roll từ một pool 73 modifier riêng của chính item (35 prefix, 38 suffix). Pool này exclusive: phần lớn là mod không bao giờ roll được trên một rare jewel thường. Item drop-restricted, không :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Chance"} ra được, chỉ rớt từ Lichborn :wiki-link{url="https://www.poe2wiki.net/wiki/Rogue_exile"} trong :wiki-link{url="https://www.poe2wiki.net/wiki/Abyss"} encounter; ra mắt ở 0.3 và vẫn là core Abyss drop trong 0.5. Trong sample top-XP của poe.ninja league 0.5, đây là unique được slot nhiều nhất — 49,5% character đeo nó.

## Item trông thế nào khi chưa reveal

```
Heart of the Well
Diamond
Limited to: 1
--------
<Custom Desecrated prefix>
<Custom Desecrated prefix>
<Custom Desecrated suffix>
<Custom Desecrated suffix>
--------
"Countless souls scream in agonising harmony,
forever sinking under the weight of the newly dead."
```

Bốn dòng `<Custom Desecrated prefix/suffix>` là đúng những gì nameplate hiện lúc nhặt — bốn slot Desecrated chưa reveal, mỗi slot hiện ra dạng một dòng ký hiệu abyssal màu xanh. Slot bị chiếm chỗ ngay cả khi chưa reveal, nên một copy chưa reveal đã cố định là hai prefix + hai suffix, chỉ chưa biết roll ra mod gì. Toàn bộ giá trị của item nằm ở pool reveal, không có base stat nào khác trên Diamond.

## Cơ chế Desecration quyết định item có mod gì

Reveal làm tại :wiki-link{url="https://www.poe2wiki.net/wiki/Well_of_Souls"} ở Act 2, hoặc tại chính the Well of Souls trên Atlas (vị trí hiện ra sau khi hoàn thành Abyss encounter đầu tiên). Đây là cơ chế reveal chung của mọi Desecrated modifier áp lên bốn slot riêng của item: mỗi lần reveal một slot, game offer ba lựa chọn mod cho đúng loại slot đó, mình chọn một. Với Heart of the Well, ba lựa chọn đó luôn lấy từ pool 73-mod độc quyền của item — reveal prefix thì ba option đều là prefix trong pool, reveal suffix thì ba option đều là suffix.

Điểm cốt lõi: đây không phải gamble mù. Chọn-một-trong-ba mỗi slot cho phép lái về dòng mình muốn. Còn lái xa hơn nữa bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Abyssal_Echoes"} — kích hoạt trong inventory trước khi reveal thì reroll được ba option đúng một lần, tức một slot có thể xem tới sáu mod trước khi chốt. Atlas passive :wiki-link{url="https://www.poe2wiki.net/wiki/Blessing_of_the_Source"} thêm chance để item drop với một dòng Desecrated thứ năm, nâng trần lên năm mod thay vì bốn.

Một khi đã reveal, item coi như đã desecrate và không desecrate lại được — reveal là commit. Vì vậy thao tác thật sự khi cầm copy mới là: mang tới Well of Souls, reveal từng slot, ở mỗi slot ngắm ba option và chốt dòng hợp build, dùng Omen of Abyssal Echoes cho slot prefix quan trọng nếu ba option đầu không có gì đáng.

## Vì sao gần nửa meta slot nó

Hai trụ cột giải thích con số 49,5%, và cả hai đều là thứ một rare jewel không cho được.

Trụ thứ nhất là pool exclusive. Mạnh nhất trong đó là cụm "Gain (9-15)% of Damage as Extra Fire / Cold / Lightning Damage" và "Gain (7-13)% of Damage as Extra Chaos Damage" — bốn dòng prefix lấy một phần damage của mỗi hit và cộng thêm thành damage nguyên tố, bất kể build đánh damage type gì. Một phys attacker nhận thêm element, một lightning caster nhận thêm cold/fire/chaos; không build hit-based nào không ăn. Vì có hai slot prefix, mình có thể ngắm hai dòng extra-element khác type cùng lúc, chồng generic added damage mà rare jewel không có. Cùng pool prefix còn có (40-60)% increased Armour / Energy Shield / Evasion Rating from Equipped Body Armour — biến một body base lớn thành lớp defense cộng thêm từ jewel — và (30-50)% chance to :wiki-link{url="https://www.poe2wiki.net/wiki/Pierce"} an Enemy cho projectile build.

Trụ thứ hai là reveal agency. Vì mỗi slot cho chọn một trong ba, cộng Omen of Abyssal Echoes reroll một lần, người chơi steer được về đúng cụm chase thay vì phó mặc RNG. Chính tổ hợp scaling-độc-quyền cộng khả-năng-lái này, chứ không phải bản thân việc cắm vào jewel socket, là lý do item thống trị slot jewel thay vì một rare.

## Mod nào đáng nhắm khi reveal

Việc thật sự cần làm khi cầm item là biết ngắm dòng nào theo từng archetype, vì pool phủ nhiều trục khác nhau.

Build hit-based bất kỳ ngắm hai slot prefix vào extra-element: Fire/Cold/Lightning (9-15)% hoặc Chaos (7-13)%. Đây là target phổ quát nhất và là lý do chính item lên 49,5%. Build projectile ưu tiên (30-50)% chance to Pierce — pierce cho mũi tên/đạn xuyên qua nhiều enemy, đẩy clear thẳng lên. Build có body base defense lớn ngắm (40-60)% increased Armour/ES/Evasion from Equipped Body Armour, vì phần trăm này áp lên base body nên càng base to càng đáng. Build :wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} companion ngắm prefix "(15-25)% increased Damage while your :wiki-link{url="https://www.poe2wiki.net/wiki/Companion"} is in your :wiki-link{url="https://www.poe2wiki.net/wiki/Presence"}" — companion zoo đứng quanh player gần như luôn thoả điều kiện. Exclusion check: dòng này chết với build không field companion, ngược lại extra-element prefix vẫn ăn vì companion damage cũng là hit.

Build xài nhiều :wiki-link{url="https://www.poe2wiki.net/wiki/Charm"} có một cụm prefix riêng: (10-15)% chance khi dùng Charm để dùng thêm một Charm khác mà không tốn charge, (15-25)% increased Charm Effect, và Recover (5-10)% maximum Mana mỗi khi dùng Charm — gộp lại thành lớp charm-mana economy mà không slot nào khác gánh. Build minion lấy các dòng minion: Minions gain (10-15)% max Life as Extra ES, Minions có +(3-4)% all Elemental Resistances, Minion regen và phys damage reduction.

Hai slot suffix là utility nhỏ hơn, dùng để bịt lỗ build: +1% to Maximum Fire/Cold/Lightning Resistance, (4-8)% increased Critical Hit Chance hoặc (6-12)% increased Critical Damage Bonus, (2-3)% increased Attack/Cast Speed, Gain additional Ailment Threshold = (4-10)% maximum ES. Suffix magnitude thấp nên đừng kỳ vọng nó gánh damage — coi chúng là phần thưởng phụ sau khi đã chốt prefix.

## Ràng buộc và mặt trái

Pool prefix sâu khoảng 35 dòng, mà mỗi lần reveal chỉ offer ba option, nên dòng chase cụ thể không đảm bảo xuất hiện trong lần reveal đầu. Omen of Abyssal Echoes reroll một lần giúp tăng cơ hội nhưng không bảo đảm; một copy "hoàn hảo" với hai extra-element prefix đúng ý thường cần may mắn hoặc nhiều copy. Ở một roll sample đọc trên poe2db, một copy ra +1% max Lightning Res, 12% Cooldown Recovery Rate, 14% Mana Cost Efficiency và Debuffs expire 6% faster — bốn dòng utility nhỏ, minh hoạ đúng cái giá của reveal không ngắm: cùng item đó có thể thành stat stick damage hoặc thành mớ mod vặt.

Reveal xong là commit, không desecrate lại được, nên đừng reveal bừa rồi tiếc. Item lại drop-restricted và không chance được, chỉ farm từ Lichborn exile trong Abyss encounter — không có đường currency-craft ra nó. Cuối cùng, nhiều mod trong pool có điều kiện: dòng charm vô dụng nếu build không dùng charm, prefix companion-presence chết nếu không có companion, body-armour scaler bằng 0 nếu base body nhỏ, mod minion bằng 0 nếu không có minion. Reveal phải khớp đúng feature build, và cụm "Gain % as Extra Element" chỉ feed build hit-based — build DoT hay ailment thuần ăn rất ít từ nó.

Khi vào league nên log cần trung bình bao nhiêu lần reveal cộng omen để chốt được hai extra-element prefix khác type, và liệu dòng Desecrated thứ năm từ Atlas passive :wiki-link{url="https://www.poe2wiki.net/wiki/Blessing_of_the_Source"} có đáng số atlas point bỏ ra không.

## Version History

### Patch 0.3.0 (Rise of the Abyssal)

Item introduced cùng cơ chế Abyss và Desecrated modifier. Drop từ Lichborn exile trong Abyss encounter, pool Desecrated riêng. Vẫn là core Abyss drop trong 0.5 Runes of Aldur và đứng đầu usage jewel slot trong sample top-XP poe.ninja league 0.5.

## Relationships

- **related** [Unique Items Mới](/guides/0-5-new-unique-items) — survey meta unique 0.5; Heart of the Well thống trị jewel slot dù là item core từ Abyss (0.3), không nằm trong 42 unique mới của 0.5.
- **synergizes_with** [Spirit Walker — Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt) — prefix "increased Damage while your Companion is in your Presence" trong pool ngắm thẳng cho companion build.
