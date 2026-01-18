# Guide de Test du Sitemap

Ce guide explique comment tester votre sitemap avant de le soumettre à Google Search Console.

## 🚀 Méthodes de Test

### 1. Test Automatique avec le Script (Recommandé)

Utilisez le script de test automatique :

```bash
npm run test:sitemap
```

Ou directement :

```bash
node scripts/test-sitemap.js
```

Le script vérifie :
- ✅ Format XML valide
- ✅ Namespace correct
- ✅ Taille du fichier (< 50MB)
- ✅ Nombre d'URLs (< 50,000)
- ✅ URLs absolues (commencent par http:// ou https://)
- ✅ Format des dates (lastmod)
- ✅ Valeurs changefreq valides
- ✅ Priorités entre 0 et 1
- ✅ URLs en double

### 2. Test Manuel dans le Navigateur

1. Ouvrez votre navigateur
2. Accédez à : `https://gigabonus.win/sitemap.xml`
3. Vérifiez que :
   - Le XML s'affiche correctement
   - Le format est bien structuré
   - Les URLs sont complètes et valides

### 3. Test avec des Outils en Ligne

#### XML Sitemap Validator
- **URL** : https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Collez l'URL de votre sitemap : `https://gigabonus.win/sitemap.xml`
- Cliquez sur "Validate"

#### Google Search Console (Test Final)
- Allez dans Google Search Console
- Section "Sitemaps"
- Ajoutez : `https://gigabonus.win/sitemap.xml`
- Vérifiez les erreurs éventuelles

### 4. Test en Ligne de Commande (cURL)

```bash
# Télécharger et afficher le sitemap
curl -s https://gigabonus.win/sitemap.xml | head -50

# Vérifier le Content-Type
curl -I https://gigabonus.win/sitemap.xml

# Compter le nombre d'URLs
curl -s https://gigabonus.win/sitemap.xml | grep -o "<loc>" | wc -l
```

### 5. Test Local (Développement)

Si vous testez en local :

```bash
# Démarrer le serveur de développement
npm run dev

# Tester le sitemap local
curl http://localhost:3000/sitemap.xml
```

## ✅ Checklist de Validation

Avant de soumettre à Google Search Console, vérifiez :

- [ ] Le sitemap est accessible publiquement
- [ ] Le format XML est valide
- [ ] Toutes les URLs sont absolues (commencent par https://)
- [ ] Le nombre d'URLs est < 50,000
- [ ] La taille du fichier est < 50MB
- [ ] Les dates lastmod sont au format ISO 8601
- [ ] Les changefreq sont valides (always, hourly, daily, weekly, monthly, yearly, never)
- [ ] Les priority sont entre 0 et 1
- [ ] Aucune URL en double
- [ ] Le namespace xmlns est correct : `http://www.sitemaps.org/schemas/sitemap/0.9`

## 🔍 Vérifications Spécifiques

### Format XML Attendu

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://gigabonus.win/en</loc>
    <lastmod>2026-12-11T00:17:30.843Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>1</priority>
  </url>
</urlset>
```

### Erreurs Courantes à Éviter

1. **URLs relatives** : Utiliser `https://gigabonus.win/en` au lieu de `/en`
2. **Priorités invalides** : Doivent être entre 0.0 et 1.0
3. **Dates mal formatées** : Utiliser le format ISO 8601
4. **Caractères spéciaux** : Échapper les caractères XML (&, <, >, etc.)
5. **Taille excessive** : Diviser en plusieurs sitemaps si > 50MB

## 📊 Statistiques Attendues

Pour votre site :
- **Total URLs** : ~1000+ (11 langues × ~100 pages)
- **Taille** : < 1MB (normalement)
- **Format** : XML standard conforme aux spécifications Google

## 🐛 Résolution de Problèmes

### Le sitemap n'est pas accessible

1. Vérifiez que le site est déployé sur Vercel
2. Vérifiez que l'URL est correcte : `https://gigabonus.win/sitemap.xml`
3. Vérifiez les logs Vercel pour les erreurs

### Erreurs de format dans Google Search Console

1. Exécutez `npm run test:sitemap` pour identifier les erreurs
2. Vérifiez que toutes les URLs sont absolues
3. Vérifiez le format des dates et priorités

### Le sitemap est trop grand

1. Divisez en plusieurs sitemaps (sitemap index)
2. Créez un fichier `sitemap-index.xml` qui référence les autres sitemaps

## 📝 Prochaines Étapes

Une fois le sitemap validé :

1. ✅ Soumettez-le dans Google Search Console
2. ✅ Surveillez les erreurs pendant 24-48h
3. ✅ Vérifiez l'indexation dans "Couverture"
4. ✅ Surveillez les performances dans "Performance"

## 🔗 Ressources

- [Documentation Google Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Next.js Sitemap Documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

