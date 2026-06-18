---
template: templates/farming-template.md
document_type: farming-strategy
title: Trial of the Sekhemas Relic và Cache Farm
status: active
created: '2026-06-16'
updated: '2026-06-16'
strategy_tier: S
investment_tier: Medium
league: '0.5'
patch: 0.5.2
league_phase: Mid
confidence_level: Medium
---

# Trial of the Sekhemas Relic và Cache Farm

:wiki-link{url="https://www.poe2wiki.net/wiki/The_Trial_of_the_Sekhemas"} là dungeon roguelite bốn tầng ba mươi hai phòng, mở bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Djinn_Barya"} và chạy bằng thanh :wiki-link{url="https://www.poe2wiki.net/wiki/Honour"} thay cho máu thật. Farm này ăn tiền ở hai tầng tách hẳn nhau: nền đều từ cache reward room sau mỗi boss tầng (currency, waystone, jewel, relic), và cú jackpot từ Zarokh ở tầng cuối (unique relic cùng Zarokh's Reliquary Key bán lại). Tier S nhưng nằm sát đáy — drop to khá đều, đổi lại đòi build chuyên sống nổi ba mươi hai phòng và xong một lần trong khoảng mười phút. Tính đến 2026-06-16, nền cache rơi vào quãng vài div mỗi run, còn jackpot thì Zarokh's Reliquary Key ~74 div và unique relic đỉnh The Last Flame ~1.597 div nhưng cực thưa. Ai có EHP cao, di chuyển nhanh, cap được Honour Resistance thì chạy ngon; build giấy đụng farm này là mất nguyên run vì thanh Honour cạn trước khi tới chỗ có tiền.

## Strategy Overview

Sekhemas làm ra tiền vì phần thưởng dồn về cuối và mở bằng **key chứ không phải kill-rate**. Phần lớn giá trị của một run không nằm rải trên sàn từng phòng, mà nằm trong **cache reward room** sau khi hạ boss mỗi tầng — và cache chỉ mở được bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Bronze_Key"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Silver_Key"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Gold_Key"}. Càng nhiều key thì càng mở được nhiều cache, đó là dây chuyền tiền chính. Cache nhả currency (Arcanist), waystone (Cartographer), jewel (Royal, Time-Lost, Gold Spectrum), relic, và gear. Tầng bốn cộng thêm Zarokh — boss duy nhất nhả unique relic và Zarokh's Reliquary Key.

Sống được tới đó hay không nằm hết ở thanh Honour. Honour pool bằng tổng max Life, :wiki-link{url="https://www.poe2wiki.net/wiki/Energy_Shield"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} lúc bắt đầu run — cộng cả max Mana nếu build chạy :wiki-link{url="https://www.poe2wiki.net/wiki/Mind_over_Matter"}. Mỗi đòn quái đánh trúng trừ một phần damage đó vào Honour; Honour về 0 là fail run ngay. Patch 0.5 thêm Runic Ward vào tổng Honour, nên build tank dày EHP tự có pool Honour to hơn — buff trực tiếp cho farm này so với trước.

Hai thứ điều khiển run nằm ngoài map: **Relic Altar** trước cửa và **Sacred Water** nhặt trong trial. Relic cắm lên Altar trước khi bấm start quyết định survivability và rate key của cả run; relic nhặt giữa run không có tác dụng cho run đó, để dành run sau. Sacred Water là currency nội bộ không trade được, dùng mua boon từ merchant, venerate shrine hồi Honour, hoặc convert thành key ở **Keth Forge** trong reward room — chính cầu nối water-thành-key này là chỗ một run khéo vắt thêm vài cache so với run vụng. Patch 0.5 dời :wiki-link{url="https://www.poe2wiki.net/wiki/Reforging_Bench"} về ngay entrance, nên reforge ba relic cùng base thành một relic xịn hơn làm ngay tại chỗ giữa các run, không phải về town.

