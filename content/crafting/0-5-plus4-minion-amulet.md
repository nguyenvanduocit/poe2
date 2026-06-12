---
template: templates/mechanic-template.md
document_type: mechanic
title: Craft amulet top-tier cho companion build
status: published
author: duocnv
created: '2026-06-12'
updated: '2026-06-12'
league: '0.5'
patch: 0.5.2
sub_class: crafting
tags:
  - crafting
  - amulet
  - minion
  - companion
  - spirit
  - catalyst
  - fracture
  - desecration
  - omen
  - endgame
  - poe2
  - mechanic
---

# Craft amulet top-tier cho companion build

Một cây amulet đỉnh cho companion build cần gánh năm thứ cùng lúc: **+4 Level of all Minion Skills**, **Spirit cao** (T1 ~50), một lớp thủ (**Life hoặc ES**), **resistances** (đặc biệt chaos), và một dòng utility (ES-from-body, all-attr, hoặc dual-res). Không mod nào trong đây ngẫu nhiên đẹp được — mỗi cái phải craft có chủ đích, và thứ tự các bước quyết định cây thành hay brick.

Quy trình chia hai nhánh loại trừ nhau ngay từ đầu, phải chọn trước khi đập viên đầu tiên:

- **Nhánh +4 guaranteed** — fracture mod minion để khoá, rồi chaos-spam phần còn lại an toàn. Trần là +4, nhưng chắc ăn.
- **Nhánh +5 gamble** — KHÔNG fracture mod minion (vì sanctify không reroll được fractured mod), giữ mod tự do để gamble +5 bằng sanctify. Mất lưới an toàn ở bước chaos-spam.

Bài này đi nhánh +4 làm xương sống vì nó là cái lặp lại được, rồi tách riêng đường +5/+6 ở cuối cho ai đủ vốn gamble.

## Base chọn gì và vì sao

Dòng `+# to Level of all Minion Skills` chỉ roll trên **amulet** (ring không có), nên đây là slot duy nhất ép được mod này. Hai yếu tố base quyết định:

**Item level phải đủ cao.** Tier cao nhất của mod minion bị gate theo ilvl base. Tier đỉnh cần base **ilvl 82** — mua base thấp hơn là tự chặn trần ngay từ đầu. Luôn lấy base ilvl 82 (hoặc tối thiểu 80) trước khi làm bất cứ gì.

**Implicit cho Spirit free.** :wiki-link{url="https://www.poe2wiki.net/wiki/Solar_Amulet"} mang sẵn implicit +10-15 Spirit — cây thành phẩm cộng dồn Spirit cả từ implicit lẫn prefix craft, nên đây là base mặc định cho companion. Nếu build cần skill từ base (Wolf Pack, Herald) thì có các base grant-skill như **Lament Amulet** hay **Wolf Pack base**, nhưng chú ý **polarity affix** của chúng: base "−1 suffix" chặn luôn cách roll +3 bằng aug/annul (vì minion-level là suffix, không có chỗ để aug) và ép phải chaos-spam. Trước khi chọn base grant-skill, check trong client xem nó là −prefix hay −suffix — số phận bước lấy +3 nằm ở đó.

## Lấy mod +3 minion lên base

Mod `+3 to Level of all Minion Skills` chỉ có **weight 100** — cực hiếm, cùng hạng với T1 Spirit (weight 50). Không brute-force rẻ được. Ba đường, theo thứ tự chi phí:

**Mua thẳng base +3 chưa fracture** là rẻ nhất nếu vốn vừa. Đây là phần duy nhất không craft deterministic được, nên gom một cây +3 sẵn rồi build tiếp từ đó tiết kiệm hơn tự roll. Lọc đúng +3, **chưa corrupt, chưa fracture**, ưu tiên magic ít mod để dễ thao tác tiếp.

**Tự roll bằng Perfect Aug + Annul trên base −prefix** rẻ hơn chaos-spam nhiều. Trên một base mà magic chỉ roll được suffix (−prefix polarity), :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Transmutation"} (perfect) rồi loop annul → perfect aug ép roll vào đúng slot suffix nơi minion-level sống — trung bình ~163 lần so với ~1000+ lần chaos. Pool nhỏ hơn nhiều vì chỉ tranh một slot suffix.

