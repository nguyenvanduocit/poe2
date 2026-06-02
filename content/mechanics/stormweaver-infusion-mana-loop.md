---
template: templates/mechanic-template.md
document_type: mechanic
title: Stormweaver Infusion Mana Loop
status: draft
author: duocnv
created: '2026-05-28'
updated: '2026-05-28'
league: '0.5'
patch: 0.5.0
pob_coverage: PARTIAL
tags:
  - poe2
  - sorceress
  - stormweaver
  - elemental-infusion
  - remnant
  - mana
  - power-charge
  - spark
  - comet
  - mechanic
  - return-of-the-ancients
---

# Stormweaver Infusion Mana Loop

Stormweaver Infusion Mana Loop là một engine sustain biến **Elemental Infusion** thành mana — character không chạy mana regen mà hồi mana bằng cách nhặt **Remnant** và consume **Power Charge**, đủ để spam :wiki-link{url="https://www.poe2wiki.net/wiki/Comet"} không nghỉ trên boss.[^1] Cơ chế dựng trên các node tree và Stormweaver ascendancy có từ 0.1–0.4, nhưng cả bộ chỉ thật sự đóng vòng ở 0.5.0 sau khi character tree được refund và tinh chỉnh — patch notes cấp free passive refund "due to the changes", nên mọi node mana phải đọc lại từ export 0.5.0 chứ không tin số 0.4.[^18] Hiện chưa character nào chạy live engine này ở 0.5 — đây là league-start plan của mas0ny1, người tự nói "this will be a learning experience" và "I'm hoping GGG does not see this and we don't get this nerfed before league start".[^1] Engine đáng phân tích ngay bây giờ vì nó là một trong những loop net-positive mana hiếm hoi không cần :wiki-link{url="https://www.poe2wiki.net/wiki/Archmage"}, và một mắt xích trong nó (Abiding Hex trong Cast on Critical) có thể bị xem là bug — quyết định chơi hay không phải chốt trong tuần league launch 2026-05-29.[^1][^19]

## How It Works

Trục đầu tiên cần tách bạch: **Elemental Infusion tự nó không cho mana**. Wiki ghi rõ "Elemental Infusions by themselves do nothing, making increased Remnant Effect useless on them".[^5] Một **Elemental Infusion** là buff sinh ra dưới dạng Remnant trên đất; đi qua nhặt Remnant mới cho buff, giữ tối đa 3 stack mỗi nguyên tố trong 20 giây hoặc tới khi bị một skill consume.[^5] Mana không đến từ việc *tiêu* infusion, mà đến từ việc *nhặt* Remnant. Đây là phân biệt nền tảng mà video gộp lại làm một, và nếu hiểu sai thì cả math chain bên dưới sẽ lệch.

Vì thế engine chạy trên **hai path mana độc lập**, dù người chơi cảm giác như một vòng liền mạch.

Path A là path nhặt Remnant. Một node trên tree 0.5.0 ghi verbatim "Recover 3% of Maximum Mana when you collect a Remnant", và node song sinh "Recover 3% of Maximum Life when you collect a Remnant".[^2] Mỗi Remnant nhặt vào trả 3% max mana và 3% max life. Vấn đề là slot luôn đầy (cap 3 mỗi nguyên tố), nên muốn nhặt cái mới thì phải *tiêu* cái cũ trước để mở chỗ. Cơ chế đóng vòng ở đây: ta consume infusion bằng các skill damage/utility, mỗi lần consume mở một slot, slot trống cho phép nhặt một Remnant mới từ đống đang nằm trên đất, và chính cú nhặt đó mới sinh 3% mana. Nguồn Remnant dồi dào nhờ :wiki-link{url="https://www.poe2wiki.net/wiki/Frost_Bomb"} (để lại Cold Infusion khi nổ),[^11] :wiki-link{url="https://www.poe2wiki.net/wiki/Siphon_Elements"} (5% chance mỗi nguyên tố spawn Remnant khi Freeze/Ignite/Shock),[^7] và Stormweaver notable **Storm's Recollection** cho "Remnants you create reappear once, 3 seconds after being collected" — tức mỗi Remnant được nhặt hai lần, double luôn lượng mana từ Path A.[^6]

