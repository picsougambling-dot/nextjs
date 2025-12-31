// Script pour tester toutes les pages avec le navigateur MCP
// Ce script doit être exécuté manuellement en visitant chaque URL

const locales = ['fr', 'en', 'de', 'es', 'it', 'ru', 'pt', 'br', 'nl', 'lv', 'fi'];

const pagesToTest = [
  '/',
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
  '/top-slots-2025',
  '/astuces-casino',
  '/meilleurs-bookmakers',
  '/calculateur-roulette',
  '/calculateur-cotes-sportives',
  '/install',
  '/about',
  '/blog/avis-betify-2025',
  '/blog/avis-atlantisslots-2025',
  '/blog/avis-uniquecasino-2025',
  '/blog/avis-vegasplus-2025',
];

// Générer toutes les URLs
const allUrls = [];
locales.forEach(locale => {
  pagesToTest.forEach(page => {
    const url = `http://localhost:3000/${locale}${page}`;
    allUrls.push({ locale, page, url });
  });
});

console.log(`📋 Total: ${allUrls.length} URLs à tester\n`);

// Sauvegarder dans un fichier pour référence
const fs = require('fs');
fs.writeFileSync('test-urls.json', JSON.stringify(allUrls, null, 2));

console.log('✅ Liste des URLs sauvegardée dans test-urls.json');
console.log('\n📝 Instructions:');
console.log('1. Assurez-vous que le serveur de développement tourne (npm run dev)');
console.log('2. Utilisez le navigateur MCP pour visiter chaque URL');
console.log('3. Vérifiez la console pour les erreurs');
console.log('4. Vérifiez que le contenu est traduit (pas de texte en français hardcodé)');
console.log('\n🔍 Points à vérifier:');
console.log('- Erreurs dans la console du navigateur');
console.log('- Textes non traduits (hardcodés en français)');
console.log('- Erreurs 404');
console.log('- Problèmes de rendu');
console.log('- Problèmes de filtrage par pays');

// Afficher les 10 premières URLs comme exemple
console.log('\n📌 Exemples d\'URLs à tester:');
allUrls.slice(0, 10).forEach((item, index) => {
  console.log(`${index + 1}. ${item.url}`);
});

