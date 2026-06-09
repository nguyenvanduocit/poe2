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

:wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Chance"} trong POE2 là currency nhị phân: dùng lên một item Normal (trắng), nó **hoặc nâng thẳng lên Unique, hoặc phá huỷ luôn item** — không ra Magic/Rare như POE1. Cái người ta gọi là "kiếm tiền bằng cách săn belt ngon từ normal item" thực chất là một trò xổ số: spam Orb of Chance lên :wiki-link{url="https://www.poe2wiki.net/wiki/Heavy_Belt"} trắng để nhắm trúng :wiki-link{url="https://www.poe2wiki.net/wiki/Headhunter"} — belt giá 222 div ở league Runes of Aldur. Payout đổi đời khiến trò này hấp dẫn người mới, nhưng giá Headhunter hiện tại đã định trò chơi về ngưỡng hoà vốn, nên đáng tính kỹ break-even trước khi đốt div.

## Cơ chế chance và vì sao Heavy Belt là base đáng nhắm

Orb of Chance không roll rarity ngẫu nhiên. Tooltip ghi đúng nguyên văn: "Unpredictably either upgrades a Normal item to Unique rarity or destroys it." Mỗi lần dùng lên belt trắng, game roll một trong các kết cục: ra một unique của đúng base đó, hoặc bốc hơi item. Xác suất ra unique cụ thể vs bị phá phụ thuộc unique item tier — unique càng hiếm thì cửa trúng càng nhỏ và cửa phá càng lớn.

Trong POE2 mỗi unique gắn cứng với một base type, nên chance một base chỉ ra được unique của base đó. Heavy Belt host ba unique mà một con bị loại khỏi cửa chance, nên pool thực tế cô đặc còn hai:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Headhunter"} — chance được. Wiki acquisition ghi thẳng "Headhunter can drop anywhere. It can be chanced." Đây là jackpot duy nhất.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Zerphi's_Genesis"} — drop-restricted, **không** chance được, bị loại khỏi pool.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Waistgate"} — chance được nhưng là rác ~1 ex.

Một quả Orb of Chance "thành công" (không phá belt) vì thế chỉ ra Headhunter hoặc Waistgate — pool hai con, cô đặc nhất có thể với một multi-unique base. Headhunter ở tier hiếm hơn nên gần như mọi lần thành công đều rơi vào Waistgate. Điều kiện cứng: belt phải **item level ≥ 50** thì Headhunter mới nằm trong pool — belt ilvl thấp chỉ roll ra Waistgate dù tốn bao nhiêu orb, đây là chỗ âm thầm vô hiệu hoá cả chiến lược.

## Toán break-even

Chi phí mỗi lần thử (giá poe2scout, league Runes of Aldur, 2026-06-09):

- :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Chance"} (giá spot, 15,280 cây rao) — 13.5 ex
- White Heavy Belt ilvl ≥ 50 mua lẻ — ~10 ex, hoặc **0 ex nếu tự farm**
- **Total/lần — ~23.5 ex nếu mua base, ~13.5 ex nếu tự farm base**

Với :wiki-link{url="https://www.poe2wiki.net/wiki/Headhunter"} = 22,050 ex ≈ 222 div (chỉ 30 cây rao), ngưỡng hoà vốn là:

- Tự farm base: cần **P(Headhunter) > 13.5 / 22,050 = 1/1,631** mỗi orb
- Mua base ~10 ex: cần **P(Headhunter) > 23.5 / 22,050 = 1/938** mỗi orb

Giá trị Waistgate (~1 ex) quá nhỏ để dời ngưỡng. Toán này quyết định tất cả: tỉ lệ trúng thật **tốt hơn** ngưỡng thì lời, **kém hơn** thì lỗ. GGG không công bố tỉ lệ — poedb ghi thẳng "Modifier weight information cannot be obtained from game files" — nên con số thật phải suy từ thực nghiệm và từ chính thị trường.

## Tỉ lệ thật và độ biến thiên

Một lần chạy thực nghiệm league này: 1,230 white Heavy Belt + 1,230 Orb of Chance, tốn **565 div**, ra **0 Headhunter** và 55 Waistgate — tức ~4.5% số orb ra unique rác, ~95% phá belt. Con số đồn "1 in 115" sai về số học: nếu thật là 1/115 thì xác suất để 0/1,230 chỉ khoảng 0.002%. Tỉ lệ thực địa rơi vào khoảng 1/2,000 đến 1/10,000, đã hiếm hơn hẳn 0.4 (cỡ 1/250 — nhóm farm ~40 con trong ~10,000 belt).

Thị trường tự chốt biên trên cho tỉ lệ: nếu chance Headhunter có lời rõ ở mức như 1/500, người ta đã chance hàng loạt → Headhunter tràn chợ → giá sập. Headhunter đứng 222 div mà chỉ 30 cây rao chính là dấu hiệu tỉ lệ thật ở mức hoà vốn trở xuống, chưa bị arbitrage.

