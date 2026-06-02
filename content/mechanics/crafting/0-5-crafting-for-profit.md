---
document_type: mechanic
title: Crafting Để Kiếm Tiền — Vòng Lặp Mua Base, Craft, Bán Lại
mechanic_type: Crafting
league: '0.5'
patch: 0.5.0
status: published
author: nguyenvanduocit
created: '2026-06-02'
updated: '2026-06-02'
tags:
  - poe2
  - crafting
  - currency-making
  - essence
  - desecration
  - omen
  - economy
  - guide
template: templates/mechanic-template.md
---

# Crafting Để Kiếm Tiền — Vòng Lặp Mua Base, Craft, Bán Lại

Craft trong 0.5 không còn là chỗ đốt currency để tự trang bị — nó là một **cái nghề**: mua base rẻ từ trade, craft theo công thức cố định một essence một desecration, rồi bán lại lấy lời và tái đầu tư. Bất kỳ ai muốn đi từ vài chục exalted lên hàng trăm divine mà không cần build farm đặc biệt đều có thể sống bằng vòng lặp này, vì luật craft mới rẻ và nhanh tới mức một lần "trúng" trả được cho mười mấy lần "trượt". Đây là phần kinh tế của league chứ không phải phần Remnant — nó dùng essence, desecration, omen, exalted, divine, toàn bộ là currency nền của game.

## How It Works

Luật craft 0.5 gói gọn trong một dòng patch note: *mọi crafted modifier giờ guaranteed, nhưng item chỉ giữ được 1 crafted modifier tại một thời điểm; desecrated modifier không còn tính là crafted modifier, và item giới hạn 1 desecrated modifier*. Nghe khô nhưng đây là cả nền kinh tế. Trước kia một item ngon là chồng ba bốn essence; giờ mỗi item có ba "ô" độc lập đổ đầy được: một mod từ **essence** (đảm bảo, mình chọn loại), một mod từ ô **crafted** (bench/meta), và một mod từ ô **desecrated** (Well of Souls, đây là chỗ gamble). Hiểu ba ô này tách biệt nhau là hiểu vì sao công thức "1 essence + 1 desecration" cùng tồn tại được trên một item: chúng không tranh ô của nhau.

Vòng craft lõi luôn ba bước, áp cho mọi loại weapon (quarterstaff, hammer, bow, crossbow):

**Bước 1 — kiếm base đúng.** Mở trade, lọc magic base, đặt minimum item level cao nhất có thể (ilvl quyết định tier của prefix/suffix roll ra, *không phải* required level — giữ Alt để đọc ilvl thật trên item). Với một physical quarterstaff, lọc "increased physical damage", min ilvl 17+, sort phys cao xuống thấp, rồi đặt trần giá tầm 20 exalted để khỏi đụng mấy cái 100+ divine. Một magic base chỉ có đúng một stat là lý tưởng, vì nó chừa sẵn ô để mình slam tiếp. Tốt hơn nữa là base có sẵn bonus elemental damage (kiểu bulwark quarterstaff mở màn 100 lightning trên nền physical) — coi như được một dòng damage free trước khi craft.

**Bước 2 — đổ essence.** Đây là bước quyết định nhất vì nó định hình item. Một :wiki-link{url="https://www.poe2wiki.net/wiki/Greater_Essence_of_Abrasion"} thêm chunk physical damage đảm bảo; một essence elemental thêm 107 fire hoặc 88 cold để có weapon "an toàn" hai-element. Ví dụ thật từ một base 182 lightning có sẵn: đổ greater essence abrasion lên thành 266 physical + 100 lightning chỉ với một bước, chưa craft gì thêm đã ~360 DPS.

**Bước 3 — desecrate.** Sau essence, item còn đúng một ô prefix trống. Đừng slam exalted bừa — desecrate vào ô đó, vì desecrated prefix là chỗ ra số to nhất (cỡ +106% increased physical damage hoặc +182 fire). Để ép desecration chỉ rơi vào prefix (không phí vào suffix), bật :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Sinistral_Necromancy"} trước khi dùng preserved jawbone — nó khoá *next Desecration attempt will add only prefix modifiers*, đảm bảo 100% trúng ô prefix. Rồi mang ra **Well of Souls** để reveal kết quả. Một lần reveal thật ở ví dụ trên ra 182 fire damage chồng lên 266+100, đẩy weapon từ 366 lên 647 DPS — cái này bán 5-10 divine.