Path B là path Power Charge, và đây mới là mắt xích trả mana lớn nhất mỗi lần kích. Tree 0.5.0 có node "Gain a Power Charge when you consume an Elemental Infusion" — nghĩa là mỗi lần tiêu một infusion (việc ta vốn đã làm liên tục ở Path A) ta đồng thời nạp một power charge.[^3] Cụm bốn node "Recover 2% of maximum Mana when you consume a Power Charge" (ba node) cộng "Recover 5% of maximum Mana when you consume a Power Charge" (một node) gộp lại thành **11% max mana cho mỗi power charge bị consume**.[^2] Câu hỏi còn lại: làm sao consume power charge một cách chủ động và liên tục? Lời giải là :wiki-link{url="https://www.poe2wiki.net/wiki/Enfeeble"} cắm chung support :wiki-link{url="https://www.poe2wiki.net/wiki/Abiding_Hex"}. Abiding Hex ghi verbatim "Supported Skills consume a Power Charge on use".[^13] Nên mỗi lần Enfeeble được cast (qua Cast on Critical), nó ăn một power charge, kích cụm node trên, trả về 11% max mana. Nếu mana cost của Enfeeble thấp hơn 11% max mana thì mỗi cú curse là một khoản lãi mana ròng.[^1]

Khi cả hai path chạy cùng lúc, người chơi thấy mana bar gần như đứng yên ở mức đầy giữa boss fight trong khi Comet mưa xuống liên tục. mas0ny1 chỉ rõ ở footage rằng character không bị giới hạn bởi mana bar mà bởi số Comet bắn ra — nghĩa là khi loop đã đóng, hướng nâng cấp không phải thêm mana mà tăng damage của :wiki-link{url="https://www.poe2wiki.net/wiki/Spark"} để mỗi hit sinh nhiều energy hơn, kéo theo nhiều Comet hơn.[^1]

## Math Chain

Các con số dưới đây tính cho character mẫu 1.5k max mana, giả định nhặt đủ infusion (perfect uptime). Mỗi dòng là mana hồi về trong một chu kỳ skill đầy đủ; nguồn của từng % là node tree verbatim ở 0.5.0, nên giá trị per-event đã chốt chắc, riêng tổng chu kỳ còn phụ thuộc uptime nhặt Remnant nên cần đo lại khi vào league.

- Cold-Infused Spark consume 1 Cold Infusion → mở 1 slot → nhặt 1 Remnant (node "Recover 3% of Maximum Mana") — +3% = +45 mana[^8][^2]
- Comet + Spell Cascade consume 3 Fire Infusion → 3 Remnant repick — +9% = +135 mana[^9][^2]
- Flame Wall consume 1 Lightning Infusion → 1 Remnant repick — +3% = +45 mana[^12][^2]
- Firestorm consume tối đa 3 infusion (1 mỗi nguyên tố) → tối đa 3 Remnant repick — +9% = +135 mana[^10][^2]
- Enfeeble + Abiding Hex consume 1 Power Charge (cụm node 2+2+2+5) — +11% = +165 mana[^13][^2]
- **Total gain — +35% max mana ≈ +525 mana/chu kỳ**[^1]

Phía chi phí là tổng mana cost phẳng (flat) của các skill trên, vì build không chơi Archmage nên cost không scale theo max mana. Sheet của mas0ny1 cho ra −364 mana/chu kỳ, để lại **net +161 mana/chu kỳ** ở 1.5k max mana.[^1]

Insight quan trọng nhất nằm ở bất đối xứng giữa hai vế: vế gain là **phần trăm max mana** còn vế cost là **flat**. Nâng max mana lên gấp đôi (3k) thì gain thành +1050 trong khi cost vẫn ~−364, biến margin từ +161 thành +686. Đây là lý do build đi **Mind Over Matter** + hybrid life/mana và cố kéo max mana cao nhất có thể, chứ không phải vì tankiness đơn thuần.[^1][^16] Cùng logic giải thích vì sao Firestorm và Comet+Spell Cascade được ưu tiên: chúng ăn nhiều infusion nhất mỗi cast (tối đa 3), mở nhiều slot nhất, cho nhiều cú repick 3% nhất — chúng là nguồn mana chính của Path A chứ không phải nguồn damage chính.[^1][^10]

## Key Interactions

