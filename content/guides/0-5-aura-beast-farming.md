---
template: templates/mechanic-template.md
document_type: mechanic
title: Farm aura beast cho companion zoo
status: published
author: duocnv
created: '2026-06-15'
updated: '2026-06-15'
league: '0.5'
patch: 0.5.2
tags:
  - poe2
  - huntress
  - spirit-walker
  - tame-beast
  - companion
  - aura-bot
  - zoo
  - essence-farming
  - 0-5
---

# Farm aura beast cho companion zoo

Aura beast là những con rare beast rẻ nhất game mang một :wiki-link{url="https://www.poe2wiki.net/wiki/Monster_modifier"} dạng "… Aura". Tame con đó bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} thì nó thành companion phát aura cho cả đàn lẫn mình mà không gem nào tự bật được. Sức mạnh này nằm ngoài market hoàn toàn vì beast đã tame là account-bound, không bán không mua; cái phải trả là thời gian reset essence ở campaign zone. Character thật đang chạy đúng bốn aura bot: Diretusk Boar gánh Haste, Coconut Crab gánh Extra Physical, Adorned Scarab gánh Energy Shield, Swarming Wasp gánh Periodic Invulnerability. Doc này lo phần logistics săn tụi nó: aura nào đáng giữ, con nào reservation rẻ, farm ở zone nào trong 0.5, và route gom nhanh nhất. Cơ chế tame nền — modifier retention, disenchant, on-screen lock — sống ở [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt).

## Aura nào phủ ra cả đàn

Chỉ dòng modifier kết thúc bằng chữ "Aura" mới phủ ra allies trong presence của con beast — và allies của một companion là mình cộng cả pack. Các mod nghe giống aura nhưng không phải, như All Damage Shocks hay All Damage Ignites, chỉ dán ailment lên enemy con đó đánh; cả đàn hưởng gián tiếp qua ailment chứ aura không tự phủ. Còn Regenerates Life, Armoured, Fire Resistant, Shroud Walker thì self-only, buff đúng con mang nó. Đọc kỹ chữ "Aura" trước khi định giá một con, đừng nhìn tên mod mà đoán phạm vi (chi tiết rule ở [phân vai roster](/builds/huntress/0-5-spirit-walker-companion-pack)).

Pool aura có tám mod, giá trị ghi hai mức thường và Empowered:

- **Haste Aura**: allies 25% increased Attack/Cast Speed + 25% increased Movement Speed. Đáng nhất vì bucket skill speed của companion gần rỗng, aura này chạy thường trực không cần điều kiện.
- **Extra Physical Damage Aura**: allies 20/40% increased Global Physical Damage. Là "increased" nên pha loãng với phys% sẵn có; đàn nào đã có 80-90% increased phys từ gear thì uplift thật chỉ quanh 10-15%, không phải 40%.
- **Energy Shield Aura**: allies gain 12/30% of Maximum Life as Extra Maximum Energy Shield. Scale theo life từng ally nên đàn nào ăn nhiều flat life thì lớp ES này dày tương ứng.
- **Elemental Resistance Aura**: allies +20/35% all Elemental Resistances. Player đã cap res thì phần này thừa, giá trị nằm ở đàn khi chạy map mod elemental.
- **Temporal Bubble**: enemy trong bubble chịu 10/25% reduced Action Speed, 20/60% reduced Cooldown Recovery, debuff expire chậm 40%. Lớp control mạnh quanh boss.
- **Periodic Invulnerability Aura**: pulse cho allies gần đó một buff Immunity ngắn, kèm clause khắc cứng trên mod "Allies with Immunity cannot gain Immunity". Nhiều con Invulnerability không cộng dồn, không nối duration; nó cứu pack qua một đợt AoE chứ không làm đàn bất tử.
- **Hinder Aura** (enemy gần đó 30% reduced Movement Speed) và **Healing Nova** (allies regen 10% life mỗi 2s theo chu kỳ) là hai mod hạng hai, đáng giữ nếu đi kèm con đã có aura chính chứ không đáng một slot riêng.

