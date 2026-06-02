#!/usr/bin/env python3
"""
Collect POE2 price history từ poe.ninja POE2 endpoint — currency, fragment,
waystone, catalyst, essence, distilled emotion, omen, soul core, và (sau 0.5
launch) Remnant / Alloy / Ancient Rune categories.

Progressive: skips items already collected for today. Fetches every day from league start.

Usage:
  python .claude/skills/price-forecast/scripts/collect.py
  python .claude/skills/price-forecast/scripts/collect.py --leagues "Runes of Aldur"
  python .claude/skills/price-forecast/scripts/collect.py --force    # re-fetch everything

NOTE: poe.ninja POE2 still uses the field name `chaosValue` for compat, but the
value is denominated in the league's baseline currency — which is **Exalted Orb**
for POE2 (NOT Chaos Orb as in POE1). All `MIN_PRICE` thresholds and downstream
forecast outputs are in exalted unit.

TODO khi 0.5 launch (~2026-05-29): verify exact ITEM_TYPES the new endpoint exposes;
POE2 0.5 introduces Remnant/Alloy/AncientRune categories whose exact `type=` slugs
need to be confirmed against `https://poe.ninja/poe2/api/data/index-state`.
"""

import json
import urllib.request
import os
import ssl
import sys
import time
from datetime import datetime, timedelta

sys.stdout.reconfigure(line_buffering=True)
sys.stderr.reconfigure(line_buffering=True)

try:
    import certifi

    SSL_CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    SSL_CTX = ssl._create_unverified_context()

# scripts → price-forecast → skills → .claude → project root (poe2/).
# Workspace is game-specific — canonical layout is data/price-history/ (no game subpath).
DATA_DIR = os.path.join(
    os.path.dirname(__file__), "..", "..", "..", "..", "data", "price-history"
)
DAILY_DIR = os.path.join(DATA_DIR, "daily")
os.makedirs(DAILY_DIR, exist_ok=True)

# Master file accumulates one record per (league, item, variant, type, date).
MASTER_FILE = os.path.join(DATA_DIR, "master.json")


# Per-day raw crawl snapshot. Overwritten on every crawl within the same day,
# so it always reflects the latest 3-hourly fetch. Audit trail; the master can
# be reconstructed from these if merge logic ever drifts.
def daily_path(date_str):
    return os.path.join(DAILY_DIR, f"{date_str}.json")


# POE2 leagues. Update khi 0.5 launch (~2026-05-29) — verify slug bằng:
#   curl -sL https://poe.ninja/poe2/api/data/index-state | python3 -m json.tool
LEAGUES = [
    # Runes of Aldur (0.5) — main SC POE2 league từ 2026-05-29. Slug guessed.
    {
        "name": "Runes of Aldur",
        "start": "2026-05-29",
        "end": None,
        "slug": "Runes of Aldur",
    },
    # Vaal (0.4) — archive league. End date = transition vào Runes of Aldur.
    {"name": "Vaal", "start": "2026-01-15", "end": "2026-05-29", "slug": "Vaal"},
    # Dawn of the Hunt (0.3) — archive. Replace start date with real date when known.
    {
        "name": "Dawn of the Hunt",
        "start": "2025-09-15",
        "end": "2026-01-15",
        "slug": "Dawn of the Hunt",
    },
]

# POE2 item types. Verify against `/poe2/api/data/index-state` mỗi league mới.
# Conservative list — start with types known stable across 0.3 → 0.4.
# Khi 0.5 launch, populate Remnant/Alloy/AncientRune slugs sau khi fetch test.
ITEM_TYPES = [
    # Uniques — full gear economy (POE2 unique pool nhỏ hơn POE1 đáng kể)
    "UniqueWeapon",
    "UniqueArmour",
    "UniqueAccessory",
    "UniqueJewel",
    # Maps replacement
    "Waystone",
    # Crafting consumables
    "Catalyst",
    "Essence",
    "DistilledEmotion",
    "Omen",
    "SoulCore",
    # 0.5 league-specific — verify exact slug post-launch:
    #   "Remnant", "Alloy", "AncientRune", "RuneRecipe"
]

