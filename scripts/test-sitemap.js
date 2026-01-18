#!/usr/bin/env node

/**
 * Script de test pour valider le sitemap avant soumission à Google Search Console
 * Usage: node scripts/test-sitemap.js
 */

const https = require('https');
const http = require('http');

const SITEMAP_URL = 'https://gigabonus.win/sitemap.xml';
const MAX_URLS = 50000; // Limite Google
const MAX_SIZE_MB = 50; // Limite Google (50MB non compressé, 50MB compressé)

function fetchSitemap(url, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) {
      reject(new Error('Trop de redirections (max 5)'));
      return;
    }

    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (res) => {
      // Gérer les redirections
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = res.headers.location.startsWith('http') 
          ? res.headers.location 
          : new URL(res.headers.location, url).href;
        return fetchSitemap(redirectUrl, redirectCount + 1).then(resolve).catch(reject);
      }

      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(data);
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

function validateSitemap(xml) {
  const errors = [];
  const warnings = [];
  const stats = {
    totalUrls: 0,
    sizeBytes: Buffer.byteLength(xml, 'utf8'),
    sizeMB: 0,
    urls: [],
  };

  // Calculer la taille en MB
  stats.sizeMB = (stats.sizeBytes / (1024 * 1024)).toFixed(2);

  // Vérifier la taille
  if (stats.sizeBytes > MAX_SIZE_MB * 1024 * 1024) {
    errors.push(`❌ Taille du sitemap trop grande: ${stats.sizeMB}MB (limite: ${MAX_SIZE_MB}MB)`);
  } else {
    console.log(`✅ Taille du sitemap: ${stats.sizeMB}MB (limite: ${MAX_SIZE_MB}MB)`);
  }

  // Vérifier le format XML de base
  if (!xml.includes('<?xml')) {
    errors.push('❌ Le fichier ne commence pas par <?xml>');
  } else {
    console.log('✅ Format XML valide (commence par <?xml>)');
  }

  if (!xml.includes('<urlset')) {
    errors.push('❌ Balise <urlset> manquante');
  } else {
    console.log('✅ Balise <urlset> présente');
  }

  if (!xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
    errors.push('❌ Namespace xmlns manquant ou incorrect');
  } else {
    console.log('✅ Namespace xmlns correct');
  }

  // Parser le XML avec regex (simple mais efficace)
  const urlMatches = xml.match(/<url>[\s\S]*?<\/url>/g);
  
  if (!urlMatches || urlMatches.length === 0) {
    errors.push('❌ Aucune URL trouvée dans le sitemap');
    printResults(errors, warnings, stats);
    return;
  }

  stats.totalUrls = urlMatches.length;

  // Vérifier le nombre d'URLs
  if (stats.totalUrls > MAX_URLS) {
    errors.push(`❌ Trop d'URLs: ${stats.totalUrls} (limite: ${MAX_URLS})`);
  } else {
    console.log(`✅ Nombre d'URLs: ${stats.totalUrls} (limite: ${MAX_URLS})`);
  }

  // Vérifier chaque URL
  urlMatches.forEach((urlBlock, index) => {
    // Extraire <loc>
    const locMatch = urlBlock.match(/<loc>(.*?)<\/loc>/);
    if (!locMatch || !locMatch[1]) {
      errors.push(`❌ URL #${index + 1}: Balise <loc> manquante`);
      return;
    }

    const loc = locMatch[1].trim();
    stats.urls.push(loc);

    // Vérifier que l'URL est absolue
    if (!loc.startsWith('http://') && !loc.startsWith('https://')) {
      errors.push(`❌ URL #${index + 1}: URL relative (doit être absolue): ${loc}`);
    }

    // Vérifier que l'URL ne contient pas de caractères invalides
    if (loc.includes(' ')) {
      errors.push(`❌ URL #${index + 1}: Contient des espaces: ${loc}`);
    }

    // Vérifier lastmod
    const lastmodMatch = urlBlock.match(/<lastmod>(.*?)<\/lastmod>/);
    if (lastmodMatch && lastmodMatch[1]) {
      const lastmod = lastmodMatch[1].trim();
      // Format ISO 8601: YYYY-MM-DD ou YYYY-MM-DDThh:mm:ss+00:00
      if (!/^\d{4}-\d{2}-\d{2}/.test(lastmod)) {
        warnings.push(`⚠️  URL #${index + 1}: Format lastmod suspect: ${lastmod}`);
      }
    }

    // Vérifier changefreq
    const changefreqMatch = urlBlock.match(/<changefreq>(.*?)<\/changefreq>/);
    if (changefreqMatch && changefreqMatch[1]) {
      const changefreq = changefreqMatch[1].trim();
      const validFreqs = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];
      if (!validFreqs.includes(changefreq)) {
        errors.push(`❌ URL #${index + 1}: changefreq invalide: ${changefreq}`);
      }
    }

    // Vérifier priority
    const priorityMatch = urlBlock.match(/<priority>(.*?)<\/priority>/);
    if (priorityMatch && priorityMatch[1]) {
      const priority = parseFloat(priorityMatch[1].trim());
      if (isNaN(priority) || priority < 0 || priority > 1) {
        errors.push(`❌ URL #${index + 1}: priority invalide (doit être entre 0 et 1): ${priorityMatch[1]}`);
      }
    }
  });

  // Vérifier les doublons
  const duplicates = stats.urls.filter((url, index) => stats.urls.indexOf(url) !== index);
  if (duplicates.length > 0) {
    errors.push(`❌ URLs en double trouvées: ${duplicates.length} doublon(s)`);
    const uniqueDups = [...new Set(duplicates)];
    uniqueDups.slice(0, 5).forEach(dup => {
      console.log(`   - ${dup}`);
    });
  } else {
    console.log('✅ Aucune URL en double');
  }

  printResults(errors, warnings, stats);
}

