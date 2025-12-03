# Déploiement sur Cloudflare Pages

## Prérequis

1. Installer Wrangler CLI globalement :
```bash
npm install -g wrangler
```

2. Se connecter à Cloudflare :
```bash
wrangler login
```

## Configuration Cloudflare Pages

### Dans le dashboard Cloudflare Pages :

1. **Build settings** :
   - **Build command**: `npm run pages:build`
   - **Build output directory**: `.vercel/output/static`
   - **Root directory**: `/` (laisser vide)
   - **Install command**: `npm ci --legacy-peer-deps` ⚠️ **IMPORTANT** : Utilisez `npm ci` au lieu de `npm install` pour ignorer le cache et forcer la lecture de `package-lock.json`
   - **Node version**: 18 ou supérieur
   
   **Note** : Le fichier `.npmrc` avec `legacy-peer-deps=true` est déjà dans le projet, mais `npm ci` garantit l'utilisation de la bonne version depuis `package-lock.json`.

2. **Environment variables** (si nécessaire) :
   - `NEXT_PUBLIC_THE_ODDS_API_KEY` (pour le calculateur de cotes)

3. **Build configuration** :
   - **Skip submodule update**: ✅ Activé (pour éviter l'erreur de sous-modules)

## Build et déploiement

### Build pour Cloudflare Pages
```bash
npm run pages:build
```

### Déploiement manuel
```bash
npm run pages:deploy
```

### Développement local avec Cloudflare
```bash
npm run pages:dev
```

## Résolution des problèmes de déploiement

### Problème "submodules"

Si vous rencontrez l'erreur "error occurred while updating repository submodules" :

1. Dans Cloudflare Pages Dashboard → Settings → Builds & deployments
2. Activez l'option **"Skip submodule update"** ou **"Skip Git submodules"**
3. Ou ajoutez cette variable d'environnement : `SKIP_SUBMODULE_UPDATE=true`

### Problème de conflit de dépendances peer

Si vous rencontrez l'erreur `ERESOLVE could not resolve` avec `@cloudflare/next-on-pages` :

**Solution appliquée** : Le projet utilise Next.js 15.5.2 qui est compatible avec `@cloudflare/next-on-pages@1.13.16` (qui nécessite `next@">=14.3.0 && <=15.5.2"`).

**Note** : Next.js 14.3.0 n'existe pas, donc la mise à jour vers Next.js 15.x était nécessaire.

**Solution alternative** : Si vous préférez rester sur Next.js 14.2.33, vous pouvez :
1. Downgrader `@cloudflare/next-on-pages` vers `1.12.x` (compatible avec Next.js 14.2.33)
2. Ou utiliser `--legacy-peer-deps` dans Cloudflare Pages Dashboard → Settings → Builds & deployments → Install command : `npm install --legacy-peer-deps`

## Notes importantes

- Le projet utilise `@cloudflare/next-on-pages` pour adapter Next.js à Cloudflare Pages
- Les images sont automatiquement non optimisées sur Cloudflare (unoptimized: true)
- Le SSR est géré par Cloudflare Workers
- Le fichier `_headers` dans `public/` configure les headers HTTP pour le cache