**Refracted Infusion** là multiplier nhân đôi tốc độ tích infusion: "When collecting an Elemental Infusion, gain another different Elemental Infusion".[^6] Mỗi Remnant nhặt vào cho thêm một infusion khác nguyên tố, nên dù chỉ Frost Bomb sinh Cold, người chơi vẫn nhanh chóng có đủ ba nguyên tố để Firestorm và Comet có cái mà consume. Cộng với Storm's Recollection (mỗi Remnant tái xuất một lần), tốc độ sinh infusion của Stormweaver vượt xa các ascendancy Sorceress khác — đây là lý do engine này gần như chỉ chạy được trên Stormweaver.[^6]

:wiki-link{url="https://www.poe2wiki.net/wiki/Charge_Regulation"} là synergy kép với Path B. Buff gem này cho "(20-26)% more Critical Hit Chance while you have a Power Charge" và "Consumes one of each Charge every 10 seconds".[^15] Vì Path B đã sinh power charge liên tục (mỗi infusion consume = 1 charge), uptime của power charge gần 100%, nên crit bonus gần như permanent — và việc Charge Regulation định kỳ ăn charge mỗi 10 giây lại feed thêm cho cụm node 11% mana. Crit cao quan trọng vì engine endgame trigger Comet qua Cast on Critical bằng Spark.[^1]

Cold-Infused Spark có một interaction crit ẩn: bản base Spark có 9% crit, nhưng khi Cold-Infused, crit nhảy lên 11%.[^8] Đây không phải con số làm tròn — nó là điều kiện đặc biệt của Spark, và là lý do build crit đi hướng cold thay vì lightning thuần. Mỗi % crit nền trên Spark khuếch đại tần suất trigger Cast on Critical → nhiều Comet hơn.[^1][^8]

### Wording distinction — "Infusion Remnant" vs "Remnant" league mechanic

Hai thứ hoàn toàn khác nhau cùng mang chữ "Remnant" trong 0.5, cực dễ nhầm:

- **Infusion Remnant** (cơ chế caster của engine này) — vật thể trên đất do skill caster tạo ra; đi qua nhặt để nhận một **Elemental Infusion** buff, cap 3 mỗi nguyên tố, tan sau 20 giây.[^5] Đây là "Remnant" mà các node "Recover 3% Mana when you collect a Remnant" và Storm's Recollection nói tới.[^2][^6]
- **Remnant (Runic Recipe crafting)** — cơ chế league Runes of Aldur 0.5.0; là vật phẩm crafting nhặt trong encounter để chạy Runic Recipe đổi item hiếm, không liên quan gì tới mana hay infusion.[^19]
- Hệ quả: khi đọc node tree hay tooltip skill thấy chữ "Remnant" trong context Stormweaver/Infusion, đó luôn là Infusion Remnant. Đừng kỳ vọng league Remnant của Runes of Aldur đóng góp vào mana loop — chúng dùng chung tên nhưng là hai hệ thống tách biệt.

## Math Chain Caveat — Mind Over Matter recovery

**Mind Over Matter** keystone cho "All Damage is taken from Mana before Life" nhưng đính kèm "50% less Mana Recovery Rate".[^16] Build dùng MoM để biến mana thành lớp EHP, nhưng dòng giảm 50% recovery rate là một biến chưa được mas0ny1 nhắc tới và có thể bào mòn cả math chain ở trên nếu nó áp lên các cú hồi 3%/11%. "Recovery Rate" trong POE2 chắc chắn cắt regen và leech; việc nó có cắt luôn instant recovery dạng "recover X% on event" hay không thì chưa có xác nhận in-game cho engine này. Nếu có áp, +525 gain/chu kỳ tụt còn ~+262, đủ để lật một số setup max-mana thấp từ net-positive sang net-negative. Đây là test target số một khi vào league, không phải kết luận — chỉ là lỗ hổng cần log.[^16][^1]

## Optimization

Hướng đầu tư đúng thứ tự ưu tiên: kéo max mana, giữ power-charge uptime, rồi mới tới damage.

