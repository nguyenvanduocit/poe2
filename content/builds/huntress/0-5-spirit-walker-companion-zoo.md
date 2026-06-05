---
template: templates/build-template.md
document_type: build
title: Tame Beast Companion Zoo Spirit Walker
status: draft
author: duocnv
created: '2026-06-04'
updated: '2026-06-04'
class: Huntress
ascendancy: Spirit Walker
league: '0.5'
patch: 0.5.0
budget_tier: high-budget
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Tame Beast
  damage_type: physical
  playstyle: companion
  content_focus: all-content
tags:
  - huntress
  - spirit-walker
  - tame-beast
  - companion
  - zoo
  - sylvans-effigy
  - minion
  - 0-5
  - poe2
---

# Tame Beast Companion Zoo Spirit Walker

Build này field nguyên một đàn 12 companion cùng lúc và để tụi nó tự dọn map. :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} gỡ trần số lượng ("You can have any number of Companions of different types"), rồi mình stack reservation efficiency tới khi nhét đủ 12 con vào pool spirit. Mỗi con cắm :wiki-link{url="https://www.poe2wiki.net/wiki/Muster"} để cộng dồn một more-multiplier chung, cắm :wiki-link{url="https://www.poe2wiki.net/wiki/Loyalty"} để chia damage mình ăn về máu cả đàn, rồi chia vai: một con Hyena Lord melee-splash gánh clear, hai con phys-hit gánh single-target, hai con shock+exposure shred res boss, một con buff-bot war cry. Người chơi chỉ chạy theo giữ ward thấp cho Onslaught up và quăng mark lên boss.

Điểm khiến nó chơi được — khác hẳn bản theory-craft trước — là **không weapon-swap**. Nguồn Onslaught đến từ việc drain Runic Ward bằng skill của chính mình, nên build không phải swap weapon, tức né được đúng cái trigger chính của bug desync reservation despawn companion. Một con char thật đã chạy setup này tới Lv93, clear T15 đều, boss ~12M một con. Nó vẫn có một trần rõ: pool máu người chơi mỏng có chủ ý, survivability là chỗ chặn không cho lên cao hơn T15. Hướng cải thiện ở đây là lấy nguyên engine damage của bản này rồi vá đúng hai lỗ phòng thủ mà pilot để ngỏ — cap res và nâng Loyalty lên Romira's.

## Lên 12 companion bằng cách stack reservation efficiency

Sylvan's Effigy là Stoic Sceptre, và nó drop theo nhiều item level nên đừng nhầm bản yếu với bản dùng thật. Bản endgame mình đeo là Requires Level 78, Spirit 154, grant Skill Level 18 :wiki-link{url="https://www.poe2wiki.net/wiki/Discipline"} cùng một con Azmerian Wolf Level 18. Nó còn cho +54% Spirit, hồi 64 Life mỗi giây cho allies trong Presence, +9 all attributes, và companion đánh mục tiêu bị Mark thêm 85% damage — các roll cao chạm 63% Spirit và 91% Mark. Quan trọng nhất là dòng định nghĩa cả build: "You can have any number of Companions of different types". Bản base rơi từ Level 6 chỉ có Spirit 100 và grant mỗi Azmerian Wolf, chưa có Discipline lẫn Life regen — con số Lv6 không phải cái mình chơi. Effigy ra mắt cùng league Runes of Aldur; cộng đồng report nó rơi từ Ritual nhưng patch note không ghi nguồn drop cụ thể, nên thực tế gom nó qua trade. Effigy gỡ trần *số lượng* companion, nhưng số con thật sự field được vẫn bị chặn bởi pool spirit, nên mọi thứ sau Effigy là bài toán reservation.

