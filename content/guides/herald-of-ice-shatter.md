---
template: templates/mechanic-template.md
document_type: mechanic
title: Herald of Ice Shatter
status: published
author: duocnv
created: '2026-06-10'
updated: '2026-06-10'
league: '0.5'
patch: 0.5.0
sub_class: skills
tags:
  - herald-of-ice
  - shatter
  - freeze
  - cold
  - clear-engine
  - payoff
  - poe2
  - mechanic
---

# Herald of Ice Shatter

:wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"} là persistent buff skill tag Buff, Attack, Persistent, AoE, Cold, Herald, Payoff — Tier 4, reserve 30 Spirit, chỉ cần một :wiki-link{url="https://www.poe2wiki.net/wiki/Martial_Weapon"} bất kỳ là bật được. Đây là clear-engine phổ biến nhất league Runes of Aldur: 30.9% ladder cắm nó, gần 1/3 toàn bộ character. Lý do nó đông không phải vì single-target — mà vì mỗi enemy mình :wiki-link{url="https://www.poe2wiki.net/wiki/Shatter"} sẽ nổ một quả cold AoE lớn dọn sạch pack xung quanh, gần như miễn phí.

Điểm hay bị hiểu sai nhất nằm ở nguồn damage của vụ nổ. Vụ nổ không deal một phần máu của con vừa chết, cũng không phải base damage cố định — nó deal **một phần trăm damage của chính cú đánh của mình**, rồi convert 100% sang cold. Hiểu sai chỗ này dẫn tới scale sai hướng, nên bài này gỡ rõ cơ chế trước khi nói tới build.

## Vụ nổ deal bao nhiêu và scale theo cái gì

Khi buff đang bật, mình Shatter một enemy bằng một non-Herald Attack Hit thì Herald of Ice bắn ra một icy explosion deal Attack damage cho enemy xung quanh. Con số gem text ở patch 0.5.0:

- Explosion Attack Damage: **70% ở gem level 1**, lên **144% ở level 10**, **286% ở level 20**.
- 100% phần Physical của vụ nổ được convert sang Cold damage.
- Radius 1.6 mét, không thể bị :wiki-link{url="https://www.poe2wiki.net/wiki/Evasion"} né.
- Quality cộng tới +20% increased Cold damage cho buff và tới +0.4m radius.

Với +level từ gear (Skull Corona, gem level vượt 20), bậc thang còn cao hơn: 415% ở level 25, 1267% ở level 40. Nhưng con số % này áp lên cái gì? Áp lên damage cú đánh của mình. Nếu một cú spear hit raw 1.000 attack damage, ở gem level 20 vụ nổ deal 2.860 (286%), convert hết sang cold thành 2.860 cold AoE cho cả pack. Cú hit của mình càng mạnh thì vụ nổ càng mạnh — Herald of Ice double-dip toàn bộ đầu tư weapon/attack của mình, rồi gói lại thành một quả cold bom.

Vì 100% là phys-to-cold conversion, mọi nguồn cold damage, cold penetration và area of effect đều scale vụ nổ; phys damage trên weapon cũng scale vì nó là input trước convert. Build cold attack vì vậy hợp tự nhiên với Herald of Ice: cùng một weapon vừa freeze enemy vừa nuôi luôn vụ nổ.

## Vì sao "shatter chain reaction" là hiểu lầm

Nhiều người mô tả Herald of Ice như một phản ứng dây chuyền tự lan: nổ giết con kế bên, con kế bên lại nổ tiếp, vô tận. Cơ chế thật không như vậy, và chặn nằm ngay trong gem text.

Trigger của Herald of Ice yêu cầu một **non-Herald** Attack Hit Shatter enemy. Bản thân vụ nổ là một Herald hit, không phải non-Herald attack hit, nên nó không bao giờ tự kích lại Herald of Ice. GGG còn khoá thêm một lớp từ patch 0.2.0: on-kill effect của Herald skill không thể trigger từ kill do chính Herald skill gây ra. Hai điều này cùng dẫn tới một kết luận — vụ nổ không self-chain.

Cái tạo cảm giác "chain" là chuyện khác: một cú đánh cold AoE của mình freeze rồi kill nhiều con cùng lúc, mỗi con Shatter là một vụ nổ riêng. Một cast ra nhiều shatter, nhiều vụ nổ phủ cả màn hình, các vụ nổ đó finish nốt những con còn thoi thóp. Pack tan vì một cú đánh trúng nhiều con đông, không vì vụ nổ tự nhân bản. Khác biệt này quan trọng khi tính clear: tăng số enemy mình shatter trong một cú (AoE rộng, freeze nhanh) mới tăng clear, chứ không có cơ chế ricochet để dựa vào.