Max mana là đòn bẩy lớn nhất vì gain là %max-mana còn cost phẳng — đầu tư mana không chỉ cho EHP qua MoM mà trực tiếp nới margin mana mỗi chu kỳ.[^1][^16] Trên ascendancy, lấy Refracted Infusion và Storm's Recollection sớm để dồn tốc độ sinh infusion; Storm's Recollection còn cho "Remnants can be collected from 50% further away", giúp hốt trọn cả ba Remnant từ một Frost Bomb spell-cascade khi đứng giữa.[^6] **Force of Will** của Stormweaver cấp "20% of Damage is taken from Mana before Life", một lớp MoM nhỏ miễn phí cộng dồn với keystone, đồng thời buff Arcane Surge theo mana thiếu hụt.[^6]

Về gem, Enfeeble phải giữ **level thấp nhất có thể**. Cost của Enfeeble scale từ 41 mana ở level 1 lên 178 ở level 20.[^14] Vì lãi Path B cố định ở 11% max mana (165 mana ở 1.5k), Enfeeble level 1 (41 mana) cho net +124 mỗi cú, còn level 20 (178 mana) lại lỗ −13. mas0ny1 thừa nhận đã lỡ level Enfeeble lên cao và đó là sai lầm; engine muốn curse rẻ nhất, không phải curse mạnh nhất.[^1][^14] Cùng nguyên tắc áp cho Firestorm — giữ level thấp để cost rẻ hơn lượng mana nó mở khoá qua repick.[^1]

Để chống RNG infusion (đôi khi không ra đủ Fire cho Comet, hoặc Firestorm ăn mất Fire mà Comet cần), chạy thêm mana-on-Remnant đã đủ; mana-on-kill là tuỳ chọn nhưng mas0ny1 đánh giá không cần thiết.[^1] Endgame swap sang Adonia's ego để Pinnacle of Power buff cả ba nguyên tố, giúp Siphon Elements proc đều ba màu thay vì lệ thuộc Frost Bomb cho Cold.[^1]

## Interactions with Other Content

Trong endgame 0.5.0 đã overhaul, engine có một điểm va chạm cần lường. :wiki-link{url="https://www.poe2wiki.net/wiki/Mana_Tempest"} là spike DPS chính khi clear/boss, nhưng nó buộc đứng yên: "Empowers your Mana-costing Spells while you remain inside it" và "30% of Mana and Life spent while in the storm is added to this Skill's Mana Cost per Second".[^17] Đứng yên trong endgame mới — nơi boss có pattern slam và arena hẹp hơn — đối nghịch trực tiếp với phòng thủ chính của build là chạy vòng freeze cả màn. Người chơi phải chọn giữa cửa sổ Mana Tempest (damage cao, bất động) và kiting freeze (an toàn, damage thấp) tuỳ encounter.[^1][^17]

Lớp phòng thủ của build dựa nặng vào freeze toàn màn từ Cold-Infused Spark, nên các encounter có quái/boss kháng hoặc miễn freeze trong 0.5 endgame sẽ lột trần điểm yếu defense — đây là chỗ engine mana mạnh nhưng survivability lại mỏng nhất.[^1]

## What Doesn't Work

Đừng cắm increased Remnant Effect để mong infusion mạnh hơn. Wiki ghi thẳng "Elemental Infusions by themselves do nothing, making increased Remnant Effect useless on them" — Remnant Effect chỉ ảnh hưởng các loại Remnant có giá trị nội tại, còn Infusion Remnant chỉ là cái cớ để mở slot và trigger node mana.[^5]

Đừng kỳ vọng consume infusion trực tiếp ra mana. Không có node nào trả mana khi consume infusion; node chỉ trả mana khi *nhặt Remnant* (Path A) hoặc *consume Power Charge* (Path B).[^2] Nếu hết Remnant trên đất để nhặt, việc spam skill ăn infusion sẽ chỉ tốn mana mà không hồi — loop đứt ngay khi không còn Remnant nguồn.[^5][^2]

Đừng đôn Enfeeble hay Firestorm lên level cao "cho mạnh". Vì hai gem này dùng để mở khoá mana chứ không phải làm nguồn damage, level cao chỉ làm cost vượt quá lượng mana chúng mở khoá, lật chu kỳ sang âm.[^1][^14]

## Common Mistakes

**Sai: level Enfeeble cao cho curse mạnh. — Đúng: giữ Enfeeble level 1–3. — Lý do:** lãi Path B cố định 11% max mana; cost Enfeeble scale 41→178 mana theo level, nên level cao ăn hết lãi. Ở 1.5k mana, sai lệch giữa level 1 và level 20 là khoảng 137 mana mỗi cú curse — đủ lật cả loop âm nếu spam dày.[^1][^14]

