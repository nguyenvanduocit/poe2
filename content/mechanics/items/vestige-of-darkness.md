---
template: templates/item-template.md
document_type: item
title: Vestige of Darkness
status: draft
author: duocnv
created: '2026-06-01'
updated: '2026-06-01'
league: '0.5'
patch: 0.5.0
pob_coverage: PARTIAL
rarity: unique
item_class: Helmet
level_requirement: 65
item_tags:
  - helmet
  - unique
  - tenebrous-crown
  - physical
  - chill
  - freeze
  - shatter
  - blind
  - pinnacle-drop
meta_tags:
  - clear-speed
  - build-enabling
  - ailment-physical
  - endgame-chase
tags:
  - item
  - unique
  - helmet
  - physical
  - freeze
  - shatter
  - 0-5
  - runes-of-aldur
---

# Vestige of Darkness

Vestige of Darkness là unique helmet duy nhất trên base :wiki-link{url="https://www.poe2wiki.net/wiki/Tenebrous_Crown"}, và dòng mod thứ ba của nó — `Physical damage from Hits Contributes to Chill Magnitude and Freeze Buildup` — cho mọi build đánh physical-hit clear pack bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Chill"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Freeze"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Shatter"} mà không phải trả thuế cold conversion. Đây là helmet enabler cho archetype physical-mace Warrior dẫn đầu, nhưng phải đọc đúng nó là **clear-speed/map item**, không phải boss-killer: unique boss không shatter được, chill bị cắt nửa trên unique. Là lvl 65 pinnacle drop nên không build-around từ đầu league — nó là power spike giữa-cuối endgame. Cùng đợt unique 0.5 đáng đọc trong [Đợt Unique Mới và Meta Shift](/mechanics/0-5-new-unique-items).

## Item Stats

Yêu cầu Level 65, 59 Str, 59 Int. Base Tenebrous Crown là str/int armour helmet và có đúng **1 rune socket**.

```
Vestige of Darkness
Tenebrous Crown
Requires Level 65, 59 Str, 59 Int
--------
(150–200)% increased Armour and Energy Shield
+(20–30) to Strength and Intelligence
Physical damage from Hits Contributes to Chill Magnitude and Freeze Buildup
Enemies in your Presence are Blinded
The Bodach haunts your Presence
--------
"Your covetous hands bring the Unlight ever closer to consuming your realm."
```

Một instance đã roll đọc được 173% inc AR/ES và +22 Str/Int — đều trong range. Defenses hiển thị trên item là Armour 447–537 và ES 125–150, và đây là giá trị **sau** khi dòng `%inc Armour and Energy Shield` của chính item áp lên base; base Tenebrous Crown trần chỉ khoảng 179 AR / 50 ES, nên khi so sánh phải nói rõ là số base hay số đã rolled để không nhân hai lần.

## Why This Item Is Powerful

Dòng `Physical damage from Hits Contributes to Chill Magnitude and Freeze Buildup` là thứ định nghĩa cả item, và điểm cốt lõi là từ "Contributes" — **đây không phải conversion**. Mặc định ở 0.5, chỉ Cold damage từ một hit mới đóng góp vào Chill Magnitude và Freeze Buildup; mod này nhét thêm phần physical của mỗi hit vào cả hai phép tính. Cơ chế "contributes" gộp toàn bộ damage của các type liên quan khi tính ailment, khiến chính damage type đó trở nên có khả năng gây ailment — nghĩa là một hit **physical thuần** vẫn chill được và vẫn tích freeze được, không cần một điểm cold conversion nào.

Để hiểu vì sao điều này tăng tốc clear, phải tách ba ailment ra. Freeze là hit-buildup ailment: mỗi hit dưới ngưỡng minimum threshold cộng vào một Freeze Buildup counter, đạt ≥100% thì enemy bị freeze duration cố định — base 4 giây — rồi counter reset về 0, và freeze = action speed 0. Chill thì apply ngay nếu damage vượt threshold, luôn dính chứ không roll, nhưng phải tạo được ≥30% magnitude slow nếu không sẽ bị discard; magnitude scale theo damage-sau-mitigation so với ailment threshold của enemy, cap 50%, hoặc 70% nếu có Stormweaver Heavy Snows. Shatter là payoff cuối: enemy chết trong lúc đang Frozen sẽ Shatter — nổ tan xác, không để lại corpse để on-death/revive/detonate/desecrate ăn theo.

