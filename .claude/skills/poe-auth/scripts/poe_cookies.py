#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.10"
# dependencies = ["browser-cookie3"]
# ///
"""Extract POESESSID and cf_clearance cookies from pathofexile.com.

Standalone script — dependencies managed by uv inline metadata.

Usage:
    uv run scripts/poe/poe-auth/poe_cookies.py              # prints key=value
    uv run scripts/poe/poe-auth/poe_cookies.py --json       # prints JSON
    uv run scripts/poe/poe-auth/poe_cookies.py --quiet      # prints only POESESSID (for piping)
    uv run scripts/poe/poe-auth/poe_cookies.py --export     # prints export commands for shell
    uv run scripts/poe/poe-auth/poe_cookies.py --env        # writes to .env.poe file

As a library:
    from poe_cookies import extract_poe_cookies
    cookies = extract_poe_cookies()
    # {'POESESSID': '...', 'cf_clearance': '...', 'cookie_string': '...'}
"""

from __future__ import annotations

import glob
import json
import logging
import os
import sys
from typing import Any, Callable, Dict, List, Optional, Set

logger = logging.getLogger(__name__)

# ── Browser profile discovery ───────────────────────────────────────────

_CHROMIUM_BASE_DIRS: Dict[str, str] = {
    "chrome": os.path.join("Google", "Chrome"),
    "arc": os.path.join("Arc", "User Data"),
    "edge": os.path.join("Microsoft Edge"),
    "brave": os.path.join("BraveSoftware", "Brave-Browser"),
}


def _iter_chrome_cookie_files(browser_name: str) -> List[str]:
    base_dir = _CHROMIUM_BASE_DIRS.get(browser_name)
    if base_dir is None:
        return []

    if sys.platform == "darwin":
        root = os.path.join(os.path.expanduser("~"), "Library", "Application Support", base_dir)
    elif sys.platform == "win32":
        root = os.path.join(os.environ.get("LOCALAPPDATA", ""), base_dir, "User Data")
    else:
        root = os.path.join(os.path.expanduser("~"), ".config", base_dir)

    if not os.path.isdir(root):
        return []

    paths: List[str] = []
    default_cookies = os.path.join(root, "Default", "Cookies")
    if os.path.exists(default_cookies):
        paths.append(default_cookies)

    for profile_dir in sorted(glob.glob(os.path.join(root, "Profile *"))):
        cookie_file = os.path.join(profile_dir, "Cookies")
        if os.path.exists(cookie_file):
            paths.append(cookie_file)

    return paths


# ── Generic cookie extraction ───────────────────────────────────────────

def _extract_from_jar(
    jar: Any,
    *,
    domain_match: Callable[[str], bool],
    required_cookies: Set[str],
    source: str = "unknown",
) -> Optional[Dict[str, str]]:
    result: Dict[str, str] = {}
    all_cookies: Dict[str, str] = {}
    for cookie in jar:
        domain = cookie.domain or ""
        if domain_match(domain):
            if cookie.name in required_cookies:
                result[cookie.name] = cookie.value
            if cookie.name and cookie.value:
                all_cookies[cookie.name] = cookie.value
    if required_cookies.issubset(result.keys()):
        cookies = {name: result[name] for name in required_cookies}
        if all_cookies:
            cookies["cookie_string"] = "; ".join("%s=%s" % (k, v) for k, v in all_cookies.items())
        return cookies
    return None


