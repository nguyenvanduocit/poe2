#!/usr/bin/env python3
"""Collect POE2 prices from poe2scout into daily snapshots and merged history.

Default: the league configured in nuxt.config.ts; all positive current quotes
plus the dated PriceLogs returned by each category page. No per-item fan-out.
Use --history for an explicit full-history backfill (slower, one call per item).
Legacy price_chaos fields contain Exalted Orb values, tagged price_unit=exalted.
"""

import argparse
import json
import math
import os
from pathlib import Path
import re
import ssl
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone

sys.path.insert(0, str(Path(__file__).resolve().parent))
from leagues import LEAGUES

try:
    import certifi
    SSL_CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    SSL_CTX = ssl.create_default_context()

ROOT = Path(__file__).resolve().parents[4]
DATA_DIR = ROOT / "data/price-history"
BASE = "https://api.poe2scout.com/poe2"
REQUIRED_ITEMS = {"Divine Orb", "Exalted Orb", "Chaos Orb", "Mirror of Kalandra"}
REQUEST_DELAY = 0.25


def utc_today():
    return datetime.now(timezone.utc).date()


def finite_number(value):
    return isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(value)


def positive(value):
    return finite_number(value) and value > 0


def fetch_json(url):
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", "Accept": "application/json"})
    for attempt in range(4):
        time.sleep(REQUEST_DELAY)
        try:
            with urllib.request.urlopen(request, timeout=30, context=SSL_CTX) as response:
                return json.load(response)
        except urllib.error.HTTPError as error:
            if error.code not in (429, 500, 502, 503, 504) or attempt == 3:
                raise
            retry_after = error.headers.get("Retry-After", "")
            delay = max(2 ** (attempt + 1), float(retry_after) if retry_after.isdigit() else 0)
            if delay > 120:
                raise ValueError(f"Server requested {delay}s backoff; try a later run") from error
            time.sleep(delay)
        except (urllib.error.URLError, TimeoutError):
            if attempt == 3:
                raise
            time.sleep(2 ** (attempt + 1))


def configured_league():
    match = re.search(r'''currentLeague:\s*['"]([^'"]+)['"]''', (ROOT / "nuxt.config.ts").read_text())
    if not match:
        raise ValueError("Missing currentLeague in nuxt.config.ts")
    return match[1]


def resolve_league(name, available):
    matches = [league for league in available if league.get("Value") == name]
    if len(matches) != 1 or not matches[0].get("ShortName"):
        raise ValueError(f"No unambiguous poe2scout league matching {name!r}")
    league = matches[0]
    if league.get("BaseCurrencyApiId") != "exalted":
        raise ValueError(f"Unsupported price unit for {name}: {league.get('BaseCurrencyApiId')!r}")
    known = next((entry for entry in LEAGUES if entry["name"] == name), None)
    if not known:
        raise ValueError(f"Add the verified start date for {name!r} to scripts/leagues.py")
    return {**known, "slug": league["ShortName"]}


def fetch_category_items(slug, kind, category):
    base = f"{BASE}/Leagues/{urllib.parse.quote(slug, safe='')}/{kind}/ByCategory"
    items = []
    page = 1
    while True:
        query = urllib.parse.urlencode({"Category": category, "Page": page, "PerPage": 100})
        body = fetch_json(f"{base}?{query}")
        chunk, pages, total = body.get("Items"), body.get("Pages"), body.get("Total")
        if not isinstance(chunk, list) or type(pages) is not int or type(total) is not int:
            raise ValueError(f"Invalid category response: {kind}/{category}, page {page}")
        if pages < 0 or total < 0 or pages > 1000 or body.get("CurrentPage") != page:
            raise ValueError(f"Invalid pagination: {kind}/{category}, page {page}")
        items.extend(chunk)
        if page >= pages:
            if len(items) != total or len({item['ItemId'] for item in items}) != total:
                raise ValueError(f"Incomplete category: {kind}/{category}: got {len(items)}, expected {total}")
            return items
        if not chunk:
            raise ValueError(f"Empty intermediate page: {kind}/{category}, page {page}")
        page += 1


def record(league, item, category, day, price, quantity, source):
    start = datetime.strptime(league["start"], "%Y-%m-%d").date()
    return {
        "league": league["name"], "item": item["Text"], "variant": "", "type": category,
        "date": day.isoformat(), "league_day": (day - start).days,
        "price_chaos": price, "listings": round(quantity) if finite_number(quantity) and quantity >= 0 else 0,
        "day_of_week": day.weekday(), "price_unit": "exalted", "source": source,
    }


