---
template: templates/mechanic-template.md
document_type: mechanic
title: Lavianga's Spirits
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
  - mana-flask
  - mana
  - reservation
  - caster
  - poe2
  - mechanic
---

# Lavianga's Spirits

:wiki-link{url="https://www.poe2wiki.net/wiki/Lavianga%27s_Spirits"} là unique :wiki-link{url="https://www.poe2wiki.net/wiki/Gargantuan_Mana_Flask"} yêu cầu Level 49, định nghĩa bởi một dòng: "This Flask cannot be Used but applies its Effect constantly." Flask không có activation, không tốn charge, chỉ phục hồi mana liên tục trong suốt combat mà không cần micro. Trong sample top-XP của poe.ninja ở Runes of Aldur, 42.6% build trang bị nó — phần lớn là caster và build chạy nhiều aura reservation cần mana sustain thụ động thay vì dựa vào flask chủ động.

## Chỉ số

```
Lavianga's Spirits
Gargantuan Mana Flask
Recovers (37–55.5) Mana over 2.00 Seconds
Consumes 10 of 75 Charges on use
Requires Level 49
──────────────────────────────────────────────
This Flask cannot be Used but applies its Effect constantly
(70–80)% reduced Amount Recovered
──────────────────────────────────────────────
"How do I cope with what I witnessed on Wraeclast?
Thank the Ancestors! My cup, it overflows."
- Lavianga, former advisor to Kaom
```

Base Gargantuan Mana Flask phục hồi 185 mana / 2s. Mod "(70–80)% reduced Amount Recovered" cắt còn 20–30% lượng đó, cho ra 37–55.5 mana trên mỗi chu kỳ 2 giây.

## Cơ chế always-on và tính toán recovery thực tế

"This Flask cannot be Used" nghĩa là không có nút uống, không tốn charge để kích hoạt, không cần re-trigger sau khi hết duration. Flask luôn trong trạng thái "đang dùng" — mỗi 2 giây hoàn thành một chu kỳ recovery rồi bắt đầu lại ngay lập tức. Charge line "Consumes 10 of 75 Charges on use" trên tooltip chỉ là thông tin base flask, không có tác dụng thực tế vì flask không bao giờ được kích hoạt thủ công.

Lượng mana phục hồi mỗi giây phụ thuộc vào roll của "(70–80)% reduced Amount Recovered":

- Roll 70% reduced (best): 55.5 mana / 2s = **27.75 mana/sec**
- Roll 80% reduced (worst): 37 mana / 2s = **18.5 mana/sec**

:wiki-link{url="https://www.poe2wiki.net/wiki/Quality"} 20% trên flask cộng thêm 20% lượng recovery, đẩy range lên:

- Best roll + 20% quality: 66.6 mana / 2s = **33.3 mana/sec**
- Worst roll + 20% quality: 44.4 mana / 2s = **22.2 mana/sec**

Có một điểm cần biết khi build: mod tăng Flask Duration (từ passive tree hay flask suffix) **không tăng tổng mana phục hồi** — nó chỉ kéo dài chu kỳ 2 giây ra, làm tốc độ phục hồi mỗi giây giảm xuống trong khi tổng lượng mỗi chu kỳ không đổi. Ví dụ với +50% duration: chu kỳ kéo dài lên 3s, cùng 37–55.5 mana nhưng chia trên 3s → chỉ còn 12.3–18.5 mana/sec. Build nào tình cờ có nhiều flask duration modifier trên tree hoặc gear cần tính đến hiệu ứng này.

## Build nào cần nhất

Lavianga's Spirits đặc biệt có giá trị với build có chi phí mana cao theo thời gian liên tục — cụ thể là hai nhóm:

**Caster chạy nhiều aura reservation:** Aura reservation cắt maximum mana, khiến pool còn lại mỏng hơn để chi cho skill cost. Khi pool mana bị bó như vậy, một hit burst mana cost dễ cạn pool và phải dừng cast. Flask always-on bù mana liên tục mà không đòi hỏi click giữa combat, tốt hơn hẳn so với flask mana thường — đặc biệt trong những encounter dài không có downtime để uống flask.

**Skill có mana cost cao per cast:** Spell build spam tốc độ cao với cast speed lớn, hoặc skill hỗ trợ qua nhiều :wiki-link{url="https://www.poe2wiki.net/wiki/Support_Skill"} làm cost mỗi cast tăng lên đáng kể. 18.5–27.75 mana/sec thụ động giảm tải cho mana regen tự nhiên từ Intelligence và passive tree.

Ngược lại, build không gặp vấn đề mana — ví dụ attack build dùng ít skill cost, hoặc build đã có nhiều "mana gained on kill" / "mana leech" — không cần flask này. Một flask mana thường roll tốt sẽ cho burst recovery cao hơn nhiều trong 2–4s active window khi cần, còn Lavianga's Spirits chỉ thắng ở chiều duy trì liên tục không cần micro.

Flask cũng không tương thích với setup dùng flask chủ động để trigger hiệu ứng on-use hay on-flask-use passives, vì không có "use" event nào xảy ra.

## Kết luận

Lavianga's Spirits giải quyết đúng một vấn đề: mana leak dần theo thời gian combat mà không cần để ý. 18.5–27.75 mana/sec (lên tới 22.2–33.3 với quality 20%) không phải con số lớn nếu so với burst flask thường, nhưng nó hoàn toàn không phụ thuộc vào thời điểm uống hay charge sustain — đây là lý do build caster nhiều reservation coi nó là slot belt mặc định thay vì thứ gì đó phải quản lý. Flask duration modifier là điểm duy nhất cần kiểm lại khi lên build — nếu vô tình stack flask duration cao, recovery per second sẽ giảm đáng kể dù tooltip không hiển thị rõ điều đó.

## Version History

### Patch 0.4.0

Item introduced.

## Relationships

- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — league overview 0.5.0, context về meta caster và reservation trong Runes of Aldur.
- **related_mechanics** [Stormweaver Infusion Mana Loop](/mechanics/stormweaver-infusion-mana-loop) — build caster spam tốc độ cao, một trong những archetype hưởng lợi nhất từ mana recovery thụ động.
- **related_mechanics** [0.5 New Unique Items Overview](/mechanics/0-5-new-unique-items) — danh sách unique mới 0.5, bao gồm mana-related.
