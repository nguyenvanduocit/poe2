---
template: templates/mechanic-template.md
document_type: mechanic
title: Flux resistance conversion
status: published
author: duocnv
created: '2026-06-12'
updated: '2026-06-15'
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

Luật transform có bốn điểm quyết định cách dùng. Một, chỉ **explicit modifier** bị đổi — implicit của ring/amulet đứng yên. Hai, mod đổi sang **tier tương đương** nhưng giá trị bị **reroll trong band của tier mới**, không copy số cũ; roll 45% nằm band 41-45 sau flux có thể về 41, divine lại nếu cần đỉnh band. Ba, item ra lò có thể mang **nhiều mod cùng một loại res** — hai suffix T3 cold + T3 lightning ăn một viên Blazing Flux ra đúng hai suffix T3 fire trên cùng item, trạng thái mà roll tự nhiên cấm. Bốn, **hybrid mod đổi phần nguyên tố, giữ phần còn lại**: desecrated "Fire and Chaos Resistances" gặp Chilling Flux thành "Cold and Chaos Resistances", phần chaos không suy chuyển.

## Ba ví dụ trước và sau khi đập

Ba ca dưới đi từ đơn giản tới ca ăn tiền nhất, mỗi ca là tooltip thật trước và sau một nhát đập — đọc xong là hình dung được Flux đụng dòng nào, chừa dòng nào.

Ca đơn giản nhất: amulet rare có life, mana, spirit và đúng một dòng fire res, build đang cần cold. Một viên Chilling Flux:

```
Amulet (rare) — trước
+58 to maximum Life
+85 to maximum Mana
+18 to Spirit
+34% to Fire Resistance      (band 31-35)
```

```
Amulet (rare) — sau Chilling Flux
+58 to maximum Life          (không đổi)
+85 to maximum Mana          (không đổi)
+18 to Spirit                (không đổi)
+33% to Cold Resistance      (fire → cold, roll lại trong band 31-35)
```

Life, mana, spirit không nhúc nhích. Chỉ dòng fire res đổi thành cold rồi roll lại trong đúng band 31-35, từ 34 về 33. Flux không chạm mod nào ngoài resistance, nên đập không bao giờ làm bay life hay mất mod khác. Nhiều người tưởng nhầm chỗ này nên mới không dám đập.

Ca ăn tiền: ring lệch element thường rẻ vì thị trường ghét res không khớp build. Mua một cái Sapphire Ring (implicit cold) có sẵn hai suffix fire + lightning, rồi Chilling Flux dồn cả hai về cold:

```
Sapphire Ring (rare) — trước
+25% to Cold Resistance      (implicit)
--------
+72 to maximum Life
+39% to Fire Resistance      (band 36-40)
+44% to Lightning Resistance (band 41-45)
```

```
Sapphire Ring (rare) — sau Chilling Flux
+25% to Cold Resistance      (implicit, không đổi)
--------
+72 to maximum Life          (không đổi)
+38% to Cold Resistance      (fire → cold, band 36-40)
+43% to Cold Resistance      (lightning → cold, band 41-45)

→ 106% cold res một slot
```

Hai suffix fire và lightning đổi hết sang cold, cộng implicit cold sẵn có thành 106% cold res trên đúng một slot — trạng thái mà roll tự nhiên cấm vì một ring không bao giờ ra hai suffix cùng nguyên tố. Đi giữa ba ele thì band giữ một-đổi-một (39 về 38, 44 về 43), nên ele sang ele gần như không mất giá trị, chỉ rủi ro roll về đáy band thì divine lại.

Ca Void Flux, đường duy nhất ra chaos res: đôi boots rare có cold và lightning res lệch, đập Void Flux đổi cả ba ele res sang chaos:

```
Boots (rare) — trước
+90 to maximum Life
25% increased Movement Speed
+27% to Cold Resistance       (band 26-30)
+36% to Lightning Resistance  (band 36-40)
```

```
Boots (rare) — sau Void Flux
+90 to maximum Life           (không đổi)
25% increased Movement Speed  (không đổi)
+18% to Chaos Resistance      (cold → chaos, band 16-19)
+22% to Chaos Resistance      (lightning → chaos, band 20-23)

→ +40% chaos res một slot, mất 63 ele res
```