Spirit pool 260, mà cộng raw reservation của 12 con thì vượt xa con số đó. Field đủ đàn là nhờ chồng nhiều lớp reservation efficiency lên nhau:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Trusted_Kinship"} bản 0.5 cho "30% more Reservation Efficiency of Companion Skills" (đổi lại -20% cho non-Companion skill — đắt cho self-skill, nhớ lúc tính ward-drain).
- :wiki-link{url="https://www.poe2wiki.net/wiki/Idolatry"} cho "2% increased Reservation Efficiency of Skills per Idol", cộng các reservation idol cắm vào sceptre/armour (Snake, Stag, Panther, Primate idol đều thấy trên char thật).
- Belt craft Genesis Tree "increased Reservation Efficiency of Minion Skills", helmet gắn Bear Idol cho Bonded "12% Reservation Efficiency of Companion Skills" (0.5 nâng từ 10% lên 12%, cần dòng Bonded bật qua Fox Idol), cộng vài dòng 10% reservation efficiency rải trên gear.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Wolf_Pack"} đeo dạng *grant skill trên amulet* thay vì cắm gem — Wolf Pack free khỏi một skill slot, mở đúng slot đó cho một companion thứ 12.
- **Undying Hate** là Timeless Jewel: nó conquer các passive trong radius và đổi chúng theo cơ chế tribute, biến cụm node gần đó thành nguồn spirit reservation. Đây là miếng cuối kéo từ 10-11 con lên 12. Tỉ lệ tribute-ra-reservation chính xác phải đọc trong client khi roll được seed tương đương.
- Anoint **Lord of Horrors** trên amulet (minion offence notable) thay cho anoint reservation thuần, vì tới ngưỡng này reservation đã đủ và muốn thêm damage.

Nhồi xong 12 con thì headroom reservation gần như bằng 0 — muốn lên con thứ 13 cần unset ring cho thêm slot *cộng* một Undying Hate roll mạnh hơn nhiều với sanctified belt và triple-socket khắp nơi. Đó là chỗ đầu tư hở của build, không phải mục tiêu mặc định.

## Đàn 12 con gồm con nào, mỗi con làm gì

Khác bản dồn-một-carry, đây không có một con Unique gánh hết — damage chia cho cả đàn và mỗi con nhận một bộ support theo vai. Cấu hình char thật:

- **Caedron, the Hyena Lord** — con clear chính. Support Muster + 25% attack speed + 45% increased Area + 20% Area, melee splash. Nó lao thẳng vào pack, splash quét nguyên đám trong lúc dash, nên đi map gần như không phải dừng. Pilot chọn variant Hyena Lord có sẵn map-modifier (extra lightning, extra fire, burning ground on death) để basic attack split ra bốn loại element.
- **Antlion Charger** và **Vile Vulture** — hai con phys-hit nặng. Cả hai mang support "30% more Maximum Physical Hit Damage", Antlion Charger charge thẳng một đường nên hay chạy song song với mình dọn pack phía trước.
- **Companion: Winged Fiend** và **Brimstone Crab** — gói shred res cho boss. Mỗi con mang :wiki-link{url="https://www.poe2wiki.net/wiki/Lightning_Exposure"} + Potent Exposure (Exposure 20% increased effect) + Overcharge ("inflict Exposure on Shocking" + 50% increased Magnitude of Shocks, đổi lại shock dội ngược về mình). Winged Fiend còn có aura Extra Physical Damage + "All Damage Shocks", nên nó tự shock để kích đúng cái exposure đó. Tổng lại boss ăn shock magnitude cao cộng lightning exposure -res — đây là lớp damage thật lên boss của một build không có con carry +level.
- **Bramble Rhoa** và **Winged Horror** — gói bleed. Support "Hits inflict Incision" làm mục tiêu càng lúc càng dễ bleed; nền cho more-multiplier melee phys vs bleeding.
- **Chaw Mongrel** — AoE phụ (20% increased Area + 25% attack speed), trám clear.
- **Spirit Vessel** — buff bot, không phải damage chính. Support "grant 5 Rage on Melee Hit" + "Warcries spend 15 Rage to bypass Cooldown" (Enraged War Cry), cộng Lunar Blessing. Nó tự gain rage rồi spam war cry không cooldown để buff cả đàn.
- **Azmerian Wolf** (Effigy grant), **Wolf Pack** (amulet grant), và con **Bear** từ :wiki-link{url="https://www.poe2wiki.net/wiki/Wild_Protector"} — ba con free không tốn gem slot riêng.

