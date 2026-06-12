---
template: templates/mechanic-template.md
document_type: mechanic
title: Spirit Walker Companion Beast Hunt
status: draft
author: nguyenvanduocit
created: '2026-05-20'
updated: '2026-06-12'
league: '0.5'
patch: 0.5.1
tags:
  - poe2
  - huntress
  - spirit-walker
  - tame-beast
  - companion
  - minion
  - unique-beast
  - crafting
  - farming
  - 0-5
---

# Spirit Walker Companion Beast Hunt

Trên một build :wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} companion carry, damage của nhân vật chính là damage của một con beast — con mình tame bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} rồi bind làm companion. Cả pipeline gói trong năm việc: hiểu cách tame và retention modifier, chọn con beast đáng làm carry, săn nó ở đâu, nhồi đúng bộ modifier lên người nó, và xếp các multiplier ngoài để con carry đập ra số. Doc này đi trọn vòng đó. Con carry tự seek mục tiêu và tự đánh, nên min-max không phải xoay skill tay mà là ráp đúng pipeline săn rồi chồng multiplier lên con đã bắt.

## Cơ chế tame hoạt động thế nào

Tame Beast đặt wisps lên một rare Beast trong một cửa sổ ngắn. Nếu con Beast chết khi còn bị wisps bao quanh, gem biến thành `Companion: <Monster Name>` cùng level và quality, về sau dùng để summon con đó như một reviving companion. Mục tiêu phải là rare Beast — không phải normal, magic hay humanoid — và phải chết trong lúc wisps còn dán. Hết duration trước khi con chết thì gem không capture.

Beast đã tame giữ tối đa **bốn regular monster modifier**. Nếu con có hơn bốn, game chọn ngẫu nhiên bốn để giữ, nên mỗi lần tame là một cú roll riêng: cùng một monster base có thể cho con carry rất khác nếu bốn modifier giữ lại khác nhau. Modifier kiểu Essence hoặc Azmerian wisp **không** được giữ theo cùng cách — chỉ mod gốc của monster mới count. Vì vậy bài toán không chỉ là bắt đúng base, mà là săn đúng rare modifier trên đúng base.

Constraint chính là **spirit reservation**. Reservation của Summon Beast scale theo cả sức mạnh con monster lẫn số modifier nó mang, nên con 4-mod ăn spirit nhiều hơn hẳn con 1-mod cùng base. Suy ra hai hướng tiêu thụ beast khác nhau: build một con gánh thì 4-mod càng nhiều càng tốt; build nguyên đàn qua :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan%27s_Effigy"} thì "4-mod across the board" bóp nát spirit budget — filler companion nên giữ ít mod cho rẻ reservation, chỉ con đầu đàn mới đáng 4-mod.

Tamed beast **account-bound**: khi một beast gắn vào gem, gem thành Summon Beast account-bound, không trade được, nhưng vẫn stash và chuyển sang character khác của chính mình. Không có chuyện bán con đã tame, cũng không mời người mua vào tame hộ — khi một beast lọt vào màn hình, nó khoá chỉ cho những người đã ở trong area lúc đó được tame. Pre-aggro rồi mời buyer vào là không được; chỉ bán được instance sạch nếu buyer vào trước khi con hiện lên màn hình.

:wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} là cơ chế cùng họ nhưng khác mục tiêu: nó bắt gần như mọi non-unique monster làm reviving minion, trong khi Tame Beast chỉ nhắm rare Beast và biến thành companion. Tame Beast mạnh hơn ở support-oriented modifier; Bind Spectre hợp hơn khi muốn một minion có skill cụ thể.

## Reservation nền của từng loại beast

Mỗi monster variety có một mức reservation nền — phần trăm spirit pool mà bản companion chiếm khi summon, trước mọi efficiency stack và trước phần cộng thêm từ mod giữ lại. Damage% và Life% là hệ số stat của bản companion so với monster chuẩn cùng level, và reservation nền bám theo stat budget đó: con càng mạnh càng chiếm pool sâu. Catalog tameable trải từ 9.3% của Hatchling tới 56.1% của Elephant Tortoise; những mốc đáng nhớ:

| Beast | Dmg% / Life% | Reservation |
|---|---|---|
| Hatchling | 10 / 0 | 9.3% |
| Feral Primate | 65 / 65 | 24% |
| Winged Fiend | 80 / 80 | 26.7% |
| Hungry Wolf | 100 / 100 | 30% |
| Diretusk Boar | 170 / 170 | 39% |
| Alpha Primate | 175 / 175 | 39.6% |
| Bramble Hulk | 200 / 200 | 42.3% |
| Antlion Charger | 200 / 200 | 42.3% |
| Quadrilla Sergeant | 462 / 250 | 42.3% |
| Zekoa / Silverfist | 463 / 250 | 47.4% |
| Morvak, the Infernal | 500 / 313 | 47.4% |
| The Black Crow | 375 / 250 | 47.4% |
| Azmerian Wolf | 243 / 270 | 49.2% |
| Elephant Tortoise | 245 / 350 | 56.1% |

