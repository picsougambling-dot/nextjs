const fs = require('fs');
const path = require('path');

// Liste des langues supportées
const locales = ['fr', 'en', 'de', 'es', 'it', 'ru', 'pt', 'br', 'nl', 'lv', 'fi'];

// Pages principales à tester (sans les pages spécifiques de casinos)
const pagesToTest = [
  '/', // Page d'accueil
  '/depot/skrill',
  '/depot/neteller',
  '/depot/neosurf',
  '/depot/cashlib',
  '/depot/paysafecard',
  '/depot/virement',
  '/depot/jetonbank',
  '/depot/mifinity',
  '/depot/carte',
  '/depot/crypto',
  '/top-casinos-crypto',
  '/casinos-sans-kyc',
  '/bonus-cashback',
  '/bonus-sans-wager',
  '/top-slots-2026',
  '/astuces-casino',
  '/meilleurs-bookmakers',
  '/calculateur-roulette',
  '/calculateur-cotes-sportives',
  '/install',
  '/about',
  '/blog/avis-betify-2026',
  '/blog/avis-atlantisslots-2026',
  '/blog/avis-uniquecasino-2026',
  '/blog/avis-vegasplus-2026',
];

console.log('📋 Plan de test :');
console.log(`- ${locales.length} langues`);
console.log(`- ${pagesToTest.length} pages principales`);
console.log(`- Total: ${locales.length * pagesToTest.length} combinaisons à tester\n`);

// Générer un rapport
const report = {
  total: locales.length * pagesToTest.length,
  tested: 0,
  errors: [],
  untranslated: [],
  consoleErrors: []
};

// Sauvegarder le plan de test
fs.writeFileSync('test-plan.json', JSON.stringify({
  locales,
  pages: pagesToTest,
  report
}, null, 2));

console.log('✅ Plan de test sauvegardé dans test-plan.json');
console.log('\n⚠️  Note: Ce script génère le plan de test.');
console.log('Pour tester réellement les pages, utilisez le navigateur MCP pour visiter chaque URL.');
console.log('\nExemple d\'URLs à tester:');
pagesToTest.slice(0, 3).forEach(page => {
  locales.slice(0, 2).forEach(locale => {
    console.log(`  - http://localhost:3000/${locale}${page}`);
  });
});

