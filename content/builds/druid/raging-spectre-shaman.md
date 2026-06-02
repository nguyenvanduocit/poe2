---
template: templates/build-template.md
document_type: build
title: Raging Spectre Shaman
class: Druid
ascendancy: Shaman
league: '0.5'
patch: 0.5.0
status: draft
author: duocnv
created: '2025-12-17'
updated: '2026-05-29'
budget_tier: medium-budget
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Bind Spectre
  damage_type: Physical
  playstyle: Minion
  content_focus: Allrounder
tags:
- poe2
- spectre
- minion
- shaman
- druid
- rage
- warcry
- gargantuan-wasp
- minion-army
---

# Raging Spectre Shaman

Đây là hướng summoner dùng một bầy :wiki-link{url="https://www.poe2wiki.net/wiki/Spectre"} hồi sinh từ :wiki-link{url="https://www.poe2wiki.net/wiki/Gargantuan_Wasp"} (mình gọi vui là "Cocaine Wasps") bay nhanh và aggressive qua mọi vật cản, gánh cả clear lẫn boss, tự lao vào pack tiếp theo trước cả khi mình kịp di chuyển; còn mình đứng sau stack :wiki-link{url="https://www.poe2wiki.net/wiki/Rage"} để đẩy tốc độ và damage cho chúng. Trục damage là Rage của bản thân được :wiki-link{url="https://www.poe2wiki.net/wiki/Shaman"} chuyển hóa thành minion stat, gánh bởi spirit headroom của Shaman và một pool Energy Shield Chaos Inoculation ở endgame.

## Build Overview

Damage đến từ bầy Gargantuan Wasp — mỗi con tái hiện gần nguyên bộ skill của con ong gốc, projectile bay nhanh và rất aggressive, nên chỉ cần nuôi đủ số con là đã có một nguồn AoE sạch tự đi tìm enemy. Build dồn toàn bộ scaling vào **minion damage và minion attack speed**, và điểm khác biệt của Shaman so với mọi summoner khác là dùng chính Rage của người chơi làm vector scaling đó: notable :wiki-link{url="https://www.poe2wiki.net/wiki/Commanding_Rage"} biến mỗi điểm Rage thành 1% increased Minion Damage và mỗi 5 Rage thành 2% increased Minion Attack Speed. Rage không bị chuyển sang minion — nó nằm trên người mình và được *quy đổi* thành chỉ số minion, đây là chỗ guide cũ hiểu sai.

Để vòng quay đó hoạt động, mình cần Rage luôn ở mức cao và không tụt. Ascendancy notable :wiki-link{url="https://www.poe2wiki.net/wiki/Furious_Wellspring"} cho regen 6% max Rage mỗi giây và quan trọng nhất là "No Inherent loss of Rage" — Rage không tự decay, nên một lần build lên rồi giữ nguyên thay vì phải spam warcry liên tục như các build Rage thông thường. Defense layer là Energy Shield: leo dần ES qua campaign rồi swap sang :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Inoculation"} khi pool đủ dày, lấy luôn chaos immunity. Mobility do chính bầy spectre lo — chúng bay qua địa hình và dọn pack trước mặt, mình chỉ cần chạy.

## Skill Gems & Links

Trục chính là :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} bắt Gargantuan Wasp làm con damage chủ lực cho cả clear và boss. Setup link xoay quanh việc đẩy số con, đẩy tốc độ đánh và giữ chúng aggressive: :wiki-link{url="https://www.poe2wiki.net/wiki/Feeding_Frenzy"} để minion luôn ở trạng thái hung hãn, lao vào enemy thay vì đứng quanh mình; :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Mastery"} hoặc các support tăng minion damage/attack speed để cộng dồn với phần Commanding Rage đã quy đổi; và một link sống còn là :wiki-link{url="https://www.poe2wiki.net/wiki/Tecrod%27s_Revenge"} — đây là engine bất tử của build, giải thích kỹ ở dưới.

