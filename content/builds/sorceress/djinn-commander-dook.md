---
document_type: build
title: Djinn Commander - Dook's Version
class: Sorceress
ascendancy: Disciple of Varashta
league: '0.4'
patch: 0.4.0
status: published
author: Dook (PoE Vault)
created: '2025-12-17'
updated: '2025-12-17'
budget_tier: league-starter
build_tags:
  primary_skill: Kelari Commands
  damage_type: Physical/Chaos
  playstyle: Minion Commander
  content_focus: Leveling/Campaign
tags:
- poe2
- djinn
- minion
- sorceress
- disciple-of-varashta
- kelari
- ruzhan
- league-starter
- leveling
template: templates/build-template.md
---

# Djinn Commander - Dook's Version

## Quick Start

Build focus vào **2 Djinn chính** (Kelari + Ruzhan) với Command abilities. Djinn KHÔNG tốn Spirit → dùng Spirit thừa cho Skeletal minions qua Muster Support. High APM playstyle với burst damage từ Kelari's Deception.

### Cheatsheet

```
┌─────────────────────────────────────────────────────────────────┐
│ DJINN SETUP:                                                     │
│   Kelari (Sand): Brutality (AoE) + Deception (Burst ×3)         │
│   Ruzhan (Fire): Fury (immobilized bonus) + Passive Exposure    │
├─────────────────────────────────────────────────────────────────┤
│ CORE MECHANICS:                                                  │
│   ★ Djinn = 0 Spirit cost (free!)                               │
│   ★ Excess Spirit → Skeletal minions via Muster                 │
│   ★ "At your Command" converts Spirit → damage                  │
│   ★ Gigantic Following = +20% more minion damage                │
├─────────────────────────────────────────────────────────────────┤
│ ASCENDANCY ORDER:                                                │
│   1. Barya of Kelari → 2. Kelari's Deception →                  │
│   3. Barya of Ruzhan → 4. Ruzhan's Fury                         │
├─────────────────────────────────────────────────────────────────┤
│ ROTATION:                                                        │
│   Clear: Kelari's Brutality spam (low CD)                       │
│   Boss:  Brutality ×2 → Deception ×3 → Ruzhan's Fury            │
└─────────────────────────────────────────────────────────────────┘
```

### Ưu / Nhược

| Ưu | Nhược |
|----|-------|
| Djinn = 0 Spirit (free minions) | High APM requirement |
| Djinn bất tử, không cần invest survivability | Limited AoE coverage |
| Burst damage cao (Deception ×3) | Cần target deliberately |
| Low mana costs | Chỉ focus Campaign/Leveling |
| Flexible Spirit allocation | Cần swap setup cho Endgame |

---

## Core Mechanics

> **Djinn miễn phí Spirit → Stack minions khác qua Muster**

### 1. Djinn Economy

```
Kelari + Ruzhan = 0 Spirit cost
        ↓
Excess Spirit → Skeletal Minions
        ↓
Muster Support: +7% MORE damage per unique minion
        ↓
Djinn damage scales với số minion types
```

**Key insight:** Djinn không tốn Spirit nhưng vẫn được buff bởi Muster Support từ các minions khác.

### 2. Kelari Commands

```
Kelari's Brutality:
├─ Multi-hit AoE
├─ Low cooldown
└─ Primary clearing tool

Kelari's Deception:
├─ 3-stack physical burst
├─ +50% damage per stack
├─ Use 1: 100% → Use 2: 150% → Use 3: 200%
└─ Boss killer
```

### 3. Ruzhan Integration

```
Ruzhan's Fury:
├─ Fire volley
├─ Bonus damage on immobilized enemies
└─ Use khi boss gần Stun Threshold

Ruzhan Passive:
├─ Triggers khi cast Unearth
└─ Applies Exposure (giảm ele res)
```

### 4. "At your Command" Passive

```
Excess Spirit → Persistent Minion Damage
        ↓
Mỗi Skeletal minion = +7% MORE cho Djinn
        ↓
Goal: Collect 1 of EACH minion type
```

### 5. Gigantic Following

```
+20% MORE minion damage
BUT -1 minion slot

Trade-off: Worth it nếu có đủ minion diversity
```

---

## Progression Timeline

### Act 1: Hybrid Start

| Milestone | Action |
|-----------|--------|
| Start | Bone Cage (primary) |
| Add | Unearth (raise minions) |
| Weapon | Wand + Sceptre (hybrid scaling) |
| **Goal** | High APM, build minion army |

**Note:** "Accept slower progress if preferring pure minion experience"

### Act 2: Djinn Unlock

| Milestone | Action |
|-----------|--------|
| Trial of Sekhemas (Lv21-22) | Unlock Barya of Kelari |
| Point 2 | Kelari's Deception |
| Weapon swap | Wand → Shield (25% block) |
| **Goal** | Kelari = primary damage |

**Rotation sau ascendancy:**
- Brutality cho clearing
- Deception cho single target

### Act 3: Full Djinn Setup

| Milestone | Action |
|-----------|--------|
| Trial of Chaos | 2 points (Ruzhan + Fury) |
| Minion collection | 1 of each Skeletal type |
| Muster Support | Socket vào minions |
| **Goal** | Maximize "At your Command" |

