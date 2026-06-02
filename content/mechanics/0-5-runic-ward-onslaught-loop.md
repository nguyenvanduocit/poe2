---
template: templates/mechanic-template.md
document_type: mechanic
title: Runic Ward Onslaught Loop cho Minion
status: draft
author: duocnv
created: '2026-06-02'
updated: '2026-06-02'
league: '0.5'
patch: 0.5.0
confidence_level: LOW
tags:
  - runic-ward
  - onslaught
  - minion
  - companion
  - verisium-manifestations
  - warding-rune-of-bodyguards
  - blasphemy
  - repulsion
  - 0-5
  - poe2
---

# Runic Ward Onslaught Loop cho Minion

Đây là một loop minion-buff mới mà 0.5 mở ra: dùng việc *tiêu Runic Ward liên tục* để giữ bản thân ở trạng thái "Low Runic Ward", và một sceptre rune biến trạng thái đó thành Onslaught vĩnh viễn cho cả đội minion trong presence. Nó cross-cut bốn hệ thống tách biệt — một Kalguuran skill (Verisium Manifestations), một curse (Repulsion), một rune (Warding Rune of Bodyguards), và pool Runic Ward — nhưng mắt xích quan trọng nhất của nó hiện vẫn là suy luận chưa có nguồn xác nhận.

## Mắt xích chưa chắc của loop

Nguyên loop "auto-summon" phụ thuộc vào một giả định **chưa nguồn nào xác nhận**: rằng khi một *minion* đánh trúng kẻ địch đang dính curse Repulsion, đợt Repulsion Wave nổ ra được tính là **đòn attack của người chơi**, qua đó kích Verisium Manifestations (gate "Hitting with an Attack").

Đọc verbatim từ poe2db: Repulsion là curse áp Fragility; "Hitting these enemies causes the Curse to Trigger an explosion" — text **không** nói ai phải là người đánh. Repulsion Wave là một Physical Attack ("not based on your Weapon's damage"), tồn tại và bắn khi cursed-target bị hit — phần này đã chắc. Nhưng grep poe2db cho ra **zero** dòng "counts as your attack" / "is your Attack". Hai summarizer ngoài đọc trái ngược nhau hẳn (một bên "không nhất thiết là của player", một bên "functions as player's"). Nên bước "minion hit → Repulsion Wave → tính là đòn của mình → kích VM" là suy luận thuần, cần test in-game mới biết đúng hay không.

Quan trọng hơn cho người dùng thực: nếu pilot vốn đã tự đánh bằng một attack skill (vd Twister trong build companion zoo), thì chính đòn attack của pilot **trực tiếp** thoả gate "Hitting with an Attack" của VM — không cần tới đường minion→Repulsion. Tức cái khung "0-button auto-summon" là thừa đối với bất kỳ build nào pilot còn đang vung skill attack; còn nếu muốn nó *thật sự* hands-off thì lại tựa lên đúng mắt xích chưa chắc ở trên. Đừng bán loop này như "rảnh tay tự dọn màn".

## Ba mảnh ghép — verbatim mechanic

**Verisium Manifestations** (Kalguuran skill, reservation 30 Spirit, persistent): "While active, Hitting with an Attack will spend Runic Ward to summon a Verisium Manifestation, a short-lived Temporary Minion that rapidly Attacks nearby enemies, ignoring commands." Mỗi summon tốn (7–30) Runic Ward, cooldown 0.50s, limit 10 manifestation, mỗi con sống 8s, untargetable ("Enemies will not directly engage these Minions, and can pass through them"). Đây là path *có kiểm soát* để tự rút ward pool xuống — không phải bằng cách ăn đòn enemy.

**Repulsion** (curse, tagged Spell + Attack + AoE + Trigger + Physical + Duration + Curse): áp Fragility, và khi cursed-enemy bị hit thì Trigger một Repulsion Wave physical-attack diện rộng. Gắn nó vào :wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"} ("Socketed Curse Skills apply in an Aura around you. Reserves 60 Spirit per socketed Curse") để biến curse thành aura phủ Fragility lên mọi enemy quanh mình mà không phải cast tay. Blasphemy support Repulsion ăn khớp về cơ chế vì Repulsion là Curse, nhưng compatibility chưa nằm trong support-list verbatim của poe2db — cần ráp thử trong client để chắc.

:wiki-link{url="https://www.poe2wiki.net/wiki/Warding_Rune_of_Bodyguards"} (Sceptre rune, Lvl 45, Limited to 1): verbatim "Minions in your Presence have Onslaught while you are on Low Runic Ward". Điều kiện key vào **người chơi** (you on Low Runic Ward), không phải vào minion — nên cơ chế khớp: chính mình rút ward xuống thấp qua VM, minion trong presence ăn Onslaught. Ngưỡng % chính xác của "Low Runic Ward" không nguồn nào định nghĩa — cần log lại in-game khi tự test.

## Onslaught thực ra đáng bao nhiêu — additive, không multiplicative

Phần thưởng thật của loop là :wiki-link{url="https://www.poe2wiki.net/wiki/Onslaught"} cho cả zoo, không phải auto-clear. Onslaught 0.5 verbatim = "20% increased Skill Speed and 10% increased movement speed". Skill Speed là trục hợp nhất của POE2, phủ cả attack lẫn cast speed — nghe rất rộng cho một đội 4-5 companion.

