---
template: templates/guide-template.md
document_type: guide
title: Minion Army Build Comparison
status: draft
author: duocnv
created: '2026-05-29'
updated: '2026-05-29'
league: '0.5'
patch: 0.5.0
---

# Minion Army Build Comparison

> **Quick Summary:** Dành cho ai đang phân vân chọn build minion nào để bắt đầu 0.5 — so sánh thẳng ba hướng (Witch Infernalist, Witch Lich bone-construct, Druid Shaman Raging Spectre) theo từng tiêu chí và chỉ ra build nào hợp với mục tiêu của bạn, vì ba build này trả lời ba câu hỏi khác nhau chứ không xếp được thành một bảng ai-mạnh-hơn-ai.

## Ba hướng minion, ba mục tiêu khác nhau

Sai lầm đầu tiên khi chọn build minion 0.5 là coi ba build này như một thang đo từ yếu đến mạnh rồi chọn "cái mạnh nhất". Chúng không phải vậy. Mỗi build được dựng quanh một mục tiêu khác hẳn, và build "tốt nhất" hoàn toàn phụ thuộc vào bạn muốn gì — leo league mượt, command một bầy quái cho vui, hay một con all-rounder cày endgame. Trước khi vào từng tiêu chí, cần đặt đúng vị trí từng build.

**Witch Infernalist** là hướng league-start an toàn nhất. Nó dựng một backline spectre tự hồi sinh vĩnh viễn qua :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"}, đứng sau hứng đòn bằng pool ES (qua :wiki-link{url="https://www.poe2wiki.net/wiki/Beidat's_Hand"} chuyển Life-reserve thành ES) và một cửa sổ overkill từ :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"}. Triết lý của nó là không hi sinh một lớp phòng thủ nào — damage tới gần như miễn phí từ gem level cộng buff toàn cục, ES gánh suốt campaign. Đây là build cho người muốn vào league rẻ, lì, ít thao tác.

**Witch Lich bone-construct mass summoner** là hướng RTS fantasy. Nó dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Unearth"} sinh ra tới ~24 :wiki-link{url="https://www.poe2wiki.net/wiki/Bone_Construct"} từ xác quái, tràn cả màn hình — cảm giác "chỉ huy một đạo quân" rõ nhất trong ba build. Đổi lại, đám construct là tạm thời và phải tự nuôi liên tục: chúng không teleport theo bạn, despawn sau khoảng 15 giây, và với 20+ minion thì máy tụt 10-15 FPS. Đây không phải build cày leaderboard, mà là build chơi vì cái nhìn trên màn hình.

**Druid Shaman Raging Spectre** là hướng all-rounder clear-và-boss, đầu tư cao. Nó dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Gargantuan_Wasp"} spectre bay vượt địa hình và tự lao vào pack, scale bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Rage"} qua ascendancy node, nuôi sống bằng vòng lặp bất tử từ :wiki-link{url="https://www.poe2wiki.net/wiki/Tecrod's_Revenge"}. Nó có spirit ceiling cao nhất, clear chung tốt nhất, và single-target khá nhất trong ba — nhưng nó bị khóa sau vài unique phải farm, không phải build để khởi động league.

## So sánh theo từng tiêu chí

| Build | Mạnh nhất | Tránh nếu |
|---|---|---|
| Infernalist | Rẻ & lì | Cần boss |
| Lich | Vui RTS | Cày endgame |
| Shaman | All-round | Mới vào league |

### Spirit ceiling

Shaman có trần Spirit cao nhất, và đây là gốc rễ kéo theo mọi thứ khác. :wiki-link{url="https://www.poe2wiki.net/wiki/Sacred_Flow"} cho thẳng +40 Spirit mỗi ô :wiki-link{url="https://www.poe2wiki.net/wiki/Charm"} bỏ trống, nên với 3 ô trống là +120 Spirit cộng dồn lên base 100 và sceptre ~100 — cú bơm Spirit từ một nguồn lớn nhất trong ba build. Cái giá phải trả nằm ở sống sót: bỏ trống charm nghĩa là mất tiện ích charm, mất ailment immunity. Trần Spirit này được mua bằng đúng lỗ hổng phòng thủ đó.

