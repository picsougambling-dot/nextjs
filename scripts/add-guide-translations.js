const fs = require('fs');
const path = require('path');

// Structure de base pour GuidePages.topCasinosCrypto
// Ce script ajoute le namespace dans tous les fichiers de langue
// Les traductions seront ensuite ajustées manuellement si nécessaire

const locales = ['de', 'es', 'ru', 'it', 'br', 'pt', 'nl', 'lv', 'fi'];

// Traductions de base (structure simplifiée pour chaque langue)
const translations = {
  de: {
    title: "Top Krypto-Casinos 2025",
    seoTitle: "Top Krypto-Casinos 2025: Bitcoin, Ethereum & Kryptowährungen | GigaBonus",
    seoDescription: "Entdecken Sie die Top-Krypto-Casinos, die Bitcoin, Ethereum, USDT akzeptieren. Sofortige Auszahlungen, totale Anonymität, exklusive Boni und sichere Transaktionen!",
    // ... autres traductions
  },
  // ... autres langues
};

// Fonction pour ajouter le namespace à un fichier
function addGuideNamespace(filePath, locale) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const json = JSON.parse(content);
  
  // Vérifier si GuidePages existe déjà
  if (!json.GuidePages) {
    json.GuidePages = {};
  }
  
  // Ajouter topCasinosCrypto si pas déjà présent
  if (!json.GuidePages.topCasinosCrypto) {
    json.GuidePages.topCasinosCrypto = {
      title: `Top Crypto Casinos 2025 [${locale}]`,
      // Structure de base - à compléter
    };
    
    // Sauvegarder
    fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n', 'utf-8');
    console.log(`✓ Ajouté GuidePages.topCasinosCrypto dans ${locale}.json`);
  } else {
    console.log(`⚠ GuidePages.topCasinosCrypto existe déjà dans ${locale}.json`);
  }
}

// Ajouter dans tous les fichiers
locales.forEach(locale => {
  const filePath = path.join(__dirname, '..', 'messages', `${locale}.json`);
  if (fs.existsSync(filePath)) {
    addGuideNamespace(filePath, locale);
  } else {
    console.log(`✗ Fichier ${locale}.json introuvable`);
  }
});

console.log('\n✅ Terminé ! Les traductions de base ont été ajoutées.');
console.log('⚠️  Important: Les traductions doivent être complétées manuellement pour chaque langue.');