Xếp theo giá trị thực chiến: Extra Physical hoặc Haste trước, rồi Energy Shield hoặc Invulnerability, rồi Temporal Bubble, Elemental Resistance lấy cuối khi hở res. Khi soi một con mang sẵn hai aura đáng giữ thì nó nhảy lên đầu hàng đợi bất kể reservation, vì một body hai mod tiết kiệm cả spirit lẫn gem slot so với tách thành hai con.

## Vì sao con nhanh không bao giờ roll Haste Aura

Haste Aura không spawn trên con mang tag `very_fast_movement` — game không cho một con vốn đã nhanh roll thêm mod tăng tốc. poe2db xác nhận :wiki-link{url="https://www.poe2wiki.net/wiki/Crag_Leaper"} mang đúng tag đó, nên dù Crag Leaper rẻ thứ nhì bảng (23.1%) nó vĩnh viễn không gánh được Haste. Field-confirmed cùng nhóm cấm Haste: Hyena Demon, Swarming Wasp, và Quadrilla. Mấy con này vẫn roll mọi T1 aura khác bình thường, chỉ thiếu đúng Haste.

Hệ quả lên route: Haste phải lấy từ một base chậm trước tiên, và base chậm tiện nhất là crab ở Whakapanu. Settle Haste với crab xong mới đi nhặt các aura còn lại trên đám con nhanh rẻ tiền, vì tụi nó không cạnh tranh slot Haste.

## Bảng reservation và chỗ farm từng con

Reservation đọc thẳng trên monster trước khi tame, và nó **cố định theo base** — tier map hay area level không đổi con số, nên cứ farm ở zone nào dễ và an toàn nhất còn ra đúng base. Số dưới đây là field data đo 1000+ map; con số chốt vẫn là dòng reservation đọc trong client lúc gặp.

Một cảnh báo về vị trí: guide 0.4 cũ ghi mấy zone này là "Act 5", nhưng 0.5 không có Act 5. Campaign 0.5 là Act 1–4 cộng ba Interlude cộng Epilogue, nên cái 0.4 gọi "Act 5" giờ là Interlude 2 và Interlude 3 (area level 54–56). Bảng dưới đã sửa về nhãn 0.5 đúng.

Hạng rẻ nhất, lớp filler chính (21–25%):

- :wiki-link{url="https://www.poe2wiki.net/wiki/Swarming_Wasp"} 21%: :wiki-link{url="https://www.poe2wiki.net/wiki/Ashen_Forest"} (Interlude 3, lvl 54) qua essence, vào từ town The Glade. KHÔNG roll Haste.
- **Bloodthief Wisp** 21%: khu Qimah (Interlude 2). Cực hiếm gặp trong essence, đừng đặt cược route vào nó.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Crag_Leaper"} 23.1%: :wiki-link{url="https://www.poe2wiki.net/wiki/Vastiri_Outskirts"} (Act 2, lvl 16) qua essence. KHÔNG roll Haste (very_fast_movement).
- :wiki-link{url="https://www.poe2wiki.net/wiki/Porcupine_Crab"} 24.9%: :wiki-link{url="https://www.poe2wiki.net/wiki/Whakapanu_Island"} (Act 4, lvl 46), essence và rare. Nameplate trong zone ghi Quill Crab, cùng một con. Roll được mọi T1 aura gồm Haste.
- **Coconut Crab** 24.9%: Whakapanu Island (Act 4). Cùng tính chất crab, roll được Haste.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Bramble_Ape"} 24.9%: :wiki-link{url="https://www.poe2wiki.net/wiki/Kriar_Village"} (Interlude 3).

Hạng giữa (26–33%):

