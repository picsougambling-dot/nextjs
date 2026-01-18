const fs = require('fs');
const path = require('path');

// Configuration
const baseUrl = 'https://gigabonus.win';
const locales = ['fr', 'en', 'de', 'es', 'ru', 'it', 'br', 'pt', 'nl', 'lv', 'fi'];

// Routes principales
const mainRoutes = [
  '',
  '/blog',
  '/about',
];

// Pages guides
const guideRoutes = [
  '/top-casinos-crypto',
  '/casinos-sans-kyc',
  '/bonus-cashback',
  '/bonus-sans-wager',
  '/top-slots-2026',
  '/astuces-casino',
  '/meilleurs-bookmakers',
  '/depot',
  '/calculateur-roulette',
  '/calculateur-cotes-sportives',
  '/install',
];

// Pages casinos
const casinoRoutes = [
  '/spinstar',
  '/kingschance',
  '/hunnyplay',
  '/luckytrunk',
  '/megawin',
  '/europefortune',
  '/cleobetra',
  '/spindinasty',
  '/i24slots',
  '/magicalspin',
  '/playregal',
  '/vegasplus',
  '/winmachance',
  '/uniquecasino',
  '/cazinostars',
  '/atlantisslots',
  '/casinointense',
  '/luckytreasure',
  '/bonrush',
  '/betify',
  '/rockstar',
  '/slotrush',
  '/spinaura',
  '/hotloot',
  '/roibets',
  '/aphrodite',
  '/madcasino',
  '/kingdom',
  '/machance',
];

// Pages méthodes de dépôt
const depositRoutes = [
  '/depot/carte',
  '/depot/crypto',
  '/depot/neosurf',
  '/depot/cashlib',
  '/depot/paysafecard',
  '/depot/virement',
  '/depot/skrill',
  '/depot/neteller',
  '/depot/jetonbank',
  '/depot/mifinity',
];

// Pages blog avis
const blogRoutes = [
  '/blog/avis-spinstar-2026',
  '/blog/avis-hunnyplay-2026',
  '/blog/avis-luckytrunk-2026',
  '/blog/avis-spinaura-2026',
  '/blog/avis-slotrush-2026',
  '/blog/avis-hotloot-2026',
  '/blog/avis-roibets-2026',
  '/blog/avis-megawin-2026',
  '/blog/avis-rxcasino-2026',
  '/blog/avis-cleobetra-2026',
  '/blog/avis-rockstar-2026',
  '/blog/avis-kingschance-2026',
  '/blog/avis-i24slots-2026',
  '/blog/avis-europefortune-2026',
  '/blog/avis-spindinasty-2026',
  '/blog/avis-magicalspin-2026',
  '/blog/avis-playregal-2026',
  '/blog/avis-vegasplus-2026',
  '/blog/avis-machance-2026',
  '/blog/avis-uniquecasino-2026',
  '/blog/avis-cazinostars-2026',
  '/blog/avis-atlantisslots-2026',
  '/blog/avis-casinointense-2026',
  '/blog/avis-luckytreasure-2026',
  '/blog/avis-bonrush-2026',
  '/blog/avis-betify-2026',
];

// Fonction pour vérifier si un fichier existe
function checkFileExists(routePath, locale) {
  const localePath = path.join(__dirname, '..', 'app', '[locale]', routePath.replace(/^\//, ''));
  
  // Vérifier si c'est un dossier avec page.tsx
  const pagePath = path.join(localePath, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    return true;
  }
  
  // Vérifier si c'est un fichier page.tsx directement
  const directPagePath = path.join(localePath + '.tsx');
  if (fs.existsSync(directPagePath)) {
    return true;
  }
  
  return false;
}

// Fonction pour extraire les liens internes d'un fichier
function extractInternalLinks(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const links = [];
  
  // Chercher les patterns href="/..." et href="/[locale]/..."
  const hrefRegex = /href=["']([^"']+)["']/g;
  let match;
  
  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1];
    // Ignorer les liens externes, ancres, et liens spéciaux
    if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/#') && !href.includes('http')) {
      links.push(href);
    }
  }
  
  return [...new Set(links)]; // Dédupliquer
}

