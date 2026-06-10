---
template: templates/guide-template.md
document_type: guide
title: "Corrupted item: tại sao không craft được và xử lý như thế nào"
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
  - corrupted
  - vaal-orb
  - crafting
---

# Corrupted item: tại sao không craft được và xử lý như thế nào

Nhặt được Rare có stats tốt nhưng thấy dòng chữ đỏ "Corrupted" bên dưới, thử dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Orb"} không được, thử :wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"} cũng không — người mới thường nghĩ game bị lỗi hoặc item đó có vấn đề đặc biệt gì. Không phải lỗi. "Corrupted" là tag vĩnh viễn gắn lên item, khóa hầu hết orb crafting, và không thể bị xóa hay đảo ngược bằng bất cứ cách nào. Hiểu mechanic này từ sớm tránh được tình huống phí orb quý vào item không nhận.

## Tag Corrupted block hầu hết crafting nhưng không phải tất cả

Khi item mang tag Corrupted, các orb crafting chính đều từ chối hoạt động: :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Transmutation"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Augmentation"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Regal_Orb"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Orb"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Annulment"} — tất cả đều không dùng được. Item đã ở trạng thái cuối về mặt crafting thông thường, không có đường quay lại.

Tuy nhiên, có ba thứ vẫn hoạt động bình thường trên Corrupted item. Đầu tiên là :wiki-link{url="https://www.poe2wiki.net/wiki/Rune"} và soul core — socketing vào hoặc thay ra vẫn được, corruption không khóa socket slot. Đây là điểm quan trọng: nếu weapon tốt nhưng bị Corrupted, vẫn có thể lắp Rune phòng thủ hay stat vào bình thường. Thứ hai là salvage và disenchant tại salvage bench — hai action này không bị chặn, vẫn có thể phá item để lấy nguyên liệu nếu không cần giữ. Thứ ba, gem đang bị Corrupted vẫn được tăng gem level bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Uncut_gem"} — mức tăng đó giữ nguyên khi gem lên cấp tiếp theo.

## Vaal Orb và bốn kết quả có thể

:wiki-link{url="https://www.poe2wiki.net/wiki/Vaal_Orb"} là thứ duy nhất trong hệ crafting thông thường tạo ra Corruption trên item. Dùng Vaal Orb lên item non-unique equipment là đặt cược một trong bốn kết quả bằng nhau, mỗi cái xác suất 25%:

- Không thay đổi gì — item chỉ nhận tag Corrupted và bị khóa crafting, stats nguyên vẹn.
- Reroll lên đến ba modifier thành các modifier mới ngẫu nhiên — tương tự dùng nhiều :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Orb"} nhưng cùng lúc và kèm Corruption. Stats tốt có thể bay, stats rác cũng có thể thành xịn.
- Thêm một corruption enchantment modifier — đây là modifier đặc biệt từ pool riêng tùy item class và item level, xuất hiện tách biệt khỏi các modifier thường. Không replace mod nào đang có, chỉ thêm vào.
- Thêm một item socket lên weapon, sceptre, hoặc armour — bỏ qua giới hạn socket bình thường. Với jewellery (ring, amulet, belt), outcome này trở thành không thay đổi.

Kết quả hoàn toàn ngẫu nhiên và không thể undo. Vaal Orb phù hợp nhất khi item đã gần hoàn thiện và muốn thử thêm enchant hoặc socket — không phải cách "fix" item có stats xấu.

## Nguồn corrupted item trong game

Corrupted item xuất hiện từ nhiều nguồn trong suốt campaign và endgame. Trong campaign, các encounter liên quan đến Fate of the Vaal ở Act 3 trở đi là nguồn chính — quái và strongbox trong khu vực này rớt corrupted item. :wiki-link{url="https://www.poe2wiki.net/wiki/Trial_of_Chaos"} ở endgame đặc biệt hơn: hầu hết reward item tại đây đều corrupted theo mặc định, nên nhận item từ Trial of Chaos là nhận thứ không craft thêm được nữa — phải chấp nhận stats nguyên trạng hoặc bỏ đi.

Một nguồn khác ít được biết đến là Corruption Altar tên "Paquate's Mechanism" bên trong Jiquani's Sanctum (Act 3). Altar này cho phép áp dụng hiệu ứng Vaal Orb lên một item, nhưng chỉ được dùng một lần per character. Đây là cơ hội miễn phí để thử corruption nếu có item đáng đặt cược.

Tất nhiên, dùng Vaal Orb bằng tay trực tiếp lên item của mình cũng là cách tạo corrupted item theo ý muốn.

## Equip và trade item Corrupted bình thường

Không có penalty nào khi đeo hoặc dùng Corrupted item. Stats hoạt động đầy đủ, skills từ item vẫn chạy, và item level vẫn tính bình thường. Corrupted chỉ ảnh hưởng đến khả năng craft thêm — không ảnh hưởng đến hiệu năng khi sử dụng.

Về trade, Corrupted item bán mua tự do như mọi item khác. Trade site và stash tab không phân biệt Corrupted khi search — phải tự check tooltip nếu cần biết item có bị Corrupted không. Nhiều item Corrupted trên trade thực ra có giá thấp hơn bản không Corrupted cùng stats vì người mua mất đi quyền craft tiếp, điều này là cơ hội tốt nếu stats đã là thứ cần.

## Corrupted item khác Corrupted Essence ở chỗ nào

Hai khái niệm này trùng tên nhưng hoàn toàn khác nhau. **Corrupted item** là trạng thái của item — tag "Corrupted" xuất hiện trên item tooltip, khóa crafting, và không thể bị xóa.

**Corrupted Essence** là một loại :wiki-link{url="https://www.poe2wiki.net/wiki/Essence"} currency dùng để craft — nó hoạt động giống Perfect Essence, dùng lên Rare item để xóa một modifier ngẫu nhiên và thay bằng guaranteed modifier tương ứng với loại Essence đó. Corrupted Essence không tạo ra item Corrupted và không liên quan gì đến Vaal Orb. Tên gọi giống nhau là điểm dễ nhầm nhất — trong crafting-basics, khi thấy "Corrupted Essence", đó là currency, không phải item state.

## Relationships

- **related_guides** [Crafting cơ bản: các orb chính, essence và omen](/guides/beginner-crafting-basics) — cơ chế từng orb, tại sao Chaos/Exalted/Divine không dùng được trên Corrupted item, và vai trò của Corrupted Essence như crafting currency.
- **related_guides** [Độ hiếm item: Normal, Magic, Rare, Unique và prefix/suffix](/guides/beginner-item-rarity) — rarity system và crafting modifier, nền tảng để hiểu tại sao Corrupted lock là vĩnh viễn.
- **related_guides** [Currency cơ bản: mỗi orb làm gì](/guides/beginner-currency) — trade value của Vaal Orb và khi nào nên dùng thay vì bán.
- **related_guides** [Content types: các encounter và cơ chế chính trong game](/guides/beginner-content-types) — Trial of Chaos và Fate of the Vaal encounter là nguồn corrupted item chính.