Bước hoàn thiện cho mọi món: quality lên max, đục socket nhét rune (2 physical rune cho weapon, 2 iron rune cho armour), và với armour thì ghé **Verisium Runeforging** thêm một lớp **Runic Ward** trước khi bán — nhưng nhớ là gắn ward trên chest có thể ăn bớt 200 evasion/ES để đổi 200 ward, nên cân trước khi bấm; trên helmet/boots thì gần như free.

## Key Interactions

**Ba ô mod không tranh nhau — đây là nền của cả công thức.** Essence đổ vào một mod, ô crafted một mod, ô desecrated một mod, ba ô độc lập. Vì desecrated *không* đếm là crafted (patch 0.5.0), nên một item vừa giữ được crafted mod vừa giữ được desecrated mod cùng lúc — đó là lý do "1 essence + 1 desecration" không bị luật "chỉ 1 crafted modifier" chặn. *Exclusion check: item giới hạn đúng 1 desecrated modifier và 1 crafted modifier — không stack được hai desecration trên cùng món.*

**Omen điều hướng ngẫu nhiên, biến gamble thành bán-xác-định.** Sinistral Necromancy ép desecration vào prefix (verbatim: *next Desecration attempt will add only prefix modifiers*). Nếu reveal ra dòng dở, :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Abyssal_Echoes"} cho reroll options của lần reveal đó đúng một lần (*the next time you reveal Desecrated modifiers you can reroll the options once*) — nhưng nó tầm 99 exalted nên chỉ bật khi item đã đáng giá, không phí lên craft 30 ex. Khi item ra ngon và muốn nhồi thêm, :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Greater_Exaltation"} biến next Exalted Orb thành thêm 2 mod một lúc — đôi với perfect exalted thì một lần bấm ra hai dòng tốt. *Exclusion check: cả ba omen là drop-restricted (Sinistral/Abyssal Echoes từ Abyssal monster Lichborn, Greater Exaltation từ Ritual) — phải mua qua trade, không tự farm tiện đường được; mỗi omen one-shot, dùng xong consume.*

**Verisium Runeforging là value-add trước khi bán, không phải bước craft mod.** Sau khi item xong mod, thêm Runic Ward qua Runeforging làm món hấp dẫn hơn với người mua build dùng ward — nhưng vì keyword "Defences" giờ tách bạch (Armour/Evasion/ES *không* gồm Runic Ward), gắn ward trên chest ăn đổi defense thật. *Exclusion check: ward không cộng dồn vào armour/ES — nó là layer riêng, nên đừng quảng cáo món "tăng tổng defense", nó là đánh đổi.*

## Optimization

Đòn bẩy lớn nhất không phải craft giỏi mà là **mua base đúng** — ilvl cao mở tier roll cao, và base magic một-stat chừa tối đa không gian. Trần giá base nên đặt theo tier vốn: broke thì 5-10 ex, có vốn thì 20 ex cho phys cao. Chọn essence theo build đang hot tuần đó (tuần một meta lý tưởng là physical và elemental attack), vì item bán được là item khớp nhu cầu thị trường, không phải item "đẹp" theo mắt mình.

Về omen, có một **ngưỡng EV rõ ràng**: chỉ bật Abyssal Echoes (99 ex) khi giá trị kỳ vọng của reroll vượt 99 ex — tức item đã gần ngon và một dòng nữa nhảy nó lên divine-tier. Trên craft rẻ (tổng ~30 ex) thì cứ reveal một phát rồi bán, đừng bảo hiểm bằng món đắt gấp ba lần chính nó. Tương tự, perfect exalted (giá ~169 ex ngày 02/06) chỉ xứng khi item nền đã chắc chắn bán nhiều divine.

Bước quality không có breakpoint ẩn — cứ max trước khi định giá vì nó cộng thẳng vào DPS/defense hiển thị mà người mua filter theo. Đừng quên kiểm giá thị trường *trước* mỗi lần bán: search vài món tương tự, underprice nhẹ để bán nhanh và xoay vốn, vì vốn nằm im trong item chưa bán cũng là chi phí.

## Vòng Lặp Flip — Cơ Chế Tạo Thu Nhập

Cái biến craft thành thu nhập là vòng quay, không phải một món lẻ: **mua base → craft → value-add → bán → tái đầu tư**. Mỗi vòng tiền lời đẻ ra vốn cho vòng sau, và vì mỗi craft rẻ nên mình chạy được hàng chục vòng một buổi.