Nhưng phải đặt nó vào đúng chỗ trong công thức: "increased Skill Speed" **cộng dồn additive** cùng bucket với increased Attack/Cast Speed của minion, không phải một more-multiplier riêng. Và nó **gần trùng loại** với buff mà zoo điển hình đã chạy — Haste aura ("Allies in Presence 20% increased Attack and Cast Speed + 10% increased movement speed") gần như identical về số, cộng Commanding Rage (2% inc Minion Attack Speed mỗi 5 Rage) và Snake Idol (10% inc Attack Speed) cũng đổ vào cùng bucket. Nhồi thêm +20% increased vào một bucket đã chứa ~50%+ thì uplift biên thực chỉ ~11–15%, không phải +20%, và phần lớn là **redundant** với buff đội đã có. Việc cộng additive là chắc theo skill-speed mechanic; con số ~11–15% là ước lượng theo bucket giả định, cần đo lại khi build thật chạy.

## Uptime nghịch với boss

Vấn đề lớn hơn cả độ lớn là *khi nào* Onslaught bật. "Low Runic Ward" cần tiêu ward nhanh hơn tốc hồi 5%/s, mà VM chỉ tiêu ward khi có attack-hit lên cursed enemy. Trên **clear** (nhiều pack, nhiều hit) ward bị rút cạn → Onslaught up — nhưng đây cũng là lúc build vốn đã dọn dễ, nên buff thừa đúng chỗ nó đáng tin. Trên **boss** (đơn mục tiêu, ít hit, rút chậm) ward hồi vượt lại ngưỡng "Low" → Onslaught chập chờn/tắt — đúng vào các trận Faction Leader / Pinnacle mobile (Ocean Exploring) nơi single-target companion DPS mới là thứ quyết định. Uptime của phần thưởng vì thế **nghịch** với content mà nó được thuê để giết.

## Chi phí phòng thủ thật — pool 1-life, không phải stun threshold

Phải nói rõ một điểm dễ hiểu nhầm: rút Runic Ward xuống thấp **không** mất stun threshold. Runic Ward bị loại khỏi keyword "Defences" của 0.5 (chỉ còn Armour/Evasion/ES), và mọi nguồn stun threshold trong patch đều key theo Life/ES — ward chưa bao giờ feed stun threshold. Nên đừng viết "giữ ward thấp đánh đổi stun threshold": leg đó là non-issue.

Chi phí thật nằm ở chỗ khác và nó có thật: :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} là lớp phòng thủ chót — "energy shield in reverse, all damage taken from life before runic ward", kích hoạt khi life chạm 1, hồi 5%/s độc lập. Cố tình giữ nó cạn để thoả "Low Runic Ward" nghĩa là **chủ động vô hiệu hoá lớp đệm cứu-mạng-cuối** đúng theo EHP order. Với pool nhỏ (~100+, field-observation) và mức tiêu (7–30)/summon, pool gần như rỗng trong combat by design. Trên build vốn đã không HC-safe thì đây là một survivability cost thật, không phải buff miễn phí. Dòng Bonded của rune ("Damage of Enemies Hitting you is Unlucky if your Runic Ward has been damaged Recently") chỉ bù một phần và chỉ kích *sau khi* ward đã ăn damage — quá trễ cho one-shot.

## Spirit accounting

Chạy đủ loop tốn Blasphemy 60 + Verisium Manifestations 30 = 90 Spirit raw. Cả hai đều là non-Companion skill, nên dưới keystone **Trusted Kinship** (companion build) ăn phạt "20% less Reservation Efficiency of non-Companion Skills" → effective ~112 Spirit-equivalent (60/0.8 + 30/0.8 = 75 + 37.5). Nếu chỉ chạy lõi rẻ — VM một mình (30 → 37.5 effective) dựa vào đòn attack sẵn có của pilot để rút ward — thì chi phí chỉ ~37.5, và bỏ luôn Blasphemy + Repulsion (cùng cái mắt xích chưa chắc). Lựa chọn thực tế cho một zoo spirit-capped là chạy lõi VM rẻ, không phải full combo.

## Test plan — còn phải tự đo trong client

Đây là những thứ cần đo trước khi commit currency + respec, vì PoB2 không model được pool Runic Ward, companion AI, VM trigger, hay Spirit Walker bonus (tất cả PARTIAL/NA):

1. **Mắt xích chưa chắc:** một minion hit lên cursed enemy có làm Repulsion Wave kích Verisium Manifestations không? Tách test bằng cách *không* tự attack (cất Twister), chỉ để minion đánh, xem manifestation có summon không.
2. **Ngưỡng "Low Runic Ward":** % nào kích Bodyguards Onslaught — log uptime trên trash vs boss mobile.
3. **Spend-rate vs 5%/s regen:** pool ~100+ với (7–30)/summon có giữ "Low" persistently hay chỉ dip-rồi-hồi.
4. **Onslaught marginal:** đo DPS đội trước/sau khi đã có Haste + Commanding Rage + Snake Idol — uplift thực có còn đáng slot không, hay bị bucket nuốt.

## Version History

### 2026-06-02 — bản đầu

- Research-derived từ tech của Joespresso (Verisium Manifestation, 2026-05-31) + verify verbatim mọi mảnh từ poe2db.tw live + patch note 0.5.0. Gem text từng mảnh đã verify chắc; mắt xích trung tâm (minion hit → Repulsion Wave tính là đòn attack của mình → kích Verisium Manifestations) thì chưa nguồn nào xác nhận, cần test in-game.
- Khung honest-explainer: front-load mắt xích chưa chắc + Twister-confound, hạ Onslaught từ "multiplicative" xuống additive ~11–15% (gần trùng Haste), tách chi phí phòng thủ thật (pool 1-life) khỏi stun threshold (non-issue — ward không feed stun threshold ở 0.5).

## Relationships

- **related_builds** [Tame Beast Companion Zoo Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-zoo) — build companion zoo có thể test loop này như một alt-path; ward pool ở đó vốn là lớp đệm 1-life, loop này drain chính nó.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — Runic Ward / Runeforging / Kalguuran skill mà loop khai thác.