# Currency endpoint shape (receive/pay), separate từ item overview endpoint.
CURRENCY_TYPES = ["Currency", "Fragment"]

# POE2 baseline = Exalted Orb. Set lower than POE1's MIN_CHAOS=20 because Exalted
# has higher base value than Chaos. 5 ex ≈ entry threshold for "flippable" item.
MIN_CHAOS = 5  # actually min EXALTED for POE2 — name kept for cross-script symmetry.


def fetch_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=15, context=SSL_CTX) as r:
        return json.loads(r.read())


def load_existing():
    """Load master.json (the accumulated history). Returns (records, keys-by-day)."""
    if not os.path.exists(MASTER_FILE):
        return [], set()
    with open(MASTER_FILE) as f:
        data = json.load(f)
    # Key includes `date` so progressive mode skips items already collected
    # for *today specifically* — re-running tomorrow does pick them back up.
    today = datetime.now().strftime("%Y-%m-%d")
    keys = set()
    for d in data:
        if d.get("date") == today:
            keys.add((d["league"], d["item"], d.get("variant", ""), d["type"]))
    return data, keys


def progress(current, total, name, price=None, skipped=0):
    pct = current / total * 100 if total else 0
    bar_len = 20
    filled = int(bar_len * current / total) if total else 0
    bar = "█" * filled + "░" * (bar_len - filled)
    extra = f" {price:,.0f}c" if price else ""
    skip_info = f" skip:{skipped}" if skipped else ""
    print(
        f"\r    [{bar}] {current}/{total} ({pct:.0f}%) {name}{extra}{skip_info}    ",
        end="",
        flush=True,
    )


def derive_history_from_sparkline(current_value, sparkline_data, today, league_start):
    """
    poe.ninja's overview response includes a `sparkLine.data` array of cumulative
    percentage deltas from a 7-day-ago baseline. Combined with the current
    `chaosValue` (which equals baseline × (1 + totalChange/100)), we can recover
    the absolute price for each of the past 7 days without a second API call.

    Defensively coerces None/missing entries — poe.ninja returns null in
    sparkLine for days where the item had no listings.
    """
    # Always include today's snapshot first; even if sparkLine is empty/junk
    # we still want a single price point for the current day.
    if not current_value or current_value <= 0:
        return []

    clean = [p for p in (sparkline_data or []) if isinstance(p, (int, float))]
    if not clean:
        return [(today, current_value)]

    total_change_pct = clean[-1]
    denom = 1 + total_change_pct / 100
    baseline = current_value / denom if denom != 0 else current_value
    days = []
    n = len(clean)
    for i, pct in enumerate(clean):
        # data[0] = oldest (baseline), data[-1] = today
        days_ago = n - 1 - i
        day = today - timedelta(days=days_ago)
        if day < league_start:
            continue
        days.append((day, baseline * (1 + pct / 100)))
    # Override the sparkLine's today-approximation with the authoritative current_value
    days.append((today, current_value))
    return days


