---
template: templates/mechanic-template.md
document_type: mechanic
title: Runic Ward Onslaught Loop cho Minion
status: published
author: duocnv
created: '2026-06-02'
updated: '2026-06-09'
league: '0.5'
patch: 0.5.1
confidence_level: MEDIUM
tags:
  - runic-ward
  - low-runic-ward
  - onslaught
  - minion
  - companion
  - spirit-walker
  - verisium-manifestations
  - warding-rune-of-bodyguards
  - blasphemy
  - repulsion
  - olroths-resolve
  - 0-5
  - 0-5-1
  - poe2
---

# Runic Ward Onslaught Loop cho Minion

0.5 mở một cách cấp :wiki-link{url="https://www.poe2wiki.net/wiki/Onslaught"} cho cả đội companion bằng chính pool :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} của mình: cố tình giữ bản thân ở trạng thái **Low Runic Ward**, và một sceptre rune biến trạng thái đó thành Onslaught vĩnh viễn cho mọi minion trong presence. Loop cắt ngang bốn hệ tách biệt — :wiki-link{url="https://www.poe2wiki.net/wiki/Verisium_Manifestations"} (Kalguuran skill rút ward), :wiki-link{url="https://www.poe2wiki.net/wiki/Warding_Rune_of_Bodyguards"} (rune đổi Low Ward thành Onslaught), pool Runic Ward (nhiên liệu), và tuỳ chọn :wiki-link{url="https://www.poe2wiki.net/wiki/Repulsion"} qua :wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"} cho phiên bản rảnh tay.

