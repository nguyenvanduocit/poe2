---
template: templates/build-template.md
document_type: build
title: Pathfinder Herald of Ice Bow
status: published
author: duocnv
created: '2026-06-10'
updated: '2026-06-10'
class: Ranger
ascendancy: Pathfinder
league: '0.5'
patch: 0.5.3
budget_tier: low-budget
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Lightning Arrow
  damage_type: Lightning/Cold
  playstyle: Bow / Projectile
  content_focus: Map clear / Atlas farming
tags:
- poe2
- ranger
- pathfinder
- lightning-arrow
- herald-of-ice
- barrage
- bow
- shatter
- mapping
---

# Pathfinder Herald of Ice Bow

Build này dọn map nhanh nhất của league: bắn :wiki-link{url="https://www.poe2wiki.net/wiki/Lightning_Arrow"} thành từng loạt, mỗi mũi vừa shock vừa chill, rồi để :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"} biến mỗi cú shatter thành một quả nổ lạnh quét sạch cả màn hình. Ranger lên :wiki-link{url="https://www.poe2wiki.net/wiki/Pathfinder"} để lấy flask uptime thường trực và một lớp evasion đổi thẳng sang giảm sát thương nguyên tố, nên build chạy mượt mà không cần nhiều đầu tư. Pathfinder đang là ascendancy đông thứ hai ladder, 18.7%, và tăng nhanh nhất trong các class kể từ tuần đầu — phần lớn lý do là combo bow này clear cực rảnh tay. Build hợp với người thích playstyle bắn-và-chạy, ưu tiên tốc độ farm hơn boss single-target, và muốn một entry point rẻ để vào endgame của [Runes of Aldur](/guides/return-of-the-ancients).

## Build hoạt động ra sao

Damage và clear chạy trên hai hệ tách rời nhưng nuôi nhau. :wiki-link{url="https://www.poe2wiki.net/wiki/Lightning_Arrow"} chuyển 80% physical thành lightning ngay ở skill, bắn một mũi rồi nảy lightning beam sang 2–4 enemy gần đó — phần damage chính, scale bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Shock"}, lightning penetration và curse. Cùng cú bắn đó mình cộng thêm một ít cold để mọi enemy trúng đòn đều bị :wiki-link{url="https://www.poe2wiki.net/wiki/Chill"}.

Chill chính là chìa khoá mở clear engine. :wiki-link{url="https://www.poe2wiki.net/wiki/Polcirkeln"} cho phép enemy bị Chill bởi đòn của mình được :wiki-link{url="https://www.poe2wiki.net/wiki/Shatter"} như thể đang Frozen, nên mình không cần dồn đủ freeze buildup — chỉ cần chill là đủ điều kiện shatter. Khi một mũi Lightning Arrow giết enemy đang chill, nó shatter, và vì :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"} kích hoạt mỗi khi một non-Herald attack shatter enemy, một quả nổ lạnh bung ra dội attack damage lên cả pack xung quanh. Pack đông thì nhiều shatter xảy ra cùng lúc, nhiều quả nổ chồng lên nhau, màn hình trắng xoá.

:wiki-link{url="https://www.poe2wiki.net/wiki/Barrage"} là công tắc burst. Nó không phải skill bắn — nó là buff nạp sẵn một loạt tên, khiến cú bắn Barrageable tiếp theo Repeat thêm 2 lần, cộng 1 lần nữa cho mỗi :wiki-link{url="https://www.poe2wiki.net/wiki/Frenzy_Charge"} tiêu thụ. Mỗi loạt Barrage do đó nhả ra một chùm mũi tên vào một điểm, mỗi mũi là một hit riêng có thể shatter và proc Herald of Ice — biến một lần bấm thành một chuỗi nổ. Lớp phòng thủ thì gọn: evasion cao làm nền né đòn, :wiki-link{url="https://www.poe2wiki.net/wiki/Pathfinder"} đổi một nửa evasion thành elemental damage reduction, và flask của Pathfinder hồi liên tục giữ life đầy giữa các pack.

## Vòng shatter của Herald of Ice

Điều kiện proc của :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"} rất cụ thể: shatter một enemy bằng một non-Herald attack hit. Shatter xảy ra khi mình giết enemy đang Frozen — hoặc đang Chill nếu có :wiki-link{url="https://www.poe2wiki.net/wiki/Polcirkeln"}. Quả nổ bung ra deal cold attack damage trong bán kính 1.6m, cộng thêm radius theo quality của gem. Herald of Ice reserve 30 Spirit và yêu cầu một martial weapon, ở đây là bow.

