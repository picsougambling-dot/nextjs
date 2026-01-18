const fs = require('fs');
const path = require('path');

// Traductions complètes pour GuidePages.topCasinosCrypto dans toutes les langues
const translations = {
  de: require('./translations-crypto-de.json'),
  es: require('./translations-crypto-es.json'),
  ru: require('./translations-crypto-ru.json'),
  it: require('./translations-crypto-it.json'),
  br: require('./translations-crypto-br.json'),
  pt: require('./translations-crypto-pt.json'),
  nl: require('./translations-crypto-nl.json'),
  lv: require('./translations-crypto-lv.json'),
  fi: require('./translations-crypto-fi.json'),
};

// Fonction pour ajouter les traductions complètes
function addCompleteTranslations() {
  Object.keys(translations).forEach(locale => {
    const filePath = path.join(__dirname, '..', 'messages', `${locale}.json`);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const json = JSON.parse(content);
      
      if (!json.GuidePages) {
        json.GuidePages = {};
      }
      
      json.GuidePages.topCasinosCrypto = translations[locale];
      
      fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n', 'utf-8');
      console.log(`✓ Traductions complètes ajoutées pour ${locale}.json`);
    }
  });
}

// Note: Ce script nécessite les fichiers de traduction séparés
// Pour l'instant, on va créer les traductions directement dans le script

console.log('⚠️  Ce script nécessite des fichiers de traduction séparés.');
console.log('💡 Mieux vaut ajouter les traductions directement dans chaque fichier JSON.');