- :wiki-link{url="https://www.poe2wiki.net/wiki/Rasp_Scavenger"} 26.7% từ essence, 32.7% bản rare thường: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Khari_Crossing"} (Interlude 2, lvl 54).
- :wiki-link{url="https://www.poe2wiki.net/wiki/Winged_Fiend"} 26.7%: khu Qimah (Interlude 2, lvl 56) qua essence.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Sabre_Spider"} 28.2%: :wiki-link{url="https://www.poe2wiki.net/wiki/Mastodon_Badlands"} (Act 2).
- :wiki-link{url="https://www.poe2wiki.net/wiki/Hyena_Demon"} 30%: Vastiri Outskirts (Act 2) qua essence rare. KHÔNG roll Haste.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Mantis_Rat"} 30%: :wiki-link{url="https://www.poe2wiki.net/wiki/Mawdun_Mine"} (Act 2).
- :wiki-link{url="https://www.poe2wiki.net/wiki/Chaw_Mongrel"} 30%: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Azak_Bog"} hoặc The Matlan Waterways (Act 3).
- :wiki-link{url="https://www.poe2wiki.net/wiki/Slitherspitter"} 31.2%: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Venom_Crypts"} (Act 3).
- **Caustic Crab** 32.1%: Whakapanu Island (Act 4). Cùng đảo với Quill và Coconut nên phải lọc base, đừng tame con crab đầu tiên thấy aura.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Bane_Sapling"} 33.3%: :wiki-link{url="https://www.poe2wiki.net/wiki/Jungle_Ruins"} (Act 3), spawn rare hiếm.

Hạng đắt, chỉ lấy khi con đó gói hai giá trị (39%+):

- :wiki-link{url="https://www.poe2wiki.net/wiki/Diretusk_Boar"} 39%: :wiki-link{url="https://www.poe2wiki.net/wiki/Infested_Barrens"} (Act 3), spawn guaranteed. Roll được Haste, và bản build đang chạy giữ nó vì một body gánh cả Haste Aura lẫn All Damage Shocks; 39% cho hai mod đáng giá vẫn rẻ hơn tách thành một crab Haste cộng một con shock riêng.
- **Antlion** 42.3%: Infested Barrens (Act 3), spawn guaranteed.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Quadrilla"} 42.3%: Jungle Ruins (Act 3), rare hiếm. KHÔNG roll Haste, nhưng roll mọi T1 mod khác nên hợp làm máy farm aura ngoài Haste.

## Cách săn bằng essence reset

Nền của kỹ thuật là essence encounter ở overworld: một rare bị :wiki-link{url="https://www.poe2wiki.net/wiki/Essence"} giam hiện sẵn 2-3 modifier đọc được trước khi thả — soi được cả loại beast, reservation lẫn aura mà chưa cam kết gì. Quy trình chạy như sau.

Vào zone mục tiêu, quét tìm essence; không có thì reset instance ngay, đừng dọn map. Gặp essence đầu tiên, đọc tên con bị giam — con đầu tiên gần như khoá base cho cả chuỗi reset, chín phần mười lần reset sau ra đúng con đó, nên lần đầu sai base mục tiêu thì đổi zone luôn thay vì cắm đầu reset. Đọc mod: có aura mục tiêu thì wisp rồi giết khi wisps còn dán; không có thì reset lấy lượt mới. Tỉ lệ khoá-base 90% là quan sát thực địa chưa có nguồn chính thức, log lại tỉ lệ của chính mình khi farm.

Reset có hai kiểu tuỳ zone. Zone có waypoint thì về town, Ctrl + left-click vào tên zone tạo instance mới. Zone Interlude không có waypoint như Ashen Forest thì Alt + left-click vào cửa vào zone — không biết trick này thì không reset được mấy zone interlude.

