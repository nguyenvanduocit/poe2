---
template: templates/guide-template.md
document_type: guide
title: Ocean Exploring Grand Expedition Farm
description: Cheatsheet setup Ocean Exploring 0.5.3 — waystone, tablet, atlas, master, và cách chạy đảo thường vs đảo lớn.
status: published
author: duocnv
created: '2026-06-10'
updated: '2026-07-14'
league: '0.5'
patch: 0.5.3
guide_type: endgame-content
strategy_tier: S
investment_tier: Variable
league_phase: Mid
confidence_level: High
tags:
  - poe2
  - 0-5
  - return-of-the-ancients
  - ocean-exploring
  - expedition
  - grand-expedition
  - logbook
  - precursor-tablet
  - aldur-saga
  - farming
  - endgame
---

# Ocean Exploring Grand Expedition Farm

## TL;DR

- Waystone roll đúng hai dòng: increased Rarity of Items found in this Area + increased Monster Effectiveness. Bỏ pack/quantity, runic count đến từ marker.
- Đảo thường = nuôi logbook: waystone T15, tablet of Knowledge cắm tower, subtree Explosive, ép Desert. EV ~2-3 div, gần như free.
- Đảo lớn = juice: đốt logbook mở ocean, tiền nằm ở mod trên logbook (5+ rune slot, runic marker, faction leader) + Aldur's Saga; waystone T16. EV 10-20 div, đỉnh 30+.
- Tiền to nhất sau 0.5.3 là ground loot runic monster (Runic Modifier ×2), trên cả reward remnant và chest.
- Nổ Power/rarity SỚM cho cả chain thừa hưởng; remnant 7-10 slot nổ CUỐI.
- Aldur's Saga ~30 div chỉ đốt khi section ≥4 Grand Expedition (lý tưởng 5-6, open water).
- Build chưa cứng: farm pathing + bán saga, chain ngắn 3-4 remnant, chạy Doryani.

Endgame Expedition của [Return of the Ancients](/guides/return-of-the-ancients), Tier S theo [farming tier list](/guides/0-5-farming-strategy-tier-list).

## Waystone roll gì

Mỗi dòng mod trên :wiki-link{url="https://www.poe2wiki.net/wiki/Waystone"} ở 0.5 đi kèm một downside cho quái cộng một upside thuộc năm nhóm: Item Rarity, Pack Size, Monster Rarity, Monster Effectiveness, Waystone Drop Chance. Với ocean thì chỉ hai nhóm chạm tới tiền expedition, nên chaos roll dồn về đúng hai dòng đó, giống nhau cho cả đảo thường lẫn đảo lớn:

- **increased Rarity of Items found in this Area** — ưu tiên số một. Sau 0.5.3 tiền lớn là ground loot của :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Monster"} (mỗi Runic Modifier nhân đôi drop), và Item Rarity của area nhân thẳng lên đống đó — không dòng nào đổi EV nhiều bằng.
- **increased Monster Effectiveness** — nhân cả reward lẫn độ nguy hiểm của quái expedition. Nổ remnant vốn đã đẩy quái vừa mạnh vừa giàu hơn theo cùng một stat, dòng này chồng thêm sàn.

Pack Size và Monster Rarity bỏ qua: số Runic Monster đến từ marker — tablet *of Ancient Fiends*, node atlas, và mod runic-marker trên chính logbook — chứ không đến từ pack size của area. Thêm pack chỉ thêm quái thường và thêm nguy hiểm cho bộ companion mỏng. Cặp Omen of Chaotic Rarity/Monsters ép reroll giữ rarity + effectiveness, loại quantity/pack.

Base T15 (area level 79). Cần thêm slot mod thì corrupt T15 → T16 hoặc dùng bản Irradiated — mỗi mod thêm là một dòng rarity/effectiveness nữa. Trần remnant slot của section scale theo Waystone Tier nên T15+ vừa mở trần loot vừa mở trần mod. Downside của waystone chỉ là mod tấn công/phòng thủ của quái, chọn dòng build tank được; brick thật nằm ở prefix của remnant (danh sách killer ở cheatsheet dưới), không phải ở waystone.

## Tablet roll gì

Tablet ở đây là :wiki-link{url="https://www.poe2wiki.net/wiki/Expedition_Precursor_Tablet"} cắm vào Lost Tower — nó thêm một Kalguuran Expedition vào mọi map trong bán kính tower (10 lần dùng). Đây là engine nuôi logbook, roll theo đúng dòng mod search được (affix name trong ngoặc):