**Chaos-spam** là đường cuối, dùng khi base bị ép (−suffix base như Wolf Pack). Trung bình ngốn hơn 1000 :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Orb"} cho +3 ở weight 100 — đắt nhất, chỉ làm khi không còn cách.

## Khoá +3 bằng fracture (nhánh +4)

Có +3 rồi thì phải **khoá nó bằng fracture** trước khi đụng tới phần còn lại, để chaos-spam Spirit không reroll mất nó. :wiki-link{url="https://www.poe2wiki.net/wiki/Fracturing_Orb"} khoá một mod ngẫu nhiên trên rare có **tối thiểu 4 modifier**, nên mánh là lái xác suất:

Gắn một desecrated modifier **chưa reveal** làm mod thứ tư bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Gnawed_Collarbone"}. Desecrated mod chưa reveal **không thể bị fracture** nhưng vẫn đếm vào số 4 mod tối thiểu — nên thay vì fracture trên 4 mod thường (1/4 trúng +3), có một mod miễn nhiễm trong đó thì xác suất trúng +3 lên **1/3**. Trúng fractured +3 thì giữ làm base, trượt thì làm lại.

## Roll mod thứ hai bằng erasure omen

Có một mod khoá bằng fracture rồi, mod còn lại (Spirit nếu fracture minion, hoặc minion nếu fracture Spirit) **không chaos-spam mù** — chaos mù gỡ-thêm random nên churn cả cây, phá luôn các mod đang muốn giữ. Đường sạch là cô lập đúng một slot rồi reroll có kiểm soát:

1. **Annul sạch về đúng mod fractured.** :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Annulment"} gỡ mod random, nhưng mod fractured miễn nhiễm — annul tới khi chỉ còn một mình nó.
2. **Add một mod vào đúng slot type của mod muốn**, bằng Exaltation side-omen — để có mod ở slot đó cho Chaos thao tác. **Spirit là prefix → Omen of Sinistral Exaltation; minion là suffix → Omen of Dextral Exaltation.**
3. **Reroll đúng slot đó bằng Erasure omen + Chaos.** Omen of Sinistral Erasure = "next Chaos Orb removes only prefix"; Omen of Dextral Erasure = "next Chaos Orb removes only suffix". :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Orb"} gỡ đúng mod ở slot đó rồi add mod mới, loop tới khi trúng target. Giữ slot bên kia full (mod fractured + một blocker) để mod add lại rơi đúng vùng. Mod fractured không bao giờ bị đụng.

Điểm dừng: **T1 Spirit (~+50)** hoặc **+3 minion** tuỳ nhánh. Spirit + implicit Solar (+10-15) ra ~60-65 tổng, đủ cho một aura nữa trong roster. Đây vẫn là bước tốn currency nhất (mỗi reroll một viên Chaos), nhưng reroll theo slot nên không phá mod khác — khác hẳn chaos-spam mù.

(Nhánh +5 thì fracture **Spirit** và để mod minion tự do roll bằng Dextral Erasure — vì sanctify cần mod minion KHÔNG fractured. Xem section +5 cuối bài.)

## Finish res và defense (làm hết trước bước +4)

Ràng buộc cứng phải nắm trước khi đụng bước này: **quality jewellery chỉ một type tại một thời điểm**. Necrotic cho minion-quality (đó là cái cho +4), nhưng catalyst res (Chayula's, Xoph's...) cho quality type khác — đập một viên catalyst res vào item đang có minion-quality là **minion-quality bay sạch, +4 tụt thẳng về +3**. Nên mọi thứ tiêu quality để finish res phải xong **trước**, còn Necrotic minion-quality là bước tuyệt đối cuối cùng (section riêng phía dưới); sau Necrotic không đập catalyst nào nữa.

Hai đường lấy res, ưu tiên đường không đụng quality:

