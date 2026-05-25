---
skill_name: trade
description: "POE2 trade toolkit — search items, price check via playwriter (or CDP Relay) trên trade endpoint. Uses your authenticated Chrome session for safe, same-origin API calls. Use for POE2 price checking, item searching, or stat filter lookup."
version: 1.0.0
tags: [trade, api, prices, poe, poe2, playwriter, cdp-relay]
---

# POE2 Trade Toolkit (via playwriter)

All trade API calls go through your authenticated Chrome browser — executing `fetch()` inside the page context. GGG sees same-origin browser traffic, indistinguishable from normal usage. Two transport options:

- **playwriter** (preferred) — connects via Playwriter extension, persistent session, no per-call setup overhead
- **CDP Relay** (alternative) — Python wrapper around Chrome DevTools Protocol, useful when playwriter unavailable

**NEVER call GGG trade API directly** — no curl, no WebFetch, no `.claude/skills/poe-auth/ggg/client.ts`. Account `hopthuxacnhan#3062` đã từng bị flag — direct calls = bị flag lại.

**POE2-specific endpoint paths:** `/api/trade2/search/poe2/<league>` và `/api/trade2/fetch/...` (KHÁC `/trade/` của POE1). POE2 UI URL: `https://www.pathofexile.com/trade2/search/poe2/<league>/<id>`.

## Current League

POE2 0.5 league: **Runes of Aldur** (launch ~2026-05-29). Permanent equivalent: **Standard**. Hardcore: **Hardcore Runes of Aldur**.

Khi gõ league trong URL, dùng EXACT casing như UI hiển thị (URL-encode space khi cần). Khi 0.5 launch xong, verify tên chính xác trên `https://www.pathofexile.com/trade2/` rồi cập nhật vào snippet bên dưới.

## Critical: Rate Limiting

Account-level limit cùng spec với POE1 — **`3:5:60`** — max 3 requests / 5 seconds / 60s penalty. **Minimum safe spacing = `2s` between calls** (NOT 1s).

- `1s` spacing = 5 req in 5s = **guaranteed flag** (over account budget by 67%)
- `2s` spacing = 2.5 req in 5s = safe with margin
- For batch of >10 requests, prefer `2.5s` for extra safety

| Header | Format | Meaning |
|--------|--------|---------|
| `x-rate-limit-account` | `3:5:60` | Max 3 req / 5s, penalty 60s |
| `x-rate-limit-ip` | `8:10:60,15:60:120,60:300:1800` | Multi-tier IP limits |
| `x-rate-limit-account-state` | `1:5:0` | Current usage: 1 used, 0 penalty |

If `status: 429` → wait the penalty duration before retrying. **Never override the minimum 2s spacing**, even if user requests `1s` to be "faster" — refuse and explain it triggers the ban.

## Setup — playwriter (preferred)

```bash
# Create session (once per workflow)
playwriter session new
# outputs: 19 (or similar session ID)
```

Then attach `state.page` to a POE2 trade tab:

```bash
playwriter -s 19 -e 'const pages = context.pages(); const poe = pages.find(p => { try { return p.url().includes("pathofexile.com/trade2"); } catch { return false; } }); if (poe) { state.page = poe; console.log("Attached:", poe.url()); } else { state.page = await context.newPage(); await state.page.goto("https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur", { waitUntil: "domcontentloaded" }); console.log("Created:", state.page.url()); }'
```

**Tab gotcha:** if user closes the tab during workflow, `state.page` goes stale. Re-attach via the snippet above whenever you get `"Target page, context or browser has been closed"` errors.

**Prerequisites:** Chrome running with Playwriter extension enabled. If extension not connected, ask user to click the extension icon on the target tab.

## Search Pattern (playwriter)

```bash
playwriter -s 19 --timeout 60000 -e "$(cat <<'EOF'
const sleep = ms => new Promise(r => setTimeout(r, ms));
const LEAGUE = "Runes of Aldur";   // adjust per current league
const LEAGUE_URL = encodeURIComponent(LEAGUE);

async function search(query) {
  return await state.page.evaluate(async ({q, league}) => {
    const r = await fetch(`https://www.pathofexile.com/api/trade2/search/poe2/${encodeURIComponent(league)}`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
    return { status: r.status, body: await r.json() };
  }, {q: query, league: LEAGUE});
}

