---
template: templates/guide-template.md
document_type: guide
title: "Các loại damage: Physical, Elemental, Chaos, Hit và DoT"
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
  - damage
  - ailment
  - dot
  - conversion
---

# Các loại damage: Physical, Elemental, Chaos, Hit và DoT

POE2 có năm loại damage — Physical, Fire, Cold, Lightning, Chaos — và mỗi loại hoạt động theo cơ chế phòng thủ khác nhau ở phía kẻ địch. Đây không phải chi tiết kỹ thuật để bỏ qua: chọn sai damage type khi build là lý do nhiều nhân vật làm damage tốt trên paper nhưng thực chiến ì ạch. Hiểu năm loại này, kèm sự khác biệt giữa Hit và Damage over Time, là nền tảng để đọc và đánh giá bất kỳ build nào.

## Năm loại damage và cơ chế giảm tương ứng

Physical là loại damage phổ biến nhất, thường đến từ weapon attack. Khác với bốn loại còn lại, Physical bị giảm bởi :wiki-link{url="https://www.poe2wiki.net/wiki/Armour"} — không phải resistance. Điều này nghĩa là build dùng phys damage tốt nhất khi kẻ địch ít armour hoặc khi có source giảm armour trên target.

Fire, Cold, Lightning là **Elemental damage** — cả ba bị giảm bởi resistance tương ứng của kẻ địch. Kẻ địch elite thường có elemental resistance cao, nên nhiều build elemental đi kèm curse hoặc exposure để giảm resistance trên target trước khi hit.

:wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_damage"} bị giảm bởi Chaos Resistance riêng, hoàn toàn tách biệt khỏi elemental resistance. Chaos ít gặp hơn bốn loại kia và có một đặc tính riêng sẽ nói ở phần sau.

## Hit damage và Damage over Time khác nhau ra sao

Trong POE2, mọi damage đều thuộc một trong hai dạng: **Hit** hoặc **Damage over Time** (DoT).

Hit là damage xảy ra tức thì khi skill kết nối — attack hit, spell hit, projectile impact, đều là hit. Crit, leech, block chance, và một loạt mechanic phòng thủ khác chỉ có tác dụng trên hit.

DoT là damage xảy ra dần theo thời gian — :wiki-link{url="https://www.poe2wiki.net/wiki/Ignite"} đốt liên tục, :wiki-link{url="https://www.poe2wiki.net/wiki/Bleeding"} rỉ máu, :wiki-link{url="https://www.poe2wiki.net/wiki/Poison"} ngấm theo giây. Điểm quan trọng: DoT không tính là hit, nên armour và penetration không có tác dụng lên nó — chỉ có resistance mới giảm được DoT. Ngược lại, DoT cũng không thể crit, không trigger leech trực tiếp.

Khi thiết kế build, cần biết rõ mình đang scale Hit hay DoT vì hai chuỗi modifier hoàn toàn khác nhau. "Increased Spell Damage" không nhất thiết buff spell DoT trừ khi skill có ghi rõ "Modifiers to Spell Damage apply to Debuff's Damage over Time" — ví dụ :wiki-link{url="https://www.poe2wiki.net/wiki/Essence_Drain"} có ghi rõ điều này.

## Ailment xuất phát từ hit và loại damage tương ứng

Ailment là debuff gắn lên target khi bị hit đúng loại damage. Mỗi damage type có ailment đặc trưng của nó:

- **Fire hit** → :wiki-link{url="https://www.poe2wiki.net/wiki/Ignite"} (Fire DoT, 4 giây mặc định)
- **Cold hit** → :wiki-link{url="https://www.poe2wiki.net/wiki/Chill"} (giảm action speed tự động) và tích lũy :wiki-link{url="https://www.poe2wiki.net/wiki/Freeze"} (đứng hình 4 giây)
- **Lightning hit** → :wiki-link{url="https://www.poe2wiki.net/wiki/Shock"} (target nhận thêm 20% damage từ mọi nguồn) và tích lũy :wiki-link{url="https://www.poe2wiki.net/wiki/Electrocute"} (khóa mọi action 5 giây)
- **Physical hit** → :wiki-link{url="https://www.poe2wiki.net/wiki/Bleeding"} (Physical DoT, 5 giây, nhưng cần source Bleed chance rõ ràng)
- **Physical hoặc Chaos hit** → :wiki-link{url="https://www.poe2wiki.net/wiki/Poison"} (Chaos DoT, 2 giây mặc định, stack nhiều lần, cần source Poison chance)

