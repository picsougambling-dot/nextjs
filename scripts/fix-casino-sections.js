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

function fixSections(filePath, casinoName) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Vérifier si tCommon existe déjà
  if (!content.includes("const tCommon = useTranslations('Common')")) {
    // Ajouter l'import si nécessaire
    if (!content.includes("from 'next-intl'")) {
      const importMatch = content.match(/(import.*from ['"]@\/.*['"];?\n)/);
      if (importMatch) {
        const lastImport = importMatch[importMatch.length - 1];
        const lastImportIndex = content.lastIndexOf(lastImport);
        content = content.slice(0, lastImportIndex + lastImport.length) +
          "import { useTranslations } from 'next-intl';\n" +
          content.slice(lastImportIndex + lastImport.length);
        modified = true;
      }
    } else {
      if (!content.includes("useTranslations")) {
        content = content.replace(
          /import\s*\{([^}]*)\}\s*from\s*['"]next-intl['"]/,
          (match, imports) => {
            return `import { ${imports.trim()}, useTranslations } from 'next-intl'`;
          }
        );
        modified = true;
      }
    }

    // Ajouter const tCommon dans le composant
    const componentMatch = content.match(/export default function (\w+)\(\) \{/);
    if (componentMatch) {
      const componentName = componentMatch[1];
      const componentStart = content.indexOf(`export default function ${componentName}() {`);
      const firstLine = content.indexOf('\n', componentStart) + 1;
      
      if (!content.includes("const tCommon = useTranslations('Common')")) {
        const refMatch = content.match(/const \w+Ref = useRef/);
        const localeMatch = content.match(/const locale = useLocale\(\)/);
        const tMatch = content.match(/const t = useTranslations/);
        
        let insertPos = firstLine;
        if (refMatch) {
          const refEnd = content.indexOf('\n', content.indexOf(refMatch[0]) + refMatch[0].length);
          insertPos = refEnd + 1;
        } else if (localeMatch) {
          const localeEnd = content.indexOf('\n', content.indexOf(localeMatch[0]) + localeMatch[0].length);
          insertPos = localeEnd + 1;
        } else if (tMatch) {
          const tEnd = content.indexOf('\n', content.indexOf(tMatch[0]) + tMatch[0].length);
          insertPos = tEnd + 1;
        }
        
        content = content.slice(0, insertPos) + 
          "  const tCommon = useTranslations('Common');\n" +
          content.slice(insertPos);
        modified = true;
      }
    }
  }

  // Remplacer les sections communes
  const replacements = [
    {
      pattern: /Méthodes de Paiement Acceptées/g,
      replacement: "{tCommon('sections.paymentMethods')}"
    },
    {
      pattern: /Comment S'inscrire/g,
      replacement: "{tCommon('sections.howToRegister')}"
    },
    {
      pattern: /FAQ - Questions Fréquentes/g,
      replacement: "{tCommon('sections.faq')}"
    },
    {
      pattern: /Avantages et Inconvénients/g,
      replacement: "{tCommon('sections.prosAndCons')}"
    },
    {
      pattern: /Détail des Offres et Promotions/g,
      replacement: "{tCommon('sections.offersAndPromotions')}"
    },
    {
      pattern: /Méthodes de Retrait et Délais/g,
      replacement: "{tCommon('sections.withdrawalMethods')}"
    },
    {
      pattern: /Catalogue de Jeux/g,
      replacement: "{tCommon('sections.gamesCatalog')}"
    },
    {
      pattern: /Stratégies pour Maximiser Vos Gains/g,
      replacement: "{tCommon('sections.strategies')}"
    },
    {
      pattern: /Sécurité et Légalité/g,
      replacement: "{tCommon('sections.security')}"
    },
    {
      pattern: /Notre Avis : Le Verdict/g,
      replacement: "{tCommon('sections.verdict')}"
    },
    {
      pattern: /Avis de Nos Testeurs/g,
      replacement: "{tCommon('sections.testimonials')}"
    }
  ];

  replacements.forEach(({ pattern, replacement }) => {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      modified = true;
    }
  });

  // Remplacer aussi dans les balises h2, h3
  content = content.replace(
    /<h2[^>]*>Méthodes de Paiement Acceptées<\/h2>/g,
    `<h2 className="text-3xl font-bold text-center text-foreground mb-6">{tCommon('sections.paymentMethods')}</h2>`
  );
  content = content.replace(
    /<h2[^>]*>Comment S'inscrire<\/h2>/g,
    `<h2 className="text-3xl font-bold text-center text-foreground mb-6">{tCommon('sections.howToRegister')}</h2>`
  );
  content = content.replace(
    /<h2[^>]*>FAQ - Questions Fréquentes<\/h2>/g,
    `<h2 className="text-3xl font-bold text-center text-foreground mb-6">{tCommon('sections.faq')}</h2>`
  );
  content = content.replace(
    /<h2[^>]*>Avantages et Inconvénients<\/h2>/g,
    `<h2 className="text-3xl font-bold text-center text-foreground mb-6">{tCommon('sections.prosAndCons')}</h2>`
  );

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
}

function main() {
  console.log('🔧 Correction des sections communes dans les pages de casino...\n');
  
  let fixedCount = 0;
  let skippedCount = 0;

  casinoDirs.forEach(casinoName => {
    const pagePath = path.join(__dirname, '..', 'app', '[locale]', casinoName, 'page.tsx');
    
    if (!fs.existsSync(pagePath)) {
      console.log(`⚠️  ${casinoName} - Fichier non trouvé`);
      return;
    }

    if (fixSections(pagePath, casinoName)) {
      console.log(`✅ ${casinoName} - Sections corrigées`);
      fixedCount++;
    } else {
      console.log(`⏭️  ${casinoName} - Pas de sections hardcodées ou déjà corrigé`);
      skippedCount++;
    }
  });

  console.log(`\n📊 Résumé:`);
  console.log(`   - Pages corrigées: ${fixedCount}`);
  console.log(`   - Pages ignorées: ${skippedCount}`);
}

main();