Có hai giới hạn phải nắm để không hiểu sai sức mạnh của nó. Thứ nhất, quả nổ của Herald of Ice không tự gây freeze buildup được, nên nó không tự tạo thêm điều kiện shatter cho chính mình. Thứ hai, on-shatter của Herald skill không trigger từ kill do Herald skill gây ra — tức một quả nổ Herald of Ice giết enemy khác sẽ không đẻ ra quả nổ mới. Loop vô hạn không tồn tại. Sức mạnh thực tế đến từ số lượng shatter do đòn bắn của mình tạo ra trong một khoảnh khắc: Barrage nhả nhiều mũi, mỗi mũi giết một enemy đang chill, mỗi cái shatter là một quả nổ. Bắn vào pack đông là nhiều quả nổ đồng thời, chứ không phải một quả nổ tự nhân lên.

Vì vậy hai thứ quyết định tốc độ clear là độ phủ chill và sát thương đủ để kill-trong-lúc-chill. Lightning Arrow nảy beam giúp chill lan nhanh ra cả pack; một nguồn cold nhỏ trên gear là đủ để mọi hit chill. Khi cần burst một pack cứng hoặc rare, :wiki-link{url="https://www.poe2wiki.net/wiki/Ice-Tipped_Arrows"} là công cụ on-demand: nó empower 4 đòn bắn tiếp theo convert physical sang cold và tạo Ice Fragment khi hit, cho một cửa sổ freeze nặng để shatter chắc tay. Cooldown 12 giây nhưng bypass được bằng cách tiêu một Frenzy Charge, nên dùng linh hoạt.

## Skill Gems & Links

Main link là :wiki-link{url="https://www.poe2wiki.net/wiki/Lightning_Arrow"}. Support ưu tiên theo thứ tự: một support cộng projectile/chain để phủ pack rộng hơn, :wiki-link{url="https://www.poe2wiki.net/wiki/Lightning_Penetration"} để xuyên lightning res (nhân lên rất mạnh khi đi cùng curse), một support tăng damage tổng, và một support thêm flat cold hoặc tăng cold để chill chắc. Tránh :wiki-link{url="https://www.poe2wiki.net/wiki/Cold_Attunement"} ở main link vì nó kèm "50% less fire and lightning damage" — với một skill lightning-primary thì đó là cắt thẳng damage chính, không đáng. Exclusion check: Cold Attunement loại trừ về mặt giá trị với lightning scaling (less lightning), nên chỉ dùng nếu chuyển hẳn sang cold-primary.

:wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"} chạy riêng, reserve 30 Spirit. Nếu còn dư Spirit thì :wiki-link{url="https://www.poe2wiki.net/wiki/Deadly_Herald"} cho 30% more damage lên phần nổ — "more" nên nhân thẳng vào quả nổ, đáng giá khi đã thừa Spirit. Đó là một trong số ít multiplier dạng more mà build chạm tới được, nên ưu tiên khi ledger Spirit cho phép.

:wiki-link{url="https://www.poe2wiki.net/wiki/Barrage"} để ở một slot riêng, bấm trước khi xả vào pack đông hoặc trước rare/boss. :wiki-link{url="https://www.poe2wiki.net/wiki/Ice-Tipped_Arrows"} cũng là một buff slot riêng cho cửa sổ cold burst. Hai cái này đều là buff empower cho cú bắn Barrageable kế tiếp, không xung đột nhau — có thể stack cả Barrage lẫn Ice-Tipped lên cùng một loạt để vừa nhiều mũi vừa cold nặng.

Hai skill tiện ích dán keo cho cả build. :wiki-link{url="https://www.poe2wiki.net/wiki/Sniper's_Mark"} mark một mục tiêu, crit kế tiếp tiêu mark để cộng crit damage và trả lại một Frenzy Charge — chính Frenzy Charge đó nuôi thêm repeat cho Barrage, nên Sniper's Mark vừa tăng burst single-target vừa khép vòng charge. :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Weakness"} hạ -40 đến -59% elemental resistance cả vùng, ăn cho cả lightning lẫn cold cùng lúc, nên nó là multiplier rẻ nhất build có. Lưu ý curse trong 0.5 bị giới hạn theo level mục tiêu — cần level gem đủ cao hoặc +curse level thì curse mới bám được map boss và pinnacle, đừng trông chờ nó tự ăn lên target cao level khi gem còn thấp.

