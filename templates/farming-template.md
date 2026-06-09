---
template_path: templates/farming-template.md
document_type: farming-strategy
sections:
  - "*"
  - relationships
fields:
  $path:
    pattern: "^content/(en/)?farming/.+\\.md$"
  template:
    required: true
    pattern: "^templates/farming-template\\.md$"
  document_type:
    required: true
    enum: [farming-strategy]
  title:
    required: true
  status:
    required: true
    enum: [draft, active, outdated, archived]
  created:
    required: true
    pattern: "^\\d{4}-\\d{2}-\\d{2}$"
  updated:
    required: true
    pattern: "^\\d{4}-\\d{2}-\\d{2}$"
  strategy_tier:
    required: true
    enum: [S, A, B, C, Niche, Experimental]
  investment_tier:
    required: true
    enum: [Low, Medium, High, Variable]
  league:
    required: true
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
  patch:
    required: true
  league_phase:
    required: true
    enum: [Early, Mid, Late, End]
  confidence_level:
    required: true
    enum: [High, Medium, Low]
---

# [Strategy Name]

<!--
Farming strategy template (POE2 0.5+ "Return of the Ancients" Atlas) — viết theo skill /write-farming-tutorial.
Voice: tiếng Việt, owner-voice, prose-first, số có timestamp.
Title KHÔNG kèm league/patch.

POE2 endgame KHÔNG có scarab. Vocabulary đúng: Waystone (map item), Precursor Tablet (đặt vào Map Device — số slot theo số modifier của waystone: 1-2 mod=1 slot, 3-5 mod=2, 6+ mod=3; City biome map mở thêm slot thứ 4 qua atlas notable Industrial Improvements), unique tablet (vd Freedom of Faith), Precursor Tower (map area chạy được — hoàn thành thì rớt 1 tablet + mở tầm nhìn atlas, KHÔNG phải nơi socket tablet), Atlas Passive Tree + mechanic subtree (Ritual/Breach tree), Masters of the Atlas (Jado, Hilda...), Map Device + fragment (Ocean Exploring / pinnacle boss), biome (city/grass/forest/desert/swamp). Currency nền giao dịch = Exalted Orb (ex), high-end = Divine Orb (div).

Waystone/tablet/atlas keystone/unique/currency/fragment → `:wiki-link{url="https://www.poe2wiki.net/wiki/<page>"}` MDC component (auto link ra poe2wiki.net + price tooltip).
Cross-link → section ## Relationships ở cuối, mỗi dòng: - **predicate** [Title](/route) — reason.
-->

(Intro 2-3 câu. Câu 1: strategy là gì + tier. Câu 2: core mechanism — content nào farm, drop nào make money. Câu 3: ai nên chạy — early league / endgame / specific build. Restate frontmatter metric inline: "Tier B, investment Medium, ~5-10 div/h tính đến YYYY-MM-DD".)

## Strategy Overview

(1 đoạn prose: tại sao strategy này làm ra tiền trong meta hiện tại. Mention key tablets/fragments/atlas nodes unlock profit + lý do mỗi cái worth cost.)

## Setup

### Atlas Passive Tree

(Cluster chính path + lý do. Mechanic subtree (vd Ritual/Breach tree) chọn node nào + tại sao. Masters of the Atlas assignment nếu strategy dùng. Link tới atlas tree builder nếu có. Prose, không list 30 node bullet rời rạc.)

### Tablets & Map Device

(Precursor tablet loadout + lý do từng cái — gồm cả unique tablet. Số tablet slot do số modifier của waystone quyết định (6-mod = 3 slot); City biome map + atlas notable Industrial Improvements mở slot thứ 4. Tower là nguồn rớt tablet, không phải nơi cắm. Map device fragment cho pinnacle / Ocean Exploring nếu có. Bold + wiki link mỗi tablet lần đầu.)

### Waystone & Map Choice

(Waystone tier + biome (city/grass/forest/desert) + layout/density + encounter spawn rate. Bold + wiki link map name.)

### Build Requirements

(Min DPS, clear speed, survivability ngưỡng. HC viable không? League-start budget character chạy được?)

## Gameplay

(Step-by-step trong map: activate gì trước, clear order, what to pick up vs ignore, when to leave. Prose 1-2 đoạn, không bullet 20 step.)

## Loot Breakdown & Economic Analysis

(Drop expected: currency / unique / fragment. Formula chuẩn:

```
expected_profit_per_hour =
  (drop_rate_per_map × stack_size × current_market_price)
  × maps_per_hour
  − cost_per_map (tablet/waystone/fragment/key đầu vào)
  − opportunity_cost (atlas points, sustain time)
```

**Số có timestamp** — "tính đến YYYY-MM-DD, [item] sells X per unit, map yields Y units → Z div/map". Reference snapshot file `data/poe-ninja/<league>/snapshots/<date>.json` hoặc trade query date. Snapshot > 7 ngày → re-fetch trước khi quote. Xem **Market Data Freshness** trong CLAUDE.md.)

## Market Context & Risk

(Price trend (rising/falling), saturation risk, patch nerf risk, league phase. Honest về sustainability — "strategy này compete với X, week 2-3 prices likely compress".)

## Failure Modes

(Bắt buộc ≥ 3 scenario strategy gãy:
- **Market saturation** — drop key bị flood, giá compress > X% (vd week 2-3 league)
- **Sustain failure** — tablet/waystone base/atlas key node không sustain với farming rate
- **Build floor** — strategy require clear speed Y maps/h hoặc DPS Z; dưới ngưỡng = không lãi
- **Patch nerf risk** — mechanic nào nếu nerf sẽ kill strategy (atlas tree shift, tablet rework, drop rate change)
- **Time investment** — setup cost so với expected sample size, có break-even nổi không

Prose 1-2 đoạn cover risk thực tế nhất. Xem **Failure Mode / Devil's Advocate** trong CLAUDE.md.)

## Profit Optimization

(Advanced tip: atlas node upgrade path B → A tier, tablet roll min-max, bulk vs individual sale, fleet use. Prose.)

## Alternatives & Variations

(Strategy cạnh tranh + when to switch. Variant strategy nâng cấp — vd add Delirium overlay cho returns cao hơn.)

## Data & Testing

(Evidence cho profit claim. Personal sample size + condition. Source link — poe.ninja, poe2scout, /trade output. Market data recency.)

## Summary

(3-5 bullet recap. Chỗ duy nhất bullet thoải mái.)

## Quick Reference Card

**Setup cost / map:** ~X ex  
**Profit / map:** ~Y div  
**Time / map:** ~Z minutes  
**Waystone / map:** [Waystone tier + biome]  
**Atlas key nodes:** [Nodes + mechanic subtree]  
**Masters of the Atlas:** [Master + bonus]  
**Tablets:** [Tablet 1] + [Tablet 2] + [Tablet 3] + [Tablet 4]  
**Fragments:** [Map device fragment / unique nếu applicable]

## Changelog

### YYYY-MM-DD
- Initial draft

## Relationships

```yaml section-rules
required: false
list:
  items:
    pattern: "^(synergizes_with|related|related_mechanics|related_builds|related_guides|requires|used_by|references|derived_from|derived_builds|source_research|competes_with|alternative_to|supports|farming_relevance|part_of|parent|follows_build) "
```

(Cross-link sang concept liên quan. Mỗi dòng: `- **predicate** [Title](/route) — reason`. Route bỏ prefix `content/` và đuôi `.md`.)