Math một vòng weapon (giá 02/06/2026, league runes): base ~12 ex + greater essence abrasion 3.4 ex + omen sinistral necromancy 13.5 ex + 2 exalted finish ~2 ex + quality và 2 rune ~3 ex ≈ **34 ex một lần thử** (~0.45 divine). Kết quả phân hai nhánh: nhánh "dud" vẫn ~430 DPS bán lại ~8-10 ex (gỡ ~25% vốn), nhánh "banger" ~647 DPS bán 5-10 divine tức 380-760 ex.

Đặt thành công thức EV với xác suất ra banger là `p`:

```
EV_mỗi_craft = p × giá_banger + (1−p) × giá_dud − chi_phí
            = p × 400 + (1−p) × 9 − 34          (ex, giá 02/06)
```

Điểm hoà vốn: `391p + 9 = 34` → **p ≈ 6.5%**. Nghĩa là chỉ cần hơn 1 trong 15 lần ra món bán được vài divine là cả chuỗi đã có lời. Ở p = 15% EV ≈ +34 ex/craft; ở p = 30% (gần với tỉ lệ video tự quay, dù n nhỏ) EV ≈ +92 ex/craft. Đây là lý do "nghề" này sống được dù phần lớn craft là dud: **một banger trả cho ~15-20 dud**, và mình không cần đoán trước cái nào trúng, chỉ cần chạy đủ số vòng. `p` và giá bán phụ thuộc thị trường tuần đó nên con số trên là khung tính chứ chưa phải tỉ lệ đã đo — khi league chín cần log tỉ lệ banger thực và giá bán trung bình theo item class để chốt EV.

## Bậc Thang Vốn — Từ Nghèo Lên Giàu

**Tầng broke (0 đến vài chục ex).** Bắt đầu bằng **armour**, không phải weapon, vì nó rẻ và ít variance. Mua magic base hybrid ES/evasion ilvl 17+ dưới 10 ex, đổ một :wiki-link{url="https://www.poe2wiki.net/wiki/Greater_Essence_of_Enhancement"} (~1 ex) cho +80% armour/evasion/ES đảm bảo, desecrate trần (bỏ omen nếu chưa đủ tiền — chịu rủi ro suffix, mà suffix ra chaos res cũng bán được), quality, nhét iron rune. Tổng ~15 ex, bán quanh 1 divine theo giá tuần một. Tỉ lệ lời thấp hơn nhưng đều, gây vốn an toàn để leo tầng.

**Tầng có vốn (vài chục đến vài trăm ex).** Chuyển sang **weapon craft** với omen Sinistral Necromancy đầy đủ (~13.5 ex/lần) để ép prefix — đây là tầng EV cao nhất vì weapon banger bán nhiều divine. Chạy số lượng: 5-10 craft một buổi, chấp nhận dud, gom banger.

**Tầng divine (nhiều divine trong túi).** Lúc này bật được bảo hiểm: perfect essence cho roll trần, Abyssal Echoes reroll trên item gần-hoàn-hảo, Greater Exaltation + perfect exalted để nhồi hai mod cuối. Craft ít món hơn nhưng mỗi món nhắm divine-tier, đồng thời craft thẳng theo đơn meta (weapon cho build đang viral tuần đó bán nhanh nhất).

**Tầng giàu.** Đầu tư vào base fractured/ilvl tối đa, craft mirror-tier để bán hoặc cho mirror service. Đây là tầng vốn dày, ít người chạm, nhưng nó là đỉnh tự nhiên của cùng vòng lặp — không phải cơ chế mới.

## EV Theo Loại Item — Craft Cái Nào

**Weapon** là nguồn lời lớn nhất nhưng variance cao: dòng desecrated prefix quyết định món thành 430 DPS dud hay 647 DPS banger, và khoảng giá trải từ 8 ex tới 10 divine. Đây là chỗ đổ phần lớn vốn khi đã qua tầng broke.

**Armour** đơn giản và đều hơn: greater essence of enhancement là safe +80% def, ít phụ thuộc desecrate, nên trần lời thấp (~1 divine/món) nhưng tỉ lệ thành phẩm cao. Lý tưởng cho tầng broke và cho lúc cần dòng tiền ổn định giữa các craft weapon.

