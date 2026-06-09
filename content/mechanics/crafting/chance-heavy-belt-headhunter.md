---
document_type: mechanic
title: Chance Heavy Belt Săn Headhunter
mechanic_type: Crafting
league: '0.5'
patch: 0.5.0
status: draft
author: nguyenvanduocit
created: '2026-06-09'
updated: '2026-06-09'
tags: [poe2, crafting, orb-of-chance, headhunter, heavy-belt, gambling, economy, currency, chancing, 0-5]
template: templates/mechanic-template.md
---

# Chance Heavy Belt Săn Headhunter

:wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Chance"} trong POE2 là currency nhị phân: dùng lên một item Normal (trắng), nó **hoặc nâng thẳng lên Unique, hoặc phá huỷ luôn item** — không ra Magic/Rare như POE1. Cơ chế này tồn tại từ 0.1 và 0.5 đã chỉnh tỉ lệ trúng theo hướng hiếm hơn hẳn. Cái người ta gọi là "kiếm tiền bằng cách săn belt ngon từ normal item" thực chất là một trò xổ số: spam Orb of Chance lên :wiki-link{url="https://www.poe2wiki.net/wiki/Heavy_Belt"} trắng để nhắm trúng :wiki-link{url="https://www.poe2wiki.net/wiki/Headhunter"} — belt giá 222 div ở league Runes of Aldur. Payout đổi đời khiến trò này hấp dẫn người mới, nhưng giá Headhunter hiện tại đã định trò chơi về ngưỡng hoà vốn, nên đáng tính kỹ break-even trước khi đốt div.

## How It Works

Orb of Chance không roll rarity ngẫu nhiên. Tooltip ghi đúng nguyên văn: "Unpredictably either upgrades a Normal item to Unique rarity or destroys it." Mỗi lần dùng lên một belt trắng, game roll một trong các kết cục: ra một unique thuộc base đó, hoặc bốc hơi item. Xác suất ra unique cụ thể vs bị phá phụ thuộc **unique item tier** — unique càng hiếm thì cửa trúng càng nhỏ và cửa phá càng lớn.

Điểm khoá chiến lược: trong POE2 mỗi unique gắn cứng với **một base type**. Chance một base chỉ ra được các unique của đúng base đó. Heavy Belt host ba unique, mà một con bị loại khỏi cửa chance, nên pool thực tế cô đặc còn hai:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Headhunter"} — chance được. Wiki acquisition ghi thẳng "Headhunter can drop anywhere. It can be chanced." Đây là jackpot duy nhất.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Zerphi's_Genesis"} — drop-restricted, **không** chance được, bị loại khỏi pool.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Waistgate"} — chance được nhưng là rác ~1 ex.

Nên khi một quả Orb of Chance "thành công" (không phá belt), kết cục chỉ là **Headhunter hoặc Waistgate** — pool hai con, cô đặc nhất có thể với một multi-unique base. Headhunter ở tier hiếm hơn Waistgate, nên gần như mọi lần thành công đều rơi vào Waistgate; Headhunter là quả trúng số thật sự hiếm.

Base phải đủ điều kiện để Headhunter nằm trong pool. Headhunter là Heavy Belt Requires Level 50, nên belt trắng dùng để chance phải có **item level ≥ 50** — belt ilvl thấp chỉ roll ra được Waistgate, không bao giờ ra Headhunter dù tốn bao nhiêu orb. Đây là điều kiện hay bị bỏ sót nhất và nó âm thầm vô hiệu hoá cả chiến lược.

## Math Chain

Chi phí mỗi lần thử (giá poe2scout, league Runes of Aldur, 2026-06-09):

- :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Chance"} (giá spot, thanh khoản 15,280 cây rao) — 13.5 ex
- White Heavy Belt ilvl ≥ 50, mua lẻ trên trade — ~10 ex (hoặc **0 ex nếu tự farm**)
- **Total chi phí/lần — ~23.5 ex nếu mua base, ~13.5 ex nếu tự farm base**

Giá trị jackpot và ngưỡng hoà vốn:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Headhunter"} — 22,050 ex ≈ 222 div (chỉ 30 cây rao — khan)
- Break-even khi tự farm base: 13.5 / 22,050 = cần **P(Headhunter) > 1/1,631** mỗi orb
- Break-even khi mua base ~10 ex: 23.5 / 22,050 = cần **P(Headhunter) > 1/938** mỗi orb

Giá trị Waistgate (~1 ex/lần thành công) quá nhỏ để dời ngưỡng, bỏ qua trong tính toán.

Đây là toán quyết định tất cả: nếu tỉ lệ trúng Headhunter thật **tốt hơn** ngưỡng trên thì có lời, **kém hơn** thì lỗ. GGG không công bố tỉ lệ — poedb xác nhận thẳng "Modifier weight information cannot be obtained from game files." Nên con số thật phải suy ra từ bằng chứng thực nghiệm và từ chính thị trường.

## Key Interactions