Một điểm dễ chịu của Sekhemas: fail run **không tính là chết**, không mất experience. Rủi ro duy nhất khi build chưa đủ là mất cái key và mất thời gian, không sợ de-level. Nên cứ test ngưỡng build ở key rẻ trước khi đổ key đắt.

## Reward bị gate bởi cái gì

Khác hẳn [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm) — abyss không có đồng hồ, build chậm không mất gì — Sekhemas phạt thẳng build yếu vì giá trị bị dồn về tầng cuối và thanh Honour là một cái đồng hồ ngầm. Bốn gate, mỗi gate cắt một dòng tiền nếu bỏ qua.

**Gate một: thanh Honour gate cả run, và tiền nằm ở cuối.** Honour không hồi tự do — mỗi đòn ăn vào là mất, hồi lại tốn Sacred Water. Cache ngon nhất và Zarokh đều ở tầng bốn, nên fail ở tầng ba là mất gần như toàn bộ giá trị đã tích. Build EHP thấp hoặc không cap Honour Resistance không gánh nổi ba mươi hai phòng. Build floor thật của farm nằm ở chỗ này: không phải DPS yếu là hỏng, mà thủ yếu là hỏng. Đứng sát quái giảm tới 35% Honour damage mỗi đòn so với đứng xa, nên build cận chiến có lợi thế ngầm ở đây mà spreadsheet EHP không hiện ra.

**Gate hai: key gate cache reward room.** Phần lớn jewel, currency, waystone, unique relic nằm trong cache, mà cache mở bằng key. Không có key thì đi ngang qua đống loot mà không lấy được. Key đến từ bốn nguồn: rớt trong phòng, relic cộng quantity key, boon Mirror of Fortune nhân đôi key vừa nhặt, và convert Sacred Water dư ở Keth Forge. Một run stack key mở gấp hai gấp ba số cache so với run không để ý — khác biệt lớn nhất giữa người farm Sekhemas có lãi và người chỉ chạy cho qua nằm hết ở đó.

**Gate ba: Sacred Water gate cả boon lẫn key.** Water vừa nuôi survivability (mua boon thủ, venerate shrine hồi Honour) vừa quy ra key. Relic và boon nhân đôi water (Raincaller, Diverted River, Flooding Rivers) nuôi cả hai đầu. Quyết định khó nhất mỗi run là tiêu water vào hồi Honour hay để dành convert key cuối tầng — build thủ tốt giữ được Honour thì dồn water sang key, build thủ yếu phải đốt water hồi Honour nên ra ít cache hơn. Cùng một run, build khỏe thắng kép.

**Gate bốn: phải là key bốn tầng.** Chỉ :wiki-link{url="https://www.poe2wiki.net/wiki/Djinn_Barya"} area level 75+ mới mở đủ bốn tầng để chạm Zarokh — nguồn duy nhất của unique relic và Zarokh's Reliquary Key. Key area level thấp hơn chốt trần phần thưởng ở tầng một tới ba, không bao giờ thấy jackpot. Tới giai đoạn farm thì nhân vật đã ascend xong, nên bốn tầng giờ là farm thuần chứ không còn vì điểm ascendancy.

Tổng lại, cost-reward coupling của Sekhemas dốc ngược abyss: vốn key nhẹ nhưng run dễ về 0 nếu build thiếu thủ, và toàn bộ phần thưởng tích lũy bay hơi khi fail giữa chừng. Farm này thưởng build khỏe-nhanh kép và phạt build giấy hai lần — vừa fail run vừa phải đốt water cứu Honour làm hụt key.

## Setup

### Build Requirements

