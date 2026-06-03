---
archetype_version: 2.0.0
archetype_id: build-archetype
document_type: build
title: Meteor Bear Shaman
class: Druid
ascendancy: Shaman
league: '0.4'
patch: 0.4.0
status: published
author: CaptainLance9 (Primary) / NickTew / Palsteron / Carnarius
created: '2025-12-17'
updated: '2025-12-22'
budget_tier: league-starter
build_tags:
  primary_skill: Walking Calamity
  secondary_skill: Furious Slam + Ancestral Cry
  damage_type: Fire/Elemental
  playstyle: Swipe-Swipe-Slam Shapeshifter
  content_focus: Allrounder
tags:
- poe2
- druid
- shaman
- bear
- walking-calamity
- meteor
- rampage
- furious-slam
- rage
- fire
- elemental
- auto-bomber
- league-starter
- beginner-friendly
template: templates/build-template.md
---

# Meteor Bear Shaman

## Mục Lục

1. [Quick Start](#quick-start)
2. [Leveling Guide](#leveling-guide)
3. [Early Maps (T1-10)](#early-maps-t1-10)
4. [Endgame (T11+)](#endgame-t11)
5. [Advanced & Variants](#advanced--variants)
6. [Reference](#reference)

## Quick Start

### Identity

| Attribute | Value |
|-----------|-------|
| **Primary Skill** | Walking Calamity (40 sec meteor rain) |
| **Secondary Skills** | Furious Slam + Ancestral Cry |
| **Damage Type** | Fire / Elemental |
| **Playstyle** | Swipe-Swipe-Slam Shapeshifter |
| **Budget Tier** | League Starter (0 → 50+ divine scalable) |

### Core Loop

```
Activate Walking Calamity → Swipe, Swipe, SLAM → Meteors rain for 40 seconds
                                    ↓
                    Ferocious Roar → Ancestral Cry → 60% MORE damage
```

**Walking Calamity** gọi meteors từ trời **37+ giây** (với weapon swap duration). **Ancestral Cry** tạo spectral bears khi Maul + boost Furious Slam damage 60%.

### Pros & Cons

| Ưu Điểm | Nhược Điểm |
|-----------|--------------|
| League start 0 currency | Melee positioning cho Slam |
| 37+ sec Walking Calamity uptime | Weapon swap setup phức tạp |
| Excellent scaling (66k+ DPS endgame) | Defense cần investment |
| Punchy gameplay (2-4M hits) | M+KB có bug với Ancestral Cry |
| Best leveler in PoE2 | Spirit management với Lord of Wilds |

### Navigation

- **Bắt đầu chơi?** → [Leveling Guide](#leveling-guide)
- **Đang map T1-10?** → [Early Maps](#early-maps-t1-10)
- **T11+ hoặc stuck?** → [Endgame](#endgame-t11)
- **Min-max / Demon Bear?** → [Advanced](#advanced--variants)

## Leveling Notes
> *Source: [P4wnyhof Bear Druid Starter](https://www.youtube.com/watch?v=yWa4ZdQ1pgQ)*

### Act 1: Nền Tảng Bear Form

#### Bắt Đầu Game

Khi vào game, nhặt talisman đầu tiên và chọn **Bear Form**. Bear form cho bạn skill **Maul** làm basic attack.

#### Skills Act 1

**Maul (Basic Attack)**
```yaml
Rage: +5 per hit
Max Rage: 30 (ban đầu)
Mỗi 1 rage = 1% more damage
```

**Furious Slam (Tại Renley)**
```yaml
Chi phí: 10 rage per slam
QUAN TRỌNG: Damage scale theo CURRENT rage
  - 30 rage slam >> 10 rage slam
  - Build rage TRƯỚC, slam khi full
```

**Pounce (Sau Rusty King)**
- Movement skill - nhảy đến vị trí
- Dùng được trong Bear form

**Shockwave Totem (Sau Rusty King)**
- Tự động slam liên tục
- Trigger fissures = bonus damage

**Herald of Ash (King of the Mist)**
- Chọn Herald of Ash, KHÔNG Savage Fury
- Clear speed quan trọng hơn boss damage lúc này

#### Rage Management - KỸ NĂNG QUAN TRỌNG NHẤT

```
Rotation cơ bản:
  Maul x6 → 30 rage (FULL) → Furious Slam → 20 rage
  Maul x2 → 30 rage → Furious Slam → 20 rage
  Repeat...

Mẹo: Đếm trong đầu "1, 2, 3, 4, 5, 6 - SLAM!"
```

#### Support Gems Act 1

| Skill | Support 1 | Support 2 |
|-------|-----------|-----------|
| Furious Slam | Rapid Attacks | Fist of War |
| Maul | Rage 1 | Rapid Attacks 1 |
| Pounce | Fist of War | Rage 1 |
| Shockwave Totem | Rapid Attacks 1 | Prolonged Duration |

#### Boss Rotation Act 1

```
1. Đặt Shockwave Totem
2. Pounce vào boss
3. Maul 6 lần → Full rage
4. Furious Slam
5. Maul 2 lần → Slam
6. Repeat
```

### Act 2: Ascension Đầu Tiên

#### Mục Tiêu

| Ưu tiên | Việc cần làm |
|---------|--------------|
| 1 | Farm Temple of the Val - 3 sockets mỗi skill |
| 2 | **Ascend level 22 → Lấy Furious Wellspring** |
| 3 | Thêm Ferocious Roar vào rotation |

#### Furious Wellspring - NODE QUAN TRỌNG NHẤT

```yaml
Hiệu ứng:
  - 6% rage regen per second (base)
  - XÓA rage decay hoàn toàn
  - Mana regen → Rage regen
  - +20 maximum rage

TRƯỚC: Rage decay, phải liên tục Maul
SAU: Rage TỰ ĐỘNG regenerate, chuẩn bị cho Walking Calamity
```

#### Ferocious Roar

```yaml
Supports: Armor Demolisher + Tireless
Công dụng: Break armor của enemy trước khi Slam
```

#### Support Gems Update

| Skill | Socket 1 | Socket 2 | Socket 3 |
|-------|----------|----------|----------|
| Furious Slam | Rapid Attacks | Fist of War | Soul Apparatus |
| Pounce | Fist of War | Rage 1 | Crater |

### Act 3: Power Spike

#### Fury of the Mountain - điểm làm build bật lên

```yaml
Thay thế Maul làm basic attack

Stats:
  - 80% physical → fire conversion
  - Tạo Fissure mỗi hit (+3 rage per fissure triggered)
  - Maximum 12 fissures

Chain Reaction:
  4 hits → 4 fissures → Totem slam → +12 rage
  = Rage KHÔNG BAO GIỜ hết
```

**Setup:**

| Socket 1 | Socket 2 | Socket 3 |
|----------|----------|----------|
| Rage 1 | Rapid Attacks | Elemental Armament |

#### Gameplay Mới

```
TRƯỚC (Act 1-2):
  Maul x6 → Furious Slam → Maul x2 → Slam...

SAU (Act 3+):
  Fury of the Mountain x4 → Đặt Totem → Spam Furious Slam
  (Rage tự replenish từ fissures)
```

#### Rampage (Level 38-42)

```yaml
Channel skill - chạy về phía trước, destroy mọi thứ
Supports: Momentum + Burgeon

Ưu điểm: Clear speed cực nhanh
Nhược điểm: Phải walk back pick loot

Nếu thấy annoying → Skip, stick với Furious Slam
```

### Act 4: Damage Explosion

#### Rage Forged - MAJOR UPGRADE

```yaml
Cách lấy:
  1. Currency Exchange → Greater Jeweler's Orb (~2 exalted)
  2. Add socket cho Furious Slam
  3. Socket Rage Forged

Effect:
  - Slam costs 20 rage (thay vì 10)
  - Spend 15+ rage → 1 Endurance Charge
  - 1 Endurance → 2 Jagged Grounds
  - Totem slam Jagged Grounds = MASSIVE damage
```

#### Talisman Crafting (6 Exalted → 400+ DPS)

> **Chi tiết:** Xem [Talisman Crafting Guide](/mechanics/crafting/talisman-crafting) cho hướng dẫn đầy đủ từ budget đến min-max.

```yaml
1. Tìm Magic Talisman với 61%+ increased physical
2. Mua Greater Essence of Abrasion (~4 exalted)
3. Apply → ~300% increased physical damage
4. Desecrate (optional) → ~316% total
```

### Interlude: Walking Calamity Online

#### Priority Tasks

| Thứ tự | Địa điểm | Phần thưởng |
|--------|----------|-------------|
| 1 | Crier Village | +25 Spirit (total 100) |
| 2 | Kima | Tibana's Pillar (elemental res) |
| 3 | Hoàn thành Act 3 | Walking Calamity unlock |

#### Walking Calamity (Level 52)

```yaml
Hiệu ứng:
  - 20 small meteors per second
  - 1 large meteor per 20 small
  - Duration: 10 giây (base)
  - AUTO-TARGET enemies

Cách charge Glory:
  1. Đạt maximum rage
  2. Tiếp tục generate rage
  3. Excess rage → Glory
  4. 50 Glory → Walking Calamity ready

Supports: Concentrated Area + Prolonged Duration + Elemental Armament
```

#### Ancestral Cry Integration

```yaml
Socket vào Ferocious Roar (thay Armor Demolisher)

Cách hoạt động:
  - Walking Calamity ignite enemies
  - Ignites charge Ancestral Cry Glory
  - Ferocious Roar trigger Ancestral Cry
  - "Steps count as slams" → Walking = triggering fissures
```

### Trial Milestones (Updated)

| Trial | Level | Node | Effect |
|-------|-------|------|--------|
| Normal | ~22 | **Reactive Growth** | 30% less damage from recent damage types |
| Cruel | ~35 | **Furious Wellspring** | Respec từ RG → FW khi có Walking Calamity (52) |
| Merciless | ~50 | **Wisdom of the Magi** | Bonded mods give extra benefits |
| Eternal | ~60 | Reactive Growth (back) | Lấy lại node defense |

**Lưu ý:** Reactive Growth TRƯỚC cho leveling defense. Swap sang Furious Wellspring khi đạt level 52 và có Walking Calamity.

### Full Build Rotation (Post-Leveling)

**Mapping:**
```
1. Vào map, rage tự build
2. Glory đầy → Activate Walking Calamity
3. RUN qua map - meteors tự kill
4. Ferocious Roar khi cần
5. Rampage/Slam cho tanky enemies
6. Re-activate Calamity khi hết
```

**Bossing:**
```
1. Pounce vào boss
2. Fury of the Mountain x4 → 12 fissures
3. Đặt Shockwave Totem
4. Ferocious Roar (Ancestral Cry)
5. Walking Calamity → Activate
6. Furious Slam spam / Rampage
```

## Early Maps (T1-10)

### Gear Checklist

| Slot | Target | Priority |
|------|--------|----------|
| **Weapon** | High physical DPS, attack speed | 1 |
| **Chest** | Life + Armor + Resistances | 2 |
| **Rings** | Mana regen 50%+ each | 3 |
| **All slots** | 75% resistances, 2500+ life | 4 |

### First Upgrade: Cotor of Crimson (15c-1d)

```yaml
Effect: Life overflow via leech
Setup:
  - Equip Cotor chest
  - Put Life Leech 3 on Slam/Rampage
  - Stack life và armor

Result: 3.5k base life → 7k+ effective HP khi leeching
```

### Weapon Upgrade: Perfect Essence of Battle

```yaml
Cost: 50c-1d
Effect: +5 to Attack Skills
Application: Use on any decent physical talisman
```

### Basic Rotation

```yaml
Mapping:
  1. Walking Calamity active
  2. Run through packs
  3. Slam/Rampage tanky rares
  4. Re-activate when duration ends

Tips:
  - KHÔNG fight mà không có Calamity
  - Watch duration bar
  - Meteors có range xa
```

### Defense Basics

```yaml
Target Stats:
  - 75% all resistances
  - 3000+ life
  - Cotor + Life Leech active

Flasks:
  - Life flask (instant recovery nếu có)
  - Quicksilver
  - Granite/Jade
```

### Passive Tree Focus

| Priority | Nodes |
|----------|-------|
| 1 | Rage nodes (max rage, rage on hit) |
| 2 | Life (flat + %) |
| 3 | Armor nodes |
| 4 | Stun threshold |

## Endgame (T11+)

### Core Mechanics Deep-Dive

#### Rage System (Updated Formula)

```yaml
Base: 1 Rage = 1% Increased Attack Damage
Max Rage Pool: 90+ (endgame với Battle Trance + weapon implicit)

CRITICAL FORMULA:
  Rage Regen = 6% of Max Rage × Mana Regen Rate

Ví dụ:
  - 6% of 90 max rage = 5.4 base rage/sec
  - Với 200% mana regen rate = 10.8 rage/sec
  - Với 400% mana regen rate = 21.6 rage/sec → đủ giữ nhịp chơi mượt
```

#### Scaling Max Rage

| Source | Max Rage |
|--------|----------|
| Primal Rage (notable) | +10 |
| Battle Trance (notable) | +10 |
| Weapon implicit | +10-15 |
| Small passives | +2-4 each |
| Ascendancy | +20 (Furious Wellspring) |

**Target:** 90+ max rage cho smooth Walking Calamity cycling.

#### Scaling Mana Regen Rate

| Source | Mana Regen |
|--------|------------|
| Scepter (rare) | 60% |
| Ring (rare) | 60% each |
| Defiance of Destiny | 30% |
| Vial (Act 3) | 30% |
| Clarity aura | 30% |

**Target:** 200%+ mana regen rate → 20+ rage/sec.

#### Glory System

```
1. Build rage to MAXIMUM
        ↓
2. Continue gaining rage (at max)
        ↓
3. Excess rage → GLORY
        ↓
4. 50 Glory → Walking Calamity available
        ↓
5. Cast → Duration → Meteors rain
```

#### Walking Calamity Tags - CRITICAL

```yaml
✅ IS an Attack skill → +levels to Attack Skills WORKS
❌ NOT a Melee skill → +levels to Melee Skills does NOT work

Scales with:
  - Weapon damage
  - Fire/elemental damage
  - Attack skill levels
```

#### Rampage vs Furious Slam

| Aspect | Rampage | Furious Slam |
|--------|---------|--------------|
| DPS | Higher | Lower |
| Mobility | Moves while attacking | Stationary |
| Infernal Cry | Snapshots ENTIRE duration | Only 1 hit |
| Best Supports | Burgeon, Momentum | Fist of War, Aftershock |

**Khuyến nghị:** Rampage cho bossing (Infernal Cry snapshot), personal preference cho mapping.

#### Embitter Tech - 69% Free Damage

```yaml
Setup:
  1. Put Embitter support on Maul
  2. Maul freezes enemy
  3. Gain: 1% damage as cold PER RAGE

Result với 69 rage: 69% of damage as extra COLD
Cost: ~1 divine
```

### Ascendancy Details (Endgame)

| Lab | Node | Effect |
|-----|------|--------|
| Normal | **Reactive Growth** | 30% less damage from specific damage types |
| Cruel | **Furious Wellspring** | 6% max rage regen/sec, scales with mana regen |
| Merciless | **Wisdom of the Magi** | Bonded mods give extra benefits (see below) |
| Eternal | Reactive Growth (2nd point) | Hoặc Druidic Champion nếu cần spell |

#### Wisdom of the Magi Benefits

Mọi rune trong build đều có bonus:
- **Scepter runes**: 30% skill speed (từ 3 runes)
- **Resistance runes**: +10 all res (thay vì +5)
- **Life runes**: 50 flat life + equivalent to expensive soul cores
- **Weapon runes**: Gain phys, gain chaos, frenzy/power charges

**Result:** Faster attacks, easier resistances, cheaper gearing.

### Weapon Swap System (Advanced)

**CRITICAL MECHANIC** cho endgame optimization. Dùng 2 weapon sets để snapshot duration buffs.

```yaml
Weapon Set 1 (RED passives):
  - Combat tree: Rage, damage, armor nodes
  - Dùng khi ĐÁNH

Weapon Set 2 (GREEN passives):
  - Duration tree: Chronomancy, Protraction, Made to Last, Lasting Incantations
  - Dùng khi CAST buffs (Walking Calamity, Savage Fury, Ancestral Cry)
```

#### Duration Gains

| Skill | Without Swap | With Swap | Gain |
|-------|--------------|-----------|------|
| Walking Calamity | ~21 sec | ~37 sec | +76% |
| Savage Fury | ~15 sec | ~35 sec | +133% |
| Ancestral Cry | ~15 sec | ~35 sec | +133% |

#### Rotation với Weapon Swap

```
1. Weapon Set 2 (Green) → Activate Walking Calamity
2. Weapon Set 2 → Ferocious Roar (Ancestral Cry)
3. Weapon Set 2 → Savage Fury
4. Weapon Set 1 (Red) → Combat (Maul, Furious Slam)
5. Repeat khi buffs hết
```

#### M+KB Bug Workaround

```yaml
Vấn đề: Ancestral Cry tắt ngay khi swap weapon

Fix:
  1. Set Ancestral Cry = BOTH weapon sets
  2. Set Pounce = Weapon Set 2 ONLY
  3. Khi thấy Pounce active → đang ở Set 2
  4. Activate Ancestral Cry → swap về Set 1 → buff không tắt

Controller: Không có bug này, hoạt động bình thường
```

**Lưu ý:** Nếu không muốn weapon swap phức tạp, chỉ dùng RED passives và skip duration optimization.

### Ancestral Cry System

**MAJOR DPS BOOST** - 60% more damage khi active.

```yaml
Cách hoạt động:
  1. Walking Calamity IGNITE enemies
  2. Ignites generate GLORY cho Ancestral Cry
  3. Ferocious Roar TRIGGERS Ancestral Cry khi glory đủ
  4. Buff active → Spectral bears + Ancestrally boosted slams

Hiệu ứng khi active:
  - Maul tạo 2 SPECTRAL BEARS swiping cùng bạn
  - Furious Slam = ANCESTRALLY BOOSTED
  - Fist of War 3 proc = 60% MORE damage
```

#### Làm sao biết Ancestral Cry sẵn sàng?

```yaml
1. Đặt Ancestral Cry skill lên hotbar (không cần click trực tiếp)
2. Khi glory đủ → Vòng VÀNG xung quanh icon
3. Ferocious Roar → Activate Ancestral Cry
4. Thấy Fiery Armor trên character = buff active
```

#### Support Gems cho Ancestral Cry

| Support | Effect |
|---------|--------|
| Raging Cry | Extra rage generation |
| Duration 2 | Longer uptime |
| Heightened Charges | 3 endurance charges = +1 minute duration (20% chance) |
| Efficiency 2 | Less mana cost |

#### Ignite Sources

| Source | Notes |
|--------|-------|
| Walking Calamity | Primary ignite source |
| Zoff's Pyre (lineage) | Additional ignites |
| Ignite 3 (budget) | Works fine for generating glory |

### Full Skill Gem Setup (Endgame)

#### Maul (Main Attack)

| Endgame | Budget Alternative |
|---------|-------------------|
| Beta's Vengeance | Rage 3 |
| Embitter | Heft |
| Freeze | Close Combat 2 |
| Blazing Critical | - |
| Rapid Attacks 2 | Rapid Attacks 2 |

**Key:** Embitter + Freeze = 69% extra cold damage (1% per rage).

#### Walking Calamity (6L)

| Endgame (Lineage) | Budget Alternative |
|-------------------|-------------------|
| Zoff's Pyre | Ignite 3 |
| Rigald's Ferocity | Elemental Armament 2 |
| Rakiata's Flow | Fire Penetration 2 |
| Concentrated Area | Concentrated Area |
| Prolonged Duration 2 | Prolonged Duration 2 |

**Key:** Zoff's Pyre cho ignites → charge Ancestral Cry.

#### Furious Slam (6L)

| Endgame (Lineage) | Budget Alternative |
|-------------------|-------------------|
| Garukhan's Resolve | Rapid Attacks 2 |
| Close Combat 2 | Close Combat 2 |
| Aftershock 2 | Aftershock 2 |
| Magnified AoE 2 | Magnified AoE 2 |
| Fist of War 3 | Fist of War 2 |

**Key:** Fist of War 3 với Ancestral Cry = 60% MORE damage mỗi slam.

#### Ferocious Roar (Ancestral Cry Setup)

| Support | Effect |
|---------|--------|
| Raging Cry | Extra rage gen |
| Ancestral Cry | **CORE** - 60% more damage |
| Prolonged Duration 2 | Longer buff duration |
| Heightened Charges | +1 min duration từ endurance charges |
| Efficiency 2 | Less mana cost |

#### Pounce (Utility)

| Support | Effect |
|---------|--------|
| Mark of Siphoning 2 | Life + Mana leech |
| Eternal Mark | Mark stays after consume |
| Freezing Mark | Gain cold damage |
| CDR 2 | More frequent pounce |
| Holy Descent | Conc ground + curse reduction |

#### Herald of Ice (Clear)

| Support | Effect |
|---------|--------|
| Far Combat 2 | Explosion range |
| Armour Explode | Explode on kill |
| Magnified AoE 2 | Larger explosions |
| Uruk's Smelting | More damage |
| Armour Break 3 | Armor shred |

**Alternative:** Herald of Ash cho budget (feels good toàn bộ progression).

#### Malice (Scepter Aura)

| Support | Effect |
|---------|--------|
| Duration 2 | Higher crit stacks |
| Clarity 1 | Mana regen (nếu đủ spirit) |

#### Savage Fury (Buff)

| Support | Effect |
|---------|--------|
| Duration 2 | 35 sec duration với weapon swap |

**Note:** Savage Fury có thể equip ở weapon set 2 = FREE reservation (bug/feature).

#### Spirit Reservations

| Skill | Spirit (với Lord of Wilds) | Priority |
|-------|---------------------------|----------|
| Malice | 60 (30 base × 2) | Core |
| Charge Regulator | 60 (30 base × 2) | Defense |
| Herald of Ice | 60 (30 base × 2) | Clear |
| Savage Fury | FREE (weapon set 2) | Damage |

**Total Spirit Needed:** 180 (140 minimum).

#### Gem Enthusiast Trick

```yaml
Socket: Fury of the Mountain (KHÔNG dùng skill)
Purpose: Activate "5 green gems = 5% movement speed"

Fury of the Mountain supports:
  - Momentum
  - Close Combat
  - Rapid Attacks 2

→ Just for activating Gem Enthusiast node, không dùng skill.
```

### POB Stats (Level 95 Endgame)

```yaml
Offensive:
  Combined DPS: 66,288
  Attack Speed: 2.61/sec
  Crit Chance: 15.84%
  Crit Multiplier: 390%
  Hit Chance: 99%

Defensive:
  Life: 3,582
  Armour: 9,634
  Energy Shield: 286
  Mana: 631
  Mana Regen: 61.1/sec

Resistances:
  Fire: 75% (capped)
  Cold: 75% (capped)
  Lightning: 71%
  Chaos: 75% (capped)

Keystones:
  - Iron Reflexes
  - Lord of the Wilds
  - Scarred Faith
  - Zealot's Oath
```

### Gear Progression

#### Endgame Gear (From POB)

| Slot | Item | Type | Priority |
|------|------|------|----------|
| **Weapon** | Maji Talisman | Rare | **#1 - MOST IMPORTANT** |
| **Offhand** | Omen Sceptre | Rare | Malice aura, skill speed |
| **Body** | Morior Invictus | Unique | Life + All Res + flex |
| **Amulet** | Defiance of Destiny | Unique | Shotgun immunity |
| **Belt** | Headhunter | Unique | Luxury minmax |
| Helmet | Imperial Greathelm | Rare | Life + Res |
| Gloves | Massive Mitts | Rare | Life + Leech |
| Boots | Ornate Greaves | Rare | Life + Move Speed |
| Rings | Sapphire/Ruby Ring | Rare | Mana Regen + Res |
| Flask 1 | Ultimate Life Flask | Magic | Instant recovery |
| Flask 2 | Lavianga's Spirits | Unique | Mana sustain |
| Charm 1 | The Fall of the Axe | Unique | - |
| Charm 2 | Rite of Passage | Unique | Life + Stun |
| Charm 3 | Thawing Charm | Magic | Freeze immunity |

#### Maji Talisman (Weapon) - CRITICAL

```yaml
REQUIRED Mods:
  - Max Rage implicit (+10-15)
  - High physical damage
  - +attack skills

IMPORTANT Runes:
  1. +1 level + 50% attack damage
  2. Gain phys + Gain chaos (8%)
  3. Gain all elemental (optional 3rd socket)

Crafting: Xem Talisman Crafting Guide
```

#### Morior Invictus (Body)

```yaml
REQUIRED:
  - Life (implicit)
  - All Resistances (implicit)

3rd Stat Options (flexible):
  - Global Defense (more armor)
  - Crit Reduction (immunity to crit maps)
  - All Attributes (stat check)
  - Chaos Res (cap chaos)
```

#### Defiance of Destiny (Amulet)

```yaml
Effect:
  - Recover 30% of MISSING life on hit
  - = Shotgun immunity (nếu hit < 30% life thì không chết)

Weakness:
  - DoT (dùng leech + Heart of Well)
  - One-shots (dùng armor + Undying Hate)

Mana Regen: 30% (bonus cho rage scaling)
```

#### Key Uniques

| Unique | Slot | Effect | Cost |
|--------|------|--------|------|
| **Defiance of Destiny** | Amulet | Shotgun immunity, mana regen | 10-15d |
| **Morior Invictus** | Chest | Life + All Res + flex stat | 5-10d |
| **Headhunter** | Belt | Luxury minmax | 50d+ |
| **Lavianga's Spirits** | Flask | Mana sustain | 1-2d |
| **Rite of Passage** | Charm | 20% life, stun threshold | 13d |
| **The Fall of the Axe** | Charm | Attack bonuses | 5d |

#### Budget Alternatives

| Endgame | Budget | Notes |
|---------|--------|-------|
| Morior Invictus | High armor rare chest | Cần craft res elsewhere |
| Defiance of Destiny | Rare amulet with +fire skills | Mất shotgun immunity |
| Headhunter | Rare belt with life/res | Headhunter là luxury |
| Lavianga's Spirits | Mana flask | Less smooth sustain |

### Defense Options

#### Option A: Cotor + Life Leech (Budget)

```yaml
Setup: Cotor chest + Life Leech 3 on attacks
Pros: Simple, cheap, high eHP với leech
Cons: Must be in melee to sustain
```

#### Option B: Mind Over Matter + Oyson's Oath (Recommended)

```yaml
Setup:
  1. Take Mind Over Matter keystone (~8 points)
  2. Put Oyson's Oath on Walking Calamity
  3. Get "Leech % phys as mana" on rings/gloves
  4. Stack mana on gear (target: 1600-2000+)

How it Works:
  - Walking Calamity does elemental damage
  - Oyson's Oath: Mana leech from elemental
  - MoM: Damage hits mana first
  - = Sustain while kiting, không cần melee

Pros: Works at range, Walking Calamity provides sustain
Cons: ~8 passive points, need mana gear
```

#### Option C: Chevron Satchel (Flask-based)

```yaml
Setup:
  1. Chevron Satchel belt
  2. INSTANT RECOVERY life flask (required!)
  3. Herbalism nodes + Herbalism 2 support

How it Works:
  - Flask applies to both Life AND Energy Shield
  - ~1000+ recovery per press

Pros: Works at range, simple button press
Cons: Uses belt slot, requires specific flask roll
```

#### Option D: Cloak of Flame + Gore Girdle (Tank Build)

> *Source: [Carnarius - Road To Immortality](https://www.youtube.com/watch?v=_vTsc1Ctidk)*

```yaml
Core Concept:
  - Convert 81%+ physical damage → fire
  - Gore Girdle doubles armor for elemental defense
  - Result: Near-immunity to physical INCLUDING DoT

Setup:
  1. Cloak of Flame (corrupted 55-61% roll)
  2. Gore Girdle belt
  3. Avatar of Evolution (15% phys as elemental)

WORKS ON DOT: Physical DoT converts too!
  - Shadewalker ground effect → Immune

Pros: Face-tank pinnacle bosses, Shadewalker immunity
Cons: Uses chest + belt slots, less damage
```

### Passive Tree Priorities

| Priority | Node Type |
|----------|-----------|
| 1 | Rage nodes (max rage, rage effect) |
| 2 | Armor to Elemental (70%+ target) |
| 3 | Life (flat + %) |
| 4 | Stun threshold |
| 5 | Skill effect duration |
| 6 | Fire/Elemental damage |
| 7 | Crit (late game) |

### Lord of the Wilds Keystone (Updated)

```yaml
Effect:
  - Equip scepter in offhand (dù đang cầm 2H)
  - Spirit HALVED
  - Reservations cost 2x

CRITICAL: Spirit Breakpoints
  - 140 spirit = 2 auras (2x 30 spirit reservations)
  - 180 spirit = 2 auras + Clarity 1
  - 240 spirit = 3 auras

Math:
  - Base 100 spirit → 200 với gear
  - 200 / 2 (Lord of Wilds) = 100 effective
  - 2x 30 spirit auras = 60 × 2 = 120 needed
  - → Cần 240 total spirit (trước halved) = 140 spirit trên gear
```

#### Scepter Setup

| Slot | Mod | Priority |
|------|-----|----------|
| Implicit | Spirit 40+ | Required |
| Prefix | Mana Regen 60% | High |
| Prefix | Strength/Attributes | Medium |
| Suffix | Skill Speed (bonded) | High |

#### Aura Choice: Malice

```yaml
Malice Aura:
  - 5-10 base crit (scales with duration)
  - Stacks crit weakness on enemies
  - Best damage aura cho build

Alternative: Purity of Elements
  - Free res capping
  - Supports trong Purity = 0 spirit cost
  - Trade-off: Lose crit scaling
```

### Bossing Rotation (Optimized)

```yaml
Endgame Boss Kill (với Ancestral Cry):
  1. Weapon Set 2 → Walking Calamity (37 sec)
  2. Weapon Set 2 → Ferocious Roar (Ancestral Cry)
  3. Weapon Set 2 → Savage Fury (if available)
  4. Weapon Set 1 → Pounce to boss (apply mark)
  5. Swipe, Swipe, SLAM pattern
  6. Repeat slam until boss dead

Pattern khi đánh:
  - Maul x2 (swipe, swipe) → build rage
  - Furious Slam → spend rage, HUGE damage với Ancestral Cry
  - Maul x2 → Slam → Maul x2 → Slam...

Key: Ancestral Cry + Fist of War 3 = 60% MORE damage mỗi Furious Slam
```

**Mapping Rotation:**

```yaml
1. Walking Calamity → Activate (lasts 37 sec)
2. Run through map, meteors auto-kill
3. Ferocious Roar khi Ancestral Cry ready (vòng vàng)
4. Swipe-Swipe-Slam cho rare/tanky enemies
5. Re-activate Calamity khi hết
```

## Advanced & Variants

### Crown of Ice Scaling

> *Source: [Palsteron Day 1](https://www.youtube.com/watch?v=LefoREyKnQc)*

```yaml
Key Modifier: "Spell damage also applies to attacks"

Setup:
  1. Take Mystical Rage node: "2% spell damage per rage"
  2. 77 rage = 154% increased spell damage
  3. Crown of Ice → 154% increased ATTACK damage

Cost: 1-5 divine
```

### Purity + Free Supports Tech

> *Source: [Palsteron Day 3](https://www.youtube.com/watch?v=ZPk_Pa3ot3s)*

```yaml
Bug/Feature:
  1. Use Purity of Lightning/Fire/Cold on scepter
  2. Socket supports INTO the Purity
  3. Supports cost 0 spirit!

Free Supports: Clarity 2, Vitality 2, Herbalism 2
Trade-off: Lose Malice crit aura
```

### Weapon Swap Debuff Tech

> *Source: [Palsteron Day 5](https://www.youtube.com/watch?v=7g2PCNS5N60)*

```yaml
Concept: Use Weapon Set 1 for debuffs, Set 2 for damage

Weapon Set 1 (Staff):
  - Whispering Ice staff
  - Thunderstorm + Shock Conduction
  - Elemental Weakness + Cursed Ground
  - Path to Exposure Effect nodes (50% total)

Boss Rotation:
  1. Swap to staff
  2. Cast Thunderstorm + Elemental Weakness
  3. Swap back to talisman
  4. Melt boss với -45% resistance
```

### Lineage Support Gems

| Gem | Effect | Cost |
|-----|--------|------|
| Rigwalt's Ferocity | 30% more damage (weapon set 2 only) | 2-5d |
| Zoph's Pirate | Chaos as fire + ignite scaling | 1-3d |
| Batiar's Vengeance | Cold damage per rage | 1d |

### Cougar Gaze Triple Chain

> *Source: [AlanStriker](https://www.youtube.com/watch?v=7POduWkDV7g)*

```yaml
Life Regen → (Cougar Gaze) → Mana Regen → (Furious Wellspring) → Rage Regen

Application:
  - Stack flat life regen on Body Armor, Helmet, Boots
  - Also helps outheal Berserk degen
```

### Movement Speed > Attack Speed

> *Source: AlanStriker*

Walking Calamity và Rampage **không cần** attack speed. Rampage scales với movement speed. Skip attack speed nodes, invest movement speed instead.

### Demon Bear Variant (Fury of the King)

> *Source: [Palsteron Demon Bear](https://www.youtube.com/watch?v=Xq1Xkmv8BYI)*

```yaml
Cost: 10-40+ divine (expensive!)
Unique Skill: Molten Crash (leap slam + volcanic fissures)
Visual: Demon Bear skin (free MTX!)

Molten Crash:
  - 423% base damage on landing
  - Creates Volcanic Fissures
  - Fissures can be triggered by Shockwave Totem!

Shockwave Totem Setup:
  - Urgent Totems + Rapid Attacks + Overabundance
  - Place 2 totems → Molten Crash → Totems proc fissures → Melt boss
```

**Pros:**
- Insane single target
- Better movement than Pounce
- Free MTX

**Cons:**
- VERY expensive
- No Life Leech (80% conversion)
- More buttons

**Leech Problem Solution:** Use Chevron Satchel + Instant Flask (no leech needed).

## Reference

### Known Bugs

| Bug | Status | Workaround |
|-----|--------|------------|
| Weapon Swap | Broken | Only use for debuffs, not damage |
| Rage Forge | Broken | Don't use on Walking Calamity |
| Hourglass | Annoying | Use Elemental Armament instead |
| Sprint/Dodge | MTX bug | Remove floating body MTX |
| Savage Fury | Beneficial | Equip in offhand = free reservation |

### FAQ

**Q: Good for league start?**
A: YES. 0 currency required, works với pure rares.

**Q: When does build come online?**
A: Trial 1 (Furious Wellspring) = rage sustain solved. Fully functional after.

**Q: Walking Calamity scale với +melee?**
A: KHÔNG. Chỉ +attack skills work.

**Q: Rampage hay Furious Slam?**
A: Both viable. Rampage = higher DPS (Infernal Cry snapshot). Slam = cleaner.

**Q: Spirit không đủ cho Berserk?**
A: Options: Sacred Flow (+100), high spirit scepter, spirit on gear.

**Q: HC viable?**
A: YES với proper defense (MoM recommended).

**Q: Map mods cần tránh?**
A: Reduced Regen (affects rage). Cannot Leech annoying với Cotor.

### Resources

#### Video Guides

| Creator | Video | Content |
|---------|-------|---------|
| **CaptainLance** | [**Walking Calamity Build Guide**](https://www.youtube.com/watch?v=M2Z9CALQz3w) | **MAIN GUIDE - Endgame (Dec 22, 2025)** |
| CaptainLance | [Fire & Ice](https://www.youtube.com/watch?v=bbqd4Wr0qZQ) | Embitter tech |
| NickTew | [T15 Full Guide](https://www.youtube.com/watch?v=fVAc3YAXCJw) | Complete endgame |
| NickTew | [Leveling 1-70](https://www.youtube.com/watch?v=cqZxQq1k_tI) | Campaign walkthrough |
| NickTew | [Defense Tech](https://www.youtube.com/watch?v=H4gD6BpAKiM) | MoM setup |
| Palsteron | [Day 1](https://www.youtube.com/watch?v=LefoREyKnQc) | Crown of Ice, bugs |
| Palsteron | [Day 3](https://www.youtube.com/watch?v=ZPk_Pa3ot3s) | Chevron Satchel, Purity tech |
| Palsteron | [Demon Bear](https://www.youtube.com/watch?v=Xq1Xkmv8BYI) | Fury of the King |
| Palsteron | [Day 5](https://www.youtube.com/watch?v=7g2PCNS5N60) | Lineage gems, weapon swap |
| Carnarius | [Road To Immortality](https://www.youtube.com/watch?v=_vTsc1Ctidk) | Cloak of Flame tank |
| AlanStriker | [Auto-Bomber](https://www.youtube.com/watch?v=7POduWkDV7g) | Cougar Gaze, movement speed |
| P4wnyhof | [Starter Perfected](https://www.youtube.com/watch?v=yWa4ZdQ1pgQ) | Act-by-act leveling |

#### Build Guides

| Guide | Link |
|-------|------|
| Mobalytics (CaptainLance) | [mobalytics.gg](https://mobalytics.gg/poe-2/profile/captainlance/builds/meteor-bear) |
| Mobalytics (NickTew) | [mobalytics.gg](https://mobalytics.gg/poe-2/builds/slam-druid-leveling-build-nicktew) |
| Mobalytics (Carnarius) | [mobalytics.gg](https://mobalytics.gg/poe-2/builds/freddy-fazbear-giga-tanky-bear) |

#### Crafting Guides

| Guide | Link |
|-------|------|
| Talisman Crafting | [Talisman Crafting Guide](/mechanics/crafting/talisman-crafting) |

### Changelog

| Version | Date | Changes |
|---------|------|---------|
| 5.0.0 | 2025-12-22 | **MAJOR UPDATE:** CaptainLance endgame guide integration |
| | | - New Ascendancy order (Reactive Growth → Furious Wellspring → Wisdom of the Magi) |
| | | - Weapon Swap System (duration snapshotting) |
| | | - Ancestral Cry mechanic (60% more damage) |
| | | - Updated Rage formula (mana regen scaling) |
| | | - Full endgame skill gem setup with budget alternatives |
| | | - POB stats (Level 95, 66k DPS) |
| | | - Updated gear section with POB data |
| | | - Spirit breakpoints for Lord of the Wilds |
| | | - M+KB bug workarounds |
| 4.0.0 | 2025-12-18 | Viết lại cấu trúc: flow đọc lại từ đầu |
| 3.3.0 | 2025-12-18 | Complete leveling guide from P4wnyhof |
| 3.2.0 | 2025-12-18 | AlanStriker tech: Cougar Gaze, Movement Speed |
| 3.1.0 | 2025-12-18 | Carnarius tank variant |
| 3.0.0 | 2025-12-18 | Palsteron content |
| 2.0.0 | 2025-12-17 | Complete rewrite |
| 1.0.0 | 2025-12-17 | Guide đầu tiên |

*Primary guide: CaptainLance9. Supplementary content from NickTew, Palsteron, Carnarius, AlanStriker, P4wnyhof.*

## Skill Gems & Links

<!-- TODO: polish section này qua /write-build-tutorial — đọc skill SKILL.md để biết voice & cấu trúc maxroll-flavored. -->

## Passive Tree & Mastery

<!-- TODO: polish section này qua /write-build-tutorial — đọc skill SKILL.md để biết voice & cấu trúc maxroll-flavored. -->

## Stat Priorities & Defenses

<!-- TODO: polish section này qua /write-build-tutorial — đọc skill SKILL.md để biết voice & cấu trúc maxroll-flavored. -->

## Pantheon & Bandits

<!-- TODO: polish section này qua /write-build-tutorial — đọc skill SKILL.md để biết voice & cấu trúc maxroll-flavored. -->

## Budget & Investment

<!-- TODO: polish section này qua /write-build-tutorial — đọc skill SKILL.md để biết voice & cấu trúc maxroll-flavored. -->

## Strengths & Limitations

<!-- TODO: polish section này qua /write-build-tutorial — đọc skill SKILL.md để biết voice & cấu trúc maxroll-flavored. -->

## Performance Ratings

(Moved from frontmatter — 6 dimension, 1-5 scale.)

| Aspect          | Rating (1-5) |
|-----------------|--------------|
| clear_speed    | 5 |
| boss_damage    | 5 |
| survivability  | 4 |
| mobility       | 3 |
| league_start   | 5 |
| budget_scaling | 5 |

## Resources

- **PoB:** https://mobalytics.gg/poe-2/profile/captainlance/builds/meteor-bear
- **Video guide:** https://www.youtube.com/watch?v=M2Z9CALQz3w

## Relationships

- **synergizes_with** [Talisman Crafting](/mechanics/crafting/talisman-crafting) — Crafting guide cho talisman upgrades