Mảng warcry là nơi guide cũ sai nặng nhất nên cần nói rõ cơ chế. Warcry trục chính là :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Cry"}, và nó **tốn Mana, không tốn Rage** — base cost (19-85) Mana, cooldown 8 giây, và cooldown đó được bypass bằng một Endurance Charge. Rage chỉ dính vào warcry qua ba đường gián tiếp: Furious Wellspring thêm "+5 to Rage cost" cho mọi skill (đây mới là lúc warcry tốn thêm Rage); :wiki-link{url="https://www.poe2wiki.net/wiki/Enraged_Warcry"} cho phép tiêu Rage để bỏ qua cooldown của warcry; và :wiki-link{url="https://www.poe2wiki.net/wiki/Raging_Cry"} cấp 4 Rage mỗi 5 Power khi gào. Vì Infernal Cry mang tag Nova nên :wiki-link{url="https://www.poe2wiki.net/wiki/Astral_Projection"} hợp lệ để cast warcry tại vị trí chỉ định (đổi lấy 25% less Area of Effect), giúp châm Rage từ xa thay vì phải lao vào giữa pack.

Bộ minion phụ chỉ là gia vị: vài con :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Brute"} hoặc skeleton tạp để body-block và làm bia đỡ, một con buff như :wiki-link{url="https://www.poe2wiki.net/wiki/Pain_Offering"} để đẩy thêm damage cho cả bầy trong các pha boss. Mình không tiêu nhiều spirit vào đám phụ này vì spirit phải dồn cho số lượng Wasp tối đa.

Exclusion check: none — build không dùng combo nào có one-way block (không Avatar of Fire, không Resolute Technique trên minion; Chaos Inoculation chỉ khóa Life ở 1 nhưng build vốn là ES/CI nên không xung đột).

## Ascendancy

Thứ tự ascendancy đi theo bốn notable cốt lõi của Shaman, lấy lần lượt qua các Trial. Đầu tiên là :wiki-link{url="https://www.poe2wiki.net/wiki/Sacred_Flow"} — cho +40 Spirit cho **mỗi** charm slot bỏ trống, tức tối đa +120 Spirit khi để trống cả 3 slot (charm slot cap ở 3). Đây là cú spike spirit lớn nhất của campaign, đổi lại là từ bỏ toàn bộ charm utility. Tiếp theo là :wiki-link{url="https://www.poe2wiki.net/wiki/Druidic_Champion"} — node này chỉ cho "Every 2 Rage also grants 1% more Spell damage", tức là **gating node thuần** đối với build minion (mình không cast spell, nên phần more Spell damage vô dụng), nhưng phải đi qua nó để mở đường tới Furious Wellspring.

Lab thứ ba lấy Furious Wellspring, mảnh ghép biến Rage từ một resource phải nuôi liên tục thành một resource giữ vĩnh viễn: regen 6% max Rage/giây, "No Inherent loss of Rage", +7 Maximum Rage, và còn cho phép increased/reduced Mana Regeneration Rate áp dụng luôn lên Rage Regeneration Rate. Lab cuối là :wiki-link{url="https://www.poe2wiki.net/wiki/Reactive_Growth"} cho defense: thích nghi theo loại Elemental Damage cao nhất của mỗi đòn nhận vào, mỗi adaptation khớp cho 10% less Damage của loại đó, cộng nền 10% less Elemental Damage taken — một lớp giảm sát thương nguyên tố rất đáng cho build CI vốn chỉ miễn chaos.

## Passive Tree & Mastery

Trên cây passive, hướng đi campaign là Spirit nodes trước (để nuôi nhiều Wasp sớm), rồi minion damage và minion attack speed cluster, rồi dày dần Energy Shield. Phần khiến tree này đặc biệt là hai notable Rage được lấy *ngoài* tree chính qua jewel. :wiki-link{url="https://www.poe2wiki.net/wiki/From_Nothing"} là Diamond jewel cho "Passives in Radius of Keystone can be Allocated without being connected to your tree", đặt quanh keystone :wiki-link{url="https://www.poe2wiki.net/wiki/Bulwark"} để mở khóa Warlord Berserker mà không cần kéo dây tới.

Đây là chỗ cần tách bạch hai notable mà guide cũ gộp làm một. Commanding Rage (lấy trên tree, hoặc instill lên amulet) là node quy đổi Rage của mình thành minion stat. Warlord Berserker (lấy qua From Nothing) là node hoàn toàn khác: "Allies in your Presence Regenerate 5 Rage per second if you have gained Rage Recently" kèm "40% reduced Presence Area of Effect" — đây mới là node thực sự bơm Rage cho ally trong presence. Hai cái phục vụ hai mục đích khác nhau, không phải một "rage sharing" duy nhất. Mastery node của các cluster minion thường để trống stat trong export nên không có gì để allocate đặc biệt; ưu tiên các mastery cho minion attack speed hoặc spirit reservation efficiency khi có lựa chọn.

## Stat Priorities & Defenses