Điểm chung quan trọng: gần như con nào cũng cắm Muster và Loyalty. Đó là hai trục nền — một cho damage, một cho thủ — nói riêng ở dưới.

## Muster là multiplier nền của cả đàn

Muster cho "Supported Minions deal 7% more Damage for each different type of Reviving Minion you have". Với một đàn 12 loại companion khác nhau, mỗi con cắm Muster ăn ~7% × số loại đang field — một more-multiplier chung cộng dồn theo số loại, không phải theo số con. Đây là lý do build cố tình field nhiều *loại* companion khác nhau chứ không nhân bản một con: mỗi loại mới thêm một nấc Muster cho toàn đàn. Nó cũng là lý do mất một con giữa trận đau hơn vẻ ngoài — không chỉ mất damage con đó mà tụt một nấc Muster cho mọi con còn lại. Một câu hỏi mở phải đo trong client: nếu Wolf Pack gọi nhiều con sói cùng đếm là *một* loại thì nó chỉ cho một nấc Muster — không sao với đàn này vì mọi con đều khác loại, nhưng nó loại bỏ hướng nhân bản sói để fish thêm Muster.

## Idol of Grold giúp được gì cho đàn

Idol of Grold cắm sceptre cho hai dòng, và phải đọc kỹ vì chỉ một dòng thật sự đáng. Dòng chính là "15% increased Damage per each different Companion in your Presence"; dòng Bonded — bật qua Fox Idol — là "15% increased Reservation Efficiency of Companion Skills".

Dòng Bonded mới là cái giữ: reservation efficiency cho Companion Skills cộng thẳng vào bài toán nhét 12 con, đúng theme reservation stack ở trên. Còn dòng damage thì dễ dính bẫy. Nó là "increased Damage" trơn, không có tiền tố "Allies ... deal" như Primate Idol ("Allies in your Presence deal 40% increased Damage"). Theo mod template POE2, "increased Damage" không subject thì cấp cho người cầm sceptre — tức damage của *mình*, mà build này mình gần như không tự đánh, nên 15%-mỗi-companion đó gần như vô dụng cho đàn. Trước khi đo trong client xác nhận nó có chạm companion hay không, đừng cắm Grold mong damage cho đàn — muốn ally-damage thì cắm Primate Idol, còn Grold chỉ đáng vì dòng Bonded reservation.

## Onslaught bằng ward-drain, không weapon-swap

Đây là engine skill-speed của đàn, và là chỗ build né được bug. Sceptre runeforge :wiki-link{url="https://www.poe2wiki.net/wiki/Warding_Rune_of_Bodyguards"} cho "Minions in your Presence have Onslaught while you are on Low Runic Ward" — Low Runic Ward là khi ward ≤35% max. Để giữ trạng thái đó liên tục, mình tự rút ward bằng skill của chính mình: sớm thì spam Hollow Shell, về sau dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Spear_Stab"} runeforge "cost an additional 20% of maximum Runic Ward" (Runic Confusion) — bấm một phát là ward về đáy, cả đàn ăn Onslaught một lúc.

:wiki-link{url="https://www.poe2wiki.net/wiki/Onslaught"} cấp companion "20% increased Skill Speed + 10% increased movement speed". Trong data 0.5 (poe2db) dòng Skill Speed này resolve thành `attack_speed_+%` cộng `base_cast_speed_+%`, nên với companion nó cộng **additive** cùng bucket increased attack speed, không phải một more-multiplier riêng — wiki ghi "Skill Speed" là tên gọi tắt, ground truth là attack/cast speed. (Frontmatter shared note ghi "Skill Speed là separate axis"; data poe2db cụ thể của buff Onslaught nói khác, ưu tiên poedb theo source hierarchy, log lại nếu client hiển thị ngược.)

