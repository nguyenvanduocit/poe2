---
template: templates/mechanic-template.md
document_type: mechanic
title: Blood Mage Sanguine Tides Flask Sustain
status: published
author: duocnv
created: '2026-05-27'
updated: '2026-06-09'
league: '0.5'
patch: 0.5.0
sub_class: skills
tags:
  - blood-mage
  - sanguine-tides
  - life-flask
  - sustain
  - coc-comet
  - poe2
  - mechanic
---

# Blood Mage Sanguine Tides Flask Sustain

:wiki-link{url="https://www.poe2wiki.net/wiki/Sanguine_Tides"} là notable ascendancy passive của Blood Mage chuyển hoá life đã tiêu thành flask charge — và khi flask đầy, tự động consume một phần charge để grant buff physical damage. Điểm cốt lõi là nó không phải cơ chế healing: trong 0.5.0, flasks không recover life gì cả với node này. Toàn bộ vòng lặp hoạt động trên trục charge gen → auto-consume → damage buff, còn life recovery đến từ leech qua :wiki-link{url="https://www.poe2wiki.net/wiki/Vitality_Siphon"}.

## Text node sau 0.5.0

Sanguine Tides giờ có bốn dòng:

- Gain 1 Life Flask Charge per **2% Life spent** — cứ mỗi 2% max life tiêu vào skill cost, nhận 1 flask charge. Trước 0.5.0 là 4%, tức rate này đã được nhân đôi.
- On Hitting an Enemy while a Life Flask is at full Charges, **40% of its Charges are consumed** — passive trigger, không cần press flask.
- Gain **1% of damage as Physical damage for 5 seconds** per Charge consumed this way — 0.5.0 tăng từ 3 giây lên 5 giây.
- **Flasks do not recover Life** — trước 0.5.0 là 50% less recovery; giờ zero recovery hoàn toàn.

Prerequisite của Sanguine Tides là :wiki-link{url="https://www.poe2wiki.net/wiki/Sanguimancy"} (free ascendancy node đầu tiên: Skills gain a Base Life Cost equal to Base Mana Cost) và một minor Critical Chance node. Sanguimancy là nền tảng: không có nó, spell không tốn life, nên Sanguine Tides không có gì để chuyển thành charge.

## Tại sao cast rate cao là điều kiện cần

Với Sanguimancy active, mỗi spell tốn mana thì đồng thời tốn một lượng life bằng đúng base mana cost của nó. Sanguine Tides cắt 2% max life ra làm đơn vị đếm: cứ tiêu đủ 2% max life, nhận 1 charge.

Cụ thể: nhân vật có 4.000 max life thì 2% = 80 life. :wiki-link{url="https://www.poe2wiki.net/wiki/Comet"} ở level 20 tốn 173 mana (và 173 life). Mỗi lần Comet được cast: 173 / 80 ≈ 2 charge — con số xấp xỉ, tuỳ cách game round. Gargantuan Life Flask có 75 charge tổng; 40% auto-consume là 30 charge mỗi lần trigger. Với 2 charge mỗi Comet cast, cần khoảng 15 lần cast để bù lại phần đã mất.

Lý do :wiki-link{url="https://www.poe2wiki.net/wiki/Cast_on_Critical"} Comet là engine lý tưởng cho loop này không phải vì nó cast nhanh theo clock — Cast on Critical trigger theo energy từ critical hit, không theo cooldown cố định. Cái quan trọng hơn là mỗi lần CoC trigger Comet, nó tốn một lượng life lớn (Comet có base mana cost cao nhất trong các spell phổ biến: 173 ở level 20), sinh nhiều charge một lần. Chỉ cần tổng số Comet được fire đủ dày trong 5 giây (thời lượng buff) là vòng lặp tự duy trì.

Nếu life pool thấp hơn — ví dụ 2.500 life — 2% = 50 life, mỗi Comet cho 173/50 ≈ 3 charge, sinh charge nhanh hơn nhưng tổng pool cũng mỏng hơn. Trade-off này có nghĩa là build không cần bơm life cực cao để loop chạy, nhưng phải cẩn thận về độ an toàn khi đứng nhận damage trong lúc flash không recover life.

## Physical damage buff từ auto-consume

Auto-consume 40% charge khi hit at full → 30 charge trong ví dụ Gargantuan → **+30% of damage as Physical damage** trong 5 giây. Buff này không stack — apply lại chỉ reset duration.

+30% of damage as physical không phải increased physical, mà là "gain X% of damage as extra physical". Nó cộng phẳng vào mỗi hit tỷ lệ với damage base của hit đó — gần giống cơ chế :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Proliferation"} nhưng là physical. Với Comet doing cold damage, 30% của hit đó được thêm vào như physical. Không scale qua physical pen hay physical damage modifier trừ khi mình cũng đầu tư các modifier đó.

