const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, '..', 'messages');
const missingReport = JSON.parse(fs.readFileSync(path.join(messagesDir, '_missing-translations-report.json'), 'utf8'));
const frMessages = JSON.parse(fs.readFileSync(path.join(messagesDir, 'fr.json'), 'utf8'));

// Mapping des traductions simples pour les titres SEO (patterns communs)
const seoPatterns = {
  'en': {
    'Avis': 'Review',
    'Casino': 'Casino',
    'Bonus': 'Bonus',
    'Jackpots': 'Jackpots',
    'VIP': 'VIP',
    'Retraits': 'Withdrawals',
    'Crypto': 'Crypto',
    'Slots': 'Slots',
    'complet': 'complete',
    'détaillé': 'detailed',
    'généreux': 'generous',
    'rapides': 'fast',
    'premium': 'premium',
    'programme': 'program',
    'jusqu\'à': 'up to',
    'avec': 'with',
    'et': 'and'
  },
  'de': {
    'Avis': 'Bewertung',
    'Casino': 'Casino',
    'Bonus': 'Bonus',
    'Jackpots': 'Jackpots',
    'VIP': 'VIP',
    'Retraits': 'Auszahlungen',
    'Crypto': 'Krypto',
    'Slots': 'Slots',
    'complet': 'vollständig',
    'détaillé': 'detailliert',
    'généreux': 'großzügig',
    'rapides': 'schnell',
    'premium': 'Premium',
    'programme': 'Programm',
    'jusqu\'à': 'bis zu',
    'avec': 'mit',
    'et': 'und'
  },
  'es': {
    'Avis': 'Reseña',
    'Casino': 'Casino',
    'Bonus': 'Bono',
    'Jackpots': 'Jackpots',
    'VIP': 'VIP',
    'Retraits': 'Retiros',
    'Crypto': 'Cripto',
    'Slots': 'Slots',
    'complet': 'completo',
    'détaillé': 'detallado',
    'généreux': 'generoso',
    'rapides': 'rápidos',
    'premium': 'premium',
    'programme': 'programa',
    'jusqu\'à': 'hasta',
    'avec': 'con',
    'et': 'y'
  },
  'ru': {
    'Avis': 'Обзор',
    'Casino': 'Казино',
    'Bonus': 'Бонус',
    'Jackpots': 'Джекпоты',
    'VIP': 'VIP',
    'Retraits': 'Выводы',
    'Crypto': 'Крипто',
    'Slots': 'Слоты',
    'complet': 'полный',
    'détaillé': 'подробный',
    'généreux': 'щедрый',
    'rapides': 'быстрые',
    'premium': 'премиум',
    'programme': 'программа',
    'jusqu\'à': 'до',
    'avec': 'с',
    'et': 'и'
  },
  'it': {
    'Avis': 'Recensione',
    'Casino': 'Casino',
    'Bonus': 'Bonus',
    'Jackpots': 'Jackpot',
    'VIP': 'VIP',
    'Retraits': 'Prelievi',
    'Crypto': 'Cripto',
    'Slots': 'Slot',
    'complet': 'completo',
    'détaillé': 'dettagliato',
    'généreux': 'generoso',
    'rapides': 'rapidi',
    'premium': 'premium',
    'programme': 'programma',
    'jusqu\'à': 'fino a',
    'avec': 'con',
    'et': 'e'
  },
  'br': {
    'Avis': 'Avaliação',
    'Casino': 'Casino',
    'Bonus': 'Bônus',
    'Jackpots': 'Jackpots',
    'VIP': 'VIP',
    'Retraits': 'Saques',
    'Crypto': 'Cripto',
    'Slots': 'Slots',
    'complet': 'completo',
    'détaillé': 'detalhado',
    'généreux': 'generoso',
    'rapides': 'rápidos',
    'premium': 'premium',
    'programme': 'programa',
    'jusqu\'à': 'até',
    'avec': 'com',
    'et': 'e'
  },
  'pt': {
    'Avis': 'Avaliação',
    'Casino': 'Casino',
    'Bonus': 'Bónus',
    'Jackpots': 'Jackpots',
    'VIP': 'VIP',
    'Retraits': 'Levantamentos',
    'Crypto': 'Cripto',
    'Slots': 'Slots',
    'complet': 'completo',
    'détaillé': 'detalhado',
    'généreux': 'generoso',
    'rapides': 'rápidos',
    'premium': 'premium',
    'programme': 'programa',
    'jusqu\'à': 'até',
    'avec': 'com',
    'et': 'e'
  },
  'nl': {
    'Avis': 'Recensie',
    'Casino': 'Casino',
    'Bonus': 'Bonus',
    'Jackpots': 'Jackpots',
    'VIP': 'VIP',
    'Retraits': 'Opnames',
    'Crypto': 'Crypto',
    'Slots': 'Slots',
    'complet': 'volledig',
    'détaillé': 'gedetailleerd',
    'généreux': 'royaal',
    'rapides': 'snel',
    'premium': 'premium',
    'programme': 'programma',
    'jusqu\'à': 'tot',
    'avec': 'met',
    'et': 'en'
  },
  'lv': {
    'Avis': 'Apskats',
    'Casino': 'Kazino',
    'Bonus': 'Bonuss',
    'Jackpots': 'Džekpoti',
    'VIP': 'VIP',
    'Retraits': 'Izņemšana',
    'Crypto': 'Kripto',
    'Slots': 'Sloti',
    'complet': 'pilns',
    'détaillé': 'detalizēts',
    'généreux': 'devīgs',
    'rapides': 'ātri',
    'premium': 'premium',
    'programme': 'programma',
    'jusqu\'à': 'līdz',
    'avec': 'ar',
    'et': 'un'
  },
  'fi': {
    'Avis': 'Arvostelu',
    'Casino': 'Kasino',
    'Bonus': 'Bonus',
    'Jackpots': 'Jättipottit',
    'VIP': 'VIP',
    'Retraits': 'Nostot',
    'Crypto': 'Krypto',
    'Slots': 'Kolikkopelit',
    'complet': 'täydellinen',
    'détaillé': 'yksityiskohtainen',
    'généreux': 'antelias',
    'rapides': 'nopeat',
    'premium': 'premium',
    'programme': 'ohjelma',
    'jusqu\'à': 'jopa',
    'avec': 'kanssa',
    'et': 'ja'
  }
};