Gate cứng nhất là build, nên đặt nó trước cả relic. Build cần hai thứ: EHP đủ để pool Honour to và chịu được vài cú lỡ, cùng khả năng không-ăn-đòn — hoặc xóa rare nhanh để bớt số đòn, hoặc di chuyển/dodge tốt để né. Honour pool scale thẳng theo Life + ES + Runic Ward, nên build dày máu giáp vào đây tự lợi; build CI ES cao cũng tốt vì ES tính đủ vào pool. Cận chiến có thưởng ngầm 35% less Honour damage khi đứng sát quái, nên melee và build khoảng cách ngắn dễ sống hơn ranged đứng xa farm cả màn. Mục tiêu thực tế là cap **Honour Resistance 75%** qua relic và một pool EHP đủ để một đòn lỡ không xóa nửa thanh Honour. League-start build giấy chưa nên đụng key bốn tầng; test ở key một-hai tầng cho tới khi sống mượt rồi mới lên.

Riêng Zarokh tầng bốn đòi thêm di chuyển: pha time-stop của nó one-shot nếu không gom hết hourglass trước khi đồng hồ ma thuật quay đủ một vòng, nên build thiếu movement speed dễ chết oan ở đúng boss có tiền. Patch 0.3.0 đã hạ kèo — gom hụt hourglass giờ chỉ trừ Honour chứ không auto-fail — nhưng pha đó vẫn là chỗ giết build chậm nhất run.

### Relic Altar

Relic Altar có mười tám ô, sáu ô mở sẵn còn mười hai ô mở dần khi hoàn thành từng tầng (gồm hạ boss tầng). Relic cắm trước khi start mới tính; relic nhặt trong run để dành run sau. Altar là chỗ tune farm, ưu tiên mod theo thứ tự:

- **+% Honour Resistance** cho tới khi chạm cap 75% — dòng thủ số một, mọi thứ khác xếp sau nó.
- **% increased maximum Honour** nới pool để chịu lỡ đòn.
- Cụm cộng key: **% increased quantity of Keys dropped by Monsters**, **When you gain a Key, X% chance to gain another**, và **% chance for each Key to upgrade on completing a Floor** — engine cache nằm ở ba mod này, chúng quyết định số cache mở được cuối run.
- **% increased quantity of Relics dropped by Monsters** để gom kho relic, vừa có cái reforge vừa có cái bán.
- Cụm Sacred Water (double water từ quái, từ fountain, gain water khi xong phòng) nuôi cả boon lẫn convert key.
- QoL: increased movement speed, +mét dodge roll distance, "an additional room is revealed" cho dễ chọn đường né phòng afflicted.

Relic non-unique reforge ba-thành-một cùng base ở :wiki-link{url="https://www.poe2wiki.net/wiki/Reforging_Bench"} (trừ base Tapestry Relic), hoặc craft thẳng bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Augmentation"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Annulment"} để ép đúng dòng honour-res hoặc key. Mở Altar lần đầu được tặng một Urn Relic magic — đủ để khởi động, nhưng kho relic xịn phải tự farm lên.

### Keys

Mở run bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Djinn_Barya"} area level 75+ cho đủ bốn tầng. Key này trade được, và vì không lọt top giá fragment trên poe2scout (tính đến 2026-06-16) nên nó rẻ so với output — vài ex tới dưới một div tùy tier. Key area level thấp hơn để dành test build hoặc lấy điểm ascendancy lúc còn campaign, không dùng để farm. Mua key cao theo lô khi rẻ vì đó là chi phí đầu vào lớn duy nhất của farm.

## Gameplay

Vào trial, coi thanh Honour là HP bar thật sự — đứng sát quái để ăn 35% less Honour damage, và dodge-roll xuyên trap vì cả animation dodge là miễn nhiễm. Mỗi phòng xong mới chọn phòng kế qua trial map: map hiện objective, reward icon, và viền tím nếu phòng đó gây Affliction khi vào. Ưu tiên đường đi qua phòng cache và phòng key khi Honour còn khỏe, né phòng afflicted nếu tránh được; merchant chỉ ghé khi cần boon hoặc đang dư water.

