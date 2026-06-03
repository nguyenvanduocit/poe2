---
skill_name: trade
description: "POE2 trade toolkit — search items, price check via playwriter page-context fetch (same-origin browser API, single-funnel rate-limit) on the trade endpoint. Same-origin calls through your authenticated Chrome. Use for POE2 price checking, item searching, or stat filter lookup."
version: 2.0.0
tags: [trade, api, prices, poe, poe2, playwriter]
---

# POE2 Trade Toolkit (via playwriter)

Mọi trade API call chạy `fetch()` trong page-context của tab **www.pathofexile.com** đã login, driven qua playwriter CLI. GGG thấy same-origin browser traffic, indistinguishable từ normal usage — cookie (POESESSID, cf_clearance) + Origin/Referer/UA do chính tab gửi. Transport `poe-trade/ggg/transport.ts` export `poeFetch(game, method, path, body?) → {status, ratelimit, data}`: nó tự enforce sàn ≥2s spacing (persist ra `~/.poe-playwriter-state.json` xuyên suốt mọi lần gọi CLI), đọc header `x-rate-limit-*`, back off khi 429/penalty, serialize call qua lockfile. `client.ts` (`PoeTradeClient`) + `trade-search.ts` đều route qua `poeFetch` nên dùng thoải mái, không cần tự lo spacing.

**NEVER curl GGG directly** — no `curl https://www.pathofexile.com/...`, no WebFetch tới pathofexile.com. Account `hopthuxacnhan#3062` đã từng bị flag → direct calls = bị flag lại. Mọi GGG call đi qua page-context fetch trong tab đã login (browser tab mới là cái thực sự fetch GGG). `poe-trade/ggg/client.ts` + các CLI đều route qua `poeFetch` nên dùng thoải mái.

**POE2-specific endpoint paths (upstream):** `/api/trade2/search/poe2/<league>` và `/api/trade2/fetch/...` (KHÁC `/trade/` của POE1). POE2 UI URL: `https://www.pathofexile.com/trade2/search/poe2/<league>/<id>`. Client tự thêm `realm=poe2` trên fetch.

## Read-only — no whisper, no browser drive

Page-context fetch **chỉ ĐỌC**: search / fetch / exchange / data. Nó KHÔNG whisper, KHÔNG mua, KHÔNG mở/điều khiển tab giúp user. Mọi action cần thao tác trình duyệt (click whisper button, mở tab kết quả) đều ngoài khả năng của lớp này.

Flow đúng: search → narrow → build URL `https://www.pathofexile.com/trade2/search/poe2/<league>/<queryId>` → **đưa URL cho user tự mở và whisper**. Đừng hứa "mình sẽ mở tab / whisper giúp" — không làm được qua page-context fetch.

## Current League

POE2 0.5 league: **Runes of Aldur** (launch ~2026-05-29). Permanent equivalent: **Standard**. Hardcore: **Hardcore Runes of Aldur**.

Khi gõ league trong payload, dùng EXACT casing như UI hiển thị — plain string `{league:"Runes of Aldur"}` (CLI/client tự URL-encode khi build upstream path). Verify tên chính xác trên `https://www.pathofexile.com/trade2/` rồi cập nhật snippet bên dưới.

## Prerequisite — logged-in Chrome tab

Page-context fetch cần một tab www.pathofexile.com sẵn sàng. Trước khi chạy call thật:

- Chrome đang **mở**, có một tab **www.pathofexile.com đã login** (vào `/trade2/` cho chắc cookie + cf_clearance còn tươi).
- Tab đó đã **bật Playwriter extension** (click icon extension trên tab). Không có path headless — fetch luôn chạy trong tab thật.

Nếu chưa bật extension, `poeFetch` báo lỗi rõ ràng ("Playwriter extension not connected. Open Chrome, log into www.pathofexile.com, and click the Playwriter extension icon on that tab.").