**Sai: dồn max mana sau cùng, ưu tiên damage trước. — Đúng: kéo max mana trước khi loop ổn định. — Lý do:** dưới ngưỡng max mana đủ, gain (%) không thắng nổi cost (flat), loop chưa đóng thì damage cao cũng vô dụng vì không có mana mà cast. mas0ny1 dùng Efficacy như "crutch gem" giai đoạn đầu chính vì chưa đủ max mana, và sẽ bỏ khi mana lên.[^1]

**Sai: vào endgame vẫn dùng staff. — Đúng: chuyển wand + scepter ở T15 để đủ 190 spirit. — Lý do:** Cast on Critical setup endgame cần 190 spirit, mà wand cho phép cắm scepter (nguồn spirit lớn). Staff tốt cho damage early rush tới T15 nhưng không đủ spirit để fit Cast on Critical đầy đủ về sau — đi sai vũ khí giai đoạn này khiến phải reroll cả setup gem.[^1]

## Cost & Restrictions

Engine có vài khoản chi và cản trở cụ thể.

Về spirit: setup endgame cần khoảng 190 spirit để gồng cả :wiki-link{url="https://www.poe2wiki.net/wiki/Cast_on_Critical"} lẫn các aura, mà 190 spirit gần như bắt buộc một scepter — nghĩa là buộc dùng wand làm vũ khí chính thay vì staff.[^1] Riêng Siphon Elements đã ngốn 30 spirit và Charge Regulation thêm 30 spirit, nên ngân sách spirit căng từ sớm.[^7][^15]

Về restriction cơ chế: Path B chỉ chạy nếu có power charge để consume, mà power charge đến từ việc consume infusion — nếu chuỗi infusion đứt (RNG xấu, hết Remnant nguồn), Path B im luôn. Mana cap mỗi nguyên tố là 3 infusion, nên không thể "tích trữ" vô hạn để gồng qua giai đoạn khô Remnant.[^5]

Về downside: Mind Over Matter đính "50% less Mana Recovery Rate", một cái giá có thể đắt hơn vẻ ngoài nếu nó áp lên chính các cú hồi mana của engine (xem mục caveat phía trên).[^16] Và lớp defense build rất mỏng — mas0ny1 mô tả gear test "very bad" và character "squishy", phòng thủ thực tế gần như chỉ là freeze cả màn, nên engine mana mạnh không bù được survivability ở các pha one-shot.[^1]

Về patch gating: bản thân Abiding Hex trong Cast on Critical bị chính tác giả gọi là "could be considered a bug" — engine vẫn chạy được không cần Abiding Hex nhưng phải bù bằng pool mana lớn hơn hoặc mana cost efficiency cao hơn, tức margin hẹp lại đáng kể nếu mắt xích này bị vá.[^1]

## Verdict & Open Questions

- Engine net-positive mana là **thật về mặt cơ chế**: mọi node (3% mana/Remnant, 11% mana/power charge từ cụm 2+2+2+5, "gain power charge on consume infusion") đều xác nhận verbatim trong export tree 0.5.0; Abiding Hex consume power charge và Enfeeble cost thấp đều khớp wiki.[^2][^13][^14]
- Net-positive ở chu kỳ thực tế phụ thuộc uptime nhặt Remnant (RNG) và giả định perfect collection của sheet — số +161/chu kỳ chỉ là số trên giấy, cần đo mana thực trước/sau một chu kỳ khi vào league để xác nhận.[^1]
- Tính sống của build (clear/boss thực tế ở 0.5) chưa kiểm chứng được: chưa character nào chạy live, Comet đã bị nerf ở 0.5 (lvl 20 còn 787–1181, trước 829–1243), defense mỏng — phải test thực địa khi vào league.[^9][^1]
- **Verdict: EXPLOITABLE, patch-sensitive.** Engine khai thác bất đối xứng %-gain vs flat-cost; mạnh nhưng treo trên hai biến chưa chốt.
- Open question 1: Abiding Hex trong Cast on Critical có sống qua một hotfix đầu league không? Nếu bị vá, margin hẹp lại và cần pool mana lớn hơn để bù.[^1]
- Open question 2: "50% less Mana Recovery Rate" của Mind Over Matter có cắt các cú hồi 3%/11% không? Cần log mana trước/sau một chu kỳ ngay khi vào league để đo gain thực.[^16]
- Open question 3: với Comet đã nerf, số Comet/giây còn đủ để boss DPS check ở endgame mới không? Cần test trên T15 full boss point sau launch 2026-05-29.[^9][^19]

