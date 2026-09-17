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
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
  league_phase:
    required: true
    enum: [Early, Mid, Late, End]
  confidence_level:
    required: true
    enum: [High, Medium, Low]
---

# [Strategy Name]

<!--
Farming strategy CHEATSHEET (POE2 0.5+ "Return of the Ancients" Atlas) — viết theo skill /write-farming-tutorial.
Voice: tiếng Việt, owner-voice, BULLET-FIRST scannable, số có timestamp. Title KHÔNG kèm league/patch.

MỤC TIÊU: nhìn vào là setup theo, khỏi đọc nguyên lý. Bullet-first, KHÔNG đoạn văn giảng cơ chế.
Why nén thành MỘT mệnh đề trên bullet (vd "runic monster là con duy nhất nhả logbook") — KHÔNG cho mỗi lever một đoạn dài.

POE2 endgame KHÔNG có scarab. Vocabulary đúng: Waystone (map item), Precursor Tablet (đặt vào Map Device — slot theo số modifier của waystone: 1-2 mod=1 slot, 3-5 mod=2, 6+ mod=3; City biome map mở slot thứ 4 qua atlas notable Industrial Improvements), unique tablet (vd Freedom of Faith), Precursor Tower (map area chạy được — hoàn thành thì rớt 1 tablet + mở tầm nhìn atlas, KHÔNG phải nơi socket tablet), Atlas Passive Tree + mechanic subtree (Ritual/Breach tree), Masters of the Atlas (Jado, Hilda...), Map Device + fragment (Ocean Exploring / pinnacle boss), biome (city/grass/forest/desert/swamp). Currency nền = Exalted Orb (ex), high-end = Divine Orb (div).

BỘ 4 LEVER = 4 SECTION ROLL-REFERENCE (danh sách ĐÓNG): Waystone · Tablet · Atlas Passive · Master. Mọi nguồn tiền map về đúng MỘT lever; draft mọc ra "lever thứ năm" (scarab/sextant/chisel không tồn tại) = red flag fabrication. Consumable đổ lên waystone (Liquid Emotion, omen) thuộc lever Waystone; fragment/key/splinter là vé vào content, không phải lever. Lever nào strategy không dùng thì BỎ section đó.

CHEATSHEET PiP COMPONENT (optional): nếu nhúng `::expedition-cheatsheet` / `::omen-farm-cheatsheet` / `::ritual-cheatsheet` (`app/components/*Cheatsheet.vue`), nó là overlay in-game mirror — TEXT bullet trong 4 lever section vẫn là nguồn chính để đọc/copy. Đặt component ở cuối phần execution. Có component → BỎ Quick Reference Card (4 lever section đã là phần scannable).