Hai điểm dễ hỏng lượt tame. Một, **tắt minion trước khi wisp**: đàn companion DPS cao giết con beast trước khi wisps kịp bám đủ. Trên build cấm weapon-swap, dùng đúng cái bug đó làm công cụ — swap để despawn cả đàn cho sạch bãi rồi mới Tame Beast lên mục tiêu. Hai, mang :wiki-link{url="https://www.poe2wiki.net/wiki/Prolonged_Duration"} II trên gem Tame Beast khi đi săn để nới cửa sổ wisp, dễ kịp giết trong lúc wisps còn dán. Essence có thể đổi chỗ giữa các lần reset, không thấy ở spot cũ thì đảo một vòng trước khi reset tiếp.

## Route ba chặng để gom đủ aura

Đây là route tối ưu theo find-time, ba chặng anchor rồi mix. Mục tiêu thực tế là gom đủ 2-3 aura T1 đầu bảng, không phải đủ cả tám.

Chặng một, Whakapanu Island (Act 4): tìm essence crab ngay bãi biển đầu map, target Quill và Coconut Crab 24.9%. Crab là base dễ roll mọi T1 aura nhất, và quan trọng nhất là chúng roll được Haste — lấy **Haste Aura trên bất kỳ con crab nào** ở đây trước. Aura T1 khác gặp tiện thì giữ luôn để mix sau.

Chặng hai, Ashen Forest (Interlude 3): target Swarming Wasp 21%, giữ **bất kỳ aura T1 nào trừ Haste** vì con này không roll Haste. Tiện thì để mắt Sabre Spider 28% cùng vùng.

Chặng ba, Vastiri Outskirts (Act 2): tìm Crag Leaper 23.1% qua essence, cũng chỉ cho aura ngoài Haste; Hyena Demon 30% cùng zone là tuỳ chọn. Tới đây thì bắt đầu mix các aura đã gom. Khi trùng aura giữa các con, ưu tiên giữ bản từ chặng hai và ba (base rare hơn), rồi đẩy crab chặng một đi farm lại cho aura khác — crab là con dễ refarm mọi T1 nhất nên để nó làm slot linh hoạt. Còn thiếu aura thì Rasp Scavenger 26.7% ở Khari Crossing (Interlude 2) là nguồn bổ sung.

Lý do route đi theo zone cụ thể chứ không theo con rẻ nhất tuyệt đối: encounter rate do số **loại monster** chia chung pool essence của zone quyết định, không do tổng density. Zone pool mỏng thì essence dễ giam đúng con mình muốn. Whakapanu, Ashen Forest và Vastiri đều pool mỏng nên con mục tiêu hiện liên tục; tránh zone density cao nhiều loại như Crematorium hay Kaom's Village vì có khi 50 lần reset mới thấy con cần.

## Lưu ý không bỏ qua

Companion giới hạn **một con mỗi loại** cùng lúc, nên zoo bắt buộc đa dạng base: ba con Crag Leaper roll ba aura khác nhau vẫn chỉ field được một. Danh sách base rẻ vì vậy phải dài, mỗi aura muốn chạy thường trực cần một base riêng mang nó.

Aura phủ theo bán kính "nearby" quanh con bot, mà AI companion tản theo combat — bot lao sai hướng là cả đàn rớt aura đúng lúc cần. Uptime thực chiến chắc chắn dưới 100%, chiết khấu giá trị zoo theo đó; quan sát icon buff trên thanh status của mình một session T15 để biết rớt thường xuyên không.

Con tame hỏng aura không vứt được nếu nó đang chiếm con gem đã đầu tư — disenchant gem Tame Beast ở vendor để clear con đã lưu, lấy lại gem trắng giữ nguyên level, quality, socket rồi đi bắt bản khác. Thủ thêm một gem Tame Beast rẻ làm standby để soi mod, chỉ dồn link xịn sang khi đã trúng aura đáng giữ.

Aura bot không ăn gì từ tier damage của gem level cao, nên cắt gem từ Uncut Skill Gem L19 chứ đừng tốn L20 — chênh lệch giá L19 với L20 là vài div cho đúng 0 giá trị trên một con chỉ phát aura. Để dành L20 cho con carry. Còn quality trên companion gem thì đáng làm: mỗi 20% quality cho 10% Reservation Efficiency, :wiki-link{url="https://www.poe2wiki.net/wiki/Gemcutter%27s_Prism"} áp thẳng sau khi capture, đẩy được thêm một bot vào cùng pool spirit.