- **(15–30)% increased Quantity of Expedition Logbooks dropped by Runic Monsters in Map** (*of Knowledge*) — dòng số một, nguồn sustain logbook để có cái mà đốt ở ocean.
- **(25–40)% increased number of Rare Expedition Monsters in Map** (*of Ancient Fiends*) — nhiều rare = nhiều runic marker = nhiều loot lẫn logbook.
- **(15–30)% increased quantity of Expedition Artifacts dropped by Monsters in Map** (*of Verisium*) — tiền vendor, đổi ra Liquid Verisium ở Farrow.
- **Expeditions in Map have +(1–2) Remnant** (*of the Writings*) — thêm chỗ reward + chỗ craft rune.
- **(12–18)% increased Effect of Expedition Remnants in Map** (*of Relics*) — risk-reward, chỉ lấy khi build gánh nổi remnant mạnh.
- **(15–30)% increased Expedition Explosive Radius / Placement Range in Map** (*of the Demolition / of the Detonator*) — QoL clear, lấy sau cùng.

Bản 2 mod thường đủ nuôi logbook. Muốn juice mạnh thì Irradiated thêm một slot để ghép *of Knowledge* + *of Ancient Fiends* cùng lúc; nâng tablet lên 4 mod qua node Reverse Transcription + Partial Translation trên atlas — chi tiết ở [sustain map endgame](/guides/0-5-endgame-mapping-sustain).

## Atlas passive spec gì

Subtree Expedition = 8 point, spec một lần:

- **Logbook Chance ×8** — mỗi node +5% Quantity logbook từ runic monster. Nền sustain.
- **Cultivate the Sea** → chọn **Desert**: rarity đẩy runic monster lên Rare → nhiều logbook hơn.
- **Steady Development** → fork: **Explosive** (layout xấu, clear nhanh) hoặc **Remnant** (thêm reward slot).
- **Double or Nothing** → 25% remnant thêm 1 Runic Modifier.
- **Buried Ambition** → Verisium Sentries; rune của Sentry + Remnant buff luôn quái expedition.
- **The Quest Continues** → Grand Expedition tối đa 3 mod + +1 area level.
- **Strategic Advantage** → Explosive chỉ chờ 50% quái chết; runic monster spawn thiếu 20% life.
- **Calculated Investment** → chọn 1: 25% remnant tính như có Power Rune / +XP / +Quantity per runic mod.

## Master chọn ai

- **Jado** — build cứng. Chết 1 lần mất nguyên map + saga (Grand Expedition không respawn).
- **Doryani** — hay chết: thêm 1 mạng, đổi bằng mất layer reroll remnant.

## Đảo thường (nuôi logbook)

- Setup: waystone T15 roll rarity + effectiveness, Expedition Precursor Tablet *of Knowledge* cắm tower, subtree nhánh Explosive, ép Desert.
- Nổ hết marker cờ đỏ đôi — runic monster là con duy nhất nhả :wiki-link{url="https://www.poe2wiki.net/wiki/Expedition_Logbook"} và rớt nhiều Verisium. Gom cả Verisium Sentry.
- Nhặt logbook, tablet, base i82.
- Build chưa cứng: chain ngắn 3-4 remnant.
- Cash out: Verisium → Liquid Verisium ở Farrow, bán logbook dư.

## Đảo lớn (Grand Expedition juiced)

Đốt logbook lên atlas mở ra Ocean Biome — cụm đảo Grand Expedition. Juice của section đến từ chính con logbook cộng Aldur's Saga, không phải từ tablet: logbook là một item rare, và affix của nó quyết định biome chứa gì.

- **Mod trên logbook là juice thật:** Verisium Remnant có sàn 5/6/7 rune slot, *Area contains increased Runic Monster Markers*, Faction Leader (Medved / Vorana / Uhtred / Olroth), *Verisium Remnants are Lucky*, tăng Artifact. Đây là các clue đọc ở tab Rumour trước khi tiêu.
- **Fish section trước:** ở Uncharted Waters, unequip rồi re-equip logbook để xáo clue + hé clue thứ tư ẩn. Bookmark mỗi đảo ngon — đại dương phình rất nhanh.
- **Đốt Aldur's Saga:** right-click như omen trước khi tiêu logbook, phủ thêm mod cho vùng Grand Expedition vừa mở và nâng sàn rune slot cả section. Chỉ khi section **≥4** Grand Expedition (lý tưởng 5-6, ưu tiên open water). ~30 div/map — đừng đốt section mỏng hay đảo boss.
- Từng đảo vẫn chạy bằng waystone T16 roll Monster Effectiveness + Rarity như trên; section juiced tự sinh lại saga từ remnant 7 slot.
- Scout layout một vòng → nổ theo thứ tự chain. Loot to thì port town trước khi nối tiếp.