**Jewelry — đừng craft, mua.** Ring không nhận được essence damage (chỉ resistance), nên craft ring là margin âm: thị trường đầy ring rẻ với đúng res/life mình cần. Boot tương tự, chỉ cần base movement speed tốt rồi thêm essence enhancement hoặc life nếu muốn, nhưng nhìn chung mua sẵn rẻ hơn craft. Quy tắc: tiền craft jewelry để dành nhồi thêm vòng weapon/armour.

## Cost Analysis — Snapshot Giá

Tham chiếu currency ngày **02/06/2026** (league runes, qua poe2scout, volume khỏe nên đáng tin cho staple): 1 Divine = 76 Exalted · Perfect Exalted = 169 ex · Greater Exalted = 11 ex. Vật tư craft: Omen of Sinistral Necromancy = **13.5 ex** (volume ~47k/ngày — thanh khoản tốt), Greater Essence of Enhancement = 1.08 ex, Greater Essence of Abrasion = 3.4 ex.

Lưu ý drift: video gốc quay sớm hơn báo omen Sinistral Necromancy ~9 ex, snapshot này đã 13.5 ex — giá vật tư craft tăng theo nhu cầu khi nhiều người vào nghề, nên tính EV phải dùng giá *hiện tại* chứ không phải giá trong guide. *Snapshot freshness: re-fetch qua `/poe-ninja` hoặc poe2scout nếu quá 7 ngày trước khi quote lại.*

## Failure Modes

**Đu duds không kiểm soát.** EV dương trên trung bình *không* cứu được một buổi xui chạy 20 craft toàn dud — variance weapon đủ cao để cháy vài trăm ex liên tiếp. Phòng bằng cách giữ buffer vốn ít nhất 10× chi phí một craft, và xen armour craft (variance thấp) để dòng tiền không đứt giữa chuỗi xui.

**Đốt Abyssal Echoes sai chỗ.** 99 ex bảo hiểm trên một craft 30 ex là lỗ kép — nó chỉ đáng khi item nền đã gần divine-tier. Quy tắc cứng: chi phí omen reroll phải nhỏ hơn phần giá trị kỳ vọng nó cứu được, nếu không thì reveal rồi bán.

**Craft loại item không có margin.** Ring/amulet craft gần như luôn lỗ vì thiếu essence damage và thị trường thừa hàng rẻ — đổ currency vào đây là đốt vốn. Cũng vậy với weapon type không ai chơi tuần đó: món "đẹp" nhưng không khớp meta thì nằm ế, vốn chết trong stash.

**Market saturation.** Khi cả server cùng xem một video và cùng craft một class, giá bán món đó sụp và giá vật tư (essence/omen) leo — margin bị ép cả hai đầu. Đối phó bằng cách craft lệch pha: nhắm class meta *kế tiếp* hoặc niche còn ít người craft, và bán nhanh underprice thay vì ôm chờ giá.

**Thanh khoản mỏng đầu league.** Tuần một, base ngon ít, người mua divine-tier chưa nhiều, nên banger có thể không bán được giá spreadsheet. Snapshot 02/06 cho thấy staple (omen, essence, divine) đã thanh khoản tốt, nhưng món craft cao cấp thì kén người mua sớm — tầng divine nên đợi economy chín hơn, tầng broke armour chạy được ngay.

## Version History

- **0.5.0 (02/06/2026)** — Viết theo luật craft mới: 1 crafted + 1 desecrated mod độc lập, essence đơn, omen điều hướng desecration. Recombinator gỡ + Expedition tắt nên không còn craft cao cấp bằng recombination — Alloy/Ancient Rune/Genesis Tree là hướng thay thế nhưng chưa vào vòng flip lõi này.
- **Cần log khi league chín:** tỉ lệ banger thực `p` theo item class (đo trên ≥30 craft), giá bán trung bình weapon/armour theo tuần, ngưỡng EV thực của Abyssal Echoes, và liệu craft Alloy/Ancient Rune từ Remnant có biên lời đủ để thành kênh flip riêng không.

## Relationships

- related_mechanics [Talisman Crafting — Budget to Min-Max](/mechanics/crafting/talisman-crafting) — chi tiết base selection + method comparison cho một weapon type, bổ trợ cho vòng flip tổng quát ở đây.
- part_of [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — Remnant/Verisium/Genesis Tree và currency reshuffle 0.5 là nền kinh tế mà vòng flip này chạy trên đó.
- supports [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — Verisium Runeforging thêm Runic Ward thành value-add bước cuối trước khi bán armour.