// Fonction simple pour traduire les textes SEO (remplace les mots clés)
function translateSEO(text, locale) {
  if (!seoPatterns[locale]) return text;
  
  let translated = text;
  const patterns = seoPatterns[locale];
  
  Object.keys(patterns).forEach(fr => {
    const regex = new RegExp(fr, 'gi');
    translated = translated.replace(regex, patterns[fr]);
  });
  
  return translated;
}

// Fonction pour ajouter les traductions manquantes
function addMissingTranslations(locale, missingKeys) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const messages = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Ajouter CasinoPages manquantes
  if (missingKeys.casino && missingKeys.casino.length > 0) {
    if (!messages.CasinoPages) messages.CasinoPages = {};
    
    missingKeys.casino.forEach(key => {
      if (frMessages.CasinoPages[key]) {
        const frData = frMessages.CasinoPages[key];
        
        // Si c'est juste seoTitle/seoDescription, traduire simplement
        if (frData.seoTitle && frData.seoDescription) {
          messages.CasinoPages[key] = {
            seoTitle: translateSEO(frData.seoTitle, locale),
            seoDescription: translateSEO(frData.seoDescription, locale)
          };
        } else {
          // Pour les pages complètes (magicalspin, etc.), copier la structure mais avec traductions basiques
          messages.CasinoPages[key] = JSON.parse(JSON.stringify(frData));
          // TODO: Traduire le contenu complet (nécessite traduction manuelle ou API)
        }
      }
    });
  }
  
  // Ajouter BlogPages manquantes
  if (missingKeys.blog && missingKeys.blog.length > 0) {
    if (!messages.BlogPages) messages.BlogPages = {};
    
    missingKeys.blog.forEach(key => {
      if (frMessages.BlogPages[key]) {
        const frData = frMessages.BlogPages[key];
        
        // Traduire seoTitle et seoDescription
        messages.BlogPages[key] = {
          seoTitle: translateSEO(frData.seoTitle, locale),
          seoDescription: translateSEO(frData.seoDescription, locale)
        };
      }
    });
  }
  
  // Sauvegarder
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2) + '\n', 'utf8');
  console.log(`✅ ${locale.toUpperCase()}: ${missingKeys.casino?.length || 0} CasinoPages + ${missingKeys.blog?.length || 0} BlogPages ajoutées`);
}

// Générer toutes les traductions manquantes
console.log('🔄 Génération des traductions manquantes...\n');

Object.keys(missingReport).forEach(locale => {
  addMissingTranslations(locale, missingReport[locale]);
});

console.log('\n✅ Génération terminée !');
console.log('\n⚠️  NOTE: Les traductions générées sont basiques (titres SEO uniquement).');
console.log('   Pour les pages complètes (magicalspin, madcasino, machance),');
console.log('   une traduction manuelle ou via API sera nécessaire pour le contenu détaillé.');
