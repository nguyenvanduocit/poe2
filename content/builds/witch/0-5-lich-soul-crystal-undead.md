---
template: templates/build-template.md
document_type: build
title: Lich Soul Crystal Undead Companion
status: draft
author: duocnv
created: '2026-06-19'
updated: '2026-06-19'
class: Witch
ascendancy: Lich
league: '0.5'
patch: 0.5.3
budget_tier: high-budget
confidence_level: LOW
pob_coverage: NA
build_tags:
  primary_skill: His Grave Command
  damage_type: chaos
  playstyle: minion
  content_focus: endgame
tags:
  - witch
  - lich
  - his-grave-command
  - the-unborn-lich
  - soul-crystal
  - companion
  - undead
  - unholy-might
  - abyss
  - 0-5
  - 0-5-3
  - poe2
---

# Lich Soul Crystal Undead Companion

Hướng Witch Lich kéo một con companion Undead khổng lồ từ :wiki-link{url="https://www.poe2wiki.net/wiki/The_Unborn_Lich"} làm carry, lấy phần damage extra Chaos của :wiki-link{url="https://www.poe2wiki.net/wiki/Unholy_Might"} từ Lich phủ lên nó, rồi để ascendancy đẩy magnitude của lớp Chaos đó lên cao theo max-mana. Patch 0.5.3 mở cánh cửa của build: :wiki-link{url="https://www.poe2wiki.net/wiki/His_Grave_Command"} bỏ Spirit cost cast-skill (trước là reservation kiểu Tame Beast), nên việc bắt một con Undead boss-tier rồi cắm vào team không còn ép phải dump nguyên pool Spirit chỉ để mở cửa. Build là dự án endgame luxury, không phải league-start, vì chuỗi gating dài: phải farm ra đúng staff, ra đúng prefix, hunt được đúng con với đúng 4 monster modifier.

## Build Overview

Damage không phát từ skill của mình, phát từ con companion. :wiki-link{url="https://www.poe2wiki.net/wiki/His_Grave_Command"} hinder một con rare Undead, giết nó trong lúc còn hinder thì gem biến thành **Soul Crystal: &lt;tên monster&gt;**, companion permanent giữ lại tối đa 4 monster modifier ngẫu nhiên từ con gốc. Modifier giữ lại quyết định build: con có aura "Allies deal extra fire damage" thì companion thành buff-bot kèm hit, con có "drops corpses that explode" thì thành AoE bomb di động, con có "monsters near it deal more damage" thì stack lên chính nó. Vì không phải skill native scaling theo gem level, mọi power-budget nằm ở (1) chọn được con base mạnh để bind, (2) roll trúng 4 mod đáng, (3) lớp damage của mình đắp lên trên.

Lớp damage đắp lên trên là Lich. :wiki-link{url="https://www.poe2wiki.net/wiki/Necromantic_Conduit"} cho cả mình lẫn Allies trong Presence trạng thái Unholy Might khi không Low Mana, mà minion là Ally, nên 30% damage gained as extra Chaos đập thẳng vào hit của companion. :wiki-link{url="https://www.poe2wiki.net/wiki/Blackened_Heart"} biến max mana thành stat damage: 4% increased Magnitude of Unholy Might Buffs per 100 maximum Mana, nghĩa là 1000 mana cho +40% magnitude lên lớp Chaos đó. Curse khoá Chaos res enemy để lớp Chaos không bị resist nhai, rồi :wiki-link{url="https://www.poe2wiki.net/wiki/Rupture_the_Soul"} cho xác cursed bị companion giết nổ một phần tư max Life thành Chaos clear pack, engine clear miễn phí khi đã có curse uptime.

Defense là ES pool Witch chuẩn cộng curse-aura kéo enemy yếu đi, kèm companion soak aggro phía trước. Build đứng backline ra command, không tank trực tiếp.

## Mảnh ghép gating phải có trước khi nói chuyện build