async function fetchItems(ids, queryId) {
  return await state.page.evaluate(async ({i, q}) => {
    const r = await fetch(`https://www.pathofexile.com/api/trade2/fetch/${i}?query=${q}&realm=poe2`);
    return await r.json();
  }, {i: ids.join(","), q: queryId});
}

const q = {
  query: {
    status: { option: "any" },
    type: "Heavy Crossbow",            // POE2 base type (verify in /api/trade2/data/items)
    stats: [{ type: "and", filters: [] }],
    filters: { trade_filters: { filters: { price: { max: 50, option: "exalted" } } } }
  },
  sort: { price: "asc" }
};

const r = await search(q);
console.log(`Total: ${r.body.total}, query_id: ${r.body.id}`);
console.log(`URL: https://www.pathofexile.com/trade2/search/poe2/${LEAGUE_URL}/${r.body.id}`);

await sleep(2500);  // MINIMUM 2s, prefer 2.5s

if (r.body.total > 0) {
  const top = r.body.result.slice(0, 3);
  const details = await fetchItems(top, r.body.id);
  for (const it of (details.result || [])) {
    const p = it.listing.price;
    const online = it.listing.account.online ? "online" : "offline";
    console.log(`${online} ${p.amount} ${p.currency}: ${(it.item.explicitMods || []).join(" | ")}`);
  }
}
EOF
)"
```

## Critical Gotchas

### 1. `name` vs `type` field (giống POE1)

- **Unique items** (e.g. The Auspex, Facebreaker, Mageblood-equivalents POE2) → use `name` field
- **Base types** (e.g. Heavy Crossbow, Expert Crossbow, Sapphire Ring, Wretched Crown) → use `type` field
- Wrong choice returns **HTTP 400 "Unknown item base type"**

POE2 base type naming khác POE1 đáng kể — verify qua `/api/trade2/data/items` trước khi assume name.

### 2. Status gotcha — `online` hides 90%+ of supply

| Option | Description | When to use |
|--------|-------------|-------------|
| `online` | Only players currently online (default) — requires in-person trade | When you NEED to whisper-and-trade right now |
| `securable` | Instant buy (currency exchange listings) | Currency-for-item, currency exchange |
| `available` | Both online + instant | Default for most workflows |
| `any` | All listings including offline | **Best for discovery / price research / niche items** |

Default `online` makes you think items are rare/expensive when actually 10-100x more listings exist offline. POE2 trade volume thấp hơn POE1 đáng kể (đặc biệt early league), nên `any` quan trọng hơn nữa khi research.

### 3. POE2 currency tier khác POE1 hoàn toàn

POE2 trade dùng currency unit khác:

- **Exalted Orb** = unit chính (giống Divine của POE1)
- **Divine Orb** = unit cao hơn nữa (mirror-tier scaling)
- **Chaos Orb** = vẫn tồn tại nhưng vai trò khác POE1 (re-roll resist trên rare)
- **Gold** = ascendancy + waystone + currency tier mới của POE2

Khi viết price filter: `{ price: { max: 50, option: "exalted" } }` — KHÔNG dùng `"chaos"` làm default. Verify currency option list qua `/api/trade2/data/static`.

### 4. POE2 KHÔNG có gem-level trade gem mod

POE2 skill gems work khác POE1 hoàn toàn (uncut skill gems + spirit system). KHÔNG có "Awakened Lv5 Empower" tương đương — không cần filter `misc_filters.gem_level` như POE1. Spirit gems trade khác (gem + support là 2 instance riêng).

Cụ thể: khi search support gem trong POE2, tìm theo item name (vd "Spirit Gem (level 19)") chứ không phải qua misc_filters.

### 5. Currency Exchange API có shape khác

`/api/trade2/exchange/poe2/<league>` endpoint trả `result` là **object keyed by listing ID** (giống POE1):

```js
const r = await state.page.evaluate(async ({league}) => {
  const res = await fetch(`https://www.pathofexile.com/api/trade2/exchange/poe2/${encodeURIComponent(league)}`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      exchange: { status: { option: "online" }, want: ["divine"], have: ["exalted"] }
    })
  });
  return await res.json();
}, {league: LEAGUE});

