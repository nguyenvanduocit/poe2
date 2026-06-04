---
template: templates/build-template.md
document_type: build
title: Infernal Legion Lich
status: draft
author: duocnv
created: '2026-05-13'
updated: '2026-05-29'
class: Witch
ascendancy: Lich
league: '0.5'
patch: 0.5.0
budget_tier: league-starter
build_tags:
  primary_skill: Infernal Legion
  damage_type: fire
  playstyle: summoner
  content_focus: all-content
tags:
  - infernal-legion
  - lich
  - walking-simulator
  - companion
  - elephant-tortoise
  - bogfeld-commoner
  - bramble-burrower
  - minion-instability
  - xophs-pyre
  - poe2
  - league-starter
  - ignite
  - dinomancer
---

# Infernal Legion Lich

Infernal Legion Lich là league starter mạnh nhất POE2 hiện tại — build chạy được từ level 22, gần như không cần skill expression, và đạt T-15 mapping dưới 7 giờ từ fresh start mà không speedrun. Core mechanic xoay quanh :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Legion_Support"} — support gem khiến minion tự đốt, deal fire damage bằng 25% max HP minion — tạo ra vòng scaling tuyến tính theo minion life mà GGG chưa bao giờ balance được kể từ khi Detonate Dead plagued POE1.

## Build Overview

Build hoạt động theo loop đơn giản: minion tự burn qua Infernal Legion → ignite mọi enemy trong radius → player chỉ cần đi theo và lượm đồ. Damage source thực tế là ignite passive từ Infernal Legion support — gem text nói rõ *"ignite enemies as though dealing Base Fire Damage equal to 25% of Minion's Maximum Life"*. Vì damage scale 1:1 theo minion life chứ không theo spell damage hay weapon DPS, mọi investment vào minion life và gem level đều trực tiếp tăng output.

Build tiến qua ba phase tự nhiên trong cùng một character, không cần respec lớn. Phase 1 là :wiki-link{url="https://www.poe2wiki.net/wiki/Essence_Drain"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Contagion"} standard Witch leveling, chạy từ act 1 đến level 22. Phase 2 là bomber setup: :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Instability"} — IL self-burn hạ spectre xuống Low Life (≤35% life), MI trigger explosion deal 15% max life as fire damage, Last Gasp giữ spectre active thêm đúng 4 giây fixed (duration không extend được qua support) kéo dài burn window, từ level 22 đến endgame mapping. Phase 3 là walking simulator thuần: tame một con Elephant Tortoise làm companion + Infernal Legion III pure burn, companion nướng nguyên map còn player đi lụm đồ.

Defense layer scale theo investment. Sớm thì Lich CI cho chaos immunity + ES stacking đủ chịu campaign và early map. Muộn thì layer thêm :wiki-link{url="https://www.poe2wiki.net/wiki/Shavronne's_Satchel"} làm engine ES sustain — implicit *"Life Recovery from Flasks also applies to Energy Shield"* biến life flask thành ES top-up, trade off là -20-30% reduced Flask Life Recovery rate nên spam frequency phải cao. Lưu ý framing: build này KHÔNG phải "low-life sustain" như nhiều guide ghi nhầm — verbatim CI mechanics *"While CI is allocated, a player always counts as being on full life but can never be on low life."* Mọi modifier "while Low Life" (Pain Attunement family, low-life flask threshold suffix) đều không proc. Đúng là **frozen-life full-life loop**: life pool literal = 1, freeze ở 1 forever bởi Eternal Life clause "Your Life cannot change while you have Energy Shield." Thêm :wiki-link{url="https://www.poe2wiki.net/wiki/Ghost_Dance"} ES recovery on dodge, và :wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Chains"} slow enemy để giảm incoming damage frequency. Endgame EHP nominal đạt 58,533, nhưng con số matter thật là physical max-hit cap 11,752 — một hit vượt ngưỡng đó là ES cạn, phần dư tràn vào life=1 và chết ngay. Armour + block + position mới là thứ chống one-shot, không phải ES pool to.

Mobility xử lý qua weapon swap mechanic cốt lõi của build. Companion teleport theo player mỗi lần swap weapon set, kết hợp :wiki-link{url="https://www.poe2wiki.net/wiki/Blink"} trên swap set cho movement speed effective rất cao dù không có dedicated movement skill trên main set.

## Skill Gems & Links

POE2 gem system không có 6-link truyền thống — mỗi skill gem có socket riêng cho support. Dưới đây là full setup theo endgame Pr3vie PoB, với note về gem nào dùng sớm trong leveling.

**Main Companion Setup:** :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} (level 24, quality 20 — sau capture thành Summon Beast: Elephant Tortoise account-bound) + :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Legion_III"} (tier 5 endgame variant) + :wiki-link{url="https://www.poe2wiki.net/wiki/Feeding_Frenzy"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Searing_Flame"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Xoph's_Pyre"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area"}.

Tame Beast verbatim gem text: *"Conjure Azmeri wisps to engulf a Rare Beast for a duration, Hindering them. If you defeat the Beast while it is engulfed in wisps, it will be captured by this gem, transforming the gem to instead allow you to summon the Beast as a Reviving Companion. While this Gem is Socketed you can view Monster Categories on Enemies. Wisp duration is (8-11.8) seconds. Tamed Beast retains up to four monster modifiers when summoned"*. Tier 9, level scaling 1-20, mana cost 22-99, requires the Beast remain alive trong wisp window. Quality +0.08-1.6 giây wisp duration — quality 20 cộng dồn 1.6 giây cho window tổng ~13.4 giây, tạo room comfortable để DPS-down một rare beast HP cao. Gem trở thành "Summon Beast: Elephant Tortoise" account-bound sau capture, không trade được, có thể level qua Uncut Skill Gem.

Elephant Tortoise verbatim từ Tame Beast wiki beast list: spirit reservation **56.1%**, drop locations **Whakapanu Island** và **Kriar Village**, wiki note nguyên văn *"Extremely high life pool. Great with Infernal Legion III"*. Wiki POE2 0.5 mirror **không có dedicated page** cho Elephant Tortoise (entry là `Elephant_Tortoise/edit.md` — page does not exist), nên HP value và damage stat là community number chưa đo được — cần log HP thực post-tame khi vào league. Community estimate post-tame HP ~80,000 (scaled theo gem level + monster modifier retain), AI base là melee tank charging vào nearest enemy. Vì spirit reservation 56.1% gần như chiếm hết spirit budget của build, đây là single companion duy nhất chạy — không có second pet song song unless allocate :wiki-link{url="https://www.poe2wiki.net/wiki/Trusted_Kinship"} keystone (verbatim: *"You can have two Companions of different types. You have 30% less Defences. Companions have +1 to each Defence for every 2 of that Defence you have"*) hoặc trang bị :wiki-link{url="https://www.poe2wiki.net/wiki/Yriel's_Fostering"}, đều không worth cost cho build này.

Mod re-roll workflow tận dụng wiki text *"Tamed Beast retains up to four monster modifiers when summoned"* — capture một Rare Elephant với 4 mods cụ thể trên rare, post-tame Elephant keep cả 4. Setup farm: chạy Whakapanu Island hoặc Kriar Village với waystone mod *"Rares have 1 additional Modifier"* (tăng từ 4 lên 5 random mods → tăng xác suất trúng Increased AoE), spawn Elephant Tortoise rare, kill mọi rare khác trước rồi engage Elephant một mình với Tame Beast active. Nếu mod roll xấu (không có Increased AoE), leave map (không complete) → quay lại reroll session khác. Trung bình 3-7 giờ cho một roll Elephant có Increased AoE + 1 supplementary mod (Haste Aura / All Damage Chills / Periodic Invulnerability Aura / ES Aura), community-tested rate.

Feeding Frenzy I verbatim: *"Supports skills which create Minions, making them deal and take more damage. Cannot support skills which create undamageable Minions. Minions from Supported Skills deal 30% more Damage. Minions from Supported Skills take 20% more Damage"* (tier 3 support, +5 Int). Feeding Frenzy II verbatim same 30% more damage nhưng giảm penalty xuống *"Minions from Supported Skills take 15% more Damage"* (tier 4). Note: 0.3.0 patch wiki version history — "many existing support gems have received small numerical balance changes, and the effects of some support gems have been combined into a single gem"; gem POE2 0.5 hiện tại KHÔNG còh AI mode toggle như POE1's Feeding Frenzy buff stack (POE1 gem chuyển minion sang aggressive AI khi proc), chỉ pure damage multiplier với penalty. Trade-off 20% more damage taken không matter vì Elephant Tortoise HP pool đủ lớn để absorb 20% buff penalty, đặc biệt khi Nurturing Guardian flask channel sustain HP.

Companion teleport-on-weapon-swap behavior: claim "companion TP theo player mỗi lần swap weapon set" là gameplay observation community-tested — wiki POE2 0.5 mirror không có verbatim text confirm cơ chế này trong Companion.md hoặc Weapon_Set.md, nên cần quan sát lại in-client khi vào league. Treatment thực tế trong build là layer mobility — kết hợp Blink trên weapon swap set tạo vòng lặp swap-Blink-swap-back, companion re-position theo player; nếu cơ chế teleport không exact như claim, ít nhất companion AI re-target player position sau swap event, hiệu quả thực chiến tương đương. Khi pinnacle boss có nhiều danger zone, position companion chủ yếu qua Blink vòng — pre-blink để companion follow vào safe zone trước khi boss AoE trigger.

Infernal Legion III verbatim gem text (tier 5): *"Minions from Supported Skills take 30% of their maximum Life as Fire Damage per second. Minions from Supported Skills Ignite Enemies within a radius of 2 metres as though dealing Base Fire Damage equal to 25% of Minion's Maximum Life"*. Wording *"as though dealing Base Fire Damage"* là key — đây là **non-hit synthesized ignite source**, cùng pattern với Flame Wall, Birth of Fury, Saitha's Spear. Magnitude tính trực tiếp từ 25% × companion HP, không qua Hit pipeline, không qua Flammability roll. Hệ quả mechanic: mọi modifier có gate "from Hits" KHÔNG apply lên IL ignite channel — precedent rõ ràng nhất là Minion Instability wiki entry explicit *"Minion Instability does not scale with the Gain X% of Damage as Y modifier"* cho cùng class non-hit synthesized damage event.

