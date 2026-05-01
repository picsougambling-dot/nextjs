const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, '..', 'messages');
const frMessages = JSON.parse(fs.readFileSync(path.join(messagesDir, 'fr.json'), 'utf8'));

// Traductions précises pour les textes SEO courants
const translations = {
  'en': {
    'Avis': 'Review',
    'Avis détaillé': 'Detailed review',
    'Avis complet': 'Complete review',
    'Casino': 'Casino',
    'Bonus': 'Bonus',
    'Jackpots': 'Jackpots',
    'VIP': 'VIP',
    'Retraits': 'Withdrawals',
    'Retraits rapides': 'Fast withdrawals',
    'Retraits express': 'Express withdrawals',
    'Crypto': 'Crypto',
    'Slots': 'Slots',
    'Slots premium': 'Premium slots',
    'programme VIP': 'VIP program',
    'programme': 'program',
    'généreux': 'generous',
    'généreux,': 'generous',
    'rapides': 'fast',
    'premium': 'premium',
    'jusqu\'à': 'up to',
    'avec': 'with',
    'et': 'and',
    'analysé par nos experts': 'analyzed by our experts',
    'de bienvenue': 'welcome',
    'quotidiens': 'daily',
    'progressifs': 'progressive',
    'royal': 'royal',
    'highroller': 'highroller',
    'magique': 'magical',
    'exclusifs': 'exclusive',
    'gros gains': 'big wins',
    'cashback': 'cashback',
    'rock': 'rock',
    'turbo': 'turbo',
    'en 24h': 'in 24h',
    'moderne': 'modern',
    'interface': 'interface'
  },
  'de': {
    'Avis': 'Bewertung',
    'Avis détaillé': 'Detaillierte Bewertung',
    'Avis complet': 'Vollständige Bewertung',
    'Casino': 'Casino',
    'Bonus': 'Bonus',
    'Jackpots': 'Jackpots',
    'VIP': 'VIP',
    'Retraits': 'Auszahlungen',
    'Retraits rapides': 'Schnelle Auszahlungen',
    'Retraits express': 'Express-Auszahlungen',
    'Crypto': 'Krypto',
    'Slots': 'Slots',
    'Slots premium': 'Premium-Slots',
    'programme VIP': 'VIP-Programm',
    'programme': 'Programm',
    'généreux': 'großzügig',
    'rapides': 'schnell',
    'premium': 'Premium',
    'jusqu\'à': 'bis zu',
    'avec': 'mit',
    'et': 'und',
    'analysé par nos experts': 'von unseren Experten analysiert',
    'de bienvenue': 'Willkommens-',
    'quotidiens': 'täglich',
    'progressifs': 'progressiv',
    'royal': 'königlich',
    'highroller': 'Highroller',
    'magique': 'magisch',
    'exclusifs': 'exklusiv',
    'gros gains': 'große Gewinne',
    'cashback': 'Cashback',
    'rock': 'Rock',
    'turbo': 'Turbo',
    'en 24h': 'in 24h',
    'moderne': 'modern',
    'interface': 'Oberfläche'
  },
  'es': {
    'Avis': 'Reseña',
    'Avis détaillé': 'Reseña detallada',
    'Avis complet': 'Reseña completa',
    'Casino': 'Casino',
    'Bonus': 'Bono',
    'Jackpots': 'Jackpots',
    'VIP': 'VIP',
    'Retraits': 'Retiros',
    'Retraits rapides': 'Retiros rápidos',
    'Retraits express': 'Retiros express',
    'Crypto': 'Cripto',
    'Slots': 'Slots',
    'Slots premium': 'Slots premium',
    'programme VIP': 'programa VIP',
    'programme': 'programa',
    'généreux': 'generoso',
    'rapides': 'rápidos',
    'premium': 'premium',
    'jusqu\'à': 'hasta',
    'avec': 'con',
    'et': 'y',
    'analysé par nos experts': 'analizado por nuestros expertos',
    'de bienvenue': 'de bienvenida',
    'quotidiens': 'diarios',
    'progressifs': 'progresivos',
    'royal': 'real',
    'highroller': 'highroller',
    'magique': 'mágico',
    'exclusifs': 'exclusivos',
    'gros gains': 'grandes ganancias',
    'cashback': 'cashback',
    'rock': 'rock',
    'turbo': 'turbo',
    'en 24h': 'en 24h',
    'moderne': 'moderno',
    'interface': 'interfaz'
  },
  'it': {
    'Avis': 'Recensione',
    'Avis détaillé': 'Recensione dettagliata',
    'Avis complet': 'Recensione completa',
    'Casino': 'Casino',
    'Bonus': 'Bonus',
    'Jackpots': 'Jackpot',
    'VIP': 'VIP',
    'Retraits': 'Prelievi',
    'Retraits rapides': 'Prelievi rapidi',
    'Retraits express': 'Prelievi express',
    'Crypto': 'Cripto',
    'Slots': 'Slot',
    'Slots premium': 'Slot premium',
    'programme VIP': 'programma VIP',
    'programme': 'programma',
    'généreux': 'generoso',
    'rapides': 'rapidi',
    'premium': 'premium',
    'jusqu\'à': 'fino a',
    'avec': 'con',
    'et': 'e',
    'analysé par nos experts': 'analizzato dai nostri esperti',
    'de bienvenue': 'di benvenuto',
    'quotidiens': 'quotidiani',
    'progressifs': 'progressivi',
    'royal': 'reale',
    'highroller': 'highroller',
    'magique': 'magico',
    'exclusifs': 'esclusivi',
    'gros gains': 'grandi vincite',
    'cashback': 'cashback',
    'rock': 'rock',
    'turbo': 'turbo',
    'en 24h': 'in 24h',
    'moderne': 'moderno',
    'interface': 'interfaccia'
  },
  'ru': {
    'Avis': 'Обзор',
    'Avis détaillé': 'Подробный обзор',
    'Avis complet': 'Полный обзор',
    'Casino': 'Казино',
    'Bonus': 'Бонус',
    'Jackpots': 'Джекпоты',
    'VIP': 'VIP',
    'Retraits': 'Выводы',
    'Retraits rapides': 'Быстрые выводы',
    'Retraits express': 'Экспресс-выводы',
    'Crypto': 'Крипто',
    'Slots': 'Слоты',
    'Slots premium': 'Премиум слоты',
    'programme VIP': 'VIP программа',
    'programme': 'программа',
    'généreux': 'щедрый',
    'rapides': 'быстрые',
    'premium': 'премиум',
    'jusqu\'à': 'до',
    'avec': 'с',
    'et': 'и',
    'analysé par nos experts': 'проанализировано нашими экспертами',
    'de bienvenue': 'приветственный',
    'quotidiens': 'ежедневные',
    'progressifs': 'прогрессивные',
    'royal': 'королевский',
    'highroller': 'хайроллер',
    'magique': 'магический',
    'exclusifs': 'эксклюзивные',
    'gros gains': 'большие выигрыши',
    'cashback': 'кешбэк',
    'rock': 'рок',
    'turbo': 'турбо',
    'en 24h': 'за 24ч',
    'moderne': 'современный',
    'interface': 'интерфейс'
  },
  'br': {
    'Avis': 'Avaliação',
    'Avis détaillé': 'Avaliação detalhada',
    'Avis complet': 'Avaliação completa',
    'Casino': 'Casino',
    'Bonus': 'Bônus',
    'Jackpots': 'Jackpots',
    'VIP': 'VIP',
    'Retraits': 'Saques',
    'Retraits rapides': 'Saques rápidos',
    'Retraits express': 'Saques express',
    'Crypto': 'Cripto',
    'Slots': 'Slots',
    'Slots premium': 'Slots premium',
    'programme VIP': 'programa VIP',
    'programme': 'programa',
    'généreux': 'generoso',
    'rapides': 'rápidos',
    'premium': 'premium',
    'jusqu\'à': 'até',
    'avec': 'com',
    'et': 'e',
    'analysé par nos experts': 'analisado por nossos especialistas',
    'de bienvenue': 'de boas-vindas',
    'quotidiens': 'diários',
    'progressifs': 'progressivos',
    'royal': 'real',
    'highroller': 'highroller',
    'magique': 'mágico',
    'exclusifs': 'exclusivos',
    'gros gains': 'grandes ganhos',
    'cashback': 'cashback',
    'rock': 'rock',
    'turbo': 'turbo',
    'en 24h': 'em 24h',
    'moderne': 'moderno',
    'interface': 'interface'
  },
  'pt': {
    'Avis': 'Avaliação',
    'Avis détaillé': 'Avaliação detalhada',
    'Avis complet': 'Avaliação completa',
    'Casino': 'Casino',
    'Bonus': 'Bónus',
    'Jackpots': 'Jackpots',
    'VIP': 'VIP',
    'Retraits': 'Levantamentos',
    'Retraits rapides': 'Levantamentos rápidos',
    'Retraits express': 'Levantamentos express',
    'Crypto': 'Cripto',
    'Slots': 'Slots',
    'Slots premium': 'Slots premium',
    'programme VIP': 'programa VIP',
    'programme': 'programa',
    'généreux': 'generoso',
    'rapides': 'rápidos',
    'premium': 'premium',
    'jusqu\'à': 'até',
    'avec': 'com',
    'et': 'e',
    'analysé par nos experts': 'analisado pelos nossos especialistas',
    'de bienvenue': 'de boas-vindas',
    'quotidiens': 'diários',
    'progressivos': 'progressivos',
    'royal': 'real',
    'highroller': 'highroller',
    'magique': 'mágico',
    'exclusifs': 'exclusivos',
    'gros gains': 'grandes ganhos',
    'cashback': 'cashback',
    'rock': 'rock',
    'turbo': 'turbo',
    'en 24h': 'em 24h',
    'moderne': 'moderno',
    'interface': 'interface'
  },
  'nl': {
    'Avis': 'Recensie',
    'Avis détaillé': 'Gedetailleerde recensie',
    'Avis complet': 'Volledige recensie',
    'Casino': 'Casino',
    'Bonus': 'Bonus',
    'Jackpots': 'Jackpots',
    'VIP': 'VIP',
    'Retraits': 'Opnames',
    'Retraits rapides': 'Snelle opnames',
    'Retraits express': 'Express opnames',
    'Crypto': 'Crypto',
    'Slots': 'Slots',
    'Slots premium': 'Premium slots',
    'programme VIP': 'VIP programma',
    'programme': 'programma',
    'généreux': 'royaal',
    'rapides': 'snel',
    'premium': 'premium',
    'jusqu\'à': 'tot',
    'avec': 'met',
    'et': 'en',
    'analysé par nos experts': 'geanalyseerd door onze experts',
    'de bienvenue': 'welkomst-',
    'quotidiens': 'dagelijks',
    'progressifs': 'progressief',
    'royal': 'koninklijk',
    'highroller': 'highroller',
    'magique': 'magisch',
    'exclusifs': 'exclusief',
    'gros gains': 'grote winsten',
    'cashback': 'cashback',
    'rock': 'rock',
    'turbo': 'turbo',
    'en 24h': 'binnen 24u',
    'moderne': 'modern',
    'interface': 'interface'
  },
  'lv': {
    'Avis': 'Apskats',
    'Avis détaillé': 'Detalizēts apskats',
    'Avis complet': 'Pilns apskats',
    'Casino': 'Kazino',
    'Bonus': 'Bonuss',
    'Jackpots': 'Džekpoti',
    'VIP': 'VIP',
    'Retraits': 'Izņemšana',
    'Retraits rapides': 'Ātra izņemšana',
    'Retraits express': 'Express izņemšana',
    'Crypto': 'Kripto',
    'Slots': 'Sloti',
    'Slots premium': 'Premium sloti',
    'programme VIP': 'VIP programma',
    'programme': 'programma',
    'généreux': 'devīgs',
    'rapides': 'ātri',
    'premium': 'premium',
    'jusqu\'à': 'līdz',
    'avec': 'ar',
    'et': 'un',
    'analysé par nos experts': 'analizēti mūsu ekspertu',
    'de bienvenue': 'laipni',
    'quotidiens': 'ikdienas',
    'progressifs': 'progresīvi',
    'royal': 'karalisks',
    'highroller': 'highroller',
    'magique': 'maģisks',
    'exclusifs': 'ekskluzīvs',
    'gros gains': 'lieli laimesti',
    'cashback': 'cashback',
    'rock': 'roks',
    'turbo': 'turbo',
    'en 24h': '24h laikā',
    'moderne': 'moderns',
    'interface': 'saskarne'
  },
  'fi': {
    'Avis': 'Arvostelu',
    'Avis détaillé': 'Yksityiskohtainen arvostelu',
    'Avis complet': 'Täydellinen arvostelu',
    'Casino': 'Kasino',
    'Bonus': 'Bonus',
    'Jackpots': 'Jättipottit',
    'VIP': 'VIP',
    'Retraits': 'Nostot',
    'Retraits rapides': 'Nopeat nostot',
    'Retraits express': 'Express-nostot',
    'Crypto': 'Krypto',
    'Slots': 'Kolikkopelit',
    'Slots premium': 'Premium-kolikkopelit',
    'programme VIP': 'VIP-ohjelma',
    'programme': 'ohjelma',
    'généreux': 'antelias',
    'rapides': 'nopeat',
    'premium': 'premium',
    'jusqu\'à': 'jopa',
    'avec': 'kanssa',
    'et': 'ja',
    'analysé par nos experts': 'analysoitu asiantuntijamme toimesta',
    'de bienvenue': 'tervetuliais-',
    'quotidiens': 'päivittäiset',
    'progressifs': 'progressiiviset',
    'royal': 'kuninkaallinen',
    'highroller': 'highroller',
    'magique': 'maaginen',
    'exclusifs': 'eksklusiivinen',
    'gros gains': 'suuret voitot',
    'cashback': 'cashback',
    'rock': 'rock',
    'turbo': 'turbo',
    'en 24h': '24 tunnissa',
    'moderne': 'moderni',
    'interface': 'käyttöliittymä'
  }
};