// r.result is OBJECT not array
for (const [id, listing] of Object.entries(r.result).slice(0, 5)) {
  const offer = listing.listing.offers[0];
  console.log(`${offer.exchange.amount} ${offer.exchange.currency} per ${offer.item.amount} ${offer.item.currency}`);
}
```

### 6. POE2 0.5 — Remnant + Runic Recipe craft items khác hẳn POE1

Trade POE2 0.5 sẽ có item categories mới:
- **Remnant** (league mechanic Runes of Aldur — 2-10 slot crafted gear)
- **Verisium-runed items** (có Runic Ward layer)
- **Alloy** + **Ancient Rune** components (13 mới mỗi loại)
- **Kalguuran skills/supports** craftable

Schema cho các category mới này CHƯA verified — đợi 0.5 launch để fetch `/api/trade2/data/items` thực tế. TODO trong section "Pending Verification" cuối doc.

### 7. Narrowing search to ONE specific listing (giống POE1)

Khi muốn direct user tới một item cụ thể, tighten stat filter để match exact stats của item đó. Dùng `min` value just below target, KHÔNG dùng `max` (chỉ equal-or-better mới match).

### 8. Opening trade UI for user

URL format POE2: `https://www.pathofexile.com/trade2/search/poe2/{league}/{queryId}`

```bash
playwriter -s 19 -e 'const pages = context.pages(); for (let i = 0; i < urls.length; i++) { let p = pages[i] || await context.newPage(); await p.goto(`https://www.pathofexile.com/trade2/search/poe2/${encodeURIComponent("Runes of Aldur")}/${urls[i].id}`, { waitUntil: "domcontentloaded" }); }'
```

**Best practice:** narrow each query first (gotcha #7) so the opened tab shows 1-10 listings, not 100+.

## Stat Group Types (giống POE1)

Stats array support multiple group types — semantics giống POE1:

| Type | Description | Use Case |
|------|-------------|----------|
| `and` | All filters must match | Exact requirements |
| `count` | At least N filters must match | Flexible requirements |
| `weight` | Weighted sum with min/max threshold | Best for ranking by overall quality |
| `not` | None of the filters must match | Exclude unwanted mods |
| `if` | Conditional filters | Match only if condition met |

Stat ID prefix khác POE1 — POE2 dùng cùng namespace `explicit.stat_*`, `pseudo.pseudo_*`, nhưng stat hash khác (POE2 mods khác POE1). Luôn dùng `/api/trade2/data/stats` lookup, không copy từ POE1.

## Pagination

Search returns up to **100 item IDs**. Fetch in batches of 10 với `2.5s sleep` giữa batch:

```js
const ids = r.body.result;  // up to 100 IDs
for (let i = 0; i < ids.length; i += 10) {
  await sleep(2500);
  const batch = ids.slice(i, i + 10);
  const details = await fetchItems(batch, r.body.id);
  // process details...
}
```

## Stat Filter Lookup

POE2 stat ID khác POE1 hoàn toàn. KHÔNG dùng `.claude/skills/poe-auth/ggg/filters.ts` (cache POE1 data).

### Live trade data (full list with options)
```bash
playwriter -s 19 -e 'const d = await state.page.evaluate(async () => { const r = await fetch("https://www.pathofexile.com/api/trade2/data/stats"); return await r.json(); }); const all = d.result.flatMap(g => g.entries); const matches = all.filter(s => /life/i.test(s.text || "") && s.type === "explicit"); for (const m of matches) console.log(m.id, "|", m.text);'
```

### Notable option lookup
```bash
playwriter -s 19 -e 'const d = await state.page.evaluate(async () => { const r = await fetch("https://www.pathofexile.com/api/trade2/data/stats"); return await r.json(); }); const all = d.result.flatMap(g => g.entries); const f = all.find(s => s.id === "explicit.stat_<HASH>"); console.log(JSON.stringify(f.option?.options, null, 2));'
```

## API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/trade2/search/poe2/{league}` | POST | Search items, returns item hashes + query ID |
| `/api/trade2/fetch/{ids}?query={id}&realm=poe2` | GET | Fetch item details (max 10 IDs per call) |
| `/api/trade2/exchange/poe2/{league}` | POST | Currency bulk exchange |
| `/api/trade2/data/stats` | GET | All POE2 stat IDs + option lists |
| `/api/trade2/data/items` | GET | All POE2 item types + base names + categories |
| `/api/trade2/data/static` | GET | Currency / fragment / waystone data |