Boon là thứ lái độ khó run. Ưu tiên ba nhóm: thủ (Lustrous Lacquer cho 50% more Defences, Fright Mask cho monster 20% less damage, Glowing Orb làm phao cứu mạng khi tụt dưới 20% Life), hồi Honour (Earned Honour hồi mỗi khi xong phòng, Adrenaline Vial hồi 30% khi vào boss room), và cache (Mirror of Fortune nhân đôi key kế tiếp). Major Boon đè được Minor Affliction — vd All-Seeing Eye mở full map vô hiệu mọi affliction giấu phòng. Maraketh Shrine tiêu 5 water đổi Honour; shrine Galai là loại tốt nhất, hồi 50% Honour kèm một boon và rửa một affliction.

Boss mỗi tầng cố định nên học pattern một lần là xong. :wiki-link{url="https://www.poe2wiki.net/wiki/Rattlecage,_the_Earthbreaker"} tầng một né cú nổ AoE lúc mở màn, đừng đứng sát lúc đầu. Tầng hai là Hadi cùng Rafiq — đánh đều hai con hoặc giết con hai thật nhanh sau con một, để lâu thì con còn lại hồi đầy máu, và coi chừng cú nổ nguyên tố lúc mỗi con chết trừ Honour. :wiki-link{url="https://www.poe2wiki.net/wiki/Ashar,_the_Sand_Mother"} tầng ba thì lờ tiếng Balbala giục nhảy lên platform vì đó là kích trap; tránh vũng quicksand làm chậm. :wiki-link{url="https://www.poe2wiki.net/wiki/Zarokh,_the_Temporal"} tầng bốn là pha time-stop — sprint gom hết hourglass trước khi đồng hồ quay đủ vòng, phần lớn đòn còn lại của nó né và dodge-roll được.

Reward room sau mỗi boss là chỗ chốt lời: mở hết cache bằng key đang có, rồi **convert toàn bộ Sacred Water dư ở Keth Forge thành key** để mở thêm cache thay vì để water chết theo run, cuối cùng ghé Balbala mua relic hoặc boon nếu còn dư. Đừng mở cửa sang tầng kế trước khi vét xong reward room vì mở cửa khóa luôn tương tác với merchant phòng đó.

## Loot Breakdown & Economic Analysis

Mô hình lãi tách hai tầng rõ rệt — nền đều và jackpot thưa:

$$
\text{profit/run} = \text{cache floor} + \text{relic resale} + \text{zarokh jackpot} - \text{key cost} - \text{relic setup}
$$

Trong đó:
- **cache floor** — Arcanist currency + Cartographer waystone + Jewel cache + Relic cache
- **relic resale** — relic non-unique rớt → reforge 3:1 → bán dòng honour-res/key tốt
- **zarokh jackpot** — unique relic + Zarokh's Reliquary Key, chỉ tầng bốn, phương sai cao
- **key cost** — Djinn Barya area level 75+
- **relic setup** — đầu tư honour-res + key-quantity relic, amortize qua nhiều run

Giá pull live từ poe2scout ngày 2026-06-16, quy đổi **1 :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"} = 182 :wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"}**.

**Jewel cache là nền có volume cao nhất nhưng đang nguội.** Cache jewel nhả :wiki-link{url="https://www.poe2wiki.net/wiki/Time-Lost_Ruby"} và các Timeless Jewel cùng :wiki-link{url="https://www.poe2wiki.net/wiki/Grand_Spectrum_(Ruby)"}. Tính đến 2026-06-16: Against the Darkness Time-Lost Diamond ~363 ex (~2 div, volume dày 3.476, Δ7d −31%), Undying Hate Timeless Jewel ~120 ex (~0,66 div, volume 4.512, Δ7d −51%), Heroic Tragedy Timeless Jewel ~55 ex (~0,3 div, volume 10.985), Grand Spectrum Ruby ~40 ex (~0,22 div, volume 1.638, Δ7d −64%). Volume cao nghĩa là rớt đều và bán được ngay, nhưng cả bốn đều rớt giá mạnh trong tuần — tầng nền của farm này đang co lại giữa league.

