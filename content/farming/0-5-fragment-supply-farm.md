---
template: templates/farming-template.md
document_type: farming-strategy
title: Fragment Supply Farming
status: draft
created: '2026-06-11'
updated: '2026-06-23'
strategy_tier: A
investment_tier: Low
league: '0.5'
patch: 0.5.3
league_phase: Mid
confidence_level: Medium
---

# Fragment Supply Farming

Đứng phía cung thị trường fragment 0.5: farm content gốc nhả fragment rồi bán cho đám boss-rusher đập :wiki-link{url="https://www.poe2wiki.net/wiki/Breachstone"}, gom :wiki-link{url="https://www.poe2wiki.net/wiki/Origin_Cradle"}/:wiki-link{url="https://www.poe2wiki.net/wiki/Origin_Spark"} mở Arbiter of Divinity, hay nhồi :wiki-link{url="https://www.poe2wiki.net/wiki/Simulacrum_Splinter"} vào Realmgate. Tier A, investment Low. Build companion pack Spirit Walker Lv94: ~6.5-8.5 div/giờ trong cửa sổ Faded Crisis hiện tại, ~4-6 div/giờ baseline sau đó (poe2scout 2026-06-11, 1 Divine = 124 Exalted Orb).

## Strategy Overview

Cung side chọn nguồn có ratio (giá fragment) / (thời gian farm + cost juice) cao nhất ở từng thời điểm — phải re-pick theo sóng mỗi tuần thay vì set-and-forget. Nguyên tắc: Δ7d trên poe2scout > +50% là sóng cầu, swap sang nguồn đó ngay; Δ7d < -10% là saturated, swap sang nguồn khác.

Nguồn **Breach** dày nhất. Release notes 0.5.0: "Killing monsters in a Breach now drops Hiveblood and Wombgifts and Breachstone Splinters" và "Breachstone splinters turn into a special wombgift when fully stacked. This can be turned in at the Genesis Tree to create a Breachstone." Khi Breach stabilise, Vruun spawn thêm một cục drop cuối. Wombgift thường + Hiveblood là nguyên liệu craft Genesis Tree (Catalyst + base ring/amulet/belt mới — Catalyst 0.5 chỉ ra từ đây, không drop từ monster nữa). Breachstone 56 ex avg (~0.45 div), Δ7d +11%, vol 16.4k/ngày (2026-06-11). Bán splinter raw 0.127 ex/cái ratio xấu — đường có lãi là gom đủ stack convert Breachstone.

Nguồn **Citadel mới** (Origin) đắt nhất. Cradle 362 ex avg (~2.92 div), Spark 292 ex avg (~2.35 div), cả hai Δ7d +12-13%, vol 31-33k/ngày. Boss Citadel nhả Cradle hoặc Spark tùy map.

Nguồn **Crisis Fragment** (citadel cũ → Arbiter of Ash): Faded Crisis từ Jamanra @ Copper Citadel 290 ex (~2.34 div), Δ7d **+237%** — sóng cầu. Weathered (Doryani) 99 ex Δ7d -20%, Ancient (Geonor) 58 ex Δ7d -20% — bỏ qua, giá đang trượt. Cung side chỉ farm Copper Citadel.

Nguồn **Delirium splinter** thanh khoản dày nhất: Simulacrum Splinter 1.92 ex avg, Δ7d +50%, vol 514k/ngày. Đỉnh là hoàn thành Simulacrum 7-wave (release note: "Completing a Simulacrum will now give you a key to face the new Delirium Pinnacle Boss") nhả key 620 ex (~5 div).

Hai nguồn bỏ qua: Kulemak's Invitation 8 ex quá thấp (nhặt thêm nếu đang chạy [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm), không đặt làm mục tiêu). An Audience with the King từ Ritual tribute sacrifice không list được trên chợ chính — tự dùng đập King lấy Head of the King (167 ex avg, ~1.35 div) nếu farm Ritual song song.