:wiki-link{url="https://www.poe2wiki.net/wiki/The_Unborn_Lich"} là Ravenous Staff drop-restricted từ :wiki-link{url="https://www.poe2wiki.net/wiki/Vessel_of_Kulemak"}, boss cuối của Abyssal Depths qua :wiki-link{url="https://www.poe2wiki.net/wiki/Kulemak's_Invitation"}. Drop-restricted nghĩa là không chance được, không craft được, phải hunt boss. Staff yêu cầu Level 78, 137 Int.

Staff roll **một** custom desecrated prefix từ pool 5 granted skill (Foul Emergence / Scattering Calamity / Vile Intrusion / Winnowing Flame / Grave Command), nên xác suất ra prefix Grave Command là 1/5 cho mỗi cây drop ra. Cộng thêm 3 mod desecrated khác (1 Lich prefix Amanamu/Ulaman/Kurgal, 1 Lich suffix, 1 prefix-or-suffix flex). Roll lại bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Essence_of_the_Abyss"} thì tốn nhiều bone resource từ Abyss farming.

Sau khi có staff Grave Command, gem socketed sẽ hiện monster category trên enemy. Hunt rare Undead trong endgame map. Tốt nhất là Abyssal Depths vì monster ở đây native Undead + đông rare. Cast Grave Command lên con muốn → nó bị Hinder (8 đến 11.8 giây tùy gem level) → giết trong cửa sổ hinder → gem chuyển thành Soul Crystal account-bound (chuyển character được, không trade được). Hỏng cửa sổ thì gem giữ nguyên, cast lại, không mất gì ngoài thời gian.

Soul Crystal sinh ra **vẫn reserve Spirit theo % dựa vào sức mạnh con đã bind + số monster modifier nó retain**. Quality của Soul Crystal là 0-10% increased Reservation Efficiency, mỗi level Soul Crystal cố định theo level của Grave Command lúc capture, không level up gem trực tiếp được nữa. Caveat lớn nhất của patch 0.5.3 nằm ở đây: cast-skill free, nhưng companion vẫn ăn Spirit, chỉ fit được 1 con béo cộng utility nhỏ chứ không phải 5 companion stack tùy thích như nghe tên patch tưởng.

## Quality 0.5.3 đổi nghĩa thế nào

Trước 0.5.3, quality của His Grave Command là "0-20% increased Reservation Efficiency", nâng quality để giảm Spirit cho Soul Crystal output. Patch 0.5.3 đổi thành "0-20% more Minion Life" áp lên skill ở giai đoạn pre-capture. Quality giờ scale **độ tank của companion** sau khi summon, nhưng phần giảm Spirit của Soul Crystal output mất đường mới (Soul Crystal quality vẫn là 0-10% Reservation Efficiency theo trang wiki, đo trong client để xác nhận trang chưa lag patch). Phải đẩy quality lên 20 ngay từ đầu vì 20% more Minion Life là multiplicative, áp lên một con companion vốn life pool cao thì cộng vài chục nghìn life thật.

## Chọn con Undead nào để bind

Wiki ghi danh sách monster đang để trống cho His Grave Command, community vẫn đang điền, chưa có canonical list. Logic chọn dựa vào 3 tiêu chí: base hit damage cao và Undead category, khả năng spawn rare ổn định để chờ đúng 4 mod, reservation thấp nếu ưu tiên slot Spirit cho aura phụ.

Chiến lược chung là hunt trong Abyssal Depths vì native Undead + rare đông. Cast Grave Command lên rare, đọc 4 mod nó retain trước khi giết (skill cho phép view monster modifier khi gem socketed); nếu mod không đáng thì để nó sống, đi tìm con khác. Mod retained sống cùng companion vĩnh viễn nên chọn lọc đáng tốn thời gian. Ưu tiên mod offensive aura ("Allies deal additional damage as X", "Allies have X% increased Attack Speed"), mod on-hit ("Hits Maim/Bleed/Ignite") và mod scale damage của chính nó ("deals more damage", "extra damage as X").

Bind Spectre đã có community spreadsheet cho từng monster cụ thể (link từ trang wiki Grave Command), nhưng list đó cho Beast/Spectre category, không transfer 1:1. Pattern hunt đúng đắn là farm Abyss Tablet juiced Abyssal Depths nhiều lần, mỗi lần bind thử một rare, drop Soul Crystal kém vào stash, đến khi ra con vừa ý.

