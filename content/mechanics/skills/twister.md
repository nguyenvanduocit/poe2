---
template: templates/mechanic-template.md
document_type: mechanic
title: Twister — Spear Wind Projectile Engine
status: draft
author: duocnv
created: '2026-05-19'
updated: '2026-05-20'
game: poe2
league: '0.5'
patch: 0.5.0
sub_class: skills
tags:
  - twister
  - whirling-slash
  - spear
  - projectile
  - wind
  - huntress
  - spirit-walker
  - poe2
  - mechanic
---

# Twister — Spear Wind Projectile Engine

:wiki-link{url="https://www.poe2wiki.net/wiki/Twister"} là spear attack skill tag Wind + Projectile + AoE + Duration trong POE2 patch 0.5, drop Tier 1 nên dùng được từ Act 1. Skill này không tự chạy — nó là half thứ hai của engine 2 tầng, half thứ nhất là :wiki-link{url="https://www.poe2wiki.net/wiki/Whirling_Slash"} (spawn Whirlwind), Twister đến và **consume Whirlwind** để nhân lên cả số lượng projectile lẫn damage multiplier. Hiểu Twister quan trọng vì 90% guide ngoài kia chỉ nói "scale projectile count" mà bỏ qua hai dòng wiki quyết định damage thật — hidden cap 0.66s same-target throttle, và sự khác biệt giữa "Gain" và "Convert" trong dòng elemental ground.

## How It Works

Twister sinh ra một tornado di chuyển forward erratically (lảo đảo random), blind enemy quanh nó, và **pierce all targets** (per gem text — luôn pierce, không cần support). Base attack damage scale theo gem level 80%→232% (lv 1→20), cast time = 80% base attack speed. Tornado tồn tại 3 giây với radius 0.5 metres, nảy quanh địa hình nếu chạm wall — đây là lý do build clear corridor map cực mạnh (tornado ping-pong trong hành lang hẹp) nhưng yếu trong open arena (tornado dissipate trước khi nảy về).

Cơ chế consume Whirlwind là trái tim damage:

> Consumes Whirlwinds to create an additional twister and deal 80% more damage per Whirlwind stage

Whirling Slash spawn Whirlwind có max 3 stage (mỗi spin successive đẩy stage lên 1). Khi Twister chạm vào Whirlwind 3-stage, consume xảy ra: spawn thêm 3 twister bổ sung (mỗi twister có +1 additional twister per stage), và mỗi twister gain 80% more damage per stage. Tức 1 base twister + 3 consumed twister = 4 twister total, multiplier damage compound:

- Twister 1 (base, no consume): 1× base damage
- Twister 2 (consume stage 1): 1.80× base damage
- Twister 3 (consume stage 2): 1.80² = 3.24× base damage
- Twister 4 (consume stage 3): 1.80³ = 5.83× base damage
- Sum: ~10.95× base damage cho cả 4 twister mỗi cast

Đây là endgame upper bound khi Whirling Slash đạt rank 3 trước mỗi Twister cast. Trong campaign Act 1 chưa có rank-up infrastructure (Rage Support + Rapid Attacks), Whirling Slash thường chỉ đạt stage 1-2 → multiplier chỉ ~2.8-6.04×.

Layer thứ hai là **elemental ground synthesis**:

> Passing over Elemental Ground Surfaces or Consuming an elemental Whirlwind will grant twisters extra damage of that element.
> Elemental twisters Gain 50% of damage as damage of the corresponding Type

Đọc kỹ chữ **Gain** — đây là added damage, không phải convert. Convert sẽ trừ physical damage trước rồi cộng cold; Gain leave physical intact rồi cộng cold separate. Vậy trên Chilled Ground, Twister damage = 100% physical (intact) + 50% cold (added) = effective 150% per twister, không phải "convert thành cold". Distinction này quyết định passive tree path: physical damage passive vẫn scale 100% trên base, cold passive scale phần 50% added. Stack cả hai layer tốt hơn dump tất cả vào cold-only.

Endgame math chain compound full setup (gem level 20 + 3-stage consume + Chilled Ground):

base_per_hit = spear_DPS × 232% × 1.5 (Chilled Ground gain) = spear_DPS × 3.48