**Note `realm=poe2` query param** trên fetch endpoint — POE1 không cần, POE2 cần (GGG share `/api/trade2/fetch/` path nhưng realm phân biệt).

## Click Whisper Button via Browser

After narrowing search, navigate to result page and click whisper:

```bash
playwriter -s 19 -e 'const LEAGUE = "Runes of Aldur"; await state.page.goto(`https://www.pathofexile.com/trade2/search/poe2/${encodeURIComponent(LEAGUE)}/${queryId}`, { waitUntil: "domcontentloaded" }); await new Promise(r => setTimeout(r, 3000)); const result = await state.page.evaluate(async () => { const N = 0; const rows = document.querySelectorAll(".resultset .row"); const row = rows[N]; if (!row) return "No results"; const directBtn = row.querySelector(".direct-btn"); if (directBtn && !directBtn.disabled) { directBtn.click(); return "Whisper sent via direct button"; } const dropdownToggle = row.querySelector(".dropdown-toggle-split"); if (dropdownToggle) { dropdownToggle.click(); await new Promise(r => setTimeout(r, 500)); const whisperBtn = row.querySelector(".whisper-btn"); if (whisperBtn) { whisperBtn.click(); return "Whisper copied"; } } return "No whisper button found"; }); console.log(result);'
```

CSS selectors giống POE1 (`.resultset .row`, `.direct-btn`, `.whisper-btn`) — verify lại khi POE2 trade UI mature hơn.

## CDP Relay (alternative path)

```python
import sys, json, time
sys.path.insert(0, "/Users/firegroup/.claude/plugins/marketplaces/aiocean-plugins/plugins/aio-cdp-relay/skills/aio-cdp-relay/scripts")
from cdp_client import CDPClient

LEAGUE = "Runes of Aldur"

with CDPClient() as cdp:
    tab = cdp.find_tab(url_contains="pathofexile.com/trade2")
    cdp.attach(tab["targetId"])
    result = cdp.evaluate_async(f"""
        (async () => {{
            const res = await fetch("https://www.pathofexile.com/api/trade2/search/poe2/{LEAGUE.replace(' ', '%20')}", {{
                method: "POST",
                headers: {{ "Content-Type": "application/json" }},
                body: JSON.stringify({{
                    query: {{ status: {{ option: "any" }}, type: "Heavy Crossbow", stats: [{{ type: "and", filters: [] }}] }},
                    sort: {{ price: "asc" }}
                }})
            }});
            return await res.json();
        }})()
    """)
    time.sleep(2)  # MINIMUM
```

## How It Works

1. **playwriter / CDP Relay** maintain connection tới Chrome qua extension (playwriter) hoặc DevTools Protocol (CDP)
2. `state.page.evaluate(fetch(...))` chạy JavaScript trong page context của browser
3. Browser's cookies (POESESSID, cf_clearance) tự động gửi
4. GGG thấy same-origin browser traffic — indistinguishable từ normal usage
5. Rate limit enforce externally với `await sleep(2500)` giữa request

## Pending Verification (khi POE2 0.5 launch)

| Item | Action |
|------|--------|
| Exact league name URL slug | Check `https://www.pathofexile.com/trade2/` dropdown sau launch |
| Currency option list | Fetch `/api/trade2/data/static` — verify exalted/divine/chaos/gold available |
| Remnant item schema | Fetch sample Remnant listing — check `category` field |
| Verisium runed mod stat IDs | `/api/trade2/data/stats` filter by `runed`/`verisium` text |
| Kalguuran skill gem trade format | Check 1 sample listing + cross-reference patch notes |
| Spirit Walker companion equipment trade category | New ascendancy = new category (verify in data/items) |

Khi verify xong các item trên, update snippet `LEAGUE = "..."` và type examples ở các section trên.

## Files

| File | Purpose |
|------|---------|
| playwriter | `npm install -g playwriter@latest` |
| CDP Relay scripts | `/Users/firegroup/.claude/plugins/marketplaces/aiocean-plugins/plugins/aio-cdp-relay/skills/aio-cdp-relay/scripts` |
| `.claude/skills/trade/SKILL.md` | POE1 sibling — cross-reference cho pattern + gotcha không đổi |
