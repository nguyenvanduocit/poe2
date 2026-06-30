---
template: templates/mechanic-template.md
document_type: mechanic
title: Craft amulet top-tier cho companion build
status: published
author: duocnv
created: '2026-06-12'
updated: '2026-06-15'
league: '0.5'
patch: 0.5.3
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

Một cây amulet đỉnh cho companion build gánh năm thứ cùng lúc: **+4 Level of all Minion Skills**, **Spirit cao** (T1 ~50), một lớp thủ (**Life hoặc ES**), **resistances** (đặc biệt chaos), và một dòng utility (ES-from-body, all-attr, hoặc dual-res). Không mod nào tự nhiên đẹp được. Mỗi cái phải craft có chủ đích, và thứ tự các bước quyết định cây thành hay brick.

Trần thực tế cần chốt trước khi bắt tay: **+4 là mức chắc ăn**, lặp lại được; **+5 là gamble một-phát** qua sanctify; **+6 bất khả thi** trên amulet, không phải "lý thuyết tranh cãi", vì số học đóng cửa nó (giải thích ở section sanctify). Quy trình tách hai nhánh loại trừ nhau ngay từ đầu:

- **Nhánh +4 guaranteed** — fracture mod minion để khoá, rồi chaos-spam phần còn lại an toàn. Trần +4, chắc ăn.
- **Nhánh +5 gamble** — KHÔNG fracture mod minion (Divine không randomise được giá trị mod fractured, nên sanctify cũng bó tay với nó). Giữ minion tự do để sanctify gamble +5, đổi lại mất lưới an toàn lúc spam.

Bài này đi nhánh +4 làm xương sống, rồi tách đường +5 ở cuối cho ai chịu nổi rủi ro.

## Cơ chế quyết định cả bài: quality bị truncate

Necrotic Catalyst đẩy +3 lên +4 bằng quality, và cách quality áp vào mod `+Level` là cái chốt mọi quyết định phía sau. Quality là một multiplier riêng, áp **sau toàn bộ modifier khác** (kể cả hệ số Sanctification), rồi **truncate** — cắt phần thập phân, không làm tròn.

Nghĩa là với mod minion gốc +3:

- 20% quality → 3 × 1.20 = 3.6 → truncate → **+3** (mặc định 20% không lên nổi +4, phí công)
- 40% quality → 3 × 1.40 = 4.2 → truncate → **+4**
- 50% quality (Vaal infuser) → 3 × 1.50 = 4.5 → truncate → **vẫn +4**

Vì truncate chứ không làm tròn, phải vượt **40% quality** mới chạm +4, mà trần quality mặc định chỉ 20% — nên bước nâng trần lên 40% bằng Essence of the Breach là bắt buộc, không bỏ được. Toàn bộ math +4/+5/+6 ở dưới đều chạy từ công thức `truncate(base × hệ_số_sanctify × (1 + quality))`.

## Base chọn gì và ilvl bao nhiêu

Dòng `+# to Level of all Minion Skills` chỉ roll trên **amulet** (ring không có), nên đây là slot duy nhất ép được mod này. Nó là **suffix**, ba tier: +1 (ilvl 5), +2 (ilvl 41), **+3 (ilvl 75)** — không có tier +4 gốc, nên +4 chỉ đến từ quality.

Mốc ilvl cần nhớ: **mod minion +3 mở ở ilvl 75**, không phải 82. Cái ép base lên 82 là **T1 resistance**: Fire/Cold/Lightning res cao nhất gate ở ilvl 82, chaos res ở 81. Muốn một cây all-T1 thật sự thì mua **ilvl 82**; nếu chỉ cần minion + Spirit (ilvl 54) + ES (ilvl 80) + res tier dưới một bậc thì ilvl 80 đủ. Đừng mua dưới 80, kẻo tự chặn các tier đỉnh ngay từ bước 0.

