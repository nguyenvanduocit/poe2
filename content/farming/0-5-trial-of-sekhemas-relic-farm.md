---
template: templates/farming-template.md
document_type: farming-strategy
title: Trial of the Sekhemas Relic và Cache Farm
status: active
created: '2026-06-16'
updated: '2026-06-23'
strategy_tier: S
investment_tier: Medium
league: '0.5'
patch: 0.5.2
league_phase: Mid
confidence_level: Medium
---

# Trial of the Sekhemas Relic và Cache Farm

:wiki-link{url="https://www.poe2wiki.net/wiki/The_Trial_of_the_Sekhemas"} là dungeon roguelite bốn tầng ba mươi hai phòng, mở bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Djinn_Barya"} và chạy bằng thanh :wiki-link{url="https://www.poe2wiki.net/wiki/Honour"} thay cho máu thật. Tiền về hai tầng tách hẳn nhau: nền đều từ cache reward room sau mỗi boss tầng (currency, waystone, jewel, relic), và jackpot từ Zarokh tầng bốn (unique relic + Zarokh's Reliquary Key ~74 div). Tier S đáy — drop đều nhưng đòi build chuyên sống nổi ba mươi hai phòng ~10 phút/run; tính đến 2026-06-16, nền cache ~2-4 div/run, nền chưa tính jackpot là ~10-25 div/giờ.

## Strategy Overview

Phần lớn giá trị không rải trên sàn từng phòng mà nằm trong **cache reward room** mở bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Bronze_Key"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Silver_Key"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Gold_Key"}. Cache nhả Arcanist currency, Cartographer waystone, jewel (Royal, Time-Lost, Grand Spectrum), relic, và gear. Tầng bốn cộng thêm Zarokh — boss duy nhất nhả unique relic và Zarokh's Reliquary Key.

Honour pool bằng Life + :wiki-link{url="https://www.poe2wiki.net/wiki/Energy_Shield"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} lúc bắt đầu run (cộng thêm Mana nếu chạy :wiki-link{url="https://www.poe2wiki.net/wiki/Mind_over_Matter"}); Honour về 0 là fail run ngay, không mất experience. Fail ở tầng ba là mất gần như toàn bộ giá trị đã tích vì tiền dồn về cuối. Build thủ tốt giữ được Honour thì dồn Sacred Water sang key ở Keth Forge cuối tầng; build thủ yếu phải đốt water hồi Honour nên ra ít cache hơn — cùng một run, build khỏe thắng kép.

## Setup

### Build Requirements

Pool Honour scale thẳng theo Life + ES + Runic Ward — build dày EHP tự lợi; build CI ES cao cũng tốt. Cận chiến có thưởng ngầm **35% less Honour damage khi đứng sát quái**, nên melee và khoảng cách ngắn dễ sống hơn ranged. Mục tiêu: cap **Honour Resistance 75%** qua relic và EHP đủ để một đòn lỡ không xóa nửa thanh Honour. Zarokh tầng bốn đòi thêm movement speed — pha time-stop trừ Honour nặng (trước 0.3.0 là auto-fail) nếu không gom xong hourglass trước khi đồng hồ quay đủ vòng.

### Relic Altar

Altar mười tám ô, sáu ô mở sẵn, mười hai ô mở dần khi hoàn thành từng tầng. Relic cắm trước khi start mới tính; relic nhặt trong run để dành run sau. Ưu tiên mod theo thứ tự:

- **+% Honour Resistance** tới cap 75% — số một, mọi thứ khác xếp sau.
- **% increased maximum Honour** nới pool chịu đòn lỡ.
- Cụm key: **% increased quantity of Keys dropped by Monsters**, **When you gain a Key, X% chance to gain another**, **% chance for each Key to upgrade on completing a Floor** — ba mod này quyết định số cache mở được cuối run.
- **% increased quantity of Relics dropped by Monsters** để gom kho relic reforge.
- Sacred Water (double water từ quái, fountain, gain on room clear) nuôi boon lẫn convert key.
- QoL: movement speed, dodge roll distance, reveal extra room.