MOD REFERENCE = dòng mod THẬT, verified (cả bullet lẫn cheatsheet data): viết dòng mod đầy đủ searchable (vd "increased number of Rare Expedition Monsters in Map"), KHÔNG affix nickname đơn lẻ ("of Knowledge") — nickname không ra gì khi search. Verify mod còn tồn tại trong patch hiện tại từ data/poedb/<patch>/ (source #2) hoặc poe2db.tw; đừng tin một mình wiki mirror (stale). Trong cheatsheet để dòng mod làm `text`, affix name xuống `note`.

RIGHT-SIZING: CẮT lever/case không áp dụng, ĐỪNG pad, ĐỪNG lặp. Heading sentence-case tiếng Việt nói thẳng ("## Waystone roll gì"), KHÔNG dash-subtitle. Số không neo quyết định nào thì cắt. Section REQUIRED `## Failure Modes` PHẢI giữ ĐÚNG literal đó (validator key theo heading text). Term game → :wiki-link{url="https://www.poe2wiki.net/wiki/<page>"} lần đầu. Cross-link → ## Relationships.
Exemplar cheatsheet: content/guides/0-5-ocean-exploring.md.
-->

## TL;DR

- (3-7 bullet kết luận: case nào setup gì + EV + gate then chốt; plain-text, owner-voice, KHÔNG wiki-link, KHÔNG mục lục section)

([Strategy] là gì + tier + ai chạy. Restate frontmatter metric inline: "Tier B, investment Medium, ~5-10 div/h tính đến YYYY-MM-DD".)

## Waystone roll gì

- **Case thường:** [tier] + roll [rarity / monster effectiveness / density], corrupt [+1 mod nếu đáng].
- **Case juiced:** [tier cao / 8-mod] + roll [...], corrupt.
- [Nguyên tắc: Waystone Tier → trần reward/slot; né mod vô ích (quantity/pack-size) bằng cặp omen đảo nghĩa nếu cần].

## Tablet roll gì

- **[Mục tiêu A]:** *[dòng mod thật searchable]*.
- **[Mục tiêu B]:** *[dòng mod thật]* + *[dòng mod thật]*.
- **[Vendor / phụ]:** *[dòng mod thật]*.
- [Irradiated / unique tablet — chỉ case juiced, thêm slot mod. Slot tablet theo số mod waystone: 6-mod = 3 slot].

## Atlas passive spec gì

Subtree [tên] = [N] point, spec một lần:

- **[Node] ×[N]** — [tác dụng, dòng ngắn].
- **[Node]** — [fork chọn nhánh nào + khi nào].
- **[Node]** — [tác dụng].

## Master chọn ai

- **[Master A]** — [khi nào chọn / bonus].
- **[Master B]** — [khi nào / trade-off].

## [Run case thường] ([mục đích, vd nuôi sustain])

- Setup: [lever variant — dẫn lên 4 section trên, KHÔNG giảng lại mod].
- [Loop: activate/clear gì trước, nhặt gì, bỏ gì].
- [Build chưa cứng: chạy/chain ngắn thế nào].
- EV ~[X] div, [chi phí].

## [Run case juiced] ([mục đích, vd đốt key/juice])

- Setup: [lever variant cao — waystone tier cao + tablet Irradiated].
- [Gate: fish section / mở content / scout layout trước].
- **Đốt [consumable] khi nào:** [điều kiện — vd section ≥4], ~[giá]/lần, [đừng đốt khi section mỏng].
- EV ~[Y] div, đỉnh [Z]+.

## Nổ chain / thứ tự chạy

<!-- OPTIONAL — chỉ khi execution order quyết reward (Expedition chain, remnant, breach density). Bullet ACTION, KHÔNG giảng cơ chế. BỎ nếu strategy không có thứ tự nổ/clear. -->

- [Nổ/clear cái gì SỚM (Power/rarity), cái gì CUỐI (reward cao)].
- [Ngưỡng skip: slot/tier nào chạy, nào skip].
- [Đọc mod trước khi nối — dòng nào brick build (immune hệ damage, hits can't be evaded, chaos pen)].

<!-- CHEATSHEET PiP embed (optional): overlay in-game mirror. TEXT bullet vẫn là nguồn chính.
::expedition-cheatsheet
::
-->

## Kinh tế

Snapshot [poe2scout] [DD/MM], Divine ≈ [X] ex.

- Money: :wiki-link{url="https://www.poe2wiki.net/wiki/..."} ~[giá] ([thanh khoản]), [item] ~[giá].
- [Currency đổi / sink — vd Verisium → Liquid Verisium ở Farrow, ~5.000 ≈ 1 div].
- EV/map: [case thường ~X div]; [case juiced ~Y div, đỉnh Z].
- Variance: [rủi ro âm cụm map xui], [sample ~N map mới về trung bình].

## Failure Modes

```yaml section-rules
required: true
```

(≥3 scenario strategy gãy — bullet, mỗi cái tên + hậu quả:

- **Build floor** — [ngưỡng clear/DPS; dưới ngưỡng skip reward đắt nhất → mất phần lớn EV].
- **One-shot / mất map** — [encounter/boss/no-respawn kill bất chấp EHP → mất map + key đã đốt].
- **Market saturation / patch nerf** — [drop key flood giá compress week 2-3, hoặc mechanic nào nerf = kill strat].
- **Sustain / brick** — [content-specific: base/tablet không sustain, hoặc bug brick 1 encounter].)

## Version History

### Patch X.Y.Z (DD/MM/YYYY)

- [Change gọn: buff/nerf/rework nào đổi setup hay economy].

## Relationships

```yaml section-rules
required: false
list:
  items:
    pattern: "^(synergizes_with|related|related_mechanics|related_builds|related_guides|requires|used_by|references|derived_from|derived_builds|source_research|competes_with|alternative_to|supports|farming_relevance|part_of|parent|follows_build) "
```

(Cross-link sang concept liên quan. Mỗi dòng: `- **predicate** [Title](/route) — reason`. Route bỏ prefix `content/` và đuôi `.md`. Mọi route ở đây phải xuất hiện ≥1 lần trong body.)