Cho ad-hoc snippet (mục bên dưới), tạo session một lần: `playwriter session new` → in ra session id (vd `1`), reuse cho mọi `playwriter -s <id>` sau đó. Lớp TS tự gọi `ensureSession()` nên primary path không cần bước này.

## Rate limiting — transport lo, không tự sleep (qua TS layer)

`poeFetch` là phễu DUY NHẤT cho mọi call đi qua lớp TS: serialize qua lockfile (`~/.poe-playwriter.lock`), enforce sàn ≥2s spacing (persist `lastCallMs` ra `~/.poe-playwriter-state.json` xuyên suốt mọi lần gọi CLI), đọc policy thật từ header `x-rate-limit-*` mỗi response, tôn trọng `Retry-After`/penalty khi 429. Vì account đã-flag, sàn này **không bao giờ relax**.

Hệ quả: chạy `trade-search.ts` / `PoeTradeClient` / `poeFetch` back-to-back — lớp transport tự queue + space, **KHÔNG tự `sleep`**. Đọc `ratelimit` field trong response wrapper để biết budget hiện tại.

**Ngoại lệ — ad-hoc playwriter snippet bypass `poeFetch` (đọc kỹ, account đã-flag):** khi tự gọi `p.evaluate(fetch(...))` trực tiếp (mục "Ad-hoc page-context fetch"), KHÔNG còn lớp spacing. Hard rules học từ thực chiến:

- **`sleep ≥3s` giữa mỗi call** (không phải 2s) — account flagged, an toàn > tốc độ. Quá nhiều search nhanh trip **rate penalty RIÊNG của search-bucket**: search-fetch bị GGG GIỮ response → `p.evaluate` vượt cap ~10s → playwriter rớt connection với lỗi `hono/cors` (KHÔNG phải lỗi GGG). data/exchange/fetch bucket riêng, không bị cùng lúc.
- **≤2 GGG call / snippet.** `p.evaluate` cap thực thi ~10s; 3+ fetch tuần tự (kèm sleep) trong một snippet = timeout. An toàn nhất: **một call/snippet**, tách batch fetch (≤10 id/call) thành nhiều lệnh Bash riêng.
- **Connection drop recovery:** `playwriter session reset <id>` rồi space ≥3s trước khi thử lại. Nếu vẫn rớt → diagnose bằng fetch nhẹ same-origin: `fetch("https://www.pathofexile.com/favicon.ico")` hoặc GET `/api/trade2/data/leagues`. Favicon/data trả nhanh nhưng `/search` treo = **search-bucket penalty** → đợi vài phút cho nguội (đọc `x-rate-limit-account-state`: `"1:5:0"` = khỏe, không penalty; số thứ 3 > 0 = đang phạt). Cả favicon cũng treo = bridge/tab thật sự hỏng → bảo user reload tab `/trade2/`.
- **`/api/trade2/data/stats` ~738KB LÀM VỠ transport** (cả `poeFetch` lẫn ad-hoc): output quá lớn cho một dòng CLI → `JSON.parse` lỗi "Expected '}'" (truncation). ĐỪNG fetch nguyên stats về Node. Lookup stat-id bằng cách **filter NGAY trong page-context** (chạy `j.result` filter bên trong `p.evaluate`, chỉ return entries khớp regex → payload nhỏ, không vỡ). Hoặc dùng reference IDs cached ở "## Stat Filter Lookup" (đỡ call hẳn).

## Result Workflow — securable + narrow-by-`total` + rank top-10 (BẮT BUỘC khi tìm upgrade cho user)

User chơi để **mua nhanh + đúng đồ tốt**. Mỗi lần đưa list offline sort-giá = lặp đúng lỗi user đã dặn bỏ. Ba rule cứng (cũng ở project memory):

