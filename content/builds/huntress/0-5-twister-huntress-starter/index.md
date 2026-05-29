---
template: templates/build-template.md
document_type: build
title: Twister Huntress — Ice-Tipped Arrow Starter
status: review
author: duocnv
created: '2026-05-19'
updated: '2026-05-25'
class: Huntress
ascendancy: Spirit Walker
league: '0.5'
patch: 0.5.0
budget_tier: league-starter
build_tags:
  primary_skill: Twister
  damage_type: cold
  playstyle: ranged
  content_focus: all-content
tags:
  - twister
  - huntress
  - spirit-walker
  - ice-tipped-arrow
  - 0-5
  - starter
  - leveling
  - poe2
---

# Twister Huntress — Ice-Tipped Arrow Starter

Build league-start cho Runes of Aldur, dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Whirling_Slash"} làm engine spin gió và :wiki-link{url="https://www.poe2wiki.net/wiki/Twister"} làm nguồn sát thương chính. Spirit Walker — ascendancy mới giới thiệu trong patch 0.5 — cung cấp owl feather để ép projectile count và projectile speed lên cùng lúc, hợp với cách Twister scale. Consensus từ creator post-patch-notes (SiahZ, GuyThatDies, SnooBAE85, Lolcohol) đều xếp build vào S-tier league starter cho 0.5, với GuyThatDies gọi đây là "strongest league starter I've ever seen in Path of Exile 2". Hợp với người thích clear nhanh map hành lang + bossing arena hẹp; không hợp với người muốn facetank cứng hay solo Arbiter ngay tuần đầu.

## Build Overview

Loop chia làm hai tầng. Tầng 1 là Whirling Slash: xoay spear ba lần liên tiếp để spawn một Whirlwind đứng yên trên ground, max 3 stage. Mỗi spin thêm 1 stage, mỗi stage tăng radius +0.3m và đẩy multiplier collapse damage lên. Tầng 2 là Twister: bắn tornado bay erratically xuyên qua Whirlwind, mỗi stage consume tạo thêm 1 tornado và cho từng tornado +80% more damage. Khi Whirlwind đạt rank 3 trước cast, một Twister cast sinh ra 4 tornado tổng cộng với multiplier compound: `1 + 1.80 + 1.80² + 1.80³ ≈ 10.95×` base damage. Đó là lý do tại sao timing rất quan trọng — bắn Twister trước khi Whirlwind đạt stage 3 thì mất phần lớn damage.

Lớp damage thứ ba đến từ ground synthesis. Khi Twister bay qua Chilled Ground, mỗi tornado **gain** thêm 50% as cold damage (đây là added damage, không phải convert — physical scale 100% vẫn intact, cold scale là layer cộng thêm). Đây là vì sao build vừa stack physical trên vũ khí vừa cần Chilled Ground reliable. Phòng thủ dựa vào evasion + Wind Dancer + freeze uptime; mobility chính là dodge roll (cũng là trigger cho owl feather của Spirit Walker) cộng Pounce — patch 0.5 đã bump cooldown Pounce lên 6-5.1s từ 4.9-4s ở gem level 3-20, nên cooldown mobility chậm hơn pre-patch đáng kể, cần plan dodge cadence kỹ hơn.

## Skill Gems & Links

