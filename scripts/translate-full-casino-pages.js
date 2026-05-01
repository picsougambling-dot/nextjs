const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, '..', 'messages');
const frMessages = JSON.parse(fs.readFileSync(path.join(messagesDir, 'fr.json'), 'utf8'));

// Pages complètes à traduire (avec hero, features, etc.)
const fullPages = ['goldendragon', 'mysticfortune', 'magicalspin', 'madcasino', 'machance'];

// Traductions complètes pour les pages détaillées
const fullTranslations = {
  'en': {
    'Sans Wager': 'No Wager',
    'jusqu\'à': 'up to',
    'Retraits LIBRES': 'FREE Withdrawals',
    'Thème': 'Theme',
    'exclusif': 'exclusive',
    'méthodes paiement': 'payment methods',
    'Dépôt': 'Deposit',
    'Notre Avis Complet': 'Our Complete Review',
    'À Propos de': 'About',
    'Casino': 'Casino',
    'enflamme': 'ignites',
    'le monde des jeux en ligne': 'the online gaming world',
    'avec son concept': 'with its concept',
    'légendaire': 'legendary',
    'bonus sans wager exceptionnel': 'exceptional no-wager bonus',
    'Nouvelle plateforme en 2026': 'New platform in 2026',
    'propose un bonus de bienvenue': 'offers a welcome bonus',
    'SANS WAGER': 'NO WAGER',
    'révolution': 'revolution',
    'La particularité unique': 'The unique feature',
    'aucune condition de mise à remplir': 'no wagering requirements to meet',
    'vos gains sont immédiatement retirables': 'your winnings are immediately withdrawable',
    'Contrairement aux casinos traditionnels': 'Unlike traditional casinos',
    'qui exigent': 'that require',
    'fois le bonus': 'times the bonus',
    'vous offre une liberté totale': 'offers you total freedom',
    'Mais ce n\'est pas tout': 'But that\'s not all',
    'intègre également': 'also integrates',
    'mini-jeux exclusifs': 'exclusive mini-games',
    'animations flamboyantes': 'flamboyant animations',
    'expérience de jeu mythique': 'mythical gaming experience',
    'met en avant la transparence': 'emphasizes transparency',
    'méthodes de paiement variées': 'various payment methods',
    'incluant crypto-monnaies': 'including cryptocurrencies',
    'retraits instantanés': 'instant withdrawals',
    'support client disponible 24/7': 'customer support available 24/7',
    'se distingue par sa sélection': 'stands out with its selection',
    'plus de': 'over',
    'jeux': 'games',
    'machines à sous dernier cri': 'cutting-edge slot machines',
    'jeux de table en direct': 'live table games',
    'Que vous soyez': 'Whether you are',
    'fan de': 'fan of',
    'créatures mythiques': 'mythical creatures',
    'bonus généreux': 'generous bonuses',
    'a tout pour plaire': 'has everything to please',
    'concept unique': 'unique concept',
    'Points Forts': 'Key Features',
    'n\'a aucune condition de mise': 'has no wagering requirements',
    'Retirez vos gains immédiatement': 'Withdraw your winnings immediately',
    'Concept unique': 'Unique concept',
    'avec animations flamboyantes': 'with flamboyant animations',
    'Vos gains sont retirables instantanément': 'Your winnings are instantly withdrawable',
    'sans délai': 'without delay',
    'méthodes de paiement différentes': 'different payment methods',
    'Jeux Exclusifs': 'Exclusive Games',
    'trésors légendaires': 'legendary treasures',
    'animations spectaculaires': 'spectacular animations'
  }
  // TODO: Ajouter les autres langues (de, es, ru, it, br, pt, nl, lv, fi)
};

// Fonction pour traduire récursivement un objet
function translateObject(obj, locale, translations) {
  if (typeof obj === 'string') {
    let translated = obj;
    
    // Trier par longueur décroissante
    const sortedKeys = Object.keys(translations).sort((a, b) => b.length - a.length);
    
    sortedKeys.forEach(fr => {
      const regex = new RegExp(fr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      translated = translated.replace(regex, translations[fr]);
    });
    
    return translated;
  } else if (Array.isArray(obj)) {
    return obj.map(item => translateObject(item, locale, translations));
  } else if (obj && typeof obj === 'object') {
    const translated = {};
    Object.keys(obj).forEach(key => {
      translated[key] = translateObject(obj[key], locale, translations);
    });
    return translated;
  }
  return obj;
}

// Traduire les pages complètes
const locales = ['en', 'de', 'es', 'ru', 'it', 'br', 'pt', 'nl', 'lv', 'fi'];

console.log('🔄 Traduction des pages CasinoPages complètes...\n');

locales.forEach(locale => {
  const filePath = path.join(messagesDir, `${locale}.json`);
  if (!fs.existsSync(filePath)) return;
  
  const messages = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (!messages.CasinoPages) messages.CasinoPages = {};
  
  let updated = false;
  
  fullPages.forEach(pageKey => {
    if (frMessages.CasinoPages[pageKey] && messages.CasinoPages[pageKey]) {
      const frPage = frMessages.CasinoPages[pageKey];
      const currentPage = messages.CasinoPages[pageKey];
      
      // Vérifier si la page est encore en français (contient des mots français typiques)
      const isStillFrench = JSON.stringify(currentPage).includes('Sans Wager') || 
                           JSON.stringify(currentPage).includes('Retraits LIBRES') ||
                           JSON.stringify(currentPage).includes('Notre Avis Complet');
      
      if (isStillFrench && fullTranslations[locale]) {
        // Traduire récursivement
        messages.CasinoPages[pageKey] = translateObject(frPage, locale, fullTranslations[locale]);
        updated = true;
        console.log(`  ✅ ${locale.toUpperCase()}: ${pageKey} traduit`);
      }
    }
  });
  
  if (updated) {
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2) + '\n', 'utf8');
  }
});

console.log('\n⚠️  NOTE: Les traductions sont basiques. Pour une qualité optimale,');
console.log('   utilisez une API de traduction (DeepL, Google Translate) ou');
console.log('   faites traduire manuellement par un traducteur professionnel.');
