const fs = require('fs');
const path = require('path');

// Liste de tous les dossiers de casino (sans les guides et autres)
const casinoDirs = [
  '31bets', '7kcasino', 'aphrodite', 'atlantisslots', 'betify', 'bigdollar',
  'bonrush', 'casinointense', 'cazinostars', 'cleobetra', 'europefortune',
  'freespinza', 'hispin', 'hotloot', 'hunnyplay', 'i24slots', 'jumbabet',
  'kingdom', 'kingschance', 'librabet', 'luckytreasure', 'luckytrunk',
  'lunarspins', 'machance', 'madcasino', 'magicalspin', 'megawin',
  'onlyspins', 'orionsbet', 'playregal', 'rockstar', 'roibets', 'slotrush',
  'slotsandcasino', 'slotsofvegas', 'spinaura', 'spindinasty', 'spinnycasino',
  'spinstar', 'uniquecasino', 'vegasplus', 'winmachance'
];

// Pages avec traductions complètes (seo, hero, features)
const fullTranslationPages = ['magicalspin', 'madcasino', 'machance', 'luckytreasure'];

// Fonction pour vérifier si une page utilise déjà useTranslations
function hasTranslations(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return content.includes("useTranslations('CasinoPages");
}

// Fonction pour ajouter les imports nécessaires
function addImports(content) {
  if (!content.includes("useLocale, useTranslations")) {
    // Chercher la ligne d'import de next-intl ou l'ajouter
    if (content.includes("from 'next-intl'")) {
      content = content.replace(
        /from 'next-intl'/g,
        "from 'next-intl'"
      );
      if (!content.includes("useLocale")) {
        content = content.replace(
          /import.*from ['"]next-intl['"]/,
          "import { useLocale, useTranslations } from 'next-intl'"
        );
      }
    } else {
      // Ajouter l'import après les autres imports
      const importMatch = content.match(/(import.*from ['"]@\/.*['"];?\n)/);
      if (importMatch) {
        const lastImport = importMatch[importMatch.length - 1];
        const lastImportIndex = content.lastIndexOf(lastImport);
        content = content.slice(0, lastImportIndex + lastImport.length) +
          "import { useLocale, useTranslations } from 'next-intl';\n" +
          content.slice(lastImportIndex + lastImport.length);
      }
    }
  }
  return content;
}

// Fonction pour mettre à jour une page avec traductions SEO seulement
function updatePageWithSEOTranslations(filePath, casinoName) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Vérifier si déjà mis à jour
  if (hasTranslations(filePath)) {
    console.log(`✓ ${casinoName} - Déjà mis à jour`);
    return;
  }

  // Ajouter les imports
  content = addImports(content);

  // Ajouter useLocale et useTranslations dans le composant
  const componentMatch = content.match(/export default function (\w+)\(\) \{/);
  if (componentMatch) {
    const componentName = componentMatch[1];
    const componentStart = content.indexOf(`export default function ${componentName}() {`);
    const firstLine = content.indexOf('\n', componentStart) + 1;
    
    // Vérifier si useLocale/useTranslations existe déjà
    if (!content.includes(`const t = useTranslations('CasinoPages.`)) {
      const localeVar = content.includes('const locale') ? '' : "  const locale = useLocale();\n";
      const translationVar = `  const t = useTranslations('CasinoPages.${casinoName}');\n`;
      
      // Trouver où insérer (après les useRef ou directement après l'ouverture)
      const refMatch = content.match(/const \w+Ref = useRef/);
      if (refMatch) {
        const refEnd = content.indexOf('\n', content.indexOf(refMatch[0]) + refMatch[0].length);
        content = content.slice(0, refEnd + 1) + localeVar + translationVar + content.slice(refEnd + 1);
      } else {
        content = content.slice(0, firstLine) + localeVar + translationVar + content.slice(firstLine);
      }
    }
  }

  // Vérifier si la traduction utilise seo.title ou seoTitle
  const frMessages = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'messages', 'fr.json'), 'utf8'));
  const hasFullSeo = frMessages.CasinoPages?.[casinoName]?.seo?.title;
  const hasSimpleSeo = frMessages.CasinoPages?.[casinoName]?.seoTitle;
  
  // Remplacer SEOHead hardcodé par traductions
  const seoHeadRegex = /<SEOHead\s+title=["']([^"']+)["']\s+description=["']([^"']+)["']\s+keywords=["']([^"']+)["']\s+canonical=["']([^"']+)["']/;
  if (seoHeadRegex.test(content)) {
    if (hasFullSeo) {
      // Structure complète avec seo.title, seo.description, etc.
      content = content.replace(
        seoHeadRegex,
        `<SEOHead
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical={\`https://gigabonus.win/\${locale}/${casinoName}\`}`
      );
      
      // Remplacer ogTitle et ogDescription si présents
      content = content.replace(
        /ogTitle=["']([^"']+)["']/g,
        "ogTitle={t('seo.ogTitle')}"
      );
      content = content.replace(
        /ogDescription=["']([^"']+)["']/g,
        "ogDescription={t('seo.ogDescription')}"
      );
      content = content.replace(
        /twitterTitle=["']([^"']+)["']/g,
        "twitterTitle={t('seo.twitterTitle')}"
      );
      content = content.replace(
        /twitterDescription=["']([^"']+)["']/g,
        "twitterDescription={t('seo.twitterDescription')}"
      );
    } else if (hasSimpleSeo) {
      // Structure simple avec seoTitle et seoDescription
      content = content.replace(
        seoHeadRegex,
        `<SEOHead
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="${seoHeadRegex.exec(content)[3]}"
        canonical={\`https://gigabonus.win/\${locale}/${casinoName}\`}`
      );
      
      // Pour ogTitle et ogDescription, utiliser seoTitle et seoDescription
      content = content.replace(
        /ogTitle=["']([^"']+)["']/g,
        "ogTitle={t('seoTitle')}"
      );
      content = content.replace(
        /ogDescription=["']([^"']+)["']/g,
        "ogDescription={t('seoDescription')}"
      );
      content = content.replace(
        /twitterTitle=["']([^"']+)["']/g,
        "twitterTitle={t('seoTitle')}"
      );
      content = content.replace(
        /twitterDescription=["']([^"']+)["']/g,
        "twitterDescription={t('seoDescription')}"
      );
    }
  } else {
    // Pattern alternatif avec template literals
    const seoHeadAltRegex = /<SEOHead\s+title=\{`([^`]+)`\}\s+description=\{`([^`]+)`\}/;
    if (seoHeadAltRegex.test(content)) {
      if (hasFullSeo) {
        content = content.replace(
          seoHeadAltRegex,
          `<SEOHead
        title={t('seo.title')}
        description={t('seo.description')}`
        );
      } else if (hasSimpleSeo) {
        content = content.replace(
          seoHeadAltRegex,
          `<SEOHead
        title={t('seoTitle')}
        description={t('seoDescription')}`
        );
      }
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ ${casinoName} - Mis à jour avec traductions SEO`);
}

// Fonction principale
function main() {
  const basePath = path.join(__dirname, '..', 'app', '[locale]');
  
  console.log('🚀 Mise à jour des pages de casino avec traductions...\n');
  
  casinoDirs.forEach(casinoName => {
    const pagePath = path.join(basePath, casinoName, 'page.tsx');
    
    if (!fs.existsSync(pagePath)) {
      console.log(`⚠ ${casinoName} - Fichier non trouvé`);
      return;
    }

    if (fullTranslationPages.includes(casinoName)) {
      console.log(`ℹ ${casinoName} - Page complète (à modifier manuellement)`);
      return;
    }

    try {
      updatePageWithSEOTranslations(pagePath, casinoName);
    } catch (error) {
      console.error(`✗ ${casinoName} - Erreur:`, error.message);
    }
  });

  console.log('\n✅ Terminé !');
  console.log('\n⚠️  Les pages suivantes ont des traductions complètes et doivent être modifiées manuellement:');
  fullTranslationPages.forEach(name => console.log(`   - ${name}`));
}

main();
