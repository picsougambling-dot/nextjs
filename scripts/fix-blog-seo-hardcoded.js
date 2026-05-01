const fs = require('fs');
const path = require('path');

// Fonction pour trouver tous les dossiers d'avis blog
function findBlogAvisDirs() {
  const blogPath = path.join(__dirname, '..', 'app', '[locale]', 'blog');
  if (!fs.existsSync(blogPath)) {
    return [];
  }

  return fs.readdirSync(blogPath, { withFileTypes: true })
    .filter(d => d.isDirectory() && d.name.startsWith('avis-'))
    .map(d => d.name);
}

function fixBlogSEO(filePath, avisName) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Vérifier si SEOHead a des attributs hardcodés
  const seoHeadHardcodedRegex = /<SEOHead\s+[^>]*title=["']([^"']+)["']\s+[^>]*description=["']([^"']+)["']/;
  const match = content.match(seoHeadHardcodedRegex);
  
  if (!match) {
    return false; // Pas de SEO hardcodé trouvé
  }

  // Extraire le nom du casino et l'année depuis le nom du dossier (avis-{casino}-{year})
  const matchAvis = avisName.match(/avis-([^-]+)-(\d+)/);
  if (!matchAvis) {
    return false;
  }
  const casinoSlug = matchAvis[1];
  const year = matchAvis[2];

  // Vérifier si useTranslations existe déjà
  if (!content.includes("useTranslations('BlogPages")) {
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
      
      if (!content.includes(`const tBlog = useTranslations('BlogPages.`)) {
        const localeVar = content.includes('const locale') ? '' : "  const locale = useLocale();\n";
        const translationVar = `  const tBlog = useTranslations('BlogPages.${avisName}');\n`;
        
        const refMatch = content.match(/const \w+Ref = useRef/);
        const userCountryMatch = content.match(/const \{ countryCode: userCountry \} = useUserCountry\(\)/);
        
        if (refMatch) {
          const refEnd = content.indexOf('\n', content.indexOf(refMatch[0]) + refMatch[0].length);
          content = content.slice(0, refEnd + 1) + localeVar + translationVar + content.slice(refEnd + 1);
        } else if (userCountryMatch) {
          const userCountryEnd = content.indexOf('\n', content.indexOf(userCountryMatch[0]) + userCountryMatch[0].length);
          content = content.slice(0, userCountryEnd + 1) + localeVar + translationVar + content.slice(userCountryEnd + 1);
        } else {
          content = content.slice(0, firstLine) + localeVar + translationVar + content.slice(firstLine);
        }
        modified = true;
      }
    }
  }

  // Vérifier la structure des traductions dans fr.json
  const frMessages = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'messages', 'fr.json'), 'utf8'));
  const hasSeoTitle = frMessages.BlogPages?.[avisName]?.seoTitle;
  const hasSeoDescription = frMessages.BlogPages?.[avisName]?.seoDescription;

  if (!hasSeoTitle || !hasSeoDescription) {
    console.log(`   ⚠️  ${avisName} - Traductions SEO non trouvées`);
    return false;
  }

  // Remplacer SEOHead hardcodé
  content = content.replace(
    /<SEOHead\s+locale=\{locale\}\s+title=["']([^"']+)["']\s+description=["']([^"']+)["']\s+keywords=["']([^"']+)["']\s+canonical=["']([^"']+)["']\s+ogTitle=["']([^"']+)["']\s+ogDescription=["']([^"']+)["']\s+ogImage=["']([^"']+)["']\s+twitterTitle=["']([^"']+)["']\s+twitterDescription=["']([^"']+)["']/,
    `<SEOHead
        locale={locale}
        title={tBlog('seoTitle')}
        description={tBlog('seoDescription')}
        keywords={tBlog('seoKeywords')}
        canonical={\`https://gigabonus.win/\${locale}/blog/${avisName}\`}
        ogTitle={tBlog('ogTitle')}
        ogDescription={tBlog('ogDescription')}
        ogImage="https://gigabonus.win/images/${casinoSlug}.webp"
        twitterTitle={tBlog('twitterTitle')}
        twitterDescription={tBlog('twitterDescription')}`
  );

  // Remplacer aussi les variantes sans tous les attributs
  content = content.replace(
    /<SEOHead\s+locale=\{locale\}\s+title=["']([^"']+)["']\s+description=["']([^"']+)["']\s+keywords=["']([^"']+)["']\s+canonical=["']([^"']+)["']/,
    `<SEOHead
        locale={locale}
        title={tBlog('seoTitle')}
        description={tBlog('seoDescription')}
        keywords={tBlog('seoKeywords')}
        canonical={\`https://gigabonus.win/\${locale}/blog/${avisName}\`}`
  );

  if (modified || content.includes("tBlog('seoTitle')")) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
}

function main() {
  console.log('🔧 Correction des SEO hardcodés dans les pages d\'avis blog...\n');
  
  const avisDirs = findBlogAvisDirs();
  let fixedCount = 0;
  let skippedCount = 0;

  avisDirs.forEach(avisName => {
    const pagePath = path.join(__dirname, '..', 'app', '[locale]', 'blog', avisName, 'page.tsx');
    
    if (!fs.existsSync(pagePath)) {
      console.log(`⚠️  ${avisName} - Fichier non trouvé`);
      return;
    }

    if (fixBlogSEO(pagePath, avisName)) {
      console.log(`✅ ${avisName} - SEO corrigé`);
      fixedCount++;
    } else {
      console.log(`⏭️  ${avisName} - Pas de SEO hardcodé ou déjà corrigé`);
      skippedCount++;
    }
  });

  console.log(`\n📊 Résumé:`);
  console.log(`   - Pages corrigées: ${fixedCount}`);
  console.log(`   - Pages ignorées: ${skippedCount}`);
}

main();