Infernalist đứng giữa. :wiki-link{url="https://www.poe2wiki.net/wiki/Beidat's_Will"} cho +1 Spirit mỗi 25 max Life nhưng tốn 25% Life reservation, nên ở mức Life 1500-2000 nó cho thêm khoảng +60-80 trên base 100 cộng sceptre ~100, pool rơi vào ~210-230 trước khi tính gear. Con số này là có điều kiện: vì nó scale theo Life, Beidat's Will chỉ vượt được +120 phẳng của Shaman khi bạn life-stack nặng.

Lich đứng cuối, và đứng cuối dứt khoát — nó không có node Spirit ascendancy nào cả. Beidat's Will bị khóa cho Infernalist (nó tốn 25% Life reservation, một Lich không thể allocate node đó), nên Lich chỉ dựa vào sceptre base ~100, gear "% increased Spirit", :wiki-link{url="https://www.poe2wiki.net/wiki/Profane_Commander"} (4%) và :wiki-link{url="https://www.poe2wiki.net/wiki/Soul_Mantle"} (+75). Vẫn chơi được nhờ base 100 phổ thông, chỉ là trần thấp hơn. Điểm cần nhớ: đám construct cast bằng mana chứ không reserve spirit, nên Spirit ở build Lich chỉ gate con spectre và offerings, không gate cả bầy horde.

### Clear speed

Shaman dẫn đầu clear chung, và điểm khác biệt nằm ở chuyển động chứ không phải damage thô. Wasp bay vượt địa hình, vật cản và tự lao vào pack, nên bầy không bao giờ bị kẹt ở chokepoint. Đây là chỗ nó tách khỏi Lich.

Lich có mật độ cao nhất khi bầy còn sống — 20-24 construct đánh physical tràn một hình nón, đúng kiểu nhìn RTS. Nhưng snowball gãy ở chokepoint và khi đi nhanh, vì construct không teleport theo người chơi: mỗi pack bạn phải re-summon lại từ xác. Mật độ trên màn hình là thật, nhưng nó không bằng throughput clear trên map nhiều đường hẹp.

Infernalist clear mượt nhưng raw screen-density thấp hơn hai build kia: spectre AoE trải qua 5-6 xác tự hồi sinh, nhân với buff toàn cục. Đó là kiểu backline đứng-nhìn, êm nhưng không bùng màn.

Điểm chung kéo cả ba lên đều nhau là bản vá một bug minion: GGG ghi rõ "approximately 25-35% more late-game minion damage against non-unique enemies … no longer factored into the damage numbers displayed" (Version_0.5.0.md:1039). Buff này không phân biệt class — nó nâng cả ba như nhau, nên nó không phải yếu tố phân định. Yếu tố phân định là Wasp bay vượt địa hình.

### Single-target / boss

Shaman là con bossing khá nhất trong ba, nhưng cần đặt đúng kỳ vọng. Wasp cộng sustain từ Tecrod's Revenge cộng buff ẩn ~20-25% lên unique gánh nó. Đây là solid, không phải superlative "best single-target 0.5" — tech boss-spectre Death Knight Elite của 0.4 đã bị bỏ ở 0.5, nên đừng mang kỳ vọng cũ sang.

Infernalist là trụ yếu nhất của chính nó. Damage chia đều ra N spectre thay vì dồn vào một điểm, và buff toàn cục chỉ ~20-25% lên unique (so với ~25-35% lên trash). Trên boss đơn, nó thua những hướng companion/spectre dồn damage.

Lich là sàn. Construct cap ở 24 con, mỗi con pool life/damage tí hon, và nguồn xác cạn trên boss solo: không có add thì không có construct mới khi đám cũ despawn sau ~15 giây. Đúng một video creator, chưa có Uber clear nào được chứng minh. Bossing của nó là dấu hỏi, không phải điểm mạnh.

Một bẫy scope phải tách rõ ngay đây: tiếng tăm "Lich là vua pinnacle 0.5, miễn nhiễm nerf sustain" thuộc về ED/Contagion Lich — một build chaos-DoT hoàn toàn khác, không nằm trong so sánh này. Build Lich ở đây là minion mass-summoner, và nó là sàn boss/endgame của ba build. Đừng để hai danh tính Lich lẫn vào nhau.

