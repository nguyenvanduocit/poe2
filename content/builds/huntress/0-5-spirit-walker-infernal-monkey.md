---
template: templates/build-template.md
document_type: build
title: Infernal Monkey Spirit Walker
status: draft
author: duocnv
created: '2026-06-12'
updated: '2026-06-12'
class: Huntress
ascendancy: Spirit Walker
league: '0.5'
patch: 0.5.2
budget_tier: medium-budget
confidence_level: MEDIUM
pob_coverage: NA
build_tags:
  primary_skill: Tame Beast
  damage_type: fire
  playstyle: companion
  content_focus: mapping
tags:
  - huntress
  - spirit-walker
  - tame-beast
  - companion
  - infernal-legion
  - tecrods-revenge
  - soul-eater
  - alpha-primate
  - 0-5
  - poe2
---

# Infernal Monkey Spirit Walker

Nhánh carry dị nhất của [Tame Beast Companion Pack](/builds/huntress/0-5-spirit-walker-companion-pack): tame một con khỉ :wiki-link{url="https://www.poe2wiki.net/wiki/Alpha_Primate"}, cắm :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Legion_I"} cho nó **tự thiêu**, và để cái chết của nó kích :wiki-link{url="https://www.poe2wiki.net/wiki/Tecrod's_Revenge"}: 20 giây không thể chết, :wiki-link{url="https://www.poe2wiki.net/wiki/Soul_Eater"} stack tới 50, attack speed cộng 40%, con khỉ phình to gấp đôi gấp ba và một mình cày nát map. Damage chính là ignite tính theo **max life của con khỉ**, nên cả hướng scale xoay quanh nhồi máu cho minion thay vì nhồi damage.

## Build Overview

Engine của build là một chu kỳ sống chết có chủ đích. Infernal Legion bắt con khỉ chịu 10% max life mỗi giây thành fire damage, đồng thời ignite mọi enemy trong 1.5-2m như thể đánh base fire bằng 10% max life của nó. Cố tình để con khỉ **0 fire res** thì nó cháy rụi trong vài giây; đúng lúc life chạm 0, Tecrod's Revenge nhảy vào: minion không chết ngay mà chiến đấu tiếp 20 giây, nhận Soul Eater và 40% increased Attack/Cast Speed. Soul Eater cho 1% Skill Speed mỗi enemy chết trong Presence, stack tới 50, nên giữa pack dày con khỉ leo lên +50% skill speed chỉ sau vài giây dọn — đánh càng nhanh, ignite lan càng nhanh, soul về càng nhanh.

Hết 20 giây con khỉ chết thật, và lỗ hổng 6 giây revive được vá bằng **Wolf Pack hy sinh đúng nhịp**: bầy sói cũng mang Infernal Legion tự thiêu, canh tier gem cho chúng chết lệch pha so với con khỉ, và theo cơ chế Reviving thì cái chết của một reviving minion reset nhịp hồi sinh của cả nhóm. Canh đúng là con khỉ revive tức thì, zero downtime, rồi lại bắt đầu cháy. Sói chết còn nuôi thêm một tầng buff: :wiki-link{url="https://www.poe2wiki.net/wiki/Amanamu's_Tithe"} cho 50% chance nhận một Abyssal Monster Modifier 20 giây mỗi lần minion được support chết, giữ tối đa 3 modifier — một bản headhunter mini chạy bằng xác sói.

Vì burn đọc theo max life, mọi nguồn minion life đều là damage: Forgotten Warden trong khung build mẹ cộng thẳng 50% max life cho companion, và anoint **Gigantic Following** quay lại bàn vì "Your Minions are Gigantic" vừa cộng life vừa là multiplier, đổi bằng 25% reduced Reservation Efficiency. Đây là build mapping đúng nghĩa: đứng giữa pack nó mạnh nhất, vào boss room vắng mob thì soul decay và phải đổi bài.

