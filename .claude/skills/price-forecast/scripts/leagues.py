#!/usr/bin/env python3
"""
Single source of truth for the POE2 league table used by the price-forecast
pipeline. collect.py and forecast.py both import from here so the slug/start
mapping never drifts between the two scripts.

Each entry:
  name  — canonical league name (matches poe.ninja `economyLeagues[].name`)
  start — league launch date (YYYY-MM-DD), used to compute league_day
  end   — transition date into the next league, or None if still active
  slug  — value passed as `league=` in poe.ninja URLs (URL-encoded by callers)

Verify slugs + dates against poe.ninja each time a new league launches:
  curl -sL https://poe.ninja/poe2/api/data/index-state | python3 -m json.tool
"""

from datetime import datetime

LEAGUES = [
    # Runes of Aldur (0.5) — main SC POE2 league from 2026-05-29.
    {
        "name": "Runes of Aldur",
        "start": "2026-05-29",
        "end": None,
        "slug": "Runes of Aldur",
    },
    # Vaal (0.4) — archive league. End date = transition into Runes of Aldur.
    {"name": "Vaal", "start": "2026-01-15", "end": "2026-05-29", "slug": "Vaal"},
    # Dawn of the Hunt (0.3) — archive.
    {
        "name": "Dawn of the Hunt",
        "start": "2025-09-15",
        "end": "2026-01-15",
        "slug": "Dawn of the Hunt",
    },
]

# {name: datetime(start)} — convenience map for league_day arithmetic.
LEAGUE_STARTS = {
    lg["name"]: datetime.strptime(lg["start"], "%Y-%m-%d") for lg in LEAGUES
}
