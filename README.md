# GigaBonus - Plateforme de Comparaison de Casinos en Ligne

> **Plateforme multilingue** de comparaison et d'avis de casinos en ligne avec optimisation SEO complète, filtrage géographique intelligent et support PWA.

---

## 📋 Table des matières

- [Vue d'ensemble](#-vue-densemble)
- [Technologies](#-technologies)
- [Langues supportées](#-langues-supportées)
- [Fonctionnalités principales](#-fonctionnalités-principales)
- [Architecture et structure](#-architecture-et-structure)
- [Optimisations SEO](#-optimisations-seo)
- [Filtrage géographique](#-filtrage-géographique)
- [Déploiement](#-déploiement)
- [Développement](#-développement)
- [Configuration](#-configuration)
- [Intégration et patterns](#-intégration-et-patterns-critiques)
- [Statistiques du projet](#-statistiques-du-projet)
- [Points à traiter](#-points-à-traiter)
- [Dépannage](#-dépannage-troubleshooting)

---

## 🎯 Vue d'ensemble

GigaBonus est une plateforme complète de comparaison de casinos en ligne développée avec **Next.js 15** et **TypeScript**. Le projet est entièrement multilingue (11 langues), optimisé pour le SEO, avec un système avancé de filtrage géographique et un support PWA.

### Objectifs principaux

- 🎰 Comparer et classer 45+ casinos en ligne
- 🌍 Offrir une expérience multilingue complète (11 langues)
- 🔍 Optimiser pour le SEO (Top 1 Google sur toutes les langues)
- 🌐 Filtrer les casinos selon la géolocalisation de l'utilisateur
- ⚡ Performance optimale (objectif 85+ desktop, 80+ mobile)
- 📱 Support PWA (Progressive Web App)

---

## 🚀 Technologies

### Stack principal

| Technologie | Version | Usage |
|------------|---------|-------|
| **Next.js** | 15.5.7 | Framework React avec App Router |
| **React** | 18.3.1 | Bibliothèque UI |
| **TypeScript** | 5.8.3 | Typage statique |
| **Tailwind CSS** | 3.4.17 | Framework CSS utility-first |
| **next-intl** | 4.5.7 | Internationalisation (11 langues) |
| **shadcn/ui** | - | Composants UI basés sur Radix UI |
| **Radix UI** | - | Composants accessibles (49 composants) |
| **TanStack Query** | 5.83.0 | Gestion d'état serveur |
| **Zod** | 3.25.76 | Validation de schémas |
| **date-fns** | 3.6.0 | Manipulation de dates |
| **lucide-react** | 0.462.0 | Icônes |
| **next-themes** | 0.3.0 | Gestion du thème (dark/light) |

### Déploiement

- **Production** : Vercel (principal)
- **Alternative** : Cloudflare Pages (support via `next-on-pages`)
- **Géolocalisation** : ipapi.co (API gratuite, 1000 req/jour)

### Build tools

- **Webpack** : Configuration personnalisée pour code splitting
- **PostCSS** : Traitement CSS
- **Autoprefixer** : Préfixes CSS automatiques
- **ESLint** : Linting (Next.js config)

---

## 🌍 Langues supportées

Le projet supporte **11 langues complètes** avec URLs traduites et contenu localisé :

| Code | Langue | Locale par défaut |
|------|--------|-------------------|
| 🇫🇷 `fr` | Français | ✅ Oui (fallback) |
| 🇬🇧 `en` | Anglais | ✅ **Par défaut** |
| 🇩🇪 `de` | Allemand | |
| 🇪🇸 `es` | Espagnol | |
| 🇷🇺 `ru` | Russe | |
| 🇮🇹 `it` | Italien | |
| 🇧🇷 `br` | Brésilien | |
| 🇵🇹 `pt` | Portugais | |
| 🇳🇱 `nl` | Néerlandais | |
| 🇱🇻 `lv` | Letton | |
| 🇫🇮 `fi` | Finlandais | |

### État des traductions

- ✅ **Pages guides** : 100% traduites (9 pages)
- ✅ **Pages dépôt** : 100% traduites (10 méthodes)
- ✅ **Composants UI** : 100% traduits (Navbar, Footer, FilterBar, etc.)
- ✅ **Métadonnées SEO** : 100% traduites
- ⏸️ **Pages blog/avis** : Traduction selon `availableCountries` (déféré)
- ⏸️ **Pages casinos individuelles** : Traduction selon `availableCountries` (déféré)

---

## ✨ Fonctionnalités principales

### 1. Comparaison de casinos

- **45+ casinos** avec classement automatique par score
- Filtres avancés : bonus, wager, méthodes de paiement, providers, vitesse de retrait
- Système de scoring automatique basé sur :
  - **Bonus (20% du score)** : `(bonusPercent / 700) * 14` points (max 700% = 14 points)
  - **Wager (20% du score)** : 
    - Si `wager === null` → 20 points (sans wager)
    - Sinon → `Math.max(0, 20 - (wager / 2))` points
  - **Méthodes de paiement (8% du score)** : `(methods.length / 8) * 8` points (max 8 méthodes = 8 points)
  - **Rating (16% du score)** : `(rating / 10) * 16` points (max note 10 = 16 points)
  - **Providers (8% du score)** : `Math.min((providers.length / 80) * 8, 8)` points (max 80 providers = 8 points)
  - **Bookmaker (8% du score)** : +8 points si `isBookmaker === true`
  - **Type d'affiliation (bonus massif)** : +100 points si `affiliationType === 'CPA'` (garantit classement supérieur aux RS)
- Score final arrondi à 1 décimale : `Math.round(score * 10) / 10`
- Affichage de cartes détaillées avec vidéos, logos, backgrounds
- **Premium providers** : Hacksaw, Pragmatic, NoLimit ont une étoile dans l'affichage

### 2. Pages guides et outils

- **9 pages guides** complètes et traduites :
  - Top Slots 2025
  - Astuces Casino
  - Meilleurs Bookmakers
  - Calculateur Roulette
  - Calculateur Cotes Sportives
  - Top Casinos Crypto
  - Casinos Sans KYC
  - Bonus Cashback
  - Bonus Sans Wager

### 3. Pages méthodes de dépôt

- **10 méthodes de dépôt** documentées et traduites :
  - Carte bancaire
  - Crypto
  - Neosurf
  - Cashlib
  - Paysafecard
  - Virement bancaire
  - Skrill
  - Neteller
  - Jetonbank
  - Mifinity

### 4. Blog et avis

- **26 avis de casinos** détaillés
- Articles de blog optimisés SEO
- Structure avec métadonnées enrichies
- Format : `/blog/avis-[casino-name]-2025`

### 4.1. Codes promo et promotions

- **Système de popup promotions** (`PromoPopup`) avec codes exclusifs
- **5 casinos avec codes promo** : King's Chance, Lucky Treasure, Spin Dinasty, Hunnyplay, SpinAura
- Structure dans `src/data/promos.ts` :
  - Codes avec descriptions et slots associés
  - Bannières GIF animées
  - Conditions (max win, wager) affichées

### 5. Calculateurs et outils

#### Calculateur Roulette
- **10 types de paris** : Plein, Cheval, Transversale, Carré, Sixain, Douzaine, Colonne, Rouge/Noir, Pair/Impair, Manque/Passe
- Calcul automatique : Probabilité, gain attendu, avantage maison (2.70%)
- Interface traduite dans 11 langues
- Types TypeScript : `BetType` avec probability et payout

#### Calculateur Cotes Sportives
- Utilise **The Odds API** (clé hardcodée par défaut, configurable via env)
- Calculateur de valeur des paris sportifs
- Interface multilingue complète

### 6. Filtrage géographique

- Détection automatique du pays via IP (ipapi.co)
- Filtrage strict des casinos selon `availableCountries`
- Si `userCountry = null`, aucun casino affiché (sécurité)
- Cache court (2 secondes) pour détecter les changements VPN
- Support de 37 pays mappés vers 11 locales

### 7. PWA (Progressive Web App)

- Manifest configuré (`/manifest.webmanifest`)
- Icônes PWA (192x192, 512x512)
- Page d'installation (`/install`) avec prompt personnalisé
- Support offline (via service worker potentiel)

### 8. Thème sombre/clair

- Support du thème via `next-themes`
- Thème par défaut : **Dark** (`defaultTheme="dark"`, `enableSystem=false`)
- Toggle de thème dans la navbar
- Persistance dans localStorage (`gigabonus-theme`)
- Variables CSS HSL pour couleurs (light/dark modes)
- Effets glass morphism avec backdrop-filter

- Support du thème via `next-themes`
- Toggle de thème dans la navbar
- Persistance du choix utilisateur

---

## 🏗️ Architecture et structure

```
GIGABONUS/
├── app/                          # Next.js App Router
│   ├── [locale]/                # Pages multilingues
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── layout.tsx          # Layout avec SEO et métadonnées
│   │   ├── blog/               # Blog et avis (26 articles)
│   │   │   └── avis-*/        # Pages d'avis individuelles
│   │   ├── [casino-name]/      # Pages casinos (45+ pages)
│   │   ├── top-*/              # Pages guides (9 pages)
│   │   ├── depot/              # Pages méthodes de dépôt (10 pages)
│   │   ├── about/              # Page à propos
│   │   └── install/            # Page installation PWA
│   ├── api/
│   │   └── geo/                # API géolocalisation (/api/geo)
│   │       └── route.ts
│   ├── sitemap.xml/            # Route API pour sitemap XML pur
│   │   └── route.ts
│   ├── robots.ts               # Robots.txt dynamique
│   └── layout.tsx              # Layout racine
│
├── src/
│   ├── components/             # Composants React
│   │   ├── ui/                # Composants shadcn/ui (49 composants)
│   │   │   ├── accordion.tsx, alert.tsx, avatar.tsx, badge.tsx
│   │   │   ├── button.tsx, card.tsx, carousel.tsx, chart.tsx
│   │   │   ├── checkbox.tsx, command.tsx, dialog.tsx, drawer.tsx
│   │   │   ├── dropdown-menu.tsx, form.tsx, input.tsx, label.tsx
│   │   │   ├── popover.tsx, select.tsx, tabs.tsx, toast.tsx
│   │   │   └── ... (49 composants au total)
│   │   ├── CasinoCard.tsx     # Carte casino avec formatage bonus automatique
│   │   ├── CasinoDialog.tsx   # Dialog détail casino (lazy loaded)
│   │   ├── CasinoTable.tsx    # Tableau comparatif des casinos
│   │   ├── CasinoChips.tsx    # Chips/badges pour les casinos
│   │   ├── CasinoToast.tsx    # Toast notifications pour actions casino
│   │   ├── FilterBar.tsx      # Barre de filtres avancée avec compteur
│   │   ├── Navbar.tsx         # Navigation principale avec menu responsive
│   │   ├── Footer.tsx         # Footer avec liens et informations
│   │   ├── SEOHead.tsx        # Composant SEO client-side (Head Next.js)
│   │   ├── SchemaOrg.tsx      # Composant pour Structured Data (JSON-LD)
│   │   ├── SEOEnrichedBlog.tsx      # Wrapper SEO pour pages blog
│   │   ├── SEOEnrichedGuide.tsx     # Wrapper SEO pour pages guides
│   │   ├── SEOEnrichedContent.tsx   # Wrapper SEO pour contenu général
│   │   ├── SEOEnrichedPayment.tsx   # Wrapper SEO pour pages paiement
│   │   ├── Breadcrumbs.tsx    # Fil d'Ariane avec traductions
│   │   ├── LanguageSwitcher.tsx        # Sélecteur de langue (ancien)
│   │   ├── LanguageSwitcherNextIntl.tsx # Sélecteur de langue (next-intl)
│   │   ├── ThemeToggle.tsx    # Toggle thème dark/light
│   │   ├── ThemeProvider.tsx  # Provider thème (next-themes)
│   │   ├── Providers.tsx      # Provider principal (Query, Theme, Geoloc)
│   │   ├── GeolocationProvider.tsx # Provider géolocalisation client
│   │   ├── PromoPopup.tsx     # Popup promotions avec animations
│   │   ├── CounterAnimation.tsx      # Animation compteur numérique
│   │   ├── DecorativeShapes.tsx      # Formes décoratives animées
│   │   ├── Diamonds.tsx       # Animation diamants flottants
│   │   ├── GoldParticles.tsx  # Particules dorées animées
│   │   ├── PlayingCards.tsx   # Cartes à jouer animées
│   │   ├── EmptyState.tsx     # État vide avec suggestions
│   │   ├── Defer.tsx          # Composant pour chargement différé
│   │   ├── PageLoader.tsx     # Loader de page initial
│   │   ├── ScrollToTop.tsx    # Bouton scroll to top
│   │   └── RelatedLinks.tsx   # Liens connexes (lazy loaded)
│   │
│   ├── data/                   # Données statiques
│   │   ├── casinos.ts         # 45+ casinos avec scoring automatique
│   │   ├── providers.ts       # 226+ providers normalisés + topProviders
│   │   ├── promos.ts          # Codes promo et bannières (PromoPopup)
│   │   └── pageTitles.ts      # Mapping pathname → titre SEO (81+ pages)
│   │
│   ├── hooks/                  # Hooks React personnalisés
│   │   ├── useUserCountry.ts  # Hook détection pays via API (IP)
│   │   ├── useGeolocation.tsx # Hook géolocalisation navigateur (legacy Weglot, non utilisé)
│   │   ├── useLazyVideo.tsx   # Hook chargement vidéo lazy (IntersectionObserver)
│   │   └── use-mobile.tsx     # Hook détection mobile (viewport)
│   │
│   ├── i18n/                   # Configuration i18n
│   │   ├── routing.ts         # Configuration routing next-intl
│   │   ├── pathnames.ts       # Traductions des URLs
│   │   └── ...                # Helpers i18n
│   │
│   ├── lib/                    # Utilitaires
│   │   ├── geo-utils.ts       # Fonction detectCountryFromIP() pour API
│   │   ├── metadata-helpers.ts # generateMultilingualMetadata() pour SEO
│   │   ├── seo-metadata.ts    # generateMetadata() helper SEO
│   │   ├── get-translated-canonical.ts # getTranslatedCanonical() pour URLs
│   │   └── utils.ts           # cn() helper (clsx + tailwind-merge)
│   │
│   └── config/
│       └── site.ts             # Configuration globale
│
├── messages/                    # Fichiers de traduction (11 langues)
│   ├── fr.json                # Français
│   ├── en.json                # Anglais
│   ├── de.json                # Allemand
│   ├── es.json                # Espagnol
│   ├── ru.json                # Russe
│   ├── it.json                # Italien
│   ├── br.json                # Brésilien
│   ├── pt.json                # Portugais
│   ├── nl.json                # Néerlandais
│   ├── lv.json                # Letton
│   └── fi.json                # Finlandais
│
├── public/                      # Assets statiques
│   ├── images/                # Images WebP (261 fichiers)
│   ├── videos/                # Vidéos MP4 (71 fichiers)
│   ├── manifest.webmanifest   # Manifest PWA
│   ├── favicon.ico            # Favicon
│   ├── pwa-*.png              # Icônes PWA
│   └── llms.txt               # Documentation pour LLMs
│
├── scripts/                     # Scripts utilitaires (20+ scripts)
│   ├── audit-seo-multilingual.js # Audit SEO complet multilingue
│   ├── detect-404.js          # Détecter erreurs 404 potentielles
│   ├── test-sitemap.js        # Tester et valider le sitemap XML
│   ├── test-all-pages.js      # Générer liste des pages à tester
│   ├── test-pages-browser.js  # Script pour tests navigateur MCP
│   ├── validate-json.js       # Valider tous les fichiers JSON
│   ├── find-untranslated-text.js # Trouver textes non traduits
│   ├── add-guide-translations.js # Ajouter traductions guides
│   ├── add-depot-main-translations.js # Ajouter traductions dépôt
│   ├── add-about-translations.js # Ajouter traductions about
│   ├── add-about-seo-translations.js # Ajouter traductions SEO about
│   ├── create-all-depot-translations.js # Créer toutes traductions dépôt
│   ├── generate-depot-translations.js # Générer traductions dépôt
│   ├── generate-all-crypto-translations.js # Générer traductions crypto
│   ├── fix-layouts.js         # Corriger layouts invalides
│   ├── fix-blog-layouts.js    # Corriger layouts blog
│   ├── fix-syntax-errors.js   # Corriger erreurs syntaxe
│   ├── migrate-pages.js       # Migrer pages
│   ├── convert-sitemap-to-xml.js # Convertir sitemap vers XML
│   └── *.ps1                  # Scripts PowerShell (Windows)
│
├── middleware.ts                # Middleware Next.js (redirects, géoloc)
├── next.config.js              # Configuration Next.js
├── tailwind.config.ts          # Configuration Tailwind
├── tsconfig.json               # Configuration TypeScript
├── wrangler.toml              # Configuration Cloudflare Pages
└── package.json               # Dépendances et scripts
```

---

## 🔍 Optimisations SEO

### 1. Sitemap et indexation

- ✅ **Sitemap XML pur** : Route API (`app/sitemap.xml/route.ts`) générant du XML valide
- ✅ **1012 URLs** générées automatiquement (toutes langues + pages)
- ✅ **Alternates hreflang** : Toutes les pages ont leurs alternates pour 11 langues
- ✅ **Pathnames traduits** : URLs traduites selon la locale (ex: `/fr/astuces-casino` → `/en/casino-tips`)
- ✅ **Pages casinos** : URLs identiques dans toutes les langues (non traduites)
- ✅ **Priorités et changefreq** : Configurées par type de page
- ✅ **Format conforme** : 100% conforme aux spécifications Google

### 2. Robots.txt

- ✅ Généré dynamiquement (`app/robots.ts`)
- ✅ Sitemap unique référencé : `/sitemap.xml`
- ✅ Exclusion des routes API, admin, _next
- ✅ Règles spécifiques pour Googlebot et Bingbot

### 3. Métadonnées SEO

- ✅ **Métadonnées dynamiques** : Générées par page et par locale
- ✅ **Open Graph** : Images, titres, descriptions
- ✅ **Twitter Cards** : Support complet
- ✅ **Structured Data** : JSON-LD (Schema.org) sur toutes les pages
- ✅ **Canonical URLs** : URLs canoniques par page
- ✅ **Hreflang** : Toutes les pages avec alternates complets

### 4. Redirects 301

- ✅ **166 redirects 301** pour corriger les URLs avec locale dupliquée
  - Méthodes de dépôt : 55 redirects (5 méthodes × 11 langues)
  - Page top-casinos-crypto : 11 redirects (11 langues)
  - Articles de blog : 99 redirects (9 articles × 11 langues)
- ✅ **Redirects domaines** : `gigabonus.fr` → `gigabonus.win` (middleware)
- ✅ **Redirects www** : Géré par Vercel (infrastructure)

### 5. Performance

- ✅ **Images optimisées** : `next/image` avec WebP/AVIF, lazy loading, priorités
- ✅ **Code splitting** : Configuration optimale par vendor (React, UI, Lucide)
- ✅ **Headers de cache** : Assets statiques avec cache 1 an (`max-age=31536000`)
- ✅ **Headers de sécurité** : X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- ✅ **Compression** : Activée (gzip/brotli)
- ✅ **Source maps** : Désactivés en production
- ⚠️ **Objectif** : 85+ desktop, 80+ mobile (actuellement ~70/72)

### 6. URLs et structure

- ✅ **URLs propres** : Structure `/locale/pathname` toujours présente
- ✅ **Locale prefix** : `always` (pas de route sans locale)
- ✅ **Trailing slash** : Désactivé (URLs sans slash final)
- ✅ **HTTPS** : Forcé partout
- ✅ **Non-www** : Toutes les URLs pointent vers `gigabonus.win` (non-www)

---

## 🌐 Filtrage géographique

### Système de détection

1. **Middleware** (`middleware.ts`) :
   - Détection IP via `ipapi.co` (priorité absolue)
   - Fallback sur `Accept-Language` si IP non disponible
   - Mapping pays → locale (37 pays supportés)
   - Cache très court pour détecter changements VPN

2. **API Route** (`app/api/geo/route.ts`) :
   - Endpoint `/api/geo` pour détection côté client
   - Méthode GET, retourne JSON `{ countryCode: string | null, success: boolean }`
   - Utilise `detectCountryFromIP()` depuis `@/lib/geo-utils`
   - Timeout 3 secondes, erreur 500 si échec

3. **Hook client** (`src/hooks/useUserCountry.ts`) :
   - Cache sessionStorage (2 secondes)
   - Détection automatique au chargement de page
   - Mise à jour en arrière-plan pour détecter changements VPN

### Filtrage des casinos

```typescript
// Filtrage strict : casino affiché si :
1. userCountry !== null (obligatoire)
2. casino.availableCountries === undefined OU
3. casino.availableCountries.length === 0 OU
4. casino.availableCountries.includes(userCountry)
```

### Pays supportés

37 pays mappés vers 11 locales :
- 🇫🇷 **FR, BE** → `fr`
- 🇬🇧 **US, GB, UK, CA, AU, NZ, IE** → `en`
- 🇩🇪 **DE, AT, CH** → `de`
- 🇪🇸 **ES, MX, AR, CO, CL, PE** → `es`
- 🇷🇺 **RU, BY, KZ** → `ru`
- 🇮🇹 **IT, SM, VA** → `it`
- 🇧🇷 **BR** → `br`
- 🇵🇹 **PT** → `pt`
- 🇳🇱 **NL** → `nl`
- 🇱🇻 **LV** → `lv`
- 🇫🇮 **FI** → `fi`

---

## 🚢 Déploiement

### Vercel (Production principale)

```bash
# Déploiement automatique via Git
git push origin main  # Déploie automatiquement sur Vercel

# Configuration requise dans Vercel :
- Domaines : gigabonus.win, www.gigabonus.win, gigabonus.fr
- Redirects www → non-www : Activé (infrastructure)
- Build Command : npm run build
- Output Directory : .next
- Install Command : npm install
```

### Cloudflare Pages (Alternative)

```bash
# Build pour Cloudflare Pages
npm run cf-build

# Déploiement local
npm run pages:dev

# Déploiement
npm run pages:deploy
```

**Note** : Cloudflare Pages nécessite `unoptimized: true` pour les images (configuré via `CF_PAGES=1`).

---

## 💻 Développement

### Prérequis

- Node.js 18+ (recommandé : 20+)
- npm ou yarn
- Git

### Installation

```bash
# Cloner le repository
git clone <repository-url>
cd nextjs-main

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

### Scripts disponibles

#### Scripts de développement

```bash
# Développement
npm run dev              # Serveur de développement (http://localhost:3000)

# Build
npm run build           # Build de production
npm run start           # Serveur de production local

# Linting
npm run lint            # ESLint (Next.js config, ignoré pendant le build)
```

#### Scripts Cloudflare Pages

```bash
npm run pages:build     # Build pour Cloudflare Pages (utilise @cloudflare/next-on-pages)
npm run pages:deploy    # Déployer sur Cloudflare Pages (via wrangler)
npm run pages:dev       # Dev local Cloudflare Pages
npm run cf-build        # Build complet avec CF_PAGES=1 (pour images unoptimized)
```

#### Scripts utilitaires

```bash
# Tests
npm run test:sitemap    # Tester le sitemap (validation XML)

# Validation
node scripts/validate-json.js              # Valider tous les fichiers JSON de traduction
node scripts/audit-seo-multilingual.js     # Audit SEO complet multilingue

# Détection de problèmes
node scripts/detect-404.js                 # Détecter les erreurs 404 potentielles
node scripts/find-untranslated-text.js     # Trouver les textes non traduits

# Tests de pages
node scripts/test-all-pages.js             # Générer la liste des pages à tester
node scripts/test-pages-browser.js         # Script pour tester avec navigateur MCP

# Gestion des traductions
node scripts/add-guide-translations.js              # Ajouter traductions guides
node scripts/add-depot-main-translations.js         # Ajouter traductions dépôt
node scripts/add-about-translations.js              # Ajouter traductions about
node scripts/add-about-seo-translations.js          # Ajouter traductions SEO about
node scripts/create-all-depot-translations.js       # Créer toutes les traductions dépôt
node scripts/generate-depot-translations.js         # Générer traductions dépôt
node scripts/generate-all-crypto-translations.js    # Générer traductions crypto

# Correction automatique
node scripts/fix-layouts.js                # Corriger les layouts invalides
node scripts/fix-blog-layouts.js           # Corriger les layouts de blog
node scripts/fix-blog-links.ps1            # Corriger les liens de blog (PowerShell)
node scripts/fix-syntax-errors.js          # Corriger les erreurs de syntaxe
node scripts/fix-all-blog-avis.ps1         # Corriger tous les avis blog (PowerShell)
node scripts/fix-blog-avis-locale.ps1      # Corriger locale des avis blog (PowerShell)

# Migration et conversion
node scripts/migrate-pages.js              # Migrer des pages
node scripts/migrate-pages.ps1             # Migrer des pages (PowerShell)
node scripts/convert-sitemap-to-xml.js     # Convertir sitemap vers XML pur
```

**Note** : Les scripts `.ps1` sont pour PowerShell (Windows). Utilisez les versions `.js` pour Unix/Mac.

### Patterns d'intégration importants

#### Navigation multilingue

**❌ NE PAS utiliser** :
```typescript
import Link from 'next/link';  // ❌ Ne gère pas les traductions d'URLs
```

**✅ Utiliser** :
```typescript
import { Link } from '@/i18n/navigation';  // ✅ Gère automatiquement les pathnames traduits

// Utilisation
<Link href="/astuces-casino">Astuces</Link>
// Génère automatiquement /en/casino-tips si locale = en
```

**Exports disponibles depuis `src/i18n/routing.ts`** :
- `Link` : Composant de navigation (identique à next/link mais avec traductions)
- `redirect(path, locale?)` : Redirection multilingue
- `usePathname()` : Pathname actuel (avec locale)
- `useRouter()` : Router avec méthodes multilingues
- `getPathname(href, locale)` : Obtenir pathname traduit

#### Composants lazy loading

**Pattern utilisé partout** :
```typescript
import { lazy, Suspense } from "react";

// Lazy load below-the-fold components
const Footer = lazy(() => import("@/components/Footer"));
const RelatedLinks = lazy(() => import("@/components/RelatedLinks"));

// Utilisation avec Suspense
<Suspense fallback={<div className="h-96" />}>
  <Footer />
</Suspense>
```

**Composants lazy-loaded** :
- `Footer` : Footer (toujours en bas de page)
- `RelatedLinks` : Liens connexes (souvent en bas)
- `CasinoDialog` : Dialog détail casino (chargé à la demande)

#### Structure Providers (ordre critique)

**Dans `src/components/Providers.tsx`** :
```
QueryClientProvider (TanStack Query)
  └─ ThemeProvider (next-themes, attribute="class", storageKey="gigabonus-theme")
      └─ TooltipProvider (Radix UI)
          └─ GeolocationProvider (géolocalisation client)
              └─ {children} (contenu app)
              └─ Toaster (notifications)
              └─ Sonner (toast alternatif)
```

**Important** : Utilisé dans `app/[locale]/layout.tsx` avec `<NextIntlClientProvider>`

#### Images Next.js (patterns)

**Images prioritaires (above-the-fold, index < 6)** :
```typescript
<Image
  src={casino.logo}
  width={224}
  height={224}
  priority={index < 6}  // 6 premières images prioritaires
  loading={index < 6 ? "eager" : "lazy"}
  quality={90}
  sizes="(max-width: 768px) 224px, 192px"
  onError={(e) => {
    e.currentTarget.src = "https://via.placeholder.com/100x100";
  }}
/>
```

**Images avec fill (background)** :
```typescript
<Image
  src={casino.backgroundImage}
  fill
  className="object-cover opacity-70"
  sizes="(max-width: 768px) 100vw, 400px"
  loading="lazy"
  quality={85}
/>
```

**Formats** : WebP, AVIF (automatique via Next.js)
**Optimisation** : Automatique sauf si `CF_PAGES=1` (Cloudflare)

#### Vidéos

**Vidéos directes (sans hook)** :
```typescript
const videoRef = useRef<HTMLVideoElement>(null);

<video
  ref={videoRef}
  className="w-full h-full object-cover opacity-70"
  loop
  muted
  playsInline
  onMouseEnter={() => videoRef.current?.play()}
  onMouseLeave={() => videoRef.current?.pause()}
>
  <source src={casino.video} type="video/mp4" />
</video>
```

**OU avec hook useLazyVideo (lazy loading)** :
```typescript
const { videoRef, isVisible } = useLazyVideo();
{isVisible && (
  <video ref={videoRef} ...>
)}
```

#### generateStaticParams et generateMetadata

**Pattern pour layouts avec locales** :
```typescript
// Générer params pour toutes les locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale as string }));
}

// Générer métadonnées par locale (server component)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = locales.includes(locale as any) ? locale : defaultLocale;
  const t = await getTranslations({ locale: validLocale, namespace: 'SEO.home' });
  // ... générer métadonnées avec hreflang
}
```

**Important** : Ne jamais utiliser `notFound()` dans `generateMetadata` d'un layout racine, utiliser `redirect()` à la place.

#### State management et cache

**Client-side** :
- **sessionStorage** : Cache géolocalisation (2 secondes), page load time
- **localStorage** : Thème utilisateur (`gigabonus-theme`)
- **React state** : useState pour filtres, recherche, affichage
- **TanStack Query** : Configuré mais peu utilisé (QueryClient instance unique)

**Server-side** :
- **Next.js cache** : Automatique pour les routes statiques
- **Pas de cache** : API `/api/geo` (cache: 'no-store')

#### Gestion d'erreurs et fallbacks

**Images** :
```typescript
onError={(e) => {
  e.currentTarget.src = "https://via.placeholder.com/100x100?text=" + name;
}}
```

**Géolocalisation** :
```typescript
catch (error) {
  console.warn('[useUserCountry] Failed:', error);
  setCountryCode(null);  // Fallback : affiche tous les casinos
}
```

**Traductions** :
```typescript
// Dans i18n.ts
if (!locale || !siteConfig.locales.includes(locale as any)) {
  locale = siteConfig.defaultLocale;  // Fallback sur 'en'
}
```

#### Page Loader (script complexe)

**Script d'initialisation** dans `app/[locale]/layout.tsx` :
- Flags globaux : `__LOADER_REMOVED__`, `__LOADER_REMOVING__`, `__LOADER_SCRIPT_RUNNING__`
- Protection multiple contre exécutions multiples
- Masquage CSS uniquement (jamais `removeChild()`)
- Timeout de sécurité : 800ms max
- Gestion des erreurs : `error`, `unhandledrejection` events

**Usage** : Charger/cacher le loader initial de page avec sécurité maximale

---

### Structure des traductions

Les traductions sont organisées par namespace dans `messages/{locale}.json` :

```json
{
  "HomePage": { ... },
  "GuidePages": {
    "topCasinosCrypto": { ... },
    "astucesCasino": { ... },
    "meilleursBookmakers": { ... },
    "calculateurRoulette": { ... },
    "calculateurCotesSportives": { ... },
    "bonusCashback": { ... },
    "bonusSansWager": { ... },
    "topSlots2025": { ... },
    "casinosSansKyc": { ... },
    "install": { ... }
  },
  "DepotPages": {
    "main": { ... },
    "carte": { ... },
    "crypto": { ... },
    ...
  },
  "CasinoCard": { ... },
  "FilterBar": { ... },
  "Navbar": { ... },
  "Footer": { ... },
  "SEO": {
    "home": { ... },
    "about": { ... }
  },
  ...
}
```

**Utilisation dans les composants** :
```typescript
import { useTranslations } from 'next-intl';

// Dans un composant client
const t = useTranslations('HomePage');
const title = t('title');
const description = t('description');

// Avec paramètres
const bonus = t('bonusText.withFreeSpins', { 
  percent: '100', 
  amount: '500', 
  freeSpins: '50' 
});
```

**Utilisation dans les pages serveur** :
```typescript
import { getTranslations } from 'next-intl/server';

// Dans generateMetadata
const t = await getTranslations({ locale, namespace: 'SEO.home' });
const title = t('title');
```

---

## 🎨 Design System

### Variables CSS (HSL uniquement)

Toutes les couleurs sont définies en HSL dans `app/globals.css` :

#### Light Mode
- Background : Gradient 75% → 73% → 71% (gris clair)
- Primary : `280 70% 30%` (violet foncé)
- Accent : `340 80% 55%` (rose/rouge)
- Glass opacity : `0.95` (presque opaque)

#### Dark Mode
- Background : Gradient `240 15% 6%` → `237 17% 8%` → `240 20% 3%` (noir bleuté)
- Primary : `280 70% 38%` (violet clair)
- Accent : `280 70% 55%` (violet lumineux)
- Glass opacity : `0.06` (très transparent)
- Glow effects : Primary et secondary définis

#### Wager Colors
- Excellent : `142 76% 36%` (vert)
- Good : `47 96% 53%` (jaune)
- Medium : `25 95% 53%` (orange)
- High : `0 84% 60%` (rouge)

### Classes utilitaires CSS

- **`.glass-card`** : Glass morphism avec blur, containment layout/paint
- **`.glass-card-overlay`** : Variante sans containment pour dropdowns
- **`.text-gradient`** : Gradient primary → secondary sur texte
- **`.scrollbar-thin`** : Scrollbar personnalisée (6px, couleur primary)
- **`.animate-fade-in`**, **`.animate-fade-in-up`**, **`.animate-glow`** : Optimisées GPU

### Fonts

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
  'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
```

### Border Radius

- Base : `--radius: 1rem` (16px)
- Medium : `calc(var(--radius) - 2px)` (14px)
- Small : `calc(var(--radius) - 4px)` (12px)

---

## ⚙️ Configuration

### Variables d'environnement

#### Variables optionnelles

- **`NEXT_PUBLIC_THE_ODDS_API_KEY`** : Clé API pour le calculateur de cotes sportives
  - Format Next.js : `process.env.NEXT_PUBLIC_*` (pas `import.meta.env`)
  - Une clé par défaut est hardcodée dans `app/[locale]/calculateur-cotes-sportives/page.tsx`
  - Pour utiliser votre propre clé, créez un fichier `.env.local` :
    ```
    NEXT_PUBLIC_THE_ODDS_API_KEY=your_api_key_here
    ```

#### Variables pour Cloudflare Pages

- **`CF_PAGES=1`** : Active le mode Cloudflare Pages (désactive l'optimisation d'images Next.js)
  - Utilisé automatiquement dans le script `npm run cf-build`

#### Variables système

- **`NODE_ENV`** : Utilisé automatiquement par Next.js (`development` ou `production`)
  - En développement : Active les logs de debug pour la géolocalisation
  - En production : Désactive les logs et optimise les performances

### Middleware

Le middleware (`middleware.ts`) gère :

1. **Redirects domaines** : `gigabonus.fr` → `gigabonus.win` (301)
2. **Redirects www** : Géré par Vercel (infrastructure), code commenté
3. **Détection locale** :
   - Priorité 1 : IP (géolocalisation via ipapi.co)
   - Priorité 2 : Accept-Language header
   - Fallback : Locale par défaut (`en`)

### Configuration Next.js

**Fichier** : `next.config.js`

- **Redirects 301** : 166 redirects pour corriger les URLs
- **Images** : WebP/AVIF, unoptimized si `CF_PAGES=1`
- **Code splitting** : Configuration personnalisée (React, UI, Lucide vendors)
- **Headers** : Sécurité, cache, Content-Type
- **Compression** : Activée
- **Source maps** : Désactivés en production

### Configuration i18n

**Fichiers** :
- `src/i18n/routing.ts` : Configuration next-intl avec pathnames traduits
- `src/i18n/pathnames.ts` : Traductions des URLs pour 11 langues
- `i18n.ts` : Plugin Next.js (charge les messages dynamiquement via `getRequestConfig`)

**Options** :
- `localePrefix: 'always'` : Locale toujours dans l'URL (`/fr/`, `/en/`, etc.)
- `localeDetection: true` : Détection automatique (IP puis Accept-Language)
- `defaultLocale: 'en'` : Locale par défaut
- `pathnames` : URLs traduites (ex: `/fr/astuces-casino` → `/en/casino-tips`)

**Exports depuis routing.ts** :
- `Link`, `redirect`, `usePathname`, `useRouter`, `getPathname` : Navigation multilingue
- **Utilisation** : `import { Link } from '@/i18n/navigation'` (NE PAS utiliser `next/link`)

**Chargement des messages** :
- Messages chargés dynamiquement dans `i18n.ts` via `getRequestConfig`
- Format : `(await import(\`./messages/${locale}.json\`)).default`
- Validation : Locale invalide → fallback sur `defaultLocale`

### Configuration PostCSS

**Fichier** : `postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},    // Compile Tailwind CSS
    autoprefixer: {},   // Ajoute préfixes navigateurs automatiquement (-webkit-, -moz-, etc.)
  },
};
```

**Note** : PostCSS est automatiquement utilisé par Next.js. Aucune configuration supplémentaire nécessaire.

### Configuration Cloudflare Pages

**Fichier** : `public/_headers`

Headers appliqués automatiquement sur Cloudflare Pages :
- Cache statique : `/_next/static/*`, `/images/*`, `/videos/*` (1 an, immutable)
- Headers sécurité : `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`

**Fichier** : `_routes.json`

```json
{
  "version": 1,
  "include": ["/*"],
  "exclude": ["/static/*", "/_next/static/*", "/_next/image*", "/api/*", 
              "/favicon.ico", "/sitemap.xml", "/robots.txt"]
}
```

Configuration des routes Cloudflare Pages (rewrites, redirects, exclusions).

**Fichier** : `wrangler.toml`

```toml
name = "gigabonus"
compatibility_date = "2024-01-01"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = ".vercel/output/static"
```

### Aliases de chemins (TypeScript)

**Configuration dans `tsconfig.json`** :
```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

**Aliases utilisés partout** :
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/data` → `src/data`
- `@/config` → `src/config`
- `@/i18n` → `src/i18n`

**Exemple d'utilisation** :
```typescript
import { Casino } from "@/data/casinos";
import { useUserCountry } from "@/hooks/useUserCountry";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
```

**Important** : Toujours utiliser les alias `@/*` plutôt que les chemins relatifs `../` pour la maintenabilité.

### Configuration Cloudflare Pages

**Fichier** : `public/_headers`

Headers appliqués automatiquement sur Cloudflare Pages :
- Cache statique : `/_next/static/*`, `/images/*`, `/videos/*` (1 an, immutable)
- Headers sécurité : `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`

**Fichier** : `_routes.json` (si présent)

Configuration des routes Cloudflare Pages (rewrites, redirects, etc.)

**Fichier** : `wrangler.toml`

```toml
name = "gigabonus"
compatibility_date = "2024-01-01"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = ".vercel/output/static"
```

### Configuration Tailwind

**Fichier** : `tailwind.config.ts`

- **Dark mode** : `["class"]` (contrôlé via class `.dark` sur `<html>`)
- **Content paths** : `./src/**`, `./app/**` (détection des classes)
- **Theme extend** :
  - 20+ keyframes personnalisées (casino, animations)
  - Colors via CSS variables HSL
  - Border radius via CSS variable
  - Container responsive (2xl: 1400px)

---

## 📊 Statistiques du projet

### Contenu

- **Casinos** : 45+ casinos avec classement et scoring
- **Pages guides** : 9 pages complètes et traduites
- **Pages dépôt** : 10 méthodes de dépôt documentées
- **Pages blog/avis** : 26 avis de casinos
- **Pages casinos** : 45+ pages individuelles
- **Langues** : 11 langues complètes
- **Total URLs** : **1012 URLs** générées dans le sitemap

### Traductions

- **Pages guides** : 100% traduites (9/9)
- **Pages dépôt** : 100% traduites (10/10)
- **Composants UI** : 100% traduits
- **Métadonnées SEO** : 100% traduites
- **Pages blog/avis** : ⏸️ Déférées (selon `availableCountries`)
- **Pages casinos** : ⏸️ Déférées (selon `availableCountries`)

### Performance

- **Desktop** : ~70/100 (objectif : 85+)
- **Mobile** : ~72/100 (objectif : 80+)
- **Optimisations** : Images, code splitting, cache headers

### SEO

- **Sitemap** : 1012 URLs, format XML pur, conforme Google
- **Hreflang** : 100% des pages avec alternates
- **Redirects 301** : 166 redirects configurés
- **Structured Data** : JSON-LD sur toutes les pages
- **Métadonnées** : Complètes et traduites

---

## ✅ Points à traiter

### 🚨 Priorité Haute

1. **Optimiser performance**
   - [ ] Objectif : 85+ desktop, 80+ mobile (actuellement ~70/72)
   - [ ] Analyser et optimiser les bundles JavaScript
   - [ ] Optimiser les images restantes (conversion WebP/AVIF)
   - [ ] Réduire le Time to Interactive (TTI)
   - [ ] Améliorer le Largest Contentful Paint (LCP)
   - [ ] Vérifier et optimiser les Core Web Vitals

2. **Traduire pages blog/avis**
   - [ ] Créer les traductions selon `availableCountries` de chaque casino
   - [ ] 26 articles à traduire dans les langues appropriées
   - [ ] Déféré jusqu'à finalisation des listes `availableCountries`

3. **Traduire pages casinos individuelles**
   - [ ] Créer les traductions selon `availableCountries`
   - [ ] 45+ pages à traduire
   - [ ] Déféré jusqu'à finalisation des listes `availableCountries`

### 📋 Priorité Moyenne

4. **Monitoring et validation**
   - [ ] Monitorer les erreurs d'indexation dans Google Search Console
   - [ ] Vérifier les erreurs hreflang dans GSC
   - [ ] Ajouter les pages principales au fetch de Google
   - [ ] Valider les Structured Data avec Google Rich Results Test
   - [ ] Vérifier les Core Web Vitals dans GSC

5. **Améliorations SEO**
   - [ ] Ajouter les breadcrumbs dans le Structured Data
   - [ ] Optimiser les titres et descriptions pour meilleur CTR
   - [ ] Ajouter des FAQ Schema sur les pages guides
   - [ ] Créer des sitemaps index si nécessaire (>50k URLs)

6. **Fonctionnalités**
   - [ ] Finaliser la liste `availableCountries` pour tous les casinos
   - [ ] Ajouter un système de cache pour l'API géolocalisation (si nécessaire)
   - [ ] Implémenter un service worker pour le PWA offline
   - [ ] Ajouter des tests E2E pour les fonctionnalités critiques

### 🔧 Priorité Basse

7. **Documentation**
   - [ ] Ajouter JSDoc sur les fonctions complexes
   - [ ] Créer un guide de contribution
   - [ ] Documenter les scripts utilitaires

8. **Tests**
   - [ ] Ajouter des tests unitaires pour les hooks
   - [ ] Tests d'intégration pour le filtrage géographique
   - [ ] Tests E2E pour les flux utilisateur principaux

9. **Optimisations**
   - [ ] Migrer vers Next.js Image Optimization si possible
   - [ ] Optimiser les requêtes API géolocalisation
   - [ ] Ajouter un système de préchargement pour les pages importantes

---

## 🔗 Liens utiles

### Production

- **Site** : https://gigabonus.win
- **Sitemap** : https://gigabonus.win/sitemap.xml
- **Robots.txt** : https://gigabonus.win/robots.txt
- **Manifest PWA** : https://gigabonus.win/manifest.webmanifest

### Analytics & Monitoring

- **Google Analytics** : ID `G-TVGXTR18DQ` (ultra deferred, chargé 2s après load)
- **Google Search Console** : [À configurer]
- **Vercel Dashboard** : [Lien du projet]

### Documentation externe

- **Next.js 15 Docs** : https://nextjs.org/docs
- **next-intl Docs** : https://next-intl-docs.vercel.app
- **shadcn/ui** : https://ui.shadcn.com
- **Tailwind CSS** : https://tailwindcss.com
- **ipapi.co API** : https://ipapi.co (1000 req/jour gratuites)

---

## 📝 Notes importantes

### Logique métier

1. **Filtrage strict** : Si `userCountry = null`, aucun casino n'est affiché (sécurité)
2. **Scoring automatique** : Les casinos sont classés automatiquement selon un algorithme de scoring (voir formules détaillées)
3. **CPA vs RS** : Les casinos CPA obtiennent un bonus massif (+100 points) pour garantir un classement supérieur
4. **Wager null** : Valeur spéciale pour les bonus sans conditions de mise (affiche "Sans wager")
5. **Traductions déférées** : Les pages blog/avis et casinos sont traduites selon `availableCountries` (déféré)

### Technique

6. **Redirects 301** : 166 redirects configurés pour corriger les URLs avec locale dupliquée
7. **Sitemap XML pur** : Route API générant du XML valide sans injection de scripts
8. **PWA** : Manifest configuré, page d'installation disponible
9. **Root Layout** : Minimal (retourne juste `{children}`), le layout `[locale]` gère tout le HTML
10. **Google Analytics** : Ultra deferred (chargé 2s après `load`, ID: `G-TVGXTR18DQ`)
11. **Structured Data** : Schema.org JSON-LD sur toutes les pages (WebSite, Organization, etc.)
12. **Images** : Format WebP/AVIF, lazy loading par défaut, priorités pour above-the-fold
13. **Vidéos** : Lazy loading via `useLazyVideo` hook (IntersectionObserver avec rootMargin 200px)

### Configuration

14. **Locale prefix** : Toujours présent dans l'URL (`/fr/`, `/en/`, etc.)
15. **Default locale** : `en` (pas `fr` comme fallback initial)
16. **Theme** : Dark par défaut (`defaultTheme="dark"`, `enableSystem=false`)
17. **Cache géolocalisation** : 2 secondes en sessionStorage pour détecter changements VPN
18. **API ipapi.co** : Limite 1000 requêtes/jour (gratuite)

### Conventions de code

19. **Composants** : `'use client'` pour tous les composants interactifs
20. **Imports** : Utilisation des alias `@/components`, `@/lib`, `@/hooks`, `@/config`
21. **Traductions** : Namespace par composant/page (ex: `useTranslations('HomePage')`)
22. **Formats** : Bonus formaté automatiquement depuis français vers langue cible
23. **Providers normalisés** : Liste dans `src/data/providers.ts` (226+ providers, format lowercase)
24. **Méthodes de paiement** : Normalisées en codes courts (CB, crypto, neosurf, paysafe, etc.)
25. **Codes promo** : Système de promotions avec popup (5 casinos actifs dans `promos.ts`)
26. **Defer component** : Utilise `requestIdleCallback` pour chargement différé (optimisation performance)
27. **CounterAnimation** : Animation easing easeOut (1 - (1-progress)³) pour compteurs
28. **Glass morphism** : Effets glass avec backdrop-filter et opacity variables (light/dark)
29. **API The Odds** : Clé hardcodée par défaut, configurable via `NEXT_PUBLIC_THE_ODDS_API_KEY`
30. **Calculateur Roulette** : 10 types de paris avec probabilités et payouts prédéfinis

### Animatations CSS

31. **Keyframes personnalisées** : 20+ animations dans `tailwind.config.ts` :
    - `fade-in-up`, `glow`, `float`, `casino-float`, `card-fall`
    - `sparkle`, `shine-sweep`, `jackpot-pulse`, `slot-spin`
    - `dice-roll`, `card-deal`, `bounce-mini`, `gradient-shift`
    - `flip-3d`, `ripple`, `float-pulse`, `orb-float`

---

## 📄 Licence

Propriétaire - Tous droits réservés

---

## 🛠️ Dépannage (Troubleshooting)

### Problèmes courants

#### 1. Erreur "Module not found" après ajout de traduction

**Problème** : Next.js ne trouve pas les fichiers de traduction après modification.

**Solution** :
```bash
# Redémarrer le serveur de développement
npm run dev

# Ou nettoyer le cache Next.js
rm -rf .next
npm run dev
```

#### 2. Géolocalisation ne fonctionne pas en local

**Problème** : L'API ipapi.co retourne `null` en développement.

**Solution** : Utiliser l'en-tête `X-Test-IP` pour tester (ex: avec extension ModHeader) :
- Ajouter header : `X-Test-IP: 8.8.8.8` (US)
- Ou utiliser une IP réelle pour tester : `X-Test-IP: 2.2.2.2` (FR)

#### 3. Images non optimisées sur Cloudflare Pages

**Problème** : Erreurs d'images après déploiement sur Cloudflare.

**Solution** : Utiliser le build spécifique Cloudflare :
```bash
npm run cf-build  # Active automatiquement CF_PAGES=1
```

#### 4. Redirects 301 ne fonctionnent pas

**Problème** : Les redirects configurés dans `next.config.js` ne se déclenchent pas.

**Solution** :
- Vérifier que le middleware n'intercepte pas la requête avant
- Les redirects sont traités AVANT le middleware
- Vérifier l'ordre dans `next.config.js` et `middleware.ts`

#### 5. Traductions manquantes

**Problème** : Texte non traduit affiché (clé de traduction).

**Solution** :
```bash
# Vérifier les traductions manquantes
node scripts/find-untranslated-text.js

# Valider les fichiers JSON
node scripts/validate-json.js
```

#### 6. Build échoue avec erreur TypeScript

**Problème** : Erreurs de types TypeScript pendant le build.

**Solution** :
- Le projet utilise `strict: false` dans `tsconfig.json`
- Vérifier que tous les imports sont corrects
- Vérifier les types dans `src/data/casinos.ts` (interface `Casino`)

#### 7. Performance faible

**Problème** : Score PageSpeed Insights en dessous de 70.

**Solutions** :
- Vérifier les images (doivent être WebP/AVIF)
- Analyser les bundles avec `npm run build` puis inspecter `.next/analyze`
- Vérifier le lazy loading des composants (Footer, RelatedLinks déjà lazy)
- Optimiser les vidéos (format MP4, compression)

---

## 📚 Ressources et références

### Documentation interne

- **`public/llms.txt`** : Documentation complète pour LLMs (structure, conventions, etc.)
- **`docs/TEST_SITEMAP.md`** : Documentation sur les tests du sitemap

### Architecture

- **App Router** : Toutes les pages sont dans `app/[locale]/`
- **Server Components par défaut** : Utiliser `'use client'` uniquement si nécessaire
- **Routing** : next-intl gère tout le routing multilingue automatiquement

### Composants réutilisables

#### Composants principaux
- **`CasinoCard`** : Carte casino avec formatage bonus automatique, tooltips, badges
- **`CasinoDialog`** : Dialog détaillé (lazy loaded) avec toutes les infos casino
- **`CasinoTable`** : Tableau comparatif des casinos
- **`FilterBar`** : Barre de filtres avancée avec toast notification, compteur
- **`Navbar`** : Navigation responsive avec menu mobile, language switcher, theme toggle
- **`Footer`** : Footer avec liens, informations légales, traduit

#### Composants SEO
- **`SEOHead`** : Composant client pour métadonnées (Head Next.js)
- **`SchemaOrg`** : Wrapper JSON-LD structured data (injecte dans `<head>`)
- **`SEOEnrichedBlog`** : Wrapper SEO pour pages blog
- **`SEOEnrichedGuide`** : Wrapper SEO pour pages guides
- **`SEOEnrichedContent`** : Wrapper SEO générique
- **`SEOEnrichedPayment`** : Wrapper SEO pour pages paiement
- **`Breadcrumbs`** : Fil d'Ariane traduit avec Schema.org

#### Composants UI avancés
- **`Defer`** : Charge contenu après idle/load (requestIdleCallback)
  - Props : `when="idle"|"load"`, `delay?`
  - Optimise performance (chargement différé)
- **`CounterAnimation`** : Animation compteur numérique avec easing
  - Props : `end`, `duration?`, `suffix?`, `prefix?`
  - Easing : `easeOut` (1 - (1-progress)³)
- **`PromoPopup`** : Popup promotions avec codes promo, GIF animés
- **`EmptyState`** : État vide avec suggestions de filtres
- **`PageLoader`** : Loader initial de page (supprimé après chargement)
- **`ScrollToTop`** : Bouton retour en haut avec animation

#### Composants décoratifs
- **`DecorativeShapes`** : Formes géométriques animées
- **`Diamonds`** : Diamants flottants animés
- **`GoldParticles`** : Particules dorées
- **`PlayingCards`** : Cartes à jouer animées

### Hooks personnalisés

#### `useUserCountry` (principal)
- **Usage** : Détection pays via API `/api/geo`
- **Cache** : sessionStorage 2 secondes
- **Détection** : Automatique au chargement, update en arrière-plan
- **Retourne** : `{ countryCode: string | null, loading: boolean }`

#### `useLazyVideo`
- **Usage** : Lazy load vidéos avec IntersectionObserver
- **Config** : rootMargin 200px (charge avant d'être visible)
- **Retourne** : `{ videoRef, isVisible }`

#### `useGeolocation` (legacy, non utilisé)
- **Usage** : Géolocalisation navigateur (ancien système Weglot)
- **Note** : Conservé pour référence, mais `useUserCountry` est utilisé à la place

#### `use-mobile`
- **Usage** : Détecte si viewport est mobile
- **Retourne** : `boolean`

### Fichiers de configuration

- **`components.json`** : Configuration shadcn/ui (aliases, style, baseColor)
- **`wrangler.toml`** : Configuration Cloudflare Pages (compatibility, output dir)
- **`i18n.ts`** : Plugin next-intl (charge messages dynamiquement)
- **`_routes.json`** : Routes Cloudflare Pages (si présent)
- **`public/_headers`** : Headers Cloudflare Pages (cache, sécurité)
- **`.env.local`** : Variables d'environnement locales (non commitées, créer si besoin)
- **`.gitignore`** : Fichiers ignorés (node_modules, .next, .env.local, etc.)

### Aliases de chemins (TypeScript)

**Configuration dans `tsconfig.json`** :
```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

**Aliases utilisés** :
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/data` → `src/data`
- `@/config` → `src/config`
- `@/i18n` → `src/i18n`

**Utilisation** :
```typescript
import { Casino } from "@/data/casinos";
import { useUserCountry } from "@/hooks/useUserCountry";
import { cn } from "@/lib/utils";
```

---

---

## ⚠️ Note importante sur cette documentation

Cette documentation a été créée en analysant **statiquement** tous les fichiers du projet (code source, configurations, scripts, traductions). Elle documente :

✅ **Vérifié et documenté** :
- Toutes les dépendances et leurs versions
- Tous les fichiers de configuration (Next.js, TypeScript, Tailwind, PostCSS, etc.)
- Tous les patterns d'intégration (imports, lazy loading, providers, etc.)
- Toutes les structures de données et interfaces
- Tous les hooks et utilitaires
- Tous les scripts disponibles
- Tous les composants et leurs fonctions
- Toutes les routes et leur structure
- Toutes les optimisations SEO et performance

⚠️ **Non testé en local** :
- Les commandes `npm install` et `npm run dev` n'ont pas été exécutées
- Le build de production n'a pas été testé
- Les tests de fonctionnement en local n'ont pas été effectués

**Recommandation** : Avant de commencer le développement, tester en local :
```bash
npm install
npm run dev
# Vérifier que http://localhost:3000 fonctionne correctement
npm run build
# Vérifier que le build passe sans erreurs
```

Si des problèmes surviennent, consulter la section [Dépannage](#-dépannage-troubleshooting).

---

**Dernière mise à jour** : 2025-01-27
**Analyse effectuée** : Analyse statique complète de tous les fichiers du projet