## Support gem cho Soul Crystal

Soul Crystal chấp nhận support gem :wiki-link{url="https://www.poe2wiki.net/wiki/Minion"} thông thường, cộng 3 Abyss Lineage support unlock riêng cho Lich-flavor companion:

**Slot 1, Damage**. :wiki-link{url="https://www.poe2wiki.net/wiki/Feeding_Frenzy"} II cho 30% more damage / 15% more damage taken, multiplier sạch nhất. Hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Execute_III"} nếu companion là carry boss (30% more damage vs low life enemies, 30% more khi mình low life; Lich Eternal Life path đứng Life 1 thì kích hoạt vĩnh viễn).

**Slot 2, Hulking + Mastery**. :wiki-link{url="https://www.poe2wiki.net/wiki/Hulking_Minions"} biến companion thành Gigantic (larger, more life, more damage) đổi bằng "cost significantly more Spirit", chỉ lắp khi Spirit budget đã thoải mái sau khi route aura qua :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Communion"}. :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Mastery"} cho +1 minion skill level. Companion không có gem-level scaling như spectre, nhưng base stat của nó vẫn được nhân; đo trong client để xem có thật tăng không trước khi commit slot.

**Slot 3, Lineage Abyss carry chính**: :wiki-link{url="https://www.poe2wiki.net/wiki/Kurgal's_Leash"}. Support category Blackblood, 120% Cost & Reservation Multiplier, requires Level 25 + 5 Int. Mỗi lần Command companion, cả mình lẫn nó nhận Unholy Might 15 giây. Interaction trung tâm nằm ở chỗ: Lich đã có Unholy Might nền từ Necromantic Conduit (passive while not Low Mana), Kurgal's Leash chồng một copy Unholy Might khác lên, nhưng Unholy Might không stack (cùng buff type chỉ giữ copy mạnh nhất). Giá trị thật của Kurgal's Leash ở đây là (a) phòng khi Low Mana tắt Necromantic Conduit thì còn 15s Kurgal's, (b) buff áp luôn lên **mình** không chỉ minion. Trade-off là 120% reservation multiplier làm Soul Crystal đắt thêm gần một phần tư Spirit, quyết định bằng ratio Spirit pool / Soul Crystal cost của con đang chạy.

**Slot 4, Tecrod's Revenge**. Support Last Gasp tier endgame: companion không chết ngay khi life về 0, fight tiếp 20 giây trước khi chết hẳn, kèm Soul Eater và 40% increased Attack/Cast Speed trong giai đoạn dying. Boss fight kéo dài hoặc multi-phase thì cửa sổ 20 giây + Soul Eater + 40% speed là phase chốt damage. Companion không cần phải sống tới cuối, chỉ cần kích Tecrod's lúc HP về 0 là có 20 giây speed burst.

**Slot 5, Amanamu's Tithe**. Lineage support requires Level 25 + 5 Str: 50% chance mỗi lần minion (từ supported skill) chết, mình gain một Abyssal Monster Modifier random 20 giây, max 3 stack. Support này hợp với team có nhiều minion chết đi sống lại, còn companion solo từ Grave Command chết rất hiếm nên hiệu suất kém. Để slot này cho phần utility minion phụ (Bone Construct, Skeleton) nếu chạy đội lai; build single-carry pure không lấy.

Exclusion check: Atziri's Communion "Cannot Support Skills which create Minions", chỉ cho Blasphemy/aura, không lắp vào Grave Command/Soul Crystal. Kurgal's Leash yêu cầu Command, và Soul Crystal là Companion-tag commandable nên apply được, khác Spectre autonomous không Command. Tecrod's Revenge mâu thuẫn với :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Instability"} (Minion Instability giết minion ngay khi life về 0, bypass Last Gasp window), không stack hai cái. Unholy Might không stack: nguồn từ Necromantic Conduit, Kurgal's Leash, prefix Custom Desecrated "You have Unholy Might" trên staff đều chỉ lấy copy mạnh nhất.

