// Script pour créer toutes les traductions pour toutes les pages de dépôt
// Note: Ce script sert de référence. Les traductions doivent être créées manuellement dans les fichiers JSON.

const fs = require('fs');
const path = require('path');

const locales = ['fr', 'en', 'de', 'es', 'ru', 'it', 'pt', 'br', 'nl', 'lv', 'fi'];
const depotPages = ['carte', 'crypto', 'skrill', 'neteller', 'neosurf', 'cashlib', 'paysafecard', 'virement', 'jetonbank', 'mifinity'];

console.log('=== État des Traductions pour les Pages de Dépôt ===\n');

console.log(`Pages à traduire: ${depotPages.length}`);
console.log(`Langues supportées: ${locales.length}`);
console.log(`Total traductions nécessaires: ${depotPages.length} pages × ${locales.length} langues = ${depotPages.length * locales.length}\n`);

console.log('Pages:');
depotPages.forEach((page, index) => {
  console.log(`${index + 1}. ${page}`);
});

console.log('\nLangues:');
locales.forEach((locale, index) => {
  console.log(`${index + 1}. ${locale.toUpperCase()}`);
});

console.log('\n=== Structure Recommandée ===');
console.log('Chaque page doit avoir:');
console.log('- title, seoTitle, seoDescription, seoKeywords');
console.log('- ogTitle, ogDescription, twitterTitle, twitterDescription');
console.log('- h1, intro (p1, p2)');
console.log('- advantages (selon la page)');
console.log('- results (found, foundPlural)');
console.log('- tabs (cards, table)');
console.log('- loadMore, noResults');
console.log('- sections (selon la page: howTo, security, faq, etc.)');
console.log('- schema (headline, description, ratingValue)');
console.log('- seoEnriched (paymentName, description, advantages)');

console.log('\n=== Progression ===');
console.log('✅ Carte: 11/11 langues complètes');
console.log('⏳ Crypto: 2/11 langues (FR, EN)');
console.log('⏳ Autres: 0/88 traductions');