## Tổng kết

Aura beast farming là lớp sức mạnh team-wide không mua được bằng currency: tame con rare rẻ mang mod "… Aura", mỗi con thành một aura bot phủ buff cho cả đàn lẫn mình. Chỉ mod kết thúc bằng "Aura" mới phủ ra pack — All Damage Shocks dán ailment, các mod self khác chỉ buff con mang nó. Aura đáng nhất là Extra Physical hoặc Haste, rồi Energy Shield hoặc Invulnerability; Haste phải lấy từ base chậm vì con `very_fast_movement` như Crag Leaper, Hyena, Swarming Wasp, Quadrilla không bao giờ roll được nó.

Reservation cố định theo base nên cứ farm zone dễ nhất còn ra đúng con: Whakapanu cho crab Haste (Act 4), Ashen Forest cho Swarming Wasp 21% (Interlude 3), Vastiri cho Crag Leaper 23.1% (Act 2), ba anchor pool mỏng nên con mục tiêu hiện liên tục. Săn bằng essence reset vì rare bị giam khoe mod trước khi thả; tắt minion để khỏi giết con beast sớm, mang Prolonged Duration II nới cửa sổ wisp. Một con mỗi loại buộc đa dạng base; aura "nearby" nên uptime thực dưới 100%; gem L19 đủ cho bot, để dành L20 cho carry.

## Version History

### Patch 0.5.2

Reservation các base và pool aura modifier giữ nguyên qua 0.5.0 → 0.5.2; patch không đụng essence reset hay cơ chế tame. Số reservation field-measure từ 0.4 vẫn khớp 0.5 cho các base đã đo lại. Thay đổi duy nhất ảnh hưởng doc này là nhãn vị trí: guide 0.4 ghi "Act 5" cho Ashen Forest, Qimah, Khari Crossing, Kriar Village — 0.5 không có Act 5, mấy zone đó là Interlude 2 và Interlude 3 (area level 54–56). Quy tắc Haste không spawn trên con `very_fast_movement` là cơ chế spawn theo tag, không phải nerf của một patch cụ thể.

## Relationships

- **related_mechanics** [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt) — pipeline tame nền: modifier retention, on-screen lock, disenchant, Untainted Paradise cho volume; doc này thêm lớp chọn aura + reservation + vị trí lên trên.
- **used_by** [Aura Bot Zoo Spirit Walker](/builds/huntress/0-5-spirit-walker-aura-bot-zoo) — nhánh build đổi spirit lấy aura bot, dùng đúng bảng reservation và route này để gom.
- **used_by** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — roster live chạy bốn aura bot (Diretusk Haste, Coconut Crab Extra Phys, Adorned Scarab ES, Swarming Wasp Invulnerability) săn theo doc này.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — league 0.5 mở Spirit Walker, Tame Beast và essence encounter làm nền cho cả hướng companion.

## Resources

- [Mattjestic — Ultra Rare Beast Companion Farming Guide](https://mobalytics.gg/poe-2/profile/mattjestic-multigaming/guides/new-0-4-ultra-rare-beast-companion-farming-guide) — bảng reservation 1000+ map test và route ba chặng (nhãn act 0.4, đã sửa về Interlude 0.5 trong doc này).
- [Mattjestic — Rare Companion Spirit Cost & Locations](https://www.youtube.com/watch?v=zuoSLaKXLNE) — field data reservation theo base, spot Ashen Forest và Whakapanu.
- [Community Spectre Cost Spreadsheet](https://docs.google.com/spreadsheets/d/1oadXSCHczpyCgRxzTk3nRBeeOLlefZAzKM3ijwmWevY/htmlview?gid=0#gid=0) — bảng tra cost spectre làm pre-filter reservation.