Phần lớn unique boss beast đứng chung mức 47.4% bất kể Damage%, nên trong nhóm đó cứ nhắm con Damage% cao nhất — Morvak 500 và Zekoa/Silverfist 463 đứng đầu, The Black Crow 375 trả cùng giá spirit mà thua hẳn về pool damage. Quadrilla Sergeant là dòng đáng dừng mắt nhất bảng: Damage% 462 ngang Zekoa nhưng nền 42.3% và là rare — không cần The Natural Order, không chiếm slot Unique, săn ở Jungle Ruins cùng pool với rare Quadrilla. Tame thử một con và đọc tooltip attack pool trong client trước khi đầu tư mod cho nó như một carry thứ hai. Đầu rẻ của bảng là chỗ chọn filler: Winged Fiend 26.7% là base aura-bot tiêu chuẩn — săn bản giữ mod All Damage Shocks làm slot shred — còn Feral Primate với Hungry Wolf lấp chỗ giai đoạn campaign.

Hai caveat khi áp số. Mức nền tính cho con 0-mod, mỗi rare modifier giữ lại lúc tame đẩy reservation lên trên nền này. Và số chỉ áp cho bản tame bằng gem — companion granted từ item, như Azmerian Wolf qua Sylvan's Effigy hay Spirit Vessel qua Forgotten Warden, reserve theo item grant nó: đọc tooltip trong client thay vì lấy số bảng.

## The Natural Order mở hướng Unique carry

:wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"} là node ascendancy của Spirit Walker, và nó là cánh cửa duy nhất biến Tame Beast từ rare-beast utility thành unique-beast carry. Node cho Tame Beast bắt **Unique Beast**, nhưng chỉ một Unique Tamed Beast tại một thời điểm; con Unique được +30% Movement Speed; và nó bị possess bởi một **Azmeri Spirit ngẫu nhiên, đổi mỗi 20 giây**.

Cái possess đổi mỗi 20s này là một layer riêng, **không phải** bốn rare modifier rotate. Bốn rare mod giữ lúc bắt là cố định khoá cứng; cái luân phiên là một Azmeri Spirit buff do The Natural Order áp lên con Unique. Hai layer coexist độc lập — bốn mod khoá cứng cộng một Azmeri Spirit thay đổi. Pool Azmeri Spirit có cỡ chục bonus, phần lớn là damage-type; danh sách đầy đủ và buff nào đáng cho con carry thì cần đọc tận tay trong client để liệt kê.

Vì chỉ giữ được một Unique Tamed Beast, con boss companion không thay thế hoàn toàn rare beast package — nó tạo một slot boss riêng cần so sánh với rare companion có modifier tốt.

## Con beast nào đáng làm carry

Con carry crit tiêu biểu là hai con ape, và chúng chia hai tier theo base crit — đây là chỗ dễ gán nhầm nhất. :wiki-link{url="https://www.poe2wiki.net/wiki/Alpha_Primate"} (monkey) là con base crit cao (~25%): chỉ cần một mod Extra Crits là cap, vì 25% × 4 = 100%. :wiki-link{url="https://www.poe2wiki.net/wiki/Mighty_Silverfist"} — bản map-boss của nó là :wiki-link{url="https://www.poe2wiki.net/wiki/Zekoa,_The_Headcrusher"} — đọc tại tooltip ~5% base, nên Extra Crits một mình chỉ ra 5% × 4 = 20%, cần lớp thêm :wiki-link{url="https://www.poe2wiki.net/wiki/Critical_Weakness"} mới lên được ~60%. Hai số base (5% và 25%) là tooltip read, mốc tham chiếu chứ không phải hằng số min-max — và có dấu hiệu chính Silverfist mới là con high-crit (đọc tới ~250% crit-damage, mà 250% đó không sinh từ Extra Crits vì mod chỉ cho crit *chance*, không chạm crit damage). Muốn chốt cứng thì tame trắng từng con, đọc crit + crit-damage của companion đã summon trong client.

Mighty Silverfist là một Unique monster ở Act 3 :wiki-link{url="https://www.poe2wiki.net/wiki/Jungle_Ruins"} (Level 34), thuộc monster type :wiki-link{url="https://www.poe2wiki.net/wiki/Quadrilla"} — một silverback ape khổng lồ dùng thân cây làm vũ khí, không phải "monkey" theo nghĩa đen. Lý do nó là carry phổ biến nhất: attack pool damage cao, xuất hiện ở nhiều map nên dễ roll đúng bộ mod.