**Zarokh jackpot leo giá nhưng thưa.** The Last Flame Incense Relic ~290.662 ex (~1.597 div, volume toàn market chỉ 46, Δ7d +137%) là unique relic đỉnh, rơi vào loại chase. The Desperate Alliance Vase Relic ~1.503 ex (~8,3 div, volume 368) là dòng mid-tier nhả đều hơn từ Zarokh. Quan trọng nhất là **Zarokh's Reliquary Key: Against the Darkness** ~13.470 ex (~74 div, volume 7, Δ7d +87%) — Zarokh nhả cái key này, dùng key mở lại đúng trận Zarokh trong reliquary để farm guaranteed unique relic cùng Time-Lost Diamond, và bản thân key trade được giá div. Cả ba đều volume thấp tới rất thấp, nghĩa là drop hiếm — chúng nâng trung bình lên nhưng phương sai khổng lồ.

**Relic resale là tầng đệm.** Relic non-unique rớt dày khắp trial; gom ba relic cùng base reforge thành một relic tốt hơn ở Reforging Bench, dòng +Honour Resistance cao hoặc cụm key bán được vài tới vài chục ex cho người farm khác. Đây không phải tiền to nhưng nó tự nuôi chính kho relic của mình, nên đầu tư relic setup gần như miễn phí về dài hạn.

Ráp lại: một run bốn tầng stack key mở đủ cache cho ra nền quãng **~2-4 div** (currency Arcanist + waystone Cartographer + một tới ba jewel cache + relic reforge), tính đến 2026-06-16 — quan sát kinh tế chung giữa league, chưa phải sample cá nhân. Jackpot Zarokh trải đều cộng thêm vài div mỗi run nhưng phương sai cực rộng vì Reliquary Key và unique relic đỉnh rất thưa. Trừ key cost (Djinn Barya 75+ rẻ, vài ex tới <1 div) thì lãi ròng nền ~2-4 div/run. Throughput phụ thuộc clear speed: build tune tốt xong một run ~8-12 phút, ~5-7 run/giờ, nên nền rơi vào quãng **~10-25 div/giờ** chưa tính jackpot, cộng phương sai Zarokh kéo trung bình lên cao hơn nhưng không đều.

## Failure Modes

Phần thưởng nền của farm này đang nguội thật giữa league. Cả bốn món jewel-cache chủ lực rớt giá 31-64% chỉ trong bảy ngày tính tới 2026-06-16, đúng dấu hiệu saturation: ai cũng farm Sekhemas nên jewel ngập chợ. Giá trị đang trôi từ tầng nền (cache jewel) sang tầng jackpot (Zarokh chase drop đang +87% tới +137%), nên Sekhemas càng về sau càng phụ thuộc cú hên hiếm chứ không còn là máy in đều. Cộng với mấy kiểu gãy dưới đây:

**Build floor — build giấy fail trước tầng bốn là mất nguyên run.** Giá trị back-loaded, thanh Honour là đồng hồ ngầm phạt EHP thấp và Honour Resistance chưa cap. Build dưới ngưỡng thủ không gánh nổi ba mươi hai phòng, chết ở tầng ba là phí cả key lẫn thời gian tích lũy. Sekhemas không lên S-tier cho mọi người chính vì gate này — nó là S cho build khỏe, là bẫy đốt key cho build yếu.

**Zarokh time-stop one-shot.** Pha gom hourglass của boss tầng bốn one-shot build thiếu movement speed nếu đồng hồ quay đủ vòng trước khi gom xong. Đúng con boss có tiền nhất lại là con dễ giết oan build chậm. Build low-mobility nên bù movement speed boon hoặc relic trước khi farm key bốn tầng.

**Phương sai jackpot tàn nhẫn.** Zarokh's Reliquary Key volume 7 và The Last Flame volume 46 trên toàn market nghĩa là drop cực thưa. Ai farm mà trông vào jackpot sẽ thấy nghèo dài — có thể chạy hàng chục run mới thấy một Reliquary Key. Nền thật là cache jewel cộng relic resale, mà nền đó đang co giá. Coi jackpot như xổ số, đừng tính nó vào thu nhập kỳ vọng mỗi giờ.

