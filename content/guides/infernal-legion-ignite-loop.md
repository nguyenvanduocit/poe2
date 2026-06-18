---
template: templates/mechanic-template.md
document_type: mechanic
title: Infernal Legion Ignite Loop
status: published
author: duocnv
created: '2026-05-19'
updated: '2026-06-09'
league: '0.5'
patch: 0.5.0
sub_class: skills
tags:
  - infernal-legion
  - ignite
  - synthesized-ignite
  - minion-mechanic
  - support-gem
  - poe2
  - mechanic
---

# Infernal Legion Ignite Loop

:wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Legion"} là support gem cho minion tự đốt bản thân mỗi giây và ignite mọi enemy đứng trong bán kính quanh nó. Cái quyết định toàn bộ cách scale skill này là một cụm chữ trong gem text: minion ignite "**as though dealing Base Fire Damage equal to X% of Minion's Maximum Life**". Đó là synthesized ignite — không có hit, magnitude tính thẳng từ phần trăm máu minion — nên nửa số modifier ignite quen thuộc không đụng được vào nó. Hiểu chỗ này là hiểu vì sao IL ăn modifier nào, bỏ modifier nào.

0.5.0 cắt skill này khá đau, nên trước hết phải nói rõ giờ còn lại gì.

## Infernal Legion còn lại gì sau 0.5.0

Chỉ còn hai tier dùng được, và cả hai đều bị halve:

- **Infernal Legion I** — minion mất 10% max life mỗi giây dưới dạng fire damage (trước 20%), ignite enemy trong bán kính 1.5m as though dealing Base Fire Damage = 10% Minion's Maximum Life (trước 20%).
- **Infernal Legion II** — y hệt 10%/10% nhưng bán kính 2m, kèm +20% Fire Resistance cho minion.
- **Infernal Legion III** — không còn lấy được nữa.

Tier III từng là trần thật của skill: self-burn 30%/giây, ignite base 25%, bán kính 2m. Mất nó nghĩa là mất luôn bậc scaling cao nhất, còn I/II thì base ignite tụt từ 20% xuống 10%. Cộng cả hai, output ignite của một setup IL endgame so với trước patch chỉ còn dưới một nửa.

Có một nerf gián tiếp dễ bỏ sót: 0.5.0 sửa bug khiến IL luôn tính là critical hit nếu minion có bất kỳ crit chance nào. Setup nào trước đây cho companion một ít crit chance là đang ăn ké damage từ bug đó — giờ hết. Build ignite thuần không đầu tư crit thì không đổi gì, vì ignite là DoT nên crit vốn không nên đụng tới (xem phần gate-split bên dưới).

## Vì sao synthesized ignite không đi qua pipeline hit

Standard ignite trong POE2 phải qua đường: một Hit gây fire damage → đóng góp vào Flammability/Ignite magnitude → roll chance ignite → ignite tick 20% fire damage của hit đó mỗi giây. IL bỏ hết. Cụm "as though dealing Base Fire Damage" cho một magnitude cố định bằng X% máu minion, không cần hit nào xảy ra — minion đứng trong radius là enemy ignited ngay.

Đây là cùng một pattern POE2 dùng cho vài skill khác: :wiki-link{url="https://www.poe2wiki.net/wiki/Flame_Wall"} ("Igniting enemies as though dealing Fire Damage equal to 20% of your Maximum Mana"), :wiki-link{url="https://www.poe2wiki.net/wiki/Saitha%27s_Spear"} ("equal to 10% of your maximum Life"). Nhận ra nó là synthesized ignite thì biết ngay hai hệ quả: mọi modifier gắn vào "Hit" trượt hết (vì không có hit), và damage chỉ còn nhờ vào hai trục — magnitude của ignite, và mức damage enemy phải nhận.

## Con số ignite tính theo máu minion

Vì magnitude khóa theo máu minion, công thức gọn lại quanh đúng một biến: companion max life H.

Base fire damage "as though dealing" = 0.10 × H. Ignite trong POE2 tick 20% của base fire damage đó mỗi giây, nên DPS nền trước mọi modifier là:

$$
\text{DPS}_\text{target} = 0.02 \times H \times M_\text{magnitude} \times D_\text{taken}
$$

`M_magnitude` gom mọi "more/increased Magnitude of Ignite"; `D_taken` là hệ số damage enemy phải nhận (curse, exposure, shock). Lấy một ví dụ minh hoạ với H = 80.000 máu: nền 0.02 × 80.000 = 1.600/giây/target. Thêm :wiki-link{url="https://www.poe2wiki.net/wiki/Searing_Flame"} II (×2.0) lên ~3.200, thêm curse + shock (~1.5×) ra ~4.800/giây/target; năm enemy trong radius ≈ 24.000 DPS từ riêng ignite. Hệ số 0.02 này chính là chỗ nerf hằn rõ nhất — thời IL III nó là 0.05, tức skill giờ làm chưa tới nửa damage cũ ở cùng máu minion.

## Vòng bomber chậm hẳn lại vì self-burn bị halve

Self-burn 10%/giây không chỉ là damage minion tự chịu, nó là đồng hồ đếm cho hai support khác. Minion mất máu đều, nên thời điểm nó rơi xuống :wiki-link{url="https://www.poe2wiki.net/wiki/Low_Life"} (35% máu, tức mất 65%) là 6,5 giây, và chạm 0 máu là 10 giây. Thời IL III self-burn 30%/giây thì hai mốc đó lần lượt là 2,17 và 3,33 giây — nên cả vòng bomber giờ chậm gần gấp ba.