1. **`status: { option: "securable" }`** — chỉ listing mua-ngay (instant buyout), KHÔNG `any`/`online`/offline. Offline whisper-rồi-chờ = vô dụng với user.
2. **URL cuối phải TỰ NÓ ra ~10-15 item, không phải 400.** Dùng field `total` mỗi search làm feedback: **raise floor stat lên dần cho tới khi `total` ≈ 10-15** rồi mới đưa URL đó. ĐỪNG để floor thấp (total 400+) rồi chỉ rank top-10 phía mình — user mở URL ra vẫn phải cuộn 400. Quy trình: probe total → >25 siết tiếp, <8 nới một chút. Ưu tiên siết axis user quan tâm nhất (vd "ưu tiên evasion" → push `equipment_filters.ev.min` trước).
3. **Trả top-10 cây TỐT NHẤT, không phải 10 cây rẻ nhất.** `sort:{price:"asc"}` một mình ra junk roll tối thiểu — **securable đặc biệt bị FLOOD bản sao junk mass-listed** (bulk currency-exchange) nên cheapest-first = 20 món y hệt. Phải: đặt floor cao (loại junk) → fetch batch (~16-20) → **rank cục bộ theo điểm** (stat user quan tâm) → present 10 con điểm cao nhất kèm giá. Đưa kèm cả URL đã-narrow.

## Search pattern

Mọi response bọc trong `{status, ratelimit:{x-rate-limit-*}, data}`. `data` là JSON đã parse — search trả `{total, id, result:[...]}`.

CLI là đường nhanh nhất (route qua `poeFetch`, tự rate-limit-safe):

```bash
bun .claude/skills/poe-trade/ggg/trade-search.ts \
  --game poe2 --league "Runes of Aldur" \
  --type "Heavy Crossbow" \
  --price 50d \
  --status any \
  --limit 10 --json
```

Flag chính: `--type` (base type) / `--name` (exact unique name) / `--term` (fuzzy), `--stat "text:min"` (repeatable, fuzzy text → stat ID), `--category cat`, `--price 50d|50c`, `--min-price`, `--status online|instant|any`, `--limit N`, `--json`. CLI in URL `https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/<id>` để đưa cho user.

### Ad-hoc page-context fetch (escape hatch)

Cho endpoint chưa có CLI flag, gọi page-context fetch trực tiếp trong tab đã login (sleep ≥2s giữa mỗi call — không có lớp `poeFetch` space giúp):

**Header bắt buộc:** raw `fetch()` trong page-context KHÔNG tự gắn `X-Requested-With: XMLHttpRequest` (chỉ XHR wrapper của site mới gắn) → GGG 403 POST `/search` nếu thiếu. Snippet dưới đã thêm sẵn; `poeFetch` + `trade-search.ts` cũng tự gắn. `Sec-Fetch-*` do browser set, đúng sẵn vì same-origin.

```bash
playwriter session new      # once → prints a session id, e.g. 1
playwriter -s 1 -e 'const p = context.pages().find(p => { try { return new URL(p.url()).hostname === "www.pathofexile.com"; } catch { return false; } }); if (!p) throw new Error("Open a logged-in www.pathofexile.com tab with Playwriter enabled"); const r = await p.evaluate(async () => { const resp = await fetch("https://www.pathofexile.com/api/trade2/search/poe2/Runes%20of%20Aldur", { method: "POST", credentials: "include", headers: {"content-type":"application/json","x-requested-with":"XMLHttpRequest"}, body: JSON.stringify({ query: { status: { option: "any" }, type: "Heavy Crossbow" }, sort: { price: "asc" } }) }); const rl = {}; resp.headers.forEach((v,k)=>{ if(k.toLowerCase().startsWith("x-rate-limit")) rl[k]=v; }); return { status: resp.status, ratelimit: rl, data: await resp.json() }; }); console.log(JSON.stringify(r))'
```

Lấy `data.id` (query id) + `data.result` (mảng item hash, tối đa 100) cho bước fetch. Build URL cho user: `https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/<data.id>`.

## Fetch detail