### Act 4 & Interlude

| Milestone | Action |
|-----------|--------|
| Interlude | +40 permanent Spirit |
| Gear focus | Spirit, ES, +Minion Levels |
| **Goal** | Endgame transition prep |

---

## Gem Links

### Djinn Commands (No gem slots needed - Ascendancy)

```
Kelari's Brutality ─ (innate, low CD, AoE)
Kelari's Deception ─ (innate, 3-stack burst)
Ruzhan's Fury     ─ (innate, fire volley)
```

### Skeletal Army (Muster Stacking)

```
Skeletal [Any Type] ─ Last Gasp ─ Meat Shield I ─ Muster
                              │
               (Each unique type = +7% MORE to Djinn)
```

### Wolf Pack (Defensive)

```
Wolf Pack ─ Loyalty Support
               │
    (10% damage reduction bonus)
```

### Utility

```
Unearth ─ (triggers Ruzhan passive, body blocking)
Bone Cage ─ (Act 1 only)
```

---

## Passive Tree

### Priority Nodes

| Node | Effect | Priority |
|------|--------|----------|
| **Entropic Incarnation** | Chaos damage scaling | High |
| **At your Command** | Spirit → Minion damage | High |
| **Splintering Force** | Armor break for Kelari | High |
| **Gigantic Following** | +20% MORE minion damage | Medium |
| Minion Cooldown Recovery | Command uptime | Medium |
| Area of Effect | Clear coverage | Low |

### Early Game Routing (Act 1)

```
Raw Power → Practiced Signs → Critical Overload → Emboldening Lead
    │              │                │
(Spell DMG)   (Cast Speed)     (Crit Chance)
```

**Transition:** Respec vào minion nodes sau Ascendancy

---

## Gear

### Stat Priorities

| Priority | Stats |
|----------|-------|
| 1 | +Levels to Minion Skills |
| 2 | Spirit |
| 3 | Allies gain Increased Damage |
| 4 | Allies gain Increased Crit Damage |
| 5 | Movement Speed |
| 6 | Energy Shield |
| 7 | Resistances (cap) |

### Weapon Progression

| Phase | Setup | Reason |
|-------|-------|--------|
| Act 1 | Wand + Sceptre | Hybrid spell/minion |
| Act 2+ | Sceptre + Shield | 25% passive block |
| Maps | Sceptre + Focus | Optimization |

### Slot Priorities

| Slot | Focus |
|------|-------|
| Weapon | Sceptre (mandatory) |
| Amulet | +Minion Levels |
| Helmet | +Minion Levels, ES |
| Body | ES, Spirit |
| Others | Resistances, ES |

---

## Campaign Buffs

| Quest | Selection |
|-------|-----------|
| Valley of Titans (Act 2) | 30% increased charm charges |
| Venom Draught (Act 3) | Skip Mana Regen (useless) |
| Halls of the Dead (Act 4) | Elemental Resistance (all 3) |
| Qimah (Interlude 2) | 3% Movement Speed |

---

## Boss Rotation

```
Phase 1: Burst Setup
├─ Kelari's Brutality ×2 (dump charges)
└─ Position for Deception

Phase 2: Main Burst
├─ Kelari's Deception #1 (100%)
├─ Kelari's Deception #2 (150%)
└─ Kelari's Deception #3 (200%)

Phase 3: Finish
├─ Watch for Stun Threshold
├─ Ruzhan's Fury (when close)
└─ Repeat from Phase 1
```

---

## Endgame Notes

**QUAN TRỌNG:** Guide này chỉ cover Campaign/Leveling.

```
"Beyond that point, you should swap to an endgame setup."
```

**Endgame transition cần:**
- Different gear configuration
- Possibly different passive tree
- Maps-focused optimization

---

## Reference

### So sánh với GhazzyTV Build

| Aspect | Dook | GhazzyTV |
|--------|------|----------|
| Djinn count | 2 (Kelari + Ruzhan) | 3 (+ Navira) |
| Focus | Kelari Commands | Raging Spirits |
| Spirit usage | Excess → Skeletons | Muster diversity |
| Playstyle | Command-based | Spell trigger |
| Scope | Leveling only | Full guide |

### Source

- [PoE Vault - Djinn Commander Build](https://www.poe-vault.com/poe2/sorceress/disciple-of-varashta/djinn-commander-leveling-build)
- Author: Dook
- Updated: December 16, 2025

---

## Performance Ratings

(Moved from frontmatter — 6 dimension, 1-5 scale.)

| Aspect          | Rating (1-5) |
|-----------------|--------------|
| clear_speed    | 4 |
| boss_damage    | 5 |
| survivability  | 4 |
| mobility       | 4 |
| league_start   | 5 |
| budget_scaling | 4 |

## Resources

- **Forum guide:** https://www.poe-vault.com/poe2/sorceress/disciple-of-varashta/djinn-commander-leveling-build

## Changelog

| Version | Ngày | Thay đổi |
|---------|------|---------|
| 1.0.0 | 2025-12-17 | Tạo guide từ PoE Vault (Dook) |

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
## Relationships

- **synergizes_with** [Djinn Minion Disciple of Varashta](/builds/sorceress/djinn-minion-disciple-of-varashta) — Alternative Djinn build approach