per_cast_damage = base_per_hit × (1 + 1.80 + 3.24 + 5.83) = base_per_hit × 11.87 = spear_DPS × 41.3

Ví dụ spear endgame T2-T3 flat physical 300 base DPS → mỗi cast Twister gây ~12,400 raw damage trước crit / accuracy / resistance. Sau ~66% crit chance với 234% crit damage bonus, average damage multiplier ~2.54× → effective ~31,500/cast. Cast rate 0.8/s → Twister channel solo ~25,200 DPS trước Salvo proj count, frenzy stack, ascendancy owl feather. Sau full owl feather empower + Salvo +6 proj (clear context) → clear DPS ~280k. Vs single-target boss bị Salvo random direction discount → ~80-120k DPS. Đây là realistic post-correction estimate, không phải "500k S-tier T17" như nhiều build doc claim.

## Key Interactions

**Twister × Whirling Slash (engine pair)** — hidden gotcha là Twister consume **Whirlwind aura standing on ground**, không phải skill use moment. Whirling Slash spawn Whirlwind có duration; nếu cast Twister BEFORE Whirling Slash → no Whirlwind exist → no consume → base damage only. Sequence chuẩn: spin Whirling Slash 3 lần (rank up qua Rage / Rapid Attacks support), Whirlwind đứng 3-stage trên ground, RỒI cast Twister. Đây là why build feel clunky Act 1 — chưa có Rage support, mỗi rank-up cần 3 spin manual, mất 1.5-2 giây trước mỗi Twister cast.

**Twister × :wiki-link{url="https://www.poe2wiki.net/wiki/Salvo_Support"} (random direction trade-off)** — Salvo grant +2 projectile per seal, max 3 seal = +6 projectile khi full stack (6 giây để max). Build thường gọi đây là "backbone projectile count" — đúng cho clear, sai cho boss. Salvo gem text rõ:

> Projectiles from Supported Skills are fired in random directions

Implication: với boss single-target, P(projectile hướng boss) ≈ angular_size_boss / 360° ≈ 8-15% boss thường. Tức Salvo +6 contribute thực tế 0.5-1.0 hit/cast lên boss, không 6 hit. Boss DPS Salvo contribution rất khác clear DPS. Build claim "50-100 projectile boss damage" cần discount ~70-90% vs clear context.