Relic non-unique reforge ba-thành-một cùng base ở :wiki-link{url="https://www.poe2wiki.net/wiki/Reforging_Bench"} (Tapestry Relic không áp dụng), hoặc craft bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Augmentation"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Annulment"} để ép dòng honour-res/key. Reforging Bench ở ngay entrance từ patch 0.5, làm được giữa các run không cần về town.

### Keys

Mở run bằng Djinn Barya area level 75+ cho đủ bốn tầng — key thấp hơn chốt trần thưởng ở tầng một tới ba, không chạm Zarokh. Key trade được, tính đến 2026-06-16 giá vài ex tới dưới 1 div. Mua theo lô lúc rẻ vì đó là chi phí đầu vào lớn duy nhất.

## Gameplay

Coi thanh Honour là HP bar thật: đứng sát quái để ăn 35% less Honour damage, dodge-roll xuyên trap vì cả animation miễn nhiễm. Chọn đường trên trial map qua phòng cache và phòng key khi Honour còn khỏe; né phòng viền tím (afflicted) nếu tránh được. Boon ưu tiên ba nhóm: thủ (Lustrous Lacquer 50% more Defences, Fright Mask monster 20% less damage, Glowing Orb phao cứu mạng dưới 20% Life), hồi Honour (Earned Honour mỗi phòng xong, Adrenaline Vial 30% vào boss room), và key (Mirror of Fortune nhân đôi key kế tiếp).

Boss mỗi tầng cố định: :wiki-link{url="https://www.poe2wiki.net/wiki/Rattlecage,_the_Earthbreaker"} tầng một né AoE mở màn; tầng hai Hadi + Rafiq phải đánh đều hai con hoặc kill con hai nhanh sau con một (để lâu hồi đầy máu, coi chừng nổ nguyên tố lúc mỗi con chết); :wiki-link{url="https://www.poe2wiki.net/wiki/Ashar,_the_Sand_Mother"} tầng ba lờ Balbala giục nhảy platform (bẫy) và tránh quicksand; :wiki-link{url="https://www.poe2wiki.net/wiki/Zarokh,_the_Temporal"} tầng bốn sprint gom hourglass trước khi đồng hồ quay đủ vòng.

Reward room sau mỗi boss: mở hết cache bằng key, **convert toàn bộ Sacred Water dư ở Keth Forge thành key** mở thêm cache, rồi ghé Balbala mua relic/boon. Đừng mở cửa tầng kế trước khi vét xong — mở cửa khóa luôn merchant phòng đó.

## Loot Breakdown & Economic Analysis

Giá poe2scout ngày 2026-06-16, 1 div = 182 ex.

Profit/run = (cache floor + relic resale + zarokh jackpot) − key cost − relic setup amortize.

**Jewel cache — nền volume cao nhất nhưng đang nguội.** Cache nhả :wiki-link{url="https://www.poe2wiki.net/wiki/Time-Lost_Ruby"}, Timeless Jewel và :wiki-link{url="https://www.poe2wiki.net/wiki/Grand_Spectrum_(Ruby)"}. Giá 2026-06-16: Against the Darkness Time-Lost Diamond ~363 ex (~2 div, volume 3.476, Δ7d −31%), Undying Hate Timeless Jewel ~120 ex (~0,66 div, volume 4.512, Δ7d −51%), Heroic Tragedy Timeless Jewel ~55 ex (~0,3 div, volume 10.985), Grand Spectrum Ruby ~40 ex (~0,22 div, volume 1.638, Δ7d −64%). Volume cao bán được ngay, nhưng cả bốn rớt giá mạnh trong tuần.

**Zarokh jackpot — leo giá nhưng thưa.** The Last Flame Incense Relic ~290.662 ex (~1.597 div, volume 46, Δ7d +137%). The Desperate Alliance Vase Relic ~1.503 ex (~8,3 div, volume 368). **Zarokh's Reliquary Key: Against the Darkness ~13.470 ex (~74 div, volume 7, Δ7d +87%)** — dùng key này mở lại Zarokh trong reliquary farm guaranteed unique relic + Time-Lost Diamond, và bản thân key trade được giá div. Cả ba volume thấp, phương sai khổng lồ.