Buff này chủ yếu là bonus passive — bạn không chủ động quản lý nó vì trigger là automatic. Điều cần làm là đảm bảo uptime: flask phải được giữ gần đầy liên tục, và bạn phải hit enemy thường xuyên đủ để trigger auto-consume trước khi buff hết.

## Life recovery không qua flask

"Flasks do not recover Life" là penalty thật: nếu chết vì thiếu recovery, cơ chế này không giúp được gì. Recovery thực sự đến từ :wiki-link{url="https://www.poe2wiki.net/wiki/Vitality_Siphon"} — 20% of Spell Damage Leeched as Life (buffed từ 10% ở 0.5.0). Với Comet damage cao và trigger dày, leech rate này đủ để sustain trong combat bình thường.

Trường hợp nguy hiểm là khi không có enemy để hit (corridor, transition giữa room, hoặc đứng trong aura mà không cast). Lúc đó cả leech lẫn Life Remnant drops đều không có. :wiki-link{url="https://www.poe2wiki.net/wiki/Grasping_Wounds"} — node chuyển 25% hit damage thành delayed loss over 4 giây — giúp buffer damage spike, nhưng không phải full solution. Đây là lý do build cần pool life đủ lớn để chịu burst trước khi leech kịp bù.

Một điểm hay bị nhầm: "Flasks do not recover Life" chỉ tắt recovery từ flask. :wiki-link{url="https://www.poe2wiki.net/wiki/Life_Remnants"} (skill từ Sanguimancy) vẫn cho monster drop remnant khi bị hit và remnant đó vẫn recover life khi collect — đây là source recovery thứ hai ngoài leech.

## Optimization

Kích thước flask ảnh hưởng trực tiếp tới buff magnitude: 40% của 30-charge flask cho +12% physical, 40% của 75-charge flask cho +30%. Gargantuan Life Flask (Lv40, 75 charge) là tier tốt nhất cho buff. Flask dung lượng thấp hơn sinh buff yếu hơn dù dễ fill hơn.

Số charge per cast cũng phụ thuộc vào mana cost của spell được trigger. Comet (173 mana) cho nhiều charge hơn một spell nhỏ hơn. Setup hai spell khác nhau trong CoC — ví dụ Comet + Spark — vừa tăng max energy (cần nhiều crit để trigger), vừa có hai spell tốn life mỗi trigger, tổng charge gen tốt hơn nhưng energy requirement cũng cao hơn.

Khi đẩy tier map lên cao, ailment threshold của monster tăng mạnh, CoC cần damage cao hơn để fill energy nhanh (xem wiki CoC: crit cần khoảng 10× ailment threshold mới reliable). Nếu trigger rate CoC sụt, charge gen sụt theo, và buff uptime giảm. Đây là điểm dễ gãy nhất khi transition từ low-tier lên endgame map.

## Failure modes

**Map mod chặn hit:** Hexproof, Cannot be Stunned (không liên quan), nhưng quan trọng hơn là mod **No Leech**. Với "Flasks do not recover Life" active, no-leech map đồng nghĩa mất toàn bộ recovery trừ Life Remnants. Không chạy được trừ khi có nguồn recovery thứ ba.

**Burst one-shot trước khi leech kịp phản ứng:** Vitality Siphon leech cần hit mới activate. Nếu bị burst trong lúc không cast — ví dụ đứng sai position lúc boss slam — không có recovery nào kịp. Grasping Wounds giảm mức độ burst nhưng không loại bỏ. Pool life 4.000+ là floor để chịu standard T16 hit.

**CoC trigger sụt ở high-tier:** Như đã nói, ailment threshold scale exponentially theo monster level. 100k damage đủ reliable ở T1, nhưng ở T16 (monster level 80, threshold ~26k) cần damage cao hơn nhiều để energy fill nhanh. Build CoC Comet cần đầu tư damage đủ lớn trước khi đẩy tier.

**Flask management thiếu slot:** Sanguine Tides chỉ track một "Life Flask". Nếu không có life flask trong belt (hoặc life flask hết charge), vòng lặp dừng hẳn — không có charge để consume, không có buff. Đây là failure mode niche nhưng thực tế khi leveling với gear không đủ.

## Version History

### Patch 0.5.0 (Return of the Ancients)

- Sanguine Tides: tăng charge rate gấp đôi — 1 charge per 2% Life spent (trước 4%).
- Thời lượng physical damage buff tăng từ 3 giây lên 5 giây.
- Penalty đổi từ "50% less Life Recovery from Flasks" thành "Flasks do not recover Life" — cứng hơn nhưng rõ ràng hơn về intent: flask là damage tool, không phải healing tool.
- Vitality Siphon (cùng ascendancy, cùng passive cluster): buff từ 10% lên 20% Spell Damage Leeched as Life — recovery thật sự đến từ đây.

## Relationships

- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — overview patch 0.5.0, gồm buff Blood Mage trong 0.5.0.
