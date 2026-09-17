from datetime import date
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('collect', Path(__file__).resolve().parents[1] / 'collect.py')
c = importlib.util.module_from_spec(spec)
spec.loader.exec_module(c)
TODAY = date(2026, 9, 11)
LEAGUE = {'name': 'Runes of Aldur', 'slug': 'runes', 'start': '2026-05-29'}
LIVE_LEAGUES = [{'Value': 'Runes of Aldur', 'ShortName': 'runes', 'BaseCurrencyApiId': 'exalted'}]


def item(name='Divine Orb', price=400):
    return {'ItemId': 1, 'Text': name, 'CurrentPrice': price, 'CurrentQuantity': 50,
            'PriceLogs': [{'Time': '2026-09-10T00:00:00Z', 'Price': 350, 'Quantity': 1000},
                          {'Time': '2026-09-11T00:00:00Z', 'Price': 380, 'Quantity': 600}]}


def quote(name='Divine Orb', price=400, day=TODAY):
    return c.record(LEAGUE, item(name, price), 'Currency', day, price, 50, 'poe2scout:current')


class CollectorTests(unittest.TestCase):
    def test_current_quote_wins_over_today_average_and_keeps_real_past_dates(self):
        rows = c.item_records(LEAGUE, item(), 'Currency', TODAY)
        self.assertEqual([(r['date'], r['price_chaos'], r['listings']) for r in rows],
                         [('2026-09-10', 350, 1000), ('2026-09-11', 400, 50)])
        self.assertTrue(all(r['price_unit'] == 'exalted' for r in rows))

    def test_small_prices_are_preserved_for_site(self):
        rows = c.item_records(LEAGUE, item('Orb of Transmutation', 0.0001), 'Currency', TODAY)
        self.assertEqual(rows[-1]['price_chaos'], 0.0001)

    def test_invalid_quotes_do_not_become_current_prices(self):
        for value in (None, 0, -1, float('nan'), float('inf'), True, '5'):
            rows = c.item_records(LEAGUE, item(price=value), 'Currency', TODAY)
            self.assertFalse(any(r['date'] == TODAY.isoformat() for r in rows))

    def test_merge_preserves_old_leagues_and_newest_intraday_quote(self):
        old_league = {**quote(), 'league': 'Fate of the Vaal'}
        yesterday = quote(day=date(2026, 9, 10))
        merged = c.merge_records([old_league, yesterday, quote(price=100)], [quote(price=200)])
        self.assertEqual(len(merged), 3)
        self.assertIn(old_league, merged)
        self.assertIn(yesterday, merged)
        self.assertIn(quote(price=200), merged)
        self.assertEqual(c.merge_records(merged, [quote(price=200)]), merged)

    def test_wrong_league_and_unit_fail(self):
        with self.assertRaises(ValueError):
            c.resolve_league('Typo', LIVE_LEAGUES)
        wrong = [{**LIVE_LEAGUES[0], 'BaseCurrencyApiId': 'chaos'}]
        with self.assertRaisesRegex(ValueError, 'Unsupported price unit'):
            c.resolve_league('Runes of Aldur', wrong)

    def test_backfill_checks_unit_and_truncation(self):
        for payload in [{'BaseCurrencyApiId': 'chaos'}, {'BaseCurrencyApiId': 'exalted', 'HasMore': True}]:
            with self.assertRaises(ValueError):
                c.item_records(LEAGUE, item(), 'Currency', TODAY, payload)

    def test_pagination_collects_all_pages(self):
        pages = [
            {'CurrentPage': 1, 'Pages': 2, 'Total': 2, 'Items': [item()]},
            {'CurrentPage': 2, 'Pages': 2, 'Total': 2, 'Items': [{**item(), 'ItemId': 2}]},
        ]
        with patch.object(c, 'fetch_json', side_effect=pages) as fetch:
            self.assertEqual(len(c.fetch_category_items('runes', 'Currencies', 'currency')), 2)
            self.assertIn('Page=2', fetch.call_args.args[0])

    def test_truncated_and_repeated_pages_fail(self):
        for second in ([], [item()]):
            pages = [
                {'CurrentPage': 1, 'Pages': 2, 'Total': 2, 'Items': [item()]},
                {'CurrentPage': 2, 'Pages': 2, 'Total': 2, 'Items': second},
            ]
            with patch.object(c, 'fetch_json', side_effect=pages), self.assertRaises(ValueError):
                c.fetch_category_items('runes', 'Currencies', 'currency')

    def test_missing_currency_fails_coverage_check(self):
        rows = [quote(f'Item {i}') for i in range(120)]
        with self.assertRaisesRegex(ValueError, 'missing currencies'):
            c.validate_snapshot(rows)

    def test_api_failure_preserves_history_and_daily_byte_for_byte(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            master = root / 'master.json'
            daily = root / 'daily' / f'{TODAY}.json'
            daily.parent.mkdir()
            master.write_text(json.dumps([quote()]))
            daily.write_text(json.dumps([quote(price=300)]))
            before = [p.read_bytes() for p in (master, daily)]
            with patch.object(c, 'utc_today', return_value=TODAY), \
                 patch.object(c, 'fetch_json', return_value=LIVE_LEAGUES), \
                 patch.object(c, 'collect_league', side_effect=ValueError('Incomplete category')):
                result = c.main(['--leagues', 'Runes of Aldur', '--data-dir', temp])
            self.assertEqual(result, 1)
            self.assertEqual([p.read_bytes() for p in (master, daily)], before)
            self.assertFalse(list(root.rglob('*.tmp')))

    def test_success_writes_current_snapshot_and_merges_history(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            old = quote(day=date(2026, 9, 1))
            (root / 'master.json').write_text(json.dumps([old]))
            with patch.object(c, 'utc_today', return_value=TODAY), \
                 patch.object(c, 'fetch_json', return_value=LIVE_LEAGUES), \
                 patch.object(c, 'collect_league', return_value=[quote()]):
                self.assertEqual(c.main(['--leagues', 'Runes of Aldur', '--data-dir', temp]), 0)
            self.assertEqual(json.loads((root / 'daily' / f'{TODAY}.json').read_text()), [quote()])
            self.assertEqual(len(json.loads((root / 'master.json').read_text())), 2)

    def test_force_is_not_an_accidental_history_delete_switch(self):
        with self.assertRaises(SystemExit) as error:
            c.main(['--force'])
        self.assertEqual(error.exception.code, 2)


if __name__ == '__main__':
    unittest.main()
