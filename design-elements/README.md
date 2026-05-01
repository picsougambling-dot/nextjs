# 🎨 Design Elements - GigaBonus

Ce dossier contient tous les éléments de design réutilisables du projet GigaBonus pour faciliter leur intégration dans un nouveau projet.

## 📁 Structure

```
design-elements/
├── styles/
│   └── globals.css          # Styles globaux avec variables CSS, animations, glass effects
├── config/
│   └── tailwind.config.ts   # Configuration Tailwind avec animations et thème
├── utils/
│   └── utils.ts             # Fonction utilitaire `cn()` pour fusionner les classes
├── components/
│   ├── ui/                  # Composants shadcn/ui (Button, Card, Badge, etc.)
│   └── custom/              # Composants de design personnalisés
└── assets/                  # Assets (logos, images, etc.)
```

## 🚀 Utilisation

### 1. Styles globaux
Copiez `styles/globals.css` dans votre projet et importez-le dans votre layout principal.

### 2. Configuration Tailwind
Copiez `config/tailwind.config.ts` et adaptez les chemins `content` selon votre structure.

### 3. Utilitaires
Copiez `utils/utils.ts` pour la fonction `cn()` utilisée par tous les composants.

### 4. Composants UI
Tous les composants shadcn/ui sont dans `components/ui/`. Copiez ceux dont vous avez besoin.

### 5. Composants personnalisés
Les composants de design spécifiques (CasinoCard, Glass effects, etc.) sont dans `components/custom/`.

## 🎨 Caractéristiques du design

### Glass Morphism
- Classe `.glass-card` : Effet de verre avec backdrop-filter
- Classe `.glass-card-overlay` : Variante pour les overlays (dropdowns, modals)

### Animations
- `glow` : Effet de lueur pulsante
- `float` : Animation de flottement
- `casino-float` : Flottement avec rotation
- `sparkle` : Effet scintillant
- `jackpot-pulse` : Pulsation pour les jackpots
- Et bien d'autres...

### Couleurs
Toutes les couleurs sont définies en HSL dans les variables CSS pour faciliter le thème clair/sombre.

### Thème Casino
- Primary : Violet (280 70% 30%)
- Accent : Rose/Magenta (340 80% 55%)
- Glass effects avec opacité adaptative
- Gradients de fond personnalisés

## 📝 Notes

- Tous les composants utilisent `cn()` pour fusionner les classes Tailwind
- Les animations respectent `prefers-reduced-motion`
- Optimisations GPU pour les animations (will-change, transform: translateZ(0))
- Support complet du mode sombre
