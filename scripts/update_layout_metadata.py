import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[1]
LAYOUT_PATTERN = re.compile(r'(canonical:\s*)(["\'])https://gigabonus\.win([^"\']*)(["\'])')
SITE_IMPORT = 'import { siteConfig } from "@/config/site";'

updated_files = 0

for layout_path in ROOT.joinpath('app').rglob('layout.tsx'):
    try:
        text = layout_path.read_text(encoding='utf-8')
    except Exception:
        continue

    original_text = text
    if 'metadata' not in text:
        continue

    if 'https://gigabonus.win' in text:
        def _replace(match: re.Match) -> str:
            path = match.group(3) or ''
            return f"{match.group(1)}`${{siteConfig.url}}{path}`"

        text, count = LAYOUT_PATTERN.subn(_replace, text)
        if count:
            # ensure import exists
            if SITE_IMPORT not in text:
                lines = text.splitlines()
                for idx, line in enumerate(lines):
                    if line.startswith('import') and ('from "next"' in line or "from 'next'" in line):
                        insert_idx = idx + 1
                        break
                else:
                    insert_idx = 0
                lines.insert(insert_idx, SITE_IMPORT)
                text = '\n'.join(lines)
            if text != original_text:
                layout_path.write_text(text, encoding='utf-8')
                updated_files += 1

print(f"Updated {updated_files} layout files")