### Survivability

Shaman có trần EHP cao nhất nhưng kèm một lỗ hổng cố hữu. :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Inoculation"} cho chaos immunity cộng :wiki-link{url="https://www.poe2wiki.net/wiki/Reactive_Growth"} thích nghi elemental, ES rơi vào 5-6k quanh level 79 và scale lên trần mơ ước 16-17k endgame. Nhưng các ô charm bỏ trống để nuôi Sacred Flow đồng nghĩa không có ailment immunity — Shaman hở freeze/ignite. Đây là lý do hướng an toàn/hardcore nghiêng về Infernalist dù trần EHP của Shaman cao hơn: trần Spirit cao của Shaman đánh đổi bằng đúng lỗ phòng thủ đó.

Infernalist phòng thủ tốt vì không hi sinh lớp nào. Backline thật (hiếm khi vào melee), pool ES qua Beidat's Hand (Life-reserve chuyển thành ES), cộng cửa sổ overkill Last Gasp. An toàn từ campaign trở đi. Nerf ES recharge ở 0.5 chỉ làm ramp khởi động chậm chứ không đụng max pool — patch ghi "faster start … 6% (previously 15%)" và bỏ các small node recharge-rate (Version_0.5.0.md:546-547), tức là chậm hồi, không phải teo pool.

Lich mong manh. ES của Witch là lớp chính, nhưng :wiki-link{url="https://www.poe2wiki.net/wiki/Soulless_Form"} làm 10% mọi damage nhận xuyên qua ES đập thẳng vào pool Life thấp (~1.5k), không có armour hay evasion. Nó sống bằng cách núp sau bức tường construct, không phải bằng EHP.

### Mobility / QoL

Infernalist nhẹ thao tác nhất. Backline thật, không weapon swap, không phải nuôi xác, legion tự hồi sinh vĩnh viễn (Bind Spectre = minion tự revive); cần dời chỗ thì :wiki-link{url="https://www.poe2wiki.net/wiki/Blink"}, còn :wiki-link{url="https://www.poe2wiki.net/wiki/Loyal_Hellhound"} tank và kéo quái. Tải vận hành thấp nhất.

Shaman cũng QoL tốt ở 0.5. :wiki-link{url="https://www.poe2wiki.net/wiki/Furious_Wellspring"} giữ Rage vĩnh viễn sau một lần ramp (không phải spam warcry liên tục), và setup single-Wasp của 0.5 làm cái weapon-swap clear/boss kiểu 0.4 thành không cần thiết. Upkeep nhẹ.

Lich tệ nhất về QoL. Construct không teleport theo người nên đi đường và chokepoint liên tục làm gãy bầy; phải re-cast liên tục để duy trì pool ~15 giây; 20+ minion gây tụt 10-15 FPS, gần như không chơi nổi trên console.

### Budget & league-start

Infernalist là rẻ nhất — một trong những starter rẻ nhất 0.5, chạy gần như miễn phí, damage từ gem level cộng buff toàn cục free, ES gánh campaign. Chỉ cần vài chaos để cap res cộng một sceptre minion-level để vào map. Frontmatter của nó đặt budget_tier league-starter là đúng thực tế.

Lich rẻ tốt — sceptre Spirit cộng gear "+minion skill level"/max-Life rẻ, không unique bắt buộc, clear red map cơ bản với chi phí thấp. Rủi ro league-start thật của nó không phải tiền gear mà là cái dependency corpse-spectre chưa giải được.

Shaman không phải league starter. Nó bị gate sau unique phải farm: :wiki-link{url="https://www.poe2wiki.net/wiki/From_Nothing"} (drop từ pinnacle King in the Mists) cho ally-Rage, và Tecrod's Revenge (level 65, :wiki-link{url="https://www.poe2wiki.net/wiki/Abyssal_Depths"}) cho vòng lặp bất tử. Cái nhãn "medium-budget" nói nhẹ đi cái sàn unique-dependency này.

### Endgame scaling ceiling

