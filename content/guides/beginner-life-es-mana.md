---
template: templates/guide-template.md
document_type: guide
title: "Ba pool tài nguyên: Life, Energy Shield và Mana"
status: published
author: duocnv
created: '2026-06-10'
updated: '2026-06-10'
league: '0.5'
patch: 0.5.1
guide_type: fundamentals
tags:
  - poe2
  - 0-5
  - beginner
  - life
  - energy-shield
  - mana
  - defense
  - fundamentals
---

# Ba pool tài nguyên: Life, Energy Shield và Mana

POE2 có ba pool tài nguyên riêng biệt — Life, Energy Shield, Mana — và cộng thêm Spirit là thứ nhiều người mới nhầm với Mana. Hiểu ba pool này quyết định bạn đọc tình huống chiến đấu như thế nào và chọn hướng phòng thủ nào khi xây build.

## Life là pool nền, về 0 là game over

Life là máu. Khi Life về 0, nhân vật chết. Không có cơ chế đặc biệt nào cứu bạn khi Life cạn — đây là giới hạn cứng duy nhất trong game.

Life recover theo ba cách: dùng **life flask**, **life regeneration** từ passive và gear, hoặc **life leech** khi đánh trúng enemy. Flask là nguồn quan trọng nhất trong combat vì nó hồi ngay lập tức; regen và leech là hai lớp passive bù thêm. Khi vào town hoặc hideout, Life tự về đầy.

Khi Life xuống dưới 35% max, nhân vật được tính là ở trạng thái **Low Life**. Một số passive và unique item unlock buff mạnh khi ở ngưỡng này, nhưng đây là lãnh thổ của build nâng cao — người mới nên tránh xa vì sống ở 35% Life chỉ cần một hit bất ngờ là xong.

## Energy Shield hấp thụ damage trước rồi tự hồi

**Energy Shield** (ES) là lớp đệm nằm trên Life. Mọi hit đánh vào nhân vật trừ ES trước; chỉ khi ES cạn sạch thì Life mới bị ảnh hưởng. Build đẩy ES cao có thể hứng lượng lớn damage mà Life gần như không động — đây là lý do nhiều archetype trung-cao cấp chọn đường này.

Điểm khác biệt cốt lõi so với Life: ES **tự hồi mà không cần flask**. Sau 4 giây không nhận damage vào ES hoặc Life, ES bắt đầu tự recharge ở tốc độ 12.5% max ES mỗi giây. Bất kỳ hit nào làm giảm ES hoặc Life đều reset đồng hồ 4 giây từ đầu. Passive và gear có thể rút ngắn delay này xuống còn 2 giây khi đạt 100% faster start of Energy Shield Recharge — nhưng base là 4 giây, không phải 2.

Người mới hay mắc nhầm ở chỗ này: thấy ES tự hồi tưởng nó rất mạnh, nhưng trong boss fight liên tục nhận damage thì ES không bao giờ kịp hồi. ES phát huy giá trị nhất ở combat kiểu burst — nhận đòn lớn, né ra, chờ hồi, quay vào — không phải ở những đoạn đứng yên chịu đòn liên tục.

Hai loại damage **bypass ES hoàn toàn** và trừ thẳng vào Life: **Bleeding** và **Poison**. Ngoài ra, **chaos damage** không bypass nhưng đánh ES với hiệu quả gấp đôi — 100 chaos damage trừ 200 ES. Build ES nặng cần chaos resistance đặc biệt vì lý do này.

## Mana trả chi phí skill, Spirit là thứ khác

**Mana** là fuel cho mọi skill. Mỗi lần cast spell hay dùng attack, Mana giảm theo cost của skill đó. Mana tự regen liên tục ở tốc độ 4% max mana mỗi giây — spam skill quá dày thì Mana cạn và skill bị block lại cho đến khi hồi đủ.

**Spirit** là resource hoàn toàn riêng biệt, không liên quan Mana. Spirit dùng để "reservation" — giữ aura, minion thường trực, và persistent buff luôn bật. Spirit không tiêu không hồi; nó là trần cố định. Chi tiết về Spirit và cách kiếm nó có trong [Spirit: tài nguyên reservation của POE2](/guides/beginner-spirit).

## Nên build Life hay ES

Không cần chọn một trong hai. **Hybrid Life+ES** là hướng đi hợp lệ và khá phổ biến — ES giảm áp lực lên flask trong khi vẫn có Life pool ổn định làm nền.

Build **Life thuần** dễ đọc hơn cho người mới: biết ngay mình còn bao nhiêu Life, recovery qua flask rõ ràng, không lo Bleeding hay Poison bypass trong lúc ES đang cạn. Build **ES cao** đòi hỏi hiểu cơ chế recharge và nhận biết lúc nào có thể nghỉ để ES kịp hồi, áp lực hơn khi mới quen.

Khi vào endgame và quen với rhythm của POE2, hybrid Life+ES thường là điểm cân bằng tốt nhất — có buffer từ ES, có nền từ Life, flask cover cả hai.

## Relationships

- **related_mechanics** [Energy Shield Recovery](/mechanics/energy-shield-recovery) — cơ chế recharge delay, rate, và Runic Ward trong 0.5 cho người muốn đào sâu hơn
- **related** [Spirit: tài nguyên reservation của POE2](/guides/beginner-spirit) — pool thứ tư hay bị nhầm với Mana, guide riêng giải thích cách kiếm và quản lý
- **related_mechanics** [Armour Defensive Scaling](/mechanics/armour-defensive-scaling) — layer phòng thủ vật lý bổ sung bên cạnh Life và ES