Điểm khác bản carry: build *carry* đã có sẵn nguồn Onslaught rẻ hơn không đụng ward (buckler Reputation auto-parry, glove rune trên Marked target), nên ở đó loop ward-drain là thừa — đúng như [Runic Ward Onslaught Loop cho Minion](/mechanics/0-5-runic-ward-onslaught-loop) chốt. Nhưng bản zoo này *không* chạy Parry buckler hay Marks gloves và không weapon-swap, nên nó không có hai nguồn đó — ở đây ward-drain là nguồn Onslaught chính đáng, không phải lựa chọn tệ. Cái giá vẫn thật: giữ ward ≤35% suốt trận nghĩa là chạy lớp đệm 1-life gần rỗng đúng lúc cày boss — một survivability cost có thật trên build vốn đã mỏng máu.

Cần phân biệt cho rõ phần nào là bug phần nào không. Weapon-swap làm despawn companion là cơ chế *cố ý*: 0.5 còn chỉnh thứ tự để con minion mới bị gỡ trước khi đổi resource, tránh phí cooldown — GGG biết và đã sờ vào chỗ này. Cái sai thật nằm ở phần spirit desync: swap xong một mảnh pool spirit kẹt không dùng được tới khi đổi map. Build né được trigger đó vì không swap. Nhưng đừng coi là miễn nhiễm tuyệt đối — vẫn có report spirit bị xoá hẳn khi đeo hai Sylvan's Effigy cùng lúc và dùng một skill (nhãn "Refutation", tên này đọc trong client xác minh lại), và bug spirit-desync chưa được fix qua tới Hotfix 13. Thực hành an toàn: chạy một Effigy, đừng dual-wield, và liếc pool spirit sau mỗi lần đổi map khi mới vào league.

## Cắm Loyalty cả đàn, và Romira's là upgrade pilot bỏ quên

Loyalty là support cho companion: "10% of Damage from Hits is taken from Supported Companion's Life before you", đổi lại con mang nó "30% less maximum Life". Dòng redirect tính theo từng con, nên cắm lên cả 12 con thì 12 lần 10% đó chia phần lớn mỗi cú hit về máu của đàn trước khi tới mình. Char thật cắm Loyalty trên đúng cả 12 companion — đây là toàn bộ survival model: companion eat damage, body block, evasion, còn pool máu người chơi chỉ là afterthought.

Và đây là chỗ cải thiện thật. Pilot chạy **Loyalty base trên mọi con**, chưa nâng lên :wiki-link{url="https://www.poe2wiki.net/wiki/Romira's_Requital"} (Lineage, Requires Level 65) — bản này cũng "10% of Damage from Hits taken from Companion's Life before you" nhưng thêm "Recoup 200% of Damage taken by Supported Minions this way as Life". Romira's với Loyalty chung Category nên một skill chỉ cắm một trong hai; swap Loyalty → Romira's trên đám companion lì (Bear, các con tanky) biến phần damage redirect thành recovery thật cho mình. Lưu ý đúng bản chất nó: recoup hồi qua vài giây, nó vá *sustain* chứ không cứu được cú one-shot kéo mình từ full về 0 — nên nó là upgrade thứ hai, không phải cái chặn chết chính.

## Forgotten Warden cho companion tự quăng primal skill