## Ascendancy Pathfinder lấy node nào

Pathfinder không cho damage trực tiếp, nó cho nền chạy mượt. Hai node phải lấy sớm là Enduring Elixirs (life flask effect không bị huỷ khi life đầy lại, và không xếp hàng chờ) cùng các node tăng flask charge — chúng biến life flask thành nguồn hồi liên tục, đúng kiểu một build bắn-và-chạy cần. Skill Speed node thẳng tay tăng tốc độ mọi skill, mà trong POE2 Skill Speed là chỉ số riêng tách khỏi attack speed nên nó cộng dồn chứ không giẫm chân.

Lớp phòng thủ đáng giá nhất là Sustainable Practices: 50% Evasion Rating cũng cho elemental damage reduction. Với một character evasion cao, đó là một lớp giảm sát thương nguyên tố miễn phí dựa trên chỉ số mình vốn đã stack — lý do chính khiến Pathfinder bow sống dai hơn một Deadeye thuần evasion. Evasion node của ascendancy nuôi thẳng cho lớp này. Nếu muốn thêm điểm passive, Path of the Sorceress mở 4 điểm và lối sang điểm xuất phát Sorceress để với tay tới cụm cold/lightning bên đó. Overwhelming Toxicity là node cho nhánh poison — build này không đi poison nên bỏ qua, đừng lấy cho đủ.

## Chỉ số và phòng thủ

Profile phòng thủ điển hình của Pathfinder trên ladder hiện tại là life thấp quanh 1,500, ghép thêm energy shield 3,000–6,000, và EHP rơi vào 28k–45k — phần lớn EHP đến từ evasion cộng lớp elemental reduction của Sustainable Practices chứ không phải life pool. Build này né và giảm, không phải build tank máu. Cap elemental resistance 75% là điều kiện bắt buộc trước khi nghĩ tới damage; chaos res thì để sau cùng như mọi build evasion.

:wiki-link{url="https://www.poe2wiki.net/wiki/Nascent_Hope"} là mảnh phòng thủ quan trọng mà nhìn qua dễ bỏ sót: nó là một Thawing Charm, tự kích khi mình bị Frozen, cho freeze immunity trong 3 giây và khởi động lại Energy Shield Recharge ngay lúc proc. Với một character life thấp, bị freeze giữa pack là kiểu chết phổ biến nhất — charm này đóng đúng lỗ đó, đồng thời đạp ES recharge chạy lại. Nó rẻ nên thuộc nhóm core, không phải luxury.

Sau 0.5.3, **Staunch Deflection** thêm dòng Deflection Rating bằng 8% Evasion Rating. Cluster Deflection nằm cùng vùng Ranger-adjacent với mạch evasion build đang đi, từ start node Ranger chỉ ~16 hop là chạm, ngắn hơn hẳn so với Huntress (~20 hop). Với evasion floor 6,000-9,000 của Pathfinder bow điển hình thì Staunch Deflection cộng thẳng +480 đến +720 Deflection Rating, là một layer phòng thủ mới gần như miễn phí nếu path tree đã đi qua khu Deflection. Verify trong client xem path Pathfinder hiện tại có chạm Staunch Deflection trong tầm 2-3 điểm detour không trước khi commit, nếu chạm thì pickup ngay.

Về damage, mình không chốt một con số DPS tổng vì PoB2 0.5 chưa model đúng trigger shatter của Herald of Ice lẫn cửa sổ convert của Ice-Tipped Arrows, và nhãn DPS-theo-skill của poe.ninja gắn nhầm các Pathfinder bow sang skill khác nên không trích thẳng được. Chuỗi scale thì rõ ràng: base hit của Lightning Arrow (80–250% theo gem level) nhân với increased lightning/elemental trên cây và gear, nhân tiếp phần -res từ :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Weakness"} và lightning penetration, rồi mỗi loạt Barrage cộng các repeat (mỗi repeat deal 50% less — multiplier giảm — nhưng là hit riêng nên vẫn shatter và proc Herald of Ice). Phần nổ Herald of Ice là một cú cold attack damage riêng scale theo cold/attack modifier của mình. Khi vào league nên materialize build trong PoB2 và đo DPS thực của cả Lightning Arrow hit lẫn quả nổ Herald of Ice riêng, rồi log lại — đó là con số cần để chốt breakpoint gem level và quality.