Ngoài hướng crit, các nhánh carry khác chia theo damage type. :wiki-link{url="https://www.poe2wiki.net/wiki/Morvak,_the_Infernal"} nghiêng về fire/physical single target, cần debuff fire resistance/armor break đúng cách. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Black_Crow"} có mobility và damage profile đáng test nhưng chưa có lý do rõ để vượt Head Crusher hoặc Morvak. Còn :wiki-link{url="https://www.poe2wiki.net/wiki/Diretusk_Boar"} là rare Beast ở :wiki-link{url="https://www.poe2wiki.net/wiki/Infested_Barrens"} (reservation nền 39%, charge thẳng kèm 25% chance Maim) — carry rẻ tiền hợp cho zoo, không cần đường Unique.

Trước khi đổ tiền vào một con, định nghĩa vai trò của nó. Nếu build thiếu phòng thủ, ưu tiên beast có aura/defensive utility thay vì cố tìm DPS. Nếu thiếu ailment setup, tìm beast có ground effect hoặc guaranteed ailment để mở scaling cho main skill. Beast chỉ đáng dùng khi có nhiệm vụ rõ — utility beast cần aura/ground effect/debuff đáng giữ, damage beast cần attack pool tốt và scaling path không phá character chính. Boss nguy hiểm với player chưa chắc là companion tốt: nhiều boss giết player vì skill khó né hay arena pressure, những thứ đó không tự chuyển thành damage khi boss thành minion.

## Bốn nguồn nhân damage con carry

Con carry không có "skill của mình" để scale — nó chạy attack pool của con monster gốc, và mọi thứ mình làm là cộng multiplier từ ngoài vào pool đó. Bốn nguồn nằm ở bốn bucket khác nhau nên compound chứ không giẫm chân nhau.

**Một — gem level.** Đây là more-multiplier nằm sẵn trên skill: Tame Beast cho summoned beast "40% more damage at Gem Level 9 scaling up to 84% at Gem Level 20" (minimum gem level 7). Nó chạm mọi con beast bất kể base, nên +level minion là upgrade ưu tiên số một — nguồn từ amulet, sceptre, helmet (suffix "+# to Level of all Minion Skills"). Jewel **không** cấp gem level; đóng góp minion của jewel nằm ở dòng increased damage và crit-damage-bonus suffix ("of Gripping").

**Hai — crit từ monster modifier.** Mod đáng nhất là **Extra Crits** — một :wiki-link{url="https://www.poe2wiki.net/wiki/Monster_modifier"} cho "300% increased Critical Hit Chance", tức nhân base crit ×4. Vì nó nhân base, kết quả phụ thuộc base crit từng con (xem phần chọn carry). Con tier ~5% phải lớp thêm Critical Weakness: +0.5 base crit mỗi stack, tối đa 20 stack = +10 base, cộng vào **base trước** khi nhân. Chuỗi đầy đủ cho con tier thấp: (5 + 10) × (1 + 3.00) ≈ 60% crit. Build hiện tại đã online sẵn nửa chuỗi này — :wiki-link{url="https://www.poe2wiki.net/wiki/Malice"} liên tục inflict Critical Weakness trong presence nên +10 base có sẵn, không tốn gem slot.

**Ba — Pain Offering package.** :wiki-link{url="https://www.poe2wiki.net/wiki/Pain_Offering"} grant companion (companion là minion) "20-29% increased Attack and Cast Speed" cộng tới "58% increased damage", và vì là Offering nên hiệu lực scale theo increased Buff effect. :wiki-link{url="https://www.poe2wiki.net/wiki/Danse_Macabre"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Sacrificial_Offering"} mỗi cái cấp "30% increased Buff effect" — chính dòng khuếch đại grant của Pain Offering. Thêm :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Cleric"} để heal cả minion lẫn companion. Cả gói chạy trên vài skeleton rẻ làm nền.

**Bốn — Parry debuff.** :wiki-link{url="https://www.poe2wiki.net/wiki/Parry"} cho enemy chịu "50% more Attack Damage" trong 2s base; scale duration bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Prolonged_Duration"} II (35% more skill effect duration → 2.0s lên 2.7s) và scale magnitude bằng các node Parried Debuff Magnitude trên cây. Riêng node magnitude trên cây cộng lại đã chạm ~100% (gấp đôi base 50% lên ~100% more Attack Damage taken theo cơ chế Magnitude chuẩn), buckler Dunkelhalt đẩy tổng tới ~150%. Đây là more-multiplier tách bucket nên nhân chồng lên crit và gem-level.