Ba ailment gây sát thương là Ignite, Bleed, Poison — bốn cái còn lại (Chill, Shock, Freeze, Electrocute) không gây damage trực tiếp nhưng tác động đến trận chiến theo cách khác. Bleed và Poison đều bypass :wiki-link{url="https://www.poe2wiki.net/wiki/Energy_Shield"} — chúng rút Life trực tiếp dù target còn ES.

## Tại sao tăng hit damage làm ailment DoT mạnh hơn

Đây là điểm người mới hay bỏ qua và là cơ chế quan trọng nhất của hệ ailment-DoT.

Khi một hit gây ailment DoT (Ignite, Bleed, Poison), magnitude của ailment đó được tính ngay tại thời điểm hit xảy ra và bị khóa lại — ailment không nhận thêm modifier nào sau đó. Cụ thể: Ignite deal Fire DoT bằng 20% fire damage của hit đã gây ignite đó mỗi giây. Bleed deal Physical DoT bằng 15% physical damage của hit đó mỗi giây. Poison deal Chaos DoT bằng 20% tổng physical và chaos damage của hit đó mỗi giây.

Hệ quả thực tế: "increased Fire Damage" tăng hit → hit gây ignite mạnh hơn → ignite deal damage cao hơn. Không cần tìm "increased Ignite Damage" riêng. Mọi modifier tăng damage của hit sẽ tự động lan sang ailment DoT xuất phát từ hit đó. Đây là lý do tại sao một build Bleed tập trung tăng flat physical và weapon damage chứ không cần các modifier DoT cụ thể.

Điều ngược lại cũng đúng: modifier chỉ áp dụng lên DoT sau khi đã inflict sẽ không có tác dụng. Nếu thấy passive ghi "increased Damage over Time" mà không kèm "to Hits" thì nó không buff được hit, nhưng nếu kèm điều kiện "Modifiers to X Damage apply to Debuff's Damage over Time" thì lại khác.

## Chaos damage có đặc điểm riêng

Chaos damage có hai đặc điểm tách biệt nó khỏi bốn loại kia.

Thứ nhất: Chaos damage lấy đi **gấp đôi** lượng Energy Shield so với con số damage thật. Một hit 100 chaos damage lấy đi 200 ES. Build chạy ES để phòng thủ sẽ bị chaos damage xuyên qua rất nhanh — đây là lý do chaos resistance quan trọng hơn nhiều so với trực giác đầu tiên.

Thứ hai: Poison (ailment DoT của Chaos) cũng bypass ES như đã nói, cộng thêm khả năng stack nhiều lần. Mỗi hit có poison chance tạo ra một stack poison riêng biệt thay vì ghi đè stack cũ — nên build bắn nhanh hoặc multi-hit scale poison rất mạnh chỉ qua tốc độ attack, không cần hit đơn quá mạnh.

Keystone :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Inoculation"} là ngoại lệ đặc biệt: nó cho miễn nhiễm hoàn toàn với chaos damage nhưng đổi lại khóa Life xuống 1 — build CI chỉ sống nhờ ES.

## Conversion đổi damage type và kéo theo cả ailment

Conversion là mechanic cho phép đổi một phần hoặc toàn bộ damage từ type này sang type khác, thông qua passive, support gem, hoặc item. Khi convert xong, damage đó scale theo modifier của type mới và không còn scale theo type cũ.

Ví dụ: nếu physical damage bị convert 100% sang fire, nó giờ scale với "increased Fire Damage", bị giảm bởi Fire Resistance của kẻ địch, và gây Ignite — không còn scale với phys hay gây Bleed nữa. Ailment follow theo damage type sau khi convert.

Điều này có nghĩa build convert phải kiểm tra ailment ngay. Build convert phys sang fire nhưng vẫn dùng Bleed support sẽ thấy Bleed không có gì để tính magnitude vì không còn phys damage trên hit nữa.

Lưu ý quan trọng từ wiki: **DoT không thể convert**. Conversion chỉ hoạt động trên hit. Ignite, Bleed, Poison sau khi đã gây ra thì type của chúng cố định không đổi được.

## Relationships

- **related** [Ailment và status effect trong POE2](/guides/beginner-ailments) — đi sâu hơn vào cách ailment apply và phòng ailment từ phía kẻ địch gây lên người chơi
- **related** [Increased và More: toán học scaling damage](/guides/beginner-increased-vs-more) — khi đã hiểu damage type, bước tiếp theo là hiểu tại sao "increased" và "more" không như nhau
- **related** [Lớp phòng thủ trong POE2](/guides/beginner-defence-layers) — Physical bị armour giảm, Elemental bị resistance giảm — hiểu phòng thủ là mặt kia của cùng một hệ thống