Mọi mắt xích cơ chế của loop đã verify và nó chạy thật. Kết luận thực dụng phụ thuộc roster đã có nguồn Onslaught nào khác chưa. [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — bản nguyên đàn no-weapon-swap đang chơi — cấp Onslaught cho cả đàn qua gloves rune **Carved Majesty** (Onslaught 4s khi hit Marked target, Voltaic Mark giữ uptime gần 100% trên boss), rẻ hơn và không hi sinh lớp đệm 1-life, nên ward-drain loop với build đó là alt-path đã xét và không dùng. Quy tắc chung: Warding Rune of Bodyguards đáng lấy khi không còn nguồn Onslaught nào khác **và** đang ở Low Runic Ward vì một lý do sẵn có — roster chưa sắm marks gloves lẫn parry buckler mới thoả cả hai; lúc đó skill self-clear (Hollow Shell hoặc Spear Stab + Runic Confusion) vốn đã rút ward nên bật Onslaught không tốn thêm gì ngoài một slot rune.

## Đường thật là đòn attack của chính mình, không phải minion

Verisium Manifestations gate bằng đúng một dòng: "While active, Hitting with an Attack will spend Runic Ward to summon a Verisium Manifestation, a short-lived Temporary Minion that rapidly Attacks nearby enemies, ignoring commands." Chủ ngữ ngầm là người chơi — *mình* hit với một attack thì VM mới tiêu ward. Pilot companion zoo vốn vung Twister / Spear Throw, cả hai đều là Attack, nên mỗi đòn của pilot **trực tiếp** thoả gate. VM tiêu 7–30 Runic Ward mỗi lần summon — cooldown 0.50s, tối đa 10 manifestation cùng lúc, mỗi con sống 8s — kéo pool ward tụt xuống. Khi ward chạm **35% maximum trở xuống** — đó là định nghĩa verbatim của Low Runic Ward — thì Warding Rune of Bodyguards bật: "Minions in your Presence have Onslaught while you are on Low Runic Ward". Cả đội companion trong presence ăn Onslaught.

Đó là toàn bộ loop, và nó không cần Repulsion lẫn Blasphemy. Mọi mắt đã verify chắc: VM gate, ward cost (7–30), Bodyguards điều kiện key vào *người chơi* (you on Low Runic Ward, không phải vào minion), ngưỡng Low Runic Ward = 35%, Runic Ward hồi mặc định 5%/giây độc lập với life. Warding Rune of Bodyguards là sceptre rune, Requires Level 45, Limited to 1 — chiếm một slot rune trên sceptre.

## Đường rảnh tay qua Repulsion thừa và còn một mắt chưa test

Khung "auto-summon không bấm gì" chỉ có nghĩa cho một build pilot **không** tự đánh. Lúc đó nguồn hit phải đến từ minion: minion đánh trúng enemy đang dính Repulsion → Repulsion là hex (Blasphemy-compatible, không phải Mark), gắn nó vào Blasphemy phủ Fragility thành aura quanh mình (60 Spirit/curse). "Hitting these enemies causes the Curse to Trigger an explosion" — bất kỳ hit nào lên cursed-target cũng nổ Repulsion Wave, một "Physical Attack damage in an area around the Cursed target". Repulsion Wave là một Attack, nên về lý thuyết nó có thể thoả gate "Hitting with an Attack" của VM. 0.5.1 cho Repulsion Wave thêm base Critical Strike Chance 6% — một buff nhỏ cho nhánh này, nhưng không động tới câu hỏi trigger-chain bên dưới.

Mắt xích thật sự chưa chắc nằm ở chỗ khác: VM kích bằng "Trigger Manifest Rune on Hitting with an Attack" — một trigger. Repulsion Wave cũng là một skill được **trigger**. Liệu một Attack đã-được-trigger (Repulsion Wave) có kích tiếp được Manifest Rune của VM hay không là câu hỏi trigger-chain mà datamine không trả lời được, phải đo trong client. Quan trọng hơn: ngay cả khi nó chạy, đường này **thừa** với bất kỳ build nào pilot còn vung skill attack — Twister đã thoả gate trực tiếp, đường minion→Repulsion là vòng vo không thêm gì. Nên Blasphemy + Repulsion chỉ phục vụ một build thật-sự-AFK, và đúng lúc đó nó lại tựa trọn vào mắt chưa test. Đừng bán loop này như "rảnh tay tự dọn màn".

## Onslaught cộng additive và gần trùng buff đội đã có

Phần thưởng thật là Onslaught cho cả zoo, không phải auto-clear. Onslaught 0.5 = "20% increased Skill Speed and 10% increased movement speed". Skill Speed là trục hợp nhất của POE2, phủ cả attack lẫn cast, nghe rất rộng cho một đội 4–5 companion — nhưng nó **cộng dồn additive** cùng bucket với increased Attack/Cast Speed của minion, không phải một more-multiplier riêng. Và nó gần trùng loại với buff mà zoo điển hình đã chạy: một con Boar rare roll được aura Haste-tương-đương ("Allies in Presence 20% increased Attack and Cast Speed + 10% movement speed") gần như identical về số, cộng Commanding Rage (2% inc Minion Attack Speed mỗi 5 Rage) và Snake Idol (10% inc Attack Speed) cũng đổ vào cùng bucket. Nhồi thêm +20% increased vào một bucket đã chứa ~50%+ thì uplift biên thực chỉ còn ~11–15%, không phải +20%, và phần lớn redundant với cái đội đã có. Việc cộng additive là chắc theo skill-speed mechanic; con số ~11–15% là ước lượng theo bucket giả định, đo lại khi build thật chạy.

## Có ít nhất năm cách cấp Onslaught cho companion, và loop này là cách tệ nhất

Đây là chỗ verdict đóng lại. 0.5 cấp companion Onslaught qua nhiều nguồn, và bản carry vốn đã mang sẵn nguyên liệu cho hai cái rẻ nhất (bản zoo no-weapon-swap thì không — xem cuối mục):

- **Gloves: "Companions gain Onslaught for 4 seconds on Hitting your Marked targets"** — build vốn chạy Sniper's Mark / Charged Mark / Mark for Death, nên gần-miễn-phí và không đụng ward; vì proc trên Marked target nên uptime mượt nhất ở single-target/boss, còn lúc clear pack rời rạc thì spottier.
- **Bucklers: "companions gain Onslaught when you parry"** — build chạy Reputation auto-parry (buckler), parry gần như liên tục → companion ăn Onslaught đều cả clear lẫn boss, cũng không đụng ward. Đây là cái anchor "build đã có sẵn" chắc nhất.
- **"Companions have 50% chance to gain Onslaught on Kill"** — gần như permanent trong lúc clear.
- **Sceptres: "Minions in your Presence have Onslaught while you are on Low Runic Ward"** — chính là Warding Rune of Bodyguards, cái loop này dựng cả guồng máy để bật.
- **"Companions in your Presence have Onslaught while you are Shapeshifted"** — đường của Druid, không liên quan build này.

Đặt cạnh nhau thì Bodyguards là cái duy nhất bắt **đánh đổi lớp đệm 1-life** và (ở phiên bản rảnh tay) đốt thêm 30–90 Spirit để giữ Onslaught up. Marks gloves (Carved Majesty) hoặc parry buckler cho gần đúng cùng buff mà không hi sinh gì, nên loop chỉ hợp lý khi roster thiếu cả hai nguồn đó — lúc ấy Bodyguards-via-ward mới là nguồn Onslaught **chính** chứ không phải lựa chọn dư, và vì skill self-clear vốn đã rút ward, cái giá còn lại chỉ là một slot rune cộng việc chạy ward cạn.

## Sustain và uptime theo số thật

Ward hồi 5%/giây **của max pool**, nên việc giữ được Low Runic Ward (≤35% max) là một breakpoint, không phải mặc định. VM tiêu (7–30) ward/summon ở cooldown 0.5s, nhưng drain không chạy full 2 summon/giây mãi: limit là 10 manifestation, mỗi con sống 8s. Khi đã đầy 10/10 thì hành vi VM ở cap quyết định mọi thứ, và đây là chỗ chưa test — VM *block* (ngừng tiêu ward) hay *thay con cũ nhất* (tiếp tục tiêu)?

Nếu thay con cũ nhất thì drain giữ nhịp theo đòn attack, ward bị ghim ở dải thấp, Onslaught up bền trong lúc còn đánh. Nếu block ở cap thì drain rớt xuống nhịp hết-hạn (~10 con / 8s ≈ 1.25 summon/giây → ~9–37 ward/giây) và lúc đó nó đua trực tiếp với regen — mà regen scale theo max pool: pool 200 hồi 10/giây, pool 300 hồi 15/giây. Ở gem cost thấp (~7–9) cộng pool to thì regen có thể thắng, ward leo qua 35%, Onslaught chập chờn. Hệ quả ngược đời của nhánh block: **stack thêm max Runic Ward lại làm loop khó nuôi hơn** vì regen tuyệt đối nhanh hơn — trái với bản năng "ward to cho an toàn". Equilibrium thật nằm ở breakpoint giữa ward-cost-per-summon (theo gem level) và 5%-của-max-pool, phải đo trong client.

Bất kể nhánh nào, Onslaught có một khoảng grace khi ngừng đánh: ward leo lại 5%/giây, từ đáy lên quá 35% mất tới ~7 giây, nên dodge-phase ngắn 2–3 giây không drop buff. Uptime bám theo độ liên tục của đòn attack cộng hành vi cap ở trên, không phải đơn giản clear-vs-boss như trực giác ban đầu.

## Chi phí phòng thủ thật: buffer 1-life chạy ≤35% suốt trận

Vì uptime tốt khi đang đánh, vấn đề thật không phải Onslaught tắt — mà là **giữ nó on đồng nghĩa giữ ward ≤35% suốt trận**. Runic Ward là lớp phòng thủ chót: kích hoạt khi life chạm 1, hồi 5%/giây độc lập, là thanh đệm cứu-mạng-cuối theo EHP order. Cố tình rút nó xuống dải thấp để thoả Low Runic Ward nghĩa là chạy lớp đệm đó gần rỗng đúng vào lúc cày DPS boss kéo dài — chính lúc một cú one-shot cần thanh ward đầy nhất. Đó là cái giá thật, và trên một build vốn không HC-safe nó là survivability cost có thật, không phải buff miễn phí.

Một bẫy item của 0.5.1 phải tránh đi kèm cái giá đó: Olroth's Resolve flask giờ "Regenerate 2.5-5% of maximum Runic Ward per second during Effect" (bản rework đã live từ 0.5.0, patch note 0.5.1 mới ghi). Hay cho build ward-stacker, nhưng đi ngược hẳn loop này — đang cố giữ ward ≤35% mà flask bơm ward lên 2.5-5%/giây thì dễ đẩy vượt ngưỡng và rớt Onslaught. Đừng đội Olroth's Resolve với loop ward-drain; nó là mặt đối nghịch đúng nghĩa với cách [Refutation](/mechanics/skills/refutation) cần ward đầy để đốt — cùng một pool, hai hướng ngược nhau.

Một điểm dễ hiểu nhầm phải nói rõ: giữ ward thấp **không** mất stun threshold. 0.5 gỡ Runic Ward khỏi keyword "Defences" (giờ chỉ còn Armour/Evasion/ES), và mọi nguồn stun threshold đều key theo Life/ES — ward chưa bao giờ feed stun threshold. Dòng Bonded của Warding Rune of Bodyguards ("Damage of Enemies Hitting you is Unlucky if your Runic Ward has been damaged Recently") chỉ bù một phần và chỉ kích *sau khi* ward đã ăn damage — quá trễ cho một phát one-shot.

## Spirit accounting

Phiên bản rảnh tay đầy đủ tốn Blasphemy 60 + Verisium Manifestations 30 = 90 Spirit raw. Cả hai đều là non-Companion skill, nên dưới keystone :wiki-link{url="https://www.poe2wiki.net/wiki/Trusted_Kinship"} (đã rework 0.5 thành "30% more Reservation Efficiency of Companion Skills, 20% less Reservation Efficiency of non-Companion Skills", gỡ hết hai dòng defence cũ) chúng ăn phạt 20% → effective ~112.5 Spirit: 60/0.8 = 75, 30/0.8 = 37.5.

Đường thật — VM một mình, dựa vào đòn attack sẵn có của pilot để rút ward — chỉ tốn 30 Spirit raw → 37.5 effective, và bỏ luôn Blasphemy + Repulsion cùng cái mắt chưa test. Với một zoo spirit-capped, nếu vẫn muốn chạy loop thì chạy lõi VM rẻ này, không phải full combo. Nhưng cả lõi VM rẻ vẫn phải cân với việc parry buckler / marks gloves cho Onslaught gần như miễn phí — 37.5 Spirit + một slot rune sceptre + chạy ward cạn để đổi lấy buff mà build đã có theo cách khác.

## Failure Modes

- **Redundant với nguồn Onslaught bản carry đã sẵn.** Trên bản carry, parry buckler và marks gloves đều cấp companion Onslaught không đụng ward; on-kill 50% phủ lúc clear — lấy Bodyguards là trả slot rune và 90 Spirit nếu chạy bản full, đổi về gần như 0 lợi ích ròng. Failure Mode này **không** áp cho bản zoo no-weapon-swap: nó không có parry/marks nên loop không redundant, đây là engine Onslaught chính của nó.
- **Đánh đổi phòng thủ thật.** Giữ Onslaught up = giữ ward ≤35% suốt trận = chạy lớp đệm 1-life gần rỗng đúng lúc boss cày DPS dài cần nó đầy. Build không HC-safe càng phơi ra.
- **Onslaught biên mỏng.** ~11–15% additive sau khi Haste-tương-đương (Boar roll) + Commanding Rage + Snake Idol đã lấp bucket attack/cast speed — dễ không đáng một slot.
- **Đường rảnh tay tựa lên mắt chưa test.** Trigger-chain "Repulsion Wave (đã trigger) → kích Manifest Rune của VM" chưa nguồn nào xác nhận; và dù chạy thì thừa với mọi build pilot còn tự attack.
- **Spirit floor.** Full combo 112.5 effective Spirit trên build spirit-capped là đắt cho một buff thừa; lõi VM rẻ 37.5 vẫn phải cạnh tranh với nguồn Onslaught miễn phí hơn.

## Test plan

Những thứ datamine không giải được, đo trong client trước khi commit currency + respec (PoB2 không model pool Runic Ward, companion AI, VM trigger, hay Spirit Walker bonus):

1. **Trigger-chain Repulsion:** một Repulsion Wave (vốn là skill đã trigger) có kích được Verisium Manifestations không? Tách test bằng cách cất Twister, chỉ để minion đánh enemy dính Repulsion, xem manifestation có summon không.
2. **Blasphemy + Repulsion:** curse áp qua Blasphemy aura có vẫn nổ Repulsion Wave khi hit cursed-target không, hay aura chỉ phủ Fragility mà mất phần trigger.
3. **Onslaught uptime so sánh:** đo uptime companion Onslaught từ glove "on Hitting Marked" và buckler "on parry" (đã có sẵn) đặt cạnh Bodyguards-via-ward — nguồn nào ổn hơn mà không phải chạy ward cạn.
4. **Hành vi cap + ward equilibrium:** VM ở 10/10 manifestation có block (ngừng tiêu ward) hay thay con cũ nhất (tiếp tục tiêu); với gear thật (max ward + ward cost efficiency từ boots) dải ward in-combat đứng ở đâu, breakpoint giữa ward-cost-per-summon và 5%-của-max-pool nghiêng bên nào, và stretch không-đánh bao lâu thì Onslaught tắt.

## Version History

### 2026-06-09 — fold 0.5.1

- 0.5.1 (05/06) không động tới lõi loop: Verisium Manifestations, Warding Rune of Bodyguards, Onslaught, Trusted Kinship và reservation efficiency đều giữ nguyên — loop ổn định về cơ chế qua hết point-release đầu tiên. 0.5.1 còn fix một crash "Number of shared states is different on client and server" do Unique Tamed Beast gây ra, đỡ cho build companion.
- Repulsion Triggered Wave thêm base Critical Strike Chance 6% (0.5.1) — buff nhỏ cho nhánh Repulsion tuỳ chọn, không đổi câu hỏi trigger-chain.
- Thêm cảnh báo Olroth's Resolve: bản rework (live từ 0.5.0, patch note 0.5.1 mới ghi) regen 2.5-5% maximum Runic Ward/giây nên đi ngược loop — đừng đội với ward-drain.
- VM cap behavior và trigger-chain Repulsion vẫn để ngỏ làm test-plan: chưa có live reading nào để chốt.

### 2026-06-03 — verification pass

- Verify verbatim toàn bộ mảnh từ poe2db.tw live + patch note 0.5.0: VM gate + cost (7–30) Ward + 30 Spirit + 0.5s cd + limit 10 + 8s; Warding Rune of Bodyguards (Lvl 45, Limited 1); Runic Ward hồi 5%/giây; Onslaught 20% Skill Speed / 10% move (additive với attack/cast speed); Trusted Kinship -20% non-Companion reservation (patch note ground truth, wiki mirror stale).
- Resolve hai chỗ bản đầu để ngỏ: **Low Runic Ward = 35% maximum trở xuống** (trước ghi "chưa nguồn định nghĩa"); **Runic Ward 5%/giây** xác nhận (trước chỉ patch note "independent", không có rate).
- Bỏ giả định sai về level cap: "Curse does not apply to enemies above level" là cơ chế chung của mọi curse 0.5 (Despair / Enfeeble cùng đường scale 20→78), không phải lỗi riêng Repulsion — không dựng "wall" lên nó.
- Reframe theo cơ chế thật: loop chạy bằng đòn attack của chính pilot (Twister thoả gate trực tiếp), đường minion→Repulsion là thừa + còn mắt trigger-chain chưa test. Sửa luận "uptime nghịch với boss": uptime bám độ liên tục của đòn attack (grace ~4–7s khi ngừng đánh), cost thật là chạy buffer 1-life ở ≤35% suốt fight.
- Đóng verdict bằng landscape Onslaught: ít nhất năm nguồn cấp companion Onslaught ở 0.5, build đã có parry-buckler + marks-gloves → loop là cách tệ nhất, chỉ đáng khi thiếu mọi nguồn khác.

### 2026-06-02 — bản đầu

- Research-derived từ tech của Joespresso (Verisium Manifestation, 2026-05-31), front-load mắt xích trigger chưa chắc + Twister-confound, hạ Onslaught xuống additive ~11–15%, tách chi phí phòng thủ (pool 1-life) khỏi stun threshold.

## Relationships

- **related_builds** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — build đã xét loop này và không dùng: Carved Majesty gloves cấp Onslaught qua Marked target rẻ hơn, không phải drain lớp đệm 1-life. Loop chỉ còn nghĩa cho roster nguyên đàn chưa có marks gloves.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — Runic Ward / Runeforging / Kalguuran skill mà loop khai thác.