Thứ tự đầu tư theo budget: gem level minion trước (rẻ, phổ quát, luôn đúng); rồi crit nếu chạy con carry crit (con ~25% cap trên một Extra Crits → dồn crit-damage-bonus; con ~5% cần cả Extra Crits lẫn Critical Weakness mới tới ~60%); rồi Pain Offering package; cuối cùng Parry ở weapon-set 2 như end-state. Trần phải nhớ: **100% crit chance là breakpoint cứng** — khi con carry đã cap, mọi điểm crit-chance thêm là số chết, lúc đó pivot sang crit-damage-bonus (jewel "of Gripping" tới 25, Wolf Idol +20% crit damage bonus, support Super Critical).

## Săn rare beast ở đâu

Cái nghẽn không phải tame được hay không — nó dễ — mà là số lần gặp đúng base với đúng mod giữ lại. Ba đường phá nghẽn theo ba hướng.

**Untainted Paradise — dồn volume.** :wiki-link{url="https://www.poe2wiki.net/wiki/Untainted_Paradise"} là unique map water biome, area level 65, breeding nên density rất cao: gấp đôi monster, gấp bốn magic/rare so với map thường, kèm 200-400% increased Experience. Quan trọng: nó **không drop item nào cả**, giá trị thuần nằm ở đám rare bắt được. Mang một loạt Tame Beast gem rỗng, juice map cho density lên, rồi tame mọi rare beast gặp được; con nào ra package xấu thì disenchant ngay tại chỗ. Một lần chạy có juicing tử tế ra đủ rare 4-mod để lọc cho hướng nguyên đàn. Untainted Paradise cho power-per-slot, không phải cho việc nhồi đầu một con.

**Essence reset — nhắm đúng một base.** Mỗi overworld zone có pool monster base riêng: :wiki-link{url="https://www.poe2wiki.net/wiki/Whakapanu_Island"} (Act 4, area level 46) spawn đúng ba loại Caustic Crab, Coconut Crab, Quill Crab, nên muốn một con cụ thể thì vào đúng zone của nó. Tìm một essence monster — rare bị essence giam, hiện sẵn 2-3 regular modifier trước khi thả ra. Đọc mod: xấu thì reset để có con essence mới, ưng thì wisp rồi giết khi còn wisps. **Đừng đánh vỡ essence trước khi ưng mod** — vỡ là con đó chốt, muốn đổi phải reset zone. Reset có hai tầng: nhẹ là respawn ở checkpoint để reroll con essence trong instance hiện tại; nặng là giữ Ctrl + left-click cửa vào area mở window tạo zone mới. Và **tắt minion khi tame ở zone level thấp**, kẻo đàn companion DPS cao giết con beast trước khi wisps kịp bám đủ.

**Camp cổ điển — base phổ biến.** Rẻ nhất khi chỉ cần một base thường: reset ở checkpoint gần Troubled Camp trong Infested Barrens cho hai rare mỗi lần (Diretusk Boar nằm ở đây), Jungle Ruins cho rare Quadrilla, Egg Cave trong :wiki-link{url="https://www.poe2wiki.net/wiki/Singing_Caverns"} cho rare Brine Maiden.

Tier map **không** đổi base stat con tame — sức mạnh companion scale theo gem level, không theo độ juicy của map farm nó. Nên với essence reset cứ chạy zone level thấp nhất còn ra đúng base, vừa an toàn vừa dễ tame. Untainted Paradise thì ngược lại, đáng juice vì mục tiêu ở đó là density để lọc nhiều con cùng lúc.

## Nhồi modifier lên con Unique carry bằng tablet

Bản Unique beast tự nhiên ở overworld spawn với mod ngẫu nhiên xoàng. Muốn nó spawn với nhiều rare modifier để có cơ may trúng Extra Crits, không tame bản overworld — đi tame bản **map-boss**. Với Silverfist, map-boss version là Zekoa the Headcrusher (area level 65), boss của hai map :wiki-link{url="https://www.poe2wiki.net/wiki/Riverside"} (Forest biome) và :wiki-link{url="https://www.poe2wiki.net/wiki/Rupture_(map)"} (Swamp biome).

Chuỗi nhồi modifier dựa trên số tablet slot của :wiki-link{url="https://www.poe2wiki.net/wiki/Map_Device"}, và số slot do **chính số modifier của waystone** quyết định, không phải do việc cắm tablet: waystone 0-2 mod mở 1 slot, 3-5 mod mở 2 slot, **6 mod mở cả ba slot**. Muốn đủ ba slot phải alch + spam exalted đẩy waystone lên 6 mod. (0.5 đã bỏ Tower hoàn toàn — tablet đặt thẳng vào Map Device.)

