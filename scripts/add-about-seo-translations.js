const fs = require('fs');

const translations = {
  fr: {
    title: "À Propos de GigaBonus | Équipe d'Experts Casino 2025",
    description: "Découvrez l'équipe GigaBonus : experts casino depuis 2019, +500 casinos testés, méthodologie transparente. Notre mission : vous guider vers les meilleurs bonus.",
    keywords: "gigabonus équipe, experts casino en ligne, avis casino fiables, test casino indépendant, méthodologie test casino, équipe GigaBonus",
    ogTitle: "À Propos de GigaBonus | Équipe d'Experts Casino 2025",
    ogDescription: "Équipe d'experts casino depuis 2019. +500 casinos testés avec méthodologie transparente.",
    twitterTitle: "À Propos de GigaBonus | Équipe d'Experts Casino 2025",
    twitterDescription: "Équipe d'experts casino depuis 2019. +500 casinos testés."
  },
  en: {
    title: "About GigaBonus | Casino Expert Team 2025",
    description: "Discover the GigaBonus team: casino experts since 2019, +500 casinos tested, transparent methodology. Our mission: guide you to the best bonuses.",
    keywords: "gigabonus team, online casino experts, reliable casino reviews, independent casino testing, casino testing methodology, GigaBonus team",
    ogTitle: "About GigaBonus | Casino Expert Team 2025",
    ogDescription: "Casino expert team since 2019. +500 casinos tested with transparent methodology.",
    twitterTitle: "About GigaBonus | Casino Expert Team 2025",
    twitterDescription: "Casino expert team since 2019. +500 casinos tested."
  },
  es: {
    title: "Acerca de GigaBonus | Equipo de Expertos en Casinos 2025",
    description: "Descubre el equipo GigaBonus: expertos en casinos desde 2019, +500 casinos probados, metodología transparente. Nuestra misión: guiarte hacia los mejores bonos.",
    keywords: "equipo gigabonus, expertos casino online, reseñas casino fiables, pruebas casino independientes, metodología pruebas casino, equipo GigaBonus",
    ogTitle: "Acerca de GigaBonus | Equipo de Expertos en Casinos 2025",
    ogDescription: "Equipo de expertos en casinos desde 2019. +500 casinos probados con metodología transparente.",
    twitterTitle: "Acerca de GigaBonus | Equipo de Expertos en Casinos 2025",
    twitterDescription: "Equipo de expertos en casinos desde 2019. +500 casinos probados."
  },
  de: {
    title: "Über GigaBonus | Casino-Expertenteam 2025",
    description: "Entdecken Sie das GigaBonus-Team: Casino-Experten seit 2019, +500 getestete Casinos, transparente Methodik. Unsere Mission: Sie zu den besten Boni führen.",
    keywords: "gigabonus team, online casino experten, zuverlässige casino bewertungen, unabhängige casino tests, casino test methodik, GigaBonus team",
    ogTitle: "Über GigaBonus | Casino-Expertenteam 2025",
    ogDescription: "Casino-Expertenteam seit 2019. +500 getestete Casinos mit transparenter Methodik.",
    twitterTitle: "Über GigaBonus | Casino-Expertenteam 2025",
    twitterDescription: "Casino-Expertenteam seit 2019. +500 getestete Casinos."
  },
  ru: {
    title: "О GigaBonus | Команда Экспертов Казино 2025",
    description: "Узнайте о команде GigaBonus: эксперты казино с 2019 года, протестировано +500 казино, прозрачная методология. Наша миссия: направить вас к лучшим бонусам.",
    keywords: "команда gigabonus, эксперты онлайн казино, надежные обзоры казино, независимое тестирование казино, методология тестирования казино, команда GigaBonus",
    ogTitle: "О GigaBonus | Команда Экспертов Казино 2025",
    ogDescription: "Команда экспертов казино с 2019 года. Протестировано +500 казино с прозрачной методологией.",
    twitterTitle: "О GigaBonus | Команда Экспертов Казино 2025",
    twitterDescription: "Команда экспертов казино с 2019 года. Протестировано +500 казино."
  },
  it: {
    title: "Chi Siamo GigaBonus | Team di Esperti Casino 2025",
    description: "Scopri il team GigaBonus: esperti di casino dal 2019, +500 casino testati, metodologia trasparente. La nostra missione: guidarti verso i migliori bonus.",
    keywords: "team gigabonus, esperti casino online, recensioni casino affidabili, test casino indipendenti, metodologia test casino, team GigaBonus",
    ogTitle: "Chi Siamo GigaBonus | Team di Esperti Casino 2025",
    ogDescription: "Team di esperti di casino dal 2019. +500 casino testati con metodologia trasparente.",
    twitterTitle: "Chi Siamo GigaBonus | Team di Esperti Casino 2025",
    twitterDescription: "Team di esperti di casino dal 2019. +500 casino testati."
  },
  br: {
    title: "Sobre GigaBonus | Equipe de Especialistas em Cassinos 2025",
    description: "Descubra a equipe GigaBonus: especialistas em cassinos desde 2019, +500 cassinos testados, metodologia transparente. Nossa missão: guiá-lo para os melhores bônus.",
    keywords: "equipe gigabonus, especialistas cassino online, avaliações cassino confiáveis, testes cassino independentes, metodologia testes cassino, equipe GigaBonus",
    ogTitle: "Sobre GigaBonus | Equipe de Especialistas em Cassinos 2025",
    ogDescription: "Equipe de especialistas em cassinos desde 2019. +500 cassinos testados com metodologia transparente.",
    twitterTitle: "Sobre GigaBonus | Equipe de Especialistas em Cassinos 2025",
    twitterDescription: "Equipe de especialistas em cassinos desde 2019. +500 cassinos testados."
  },
  pt: {
    title: "Sobre GigaBonus | Equipa de Especialistas em Casinos 2025",
    description: "Descubra a equipa GigaBonus: especialistas em casinos desde 2019, +500 casinos testados, metodologia transparente. A nossa missão: guiá-lo para os melhores bónus.",
    keywords: "equipa gigabonus, especialistas casino online, avaliações casino confiáveis, testes casino independentes, metodologia testes casino, equipa GigaBonus",
    ogTitle: "Sobre GigaBonus | Equipa de Especialistas em Casinos 2025",
    ogDescription: "Equipa de especialistas em casinos desde 2019. +500 casinos testados com metodologia transparente.",
    twitterTitle: "Sobre GigaBonus | Equipa de Especialistas em Casinos 2025",
    twitterDescription: "Equipa de especialistas em casinos desde 2019. +500 casinos testados."
  },
  nl: {
    title: "Over GigaBonus | Casino Expert Team 2025",
    description: "Ontdek het GigaBonus team: casino-experts sinds 2019, +500 geteste casinos, transparante methodologie. Onze missie: u naar de beste bonussen leiden.",
    keywords: "gigabonus team, online casino experts, betrouwbare casino recensies, onafhankelijke casino tests, casino test methodologie, GigaBonus team",
    ogTitle: "Over GigaBonus | Casino Expert Team 2025",
    ogDescription: "Casino expert team sinds 2019. +500 geteste casinos met transparante methodologie.",
    twitterTitle: "Over GigaBonus | Casino Expert Team 2025",
    twitterDescription: "Casino expert team sinds 2019. +500 geteste casinos."
  },
  lv: {
    title: "Par GigaBonus | Kazino Ekspertu Komanda 2025",
    description: "Uzziniet par GigaBonus komandu: kazino eksperti kopš 2019. gada, pārbaudīti +500 kazino, pārredzama metodoloģija. Mūsu misija: vadīt jūs uz labākajiem bonussiem.",
    keywords: "gigabonus komanda, tiešsaistes kazino eksperti, uzticamas kazino recenzijas, neatkarīgi kazino testi, kazino testu metodoloģija, GigaBonus komanda",
    ogTitle: "Par GigaBonus | Kazino Ekspertu Komanda 2025",
    ogDescription: "Kazino ekspertu komanda kopš 2019. gada. Pārbaudīti +500 kazino ar pārredzamu metodoloģiju.",
    twitterTitle: "Par GigaBonus | Kazino Ekspertu Komanda 2025",
    twitterDescription: "Kazino ekspertu komanda kopš 2019. gada. Pārbaudīti +500 kazino."
  },
  fi: {
    title: "Tietoja GigaBonusista | Kasinoasiantuntijatiimi 2025",
    description: "Tutustu GigaBonus-tiimiin: kasinoasiantuntijat vuodesta 2019, yli 500 testattua kasinoa, läpinäkyvä metodologia. Tehtävämme: ohjata sinut parhaisiin bonuksiin.",
    keywords: "gigabonus tiimi, verkkokasino asiantuntijat, luotettavat kasinoarvostelut, riippumattomat kasinotestit, kasinotestauksen metodologia, GigaBonus tiimi",
    ogTitle: "Tietoja GigaBonusista | Kasinoasiantuntijatiimi 2025",
    ogDescription: "Kasinoasiantuntijatiimi vuodesta 2019. Yli 500 testattua kasinoa läpinäkyvällä metodologialla.",
    twitterTitle: "Tietoja GigaBonusista | Kasinoasiantuntijatiimi 2025",
    twitterDescription: "Kasinoasiantuntijatiimi vuodesta 2019. Yli 500 testattua kasinoa."
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
  
  if (!content.SEO) {
    content.SEO = {};
  }
  
  if (!content.SEO.about) {
    content.SEO.about = translations[locale] || translations.en;
  }
  
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8');
  console.log(`✓ ${locale}.json mis à jour`);
});

console.log('\n✅ Traductions SEO ajoutées pour about/page.tsx');