Shaman có trần scaling sâu nhất. Rage stacking → :wiki-link{url="https://www.poe2wiki.net/wiki/Commanding_Rage"} (Rage của player → minion damage/speed) cộng Furious Wellspring (không decay) cộng buff ẩn toàn cục; spirit ceiling lớn nhất nuôi swarm lớn nhất. Về cơ chế, đây là build scale sâu nhất trong ba.

Infernalist scale vừa phải, diminishing returns một khi bầy đã đầy. Nó pivot sang minion-damage% cộng một con spectre premium, và lựa chọn weapon (:wiki-link{url="https://www.poe2wiki.net/wiki/Chober_Chaber"} so với :wiki-link{url="https://www.poe2wiki.net/wiki/The_Raven's_Flock"}) là một breakpoint do PoB quyết. Đẩy pinnacle thì dưới Shaman.

Lich yếu và đụng tường cứng. Cap construct ở 24 (20 base cộng 4 từ đúng hai node +limit), và +skill level qua 20 chỉ thêm damage mỗi đòn chứ không thêm con nào. Currency thêm chủ yếu mua sống sót, không mua throughput. Đây là sàn endgame của ba build — lại nhắc, đừng nhầm với ED/Contagion Lich endgame cao, vốn nằm ngoài scope.

### Patch risk trong 0.5

Đây là chỗ bẫy tên dễ làm người ta đảo ngược kết luận, nên cần verify từng chữ. Build tên "Infernalist Spectre Legion" **không bao giờ socket** gem :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Legion"} — nên nerf Infernal Legion trượt qua nó hoàn toàn. Ngược lại, Druid Shaman (không có chữ "Legion" trong tên) lại là build duy nhất *từng* dùng IL — nhưng chỉ ở campaign như công cụ leveling rẻ; engine bất tử endgame của nó là Tecrod's Revenge, một can't-die support độc lập kiểu Last Gasp (Version_0.5.0.md:349), **không** chạy bằng IL burn. Patch ghi "Infernal Legion I/II … 10% … (previously 20%)" và "Infernal Legion III: Can no longer be obtained" (Version_0.5.0.md:632-634). Ai pattern-match theo tên sẽ hiểu ngược.

Cụ thể từng build: Infernalist rủi ro thấp nhất, thực ra là net buff — né trọn cú gut Infernal Legion, và buff minion toàn cục được fix lên. Đòn bẩy tương lai có thể hại nó là re-nerf buff non-unique hoặc tăng spirit-cost spectre; nerf ES-recharge ramp đã đáp xuống nhưng chỉ làm chậm hồi.

Shaman elevated, nhưng không phải vì nerf IL. Vòng bất tử của nó chạy bằng Tecrod's Revenge — một can't-die support độc lập (Version_0.5.0.md:349), không phụ thuộc IL burn — nên cú gut Infernal Legion (20%→10%, IL III bỏ) chỉ làm yếu công cụ leveling campaign chứ không đụng engine endgame. Patch risk thật của Shaman nằm ở chỗ nó tựa lên hai mảnh load-bearing là Tecrod's Revenge và Commanding Rage, cộng cùng chia rủi ro buff-minion-ẩn bị retune — elevated vì hai trục đó, không phải vì IL.

Lich medium-high. Nó tựa vào Unearth scaling theo level, Soulless Form đổi Life→Mana, và cái buff minion vừa được retune lại (mục tiêu nerf tương lai dễ thấy); lag mass-minion là target balance lặp đi lặp lại của GGG; và enabler corpse-spectre chưa được chứng minh trên 0.5. Bản thân class Lich thì không bị đụng.

## Chọn build nào?

Dưới đây là sáu mục tiêu thường gặp. Đọc cái nào đúng với bạn rồi chơi build tương ứng.