// Générer toutes les URLs à vérifier
const allUrls = [];
const allRoutes = [...mainRoutes, ...guideRoutes, ...casinoRoutes, ...depositRoutes, ...blogRoutes];

allRoutes.forEach(route => {
  locales.forEach(locale => {
    const url = `${baseUrl}/${locale}${route}`;
    allUrls.push({ url, route, locale });
  });
});

console.log('🔍 Détection des erreurs 404 et liens cassés\n');
console.log(`Total d'URLs à vérifier: ${allUrls.length}\n`);

// Vérifier l'existence des fichiers
const missingFiles = [];
const existingFiles = [];

allUrls.forEach(({ url, route, locale }) => {
  const exists = checkFileExists(route, locale);
  if (!exists) {
    missingFiles.push({ url, route, locale });
  } else {
    existingFiles.push({ url, route, locale });
  }
});

// Afficher les résultats
if (missingFiles.length > 0) {
  console.log(`❌ Fichiers manquants (${missingFiles.length}):\n`);
  missingFiles.forEach(({ url, route, locale }) => {
    console.log(`  - ${url} (${locale}${route})`);
  });
  console.log('\n');
} else {
  console.log('✅ Tous les fichiers existent !\n');
}

// Vérifier les liens internes dans les fichiers existants
console.log('🔗 Vérification des liens internes...\n');

const brokenLinks = [];
const checkedLinks = new Set();

existingFiles.forEach(({ route, locale }) => {
  const filePath = path.join(__dirname, '..', 'app', '[locale]', route.replace(/^\//, ''), 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    const links = extractInternalLinks(filePath);
    
    links.forEach(link => {
      const linkKey = `${locale}:${link}`;
      if (checkedLinks.has(linkKey)) {
        return; // Déjà vérifié
      }
      checkedLinks.add(linkKey);
      
      // Normaliser le lien (enlever la locale si présente)
      let normalizedLink = link;
      if (normalizedLink.startsWith(`/${locale}/`)) {
        normalizedLink = normalizedLink.replace(`/${locale}/`, '/');
      } else if (normalizedLink === `/${locale}`) {
        normalizedLink = '/';
      }
      
      // Vérifier si la route existe
      const routeExists = allRoutes.some(r => {
        if (normalizedLink === '/') {
          return r === '';
        }
        return normalizedLink === r || normalizedLink.startsWith(r + '/');
      });
      
      if (!routeExists && normalizedLink.startsWith('/')) {
        brokenLinks.push({ from: `${locale}${route}`, link, normalizedLink });
      }
    });
  }
});

if (brokenLinks.length > 0) {
  console.log(`❌ Liens cassés détectés (${brokenLinks.length}):\n`);
  brokenLinks.forEach(({ from, link, normalizedLink }) => {
    console.log(`  - Dans ${from}: ${link} (normalisé: ${normalizedLink})`);
  });
  console.log('\n');
} else {
  console.log('✅ Aucun lien cassé détecté !\n');
}

// Générer un rapport
const report = {
  timestamp: new Date().toISOString(),
  totalUrls: allUrls.length,
  missingFiles: missingFiles.length,
  brokenLinks: brokenLinks.length,
  missingFilesList: missingFiles,
  brokenLinksList: brokenLinks,
};

const reportPath = path.join(__dirname, '..', '404-report.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

console.log(`📄 Rapport sauvegardé dans: ${reportPath}\n`);

// Résumé
console.log('📊 Résumé:');
console.log(`  - URLs vérifiées: ${allUrls.length}`);
console.log(`  - Fichiers manquants: ${missingFiles.length}`);
console.log(`  - Liens cassés: ${brokenLinks.length}`);