**Exclusion check:** vụ nổ Herald of Ice không tự trigger Herald of Ice (trigger cần non-Herald attack hit) · vụ nổ không thể inflict freeze buildup nên không tự freeze con mới · không có martial weapon thì không reserve được skill.

## Shatter đến từ đâu để vụ nổ proc

Shatter trong POE2 là sự kiện kill một enemy đang :wiki-link{url="https://www.poe2wiki.net/wiki/Frozen"} — xác con frozen vỡ vụn thay vì để lại corpse. Muốn Herald of Ice proc đều, mình cần một nguồn freeze ổn định: cold hit build Freeze buildup tới ngưỡng, enemy frozen, mình kill nó khi đang frozen. Vụ nổ Herald of Ice tự nó không build freeze được (area damage cannot inflict freeze buildup), nên freeze phải đến từ chính cú đánh hoặc từ skill khác.

Hai unique hạ thấp rào shatter rất nhiều. :wiki-link{url="https://www.poe2wiki.net/wiki/Polcirkeln"} cho phép enemy bị :wiki-link{url="https://www.poe2wiki.net/wiki/Chill"} bởi hit của mình được Shatter như thể đang Frozen — tức là chỉ cần chill chứ không cần đẩy đủ freeze, proc dày hơn nhiều trên build cold nhẹ. :wiki-link{url="https://www.poe2wiki.net/wiki/Sculpted_Suffering"} đi hướng khác: enemy Fully Armour Broken mà mình kill bằng hit sẽ Shatter, mở Herald of Ice cho cả build phys armour-break không chạm cold.

## Scale damage vụ nổ: more và increased ở đâu

Vụ nổ là một payoff hit nên nó nhận modifier như mọi hit cold attack, cộng vài nguồn riêng cho Herald:

- **Deadly Herald** (support): vụ nổ deal 30% more damage, đổi lấy +20 Spirit reservation. Đây là multiplier "more" riêng, nhân thẳng lên 286% base.
- :wiki-link{url="https://www.poe2wiki.net/wiki/The_Coming_Calamity"} (body armour, Lv65): grant cả ba Herald level 15, "Herald Skills deal (50—100)% increased Damage", và "Enemies in your Presence have no Elemental Resistances" — bỏ luôn cold res của enemy trong tầm, vụ nổ ăn full.
- Gem level: nguồn base damage chính (70% → 286% → cao hơn với +level). Một nguồn +level (Skull Corona +2 minion không tính, nhưng +level all skills/cold skills có) đẩy base lên rõ.
- Cold/area/pen passive: increased Cold damage và area of effect cộng vào pool increased chung; cold penetration / exposure nhân ở tầng riêng.

Một ví dụ ráp chuỗi ở gem level 20, cú đánh nền 1.000 attack damage: vụ nổ 286% = 2.860 → Deadly Herald ×1.30 = 3.718 cold → trên enemy trong Presence của The Coming Calamity (no ele res) thì 3.718 này ăn trọn không bị cold res cắt. Cộng increased Herald damage (+50–100%) và cold passive vào pool increased, vụ nổ thực tế thừa sức wipe một pack trash mỗi lần shatter. Đó là toàn bộ lý do 30.9% ladder cắm nó: rẻ, mọi martial weapon dùng được, và mọi build có cold/freeze đều shatter sẵn.

## Tổng kết

Herald of Ice là clear-engine của archetype cold/shatter league này, không phải single-target tool. Vụ nổ deal 70–286% damage cú đánh của mình (theo gem level), convert hết sang cold, nên nó scale theo weapon hit + cold + area + Herald-damage modifier, và double-dip đầu tư weapon. Nó không self-chain — pack tan vì một cú đánh shatter nhiều con frozen cùng lúc. Cần một nguồn freeze riêng để proc, và Polcirkeln (chill cũng shatter được) là cách hạ rào dễ nhất.

Open question cho lúc vào sâu league: đo empirical xem hit rate vụ nổ trên boss đơn (một target, không có pack để shatter) đóng góp bao nhiêu DPS thật so với clear — Herald of Ice gần như chỉ là clear payoff, single-target boss vẫn phải dựa vào skill chính.

## Version History

### Patch 0.5.0 (Return of the Ancients)

Số scaling 0.5.0 verify từ poedb: Explosion Attack Damage 70% → 286% ở gem level 1–20, 100% phys-to-cold conversion, reservation 30 Spirit, radius 1.6m. Không có thay đổi cơ chế Herald of Ice trong patch note 0.5.0.

### Patch 0.2.0

Explosion radius hạ còn 1.6m (trước 1.8m). On-kill effect của Herald skill không còn trigger được từ kill do chính Herald skill gây ra — khoá self-chain.

## Relationships

- **synergizes_with** [Twister](/mechanics/skills/twister) — cold Twister build freeze enemy rồi shatter, Herald of Ice gánh phần clear pack cho cùng một cú đánh.
