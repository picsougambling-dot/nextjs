const fs = require('fs');
const path = require('path');

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

const fullTranslationPages = ['magicalspin', 'madcasino', 'machance', 'luckytreasure'];

function fixH1(filePath, casinoName) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Vérifier si le H1 est déjà traduit
  if (content.includes("{t('hero.title')}") || content.includes("{tBlog('seoTitle')}")) {
    return false; // Déjà traduit
  }

  // Chercher les H1 hardcodés contenant "Avis", "2026", "Test Complet", etc.
  const h1Regex = /<h1[^>]*>([^<]+(?:Avis|2026|Test Complet|Notre Test)[^<]*)<\/h1>/;
  const h1Match = content.match(h1Regex);
  
  if (!h1Match) {
    return false; // Pas de H1 hardcodé trouvé
  }

  // Vérifier si useTranslations existe pour CasinoPages
  if (!content.includes("useTranslations('CasinoPages")) {
    // Ajouter les imports si nécessaire
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

  // Vérifier si hero.title existe dans les traductions
  const frMessages = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'messages', 'fr.json'), 'utf8'));
  const hasHeroTitle = frMessages.CasinoPages?.[casinoName]?.hero?.title;

  if (hasHeroTitle) {
    // Remplacer le H1 hardcodé par {t('hero.title')}
    content = content.replace(
      /<h1[^>]*>([^<]+(?:Avis|2026|Test Complet|Notre Test)[^<]*)<\/h1>/,
      `<h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                {t('hero.title')}
              </h1>`
    );
    modified = true;
  } else {
    // Si hero.title n'existe pas, on ne peut pas le remplacer automatiquement
    // On laisse tel quel pour l'instant
    console.log(`   ⚠️  ${casinoName} - hero.title non trouvé dans les traductions`);
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
}

function main() {
  console.log('🔧 Correction des H1 hardcodés dans les pages de casino...\n');
  
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

    if (fixH1(pagePath, casinoName)) {
      console.log(`✅ ${casinoName} - H1 corrigé`);
      fixedCount++;
    } else {
      console.log(`⏭️  ${casinoName} - Pas de H1 hardcodé ou déjà corrigé`);
      skippedCount++;
    }
  });

  console.log(`\n📊 Résumé:`);
  console.log(`   - Pages corrigées: ${fixedCount}`);
  console.log(`   - Pages ignorées: ${skippedCount}`);
}

main();