Fetch nhận tối đa **10 id/call** (GGG hard limit). Client tự thêm `realm=poe2`. Raw path qua `poeFetch`:

```bash
bun -e 'import { poeFetch } from "./.claude/skills/poe-trade/ggg/transport"; const r = await poeFetch("poe2", "GET", "/api/trade2/fetch/abc,def?query=<data.id>&realm=poe2"); for (const it of r.data.result) console.log((it.listing.account.online ? "online" : "offline"), it.listing.price.amount, it.listing.price.currency + ":", (it.item.explicitMods || []).join(" | "));'
```

Hoặc qua ad-hoc page-context snippet (đổi URL thành `/api/trade2/fetch/abc,def?query=<data.id>&realm=poe2`, method GET, sleep ≥2s):

```bash
playwriter -s 1 -e 'const p = context.pages().find(p => { try { return new URL(p.url()).hostname === "www.pathofexile.com"; } catch { return false; } }); if (!p) throw new Error("Open a logged-in www.pathofexile.com tab with Playwriter enabled"); const r = await p.evaluate(async () => { const resp = await fetch("https://www.pathofexile.com/api/trade2/fetch/abc,def?query=QID&realm=poe2", { credentials: "include" }); const rl = {}; resp.headers.forEach((v,k)=>{ if(k.toLowerCase().startsWith("x-rate-limit")) rl[k]=v; }); return { status: resp.status, ratelimit: rl, data: await resp.json() }; }); console.log(JSON.stringify(r))' \
  | jq -r '.data.result[] | "\(if .listing.account.online then "online" else "offline" end) \(.listing.price.amount) \(.listing.price.currency): \((.item.explicitMods // []) | join(" | "))"'
```

## Pagination

Search trả tới **100 id**. Fetch theo batch ≤10. Chạy `trade-search.ts --limit N` để CLI tự lo search + fetch + space (route qua `poeFetch`). Nếu tự paginate qua `poeFetch`, fire các batch back-to-back — transport serialize + space:

```bash
bun -e '
import { poeFetch } from "./.claude/skills/poe-trade/ggg/transport";
const search = await poeFetch("poe2", "POST", "/api/trade2/search/poe2/Runes%20of%20Aldur", { query: { status: { option: "any" }, type: "Heavy Crossbow" }, sort: { price: "asc" } });
const qid = search.data.id, ids = search.data.result;
for (let i = 0; i < ids.length; i += 10) {
  const batch = ids.slice(i, i + 10);
  const r = await poeFetch("poe2", "GET", `/api/trade2/fetch/${batch.join(",")}?query=${qid}&realm=poe2`);
  console.log(JSON.stringify(r.data.result));
}'
```

## Critical Gotchas

### 1. `name` vs `type` field (giống POE1)

- **Unique items** (e.g. The Auspex, Facebreaker POE2) → field `name`
- **Base types** (e.g. Heavy Crossbow, Expert Crossbow, Sapphire Ring, Wretched Crown) → field `type`
- Sai → HTTP 400 "Unknown item base type"

POE2 base type naming khác POE1 đáng kể — verify qua `/api/trade2/data/items` trước khi assume name.

### 2. Status gotcha — `online` hides 90%+ of supply

| Option | Description | When to use |
|--------|-------------|-------------|
| `online` | Only players currently online (default) | Khi cần whisper-and-trade ngay |
| `securable` | Instant buy (currency exchange listings) | Currency-for-item |
| `available` | Both online + instant | Default cho hầu hết workflow |
| `any` | All listings gồm offline | **Best cho discovery / price research / niche item** |

Default `online` làm bạn tưởng item hiếm/đắt trong khi thực tế 10-100x listing tồn tại offline. POE2 trade volume thấp hơn POE1 đáng kể (đặc biệt early league) → `any` càng quan trọng khi research.

### 3. POE2 currency tier khác POE1 hoàn toàn

