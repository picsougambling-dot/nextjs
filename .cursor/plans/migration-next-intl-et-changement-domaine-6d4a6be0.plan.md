<!-- 6d4a6be0-d377-4704-bf3e-ba9e7e1216ca 1ec91ba5-412a-4288-8ac1-ae535bc59474 -->
# Traduction des textes de bonus restants

## Problème identifié

Les textes de bonus comme "100% jusqu'à 500€" apparaissent encore en français dans plusieurs endroits de la page `/ru` :

1. **Tableau comparatif dans `SEOEnrichedGuide.tsx`** : Les bonus sont passés directement depuis `casinos[].bonusText` sans formatage
2. **Section recommandations dans `SEOEnrichedGuide.tsx`** : Les bonus dans les descriptions ne sont pas formatés
3. **Données des casinos** : Les `bonusText` sont stockés en dur en français dans `src/data/casinos.ts`

## Solution

### 1. Créer une fonction utilitaire de formatage de bonus

Créer un fichier utilitaire `src/utils/bonusFormatter.ts` qui :

- Parse le format français "X% jusqu'à Y€ + Z FS"
- Utilise `useTranslations` pour formater selon la locale
- Peut être utilisée dans les composants serveur et client

### 2. Modifier `app/[locale]/page.tsx`

Dans la section où `topCasinos` est passé à `SEOEnrichedGuide` :

- Utiliser la fonction de formatage pour traduire les `bonusText` avant de les passer
- Formater les 3 casinos du tableau comparatif

### 3. Modifier `src/components/SEOEnrichedGuide.tsx`

- Ajouter `useTranslations('CasinoCard')` pour accéder aux clés de traduction
- Créer une fonction `formatBonusText` locale similaire à celle de `CasinoCard`
- Formater les bonus dans le tableau comparatif (ligne 54)
- Formater les bonus dans les sections de recommandations (lignes 85-97)

### 4. Vérifier le footer

Vérifier que le lien "À propos" dans le footer est bien traduit (déjà fait précédemment, mais vérification nécessaire)

## Fichiers à modifier

- `src/utils/bonusFormatter.ts` (nouveau fichier) - Fonction utilitaire de formatage
- `app/[locale]/page.tsx` - Formater les bonus avant de les passer à SEOEnrichedGuide
- `src/components/SEOEnrichedGuide.tsx` - Formater les bonus dans le tableau et les recommandations

## Notes

- La fonction `formatBonusText` existe déjà dans `CasinoCard.tsx` mais elle utilise `useTranslations` qui nécessite un contexte React. Pour une utilisation dans les composants serveur, il faudra peut-être adapter l'approche.
- Les données dans `src/data/casinos.ts` resteront en français car elles servent de source de vérité, mais seront formatées à l'affichage.

### To-dos

- [ ] Créer une fonction utilitaire formatBonusText dans src/utils/bonusFormatter.ts qui parse le format français et utilise les traductions
- [ ] Modifier app/[locale]/page.tsx pour formater les bonusText avant de les passer à SEOEnrichedGuide
- [ ] Modifier src/components/SEOEnrichedGuide.tsx pour formater les bonus dans le tableau comparatif et les sections de recommandations
- [ ] Vérifier que le footer est bien traduit (lien 'À propos')