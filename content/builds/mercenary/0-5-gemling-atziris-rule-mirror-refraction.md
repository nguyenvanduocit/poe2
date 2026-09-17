---
document_type: build
title: Frostbolt Mirror of Refraction Gemling
description: Gemling CI level 92 với Widowhail, Drillneck và Atziri's Rule; cấu hình thực tế, sửa link Augury và thứ tự nâng cấp.
class: Mercenary
ascendancy: Gemling Legionnaire
league: '0.5'
patch: 0.5.0
status: review
author: duocnv
created: '2026-09-07'
updated: '2026-09-15'
budget_tier: low-budget
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Frostbolt
  damage_type: Cold
  playstyle: Projectile loop
  content_focus: Mapping
tags:
- poe2
- mercenary
- gemling-legionnaire
- frostbolt
- mirror-of-refraction
- atziris-rule
- widowhail
- drillneck
- chaos-inoculation
template: templates/build-template.md
---

# Frostbolt Mirror of Refraction Gemling

Mình đang chạy **:wiki-link{url="https://www.poe2wiki.net/wiki/Gemling_Legionnaire"} level 92**, dùng **:wiki-link{url="https://www.poe2wiki.net/wiki/Frostbolt"}** và **:wiki-link{url="https://www.poe2wiki.net/wiki/Mirror_of_Refraction"}** để duy trì projectile quanh nhân vật. Bộ này đã chuyển sang :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Inoculation"}, chịu đòn bằng Energy Shield, Evasion và Deflection. Phần cần sửa trước khi mua thêm đồ nằm ngay ở link support của Mirror.

## Build Overview

:wiki-link{url="https://www.poe2wiki.net/wiki/Widowhail"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Drillneck"} nằm ở weapon set 1 để bắn Frostbolt khởi động. :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri%27s_Rule"} nằm ở weapon set 2 để sinh gương; cây riêng của bộ staff lấy thêm Cooldown Recovery, còn bộ bow lấy critical damage bonus. Projectile chạm gương sẽ bị nhân thành nova, rồi bản sao có thể tiếp tục phá gương khác.

:wiki-link{url="https://www.poe2wiki.net/wiki/Breachlord%27s_Amalgam"} cho Frostbolt quay về và xuyên tất cả mục tiêu trên đường về. Dòng Return trên Drillneck chỉ dành cho Attack Projectiles, nên Frostbolt vẫn cần Amalgam. Dòng increased damage và crit theo số lần xuyên của quiver dùng cho Projectile nói chung.

Widowhail hiện có **273% increased bonuses gained from Equipped Quiver**, nên riêng hiệu ứng từ bow nhân bonus quiver với **3,73**. Hai roll trên Drillneck là 54% increased damage và 57% increased critical hit chance mỗi lần xuyên: nhân với bow thành khoảng **201,42% increased damage** và **212,61% increased crit chance** mỗi lần xuyên, trước các nguồn tăng quiver effect khác. Các khoản increased cộng vào tổng tương ứng; không nhân damage thêm 3 lần sau mỗi lần xuyên.

## Skill Gems & Links

### Frostbolt và Frost Wall

Frostbolt trong mã là gem level 20, corrupted, quality 23%, đi cùng Breachlord's Amalgam, :wiki-link{url="https://www.poe2wiki.net/wiki/Zenith_II"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Considered_Casting"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Verglas"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Cold_Penetration"}. Amalgam cho projectile quay về nhưng thêm cooldown; Considered Casting đổi cast speed lấy spell damage; Cold Penetration giúp hit xuyên Cold Resistance. Zenith II cần mana trên 90% để có phần more damage, nên khởi động khi mana đầy.

:wiki-link{url="https://www.poe2wiki.net/wiki/Frost_Wall"} level 19, quality 20%, gắn :wiki-link{url="https://www.poe2wiki.net/wiki/Spell_Cascade"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Glacier"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Concentrated_Area"}. Cascade tạo thêm vùng tường, Glacier tăng life của Ice Crystal. Verglas cho Frostbolt extra cold sau khi mình phá Ice Crystal, với tỷ lệ 1% damage gained as extra cold cho mỗi 2.000 maximum life của crystal bị phá, kéo dài 6 giây. Chưa tính một lượng extra cold cố định vào damage vì bản phân tích này chưa đo life thực của crystal.