Hai Omen cắm vào Orb of Chance, mỗi cái đổi cơ chế theo hướng khác nhau — và cả hai đều **tệ hơn** cho mục tiêu Headhunter.

:wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_the_Ancients"} (2.6 ex) đổi quả chance kế tiếp thành "upgrade the Item to a random Unique of the same Item Class", không destroy. Nghe hấp dẫn vì bỏ được cửa phá belt, nhưng "same Item Class" nghĩa là **bất kỳ unique belt nào trong game** — pha loãng across cả ~20 unique belt thay vì pool hai con của Heavy Belt. Cửa trúng đúng Headhunter còn thấp hơn raw chance. Hệ quả thực tế là người ta đổ đầy nửa quad tab toàn unique belt rác mà không ra Headhunter; ra một belt unique không phải Headhunter hay :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"} thì về giá trị coi như item bị phá. Nếu vẫn muốn đi đường Ancients thì **dùng belt trắng rẻ nhất**, tuyệt đối không dùng Heavy Belt đắt — vì omen bỏ qua base, mọi belt trắng cho cùng pool đầu ra.

:wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Chance"} (699 ex) chặn destroy cho đúng một quả chance kế tiếp. Giá 699 ex cho một lần chặn phá là vô lý với trò xổ số base-free — nó sinh ra để bảo vệ một **base craft đắt tiền** đã đổ currency vào, không phải để spam Heavy Belt trắng.

### Ba thứ nghe giống nhau nhưng khác cơ chế

- "Orb of Chance" (raw) — Normal → Unique của đúng base, **có cửa destroy**. Cô đặc trên pool một base (Heavy Belt = Headhunter/Waistgate).
- "Omen of the Ancients" — Normal → Unique ngẫu nhiên cùng **item class**, **không destroy**, pha loãng across toàn class belt.
- "Omen of Chance" — vẫn là raw chance nhưng **xoá cửa destroy** cho một lần; không đổi pool, chỉ bảo hiểm item.

Ba cơ chế cho ba bài toán khác nhau: raw chance để target một base, Ancients để gamble lấy bất kỳ unique nào của class, Omen of Chance để bảo vệ base quý.

## Optimization

Edge dương duy nhất của trò này nằm ở chi phí đầu vào, không phải ở tỉ lệ trúng — tỉ lệ là hằng số mình không sửa được.

**Tự farm white Heavy Belt ilvl ≥ 50** thay vì mua. Mua base ở ~10 ex/cây đẩy ngưỡng break-even từ 1/1,631 lên 1/938 — gần như gấp đôi yêu cầu tỉ lệ. Heavy Belt trắng rớt khắp endgame map (area level ≥ 50 luôn cho ilvl đủ), nên nhặt sạch belt trắng trong lúc map thường rồi chance hàng loạt là cách duy nhất kéo chi phí/lần về sát giá một quả orb.

**Mua Orb of Chance ở giá spot 13.5 ex**, đừng mua sỉ premium. Thanh khoản orb rất dày (15,280 cây rao), không có lý do trả giá bulk. Mua sỉ trên kênh trade chat hay TFT thường đội giá cả orb lẫn belt — chính khoản premium đó ăn mòn hết edge.

**Kiểm ilvl trước khi chance.** Mỗi belt phải ilvl ≥ 50. Một stack belt lẫn ilvl thấp nghĩa là một phần currency đốt vào những quả chance không thể nào ra Headhunter.

## What Doesn't Work

Chance :wiki-link{url="https://www.poe2wiki.net/wiki/Utility_Belt"} để săn :wiki-link{url="https://www.poe2wiki.net/wiki/Ingenuity"} hay Mageblood — bỏ. Ingenuity là drop-restricted, **không chance được**, và league này Ingenuity rớt còn 15 ex với hơn 4,000 cây rao nên dù chance được cũng vô nghĩa. Mageblood theo truyền thống cũng drop-restricted khỏi cửa raw chance. Heavy Belt → Headhunter là target raw-chance khả thi duy nhất.

Dùng Omen of the Ancients trên Heavy Belt — phí kép: vừa trả tiền belt đắt nhất, vừa pha loãng pool sang toàn bộ class belt. Nếu đã chọn Ancients thì phải đổi sang belt trắng rẻ nhất.

Tin con số "1 in 115". Đây là tỉ lệ đồn thổi, thường phát ra từ chính người bán Heavy Belt sỉ. Một lần chạy thực nghiệm 1,230 belt tốn 565 div ra **0 Headhunter** — nếu tỉ lệ thật là 1/115 thì xác suất để 0/1,230 chỉ khoảng 0.002%. Con số 1/115 sai về mặt số học.

## Common Mistakes

**Sai:** mua sỉ Heavy Belt ở ~25 ex/cây cho tiện. **Đúng:** tự farm belt trắng ilvl ≥ 50 trong map thường, hoặc mua lẻ ~10 ex. **Lý do:** chi phí base từ ~10 lên ~25 ex đẩy break-even từ 1/938 xuống cần tới ~1/790, mỗi 1,000 belt là chênh ~150 div tiền base thuần.