## Nổ chain theo thứ tự nào

- Remnant nhiều rune nhất (7-10) = nổ **CUỐI** (loot bung ở đó).
- Nổ **Power/rarity/pack SỚM** → cả chain thừa hưởng.
- **5+ slot** luôn chạy; **4 slot** chỉ khi có rune tím; **3 slot** skip.
- Đọc prefix trước khi nối — brick build: immune đúng hệ damage, hits can't be evaded (evasion thuần), chaos pen khi chưa cap chaos res. 1 prefix brick đầu chain brick cả đoạn sau.
- Đặt explosive → về đầu chain → detonate; mỗi wave giết ngay, luôn di chuyển.

Bảng tra tablet/atlas/rumour + triage chain nổi trên game (PiP):

::expedition-cheatsheet
::

## Vòng boss săn Lineage Support

- Chạy riêng vòng boss để săn :wiki-link{url="https://www.poe2wiki.net/wiki/Vorana's_Siege"} ~16 div (đáng nhất) hoặc Olroth's Crest of the Sun cho pinnacle The Aberration.
- Styrn ở Tomb of the Fallen Knight luôn rớt một logbook — boss path không mất nhịp sustain.

## Kinh tế

Snapshot poe2scout 30/06, Divine ≈ 480 ex.

- Money: :wiki-link{url="https://www.poe2wiki.net/wiki/Aldur's_Saga"} ~30 div (thanh khoản dày), Aldur's Legacy ~200 div (remnant 10 slot), Vorana's Siege ~16 div, Expedition Logbook ~1 div.
- Verisium → Liquid Verisium ở Farrow, ~5.000 ≈ 1 div.
- EV/map: pathing ~2-3 div; saga juiced 10-20 div, đỉnh 30+, cá biệt vài trăm (remnant 10 slot).
- Variance tàn: cụm 5-6 map saga xui âm 40-50 div, cần ~100 map về trung bình.
- Remnant nhiều slot moi ra là đầu vào cho [vòng craft Verisium](/farming/0-5-remnant-runeforging-profit-loop).

## Rủi ro

- **Build floor brutal:** quái tới 14 mod, vài con bất tử tới khi dọn sạch wave. Chưa cứng thì skip remnant đắt nhất → mất phần lớn EV saga.
- **Jado chết 1 lần = mất nguyên map + saga ~30 div** (không respawn). Chưa cứng chạy Doryani.
- **Scorpion bất tử:** bắn minion ra chỗ không tới → điều kiện giết sạch minion không đạt, kẹt cả wave. Kẹt thì port section khác. Barren Atoll strongbox luôn lỗi — đừng nổ.
- **Giá saga lắc trong ngày** (30 → 36 div) — re-check trước mỗi lần mua.

## Version History

### Patch 0.5.3 (19/06/2026)

- Remnant tối đa scale theo Waystone Tier, đỉnh T15+. Chest rework, cap explosive 20→15.
- Runic Modifier reward buff x2 → ground loot thành nguồn thu chính.
- Styrn luôn rớt một logbook. Fix remnant spawn quái xuyên tường (immortal scorpion chưa fix).

### Patch 0.5.0 (29/05/2026)

- Logbook đổi thành Ocean Exploring: mở Ocean Biome trên atlas với nhiều đảo Grand Expedition cộng Faction Leader. Expedition Remnant đổi thành Verisium Remnant. Subtree atlas Expedition 8 point.

## Relationships

- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — Ocean Exploring là endgame Expedition của league này.
- **related** [Sustain map và setup atlas tree endgame](/guides/0-5-endgame-mapping-sustain) — node nâng tablet Rare và slot tablet theo số mod waystone.
- **synergizes_with** [Remnant Runeforging Profit Loop](/farming/0-5-remnant-runeforging-profit-loop) — remnant nhiều slot moi từ Grand Expedition là đầu vào cho vòng craft Verisium.
- **ranked_in** [Farming strategy tier list](/guides/0-5-farming-strategy-tier-list) — vị trí Tier S của Expedition.
