import { Locale } from '@/config/site';

// Mapping des routes traduites
// Format: [locale]: pathname
export const pathnames: Record<string, Record<string, string>> = {
  // Pages guides
  '/astuces-casino': {
    en: '/casino-tips',
    fr: '/astuces-casino',
    es: '/consejos-casino',
    de: '/casino-tipps',
    ru: '/sovety-kazino',
    it: '/consigli-casino',
    br: '/dicas-cassino',
    pt: '/dicas-casino',
    nl: '/casino-tips',
    lv: '/kazino-padomi',
    fi: '/kasinon-vinkit',
  },
  '/top-casinos-crypto': {
    en: '/top-crypto-casinos',
    fr: '/top-casinos-crypto',
    es: '/mejores-casinos-cripto',
    de: '/top-krypto-casinos',
    ru: '/top-kripto-kazino',
    it: '/migliori-casino-cripto',
    br: '/melhores-cassinos-cripto',
    pt: '/melhores-casinos-cripto',
    nl: '/top-crypto-casinos',
    lv: '/top-kripto-kazino',
    fi: '/parhaat-kryptokasinot',
  },
  '/casinos-sans-kyc': {
    en: '/no-kyc-casinos',
    fr: '/casinos-sans-kyc',
    es: '/casinos-sin-kyc',
    de: '/casinos-ohne-kyc',
    ru: '/kazino-bez-kyc',
    it: '/casino-senza-kyc',
    br: '/cassinos-sem-kyc',
    pt: '/casinos-sem-kyc',
    nl: '/casinos-zonder-kyc',
    lv: '/kazino-bez-kyc',
    fi: '/kyc-vapaa-kasino',
  },
  '/bonus-cashback': {
    en: '/cashback-bonus',
    fr: '/bonus-cashback',
    es: '/bonus-cashback',
    de: '/cashback-bonus',
    ru: '/bonus-kehsbek',
    it: '/bonus-cashback',
    br: '/bonus-cashback',
    pt: '/bonus-cashback',
    nl: '/cashback-bonus',
    lv: '/cashback-bonuss',
    fi: '/cashback-bonus',
  },
  '/bonus-sans-wager': {
    en: '/no-wager-bonus',
    fr: '/bonus-sans-wager',
    es: '/bonus-sin-apuesta',
    de: '/bonus-ohne-wager',
    ru: '/bonus-bez-vager',
    it: '/bonus-senza-wager',
    br: '/bonus-sem-rollover',
    pt: '/bonus-sem-wager',
    nl: '/bonus-zonder-wager',
    lv: '/bonuss-bez-wager',
    fi: '/wageriton-bonus',
  },
  '/top-slots-2025': {
    en: '/top-slots-2025',
    fr: '/top-slots-2025',
    es: '/mejores-slots-2025',
    de: '/top-slots-2025',
    ru: '/top-sloty-2025',
    it: '/migliori-slot-2025',
    br: '/melhores-slots-2025',
    pt: '/melhores-slots-2025',
    nl: '/top-slots-2025',
    lv: '/top-sloti-2025',
    fi: '/parhaat-slotit-2025',
  },
  '/meilleurs-bookmakers': {
    en: '/best-bookmakers',
    fr: '/meilleurs-bookmakers',
    es: '/mejores-casa-apuestas',
    de: '/beste-buchmacher',
    ru: '/luchshie-bukmekery',
    it: '/migliori-bookmaker',
    br: '/melhores-cassas-de-apostas',
    pt: '/melhores-casas-de-apostas',
    nl: '/beste-bookmakers',
    lv: '/labakie-bukmeikeri',
    fi: '/parhaat-vedonlyontisivustot',
  },
  '/calculateur-roulette': {
    en: '/roulette-calculator',
    fr: '/calculateur-roulette',
    es: '/calculadora-ruleta',
    de: '/roulette-rechner',
    ru: '/kalkulyator-ruletki',
    it: '/calcolatore-roulette',
    br: '/calculadora-roleta',
    pt: '/calculadora-roleta',
    nl: '/roulette-calculator',
    lv: '/rulets-kalkulators',
    fi: '/ruletti-laskin',
  },
  '/calculateur-cotes-sportives': {
    en: '/sports-odds-calculator',
    fr: '/calculateur-cotes-sportives',
    es: '/calculadora-cuotas-deportivas',
    de: '/sportwetten-rechner',
    ru: '/kalkulyator-sportivnykh-koeffitsientov',
    it: '/calcolatore-quote-sportive',
    br: '/calculadora-odds-esportivas',
    pt: '/calculadora-odds-desportivas',
    nl: '/sportweddenschappen-calculator',
    lv: '/sporta-koeficientu-kalkulators',
    fi: '/urheiluedotuslaskin',
  },
  '/about': {
    en: '/about',
    fr: '/about',
    es: '/sobre-nosotros',
    de: '/ueber-uns',
    ru: '/o-nas',
    it: '/chi-siamo',
    br: '/sobre-nos',
    pt: '/sobre-nos',
    nl: '/over-ons',
    lv: '/par-mums',
    fi: '/tietoa-meista',
  },
  '/install': {
    en: '/install',
    fr: '/install',
    es: '/instalar',
    de: '/installieren',
    ru: '/ustanovka',
    it: '/installa',
    br: '/instalar',
    pt: '/instalar',
    nl: '/installeren',
    lv: '/instalets',
    fi: '/asenna',
  },
  
  // Pages dépôt
  '/depot/skrill': {
    en: '/deposit/skrill',
    fr: '/depot/skrill',
    es: '/deposito/skrill',
    de: '/einzahlung/skrill',
    ru: '/popolnenie/skrill',
    it: '/deposito/skrill',
    br: '/deposito/skrill',
    pt: '/deposito/skrill',
    nl: '/storten/skrill',
    lv: '/iemaksa/skrill',
    fi: '/tallettaminen/skrill',
  },
  '/depot/neteller': {
    en: '/deposit/neteller',
    fr: '/depot/neteller',
    es: '/deposito/neteller',
    de: '/einzahlung/neteller',
    ru: '/popolnenie/neteller',
    it: '/deposito/neteller',
    br: '/deposito/neteller',
    pt: '/deposito/neteller',
    nl: '/storten/neteller',
    lv: '/iemaksa/neteller',
    fi: '/tallettaminen/neteller',
  },
  '/depot/neosurf': {
    en: '/deposit/neosurf',
    fr: '/depot/neosurf',
    es: '/deposito/neosurf',
    de: '/einzahlung/neosurf',
    ru: '/popolnenie/neosurf',
    it: '/deposito/neosurf',
    br: '/deposito/neosurf',
    pt: '/deposito/neosurf',
    nl: '/storten/neosurf',
    lv: '/iemaksa/neosurf',
    fi: '/tallettaminen/neosurf',
  },
  '/depot/cashlib': {
    en: '/deposit/cashlib',
    fr: '/depot/cashlib',
    es: '/deposito/cashlib',
    de: '/einzahlung/cashlib',
    ru: '/popolnenie/cashlib',
    it: '/deposito/cashlib',
    br: '/deposito/cashlib',
    pt: '/deposito/cashlib',
    nl: '/storten/cashlib',
    lv: '/iemaksa/cashlib',
    fi: '/tallettaminen/cashlib',
  },
  '/depot/paysafecard': {
    en: '/deposit/paysafecard',
    fr: '/depot/paysafecard',
    es: '/deposito/paysafecard',
    de: '/einzahlung/paysafecard',
    ru: '/popolnenie/paysafecard',
    it: '/deposito/paysafecard',
    br: '/deposito/paysafecard',
    pt: '/deposito/paysafecard',
    nl: '/storten/paysafecard',
    lv: '/iemaksa/paysafecard',
    fi: '/tallettaminen/paysafecard',
  },
  '/depot/virement': {
    en: '/deposit/bank-transfer',
    fr: '/depot/virement',
    es: '/deposito/transferencia-bancaria',
    de: '/einzahlung/bankueberweisung',
    ru: '/popolnenie/bankovskiy-perevod',
    it: '/deposito/bonifico-bancario',
    br: '/deposito/transferencia-bancaria',
    pt: '/deposito/transferencia-bancaria',
    nl: '/storten/bankoverschrijving',
    lv: '/iemaksa/banka-pulkstejs',
    fi: '/tallettaminen/pankkisiirto',
  },
  '/depot/jetonbank': {
    en: '/deposit/jetonbank',
    fr: '/depot/jetonbank',
    es: '/deposito/jetonbank',
    de: '/einzahlung/jetonbank',
    ru: '/popolnenie/jetonbank',
    it: '/deposito/jetonbank',
    br: '/deposito/jetonbank',
    pt: '/deposito/jetonbank',
    nl: '/storten/jetonbank',
    lv: '/iemaksa/jetonbank',
    fi: '/tallettaminen/jetonbank',
  },
  '/depot/mifinity': {
    en: '/deposit/mifinity',
    fr: '/depot/mifinity',
    es: '/deposito/mifinity',
    de: '/einzahlung/mifinity',
    ru: '/popolnenie/mifinity',
    it: '/deposito/mifinity',
    br: '/deposito/mifinity',
    pt: '/deposito/mifinity',
    nl: '/storten/mifinity',
    lv: '/iemaksa/mifinity',
    fi: '/tallettaminen/mifinity',
  },
  '/depot/carte': {
    en: '/deposit/card',
    fr: '/depot/carte',
    es: '/deposito/tarjeta',
    de: '/einzahlung/karte',
    ru: '/popolnenie/karta',
    it: '/deposito/carta',
    br: '/deposito/cartao',
    pt: '/deposito/cartao',
    nl: '/storten/kaart',
    lv: '/iemaksa/karte',
    fi: '/tallettaminen/kortti',
  },
  '/depot/crypto': {
    en: '/deposit/crypto',
    fr: '/depot/crypto',
    es: '/deposito/cripto',
    de: '/einzahlung/krypto',
    ru: '/popolnenie/kripto',
    it: '/deposito/cripto',
    br: '/deposito/cripto',
    pt: '/deposito/cripto',
    nl: '/storten/crypto',
    lv: '/iemaksa/kripto',
    fi: '/tallettaminen/krypto',
  },
} as const;

// Type pour les clés de pathnames
export type Pathname = keyof typeof pathnames;

// Fonction pour obtenir le pathname traduit
export function getTranslatedPathname(pathname: string, locale: Locale): string {
  // Si c'est la racine ou une page blog, retourner tel quel
  if (pathname === '/' || pathname.startsWith('/blog')) {
    return pathname;
  }

  // Chercher dans les pathnames traduits
  const translated = pathnames[pathname as Pathname]?.[locale];
  if (translated) {
    return translated;
  }

  // Si pas de traduction, retourner le pathname original
  return pathname;
}

// Fonction inverse : trouver le pathname original depuis un pathname traduit
export function getOriginalPathname(translatedPathname: string, locale: Locale): string {
  // Si c'est la racine ou une page blog, retourner tel quel
  if (translatedPathname === '/' || translatedPathname.startsWith('/blog')) {
    return translatedPathname;
  }

  // Chercher dans les pathnames
  for (const [original, translations] of Object.entries(pathnames)) {
    if (translations[locale] === translatedPathname) {
      return original;
    }
  }

  // Si pas trouvé, retourner tel quel
  return translatedPathname;
}