**Affliction brick run giữa chừng.** Major Affliction là map-mod của Sekhemas: Corrosive Concoction xóa hết defences, Branded Balbalakh cấm hồi Honour, Orb of Negation vô hiệu mọi relic non-unique. Vài affliction không né được trên một số đường đi, và dính đúng cái xấu lúc Honour đã thấp là fail. Boon Dekhara's Necklace (chặn nhận thêm Minor Affliction) và đường đi né phòng viền tím giảm rủi ro nhưng không xóa hẳn.

**Đồng hồ thời gian bóp div/giờ.** Quản Honour ép một đánh đổi: rush thì ăn đòn tụt Honour, cẩn thận thì chậm nên ít run/giờ. Mốc ~10 phút/run là mục tiêu chặt — chậm thành 20 phút thì div/giờ rơi một nửa dù mỗi run vẫn lãi. Build vừa thủ vừa nhanh mới tối đa được farm này, thiếu một trong hai là tụt hẳn hiệu suất.

**Patch sensitivity.** GGG có lịch sử nerf đúng farm lãi nhất giữa league; giá jewel-cache đang rơi sẵn cho thấy reward economy đang tự nén. Một cú nerf droprate cache hoặc giảm key generation sẽ cắt thẳng dây chuyền chính. Ưu tiên farm sớm trong cửa sổ giá còn, đừng dồn hết đầu tư relic vào cuối league.

## Profit Optimization

Tối đa cache là tối đa lãi, nên mọi đầu tư relic dồn vào cụm key trước cụm rarity: ba mod key (quantity, gain-another, upgrade-on-floor) cộng boon Mirror of Fortune cộng convert toàn bộ Sacred Water dư ở Keth Forge là bốn nguồn key chồng nhau, mở gấp đôi gấp ba số cache so với run thường. Sau khi cap Honour Resistance 75% và đủ EHP, mọi ô relic còn lại nên là key hoặc Sacred Water chứ không phải damage — DPS đủ giết quái là đủ, thừa DPS không thành cache.

Reforge relic liên tục: gom relic cùng base rớt trong run, ba-thành-một ở Reforging Bench ngay entrance giữa các run để leo dần chất lượng pool honour-res và key, vừa nâng farm vừa có dòng relic xịn dư để bán. Bán jewel-cache và relic theo lô qua trade status securable để thanh khoản, vì jewel volume cao bán lẻ chậm. Riêng unique relic đỉnh và Zarokh's Reliquary Key thì list lẻ giá div, đừng bán vội theo lô.

Về key đầu vào, mua Djinn Barya 75+ theo lô lúc rẻ và chỉ chạy key bốn tầng cho farm — key thấp hơn chốt trần phần thưởng nên không đáng thời gian một run mười phút.

## Alternatives & Variations

Trong nhóm boss-rush gamba thì Sekhemas đứng cạnh [Trial of Chaos](/guides/0-5-farming-strategy-tier-list) — Trial of Chaos săn The Adorned từ boss với cửa thắng nhỏ hơn nhưng vòng chạy nhẹ hơn, không có thanh Honour bóp. Chọn Sekhemas khi build thủ khỏe và muốn nền cache đều; chọn Trial of Chaos khi build mỏng hơn và chấp nhận gamba thuần một món.

Ai muốn thu nhập đều ít phương sai hơn thì các farm map-based vẫn nhỉnh hơn ở khoản ổn định: [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm) không có đồng hồ nên tha thứ build chậm, [Breach Rare Juice Farm](/farming/0-5-breach-rare-juice-farm) cho currency density cao. Sekhemas thắng hai cái đó ở khả năng nhả cú drop to (Reliquary Key, unique relic) mà farm map thường không có, đổi lại đòi build chuyên và phạt nặng khi fail. Không vận hành song song được vì Sekhemas là instance riêng tách khỏi atlas map — chọn một hướng cho mỗi session.

