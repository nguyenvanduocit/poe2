# CLAUDE.md

**PoE 2 League Gameplay Workspace** — AI skills, content/notes, and scripts for playing Path of Exile 2 each league/patch. (POE1 lives in the sibling `poe1` project.)

---

## Current Context

**Primary Focus: Path of Exile 2 — 0.5.0 "Return of the Ancients" (Runes of Aldur league)**

Đang chuẩn bị / bắt đầu league mới POE2 0.5.0 — bản cập nhật lớn cuối cùng trước 1.0, rewrite toàn bộ Endgame.

**League:** Runes of Aldur (POE2 0.5.0, patch note 21/05/2026, launch ~29/05/2026)

**Account:** hopthuxacnhan#3062

**POE2 Character:** TBD (đang chuẩn bị nhân vật mới cho 0.5 — có thể Witch/Lich cập nhật, Huntress Spirit Walker, hoặc Monk Martial Artist)

- **League mechanic chính:** Remnant + Runic Recipe crafting (2-10 slot, wave encounter rủi ro cao đổi item hiếm), Verisium Runeforging (thêm **Runic Ward** — defense layer mới kích hoạt ở 1 life, hồi độc lập), 13 Alloy + 13 Ancient Rune + Kalguuran skills/supports craftable, Ocean Exploring thay Logbook (đánh 4 Faction Leader + Pinnacle boss).
- **Endgame overhaul:** 6 storyline Endgame mới, Atlas có fixed points of interest, **lần đầu POE2 có challenge system** (hoàn thành 2/4/6/8 challenge nhận mảnh Knight of Aldur armor + Totem hideout vĩnh viễn).
- **Ascendancy mới:** Spirit Walker (Huntress — companion beast hunt mạnh), Martial Artist (Monk).
- **Builds đang nghiên cứu:** Dinomancer Lich Elephant (Witch + Infernal Legion post-nerf + Elephant Tortoise companion), Spirit Walker companion setups.
- **Dữ liệu quan trọng:**
  - Patch notes đầy đủ: `data/release-notes/poe2/Version_0.5.0.md` + symlink latest.md
  - Overview & hướng dẫn: `content/mechanics/return-of-the-ancients.md`
  - Spirit Walker chi tiết: `content/mechanics/spirit-walker-companion-beast-hunt.md`
  - Items mới: The Auspex, Facebreaker (POE2 version), v.v.
- **Workflow POE2:** 
  - Phân tích build: `.claude/skills/pob/scripts/scripts/analyze.sh "https://poe.ninja/poe2/..."` hoặc mobalytics poe-2 URL (xem skill `/pob`)
  - Tra cứu: `:wiki-link{url="https://www.poe2wiki.net/wiki/Remnant"}` (tự động dùng poe2wiki.net)
  - Release note: `./.claude/skills/poewiki/scripts/release-notes/fetch.sh`

**POE1 Archive — Mirage League (đã hoàn thành giai đoạn chính)**

**League:** Mirage (started 2026-03-07)

**Account:** hopthuxacnhan#3062
**Main Character (POE1):** TheLeader_A — Witch Necromancer (Lv97, CI Spectre Wretched Defiler) — *last fetch: 2026-05-08*
- **Build:** Spectre Necromancer (CI) — Doryani's Prototype (-200% lightning res enemy), Eyes of the Greatwolf + Melding of the Flesh (lightning → cold), Mageblood.
- **Key stats:** ~23.2M total minion DPS (Wretched Defiler ×10), ES 7,987 full buff, EHP 410k, 90% Fire/Cold cap.
- **Data files:** `content/characters/the-leader-a.json`, `.summary.json`, `-pob.txt`
- **Refresh (nếu cần):** `.claude/skills/pob1/scripts/pob.sh fetch "TheLeader_A" --spectre "Wretched Defiler"`
- **Past focus:** Push 40/40 challenges (đạt 23/40, phase plan chi tiết trong `content/characters/the-leader-a.md`)
- **Farming:** Harvest scarab (Scarab of Doubling ~175c/map), Awakening + Delirium boss combo.