Char thật chạy body armour :wiki-link{url="https://www.poe2wiki.net/wiki/Forgotten_Warden"} (base Primal Markings, Req 70, 67 Dex 67 Int). Nó cho +200-300% Evasion và ES, "Companions have (30-50)% increased maximum Life" (đúng thứ đám cắm Loyalty/Romira's cần để không vỡ), và một dòng redirect built-in độc lập với Loyalty support: "(10-15)% of Damage from Deflected Hits is taken from Damageable Companion's Life before you" — cộng thêm một tầng trên build deflection cao.

Nó còn grant "Level 16 Spirit Vessel": "Summons a Shapeshifting Spirit Vessel Companion that uses copies of socketed Bear, Werewolf, and Wyvern Skills", với "Spirit Vessel deals 20% more Damage per different socketed Skill". Đây chính là con buff-bot ở mục đàn — cắm nhiều loại skill primal khác nhau vào nó vừa cho nó tự quăng skill vừa tăng damage nó theo số loại. Đừng lẫn với The Sunken Vessel: cái đó là chest thủ thuần (armour/evasion, né projectile), không có dòng companion nào, trùng chữ "Vessel" thôi.

## Boss damage đến từ shred res, không từ một con carry

Bản này không có con Unique +level gánh single-target, nên boss damage là tổng của cả đàn nhân lên bằng res-shred chứ không phải burst một con. Ba nguồn cộng lại: một, cả 12 con cùng đập, Muster nhân chung theo số loại. Hai, gói shock+exposure của Winged Fiend và Brimstone Crab kéo res boss xuống — Lightning Exposure áp -lightning res, Overcharge đẩy shock magnitude lên ~50%, boss vừa shock vừa exposed thì cả đàn lên damage cùng lúc. Ba, Effigy cho companion +85-91% damage lên mục tiêu bị Mark, nên quăng :wiki-link{url="https://www.poe2wiki.net/wiki/Sniper's_Mark"} lên boss là cả đàn ăn. Con số char thật report ~12M một boss và 60k mỗi basic attack của Hyena Lord — đều là số quan sát, PoB2 không model companion nên không dựng lại được (`pob_coverage: PARTIAL`).

Muốn single-target cao hơn nữa thì có hướng ngược: bỏ một phần đàn, tame một con Unique carry (Zekoa qua :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"}) và dồn extra-crit + Parry weapon-swap snapshot vào nó — đó là cấu hình của [bản carry](/builds/huntress/0-5-spirit-walker-companion-carry), đổi lại phải sống chung với bug despawn khi weapon-swap. Bản zoo 12-con này chọn hướng kia: clear mượt + boss vừa đủ + né hẳn weapon-swap.

## Tree với leveling y hệt bản carry

Tree, ascendancy, leveling dùng chung cấu hình [bản carry](/builds/huntress/0-5-spirit-walker-companion-carry), chỉ khác gear cuối. Ascendancy vẫn Wild Protector, The Natural Order, :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha's_Balance"}, Idolatry. Leveling vẫn quất :wiki-link{url="https://www.poe2wiki.net/wiki/Twister"} qua campaign rồi pivot companion ở Act 3. Toàn bộ chi tiết tree, thứ tự lab, rotation leveling, capture-before-respec, Masters of the Atlas đã có ở bản carry — đọc nó trước rồi quay lại đây cho phần Effigy với reservation stack. Khác biệt thực hành duy nhất ở tree là dồn mạnh hơn cho reservation efficiency và lấy Idolatry sớm để mở slot reservation idol.

## Failure Modes

**1. Survivability mỏng là trần T15 (rủi ro số 1).** Life 1528 / ES 1397 ở Lv93 là pool giấy *có chủ ý* — thủ dựa hết vào companion eat damage, body block, evasion, pool người chơi là afterthought. Char thật cắm Loyalty đủ 12 con mà vẫn "no revive, cái gì cũng one-shot mình", không lên nổi trên T15. Lỗ cụ thể nhất là res CHƯA cap — pilot tự nhận lightning và chaos thiếu cả khi có resistor. One-shot là bài toán EHP-per-hit, và cap res là EHP nhân thật chống đúng cái đang giết. *Cap res TRƯỚC mọi min-max khác — đây là miếng vá #1. Sau đó mới swap Loyalty → Romira's trên con tanky để có recoup, và tiếp tục cày Life/ES. Hai swap này nới margin, không phá được trần — đừng kỳ vọng nó thành build endgame.*

**2. Spirit-capped, mất một con là tụt dây chuyền.** 12 con nhồi sát trần spirit, headroom ~0. Mất một con giữa trận không chỉ mất damage con đó mà tụt một nấc Muster cho cả đàn. *Đo lại khi vào league: con nào hay chết, có cần Romira's/Forgotten-Warden buff max-life cho riêng nó không.*

**3. Gear floor rất cao.** Cốt lõi là Sylvan's Effigy (drop Ritual pinnacle, không chance) — không có nó là không có đàn. Cộng thêm Undying Hate (Timeless Jewel roll đúng seed), Forgotten Warden Req 70, belt Genesis-Tree craft, và một đống reservation efficiency rải gear. Đây là build pivot late-game sau khi đã có shell carry chạy, không phải league-start. *Trước khi đủ đồ thì chơi [bản carry](/builds/huntress/0-5-spirit-walker-companion-carry).*

**4. Ward-drain ăn vào lớp đệm cứu mạng.** Giữ Onslaught up = giữ Runic Ward ≤35% suốt trận = chạy lớp đệm 1-life gần rỗng đúng lúc boss cày DPS dài cần nó đầy nhất. Trên build đã mỏng máu đây là cost thật, không phải buff free. *Map "cannot regenerate"/ward-off mod hoặc boss phase burst sẽ phơi ra điểm này — đo uptime Onslaught vs an toàn ward khi vào league.*

**5. Companion scaling dễ ăn nerf.** GGG cắt Infernal Legion ~50% trong chính patch này — gem I và II từ 20% xuống 10% max-life-as-fire, gem III gỡ hẳn khỏi game. Companion damage và reservation efficiency là món hay bị sờ; cả engine Onslaught dựa Warding Rune of Bodyguards cũng là một dòng đơn lẻ. Đỡ một chút là tới hết Hotfix 13 (03/06) chưa có nerf nào nhắm thẳng companion hay reservation efficiency, và chiều ngược lại 0.5 còn buff: Trusted Kinship đổi sang 30% more reservation efficiency cho companion, Bear Idol Bonded lên 12%, Idol of Grold thêm Bonded reservation efficiency companion ở slot sceptre — cả khối thiết kế đang đẩy về hướng nuôi nhiều companion. *Vẫn theo dõi hotfix; build có sẵn đường lui về bản carry.*

## Tóm lại

Tame Beast Companion Zoo Spirit Walker field 12 companion cùng lúc, mỗi con cắm Muster cho more-multiplier chung và Loyalty chia damage, chia vai rõ: Hyena Lord clear, hai con phys-hit gánh single-target, Winged Fiend + Brimstone Crab shred res boss bằng shock+exposure, Spirit Vessel buff war cry. Engine skill-speed là Onslaught qua ward-drain (Hollow Shell / Spear Stab giữ ward thấp), nên build không weapon-swap và né hẳn bug despawn — đó là lý do nó chạy thật tới Lv93 T15. Lên được 12 con là nhờ stack reservation efficiency (Trusted Kinship, Idolatry + idol, belt/helmet craft, Wolf-Pack-on-amulet, Undying Hate, Lord of Horrors anoint) sau khi Effigy gỡ trần số lượng. Trần thật là survivability: pool người chơi mỏng có chủ ý, T15 là mức char thật dừng. Cải thiện so với pilot là hai miếng vá grounded — cap res (chặn one-shot) rồi Romira's trên con tanky (recoup sustain) — không phá trần nhưng nới margin. Mọi con số damage/thủ là quan sát từ char thật, PoB2 chưa model companion nên đo trong client khi vào league.

## Relationships

- **derived_from** [Tame Beast Companion Carry Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-carry) — bản carry gốc; bản zoo dùng nguyên tree/ascendancy/leveling của nó, đổi sang Sylvan's Effigy + reservation stack + ward-Onslaught thay vì rare scepter +3 và Parry weapon-swap.
- **alternative_to** [Spirit Walker Unique Beast Apex](/builds/huntress/0-5-spirit-walker-unique-beast-apex) — hướng ngược lại: dồn hết vào một Unique Beast cho trần single-target, thay vì chia damage cho cả đàn.
- **related** [Twister Huntress Starter](/builds/huntress/0-5-twister-huntress-starter) — shell leveling chung của mọi nhánh Spirit Walker trước khi pivot companion.
- **related_mechanics** [Runic Ward Onslaught Loop cho Minion](/mechanics/0-5-runic-ward-onslaught-loop) — engine skill-speed của bản zoo: ward-drain giữ Low Runic Ward cho Warding Rune of Bodyguards cấp Onslaught; verdict ALT-PATH ở đó scope cho bản carry (vốn có parry/marks rẻ hơn), còn bản zoo no-weapon-swap thì đây là nguồn chính đáng.
- **related_mechanics** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — cơ chế tame và companion scaling nền tảng.
- **related_mechanics** [Tame Beast Damage Scaling](/mechanics/0-5-tame-beast-damage-scaling) — chuỗi nhân damage companion (Muster, extra crits, exposure, gem level).
- **references** [Unique Items Mới & Meta Shift](/mechanics/0-5-new-unique-items) — Sylvan's Effigy và trục companion item của 0.5.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — league 0.5 Runes of Aldur, nơi companion/idol/Runeforging được giới thiệu.

## Resources

- [Don't play my builds — 12 companions showcase](https://www.youtube.com/watch?v=WKiXSGdgaus) — day-6 field log của char `zoooooooooplis` (Lv93): 12-companion no-weapon-swap, reservation-efficiency stack lên 12 con, Hyena Lord clear, Winged Fiend exposure/shock package, Onslaught qua Hollow Shell ward-drain, amulet-craft money loop. Nguồn chính của bản này.
- [poe.ninja — zoooooooooplis](https://poe.ninja/poe2/profile/supermonkey12345123-7112/runesofaldur/character/zoooooooooplis) — snapshot live char (gear, socketed support map, passive). Stat Lv93: Life 1528 / ES 1397 / Evasion 2298 / Armour 770 / Spirit 260; export OAuth 2026-06-04.
- [CaptainLance9 — Zoomancer Spirit Walker Setup](https://www.youtube.com/watch?v=7xaY6l3J7zE) — day-4 field log của variant Zekoa Unique-carry + Parry weapon-swap (kèm bug despawn) — nguồn cho hướng single-target cao hơn ở [bản carry](/builds/huntress/0-5-spirit-walker-companion-carry).
- [pobarchives — Spirit Walker Zoo Build](https://pobarchives.com/build/NHedkKLw) — char Lv87 day-5 chạy đúng combo Sylvan's Effigy + Forgotten Warden, corroborate archetype độc lập với `zoooooooooplis`; gem-link Azmerian Wolf (Rapid Attacks + Muster + Rage + Bidding + Kurgal's Leash, tận dụng skill Lunge command được của Wolf).
- [12-companion zoo — variant wolf-heavy](https://www.youtube.com/watch?v=aUzQ7-NpiP0) — một config zoo khác (7 Wolf-Pack sói + Azmerian + 2 Spirit Bear + 2 monkey + healer). Đáng học cách dựng nhưng nhân bản sói là kém tối ưu Muster: nếu cả bầy sói đếm chung một loại thì chỉ cho một nấc Muster, thua hẳn đàn toàn loại khác nhau.
- poe2db.tw — Sylvan's Effigy (endgame Spirit 154 / Req 78, grant L18 Discipline + Azmerian Wolf), Forgotten Warden (base Primal Markings, grant Spirit Vessel), Warding Rune of Bodyguards, buff Onslaught (`attack_speed_+%` + `base_cast_speed_+%`), bảng reservation Tame Beast (live fetch 2026-06-04).
- `data/release-notes/Version_0.5.0.md` — patch note GGG xác nhận verbatim: Trusted Kinship 30% more / 20% less reservation efficiency, Idol of Grold sceptre slot (main "15% increased Damage per different Companion in Presence" — dòng damage trơn wielder-side; Bonded "15% Reservation Efficiency of Companion Skills"), Bear Idol Bonded 12% reservation efficiency companion trong helmet, weapon-swap gỡ minion mới trước (cơ chế cố ý), Infernal Legion cắt 20%→10%.

## Changelog

### 2026-06-04 — deep-research verify pass (ground-truth vs patch note + poedb)

- **Idol of Grold: dòng damage là bẫy, dòng Bonded mới dùng.** Datamine poe2db sceptre slot cho main "15% increased Damage per each different Companion in your Presence" + Bonded "15% increased Reservation Efficiency of Companion Skills". Dòng damage trơn (không "Allies deal" như Primate Idol) nên theo template cấp cho người cầm sceptre, gần vô dụng cho build companion — đo in-client trước khi tin. Giá trị thật của Grold là dòng Bonded reservation efficiency. Lưu ý dòng Bonded glory generation là của slot Boots, không phải sceptre.
- **Sửa stat Sylvan's Effigy về bản endgame.** Trước ghi Spirit 100 / Req 6 (bản base yếu nhất); bản thật đeo là Req 78, Spirit 154, grant L18 Discipline + Azmerian Wolf + 64 Life regen. Roll range (54-63% Spirit, 85-91% Mark) giữ nguyên, khớp wiki.
- **Soft acquisition.** "Drop từ Ritual pinnacle boss" hạ xuống "cộng đồng report Ritual, patch note không ghi nguồn drop — thực tế gom qua trade".
- **Làm rõ bug weapon-swap.** Patch note line 321 cho thấy despawn-on-swap là cơ chế cố ý (GGG còn chỉnh thứ tự gỡ minion mới trước); bug thật là spirit desync. Build né trigger nhưng không miễn nhiễm tuyệt đối — có report dual-Sylvan's + skill "Refutation" xoá spirit, chưa fix qua Hotfix 13. Hạ "không bao giờ xảy ra" → "né được trigger chính".
- **Bear Idol helmet về số đúng:** Bonded 12% reservation efficiency companion (0.5 nâng từ 10%), thay "8%" cũ.
- **Corroborate archetype:** thêm pobarchives Lv87 (Sylvan's + Forgotten Warden, day-5) + một creator video zoo wolf-heavy — viability giờ được nhiều pilot độc lập xác nhận, không chỉ một char.
- **Provenance:** mọi con số fold pass này đối chiếu verbatim với patch note `Version_0.5.0.md` + poedb datamine (live fetch Idol of Grold 2026-06-04), không quote từ guide hay creator.

### 2026-06-04 — fold bản 12-companion no-weapon-swap (char thật Lv93)

- **Reframe spine từ theory-craft sang build chạy thật.** Seed: "Don't play my builds — 12 companions showcase" (WKiXSGdgaus, day-6) + export OAuth char `zoooooooooplis` Lv93. Build mới là 12-companion no-weapon-swap, không có Zekoa Unique carry; damage chia cả đàn + shred res.
- **Verify socket map verbatim từ export:** cả 12 con cắm Loyalty ("10% of Damage from Hits taken from Companion's Life"); Muster ("7% more per different Reviving type") gần như mọi con; gói exposure/shock trên Winged Fiend + Brimstone Crab (Lightning Exposure + Potent Exposure + Overcharge); body armour = Forgotten Warden (grant Spirit Vessel L16). Reservation stack: Trusted Kinship 30% more, Idolatry + idols, belt Genesis-Tree craft, helmet 8%, Wolf-Pack-on-amulet grant, Undying Hate (Timeless Jewel), anoint Lord of Horrors.
- **Demote bug weapon-swap despawn xuống caveat của variant carry.** Bản zoo này lấy Onslaught từ ward-drain (Hollow Shell / Spear Stab + Runic Confusion), không weapon-swap, nên bug không xảy ra. Đây là khác biệt làm nó chạy được — không còn là "bản nghịch kẹt bug".
- **Onslaught = additive attack/cast speed (poe2db), không phải multiplicative.** Buff Onslaught resolve thành `attack_speed_+%` + `base_cast_speed_+%`. Với bản zoo no-parry/no-marks thì ward-drain là nguồn Onslaught chính đáng — scope lại verdict ALT-PATH của mechanic doc cho riêng bản carry. Conflict với shared-note "Skill Speed separate axis" ghi lại theo source hierarchy (ưu tiên poedb).
- **Confidence LOW → MEDIUM:** viability field-test bởi một creator tới Lv93 T15, archetype được corroborate độc lập với CaptainLance9. Số DPS/thủ vẫn là quan sát (PoB2 không model companion → `pob_coverage: PARTIAL`); survivability T15-ceiling giữ foreground.
- **Hai miếng vá thủ đề xuất (pilot để ngỏ):** cap res = #1 chống one-shot (EHP-per-hit); Romira's Requital thay Loyalty base trên con tanky = #2 recoup sustain. Cả hai nới margin, không phá trần.