function printResults(errors, warnings, stats) {
  console.log('\n' + '='.repeat(60));
  console.log('📊 RÉSULTATS DE VALIDATION DU SITEMAP');
  console.log('='.repeat(60));
  
  console.log(`\n📈 Statistiques:`);
  console.log(`   - Total URLs: ${stats.totalUrls}`);
  console.log(`   - Taille: ${stats.sizeMB}MB (${(stats.sizeBytes / 1024).toFixed(2)}KB)`);
  
  if (warnings.length > 0) {
    console.log(`\n⚠️  Avertissements (${warnings.length}):`);
    warnings.slice(0, 10).forEach(w => console.log(`   ${w}`));
    if (warnings.length > 10) {
      console.log(`   ... et ${warnings.length - 10} autre(s) avertissement(s)`);
    }
  }
  
  if (errors.length > 0) {
    console.log(`\n❌ Erreurs (${errors.length}):`);
    errors.forEach(e => console.log(`   ${e}`));
    console.log('\n❌ Le sitemap contient des erreurs. Corrigez-les avant de soumettre à Google Search Console.');
    process.exit(1);
  } else {
    console.log('\n✅ Le sitemap est valide et prêt pour Google Search Console!');
    console.log('\n📝 Prochaines étapes:');
    console.log('   1. Vérifiez que le sitemap est accessible: https://gigabonus.win/sitemap.xml');
    console.log('   2. Soumettez-le dans Google Search Console: https://gigabonus.win/sitemap.xml');
    console.log('   3. Surveillez les erreurs dans Google Search Console pendant 24-48h');
  }
}

// Exécuter le test
console.log('🔍 Test du sitemap en cours...');
console.log(`📍 URL: ${SITEMAP_URL}\n`);

fetchSitemap(SITEMAP_URL)
  .then(xml => {
    validateSitemap(xml);
  })
  .catch(err => {
    console.error('❌ Erreur lors de la récupération du sitemap:');
    console.error(`   ${err.message}`);
    console.error('\n💡 Vérifiez que:');
    console.error('   - Le site est déployé sur Vercel');
    console.error('   - L\'URL du sitemap est correcte');
    console.error('   - Le sitemap est accessible publiquement');
    process.exit(1);
  });