def extract_cookies(
    *,
    domain_match: Callable[[str], bool],
    required_cookies: Set[str],
    label: str = "custom",
) -> Optional[Dict[str, str]]:
    """Extract specific cookies for a domain from all installed browsers."""
    try:
        import browser_cookie3
    except ImportError:
        logger.error("browser-cookie3 not installed. Run: pip3 install browser-cookie3")
        return None

    browsers = [
        ("arc", browser_cookie3.arc),
        ("chrome", browser_cookie3.chrome),
        ("edge", browser_cookie3.edge),
        ("firefox", browser_cookie3.firefox),
        ("brave", browser_cookie3.brave),
    ]

    for name, fn in browsers:
        if name in _CHROMIUM_BASE_DIRS:
            cookie_files = _iter_chrome_cookie_files(name)
            if not cookie_files:
                try:
                    jar = fn()
                except Exception:
                    continue
                cookies = _extract_from_jar(jar, domain_match=domain_match, required_cookies=required_cookies, source=name)
                if cookies:
                    return cookies
                continue
            for cookie_file in cookie_files:
                profile_name = os.path.basename(os.path.dirname(cookie_file))
                try:
                    jar = fn(cookie_file=cookie_file)
                except Exception:
                    continue
                cookies = _extract_from_jar(jar, domain_match=domain_match, required_cookies=required_cookies, source="%s[%s]" % (name, profile_name))
                if cookies:
                    return cookies
        else:
            try:
                jar = fn()
            except Exception:
                continue
            cookies = _extract_from_jar(jar, domain_match=domain_match, required_cookies=required_cookies, source=name)
            if cookies:
                return cookies

    return None


# ── PoE-specific ────────────────────────────────────────────────────────

_POE_DOMAINS = {"pathofexile.com", ".pathofexile.com", "www.pathofexile.com"}


def _is_poe_domain(domain: str) -> bool:
    return domain in _POE_DOMAINS or domain.endswith(".pathofexile.com")


def extract_poe_cookies() -> Optional[Dict[str, str]]:
    """Extract POESESSID and cf_clearance from pathofexile.com.

    Returns dict with keys: POESESSID, cf_clearance, cookie_string
    or None if not found.
    """
    return extract_cookies(
        domain_match=_is_poe_domain,
        required_cookies={"POESESSID", "cf_clearance"},
        label="pathofexile.com",
    )


# ── CLI ─────────────────────────────────────────────────────────────────

def main() -> None:
    import argparse

    parser = argparse.ArgumentParser(description="Extract PoE cookies from browser")
    parser.add_argument("--json", action="store_true", help="Output as JSON")
    parser.add_argument("--quiet", "-q", action="store_true", help="Print only POESESSID (for piping)")
    parser.add_argument("--export", action="store_true", help="Print export commands for shell")
    parser.add_argument("--env", action="store_true", help="Write to .env.poe file in project root")
    parser.add_argument("--verbose", "-v", action="store_true", help="Enable debug logging")
    args = parser.parse_args()

    if args.verbose:
        logging.basicConfig(level=logging.DEBUG, format="%(levelname)s: %(message)s", stream=sys.stderr)

    cookies = extract_poe_cookies()
    if not cookies:
        print("No PoE cookies found. Make sure you are logged into pathofexile.com in your browser.", file=sys.stderr)
        sys.exit(1)

    poesessid = cookies["POESESSID"]
    cf_clearance = cookies["cf_clearance"]

    if args.json:
        print(json.dumps({"POESESSID": poesessid, "cf_clearance": cf_clearance}, indent=2))
    elif args.quiet:
        print(poesessid)
    elif args.export:
        print("export POESESSID='%s'" % poesessid)
        print("export CF_CLEARANCE='%s'" % cf_clearance)
    elif args.env:
        # Find project root (walk up to find .claude directory)
        env_path = os.path.join(os.getcwd(), ".env.poe")
        with open(env_path, "w") as f:
            f.write("POESESSID=%s\n" % poesessid)
            f.write("CF_CLEARANCE=%s\n" % cf_clearance)
        print("Written to %s" % env_path, file=sys.stderr)
        # Also print JSON to stdout for programmatic use
        print(json.dumps({"POESESSID": poesessid, "cf_clearance": cf_clearance, "path": env_path}, indent=2))
    else:
        print("POESESSID=%s" % poesessid)
        print("cf_clearance=%s" % cf_clearance)


if __name__ == "__main__":
    main()
