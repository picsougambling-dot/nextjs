const fs = require('fs');
const path = require('path');

// Liste de tous les dossiers de casino
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

// Pages avec traductions complètes (déjà corrigées)
const fullTranslationPages = ['magicalspin', 'madcasino', 'machance', 'luckytreasure'];

function fixSEOHardcoded(filePath, casinoName) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Vérifier si SEOHead a des attributs hardcodés (title="...", description="...")
  const seoHeadHardcodedRegex = /<SEOHead\s+[^>]*title=["']([^"']+)["']\s+[^>]*description=["']([^"']+)["']/;
  const match = content.match(seoHeadHardcodedRegex);
  
  if (!match) {
    return false; // Pas de SEO hardcodé trouvé
  }

  // Vérifier si useTranslations existe déjà
  if (!content.includes("useTranslations('CasinoPages")) {
    // Ajouter les imports
    if (!content.includes("from 'next-intl'")) {
      const importMatch = content.match(/(import.*from ['"]@\/.*['"];?\n)/);
      if (importMatch) {
        const lastImport = importMatch[importMatch.length - 1];
        const lastImportIndex = content.lastIndexOf(lastImport);
        content = content.slice(0, lastImportIndex + lastImport.length) +
          "import { useLocale, useTranslations } from 'next-intl';\n" +
          content.slice(lastImportIndex + lastImport.length);
        modified = true;
      }
    } else {
      // Mettre à jour l'import existant
      if (!content.includes("useLocale, useTranslations")) {
        content = content.replace(
          /import\s*\{([^}]*)\}\s*from\s*['"]next-intl['"]/,
          (match, imports) => {
            if (!imports.includes('useLocale')) {
              return `import { useLocale${imports ? ', ' + imports.trim() : ''} } from 'next-intl'`;
            }
            if (!imports.includes('useTranslations')) {
              return `import { ${imports.trim()}, useTranslations } from 'next-intl'`;
            }
            return match;
          }
        );
        modified = true;
      }
    }

    // Ajouter useLocale et useTranslations dans le composant
    const componentMatch = content.match(/export default function (\w+)\(\) \{/);
    if (componentMatch) {
      const componentName = componentMatch[1];
      const componentStart = content.indexOf(`export default function ${componentName}() {`);
      const firstLine = content.indexOf('\n', componentStart) + 1;
      
      if (!content.includes(`const t = useTranslations('CasinoPages.`)) {
        const localeVar = content.includes('const locale') ? '' : "  const locale = useLocale();\n";
        const translationVar = `  const t = useTranslations('CasinoPages.${casinoName}');\n`;
        
        const refMatch = content.match(/const \w+Ref = useRef/);
        if (refMatch) {
          const refEnd = content.indexOf('\n', content.indexOf(refMatch[0]) + refMatch[0].length);
          content = content.slice(0, refEnd + 1) + localeVar + translationVar + content.slice(refEnd + 1);
        } else {
          content = content.slice(0, firstLine) + localeVar + translationVar + content.slice(firstLine);
        }
        modified = true;
      }
    }
  }

  // Vérifier la structure des traductions dans fr.json
  const frMessages = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'messages', 'fr.json'), 'utf8'));
  const hasFullSeo = frMessages.CasinoPages?.[casinoName]?.seo?.title;
  const hasSimpleSeo = frMessages.CasinoPages?.[casinoName]?.seoTitle;

  // Remplacer SEOHead hardcodé
  if (hasFullSeo) {
    // Structure complète avec seo.title, seo.description, etc.
    content = content.replace(
      /<SEOHead\s+title=["']([^"']+)["']\s+description=["']([^"']+)["']\s+keywords=["']([^"']+)["']\s+canonical=["']([^"']+)["']\s+ogTitle=["']([^"']+)["']\s+ogDescription=["']([^"']+)["']\s+ogImage=["']([^"']+)["']\s+twitterTitle=["']([^"']+)["']\s+twitterDescription=["']([^"']+)["']/,
      `<SEOHead
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical={\`https://gigabonus.win/\${locale}/${casinoName}\`}
        ogTitle={t('seo.ogTitle')}
        ogDescription={t('seo.ogDescription')}
        ogImage="https://gigabonus.win/images/${casinoName}.webp"
        twitterTitle={t('seo.twitterTitle')}
        twitterDescription={t('seo.twitterDescription')}`
    );
    modified = true;
  } else if (hasSimpleSeo) {
    // Structure simple avec seoTitle, seoDescription, etc.
    content = content.replace(
      /<SEOHead\s+title=["']([^"']+)["']\s+description=["']([^"']+)["']\s+keywords=["']([^"']+)["']\s+canonical=["']([^"']+)["']\s+ogTitle=["']([^"']+)["']\s+ogDescription=["']([^"']+)["']\s+ogImage=["']([^"']+)["']\s+twitterTitle=["']([^"']+)["']\s+twitterDescription=["']([^"']+)["']/,
      `<SEOHead
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords={t('seoKeywords')}
        canonical={\`https://gigabonus.win/\${locale}/${casinoName}\`}
        ogTitle={t('ogTitle')}
        ogDescription={t('ogDescription')}
        ogImage="https://gigabonus.win/images/${casinoName}.webp"
        twitterTitle={t('twitterTitle')}
        twitterDescription={t('twitterDescription')}`
    );
    modified = true;
  }

  // Remplacer aussi les variantes sans tous les attributs
  content = content.replace(
    /<SEOHead\s+title=["']([^"']+)["']\s+description=["']([^"']+)["']\s+keywords=["']([^"']+)["']\s+canonical=["']([^"']+)["']/,
    (match) => {
      if (hasFullSeo) {
        return `<SEOHead
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        canonical={\`https://gigabonus.win/\${locale}/${casinoName}\`}`;
      } else if (hasSimpleSeo) {
        return `<SEOHead
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords={t('seoKeywords')}
        canonical={\`https://gigabonus.win/\${locale}/${casinoName}\`}`;
      }
      return match;
    }
  );

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
}

// Fonction principale
function main() {
  console.log('🔧 Correction des SEO hardcodés dans les pages de casino...\n');
  
  let fixedCount = 0;
  let skippedCount = 0;

  casinoDirs.forEach(casinoName => {
    if (fullTranslationPages.includes(casinoName)) {
      console.log(`⏭️  ${casinoName} - Déjà corrigé (traduction complète)`);
      skippedCount++;
      return;
    }

    const pagePath = path.join(__dirname, '..', 'app', '[locale]', casinoName, 'page.tsx');
    
    if (!fs.existsSync(pagePath)) {
      console.log(`⚠️  ${casinoName} - Fichier non trouvé`);
      return;
    }

    if (fixSEOHardcoded(pagePath, casinoName)) {
      console.log(`✅ ${casinoName} - SEO corrigé`);
      fixedCount++;
    } else {
      console.log(`⏭️  ${casinoName} - Pas de SEO hardcodé ou déjà corrigé`);
      skippedCount++;
    }
  });

  console.log(`\n📊 Résumé:`);
  console.log(`   - Pages corrigées: ${fixedCount}`);
  console.log(`   - Pages ignorées: ${skippedCount}`);
}

main();