def collect_league(league_info, existing_keys, force=False):
    """
    Collect a snapshot per item from poe.ninja's economy overview endpoints.
    Each item in the response carries a `sparkLine` array we expand to 7 daily
    data points (oldest-first), so a single API call per type yields a week of
    history without needing the now-removed itemhistory endpoint.
    """
    league = league_info["slug"]
    league_name = league_info["name"]
    league_start = datetime.strptime(league_info["start"], "%Y-%m-%d")
    encoded = urllib.request.quote(league)
    today = datetime.now()

    print(f"\n{'=' * 60}")
    print(f"  {league_name} (start: {league_info['start']})")
    print(f"{'=' * 60}\n")

    all_items = []
    total_types = len(ITEM_TYPES) + len(CURRENCY_TYPES)
    type_idx = 0

    # Item overview types — uniques, scarabs, fossils, etc.
    for item_type in ITEM_TYPES:
        type_idx += 1
        try:
            data = fetch_json(
                f"https://poe.ninja/poe2/api/economy/stash/current/item/overview?league={encoded}&type={item_type}"
            )
            lines = data.get("lines", [])
            # Filter on chaosValue floor; do NOT filter on `links` — uniques like
            # Doryani's Prototype are 6L-only and we want their canonical price.
            candidates = [
                item for item in lines if item.get("chaosValue", 0) >= MIN_CHAOS
            ]
            candidates.sort(key=lambda x: x.get("chaosValue", 0), reverse=True)

            print(
                f"  [{type_idx}/{total_types}] {item_type}: {len(lines)} total, {len(candidates)} ≥ {MIN_CHAOS}c"
            )
            collected = 0

            for i, item in enumerate(candidates):
                name = item.get("name", "")
                variant = item.get("variant", "") or ""
                price = item.get("chaosValue", 0)
                listings = item.get("listingCount", 0)
                spark = (item.get("sparkLine") or {}).get("data") or []

                progress(i + 1, len(candidates), name, price)

                history = derive_history_from_sparkline(
                    price, spark, today, league_start
                )
                for day, day_price in history:
                    league_day = (day - league_start).days
                    all_items.append(
                        {
                            "league": league_name,
                            "item": name,
                            "variant": variant,
                            "type": item_type,
                            "date": day.strftime("%Y-%m-%d"),
                            "league_day": league_day,
                            "price_chaos": round(day_price, 2),
                            "listings": listings,
                            "day_of_week": day.weekday(),
                        }
                    )
                collected += 1

            print(f"\r    ✓ {collected} items snapshotted{' ' * 40}")

        except Exception as e:
            print(f"  [{type_idx}/{total_types}] {item_type}: ERROR ({e})")

    # Currency overview types — different response shape (receive/get_currency_id)
    for currency_type in CURRENCY_TYPES:
        type_idx += 1
        try:
            data = fetch_json(
                f"https://poe.ninja/poe2/api/economy/stash/current/currency/overview?league={encoded}&type={currency_type}"
            )
            lines = data.get("lines", [])
            candidates = [
                item
                for item in lines
                if item.get("receive", {}).get("value", 0) >= MIN_CHAOS
            ]

            print(
                f"  [{type_idx}/{total_types}] {currency_type}: {len(lines)} total, {len(candidates)} ≥ {MIN_CHAOS}c"
            )
            collected = 0

            for i, item in enumerate(candidates):
                name = item.get("currencyTypeName", "")
                price = item.get("receive", {}).get("value", 0)
                listings = item.get("receive", {}).get("listing_count", 0) or item.get(
                    "receive", {}
                ).get("count", 0)
                spark = (item.get("receiveSparkLine") or {}).get("data") or []

                progress(i + 1, len(candidates), name, price)

                history = derive_history_from_sparkline(
                    price, spark, today, league_start
                )
                for day, day_price in history:
                    league_day = (day - league_start).days
                    all_items.append(
                        {
                            "league": league_name,
                            "item": name,
                            "variant": "",
                            "type": currency_type,
                            "date": day.strftime("%Y-%m-%d"),
                            "league_day": league_day,
                            "price_chaos": round(day_price, 2),
                            "listings": listings,
                            "day_of_week": day.weekday(),
                        }
                    )
                collected += 1

            print(f"\r    ✓ {collected} items snapshotted{' ' * 40}")
        except Exception as e:
            print(f"  [{type_idx}/{total_types}] {currency_type}: ERROR ({e})")

    return all_items