def item_records(league, item, category, today, history=None):
    start = datetime.strptime(league["start"], "%Y-%m-%d").date()
    records = []
    logs = item.get("PriceLogs") or []
    if history is not None:
        if history.get("BaseCurrencyApiId") != "exalted" or history.get("HasMore"):
            raise ValueError(f"Invalid or truncated history for {item['Text']}")
        logs = history["DailyStats"]
    for log in logs:
        if not log:
            continue
        day = datetime.fromisoformat(log["Time"].replace("Z", "+00:00")).date()
        price = (log.get("Average") or log.get("Close")) if history is not None else log.get("Price")
        if start <= day < today and positive(price):
            records.append(record(league, item, category, day, price,
                                  log.get("Volume") if history is not None else log.get("Quantity"),
                                  "poe2scout:daily"))
    if positive(item.get("CurrentPrice")):
        records.append(record(league, item, category, today, item["CurrentPrice"],
                              item.get("CurrentQuantity"), "poe2scout:current"))
    return records


def collect_league(league, today, full_history=False):
    prefix = f"{BASE}/Leagues/{urllib.parse.quote(league['slug'], safe='')}"
    cats = fetch_json(f"{prefix}/Items/Categories")
    groups = []
    for key, kind in [("CurrencyCategories", "Currencies"), ("UniqueCategories", "Uniques")]:
        if not isinstance(cats.get(key), list):
            raise ValueError(f"Missing category manifest: {key}")
        groups.extend((kind, cat) for cat in cats[key])
    if not cats["CurrencyCategories"]:
        raise ValueError("Empty currency category manifest")
    records = []
    for kind, cat in groups:
        items = fetch_category_items(league["slug"], kind, cat["ApiId"])
        for item in items:
            if not isinstance(item.get("Text"), str) or not item["Text"].strip():
                raise ValueError(f"Missing item identity in {cat['ApiId']}")
            hist = None
            if full_history and positive(item.get("CurrentPrice")):
                hist = fetch_json(f"{prefix}/Items/{item['ItemId']}/DailyStatsHistory?DayCount=365")
            records.extend(item_records(league, item, cat["Label"], today, hist))
        print(f"  {kind}/{cat['ApiId']}: {len(items)} items", flush=True)
    validate_snapshot([r for r in records if r["date"] == today.isoformat()])
    return records


def validate_snapshot(records):
    names = {r["item"] for r in records}
    missing = REQUIRED_ITEMS - names
    if missing or len(names) < 100:
        raise ValueError(f"Incomplete POE2 snapshot: {len(names)} items; missing currencies: {sorted(missing)}")
    exalted = next(r for r in records if r["item"] == "Exalted Orb")
    if exalted["price_chaos"] != 1:
        raise ValueError("Exalted Orb must equal 1 in an exalted-denominated snapshot")


def merge_records(existing, incoming):
    merged = {}
    for row in existing + incoming:
        key = (row["league"], row["item"], row.get("variant", ""), row["type"], row["date"])
        merged[key] = row
    return [merged[key] for key in sorted(merged)]


def atomic_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(json.dumps(data, ensure_ascii=False, allow_nan=False))
    os.replace(temporary, path)


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--leagues", help="One explicit league name; default: nuxt.config.ts currentLeague")
    parser.add_argument("--history", action="store_true", help="Backfill full per-item history; always merge, never erase")
    parser.add_argument("--data-dir", type=Path, default=DATA_DIR, help="Output directory (isolated smoke runs)")
    args = parser.parse_args(argv)
    try:
        today = utc_today()
        name = args.leagues or configured_league()
        league = resolve_league(name, fetch_json(f"{BASE}/Leagues"))
        print(f"Collecting {name} from poe2scout, unit=exalted, UTC={today}", flush=True)
        master = args.data_dir / "master.json"
        existing = json.loads(master.read_text()) if master.exists() else []
        if not isinstance(existing, list):
            raise ValueError("Invalid master.json: expected a record array")
        incoming = collect_league(league, today, args.history)
        snapshot = merge_records([], [r for r in incoming if r["date"] == today.isoformat()])
        merged = merge_records(existing, incoming)
        # Complete crawl + validation before either write. API failures preserve both files.
        atomic_json(master, merged)
        atomic_json(args.data_dir / "daily" / f"{today}.json", snapshot)
        print(f"Saved {len(snapshot)} current quotes; {len(merged)} historical records", flush=True)
        return 0
    except (OSError, ValueError, KeyError, TypeError) as error:
        print(f"Price collection failed: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