Độ biến thiên là cái giết người chơi: ngay cả ở kịch bản đẹp nhất thị trường cho phép (1/1,631), để đạt 63% cơ hội trúng *một* Headhunter phải đốt 1,631 orb ≈ 222 div — đúng bằng giá mua thẳng một con, mà chỉ 63% ăn. Edge kỳ vọng bằng 0, đuôi xui đốt gấp nhiều lần mức trung bình. Đống post "trúng Headhunter ở quả orb thứ 3" là survivorship bias: người trúng khoe, ngàn người đốt sạch không ai kể.

## Omen of the Ancients và Omen of Chance

:wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_the_Ancients"} (2.6 ex) đổi quả chance kế tiếp thành unique ngẫu nhiên cùng item class, không destroy. Nghe hấp dẫn vì bỏ cửa phá belt, nhưng "same Item Class" nghĩa là bất kỳ unique belt nào trong game — pha loãng across cả ~20 belt thay vì pool hai con của Heavy Belt, nên cửa trúng đúng Headhunter còn thấp hơn raw chance. Thực tế người ta đổ đầy quad tab toàn belt unique rác; ra một belt không phải Headhunter hay :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"} thì coi như item bị phá. Nếu vẫn đi đường Ancients thì dùng belt trắng rẻ nhất, tuyệt đối không dùng Heavy Belt đắt vì omen bỏ qua base.

:wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Chance"} (699 ex) chặn destroy cho đúng một quả chance. Giá 699 ex cho một lần chặn phá là vô lý với lottery base-free — nó sinh ra để bảo vệ một base craft đắt tiền đã đổ currency vào, không phải để spam Heavy Belt trắng.

## Chơi sao cho đỡ lỗ

Edge dương duy nhất nằm ở chi phí đầu vào, vì tỉ lệ là hằng số không sửa được. **Tự farm white Heavy Belt ilvl ≥ 50** thay vì mua: base ~10 ex/cây đẩy break-even từ 1/1,631 lên 1/938, gần gấp đôi yêu cầu tỉ lệ. Heavy Belt trắng rớt khắp endgame map (area level ≥ 50 cho ilvl đủ), nhặt sạch trong lúc map rồi chance hàng loạt là cách duy nhất kéo chi phí/lần về sát giá một quả orb. Mua orb ở giá spot 13.5 ex, đừng mua sỉ premium — thanh khoản 15,280 cây rao thì không có lý do trả giá bulk.

Mấy cái âm thầm đốt currency: chance belt ilvl < 50 (không bao giờ ra Headhunter, mỗi orb đốt với xác suất jackpot bằng 0); đi chance :wiki-link{url="https://www.poe2wiki.net/wiki/Utility_Belt"} mong :wiki-link{url="https://www.poe2wiki.net/wiki/Ingenuity"} hay Mageblood (Ingenuity drop-restricted không chance được, league này còn rớt 15 ex — ngõ cụt); và gambler's fallacy "cứ chance tới khi trúng" — mỗi orb là sự kiện độc lập, orb trước phá belt không làm orb sau dễ trúng hơn, chạy tới khi trúng một con không cho biết tỉ lệ và không giới hạn được lỗ.

## Tổng kết

Phương pháp chạy được về cơ chế: raw Orb of Chance trên white Heavy Belt ilvl ≥ 50 là cách hợp lệ duy nhất tự tạo Headhunter, và pool đã cô đặc còn hai con vì Zerphi's Genesis drop-restricted. Nhưng kinh tế hiện tại âm-tới-hoà-vốn: cần P(Headhunter) > 1/1,631 (tự farm) hoặc 1/938 (mua base), trong khi tỉ lệ thật league này ước lượng 1/2,000–1/10,000. Edge dương chỉ tồn tại khi tự farm base free và mua orb spot; còn lại bán thẳng orb + belt lời hơn chance.

Verdict: NEUTRAL — đây là lottery âm-EV được thị trường định giá về ngưỡng hoà vốn, không phải chiến lược farm thu nhập ổn định. Payout 222 div đổi đời cho char mới là lý do duy nhất để chơi, với tiền nhàn rỗi. Open question: 0.5 có thật đẩy Headhunter sang tier "t0" hiếm hơn t1 không? poeladder vẫn list t1 và chưa có t0 cho league này, nhưng tỉ lệ thực địa tụt rõ — cần một mẫu ≥ 5,000 belt ilvl 50+ tự farm để chốt tỉ lệ thật và log lại nếu patch sau chỉnh weight.

## Version History

### Patch 0.5.0
Orb of Chance giờ dùng được lên cả Tablet. Tỉ lệ trúng Headhunter hiếm hơn rõ so với 0.4 — thực địa nhiều người chance hàng nghìn belt không ra con nào; nghi vấn Headhunter bị đẩy sang tier hiếm hơn, chưa xác nhận qua datamine.

### Patch 0.4.0
Tỉ lệ chance Headhunter ước lượng ~1/250 (mẫu nhóm ~40 con trong ~10,000 belt) — mốc tham chiếu để thấy 0.5 đã siết tỉ lệ tới mức nào.