## Curse và Blasphemy

Lich không carry damage trực tiếp, nhưng phần Chaos extra từ Unholy Might chỉ ăn được khi enemy chaos-res không quá cao. :wiki-link{url="https://www.poe2wiki.net/wiki/Despair"} kéo chaos-res enemy xuống. Đó là multiplier thật của build, không phải utility. Chạy curse qua :wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"} biến curse thành aura quanh mình, socket :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Communion"} vào để reserve Life thay vì Spirit, Spirit dồn cho companion. Lab 4 ascendancy lấy :wiki-link{url="https://www.poe2wiki.net/wiki/Incessant_Cacophony"} cho infinite duration + curse slot thứ hai; cộng keystone tree :wiki-link{url="https://www.poe2wiki.net/wiki/Whispers_of_Doom"} thì có 3 curse cùng lúc, đủ chỗ cho Despair + Elemental Weakness + curse phụ scale theo damage type chính của companion.

## Ascendancy

Tám điểm Lich dồn hết vào Unholy Might + Curse, bỏ nhánh Spell more-damage (Eldritch Empowerment / Price of Power) vì companion deal Minion damage không phải Spell damage.

Lab 1: :wiki-link{url="https://www.poe2wiki.net/wiki/Necromantic_Conduit"} (qua small Mana). Engine damage duy nhất ascendancy đóng cho companion. Đổi lại "Lose 5% of maximum Mana per Second", cần mana regen đủ để giữ không Low Mana; nếu rớt mana xuống Low thì Unholy Might tắt và companion mất 30% extra Chaos ngay.

Lab 2: :wiki-link{url="https://www.poe2wiki.net/wiki/Blackened_Heart"} cho 4% increased Magnitude of Unholy Might Buffs per 100 maximum Mana. Vì vậy tree path đi qua max-mana node thay vì pure ES. Mỗi 1000 mana cho +40% magnitude, gear stack mana flat trên helmet/amulet/ring trở thành stat damage cho companion.

Lab 3: :wiki-link{url="https://www.poe2wiki.net/wiki/Rupture_the_Soul"} (qua small Curse Area). Cursed enemy bị companion giết có 33% nổ một phần tư max Life thành Chaos. Clear pack miễn phí, kích bằng chính curse Despair đã reserve sẵn ở slot Blasphemy.

Lab 4: :wiki-link{url="https://www.poe2wiki.net/wiki/Incessant_Cacophony"} (qua small Curse Area), thêm curse slot + infinite duration. Mở khoảng trống cho curse thứ hai (Elemental Weakness/Conductivity/Flammability tùy companion deal element gì) mà không tốn Spirit thêm.

## Passive Tree & Mastery

Cây đi vào bốn nhóm: minion damage + life, max-mana (vì mana là stat damage qua Blackened Heart), reservation efficiency (cho Spirit fit Soul Crystal), và ES pool. Path qua nhánh witch start area ưu tiên small mana node + minion small node, vòng qua keystone :wiki-link{url="https://www.poe2wiki.net/wiki/Whispers_of_Doom"} (curse thứ hai từ tree, trả ascendancy point về cho nhánh khác nếu cần) trước khi đi mana stack.

Mana stack là điểm khác biệt so với spectre Lich. Spectre scale qua minion damage + chaos-res shred; companion solo carry cần thêm tầng magnitude từ Blackened Heart vì base damage không scale theo gem level. Path qua các cluster max mana % cộng các small flat mana trên đường. Đừng nhầm với Eldritch Battery: keystone đó convert mana sang ES recharge, kill engine của Necromantic Conduit (cần mana raw để không Low Mana).

Reservation efficiency từ tree (cluster :wiki-link{url="https://www.poe2wiki.net/wiki/Self_Sacrificing"} cho 40% efficiency minion skill, đổi bằng −20% efficiency skill không-minion) đi cặp với Atziri's Communion routing curse sang Life, downside trơ vì curse đã reserve Life không reserve Spirit. Combo này hồi Spirit về cho Soul Crystal, có khả năng fit thêm Hulking Minions hoặc một utility minion thứ hai (Skeleton Warrior soak).

