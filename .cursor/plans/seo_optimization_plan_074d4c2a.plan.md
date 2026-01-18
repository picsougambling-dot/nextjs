---
name: SEO Optimization Plan
overview: Audit et correction complète des problèmes SEO identifiés par Semalt pour améliorer l'indexation Google et viser le top 1 sur toutes les langues
todos: []
---

# Plan d'Optimisation SEO - GigaBonus

## État actuel identifié

### ✅ Déjà fait

- Sitemap multilingue avec alternates hreflang (`app/sitemap.ts`)
- Configuration hreflang dans les métadonnées (`app/[locale]/layout.tsx`)
- Robots.txt généré dynamiquement (`app/robots.ts`)
- Structure multilingue avec 11 langues

### ❌ À corriger

1. **Redirects www → non-www** : Fonction `handleWWWRedirect` dans `middleware.ts` est commentée (lignes 174-178)
2. **Robots.txt** : Vérifier s'il y a des sitemaps non existants référencés
3. **Hreflang** : Les URLs hreflang doivent pointer uniquement vers versions non-www (https://gigabonus.win)
4. **Traductions pages internes** : 

- Pages guides : 4/9 complètes (44%)
- Pages blog/avis : Texte français hardcodé
- Pages casinos individuelles : À vérifier

5. **Performance** : Score 70 desktop / 72 mobile - à améliorer
6. **404 errors** : À vérifier et corriger

## Plan d'action

### Phase 1 : Redirects et Configuration de base

#### 1.1 Activer redirects www → non-www

- **Fichier** : `middleware.ts`
- **Action** : Décommenter et activer `handleWWWRedirect` (lignes 174-178)
- **Test** : Vérifier que `https://www.gigabonus.win/fr` → `https://gigabonus.win/fr` (301)

#### 1.2 Nettoyer robots.txt

- **Fichier** : `app/robots.ts`
- **Action** : 
- Vérifier qu'il n'y a pas de "Allow: /" (déjà OK)
- Supprimer les références aux sitemaps non existants
- Garder uniquement `/sitemap.xml`

#### 1.3 Corriger hreflang pour non-www uniquement

- **Fichiers** : 
- `app/[locale]/layout.tsx` (ligne 44)
- `src/lib/metadata-helpers.ts` (ligne 44)
- `src/components/SEOHead.tsx` (ligne 76)
- **Action** : S'assurer que toutes les URLs hreflang utilisent `https://gigabonus.win` (sans www)
- **Vérifier** : Que `siteConfig.url` est bien `https://gigabonus.win` (sans www)

### Phase 2 : Traductions des pages internes

#### 2.1 Pages guides restantes (5/9)

- **Pages à traduire** :
- `top-slots-2026`
- `astuces-casino`
- `meilleurs-bookmakers`
- `calculateur-roulette`
- `calculateur-cotes-sportives`
- **Action** : Créer namespace `GuidePages.{pageName}` dans tous les `messages/{locale}.json` (11 langues)
- **Fichiers** : `app/[locale]/{page-name}/page.tsx `→ remplacer texte hardcodé par `useTranslations()`

#### 2.2 Pages blog/avis

- **Problème** : Texte français hardcodé dans les pages d'avis
- **Action** : 
- Créer namespace `BlogPages.{casinoName}` pour chaque avis
- Remplacer tous les textes hardcodés par `t('...')`
- **Fichiers** : `app/[locale]/blog/avis-*/page.tsx`

#### 2.3 Pages casinos individuelles

- **Action** : Vérifier que toutes les pages casinos utilisent les traductions
- **Fichiers** : `app/[locale]/[casino-name]/page.tsx`

### Phase 3 : Performance et Optimisations

#### 3.1 Optimiser les images

- Convertir toutes les images en WebP/AVIF
- Ajouter lazy loading sur les images below-the-fold
- Optimiser les tailles d'images

#### 3.2 Optimiser le JavaScript

- Vérifier le code splitting (déjà configuré dans `next.config.js`)
- Lazy load des composants lourds (déjà fait pour Footer, RelatedLinks)
- Réduire la taille des bundles

#### 3.3 Optimiser le CSS

- Purger le CSS non utilisé
- Minifier le CSS de production
- Utiliser CSS-in-JS efficacement

### Phase 4 : Vérification et Tests

#### 4.1 Vérifier les 404

- Utiliser le fichier Google Sheets fourni pour identifier les 404
- Corriger tous les liens cassés
- Ajouter des redirects 301 pour les anciennes URLs

#### 4.2 Tester les hreflang

- Vérifier que toutes les pages retournent 200
- S'assurer que les hreflang pointent vers des URLs valides
- Tester avec Google Search Console

#### 4.3 Générer nouveaux sitemaps

- Après corrections, régénérer les sitemaps
- Ajouter les sitemaps à Google Search Console
- Soumettre les pages principales pour indexation

### Phase 5 : Monitoring et Suivi

#### 5.1 Google Search Console

- Ajouter les nouveaux sitemaps
- Soumettre les pages principales pour fetch
- Monitorer les erreurs d'indexation

#### 5.2 Performance Monitoring

- Utiliser PageSpeed Insights pour suivre les améliorations
- Objectif : 85+ desktop, 80+ mobile

## Priorités

1. **URGENT** : Activer redirects www → non-www (Phase 1.1)
2. **URGENT** : Corriger hreflang pour non-www uniquement (Phase 1.3)
3. **IMPORTANT** : Traduire les pages guides restantes (Phase 2.1)
4. **IMPORTANT** : Traduire les pages blog/avis (Phase 2.2)
5. **MOYEN** : Optimiser la performance (Phase 3)
6. **MOYEN** : Corriger les 404 (Phase 4.1)

## Fichiers clés à modifier

- `middleware.ts` : Activer redirects www
- `app/[locale]/layout.tsx` : Corriger URLs hreflang
- `src/lib/metadata-helpers.ts` : Corriger URLs hreflang
- `src/components/SEOHead.tsx` : Corriger URLs hreflang
- `app/robots.ts` : Nettoyer sitemaps
- `messages/{locale}.json` : Ajouter traductions manquantes
- `app/[locale]/{page}/page.tsx` : Remplacer texte hardcodé