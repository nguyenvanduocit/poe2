---
template: templates/guide-template.md
document_type: guide
title: "Crafting cơ bản: các orb chính, essence và omen"
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
  - crafting
  - essence
  - omen
---

# Crafting cơ bản: các orb chính, essence và omen

Crafting trong POE2 xây trên hệ thống rarity — Normal, Magic, Rare — và mỗi rarity có bộ orb riêng để sửa chữa. Nắm được dây chuyền này từ đầu sẽ tránh được tình huống tiêu nhầm orb quý lên item không xứng đáng. Guide này tập trung vào góc nhìn craft: cơ chế từng orb hoạt động như thế nào, không phải giá trị trade của chúng.

## Dây chuyền nâng rarity: Normal → Magic → Rare

Item bắt đầu ở trạng thái Normal — không có explicit modifier nào. :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Transmutation"} đổi Normal thành Magic với 1 modifier ngẫu nhiên. Magic item chứa tối đa 2 modifier (1 prefix và 1 suffix); nếu Transmutation chỉ roll ra 1 mod thì :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Augmentation"} thêm vào mod còn thiếu.

Từ Magic lên Rare có hai con đường. :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Alchemy"} đẩy Normal hoặc Magic thẳng lên Rare với 4 modifier ngẫu nhiên, nhưng không giữ lại mod cũ. :wiki-link{url="https://www.poe2wiki.net/wiki/Regal_Orb"} nâng Magic lên Rare theo cách khác — giữ nguyên 2 mod đang có và thêm 1 mod mới, cho kết quả 3 modifier với nhiều kiểm soát hơn. Chọn Regal khi Magic item đã có 1–2 mod tốt và không muốn mất chúng; chọn Alchemy khi chỉ cần Rare nhanh và không quan tâm mod cụ thể.

Rare item chứa tối đa 6 modifier (3 prefix và 3 suffix). Đây là ceiling — không craft thêm được khi đã đầy 6 mod.

## Sửa Rare item sau khi craft

Khi item đã là Rare và cần điều chỉnh, có ba orb chính.

:wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"} thêm 1 modifier ngẫu nhiên vào Rare item đang có dưới 6 mod. Dùng khi item đã có phần lớn stats tốt và cần lấp nốt slot trống. Exalted có giá trị trade cao nên chỉ bỏ lên item thật sự đáng giữ lâu dài.

:wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Orb"} xóa 1 modifier ngẫu nhiên và thêm 1 modifier mới ngẫu nhiên vào Rare item. Đây là điểm dễ nhầm nhất với người từ POE1: trong POE2, Chaos không reroll toàn bộ item mà chỉ thay một mod. Vì vậy Chaos là công cụ đổi mod rác, nhưng cũng có thể xóa đúng mod tốt nếu không may.

:wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Annulment"} xóa 1 modifier ngẫu nhiên khỏi Magic hoặc Rare item mà không thêm lại gì. Dùng để gỡ mod rác trước khi Exalted thêm mod mới vào slot trống đó. Rủi ro ở chỗ Annulment không cho chọn mod nào bị xóa — tỉ lệ xóa nhầm mod tốt tùy số modifier còn lại trên item, càng ít mod còn lại thì rủi ro càng cao.

## Essence cho guaranteed modifier

:wiki-link{url="https://www.poe2wiki.net/wiki/Essence"} là nhóm currency hoàn toàn khác logic với orb thông thường — thay vì modifier ngẫu nhiên, Essence đảm bảo một modifier cụ thể tùy loại Essence.

Essence bậc Lesser, thường, và Greater dùng lên Magic item, nâng nó lên Rare với guaranteed mod đó cộng thêm các mod ngẫu nhiên khác. Ví dụ: Essence of the Body đảm bảo +(85–99) maximum Life trên armour; Essence of Abrasion đảm bảo flat physical damage trên weapon; Essence of Sorcery đảm bảo % increased Spell Damage trên focus hoặc wand. Biết trước stat nào cần thì chọn đúng Essence thay vì spam Alchemy chờ may.

Perfect Essence và Corrupted Essence hoạt động trên Rare item — xóa 1 mod ngẫu nhiên rồi thêm vào guaranteed mod tương ứng. Đây là cách tinh chỉnh Rare item đã có base tốt nhưng cần thay đúng 1 mod cụ thể, kết hợp được với Omen để kiểm soát mod nào bị xóa.

Essence bắt đầu rớt từ Act 1 qua encounter Essence — quái bị giam trong tinh thể xuất hiện ở nhiều khu vực. Đập ra lấy luôn, không cần đợi endgame.

## Omen biến orb thành craft có mục tiêu

:wiki-link{url="https://www.poe2wiki.net/wiki/Omen"} là loại currency meta-crafting — không craft trực tiếp lên item mà thay đổi hành vi của orb kế tiếp sử dụng.

Cách dùng: right-click Omen để activate, nó nằm trong inventory ở trạng thái active và tự consume khi điều kiện kích hoạt xảy ra. Ví dụ thực tế:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Sinistral_Exaltation"} khiến Exalted Orb tiếp theo chỉ thêm prefix modifier — dùng khi item đầy suffix nhưng còn chỗ prefix trống.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Dextral_Erasure"} khiến Chaos Orb tiếp theo chỉ xóa suffix modifier — tránh xóa nhầm prefix tốt.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Whittling"} khiến Chaos tiếp theo xóa modifier có level thấp nhất thay vì ngẫu nhiên.

Phần lớn Omen đến từ :wiki-link{url="https://www.poe2wiki.net/wiki/Ritual"} encounter trong endgame, mua bằng Tribute tích lũy từ encounter. Giai đoạn campaign không cần nghĩ tới Omen — chúng là công cụ cho khi đang tinh chỉnh gear endgame tốt.

## Orb POE1 không có trong POE2

Người chuyển từ POE1 hay bị kẹt ở đây vì một số orb quen thuộc không tồn tại nữa:

- **Orb of Alteration** — POE1 dùng để reroll Magic item. POE2 không có; Magic item không reroll được, chỉ dùng Annulment để gỡ mod rồi Augmentation thêm mới.
- **Orb of Scouring** — POE1 dùng để strip item về Normal. POE2 không có mechanic này.
- **Chromatic Orb** — POE1 dùng để đổi màu socket. POE2 không có socket màu — support gem gắn riêng không phụ thuộc màu.
- **Orb of Fusing** — POE1 dùng để link socket. POE2 không có link mechanic.

Nếu đọc guide POE1 cũ mà thấy nhắc các orb này, bỏ qua — chúng không áp dụng sang POE2.

:wiki-link{url="https://www.poe2wiki.net/wiki/Jeweller's_Orb"} vẫn tồn tại trong POE2 nhưng dùng khác hoàn toàn: thêm support slot cho Skill Gem thay vì socket trên gear. POE2 không có socket hay link mechanic trên gear kiểu POE1.

## Relationships

- **related_guides** [Currency cơ bản: mỗi orb làm gì](/guides/beginner-currency) — trade value của từng orb và khi nào nên giữ để mua item thay vì craft.
- **related_guides** [Trading cơ bản](/guides/beginner-trading) — mua gear tốt bằng Chaos và Exalted thường hiệu quả hơn craft bừa ở giai đoạn đầu.
- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — Verisium Runeforging và Ancient Rune, hệ thống craft riêng của patch 0.5 hoạt động độc lập với các orb trên.
