const fs = require('fs');
const path = require('path');

const locales = ['en', 'fr', 'de', 'es', 'ru', 'it', 'br', 'pt', 'nl', 'lv', 'fi'];
const messagesDir = path.join(__dirname, '..', 'messages');

// Lire le fichier FR comme référence (le plus complet)
const frMessages = JSON.parse(fs.readFileSync(path.join(messagesDir, 'fr.json'), 'utf8'));

// Extraire toutes les clés CasinoPages et BlogPages du FR
const frCasinoPages = Object.keys(frMessages.CasinoPages || {});
const frBlogPages = Object.keys(frMessages.BlogPages || {});

console.log('📊 ANALYSE DES TRADUCTIONS MANQUANTES\n');
console.log(`✅ FR (Référence):`);
console.log(`   - CasinoPages: ${frCasinoPages.length} pages`);
console.log(`   - BlogPages: ${frBlogPages.length} pages\n`);

// Vérifier chaque langue
const missing = {};

locales.forEach(locale => {
  if (locale === 'fr') return; // Skip FR (référence)
  
  const filePath = path.join(messagesDir, `${locale}.json`);
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${locale.toUpperCase()}: Fichier introuvable`);
    return;
  }
  
  const messages = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const casinoPages = Object.keys(messages.CasinoPages || {});
  const blogPages = Object.keys(messages.BlogPages || {});
  
  const missingCasino = frCasinoPages.filter(key => !casinoPages.includes(key));
  const missingBlog = frBlogPages.filter(key => !blogPages.includes(key));
  
  if (missingCasino.length > 0 || missingBlog.length > 0) {
    missing[locale] = {
      casino: missingCasino,
      blog: missingBlog
    };
    
    console.log(`⚠️  ${locale.toUpperCase()}:`);
    if (missingCasino.length > 0) {
      console.log(`   - CasinoPages manquantes: ${missingCasino.length}/${frCasinoPages.length}`);
      console.log(`     Exemples: ${missingCasino.slice(0, 5).join(', ')}${missingCasino.length > 5 ? '...' : ''}`);
    }
    if (missingBlog.length > 0) {
      console.log(`   - BlogPages manquantes: ${missingBlog.length}/${frBlogPages.length}`);
      console.log(`     Exemples: ${missingBlog.slice(0, 5).join(', ')}${missingBlog.length > 5 ? '...' : ''}`);
    }
    console.log('');
  } else {
    console.log(`✅ ${locale.toUpperCase()}: Complet\n`);
  }
});

// Générer un rapport détaillé
console.log('\n📋 RAPPORT DÉTAILLÉ:\n');
Object.keys(missing).forEach(locale => {
  console.log(`${locale.toUpperCase()}:`);
  console.log(`  CasinoPages: ${missing[locale].casino.length} manquantes`);
  console.log(`  BlogPages: ${missing[locale].blog.length} manquantes`);
  console.log('');
});

// Sauvegarder le rapport
const reportPath = path.join(__dirname, '..', 'messages', '_missing-translations-report.json');
fs.writeFileSync(reportPath, JSON.stringify(missing, null, 2));
console.log(`\n💾 Rapport sauvegardé: ${reportPath}`);