Đầy ba slot bằng hai loại :wiki-link{url="https://www.poe2wiki.net/wiki/Precursor_tablet"} bổ trợ nhau. :wiki-link{url="https://www.poe2wiki.net/wiki/Cruel_Hegemony"} (unique Overseer tablet, "Map Bosses have 1 additional Modifier", 5 uses) cho con boss thêm một modifier. Và một hoặc nhiều tablet suffix **"of Contest"** ("Unique Monsters in your Maps have 1 additional Rare Modifier") — suffix này roll trên bất kỳ tablet base nào, mỗi cái cộng thêm một rare mod. Ba slot kiểu này đẩy Zekoa lên cỡ ba rare modifier thêm, và Tame Beast giữ được bốn nên không phí.

Tầng trên cùng là node của **Jado of the Order of the Djinn** — Master of the Atlas mới, mở questline "Jado's Spycraft" bằng cách clear một anomaly map gần điểm start atlas. Một node trong chuỗi này cho "20% chance for double effect of explicit modifiers on tablets"; khi proc, ba tablet "of Contest" có thể đẩy con boss tới sáu rare modifier. Vì Tame Beast chỉ giữ random bốn, một boss 5-6 mod vẫn không phí hẳn — chỉ là không kiểm soát được giữ đúng bốn cái nào.

Cùng nhồi mod, con boss target nên thành **Powerful Map Boss** (mạnh hơn, drop xịn hơn, rớt waystone cao hơn một tier). Cruel Hegemony làm sẵn việc này vì Overseer tablet có dòng "Empowers the Map Boss". Khi build mod count thuần bằng "of Contest" trên base non-Overseer (Temple/Ritual/Breach), con boss không tự Powerful — lúc đó một :wiki-link{url="https://www.poe2wiki.net/wiki/Summoning_Circle"} cộng atlas notable **Runic Flare** (10% chance empower con map boss khi hoàn thành vòng tròn) là đường empower miễn phí. Empower là trạng thái nhị phân, không cộng dồn — đã chạy Cruel Hegemony thì thêm summoning circle không nâng tiếp.

Thứ tự ưu tiên modifier khi soi con boss trước lúc tame, từ cao xuống thấp:

- **Extra Crits** ("300% increased Critical Hit Chance") — ưu tiên số một tuyệt đối. Mọi mod khác chỉ là bonus quanh nó.
- **Periodically Enrages / Enraged** và **Hasted** — cùng bậc ưu tiên hai. Enraged cho +40% damage và +25% action speed; Hasted cho 30% increased Attack/Cast Speed.
- **Soul Eater** ("gains skill speed + damage reduction per consumed Soul", stack tới 50 souls) — trên con carry liên tục ăn soul, scaling skill speed cộng dồn rất mạnh.
- **Extra Fire/Cold/Lightning/Chaos Damage** ("gain 40% of Damage as Extra <element> Damage") — added-as-extra cộng additive lên base hit, không phải conversion. Ưu tiên chaos hoặc lightning vì ít bị resist.
- **Shroud Walker** ("teleports to distant Enemies creating a Smoke Cloud") — gần như meme, không cộng damage nhưng đỡ phần clear một chút.

Một điểm đã settled để khỏi phí lượt soi: **"facing" không phải là monster modifier**, đừng chờ nó xuất hiện.

## Reroll và revive theo số mod waystone

Số lần thử lại mỗi map đến từ số **waystone modifier**, không phải từ map modifier tablet cộng vào. Đây là điểm load-bearing của cả kỹ thuật: stack tablet "of Contest" + Cruel Hegemony chỉ thêm *map* modifier (mở slot, cộng mod lên boss) chứ không đụng tới waystone modifier, nên nhồi tablet **không** đốt revive. Bảng respawn theo waystone mod: waystone 4-mod cho 2 respawn attempt, waystone 6-mod cho 0 respawn attempt.

Hai cách chạy, đánh đổi giữa số mod và số lần thử:

**Run 6-mod (alch + spam exalted lên waystone) — 0 revive, one-shot.** Setup nhồi tối đa modifier (mở cả ba tablet slot) nhưng không có lần thử lại. Quy trình bắt buộc: chạy map, tới boss, **tame ngay lập tức** rồi mới xem modifier sau — lỡ chết hoặc lỡ giết con boss là mất trắng cả ba tablet trong map đó (gồm Cruel Hegemony 1 use). Chế độ rủi ro cao, chỉ chạy khi đã quen tay.

**Run rare 4-mod — 2 revive, soi-rồi-reroll.** Waystone rare bốn-mod cho 2 respawn attempt, mở ra một mẹo: vào boss room, tắt damage (turn off minions), soi modifier của Zekoa. Nếu xấu thì để boss giết mình — respawn ở checkpoint **ngoài** boss room, và lúc đó chỉ còn boss present. Mỗi respawn attempt là một lần soi mod mới, nên một lượt dùng tablet cho nhiều lần thử thay vì một. Người mới nên chạy chế độ này để có lưới.

