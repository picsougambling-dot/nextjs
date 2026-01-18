import os

SLUGS = [
    "avis-atlantisslots","avis-betify","avis-bonrush","avis-casinointense","avis-cazinostars",
    "avis-cleobetra","avis-europefortune","avis-hotloot","avis-hunnyplay","avis-i24slots",
    "avis-kingschance","avis-luckytreasure","avis-luckytrunk","avis-machance","avis-magicalspin",
    "avis-megawin","avis-playregal","avis-rockstar","avis-roibets","avis-rxcasino",
    "avis-slotrush","avis-spinaura","avis-spindinasty","avis-spinstar","avis-uniquecasino",
    "avis-vegasplus"
]

BASE_DIR = os.path.join("app", "[locale]", "blog")

def to_component(slug: str) -> str:
    return "".join(part.capitalize() for part in slug.split("-")) + "2026Page"

def update_pages():
    template = "import Page from '../{slug}-2025/page';\n\nexport default function {component}() {{\n  return <Page />;\n}}\n"
    for slug in SLUGS:
        component = to_component(slug)
        rel_path = f"../{slug}-2025/page"
        target_path = os.path.join(BASE_DIR, f"{slug}-2026", "page.tsx")
        os.makedirs(os.path.dirname(target_path), exist_ok=True)
        content = template.format(slug=slug, component=component)
        with open(target_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {target_path}")

if __name__ == "__main__":
    update_pages()