Nhịp vận hành cần giữ là chờ gương xuất hiện, bắn Frostbolt bằng bộ bow vào gương rồi dùng Frost Wall trên bộ staff để đổi vũ khí và duy trì gương. Gán Frostbolt cho set 1, Frost Wall cho set 2 trong game; kiểm tra projectile còn tiếp tục khi đổi bộ trước khi chạy tiếp.

### Mirror đang thiếu một support để bật Augury

Link hiện tại chỉ có **:wiki-link{url="https://www.poe2wiki.net/wiki/Cooldown_Recovery_II"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Uhtred%27s_Augury"}**. Augury cần đúng hai support khác cùng sửa skill, nên link này chưa nhận +2 level. Điều kiện và bonus hiện hành nằm ở [Uhtred's Augury](https://poe2db.tw/us/Uhtreds_Augury).

Đã thử thêm :wiki-link{url="https://www.poe2wiki.net/wiki/Prolonged_Duration_II"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Clarity_I"} vào nhóm Mirror. Cả hai đều nâng level hiệu dụng từ 22 lên 24, với tổng **239% increased Cooldown Recovery** áp dụng cho nhóm có support.

| Chỉ số | Link hiện tại | Thêm support hợp lệ |
|---|---:|---:|
| Mirror level | 22 | 24 |
| Khoảng cách sinh gương cơ bản | 1,8 giây | 1,6 giây |
| Khoảng cách sau CDR | 1,8 ÷ 3,39 = 0,531 giây | 1,6 ÷ 3,39 = 0,472 giây |
| Số gương sinh mỗi giây | 1,883 | 2,119 |

Tốc độ tạo gương tăng **12,5%**; đây là lợi ích về nhịp sinh gương, chưa phải mức tăng DPS của cả loop. Công thức dùng bảng level và dòng CDR áp dụng cho mirror appearance frequency của [Mirror of Refraction](https://poe2db.tw/us/Mirror_of_Refraction).

**Prolonged Duration II là phương án ưu tiên khi chỉ cast để khởi động.** Nó kéo dài thời gian tồn tại của gương và giữ nguyên 11 Spirit trống. Trong cấu hình gem hiện tại, thêm support đỏ còn đổi hiệu ứng :wiki-link{url="https://www.poe2wiki.net/wiki/Gem_Studded"}: địch mất critical damage bonus khi hit mình, nhưng mất phần giảm cost nên Frostbolt ở bộ staff tăng mana cost từ khoảng 119 lên 169.

Clarity I giữ mana cost khoảng 119 và tăng mana regen từ 80,5 lên 91,5 mỗi giây. Đổi lại, reservation tăng từ 137 lên 147 trên tổng 148 Spirit, chỉ còn 1 Spirit trống. Hai phương án này là đề xuất đã mô phỏng; bản PoB gốc đính kèm vẫn giữ link hiện tại.

### Các nhóm phòng thủ và utility

:wiki-link{url="https://www.poe2wiki.net/wiki/Ghost_Dance"} level 19, quality 20%, gắn Cooldown Recovery II và :wiki-link{url="https://www.poe2wiki.net/wiki/Uhtred%27s_Omen"}. Omen yêu cầu đúng một support khác, nên nhóm này đủ điều kiện. :wiki-link{url="https://www.poe2wiki.net/wiki/Time_of_Need"} level 12 đi cùng Cooldown Recovery II để rút khoảng cách giữa các lần giải curse và elemental ailment.

:wiki-link{url="https://www.poe2wiki.net/wiki/Arctic_Armour"} level 19, quality 20%, dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Stun_III"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Enduring_Impact_II"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Frost_Nexus"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Knockback"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Cold_Mastery"}. Nhóm này phản ứng với melee hit: tăng stun, có nguồn Endurance Charge khi heavy stun, tạo chilled ground khi freeze và đẩy địch ra.

:wiki-link{url="https://www.poe2wiki.net/wiki/Freezing_Mark"} level 19 đi cùng Prolonged Duration II và :wiki-link{url="https://www.poe2wiki.net/wiki/Eternal_Mark"} để kéo thời gian mark/buff và giữ mark qua lần kích hoạt đầu. :wiki-link{url="https://www.poe2wiki.net/wiki/Tornado"} level 14 dùng Prolonged Duration II, :wiki-link{url="https://www.poe2wiki.net/wiki/Advancing_Storm"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area_II"} để hút địch, di chuyển storm và tăng diện tích.

:wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"} level 14, quality 20%, chứa :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Weakness"} level 13. Các support còn lại là Prolonged Duration II, :wiki-link{url="https://www.poe2wiki.net/wiki/Ritualistic_Curse"}, Magnified Area II và :wiki-link{url="https://www.poe2wiki.net/wiki/Slow_Potency"}. Đây là cấu hình đang có trong export, chưa phải kết luận rằng mọi socket utility đều đã tối ưu.

## Ascendancy và passive

Bốn notable ascendancy đang lấy là :wiki-link{url="https://www.poe2wiki.net/wiki/Essence_of_Virtue"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Advanced_Thaumaturgy"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Neurological_Implants"} và Gem Studded. Neurological Implants cho +2 level các skill có Intelligence requirement, Advanced Thaumaturgy thêm hiệu ứng từ quality, còn Essence of Virtue cho :wiki-link{url="https://www.poe2wiki.net/wiki/Virtuous_Barrier"}. Màu support có ảnh hưởng trực tiếp đến Gem Studded, nên đổi gem phải xem cả mana cost lẫn phòng thủ.

:wiki-link{url="https://www.poe2wiki.net/wiki/From_Nothing"} cho phép lấy passive quanh Chaos Inoculation mà không cần nối từ cây chính. :wiki-link{url="https://www.poe2wiki.net/wiki/Heroic_Tragedy"} seed **5420**, dòng **Vorana**, đang đổi node tại vị trí vốn mang tên Elemental Equilibrium thành hiệu ứng bỏ bonus tự nhiên của Strength và nhận 1% increased Energy Shield mỗi 2 Strength. Phải đọc hiệu ứng sau chuyển đổi; tên node gốc trong danh sách keystone không mô tả tác dụng đang dùng.

Bộ staff có các notable CDR như :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Mastery"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Multitasking"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Volatile_Catalyst"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Distracting_Presence"}. Bộ bow dồn vào critical damage bonus; hệ số crit của Frostbolt trong phép tính đổi từ **6,34× ở bow** xuống **2,29× ở staff**. Phân bổ chính xác và hai weapon-set tree nằm trong bản PoB ở cuối bài.

## Phòng thủ hiện tại

Bảng dưới dùng phép tính PoB2 v0.20.0-1-g035a04f03 chạy ngày 15/09/2026 trên mã mình gửi, với cấu hình enemy giữ nguyên. Các charm trong export đều đang bật. Physical max hit là ngưỡng chịu một hit vật lý trong giả định đó, không phải EHP trung bình qua nhiều hit.

| Chỉ số | Atziri's Rule | Widowhail + Drillneck |
|---|---:|---:|
| Energy Shield | 6.825 | 5.957 |
| Armour | 2.055 | 1.751 |
| Evasion | 10.309 | 8.298 |
| Deflect chance | 48% | 57% |
| Damage prevented khi deflect | 49% | 40% |
| Physical max hit | 7.214 | 6.289 |
| Fire max hit | 21.392 | 18.671 |
| Cold / Lightning max hit | 24.440 / 24.440 | 21.330 / 21.330 |
| Fire / Cold / Lightning Resistance | 71% / 75% / 75% | 71% / 75% / 75% |
| Spirit tổng / reserve / trống | 148 / 137 / 11 | 148 / 137 / 11 |

Chaos Inoculation cho miễn nhiễm chaos damage và bleeding, nên số Chaos Resistance bằng 0 trong output không phải lỗ res. Bộ staff có ES và ngưỡng chịu hit cao hơn; bộ bow có Deflect chance cao hơn nhưng phần damage chặn được khi deflect thấp hơn.

**Fire thiếu 4%.** Chỉ sửa nguồn Fire Resistance thêm 4 điểm trong phép thử đã nâng Fire max hit của staff lên **24.440**, tăng khoảng **14,2%**. Cold vừa chạm cap, Lightning dư 12 điểm; khi đổi rare cần giữ cả ba kênh và thêm khoảng dư để chịu debuff.

**Hit vật lý vẫn dễ giết nhất.** Armour 2.055 chỉ đi cùng Physical max hit khoảng 7,2k, thấp hơn nhiều so với cold/lightning. Tắt toàn bộ charm và flask trong mô phỏng làm ngưỡng vật lý giảm còn **7.025**; không coi hiệu ứng For Utopia luôn có sẵn khi gặp hit đầu tiên.

Hồi ES có Ghost Dance và recharge. Với Evasion của staff, phần hồi có điều kiện của Ghost Dance là **10.309 × 2% ≈ 206 ES/giây** trước modifier hồi phục, kích hoạt khi vừa mất Ghost Shroud; bản 0.5 đã đổi khỏi hồi tức thì theo hit. Recharge trong phép tính là **853,1 ES/giây**, bắt đầu sau khoảng **4,17 giây** nếu không bị gián đoạn. [Ghost Dance hiện hành](https://poe2db.tw/us/Ghost_Dance)

## Gear Progression

Mình ưu tiên giữ CDR trên giày và jewel, sửa resistance rồi mới tăng ES hoặc thay món damage. Chưa có snapshot giá cho nguyên bộ ngày phân tích, nên không dùng nhãn budget để suy ra chi phí ráp lại.

### Chỉ số chính cần tìm trên từng slot

- **Weapon set 1:** unique bắt buộc Widowhail + Drillneck cho cách khởi động này; ưu tiên quiver effect trên bow và hai roll damage/crit mỗi lần xuyên trên quiver. Bow hiện 273%, quiver 54% damage và 57% crit.
- **Weapon set 2:** unique bắt buộc Atziri's Rule để có Mirror; ưu tiên level skill được grant. Staff hiện grant level 20, có +5 corrupted spell skill gems và rune +1 all spell, nhưng các dòng cộng spell không tự cộng level cho Mirror vì Mirror không có tag Spell.
- **Helmet:** Fire/Cold Resistance đủ cap → ES → CDR từ augment. Carrion Corona có 292 ES, +31 fire, +36 cold và augment 8% CDR.
- **Body Armour:** giữ tổng phòng thủ → tăng ES và khả năng chịu hit → giữ tương tác với augment. :wiki-link{url="https://www.poe2wiki.net/wiki/Morior_Invictus"} hiện có bốn socket, 11% global Armour/Evasion/ES mỗi socket đầy và giảm critical damage bonus của hit vào mình.
- **Gloves:** resistance đang cần → ES/Evasion → Deflection. Empyrean Vise hiện có 529 Evasion, +18 fire từ rune, +28 lightning và Deflection bằng 23% Evasion.
- **Boots:** CDR → movement speed → ES. Morbid March có 30% CDR và 32% movement speed; giữ các thông số này khi so món thay thế.
- **Amulet:** Spirit đủ cho nhóm buff → ES/Evasion → attribute requirement → resistance. Empyrean Torc có +48 Spirit, 47% increased ES, 43% increased Evasion, +28 Dexterity, +39 Intelligence và +37 fire; anoint :wiki-link{url="https://www.poe2wiki.net/wiki/Thaumaturgic_Generator"}.
- **Belt:** ring bonuses đủ để giữ resistance và CDR của nhẫn. :wiki-link{url="https://www.poe2wiki.net/wiki/Ingenuity"} hiện tăng 29% bonus mỗi bên; thay belt phải tính lại cả hai nhẫn cùng lúc.
- **Ring 1:** giữ resistance → CDR → mana/Evasion. Horror Whorl đang có 11% CDR cùng nhiều resistance; đây là nhẫn cần bảo toàn khi sửa bộ.
- **Ring 2:** Cold Resistance và Strength đủ dùng → thêm CDR → phòng thủ. Agony Hold có +38 cold và +21 Strength nhưng chưa có CDR; xem slot này trước khi đầu tư thêm unique.
- **Jewels:** giữ CDR và các jewel mở đường cây → phòng thủ hoặc projectile modifier phù hợp. Bộ hiện có :wiki-link{url="https://www.poe2wiki.net/wiki/Megalomaniac"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Heart_of_the_Well"}, From Nothing, Heroic Tragedy, một Time-Lost Emerald và bốn rare Emerald.
- **Charms:** giữ xử lý stun/shock và tính riêng uptime từng món. Bộ đang dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Rite_of_Passage"} với Spirit Of The Ox, :wiki-link{url="https://www.poe2wiki.net/wiki/For_Utopia"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Grounding_Charm"}.

### Thứ tự sửa bộ hiện tại

1. Thêm support hợp lệ vào Mirror, chọn giữa hai phương án đã tính ở phần gem.
2. Bù 4% Fire Resistance và giữ Cold không rơi dưới cap.
3. Tìm nhẫn thay Agony Hold có CDR nhưng vẫn giữ đủ Cold Resistance và Strength sau Ingenuity.
4. Tăng ES và khả năng chịu hit vật lý, rồi đo lại tốc độ hồi ES khi bị đánh liên tục.

## Failure Modes

Bộ này có damage tăng theo lịch sử projectile, có bộ cây riêng cho gương và một bộ phòng thủ CI đủ để tiếp tục nâng cấp theo từng slot. Những điểm gãy cần kiểm tra nằm ở lúc khởi động, lúc bị hit lớn và lúc bị debuff.

**Loop đứt khi di chuyển hoặc đổi vị trí.** Projectile phải chạm được gương kế tiếp; tăng projectile speed tùy tiện có thể làm đổi quãng đường và thời điểm gặp gương. Sau mỗi thay đổi CDR hoặc projectile speed, thử đường hẹp, khoảng trống và chạy đổi hướng để đếm số lần phải khởi động lại.

**Hit vật lý lớn xuyên qua các lần né.** Evasion và Deflection giảm áp lực từ nhiều hit, nhưng Physical max hit vẫn giới hạn cú đánh có thể chịu. Tránh đứng nhận slam chỉ vì trước đó một pack đông chưa làm tụt ES.

**Giảm recovery, mất regen hoặc bị hạ resistance.** Pool ES cần thời gian hồi sau khi nhận damage, còn Fire và Cold hiện không có khoảng dư để chịu debuff. Mod làm yếu recovery kéo dài thời gian ở ES thấp; mất mana regen còn gây khó lúc phải cast lại Frostbolt và utility.

**Thiếu bộ sinh gương hoặc thay đổi cơ chế sao chép.** Atziri's Rule, bộ bow/quiver và Amalgam là điều kiện của cách chơi đang ghi. Đây là cấu hình chuyển sang ở endgame; thay một món trong nhóm này hoặc có patch sửa projectile copy/snapshot phải kiểm tra lại nhịp vận hành trước khi dùng cho content khó.

## Verdict

Mình giữ hướng Frostbolt–Mirror và sửa những khoảng thiếu đã đo được trước khi đổi cả bộ. Link Augury còn một socket hữu ích chưa dùng, còn Agony Hold là chỗ có thể thêm CDR khi đã cân lại resistance. Sau các thay đổi đó, tiêu chí để quyết định nâng tiếp là số lần loop đứt trong map và cách ES hồi sau một hit lớn.

## Resources

[Tải mã PoB gốc ngày 15/09/2026](/pob/gemling-frostbolt-mirror-2026-09-15.txt). Import bằng mục Import/Export Build của PoB2; bản này giữ nguyên gear, gem và config đã phân tích.

**Phạm vi mô phỏng:** PoB local tính 6.825 ES trong khi mã lưu 6.945 ES. Các bảng so sánh dùng cùng bản engine local; số DPS 1.030 lưu trong mã chỉ là output của skill đang chọn, chưa mô phỏng toàn bộ projectile copy, lịch sử xuyên và snapshot khi đổi vũ khí. Chưa có phép đo boss DPS hoặc uptime loop trong game, nên không gán một con số DPS tổng hay cam kết AFK boss.

Dữ liệu đối chiếu cục bộ nằm ở `data/character-exports/analysis-2026-09-15/`: `build.xml` là export gốc, `summary.json` chứa sáu kịch bản, các file `*-details.txt` giữ output chi tiết. Cơ chế support và Ghost Dance đã đối chiếu với patch notes 0.5.0 cùng dữ liệu skill hiện hành.

## Version History

### 2026-09-15

Ghi cấu hình CI Frostbolt–Mirror level 92 từ mã của mình; thêm so sánh hai weapon set, hai cách bật Augury và phép thử cap Fire Resistance.

## Relationships

- **related_guides** [Spirit và spirit reservation](/guides/spirit-and-spirit-reservation) giải thích cách cân pool khi thêm support vào buff.
- **related_guides** [Energy Shield recovery](/guides/energy-shield-recovery) để chọn hướng hồi ES sau khi đã bù resistance.