Searing Flame II verbatim (tier 4 fire support, +5 Str): *"Supports any skill that Hits enemies, causing inflicted Ignites to deal more damage but its Hits to deal less damage. Supported Skills deal 30% less Damage with Hits. 100% more Magnitude of Ignite inflicted with Supported Skills"*. Searing Flame I tier 3 cho 75% more magnitude với 25% less hit damage. Gem text mở đầu *"Supports any skill that Hits enemies"* — đây là **gate clause cấp gem-attachment**: gem yêu cầu skill được support có khả năng Hit, không phải gate cấp effect line. Tame Beast tạo companion có auto-attack (Hit), gem attach hợp lệ; effect line "100% more Magnitude of Ignite inflicted with Supported Skills" sau đó wording broad. Caveat cần test: clause "inflicted with Supported Skills" parallels Xoph's Pyre clause "Damage from Hits with Supported Skills" — cùng "Supported Skills" referent. Nếu Xoph's Pyre effect line không reach IL synthesized ignite (vì IL là gem khác, không phải Tame Beast Supported chain), thì Searing Flame effect line cũng same risk. Treatment trong build doc giữ Searing Flame là pillar multiplier với khoảng 75-100% more ignite magnitude apply lên IL channel, cần PoB falsifier confirm khi vào league; trade off 25-30% less hit damage trên auto-attack channel không quan trọng vì damage source build là DoT ignite, không phải hit. Pre-falsifier-confirm, treat Searing Flame II + Xoph's Pyre cùng một cụm chưa-verify — không tách Searing Flame chắc / Xoph yếu như framing asymmetric pre-audit.

Magnified Area II verbatim (tier 3, +5 Int, cost & reservation multiplier 130%): *"Supports any skill with an area of effect, making it larger. Supported Skills have 45% increased Area of Effect"*. 0.4.0 patch verbatim *"Magnified Area II support gem no longer causes the supported Skill to deal less damage"* — pre-0.4.0 gem có damage penalty đã được removed, hiện tại pure upside. AoE scale theo radius² nên radius bonus = sqrt(1.45) - 1 ≈ +20% → IL radius 2 m → ~2.41 m effective. Không phải double radius, nhưng đủ để cover medium pack từ xa thay vì phải đứng sát.

Xoph's Pyre verbatim (lineage support, requires level 65, +5 Str, cost & reservation multiplier 120%): *"Supports Skills that can cause Damaging Hits, granting extra Chaos damage and causing Chaos damage to Contribute to Ignites. Chaos Damage from Hits with Supported Skills also Contributes to Flammability and Ignite Magnitudes. Supported Skills Gain 40% of Fire Damage as Extra Chaos Damage"*. Đọc kỹ 2 effect line:

(1) *"Chaos Damage from Hits with Supported Skills also Contributes to Flammability and Ignite Magnitudes"* — **double-gated trên Hit**: chaos damage phải từ Hits, và phải "with Supported Skills". IL synthesized ignite không phải Hit, không phải "with Supported Skills" theo strict reading (Tame Beast là Supported, IL là gem khác). Effect line này không qualify lên IL channel.

(2) *"Supported Skills Gain 40% of Fire Damage as Extra Chaos Damage"* — thuộc class **"Gain X% of Damage as Y"**. Minion Instability wiki entry explicit declared exclusion verbatim *"Minion Instability does not scale with the Gain X% of Damage as Y modifier"* (precedent đã verify). Cùng class exclusion logic apply: IL synthesized ignite *"as though dealing Base Fire Damage"* là non-hit damage event same class với MI explosion, "Gain X% as Y" modifier không scale. Effect line này cũng không qualify lên IL ignite channel.

Uplift thực tế qua IL channel ≈ **0-15%**, chỉ đến từ auto-attack hit channel của companion mà thường bị IL ignite "highest ignite only" stacking rule override (chỉ ignite mạnh nhất tick trên enemy, IL ignite từ 25% × 80k HP ≈ 20k base luôn mạnh hơn auto-attack ignite tick).

**Falsifier test explicit cho cả 2 gem**: PoB toggle Searing Flame II và Xoph's Pyre riêng từng cái, đọc IL ignite tick delta:
- Searing Flame II off → on, delta ≥80% confirm "inflicted with Supported Skills" clause reach IL channel (coi là multiplier thật trên IL channel); delta <30% refute, treat Searing Flame là dead slot trên IL channel
- Xoph's Pyre off → on, delta ≤10% confirm gate analysis (Xoph không amplify IL); delta ≥30% refute, IL ignite có path qualify Hit-gated modifier mà chưa rõ

Cả 2 test nên chạy độc lập trên cùng PoB snapshot. Cross-reference: Minion Instability wiki explicit exclusion là precedent strongest cho class "Gain X% as Y" không scale non-hit synthesized damage event.

Cùng class reach question là **minion damage bonus vs non-unique/unique enemies** — một bonus innate cho minion với magnitude ~25-35% vs non-unique và ~20-25% vs unique ở late-game, và bonus này **không nằm trong số DPS minion mà PoB/tooltip hiển thị**. Vì IL ignite là non-hit synthesized "as though dealing Base Fire Damage", chưa rõ một modifier dạng "more minion damage" có scale magnitude của nó hay chỉ áp lên hit channel (auto-attack companion). Falsifier: trong PoB so IL ignite tick khi target là non-unique vs unique — delta khớp ~25-35% / ~20-25% thì bonus reach IL channel (DPS thực cao hơn số hiển thị đúng khoảng đó); delta phẳng thì bonus chỉ sống trên hit channel và số IL display của PoB là chính xác. Đo khi vào league vì PoB chưa chắc model bonus này.

Pre-Xoph's build vẫn online hoàn toàn vì IL ignite không phụ thuộc gem này (worst case Xoph delta = 0); gem giá trị nhất ở phase secondary skill (Frost Bomb / Storm Mage shock proc via fire→chaos→ignite contribution qua Hit channel hợp lệ).

Feeding Frenzy I (tier 3) thêm 30% more minion damage, 20% more damage taken — gem text focus damage uplift, không phải explicit AI change.

**Bomber Setup (Leveling → Early Mapping):** :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Legion"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Instability"}. Đây là setup dùng từ level 22 đến khi có Elephant Tortoise endgame.

Cơ chế đọc thẳng từ gem text. Bind Spectre verbatim mang tag `[Minion]` `[Persistent]` — Persistent tag là gate cho Last Gasp support, gem text Last Gasp viết *"Supports skills that create Persistent Minions, causing those Minions to fight on when they are fatally wounded, dying after a short duration or when they take further damage exceeding their maximum Life. Minions from Supported Skills die 4 seconds after their Life is reduced to 0"*. Cố ghép Last Gasp với skill không có Persistent tag thì support invalid, không trigger được. Infernal Legion I gem text verbatim *"Minions from Supported Skills take 20% of their maximum Life as Fire Damage per second"* — đây là self-burn channel hạ spectre HP linearly. Minion Instability gem text verbatim *"Minions from Supported Skills explode when reduced to Low Life, dealing 15% of their maximum Life as Fire Damage to surrounding Enemies"*, kết hợp với wiki's "Mechanics and Interactions" clarification verbatim *"Minions summoned from the Supported Skill must be reduced to Low Life to explode. Anything that causes a minion to die without ever having low life (e.g. dying in 1 hit, replacement, expiring duration) will not cause an explosion"*.

Damage chain closed-form per explosion (formula chắc; HP plug-in là số community-tested, cần log khi vào league): `damage = 0.15 × H_spectre` với `H_spectre` là max HP của spectre đã capture. Time-to-trigger phụ thuộc IL self-burn rate 20% max life/giây — spectre full HP rơi xuống 35% Low Life threshold trong `(1 - 0.35) / 0.20 = 3.25` giây nominal, nhưng Last Gasp window 4 giây fixed bắt đầu từ HP=0 (sau khi spectre đã chết) thêm vào pipeline thêm 4 giây IL burn radius tick deal AoE ignite trước khi spectre disappear. Effective bomber cycle ≈ 3.25s ramp + 4s Last Gasp burn window + weapon-swap-resummon overhead (1-2s) ≈ 8-9s per spectre per cycle. Với nhiều spectre cùng socket qua spirit stack, cycle hoạt động staggered — luôn có một spectre đang explode trong khi spectre khác đang ramp.

Boss DPS breakpoint phụ thuộc spectre HP value mà wiki POE2 mirror **không export verbatim** cho từng spectre cụ thể. Bramble Burrower (Hunting Grounds, Act 1) HP community-tested rất thấp — chính là lý do nó chỉ work ở act 1-2, IL burn kill nó trong vòng giây. Bogfeld Commoner ở mid-campaign cộng đồng test report ~43,000 HP (số community-tested, wiki chưa có page — cần đo lại khi vào league). Plug vào formula: damage per MI explosion ≈ `0.15 × 43,000 = 6,450` fire damage HIT secondary (verbatim Minion Instability wiki: *"The explosion is an area hit from the minion, dealing secondary damage. Its base critical hit chance is 0%"*). Đây là hit, không phải ignite, nên scale qua nguồn fire damage modifier `[from] Minion` thay vì ignite magnitude. Endgame Elephant Tortoise nếu dùng cho bomber phase (thường không, vì Elephant đắt và build switch sang pure IL walking simulator) community estimate ~80k HP → ~12k damage per explosion (số community-tested, wiki chưa có page — cần đo lại khi vào league).

Tip thực chiến: weapon swap reset spectre pool — swap weapon set off rồi swap on lại resummon spectre với max HP. Có một bug 0.3.1b đã fix verbatim *"Fixed a bug where Minion Instability was able to trigger on Spectres that had been removed after weapon swapping"* (wiki version history), nghĩa là pre-0.3.1b có exploit triple-explosion. Hiện tại swap-off-then-on reset spectre clean, không double-trigger. DPS single target rất cao vì mỗi MI explosion là individual hit lớn, có thể stun boss và skip phase transition.

Hidden exclusion check cho Minion Instability — wiki explicit *"Minion Instability does not scale with the Gain X% of Damage as Y modifier"*. Nodes như Seething Body không tăng explosion damage. Đây là precedent quan trọng cho gate analysis của Xoph's Pyre ở phần "Main Companion Setup" — cùng class "Gain X% as Y" exclusion cho non-hit synthesized damage event của IL ignite channel.