## Engine Tecrod's Revenge chạy thế nào

Tecrod's Revenge là **Lineage support**, và Lineage có rule cứng: mỗi character chỉ socket được **một bản duy nhất** của mỗi Lineage gem trên toàn bộ skill. Tức là chỉ một con trong đàn được làm berserker; mọi kế hoạch "cả đàn cùng bất tử 20 giây" chết từ rule này. Gem drop level 65 từ Large Abyssal Trove cuối :wiki-link{url="https://www.poe2wiki.net/wiki/Abyssal_Depths"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Vessel_of_Kulemak"}, mua trade ~219 exalted ≈ 1.7 div và đang leo +56% trong 7 ngày.

Chu kỳ một vòng đời nhìn theo đồng hồ: con khỉ full life tự đốt 10%/s, cộng damage mob đánh vào thì rơi về 0 trong khoảng 3-8 giây tuỳ map; vào trạng thái Tecrod 20 giây berserk; chết thật; sói chết kéo nó dậy ngay. Phần berserk chiếm đa số thời lượng nên uptime damage thực tế rất cao, với điều kiện duy nhất là nhịp sói phải khớp. Đây là phần mỏng nhất của cả build: lệch nhịp là carry biến mất 6 giây giữa pack, và độ chính xác của tween timing này mình chưa đo được trong client — khi ráp bản này, log thời gian chết và thời gian revive của khỉ với sói trong vài map đầu, chỉnh tier Infernal Legion với Feeding Frenzy trên sói tới khi hết khoảng trống.

Soul Eater có hai chiều cần nhớ. Chiều thuận: 1% increased Skill Speed mỗi stack và stack theo kill trong Presence của con khỉ, mapping pack dày là cap 50 trong vài giây. Chiều nghịch: mất stack mỗi 0.5 giây nếu 4 giây không có kill — boss room không có add là buff tan trong nửa phút. Build vì vậy có hai cấu hình gem riêng cho map và boss, swap vài socket chứ không cố một bộ chạy cả hai.

## Skill Gems & Links

Con khỉ bản mapping chạy **Infernal Legion + Minion Splash + Tecrod's Revenge + Rage + Muster**. Infernal Legion là nguồn damage kiêm nút tự huỷ; Minion Splash lan hit phys của khỉ khi nó vẫn đang vung tay giữa burn; Rage với Muster giữ nguyên vai như build mẹ. Không cắm gì tăng sống sót cho nó — chết nhanh là tính năng, không phải lỗi.

Bản bossing rút **Infernal Legion + Minion Splash + Tecrod's Revenge** ra, trả vào **Rapid Attacks + Feeding Frenzy + Heft**: con khỉ thành attacker thuần với flat phys từ Catha, vì hai lý do ignite không gánh được boss. Một là Soul Eater decay khi không có add. Hai là ignite của Infernal Legion **không stack giữa các minion** — nhiều con cùng cháy thì enemy chỉ ăn tick cao nhất, nên single target burn có trần thấp.

Bầy sói là bộ đếm giờ kiêm máy buff: **Loyalty + Feeding Frenzy + Infernal Legion + Amanamu's Tithe**, mọi gem giữ tier thấp. Loyalty cắt 30% max life của sói cho chúng chết đúng hẹn và đẩy 10% hit damage của mình sang chúng; Feeding Frenzy tier I thêm damage-taken cho sói cháy nhanh hơn; Infernal Legion tier I là đồng hồ 10%/s; Amanamu's Tithe đổi mỗi xác sói thành 50% chance một Abyssal modifier 20s cho mình, giữ 3 cái gần như thường trực khi sói chết theo chu kỳ. Tier gem trên sói là núm vặn timing — đổi tier là đổi nhịp chết, chỉnh ở đây chứ đừng chỉnh trên con khỉ.

