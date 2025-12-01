import pathlib

OLD = "gigabonus.win"
NEW = "gigabonus.win"

root = pathlib.Path(__file__).resolve().parents[1]
replaced_files = 0
for path in root.rglob('*'):
    if not path.is_file():
        continue
    try:
        data = path.read_bytes()
    except Exception:
        continue
    if b"\x00" in data:
        continue
    text = data.decode('utf-8', errors='ignore')
    if OLD not in text:
        continue
    text = text.replace(OLD, NEW)
    path.write_text(text, encoding='utf-8')
    replaced_files += 1

print(f"Updated {replaced_files} files")