**Đường không đụng quality (an toàn cho +4):** chaos res từ **desecration** dual-res suffix (section dưới), flat Life/ES từ **Greater Exalted Orb** (Min Mod Level 35) hoặc **Perfect Exalted Orb** (Min Mod Level 50) — cắt tier rác, roll ra tier cao. Không tiêu quality nên không xung đột minion-quality, làm lúc nào cũng được. Verify trước rằng mod muốn có tier ở ngưỡng đó (vd Life trên amulet còn 2 tier ≥50, không bị Perfect loại).

**Đường Catalysing Exaltation (mạnh hơn nhưng tiêu quality, BẮT BUỘC làm trước Necrotic):** **Omen of Catalysing Exaltation** = "next Exalted Orb will consume all Catalyst Quality to increase the chance of the corresponding type of Modifier" — quality một type → exalt nghiêng hẳn về mod type đó (20% quality nhân weight 5×, 40% nhân 7.5×). Mỗi mod là một vòng: đập catalyst đúng type → Catalysing Exalt consume hết quality → mod ra → quality về 0. Làm lần lượt từng res, xong hết rồi mới tới Necrotic.

Bản đồ catalyst → mod type (bản jewellery, drop từ Breach):

- **Chayula's Catalyst** → Chaos → hit **chaos resistance** (giải đúng bài toán chaos res mà exalt mù tốn 135 lần)
- **Xoph's / Tul's / Esh's Catalyst** → Fire / Cold / Lightning res
- **Flesh Catalyst** → Life · **Carapace Catalyst** → Armour/Evasion/ES (defence) · **Adaptive Catalyst** → Attributes

Side-omen kẹp kèm để ép Catalysing Exalt rơi đúng slot: **Omen of Sinistral Exaltation** (chỉ prefix) cho ES/Life, **Omen of Dextral Exaltation** (chỉ suffix) cho res. Greater/Perfect Exalt cũng nên dùng ở các vòng này để cắt tier rác.

## Desecrate cho ES-from-body và chaos res

Một số dòng mạnh chỉ ra từ desecration, không có trong pool thường. Trên amulet, desecrated pool có:

- **Kurgal's prefix**: (35-50)% increased Energy Shield from Equipped Body Armour — đòn ES cho CI/ES build
- **of Amanamu / of Kurgal / of Ulaman suffix**: +(13-17)% to Fire+Chaos / Cold+Chaos / Lightning+Chaos Resistances — chaos dual-res

Cách lái: :wiki-link{url="https://www.poe2wiki.net/wiki/Ancient_Collarbone"} (hoặc Preserved — phải tier ≥65 ilvl, Min Mod Level 40, **Gnawed không đủ**) + omen faction để ép đúng pool: **Omen of the Liege** = Amanamu, **Sovereign** = Ulaman, **Blackblooded** = Kurgal. Kẹp **Omen of Abyssal Echoes** để reroll bộ option 1 lần nếu reveal xấu. Desecration rơi vào slot trống — sắp cho đúng side bằng cách dọn trống đúng prefix/suffix trước.

Lưu ý: dòng desecrated `+(1-2) Level of all Minion Skills` (of Amanamu) là **focus-only, KHÔNG lên amulet** — nên +minion trên amulet bắt buộc đến từ mod fractured/rolled, desecration không cấp được. Đừng tốn collarbone hòng cộng dồn minion level.

## Dọn junk bằng omen

Cây nhiều mod thì dọn phải target, không churn mù:

- **Omen of Whittling + Chaos** → gỡ mod **tier thấp nhất** (dùng cho mod breach-quality ilvl 1, hoặc bất kỳ junk thấp tier nào). Chaos re-add một mod random nên không phải xoá sạch.
- **Omen of Sinistral/Dextral Annulment + Orb of Annulment** → xoá sạch chỉ prefix / chỉ suffix. **Mod fractured miễn nhiễm Annul** — nên Dextral Annul ×N lột sạch junk suffix mà mod minion fractured tự bảo vệ (phát cuối bị ép vào junk còn lại).
- **Omen of Dextral Erasure + Chaos** → "next Chaos Orb removes only suffix" — reroll suffix kiểu deterministic tới khi ưng.
- **Blocker mod**: nhét một mod ilvl thấp (desecrated mana, slam tier thấp) làm mồi chặn slot, để desecrate/exalt không rơi vào đó, rồi Whittle nó đi sau.

