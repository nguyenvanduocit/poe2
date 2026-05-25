# passive-skill-tree/scripts — data layer notes

**Trạng thái: LIVE.** `analyze.ts` đã implement đầy đủ và đọc data từ poedb mirror — cùng command surface với `/passive-skill-tree1`. Không còn là scaffold.

## Nguồn data

- **poe2db.tw passive-skill-tree mirror**, schema = grindinggear unified export (`tree`/`classes`/`groups`/`nodes`/`constants`/`sprites`/`jewelSlots`/`points`). Positioning + value scoring share logic với POE1, NHƯNG **edge schema khác**: POE2 lưu cạnh trong `connections[]` (directed, KHÔNG đối xứng), POE1 dùng `out`/`in`. `buildAdjacencyList` union mọi cạnh cả hai chiều + loại virtual node `root` (anchor name=null nối mọi class start — giữ lại sẽ tạo shortcut cross-class bất khả thi). `classStartIndex` POE2 là array (1 start vật lý phục vụ 2 class cùng attribute corner, vd `[0,6]` = Marauder + Warrior), POE1 là số đơn — resolver normalize cả hai.
- Direct URL: `https://poe2db.tw/data/passive-skill-tree/<internal-X.Y>/data_us.json`
- Local cache: `<project-root>/data/poedb/<X.Y.Z>/passive-skill-tree/data_us.json`
- `analyze.ts` auto-resolve patch cao nhất dưới `data/poedb/`, override bằng `--patch <X.Y.Z>`.

**poe2db version quirk:** counter trong URL KHÔNG bám theo POE2 patch number. POE2 0.5.x map sang internal `4.4` (`0.5`/`4.5` trả 404). Default nằm ở `POEDB_DEFAULT_SOURCE_VERSION` trong `analyze.ts`; khi poe2db bump, pass `--source-version <X.Y>` một lần rồi cập nhật hằng số đó.

## Refresh

```bash
# Tree-only direct fetch (skill này tự fetch từ poe2db):
bun .claude/skills/passive-skill-tree/scripts/analyze.ts types --force-update

# Full poedb mirror (HTML + JSON + mọi thứ dưới /us/):
./.claude/skills/poedb/scripts/download.sh 0.5.0
```

## Post-launch refetch (BẮT BUỘC sau ~29/05/2026)

Snapshot hiện tại fetch 2026-05-24 — **pre-launch**. Hai ascendancy mới 0.5 chưa finalize:
- **Spirit Walker** (Huntress2): 1 real notable + 8 `[DNT-UNUSED]` placeholder rỗng.
- **Martial Artist** (Monk1): 0 real + 8 placeholder.

Các ascendancy còn lại (Lich, Infernalist, Deadeye, Titan, Stormweaver, Invoker, Amazon, Ritualist, Acolyte of Chayula...) đã populate đầy đủ. Sau khi GGG finalize quanh launch, chạy `--force-update` để pull node thật cho Spirit Walker / Martial Artist. Theo dõi xem upstream có bump internal version khỏi `4.4` không.

## Done (2026-05-25)

- **Pathfinding fixed** — POE2 edges nằm trong `connections[]` (không phải `out`/`in`); adjacency builder cũ đọc nhầm field → `path`/`suggest` trả rỗng. Giờ union `connections` + loại `root`.
- **Stat aggregator thật** — `analyze` parse số từ stat text, sum theo template, group theo category (thay cho đếm category + `grantedStrength` cũ — POE2 có 0 node mang field đó).
- **Allocation validator** — command `validate <class> <nodes...>` two-component (main + ascendancy) phát hiện orphan + tính point cost.

## Còn TODO

- **POE2 tree URL encoding** chưa public-decoded. Command `url` đang inherit V6 base64 của POE1 (class id map POE1) → tạo link POE2 INVALID. Treat as stub cho đến khi community decode (inspect PoB2 fork export hoặc reverse-engineer). Khi xong, update `url` handler + class/ascendancy id map cho roster POE2.
- **Value heuristic** (`estimateNodeValue`) vẫn dùng weight POE1; stat POE2-specific như Spirit/+Max Spirit rơi vào catch-all +1. Re-tune khi đủ build data 0.5 (Spirit là bottleneck của minion/companion/aura build — đáng nâng lên +5 như SKILL.md đề xuất).

## Reference

- POE1 sibling (cùng logic, khác data): `.claude/skills/passive-skill-tree1/scripts/analyze.ts`
- poedb mirror downloader: `.claude/skills/poedb/scripts/download.sh`
- POE2 0.5 patch notes: `data/release-notes/poe2/Version_0.5.0.md`
- Last fetch evidence: `data/poedb/0.5.0/passive-skill-tree/meta.json`