Implicit cho Spirit free: :wiki-link{url="https://www.poe2wiki.net/wiki/Solar_Amulet"} mang sẵn +(10-15) Spirit, cây thành phẩm cộng dồn Spirit cả từ implicit lẫn prefix craft nên đây là base mặc định cho companion. Nếu build cần skill từ base (grant-skill amulet như Raging Spirits, Cast on Minion Death) thì chú ý **polarity affix** của chúng: base "−1 suffix" chặn cách roll +3 bằng aug/annul (minion-level là suffix, không có chỗ để aug) và ép phải chaos-spam. Check trong client xem base là −prefix hay −suffix trước khi mua, vì số phận bước lấy +3 nằm ở đó.

## Lấy mod +3 minion lên base

Mod `+3 to Level of all Minion Skills` chỉ có **weight 100**, đây mới là dòng hiếm thật trên cây. Để so sánh, T1 Spirit (+47-50) có weight 400 và mở từ ilvl 54, tức là dễ ra hơn nhiều; cái cổ chai của cả cây là +3 minion, không phải Spirit. Ba đường lấy +3, theo thứ tự chi phí:

**Mua thẳng base +3 chưa fracture** là rẻ nhất nếu vốn vừa. Đây là phần duy nhất không craft deterministic được, nên gom một cây +3 sẵn rồi build tiếp từ đó tiết kiệm hơn tự roll. Lọc đúng +3, **chưa corrupt, chưa fracture**, ưu tiên magic ít mod để dễ thao tác.

**Tự roll bằng Perfect Aug + Annul trên base −prefix** rẻ hơn chaos-spam nhiều. Trên base mà magic chỉ roll được suffix (−prefix polarity), :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Transmutation"} (perfect) rồi loop annul → perfect aug ép roll vào đúng slot suffix nơi minion-level sống — pool nhỏ hơn hẳn vì chỉ tranh một slot suffix.

**Chaos-spam** là đường cuối, dùng khi base bị ép (−suffix base). Ở weight 100 nó ngốn hơn 1000 :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Orb"} cho một cú +3 — đắt nhất, chỉ làm khi không còn cách.

## Khoá +3 bằng fracture

Có +3 rồi thì **khoá bằng fracture** trước khi đụng phần còn lại, để chaos-spam Spirit không reroll mất nó. :wiki-link{url="https://www.poe2wiki.net/wiki/Fracturing_Orb"} fracture một mod ngẫu nhiên trên rare có **tối thiểu 4 modifier**, mod fractured sau đó không gỡ/sửa được. Mánh là lái xác suất:

Gắn một desecrated modifier **chưa reveal** làm mod thứ tư bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Gnawed_Collarbone"}. Desecrated mod **không thể bị fracture** nhưng vẫn đếm vào số 4 mod tối thiểu — nên thay vì fracture trên 4 mod thường (1/4 trúng +3), có một mod miễn nhiễm trong đó đẩy xác suất trúng +3 lên **1/3**. Trúng fractured +3 thì giữ làm base, trượt thì làm lại.

(Nhánh +5 bỏ qua bước này với mod minion — vì Divine không randomise được mod fractured nên sanctify cũng vô hiệu với nó. Muốn đi +5 thì fracture **Spirit** thay thế, để minion tự do. Xem section sanctify.)

## Roll Spirit và mod còn lại bằng erasure omen

Có một mod khoá bằng fracture rồi, mod còn lại **không chaos-spam mù** — chaos mù gỡ-thêm random nên churn cả cây, phá luôn mod đang giữ. Đường sạch là cô lập đúng một slot rồi reroll có kiểm soát:

1. **Annul sạch về đúng mod fractured.** :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Annulment"} gỡ mod random, nhưng mod fractured miễn nhiễm — annul tới khi chỉ còn mình nó.
2. **Add một mod vào đúng slot type muốn**, bằng Exaltation side-omen, để có mod ở slot đó cho Chaos thao tác. Spirit là prefix → **Omen of Sinistral Exaltation**; minion là suffix → **Omen of Dextral Exaltation**.
3. **Reroll đúng slot đó bằng Erasure omen + Chaos.** Omen of Sinistral Erasure = "next Chaos Orb removes only prefix"; Omen of Dextral Erasure = "next Chaos Orb removes only suffix". :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Orb"} gỡ đúng mod ở slot đó rồi add mod mới, loop tới khi trúng target. Giữ slot bên kia full để mod add lại rơi đúng vùng. Mod fractured không bao giờ bị đụng.