Mấu chốt số học nằm ở ailment threshold — mốc 100% buildup — vì ở 0.5 nó scale theo **monster level, độc lập với monster life** (khác hẳn PoE1). Bảng base verified: lvl 65 = 9,723 · lvl 80 = 26,029 · lvl 82 = 29,684 · lvl 90 = 50,219 · lvl 100 = 96,892. T1 normal monster là lvl 65, T16 normal là lvl 80, magic/rare +1, boss +2 (T16 map boss base ≈ lvl 82). Mô hình freeze: buildup mỗi hit ≈ 100% × (P_sau-mitigation / AilmentThreshold) × (1 + more/inc Freeze Buildup), nên số hit để freeze ≈ ceil(AT / (P × mult)) miễn hit kịp trước khi buildup decay — đó là lý do attack speed quan trọng. Minh hoạ với mult = 1: một hit physical 8,000 freeze lvl 65 normal (AT 9,723) trong 2 hit, lvl 80 normal trong 4, lvl 82 boss-base trong 4; một hit 20,000 thì 1 / 2 / 2. Số trên boss là cận dưới vì chưa áp rarity multiplier và threshold-tăng-mỗi-lần-freeze.

## Build Enabler Mechanics

Item này ép ra một profile build rất cụ thể: physical-hit, đánh quanh Presence, clear-speed bằng freeze + shatter explosion, thân tanky nhờ armour+ES cộng blind aura, chơi map. Build phải đạt 59 Str + 59 Int và chấp nhận đây là endgame chase. Ring slot gần như mặc định dành cho :wiki-link{url="https://www.poe2wiki.net/wiki/Polcirkeln"} để mở shatter-on-chill — chi tiết bên dưới.

Hướng scale phải đi đúng trục. Mọi nguồn generic — `inc/more Freeze Buildup`, `inc/more Magnitude of Chill`, Freeze Duration, Slow Magnitude, và giảm enemy ailment-threshold — đều scale phần physical của mod #3; và tăng physical hit damage trực tiếp đẩy cả chill lẫn freeze lên. Ngược lại, `increased Cold Damage` **không** chạm tới phần physical này, nên build đầu tư vào physical + node generic ailment, tuyệt đối không đổ vào node cold-damage.

Về defense, bản thân helmet là một khối phòng thủ độc lập với damage: `%inc AR/ES` trên base str/int, `+str/int` để cover requirement của gear khác, cộng blind toàn bộ enemy trong Presence (giảm accuracy địch). Lớp chill/freeze cũng là defense vì địch chậm hoặc đứng yên. Nếu Runeforge lên Runemastered, item thêm Runic Ward 56 — nhưng đây không phải strict upgrade, xem phần Acquisition.

**Exclusion check:** build ăn ít hoặc không gì từ mod #3 gồm — (1) build cold/conversion cao như Glacial Lance convert 80% phys→cold, còn quá ít physical để feed; (2) ele/chaos caster không có physical hit; (3) build DoT (ignite/poison/bleed), vì freeze là hit-buildup còn DoT không tích buildup; (4) non-hit/trigger/totem/minion-only, vì người đeo không tự đánh physical trong Presence; (5) full phys→ele conversion. Edge case: build hybrid giữ một phần physical residual có thể double-dip — đáng test trong PoB2.

## Acquisition

Vestige of Darkness là lvl 65 pinnacle drop, nên nó thuộc giai đoạn maps/endgame sau khi đã mở Ritual pinnacle, không phải item nhặt được trên đường level hay league-start. Drop source mạnh mẽ suy ra là **The Bodach** — Ritual pinnacle boss mới của 0.5 (monster level 79) — tới qua chuỗi Rite of the Nameless: giết The King in the Mists lấy key "The Head of the King", chạy 5 map mỗi map boss rớt một effigy/key, rồi đánh The Bodach ở ritual cuối. Cần phân biệt The Bodach (boss) với "the wendigo" do chính helmet manifest qua mod #5 — đó là hai entity khác nhau cùng theme. Chưa có loot table nào nói thẳng Vestige rớt từ Bodach (maxroll boss-loot bỏ Bodach, poe2db không có drop field), nên đây là suy luận hội tụ từ mod text + tên boss + patch notes Rite of the Nameless.

Về giá: snapshot 2026-05-31 16:57 UTC trên league Runes of Aldur cho ~143.3 Exalted, tức khoảng 2.81 Divine với tỉ giá 1 div = 51 Ex, 74 listings — đứng khoảng thứ 11 đắt nhất trong 218 armour unique. Nhưng con số này **không ổn định**: nó nổ ~36× chỉ trong một ngày — từ 4 Ex ngày 30/05 lên 143 Ex ngày 31/05 — đúng kiểu price-discovery ngày-1-sang-2 trên supply mỏng. Treat 143 Ex như provisional và re-price sau 5–7 ngày trước khi quyết mua.

Runeforge cost gần như miễn phí — 300 Verisium ~0.34 Ex cộng Medved's Crest of the Circle ~0.61 Ex, tổng khoảng 0.95 Ex, dưới 1% giá item. Nhưng vì item trên ngưỡng lvl 55, :wiki-link{url="https://www.poe2wiki.net/wiki/Verisium"} **không nâng base defense** mà đánh đổi Armour/ES để thêm Runic Ward — không phải strict upgrade, chỉ đáng làm nếu build thực sự muốn lớp Runic Ward đó.