## Stat Priorities & Defenses

Số DPS và EHP của build này không có cách verify offline. PoB2 (community fork v0.17) không model damage của Companion từ Tame Beast hoặc His Grave Command. Output về 0 cho slot Soul Crystal giống như slot Tame Beast của Spirit Walker. Chain damage trên giấy là:

`base_hit_companion × (1 + Σ increased_minion) × ∏(1 + more_i) × hit_rate`

Với `∏ more_i` gồm Feeding Frenzy II (1.30), Hulking Minions (~30% more khi lắp), quality His Grave Command 0.5.3 (1.20 more Minion Life, không phải damage, nên không vào chain damage), và lớp Unholy Might (30% gained as extra Chaos × magnitude multiplier từ Blackened Heart × shred Chaos res từ Despair). Lớp Chaos là layer song song chạy paralel với hit gốc của companion, không cộng vào more; gained-as-extra chỉ scale theo modifier của damage type mới (Chaos) và enemy resistance type mới (Chaos res), không scale theo modifier của damage type gốc.

Cách thực dụng để biết build có chạy: log clear time / TTK trong client. Vào map T15+ Abyss-juiced, time TTK boss trước và sau khi gắn từng layer (Unholy Might base, Kurgal's Leash command, Blackened Heart mana stack, Despair curse). Mỗi layer add một deltaTTK đo được, đó là damage thật, không phải số PoB. Build trên giấy không có ý nghĩa cho đến khi có những con số đó.

Defense xếp theo layer order 0.5.3: max res cap (đặc biệt Chaos res, vì Lich không CI nên chaos hit ăn 2× lên ES) → ES pool → Life → :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} → recovery. Bỏ qua armour/evasion/block vì gear slot cần dồn mana + ES + curse area. Companion soak aggro frontline, mình đứng backline cast Command; vị trí là defense layer ẩn không quote số được.

### Performance Ratings

| Aspect          | Rating (1-5) |
|-----------------|--------------|
| clear_speed     | 3            |
| boss_damage     | 3            |
| survivability   | 3            |
| mobility        | 2            |
| league_start    | 1            |
| budget_scaling  | 4            |

Rating dựa trên framework; số DPS/EHP chưa verify nên rating chỉ là expectation đúng theo cơ chế đã đọc. Re-rate sau khi có in-client data.

## Gear Progression

### Gear theo slot

Priority order: cap Chaos res trước (Lich không CI), Life floor cho EHP, Int requirement cho gem (Soul Crystal cần Int gem scaling), max mana stack (Blackened Heart magnitude), Spirit cho Soul Crystal cost, ES pool cho defense, jewel slot cho Crystalline Phylactery scaling.