Sắp phase để mỗi add/remove rơi đúng chỗ không cần đoán: lấp prefix lúc suffix full → strip suffix junk lúc đó → lấp suffix lúc prefix full.

## Bước cuối là Necrotic Catalyst đẩy +3 lên +4

Đây là bước **tuyệt đối cuối cùng**, làm sau khi mọi mod và mọi catalyst res đã xong — vì quality chỉ một type, đập bất kỳ catalyst nào sau bước này là minion-quality bay, +4 về +3. Item phải hoàn thiện hết các mod khác rồi mới tới đây.

Patch 0.5.2 thêm **Necrotic Catalyst** — catalyst quality enhance riêng Minion Modifiers trên ring/amulet, lấy qua Genesis Tree. Quality nhân magnitude mod cùng type: +3 × 40% = 4.2 → hiển thị **+4**. Đây là đường +4 duy nhất cho minion (catalyst caster/attack không chạm minion-level vì khác tag).

Trần quality mặc định 20% (3 × 1.2 = 3.6 → vẫn +3, công cốc). Để lên 40% cần **+20% Maximum Quality** từ :wiki-link{url="https://www.poe2wiki.net/wiki/Essence_of_the_Breach"} — "removes a random modifier and augments with +20% to Maximum Quality", lái cho nó chỉ ăn suffix bằng **Omen of Dextral Crystallisation** ("next Perfect/Corrupted Essence removes only Suffix") để không động mod thật. Trình tự đóng cây: Essence of the Breach lấy +20% max quality → đập Necrotic tới 40% minion quality, +3 thành **+4** → **Omen of Whittling** + Chaos dọn mod breach ilvl 1 (quality 40% đã áp vẫn nằm nguyên, +4 giữ). Xong là item đóng, không đụng currency nào nữa.

## Đường gamble +5 và +6

**+5 bằng sanctify** là đường gamble loại trừ với việc fracture mod minion. **Sanctified** "randomise rồi nhân giá trị mỗi mod với hệ số 0.8-1.2x, và khoá mọi craft về sau". Mod +3 cần ăn hệ số ≥1.19x để 3 × hệ số × 1.4 vượt 5.0 → hiển thị +5. Hai ràng buộc cứng: sanctify **không reroll được fractured mod**, nên muốn đi +5 thì **đừng fracture mod minion** (fracture Spirit thay thế, mất lưới an toàn lúc spam minion); và sanctify **khoá item vĩnh viễn**, nên đây là bước tuyệt đối cuối cùng, làm sau khi mọi mod khác đã hoàn thiện.

**+6 bằng corrupt** đang là theory tranh cãi: corrupt bằng Infuser được cho là đẩy +4→+5 rồi quality nhân lên +6, nhưng cộng đồng chia rẽ về việc rounding có chặn ở +5 không, và bước corrupt có thể brick item. Chưa có cây +6 nào xác nhận trên thị trường tại thời điểm viết. Coi đây là gamble cho người dư vài trăm div, không phải đường chuẩn.

Mốc cần log khi tự chạy: ngưỡng làm tròn tooltip ở 5.04, và sanctify trên jewellery có thực sự bỏ qua fractured mod như mô tả không.

## Thứ tự tổng và chi phí

Nhánh +4 guaranteed, từ đầu tới cuối:

1. Base Solar Amulet ilvl 82, lấy +3 minion (mua sẵn rẻ nhất).
2. Gnawed Collarbone desecrate mod thứ tư → Fracturing Orb khoá +3 (1/3).
3. Roll Spirit prefix bằng Sinistral Erasure + Chaos (annul sạch về mod fractured → add prefix → erasure-reroll) tới T1 ~+50.
4. Finish từng res/defense: catalyst đúng type (Chayula's chaos, Xoph's/Tul's/Esh's ele, Carapace ES, Flesh life) + Omen of Catalysing Exaltation + Sinistral/Dextral Exaltation + Greater/Perfect Exalt.
5. Desecrate Kurgal ES-from-body hoặc Amanamu/Kurgal chaos dual-res (Ancient Collarbone + faction omen + Abyssal Echoes).
6. Dọn junk (Whittling, Dextral Annul dưới lưới fractured, Dextral Erasure).
7. **Cuối cùng** Necrotic Catalyst lên 40% minion quality → +3 thành +4 (Essence of the Breach + Dextral Crystallisation nếu cần +20% max quality, rồi Whittle off).

Chi phí tham chiếu (poe2scout 2026-06-12, đơn vị exalted): Fracturing Orb 122 · Necrotic Catalyst 44 · Essence of the Breach 13 · Omen of Whittling 487 · Divine Orb 127. Tiền catalyst res + chaos-spam Spirit là hai hố lớn nhất. Một cây hoàn chỉnh tầm 10-30 div nguyên liệu nếu mua base +3 sẵn; tự roll +3 + chase T1 Spirit đẩy lên 50-200 div. Output: cây +4 minion + T1 Spirit + Life/ES + all-res + chaos res treo quanh 100-300 div tuỳ độ sạch (soi giá thật qua [farming Genesis Tree](/guides/0-5-breach-genesis-tree) cho nguồn catalyst).

## Failure Modes

- **Fracture trúng nhầm mod** — Fracturing Orb khoá random; nếu khoá nhầm Spirit thay vì +3 (hoặc ngược lại) thì base hỏng mục đích, phải bán scrap làm lại. Luôn ráp đúng 3-mod-thật + 1-desecrated trước khi fracture để giữ 1/3.
- **Necrotic quality bị ghi đè** — đập catalyst res (Chayula's/Xoph's) SAU khi đã Necrotic 40% sẽ đổi quality type, +4 tụt về +3. Necrotic luôn là bước quality cuối, không đụng catalyst khác sau nó.
- **Sanctify một item fractured** — đi nhánh +5 mà lỡ fracture mod minion thì sanctify không reroll được nó, +5 bất khả thi; và sanctify lỡ tay khoá item khi mod khác chưa xong là brick vĩnh viễn.
- **Roll Spirit khi +3 chưa khoá** — nếu quên fracture +3 trước khi roll Spirit (nhánh +4), một viên Chaos kể cả qua Erasure cũng có thể bay +3 weight-100, đốt lại từ đầu.
- **Corrupt +6 brick** — bước Infuser ở đường +6 có thể hỏng item hoặc trúng implicit rác; chưa verify được +6 thật, đừng đổ cây tốt vào gamble này.
- **Base ilvl thấp** — base dưới 82 chặn tier minion đỉnh, craft mãi không ra tier cao nhất; sai từ bước 0.

## Version History

- **0.5.2** — thêm Necrotic Catalyst (minion quality cho ring/amulet) qua Genesis Tree, mở đường +4 minion trên amulet (trước đó chỉ caster/attack làm được vì có catalyst tương ứng). Trước 0.5.2, +4 minion phải đi qua sanctify, đắt và rủi ro hơn.
- **0.5.0** — desecration (Collarbone + faction omen Liege/Sovereign/Blackblooded), Catalysing Exaltation, Greater/Perfect Exalted Orb là bộ công cụ finish chuẩn của league này.

## Relationships

- **depends-on** [Breach và Genesis Tree](/guides/0-5-breach-genesis-tree) — Necrotic Catalyst + bộ catalyst res chỉ ra từ Genesis Tree, farm Breach là nguồn cung
- **relates-to** [Tame Beast Companion Pack](/builds/huntress/0-5-spirit-walker-companion-pack) — amulet top-tier này là slot amulet của build companion
- **relates-to** [Spirit và Spirit Reservation](/guides/spirit-and-spirit-reservation) — Spirit trên amulet là một trong các nguồn spirit chính cho roster companion
