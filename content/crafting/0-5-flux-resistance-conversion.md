---
template: templates/mechanic-template.md
document_type: mechanic
title: Flux resistance conversion
status: published
author: duocnv
created: '2026-06-12'
updated: '2026-06-12'
league: '0.5'
patch: 0.5.0
sub_class: crafting
tags:
  - flux
  - crafting
  - resistance
  - chaos-resistance
  - remnant
  - runes-of-aldur
  - poe2
  - mechanic
---

# Flux resistance conversion

:wiki-link{url="https://www.poe2wiki.net/wiki/Flux"} là họ currency mới của 0.5.0, craft từ Remnant, đập một lần lên magic hoặc rare item để đổi loại resistance của mọi explicit mod trên item đó sang nguyên tố khác. Bốn loại đang lưu hành: ba Flux nguyên tố dồn res về Fire, Cold hoặc Lightning, và :wiki-link{url="https://www.poe2wiki.net/wiki/Void_Flux"} dồn cả ba ele res về Chaos. Giá lẻ 3-19 ex mỗi viên nhưng volume trao đổi hàng chục nghìn viên mỗi ngày — đây đang là cách rẻ nhất để cân lại res lệch element mà không phải reroll nguyên item, và là cánh cửa chaos res một slot mà roll tự nhiên không bao giờ ra được.

## Bốn loại Flux và luật transform

Mỗi Flux là stackable currency (stack 10), drop level 65, exclusive cho Runes of Aldur. Right click viên Flux rồi left click lên magic/rare item là xong — không cần bench, không cần NPC:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Blazing_Flux"} — mọi mod Cold và Lightning Resistance trên item thành Fire Resistance tương đương.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Chilling_Flux"} — mọi mod Fire và Lightning Resistance thành Cold Resistance.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Crackling_Flux"} — mọi mod Fire và Cold Resistance thành Lightning Resistance.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Void_Flux"} — mọi mod Fire, Cold và Lightning Resistance thành Chaos Resistance.

Luật transform có bốn điểm quyết định cách dùng. Một, chỉ **explicit modifier** bị đổi — implicit của ring/amulet đứng yên. Hai, mod đổi sang **tier tương đương** nhưng giá trị bị **reroll trong band của tier mới**, không copy số cũ; roll 45% nằm band 41-45 sau flux có thể về 41, divine lại nếu cần đỉnh band. Ba, item ra lò có thể mang **nhiều mod cùng một loại res** — hai suffix T3 cold + T3 lightning ăn một viên Blazing Flux ra đúng hai suffix T3 fire trên cùng item, trạng thái mà roll tự nhiên cấm. Bốn, **hybrid mod đổi phần nguyên tố, giữ phần còn lại**: desecrated "Fire and Chaos Resistances" gặp Chilling Flux thành "Cold and Chaos Resistances", phần chaos không suy chuyển. Riêng mod "+#% to all Elemental Resistances" miễn nhiễm hoàn toàn — nó không nằm trong bảng equivalency nên flux bỏ qua.

## Bảng equivalency quyết định số sau khi đổi

Game map mod theo band giá trị, không phải theo tên tier. Đổi giữa ba nguyên tố thì band giữ nguyên một-đổi-một: 6-10 sang 6-10, 21-25 sang 21-25, lên tới 41-45 sang 41-45. Đổi sang chaos qua Void Flux thì band rớt khoảng một phần ba vì chaos res vốn roll thấp hơn ele res:

- +(6-10)% ele → +(4-7)% chaos
- +(16-20)% ele → +(12-15)% chaos
- +(31-35)% ele → +(20-23)% chaos
- +(41-45)% ele → +(24-27)% chaos

Bảng còn phủ hai dòng ít ai ngờ: mod **+1/2/3% to Maximum Resistance đổi một-một** kể cả sang Maximum Chaos Resistance, và mod jewel "Notable Passive Skills in Radius also grant +(5-7)% to X Resistance" cũng nằm trong bảng — tức flux dùng được trên jewel magic/rare, không chỉ gear.

Toán thử trên đôi boots Eagle League mình đang đeo: +27 cold (band 26-30) và +36 lightning (band 36-40). Một viên Void Flux biến nó thành hai mod chaos 16-19 và 20-23, tổng +36 tới +42 chaos res, đổi bằng việc mất trắng 63 điểm ele res. Char đang cold overcap chỉ +23, mất 27 cold là thủng cap 4 điểm — nên flux hợp với item mua mới lệch element hơn là đập lên gear đang gánh res. Trước khi flux bất kỳ món đang đeo nào, khai delta res như luật khi swap gear: cộng trừ từng nguyên tố trên giấy trước, bấm sau.

## Double suffix và chaos res một slot

Tech ăn tiền nhất của họ Flux là dồn suffix. Item có hai-ba res suffix khác nguyên tố là chuyện thường khi roll; flux dồn tất cả về một nguyên tố thành nhiều suffix cùng loại cộng dồn — ceiling vượt mọi cách craft khác cho single-element stacking. Với Void Flux, ceiling thực tế đã xuất hiện: ring 84% chaos res một slot, ghép từ hai T2 ele res đổi qua Void Flux cộng desecrated chaos res sẵn trên ring và resistance quality. Một slot gánh trọn lỗ chaos mà bình thường phải trải ra ba bốn món.