Soi nhầm bộ mod xấu thì lượt đó coi như phí — nhưng con beast vừa bắt không vứt đi được nếu nó đang chiếm con Tame Beast 6-link đã đầu tư. Cách thoát là **disenchant** con Tame Beast gem ở vendor: thao tác này clear con monster đã lưu, cho lại một con Tame Beast trắng giữ nguyên level, quality, sockets, để tái dùng đi bắt phiên bản khác mà không phải mua 6-link mới. Nên thủ thêm một con Tame Beast thứ hai rẻ (Lv18, 5-link) làm standby để soi mod, chỉ dồn link xịn sang sau khi đã trúng bộ mod đáng giữ.

## Chain con boss bằng Rite of the Nameless

Mỗi map chỉ một boss, và trên atlas chỉ có vài map có đúng con mình cần — đó là nghẽn cứng cho việc fish mod trên con carry. **Rite of the Nameless** phá nghẽn đó bằng cách nhân số lần gặp lại con boss target lên.

Chuỗi bắt đầu từ :wiki-link{url="https://www.poe2wiki.net/wiki/The_King_in_the_Mists"}: giết nó drop **The Head of the King**, mang key tới hub **Caer Tarth** để khởi động Rite of the Nameless — chọn một chuỗi 5 map chạy chung một ritual liên tục. Monster của mỗi ritual, gồm cả map boss, xuất hiện lại ở từng map trong chuỗi; unique boss của mỗi map chỉ xuất hiện ở **ritual cuối cùng của map đó**. Mỗi map sau map đầu mang thêm modifier riêng, và mỗi map nhả một mảnh key Ritual Pinnacle Boss (lợi đi kèm). Đặt Riverside làm map đầu thì Zekoa được kéo theo cả chuỗi — một The Head of the King đổi ra tới ~5 lần gặp lại cùng con boss, mỗi lần là một spawn mới roll modifier riêng, tức ~5 cú fish độc lập cho Extra Crits.

Đặt con boss target làm **map đầu tiên** (boss được kéo theo cả 5 map bất kể bốn map sau là gì), bốn map sau chọn theo độ an toàn. Chạy tier thấp nhất còn chịu được — mục tiêu chỉ là giữ boss sống đủ lâu để wisp dán rồi giết khi còn wisp, không cần map juicy để fish mod. Nhồi tablet "of Contest" lên các map trong Rite để mỗi lần boss spawn đều nhiều mod: Rite quyết **số lần** spawn, tablet quyết **số mod** mỗi lần, summoning circle **empower** mỗi lần — ba lớp nhân nhau.

Cơ chế ritual đầy đủ — 8 point subtree, tribute/reroll, tablet suffix pool, Queen in the Mists — nằm ở guide [Ritual và Rite of the Nameless](/guides/0-5-ritual-rite-of-the-nameless); doc này chỉ dùng Rite như một đường chain boss để tame.

## Weapon và gear xoay quanh companion

Vì con carry chạy attack pool của monster, weapon choice không phải để mình tự đánh mà để buff companion. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} làm main-hand weapon damage trở thành stat companion: "companions deal added Attack Damage equal to 60% of main hand weapon damage". Weapon chậm, damage range cao, crit thấp vẫn rất tốt nếu nhân vật không cần tự đánh, nên talisman damage cao thành hướng gear đáng nghiên cứu thay vì chỉ nhìn minion damage trên sceptre. Weapon damage cao cũng buff các spirit package khác cùng lúc: :wiki-link{url="https://www.poe2wiki.net/wiki/Vivid_Stampede_%28passive%29"} tạo Vivid Wisps khi di chuyển và xả thành Spirit Stags khi attack, nên cùng một weapon vừa buff con carry vừa buff stag.