## Setup

### Atlas Passive Tree

Strategy tách theo session. Atlas master swap free trước mỗi map. Full atlas Aldur đủ 300+ point giữ cả hai cụm cùng lúc.

**Session Breach** — ba node trụ trong full Breach subtree quanh hub The Monastery of the Keepers:
- **Shape the Chains** — ba option; cung side chọn pack size: "Breaches have 15% increased Pack Size" → mob nhiều, splinter + Wombgift nhiều hơn.
- **Moment of Risk** — "Wombgifts have 5% chance to drop one Level higher per Explicit Modifier on the Map / Unstable Breaches spawn 2 additional Rare Monsters when Stabilised". Waystone 6-mod = +30% Wombgift level-up chance.
- **Breeding Program** — "100% increased chance to find selected Wombgifts". Chọn loại đang cần cho chuỗi craft Genesis Tree.

**Session Citadel** — cụm "Powerful Map Boss" trên atlas chính + node **Head of the Snake** (Doryani's Science tier 4): "Powerful Map Bosses have 5% chance when defeated to reveal a nearby Citadel".

**Session Crisis** — không cần cụm atlas riêng ngoài Citadel đã lấy. Giá trị nằm ở waystone roll prefix Waystone Drop Chance.

### Masters of the Atlas

Session Breach/Citadel dual: **Doryani's Science** với Head of the Snake — Powerful Boss của Breach map cũng proc reveal Citadel, hai nguồn cộng dồn passive trong cùng route. Session Crisis Copper Citadel: không đổi master.

### Tablets & Map Device

**Session Breach**: 3 :wiki-link{url="https://www.poe2wiki.net/wiki/Breach_Precursor_Tablet"} thường (~5-8 ex/cái, 10 uses ≈ 0.7 ex/map). Tablet cùng loại stack: "Tablets of the same type may now be used together to increase the amount of the league content that is spawned" — ba tablet cùng kiểu cộng số Breach/map lên 4-5. Unique :wiki-link{url="https://www.poe2wiki.net/wiki/Wraeclast_Besieged"} ([trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Wraeclast%20Besieged%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D)) "Breaches expand to at least 20 metres in radius" nếu budget cho.

**Session Citadel**: không cắm tablet vào Citadel run (area pinnacle riêng, tablet không áp). Travel giữa Citadel cắm 1 :wiki-link{url="https://www.poe2wiki.net/wiki/Overseer_Precursor_Tablet"} ([trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Overseer%20Tablet%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D)) (Empowers Map Boss) để kích Head of the Snake.

**Session Crisis**: 3 Tower tablet suffix Waystone Drop Chance. Wiki Crisis_Fragment xác nhận verbatim: "Increases to waystone drop chance (specifically #% increased Waystone Drop Chance stat only) affect the number of fragments that drop" — waystone phải roll prefix Waystone Drop, không phải item rarity hay quantity.

**Session Delirium**: 1 Delirium tablet rẻ (~1 ex)/map quanh hub Withered Willow. Waystone 6-mod chỉ đáng roll khi dồn splinter push Simulacrum key.

### Build Requirements

Baseline companion pack Spirit Walker Lv94, EHP ~12.7k, Zekoa carry:
- **Breach**: dễ nhất. Vruun pattern quay slam tránh được; cần ~5M boss DPS + 8k EHP. Build dưới sàn skip Vruun vẫn gom splinter.
- **Citadel**: boss Citadel mới ~60-90 giây, boss cũ (Jamanra/Doryani/Geonor) ~90-120 giây. Cần hạ trong 2 phút, không thì lỗ thời gian.
- **Simulacrum 7-wave**: khó nhất. Wave 5-6 spawn cluster rare buff; companion pack đủ Diff 1, không nổi Diff 2-3. Build zoom (Lightning Spear, Twister) đẩy được Diff 2.
- **Faded Crisis sweep**: Jamanra ~120 giây/lần với Spirit Walker, pace ~3-4 Faded/giờ so với 6-8 của build zoom.

## Gameplay

Mở session 2-3 giờ theo một nguồn, không nhảy — chuyển nguồn tốn ~10-15 phút setup, lỗ nhịp.

**Session Breach**: dò Breach tự nhiên, lao vào tâm mở rộng tới khi progress bar ~100%, đợi stabilise → Vruun spawn → dập → nhặt Wombgift + Hiveblood + splinter. Cuối map về Realmgate, mở Genesis Tree: splinter đầy stack đã gộp thành special wombgift thì turn in lấy Breachstone. Bán bulk khi đủ 30-50 cuốn qua TFT lot — giá thấp hơn trade2 ~5-10% nhưng bán vài phút, sit time bằng không.

**Session Citadel**: chạy map atlas hub liên tục, giết Powerful Map Boss, proc Head of the Snake reveal Citadel. Citadel mới thì chạy ngay, drop Cradle/Spark bán raw. Copper Citadel lộ ra thì chạy luôn (Faded 290 ex đang sóng). Stone và Iron skip — Weathered/Ancient đang trượt.

**Session Crisis (Copper Citadel only)**: waystone T16 6-mod prefix Waystone Drop Chance tối thiểu +95%, vào Copper Citadel, kill Jamanra, 1 Faded/kill. Pace ~3-4/giờ Spirit Walker. Check poe2scout Δ7d Faded trước session; khi về <+50% swap sang Citadel session ổn định.

**Session Delirium**: farm cụm Withered Willow, gom splinter bán bulk. Khi đủ 50 splinter thì push Simulacrum Diff 1 (~5-8 phút run) nhả 1 key 620 ex.

## Loot Breakdown & Economic Analysis

Snapshot poe2scout 2026-06-11, 1 Divine = 124 Exalted Orb:

- **Breachstone** — 56 ex (0.45 div) · Δ7d +11% · vol 16.4k
- **Origin Cradle** — 362 ex (2.92 div) · Δ7d +12% · vol 31k
- **Origin Spark** — 292 ex (2.35 div) · Δ7d +13% · vol 33k
- **Faded Crisis** — 290 ex (2.34 div) · Δ7d **+237%** · vol 28k (sóng cầu)
- **Weathered / Ancient Crisis** — 99 ex / 58 ex · Δ7d -20% cả hai · skip, giá trượt
- **Simulacrum Splinter** — 1.92 ex · Δ7d +50% · vol 514k
- **Simulacrum key** — 620 ex (5 div) · Δ7d +52% · vol 9k

Profit/giờ companion pack Lv94 (derivation):

- **Breach**: 4-5 maps/giờ × ~0.5-0.8 Breachstone/map × 0.45 div + rare drop + Wombgift/Hiveblood craft Genesis Tree → **4-6 div/giờ**. *Splinter stack size cho special wombgift: patch note không ghi số, cần log in-session để pin — con số này Low confidence.*
- **Citadel**: ~0.5-0.8 Citadel mới/giờ (5% reveal proc, ~10-15 Powerful Boss/giờ travel) × avg 327 ex (~2.64 div) gross − 30 ex juice ≈ 2.4 div/Citadel net + base map travel ~1-2 div/giờ → **3-5 div/giờ**.
- **Crisis Faded**: ~3-4 Jamanra/giờ × 290 ex − 15-25 ex juice/run → 810-1080 ex net ≈ **6.5-8.5 div/giờ** (đỉnh trong cửa sổ sóng hiện tại, cửa sổ 1-2 tuần).
- **Delirium splinter**: ~20-40 splinter/map × 6-8 maps/giờ × 1.92 ex → 2-4 div/giờ raw; push Simulacrum key net 524 ex/key cycle (~20-25 phút) cộng thêm 2-3 div/giờ → **4-6 div/giờ nếu push key**.

Build zoom (Lightning Spear, Twister): +2× map/giờ → 12-17 div/giờ tùy phân bổ session. Optimal tuần này: **Crisis Faded session** trong cửa sổ, sau đó **Citadel + Breach dual-session** (Breach map proc Head of the Snake cũng work, ~5-7 div/giờ cộng dồn).

## Failure Modes

- **Giá fragment sụp khi rusher đủ stock.** Faded Crisis +237% 7d là cầu spike — pattern league cũ: pinnacle key compress 40-60% trong 2-3 tuần khi pool rusher cạn. Khi Faded về mức Weathered (~99 ex), session rớt từ ~6.5-8.5 xuống 3-4 div/giờ. Breachstone +154% trong 9 ngày (22→56 ex) cũng sẽ fade khi rusher chuyển strategy. Cung side phải re-pick nguồn hàng tuần.
- **Head of the Snake proc rate có thể bị tinh chỉnh.** Nếu GGG nerf reveal rate từ 5% về 2-3%, Citadel encounter halve, session Citadel rớt từ 3-5 xuống 1.5-2.5 div/giờ.
- **Build floor không đồng đều ba session.** Breach thấp nhất (skip Vruun vẫn chạy được); Citadel đòi hạ boss trong 2 phút; Jamanra tốn ~120 giây với Spirit Walker. Build dưới sàn (<2M boss DPS) chỉ chạy được Breach thường, pace thấp.
- **Genesis Tree patch sensitivity.** Cơ chế splinter → special wombgift → Breachstone là mới, chưa có precedent — GGG hay tinh chỉnh trong 2-3 patch đầu. Nếu splinter drop rate giảm 30-50% qua hotfix, session Breach rớt từ 4-6 xuống 2-3 div/giờ.
- **Cửa sổ Crisis Faded ngắn.** Chạy 5-10 giờ mới break-even setup cost Copper Citadel. Vào session muộn sau khi Faded đã peak thì lỗ tương đối so với Citadel ổn định.

## Version History

- **0.5.3 (2026-06-19)** — Followers of the King in the Mists xuất hiện trong maze Crux of Nothingness, thêm combat khi rẽ qua. Drop rate Head of the King chưa xác nhận thay đổi; verify in-client và re-check giá Head sau vài ngày nếu cung dịch chuyển.
- **2026-06-12** — Soát toàn bài: sửa chuỗi splinter → special wombgift → Breachstone, gỡ claim không nguồn, align số Faded về 6.5-8.5 div/giờ theo math chain, thêm tablet setup session Delirium.
- **2026-06-11** — Initial draft. Snapshot giá poe2scout cùng ngày. Verbatim mechanic từ release notes 0.5.0.

## Relationships

- **synergizes_with** [Tablet Supply Farming](/farming/0-5-tablet-supply-farm): cùng phe cung farm-bán cho juicer, khác hàng (fragment vs tablet); đường travel của bên này tự gom hàng của bên kia.
- **synergizes_with** [Breach Rare Juice Farm](/farming/0-5-breach-rare-juice-farm): cùng nền Breach mechanic, Breach Rare Juice là tầng cao cấp (200% Delirium fog), cung side này là tầng thường investment Low.
- **synergizes_with** [Withered Willow Delirium Farming](/farming/0-5-withered-willow-delirium-farm): chia sẻ cụm map Delirium hub, splinter bulk farm chồng được với emotion + Raven-Touched Shard jackpot.
- **synergizes_with** [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm): Kulemak's Invitation đi kèm Abyssal boss kill nhưng giá quá thấp để farm chủ động — chạy Abyss strategy thì nhặt thêm Invitation, không đặt làm mục tiêu chính.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients): bối cảnh 0.5 endgame, hai-track Pinnacle (Crisis → Arbiter of Ash, Origin → Arbiter of Divinity mới).