**Curse Stack (triple-curse via Whispers of Doom):** Blasphemy aura chứa :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Chains"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Weakness"} cùng socket → manual cast :wiki-link{url="https://www.poe2wiki.net/wiki/Despair"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Cursed_Ground"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Heightened_Curse"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Decaying_Hex"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Prolonged_Duration"}. Support stack cho Blasphemy: :wiki-link{url="https://www.poe2wiki.net/wiki/Slow_Potency"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Ritualistic_Curse"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area"}.

Curse cap math POE2 0.5: base 1 + Incessant Cacophony ascendancy +1 + :wiki-link{url="https://www.poe2wiki.net/wiki/Whispers_of_Doom"} keystone +1 = **cap 3 curses cùng lúc**. Whispers of Doom verbatim *"You can apply an additional Curse. Double Activation Delay of Curses"* — keystone top-side passive tree, allocate path cost 2-3 point depending entry. Downside 2x activation delay (1.5s → 3s) không matter cho mapping vì Incessant Cacophony infinite duration curse persist across pack engagements; cho boss fight chỉ cần pre-cast Despair 1 lần ngoài aggro window. Bandwidth tradeoff: +1 curse layer trade off 1.5s slower curse activation — ROI cao vì layer 3rd curse mở channel chaos→ignite chain (xem detail Evergrasping Ring + Xoph's Pyre interaction phần dưới).

Blasphemy verbatim (tier 8 meta gem): *"Turn socketed Curse skills into vile Auras, applying their effects to all nearby enemies. Socketed Curse Skills apply in an Aura around you. Reserves 60 Spirit per socketed Curse"*. Khác key vs guide cũ: pack **2 curse vào cùng 1 Blasphemy meta gem** thay vì 1 Blasphemy + 1 manual riêng. 2 curse cùng socket = 60 × 2 = **120 spirit reservation aura**, gấp đôi cost nhưng nhận lại Elem Weak luôn-on (-49% all ele res = +49% fire ignite DoT) thay vì phải spam manual cast khi engage boss. Spirit budget Lich endgame ~250-300 (qua Crystalline Phylactery + spirit gear), 120 reservation = 40-48% — vẫn dư cho companion + skeleton utility.

Temporal Chains gem text verbatim (tier 7 spell): *"Curse all enemies in an area, Slowing them and making other effects on them expire more slowly. Curse applies after 1.5 seconds delay. Curse radius is (1.5-3.1) metres. Curse Slows targets by (40-59)%. Curse duration is (6-7.4) seconds. Curse makes other effects on targets expire 25% slower. Curse does not apply to enemies above level (20-0)"*. Level cap clause quan trọng leveling: gem level 1 chỉ curse enemy ≤ level 20, level 20 hết cap. Mid-campaign mới curse boss tier thấp; endgame gem level 20 mới fully unlock cho mọi boss. 25% slower ailment expiry = ignite tick stay trên target lâu hơn → tick count tăng → effective DPS uplift.

Elemental Weakness verbatim (tier 7 spell, 0.3.0 consolidation patch): *"Curse all targets in an area after a short delay, lowering their Elemental Resistances. Curse applies after 1.5 seconds delay. Curse inflicts -(40-59)% to Elemental Resistances. Curse radius is (1.5-3.1) metres. Curse duration is (6-7.4) seconds"*. Gộp Flammability/Hypothermia/Conductivity từ pre-0.3.0 thành 1 curse duy nhất shred cả 3 res. Đây là direct ignite DPS multiplier — gem level 20 endgame cho -49% fire res → +49% fire ignite tick.

Slow Potency verbatim: *"Debuffs inflicted with Supported Skills have 15% increased Slow Magnitude"* (tier 1, +5 Dex). Apply lên Temporal Chains slow 40-59% × 1.15 → 46-68% effective. Magnified Area II verbatim *"Supported Skills have 45% increased Area of Effect"* — radius² scale → effective radius +sqrt(1.45)-1 ≈ +20%. Ritualistic Curse verbatim *"Supported Skills have 50% increased Area of Effect / Curse zones from Supported Skills erupt after 30% more delay"* — stack với Magnified Area cho AoE multiplier 1.45 × 1.50 = 2.175 = +117.5%, radius effective ~1.5×; +30% delay penalty chấp nhận được vì Blasphemy aura always-on.

**3rd curse — manual cast Despair:** Despair verbatim (tier 9 spell, chaos curse): *"Curse all targets in an area after a short delay, lowering their Chaos Resistance. Curse applies after 1.5 seconds delay. Curse inflicts -(35-49)% to Chaos Resistance. Curse radius is (1.5-3.1) metres. Curse duration is (6-7.4) seconds"*. Decaying Hex support verbatim (tier 3 curse support, +5 Int, 130% cost mult): *"Supported Skills inflict Decay, dealing 100% of Intelligence as Chaos damage per second for 8 seconds"* — với INT stack 250-300 endgame, Decay tick ~250-300 chaos/sec/target trong 8s window. Heightened Curse verbatim *"Supported Curses have 25% increased Magnitudes"* (tier 1) push effective shred -49% × 1.25 = **-61% chaos res**.

Despair 3rd curse value gear-gated trên :wiki-link{url="https://www.poe2wiki.net/wiki/Evergrasping_Ring"}: verbatim *"Allies in your Presence Gain (15-25)% of Damage as Extra Chaos Damage / Enemies in your Presence Gain (6-12)% of Damage as Extra Chaos Damage"*. Companion equipped trong presence → auto-attack hit gain 15-25% chaos extra → Despair -61% shred amplify channel → Xoph's Pyre Effect 1 *"Chaos Damage from Hits with Supported Skills also Contributes to Flammability and Ignite Magnitudes"* converts chaos to ignite contribution **trên companion hit channel** (real Hit, qualify gate, khác IL synthesized ignite). Pre-Evergrasping/pre-Xoph stacking, 3rd curse Despair value = chỉ Decaying Hex chaos DoT (~250-300/sec/target) + chaos res shred cho rare-mod buff từ Headhunter (nếu equipped). Post-gear, combined channel uplift ~30-50% (cần PoB toggle test confirm gate interpretation khi vào league).

Bandwidth thực tế stack curse layer: enemy chậm 46-68% + bị shred -49% all ele res + -61% chaos res + ăn chaos DoT ~250-300/sec từ Decay. Cứng cả 3 phương diện damage, slow, ailment-expiry. Aura radius 5.6m diameter, Despair manual radius ~3.1m endgame (Magnified Area amplify 20% → ~3.7m).

**Alternative path :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Allure"} (skip Whispers of Doom):** Atziri's Allure lineage support verbatim (Level 65 requirement, +5 Int): *"Supports Curse Spells you cast yourself, causing those Curses to ignore the usual Curse Limit, but be reflected back to you when inflicted / Curses inflicted by Supported Skills ignore Curse limit / Curses inflicted by Supported Skills are reflected back to you / Supported Skills have 20% less Curse Effect"* (0.4.0 nerf 25%→20%). Cho phép 3rd (hoặc 4th+) curse bypass cap mà không cần WoD keystone, nhưng penalty 20% less curse effect = -10% effective shred. Reflection clause reflect curse lên player → CI defang chaos curse hoàn toàn (life=1 không thể chịu chaos, ES không ăn chaos qua CI keystone). Drop từ Anomaly bosses Ytzara, Blood Oracle và Maztli, Flesh-Shaper trong Sealed Vault — drop level 65 restricted.

Lich path với Incessant Cacophony + WoD cap 3 **không cần** Atziri's Allure. Atziri's Allure value chủ yếu cho Shaman/Druid path (không có Incessant Cacophony, cap = 2 sans Atziri), hoặc push 4th-5th curse stack với diminishing returns penalty 20% per gem socket. Skip cho Lich path standard.

**Dialla's Desire relocation note (vs guide cũ):** Dialla's Desire verbatim (Level 65, 90% cost mult): *"+1 to Level of Supported Skill Gems / +10% to Quality of Supported Skills"*. Guide cũ socket Dialla trên Blasphemy curse channel; video Lich PoB (Ranny El) move Dialla sang IL spectre channel (cùng socket với Infernal Legion III + Xoph's Pyre + Feeding Frenzy II + Muster). Lý do: +1 gem level trên Spectre: Gargantuan Wasp / Tame Beast → +1 companion HP scaling tier → trực tiếp tăng IL ignite base 25% × H. ROI tier-zero so với +1 Temporal Chains level (chỉ tăng slow magnitude 1-2%). Curse channel mất 60 × 0.9 = 54 spirit saving của Dialla — chấp nhận trade-off vì spirit budget thoải mái với layout này.

**Exposure:** :wiki-link{url="https://www.poe2wiki.net/wiki/Frost_Bomb"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Compressed_Duration"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Potent_Exposure"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Cooldown_Recovery"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Rapid_Casting"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area"}. Frost Bomb apply Elemental Exposure (bắt đầu -20% all elemental res, ramp lên -50% qua mỗi pulse). Potent Exposure tăng exposure magnitude baseline. Đây là layer -res mạnh nhất build có — stack trên Elemental Weakness curse để shred res boss nặng.

**Shock Bot:** :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Storm_Mage"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Overcharge"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Tecrod's_Revenge"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Muster"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Feeding_Frenzy"}. Storm Mage native lightning damage tự rải shock onto enemy — kết hợp Overcharge để boost shock magnitude. Enemy luôn ignited → shock interaction overlap không drop. Shock magnitude 50% = enemy ăn 50% more damage từ mọi source kể cả IL ignite.

**Heal/Utility:** :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Cleric"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Meat_Shield"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Rapid_Casting"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Army"}. Cleric heal companion + player ES, đặc biệt quan trọng khi IL self-burn damage companion liên tục.

**Boss Damage Button:** :wiki-link{url="https://www.poe2wiki.net/wiki/Pain_Offering"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Prolonged_Duration"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Sacrificial_Offering"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Danse_Macabre"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Brutus'_Brain"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area"}. Sacrifice skeleton warrior → boost damage of remaining minions. Press khi engage boss để spike DPS.

**Sacrifice Fodder:** :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Warrior"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Sacrificial_Lamb"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Deathmarch"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Meat_Shield"}. Skeletal Warrior granted từ Rattling Sceptre equipped, tồn tại duy nhất để làm thức ăn cho Pain Offering.

**Mobility (Weapon Swap):** :wiki-link{url="https://www.poe2wiki.net/wiki/Blink"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Ingenuity"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Convalescence"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Second_Wind"}. Blink trên weapon swap set cho 2 charge (Second Wind), CD effective 1.7s nhờ CDR stacking trên swap gear. Vòng lặp: swap → blink → swap back → companion TP theo.

## Ascendancy

Lich ascendancy chọn vì identity của nó là low-life + curse explode + ES sacrifice — ăn khớp với engine của build hơn bất kỳ ascendancy Witch nào khác.

Lich tree là một flat list 9 notable kết nối qua prerequisite chain, không chia trial-cluster. Allocation order ưu tiên theo identity của build, không theo "lab thứ mấy":

**Soulless Form → Eternal Life** là pillar frozen-life engine của build. Soulless Form (preceding: Life) verbatim: *"Regenerate Mana equal to 6% of maximum Life per second. No inherent Mana Regeneration. 10% of Damage taken bypasses Energy Shield."* Eternal Life (requires Soulless Form) verbatim: *"Your Life cannot change while you have Energy Shield."* Cặp này freeze life value khi ES > 0 → permanent ES-as-pool state.

Hai cái bẫy mechanic mà gần như không guide cộng đồng nào nói rõ:

**Bẫy 1: Soulless Form không sustain mana dưới CI**. GGG patch 0.2.0 verbatim: *"Setting a stat to a specific value (such as Chaos Inoculation setting your life to 1 or Blood Magic setting your mana to 0) now occurs before conversion is applied to that stat."* CI cap life=1 apply TRƯỚC Soulless Form đọc max life value. Effective mana regen = 6% × 1 = **0.06 mana/sec ≈ 0**. Mọi build guide claim "Soulless Form sustain mana cho CI Witch" đều sai math. Build thực tế sustain mana qua mana flask "of the Mixologist" + mana-on-kill ring affix. Soulless Form chỉ có giá trị duy nhất ở vai trò **prerequisite cho Eternal Life**, không phải mana sustain.

**Bẫy 2: Eternal Life biến penalty bypass thành free 10% less damage**. Đọc penalty Soulless Form "10% damage bypass ES" tưởng là trade-off chết người dưới CI life=1, nhưng Eternal Life mechanics verbatim: *"The damage you would have taken to life that bypasses energy shield is ignored until energy shield is fully depleted, effectively granting an equivalent less damage taken modifier."* Hit 1000 → 100 bypass ES → bypass-portion-to-life ignored → effective 900 damage tới ES, 0 tới life. Net = **free 10% less damage taken** miễn là ES không cạn. Đây là layer defensive mà ai cũng miss khi đọc Soulless Form penalty đầu tiên.

**Failure mode**: Engine sụp khi single hit vượt full ES pool. Verbatim Eternal Life: *"If a single hit deals enough damage to fully deplete energy shield, the remainder of the damage is fully taken to life."* Một hit 9k phys vào ES 7,987 là ES cạn, ~1k overflow tràn vào life=1, chết ngay dù EHP nominal trên giấy là 58,533. **Max-hit cap 11,752 phys mới là con số cần giữ**, không phải ES pool. Mitigation đến từ armour + block (~73% từ shield Bitterbind Point analog) + position (đừng đứng trong slam telegraph) + Eternal Life 10% less damage layer.

**Triple-application flask press**: Một life flask press dưới setup này trigger 3 sustain channel cùng lúc: (1) áp vào player life — wasted vì life=1 freeze, (2) áp vào player ES qua Shavronne implicit — engine ES sustain chính, (3) áp vào companion HP qua :wiki-link{url="https://www.poe2wiki.net/wiki/Nurturing_Guardian"} notable (main tree Companion cluster) verbatim *"Life Recovery from your Flasks also applies to your Companions."* Một button, 3 channel sustain — Tier-zero ROI cho passive tree path Companion cluster.

Math chain ES sustain cụ thể (Pr3vie endgame): Greater Life Flask base recovery 500/sec × 3 sec × "of Saturation" suffix (+50%) = 2,250 base → Shavronne 25% reduced rate = 1,690 effective → redirect sang ES qua implicit = **+1,690 ES per press ≈ 21% pool restored/button**. Spam 4-5 flask trong combat sustain ES floor ổn định.

**Anti-synergy must-avoid**:
- **Zealot's Oath**: Wiki Eternal Life explicit *"Eternal Life will prevent recovery of energy shield from excess life recovery with Zealot's Oath."* Life regen → ES conversion assume life change event; Eternal Life freeze life → no change → 0 ES gain. Allocate = wasted point.
- **Lifetap / Blood Magic support**: Verbatim Eternal Life *"unable to use any skill or effect that requires you to spend life in order to occur."* Skill có life cost fail cast check.
- **Heavy Buffer + stack thêm bypass**: Soulless Form đã 10% bypass. Heavy Buffer +10% → 20% total. Eternal Life vẫn ignore bypass-to-life miễn ES > 0, nhưng max-hit threshold rớt ~12% (11,752 → ~10,400 phys). Tránh stack thêm bypass source.
- **Demon Stitcher gloves "Sacrifice X% Life to gain ES"**: Sacrifice = X% × 1 = 0 → gain = 0 ES. Wiki *"It is possible to use effects that sacrifice life, but no life will actually be sacrificed."* Inert.
- **Mặc Stygian Vise rare thay Shavronne**: Engine sụp ngay — không có Shavronne implicit, life flask press = 0 ES restore. Shavronne mandatory, không substitute.

**Order allocation**: Allocate CI keystone trước (level 60-65) → Soulless Form + Eternal Life sau khi life đã cap=1. Nếu pick Eternal Life khi life vẫn ở value passive tree calc (vd 800-1200), life freeze ở giá trị đó → leveling phase tiếp theo bị block khỏi mọi life recovery (flask không heal, regen không tick) → khó play act 6-10.

**Rupture the Soul → Incessant Cacophony** là pillar curse + explode của build. Rupture the Soul verbatim (Lich notable, preceding Curse Area): *"Cursed Enemies killed by you, or by Allies in your Presence, have a 33% chance to explode, dealing a quarter of their maximum Life as Chaos damage"*. Hai key clause: (1) "Allies in your Presence" — bao gồm companion (Elephant Tortoise) và mọi minion khác trong presence radius, nên ignite kill từ IL channel **qualify trigger explosion** dù damage source là minion synthesized ignite, không phải player direct hit; (2) "a quarter of their maximum Life as Chaos damage" — 25% max HP của enemy chết, không scale theo player damage stat, không scale theo minion damage stat — chỉ scale theo HP enemy chết. Pack trash 5,000 HP → explosion = 1,250 chaos damage AoE; rare 50,000 HP → 12,500 chaos AoE.

Chain-clear pack math: enemy đầu tiên trong pack chết qua IL ignite tick → roll 33% → trigger 25%-max-HP chaos explosion → AoE damage tới enemy adjacent → các enemy adjacent đã được Temporal Chains slow nên không thoát kịp, ăn full chaos splash → nếu splash đủ low-life threshold thì IL ignite cycle current tick finish kill chain → trigger roll 33% lần kế. Probability chain-clear pack 6 enemy: probability không có explosion nào trigger trong 6 kill = `0.67^6 ≈ 0.090` (9%), nghĩa là **91% pack 6 enemy có ít nhất 1 explosion trigger** trong cycle clear. Với multi-trigger (mỗi kill independent 33%), expected explosions per pack 6 = `6 × 0.33 = 2 explosions` average. Đây là chain-pop engine khiến walking simulator phase clear quá nhanh — player đi qua, IL ignite tick 1-2 enemy, explosions trigger pop pack còn lại.

Player self-safety dưới chain-explode: CI chaos immunity (life=1 không thể chịu damage, ES không ăn chaos qua CI keystone) → chain explosion player-adjacent literally 0 damage tới character. Đây là synergy critical — build mà không CI thì chaos splash từ Rupture the Soul có thể oneshot player nếu đứng giữa pack. CI defang risk đó hoàn toàn.

Incessant Cacophony verbatim (Lich notable, requires Rupture the Soul): *"You can apply an additional Curse. Curses you inflict have infinite Duration"* (0.3.0 patch renamed from "Dominion over Flesh" và changed effect từ Hexproof-bypass thành infinite duration). Mở dual-curse cho Temporal Chains aura (Blasphemy-driven, always-on) + Elemental Weakness manual cast cùng lúc. Infinite duration clause critical cho boss fight: cast Elemental Weakness 1 lần đầu fight → curse không bao giờ expire, không cần recast giữa long phase, freeing button uptime cho Frost Bomb + Pain Offering rotation. Đây là quality-of-life upgrade lớn cho pinnacle fights kéo dài 1-2 phút.

**Crystalline Phylactery** (preceding: Energy Shield): "100% increased Effect of the Socketed Jewel. Can Socket a non-Unique Basic Jewel into the Phylactery. 50% more Mana Cost of Skills if you have no Energy Shield." Pick muộn nếu còn dư point — socket rare basic jewel companion damage/life vào, effect x2. Trade off mana cost chỉ trigger khi ES = 0 nên build CI/low-life không sợ.

Có thể skip: **Necromantic Conduit + Blackened Heart** (Unholy Might branch dựa trên mana economy, build CI mana pool nhỏ không scale tốt), **Eldritch Empowerment + Price of Power** (spell sacrifice/power charge — build damage source là DoT ignite, không cast spell hit nên 30%/40% more spell damage không apply).

## Passive Tree & Mastery

Tree chia 3 cluster intent chính, path từ Witch start:

**Cluster 1 — Minion Core (trên-trái):** Path đầu tiên từ Witch start lên vùng minion damage + minion life + minion AoE. Đây là baseline damage — mỗi node +minion life trực tiếp tăng IL ignite base. Ưu tiên node minion life trước minion damage vì IL scale theo life, không theo generic damage.

**Cluster 2 — Companion Scaling (qua From Nothing):** Path xuống vùng :wiki-link{url="https://www.poe2wiki.net/wiki/Glancing_Blows"} cluster qua :wiki-link{url="https://www.poe2wiki.net/wiki/From_Nothing"} jewel socket. From Nothing cho phép allocate node phía sau keystone mà không cần lấy chính keystone đó. Build đi pure ES/CI nên Glancing Blows (POE2 0.5 = "Chance to Evade is Unlucky, Chance to Deflect is Lucky") không cho gì — skip keystone, chỉ ăn các small/notable bonus ở vùng radius. Vùng này chứa 2× 18% companion damage + 2× 18% companion life + 15% defenses while companion next to you. Đây là cluster investment-efficient nhất cho companion build.

**Cluster 3 — CI + ES (path qua center):** :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Inoculation"} keystone cho chaos immunity, ES là pool duy nhất. Path này lấy sớm (level 60-65) vì chaos damage là threat lớn nhất trong campaign và early mapping khi chưa có chaos res trên gear.

**Cluster 4 — Whispers of Doom (top-side):** :wiki-link{url="https://www.poe2wiki.net/wiki/Whispers_of_Doom"} keystone verbatim *"You can apply an additional Curse. Double Activation Delay of Curses"*. Top-side passive tree, path 2-3 point từ Witch start qua intermediate spell/curse nodes. Đây là enabler của triple-curse stack — kết hợp Incessant Cacophony ascendancy đẩy curse cap từ 1 → 3. Downside 2x activation delay (1.5s → 3s) mitigate hoàn toàn qua (a) Incessant Cacophony infinite duration cho Blasphemy aura đã-applied và Despair manual cast 1 lần đầu boss, (b) Grip of Kulemak ring mod *"(20-10)% faster Curse Activation"* cancel partial delay nếu equipped. Allocate timing: level 75+ sau khi đã có CI + Lich ascendancy + Incessant Cacophony — pre-WoD build vẫn online với 2-curse cap, WoD là damage layer endgame.

**Jewel Sockets:** 6-7 socket quan trọng:
- :wiki-link{url="https://www.poe2wiki.net/wiki/Prism_of_Belief"} — corrupted, roll +(1-3) random skill level. Reroll qua corruption RNG để target Tame Beast (companion HP scaling). +3 high-roll không guaranteed, drop từ The Arbiter of Ash
- :wiki-link{url="https://www.poe2wiki.net/wiki/From_Nothing"} — unlock node radius quanh Glancing Blows mà không cần keystone, drop từ The King in the Mists
- :wiki-link{url="https://www.poe2wiki.net/wiki/Megalomaniac"} — random 2-3 notable jewel từ Simulacrum, reroll cho tới khi trúng notable INT/STR-INT area phục vụ companion (note: 0.2.0 patch đã loại notable starting-area khỏi roll pool, đừng kỳ vọng minion-specific notable)
- Rare jewels: stack companion damage + companion life rolls

**Weapon Set 2 tree** allocate riêng ~23 node focus cooldown recovery + block + cast speed cho Blink. Lấy vì weapon swap engage state khác main combat state — swap set cần CDR cho Blink, main set cần minion scaling.

PoB reference: https://pobb.in/MzsIsZXdSp72 (Pr3vie endgame), https://pobb.in/K60h4jeLHC5R (jungroan league start)

## Stat Priorities & Defenses

Số từ Pr3vie PoB endgame (character level 96, full gear):

- **ES / Life:** ES dominant (CI build, life pool irrelevant). ES scale qua item mods (+24 max ES boots, +23% max ES belt enchant, body Corpse Coat ES roll)
- **EHP:** **58,533**
- **Phys Maximum Hit Taken:** **11,752**
- **Resistances:** 75% cap all elements + Chaos immune (CI)
- **Attributes:** STR 67 / DEX 160 / INT 162 (Witch INT base + DEX cho evasion hybrid)
- **Speed:** 1.32× attack/cast speed multiplier
- **Crit:** Build không crit-based — damage chủ yếu DoT từ ignite
- **Combined endgame DPS budget:** ~23M per Pr3vie PoB — con số này là **combined-channel total** gộp IL synthesized ignite (primary), Minion Instability explosion từ bomber phase, companion auto-attack hits, Last Gasp burn window, và curse-explosion pops từ Rupture the Soul. IL channel alone tính closed-form ≈ `0.05 × H × M_searingflame × M_other × D_target` với companion HP `H=80,000`, Searing Flame II `M_searingflame=2.0`, passive/jewel/ascendancy `M_other=1.4`, Shock + Elem Weak + Frost Bomb `D_target=1.5` → ~16.8k DPS per target, 5 enemy cùng lúc ~84k effective. 23M tổng đến từ combined-channel stacking, không phải IL một mình.

Stat priority khi gear:
1. **+Level to Minion Skills** — single highest damage scaling, mỗi +1 level tăng companion HP → tăng IL ignite base. Best ROI lever toàn build vì IL channel scale linearly theo companion HP, không trần trên.
2. **Minion Life %** — direct damage scaling cùng cơ chế trên
3. **ES + Resist cap** — survivability baseline
4. **Spirit** — nhiều spirit = nhiều spectre/skeleton, quan trọng cho bomber phase
5. **Cooldown Recovery Rate** — CDR cho Blink trên swap set, tăng mobility
6. **AoE** — mở rộng IL burn radius, mapping comfort

### Performance Ratings

| Aspect          | Rating (1-5) |
|-----------------|--------------|
| clear_speed     | 5            |
| boss_damage     | 4            |
| survivability   | 4            |
| mobility        | 4            |
| league_start    | 5            |
| budget_scaling  | 5            |

## Resources

- **PoB (jungroan league start):** https://pobb.in/K60h4jeLHC5R
- **PoB (Pr3vie endgame updated):** https://pobb.in/MzsIsZXdSp72
- **PoB (Pr3vie original):** https://pobb.in/D5R1g7C_q8Xp
- **PoB (Pr3vie alt tree pre-95):** https://pobb.in/vS01JZ7WK1iT
- **Video (jungroan full run):** https://www.youtube.com/watch?v=le5zwr76S4Q
- **Video (Pr3vie showcase):** https://www.youtube.com/watch?v=_8DuXvlNL0E
- **Video (Oscrix guide):** https://www.youtube.com/watch?v=ALqcvXkm8pc
- **Mobalytics (Oscrix):** https://mobalytics.gg/poe-2/profile/b14a0157-43c2-4615-a0e8-d3051ea1203f/builds/bb8387cf-1714-4218-b337-bca9892d0f99
- **Character profile (Pr3vie):** https://poe.ninja/poe2/profile/Prevy-1389/character/Prevy_Beastkeeper

## Gear Progression

### Leveling

Campaign gear đơn giản: bất kỳ sceptre nào có +minion damage hoặc +spell level để scale ED/Contagion phase 1. Khi swap sang IL ở level 22, ưu tiên gear có spirit roll — nhiều spirit = nhiều spectre cho bomber setup. Weapon vendor check mỗi act: tìm sceptre có +1 minion skills hoặc 50% increased minion damage (jungroan note 50% increased damage sceptre tốt hơn +1 strength weapon ở giai đoạn này).

Resist chưa cần cap campaign — IL spectre tự xử lý damage, player chỉ cần survive đủ để chạy theo. Stack ES roll trên mọi slot available. Mua :wiki-link{url="https://www.poe2wiki.net/wiki/Lesser_Jeweler's_Orb"} đầu tiên ở act 3 (guaranteed drop) để socket thêm support cho Bogfeld Commoner.

### Early Mapping

Priority số 1 là **farm Elephant Tortoise** từ **Whakapanu Island** hoặc **Kriar Village** — đây là 2 map có Elephant Tortoise rare spawn (per Tame Beast wiki entry). Spirit reservation của Elephant sau capture = 56.1%. Wiki note nguyên văn: "Extremely high life pool. Great with Infernal Legion III." Mua waystone với mod "Rares have 1 additional Modifier" để tăng xác suất Elephant roll mod tốt. Run map nhưng KHÔNG complete (leave 1 rare alive) → quay lại reroll Elephant mới.

Mod bắt buộc Elephant phải có: **Increased Area of Effect** — push IL ignite radius từ 2 m baseline lên ~3 m hoặc xa hơn tùy roll value, khác biệt rõ giữa "phải đứng sát" và "nướng cả pack từ xa". Mod bonus high-value: Haste Aura (10% MS player + minion), All Damage Chills (auto 10% chill), Periodic Invulnerability Aura, ES Aura. Farm trung bình 3-7 giờ để roll Elephant có Increased AoE + 1 supplementary mod.

Gear baseline early mapping: cap res 75% mọi element, +1 to all minion skills weapon, stack ES rolls mọi slot. CI keystone allocate sớm level 60-65 để drop chaos res requirement khỏi gear.

### Hai archetype endgame: Walking Simulator hay Triple Curse Bomber

Build có 2 archetype endgame phân nhánh tại Shavronne's Satchel vs Headhunter belt decision. Đây không phải item swap đơn lẻ — là **engine choice** ảnh hưởng survival model, IL host, và damage layer focus. Hai path không hybrid được vì 2 belt mutual exclusive.

**Path A — Walking Simulator (high boss survivability, AFK clear)**: Shavronne's Satchel + Tame Beast + Elephant Tortoise + dual-curse Blasphemy. ES sustain via Shavronne implicit "Life Recovery from Flasks also applies to Energy Shield" — spam life flask restore ES. Elephant Tortoise wiki note "Extremely high life pool" → highest IL ignite base damage. Single companion 56.1% spirit, không có drop-spectre math, gameplay AFK-low-APM. Risk: single point of failure (companion die → 60-90s respawn, 0 DPS window).

**Path B — Triple Curse Bomber (clear speed scaling, multi-spectre redundancy)**: Headhunter + Bind Spectre + Gargantuan Wasp stack + triple-curse layout (Whispers of Doom). Headhunter verbatim *"When you kill a Rare monster, you gain its Modifiers for 60 seconds"* — rare-mod buff stack tạo clear speed scaling exponential khi farm juiced maps + Breach + rare-rich content. Bind Spectre cho phép multi-spectre stack ~20-30% spirit per spectre, drop-1-spectre-for-1-curse math native áp dụng (video Ranny El thesis). Lose Shavronne ES sustain loop → cần layer thay thế (Ghost Dance ES on dodge, Nascent Hope freeze recharge, Crystalline Phylactery socket rare ES recovery jewel). Risk: max-hit ES threshold rớt nếu không layer sustain thay → uber boss slam risky hơn.

Recommend cho greenfield planning (build chưa chơi): **start Path B trước** vì (a) triple curse math áp dụng native, exploit insight video ngay; (b) không có 3-7h Elephant AoE-mod farm grind; (c) multi-spectre redundancy giảm rage-quit moment; (d) gem setup overlap ~80% với Path A nên pivot sau khi tích đủ currency easy. Pivot Path A khi farm Sim 15 + Arbiter pinnacle thường xuyên và cần ES sustain max.

### Endgame Path A: Walking Simulator Gear

**Weapon (main):** Rattling Sceptre rare với +4 to Level of all Spell Skills, allies-and-presence damage, minion max life roll, spirit roll. Companion gem socket vào đây.

**Weapon (swap):** Volatile Wand rare với cast speed + spell skills + cooldown recovery cho Blink (target 1.7s CD effective). Shield swap: rare với 49-50% cooldown recovery rate.

**Amulet (endgame stat-stick):** Cộng đồng PoB gọi item này là "Apocalypse Curio" (theo Pr3vie endgame PoB), nhưng tên item gốc chưa có wiki page trong POE2 0.5 mirror — đây có thể là desecrated mod prefix/suffix bundle trên amulet rare, không phải unique. Mods target: **+5 to Level of all Minion Skills**, 35% Spirit, allies-and-presence damage 87%, presence AoE 85%, desecrated "Minions have 54% increased maximum Life". Tên gốc chưa xác nhận — verify trên trade trước khi sink 50+ div. Đây là single biggest damage stat-stick của build — push companion gem từ 21 lên 26 effective.

**Body:** Corpse Coat rare evasion/ES base — max ES roll + 1 resist.

**Belt:** :wiki-link{url="https://www.poe2wiki.net/wiki/Shavronne's_Satchel"} — target 3 charm slots (belt level 62 roll tự nhiên 1-3 charm slots, corruption/enchant là min-max layer riêng). +23% max ES enchant. Key implicit "Life Recovery from Flasks also applies to Energy Shield" — engine ES sustain của low-life build, spam life flask → restore ES.

**Helm:** Rare với +2 to Level of Minion Skills, max ES, resist.

**Boots:** Rare quality 20, 2 socket cho rune, +max Life, +DEX, increased Evasion/ES.

**Gloves:** Rare ES + resist roll.

**Rings:** Rare companion damage/life rolls + resist.

**Jewels:** Prism of Belief (+3 skill levels), From Nothing (Glancing Blows path), Megalomaniac (target companion damage + life + AoE), :wiki-link{url="https://www.poe2wiki.net/wiki/Nascent_Hope"} (ES recharge on freeze), rare jewels stack companion stats.

### Endgame Path B: Triple Curse Bomber Gear

**Weapon (main):** Chimeric Call rare Omen Sceptre — base loại sceptre có ignite-friendly implicit. Mods target: +4-5 to Level of all Minion Skills, allies-and-presence damage 80-90%, minion max life roll, spirit roll, Strength roll (qualify Grip of Kulemak ring 200 STR gate).

**Weapon (swap):** Tempest Charm rare Tasalian Focus (Witch off-hand focus loại có ES/spirit base). Mods target: cooldown recovery 49-50% cho Blink, spell skill levels, cast speed.

**Amulet (endgame):** :wiki-link{url="https://www.poe2wiki.net/wiki/Solar_Amulet"} rare — wiki base item real. Target mods: **+5 to Level of all Minion Skills** (desecrated), +30-40 to Spirit, allies-and-presence damage 80-90%, presence AoE 80-90%, +35% Spirit affix. Đây là replacement chính thức cho "Apocalypse Curio" community nickname trong Path A — Solar Amulet là wiki-verified base name, mods stack achievable trên trade với 50-100 div tùy roll quality.

**Body:** Sacrificial Regalia rare ES base — max ES roll + resistance + +1 to all skill levels nếu roll được.

**Belt:** :wiki-link{url="https://www.poe2wiki.net/wiki/Headhunter"} — Heavy Belt unique. *"When you kill a Rare monster, you gain its Modifiers for 60 seconds"*. 1-3 charm slots roll, +40-60 max Life (wasted vì CI life=1), +20-40 STR (giúp qualify Grip of Kulemak 200 STR gate), +20-40 DEX. Trade-off: mất Shavronne ES sustain — phải layer thay qua jewel + charm + Ghost Dance.

**Helm:** Ancestral Tiara rare (ES base for Witch). Mods: +2 to Level of all Minion Skills, max ES, resist, +Spirit.

**Boots:** :wiki-link{url="https://www.poe2wiki.net/wiki/Bones_of_Ullr"} — Lattice Sandals unique. Tier-zero leveling boots, endgame value qua +Spirit roll giúp triple-curse spirit budget. Alternative Path B: rare boots với max ES + DEX + movement speed nếu Spirit đã đủ từ Solar Amulet stat-stick.

**Gloves:** Sirenscale Gloves rare — ES base, max ES + resist + spirit roll. Slot này không có unique tier-zero, rare-with-good-rolls là default.

**Rings:** **Slot 1** = :wiki-link{url="https://www.poe2wiki.net/wiki/Grip_of_Kulemak"} (Abyssal Signet unique, requires 200 STR via Headhunter buff). Verbatim mods quan trọng: *"(20-10)% faster Curse Activation"* (cancel Whispers of Doom 2x delay partial), *"(15-25)% increased Area of Effect of Curses"* (stack với Magnified Area), *"(20-30)% increased Ignite Magnitude"* (direct IL DPS scaling), *"(8-12)% Gain of Damage as Extra Fire Damage"* (companion hit channel). **Slot 2** = :wiki-link{url="https://www.poe2wiki.net/wiki/Evergrasping_Ring"} (Pearl Ring unique). Verbatim *"Allies in your Presence Gain (15-25)% of Damage as Extra Chaos Damage / Enemies in your Presence Gain (6-12)% of Damage as Extra Chaos Damage"*. Mở chain chaos-extra → Despair shred → Xoph's Pyre fire→chaos→ignite contribution trên companion hit channel (critical cho Path B damage model).

**Flasks/Charms:** Flask 1 = :wiki-link{url="https://www.poe2wiki.net/wiki/Blood_of_the_Warrior"} (Gargantuan Life Flask unique — wasted life recovery dưới CI nhưng give utility buff). Flask 2 = Ultimate Mana Flask of the Brewer magic. Charms: :wiki-link{url="https://www.poe2wiki.net/wiki/Rite_of_Passage"} (Golden) + :wiki-link{url="https://www.poe2wiki.net/wiki/Ngamahu's_Chosen"} (Ruby) + :wiki-link{url="https://www.poe2wiki.net/wiki/Nascent_Hope"} (Thawing — ES recharge on freeze, mandatory cho Path B ES sustain replacement).

**Jewels:** Prism of Belief (+3 skill levels), From Nothing (Glancing Blows region path), Megalomaniac (target curse-friendly notable), rare jewels stack companion damage/life + ES recovery rate. Crystalline Phylactery socket rare basic jewel với companion HP + ES recovery rate mods để x2 effect.

### Mirror Tier (BiS)

Mirror-tier upgrade là diminishing returns nặng — mỗi upgrade sau Apocalypse Curio +5 chỉ tăng 10-15% damage cho gấp 10× currency.

- **Apocalypse Curio +6 minion skill levels** thay +5 — single highest ROI nếu roll được
- **Megalomaniac perfect 3-notable:** companion life + companion damage + minion AoE cả 3 cùng jewel
- **Prism of Belief +3** guaranteed — PoB không display đúng nhưng in-game vẫn level up companion gem
- **Mirrored Rattling Sceptre:** max +5 minion skills + 100%+ allies-and-presence damage + minion max life
- **Corrupted Shavronne's Satchel:** enchant max-tier (28% max ES vs 23% baseline)

## Flasks

POE2 dùng flask + charm system thay vì 5 flask như POE1. Setup qua Shavronne's Satchel (target 3 charm slots natural roll) + 2 flask:

**Life Flask** (magic, "of the Sylvan" instant recovery) — đây là button spam chính. Life recovery convert sang ES qua Shavronne implicit. Press liên tục trong combat, đặc biệt khi companion đang burn gần player.

**Mana Flask** (magic, "of the Mixologist" increased charges) — backup mana sustain. Ít dùng vì most skills free hoặc spirit-reserved, nhưng cần cho Frost Bomb + Elemental Weakness manual cast spam.

**Charm slots (3):** Anti-stun charm (ưu tiên "of the Brewer" prefix cho extra duration), anti-ignite charm (IL self-burn companion có thể ignite player adjacent), anti-freeze charm (kết hợp Nascent Hope recharge ES on freeze).

**Tip:** POE2 chưa có belt auto-flask uptime như :wiki-link{url="https://www.poewiki.net/wiki/Mageblood"} bên POE1. Gần nhất là Shavronne charm slots — focus "Flasks gain charges per second" roll để approach 100% flask uptime.

## Pantheon & Bandits

POE2 không có Pantheon và Bandit system. Section này cover **atlas tree priorities** thay thế:

**Atlas farming priorities:** Invest atlas tree vào monster modifier slot (extra mod cho Elephant roll khi farm Azmerian Ranges), beast spawn rate, và ground effect chance (fire ground synergy với IL). Sau khi có Elephant endgame, pivot atlas tree sang map sustain + delirium/simulacrum nodes cho Sim 15 farming.

**Trials of Sekhemas** (ascendancy point source) — community PoB nhắc đến một loại ring tên "Sama's Resolves" với mod "Resistance unaffected by area penalties" làm BiS ring option nếu farm được. Ring này chưa có wiki page trong POE2 0.5 mirror, có thể là community nickname hoặc item chưa được wikify. Verify trade trước khi commit. Nếu item này hoạt động đúng như mô tả, nó cho phép drop resist từ gear slots khác sang damage.

**Trial of Chaos** (ascendancy trial source) — source Crested Behemoth tameable (Oscrix gen-1 companion trước khi Elephant Tortoise được phát hiện có base HP cao hơn).

## Leveling Notes

Leveling path đã test thực chiến — fresh start lên T-15 mapping dưới 7 giờ:

**Act 1 (level 1-12):** Bắt đầu với :wiki-link{url="https://www.poe2wiki.net/wiki/Essence_Drain"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Contagion"} — standard Witch opening. Bổ sung :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Arsonist"} (bomb-throwing skeleton có Command: Explosive Demise — detonate allied minion below life threshold deal 8% min life as fire) và :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Sniper"} command Gas Arrow cho extra damage. ED/Contagion clear pack, skeletal handle rares. Pick Lich ascendancy khi chọn class path. Lấy :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} skill gem khi unlock — tame bất kỳ beast nào trong Hunting Grounds để familiarize mechanic, beast này sẽ replace sau.

**Act 2 (level 12-22):** Tiếp tục ED/Contagion + Skeletal Arsonist/Sniper. Khi hit level 22 và đủ điều kiện engrave Bind Spectre (tier 7 gem — verify required character level qua :wiki-link{url="https://www.poe2wiki.net/wiki/Uncut_Skill_Gem"} progression, có thể phải lên 24-26 thay vì 22), swap sang Infernal Legion. Spectre đầu tiên là **Bramble Burrower** tame từ Hunting Grounds act 1 — con này low-HP nên chết nhanh hơn vì IL self-burn (resistance intrinsic chưa được wikify, number cộng đồng test, cần log khi vào league). Setup: Bind Spectre + Infernal Legion + Last Gasp. Bramble Burrower tự burn → life về 0 → Last Gasp giữ "fatally wounded" state 4 giây fixed → trong window đó dùng Skeletal Arsonist Command: Explosive Demise để detonate spectre, deal extra fire damage (Explosion radius 2.4 metres, gem text: "Deals additional Fire Damage equal to 8% of Minion's maximum Life"). Weapon swap respawn spectre → lặp lại. Play style này low APM nhưng single target rất cao, cho phép stun boss và skip phase transition.

**Act 3 (level 22-35):** Đánh optional boss **Root Regge** ở Bogfeld đầu act 3 để unlock **Bogfeld Commoner** spectre. Bogfeld Commoner có HP cao hơn Bramble Burrower rất nhiều — community test report ~43,000 HP ở mid-campaign (chưa có wiki page cho spectre này — cần log HP thực khi vào league), tương đương level 41 Essence Drain. Setup upgrade: Bind Spectre (Commoner variant) + Infernal Legion + Last Gasp + Minion Instability. Không cần Arsonist detonation nữa — Minion Instability tự trigger explosion khi IL self-burn hạ commoner xuống ≤35% life, deal 15% max life as fire damage. Max số lượng Bogfeld Commoner qua spirit stacking → weapon swap respawn → explode → swap lại. Get guaranteed Lesser Jeweler's Orb ở đầu act 3 để socket Minion Instability.

**Act 4-6 (level 35-55):** Bogfeld Commoner bomber carry suốt campaign. Damage scale tự nhiên theo level vì commoner HP tăng theo area level. Bắt đầu pick Lich tree nodes cho minion damage + life. Get Blasphemy từ quest reward → link Temporal Chains để slow enemy — mapping comfort tăng đáng kể vì enemy chậm hơn = dễ đi theo bomber chain hơn.

**Map tier 1-10 (level 55-75):** Allocate CI keystone (level 60-65). Farm Azmerian Ranges để tame Elephant Tortoise với Increased AoE mod. Trước khi có Elephant, tiếp tục bomber setup với Bogfeld Commoner — DPS đủ clear T-10 comfortable. Khi roll được Elephant với AoE mod, swap sang pure IL walking simulator: companion gem + IL + Feeding Frenzy + Searing Flame + Magnified Area.

**Map tier 10+ (level 75+):** Unlock :wiki-link{url="https://www.poe2wiki.net/wiki/Xoph's_Pyre"} lineage gem (drop từ Xesht pinnacle boss hoặc trade). Pre-Xoph's damage thấp hơn 40-60% nhưng build vẫn chạy được T-14-16. Post-Xoph's: full endgame setup online, damage spike massive. Farm Shavronne's Satchel, slot CI + low-life layer, push Sim 15 và pinnacle bosses.

**Gem breakpoint:**
- Level 22: IL swap (Bramble Burrower)
- Level 35: Bogfeld Commoner upgrade
- Level 60-65: CI keystone
- Level 75+: Xoph's Pyre + endgame companion setup

## Budget & Investment

**Zero budget (league start, 0 currency):** Witch Lich + ED/Contagion → level 22 IL bomber → Bogfeld Commoner + Last Gasp + Minion Instability. Không cần gear gì ngoài gem. DPS đủ clear campaign và early mapping. jungroan đạt T-15 mapping dưới 7 giờ fresh start với setup này.

**Entry endgame (1-3 divine equivalent):** Elephant Tortoise tame được (bất kỳ, không cần AoE mod) + IL Tier 1 + CI tree + Storm Mage shock bot. Clear T-8-12 comfortable.

**AoE breakpoint (10-30 divine):** Elephant Tortoise với **Increased AoE** mod (3-7 giờ farm hoặc trade). Searing Flame II + Magnified Area II gem upgrade. Shavronne's Satchel uncorrupted (15-25 div). Clear T-14-16 comfortable, build bắt đầu feel "walking simulator" thật sự.

**Xoph's Pyre breakpoint (50-150 divine):** :wiki-link{url="https://www.poe2wiki.net/wiki/Xoph's_Pyre"} lineage gem (50-100 div tùy server economy, locked behind Xesht pinnacle boss). IL III gem (Tier 5, expensive). Apocalypse Curio amulet +4-5 minion levels (50-100 div). Damage spike 40-60% so với pre-Xoph's. Đủ T-17 + pinnacle bosses.

**Min/maxed (300-800 divine):** Apocalypse Curio +5 với desecrated minion life roll (200-500 div). Megalomaniac perfect 3-notable (100-300 div). Corrupted Shavronne's Satchel 3-charm + max ES enchant. Sim 15 max difficulty, all pinnacle deathless.

**Diminishing returns:** Sau khi có Apocalypse Curio +5 + Megalomaniac perfect + Xoph's Pyre + IL III, mọi upgrade tiếp chỉ trade 10-15% damage cho gấp 10× currency. Ở mức này focus shift sang challenge completion hoặc roll alt character.

## Strengths & Limitations

**Điểm mạnh:**

- **AFK clear** — không aim, không target, không trigger skill. Companion tự tick ignite 360° mọi enemy trong radius. Literal walking simulator.
- **League start mạnh nhất POE2** — chạy từ level 22, không cần gear, bomber setup DPS đủ stun boss campaign. T-15 mapping dưới 7 giờ fresh start.
- **Scaling depth cực lớn** — zero budget → mirror tier đều work. Mỗi tier investment đều có power spike rõ rệt (IL swap, Bogfeld, Elephant, Xoph's Pyre, Apocalypse Curio).
- **Tank CI Lich + Shavronne sustain** — chaos immune, 58k EHP endgame, max-hit 11k phys, Temp Chains slow layer.

**Điểm yếu:**

- **Elephant AoE mod RNG** — Increased AoE là mandatory cho comfortable mapping, farm 3-7 giờ trung bình. Thiếu mod này IL radius quá nhỏ để clear efficiently.
- **Xoph's Pyre price gate** — locked behind Xesht pinnacle boss, 50-100 div. Pre-Xoph's IL ignite channel hoạt động full bandwidth (gem text gate analysis cho thấy IL synthesized ignite không bị Hit-gate, nên không phụ thuộc Xoph's Pyre); gem chủ yếu thêm value qua auto-attack hit channel và secondary skill (Frost Bomb / Storm Mage shock proc).
- **Single companion = single point of failure** — Elephant chết là damage drop về 0. Companion respawn 60-90s. Boss fight có nhiều AoE danger zone (Arbiter, Xesht) cần position companion cẩn thận.
- **Weapon swap muscle memory** — build yêu cầu swap weapon liên tục để reposition companion và proc Blink mobility. Không khó nhưng là habit mới nếu chưa quen POE2 weapon swap system.
- **Boss rotation không thực sự AFK** — mapping là walk, nhưng boss fight cần manual cast Elemental Weakness + Frost Bomb + Pain Offering. Không complex nhưng không phải zero-button.

**Dangerous map mods:** "Monsters have X% chance to Avoid Ailments" giảm ignite application → DPS drop nặng. "Less AoE" shrink IL burn radius → clear chậm. "No ES Recovery" hoặc "Reduced Recovery Rate" cắt Shavronne sustain loop — tránh hoặc swap flask setup. CI build immune chaos damage nên mọi "Extra Chaos Damage" mod hoàn toàn an toàn. "Monsters reflect Elemental Damage" không hit player vì damage source là minion — tuy nhiên bomber phase MI explosion là fire hit từ minion, reflect có thể ảnh hưởng minion survival. Endgame walking simulator phase (pure DoT ignite) an toàn hơn vì ignite/DoT không bị reflect. Khi Elephant chết giữa boss fight, swap weapon 2 lần để resummon — nhưng respawn timer 60-90s nếu companion thực sự bị destroyed, nên position companion tránh boss AoE overlap là skill quan trọng nhất.

**Damage scaling ROI checklist — đọc trước khi sink currency:** Best lever là scale Companion HP qua Tame Beast gem level + Minion Life % nodes — IL ignite channel scale linearly theo `H`, không có trần. Searing Flame II là pillar multiplier ×2 chắc chắn nhất (gem text broad, không Hit-gated). Magnified Area II radius +20%, marginal nhưng cần cho clear comfort. Xoph's Pyre primary value ở **auto-attack hit channel + secondary skill (Frost Bomb / Storm Mage)**, không phải IL ignite channel — Hit-gated trên cả 2 effect line, IL synthesized ignite không qualify. Falsifier explicit: trong PoB Pr3vie endgame toggle Xoph's Pyre on/off, đọc IL ignite tick delta. Delta ≤10% → confirm gate analysis (Xoph's Pyre không amplify IL). Delta ≥30% → refute, IL ignite có path qualify Hit-gated modifier mà chưa rõ. Cross-reference: Minion Instability wiki explicit "does not scale with the Gain X% of Damage as Y modifier" cho cùng class non-hit synthesized damage event.

## Summary

- **Identity:** Witch Lich + Infernal Legion — ED/Contagion → Bomber → Walking Simulator, league starter đến endgame all-content trong cùng một character.
- **Core mechanic:** IL ignite base = 25% minion max life, non-hit synthesized ignite. Searing Flame II ~2× magnitude là pillar multiplier chính. Companion HP scaling là best ROI lever. Xoph's Pyre uplift IL channel marginal (0-15%), value thật ở auto-attack hit channel và secondary skill.
- **League start path:** Level 22 IL swap → Bramble Burrower → Bogfeld Commoner bomber → Elephant Tortoise walking simulator. T-15 dưới 7 giờ fresh start.
- **Defense:** Lich CI + Shavronne's Satchel low-life sustain + Blasphemy Temp Chains slow. EHP 58,533 endgame.
- **Investment curve:** Zero budget playable → AoE Elephant breakpoint (10-30 div) → Xoph's Pyre spike (50-150 div) → Apocalypse Curio min/max (300+ div). Diminishing returns sau Curio +5.

## Changelog

### 2026-05-29 (minion damage bonus IL-reach falsifier)
- Added falsifier cho **minion damage bonus vs non-unique/unique enemies** (magnitude ~25-35% / ~20-25% late-game, không hiển thị trên PoB minion DPS) — câu hỏi reach vào IL non-hit synthesized ignite channel, cùng class với Searing Flame/Xoph's Pyre test. Đo khi vào league.

### 2026-05-19 (triple-curse + Path A/B archetype integration — Ranny El video)
- **Curse Stack refactor**: Replace single-curse Blasphemy + manual Elem Weak với **dual-curse Blasphemy** (Temp Chains + Elem Weak cùng socket = 120 spirit aura) + **manual cast Despair** (3rd curse với Decaying Hex chaos DoT + Heightened Curse +25% magnitude). Layout đến từ Ranny El video Lich PoB (poe.ninja/poe2/pob/1863a) — verified verbatim qua PoB XML decode + wiki cross-reference.
- **Whispers of Doom keystone** added vào Cluster 4 passive tree section. Verbatim *"You can apply an additional Curse. Double Activation Delay of Curses"*. Curse cap math: base 1 + Incessant Cacophony +1 + WoD +1 = 3 curses. Downside 2x delay mitigate qua Incessant Cacophony infinite duration + Grip of Kulemak faster activation roll.
- **Atziri's Allure alternative path** documented — drop từ Sealed Vault anomaly bosses Ytzara/Maztli, level 65 restricted. Verbatim ignore curse limit + reflect to player + 20% less curse effect (0.4.0 nerf). Lich path skip Atziri vì WoD + IC đã đủ cap 3; Shaman/Druid path bắt buộc Atziri.
- **Path A vs Path B archetype decision** explicit. Path A = Walking Simulator (Shavronne's Satchel + Elephant Tortoise + dual-curse). Path B = Triple Curse Bomber (Headhunter + Bind Spectre + Gargantuan Wasp + triple-curse). Recommend Path B cho greenfield planning vì gem overlap ~80% + không có Elephant AoE-mod farm grind + multi-spectre redundancy. Pivot Path A khi farm pinnacle bosses thường xuyên.
- **Path B gear list** added: Chimeric Call Omen Sceptre, Tempest Charm focus, Solar Amulet (wiki-verified replacement cho "Apocalypse Curio" community nickname), Headhunter belt, Bones of Ullr boots, Grip of Kulemak ring (Abyssal Signet, 200 STR gate, faster curse activation), Evergrasping Ring (chaos extra to allies/enemies in presence — mở chain chaos→ignite via Xoph's Pyre Effect 1 on companion hit channel), Blood of the Warrior flask, Rite of Passage + Ngamahu's Chosen + Nascent Hope charms.
- **Dialla's Desire relocation** note: video Lich PoB move Dialla khỏi Blasphemy curse channel sang IL Spectre channel (cùng Infernal Legion III + Xoph's Pyre + Feeding Frenzy II + Muster). +1 gem level trên Tame Beast/Bind Spectre tăng companion HP scaling tier → direct IL ignite base bump. ROI cao hơn +1 Temporal Chains level.
- **Evergrasping Ring + Xoph's Pyre + Despair chain** documented inline curse section. Companion in presence → auto-attack gain 15-25% chaos extra → Despair -61% chaos res shred → Xoph's Pyre Effect 1 converts chaos to ignite contribution on hit channel (real Hit, qualify gate, khác IL synthesized ignite). Pre-Evergrasping value của 3rd curse Despair giảm về chỉ Decaying Hex chaos DoT (~250-300/sec) + HH rare-mod buff stack. Post-gear combined channel uplift ~30-50% (cần PoB toggle confirm gate interpretation khi vào league).

### 2026-05-19 (mechanic deep-dive pass — 4 angle expansion)
- **Angle 1 (Bomber Setup math chain)**: expanded Minion Instability + Last Gasp + Bind Spectre interaction với verbatim gem text từ wiki POE2 0.5 mirror. Closed-form formula `damage = 0.15 × H_spectre` per MI explosion (formula chắc; HP plug-in là số community-tested). Cycle math: 3.25s IL ramp + 4s Last Gasp fixed window + 1-2s swap overhead ≈ 8-9s per cycle. Bramble Burrower / Bogfeld Commoner HP là số community-tested (wiki page chưa exist cho Bogfeld). Note 0.3.1b bug fix verbatim cho weapon swap spectre MI trigger.
- **Angle 2 (Tame Beast + Elephant Tortoise + Feeding Frenzy)**: full verbatim gem text Tame Beast (tier 9, wisp 8-11.8s, retains 4 mods), Elephant Tortoise spirit 56.1% + Whakapanu Island/Kriar Village locations với wiki note "Extremely high life pool. Great with Infernal Legion III". Mod re-roll workflow documented. Feeding Frenzy I/II verbatim (30% more damage, 20%/15% more damage taken). Note 0.3.0 patch removed POE1-style AI mode toggle. Companion teleport-on-weapon-swap behavior community-tested, wiki không verbatim confirm, cần quan sát in-client.
- **Angle 3 (Curse stack + Rupture the Soul chain-explode)**: verbatim Blasphemy (60 spirit per curse, activation delay), Temporal Chains (40-59% slow, 1.5s delay, level-cap clause 20→0 quan trọng cho leveling), Slow Potency (+15% slow magnitude), Magnified Area II (+45% AoE), Ritualistic Curse (+50% AoE, +30% delay). **Dialla's Desire INT-scale claim** trong build doc cũ là sai — wiki text chỉ có "+1 to Level of Supported Skill Gems / +10% to Quality of Supported Skills", không INT-scale. Correction noted explicit. Rupture the Soul verbatim với 25% max HP chaos AoE, chain-clear probability math (91% pack-6 có ≥1 explosion, expected 2 explosions average). CI player-safety synergy critical. Incessant Cacophony verbatim infinite duration cho boss QoL.
- **Angle 4 (Xoph's Pyre + Searing Flame gate analysis — symmetric framing)**: pre-audit treatment asymmetric (Searing Flame coi như 2× pillar chắc, Xoph chỉ 0-15%) reconciled. Both gems mở đầu "Supports any skill that Hits enemies" + effect line referencing "Supported Skills" — parallel construction nghĩa là cùng gate-risk. **Treatment mới**: cả 2 giờ cùng pending PoB falsifier. Falsifier test design explicit per gem (Searing Flame delta ≥80% confirm vs <30% refute; Xoph delta ≤10% confirm vs ≥30% refute). Cross-reference Minion Instability "Gain X% as Y" exclusion là precedent strongest. Magnified Area II 0.4.0 damage penalty removal noted.

### 2026-05-19 (mechanic deep-dive pass — first iteration)
- Verified Xoph's Pyre × IL interaction qua deep-dive mechanic audit. IL synthesized ignite ("as though dealing Base Fire Damage") không inherit Hit-gated modifier — cùng class precedent với Minion Instability wiki note "does not scale with the Gain X% of Damage as Y modifier". Xoph's Pyre uplift IL channel realistic 0-15% (chỉ qua auto-attack hit channel, thường bị "highest ignite only" rule override). Gem value thật ở auto-attack hit channel + secondary skill (Frost Bomb / Storm Mage shock proc).
- Searing Flame II reframed thành pillar multiplier chính của IL channel — gem text wording broad không Hit-gated, effective ~2× IL ignite magnitude.
- 23M DPS claim soften thành **combined-channel total** (IL synthesized ignite + MI explosion + companion auto-attack + Last Gasp bomber window + Rupture the Soul curse-explosion pops). IL channel alone closed-form ~16.8k DPS/target với assumption companion HP 80k. Added formula breakdown vào Stat Priorities section.
- Magnified Area II radius fix: 45% inc AoE → radius +20% (sqrt scaling), không phải double. IL radius 2 m → ~2.41 m effective.
- Added "Damage scaling ROI checklist" caveat block trong Strengths & Limitations với PoB toggle falsifier explicit (delta ≤10% confirm, ≥30% refute).

### 2026-05-19 (verification pass)
- Verified mọi gem text + item mod + ascendancy node với POE2 wiki mirror snapshot 2026-05-18 (`data/wiki/`). 
- Gem name corrections: Bind Spectre thay cho POE1 Raise Spectre; Skeletal Warrior/Sniper/Arsonist (singular, không "Summon" prefix); Tame Beast → Summon Beast: Elephant Tortoise account-bound; Infernal Legion III tier 5 explicit.
- Ascendancy section rewrite: bỏ trial-cluster framework, dùng flat notable list (Soulless Form + Eternal Life cho low-life pillar; Rupture the Soul + Incessant Cacophony cho curse explode pillar; Crystalline Phylactery option). Verbatim node text từ Lich wiki entry.
- Glancing Blows reasoning: POE2 0.5 keystone = "Chance to Evade Unlucky, Chance to Deflect Lucky" — build CI không stack evasion nên skip vì irrelevant, không phải vì block penalty.
- Elephant Tortoise farm location: Whakapanu Island / Kriar Village per Tame Beast wiki beast list.
- Shavronne's Satchel drawback (-20-30% reduced Flask Life Recovery rate) đưa vào prose.
- Last Gasp 4-giây fixed duration note explicit (không scale qua duration support).
- Apocalypse Curio amulet + Sama's Resolves rings flag inline — community-named items chưa có wiki page, verify trade trước khi commit.
- Xoph's Pyre × IL ignite uplift soften về 40-60% Pr3vie PoB number kèm caveat cần PoB toggle verify.

### 2026-05-19
- Full rewrite cho 0.5 league start context. Tích hợp data từ jungroan (league start run 7 giờ), Oscrix (build creator leveling path), Pr3vie (endgame min/max showcase).
- Thêm detailed leveling notes act-by-act với gem breakpoint.
- Update league_start rating 1→5, budget_tier high-budget→league-starter.
- Thêm bomber phase (Bramble Burrower + Bogfeld Commoner) vào Build Overview và Leveling Notes.

### 2026-05-13
- Initial draft. Synthesized từ Pr3vie PoB + Oscrix gen-1 PoB.
