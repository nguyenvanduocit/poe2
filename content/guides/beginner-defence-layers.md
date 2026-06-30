---
template: templates/guide-template.md
document_type: guide
title: "Ba lớp phòng thủ vật lý: Armour, Evasion và Block"
status: published
author: duocnv
created: '2026-06-10'
updated: '2026-06-19'
league: '0.5'
patch: 0.5.3
guide_type: fundamentals
tags:
  - poe2
  - 0-5
  - beginner
  - armour
  - evasion
  - block
  - defence
  - physical
---

# Ba lớp phòng thủ vật lý: Armour, Evasion và Block

POE2 không có một con số "giảm damage" duy nhất — thay vào đó, survival phụ thuộc vào ba lớp phòng thủ riêng biệt, mỗi lớp hoạt động theo nguyên lý khác nhau và che được điểm yếu của nhau. Hiểu ba lớp này giúp người mới tránh cái bẫy cổ điển: stack một thứ thật cao rồi chết vì lý do hoàn toàn khác.

## Armour giảm damage nhưng không đều nhau

:wiki-link{url="https://www.poe2wiki.net/wiki/Armour"} giảm physical damage từ hit theo một công thức phụ thuộc vào cỡ của đòn. Cách dễ nhớ nhất: cần armour **gấp 10 lần** damage của cú hit để giảm được 50%. Có 1.000 armour trước đòn 100? Giảm 50%. Có 1.000 armour trước đòn 1.000? Chỉ giảm được khoảng 9%.

Tức là armour rất mạnh khi đứng trong pack và hứng hàng trăm cú hit nhỏ liên tục — gần như không cảm thấy gì. Nhưng trước một boss slam lớn, cùng lượng armour đó chỉ cắt được một phần nhỏ. Cap của armour là 90% reduction, và chỉ áp dụng cho physical damage — elemental hit đi xuyên qua hoàn toàn.

Warrior và Titan là class tự nhiên nhất cho armour build vì có sẵn strength scaling. Playstyle phù hợp: đứng yên hứng đòn trong combat, không cần né nhiều.

## Evasion né hoàn toàn hoặc ăn nguyên full damage

:wiki-link{url="https://www.poe2wiki.net/wiki/Evasion"} cho xác suất né hoàn toàn một hit. Khi né thành công, bạn không nhận damage gì cả. Khi né thất bại, bạn ăn nguyên 100% damage — không có giảm giữa chừng. Đây là điểm quan trọng nhất về evasion: nó không có giá trị khi fail, và không có giá trị gì trước damage over time (poison, bleed không phải hit).

Điểm mạnh của evasion là nó **không chỉ** chặn physical. Bất kỳ hit nào — physical, elemental, chaos — đều có thể được né. Thêm vào đó, evasion build trong 0.5 thường lấy thêm **Deflection** qua passive nodes gần khu vực Dexterity: một layer phụ cho cơ hội giảm 40% damage từ hit, kể cả các đòn boss có glow đỏ mà evasion không chặn được. Hai notable tiêu biểu chuyển Evasion Rating sang Deflection Rating là Wild Cat (12%) và Staunch Deflection (8% — patch 0.5.3 thêm dòng này) — một character 8,000 Evasion lấy cả hai nhận thêm 1,600 Deflection Rating từ tree mà không phải chiếm slot suffix trên gear. Hai layer này cộng lại thành lý do Ranger và Huntress class có thể sống sót ổn ngay cả khi có lúc roll hụt.

Playstyle phù hợp: di chuyển liên tục, dùng dodge roll để tránh đòn lớn, không đứng trong đám quái hứng hit liên tiếp.

## Block chặn hoàn toàn nhưng cần shield và có giới hạn

:wiki-link{url="https://www.poe2wiki.net/wiki/Block"} chặn toàn bộ damage của một hit — không giảm, là chặn hẳn. Nguồn block chính là shield, và mặc định bị giới hạn ở **50% chance**. Tức là về mặt xác suất, một nửa số hit vẫn xuyên qua bình thường.

Một số điểm cần biết khi dùng shield: block vẫn để stun xuyên qua, và một số boss skill có glow đỏ không thể passive-block được. Với những đòn đó, cần active-block bằng cách giơ shield lên chủ động — mechanic riêng, tốn action.

Shield cũng cho thêm armour và tạo foundation cho melee tank build. Playstyle phù hợp: cận chiến, dùng shield raise chủ động khi boss wind-up, kết hợp với armour để bù vào cái 50% block không chặn được.

## Tại sao stack một lớp duy nhất thường tệ hơn

Armour mạnh với pack nhưng yếu với boss burst. Evasion hoàn toàn không có giá trị khi fail roll — và fail roll sẽ xảy ra. Block bị giới hạn 50%, đòn không block vẫn ăn full. Mỗi lớp đơn độc đều có một kịch bản nó gần như vô dụng.

Kết hợp hai hoặc ba lớp lại thì gap đó đóng lại: armour giảm damage khi evasion fail, block chặn những đòn boss mà evasion không xử lý được, evasion giúp giảm số lần armour phải gánh. Đây là lý do gear trong POE2 thường có stat hybrid — body có cả armour lẫn evasion, hoặc passive tree cho cả hai là điều bình thường, không phải lãng phí.

Một lớp nữa ra mắt trong 0.5 là **Runic Ward** từ Verisium Runeforging: kích hoạt như safety net khi life tụt về 1, hấp thụ damage thêm một nhịp trước khi chết. Chi tiết về cách hoạt động của nó có trong [Armour Defensive Scaling](/guides/armour-defensive-scaling).

## Relationships

- **related_mechanics** [Armour Defensive Scaling](/guides/armour-defensive-scaling) — đi sâu vào công thức armour, Runic Ward, và cách 0.5 buff armour/evasion scaling.
- **related_mechanics** [Energy Shield Recovery](/guides/energy-shield-recovery) — layer thứ tư bổ sung cho ba lớp này; Energy Shield nên đọc cùng để hiểu đủ bức tranh defence tổng.