## Gear theo slot

Ưu tiên cap resistance trước, rồi mới tới damage. Thứ tự dưới đi từ rẻ nhất.

- **Ring 1 — :wiki-link{url="https://www.poe2wiki.net/wiki/Polcirkeln"}**: ~1 ex. Polcirkeln là enabler của cả clear engine — "enemies Chilled by your Hits can be Shattered as though Frozen". Kèm cold damage và cold res, vừa cấp nguồn chill vừa mở shatter. Cắm là build chạy.
- **Ring 2 — :wiki-link{url="https://www.poe2wiki.net/wiki/The_Taming"}**: ~5 div (658 ex). Prismatic Ring cho all-ele res và "10–20% increased Damage for each type of Elemental Ailment on Enemy". Build này gây cả shock lẫn chill nên đụng tối thiểu hai loại ailment, vì vậy mình cố tình giữ cả hai element thay vì bỏ một. The Taming là món chase chính của build; trước khi đủ tiền thì dùng rare ring cap res + flat lightning/cold.
- **Boots — :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Step"}**: ~1 ex. 30% movement speed, 80–120% increased evasion, +70–100 life, và deflection bằng 40–60% evasion rating. Movement speed cho playstyle chạy, evasion và deflection nuôi thẳng nền phòng thủ.
- **Gloves — :wiki-link{url="https://www.poe2wiki.net/wiki/Lochtonial_Caress"}**: ~1 ex. 10–15% Skill Speed cộng life — Skill Speed lại là chỉ số riêng nên cộng thẳng tốc độ bắn. Rẻ, dùng tốt từ leveling lên tới đầu endgame; sau thay bằng rare gloves cap res nếu cần lỗ res.
- **Bow**: rare bow là nơi đổ ngân sách damage. Cần flat lightning/cold added, tăng attack/projectile/skill speed, và crit nếu đi crit. Bow tốt là khác biệt lớn nhất giữa bản league-start và bản đã đầu tư.
- **Jewel — :wiki-link{url="https://www.poe2wiki.net/wiki/Heart_of_the_Well"}**: ~5 ex. Diamond jewel với mod desecrated, 53% ladder cắm — thường roll ra attack speed, pierce, hoặc các mod tấn công mạnh. Rẻ và phổ biến vì cung dày.
- **Amulet / Helm / Body / Belt**: rare, nhiệm vụ là cap res, cộng life/ES, dex, và lấp các lỗ ailment chance hoặc damage còn thiếu. Body evasion base để nuôi Sustainable Practices.

Món đắt nhất nhóm meta là :wiki-link{url="https://www.poe2wiki.net/wiki/Rite_of_Passage"} (~27 div) — usage 13% nhưng giá cao vì nguồn cung bị siết. Nó không bắt buộc cho build chạy; coi như mục tiêu cuối khi muốn min-max.

## Flask và charm

:wiki-link{url="https://www.poe2wiki.net/wiki/Lavianga's_Spirits"} (~9 ex) là mana flask đặc biệt: nó không bấm được mà áp dụng hiệu ứng liên tục với lượng hồi giảm bớt — tức một nguồn mana regen vĩnh viễn chiếm một slot flask. Lightning Arrow cộng Barrage tốn mana liên tục, flask này giải quyết sustain mà không cần quản lý bấm. Slot life flask còn lại để hồi burst, được Enduring Elixirs của Pathfinder giữ hiệu ứng không gián đoạn.

:wiki-link{url="https://www.poe2wiki.net/wiki/Nascent_Hope"} (~8 ex) nằm ở charm slot, lo freeze immunity và đạp ES recharge như đã nói ở phần phòng thủ. Ba món Polcirkeln, Lavianga's Spirits, Nascent Hope cộng lại chưa tới 20 ex mà gánh cả enabler clear lẫn hai lớp sustain — đó là lý do build này rẻ bất thường để khởi động.

## Failure Modes

Build làm tốt ba việc: clear pack đông cực nhanh nhờ Herald of Ice chồng nổ, di chuyển nhanh và rảnh tay, và khởi động rẻ vì các enabler đều dưới 10 ex. Nhưng nó có những chỗ gãy rõ ràng cần biết trước.