- **Weapon (2H Staff):** :wiki-link{url="https://www.poe2wiki.net/wiki/The_Unborn_Lich"} với prefix Custom Desecrated "Grants Skill: His Grave Command". 4 mod desecrated khác chọn theo priority. Custom Desecrated "You have Unholy Might / increased Magnitude of Unholy Might buffs you grant" là dòng tốt thứ hai sau Grave Command vì stack với Necromantic Conduit. Lich prefix Amanamu's flat Spirit (+35-50) hoặc Ulaman's Magnitude Damaging Ailments. Lich suffix tùy chọn: Archon duration / cast speed low life / block chance.
- **Off-hand:** không có (staff 2H).
- **Helmet:** ES base với roll +max mana, +Int, life, Chaos res. Nếu rớt được +1 minion level helmet enchant thì cộng thêm cho companion gem level.
- **Body:** :wiki-link{url="https://www.poe2wiki.net/wiki/Vis_Mortis"} cho +1 spectre/companion + Unholy Might khi minion die, nhưng Unholy Might không stack với Necromantic Conduit nên giá trị thật là +1 companion slot. Nếu không dùng Vis Mortis thì ES rare với +max mana + Life + res.
- **Gloves:** ES base với +max mana, Int, res. Mod desecrated nếu có ngân sách: "Allies in Presence deal X% increased damage" cho companion.
- **Boots:** ES + 30% movement speed (Boots Mob Spd là baseline). Roll Life + res + Int.
- **Belt:** Life + res + flask charge. :wiki-link{url="https://www.poe2wiki.net/wiki/Darkness_Enthroned"} (Abyss belt) cho 50-100% increased effect of Socketed Items + 2 augment socket, slot belt min-max khi đã có 2 abyssal jewel mạnh.
- **Amulet:** +mana flat + Int + Life + res. Anoint vào notable minion damage ngoài tree (Sovereignty / Whispers of Doom nếu chưa lấy keystone). :wiki-link{url="https://www.poe2wiki.net/wiki/Necromantic_Talisman"} late-game khi amulet đã +minion-level thuần.
- **Ring x2:** +flat mana + Int + Life + res + Spirit (Ventor's Gamble nếu chạy stack Spirit). Một ring Stellar Amethyst cho Chaos res floor.
- **Jewel:** Crystalline Phylactery (Lich keystone) cho 100% increased Effect, chứa abyssal jewel mod minion damage / minion life / + Spirit. Timeless Jewel late-game roll seed cho reservation efficiency theo tribute.
- **Charm:** Freeze removal + Ailment immunity + Movement speed boost on hit.

### Leveling → Early Mapping → Endgame → Mirror Tier

Build không leveling được trước Lv 78 (staff requires Level 78); leveling phase phải chạy build khác hoàn toàn rồi respec. Phù hợp pattern: level Lich bằng [spectre summoner](/builds/witch/0-5-spectre-summoner-lich) hoặc [bone construct](/builds/witch/0-5-bone-construct-mass-summoner-lich) đến Lv 78, farm waystone tier 10+ cho đủ Abyss content unlock, drop hoặc craft Kulemak's Invitation, hunt Vessel of Kulemak đến khi ra The Unborn Lich với prefix Grave Command. Sau khi có staff + bind con Undead vừa ý thì respec ascendancy + một phần tree về magnitude path.

Endgame là farm Abyssal Depths juiced để vừa farm currency vừa hunt rare Undead khác replace Soul Crystal cũ khi tìm được con base mạnh hơn hoặc roll 4 mod đẹp hơn. Mirror tier path là min-max mana stack qua jewellery cluster + Timeless Jewel reservation efficiency seed + Darkness Enthroned belt với 2 abyssal jewel best-in-slot.

## Failure Modes

Build có ba điểm sáng phải nói trước. Một, lớp damage Unholy Might-projection của Lich đắp lên companion là cơ chế độc nhất Witch, không ascendancy nào khác cho minion 30% extra Chaos vĩnh viễn. Hai, patch 0.5.3 thật sự mở khoá build: trước patch, Soul Crystal output từ một con boss-tier ăn 40-60% Spirit dễ dàng, không còn chỗ cho aura/curse phụ; sau patch, cast-skill free Spirit và quality scale Minion Life trực tiếp. Ba, build scale rất tốt theo investment dài hạn: mỗi lần upgrade Soul Crystal (bind con base mạnh hơn / mod retain đẹp hơn) là một deltaTTK đo được, đầu tư không bị diminishing return nhanh như spectre.

Gating chain là failure mode lớn nhất. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Unborn_Lich"} drop-restricted từ :wiki-link{url="https://www.poe2wiki.net/wiki/Vessel_of_Kulemak"} cuối Abyssal Depths, phải có :wiki-link{url="https://www.poe2wiki.net/wiki/Kulemak's_Invitation"} mỗi lần fight. Drop được staff rồi vẫn còn 1/5 xác suất rơi đúng prefix Grave Command, miss thì phải :wiki-link{url="https://www.poe2wiki.net/wiki/Essence_of_the_Abyss"} reroll, mỗi essence tốn Abyss bone resource. Có Grave Command rồi vẫn phải đi hunt rare Undead, cast Grave Command, đọc 4 mod retained, giết trong cửa sổ Hinder; sai cửa sổ thì cast lại. Build cần đủ may mắn ở 3 lớp gating độc lập trước khi chạm tới gameplay thật. Tính theo Vessel-of-Kulemak run trung bình: hai chục lần Vessel để có vài cây Unborn Lich, mỗi cây 20% prefix đúng, chuỗi này nằm vài tuần endgame, không phải vài giờ.

Soul Crystal vẫn reserve Spirit là failure mode thứ hai. Patch 0.5.3 bỏ Spirit cast-skill nhưng giữ nguyên reservation của companion output. Companion mạnh thì reservation cao: một con boss-tier có thể chiếm 40-60% pool Spirit, chỉ còn chỗ cho aura nhỏ + một utility minion phụ. Đừng kỳ vọng stack 3-4 con companion như Spirit Walker, game không cho phép, build single-carry là default. Hulking Minions buff thêm "cost significantly more Spirit" làm fit Hulking trên Soul Crystal là quyết định cân nhắc, không phải free pick.

PoB-blind là failure mode thứ ba. PoB2 community fork hiện không model damage của Companion từ Tame Beast hoặc His Grave Command, output về 0 cho slot Soul Crystal. Không có spreadsheet truth source để verify build trên giấy trước khi đầu tư. Mọi số DPS / EHP / clear speed trong doc này là expectation theo cơ chế đã đọc, không phải PoB-verified. Test plan thực dụng: log TTK boss và clear time map qua từng patch upgrade trong client (boss kill timer + map clear stopwatch), đó mới là số thật. Khi nào PoB2 fork update support cho Companion DPS (chưa thấy roadmap) thì doc này refresh số.

Infernal Legion từng là engine kéo build tương tự pre-0.5.0; patch 0.5.0 halve IL I/II self-burn từ 20% xuống 10% và remove hẳn IL III. Build này KHÔNG lean vào Infernal Legion; đừng dùng IL như damage engine, dùng nó như chip damage utility nếu còn dư socket. Đừng nhầm với hướng Dinomancer Lich pre-0.5 từng dùng IL III làm walking-simulator burn, hướng đó dead theo patch, không hồi sinh dạng nào.

## Verdict

Build hợp người chơi đã có character Witch Lich Lv 90+ với pool Abyss content đủ farm Vessel of Kulemak đều, và đang tìm build flavor khác sau khi đã chạy spectre hoặc bone construct chán. Không phải build league-start: gating chain nhiều tuần, PoB không verify được, Spirit budget vẫn căng dù có patch 0.5.3 nới. Nếu đang trade ngân sách mid-range chưa có Unborn Lich, [Spectre Summoner Curse Lich](/builds/witch/0-5-spectre-summoner-lich) là path tốt hơn với cùng phần Lich identity (Unholy Might + curse) nhưng damage source verified và scaling rõ ràng hơn. Quay lại build này khi đã materialize được staff với prefix Grave Command, đó là thời điểm doc thật sự test được, không phải lúc đọc xong.

## Changelog

### 2026-06-19

- Initial draft sau patch 0.5.3 (His Grave Command bỏ Spirit cost).
- Math chain marked theory-craft, mọi số DPS/EHP để log in-client sau khi materialize staff.

## Relationships

- **related** [Spectre Summoner Curse Lich](/builds/witch/0-5-spectre-summoner-lich) — sibling Lich build dùng cùng identity Unholy Might + curse, có data ladder verified
- **related_mechanics** [Spirit và Spirit Reservation](/guides/spirit-and-spirit-reservation) — cơ chế Soul Crystal vẫn reserve Spirit dù cast-skill free
- **related_guides** [Unique items mới 0.5](/guides/0-5-new-unique-items) — context cho The Unborn Lich + ecosystem Abyss support gem
- **competes_with** [Bone Construct Mass Summoner Lich](/builds/witch/0-5-bone-construct-mass-summoner-lich) — Lich path khác dùng minion thuần thay vì companion
- **alternative_to** [Spirit Walker Companion Pack](/builds/huntress/0-5-spirit-walker-companion-pack) — Huntress là class đúng nếu thật sự muốn big-beast companion fantasy