- **Nếu mục tiêu là league-start mượt nhất (campaign → early map ít ma sát nhất) → chơi Witch Infernalist Bind-Spectre Legion**, vì nó là sàn rẻ nhất trong ba, chạy gần-free nhờ gem level cộng buff minion toàn cục free, ES backline gánh campaign, và nó né trọn nerf Infernal Legion (vì nó không bao giờ socket gem đó). Không weapon swap, không nuôi xác, không cần unique farm.
- **Nếu mục tiêu là clear speed tối đa cho mapping chung → chơi Druid Shaman Raging Spectre (Wasp)**, vì Wasp bay vượt địa hình và tự lao vào pack nên bầy không gãy ở chokepoint như construct Lich (construct không teleport theo bạn). Spirit ceiling cao nhất (Sacred Flow +120) nuôi swarm lớn nhất, và buff ẩn toàn cục nâng nó như mọi build khác. Chỉ chọn Lich nếu bạn cụ thể muốn mật độ trên màn hình hơn là throughput thật.
- **Nếu mục tiêu là single-target / pinnacle tối đa → chơi Druid Shaman Raging Spectre**, vì trong ba build này Shaman là con bossing đáng tin duy nhất — Wasp cộng sustain Tecrod cộng buff ~20-25% lên unique dồn damage, trong khi Infernalist chia damage ra nhiều thân còn bone-construct Lich thì chưa chứng minh và bị đói xác trên boss solo (cap 24, despawn ~15 giây). Caveat cứng: nếu mục tiêu thật là cày pinnacle thuần, con Lich genre-best là ED/Contagion chaos-DoT — một build khác ngoài so sánh này.
- **Nếu mục tiêu là RTS "command a horde" / mapping cho vui → chơi Witch Lich Unearth Bone-Construct Mass Summoner**, vì đây là niche thật duy nhất của nó: một bầy tới ~24 construct tràn màn từ xác là fantasy minion-density đã mắt nhất ở đây. Vào với mắt mở: nó gãy trên đường dài/chokepoint, cần re-cast liên tục, tụt 10-15 FPS với 20+ thân (gần như không chơi nổi trên console), và bossing chưa được chứng minh. Chơi vì cái vibe, không vì leaderboard.
- **Nếu mục tiêu là budget thấp nhất / khởi động SSF-friendly → chơi Witch Infernalist (số 1) hoặc Witch Lich Bone-Construct (số 2 sát nút)**, vì cả hai chạy bằng gear "+minion skill level" cộng max-Life/ES rẻ, không unique bắt buộc. Infernalist nhỉnh hơn nhờ ES backline đã được chứng minh, an toàn; Lich rẻ ngang nhưng mang theo cái dependency corpse-spectre chưa giải làm rủi ro khởi động. Tránh Shaman ở đây — nó bị gate sau From Nothing (drop pinnacle) cộng Tecrod's Revenge (level 65 Abyss), một sàn unique rõ ràng chứ không phải starter.
- **Nếu mục tiêu là hardcore / an toàn nhất để không chết → chơi Witch Infernalist Bind-Spectre Legion**, vì nó không hi sinh lớp phòng thủ nào: full ES pool qua Beidat's Hand, backline thật hiếm khi vào melee, và cửa sổ overkill Last Gasp. Shaman có trần EHP cao hơn (CI = chaos immunity) nhưng trả giá vương miện Spirit bằng ô charm trống = không ailment immunity, một lỗ freeze/ignite thật. Lich thì mong manh (Soulless Form rò 10% mọi damage xuyên ES vào pool Life ~1.5k). Với hardcore, hồ sơ không-lỗ-hổng của Infernalist thắng cái trần cao-nhưng-thủng của Shaman.

## Cảnh báo & ẩn số ngày đầu league

Mấy con số tuyệt đối trong note này là cơ chế đã chắc, còn tổng số và thứ hạng meta thì là ẩn số ngày 1 — phần dưới là những thứ cần tự log khi vào league, không phải kết luận đã đóng.

Thứ hạng meta ngày-0/ngày-1 chưa thể chốt trên cả ba — nó cần dữ liệu ladder ổn định mới kết luận được. Đọc "build minion phổ biến nhất" nghiêng về Shaman đến từ web aggregator, không phải dữ liệu ladder đã ổn định — coi mọi claim độ phổ biến là chỉ-hướng, và log lại class/skill distribution thật trên poe.ninja sau tuần đầu.