Cold và lightning gộp thành 40% chaos res một slot, con số roll tự nhiên không bao giờ cho vì chaos res không có trên hầu hết base. Đổi lại band rớt khoảng một phần ba khi sang chaos (27 cold thành 18, 36 lightning thành 22), và 63 điểm ele res mất trắng. Ca này vừa là payoff lớn nhất của họ Flux vừa là cái bẫy lớn nhất: nếu đôi boots đang đeo và mình đang dựa vào 63 ele res đó thì đập xong là thủng cap. Đập gear đang đeo lúc nào cũng phải tính trước, phần dưới nói rõ.

## Bảng equivalency quyết định số sau khi đổi

Game map mod theo band giá trị, không phải theo tên tier. Đổi giữa ba nguyên tố thì band giữ nguyên một-đổi-một: 6-10 sang 6-10, 21-25 sang 21-25, lên tới 41-45 sang 41-45. Đổi sang chaos qua Void Flux thì band rớt khoảng một phần ba vì chaos res vốn roll thấp hơn ele res:

- +(6-10)% ele → +(4-7)% chaos
- +(16-20)% ele → +(12-15)% chaos
- +(31-35)% ele → +(20-23)% chaos
- +(41-45)% ele → +(24-27)% chaos

Bảng còn phủ hai dòng ít ai ngờ: mod **+1/2/3% to Maximum Resistance đổi một-một** kể cả sang Maximum Chaos Resistance, và mod jewel "Notable Passive Skills in Radius also grant +(5-7)% to X Resistance" cũng nằm trong bảng — tức flux dùng được trên jewel magic/rare, không chỉ gear.

## Đập sao cho không mất tùm lum

Nỗi sợ "đập xong mất tùm lum" đặt sai chỗ. Flux chỉ chạm explicit resistance mod, mọi thứ khác trên item đứng yên đúng như ca amulet ở trên — life, ES, damage, movement speed không bao giờ bay vì một nhát Flux. Cái thật sự mất nằm ở ba chỗ, biết trước thì đập an toàn:

- **Giá trị roll lại trong band mới.** Mod đổi xong lấy roll mới trong band, có thể về đáy. Cứu được bằng Divine Orb để roll lại, nên đây là rủi ro nhẹ nhất.
- **Mất nguyên tố cũ, và đập là một chiều.** Flux đổi hết res mod cùng lúc, không hoàn tác. Đập lên gear đang gánh res mình cần thì mất đúng nguyên tố đó. Đôi boots Void Flux ở trên là ví dụ sống: đang cold overcap chỉ +23 mà mất 27 cold là thủng cap 4 điểm.
- **Đổi tất cả, không đổi một dòng.** Item có hai-ba res khác nguyên tố thì Flux quật hết về một loại, không chọn lọc giữ lại dòng nào.

Quy trình đập không cháy: mua một viên rẻ đập lên item rác trước để tận mắt thấy luật transform; trước khi đập bất cứ món đang đeo, cộng trừ delta từng nguyên tố trên giấy y như khi swap gear, soát kỹ overcap; ưu tiên đập item mới mua lệch element rồi mới lắp, thay vì đập gear đang gánh res. Và nếu item có fractured res mình muốn giữ thì đừng đập — lý do ở mục dưới.

Với char mình, chaos ~25 đang là lỗ res duy nhất còn lại trên [Tame Beast Companion Pack](/builds/huntress/0-5-spirit-walker-companion-pack). Roadmap đổi sang Amethyst Ring vẫn đứng, nhưng Void Flux mở thêm đường mua ring/boots ele-res rẻ rồi tự đổi thành chaos, thay vì trả giá premium cho chaos res roll sẵn.

## Craft từ Remnant và giá thị trường

Nguồn duy nhất là Runic Recipe trên Remnant — nền Remnant với hệ rune mình đã viết đủ ở [Return of the Ancients](/guides/return-of-the-ancients), dòng patch note gốc nằm trong [Patch Notes 0.5.0](/guides/0-5-0-patch-notes). Mỗi Flux cần khắc đúng combo 6 rune trên Remnant ở area level 70+, thắng encounter là nhận một viên:

