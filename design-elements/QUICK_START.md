# 🚀 Guide de Démarrage Rapide

## Étape 1 : Copier les fichiers de base

1. **Styles globaux**
   ```bash
   cp design-elements/styles/globals.css app/globals.css
   ```

2. **Configuration Tailwind**
   ```bash
   cp design-elements/config/tailwind.config.ts tailwind.config.ts
   ```
   ⚠️ N'oubliez pas d'adapter les chemins `content` dans la config !

3. **Utilitaires**
   ```bash
   cp design-elements/utils/utils.ts src/lib/utils.ts
   ```

## Étape 2 : Installer les dépendances

```bash
npm install clsx tailwind-merge class-variance-authority
npm install @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-dropdown-menu
# ... autres dépendances selon les composants utilisés
```

## Étape 3 : Copier les composants UI

Copiez uniquement les composants dont vous avez besoin :

```bash
# Exemple : Button et Card
cp design-elements/components/ui/button.tsx src/components/ui/button.tsx
cp design-elements/components/ui/card.tsx src/components/ui/card.tsx
```

## Étape 4 : Utiliser les styles

Dans votre composant :

```tsx
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function MyComponent() {
  return (
    <div className="glass-card rounded-2xl p-6">
      <h1 className="text-gradient text-3xl font-bold">Titre</h1>
      <Button className="animate-glow">Cliquez-moi</Button>
    </div>
  );
}
```

## Étape 5 : Personnaliser les couleurs

Modifiez les variables CSS dans `globals.css` :

```css
:root {
  --primary: 280 70% 30%; /* Changez cette valeur */
  --accent: 340 80% 55%;  /* Et celle-ci */
}
```

## 🎨 Classes CSS utiles

- `.glass-card` - Effet de verre
- `.text-gradient` - Texte avec dégradé
- `.animate-glow` - Animation de lueur
- `.animate-float` - Animation de flottement
- `.scrollbar-thin` - Scrollbar personnalisée

## 📚 Documentation complète

Voir `README.md` et `COMPONENTS_LIST.md` pour plus de détails.