Tầng buff cuối là **Upwelling cắm vào Discipline**: persistent support cho minion increased damage khi mana mình không đầy, ăn ~30 spirit và giới hạn một bản trên toàn bộ skill. Build mẹ vốn spam Vulnerability với Voltaic Mark liên tục nên mana gần như không bao giờ đầy — điều kiện kích hoạt tự thoả, chỉ việc trả spirit.

Exclusion check: Tecrod's Revenge là Lineage một bản duy nhất, chỉ con khỉ được cầm — sói hay bot không bao giờ có bản thứ hai (trừ khi cầm :wiki-link{url="https://www.poe2wiki.net/wiki/Solus_Ipse"} mở bản thứ hai trên skill khác); Gigantic Following không stack với support Hulking Minions, đã anoint thì đừng phí socket; ignite Infernal Legion không stack giữa các minion nên đừng cắm bản thứ hai lên sói mong cộng damage — trên sói nó chỉ là đồng hồ.

## Ghép vào khung pack hiện tại thế nào

Khung build mẹ giữ nguyên gear, và ba mảnh của nó nuôi thẳng con khỉ. :wiki-link{url="https://www.poe2wiki.net/wiki/Forgotten_Warden"} cộng 50% max life cho companion, mà burn của Infernal Legion tính theo max life nên đây là 50% more burn không tốn gì. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha's_Balance"} vẫn bơm ~247 flat phys mỗi đòn cho phần attack của khỉ giữa các tick cháy, và là toàn bộ damage của bản bossing. :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} giữ trần số lượng mở để sói với bot đứng cùng sân khấu.

Cái phải trả nằm ở spirit ledger. Anoint đổi từ Lord of Horrors về **Gigantic Following** là hệ số efficiency của tamed beast tụt từ 2.353 xuống 1.872 — mọi con trong đàn đắt thêm ~26% spirit. Pool 332 không gánh nổi cả roster damage cũ lẫn engine mới: Zekoa, Bramble Hulk, Antlion, Diretusk **park hết**, roster nhánh này là con khỉ + Wolf Pack + Discipline kèm Upwelling + Ghost Dance, dư bao nhiêu mới tính đến một hai aura bot rẻ từ [nhánh Aura Bot Zoo](/builds/huntress/0-5-spirit-walker-aura-bot-zoo). Reservation chính xác của con khỉ Extra Crits đọc trên tooltip sau khi tame rồi mới chốt được ledger — số này thay đổi theo số mod nó giữ, đừng tin con số ước lượng nào trước khi tự đọc.