Ưu tiên gear theo thứ tự: Spirit (để nuôi đủ số Wasp) → +Minion Levels → Energy Shield → minion attack speed / minion damage → resistance cap. Spirit là trần damage thực sự vì mỗi con Wasp thêm vào là một bộ damage hoàn chỉnh nữa, nên trước khi tối ưu chỉ số con đơn lẻ thì cứ đẩy spirit để thêm con đã.

- **ES / Life:** CI nên Life khóa ở 1; mục tiêu pool ES ~5-6k khi swap CI (~lvl 79), trần aspiration 16-17k ở endgame full gear
- **Defense layers (0.5+):** evasion phụ → max res cap → ES pool → Reactive Growth elemental adaptation → recovery rate
- **Resistances:** cap Fire/Cold/Lightning 75%; Chaos không cần lo sau khi vào CI (immune)
- **Spirit:** ~300+ cuối campaign, ~400-450 endgame (số endgame là plausible với gear+tree nhưng chưa verify bằng PoB)
- **Movement Speed:** lấy từ boots :wiki-link{url="https://www.poe2wiki.net/wiki/Bones_of_Ullr"} (5-15% MS sau rework 0.5)

Một insight quan trọng về số DPS: từ 0.3 có một global minion damage bonus chống non-unique (~25-35% more late-game) và chống unique (~20-25% more late-game), và 0.5 sửa bug khiến nó hoạt động đúng (Version_0.5.0.md:1039). Bonus này **không được tính vào số damage hiển thị trên skill của minion** — nghĩa là cả clear lẫn boss thực tế nhỉnh hơn con số PoB/tooltip cho thấy. Khi đọc DPS spectre trên PoB, ngầm hiểu rằng thực chiến cao hơn chừng đó.

### Performance Ratings

| Aspect          | Rating (1-5) |
|-----------------|--------------|
| clear_speed     | 5            |
| boss_damage     | 4            |
| survivability   | 4            |
| mobility        | 4            |
| league_start    | 2            |
| budget_scaling  | 3            |

## Resources

