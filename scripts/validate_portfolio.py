"""Validate the documentation-only CashierNow portfolio.

This intentionally does not claim to build the private production application.
"""

from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
README = (ROOT / "README.md").read_text(encoding="utf-8")

required = [
    "README.md",
    "SECURITY.md",
    "LICENSE.md",
    "docs/social-preview.png",
    "docs/code-samples/pricing-data-model.ts",
    "docs/screenshots/06-pricing-cards.png",
    "docs/screenshots/07-pricing-lifetime.png",
    "docs/screenshots/12-mobile-pricing.png",
    "docs/screenshots/15-pricing-three-months.png",
]
for relative in required:
    assert (ROOT / relative).is_file(), f"Missing required portfolio file: {relative}"

for forbidden in ("app", "components", "public", "package.json", "proxy.ts"):
    assert not (ROOT / forbidden).exists(), f"Runnable production surface found: {forbidden}"

expected_prices = [
    "500 → **300 EGP**",
    "700 → **500 EGP**",
    "1200 → **900 EGP**",
    "2000 → **1500 EGP**",
    "3000 → **1500 EGP**",
    "5000 → **3000 EGP**",
]
for value in expected_prices:
    assert value in README, f"Missing current pricing statement: {value}"

# Validate relative Markdown links and images in all documentation.
link_pattern = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")
for markdown in ROOT.rglob("*.md"):
    text = markdown.read_text(encoding="utf-8")
    for target in link_pattern.findall(text):
        if target.startswith(("http://", "https://", "mailto:", "#", "../../security/")):
            continue
        clean = target.split("#", 1)[0]
        resolved = (markdown.parent / clean).resolve()
        assert resolved.exists(), f"Broken link in {markdown.relative_to(ROOT)}: {target}"

print("Portfolio structure, current pricing, and local documentation links are valid.")