Một điểm khác biệt với build mẹ phải nói thẳng: build mẹ dồn redirect (Loyalty, Romira's, Forgotten Warden) vào đàn để mình tank qua máu tụi nó. Nhánh này con carry **chủ động chết liên tục**, nên lớp redirect mỏng đi rõ rệt — Loyalty trên sói vẫn chạy nhưng sói cũng chết theo chu kỳ. Phòng thủ của mình lùi về evasion, Ghost Dance và kỷ luật dodge nhiều hơn hẳn bản pack, cộng được phần 1% less damage taken mỗi soul khi đứng cạnh con khỉ no soul thì càng tốt nhưng đừng tính nó là layer.

## Săn con khỉ và gem ở đâu

Con carry là **Alpha Primate** — rare Quadrilla ở :wiki-link{url="https://www.poe2wiki.net/wiki/Jungle_Ruins"} Act 3, base crit ~25% nên một mod **Extra Crits** là cap crit, lý do nó được chọn thay vì Zekoa cho nhánh này. Quy trình săn y nguyên pipeline build mẹ: reset checkpoint Jungle Ruins fish rare Quadrilla, đọc mod trước khi tame, ưu tiên Extra Crits rồi mới đến Hasted hay Extra Damage. Ritual capture cũng y vậy: weapon-swap despawn cả đàn trước khi Tame Beast, swap nhiều lần cho con Bear lì bug chịu biến mất. Tame Beast Q20 trước lần tame cho con khỉ sinh ra sẵn 10% Reservation Efficiency, không thì Gemcutter's Prism áp thẳng lên companion gem sau capture cũng được; level con khỉ sau capture bằng Uncut Skill Gem L20 — nhánh này level đáng trả full vì gem level là minion level, minion level là max life, mà max life là burn.

Tecrod's Revenge và Amanamu's Tithe đều là Lineage drop-restricted từ Abyss, nhưng trade rẻ: ~219 exalted và ~329 exalted. Upwelling, Infernal Legion, Feeding Frenzy engrave từ Uncut Support Gem thường, rẻ như cho.

## Budget & Investment

Giá poe2scout ngày 2026-06-12, 1 Divine = 126.6 Exalted. Phần **core của cook** rẻ hơn nhiều so với ấn tượng khi xem nó chạy:

- Tecrod's Revenge ~219 ex ≈ 1.7 div, Amanamu's Tithe ~329 ex ≈ 2.6 div.
- Uncut Skill Gem L20 cho con khỉ ~661 ex ≈ 5.2 div, cộng 4 :wiki-link{url="https://www.poe2wiki.net/wiki/Gemcutter's_Prism"} ≈ 5.5 ex cho Q20 trước khi tame. Vaal +1 sau cùng là gamble tuỳ ví.
- Con khỉ tự săn, không mua được vì tamed beast account-bound. Một buổi reset Jungle Ruins fish Extra Crits là chi phí thời gian chính.

Cộng lại quanh **10-12 div trên khung gear sẵn có** là engine chạy đủ. Phần còn lại của bản gốc trong video là chassis stat-stacking riêng của người làm ra nó, và nó đắt ở mức khác hẳn: :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"} đang 71,904 ex ≈ **568 div** và còn leo +117% trong 7 ngày; Prism of Belief bản +2 minion levels quanh 100-200 div còn bản +3 được hét 800-1,500 div trong khi floor poe2scout 1 ex toàn bản +1; From Nothing roll đúng keystone Blackflame Covenant ~144-150 div trong khi floor roll rác 10 ex; Megalomaniac trúng đúng cặp notable minion ~100 div trong khi floor 55 ex. Bốn món đó cộng Giant's Blood stat-stack 432 Int là gần nghìn div **không thuộc về engine** — nó làm con khỉ to hơn và bản thân tanky hơn, không làm chu kỳ cháy-chết-revive chạy khác đi. Mua engine trước, nhìn chassis sau, và phần lớn giá trị chassis đó khung Forgotten Warden + Catha của mình đã thay được.

Tín hiệu thị trường đáng ghi: cả cụm gem quanh build này đang tăng — Tecrod's +56%, Amanamu's +129%, Uncut Skill L20 +53% trong 7 ngày. Meta minion đang đổ tiền vào đúng những món này, muốn vào thì vào sớm.

## Failure Modes

Nhánh này làm tốt ba thứ: mapping zero-button đúng nghĩa với một con carry tự hồi vĩnh viễn, một hướng scale bằng minion life mà gear minion-life đang rẻ, và engine core ~10-12 div ngồi vừa khung gear sẵn có. Những chỗ nó gãy:

**Nhịp revive là single point of failure.** Toàn bộ uptime carry treo trên việc sói chết đúng pha với con khỉ. Bảng timing chuẩn chưa có — chính tác giả bản gốc cũng làm hỏng lần quay đầu vì sói revive khỉ sớm, cắt ngắn cửa sổ berserk. Dòng wiki về Reviving chỉ nói delay reset khi một reviving minion khác chết, không nói rõ thứ tự dậy. Ráp xong phải tự log chu kỳ trong client: thời điểm khỉ chạm 0, thời điểm chết thật, thời điểm sói chết, thời điểm khỉ đứng dậy — lệch ở đâu chỉnh tier gem sói ở đó. Chưa log được chuỗi này thì chưa coi engine là chạy.

**Boss room là nơi engine tắt.** Soul Eater decay sau 4 giây không có kill, ignite không stack giữa minion, nên bản mapping vào pinnacle là con khỉ xìu. Bản bossing swap ba socket là bắt buộc, không phải lựa chọn — và lúc đó damage quay về flat phys của Catha, nghĩa là mọi đầu tư thuần burn (Gigantic Following, minion life) đứng ngoài trận boss.

**Gigantic Following bóp ledger cả đàn.** 25% reduced Reservation Efficiency là mức đủ buộc park toàn bộ roster damage của build mẹ. Đổi nhánh là đổi cả cấu trúc đàn, không phải cắm thêm một con — và nếu sau này muốn quay về bản pack, anoint lại Lord of Horrors bằng Distilled Emotions là một khoản ma sát nữa.

**Patch sensitivity dày hơn build mẹ.** Engine đứng trên ba chân đều là ứng viên nerf: Tecrod's Revenge đang hot (+56% giá trong 7 ngày, vol thấp), Infernal Legion vừa bị halve 20%→10% ngay 0.5.0 và GGG đã chứng minh sẵn sàng đụng tiếp, còn tween revive bằng cái chết của reviving minion là loại interaction hay bị "fixed a bug where" trong patch note. Mỗi chân gãy là engine dừng, không phải yếu đi.

**Mua nhầm chassis.** Bản gốc trong video chạy Mageblood 568 div cộng jewel chase vài trăm div, và phần đó không phải build — đó là ví của creator. Copy shopping list nguyên bản là đốt nghìn div cho thứ engine 10 div không cần. Floor thật của nhánh: khung build mẹ + ba gem + một con khỉ Extra Crits; dưới floor đó thiếu Extra Crits thì con khỉ vẫn cháy vẫn revive, chỉ mất phần crit scaling.

## Verdict

Đây là nhánh cho người đã chán bản pack ổn định và muốn một engine có nhịp: con carry sống chết theo chu kỳ mình thiết kế, mapping nhanh và gần như không bấm gì. Vào tiền theo đúng thứ tự — ba gem với con khỉ trước, khoảng 10-12 div — và chỉ cân nhắc chassis đắt khi engine đã chạy mượt qua log timing thật. Trần của nhánh là boss content: swap bài bossing thì chơi được nhưng không còn là điểm mạnh, nên đây là build farm map chuyên trách hơn là all-rounder thay thế bản pack.

## Changelog

### 2026-06-12

- Viết nhánh Infernal Monkey từ phân tích engine Tecrod's Revenge: verify gem text + Lineage one-copy + Soul Eater decay + Infernal Legion 0.5 từ wiki và patch note, giá core với chassis từ poe2scout cùng ngày.

## Relationships

- **derived_from** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — build mẹ: gear, tree, Catha, Forgotten Warden và pipeline tame sống ở đó; nhánh này đổi carry và cấu trúc roster.
- **related_builds** [Aura Bot Zoo Spirit Walker](/builds/huntress/0-5-spirit-walker-aura-bot-zoo) — bản gốc của creator chạy 5 aura bot reservation thấp làm nền cho con khỉ; spirit dư của nhánh này đổ vào đúng các bot đó.
- **related_mechanics** [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt) — cơ chế tame, modifier retention, Extra Crits và đường săn rare beast mà con khỉ đi qua.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — Abyss lineage gem, Tame Beast và Spirit Walker của league 0.5 là nền của cả engine.

## Resources

- [NEW #1 ENDGAME 190% ATK Spd +300% Size GIANT MONKEY Spirit Walker Build — Mattjestic](https://www.youtube.com/watch?v=xnbUfEVwjmY) — bản gốc của engine trên chassis Giant's Blood stat-stack + Mageblood; tween revive bằng wolf timing demo live, video breakdown timing riêng được hẹn ở kênh này.