Boss-tier của bone-construct Lich là chưa chứng minh: đúng một video creator, chưa có Uber/pinnacle clear nào verify được. Cap 24 construct cộng đói xác trên boss không-add nghĩa là single-target của nó là dấu hỏi, không phải điểm mạnh. Khi vào league, cần log: trên boss solo, construct duy trì được bao nhiêu con và DPS thực rớt bao nhiêu khi không có add tái sinh. Đừng mua nó như một con bosser.

Bẫy scope phải nhắc lại: tiếng "Lich là vua endgame/pinnacle 0.5, miễn nhiễm nerf sustain" thuộc về ED/Contagion (chaos-DoT) Lich — một build hoàn toàn khác, KHÔNG trong so sánh này. Build B ở đây là minion mass-summoner, sàn boss/endgame của ba build. Đừng để hai danh tính Lich blur vào nhau.

Không PoB sim nào back con số tuyệt đối. Trần ~450 Spirit endgame và 16-17k ES CI của Shaman là trần mơ ước, chưa verify — cái đã chắc là CƠ CHẾ (Sacred Flow phẳng +120; CI = chaos immunity), không phải tổng số. pob_coverage là PARTIAL/NA trên cả ba vì PoB2 trễ mechanic 0.5; khi vào league cần dựng PoB thật cho từng build để chốt tổng số.

Buff minion toàn cục (~25-35% non-unique / ~20-25% unique) bị ẩn khỏi tooltip và khỏi damage number của PoB2 (Version_0.5.0.md:1039) — mọi tooltip clear/boss bạn đọc đều under-report damage thật. Nó cũng là mục tiêu nerf tương lai dễ thấy vì GGG vừa retune nó, nên cả ba chia chung rủi ro patch đó. Khi vào league, đừng đọc tooltip rồi kết luận damage — log clear time và boss kill time thật.

Nerf Infernal Legion là một bẫy tên: nó KHÔNG đụng "Infernalist Spectre Legion" (build này không socket IL) — và cũng KHÔNG đụng engine endgame của Shaman, vì vòng bất tử của Shaman chạy bằng Tecrod's Revenge (can't-die support độc lập, Version_0.5.0.md:349), không phải IL burn. Với Shaman, IL chỉ là công cụ leveling campaign, nên nerf IL (20%→10%, IL III bỏ) chỉ chạm giai đoạn đầu. Patch risk elevated của Shaman đến từ việc nó tựa lên Tecrod's Revenge + Commanding Rage, không từ IL.

Một lưu ý đối chiếu nguồn cuối: spirit ranking (Shaman > Infernalist > Lich) đúng ở mức life pool điển hình, nhưng con số Infernalist là có điều kiện — Beidat's Will scale theo life và tốn 25% Life reservation, nên nó chỉ vượt được +120 phẳng của Shaman khi life-stack nặng. Lich thì cuối dứt khoát, vì nó không có node spirit ascendancy nào cả.

## Related Resources

Ba build trong so sánh này mỗi cái có note riêng đầy đủ gear, gem, passive — đọc note tương ứng sau khi đã chọn hướng. Toàn bộ thay đổi 0.5 (nerf Infernal Legion, buff minion toàn cục, ES recharge ramp) định đoạt so sánh này, nền tảng nằm ở trang league overview.

## Relationships

- **related_builds** [Infernalist Spectre Legion](/builds/witch/0-5-infernalist-spectre-legion) — Hướng league-start an toàn nhất: backline ES tự hồi sinh, né trọn nerf Infernal Legion, rẻ và lì.
- **related_builds** [Bone Construct Mass Summoner Lich](/builds/witch/0-5-bone-construct-mass-summoner-lich) — Hướng RTS fantasy: 20-30+ construct tràn màn, vui nhất nhưng là sàn boss/endgame và mong manh vì Soulless Form rò damage.
- **related_builds** [Raging Spectre Shaman](/builds/druid/raging-spectre-shaman) — All-rounder clear-và-boss: spirit ceiling cao nhất, Wasp bay vượt địa hình, nhưng gate sau unique và có lỗ ailment.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — Toàn bộ thay đổi 0.5 (nerf Infernal Legion, buff minion toàn cục bug-fix, ES recharge ramp) là nền tảng định đoạt mọi quyết định trong so sánh này.