- **Exalted Orb** = unit chính (giống Divine của POE1)
- **Divine Orb** = unit cao hơn (mirror-tier scaling)
- **Chaos Orb** = vẫn tồn tại nhưng vai trò khác POE1 (re-roll resist trên rare)
- **Gold** = ascendancy + waystone + currency tier mới của POE2

Price filter: `{ price: { max: 50, option: "exalted" } }` — KHÔNG dùng `"chaos"` làm default. Verify currency option list qua `/api/trade2/data/static`.

### 4. POE2 KHÔNG có gem-level trade gem mod

POE2 skill gem work khác POE1 (uncut skill gem + spirit system). KHÔNG có "Awakened Lv5 Empower" tương đương — không cần filter `misc_filters.gem_level`. Search support gem theo item name (vd "Spirit Gem (level 19)") chứ không qua `misc_filters`.

### 5. Currency Exchange API có shape khác

Exchange endpoint `/api/trade2/exchange/poe2/<league>` nhận body với `query` bọc object `{exchange:{...}}`. `data.result` trả **object keyed by listing ID** (giống POE1), KHÔNG phải array:

```bash
playwriter -s 1 -e 'const p = context.pages().find(p => { try { return new URL(p.url()).hostname === "www.pathofexile.com"; } catch { return false; } }); if (!p) throw new Error("Open a logged-in www.pathofexile.com tab with Playwriter enabled"); const r = await p.evaluate(async () => { const resp = await fetch("https://www.pathofexile.com/api/trade2/exchange/poe2/Runes%20of%20Aldur", { method: "POST", credentials: "include", headers: {"content-type":"application/json","x-requested-with":"XMLHttpRequest"}, body: JSON.stringify({ query: { exchange: { status: { option: "online" }, want: ["divine"], have: ["exalted"] } } }) }); return { status: resp.status, data: await resp.json() }; }); console.log(JSON.stringify(r))' \
  | jq '.data.result | to_entries[:5][] | .value.listing.offers[0] | "\(.exchange.amount) \(.exchange.currency) per \(.item.amount) \(.item.currency)"'
```

### 6. POE2 0.5 — Remnant + Runic Recipe craft items khác hẳn POE1

Trade POE2 0.5 có category mới:
- **Remnant** (league mechanic Runes of Aldur — 2-10 slot crafted gear)
- **Verisium-runed items** (có Runic Ward layer)
- **Alloy** + **Ancient Rune** components (13 mỗi loại)
- **Kalguuran skills/supports** craftable

Schema các category này CHƯA verified — fetch `/api/trade2/data/items` thực tế sau khi vào league. TODO trong "Pending Verification".

### 7. Narrowing search to ONE specific listing (giống POE1)

Khi muốn direct user tới một item cụ thể, tighten stat filter để match exact stats item đó. Dùng `min` value just below target, KHÔNG dùng `max` (chỉ equal-or-better mới match). Narrow trước rồi đưa URL → tab user mở chỉ hiện 1-10 listing, không phải 100+.

### 8. POE2 query structure — filter groups + sort placement (verified 0.5)

