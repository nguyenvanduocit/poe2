---
template: templates/build-template.md
document_type: build
title: Magic Find Spell Ritualist
status: draft
author: duocnv
created: '2026-06-29'
updated: '2026-06-29'
class: Huntress
ascendancy: Ritualist
league: '0.5'
patch: 0.5.3
budget_tier: mirror-tier
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Comet
  damage_type: cold
  playstyle: caster
  content_focus: currency-farming
tags:
  - huntress
  - ritualist
  - rarity
  - magic-find
  - spell
  - blood-magic
  - andvarius
  - kalandras-touch
  - greeds-embrace
  - mageblood
  - runeseeker
  - solo
  - duo
  - currency-farming
  - 0-5
  - poe2
---

# Magic Find Spell Ritualist

Build này clone con đứng đầu board rarity poe.ninja Runes of Aldur — [ZerxSexZerx](https://poe.ninja/poe2/builds/runesofaldur/character/ZerxZerxZerx-1953/ZerxSexZerx), **627% Item Rarity kèm 365k DPS**, cây cân bằng nhất giữa rarity và damage trong cả 124,292 character. Khác với [Rarity Cull Bot Ritualist](/builds/huntress/0-5-ritualist-rarity-cull-bot) phải bám một carry mới có kill, build này **tự đánh được** nhờ damage spell từ :wiki-link{url="https://www.poe2wiki.net/wiki/Runeseeker's_Call"}, nên chạy **solo tự map được, mà ghép duo với một account aura riêng thì còn khoẻ hơn** — phần thủ đẩy hết sang partner, mình giữ nguyên rarity. Build mirror-tier: rarity engine thì rẻ, nhưng damage + lớp sống sót đắt thật. Xem nguyên build kèm số **Item Rarity 627%** trên [trang character poe.ninja](https://poe.ninja/poe2/builds/runesofaldur/character/ZerxZerxZerx-1953/ZerxSexZerx): trang character render đủ gear, tree, stat và cột rarity (khác PoB viewer vốn không hiện rarity), lại có sẵn nút Import code cho PoB2 desktop.

## Build chạy bằng gì

Skill chính là :wiki-link{url="https://www.poe2wiki.net/wiki/Comet"} (cold spell), scale bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Runeseeker's_Call"} (Runic Fork): weapon chỉ socket rune và nhân 200% hiệu lực rune socketed, nên rune cho 315% spell damage + 9 levels spell skill đẩy Comet lên **~366k DPS** (average hit ~519k, crit 31.85%, cast ~0.70/s, hit chance 100%, không có DoT). :wiki-link{url="https://www.poe2wiki.net/wiki/Palm_of_the_Dreamer"} offhand cộng 27% gain as extra chaos cho allies trong presence. Keystone :wiki-link{url="https://www.poe2wiki.net/wiki/Blood_Magic"} + Sacrifice of Flesh bỏ mana hoàn toàn, cast bằng life nên Mana hiển thị 0.

Damage 366k đủ farm map MF (white tới T15 nhẹ, đi duo có carry gánh boss) nhưng yếu cho solo bossing hay pinnacle — đây là build farm rarity, không phải bosser. Điểm yếu thật không phải damage mà là thủ: EHP chỉ 5,750, max hit chịu được phys 4,341 / fire 5,078 / cold 4,739, fire/cold res 19/13 undercap nặng. Con gốc sống nhờ Mageblood uptime; clone bắt buộc áp lớp res-offset ở dưới nếu không một đòn element ~4-5k là chết.

Build kính thật sự: Life 3173, ES 299, EHP 5750, fire 19 / cold 13 (undercap nặng), evade 1%. Nó sống bằng uptime flask của :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"} — và một account aura đi duo gánh phần thủ này còn tốt hơn nữa, lúc đó Mageblood thành tuỳ chọn.

## Rarity 627% đến từ đâu

Ledger từng slot, đọc thẳng từ character thật. Hiểu nó trước khi mua, vì mua đủ gear mà sai roll hoặc thiếu tree thì trần tụt mạnh:

- **Andvarius (ring 1)** — 98% (implicit 15 + explicit 83)
- **Andvarius (ring 2)** — 96% (implicit 13 + explicit 83)
- **Kalandra's Touch (ring 3)** — copy con Andvarius kế bên → **~98%**
- **Greed's Embrace (body)** — 62% (explicit 50 + rune rarity 12)
- **Aurseize (gloves)** — 58%
- **Gold Amulet rare** — 56% (implicit 19 + explicit 18 + desecrated 19)
- **Beast Spur boots** — 21%
- **Mind Dome helm** — 19%
- **Passive tree + ascendancy + 2 anoint** — **~119%**

Gear cộng ~508% + tree ~119% = **627%**. Hai điều quyết định total có đúng hay không: hai Andvarius phải là bản roll cao 88-95% (không phải bản floor 67-79%), và **~119% kia là tree Ritualist + anoint, không phải gear** — không allocate node rarity thì trần chỉ ~508%.

## Shopping list sát roll, sát giá

Giá securable đọc 2026-06-29, 1 div ≈ 424 ex. Mỗi slot ghi mod quan trọng để lọc và roll cần đạt cho khớp con gốc.

**Lớp rarity — phải đúng roll, đây là chỗ floor-trap nặng nhất:**

- **Andvarius (Gold Ring) ×2** — lọc explicit rarity ≥82 để khớp 83% của gốc (corrupted). **~40 div/cây (~80 div cặp)**. Bản 5-20 ex chỉ 67-79% rarity → mất ~20% mỗi ring, total tụt khỏi 627. POE2 0.5 không có rarity catalyst nên không DIY roll cao được, phải mua sẵn. [Search Andvarius ≥82](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/Ypm4wDYOUY)
- **Kalandra's Touch** — **~22 div**, copy nguyên con Andvarius cạnh nó nên nhân đôi một roll 96%. [Search](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/KljEoE3Ec5)
- **Aurseize (gloves)** — lọc rarity ≥55 để khớp 58% (corrupted). **~5 div**. Bản 45% chỉ ~1 ex nhưng thiếu rarity. [Search Aurseize ≥55](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/G67pqZ3bFb)
- **Greed's Embrace (body)** — explicit 50% rarity là **~1 ex**; +12% còn lại phải tự cắm một rune rarity vào socket. [Search](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/RJdgvnmZs7)
- **Gold Amulet rare** — đây là dòng đắt và rối nhất. Con gốc 56% = implicit 19 (free từ base Gold Amulet) + explicit 18 + **desecrated 19**, cộng fractured +4 spell levels. Cây +4 spell mà rarity tới 51% là **~500 div**; cây +4 spell 122 div chỉ có 36-37% rarity (thiếu dòng desecrated). Muốn đủ 56% thì trả 500 div hoặc mua bản 122 div rồi craft thêm dòng desecrated rarity. [Search +4 spell + rarity](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/nr28XaB2H0)
- **Helm rare** (Skycrown Tiara) — search ĐẦY ĐỦ profile, đừng filter mỗi rarity: rarity 18-19 + ES% ≥70 + life ≥140 + cold ≥25 + light ≥25. Floor **~4 ex**, cây tốt (life ~165 + dual res) **~1-2 div**. Đây là slot vá res chính: dual res của nó kéo lại phần lớn −33% từ hai Andvarius. [Search full profile](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/WvY7EPKbtm)
- **Boots rare** (Dunerunner) — MS ≥25 + rarity 18 + life ≥100 + light res ≥30. Floor **~10 ex**, cây tốt **~1-2 div**. Lọc cả res chứ không chỉ MS + rarity, vì đây là một nguồn light res nữa để bù Andvarius. [Search full profile](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/3qEVoWM9T5)

**Lớp damage + sống sót — chỗ đốt phần lớn ngân sách:**

- **Runeseeker's Call** (weapon, DPS engine) — **~349 div** (corrupted), chỉ ~682 cây tồn tại nên floor cứng. [Search](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/MdmLVLzRFJ)
- **Mageblood** (belt, flask uptime) — **~520 div** (corrupted). Cây cắt được nếu đi duo có account aura. [Search](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/gl9vQBGghQ)
- **Belt rare** (thay Mageblood ở bản duo) — life ≥150 + fire ≥35 + cold ≥35 + 2 charm slot. **~35 ex - 1 div**. Mageblood không cho res, nên đổi sang rare belt hai dòng res lại vá đúng lỗ fire/cold mà gốc bỏ ngỏ — bản duo nhờ vậy res cao hơn cả ZerxSexZerx. [Search res belt](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/8rWG9vrbIV)
- **Palm of the Dreamer** (offhand) — **~190 div** (corrupted). [Search](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/eRa9Xj69iL)
- **The Adorned** (jewel) — **~19-30 div**. [Search](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/yYD7EqkeSR)
- **Grand Spectrum ×3** — **~1 div/viên**. [Search](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/PP6kd7MMFL)
- **Weapon set 2 swap** — :wiki-link{url="https://www.poe2wiki.net/wiki/Quill_Rain"} ~7 ex + :wiki-link{url="https://www.poe2wiki.net/wiki/Cadiro's_Gambit"} ~5 ex (Covetous arrow = mũi tên rarity). [Cadiro search](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/kyprX8Q5T5)
- Jewel còn lại: Flesh Crucible ~25-30 ex, Split Personality ~10-15 ex, Heart of the Well ~7-15 ex, Undying Hate ~85 ex, vài rare jewel ~5-20 ex/viên.

## Giữ rarity, kéo res và life về

Hai Andvarius là −33% all res, fire/cold của gốc chỉ còn 19/13. Nên mỗi slot craft được phải mua dạng **full item** — rarity đúng roll **cộng** life, res, ES — chứ không filter mỗi rarity. Lọc một mod thì ra cây một dòng rẻ mạt nhưng đeo vào là chết, đó là lý do giá nó thấp hơn đồ người ta chạy thật.

Nguồn res kéo lại −33%:

- **Helm** dual res (cold + light, mỗi dòng ~37) cùng ES% + life — slot vá res lớn nhất, full profile ~1-2 div.
- **Boots** một dòng res (light ~35) + life + MS.
- **Belt**: bản Mageblood không cho res; bản duo đổi rare belt fire + cold + life để vá thẳng hai lỗ fire/cold.
- **Amulet** +4 spell ưu tiên damage, nhưng còn ô suffix thì nhét thêm một res.
- Vài node res trên tree.

Cộng đủ thì bản duo (rare res-belt) dày res hơn cả ZerxSexZerx, vì gốc xài Mageblood nên bỏ trống fire/cold. Mục tiêu rõ ràng: rarity giữ nguyên ~627%, fire/cold kéo từ undercap lên gần cap, life pool ≥ 3,200.

## Ba bậc ngân sách

**Faithful 627% (sát mọi roll): ~1,900 div.** Rarity engine đúng roll ~610 div (rings 80 + Kalandra 22 + Aurseize 5 + amulet 500), shell damage/thủ ~1,080 div (Runeseeker 349 + Palm 190 + Mageblood 520 + jewel ~60), cộng lớp rune ~210 div (Legacy of Lifesprig 209 + special runes chưa tra được). Lớp rune ~210 div này áp cho mọi bậc còn giữ damage Runeseeker, kể cả hai bậc dưới.

**Tương đối cao ~608% (amulet bản 122 div, bỏ dòng desecrated): ~1,310 div.** Chỉ mất ~19% rarity ở amulet, các slot rarity-chính vẫn full roll. Điểm vào hợp lý nhất nằm ở bậc này.

**Duo có account aura (cắt Mageblood ~515 div vì partner gánh thủ): ~800 div**, rarity vẫn ~608%. Account aura phủ Grace/Determination/Purity là đủ cho cây kính này đứng, không cần Mageblood uptime nữa. Đổi Mageblood lấy rare res-belt (~1 div) thì fire/cold tự kéo gần cap không cần partner phủ Purity — bản ít kính nhất, res cao hơn cả con gốc.

## Runes, anoint, allocate

Mở [trang character poe.ninja](https://poe.ninja/poe2/builds/runesofaldur/character/ZerxZerxZerx-1953/ZerxSexZerx) là thấy nguyên rune, anoint, allocate, tree, gear, stat và cột Item Rarity của con gốc; trang này cũng có nút Import code cho PoB2 desktop. Phần phải tự gắn:

- **Runeseeker's Call** (damage engine): socket **Legacy of Lifesprig** (~209 div, rune đắt nhất ngoài weapon) + **Hedgewitch Assandra's Rune of Wisdom** + 3× **Perfect Iron Rune**; chính mấy rune này cho 315% spell damage + 9 spell levels mà weapon nhân 200%.
- **Helm**: **Raven-Touched Shard** + một Perfect Body Rune; enchant **Allocates All Natural**.
- **Gloves / Boots**: mỗi cái 2× **Perfect Body Rune** (+life).
- **Greed's Embrace**: **Rabbit Idol** (gánh phần +12% rarity + life của idol socket) + 3× Perfect Body Rune.
- **Palm of the Dreamer**: **Idol of the Martyr**.
- **Amulet**: anoint **Zarokh's Gift**; **Belt** (Mageblood): enchant +22% fire res.

Cảnh báo phải nhớ: **mọi dòng Bonded (ShamanOnly) trên rune là chết** vì build là Ritualist/Huntress (enableBondedMods=false) — chỉ phần non-bonded (+life, rarity, spell) đếm, đừng tính dòng Bonded vào pool. Perfect Body/Iron Rune là currency rẻ; Legacy of Lifesprig ~209 div; còn Raven-Touched Shard và Hedgewitch Assandra's Rune of Wisdom không tra được bằng tên trên trade (reward/craft-only), đọc giá trong client.

## Failure Modes

- **Res undercap = một-shot bởi đòn element.** Hai Andvarius là −33% all res, fire 19 / cold 13 sau bù. Map mod elemental damage hay một đòn AoE element là chết. Solo thì phải né cẩn thận; duo thì account aura (Purity/Determination) vá phần này.
- **Mageblood là single point of cost của bản solo.** ~520 div để flask uptime gánh res âm; chưa đủ thì build solo chưa đứng được, phải lùi về chạy duo có aura partner.
- **Sai roll Andvarius = total rarity sai.** Mua bản floor 67-79% thay vì 88-95% là tụt ~40% total — đây là lỗi dễ mắc nhất vì bản floor rẻ gấp mười lần.
- **Damage engine không thay được rẻ.** Runeseeker's Call ~349 div + Palm ~190 div là hai món không có bản budget; thiếu chúng thì mất luôn khả năng tự map và build tụt về vai cull-bot.
- **Lose 2% Life on Kill của Aurseize** đánh thẳng life, bypass ES, và có thể giết. Build này tự ra đòn kết liễu bằng spell nên kill được tính cho mình → dòng này **có nổ**, mỗi kill mất ~2% life; trong pack dày phải để ý leech/regen bù kịp.

## Verdict

Build trả lời được câu "làm sao vừa rarity cao vừa tự farm được, không phải bám carry." Giá phải trả là mirror-tier: ~1,300 div cho bản tương đối, ~1,650 div cho bản sát hoàn toàn. Engine rarity hoá ra rẻ nếu mua đúng roll cao (rings 80 div + Kalandra 22 div + Aurseize 5 div), tiền thật nằm ở Runeseeker + Palm + Mageblood để có damage và sống sót. Có account aura đi duo thì cắt được Mageblood, hạ về ~800 div mà vẫn giữ rarity — đó là cách vào rẻ nhất cho cây này. Ai chỉ muốn rarity mà không cần tự đánh thì [Rarity Cull Bot Ritualist](/builds/huntress/0-5-ritualist-rarity-cull-bot) rẻ hơn nhiều và làm đúng việc đó.

## Optimization

- Mua Andvarius bản 88-95% (~40 div) thay vì floor — đây là biến số quyết định total rarity, đừng tiếc.
- Amulet đi đường craft: mua bản +4 spell 122 div (~37% rarity) rồi tự thêm desecrated rarity line, rẻ hơn cây 56% bán sẵn 500 div.
- Allocate đủ node rarity Ritualist + 2 anoint trước khi than total thấp — ~119% nằm ở đó, không phải gear.
- Khi vào league chạy thật, log res in-client sau khi đeo hai Andvarius + Greed's để biết account aura cần phủ Purity bao nhiêu cho khỏi một-shot; số này quyết định solo đi được map mod nào.
- Cân Mageblood vs account aura: nếu duo partner ổn định, dồn ~515 div đó sang amulet 56% hoặc Runeseeker roll tốt hơn thay vì mua Mageblood.

## Version History

### 2026-06-29

- Tạo bài từ clone ZerxSexZerx (poe.ninja Runes of Aldur snapshot 0556-20260629): 627% rarity + 365k DPS, spell Ritualist Blood Magic, tách khỏi nhánh cull-bot.
- Ledger rarity: gear ~508% (rings 292 + Greed's 62 + Aurseize 58 + amulet 56 + boots 21 + helm 19) + tree ~119% = 627%.
- Giá securable đo từng slot sát roll: Andvarius 88-95% ~40 div/cây, Kalandra 22 div, Aurseize 56% ~5 div, amulet 56% ~500 div (hoặc 37% 122 div + craft), Runeseeker 349 div, Palm 190 div, Mageblood 520 div. Faithful ~1,690 div / tương đối ~1,310 div / duo-aura ~800 div.

## Relationships

- [Rarity Cull Bot Ritualist](/builds/huntress/0-5-ritualist-rarity-cull-bot) — nhánh duo thuần không tự đánh, dùng Ventor's + Culling Strike thay vì engine Andvarius + spell self-clear này; chọn nó nếu chỉ làm loot mule và không cần solo.
- [Spear Twister Ritualist và Amazon](/builds/huntress/0-5-twister-ritualist-amazon) — Ritualist hướng self-DPS thuần, dùng Unfurled Finger + ring economics khác hẳn.
- [Return of the Ancients](/guides/return-of-the-ancients) — 0.5 thêm Mageblood, đổi party rarity, Runic Ward; nền cho mọi nhánh MF Ritualist.