// Fonction améliorée pour traduire
function translateText(text, locale) {
  if (!translations[locale]) return text;
  
  let translated = text;
  const localeTranslations = translations[locale];
  
  // Trier par longueur décroissante pour éviter les remplacements partiels
  const sortedKeys = Object.keys(localeTranslations).sort((a, b) => b.length - a.length);
  
  sortedKeys.forEach(fr => {
    const regex = new RegExp(fr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    translated = translated.replace(regex, localeTranslations[fr]);
  });
  
  return translated;
}

// Améliorer toutes les traductions BlogPages
const locales = ['en', 'de', 'es', 'ru', 'it', 'br', 'pt', 'nl', 'lv', 'fi'];

console.log('🔄 Amélioration des traductions BlogPages...\n');

locales.forEach(locale => {
  const filePath = path.join(messagesDir, `${locale}.json`);
  if (!fs.existsSync(filePath)) return;
  
  const messages = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updated = false;
  
  if (messages.BlogPages) {
    Object.keys(messages.BlogPages).forEach(key => {
      const blogPage = messages.BlogPages[key];
      
      if (blogPage.seoTitle && blogPage.seoDescription) {
        // Vérifier si c'est une traduction basique (contient "Review dandailed" ou similaire)
        if (blogPage.seoDescription.includes('dandailed') || 
            blogPage.seoDescription.includes('Review d') ||
            blogPage.seoDescription.includes('Review ')) {
          
          // Récupérer la version FR
          if (frMessages.BlogPages[key]) {
            const frData = frMessages.BlogPages[key];
            
            blogPage.seoTitle = translateText(frData.seoTitle, locale);
            blogPage.seoDescription = translateText(frData.seoDescription, locale);
            updated = true;
          }
        }
      }
    });
  }
  
  if (updated) {
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2) + '\n', 'utf8');
    console.log(`✅ ${locale.toUpperCase()}: Traductions BlogPages améliorées`);
  }
});

console.log('\n✅ Amélioration terminée !');
