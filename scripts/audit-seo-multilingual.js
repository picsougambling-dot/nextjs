const fs = require('fs');
const path = require('path');

const locales = ['en', 'fr', 'de', 'es', 'ru', 'it', 'br', 'pt', 'nl', 'lv', 'fi'];
const baseUrl = 'https://gigabonus.win';

// Configuration des pages à auditer
const pagesToAudit = {
  home: {
    path: '/',
    translationNamespace: 'SEO.home',
    pathnamesKey: '/',
  },
  about: {
    path: '/about',
    translationNamespace: 'SEO.about',
    pathnamesKey: '/about',
  },
  depot: {
    path: '/depot',
    translationNamespace: 'DepotPages.main',
    pathnamesKey: '/depot',
  },
  // GUIDES
  astucesCasino: {
    path: '/astuces-casino',
    translationNamespace: 'GuidePages.astucesCasino',
    pathnamesKey: '/astuces-casino',
  },
  topCasinosCrypto: {
    path: '/top-casinos-crypto',
    translationNamespace: 'GuidePages.topCasinosCrypto',
    pathnamesKey: '/top-casinos-crypto',
  },
  casinosSansKyc: {
    path: '/casinos-sans-kyc',
    translationNamespace: 'GuidePages.casinosSansKyc',
    pathnamesKey: '/casinos-sans-kyc',
  },
  topSlots2025: {
    path: '/top-slots-2025',
    translationNamespace: 'GuidePages.topSlots2025',
    pathnamesKey: '/top-slots-2025',
  },
  meilleursBookmakers: {
    path: '/meilleurs-bookmakers',
    translationNamespace: 'GuidePages.meilleursBookmakers',
    pathnamesKey: '/meilleurs-bookmakers',
  },
  calculateurRoulette: {
    path: '/calculateur-roulette',
    translationNamespace: 'GuidePages.calculateurRoulette',
    pathnamesKey: '/calculateur-roulette',
  },
  calculateurCotesSportives: {
    path: '/calculateur-cotes-sportives',
    translationNamespace: 'GuidePages.calculateurCotesSportives',
    pathnamesKey: '/calculateur-cotes-sportives',
  },
  install: {
    path: '/install',
    translationNamespace: 'GuidePages.install',
    pathnamesKey: '/install',
  },
  // BONUS
  bonusCashback: {
    path: '/bonus-cashback',
    translationNamespace: 'GuidePages.bonusCashback',
    pathnamesKey: '/bonus-cashback',
  },
  bonusSansWager: {
    path: '/bonus-sans-wager',
    translationNamespace: 'GuidePages.bonusSansWager',
    pathnamesKey: '/bonus-sans-wager',
  },
};

// Charger pathnames.ts
const pathnamesPath = path.join(__dirname, '..', 'src', 'i18n', 'pathnames.ts');
let pathnames = {};
try {
  const pathnamesContent = fs.readFileSync(pathnamesPath, 'utf8');
  // Extraire l'objet pathnames (simplifié, on va parser le JSON des traductions)
  // Pour l'instant, on va utiliser les traductions pour vérifier
} catch (error) {
  console.warn('⚠️  Impossible de charger pathnames.ts, utilisation des traductions uniquement');
}

// Fonction pour obtenir une valeur dans un objet imbriqué
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Fonction pour vérifier la longueur d'un texte
function checkLength(text, min, max, fieldName) {
  if (!text) return { valid: false, issue: 'missing' };
  const length = text.length;
  if (length < min) return { valid: false, issue: 'too_short', length, min, max };
  if (length > max) return { valid: false, issue: 'too_long', length, min, max };
  return { valid: true, length };
}

// Fonction pour vérifier une URL
function checkUrl(url, fieldName) {
  if (!url) return { valid: false, issue: 'missing' };
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return { valid: false, issue: 'invalid_format', value: url };
  }
  return { valid: true };
}

// Fonction pour obtenir le pathname traduit depuis pathnames
function getTranslatedPathname(originalPath, locale) {
  // Si c'est la racine ou blog, pas de traduction
  if (originalPath === '/' || originalPath.startsWith('/blog')) {
    return originalPath;
  }
  
  // Charger pathnames depuis les traductions (on va utiliser une approche simplifiée)
  // Pour l'instant, on retourne le path original
  return originalPath;
}