Trong chính Sekhemas, biến thể "lực" là dồn relic vào survivability tối đa (Honour Resistance cap, maximum Honour, Lustrous Lacquer) để gánh key cao nhất ổn định; biến thể "tham" là hy sinh bớt thủ lấy thêm relic key và Sacred Water để vắt cache — chỉ chạy biến thể tham khi build đã dư thủ, vì hụt thủ ở đây là mất run.

## Quick Reference Card

**Setup cost / run:** Djinn Barya area level 75+ (~vài ex tới <1 div, tính đến 2026-06-16) + đầu tư relic honour-res/key một lần (amortize)
**Profit / run:** nền ~2-4 div (cache currency + waystone + jewel + relic reforge); jackpot Zarokh's Reliquary Key ~74 div / unique relic đỉnh The Last Flame ~1.597 div, cực thưa
**Time / run:** ~8-12 phút cho build tune tốt (~5-7 run/giờ → nền ~10-25 div/giờ chưa tính jackpot)
**Key vào trial:** Djinn Barya 75+ cho đủ bốn tầng (chạm Zarokh) — key thấp hơn chốt trần thưởng
**Relic Altar ưu tiên:** Honour Resistance tới 75% cap → maximum Honour → cụm key (quantity + gain-another + upgrade-on-floor) → quantity Relics → Sacred Water → QoL movement/dodge/reveal-room
**Honour pool:** Life + Energy Shield + Runic Ward (+ Mana nếu Mind over Matter); đứng sát quái −35% Honour damage
**Boon ưu tiên:** Lustrous Lacquer · Fright Mask · Glowing Orb (thủ) · Earned Honour · Adrenaline Vial (hồi) · Mirror of Fortune (key)
**Reward room:** mở hết cache → convert toàn bộ Sacred Water dư ở Keth Forge thành key → mua relic/boon Balbala, vét xong mới mở cửa tầng kế
**Key drops:** Zarokh's Reliquary Key (jackpot) · The Last Flame / The Desperate Alliance unique relic · Time-Lost & Timeless Jewel · Grand Spectrum · currency & waystone cache
**Cảnh báo:** nền jewel-cache đang nguội (−31% tới −64% trong 7 ngày); fail trước tầng bốn mất nguyên run; Zarokh time-stop one-shot build chậm

## Changelog

### 2026-06-16
- Initial draft. Cơ chế verify verbatim từ wiki mirror (`data/wiki/Trial_of_the_Sekhemas.md` scrape 2026-06-09) + relic mod pool (`List_of_modifiers_for_medium_relics`) + patch note 0.5.0 (Runic Ward vào Honour, Reforging Bench ở entrance) và 0.5.2 (turret fireball fix). Giá pull live từ poe2scout ngày 2026-06-16 (1 div = 182 ex): Zarokh's Reliquary Key ~13.470 ex, The Last Flame ~290.662 ex, The Desperate Alliance Vase Relic ~1.503 ex, Time-Lost/Timeless jewel + Grand Spectrum (volume cao, Δ7d −31% tới −64%). Throughput là quan sát kinh tế chung, chưa phải sample cá nhân — vào farm log số run, số cache mở, jewel và Reliquary Key bán được mỗi giờ để thay bằng số của chính mình.

## Relationships

- **related_mechanics** [Farming strategy tier list](/guides/0-5-farming-strategy-tier-list) — Sekhemas xếp đáy S vì drop to đều nhưng cần build chuyên và clear ~10 phút; doc này là bản farm chi tiết của entry tier-list đó.
- **competes_with** [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm) — farm map không đồng hồ, tha thứ build chậm, thu nhập đều hơn nhưng không nhả cú drop to kiểu Reliquary Key; chọn một tuỳ build thủ khỏe hay không.
- **competes_with** [Breach Rare Juice Farm](/farming/0-5-breach-rare-juice-farm) — currency density cao trên atlas map, đối trọng nền-đều với jackpot-variance của Sekhemas.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — league system 0.5 thêm Runic Ward (cộng vào Honour pool) và rewrite endgame, nền context cho buff farm này so với patch trước.