**Twister × Spirit Walker owl feather (:wiki-link{url="https://www.poe2wiki.net/wiki/Primal_Bounty"} + The Mhacha's Gift)** — Primal Bounty grant 1 owl feather per 4 giây, max 3 feather, dodge roll expend 1 → empower next projectile skill. The Mhacha's Gift (notable enhance Primal Bounty) cho phép dodge expend up to 3 feather cùng lúc với 100% more empowerment per additional feather, và feather rate 50% faster (4s → 2.67s). Cycle endgame: 3 feather × 2.67s = 8s per full stack, dodge expend cả 3 → empowerment ×3 (compound add tuyến tính). Owl feather là scaler **DIRECT** cho Twister projectile count + speed — đây là lý do Spirit Walker ascendancy chosen over Deadeye cho Twister build.

Hidden gotcha: Mhacha "Dodging can expend up to 3 Owl Feathers" — dodge roll trigger, không phải skill use. Nếu player không dodge cadence ổn định → feather accumulate đến cap 3 rồi STOP generate. Boss fight cần dodge cadence match feather cycle (~8s) để maintain full empower window. Telegraph boss 10s pattern (Arbiter wave attack) fit cycle này naturally.

**Twister × Chilled Ground generation** — Twister gain 50% added cold damage TRÊN Chilled Ground, nên build cần reliable Chilled Ground generator. Build doc nhiều người claim :wiki-link{url="https://www.poe2wiki.net/wiki/Wake_of_Destruction"} unique boots — đây là lệch hướng. Wake of Destruction text:

> Drop Shocked Ground while moving, lasting 8 seconds

Shocked Ground (lightning ailment), không Chilled Ground. Đứng trên Shocked Ground → Twister gain +50% lightning damage, useless cho build cold scaling. Đúng hướng: :wiki-link{url="https://www.poe2wiki.net/wiki/Fangs_of_Frost"} (spear attack spawn Chilled Ground khi consume Parried Debuff — early campaign), hoặc Frost Nexus support gem chain freeze → spawn Chilled Ground sau ailment. Bỏ Wake of Destruction khỏi gear plan.

**Twister × Ice-Tipped Arrows (ice fragment engine)** — Khi Ice-Tipped Arrows empower Barrage (hoặc projectile spear attack) rồi bắn Twister, mỗi hit của Twister lên enemy sẽ drop Ice Fragments trên ground. Những mảnh băng này nổ gây sát thương cold + shatter potential, đặc biệt mạnh khi kết hợp :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"} (chuỗi nổ khi quái bị freeze). Đây là lý do clear "bỗng nhiên dễ chịu và visually satisfying" sau Act 2 pivot — Twister không chỉ là projectile gió mà còn là nguồn trigger hàng loạt ice explosion. Playtest cho thấy ngay cả khi không chủ động tạo Chilled Ground, fragment từ Twister hit vẫn tạo hiệu ứng chain mạnh.

## Hidden Cap — Same-Target Throttle 0.66s

Dòng wiki không có trong 95% build guide ngoài kia, nhưng phá hoàn toàn thesis "stack projectile vô tận = boss DPS infinite":

> Twisters fired at the same time can Hit the same target no more than once every 0.66 seconds.

Implication math: với cast rate 0.8/s (cast time ~1.25s), mỗi cast spawn 10-15 twister (Salvo +6 full stack + 3-stage consume + owl feather +6). Vs boss, throttle 0.66s = 1.515 hit/giây max per twister batch. Effective hit rate = min(cast_rate, throttle_rate) × P(proj hướng boss) ≈ 0.8 × 0.10 = 0.08 hit boss/s per twister, multiply with 15 twister = 1.2 boss hit/s.

Twister damage per boss hit (endgame Chilled Ground, no crit): ~12,400 raw → boss DPS Twister floor ~14.8k. Sau crit (×2.54), Wrath aura, Frenzy charge, Power Charge stack, curse Critical Weakness → realistic endgame boss DPS Twister channel ~80-150k. Không phải 500k+ như viral build claim.

Counter-argument: cap text nói "fired at the **same time**". Nếu Barrage skill chia projectile thành waves rời rạc (each wave fire 0.1s sau wave trước), throttle có thể reset per wave (twister-ID khác nhau giữa waves). Cần test live game in-PoB để confirm. Đây là devil's advocate counter quan trọng nhất — chưa có patch 0.5 launch data để verify (snapshot wiki 2026-05-18, patch drop 29 May 2026).

## Common Mistakes

**Sai 1: Đặt Whirling Slash level cao endgame.** Đúng: keep Whirling Slash **level 1** trong endgame. Lý do: Whirling Slash chỉ làm engine spawn Whirlwind cho Twister consume, không scale damage thật sự. Level cao chỉ tăng mana cost + cast time + tooltip damage không relevant.

**Sai 2: Cast Twister trước Whirling Slash trong rotation.** Đúng: spin Whirling Slash 3 lần (rank 3 Whirlwind) → Twister cast → consume → 4 twister damage compound. Lý do: Twister consume **existing Whirlwind aura** trên ground, không tự spawn Whirlwind. Cast trước = no consume = base damage only.

**Sai 3: Stack projectile count để boss DPS scale linear.** Đúng: stack projectile cho clear, scale projectile **speed** + **damage per twister** cho boss. Lý do: Salvo fire random direction (boss DPS discount ~70-90%) + 0.66s throttle cap (limit hit rate per twister). Boss damage thực tế từ multiplier ascendancy + crit + curse, không từ count.

**Sai 4: Dùng Wake of Destruction để spawn Chilled Ground.** Đúng: Wake of Destruction spawn Shocked Ground (lightning), không Chilled. Dùng Fangs of Frost (Act 1) hoặc Frost Nexus support gem chain freeze. Lý do: Twister gain element theo ground type — Shocked Ground → lightning gain (useless cho cold build), Chilled Ground → cold gain.

**Sai 5: Bỏ build vì Act 1 feel clunky.** Đúng: stick với combo timing đến Act 2 pivot Ice-Tipped Arrows + Combat Frenzy. Lý do: Act 1 chưa có rank-up infrastructure (Rage Support, Rapid Attacks), spin manual mất 1.5-2s mỗi Twister cast — feel chậm. Act 2 pivot biến 5-button combo nặng tay thành 3-button rotation smooth.

## What Doesn't Work

Twister **không scale theo attack speed** cho purpose damage — attack speed chỉ giảm cast time tooltip, không tăng damage per cast. Đây là why weapon set 1 (Twister damage) ưu tiên flat physical + flat cold + crit, weapon set 2 (Whirling Slash engine) ưu tiên attack speed.

Twister **không trigger ailment qua Hit** trên elemental ground gain — phần 50% added element là Gain (added damage), không tạo separate ailment opportunity. Tức Twister trên Chilled Ground không freeze enemy reliably qua 50% cold layer; cần freeze build-up từ source khác (Freezing Mark curse, Frostbolt support, Ice Crash combo).

Twister **không synergy với attack speed support cho damage** — Marshall Tempo / Rapid Attacks không scale Twister damage, chỉ scale Whirling Slash. Đây là lý do support gem chia tách: damage support trên Twister socket (Acceleration, Persistence, Retreat), attack speed support trên Whirling Slash socket (Rapid Attacks, Marshall Tempo, Pursuit).

Twister **không scale từ "Gain X% of Damage as extra Y" modifier** trên elemental gain layer cụ thể — modifier class này apply trên base hit, không double-dip với gain-as-element. Implication: avoid Xoph's Pyre hoặc similar gain-as-extra unique cho purpose multiply Twister elemental gain.

## Summary

- Twister = projectile spell tag Spear + Wind + AoE, base damage 80%-232% scale theo gem level. Endgame chỉ relevant khi Whirling Slash spawn Whirlwind 3-stage trước mỗi cast.
- Consume cơ chế: 1 base + 3 add twister, compound multiplier (1.80)³ = 5.83× cho twister cuối. Tổng 11.87× base damage per full-stack cast.
- "Gain 50% as element" trên Chilled Ground là **added damage** (Gain), không convert. Physical scaling vẫn 100% on base.
- Hidden cap 0.66s same-target throttle khoá boss DPS — projectile count stack cho clear, không cho boss. Boss DPS scale qua damage per twister + crit + curse, không qua count.
- Spirit Walker owl feather (Primal Bounty + The Mhacha's Gift) là direct projectile count + speed scaler cho Twister, cycle 8s per full empowerment qua dodge roll. Cadence dodge boss telegraph match feather cycle naturally.

## Version History

### Patch 0.5.0 (2026-05-29 — pre-launch, wiki snapshot 2026-05-18)

- Twister tag `Wind` thêm vào từ 0.4.0 — synergy với Spirit Walker class (multiple notable interact with Wind tag).
- Spirit Walker ascendancy mới ra, featured "Stormbringer" build trong reveal trailer — confirm endgame viable.
- Combat Frenzy đã nerf 3 patch liên tiếp (0.1.0e 3s → 7s, 0.2.0 2.48s → 5.3s, 0.3.0 5.3s → 7.3s). Trend nerf khả năng tiếp tục patch 0.5/0.6 — build dependent Combat Frenzy cho frenzy charge feed Barrage không safe.
- **2026-05-20 update:** Thêm tương tác Twister × Ice-Tipped Arrows (Twister hit drop Ice Fragment gây chain explosion với Herald of Ice) từ playtest Lolcohol video. Xác nhận vấn đề arena lớn (twister dissipate) và Spirit Walker owl feather fix.

### Patch 0.3.0

- Twister buff damage 72-190% → 80-232% base (current endgame scaling).

### Patch 0.2.0b

- Hotfix bug "extra 50% per projectile" — element gain ngày trước là 50% per proj, giờ chỉ 1 lần per cast.

### Patch 0.2.0

- Twister introduced. Whirling Slash introduced.

## Relationships

- **used_by** [Twister Huntress — Ice-Tipped Arrow Starter](/builds/huntress/0-5-twister-huntress-starter) — Build dùng Twister làm primary damage skill — toàn bộ DPS chain phụ thuộc vào Whirlwind consume engine + Spirit Walker owl feather scaling