Mốc Low Life là điều kiện trigger :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Instability"}: minion nổ một AOE Hit bằng 15% max life as fire. Khác với IL ignite, explosion này là Hit thật nên ignite riêng của nó đi qua pipeline standard, là một channel độc lập với IL synthesized ignite. Sau khi self-burn đưa minion về 0, :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"} giữ minion thêm đúng 4 giây cố định (duration không scale qua skill effect duration), trong window đó IL AOE vẫn radiate. Với self-burn 10%, đoạn 4 giây cố định của Last Gasp chiếm tỷ trọng lớn hơn nhiều trong cả cycle so với trước — nhưng vì cycle tổng đã dài ra gấp ba, tần suất nổ Minion Instability thưa hẳn. Đây là lý do cơ chế bomber chạy bằng IL giờ yếu hơn nhiều so với mô tả thời III.

## Cái gì scale được ignite này, cái gì không

Vì là synthesized non-hit, gate-split rất sạch.

Ăn modifier:
- **More/increased Magnitude of Ignite** — trục damage chính. Mỗi 10% more magnitude là +10% DPS tuyến tính.
- **Searing Flame II** — gem text có hai dòng tách biệt: "30% less Damage with Hits" và "100% more Magnitude of Ignite". Dòng less chỉ đụng hit damage, còn IL ignite không phải hit nên không bị cắt; dòng more magnitude thì wording rộng "inflicted with Supported Skills" nên áp được. Net: nhân đôi magnitude.
- **Enemy-side res reduction** — :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Weakness"} (-40 đến -59% all elemental res) và Fire Exposure. Đây là cách duy nhất "xuyên" fire res của enemy với IL, vì penetration không có chỗ bám.
- **Magnified Area II** cho radius — +45% area, mà radius scale theo sqrt(area) nên thực tế ~+20% bán kính, không phải gấp đôi như nhiều người tưởng.

Không ăn modifier:
- **Fire Penetration** — áp "on Hit", IL ignite không có hit để áp.
- **Crit** — ignite là DoT, không có crit roll. Mọi crit chance/multi đổ vào IL channel là phí (và sau fix bug 0.5.0 thì cũng hết đường ăn ké).
- **"Gain X% of Damage as Extra Y"** — gồm cả :wiki-link{url="https://www.poe2wiki.net/wiki/Xoph%27s_Pyre"} 40% fire→chaos. Precedent ngay từ Minion Instability wiki: cơ chế đó "does not scale with the Gain X% of Damage as Y modifier" — cùng class modifier, cùng kiểu trượt qua synthesized ignite.
- **Multiple IL minion** — gem text rõ "the ignite debuff does not stack; enemies will only take damage from the highest ignite if in range of multiple Infernal Legion minions". Hai companion cùng cắm IL chỉ phủ rộng hơn, không cộng damage trên cùng một enemy.

Một lưu ý hay bị lẫn: companion auto-attack là hit thật, nên channel đó ăn đủ Fire Pen, crit, Xoph's Pyre — nhưng đó là damage của đòn đánh companion, không phải của IL ignite. Xoph's Pyre vì vậy chỉ đáng cắm lên skill có hit (Frost Bomb, Storm Mage shock), không phải để bơm IL.

## IL đứng ở đâu trong meta 0.5

Mất tier III và bị halve, IL không còn là engine endgame tự đứng được. Nó về đúng vai một lớp damage cho giai đoạn campaign/leveling và một enabler bomber niche. [Raging Spectre Shaman](/builds/druid/raging-spectre-shaman) dùng IL I/II xuyên campaign rồi bỏ khi endgame engine (Tecrod's Revenge) lên. Ai muốn companion làm damage thật mà không mượn ignite thì 0.5.0 đã buff :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} +40% đến +84% more damage — đó mới là đường companion-damage tự đứng, không phụ thuộc IL. So sánh ba hướng minion-army ở [Minion Army Build Comparison](/guides/0-5-minion-army-build-comparison).

## Lỗi hay gặp

- Đầu tư crit cho IL channel. Ignite là DoT, không crit. Crit chỉ chạm được auto-attack của companion — channel nhỏ.
- Cắm Xoph's Pyre lên companion để bơm IL. Cả hai dòng của Xoph's Pyre đều Hit-gated hoặc thuộc class "Gain as extra" nên không nhấc IL ignite; để dành cho skill có hit.
- Stack 3-4 companion qua keystone để nhân ignite. IL không stack — chỉ highest applies; companion thừa chỉ tốn spirit.
- Giữ IL II suốt vì nghĩ vẫn là engine endgame. Sau 0.5.0 nó là damage campaign; endgame phải tìm engine khác.

## Version History

### Patch 0.5.0 (Return of the Ancients)

- Infernal Legion I và II: self-burn và ignite base đều bị halve từ 20% xuống 10% (radius giữ 1.5m/2m; II thêm +20% Fire Resistance cho minion).
- Infernal Legion III: không còn obtain được — mất bậc scaling cao nhất (25% ignite base / 30% self-burn).
- Fix bug IL luôn tính critical hit khi minion có crit chance — nerf gián tiếp cho setup cho minion crit.

## Relationships

- **related_builds** [Raging Spectre Shaman](/builds/druid/raging-spectre-shaman) — dùng IL I/II làm damage campaign rồi chuyển sang Tecrod's Revenge ở endgame.
- **related_guides** [Minion Army Build Comparison](/guides/0-5-minion-army-build-comparison) — so sánh hướng companion-ignite với spectre vĩnh viễn và construct.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — overview các thay đổi 0.5.0, gồm nerf Infernal Legion và buff Tame Beast.
