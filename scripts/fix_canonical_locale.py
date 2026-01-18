import re
from pathlib import Path

BASE_DIR = Path("app/[locale]/blog")
PATTERN = re.compile(r'canonical="https://gigabonus\.win/(blog/[^"]+)"')
REPLACEMENT = r"canonical={`https://gigabonus.win/${locale}/\1`}"

changed_files = []

for page_file in BASE_DIR.rglob("page.tsx"):
    # Only adjust legacy 2025 pages
    if "-2025" not in page_file.parts[-2]:
        continue
    text = page_file.read_text(encoding="utf-8")
    new_text, count = PATTERN.subn(REPLACEMENT, text)
    if count:
        page_file.write_text(new_text, encoding="utf-8")
        changed_files.append((page_file, count))

print(f"Updated {len(changed_files)} files with locale-aware canonicals")