Công thức chung: mua item trade có 2+ res suffix tier cao lệch nguyên tố (loại item này rẻ vì "res lệch" bị thị trường định giá thấp), đập đúng viên Flux theo nguyên tố build cần, divine nếu roll về đáy band. Với char mình, chaos ~25 đang là lỗ res duy nhất còn lại trên [Tame Beast Companion Pack](/builds/huntress/0-5-spirit-walker-companion-pack) — roadmap đổi sang Amethyst Ring vẫn đứng, nhưng Void Flux mở thêm đường mua ring/boots ele-res rẻ rồi tự đổi thành chaos thay vì trả giá premium cho chaos res roll sẵn.

Exclusion check: mod "all Elemental Resistances", implicit, và unique item (flux chỉ nhận magic/rare) — ba thứ flux không chạm.

## Craft từ Remnant và giá thị trường

Nguồn duy nhất là Runic Recipe trên Remnant — nền Remnant với hệ rune mình đã viết đủ ở [Return of the Ancients](/guides/return-of-the-ancients), dòng patch note gốc nằm trong [Patch Notes 0.5.0](/guides/0-5-0-patch-notes). Mỗi Flux cần khắc đúng combo 6 rune trên Remnant ở area level 70+, thắng encounter là nhận một viên:

- **Blazing Flux** — Fire + Earth + Prismatic + Soul + Rage + Rebirth Rune
- **Chilling Flux** — Cold + Cyclonic + Prismatic + Death + Tidal + Moon Rune
- **Crackling Flux** — Lightning + Celestial + Prismatic + Electrocuting + Oath + Tempest Rune
- **Void Flux** — Toxic + Time + Adaptive + Soul + Power + Death Rune

Ba Flux nguyên tố đều ăn Prismatic Rune cộng rune đúng element của nó; Void Flux đi bộ rune riêng nặng mùi chaos (Toxic, Death, Power). Combo 6 rune nghĩa là cần Remnant 6 slot trở lên — loại này hiếm hơn hẳn Remnant 2-3 slot thường gặp, nên tự craft chỉ đáng khi đằng nào cũng farm Remnant; còn lại mua thẳng rẻ hơn nhiều.

Giá poe2scout 2026-06-12: Blazing 6.4 ex (537 listing), Chilling 6.2 ex (586), Crackling 3.1 ex (609), Void Flux 19.3 ex (438). Currency Exchange in-game cùng ngày khớp tầm đó và cho thấy volume thật: ~16,000 viên Blazing và ~11,000 viên Void Flux sang tay trong 24h. Void đắt gấp 3-6 lần ba viên kia vì chaos res là lỗ phổ quát của mọi build, còn Crackling rẻ nhất vì lightning res là res dễ cap nhất từ gear thường. Giá viên lẻ ngang một exalt slam hụt — cứ mua một viên đập thử lên item rác để tự xem luật transform trước khi đụng item thật.

## Cái không hoạt động

Mod "+#% to all Elemental Resistances" không đổi — muốn chuyển nó thành single-res phải remove/craft lại bằng đường khác. Implicit không đổi, nên Ruby/Sapphire/Topaz Ring không thể flux phần implicit sang nguyên tố khác. Unique item không nhận flux. Và một cảnh báo ngược: **fractured res mod hiện vẫn bị flux đổi** — ngược hẳn định nghĩa fractured là mod bất biến, nhiều khả năng là bug đang chờ GGG xử; đừng xây craft plan quanh hành vi này vì nó có thể biến mất sau một hotfix, và cũng đừng flux item có fractured res mà mình muốn giữ nguyên.

## Tổng kết

Verdict: EXPLOITABLE. Bốn viên Flux giá 3-19 ex giải quyết hai bài toán mà trước 0.5.0 chỉ có cách reroll nguyên item: cân lại res lệch element trên item đã tốt sẵn, và stack nhiều suffix cùng một res — đỉnh là chaos res 80%+ một slot qua Void Flux. Trần giá trị nằm ở bảng equivalency: ele sang ele giữ nguyên band, ele sang chaos chịu discount một phần ba. Open question: tương tác với fractured mod là bug hay intended — theo dõi known issues của GGG; và liệu họ Flux có đi core sau khi Runes of Aldur kết thúc hay chết cùng league. Chưa test trên corrupted item — lần tới có viên dư sẽ thử và ghi lại.

## Version History

### Patch 0.5.0

Họ Flux ra mắt cùng Runes of Aldur (21/05/2026). Patch note đếm "3 Fluxes" cho ba viên nguyên tố; in-game có thêm Void Flux đưa cả họ lên bốn. 0.5.1 và 0.5.2 không đụng tới Flux.

## Relationships

- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — Flux craft từ Remnant, một nhánh của hệ crafting Verisium trong league.
- **references** [Patch Notes 0.5.0](/guides/0-5-0-patch-notes) — dòng patch note gốc giới thiệu họ Flux.
- **used_by** [Tame Beast Companion Pack](/builds/huntress/0-5-spirit-walker-companion-pack) — Void Flux là đường mới để vá lỗ chaos res ~25 của char.