**Relic resale — tầng đệm.** Gom ba relic cùng base reforge thành một relic tốt hơn; dòng Honour Resistance cao hoặc cụm key bán được vài tới vài chục ex. Tự nuôi kho relic nên đầu tư setup gần như amortize về dài hạn.

Một run bốn tầng stack key đủ cache ra nền **~2-4 div** (currency + waystone + jewel + relic reforge), tính đến 2026-06-16. Trừ Djinn Barya 75+ (vài ex tới <1 div), lãi ròng nền ~2-4 div/run. Build tune tốt xong ~8-12 phút (~5-7 run/giờ) → **~10-25 div/giờ chưa tính jackpot**; jackpot Zarokh kéo trung bình lên nhưng không đều.

## Failure Modes

- **Nền jewel-cache đang nguội thật.** Cả bốn món chủ lực rớt 31-64% trong bảy ngày tới 2026-06-16; giá trị trôi từ tầng nền sang tầng jackpot Zarokh (đang +87-137%). Sekhemas càng về sau càng phụ thuộc cú hên chứ không còn là máy in đều.
- **Build floor gate cả run.** Fail trước tầng bốn mất nguyên run — giá trị back-loaded, build dưới ngưỡng thủ không gánh nổi ba mươi hai phòng. Sekhemas là S cho build khỏe, bẫy đốt key cho build yếu.
- **Zarokh time-stop one-shot build chậm.** Đúng con boss có tiền nhất giết oan build thiếu movement speed. Bù movement speed qua boon/relic trước khi farm key bốn tầng.
- **Phương sai jackpot tàn nhẫn.** Reliquary Key volume 7 và The Last Flame volume 46 trên toàn market — chạy hàng chục run mới thấy một cái. Coi jackpot như xổ số, đừng tính vào kỳ vọng mỗi giờ.
- **Affliction brick run.** Major Affliction như Corrosive Concoction xóa defences, Branded Balbalakh cấm hồi Honour, Orb of Negation vô hiệu relic non-unique. Boon Dekhara's Necklace và né phòng viền tím giảm rủi ro nhưng không xóa hẳn.
- **Patch sensitivity.** GGG có lịch sử nerf đúng farm lãi nhất giữa league; giá jewel-cache đang tự nén sẵn. Nerf droprate cache hoặc key generation là cắt thẳng dây chuyền chính.

## Version History

- **0.5.2** — Turret fireball fix. Reforging Bench đã ở entrance từ 0.5.0.
- **0.5.0** — Runic Ward cộng vào Honour pool (buff trực tiếp EHP dày → Honour to hơn so với patch trước); Reforging Bench dời về ngay entrance.
- **2026-06-16** — Initial. Giá pull live poe2scout (1 div = 182 ex): Zarokh's Reliquary Key ~13.470 ex, The Last Flame ~290.662 ex, The Desperate Alliance ~1.503 ex, jewel cache volume cao Δ7d −31% tới −64%. Cơ chế verify từ wiki mirror `data/wiki/Trial_of_the_Sekhemas.md` + relic mod pool `List_of_modifiers_for_medium_relics`. Throughput là quan sát kinh tế chung, chưa phải sample cá nhân — log số run, cache mở, jewel + Reliquary Key bán/giờ để thay bằng số của chính mình.

## Relationships

- **related_mechanics** [Farming strategy tier list](/guides/0-5-farming-strategy-tier-list) — Sekhemas xếp đáy S; doc này là bản farm chi tiết của entry đó.
- **competes_with** [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm) — farm map không đồng hồ, tha thứ build chậm, thu nhập đều hơn nhưng không nhả cú drop to kiểu Reliquary Key.
- **competes_with** [Breach Rare Juice Farm](/farming/0-5-breach-rare-juice-farm) — currency density cao trên atlas map, đối trọng nền-đều với jackpot-variance của Sekhemas.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — league system 0.5 thêm Runic Ward vào Honour pool và rewrite endgame.