// Fonction pour vérifier une page dans une langue
function auditPage(pageConfig, locale, translations) {
  const issues = [];
  const namespace = pageConfig.translationNamespace;
  const pageData = getNestedValue(translations, namespace);
  
  if (!pageData) {
    issues.push({
      field: 'namespace',
      issue: 'missing_namespace',
      message: `Namespace ${namespace} introuvable dans ${locale}.json`,
    });
    return { locale, issues, valid: false };
  }
  
  // Vérifier title
  const title = pageData.seoTitle || pageData.title;
  if (!title) {
    issues.push({ field: 'title', issue: 'missing' });
  } else {
    const titleCheck = checkLength(title, 50, 60, 'title');
    if (!titleCheck.valid) {
      issues.push({ field: 'title', ...titleCheck, value: title });
    }
  }
  
  // Vérifier description
  const description = pageData.seoDescription || pageData.description;
  if (!description) {
    issues.push({ field: 'description', issue: 'missing' });
  } else {
    const descCheck = checkLength(description, 150, 160, 'description');
    if (!descCheck.valid) {
      issues.push({ field: 'description', ...descCheck, value: description });
    }
  }
  
  // Vérifier keywords
  const keywords = pageData.seoKeywords || pageData.keywords;
  if (!keywords) {
    issues.push({ field: 'keywords', issue: 'missing' });
  } else if (typeof keywords === 'string' && keywords.trim().length === 0) {
    issues.push({ field: 'keywords', issue: 'empty' });
  }
  
  // Vérifier ogTitle
  const ogTitle = pageData.ogTitle;
  if (!ogTitle) {
    issues.push({ field: 'ogTitle', issue: 'missing' });
  } else {
    const ogTitleCheck = checkLength(ogTitle, 50, 60, 'ogTitle');
    if (!ogTitleCheck.valid) {
      issues.push({ field: 'ogTitle', ...ogTitleCheck, value: ogTitle });
    }
  }
  
  // Vérifier ogDescription
  const ogDescription = pageData.ogDescription;
  if (!ogDescription) {
    issues.push({ field: 'ogDescription', issue: 'missing' });
  } else {
    const ogDescCheck = checkLength(ogDescription, 150, 160, 'ogDescription');
    if (!ogDescCheck.valid) {
      issues.push({ field: 'ogDescription', ...ogDescCheck, value: ogDescription });
    }
  }
  
  // Vérifier ogImage (doit être présent dans le code, pas dans les traductions)
  // On vérifie juste que c'est référencé dans le code
  
  // Vérifier twitterTitle
  const twitterTitle = pageData.twitterTitle;
  if (!twitterTitle) {
    issues.push({ field: 'twitterTitle', issue: 'missing' });
  } else {
    const twitterTitleCheck = checkLength(twitterTitle, 50, 60, 'twitterTitle');
    if (!twitterTitleCheck.valid) {
      issues.push({ field: 'twitterTitle', ...twitterTitleCheck, value: twitterTitle });
    }
  }
  
  // Vérifier twitterDescription
  const twitterDescription = pageData.twitterDescription;
  if (!twitterDescription) {
    issues.push({ field: 'twitterDescription', issue: 'missing' });
  } else {
    const twitterDescCheck = checkLength(twitterDescription, 150, 160, 'twitterDescription');
    if (!twitterDescCheck.valid) {
      issues.push({ field: 'twitterDescription', ...twitterDescCheck, value: twitterDescription });
    }
  }
  
  // Vérifier canonical (doit être généré via getTranslatedCanonical)
  // On vérifie que le pathname existe dans pathnames.ts pour cette page
  
  // Vérifier hreflang (doit être généré pour toutes les 11 langues + x-default)
  // Cette vérification se fait au niveau du code, pas des traductions
  
  return {
    locale,
    issues,
    valid: issues.length === 0,
    hasData: !!pageData,
  };
}

