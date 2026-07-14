---
template: templates/mechanic-template.md
document_type: mechanic
title: Craft jewel 5 mod với increased effect
status: published
author: duocnv
created: '2026-07-14'
updated: '2026-07-14'
league: '0.5'
patch: 0.5.2
sub_class: crafting
tags:
  - crafting
  - jewel
  - sapphire
  - liquid-emotion
  - contempt
  - ferocity
  - desecration
  - omen
  - abyss
  - crit
  - endgame
  - poe2
  - mechanic
---

# Craft jewel 5 mod với increased effect

Jewel thường tối đa 2 prefix + 2 suffix. Craft này ép ra **5 mod: 3 suffix + 2 prefix**, trong đó một prefix là **increased Effect of Suffixes** (tới 60%) nhân hết ba suffix kia lên. Một viên crit jewel kiểu này cho DPS bằng 2-3 viên rare thường, và bán 40-210 div. Nguyên liệu tự craft rẻ hơn mua thành phẩm nhiều lần.

## Nguyên lý khoá suffix

Cả craft xoay quanh một luật: mỗi bên chỉ được 2 mod. `Potent Liquid Contempt` phá luật đó, thêm được suffix thứ 3. Khi đang có 3 suffix mà mình **gỡ đúng cái mod "+1 Suffix Modifier allowed"**, ba suffix bị khoá cứng vĩnh viễn — game không thêm/gỡ suffix được nữa vì đã "quá luật". Từ đó Chaos Orb chỉ đổi được prefix, và `Potent Liquid Ferocity` buộc phải nhả ra dòng increased Effect of Suffixes. Đây là toàn bộ trick, mọi bước dưới chỉ để tới được khoảnh khắc khoá đó cho sạch.

## Công thức bản crit (suffix)

Ví dụ Sapphire crit — build spell/attack crit. Đổi mod mục tiêu theo build; các bước giữ nguyên.

