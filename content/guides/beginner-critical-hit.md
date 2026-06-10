---
template: templates/guide-template.md
document_type: guide
title: "Critical Hit: crit chance và crit damage bonus"
status: draft
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
  - critical-hit
  - damage-scaling
  - crit-chance
  - crit-damage
---

# Critical Hit: crit chance và crit damage bonus

:wiki-link{url="https://www.poe2wiki.net/wiki/Critical_hit"} là một trong những axis damage scaling phổ biến nhất trong POE2 — gần như mọi build attack hay spell đều đụng đến crit ở mức độ nào đó. Nhưng hệ thống có một số điểm khác biệt rõ với POE1, đặc biệt là tên gọi và cách tính, khiến người chuyển qua dễ hiểu nhầm ngay từ đầu.

## Crit mặc định gấp đôi damage

Mỗi khi một hit là critical hit, nó deal +100% extra damage so với hit thường — tức là tổng cộng **200% damage** của hit đó. Đây là giá trị mặc định cho tất cả player và minion.

Con số này nghe đơn giản nhưng ý nghĩa thực tế là: nếu không đầu tư gì vào crit damage, mỗi crit vẫn mạnh gấp đôi hit thường. Crit chance 100% với setup cơ bản nghĩa là damage thực bằng đúng 2× base damage — không cần modifiers phức tạp nào.

## Critical Damage Bonus không phải "crit multiplier"

Stat kiểm soát phần extra damage khi crit trong POE2 gọi là :wiki-link{url="https://www.poe2wiki.net/wiki/Critical_damage_bonus"} — không phải "Critical Strike Multiplier" hay "crit multi" như trong POE1. Tên khác, logic tương tự, nhưng cần biết để đọc item đúng.

Critical Damage Bonus hoạt động như một multiplier độc lập hoàn toàn với các multiplier damage khác. Tính theo công thức: lấy +100% mặc định, cộng tất cả nguồn "+#% to Critical Damage Bonus" trên weapon hay buff vào trước, rồi mới apply increased/more lên tổng đó. Nếu weapon có +50% Critical Damage Bonus thì base trở thành +150%, và "50% more Critical Damage Bonus" sẽ nhân lên từ con số +150% này, không phải +100%.

Điểm cần nhớ: modifier trực tiếp "+#% to Critical Damage Bonus" trên weapon là **local** — nó chỉ áp dụng cho hit từ đúng weapon đó, không lan ra toàn nhân vật. Modifier "increased Critical Damage Bonus" mới là global.

## Crit chance của attack và spell lấy từ hai nguồn khác nhau

:wiki-link{url="https://www.poe2wiki.net/wiki/Attack"} dùng base crit chance từ **weapon** đang cầm. Mỗi loại martial weapon có base crit riêng ghi trên item — thông thường dao động khoảng 5% đến 13% tùy loại. Nếu không cầm vũ khí (unarmed), base crit mặc định là 5%.

:wiki-link{url="https://www.poe2wiki.net/wiki/Spell"} lại khác: crit chance được ghi trực tiếp trên skill gem, không lấy từ weapon. Ví dụ Reap có base crit 14% ghi ngay trên gem — số này không thay đổi khi đổi weapon. Đây là lý do spell build không cần quan tâm đến crit chance của weapon, trong khi attack build phải chú ý base crit của vũ khí từ đầu khi chọn gear.

## "Increased Critical Hit Chance" tính additive trên base

Phần lớn modifier tăng crit chance trong POE2 là dạng **increased**, và chúng cộng cộng thẳng vào base thay vì nhân lên. Ví dụ wiki ghi rõ: base 7% + 100% increased Critical Hit Chance = 14% final. Không phải 7% × 2 = 14% theo nghĩa multiplicative — mà là 7% × (1 + 100%) = 14%.

Công thức đầy đủ là: `crit chance cuối = base_crit × (1 + tổng_increased) × các_more_multiplier`. Modifier dạng "more" thì nhân thêm lên, như :wiki-link{url="https://www.poe2wiki.net/wiki/Charge_Regulation"} cho 20–26% more Critical Hit Chance khi có Power Charge.

Hiểu điểm này quan trọng để tính crit chance thực tế. 300% increased crit trên base weapon 10% ra 40% final — không phải 300% + base. Số trên character sheet đã bao gồm tất cả tính toán, nhưng biết cách tính giúp đánh giá được modifier nào đáng đầu tư.

## Bifurcated Critical: roll hai lần, có thể nhân đôi bonus

Một số weapon và support gem cho cơ chế :wiki-link{url="https://www.poe2wiki.net/wiki/Bifurcated_Critical_Hits"} — hit roll crit check **hai lần độc lập**.

Nếu chỉ một lần thành công: hit bình thường là crit, Critical Damage Bonus áp một lần như thường.

Nếu cả hai lần đều thành công: hit vẫn là crit, nhưng Critical Damage Bonus **áp hai lần**. Với base +100% thì là +200% extra, nghĩa là hit deal 300% damage thay vì 200%.

:wiki-link{url="https://www.poe2wiki.net/wiki/Tangletongue"} (Forked Spear) là weapon có sẵn Bifurcates Critical Hits, và support gem :wiki-link{url="https://www.poe2wiki.net/wiki/Garukhan%27s_Resolve"} cũng cho cơ chế này nhưng đổi lại cap crit chance ở 50%. Bifurcated build thường stack Critical Damage Bonus cao để khi cả hai roll thành công, damage spike cực lớn.

## Crit khác POE1 ở điểm nào

Ba điểm khác biệt chính cần nhớ khi qua từ POE1:

Thứ nhất, **tên gọi**. POE1 gọi là "Critical Strike Multiplier" hay "crit multi" — stat đó trong POE2 đổi tên thành Critical Damage Bonus. Khi đọc item hay passive, tìm đúng tên mới không bị bỏ sót.

Thứ hai, **không còn "never critically strikes"** như một số POE1 monster immunity. POE2 có :wiki-link{url="https://www.poe2wiki.net/wiki/Resolute_Technique"} keystone vẫn tồn tại và block crit hoàn toàn, nhưng monster immunity crit là cơ chế khác. POE2 dùng evasion downgrade thay thế: nếu attack có thể evaded nhưng evasion check đầu không thành công (hit land), evasion check lại lần hai — nếu lần hai thành công, hit bị downgrade thành non-crit.

Thứ ba, **crit check roll một lần cho toàn bộ hit từ một skill**. Một cast ra nhiều projectile thì mỗi projectile của player roll crit riêng, nhưng các projectile từ monster cùng skill thì all-or-nothing. Sustained skill và channelling skill roll từng hit riêng, không roll một lần cho cả skill.

## Relationships

- **related** [Increased vs More: hai loại damage modifier khác nhau](/guides/beginner-increased-vs-more) — hiểu additive vs multiplicative giúp đánh giá modifier crit đúng hơn.
- **related** [Damage types trong POE2](/guides/beginner-damage-types) — Critical Damage Bonus là multiplier độc lập, tách biệt với elemental và physical damage scaling.
- **related** [Defence layers trong POE2](/guides/beginner-defence-layers) — Evasion có thể downgrade crit thành non-crit trong POE2, điểm giao thoa giữa offence và defence.