## Patch Evolution

### Patch 0.5.0 (Return of the Ancients — 2026-05-29)
Character passive tree được tinh chỉnh kèm free refund "due to the changes", nên các node mana của engine phải đọc từ export 0.5.0; Comet bị nerf damage (lvl 20 còn 787–1181 từ 829–1243, Fire-Infused còn 787–1181 từ 1036–1554) và :wiki-link{url="https://www.poe2wiki.net/wiki/Ice_Nova"} mất khả năng originate từ Frostbolt khi cascade ngang, ảnh hưởng combo clear leveling.[^18][^9] Đây là patch đầu tiên engine đóng vòng được như một league-start plan công khai.[^1]

### Patch 0.4.0
Stormweaver được buff các mắt xích nền của engine: Refracted Infusion thành 100% "gain another different Elemental Infusion" (trước 50% chance), Storm's Recollection thêm "collected from 50% further away".[^6] Đây là bản khoá tốc độ sinh infusion đủ cao để Path A nuôi nổi spam.

### Patch 0.3.0–0.2.0
Storm's Recollection (đổi tên từ Scouring Winds) nhận "Remnants reappear once" thay cho exposure cũ; Force of Will được rework sang "20% of Damage is taken from Mana before Life"; các node mana nhỏ của Stormweaver chuyển từ "4% increased maximum Mana" sang "12% increased Mana Regeneration Rate".[^6] Abiding Hex được giới thiệu ở 0.2.0, đặt nền cho Path B power-charge sau này.[^13]

## Relationships

- **related_mechanics** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — cùng league 0.5 caster/companion archetype, tham chiếu khi so sánh league-start option.
- **alternative_to** [Infernal Legion Ignite Loop](/mechanics/skills/infernal-legion-ignite-loop) — một engine self-sustain khác của Witch, đối chiếu mô hình loop.

## References

[^1]: mas0ny1 — *"[POE2 0.5] My League Start Plans: Comet Spam Stormweaver"* (2026-05-28). Mô tả engine, math chain mana gain/loss, leveling, gear transition, và tác giả tự khai Abiding Hex "could be considered a bug" + chưa từng chơi caster POE2. <https://www.youtube.com/watch?v=CrRAcnBaMvw>

[^2]: GGG passive skill tree export, tag `0.5.0` (`data/passive-tree/0.5.0/data.json`, fetched 2026-05-26, source `grindinggear/poe2-skilltree-export`). Node verbatim: "Recover 3% of Maximum Mana when you collect a Remnant"; "Recover 3% of Maximum Life when you collect a Remnant"; "Gain a Power Charge when you consume an Elemental Infusion"; ba node "Recover 2% of maximum Mana when you consume a Power Charge" + một node "Recover 5% of maximum Mana when you consume a Power Charge" (tổng 11%). Mind Over Matter và Infusion of Power hiện diện trong cùng export.

[^3]: GGG passive skill tree export 0.5.0 — node "Gain a Power Charge when you consume an Elemental Infusion" (mắt xích sinh power charge cho Path B).

[^4]: GGG passive skill tree export 0.5.0 — cụm bốn node consume-power-charge: 2% + 2% + 2% + 5% = 11% max mana mỗi power charge consumed.

[^5]: poe2wiki — *Infusion*. "Picking up the Remnant grants you the Infusion for 20 seconds or until it is Consumed by another Skill. You can have up to 3 of each Infusion by default." + "Elemental Infusions by themselves do nothing, making increased Remnant Effect useless on them." <https://www.poe2wiki.net/wiki/Infusion>

[^6]: poe2wiki — *Stormweaver*. Refracted Infusion: "When collecting an Elemental Infusion, gain another different Elemental Infusion"; Storm's Recollection: "Remnants you create reappear once, 3 seconds after being collected" + "Remnants can be collected from 50% further away"; Force of Will: "20% of Damage is taken from Mana before Life". Version history xác nhận 0.4.0 buff Refracted Infusion lên 100%. <https://www.poe2wiki.net/wiki/Stormweaver>

