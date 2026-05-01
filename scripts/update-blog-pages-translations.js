const fs = require('fs');
const path = require('path');

// Fonction pour obtenir le nom de la clé BlogPages à partir du nom de fichier
function getBlogPageKey(filename) {
  // Ex: avis-hotloot-2025 -> avis-hotloot-2025
  // Ex: avis-hotloot-2026 -> avis-hotloot-2026
  return filename.replace('page.tsx', '').replace(/\/$/, '');
}

// Fonction pour mettre à jour une page d'avis
function updateBlogPage(filePath, pageKey) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Vérifier si déjà mis à jour
  if (content.includes(`useTranslations('BlogPages.`)) {
    console.log(`✓ ${pageKey} - Déjà mis à jour`);
    return;
  }

  // Ajouter useTranslations pour BlogPages si pas présent
  if (!content.includes("useTranslations('BlogPages")) {
    // Trouver où ajouter l'import
    if (!content.includes("useLocale, useTranslations")) {
      if (content.includes("from 'next-intl'")) {
        content = content.replace(
          /import.*useTranslations.*from ['"]next-intl['"]/,
          "import { useLocale, useTranslations } from 'next-intl'"
        );
      } else {
        // Ajouter l'import
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

    // Ajouter useLocale si pas présent
    if (!content.includes('const locale = useLocale()')) {
      const componentMatch = content.match(/export default function (\w+)\(\) \{/);
      if (componentMatch) {
        const componentStart = content.indexOf(`export default function ${componentMatch[1]}() {`);
        const firstLine = content.indexOf('\n', componentStart) + 1;
        
        if (!content.includes('const locale = useLocale()')) {
          content = content.slice(0, firstLine) + 
            "  const locale = useLocale();\n" +
            content.slice(firstLine);
        }
      }
    }

    // Ajouter useTranslations pour BlogPages
    const localeLine = content.indexOf('const locale = useLocale()');
    if (localeLine !== -1) {
      const localeLineEnd = content.indexOf('\n', localeLine);
      const blogPagesTranslation = `  const tBlog = useTranslations('BlogPages.${pageKey}');\n`;
      
      // Vérifier si déjà présent
      if (!content.includes(`useTranslations('BlogPages.${pageKey}')`)) {
        content = content.slice(0, localeLineEnd + 1) + blogPagesTranslation + content.slice(localeLineEnd + 1);
      }
    }
  }

  // Remplacer SEOHead hardcodé par traductions
  // Pattern 1: title="..." description="..."
  const seoHeadPattern1 = /<SEOHead\s+locale=\{locale\}\s+title=["']([^"']+)["']\s+description=["']([^"']+)["']\s+keywords=["']([^"']+)["']/;
  if (seoHeadPattern1.test(content)) {
    content = content.replace(
      seoHeadPattern1,
      `<SEOHead
        locale={locale}
        title={tBlog('seoTitle')}
        description={tBlog('seoDescription')}
        keywords={tBlog('seoKeywords') || "${content.match(seoHeadPattern1)[3]}"}`
    );
    
    // Remplacer ogTitle et ogDescription si présents
    content = content.replace(
      /ogTitle=["']([^"']+)["']/g,
      "ogTitle={tBlog('seoTitle')}"
    );
    content = content.replace(
      /ogDescription=["']([^"']+)["']/g,
      "ogDescription={tBlog('seoDescription')}"
    );
    content = content.replace(
      /twitterTitle=["']([^"']+)["']/g,
      "twitterTitle={tBlog('seoTitle')}"
    );
    content = content.replace(
      /twitterDescription=["']([^"']+)["']/g,
      "twitterDescription={tBlog('seoDescription')}"
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ ${pageKey} - Mis à jour avec traductions BlogPages`);
}

// Fonction principale
function main() {
  const blogPath = path.join(__dirname, '..', 'app', '[locale]', 'blog');
  
  console.log('🚀 Mise à jour des pages d\'avis blog avec traductions...\n');
  
  // Lire tous les fichiers dans le dossier blog
  const files = fs.readdirSync(blogPath, { withFileTypes: true });
  
  files.forEach(file => {
    if (file.isDirectory() && file.name.startsWith('avis-')) {
      const pagePath = path.join(blogPath, file.name, 'page.tsx');
      
      if (fs.existsSync(pagePath)) {
        try {
          updateBlogPage(pagePath, file.name);
        } catch (error) {
          console.error(`✗ ${file.name} - Erreur:`, error.message);
        }
      }
    }
  });

  console.log('\n✅ Terminé !');
}

main();