- **Blazing Flux** — Fire + Earth + Prismatic + Soul + Rage + Rebirth Rune
- **Chilling Flux** — Cold + Cyclonic + Prismatic + Death + Tidal + Moon Rune
- **Crackling Flux** — Lightning + Celestial + Prismatic + Electrocuting + Oath + Tempest Rune
- **Void Flux** — Toxic + Time + Adaptive + Soul + Power + Death Rune

Ba Flux nguyên tố đều ăn Prismatic Rune cộng rune đúng element của nó; Void Flux đi bộ rune riêng nặng mùi chaos (Toxic, Death, Power). Combo 6 rune nghĩa là cần Remnant 6 slot trở lên — loại này hiếm hơn hẳn Remnant 2-3 slot thường gặp, nên tự craft chỉ đáng khi đằng nào cũng farm Remnant; còn lại mua thẳng rẻ hơn nhiều.

Giá poe2scout 2026-06-12: Blazing 6.4 ex (537 listing), Chilling 6.2 ex (586), Crackling 3.1 ex (609), Void Flux 19.3 ex (438). Currency Exchange in-game cùng ngày khớp tầm đó và cho thấy volume thật: ~16,000 viên Blazing và ~11,000 viên Void Flux sang tay trong 24h. Void đắt gấp 3-6 lần ba viên kia vì chaos res là lỗ phổ quát của mọi build, còn Crackling rẻ nhất vì lightning res là res dễ cap nhất từ gear thường. Giá viên lẻ ngang một exalt slam hụt, rẻ tới mức đập thử thoải mái.

## Cái không hoạt động

Mod "+#% to all Elemental Resistances" miễn nhiễm hoàn toàn — nó không nằm trong bảng equivalency nên flux bỏ qua, muốn chuyển nó thành single-res phải remove/craft lại bằng đường khác. Implicit không đổi, nên Ruby/Sapphire/Topaz Ring không thể flux phần implicit sang nguyên tố khác. Unique item không nhận flux, chỉ magic/rare. Và một cảnh báo ngược: **fractured res mod hiện vẫn bị flux đổi** — ngược hẳn định nghĩa fractured là mod bất biến, nhiều khả năng là bug đang chờ GGG xử; đừng xây craft plan quanh hành vi này vì nó có thể biến mất sau một hotfix, và cũng đừng flux item có fractured res mà mình muốn giữ nguyên.

## Tổng kết

Verdict: EXPLOITABLE. Bốn viên Flux giá 3-19 ex giải quyết hai bài toán mà trước 0.5.0 chỉ có cách reroll nguyên item: cân lại res lệch element trên item đã tốt sẵn, và stack nhiều suffix cùng một res — đỉnh là chaos res 100%+ một slot như ca Sapphire Ring ở trên. Trần giá trị nằm ở bảng equivalency: ele sang ele giữ nguyên band, ele sang chaos chịu discount một phần ba. Nỗi sợ đập hỏng item là nhầm — Flux chỉ động vào dòng resistance, đập sai lắm chỉ mất res chứ không brick item, nên cứ mua một viên đập thử lên đồ rác rồi mới đụng item thật. Open question: tương tác với fractured mod là bug hay intended — theo dõi known issues của GGG; và liệu họ Flux có đi core sau khi Runes of Aldur kết thúc hay chết cùng league. Chưa test trên corrupted item — lần tới có viên dư sẽ thử và ghi lại.

## Version History

### Patch 0.5.0

Họ Flux ra mắt cùng Runes of Aldur (21/05/2026). Patch note đếm "3 Fluxes" cho ba viên nguyên tố; in-game có thêm Void Flux đưa cả họ lên bốn. 0.5.1 và 0.5.2 không đụng tới Flux.

## Relationships

- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — Flux craft từ Remnant, một nhánh của hệ crafting Verisium trong league.
- **references** [Patch Notes 0.5.0](/guides/0-5-0-patch-notes) — dòng patch note gốc giới thiệu họ Flux.
- **used_by** [Tame Beast Companion Pack](/builds/huntress/0-5-spirit-walker-companion-pack) — Void Flux là đường mới để vá lỗ chaos res ~25 của char.
