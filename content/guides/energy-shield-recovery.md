---
template: templates/mechanic-template.md
document_type: mechanic
title: "Energy Shield Recovery"
status: draft
author: duocnv
created: '2026-05-24'
updated: '2026-06-19'
league: '0.5'
patch: 0.5.3
tags:
  - poe2
  - energy-shield
  - defense
  - recovery
  - runes-of-aldur
  - runic-ward
  - deflection
---

# Energy Shield Recovery

Energy Shield trong POE2 0.5 phục hồi qua hai cơ chế riêng biệt là **delay** và **rate**. Delay là khoảng thời gian phải tránh hit trước khi recharge bắt đầu, còn rate là tốc độ hồi ES mỗi giây sau khi delay kết thúc. Base delay mặc định là 2 giây, base rate là 33% max ES mỗi giây. Cơ chế này thay đổi mạnh từ 0.4, và hiện là một trong những yếu tố quyết định cách build phòng thủ cho hầu hết các archetype nghiêng về ES hoặc hybrid.

Tree 0.5 có 85 node cấp faster start of Energy Shield Recharge, chủ yếu là các small node 4% và 6%. Rate gần như bị tước khỏi small node, chỉ còn sót lại ở một số notable cụ thể và gear. Runic Ward ra cùng patch, là lớp backup tự hồi khi life chạm 1, buộc build phải nghĩ lại cách kết hợp recovery với các layer khác.

Các build đang dùng cơ chế này hiện tại chủ yếu là hybrid Evasion + Deflection + Runic Ward trên nhánh Huntress Spirit Walker, Lich Witch, và một số Stormweaver. Với TheLeader_A chạy CI + Ghost Dance + high ES, lớp recovery này chỉ còn vai trò phụ, còn chính là Deflection và Ward.

## How It Works

Energy Shield recovery chia thành hai giai đoạn rõ ràng. Giai đoạn delay là thời gian chờ sau khi mất ES trước khi tick recharge đầu tiên. Modifier "faster start of Energy Shield Recharge" rút ngắn giai đoạn này. Giai đoạn rate là tốc độ hồi thực tế mỗi giây sau khi delay hết, do modifier "increased Energy Shield Recharge Rate" chi phối.

Tree 0.5 đã loại bỏ gần như toàn bộ small node cấp increased rate. Thay vào đó là 30 small node cấp 4% faster start và 23 small node cấp 6% faster start. Các notable còn giữ rate thực sự rất ít. Rapid Recharge hiện là một trong những notable mạnh nhất còn lại với 12% rate + 12% faster start. Convalescence cho 20% faster start nhưng kèm penalty 10% reduced rate. Patient Barrier cho 50% max ES nhưng lại làm chậm start 20%.

Runic Ward hoạt động như lớp an toàn khi life về 1. Ward hấp thụ damage và hồi độc lập với ES hay life. Verisium Runeforging cho phép socket Ward Rune vào armour từ Act 1, miễn phí dưới level 55. Lớp này không bị ảnh hưởng bởi keyword "Defences", nên build phải coi nó như một hệ thống riêng.

## Math Chain

Với một setup hybrid điển hình trên right-side tree:

- 4 small node 4% faster start + 3 small node 6% faster start (khoảng 34% faster start)
- Rapid Recharge: 12% rate + 12% faster start
- Mystic Stance: 12% faster start
- Essence Infusion: 12% faster start
- Gear (Foci + Essence of Hysteria + Rebirth Rune): khoảng 50-55% rate
- Runic Ward từ gear: 15-25% max Ward tùy craft

**Tổng faster start** từ tree + notable thường rơi vào 70-90% tùy pathing. **Tổng rate** chủ yếu đến từ gear vì tree gần như không còn hỗ trợ. Con số này thấp hơn rất nhiều so với 0.4, buộc build phải dựa vào pool + Ward + Deflection thay vì recharge spam.

## Key Interactions

Runic Ward là interaction quan trọng nhất. Khi ES sạch và life chạm 1, Ward kích hoạt và cho thêm thời gian sống. Build càng stack Ward tốt thì càng chịu được burst dài hơn trong lúc ES đang hồi chậm.

Ghost Dance tạo lớp ES regen độc lập với recovery rate thông thường. Mỗi khi mất Ghost Shroud, nhân vật nhận 2% Evasion Rating dưới dạng ES regen mỗi giây — ở 10k Evasion ra khoảng 200 ES/s ổn định, không bị ảnh hưởng bởi các nerf recovery trên tree.

Deflection là lớp mới nổi bật trong 0.5. Nhiều notable Deflection đồng thời cấp faster start (Mending Deflection cho 20% khi không Full Life, Energising Deflection cho 12%). Đây là cách lấy recovery value rẻ và hiệu quả nhất hiện nay trên nhánh Evasion.

Staunch Deflection thuộc họ khác — patch 0.5.3 thêm dòng cấp Deflection Rating = 8% Evasion Rating. Đây là notable **deflection-from-evasion**, không phải ES recovery / faster start. Nó nằm cùng họ với Wild Cat (12% Evasion → Deflection Rating), không cùng họ với Mending Deflection / Energising Deflection. Evasion stacker đi qua khu Dexterity giờ có hai option deflection-from-evasion song song: Wild Cat 12% baseline cao hơn, Staunch Deflection 8% kèm các sub-effect khác của notable. Pick theo path thuận tay hoặc lấy cả hai khi tree cho phép.

### Phân biệt "faster start of Energy Shield Recharge" và "increased Energy Shield Recharge Rate"