**Single-target và boss yếu hơn nhiều so với clear.** Cả engine xoay quanh shatter pack đông; vào boss đơn không có gì để shatter chồng, damage tụt về mỗi Lightning Arrow hit cộng burst Barrage. Pinnacle boss và map boss cứng sẽ lâu hơn hẳn — đây là build farm map, không phải build deathless uber. Sniper's Mark và Ice-Tipped Arrows giúp burst nhưng không bù hết khoảng cách.

**Map mod đánh thẳng vào engine.** Mod "Monsters cannot be Frozen/Chilled" hoặc gần như vậy là tắt clear engine — không chill thì không shatter, Herald of Ice ngừng proc, build tụt xuống chỉ còn Lightning Arrow thuần. "Less elemental ailment effect" làm chill khó bám hơn. "Monster elemental resistance" pha loãng cả lightning lẫn cold. Những map đó nên skip hoặc chạy chậm, đừng cố.

**One-shot vào character life thấp.** EHP 28k–45k phần lớn từ evasion là phòng thủ xác suất, không phải bảo đảm. Một đòn không né được từ boss slam hay porcupine bất ngờ có thể xuyên qua khi life chỉ ~1,500. Freeze giữa pack là kiểu chết kinh điển — Nascent Hope đóng lỗ freeze nhưng vẫn phải tôn trọng pattern boss, không tank đứng yên.

**Ngưỡng gear để ra số như mô tả.** Bản dưới ~20 ex (chỉ ba enabler core + rare cap res) clear act và map thấp ổn nhưng damage còn mỏng; để map cao mượt cần một rare bow tử tế và The Taming (~5 div). Dưới ngưỡng đó build vẫn chơi được, chỉ chậm hơn rõ.

**Nhạy với nerf shatter và Herald.** Toàn bộ tốc độ clear dựa trên việc chill đủ rẻ để shatter (qua Polcirkeln) và Herald of Ice proc trên mỗi shatter. Nếu một patch siết điều kiện shatter, đổi cơ chế Polcirkeln, hay hạ damage quả nổ Herald of Ice, engine này yếu đi rõ. Rủi ro patch lớn nhất của build nằm ở chỗ đó.

## Verdict

Build này là một trong những lựa chọn league-start tốt nhất 0.5 cho người muốn farm map tốc độ cao mà không phải đổ tiền: ba enabler core dưới 20 ex là đủ để engine chạy, phần còn lại scale dần bằng rare bow và The Taming. Đổi lại mình chấp nhận single-target tầm trung và một character mỏng máu cần chơi tỉnh táo. Hợp nhất với người thích playstyle bắn-và-chạy và ưu tiên currency-per-hour. Muốn build chạy đúng như mô tả ở map cao thì ngưỡng thực tế là một rare bow ổn cộng The Taming; dưới mức đó vẫn vui nhưng chậm hơn. Muốn một engine spear cận chiến thay vì bow thì [Huntress spear Twister](/builds/huntress/0-5-spirit-walker-twister) là lựa chọn cùng tầm meta.

## Relationships

- related_mechanics :: [Tổng quan league Runes of Aldur](/guides/return-of-the-ancients)
- alternative_to :: [Huntress spear Twister](/builds/huntress/0-5-spirit-walker-twister)

## Changelog

### 2026-06-19

- Patch 0.5.3: Staunch Deflection thêm Deflection Rating bằng 8% Evasion Rating. Cluster ngồi ở Ranger-adjacent, từ start Ranger khoảng 16 hop. Pathfinder bow evasion floor 6-9k thì +480 đến +720 Deflection Rating nếu chạm cluster, là layer phòng thủ rẻ. Cần verify path tree thực tế có chạm Staunch Deflection trong tầm 2-3 điểm detour không trước khi commit.

### 2026-06-10

- Bản đầu cho 0.5.0 Runes of Aldur. Engine Lightning Arrow + Herald of Ice shatter qua Polcirkeln, nền Pathfinder flask/evasion. Số meta từ snapshot poe.ninja runesofaldur 2026-06-10 (Pathfinder 18.7%, Herald of Ice 30.9%, Barrage 23.4%). Giá gear poe2scout 2026-06-10. DPS tổng chưa materialize trong PoB2 — cần đo khi vào league.