**Sai:** chance cả stack belt không kiểm item level. **Đúng:** lọc bỏ mọi belt ilvl < 50 trước. **Lý do:** belt ilvl thấp không thể ra Headhunter — mỗi quả orb dội vào đó là ~13.5 ex đốt với xác suất jackpot bằng 0.

**Sai:** "cứ chance tiếp tới khi trúng thì thôi" như một cách đảm bảo. **Đúng:** coi mỗi orb là một sự kiện độc lập, định ngân sách cố định và chấp nhận mất trắng. **Lý do:** đây là gambler's fallacy — orb trước phá belt không làm orb sau dễ trúng hơn. Chạy tới khi trúng đúng một con không cho biết tỉ lệ và không giới hạn được lỗ.

**Sai:** dùng Omen of Chance (699 ex) để "an toàn" khi spam Heavy Belt trắng. **Đúng:** để dành Omen of Chance cho base craft đắt; lottery base-free thì chấp nhận destroy. **Lý do:** bảo hiểm 699 ex cho một item base ~10 ex là lỗ ngay từ phép tính.

## Cost & Restrictions

Mỗi lần thử tốn ~13.5–23.5 ex tuỳ tự farm hay mua base, với ~95% số orb phá huỷ belt (thực nghiệm 1,230 belt: 55 lần ra unique, tất cả Waistgate, còn lại bốc hơi). Payout khi trúng là 222 div, nhưng variance khổng lồ: ngay cả ở kịch bản đẹp nhất thị trường cho phép (1/1,631), để đạt 63% cơ hội trúng *một* Headhunter phải đốt 1,631 orb ≈ 222 div — đúng bằng giá mua thẳng một con, mà chỉ 63% ăn. Edge kỳ vọng bằng 0, đuôi xui có thể đốt gấp nhiều lần mức trung bình.

Restriction cứng: belt phải Normal (không chance được item Magic/Rare/Corrupted), ilvl ≥ 50 để Headhunter vào pool, và Zerphi's Genesis bị loại khỏi pool vì drop-restricted nên không "lấp" cửa unique giúp Headhunter.

Ràng buộc thị trường mới là cái nặng nhất: nếu tỉ lệ thật tốt như 1/500 và có lời rõ, người ta đã chance hàng loạt → Headhunter tràn chợ → giá sập. Headhunter đứng 222 div mà chỉ 30 cây rao chính là dấu hiệu tỉ lệ thật ở mức hoà vốn trở xuống, **chưa bị arbitrage**. Thị trường đã tự định giá để trò này không còn lời.

## Verdict & Open Questions

- Cơ chế hoạt động: raw Orb of Chance trên white Heavy Belt ilvl ≥ 50 là cách hợp lệ duy nhất tự tạo Headhunter.
- Pool cô đặc còn hai con (Headhunter/Waistgate) vì Zerphi's Genesis drop-restricted — đã tối ưu hết mức cho một multi-unique base.
- Kinh tế hiện tại âm-tới-hoà-vốn: cần P(Headhunter) > 1/1,631 (tự farm) hoặc 1/938 (mua base), trong khi tỉ lệ thật league này đã hiếm hơn 0.4 (~1/250) và ước lượng rơi vào khoảng 1/2,000–1/10,000.
- Edge dương chỉ tồn tại khi tự farm base free và mua orb spot; còn lại bán thẳng orb + belt lời hơn chance.

Verdict: NEUTRAL — đây là lottery âm-EV được thị trường định giá về ngưỡng hoà vốn, không phải chiến lược farm thu nhập. Payout đổi đời cho char mới là lý do duy nhất để chơi, với tiền nhàn rỗi.

Open question: 0.5 có thật sự đẩy Headhunter sang unique tier "t0" (hiếm hơn t1) không? poeladder vẫn list nó t1 và chưa có t0 nào cho league này, nhưng tỉ lệ trúng thực địa tụt rõ so với 0.4. Cần một mẫu thực nghiệm ≥ 5,000 belt ilvl 50+ tự farm để chốt tỉ lệ thật của league, và log lại nếu patch sau chỉnh weight.

## Patch Evolution

### Patch 0.5.0
Orb of Chance giờ dùng được lên cả Tablet (mở rộng ngoài gear). Tỉ lệ trúng Headhunter qua chance hiếm hơn rõ so với 0.4 — thực địa league này nhiều người chance hàng nghìn belt không ra con nào, trong khi 0.4 đo được cỡ 1/250. Nghi vấn cộng đồng là Headhunter bị đẩy sang tier hiếm hơn, chưa xác nhận qua datamine.

### Patch 0.4.0
Tỉ lệ chance Headhunter ước lượng ~1/250 (mẫu nhóm: ~40 con trong ~10,000 belt). Đây là mốc tham chiếu để thấy 0.5 đã siết tỉ lệ tới mức nào.