[^7]: poe2wiki — *Siphon Elements*. Spirit gem, reservation 30 Spirit: "5% chance per Power to spawn a Cold Remnant on Freezing", "5% chance to spawn a Fire Remnant on Igniting a non-Ignited target", "5% chance to spawn a Lightning Remnant on Shocking a non-Shocked target". <https://www.poe2wiki.net/wiki/Siphon_Elements>

[^8]: poe2wiki — *Infusion* (mục Spark). Spark base Critical Strike Chance 9.00%, "Consumes a Cold Infusion if possible to fire many sparks in a circle"; bản Cold-Infused: Critical Hit Chance 11.00%, fires 12–16 projectiles, +0.5s cast time. <https://www.poe2wiki.net/wiki/Spark>

[^9]: poe2wiki — *Comet* (Cost (17–173) Mana, "Consumes a Fire Infusion if possible") cùng GGG 0.5.0 patch notes: "Comet: Now deals 212 to 318 Cold Damage at Gem level 11 (previously 223 to 335), scaling up to 787 to 1181 damage at Gem level 20 (previously 829 to 1243). Fire-Infused Comet now deals 212 to 318 ... scaling to 787 to 1181 (previously 1036 to 1554)." (`data/release-notes/Version_0.5.0.md`). <https://www.poe2wiki.net/wiki/Comet>

[^10]: poe2wiki — *Firestorm*. "Can Consume all three types of Elemental Infusion, creating a much larger storm when Fire-Infused, causing lightning bolts when Lightning-Infused, and raining ice bolts when Cold-Infused." Cost (14–147) Mana. <https://www.poe2wiki.net/wiki/Firestorm>

[^11]: poe2wiki — *Frost Bomb*. Cost (9–99) Mana, Cooldown 6.00s, để lại Cold Infusion khi detonate, áp Elemental Exposure tới tối đa 50%. <https://www.poe2wiki.net/wiki/Frost_Bomb>

[^12]: poe2wiki — *Infusion* (mục Flame Wall). "Consumes a Lightning Infusion if possible to also add Lightning damage to the Projectiles." <https://www.poe2wiki.net/wiki/Flame_Wall>

[^13]: poe2wiki — *Abiding Hex*. Support gem (Curse): "Supported Skills consume a Power Charge on use" + significant Curse duration. Introduced 0.2.0. <https://www.poe2wiki.net/wiki/Abiding_Hex>

[^14]: poe2wiki — *Enfeeble*. Curse spell, Cost (41–178) Mana scaling theo gem level 1→20, "Curse all targets in an area ... making them deal less damage". <https://www.poe2wiki.net/wiki/Enfeeble>

[^15]: poe2wiki — *Charge Regulation*. Spirit gem, reservation 30 Spirit: "(20-26)% more Critical Hit Chance while you have a Power Charge", "Consumes one of each Charge every 10 seconds". <https://www.poe2wiki.net/wiki/Charge_Regulation>

[^16]: poe2wiki — *Mind Over Matter*. Keystone: "All Damage is taken from Mana before Life" + "50% less Mana Recovery Rate". <https://www.poe2wiki.net/wiki/Mind_over_Matter>

[^17]: poe2wiki — *Mana Tempest*. Cost 1% Mana per second: "Empowers your Mana-costing Spells while you remain inside it" + "30% of Mana and Life spent while in the storm is added to this Skill's Mana Cost per Second". <https://www.poe2wiki.net/wiki/Mana_Tempest>

[^18]: GGG 0.5.0 patch notes (`data/release-notes/Version_0.5.0.md`): "a free passive tree refund has been granted due to the changes"; section "Passive Tree Changes"; "Ice Nova: Is no longer able to originate from Frostbolt while cascading sideways."

[^19]: GGG 0.5.0 patch notes (`data/release-notes/Version_0.5.0.md`): "The Return of the Ancients expansion contains a new league, an overhaul to Path of Exile 2's Endgame, with six new Endgame storylines and 2 new Ascendancy classes" (Martial Artist/Monk, Spirit Walker/Huntress); league Runes of Aldur dùng Remnant + Runic Recipe crafting; "Added support for Build Guides ... .build files".