Weapon package đi theo vài hướng rõ. :wiki-link{url="https://www.poe2wiki.net/wiki/Jade_Talisman"} + non-unique sceptre qua :wiki-link{url="https://www.poe2wiki.net/wiki/Lord_of_the_Wilds"} là ceiling cao vì vừa có main-hand damage lớn vừa giữ minion stats trên sceptre. :wiki-link{url="https://www.poe2wiki.net/wiki/Spire_of_Ire"} là low-friction spear option vì stat requirement nhẹ và chaos damage ít bị resist. Route :wiki-link{url="https://www.poe2wiki.net/wiki/Giant%27s_Blood"} với :wiki-link{url="https://www.poe2wiki.net/wiki/The_Hammer_of_Faith"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Ironwood_Greathammer"} là peak-damage puzzle nhưng bị attribute pressure rất nặng.

:wiki-link{url="https://www.poe2wiki.net/wiki/Idolatry"} cho companion damage và reservation efficiency theo idol, nhưng phạt elemental resistance −4% mỗi non-idol augment socket vào. Node chỉ đáng lấy khi idol setup thật sự vượt rune/augment thường — mất socket tốt để lấy companion damage có thể làm character yếu đi nhiều hơn phần companion nhận lại. Khai delta resistance trước mọi swap.

Khi chọn rare sceptre cho hướng dồn một boss, ưu tiên minion attack speed hơn minion cooldown recovery: attack pool của nhóm Head Crusher có nhiều cooldown skill không phải lúc nào cũng là hit tốt nhất, tăng attack speed giúp con boss quay lại basic/high-value attack nhanh hơn.

## Cái không hoạt động

Không nên tính mọi companion như một damage multiplier miễn phí. Companion chiếm spirit, chịu AI, có animation lock, có survival problem và có thể bị giới hạn bởi nội dung không cho tame. Bỏ một aura quan trọng để chạy beast yếu thì build tệ hơn dù sheet nhìn thú vị hơn.

**Jewel không phải nguồn gem-level.** Jewel không roll "+Level of all Minion Skills"; đóng góp minion của nó nằm ở "minions deal increased Damage" và crit-damage-bonus suffix. Tìm minion-level trên jewel là phí lượt — soi amulet/sceptre/helmet.

**Parry không khuếch đại damage spell.** Parried Debuff là "more Attack Damage taken", chỉ con đánh attack mới hưởng. Cả hai con ape đều attack-based nên ăn được, nhưng đừng giả định Parry là multiplier phổ quát cho mọi con carry.

**"30% more Damage" của Danse Macabre / Sacrificial Offering không phải buff companion.** Dòng more đó scale cú offering spike, không cộng vào con carry. Cái cộng vào con carry là dòng "increased Buff effect" khuếch đại grant của Pain Offering. Lưu ý Danse Macabre chỉ apply nếu có một skeletal minion dư để consume, và Sacrificial Offering tốn 15% Life mỗi lần dùng — đáng cân trên một Huntress evasion pool máu mỏng.

**Stack crit chance quá 100% là số chết.** Sau khi con carry cap crit, mọi crit-chance thêm vô dụng; pivot sang crit-damage-bonus mới có uplift.

**Modifier từ Essence hoặc Azmerian wisp không dính lên con carry.** Chỉ bốn regular monster modifier gốc được giữ, nên đừng kỳ vọng essence-mod theo con beast về.

## Chi phí và ràng buộc

Untainted Paradise không drop item, nên nó thuần là máy farm beast — lời nằm cả ở số rare tame được, đừng kỳ vọng currency. Essence reset tốn thời gian reset hơn tài nguyên: mỗi lần tạo zone mới hoặc respawn checkpoint là một vòng thao tác tay.

Con carry càng nhiều mod càng đắt spirit — reservation scale theo modifier-count, không có node nào miễn. Một con carry 4-mod cộng companion phụ cộng self-defense rất dễ vượt spirit budget league-start, buộc rút bớt skeleton (mất luôn Pain Offering package). Tính reservation **trước** khi đi săn con nhiều mod.

The Head of the King bị tiêu mỗi lần chạy Rite, và để gặp King phải dồn tribute rồi sacrifice lấy Audience with the King — tốc độ săn companion qua đường này bị rate-limit bởi tốc độ farm tới King. Mỗi Rite buộc commit 5 map vào một ritual liên tục, không bỏ giữa chừng để lấy lại key.

Chi phí tablet hiện rẻ. Giá live ngày **2026-06-02** (POE2 0.5, day 4, fetch từ trade2): Cruel Hegemony floor ~1 exalted; tablet "of Contest" floor ~6-8 annul cho base single-mod, bản multi-mod juiced ~25 ex; 1 divine ≈ 54-75 exalted. Giá này đã crash ~60-75 lần so với day-2 (Cruel Hegemony từng ~1 divine, "of Contest" ~2-3 divine mỗi cái) — supply đuổi kịp demand cực nhanh tuần đầu, đừng quote lại số cũ. Snapshot này quá 7 ngày, re-fetch qua `/trade` trước khi quote lại. Một cảnh báo mua: **đừng mua tablet còn ít use** — Cruel Hegemony có 5 uses, tablet thường có 10 uses, kiểm use count trước khi bấm vì một cái 1-use giá thấp tính theo lượt dùng thì đắt gấp năm.

## Tổng kết

Companion carry là một pipeline năm khâu, mỗi khâu một quyết định. Tame Beast bắt rare/Unique Beast, biến gem thành companion account-bound và giữ tối đa bốn regular modifier (random nếu >4, không giữ Essence/wisp mod); reservation scale theo mod count nên đừng nhồi mù. The Natural Order mở hướng Unique carry — một con tại một thời điểm, possess bởi Azmeri Spirit đổi mỗi 20s tách biệt với bốn mod cố định. Con carry tiêu biểu là hai con ape chia hai tier crit: monkey ~25% cap trên một Extra Crits, Silverfist/Zekoa ~5% cần thêm Critical Weakness (có sẵn qua Malice) tới ~60%.

Damage con carry là bốn bucket compound: gem level (40%@9 → 84%@20, ưu tiên một), crit từ monster modifier, Pain Offering buff, Parry debuff (~100% magnitude từ node cây, tới ~150% với Dunkelhalt, chỉ cho attack). Săn beast ở Untainted Paradise cho volume, essence reset cho đúng base, camp cho base phổ biến — tier map không đổi base stat con tame nên chạy thấp cho an toàn. Nhồi mod bằng tablet stacking (Cruel Hegemony + "of Contest", ba slot từ waystone 6-mod, Jado double-effect) và chain boss bằng Rite of the Nameless cho ~5 attempt mỗi key; soi-rồi-reroll trên waystone 4-mod (2 revive) an toàn hơn run 6-mod one-shot.

Còn cần log tận tay trong client để chốt: con ape nào high-crit thật và crit-damage của nó (~250% hay khác); enumerate pool Azmeri Spirit mà The Natural Order luân phiên; double-effect node của Jado có apply cho dòng unique-monster không; cơ chế reset/reroll modifier khi respawn-at-checkpoint.

## Version History

### Patch 0.5.1

Tame Beast scaling giữ nguyên 40% @ gem 9 → 84% @ gem 20 (min gem 7); patch không đụng companion (Trusted Kinship, Extra Crits, Critical Weakness, Parry, Pain Offering đều y nguyên). The Natural Order possess con Unique tame bằng Azmeri Spirit đổi mỗi 20s — layer riêng, bốn rare mod giữ lúc bắt không rotate.

### Patch 0.5.0

Spirit Walker, Tame Beast và hệ companion ra mắt cùng Endgame rewrite của Return of the Ancients. The Natural Order mở hướng Unique carry; tablet đi thẳng vào Map Device (bỏ Tower); Masters of the Atlas (Jado's Spycraft) thêm node double-effect; Rite of the Nameless (The Head of the King → Caer Tarth → chuỗi 5 map) cho phép chain một con boss để có nhiều lần tame liên tiếp. Doc này gộp toàn bộ pipeline săn + scale companion carry vào một chỗ.

## Relationships

- **used_by** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — build nguyên đàn companion xây trực tiếp trên cơ chế tame, modifier retention và chuỗi multiplier này; lớp phòng thủ và roster cụ thể sống ở đó.
- **related_guides** [Ritual và Rite of the Nameless](/guides/0-5-ritual-rite-of-the-nameless) — cơ chế ritual đầy đủ (8 point subtree, tribute, tablet pool, Queen in the Mists) mà đường chain-boss-để-tame chạy trên đó.
- **related_mechanics** [Twister](/mechanics/skills/twister) — hướng Spirit Walker projectile dùng companion như utility layer thay vì carry chính.
- **competes_with** [Belt Hunting qua Ritual](/farming/0-5-ritual-belt-hunting) — cùng tốn slot tablet + atlas Map Device; chọn một hướng output (carry companion hay belt) cho mỗi session.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — league 0.5 mở Spirit Walker + The Natural Order + Tame Beast + Endgame rewrite là nền cho toàn bộ hướng companion carry.

## Resources

- [How to Scale Spirit Walker Tame Beast Damage](https://www.youtube.com/watch?v=hxqPJkbTp5Q) — các nguồn multiplier cho Unique tame carry.
- [Spirit Walker Beast Master Build Guide — CaptainLance9](https://www.youtube.com/watch?v=p6uR2uC1Kk4) — carry vs zoo, Parry magnitude, crit ape.
- [GhazzyTV — How to FARM Rare Tamed Beasts VERY QUICKLY](https://www.youtube.com/watch?v=Fj7JjMjwLUU) — Untainted Paradise volume farm + essence reset ở Whakapanu, caveat account-bound và on-screen tame lock.
- [GhazzyTV — How to Tame Unique Beasts with 3+ MODIFIERS!](https://www.youtube.com/watch?v=23wZWPR16o4) — walkthrough tablet stacking + reroll trên Zekoa.
- [CaptainLance9 — Zoomancer Spirit Walker Setup](https://www.youtube.com/watch?v=7xaY6l3J7zE&t=376) — Rite of the Nameless chain con boss tame qua nhiều map, tested live.
