const fs = require('fs');
const path = require('path');

function findBlogAvisDirs() {
  const blogPath = path.join(__dirname, '..', 'app', '[locale]', 'blog');
  if (!fs.existsSync(blogPath)) {
    return [];
  }

  return fs.readdirSync(blogPath, { withFileTypes: true })
    .filter(d => d.isDirectory() && d.name.startsWith('avis-'))
    .map(d => d.name);
}

function fixBlogSections(filePath, avisName) {
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
        const tBlogMatch = content.match(/const tBlog = useTranslations/);
        const userCountryMatch = content.match(/const \{ countryCode: userCountry \} = useUserCountry\(\)/);
        
        let insertPos = firstLine;
        if (tBlogMatch) {
          const tBlogEnd = content.indexOf('\n', content.indexOf(tBlogMatch[0]) + tBlogMatch[0].length);
          insertPos = tBlogEnd + 1;
        } else if (userCountryMatch) {
          const userCountryEnd = content.indexOf('\n', content.indexOf(userCountryMatch[0]) + userCountryMatch[0].length);
          insertPos = userCountryEnd + 1;
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

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
}

function main() {
  console.log('🔧 Correction des sections communes dans les pages d\'avis blog...\n');
  
  const avisDirs = findBlogAvisDirs();
  let fixedCount = 0;
  let skippedCount = 0;

  avisDirs.forEach(avisName => {
    const pagePath = path.join(__dirname, '..', 'app', '[locale]', 'blog', avisName, 'page.tsx');
    
    if (!fs.existsSync(pagePath)) {
      console.log(`⚠️  ${avisName} - Fichier non trouvé`);
      return;
    }

    if (fixBlogSections(pagePath, avisName)) {
      console.log(`✅ ${avisName} - Sections corrigées`);
      fixedCount++;
    } else {
      console.log(`⏭️  ${avisName} - Pas de sections hardcodées ou déjà corrigé`);
      skippedCount++;
    }
  });

  console.log(`\n📊 Résumé:`);
  console.log(`   - Pages corrigées: ${fixedCount}`);
  console.log(`   - Pages ignorées: ${skippedCount}`);
}

main();