1. **Mua base**: **rare** Sapphire có đúng 2 suffix mình muốn giữ (critical hit chance + critical damage bonus, cả hai đều là suffix), **ilvl 81+, không corrupted, không fractured, không dính crafted mod**. Roll cao thấp không cần chọn vì Divine ở bước 9 roll lại hết value (hai dòng crit chỉ có một tier S1); cái đáng lọc là **ilvl 81+** để mở tier cao cho suffix desecrate + prefix chaos về sau. Lọc **không crafted mod** để né các cây người khác craft hụt rồi vứt ra chợ (còn dính "+1 allowed" hay "increased Effect"). Prefix rác có sẵn thì tốt, cho Contempt gỡ. Mua từ ~1 ex. [Link mua base](#nguyen-lieu-gia-va-link).
   - Rẻ hơn nữa: mua Sapphire chỉ có crit damage bonus roll cao (~18-20%, ~1 div) rồi tự **Fracturing Orb** khoá dòng đó (1/4 trúng). Đây là ngoại lệ duy nhất cần roll cao: fracture xong Divine không roll lại được nên phải chốt số cao trước khi fracture. Sau đó chaos spam ra crit hit chance.
2. **Đủ 4 mod**: 2 suffix mục tiêu + 2 prefix rác (Exalt vào cho đủ prefix nếu thiếu). Prefix rác là gì không quan trọng.
3. **Potent Liquid Contempt** — 50/50. Muốn ra **"+1 Suffix Modifier allowed"** (nó rơi vào slot prefix). Ra "+1 Prefix allowed" = brick, mua base khác làm lại. Đây là cửa duy nhất mất base.
4. **Preserved Cranium** desecrate jewel — thêm 1 suffix ẩn. Prefix đang full nên nó buộc rơi vào suffix thứ 3.
5. Bật **Omen of Abyssal Echoes**, thả jewel xuống **The Well of Souls**, reveal — được 6 lựa chọn. Chọn suffix thứ 3 (cast speed, skill effect duration, crit damage thứ hai...). Không ưng thì bật **Omen of Light** + **Orb of Annulment** (chỉ gỡ đúng mod desecrated) rồi cranium lại, reveal lại. Lặp tới khi ưng — chốt suffix thứ 3 phải xong ở đây, sau khi khoá không sửa được nữa.
6. **Gỡ mod "+1 Suffix Modifier allowed"**: bật **Omen of Sinistral Annulment** + **Orb of Annulment** (chỉ gỡ prefix). 50/50 trúng đúng mod craft; trật thì annul tiếp (còn mỗi nó thì chắc trúng). Gỡ xong khi đang có 3 suffix → **3 suffix khoá cứng**.
7. **Exalted Orb** thêm 1 prefix (suffix full → ép vào prefix). Rồi **Chaos Orb spam** — chỉ đổi prefix, thấy "item has no space for mods" khi nó thử suffix thì cứ spam tiếp. Lấy 2 prefix ưng, vì bước sau gỡ mất 1.
8. **Potent Liquid Ferocity** — 50/50. Buộc nhả **(40–60)% increased Effect of Suffixes** và gỡ 1 prefix. Nếu gỡ trúng prefix ngon thì chaos spam lại rồi thử tiếp — **không bao giờ brick** từ bước 7 trở đi.
9. **Divine Orb** roll số cao. Dòng effect đẩy ba suffix vượt cả trần bình thường của chúng.
10. Tùy chọn: **Refined Skittering Catalyst** (+20% quality nhóm Speed) hoặc **Refined Carapace Catalyst** (Energy Shield / Armour / Evasion); corrupt cuối nếu định chạy rare The Adorned.

Xong: 3 suffix (mỗi cái ×1.4–1.6) + 1 prefix hữu dụng + dòng effect = 5 mod.

## Bản ES/thủ (prefix)

Đối xứng hoàn toàn, đổi vế:

- Base có 2 **prefix** mục tiêu (increased maximum Energy Shield + faster start of Energy Shield recharge).
- Contempt: muốn **"+1 Prefix Modifier allowed"** (rơi vào slot suffix).
- Khoá 3 prefix, gỡ mod craft bằng **Omen of Dextral Annulment** (chỉ gỡ suffix).
- Chaos spam suffix, `Potent Liquid Ferocity` nhả **increased Effect of Prefixes**.
- Ba prefix ES được nhân effect → một viên có thể cho ~50% max ES. Quality bằng Refined Carapace Catalyst.

Diamond (ghép 1 Ruby + 1 Emerald + 1 Sapphire ở Reforging Bench) roll cả ba pool cùng lúc — dùng khi cần trộn ES với mod attack; phải **Fracturing Orb khoá dòng chính trước** vì không mua sẵn 2-prefix Diamond được.

## Nguyên liệu, giá và link {#nguyen-lieu-gia-va-link}

Giá poe2scout, league Runes of Aldur, ngày 2026-07-14 (1 div ≈ 478 ex). Nguyên liệu craft này đã **spike mạnh sau khi method viral** (Preserved Cranium +1624%, Omen of Light +422%, Sinistral Annulment +566% trong 30 ngày) — re-check trước khi mua lô lớn.

- **Base Sapphire** (rare, crit chance + crit damage bonus suffix, ilvl 81+, uncorrupted + unfractured + không crafted mod): từ ~1 ex, 38 listing · [mua trên trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/D6O2lPd5H5)
- **Potent Liquid Contempt**: ~0.9 div (~420 ex) · [poe2db](https://poe2db.tw/us/Potent_Liquid_Contempt) *(bản "Ancient" là cho Time-Lost jewel, đắt hơn, đừng mua nhầm)*
- **Potent Liquid Ferocity**: ~3.1 div (~1483 ex) · [poe2db](https://poe2db.tw/us/Potent_Liquid_Ferocity)
- **Preserved Cranium**: ~7.8 div (~3750 ex) · [poe2db](https://poe2db.tw/us/Preserved_Cranium)
- **Omen of Abyssal Echoes**: ~0.2 div (~106 ex) · [poe2db](https://poe2db.tw/us/Omen_of_Abyssal_Echoes)
- **Omen of Light**: ~12.6 div (~6000 ex) · [poe2db](https://poe2db.tw/us/Omen_of_Light)
- **Omen of Sinistral Annulment** (bản suffix): ~15 div (~7260 ex) · [poe2db](https://poe2db.tw/us/Omen_of_Sinistral_Annulment)
- **Omen of Dextral Annulment** (bản prefix/ES): ~10 div (~4660 ex) · [poe2db](https://poe2db.tw/us/Omen_of_Dextral_Annulment)
- **Orb of Annulment**: ~0.8 div (~389 ex) · :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Annulment"}
- **Chaos Orb**: ~0.13 div (~62 ex)/viên, spam nhiều · :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Orb"}
- **Exalted Orb**: 1 ex · :wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"}
- **Divine Orb**: 1 div (~478 ex) · :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"}
- **Refined Skittering Catalyst** (Speed): ~0.25 div (~117 ex) · [poe2db](https://poe2db.tw/us/Refined_Skittering_Catalyst)
- **Refined Carapace Catalyst** (ES/Armour/Eva): ~0.2 div (~102 ex) · [poe2db](https://poe2db.tw/us/Refined_Carapace_Catalyst)

Cả `Contempt` lẫn `Ferocity` drop từ Delirium endgame (boss nhân bản qua Grand Mirror) — chơi Delirium là tự có, khỏi mua.

## Chi phí và có đáng không

Hai cửa 50/50 (Contempt ở bước 3, Ferocity ở bước 8) là toàn bộ RNG; brick chỉ xảy ra ở bước 3. Chi phí thật giờ bị kéo lên bởi **loop desecration**: mỗi lần reveal xấu phải làm lại tốn 1 Preserved Cranium (~7.8 div) + 1 Omen of Light (~12.6 div) + Annul, khoảng ~21 div/lần, và loop hay ăn 2-4 lần. Cộng base + liquid + chaos spam, một viên hoàn chỉnh giờ tầm **80-150 div** ở giá hiện tại — cao hơn hẳn mức 50-80 div hồi method mới ra (tháng 6), vì nguyên liệu đã moon. Thành phẩm vẫn bán 40-210 div nên craft để dùng thì lời, craft để bán thì mỏng — tự farm cranium/omen từ Abyss + Delirium để cắt phần đắt nhất.

## Craft hụt mất gì và cứu thế nào

Điểm mấu chốt: POE2 không phá huỷ item, "brick" ở đây nghĩa là phí currency đã đổ vào chứ jewel vẫn còn. Và chỉ đúng **một chỗ mới mất tiến độ thật**.

**Contempt bước 3 là chỗ brick duy nhất.** Ra sai vế ("+1 Prefix" khi mình muốn suffix) tức nó vừa gỡ mất một suffix crit mình cần. Mất chỉ ~0.9 div (một Contempt) + base ~1 ex, làm lại gần như free. Ba đường cứu: pivot sang bản prefix nếu build xài được jewel ES/attack (giờ đang có "+1 prefix allowed" sẵn); hoặc gỡ mod craft sai bằng Omen of Dextral Annulment + Annul rồi chaos lại suffix + Contempt lại; hoặc đơn giản bốc base kế. Mua sẵn 3-5 base lúc đầu (~1 ex/cái) để hụt là làm tiếp con khác, khỏi re-shop.

**Từ sau bước 6 (khoá 3 suffix) KHÔNG thể brick nữa.** Ferocity bước 8 gỡ trúng prefix ngon thì chaos spam lại rồi thử tiếp, chỉ tốn thêm chaos + một Ferocity ~3 div, item nguyên vẹn. Sinistral Annul bước 6 trật 50/50 thì annul thêm lần nữa (~15 div/lần), suffix vẫn an toàn vì Sinistral chỉ đụng prefix. Đây đều là tốn lặp lại, không phải mất cây.

**Hố tiền thật là loop desecration bước 5, không phải brick.** Mỗi reveal xấu làm lại tốn ~21 div (Cranium + Omen of Light + Annul) như tính ở trên; xui vài lần là chỗ âm thầm đốt sạch currency. Cứu bằng cách chốt sớm: lấy suffix thứ 3 "đủ dùng" (mana regen, attribute) thay vì chase perfect, đặt trần 2-3 redo trước khi bắt đầu.

**Cây hụt nửa chừng vẫn bán được.** Đã khoá 3 suffix mà cạn currency thì cây 3-suffix đó đã mạnh hơn jewel 2-suffix thường, bán hoặc xài tạm, sau này chỉ cần một Ferocity là xong. Fail tới mốc khoá không phải mất trắng.

Tổng theo RNG: thắng cả hai 50/50 + desecrate trúng sớm khoảng ~30-35 div; trung bình ~90-120 div; xui (Contempt brick nhiều lần, loop reveal dài) vượt 150 div. Giảm rủi ro Contempt bằng self-fracture crit damage ở bước 1 (kéo brick từ 50% xuống ~33% vì mod fractured không bị Contempt gỡ).

## Cạm bẫy

- **Contempt ra "+1 Prefix" (bản suffix)** = brick, mất base. Chỉ chỗ này mất base — mọi bước sau an toàn.
- **Chưa chốt suffix thứ 3 trước khi khoá** — sau khi gỡ mod "+1 allowed", ba suffix đông cứng, không desecrate/đổi lại được. Reveal cho ưng rồi mới sang bước 6.
- **Base corrupted hoặc fractured sai dòng** — corrupted chặn craft; Fracturing Orb khoá nhầm mod rác thì base hỏng mục đích (chỉ fracture khi cố ý khoá dòng chính).
- **Mua nhầm "Ancient" Potent Liquid** — bản Ancient dành cho Time-Lost jewel, không phải basic jewel, và đắt hơn.
- **Annul không có omen** — annul trần trong lúc craft dễ gỡ trúng mod quý; luôn kẹp Omen of Light (desecrated) / Sinistral / Dextral cho đúng slot.

## Version History

- **0.5.2** — method vẫn chưa bị đụng qua 0.5.1 và 0.5.2, coi như sống hết league. Nguyên liệu (Preserved Cranium, Omen of Light, Sinistral/Dextral Annulment) spike 4-16× trong 30 ngày do craft viral.
- **0.5.0** — `Potent Liquid Contempt` / `Ferocity` (Endgame Distilled Emotion) ra mắt, mở ra khoá-suffix trên basic jewel. Trước đó jewel cứng 4 mod trừ khi corrupt.

## Relationships

- **relates-to** [Craft amulet top-tier cho companion build](/crafting/0-5-plus4-minion-amulet) — cùng bộ công cụ desecration (Cranium + Well of Souls) và omen annulment có hướng
- **relates-to** [Tame Beast Companion Pack](/builds/huntress/0-5-spirit-walker-companion-pack) — build này chạy engine crit jewel qua The Adorned, đúng loại jewel craft ra ở đây