// Fonction principale
function auditAllPages() {
  const report = {
    generatedAt: new Date().toISOString(),
    totalPages: Object.keys(pagesToAudit).length,
    totalLocales: locales.length,
    pages: {},
    summary: {
      totalIssues: 0,
      pagesWithIssues: 0,
      localesWithIssues: {},
      issuesByType: {},
    },
  };
  
  // Charger toutes les traductions
  const allTranslations = {};
  for (const locale of locales) {
    const filePath = path.join(__dirname, '..', 'messages', `${locale}.json`);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      allTranslations[locale] = JSON.parse(content);
    } catch (error) {
      console.error(`❌ Erreur lors du chargement de ${locale}.json:`, error.message);
      report.summary.localesWithIssues[locale] = `Erreur de chargement: ${error.message}`;
    }
  }
  
  // Auditer chaque page
  for (const [pageKey, pageConfig] of Object.entries(pagesToAudit)) {
    report.pages[pageKey] = {
      path: pageConfig.path,
      translationNamespace: pageConfig.translationNamespace,
      locales: {},
    };
    
    let pageHasIssues = false;
    
    for (const locale of locales) {
      const translations = allTranslations[locale];
      if (!translations) {
        report.pages[pageKey].locales[locale] = {
          valid: false,
          issues: [{ field: 'translations', issue: 'file_not_found' }],
        };
        continue;
      }
      
      const auditResult = auditPage(pageConfig, locale, translations);
      report.pages[pageKey].locales[locale] = auditResult;
      
      if (!auditResult.valid) {
        pageHasIssues = true;
        report.summary.totalIssues += auditResult.issues.length;
        
        // Compter les issues par type
        auditResult.issues.forEach(issue => {
          const issueKey = `${issue.field}_${issue.issue}`;
          report.summary.issuesByType[issueKey] = (report.summary.issuesByType[issueKey] || 0) + 1;
        });
        
        // Compter les locales avec problèmes
        if (!report.summary.localesWithIssues[locale]) {
          report.summary.localesWithIssues[locale] = 0;
        }
        report.summary.localesWithIssues[locale] += auditResult.issues.length;
      }
    }
    
    if (pageHasIssues) {
      report.summary.pagesWithIssues++;
    }
  }
  
  return report;
}

// Exécuter l'audit
console.log('🔍 Démarrage de l\'audit SEO multilingue...\n');

const report = auditAllPages();

// Sauvegarder le rapport
const reportPath = path.join(__dirname, '..', 'SEO_AUDIT_REPORT.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');

// Afficher le résumé
console.log('📊 RÉSUMÉ DE L\'AUDIT SEO\n');
console.log(`Total de pages auditées: ${report.totalPages}`);
console.log(`Total de langues: ${report.totalLocales}`);
console.log(`Pages avec problèmes: ${report.summary.pagesWithIssues}/${report.totalPages}`);
console.log(`Total d'issues trouvées: ${report.summary.totalIssues}\n`);

if (report.summary.totalIssues > 0) {
  console.log('⚠️  ISSUES PAR TYPE:');
  Object.entries(report.summary.issuesByType)
    .sort((a, b) => b[1] - a[1])
    .forEach(([type, count]) => {
      console.log(`  - ${type}: ${count}`);
    });
  
  console.log('\n🌍 LOCALES AVEC PROBLÈMES:');
  Object.entries(report.summary.localesWithIssues)
    .sort((a, b) => b[1] - a[1])
    .forEach(([locale, count]) => {
      console.log(`  - ${locale}: ${count} issues`);
    });
  
  console.log('\n📄 DÉTAILS PAR PAGE:');
  for (const [pageKey, pageData] of Object.entries(report.pages)) {
    const localesWithIssues = Object.entries(pageData.locales)
      .filter(([_, data]) => !data.valid)
      .map(([locale, _]) => locale);
    
    if (localesWithIssues.length > 0) {
      console.log(`\n  ${pageKey} (${pageData.path}):`);
      localesWithIssues.forEach(locale => {
        const localeData = pageData.locales[locale];
        console.log(`    - ${locale}: ${localeData.issues.length} issues`);
        localeData.issues.forEach(issue => {
          console.log(`      • ${issue.field}: ${issue.issue}${issue.value ? ` (${issue.value.substring(0, 50)}...)` : ''}`);
        });
      });
    }
  }
} else {
  console.log('✅ Aucun problème détecté ! Toutes les pages sont conformes.');
}

console.log(`\n📄 Rapport complet sauvegardé dans: ${reportPath}`);