**Main Skill:** Twister + :wiki-link{url="https://www.poe2wiki.net/wiki/Salvo_Support"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Projectile_Acceleration_III"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Persistence_Support"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Retreat_Support"}

Salvo trong 0.5 rework lại hoàn toàn cách cấp seal. Bản mới: 1 seal mỗi giây, max 6 seal, 1 projectile mỗi seal — cap vẫn +6 projectile như trước, nhưng ramp granular hơn (mỗi giây +1) và bỏ luôn restriction "không được earn seal khi đang cast". Cộng dồn nghĩa là sau khi spin 3 lần Whirling Slash (mất ~1.5-2 giây), Twister cast đầu tiên đã có sẵn 2-3 seal thay vì 0-1 như pre-patch, smooth hẳn vòng clear. Projectile Acceleration **tier III** là pick critical — không chỉ vì 40% more projectile speed, mà vì dòng "increases and reductions to Projectile speed also apply to Projectile Damage with Supported Skills". Pair với owl feather của Primal Bounty (đẩy projectile speed lên ~200%) thì cùng buff đó được apply thẳng vào damage — biến projectile speed thành multiplier damage compound, không chỉ utility. Persistence kéo dài tornado duration (3s base), càng dài càng có cơ hội hit lại boss qua hidden cap 0.66s same-target throttle. Retreat thưởng 20-30% more projectile damage nếu vừa attack melee trong 2-8s qua, gần như luôn active vì Whirling Slash trigger ngay trước Twister.

**Engine Skill:** Whirling Slash + :wiki-link{url="https://www.poe2wiki.net/wiki/Rage_Support"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Rapid_Attacks_Support"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Marshall_Tempo_Support"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Pursuit_Support"}

Whirling Slash giữ level 1 trong endgame — skill này chỉ làm engine spawn Whirlwind cho Twister consume, không scale damage thật. Level cao chỉ làm tooltip damage tăng (irrelevant vì collapse damage không phải nguồn damage chính) và mana cost dội lên. Bốn support đều phục vụ một mục tiêu: spin nhanh hơn để đạt stage 3 sớm hơn trước mỗi Twister cast. Rage Support cấp +1 stage rage per spin, Rapid Attacks giảm attack time, Marshall Tempo cấp attack speed conditional, Pursuit cấp movement speed compound.

**Act 2 Pivot:** :wiki-link{url="https://www.poe2wiki.net/wiki/Ice-Tipped_Arrows"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Barrage"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Frost_Nexus"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Focus"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Combat_Frenzy"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Freezing_Mark"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Charged_Mark"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Frostbolt"} + Ferocious Roar

Ice-Tipped Arrows là pivot biến rotation 5-nút clunky của Act 1 thành combo 3-nút mượt. Skill này empower 4 Barrageable spear attack tiếp theo, convert 100% physical damage sang cold và drop Ice Fragment trên mỗi hit — Fragment tự nổ gây cold damage diện rộng. Cooldown 12s nhưng bypass được bằng cách expend 1 Frenzy charge, nên Combat Frenzy đóng vai trò charge generator (tạo frenzy charge khi freeze enemy) và Barrage trigger Ice-Tipped lặp lại. Frost Nexus là tier-2 support đầu tiên cần unlock ở Act 2 — chain freeze + spawn Chilled Ground sau ailment, fix luôn nhu cầu reliable Chilled Ground generator cho Twister gain 50% cold layer. Elemental Focus add lên Ice-Tipped Arrows là counter-intuitive nhưng đúng: nó prevent Ice Fragment từ self-freeze enemy (vì freeze block thêm fragment hit lên cùng target), đồng thời cấp 25% more elemental damage — double win. Freezing Mark áp lên target để guarantee freeze; pair với Charged Mark Support để mark đồng thời spawn Shocked Ground (replace Wake of Destruction unique). Pounce vẫn dùng để áp sát + đặt mark trong một input. Frostbolt giữ level thấp, dùng làm Chilled Ground generator backup.

**Spirit Gems:** Wind Dancer + :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"}

Wind Dancer là lớp thủ chính — cấp evasion buff escalate khi bạn không bị hit gần đây. Herald of Ice trigger nổ chain khi quái bị shatter, kết hợp với Ice Fragment từ Ice-Tipped + freeze từ Twister cold layer tạo loop clear cực vui mắt. Patch 0.5 không động Herald of Ice.

**Early Campaign Utility:** :wiki-link{url="https://www.poe2wiki.net/wiki/Parry"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Fangs_of_Frost"} + Pounce

Parry trong 0.5 đã bị crop lại — area of effect đổi để khớp animation, mất hẳn bonus Attack Distance. Act 1 dùng Parry để consume Parried Debuff với Fangs of Frost spawn Chilled Ground, nhưng range ngắn hơn pre-patch khiến combo feel cramped hơn — đây là lý do nên rush Act 2 nhanh nhất có thể để pivot sang Ice-Tipped Arrows.

**Offhand:** :wiki-link{url="https://www.poe2wiki.net/wiki/Malice_Scepter"}

Malice Scepter cấp spirit + áp Critical Weakness lên enemy trong presence, ép crit chance lên một mảng đáng kể mà không cần đầu tư passive tree. Đây là món scepter giá rẻ nhất rất hiếm có effect mạnh đến vậy.

## Ascendancy

Spirit Walker đã chính thức launch trong 0.5.0 sau ba tháng chỉ là dev tease, và là pick chính cho build này. Deadeye vẫn là lựa chọn tốt nếu thích Tailwind tự động và frenzy charge ổn định, nhưng Spirit Walker thắng ở 3 điểm: projectile count direct qua owl feather, projectile speed direct qua Mhacha's Gift enhancement, và một layer companion damage làm bear/stag dọn quái phụ — biến build từ pure single-source thành multi-source clear.

**Lab 1: :wiki-link{url="https://www.poe2wiki.net/wiki/Primal_Bounty"}**

Primal Bounty cấp 1 owl feather mỗi 4 giây, max 3 feather. Mỗi dodge roll expend 1 feather để empower projectile skill tiếp theo — cho thêm projectile và projectile speed. Khi đã có Mhacha's Gift + đủ projectile passive support trên tree, fully-scaled Primal Bounty tạo ~6 additional projectile + ~200% increased projectile speed cho skill empowered tiếp theo, refresh mỗi 9 giây. Đây là node nền tảng của Spirit Walker cho Twister, vì nó scale trực tiếp cả hai chỉ số quyết định DPS clear (count + speed) trong cùng một trigger — và khi pair với Projectile Acceleration III, projectile speed convert thành damage multiplier compound.

**Lab 2: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Mhacha%27s_Gift"}**

Mhacha's Gift cho phép một dodge roll expend tới 3 owl feather cùng lúc, mỗi feather thêm 100% more empowerment effect compound — và tăng tốc độ generate feather lên 50% (cycle 4s → 2.67s). Với Twister, đây là burst window mạnh nhất: chờ stack đủ 3 feather (~8s) → dodge roll trước khi cast Twister → tornado spawn với projectile count + speed buff ×3. Khớp tự nhiên với telegraph boss ~10s pattern (Arbiter wave attack), nên cadence dodge match feather cycle không cần thinking thêm.

**Lab 3: :wiki-link{url="https://www.poe2wiki.net/wiki/Wild_Protector"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Vivid_Stampede"}**

Hai notable này không phải nguồn damage chính cho Twister, nhưng phải lấy để mở Sacred Unity ở Lab 4. Wild Protector gọi bear companion hỗ trợ hit additional target, đồng thời cấp 2% maximum life regen mỗi giây và redirect 8% damage taken sang bear — đây là layer phòng thủ phụ đáng kể, đặc biệt với build evasion thiếu mitigation cứng. Vivid Stampede tạo stag spirit khi di chuyển đủ 20m rồi attack — pair tốt với playstyle Twister vì player luôn move giữa các pack quái.

**Lab 4: :wiki-link{url="https://www.poe2wiki.net/wiki/Sacred_Unity"}**

Sacred Unity là reward khi đã lấy đủ Wild Protector, Primal Bounty, và Vivid Stampede. Với Twister, điểm đáng giá nhất là central projectile của owl-feather-empowered skill để lại Soaring Ground — ground effect mới của 0.5 cấp 40% increased damage và 30% increased evasion khi đứng trên đó ở full life. Bear nhận Embrace of the Wild (buff defensive thêm), stag biết leap vào enemy thay vì chạy ngẫu nhiên. Tổng lại Lab 4 vừa tăng damage Twister trực tiếp (Soaring Ground 40% damage layer) vừa thêm evasion buff conditional — không chỉ utility như đánh giá ban đầu.

**Các node bỏ qua**

:wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} mạnh nếu xây theo hướng companion damage (60% main hand damage cho bear/stag), nhưng đó là một build khác hẳn. :wiki-link{url="https://www.poe2wiki.net/wiki/The_M%C3%B3rrigan%27s_Guidance"} buff stag scale shock damage — không hợp với cold scaling. Idolatry yêu cầu socket toàn idol, drop hẳn flexibility gear. The Natural Order mở Tame Beast cho unique boss — vui nhưng không phải scaling vector cho Twister damage.

Nếu sau khi đã farm xong build cơ bản và muốn pivot, :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan%27s_Effigy"} là unique mới của 0.5 đáng nghiên cứu cho companion army variant — nhưng đó là build khác, không còn là Twister-as-damage starter.

## Passive Tree

Patch 0.5 cấp free passive tree refund cho mọi character cũ, nên test variant lúc này không tốn regret orb — pivot tree giữa các phase mapping rất rẻ.

Ưu tiên cluster damage và speed trước, crit để sau khi đã có accuracy nền. :wiki-link{url="https://www.poe2wiki.net/wiki/Predatory_Instinct"} là điểm mở rẻ vì cho damage multiplier không yêu cầu condition. Đi tiếp lên :wiki-link{url="https://www.poe2wiki.net/wiki/In_for_the_Kill"} cấp skill speed — pump Whirling Slash spin nhanh hơn để đạt 3-stage trước mỗi Twister cast. :wiki-link{url="https://www.poe2wiki.net/wiki/Primal_Instinct"} cấp attack speed và area effect (Whirlwind radius lớn hơn = consume range Twister tăng). :wiki-link{url="https://www.poe2wiki.net/wiki/Catlike_Agility"} là cụm phòng thủ quan trọng vì build dựa nhiều vào evasion — patch 0.5 buff base evasion item-level lên +33% ở level 65 (dần về +15% ở level 80+), nên target 8k-12k evasion lúc này đạt dễ hơn pre-patch khá nhiều.

Crit là layer sau. Chỉ allocate crit cluster khi accuracy trên gear đã đủ — accuracy thấp + crit cao = crit chance hiển thị trên giấy đẹp nhưng effective DPS không tăng vì miss tỉ lệ cao. Sau khi đã có evasion nền + damage base + accuracy 90%+ trên enemy level tương ứng, mới đi sâu vào crit cluster.

:wiki-link{url="https://www.poe2wiki.net/wiki/Falcon_Dive"} là node trade-off: đổi phòng thủ shield slot lấy skill speed lớn. Lấy khi đã chấp nhận chơi no-shield setup (dual spear hoặc spear + scepter), không lấy nếu đang die nhiều và cần buckler.

### Weapon Set

Build hưởng lợi rõ từ việc tách hai weapon set:

- **Set 1 — Twister damage**: spear flat physical cao + flat cold + crit + accuracy. Đây là vũ khí Twister cast.
- **Set 2 — Whirling Slash engine**: spear attack speed cao để spin nhanh đạt stage 3. Damage trên vũ khí này irrelevant vì Whirling Slash không phải damage source.

Nếu chưa có 2 spear tốt, dùng chung 1 spear cho cả hai set bằng cách khóa slot vũ khí (biểu tượng lock trên slot). Sau khi có currency vào mid-mapping, tách set là upgrade rõ rệt nhất.

## Stat Priorities & Defenses

Các mốc dưới là mục tiêu mid-mapping, không phải điều kiện cứng để build chạy được.

- **Life:** 2,500-3,500
- **Evasion:** 8,000-12,000 (dễ đạt hơn pre-patch nhờ evasion item buff +33% ở level 65)
- **Resistances:** Fire 75% / Cold 75% / Lightning 75% / Chaos càng cao càng tốt
- **Accuracy:** 90%+ trên enemy level tương ứng — nền cho crit hoạt động hiệu quả
- **Crit chance:** lấy sau khi accuracy đã đủ
- **Movement Speed:** 25-30% trên boots
- **Frenzy Charges:** 3-5 tùy gear và support setup

Build này không có lớp giảm damage cứng như armor hay block. Freeze và evasion là cách giảm áp lực, không phải giấy phép đứng yên facetank. Khi gặp boss có pattern AoE rộng (Doryani phase 2, Arbiter wave), positioning quan trọng hơn build setup — đứng sai vị trí thì 12k evasion cũng không cứu.

## Gear Progression

### Act 1

Ưu tiên spear có flat damage hoặc physical damage. :wiki-link{url="https://www.poe2wiki.net/wiki/Hardwood_Spear"} dùng lúc đầu, sau đó đổi lên Iron Spear hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Frosted_Ironhead_Spear"} khi tìm được base tốt hơn ở Act 1 zones.

Găng tay cần flat damage. Giày cần movement speed (target 20%+ early game). Belt và armor pieces khác ưu tiên life. :wiki-link{url="https://www.poe2wiki.net/wiki/Azura%27s_Ring"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Iron_Ring"} nhặt được là đáng đeo ngay — flat damage trên ring early game tăng tốc clear rõ rệt, đặc biệt với spear build vốn đói flat.

### Act 4 đến White Maps

Tìm spear level 16-20 có 2-3 mod tốt: physical damage, cold damage to attacks, attack speed. Buckler giúp sống dễ hơn nếu đang chết nhiều — sau Lab 4 + đủ evasion thì có thể bỏ buckler chuyển sang scepter. Malice Scepter ở offhand cấp spirit + Critical Weakness là upgrade rõ rệt khi đã có damage base.

Amulet có strength giúp mở support gem có str requirement. Helmet, gloves và boots ưu tiên evasion + life + movement speed + flat damage cho attack.

### Endgame

Spear level 60+ là món quan trọng nhất quyết định DPS. Ưu tiên flat physical, flat cold, attack speed, +level projectile skills, crit chance và accuracy. Ring nên có accuracy, flat damage, life hoặc evasion. Accuracy là nền cho crit hoạt động — đừng skip phần này để chạy hai ring crit.

Một số gear lưu ý cho 0.5:

- Tránh :wiki-link{url="https://www.poe2wiki.net/wiki/Wake_of_Destruction"} — boots này drop Shocked Ground khi di chuyển, trong khi build cần Chilled Ground cho Twister gain 50% cold. Đặt Shocked Ground dưới chân nghĩa là Twister gain 50% lightning (vô dụng cho cold scaling).
- Hyrri's Ire (cold body armour) bị nerf trong 0.5 — evasion từ 200-250% xuống 100-150%, gain-as-cold từ 15-25% xuống 10-20%. Vẫn dùng được nhưng không còn meta tier như pre-patch.
- Atziri's Contempt (spear unique) bị nerf hẳn — mất "Life Leech from Explosions with at least 15 Bloodstone Lances is instant" và thêm "50% Less Magnitude of Damaging Ailments you Inflict". Bỏ khỏi gear plan.

### Mirror Tier (BiS)

Mageblood mới được thêm vào unique drop pool trong 0.5 — đây là goal endgame cho 4-flask uptime liên tục. Spear level 80+ với roll flat physical/cold cao + AS + crit + accuracy, ring mirror-tier với accuracy + flat damage + life + evasion, body armour evasion với life + max life + resist. Khi đã chạm tới mirror tier, nên pivot sang variant endgame riêng với passive tree và gear được tối ưu lại — starter setup hết runway scaling ở đó.

## Flasks

- **Life Flask:** instant recovery để tránh oneshot từ projectile boss.
- **Mana Flask:** mandatory trong campaign vì Whirling Slash + Barrage tốn mana cả hai.
- **Granite Flask:** physical mitigation cho hit cứng, kéo Armour rating lên đáng kể trong burst window.
- **Sapphire Flask:** cold resistance buffer cho boss cold damage (Geonor, Doryani ice phase).
- **Quicksilver Flask:** speed campaign + mapping, ghép với Wind Dancer cho movement burst.

Sau Act 3, swap flask theo encounter — đừng giữ setup cố định. Boss fire-heavy thì swap Sapphire ra Ruby; map có nhiều physical reflect thì giữ Granite uptime tốt hơn.

## Pantheon & Bandits

POE2 không có hai hệ thống này. Decision tương đương trong patch 0.5 là chọn ascendancy (Spirit Walker hoặc Deadeye — phân tích trong section Ascendancy) và chọn Atlas Master (Doryani's Science / Hilda's Hunting / Jado's Spycraft — hệ thống mới của 0.5 cho phép allocate cả ba master cùng lúc, đổi quick-select trước mỗi map). Hilda's Hunting hợp với Twister vì cấp bonus cho rare monster pack — nguồn loot chính khi đang farm currency cho gear upgrade.

## Leveling Notes

Đừng đánh giá build qua vài khu đầu Act 1. Lúc này còn thiếu attack speed, thiếu projectile speed, và phải dùng combo 5-nút (Parry → Fangs of Frost → Whirling Slash spin → Twister cast → Pounce reposition). Patch 0.5 còn crop Parry mất Attack Distance bonus nên Act 1 combo càng cramped, càng nên rush Act 2 nhanh để pivot sớm.

Cảm giác chơi cải thiện hẳn sau khi có Ice-Tipped Arrows + Barrage + Combat Frenzy. Playtest pre-0.5 của Lolcohol chạy Act 1-3 cho thấy build clear Jamanra, Tor Gul, Viper Napuatzi và Doryani chỉ với setup Act 2-3 — character level 27 với spear chỉ level 16 (underleveled vài cấp), Act 3 hoàn thành trong 3 giờ 19 phút trong khi vừa đọc guide vừa pause chat. Damage được mô tả "out of this world" và "S tier leveling setup for Huntress" nếu không bị nerf. Patch notes 0.5 đã confirm — không có nerf trực tiếp lên Twister hay Whirling Slash, nên kết luận đó vẫn đứng vững. SnooBAE85 lập world record campaign-to-maps 3 giờ 25 phút trên Amazon variant (pre-Spirit Walker), thắng record cũ của chính mình 5 phút hai lần liên tiếp.

Lưu ý 0.5 cho phase Act 2-3: tier-2 support đầu tiên unlock là Frost Nexus add lên Twister hoặc Ice-Tipped — biến build từ "okay damage" sang "trivialize game" theo lời GuyThatDies. Pounce mark double-effect bug đã fix trong 0.5 — wolf weapon-set swap tech (gain extra mark effect bằng cách swap set) không còn hoạt động, nên các creator quen tech này cần adapt.

Khi leveling, nâng cấp vũ khí quan trọng hơn cố giữ một món unique yếu. Build spear đói flat damage trên vũ khí + găng + nhẫn — iron ring rẻ tiền early game tạo khác biệt rõ rệt. Nếu damage tụt, kiểm tra spear trước, sau đó mới nhìn support gem hoặc passive tree.

## Budget & Investment

Campaign chạy gần như zero currency nếu chăm nhặt spear và găng có flat damage. Nâng cấp đáng tiền nhất luôn là vũ khí.

Mid-mapping cần khoảng 5-10 exalt cho spear ổn (flat phys + flat cold + AS) và vài món gear có flat damage/accuracy. Endgame T13+ bắt đầu cần spear level cao 60+ (giá tăng dốc với +level projectile mod), accuracy trên ring, và đủ life/resistance để không bị one-shot bởi rare modifier mới của 0.5.

Mageblood là goal mirror-tier nhưng đầu tư quá sâu vào mirror gear chưa phải mục tiêu của starter này. Khi đã tới mức đó, nên chuyển sang variant endgame riêng với passive tree được tối ưu lại.

## Strengths & Limitations

**Điểm mạnh**

Build clear cực nhanh trong map hành lang — Twister nảy nhiều lần khi gặp wall, biến corridor map thành DPS multiplier free. Damage scaling rẻ vì gear cần là flat physical/cold + AS, không phụ thuộc unique đắt nào. Sau Act 2 pivot, vòng rotation chỉ còn 3-nút (Whirling Slash → dodge owl feather → Twister/Barrage), feel rất mượt so với Act 1. Freeze chain + Herald of Ice + Ice Fragment từ Ice-Tipped tạo loop clear visually satisfying, nhất là khi pack quái dày.

**Điểm yếu**

Act 1 vẫn clunky vì phải spin Whirling Slash 3 lần trước mỗi Twister cast, và Parry mất Attack Distance trong 0.5 càng cramped hơn. Build mỏng cho tới khi có Wind Dancer + Catlike Agility + ~8k evasion — die nhiều ở Act 1-2 là bình thường. Boss arena rộng (Doryani phase 2, Arbiter open arena) làm Twister mất nhiều damage vì tornado bay xa rồi dissipate trước khi nảy lại. Pounce cooldown 6s trong 0.5 (từ 4s pre-patch) làm mobility chậm hơn — plan dodge cadence kỹ thay vì spam Pounce.

Combat Frenzy fail vs boss freeze-immune — nếu boss không thể freeze, không thể electrocute, và không có cách pin ổn định, frenzy charge sẽ hụt → Barrage không bypass được Ice-Tipped Arrows cooldown 12s → DPS tụt rõ rệt. Một số Pinnacle boss của 0.5 (Arbiter of Divinity, Faction Leader mới) có thể có freeze immunity — chưa test live, cần verify khi league launch.

Một điểm thẳng thắn: SnooBAE85 sau khi deep-dive Spirit Walker vẫn cho rằng Deadeye có raw DPS ceiling cao hơn nhờ Tailwind tự động + frenzy charge ổn định. Pick Spirit Walker cho build này dựa trên content/novelty (ascendancy mới, owl feather cycle vui chơi) + projectile count scale dễ hơn, không phải vì raw power numbers.

**Patch 0.5 confirmed status**

Patch notes drop 21/05/2026, league launch 29/05/2026. Engine của build (Twister + Whirling Slash + Spirit Walker + Combat Frenzy + Ice-Tipped Arrows) không bị nerf trực tiếp — SnooBAE85 confirm "control-F Twister trên patch notes = zero, same with Whirling Slash". Các điểm cần chú ý:

- Salvo Support: rework seal mechanic (1s/seal × 6 × 1 proj thay vì 2s/seal × 3 × 2 proj) — cap +6 proj giữ nguyên, ramp smoother.
- Pounce: cooldown 4.9-4s → 6-5.1s ở gem level 3-20. Mobility chậm hơn. Bug double mark effect đã fix → wolf weapon-set swap tech gone.
- Parry: mất Attack Distance bonus. Act 1 combo cramped hơn.
- Atziri's Contempt (spear unique): nerf mạnh. Bỏ khỏi gear plan.
- Hyrri's Ire: evasion + gain-as-cold giảm. Vẫn dùng được nhưng không meta.
- Spirit Walker: chính thức launch — confirm node order Primal Bounty → Mhacha's Gift → Wild Protector + Vivid Stampede → Sacred Unity vẫn đúng.
- Mageblood: thêm vào drop pool 0.5 — mirror tier goal khả thi.
- Free passive tree refund cho mọi character cũ — test variant không tốn regret.

**Future-nerf risk watch (post-launch)**

Mana leech đã bị gut trong 0.5 — passive notable "instant leech on empowered skills" (Twister luôn empowered) là target khả nghi cho hotfix tiếp theo nếu build dominate. Ice-Tipped Arrows tự skill có thể bị nerf nếu meta consolidate xung quanh nó — SnooBAE85 flag "if anything gets nerfed mid-league, will likely be Ice-Tipped Arrows". Ghost Dance đã bị nerf hai lần post patch-notes — không ảnh hưởng build hiện tại nhưng cho thấy GGG đang nhắm các defensive layer evasion-based. Plan B nếu Ice-Tipped Arrows bị crop: revert sang setup Frostbolt + Ice Crash combo cho Chilled Ground generator.

## Summary

- Engine 2 tầng: Whirling Slash spawn Whirlwind 3-stage → Twister consume → 4 tornado compound 10.95× base damage.
- Chilled Ground gain 50% cold là added damage (không convert) — physical scaling 100% vẫn intact.
- Salvo 0.5 rework: cap +6 projectile giữ nguyên, ramp 1s/seal smoother, không còn block earn seal khi cast.
- Spirit Walker owl feather (Primal Bounty + Mhacha's Gift) scale projectile count + speed direct — fully-scaled ~6 proj + ~200% speed mỗi 9s, cycle match boss telegraph naturally.
- Projectile Acceleration III + owl feather speed buff convert thành damage multiplier compound.
- Frost Nexus + Elemental Focus + Charged Mark là 3 support gem critical cho Act 2 pivot setup mà bài cũ chưa cover.
- Consensus 4 creator post-patch (SiahZ, GuyThatDies, SnooBAE85, Lolcohol): S-tier league starter cho 0.5.
- Build clear corridor S-tier, boss arena rộng A-tier, leveling cải thiện rõ sau Act 2 pivot Ice-Tipped Arrows.
- Patch 0.5 không nerf engine — Salvo/Pounce/Atziri-Contempt là 3 điểm cần lưu ý nhỏ. Ice-Tipped Arrows là target risk cho hotfix nếu meta consolidate.

Chi tiết cơ chế Twister xem [mechanic doc Twister](/mechanics/skills/twister).

## Resources

**Post-patch-notes builds (0.5 verified)**

- **GuyThatDies "Strongest Leaguestarter" (24/05/2026):** https://www.youtube.com/watch?v=hf6aG0ZbGOQ — full gem setup + Frost Nexus / Elemental Focus / Charged Mark recommendations.
- **SiahZ "BEST Twister Spirit Walker" (23/05/2026):** https://www.youtube.com/watch?v=0RknSCFoAOM — fully-scaled Primal Bounty numbers (12 proj + 270% speed aggressive read), Runic Ward defensive note.
- **SnooBAE85 "Next Twister Build" patch-notes recap (23/05/2026):** https://www.youtube.com/watch?v=WZwVlHjlBE8 — confirm "Twister/Whirling Slash untouched", flag leech gut + Ice-Tipped nerf risk.
- **SnooBAE85 "World Record TWICE" (20/05/2026):** https://www.youtube.com/watch?v=KoO6tdHUYbY — 3h25m campaign-to-maps WR on Amazon variant.
- **SnooBAE85 Spirit Walker deep dive:** https://www.youtube.com/watch?v=03d-h4IC1pg

**Pre-patch-notes references**

- **Mobalytics build sheet:** https://mobalytics.gg/poe-2/builds/twister-huntress-levelling
- **Lolcohol playtest (14/05/2026, 0.4 era):** https://www.youtube.com/watch?v=QG0GuvnPByI — "10/10 S-tier leveling" quote, Doryani underleveled clear.
- **GGG Spirit Walker reveal:** https://www.youtube.com/watch?v=86MS6GHBAOg
- **Moxsy endgame (0.4 footage, Critado Amazon — không phải Spirit Walker):** https://www.youtube.com/watch?v=phGfYINlFh4
- **Faro Vietnamese walkthrough:** https://www.youtube.com/watch?v=tqWAGHFWC4Y
- **GuyThatDies campaign clear (pre-patch):** https://www.youtube.com/watch?v=Yd2UmEzBXM4

**Game references**

- **POE2 Wiki Twister:** https://www.poe2wiki.net/wiki/Twister
- **POE2 Wiki Spirit Walker:** https://www.poe2wiki.net/wiki/Spirit_Walker
- **POE2 Wiki Ice-Tipped Arrows:** https://www.poe2wiki.net/wiki/Ice-Tipped_Arrows
- **Patch 0.5.0 notes (local):** data/release-notes/Version_0.5.0.md

## Changelog

### 2026-05-25

- Rewrite toàn bộ theo patch notes 0.5.0 verified (drop 21/05/2026) + tích hợp findings từ 7 video creator post-patch (SiahZ, GuyThatDies, SnooBAE85 patch-recap, SnooBAE85 WR, SnooBAE85 Spirit Walker deep dive, Lolcohol, Moxsy).
- Salvo Support: update math từ 2s × 3 × 2 proj sang 1s × 6 × 1 proj (cap +6 giữ nguyên, ramp smoother, mất restriction "can't earn seal while casting").
- Main Skill: upgrade Projectile Acceleration → tier III (proj speed convert thành damage multiplier).
- Act 2 Pivot: thêm Frost Nexus (first tier-2 support unlock), Elemental Focus (prevent Ice Fragment self-freeze + 25% more elemental damage), Charged Mark Support (guaranteed Shocked Ground thay Wake of Destruction need).
- Ascendancy: thêm số thật cho Primal Bounty fully-scaled (~6 proj + ~200% speed mỗi 9s), Wild Protector (2% life regen + 8% damage redirect), Sacred Unity Soaring Ground (40% damage + 30% evasion full life).
- Pounce: ghi nhận cooldown nerf 4.9-4s → 6-5.1s + bug fix mark double-effect (wolf weapon-set swap tech gone).
- Parry: ghi nhận mất Attack Distance bonus, Act 1 combo cramped hơn.
- Atziri's Contempt: thêm cảnh báo nerf, bỏ khỏi gear plan.
- Hyrri's Ire: ghi nhận nerf evasion + gain-as-cold.
- Spirit Walker: confirm launch trong 0.5.0, không còn ngôn ngữ "đang nghiên cứu".
- Stat Priorities & Defenses: cập nhật evasion item-level buff +33% ở lv65.
- Gear Progression: thêm tier Mirror Tier (BiS) cho Mageblood mới có trong 0.5 drop pool.
- Pantheon & Bandits: thêm Atlas Master decision (Hilda's Hunting hợp cho Twister).
- Strengths & Limitations: chuyển "Rủi ro trước patch 0.5" thành affirmative "Patch 0.5 confirmed status" + Deadeye raw-power honesty note + future-nerf risk watch (mana leech + Ice-Tipped Arrows).
- Leveling Notes: thêm SnooBAE85 WR 3h25m + Pounce mark bug fix note.
- Resources: tách thành 3 nhóm (post-patch, pre-patch, game references), thêm 3 video mới (GuyThatDies/SiahZ/SnooBAE85 patch recap + WR), clarify Moxsy là 0.4 footage Critado Amazon.
- Status: draft → review.

### 2026-05-20

- Bổ sung bằng chứng playtest thực tế từ Lolcohol (Doryani, Viper, Jamanra underleveled clear, Spirit Walker "juicy" ở arena lớn, Ice-Tipped pivot feel) vào Leveling Notes và Performance Ratings.

### 2026-05-19

- Viết lại bài theo hướng guide public, bỏ phần ghi chú audit nội bộ và giữ lại các cảnh báo quan trọng cho gameplay.

## Relationships

- **synergizes_with** [Twister — Spear Wind Projectile Engine](/mechanics/skills/twister) — Build dùng Twister làm nguồn sát thương chính; tài liệu cơ chế giải thích cách tạo gió, chuỗi damage và giới hạn hit 0.66 giây.