Điểm dừng: **T1 Spirit (~+50)** hoặc **+3 minion** tuỳ nhánh. Spirit + implicit Solar (+10-15) ra ~60-65 tổng, đủ cho một aura nữa trong roster. Đây vẫn là bước tốn currency nhất (mỗi reroll một viên Chaos), nhưng reroll theo slot nên không phá mod khác — khác hẳn chaos-spam mù.

## Finish res và defense trước khi đụng quality

Ràng buộc cứng phải nắm: **một item chỉ giữ một loại quality tại một thời điểm** — mọi catalyst đều ghi "Replaces other quality types". Necrotic cho minion-quality (cái cho +4), còn catalyst res (Chayula's, Xoph's…) cho quality type khác — đập một viên catalyst res vào item đang có minion-quality là **minion-quality bay sạch, +4 tụt về +3**. Nên mọi thứ tiêu quality để finish res phải xong **trước**, Necrotic là bước tuyệt đối cuối cùng.

Hai đường lấy res, ưu tiên đường không đụng quality:

**Đường không đụng quality (an toàn cho +4):** chaos res từ **desecration** dual-res suffix (section dưới), flat Life/ES từ **Greater Exalted Orb** (Min Mod Level 35) hoặc **Perfect Exalted Orb** (Min Mod Level 50) — cắt tier rác, roll tier cao. Không tiêu quality nên không xung đột minion-quality, làm lúc nào cũng được. Verify trước rằng mod muốn có tier ở ngưỡng đó (vd flat Life trên amulet đỉnh ở ilvl 60, flat ES ở ilvl 80).

**Đường Catalysing Exaltation (mạnh hơn nhưng tiêu quality):** **Omen of Catalysing Exaltation** = "next Exalted Orb will consume all Catalyst Quality to increase the chance of the corresponding type of Modifier" — đập catalyst một type rồi Exalt sẽ nghiêng hẳn về mod type đó. Mỗi mod là một vòng: catalyst đúng type → Catalysing Exalt consume hết quality → mod ra → quality về 0. Làm lần lượt từng res, xong hết rồi mới tới Necrotic.

Bản đồ catalyst → mod type (bản jewellery, drop từ Breach):

- **Chayula's Catalyst** → Chaos → hit **chaos resistance** (giải đúng bài toán chaos res mà exalt mù gần như bất khả)
- **Xoph's / Tul's / Esh's Catalyst** → Fire / Cold / Lightning res
- **Flesh Catalyst** → Life · **Carapace Catalyst** → Armour/Evasion/ES · **Adaptive Catalyst** → Attributes

Side-omen kẹp kèm để ép Catalysing Exalt rơi đúng slot: **Omen of Sinistral Exaltation** (chỉ prefix) cho ES/Life, **Omen of Dextral Exaltation** (chỉ suffix) cho res. Greater/Perfect Exalt cũng nên dùng ở các vòng này để cắt tier rác.

## Desecrate cho ES-from-body, chaos res, và +1 all skills

Một số dòng mạnh chỉ ra từ desecration, không có trong pool thường. Lái bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Ancient_Collarbone"} (hoặc Preserved — tier ≥65 ilvl, Min Mod Level 40, **Gnawed không đủ**) + omen faction ép đúng pool, kẹp **Omen of Abyssal Echoes** để reroll bộ option một lần nếu reveal xấu. Desecration rơi vào slot trống, nên dọn trống đúng prefix/suffix trước.

Ba dòng đáng desecrate trên amulet companion:

- **Kurgal's prefix** (Omen of the Blackblooded): (35-50)% increased Energy Shield from Equipped Body Armour — đòn ES cho CI/ES build.
- **of Amanamu / of Kurgal / of Ulaman suffix** (Liege / Blackblooded / Sovereign): +(13-17)% to Fire+Chaos / Cold+Chaos / Lightning+Chaos Resistances — chaos dual-res một dòng.
- **of Ulaman suffix +1 to Level of all Skills** (Omen of the Sovereign): +1 *all* skills là một suffix riêng, cộng thẳng +1 level cho cả minion skill bên cạnh dòng +4 minion. Tức là cây +4 minion mà thêm được dòng này thì minion gem thật sự ăn +5 level — không cần sanctify, không cần gamble. Đổi lại nó chiếm một slot suffix đang tranh với res, nên chỉ lấy khi đã đủ res từ chỗ khác.

Lưu ý cái bẫy hay gặp: dòng desecrated `+(1-2) Level of all Minion Skills` (của Amanamu) là **focus-only, KHÔNG lên amulet** — chỉ focus mới roll được nó. +minion *minion-specific* trên amulet bắt buộc đến từ mod fractured/rolled; desecration chỉ cấp thêm được dòng "all skills" của Ulaman ở trên, không cấp dòng "all Minion skills".

## Necrotic Catalyst đẩy +3 lên +4

Đây là bước **tuyệt đối cuối cùng**, làm sau khi mọi mod và mọi catalyst res đã xong — quality chỉ một type, đập bất kỳ catalyst nào sau bước này là minion-quality bay, +4 về +3.

Patch 0.5.2 thêm **Necrotic Catalyst** (lấy qua Genesis Tree) — catalyst quality enhance riêng Minion Modifiers trên ring/amulet. Đây là đường +4 duy nhất cho minion: catalyst caster/attack không chạm minion-level vì khác tag. Trần quality mặc định 20% chỉ cho 3 × 1.2 = 3.6 → truncate +3, công cốc; phải lên **40%** mới ra 4.2 → +4.

Nâng trần lên 40% bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Essence_of_the_Breach"} — "Removes a random modifier and augments a Rare item with a new guaranteed modifier", và trên jewellery cái nó cấp là **+20% to Maximum Quality** (20% mặc định + 20% = trần 40%). Hai điểm về cơ chế remove của nó:

- Essence of the Breach gỡ một mod **ngẫu nhiên**, nhưng mod fractured miễn nhiễm gỡ — nên nếu +3 đã fractured (nhánh +4) thì nó không thể ăn mất +3, chỉ ăn một mod khác. Cách an toàn là để sẵn một **mod junk làm mồi** cho nó gỡ, đừng dùng khi mọi mod đều quý.
- Omen of Dextral/Sinistral Crystallisation về lý thuyết ép "next Perfect or Corrupted Essence" gỡ chỉ suffix/prefix, nhưng chưa rõ Essence of the Breach có tính là "Perfect or Corrupted Essence" để omen áp vào không — verify trong client trước khi dựa vào nó; không cần thì dùng cách mồi-junk + lưới fractured ở trên.

Trình tự đóng cây: Essence of the Breach lấy +20% max quality → đập Necrotic tới 40% minion quality, +3 thành **+4** → **Omen of Whittling** + Chaos dọn mod junk còn lại (quality đã áp vẫn nằm nguyên, +4 giữ). Xong là item đóng, không đụng currency nào nữa.

**Refined Necrotic Catalyst** (cũng từ Genesis Tree) là bản cho **jewel**, không phải jewellery — mọi catalyst đều có cặp "thường = ring/amulet, Refined = jewel". Nó vô dụng cho amulet này, nhưng đúng là thứ buff bảy viên jewel magic minion-crit chạy qua [The Adorned](/builds/huntress/0-5-spirit-walker-companion-pack) — đừng nhầm hai bản khi farm Genesis Tree.

## Đẩy lên +5 bằng sanctify, và vì sao +6 bất khả thi

