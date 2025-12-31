const fs = require('fs');
const path = require('path');

const translations = {
  fr: {
    title: "Méthodes de Dépôt Casino 2025 | Guide Complet",
    description: "Découvrez toutes les méthodes de dépôt disponibles dans les casinos en ligne : carte bancaire, crypto, e-wallets, cartes prépayées. Guide complet avec avantages et délais.",
    keywords: "méthodes dépôt casino, carte bancaire casino, crypto casino, skrill casino, neteller casino, paysafecard casino",
    h1: "Méthodes de Dépôt Casino 2025",
    subtitle: "Choisissez la méthode de dépôt qui vous convient le mieux parmi notre sélection complète de solutions de paiement sécurisées",
    methods: {
      carte: { name: "Carte Bancaire", description: "Visa, Mastercard - Dépôts instantanés" },
      crypto: { name: "Cryptomonnaies", description: "Bitcoin, Ethereum, USDT - Retraits rapides" },
      neosurf: { name: "Neosurf", description: "Carte prépayée - Anonyme et sécurisé" },
      skrill: { name: "Skrill", description: "E-wallet populaire - Transactions rapides" },
      neteller: { name: "Neteller", description: "E-wallet fiable - Retraits en 24h" },
      paysafecard: { name: "Paysafecard", description: "Carte prépayée - Sans compte bancaire" },
      cashlib: { name: "Cashlib", description: "Carte prépayée française - Disponible en tabac" },
      virement: { name: "Virement Bancaire", description: "Virement SEPA - Dépôts sécurisés" },
      mifinity: { name: "MiFinity", description: "E-wallet moderne - Transactions instantanées" },
      jetonbank: { name: "Jeton Bank", description: "E-wallet international - Multi-devises" }
    },
    seeCasinos: "Voir les casinos →",
    howToChoose: "Comment choisir votre méthode de dépôt ?",
    content: {
      p1: "Chaque méthode de dépôt présente ses avantages spécifiques. Les <strong>cartes bancaires</strong> sont idéales pour les dépôts instantanés et la simplicité. Les <strong>cryptomonnaies</strong> offrent l'anonymat et des retraits ultra-rapides. Les <strong>e-wallets</strong> comme Skrill et Neteller combinent rapidité et sécurité.",
      p2: "Les <strong>cartes prépayées</strong> (Neosurf, Paysafecard, Cashlib) sont parfaites pour contrôler vos dépenses et rester anonyme. Le <strong>virement bancaire</strong> convient aux gros montants avec une sécurité maximale.",
      p3: "Consultez nos guides détaillés pour chaque méthode ci-dessus pour découvrir les casinos qui les acceptent, les délais de traitement, les frais éventuels et nos recommandations d'experts."
    }
  },
  en: {
    title: "Casino Deposit Methods 2025 | Complete Guide",
    description: "Discover all deposit methods available in online casinos: bank cards, crypto, e-wallets, prepaid cards. Complete guide with benefits and processing times.",
    keywords: "casino deposit methods, bank card casino, crypto casino, skrill casino, neteller casino, paysafecard casino",
    h1: "Casino Deposit Methods 2025",
    subtitle: "Choose the deposit method that suits you best from our complete selection of secure payment solutions",
    methods: {
      carte: { name: "Bank Card", description: "Visa, Mastercard - Instant deposits" },
      crypto: { name: "Cryptocurrencies", description: "Bitcoin, Ethereum, USDT - Fast withdrawals" },
      neosurf: { name: "Neosurf", description: "Prepaid card - Anonymous and secure" },
      skrill: { name: "Skrill", description: "Popular e-wallet - Fast transactions" },
      neteller: { name: "Neteller", description: "Reliable e-wallet - 24h withdrawals" },
      paysafecard: { name: "Paysafecard", description: "Prepaid card - No bank account needed" },
      cashlib: { name: "Cashlib", description: "French prepaid card - Available at tobacconists" },
      virement: { name: "Bank Transfer", description: "SEPA transfer - Secure deposits" },
      mifinity: { name: "MiFinity", description: "Modern e-wallet - Instant transactions" },
      jetonbank: { name: "Jeton Bank", description: "International e-wallet - Multi-currency" }
    },
    seeCasinos: "See casinos →",
    howToChoose: "How to choose your deposit method?",
    content: {
      p1: "Each deposit method has its specific advantages. <strong>Bank cards</strong> are ideal for instant deposits and simplicity. <strong>Cryptocurrencies</strong> offer anonymity and ultra-fast withdrawals. <strong>E-wallets</strong> like Skrill and Neteller combine speed and security.",
      p2: "<strong>Prepaid cards</strong> (Neosurf, Paysafecard, Cashlib) are perfect for controlling your spending and staying anonymous. <strong>Bank transfers</strong> are suitable for large amounts with maximum security.",
      p3: "Check our detailed guides for each method above to discover which casinos accept them, processing times, any fees, and our expert recommendations."
    }
  },
  es: {
    title: "Métodos de Depósito Casino 2025 | Guía Completa",
    description: "Descubre todos los métodos de depósito disponibles en casinos online: tarjeta bancaria, cripto, monederos electrónicos, tarjetas prepago. Guía completa con ventajas y tiempos de procesamiento.",
    keywords: "métodos depósito casino, tarjeta bancaria casino, cripto casino, skrill casino, neteller casino, paysafecard casino",
    h1: "Métodos de Depósito Casino 2025",
    subtitle: "Elige el método de depósito que mejor se adapte a ti entre nuestra selección completa de soluciones de pago seguras",
    methods: {
      carte: { name: "Tarjeta Bancaria", description: "Visa, Mastercard - Depósitos instantáneos" },
      crypto: { name: "Criptomonedas", description: "Bitcoin, Ethereum, USDT - Retiros rápidos" },
      neosurf: { name: "Neosurf", description: "Tarjeta prepago - Anónima y segura" },
      skrill: { name: "Skrill", description: "Monedero electrónico popular - Transacciones rápidas" },
      neteller: { name: "Neteller", description: "Monedero electrónico fiable - Retiros en 24h" },
      paysafecard: { name: "Paysafecard", description: "Tarjeta prepago - Sin cuenta bancaria" },
      cashlib: { name: "Cashlib", description: "Tarjeta prepago francesa - Disponible en estancos" },
      virement: { name: "Transferencia Bancaria", description: "Transferencia SEPA - Depósitos seguros" },
      mifinity: { name: "MiFinity", description: "Monedero electrónico moderno - Transacciones instantáneas" },
      jetonbank: { name: "Jeton Bank", description: "Monedero electrónico internacional - Multi-moneda" }
    },
    seeCasinos: "Ver casinos →",
    howToChoose: "¿Cómo elegir tu método de depósito?",
    content: {
      p1: "Cada método de depósito tiene sus ventajas específicas. Las <strong>tarjetas bancarias</strong> son ideales para depósitos instantáneos y simplicidad. Las <strong>criptomonedas</strong> ofrecen anonimato y retiros ultrarrápidos. Los <strong>monederos electrónicos</strong> como Skrill y Neteller combinan rapidez y seguridad.",
      p2: "Las <strong>tarjetas prepago</strong> (Neosurf, Paysafecard, Cashlib) son perfectas para controlar tus gastos y mantener el anonimato. La <strong>transferencia bancaria</strong> conviene para grandes montos con máxima seguridad.",
      p3: "Consulta nuestras guías detalladas para cada método arriba para descubrir qué casinos los aceptan, tiempos de procesamiento, posibles comisiones y nuestras recomendaciones de expertos."
    }
  },
  de: {
    title: "Casino Einzahlungsmethoden 2025 | Komplette Anleitung",
    description: "Entdecken Sie alle Einzahlungsmethoden in Online-Casinos: Bankkarte, Krypto, E-Wallets, Prepaid-Karten. Komplette Anleitung mit Vorteilen und Bearbeitungszeiten.",
    keywords: "casino einzahlungsmethoden, bankkarte casino, krypto casino, skrill casino, neteller casino, paysafecard casino",
    h1: "Casino Einzahlungsmethoden 2025",
    subtitle: "Wählen Sie die Einzahlungsmethode, die am besten zu Ihnen passt, aus unserer vollständigen Auswahl sicherer Zahlungslösungen",
    methods: {
      carte: { name: "Bankkarte", description: "Visa, Mastercard - Sofortige Einzahlungen" },
      crypto: { name: "Kryptowährungen", description: "Bitcoin, Ethereum, USDT - Schnelle Auszahlungen" },
      neosurf: { name: "Neosurf", description: "Prepaid-Karte - Anonym und sicher" },
      skrill: { name: "Skrill", description: "Beliebtes E-Wallet - Schnelle Transaktionen" },
      neteller: { name: "Neteller", description: "Zuverlässiges E-Wallet - Auszahlungen in 24h" },
      paysafecard: { name: "Paysafecard", description: "Prepaid-Karte - Kein Bankkonto erforderlich" },
      cashlib: { name: "Cashlib", description: "Französische Prepaid-Karte - Verfügbar in Tabakläden" },
      virement: { name: "Banküberweisung", description: "SEPA-Überweisung - Sichere Einzahlungen" },
      mifinity: { name: "MiFinity", description: "Modernes E-Wallet - Sofortige Transaktionen" },
      jetonbank: { name: "Jeton Bank", description: "Internationales E-Wallet - Multi-Währung" }
    },
    seeCasinos: "Casinos ansehen →",
    howToChoose: "Wie wählt man seine Einzahlungsmethode?",
    content: {
      p1: "Jede Einzahlungsmethode hat ihre spezifischen Vorteile. <strong>Bankkarten</strong> sind ideal für sofortige Einzahlungen und Einfachheit. <strong>Kryptowährungen</strong> bieten Anonymität und ultraschnelle Auszahlungen. <strong>E-Wallets</strong> wie Skrill und Neteller verbinden Geschwindigkeit und Sicherheit.",
      p2: "<strong>Prepaid-Karten</strong> (Neosurf, Paysafecard, Cashlib) sind perfekt, um Ihre Ausgaben zu kontrollieren und anonym zu bleiben. <strong>Banküberweisungen</strong> eignen sich für große Beträge mit maximaler Sicherheit.",
      p3: "Konsultieren Sie unsere detaillierten Anleitungen für jede Methode oben, um herauszufinden, welche Casinos sie akzeptieren, Bearbeitungszeiten, eventuelle Gebühren und unsere Expertenempfehlungen."
    }
  }
};

const locales = ['fr', 'en', 'es', 'de', 'ru', 'it', 'br', 'pt', 'nl', 'lv', 'fi'];

locales.forEach(locale => {
  const filePath = `messages/${locale}.json`;
  if (!fs.existsSync(filePath)) {
    console.log(`⚠ Fichier manquant: ${filePath}`);
    return;
  }
  
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  if (!content.DepotPages) {
    content.DepotPages = {};
  }
  
  if (!content.DepotPages.main) {
    content.DepotPages.main = translations[locale] || translations.en;
  }
  
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8');
  console.log(`✓ ${locale}.json mis à jour`);
});

console.log('\n✅ Traductions ajoutées pour depot/page.tsx');