- **PoB:** chưa có pastebin chính thức cho phiên bản 0.5 của build này — cần materialize và publish khi vào league (xem ## Optimization).
- **Guide kế thừa 0.5 (canonical):** https://maxroll.gg/poe2/build-guides/minion-army-shaman-build-guide
- **Video gốc 0.4 (GhazzyTV, tech cũ — tham khảo lịch sử):** https://www.youtube.com/watch?v=TM036eoTJUY
- **Forum guide gốc 0.4 (poe-vault, stale):** https://www.poe-vault.com/poe2/druid/shaman/raging-spectre-build-guide

## Gear Progression

### Leveling
Bất kỳ minion skill nào để khởi động (wolves, skeleton tạp). Vũ khí leveling ưu tiên +Minion Levels và Spirit; helm/body ưu tiên Energy Shield base. Lấy charm slot sớm (belt ilvl 60+ cho đủ 3 slot, cộng quest Ancient Vows) rồi để trống cả ba để Sacred Flow phát huy +120 Spirit.

### Early Mapping
Bind Gargantuan Wasp ngay khi tới Ashen Forest (Third Interlude) làm con chủ lực. Mục tiêu cap được 3 elemental res, đủ ES (~3-4k) và đủ spirit nuôi 4-5 con Wasp. :wiki-link{url="https://www.poe2wiki.net/wiki/Bones_of_Ullr"} lúc này rất đáng đi: sau rework 0.5 nó cho 20-30% increased Reservation Efficiency cho skill tạo Undead Minion (áp lên cả spectre) cộng 5-15% Movement Speed — một buff trực tiếp giúp nhét thêm con vào cùng pool spirit.

### Endgame
Bộ unique định hình: From Nothing (Diamond jewel, drop từ The King in the Mists) quanh keystone Bulwark để mở Warlord Berserker; :wiki-link{url="https://www.poe2wiki.net/wiki/Darkness_Enthroned"} làm belt cho 2 Augment Socket ẩn và "(50-100)% increased effect of Socketed Items"; Tecrod's Revenge (lvl 65, drop từ Abyssal Depths / Vessel of Kulemak) làm support bất tử cho Wasp. Amulet instill Commanding Rage. Vào CI quanh lvl 79 khi pool ES chạm ~5-6k, sau đó dồn ES recharge và spirit.

### Mirror Tier (BiS)
Trần đầu tư là max-roll mọi slot ES + spirit, +minion levels trên amulet/helm, và đẩy ES pool về mốc 16-17k aspiration. Diminishing returns đến nhanh sau khi spirit đủ nuôi số Wasp tối đa — quá điểm đó, mỗi divine thêm chỉ mua ES sống dai hơn chứ damage gần như chững (vì số con đã chạm cap spirit).

## Flasks

Build CI nên flask Life vô dụng; thay vào đó chạy hai Mana flask để đỡ chi phí warcry, và các flask utility nếu slot cho phép. Tuy nhiên đây là điểm đánh đổi cốt lõi: vì để trống cả 3 charm slot cho Sacred Flow, mình **không có** ailment immunity / freeze removal / bleed removal thường lấy từ charm. Đó là lý do Reactive Growth (giảm elemental damage) và pool ES dày phải gánh phần phòng thủ mà charm bỏ lại. Khi vào league nếu thấy chết vì freeze/ignite quá nhiều, cân nhắc hi sinh một phần Spirit để lấy lại một charm slot.

## Pantheon & Bandits

POE2 0.5 không có hệ Pantheon/Bandit như POE1 — không có god power hay bandit reward để chọn. Phần phòng thủ tương đương được lo qua ascendancy (Reactive Growth) và keystone trên cây (Chaos Inoculation). Mục này giữ lại để khớp cấu trúc template; với POE2 hiện tại nó không áp dụng.

## Leveling Notes

Campaign chạy minion tạp bất kỳ cho tới khi bind được Gargantuan Wasp ở Ashen Forest (Third Interlude) thì chuyển hẳn sang nó làm trục. Trong giai đoạn đầu campaign, :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Legion"} có thể cắt vào bằng Uncut Support Gem đầu tiên (Level 2) như một boost damage rẻ — nhưng chỉ dùng tạm thời ở campaign, không phải engine endgame (lý do ở ## Failure Modes). Lấy Sacred Flow ở Trial đầu để spike spirit, bỏ trống charm, rồi đi Druidic Champion → Furious Wellspring → Reactive Growth qua các Trial sau. Khi ES gear đủ dày (~5-6k, thường quanh lvl 79) thì allocate Chaos Inoculation.

## Budget & Investment

Đây không phải league starter. Để chạy đúng như paper math cần hai unique farmed: From Nothing (pinnacle drop từ The King in the Mists) và Tecrod's Revenge (lvl 65, từ Abyssal Depths / Vessel of Kulemak). Trước khi có hai món đó, build vẫn nuôi Wasp được nhưng thiếu cả ally-Rage regen lẫn engine bất tử, nên clear chậm hơn rõ và minion chết thường xuyên hơn. Vì vậy budget_tier thực tế nghiêng về medium chứ không phải starter, và phần unique-dependency floor là điều cần tỉnh táo khi lên kế hoạch — nên coi đây là build thứ hai sau khi đã có currency, không phải build mở league.

Sau khi đủ hai unique nền tảng, đường tiền tiếp theo là đẩy spirit (thêm Wasp) và ES (sống dai hơn). Mirror tier chỉ là max-roll ES/spirit và +minion levels — diminishing returns đến nhanh khi số Wasp đã chạm cap spirit.

## Strengths & Limitations

Build làm rất tốt ba thứ: clear tốc độ cao nhờ Wasp bay qua địa hình và tự lao vào pack; playstyle nhàn vì sau khi build Rage một lần thì Furious Wellspring giữ nó vĩnh viễn, không phải spam warcry liên tục; và sống dai ở endgame nhờ CI chaos immunity cộng Reactive Growth.

Đổi lại, build struggle ở vài chỗ. Vì bỏ trống charm để lấy Sacred Flow nên không có ailment immunity — freeze/ignite nặng là điểm yếu cố hữu. Build phụ thuộc nặng vào hai unique farmed nên không vào được sớm. Và sức mạnh single-target tuy tốt nhưng không còn là "best in game" như guide 0.4 quảng cáo (tech boss-spectre Death Knight đã bị meta 0.5 bỏ); bossing giờ dựa vào chính Wasp cộng Tecrod's và bonus minion ẩn chống unique, đủ mạnh nhưng không phải superlative.

## Failure Modes

**Map mod hostile.** Mod "minions cannot be revived" hoặc "less recovery" đánh thẳng vào engine: nếu Wasp chết và không hồi sinh được trong khi Tecrod's window đang cooldown thì bầy mỏng dần và damage sụp. "Elemental weakness" nguy hiểm vì build CI chỉ miễn chaos, vẫn ăn full elemental; cộng với việc bỏ charm (không ailment immunity) thì các map nhiều ground effect nguyên tố dễ giết.

**One-shot encounter.** Boss có slam diện rộng hoặc burst một phát (Pinnacle, T17 slam) có thể quét sạch bầy Wasp nhanh hơn tốc độ re-summon. Tecrod's Revenge giữ minion bất tử *trong* cửa sổ Last Gasp, nhưng nếu cả bầy bị xóa cùng lúc và mình phải resummon từ đầu thì có một khoảng damage rỗng — và bản thân mình, dù pool ES dày, vẫn có thể bị one-shot nếu không né được pattern.

**Gear / currency floor.** Số liệu paper giả định đã có From Nothing (King in the Mists) cho Warlord Berserker và Tecrod's Revenge (Abyss lvl 65) cho engine bất tử. Dưới floor đó build vẫn chạy nhưng mất cả ally-Rage regen lẫn khả năng can't-die — đây không phải build khởi động league.

**Patch sensitivity.** Nerf Infernal Legion ở 0.5 (I/II giảm self-burn + ignite từ 20% xuống 10% max life mỗi giây, III không còn obtainable — Version_0.5.0.md:632-634) chỉ chạm phần campaign, vì với build này IL chỉ là support leveling rẻ — engine bất tử endgame là Tecrod's Revenge, một can't-die support độc lập (Version_0.5.0.md:349), không chạy bằng IL burn. Patch risk thật nằm ở chỗ build tựa nặng vào hai mảnh load-bearing là Tecrod's Revenge và notable Commanding Rage: nerf bất kỳ cái nào là đánh thẳng vào trục build. Đó là patch risk cao, nhưng vì lý do đó chứ không phải vì nerf IL.

## Summary

- Trục damage: bầy Gargantuan Wasp; scaling qua Commanding Rage quy đổi Rage của người chơi thành 1% Minion Damage/Rage và 2% Minion Attack Speed/5 Rage.
- Rage giữ vĩnh viễn nhờ Furious Wellspring (no inherent loss + 6% regen); warcry tốn Mana chứ không tốn Rage.
- Engine bất tử là Tecrod's Revenge (0.5 buff: minion thật sự không chết trong cửa sổ Last Gasp); Infernal Legion chỉ là support campaign rẻ, không phải engine endgame sau nerf 0.5.
- Defense: ES pool → Chaos Inoculation (~lvl 79, ~5-6k ES) + Reactive Growth elemental adaptation; đánh đổi bỏ charm = không ailment immunity.
- Không phải league starter: gated sau From Nothing (King in the Mists) và Tecrod's Revenge (Abyss lvl 65).

## Changelog

### 2026-05-29
- Port 0.4 → 0.5: cập nhật frontmatter (league 0.5, patch 0.5.0, author duocnv owner-voice, pob_coverage PARTIAL).
- Sửa core engine: Commanding Rage quy đổi Rage người chơi thành minion stat (không transfer Rage cho minion); tách Warlord Berserker (ally-Rage regen qua From Nothing) ra khỏi Commanding Rage.
- Sửa FAQ sai: warcry tốn Mana, không tốn Rage; Rage chỉ vào qua Furious Wellspring +5 cost / Enraged Warcry / Raging Cry.
- Sửa Sacred Flow: +40 Spirit mỗi charm slot trống (max +120 ở cap 3 slot), không phải flat conditional.
- Bỏ tech 0.4 đã stale: Death Knight Elite boss-spectre + weapon-swap dual-spectre; reframe Infernal Legion thành campaign-only sau nerf 0.5 (20%→10%, IL3 removed).
- Cờ Bones of Ullr là buff 0.5 (20-30% reservation efficiency + 5-15% MS).
- Viết lại toàn bộ sang prose owner-voice, bỏ mọi ASCII box và table thừa; thêm Failure Modes.

## Relationships

- **related_builds** [Infernalist Spectre Legion](/builds/witch/0-5-infernalist-spectre-legion) — cùng hướng Bind Spectre minion-army, so sánh trục elemental spectre vs Rage-scaling Wasp
- **alternative_to** [Unearth Bone Construct Mass Summoner](/builds/witch/0-5-bone-construct-mass-summoner-lich) — hướng mass summoner khác cho ai không muốn phụ thuộc unique farmed
- **related_guides** [Minion Army Build Comparison](/guides/0-5-minion-army-build-comparison) — đối chiếu các hướng minion-army 0.5 về clear/boss/budget