- `sort` là **sibling top-level của `query`**, KHÔNG nằm trong `query`. Sai → 400 "Unknown or invalid top-level filter: sort". Đúng: `{ query:{...}, sort:{price:"asc"} }`.
- Filter group cho defence numeric (evasion/armour/ES/block) là **`equipment_filters`**, KHÔNG phải `armour_filters` của POE1 (POE2 trả 400 "Unknown filter group: armour_filters"). Lọc evasion base: `filters.equipment_filters.filters.ev:{min:900}` (cũng có `ar`, `es`). Đây là cách pre-narrow evasion ngay trong query (rank-cục-bộ không đủ để URL gọn).
- Category trong `filters.type_filters.filters.category.option` (đã verify): `weapon.sceptre`, `armour.chest`. Sai category thường trả **200 / total 0** (KHÔNG error) → calibrate bằng `total`, đừng tưởng "hết hàng".
- Rarity: `filters.type_filters.filters.rarity.option = "unique"` (lọc riêng unique). LƯU Ý: spirit≥1 trên unique KHÔNG lọc đúng (mod unique biểu diễn khác) → trả ~10000; fetch tên thật để biết unique nào (Soul Mantle = spirit 75/ES, Pariah's Embrace = spirit 50 + evasion ~180).
- Price: `filters.trade_filters.filters.price:{max:20,option:"exalted"}`.

### 9. Spirit không filter đồng nhất giữa các slot

- **Sceptre**: Spirit là **property base** của item (~100, hiện trong `item.properties` name "Spirit"), KHÔNG filter bằng stat được — `implicit.stat_3981240776 ≥ X` trên sceptre = total 0. Muốn spirit sceptre cao → filter **`% increased Spirit`** (`explicit.stat_3984865854`); nó scale base (100 × 1.45 = 145). Carry mod companion build: `Allies in your Presence deal #% increased Damage` (`explicit.stat_1798257884`) + `+Level of all Minion Skills` (`explicit.stat_2162097452`).
- **Body armour / amulet**: Spirit là **explicit mod** `+# to Spirit` (`explicit.stat_3981240776`) — filter bình thường. Trần thực tế rare body: spirit+life co-roll ~55-58 (spirit≥65 + life≥60 = 0 listing); pure spirit ~75 nhưng 0 life (junk flood). Spirit + evasion cao (ev 1300+) cũng co-roll được ~60 spirit (giá 15-50ex). **Ring/belt POE2 KHÔNG roll spirit.**

## Stat Group Types (giống POE1)

| Type | Description | Use Case |
|------|-------------|----------|
| `and` | All filters must match | Exact requirements |
| `count` | At least N filters must match | Flexible requirements |
| `weight` | Weighted sum với min/max threshold | Rank theo overall quality |
| `not` | None of the filters must match | Exclude unwanted mods |
| `if` | Conditional filters | Match only if condition met |

Stat ID prefix dùng cùng namespace `explicit.stat_*`, `pseudo.pseudo_*`, nhưng hash khác POE1 (POE2 mods khác). Luôn lookup qua `/api/trade2/data/stats`, không copy từ POE1.

## Stat Filter Lookup

POE2 stat ID khác POE1 hoàn toàn. KHÔNG dùng `.claude/skills/poe-trade/ggg/filters.ts` (cache POE1).

```bash
# Full list (life explicit mods) — qua poeFetch
bun -e 'import { poeFetch } from "./.claude/skills/poe-trade/ggg/transport"; const r = await poeFetch("poe2", "GET", "/api/trade2/data/stats"); for (const g of r.data.result) for (const e of g.entries) if (e.type === "explicit" && /life/i.test(e.text || "")) console.log(e.id, "|", e.text);'

# Notable option lookup (options của 1 stat id)
bun -e 'import { poeFetch } from "./.claude/skills/poe-trade/ggg/transport"; const r = await poeFetch("poe2", "GET", "/api/trade2/data/stats"); for (const g of r.data.result) for (const e of g.entries) if (e.id === "explicit.stat_<HASH>") console.log(JSON.stringify(e.option?.options));'
```

Reference stat-id POE2 đã tra (CACHE — dùng thẳng, KHỎI fetch 738KB stats):

- **Defence/res:** max Life `explicit.stat_3299347043` · Fire Res `explicit.stat_3372524247` · Lightning Res `explicit.stat_1671376347` · all Elemental Res `explicit.stat_2901986750` · Evasion Rating `explicit.stat_2144192055` (local `explicit.stat_53045048`).
- **Attributes:** Intelligence `explicit.stat_328541901` · all Attributes `explicit.stat_1379411836`.
- **Spirit:** `+# to Spirit` (flat, body/amulet) `explicit.stat_3981240776` (alt `explicit.stat_2704225257`) · `#% increased Spirit` (đòn bẩy sceptre) `explicit.stat_3984865854` (alt `explicit.stat_1416406066`).
- **Minion/companion:** `+# Level of all Minion Skills` `explicit.stat_2162097452` · `+# Level of all Tamed Companion Skills` `explicit.stat_448592698` · `Allies in your Presence deal #% increased Damage` `explicit.stat_1798257884` · `Minions deal #% increased Damage` `explicit.stat_1589917703` · `Minions have #% increased maximum Life` `explicit.stat_770672621` · `Allies in your Presence have #% to all Elemental Resistances` `explicit.stat_3850614073`.

Defence numeric (evasion/armour/ES của BASE) lọc qua `equipment_filters` (gotcha 8), KHÔNG qua stat. Stat chưa có ở đây → filter trong page-context (gotcha 738KB ở "## Rate limiting"), đừng fetch nguyên catalog ~738KB (làm vỡ transport).

## Authenticity gate (call thật ĐẦU TIÊN trên account đã-flag)

Một page-context fetch thật phải trả về **đủ ba** thứ — "trả 200" CHƯA đủ:

1. **status 200** từ tab đã login (không phải 401/403 — nếu vậy tab chưa login hoặc cf_clearance hết hạn → mở lại tab `/trade2/`).
2. **`ratelimit` non-empty** — có ít nhất một key `x-rate-limit-*`. Nếu `ratelimit` rỗng → response same-origin không expose header (đáng lẽ phải có) → limiter mất khả năng tự-tune, dừng lại điều tra.
3. **`data` parsed thật** — search trả `{total, id, result}`, data trả `{result:[...]}`. Object rỗng / HTML error page = không phải đèn xanh.

Đủ ba mới chạy volume. Ưu tiên call test là `/api/trade2/data/stats` (GET, ít nhạy nhất).

## How it works

1. CLI / `PoeTradeClient` / `poeFetch` build path GGG (`/api/trade2/...`).
2. `poeFetch` acquire lockfile, chờ sàn ≥2s spacing (state persist `~/.poe-playwriter-state.json`).
3. Viết script tạm rồi chạy playwriter CLI trong session đã có, `p.evaluate()` chạy `fetch()` trong page-context của tab www.pathofexile.com.
4. Browser tự gửi cookie (POESESSID, cf_clearance) + Origin/Referer/UA → GGG thấy same-origin traffic.
5. `poeFetch` đọc `x-rate-limit-*` từ response, cập nhật state, back off khi 429 — rate limit enforce ở transport, KHÔNG ở caller.

## Pending Verification (POE2 0.5)

| Item | Action |
|------|--------|
| Exact league name slug | Check `https://www.pathofexile.com/trade2/` dropdown |
| Currency option list | `/api/trade2/data/static` — verify exalted/divine/chaos/gold |
| Remnant item schema | Fetch sample Remnant listing — check `category` field |
| Verisium runed mod stat IDs | `/api/trade2/data/stats` filter text `runed`/`verisium` |
| Kalguuran skill gem trade format | 1 sample listing + cross-ref patch notes |
| Spirit Walker companion equipment category | New ascendancy = new category (verify `/api/trade2/data/items`) |

## Files

| File | Purpose |
|------|---------|
| `poe-trade/ggg/transport.ts` | `poeFetch(game, method, path, body?)` — playwriter page-context transport, lockfile + ≥2s spacing + rate-limit headers |
| `poe-trade/ggg/client.ts` | `PoeTradeClient` — search / fetch / exchange / data wrapper, routes qua `poeFetch`, tự thêm `realm=poe2` |
| `poe-trade/ggg/trade-search.ts` | CLI: search + fetch + build trade URL (`--type`/`--stat`/`--price`/`--game`/`--league`/`--status`/`--limit`) |
| `.claude/skills/trade/SKILL.md` | (this file) POE1 sibling cùng tên cho pattern không đổi |