def main():
    start_time = time.time()

    # Parse args
    filter_leagues = None
    force = "--force" in sys.argv
    for i, arg in enumerate(sys.argv[1:], 1):
        if arg == "--leagues" and i < len(sys.argv) - 1:
            filter_leagues = [l.strip() for l in sys.argv[i + 1].split(",")]

    # Load existing data for progressive mode
    existing_data, existing_keys = load_existing()
    now = datetime.now()

    print(f"{'=' * 60}")
    print(f"  PoE Price Collector (currency & consumables)")
    print(f"  {len(ITEM_TYPES)} item types + {len(CURRENCY_TYPES)} currency types")
    print(
        f"  Min {MIN_CHAOS}c | {'FORCE mode' if force else f'Progressive ({len(existing_keys)} items cached)'}"
    )
    print(f"{'=' * 60}")

    # Determine which leagues to collect
    leagues = LEAGUES
    if filter_leagues:
        leagues = [l for l in LEAGUES if l["name"] in filter_leagues]
        print(f"\nFiltered to: {[l['name'] for l in leagues]}")
    else:
        # Auto-select: only active leagues, or ended leagues we haven't collected yet
        active = []
        for l in LEAGUES:
            if l["end"] is None:
                active.append(l)
            else:
                end = datetime.strptime(l["end"], "%Y-%m-%d")
                # Include ended leagues if we have no data for them
                if not any(d["league"] == l["name"] for d in existing_data):
                    active.append(l)
        leagues = active
        print(f"\nAuto-selected leagues: {[l['name'] for l in leagues]}")

    new_data = []
    for league in leagues:
        items = collect_league(league, existing_keys, force)
        new_data.extend(items)
        print(f"\n  → {len(items):,} new data points from {league['name']}")
        time.sleep(1)

    if not new_data and not existing_data:
        print("\n❌ No data collected!")
        return

    # Merge into master: NEW wins for any (league, item, variant, type, date)
    # collision. This handles the 3-hour cron correctly — when the same day's
    # record gets re-fetched, the latest crawl's value replaces the earlier
    # one (poe.ninja revises sparkLine intraday). Across days, both records
    # coexist because `date` is part of the dedupe key.
    #
    # `--force` skips the merge entirely: NEW data only. Use sparingly — old
    # history is dropped for items re-fetched, kept for items that aren't.
    if force:
        all_records = new_data
    else:
        all_records = new_data + existing_data

    seen = set()
    merged = []
    for d in all_records:
        key = (d["league"], d["item"], d.get("variant", ""), d["type"], d["date"])
        if key not in seen:
            seen.add(key)
            merged.append(d)

    # Atomic master write (temp → rename) so a crash mid-write can't corrupt
    # the source of truth that build.ts depends on.
    tmp_master = MASTER_FILE + ".tmp"
    with open(tmp_master, "w") as f:
        json.dump(merged, f)
    os.replace(tmp_master, MASTER_FILE)

    # Per-day audit snapshot — captures EXACTLY what came back from poe.ninja
    # this crawl (no merge, no dedupe with history). Overwritten by later
    # crawls within the same UTC day, so it always reflects the most recent
    # 3-hour fetch — sufficient resolution for an audit trail without
    # blowing up disk with 8 files/day.
    today = datetime.now().strftime("%Y-%m-%d")
    daily_file = daily_path(today)
    todays_crawl = [d for d in new_data if d["date"] == today]
    if todays_crawl:
        tmp_daily = daily_file + ".tmp"
        with open(tmp_daily, "w") as f:
            json.dump(todays_crawl, f)
        os.replace(tmp_daily, daily_file)
        print(f"  Audit snapshot: daily/{today}.json ({len(todays_crawl)} records)")

    elapsed = time.time() - start_time
    minutes = int(elapsed // 60)
    seconds = int(elapsed % 60)

    print(f"\n{'=' * 60}")
    print(f"  DONE in {minutes}m {seconds}s")
    print(
        f"  {len(new_data):,} new + {len(existing_data):,} existing → {len(merged):,} total (deduped)"
    )
    print(f"  Saved to {MASTER_FILE}")
    deduped = merged  # alias for the loop below
    leagues_found = set(d["league"] for d in deduped)
    items_found = set(d["item"] for d in deduped)
    print(f"  {len(leagues_found)} leagues, {len(items_found)} unique items")
    for league in sorted(leagues_found):
        league_data = [d for d in deduped if d["league"] == league]
        days = set(d["league_day"] for d in league_data)
        uitems = len(set(d["item"] for d in league_data))
        types = set(d["type"] for d in league_data)
        print(
            f"    {league}: {len(league_data):,} pts, days {min(days)}→{max(days)}, {uitems} items"
        )
        print(f"      types: {', '.join(sorted(types))}")
    print(f"{'=' * 60}")


if __name__ == "__main__":
    main()