**Previous POE1 Character:** inevercheat_tenth — RF Chieftain (seregajkp#2261, Lv21)
- Data: `content/characters/inevercheat-tenth.json`, `inevercheat-tenth.summary.json`

**Game Client:** POE2 (primary cho 0.5 prep & league start); POE1 client cho archive/reference khi cần.

---

## Gameplay Workflows

### Check my character status
**POE1:**
```
.claude/skills/pob1/scripts/pob.sh fetch "TheLeader_A" --spectre "Wretched Defiler"
  → fetch live character + PoB calc + minion DPS (must pass --spectre, see Current Context)
Local data: content/characters/the-leader-a.json (jq via Bash)
```

**POE2 (0.5+):**
```
.claude/skills/pob/scripts/scripts/analyze.sh "https://poe.ninja/poe2/builds/<league>/character/<account>/<charname>"
  # hoặc mobalytics.gg/poe-2/builds/... hoặc pobb.in link
  → stats, gear, gems, keystones (xem skill /pob)
```
Lưu ý: POE2 hiện chủ yếu dùng poe.ninja snapshot / pobb.in / mobalytics (chưa có fetch trực tiếp bằng tên character như POE1).

### Analyze a build
- **POE1:** `/pob1 <url>` (pobb.in, mobalytics.gg/poe/..., poe.ninja/poe1/...)
- **POE2:** `/pob <url>` hoặc `.claude/skills/pob/scripts/scripts/analyze.sh <url>` (mobalytics.gg/poe-2/..., poe.ninja/poe2/..., pobb.in)

### Look up game mechanics
```
/poewiki1 <query>          → search POE1 wiki mirror (poewiki.net)
/poewiki <query>          → search POE2 wiki mirror (poe2wiki.net)
/poedb1 <patch>            → POE1 database mirror (poedb.tw) per patch
/poedb <patch>            → POE2 database mirror (poe2db.tw) per patch
/passive-skill-tree1       → POE1 passive nodes, paths, stats
/passive-skill-tree       → POE2 passive nodes, paths, stats (0.5+)
/atlas-tree1               → POE1 atlas passive tree
/atlas-tree               → POE2 atlas passive tree (0.5+)
```

### Fetch latest release notes / patch notes (POE1 & POE2)
```
./.claude/skills/poewiki1/scripts/release-notes/fetch.sh                    # latest POE1 (auto-detect from Version_history)
./.claude/skills/poewiki/scripts/release-notes/fetch.sh                    # latest POE2
./.claude/skills/poewiki1/scripts/release-notes/fetch.sh 3.27.0             # specific POE1 version
./.claude/skills/poewiki/scripts/release-notes/fetch.sh 0.5.0              # specific POE2 version
```

- Lightweight fetch via `markitdown` → clean text-only Markdown (no hundreds of icons/images).
- Output is saved under `data/release-notes/{poe1,poe2}/Version_X.Y.Z.md` (under the root `data/` folder, tracked in git).
- Always creates a `latest.md` symlink in the same folder for quick access.
- Use this when you need the exact wording of changes for a new league/patch (especially before writing mechanics or farming strategy notes).

### Trading & pricing
```
/trade1 <search>           → search trade via CDP Relay (browser API, safest)
/gear-upgrade1             → find gear upgrades via CDP Relay + PoB sim
/poe-ninja1                → popular builds, item prices
/poe-watch <item>          → price history (POE1)
```

### Farming & filters
```
/farming-strategy1 → analyze farming strategies
/lootfilter1       → create/modify loot filters
```

### TFT Discord
```
discord https://discord.com/channels/645607528297922560/1143637598313652344
```

---

## Rules

- **Evidence-based** — always fetch real data (character, pob, wiki) before making claims. Quote actual numbers, never guess mechanics.
- **Gameplay first** — prioritize game advice over code changes.
- **Vietnamese content** — all prose in Vietnamese. Keep English for game terms (skills, items, classes, gems, etc.)
- **Temp scripts** — viết vào `./tmp/`, KHÔNG viết vào source directories. `./tmp/` dùng cho one-off scripts, experiments, throwaway code. Top-level `scripts/` đã bị xoá — mọi helper script thuộc về một skill, sống ở `.claude/skills/<name>/scripts/` (hoặc subfolder semantic phù hợp như `.claude/skills/poe-auth/ggg/`).
- **Persisted download data** — Mọi blob persistent (wiki mirror, release notes, database dump, GGG static export, code-dep clone, market snapshot, cached corpus...) đặt vào `data/<category>/`. **Scripts vẫn sống trong `.claude/skills/<skill>/scripts/`** — chỉ data persistent move ra `data/`. KHÔNG skill nào được giữ `data/` hoặc `raw-data/` con bên trong skill folder. Canonical layout:
  - **Canonical naming pattern**: phần lớn category dùng nested split `data/<category>/poe{1,2}/...`. Exception: wiki mirror dùng game-prefix top-level (`poe1-wiki/`, `poe2-wiki/`) vì size lớn (91M + 255M) và goscrape config riêng — pragmatic.
  - `data/poe1-wiki/`, `data/poe2-wiki/` — wiki mirror (goscrape)
  - `data/poedb1/<patch>/`, `data/poedb/<patch>/` — database mirror (poedb.tw / poe2db.tw), organize theo patch number (vì raw numbers đổi theo patch — `./.claude/skills/poedb1/scripts/download.sh 3.28.0` hoặc `poedb/.../download.sh 0.5.0`). Schema khớp GGG skilltree-export — `/passive-skill-tree*` + `/poe-auth` cùng đọc từ đây, không có folder riêng.
  - `data/release-notes/poe{1,2}/Version_X.Y.Z.md` — patch notes (kèm `latest.md` symlink)
  - `data/atlas-tree/poe{1,2}/atlas-tree.json` — GGG atlastree-export blob
  - `data/poe-ninja/poe{1,2}/<league>/{latest,trends}.json + snapshots/` — economy snapshot. League cũ archive sang `<league>/../archive/<league>/` khi league mới launch.
  - `data/price-history/poe{1,2}/{daily/,master.json}` — currency/item price time series cho `/price-forecast*`
  - `data/map-mods/poe{1,2}/<corpus>-mods-X.Y.json` — waystone/tablet mod corpus cho `/map-mod-filter*`
  - `data/trade-static/poe{1,2}/` — GGG trade static (filters/items/stats catalog), **gitignored** (refreshable từ API)
  - `data/character-exports/` — per-character export JSON, **gitignored** (instance data, file naming `export-<charname>.json`)
  - `data/pob-source/poe{1,2}/` — git clone của PathOfBuildingCommunity (~572M cho PoE2), **gitignored**, fetch qua `./.claude/skills/pob/scripts/scripts/fetch-poe2-data.sh`
  - Script trong skill resolve canonical path bằng cách climb relative từ `import.meta.url` (TS) hoặc `dirname "$0"` (sh) — pattern `../../../../data/<category>/poe{1,2}/` từ `.claude/skills/<skill>/scripts/<file>`.
- **NEVER call GGG APIs directly** — Do NOT make direct HTTP requests (curl, fetch, WebFetch) to pathofexile.com endpoints. Use CDP Relay (`cdp.evaluate_async(fetch(...))`) for trade/stash API calls — runs inside browser context with existing auth. For character data, use `/pob1 fetch`. Account was previously flagged — respect rate limits (max 3 search/5s).
- **Playwriter + POE trade site** — Khi dùng `playwriter` để interact với trade site (pathofexile.com/trade, pathofexile.com/trade2), LUÔN sleep 1-2s giữa mỗi action (click, type, navigate, fill form) để tránh bị flag/ban. Account đã từng bị flag → ưu tiên an toàn hơn tốc độ. Nếu cần nhiều action liên tục, batch chúng và sleep giữa mỗi batch.
- **Hạn chế dùng table trong content** — Site có column width rất thấp (brutalist stacked-column UI), table dễ bị tràn/vỡ layout hoặc co lại không đọc được. **Càng ít table càng tốt.** Default: dùng bullet list, definition list, hoặc prose. Chỉ dùng table khi:
  - Dữ liệu thực sự **2D** (nhiều row × nhiều column cùng lúc cần so sánh chéo) VÀ
  - Số column ≤ 3 VÀ mỗi cell text ngắn (≤ 20 ký tự)
  - Nếu vi phạm bất kỳ điều kiện nào → convert sang bullet list hoặc heading + bullet group. Ví dụ: thay vì `| Map | Scarab | Profit |` 5 row, viết "**Strand** — Scarab of Doubling — ~175c/map" theo bullet.

---

## Quantitative Reasoning & Verification

POE là ARPG: damage là chain nhân, defense là layered, profit là expected value. Mọi numerical claim, build recommendation, interaction statement, hoặc farming projection phải trace về derivation verify được. Section này define discipline cho calculation/reasoning áp dụng cho toàn bộ chat advice và content note.

### Authoritative Source Hierarchy

Khi source conflict, ưu tiên theo thứ tự:

1. **Patch note** — `data/release-notes/poe{1,2}/Version_*.md` (GGG official, ground truth)
2. **poedb dump** — `data/poedb{1,2}/<patch>/` (raw GGG skill/item export)
3. **Wiki mirror** — `data/poe{1,2}-wiki/` (community-curated, đôi khi lag patch)
4. **PoB community fork** — calc có thể trễ vài tuần cho mechanic mới
5. **poe.ninja** — economic snapshot, stale theo giờ
6. **Guide creator** (Empyrean, Mathil, Fubgun, etc.) — chỉ secondary, dùng để hiểu intent, không quote số

Conflict giữa source → document conflict explicit trong note. Ví dụ: "Wiki nói multiplier 1.5×, patch note 0.5.0 confirm 1.3× → dùng 1.3×, wiki sẽ update sau."

### Math Chain Bắt Buộc cho Big Number

Mọi DPS claim ≥ 100k, EHP claim, hoặc profit/hour claim phải kèm derivation (hoặc reference link tới PoB file).

**DPS chain (POE1):** `base_hit × (1 + inc_sum) × ∏(1 + more_i) × penetration/exposure_multiplier × hit_per_sec × ailment_uptime_modifier`. Show từng node hoặc link `content/characters/<name>-pob.txt` / pobb.in URL.

**DPS chain (POE2):** giống POE1 chain + Spirit cost / reservation accounting + companion AI uptime (nếu build dùng minion/companion). POE2 có Skill Speed làm separate axis, không gộp vào attack/cast speed.

**EHP layer order (POE1):** armor (physical mitigation) → evasion (entry chance) → block / spell-block → suppress → max res cap → ES/Life pool → recovery rate. Layer nào skip phải nói tại sao (vd CI build skip Life).

**EHP layer order (POE2 0.5+):** armor → evasion → block → max res cap → ES/Life pool → **Runic Ward** (defense layer mới của 0.5, kích hoạt khi life chạm 1, recovery độc lập) → recovery rate. Runic Ward chưa có precedent — treat spreadsheet number như test target chưa verify, log empirical khi vào league.

**Profit/hour:**

```
expected_profit_per_hour =
  (drop_rate_per_map × stack_size × current_market_price)
  × maps_per_hour
  − cost_per_map (scarab/tablet/key/sextant đầu vào)
  − opportunity_cost (atlas points, sustain time)
```

Kèm timestamp giá: snapshot file `data/poe-ninja/poe{1,2}/<league>/snapshots/<date>.json` hoặc trade query date.

### Confidence Label cho Recommendation

Mọi build / farming / mechanic recommendation — cả trong chat trả lời user lẫn trong content note evergreen — label độ chắc theo 3 tier:

- **HIGH** — verified: PoB calc của character thật + in-game tested, hoặc patch note quote literal
- **MEDIUM** — derived từ wiki interaction graph hoặc PoB sim chưa play-tested
- **LOW** — theory-crafting (đặc biệt pre-league), chưa có cách verify hiện tại

Multiple recommendation trong cùng response → label từng cái riêng. Uncertainty acknowledged > confident wrong.

LOW content thuộc về section `## Optimization`, `## Evaluation Rules`, hoặc `## Version History` với test plan explicit ("cần log Y khi vào league"). Body section chính (build philosophy, gear, skill setup) chỉ chứa HIGH/MEDIUM claim với citation.

### Interaction Verification Protocol

Claim "X work với Y" cho ≥ 2 game entity (support gem × skill, keystone × ascendancy, unique × passive notable, jewel × cluster, flask × buff, curse × monster res), hoặc recommend build combo có ≥ 3 moving part → verify bằng một trong hai cách:

- **Option A** — invoke agent `interaction-mapper` (xem `.claude/agents/interaction-mapper.md`). Agent này design cho exactly task này, output gate-split verdict + math impact + exclusion check.
- **Option B** — do gate-split analysis explicit trong note với 3 chiều:
  - **Positive interaction** (synergy multiplier — cái nào multiply cái nào)
  - **Negative interaction** (mitigation / dilution / overlap loss — vd two more multiplier cùng class chỉ nhân một lần)
  - **Exclusion clause** (one-way block — vd Avatar of Fire blocks cold/lightning entirely, Eldritch Battery disables CI synergy, Resolute Technique disables crit, Chaos Inoculation locks Life ở 1)

Mỗi interaction claim trong content note kèm 1 dòng "Exclusion check: <none | list>". Note thiếu exclusion check = chưa stress-test.

### Breakpoint Awareness

POE đầy breakpoint mà số raw không phản ánh — recommendation tăng stat phải check breakpoint trước khi quote uplift %:

- Attack / cast speed (APS → frames-per-action, channeling tick rate)
- Resist cap (75% default, 90% với specific source, max-res cap 95%)
- Suppress threshold (100% capped, không scale tiếp)
- Action speed floor (chilled ground, temp chains)
- Minion cap (skeleton / zombie / spectre count limit)
- Movement speed soft cap (animation cancel window)

Recommendation "tăng X% attack speed sẽ tăng Y% DPS" → kiểm breakpoint table trước, document nếu breakpoint shift uplift thực tế. Ví dụ: từ 4.8 APS lên 5.0 APS có thể không tăng DPS thực nếu animation cap ở 4.95.

### Market Data Freshness

Currency / item price stale rất nhanh (Mageblood swing 50 div trong tuần). Mọi price quote kèm timestamp:

- Snapshot reference: `data/poe-ninja/poe{1,2}/<league>/snapshots/<YYYY-MM-DD>.json`
- Hoặc trade query date (khi fetch live qua `/trade1` / `/trade`)

Snapshot > 7 ngày → re-fetch trước khi quote trong build/farming note. Chat advice dùng giá > 7 ngày OK nếu flag "giá tháng X, có thể đã đổi".

### Failure Mode / Devil's Advocate — Bắt Buộc

Mọi build và farming note phải có section `## Failure Modes` (hoặc `## Risks`) liệt kê tối thiểu 3 scenario build/strategy gãy. Các category chuẩn:

- **Map mod hostile** — mod nào make build unplayable (no regen, less recovery, reflect, ele weakness, additional projectile, etc.)
- **One-shot encounter** — boss pattern nào kill bất chấp EHP spreadsheet (T17 boss slam, Uber pinnacle, Simulacrum wave 25+)
- **Gear / currency floor** — investment cần đạt để build chạy như paper math (vd "cần Mageblood + 6L mới ra số DPS này — dưới floor, build clear 70% tốc độ")
- **Patch sensitivity** — mechanic nào nếu nerf sẽ kill build (vd "build depend vào -200% lightning res từ Doryani's Prototype — nerf prototype = build chết")
- **League start viability** — build có chạy được không gear cố định không, hay cần dump 50 div mới khởi động?

Note thiếu Failure Modes section = note chưa xong. Đây là dấu hiệu paper-craft chưa stress test — phần dễ bị community parrot nhất.

### PoB Coverage Disclosure (POE2 đặc biệt)

POE2 PoB2 community fork trễ patch hơn POE1 PoB. Khi quote DPS/EHP từ PoB2:

- Build dùng league-mới mechanic (companion AI, Runeforging, Runic Ward, Kalguuran skill, Spirit Walker scaling, Martial Artist mechanic) → flag `pob_coverage: PARTIAL` ở frontmatter build note
- List assumption chưa simulate được (vd: "companion uptime giả 80%, AI behavior chưa modeled trong PoB2 v0.5.x")
- Log empirical data khi vào league → update note sau khi materialize character

POE1 build từ PoB1 thường coverage tốt — disclosure chỉ cần khi build dùng league-mới gem chưa được community fork support.

### Patch Version Tagging

Mọi con số trong content evergreen implicit hoặc explicit tag patch version:

- **Implicit** qua frontmatter `patch:` field (vd `patch: 0.5.0`) — số trong body assume cho patch đó
- **Explicit** khi cross-patch comparison (vd "Infernal Legion 0.4.x deal Xm DPS, 0.5.0 nerf còn Ym DPS")
- Patch number giữ ở frontmatter, title chỉ chứa concept (theo voice rule)

Khi patch mới drop, agent `patch-impact-analyzer` scan `content/` tìm doc bị ảnh hưởng và output `data/patches/<version>-impact.md` — đây là handoff để update note batch, không phải tự nhớ tag từng file.

---

## Content Folder Boundaries — định nghĩa rõ

Mỗi document trong `content/` thuộc đúng MỘT folder dựa trên **góc nhìn** nó cung cấp, không phải topic. Cùng một topic (vd Mirage league) có thể xuất hiện ở nhiều folder với góc nhìn khác nhau, mỗi folder cross-link sang nhau. Đây là rule định danh — sai folder = note tìm không thấy + `/vault.new`/`vault-keeper` không match đúng template (`$path` pattern reject).

### Mỗi folder trả lời một câu hỏi

| Folder | Câu hỏi | Voice | Template |
|---|---|---|---|
| `mechanics/<sub>/` | "X work với Y ra sao?" | System analysis, *tại sao* | `mechanic-template` + subfolder-specific |
| `guides/` | "Làm X như thế nào?" | Tutorial, step-by-step | `guide-template` |
| `farming/` | "Farm X lãi bao nhiêu?" | Economic + execution | `farming-template` |
| `builds/<class>/` | "Build X chạy thế nào trên giấy?" | Concept analysis, justification | `build-template` |
| `characters/` | "Character X đang ở đâu?" | Instance snapshot, log | `character-progress-template` |
| `skilltree/` | "Tree X allocate thế nào?" | Tree breakdown | `mechanic-template` |

Raw game data (item stats, skill numbers, monster details) **không** thuộc folder nào trong content/ — query live qua skill `/poewiki` khi cần, hoặc dùng `:wiki-link{url="https://www.poewiki.net/wiki/..."}` MDC component để link ra `poewiki.net` (external) kèm price tooltip.

`mechanics/<sub>/` chỉ dùng khi subfolder thật sự đúng góc nhìn. `mechanics/skills/` dành cho một skill cụ thể; `mechanics/classes/` dành cho class/ascendancy identity hoặc class system; `mechanics/leagues/` dành cho league system. Nếu note là cơ chế tổng hợp cắt ngang nhiều domain (vd companion beast hunt dùng skill + ascendancy + item + monster base), đặt ở root `content/mechanics/<topic>.md` thay vì ép vào subfolder sai. Sai taxonomy làm note khó tìm hơn và tạo cảm giác bài được nhét cho đủ chỗ.

---

## Content Writing Voice (cho `content/` notes)

Site này là **second brain cho gameplay** — mục đích là *guide & learning*, không phải reference dump. Viết như tutorial giải thích cho người mới quay lại league sau, không phải cheat sheet liệt kê fact.

- **Author voice — viết như tác giả/editor sở hữu kiến thức, KHÔNG phải summarizer** — Đây là rule tối thượng, override mọi rule khác trong section này. Mỗi note trong `content/{builds,characters,farming,guides,mechanics,skilltree}/` viết bằng giọng của người *đã chơi, đã test, đã rút kinh nghiệm*, không phải bản tổng kết research từ nguồn ngoài. State facts as one's own knowledge:
  - **Cấm các cụm meta-summary**: "theo Fubgun/Empyrean/Goratha...", "bài viết này tổng hợp từ...", "đây là bản summary của...", "doc này chia thành N phần...", "trong note này chúng ta sẽ tìm hiểu...", "tóm lại là...", "kết luận: ..."
  - **Cấm hedging của summarizer**: "có vẻ như", "theo nhiều nguồn", "được cho là", "phổ biến cho rằng" — viết as fact với số thật, không qualify bằng nguồn ngoài.
  - **Cấm structural meta-talk**: đừng kể với reader rằng note có cấu trúc gì ("phần 1 nói về X, phần 2 nói về Y"), heading đã làm việc đó rồi.
  - **Always keep notes fresh** — Khi hấp thụ kiến thức từ video, transcript, Reddit, guide ngoài, wiki diff, patch note hoặc chat research, content cuối cùng phải đọc như một note native mới của hệ thống. Không để lại dấu vết quy trình thu thập: "video nói", "transcript chỉ ra", "claim", "hypothesis", "source says", "đã đối chiếu", "research note", "fresh take từ X". Nguồn chỉ dùng để hiểu và verify; bài xuất bản phải là kiến thức đã được tiêu hoá.
  - **Không viết kiểu fact-check trong body** — Tránh cặp câu "Sai là... Đúng là..." hoặc "claim này đúng/sai" trong nội dung evergreen. Nếu cần sửa mental model, viết thành rule/principle tự nhiên: "Rare modifier retention làm mỗi lần tame là một roll riêng..." thay vì "Sai là nghĩ... Đúng là...". Chỉ dùng ngôn ngữ audit/fact-check trong chat trả lời user, không đưa vào note.
  - **Unverified content phải thành test plan, không thành hedge** — Nếu league chưa live hoặc interaction chưa test được, viết rõ phần cần log/test trong `Optimization`, `Evaluation Rules` hoặc `Version History`, nhưng không làm cả bài nghe như đang nghi ngờ nguồn. Ví dụ: "Khi vào league, log reservation và AI của từng boss" thay vì "claim boss companion cần test thêm".
  - **State numbers as facts, not citations**: "Wretched Defiler push ~23.2M DPS với setup hiện tại" thay vì "theo PoB calc thì Wretched Defiler được report ~23.2M DPS". Số đến từ `the-leader-a.json` và PoB của *mình*, viết như thế.
  - **Voice test**: đọc lại câu, nếu nó nghe như đang trình bày research cho người khác đọc → viết lại. Nếu nghe như đang ghi chú cho chính mình hoặc dạy đàn em những gì *mình* đã test → đúng giọng.
  - **Ownership với decision**: khi giải thích build choice / farming choice / gear choice, viết "build dùng curse on hit vì..." chứ không "build này được khuyến nghị dùng curse on hit vì..." — đây là build của mình.
- **Prose-first, không lạm dụng bullet** — Mặc định viết bằng câu/đoạn văn có narrative flow. Bullet list chỉ dùng khi (a) thực sự enumerative (≥3 item cùng category, không có quan hệ nhân quả giữa chúng), (b) checklist hành động theo thứ tự, hoặc (c) data points rời rạc không có flow tự nhiên. *Nếu các bullet có thể nối lại bằng "vì", "do đó", "tuy nhiên" → viết lại thành prose.* Bullet rời rạc làm mất ngữ cảnh tutorial và biến note thành reference khô.
- **Tutorial voice — giải thích why, không chỉ what** — Mỗi mechanic, build choice, hay farming strategy phải kèm lý do và cơ chế. Thay vì "Wretched Defiler ~2.32M DPS" → "Wretched Defiler scale theo minion damage + spell damage; vì spectre cast spell nên Wrath aura và Conductivity (qua Doryani's -200% lightning res trên enemy) đẩy DPS lên ~2.32M/spectre — đây là lý do build dùng curse on hit thay vì hex blast."
- **Cross-link aggressive (second brain pattern)** — Mỗi note phải link đến concept liên quan: build note, character file, mechanic page, encounter guide, farming strategy. Dùng Nuxt Content link syntax `[xem build TheLeader_A](/characters/the-leader-a)`. **Game concept (skill gem, support gem, unique item, scarab, currency, jewel, flask, monster, atlas keystone) → dùng MDC `:wiki-link{url="https://www.poewiki.net/wiki/Mageblood"}` — auto link ra poewiki.net + show price tooltip; không host wiki nội bộ nữa.** Mục tiêu: từ bất kỳ note nào, user có thể navigate đến mọi concept nó nhắc tới mà không cần search. *Note đứng một mình = note chết.*
- **Atomic + interconnected** — Mỗi note có **một concept chính** (Karpathy LLM wiki / Andy Matuschak evergreen pattern), nhưng kết nối ra ngoài rất nhiều. Đừng nhồi 5 topic vào một note "for convenience"; tách ra rồi link. Dài cũng được, miễn vẫn về một concept.
- **Headings carry the structure, không phải bullet** — Dùng `##` / `###` để chia note thành section narrative. Mỗi section là một đoạn prose dạy một ý. Đừng dùng heading rồi bên dưới là 10 bullet — đó là reference, không phải tutorial.
- **Title KHÔNG bao giờ đặt tên league hay patch number** — Title trong frontmatter chỉ chứa concept/topic, KHÔNG kèm `Mirage`, `3.28`, league name, patch number. Site auto-concat league + patch + title qua frontmatter `league_name` + `patch` field khi render → đặt thêm vào title sẽ duplicate. Sai: `"Breach Currency Farming — Mirage 3.28"`. Đúng: `"Breach Currency Farming"`. Áp dụng cho mọi document trong `content/` (farming, builds, characters, mechanics) và cho cả H1 trong body của doc (H1 cũng không kèm league). Slug filename vẫn giữ patch prefix (`3-28-breach-final.md`) — đó là filesystem, không phải user-facing title.

---

## Game Concept Linking — dùng WikiLink component

Mọi khái niệm game (skill, support, unique, currency, scarab, jewel, flask, monster, atlas keystone) trong `content/{builds,characters,farming,guides,mechanics,skilltree}/` → `:wiki-link{url="https://www.poewiki.net/wiki/..."}`.

```markdown
:wiki-link{url="https://www.poewiki.net/wiki/Mageblood"}
:wiki-link{url="https://www.poewiki.net/wiki/Watcher's_Eye"}
:wiki-link{url="https://www.poe2wiki.net/wiki/The_Hollow_Mask"}   ← POE2 items dùng poe2wiki.net
```

Component extract item name từ URL, fetch data từ poewiki.net Cargo API qua server route `/api/wiki-data`:
- Render lime chip inline trong prose (item name extracted từ URL)
- Hover/focus → popover hiện item mods, base type, flavour text + giá league hiện tại
- Click → mở wiki URL trong tab mới

Site **không host wiki content nội bộ**. Item data fetched trực tiếp từ wiki API lúc build/runtime.

KHÔNG áp dụng trong body section `## Relationships` — section đó dùng internal route link `[Title](/route)` (cross-link nội bộ giữa các note), không phải `:wiki-link`. Wiki-link chỉ cho game concept trong prose.