- "faster start of Energy Shield Recharge" chỉ ảnh hưởng delay phase, rút ngắn thời gian chờ trước khi tick đầu tiên.
- "increased Energy Shield Recharge Rate" ảnh hưởng trực tiếp throughput, tăng lượng ES hồi mỗi giây sau khi delay kết thúc.
- Hệ quả: 0.5 đập mạnh vào rate hơn delay. Build chỉ stack faster start sẽ thấy ES hồi chậm rõ rệt khi đã vào rate phase, đặc biệt dưới sustained damage.

## Optimization

Trên tree, nhánh right-side (Evasion/Intelligence) cho mật độ hybrid tốt nhất. Nên ưu tiên path qua các cluster có nhiều small node 4-6% faster start kết hợp Deflection. Rapid Recharge đáng lấy nếu pathing không quá xa vì đây là nguồn rate sạch hiếm hoi.

Gear craft nên tập trung Foci + body armour cho rate suffix (of Suffusion, of Ardour). Intelligence Body Armour giờ có thể roll rate suffix là ưu thế mới. Verisium Runeforging cần làm sớm từ Act 1, đặc biệt với armour dưới level 55 được miễn phí.

Spirit Walker ascendancy hỗ trợ tốt cho lối chơi này qua các node tạo ground effect và companion, giúp di chuyển để duy trì evasion và trigger Ward đúng lúc.

## Interactions with Other Content

Trong Runes of Aldur, Remnant encounter và Verisium Runeforging trực tiếp cung cấp Ward. Build càng đẩy sớm càng có lợi thế lớn về survivability từ giữa campaign.

Map mod giảm recovery rate sẽ ảnh hưởng nặng hơn trước vì baseline đã thấp. Nên ưu tiên reroll hoặc chuẩn bị Ward pool đủ lớn trước khi vào những map này.

Trial of the Sekhemas cho phép cộng max Runic Ward vào Honour ban đầu, tạo synergy hai chiều giữa combat thường và endgame content.

## What Doesn't Work

Pattern recharge spam giữa hai hit boss gần như chết. TTF tăng đáng kể so với 0.4, và boss có downtime dưới 3 giây không cho đủ thời gian full refill.

Stack thuần faster start mà bỏ qua rate từ gear và Runic Ward sẽ thấy ES hồi rất chậm sau khi đã vào phase rate. Patient Barrier giờ có 20% slower start, không còn là lựa chọn pool miễn phí.

Core of the Guardian trừ thẳng 20% max ES nên cực kỳ xấu cho pure ES build.

## Common Mistakes

Patient Barrier không còn là notable pool "sạch" như 0.4 — nó kèm 20% slower start, làm TTF tệ hơn nếu không có Ward đủ mạnh để bù. Lấy Patient Barrier nghĩa phải đầu tư Runic Ward song song, không thể coi là pool thuần.

Path sâu vào cluster recovery cũ (Convalescence + Essence Infusion + Rapid Recharge) trả rất ít value so với chi phí point trong 0.5. Chỉ lấy Rapid Recharge nếu pathing thuận tay; còn lại ưu tiên Deflection notable trên nhánh Evasion vì chúng cấp cả faster start lẫn layer phòng thủ thêm cùng lúc.

Verisium Runeforging không phải league mechanic phụ — nó là layer phòng thủ chính bù đắp trực tiếp cho recovery baseline đã yếu. Build không có Ward sẽ chết nhanh hơn rõ rệt ở high tier map và trước boss burst.

## Cost & Restrictions

Verisium Runeforging đòi hỏi farm Remnant sớm và Verisium currency. Armour level 55+ phải đánh đổi base defence để có Ward, đây là trade-off thực sự.

Một số notable như Patient Barrier và Convalescence mang penalty trực tiếp lên recovery. Core of the Guardian trừ max ES cứng.

Runic Ward không scale với bất kỳ modifier "Defences" nào, nên build phải invest riêng vào max Ward và Ward recovery rune.

## Verdict & Open Questions

Verdict: NEUTRAL. ES recovery vẫn tồn tại và có giá trị, nhưng không còn là lớp phòng thủ chính nữa. Build buộc phải kết hợp với Deflection và Runic Ward.

Open question: Recovery rate có cap nào không trong 0.5? Cần test thực tế với build full rate gear ở T16+ để xác nhận TTF thực. Sẽ update sau khi có dữ liệu live từ tuần đầu league.

## Patch Evolution

### Patch 0.5.3 (2026-06-19)

Staunch Deflection notable thêm dòng "Gain Deflection Rating equal to 8% of Evasion Rating", join họ deflection-from-evasion bên cạnh Wild Cat (12%). Buff không chạm trực tiếp ES recharge layer, nhưng tăng giá trị tổng của tree-path Evasion stacker đi qua khu Dexterity, vì nhiều build ES-hybrid đã đi qua đó để lấy Mending Deflection / Energising Deflection.

### Patch 0.5.0: Return of the Ancients

Patch này loại bỏ hầu hết small node increased ES Recharge Rate, cắt mạnh giá trị của nhiều notable recovery, đồng thời giới thiệu Runic Ward và thay đổi keyword Defences. Đây là lần thay đổi lớn nhất về hệ thống phòng thủ ES từ khi ra mắt POE2.

### Patch 0.4.0: baseline trước

Recovery layer cho phép compound cao qua việc stack tree + notable + gear + essence + rune. Nhiều build dùng pattern recharge spam làm lớp sustain chính với TTF dưới 1 giây sau khi tránh hit.