Adoption hiện tại gần như bằng không. poe.ninja đã index 60,147 character của league nhưng Vestige không xuất hiện trong Top Items (~0% usage); chưa có build PoB-verified, indexed hay guide nào dùng nó, maxroll chỉ có stat-entry không recommend, và các creator meta video ngày 2-3 không nhắc tới. Item đang ở giai đoạn "creator demo pinnacle unique vừa rớt", chưa phải build adopted.

## Failure Modes

- **Boss/pinnacle damage rỗng.** Unique boss không shatter, chill bị cắt 50% trên unique, và freeze threshold của boss tăng-rồi-decay sau mỗi lần bị freeze. Đây là clear-speed/map item, không phải boss-killer — build bắt buộc phải có một damage profile riêng cho single-target.
- **Map mod hostile.** Mod "Monsters cannot be Chilled/Frozen" tắt thẳng toàn bộ giá trị tấn công của item, chỉ còn lại lớp defensive (blind + AR/ES).
- **Conversion trap.** Lỡ đi phys→cold conversion thì phần physical còn lại quá ít để feed mod #3, biến nó thành dead mod tấn công — đây là cái bẫy dễ mắc nhất vì người chơi quen nghĩ "freeze = cold".
- **Attribute floor.** 59 Str + 59 Int là tax thật với class lệch attribute; dex class gánh cả hai con số.
- **Accessibility floor.** Lvl 65 + pinnacle drop nghĩa là không build-around từ đầu league, và giá còn đang biến động ~36×/ngày nên mua sớm rủi ro lỗ.

## Version History

### Patch 0.5.0 (Runes of Aldur — 2026-05-29)

Item introduced. Mod values, base Tenebrous Crown, level requirement 65 đã verbatim-confirmed trên poe2db.tw; freeze/chill/shatter/threshold mechanics verified từng dòng từ wiki mirror. Còn nhiều thứ phải log khi vào league: (1) wendigo do helmet manifest deal damage type gì, lượng bao nhiêu, uptime ra sao, và "enemy power" định nghĩa thế nào — hiện chưa document được ở bất kỳ nguồn nào; (2) freeze buildup thực vs threshold lvl 82 boss sau khi áp rarity multiplier, tức bao nhiêu hit để freeze một T16 map boss thật; (3) PoB2 sim cho một physical mace/crossbow build có Vestige + Polcirkeln — flag `pob_coverage: PARTIAL` vì PoB2 fork chưa model phys→freeze-buildup contribution lẫn Runic Ward của 0.5; (4) re-price live qua /poe2scout sau 5–7 ngày khi supply settle; (5) xác nhận chính xác drop source từ The Bodach; (6) re-scrape `data/poedb/0.5.0/Vestige_of_Darkness.md` (hiện là stub pre-launch stale).

## Related Items & Alternatives

- :wiki-link{url="https://www.poe2wiki.net/wiki/Polcirkeln"} Polcirkeln — unique Sapphire Ring cho `Enemies Chilled by your Hits can be Shattered as though Frozen`. Đây là partner gần-bắt-buộc: ghép với mod #3, build physical chỉ cần CHILL (dễ hơn nhiều so với đạt 100% freeze buildup) là shatter được trash gần như mỗi hit. Vẫn không shatter unique boss.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Sculpted_Suffering"} Sculpted Suffering — cho cùng dòng shatter-on-chill như Polcirkeln, là lựa chọn thay thế nếu ring slot bận hoặc muốn nguồn khác.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"} Herald of Ice — `Enemies you Shatter explode` (30 Spirit, cần Martial Weapon). Thêm vào sau Polcirkeln để biến shatter đơn lẻ thành AoE chain clear cả màn hình. Cần weapon là martial weapon (mace/crossbow/spear/quarterstaff đều hợp lệ).
- Build archetype dẫn đầu là **physical mace-slam Warrior (Warbringer/Titan)**: một hit slam physical cực lớn xoá phần lớn threshold tức thì (hit 20k freeze lvl 65 normal trong 1, lvl 82 boss-base ~2 trước rarity multiplier), Warrior str-stack thoả 59 Str dễ và 59 Int chỉ là splash nhẹ, armour+ES + blind + Runic Ward hợp lối melee đứng-trụ. Các hướng khác: physical spear Huntress :wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} (nhiều hit nhanh nhưng dex class gánh cả 59 Str lẫn 59 Int); physical crossbow Mercenary :wiki-link{url="https://www.poe2wiki.net/wiki/Witchhunter"} (str/int native nên 59/59 gần free, ranged an toàn hơn); physical quarterstaff :wiki-link{url="https://www.poe2wiki.net/wiki/Monk"} (attack speed cao nhưng cần skill quarterstaff physical thực thụ).

## Relationships

- **synergizes_with** [Đợt Unique Mới và Meta Shift](/mechanics/0-5-new-unique-items) — cùng đợt 42 unique 0.5, đây là item cắt ngang trục physical-ailment chưa được survey đó cover sâu