**+5 là trần tuyệt đối**, đạt qua **sanctify** chứ không qua quality đơn thuần. Sanctified (kích bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"} + **Omen of Sanctification**) "randomise giá trị mỗi mod rồi nhân với hệ số ngẫu nhiên 0.8-1.2x", và **khoá mọi craft về sau**. Vì quality áp *sau* hệ số sanctification rồi mới truncate, một +3 ăn hệ số cao để lại phần lẻ ẩn cho quality kéo qua mốc:

`truncate(3 × hệ_số × 1.40)` ≥ 5 cần hệ số ≥ **1.19x** → 3 × 1.19 × 1.4 = 4.998, sát mốc 5.0; ở max 1.2x ra 5.04 → **+5**. Vì 50% quality (Vaal infuser) cũng chỉ cho `truncate(3 × 1.2 × 1.5)` = truncate(5.4) = **+5**, không có đường nào từ base +3 chạm +6 — muốn +6 cần ~67% quality, vượt xa trần khả dĩ. Nên +6 không phải "lý thuyết chưa ai làm", nó là số học đóng cửa: trên amulet, ceiling là +5.

Giá phải trả cho cú +5 này rất nặng, và phải hiểu trước khi đổ một cây đẹp vào:

- Sanctify **randomise lại giá trị toàn bộ mod** (trong range của chúng) rồi nhân 0.8-1.2x — không chỉ minion mà cả Spirit, res, life/ES cũng bị reroll. Một cây T1 sạch có thể tụt mod sau sanctify.
- Mod minion ăn hệ số riêng: nếu hệ số rải đều, ~**2-3%** chạm ≥1.19x ra +5, ~60% giữ +4, và ~**38%** rớt dưới 0.95x kéo về **+3** — mà item đã khoá, không sửa lại được. Tức là sanctify một cây +4 hoàn chỉnh là cú một-phát đổi 2-3% jackpot lấy 38% rủi ro brick về +3.
- Vì Divine không randomise được mod fractured, **đừng fracture mod minion** nếu định đi +5 (fracture Spirit thay thế để giữ nó qua bước spam). Và vì sanctify khoá item, nó phải là bước cuối cùng — sau cả Necrotic 40% quality.

**Vaal Catalysing Infuser** ("improves the quality of a ring or amulet, exceeding maximum quality by up to 10% with a chance of Corrupting it") chỉ đẩy quality từ 40% lên ~50% kèm rủi ro corrupt — không tự ra +5 (vẫn truncate về +4 nếu không sanctify), nên chỉ là một lớp gamble nữa chồng lên sanctify, không phải đường riêng tới +6.

## Thứ tự tổng và chi phí

Nhánh +4 guaranteed, từ đầu tới cuối:

1. Base Solar Amulet ilvl 82, lấy +3 minion (mua sẵn rẻ nhất).
2. Gnawed Collarbone desecrate mod thứ tư → Fracturing Orb khoá +3 (1/3).
3. Roll Spirit prefix bằng Sinistral Erasure + Chaos (annul sạch về mod fractured → add prefix → erasure-reroll) tới T1 ~+50.
4. Finish từng res/defense: catalyst đúng type (Chayula's chaos, Xoph's/Tul's/Esh's ele, Carapace ES, Flesh life) + Omen of Catalysing Exaltation + Sinistral/Dextral Exaltation + Greater/Perfect Exalt.
5. Desecrate Kurgal ES-from-body, Amanamu/Kurgal/Ulaman chaos dual-res, hoặc Ulaman +1 all-skills (Ancient Collarbone + faction omen + Abyssal Echoes).
6. Dọn junk (Whittling, Dextral Annul dưới lưới fractured, Dextral Erasure), chừa một mod mồi cho bước sau.
7. **Cuối cùng** Essence of the Breach lấy +20% max quality → Necrotic Catalyst lên 40% minion quality → +3 thành +4 → Whittle off mod mồi.

Chi phí tham chiếu (poe2scout 2026-06-12, đơn vị exalted): Fracturing Orb 122 · Necrotic Catalyst 44 (item mới 0.5.2, giá còn biến động mạnh) · Essence of the Breach 13 · Omen of Whittling 487 · Divine Orb 127. Catalyst res + chaos-spam Spirit là hai hố lớn nhất. Mua base +3 sẵn thì nguyên liệu tầm 10-30 div; tự roll +3 + chase T1 Spirit đẩy lên 50-200 div. Cây hoàn chỉnh +4 minion + T1 Spirit + Life/ES + all-res + chaos res treo quanh 100-300 div tuỳ độ sạch (nguồn catalyst soi ở [farming Genesis Tree](/guides/0-5-breach-genesis-tree)).

## Failure Modes

- **Fracture trúng nhầm mod** — Fracturing Orb khoá random; khoá nhầm Spirit thay vì +3 thì base hỏng mục đích, bán scrap làm lại. Luôn ráp đúng 3-mod-thật + 1-desecrated trước khi fracture để giữ 1/3.
- **Necrotic quality bị ghi đè** — đập catalyst res (Chayula's/Xoph's) SAU khi đã Necrotic 40% sẽ đổi quality type, +4 tụt về +3. Necrotic luôn là bước quality cuối, không đụng catalyst khác sau nó.
- **Essence of the Breach ăn nhầm mod quý** — nó gỡ một mod random (mod fractured miễn nhiễm); không chừa mod junk làm mồi thì có thể mất một dòng res/Spirit đã craft. Để sẵn mồi trước khi dùng.
- **Sanctify một cây +4 hoàn chỉnh** — ~38% kéo minion về +3 và khoá vĩnh viễn, đồng thời randomise lại mọi mod khác. Chỉ sanctify khi chấp nhận đổi cả cây lấy 2-3% cơ hội +5.
- **Fracture mod minion rồi định đi +5** — Divine không randomise được mod fractured nên sanctify vô hiệu với nó, +5 bất khả thi. Nhánh +5 phải để minion tự do, fracture Spirit thay thế.
- **Base ilvl thấp** — dưới 80 chặn T1 res (ilvl 81-82) và flat ES (ilvl 80); minion +3 thì chỉ cần ilvl 75 nhưng phần thủ/res sẽ kẹt tier dưới.

## Version History

- **0.5.3:** ba mod Abyss mới của patch đều nằm trên **staff** (of Amanamu block 12–16%→20–25%, of Kurgal Puppetmaster stacks, Amanamu's prefix 40–50% extra chaos). Pool suffix amulet Amanamu/Kurgal/Ulaman không thay đổi, craft guide giữ nguyên.
- **0.5.2** — thêm Necrotic Catalyst + Refined Necrotic Catalyst (minion quality cho ring/amulet và jewel) qua Genesis Tree, mở đường +4 minion trên amulet (trước đó chỉ caster/attack làm được vì có catalyst tương ứng). Trước 0.5.2, +4 minion phải đi qua sanctify, đắt và rủi ro hơn.
- **0.5.0** — desecration (Collarbone + faction omen Liege/Sovereign/Blackblooded), Catalysing Exaltation, Greater/Perfect Exalted Orb là bộ công cụ finish chuẩn của league này.
- **0.3.0** — Sanctified (Omen of Sanctification + Divine Orb) introduced; là cơ chế nền cho đường +5.

## Relationships

- **depends-on** [Breach và Genesis Tree](/guides/0-5-breach-genesis-tree) — Necrotic Catalyst + bộ catalyst res chỉ ra từ Genesis Tree, farm Breach là nguồn cung
- **relates-to** [Tame Beast Companion Pack](/builds/huntress/0-5-spirit-walker-companion-pack) — amulet top-tier này là slot amulet của build companion; Refined Necrotic Catalyst lại buff đám jewel minion-crit của build
- **relates-to** [Spirit và Spirit Reservation](/guides/spirit-and-spirit-reservation) — Spirit trên amulet là một trong các nguồn spirit chính cho roster companion
