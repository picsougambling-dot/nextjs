#!/usr/bin/env node

/**
 * SEO Action Plan Generator
 * Génère un plan d'action consolidé pour corriger les problèmes SEO identifiés
 */

const fs = require('fs');
const path = require('path');

// Lecture du rapport d'audit
const auditReportPath = path.join(__dirname, '../SEO_AUDIT_REPORT.json');
let auditData = {};

if (fs.existsSync(auditReportPath)) {
  const rawData = fs.readFileSync(auditReportPath, 'utf8');
  auditData = JSON.parse(rawData);
}

// Configuration des limites recommandées
const LIMITS = {
  title: { min: 30, max: 60 },
  description: { min: 120, max: 160 },
  ogTitle: { min: 50, max: 95 },
  ogDescription: { min: 120, max: 200 },
  twitterTitle: { min: 40, max: 70 },
  twitterDescription: { min: 120, max: 200 },
};

console.log('\n📋 PLAN D\'ACTION SEO - GigaBonus\n');
console.log('═'.repeat(70));

// 1. RÉSUMÉ DES ISSUES
console.log('\n1️⃣  MÉTADONNÉES (442 ISSUES DÉTECTÉES)\n');
console.log('Stratégie: Tronquer les valeurs trop longues côté rendu (déjà fait)');
console.log('          + Corriger les sources (messages/*.json) au besoin\n');

if (auditData.summary) {
  const issuesByType = auditData.summary.issuesByType || {};
  const issues = Object.entries(issuesByType)
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count);

  issues.forEach(({ type, count }) => {
    console.log(`  • ${type}: ${count} issues`);
  });
}

// 2. TOP PAGES À CORRIGER
console.log('\n2️⃣  PAGES PRIORITAIRES (par nombre d\'issues)\n');

const pageIssueCount = {};
if (auditData.details) {
  Object.entries(auditData.details).forEach(([page, locales]) => {
    let total = 0;
    Object.values(locales).forEach(localeData => {
      if (localeData.issues) {
        total += localeData.issues.length;
      }
    });
    pageIssueCount[page] = total;
  });
}

const topPages = Object.entries(pageIssueCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5);

topPages.forEach(([page, count], idx) => {
  console.log(`  ${idx + 1}. ${page}: ${count} issues`);
});

// 3. ACTIONS RAPIDES
console.log('\n3️⃣  ACTIONS IMMÉDIATES (Sans modifier messages/*.json)\n');

console.log('  ✅ [DONE] Ajouter sanitizeSEOFields() → app/[locale]/layout.tsx');
console.log('  ✅ [DONE] Créer src/lib/seo-utils.ts avec tronquage');
console.log('  ⏳ [TODO] Vérifier hreflang sur app/[locale]/layout.tsx');
console.log('  ⏳ [TODO] Vérifier canonicals (correctement générés? alternates.languages?)');
console.log('  ⏳ [TODO] Valider structured data (Organization, WebSite schemas)');
console.log('  ⏳ [TODO] Vérifier headers Cache-Control dans next.config.js');
console.log('  ⏳ [TODO] Tester sitemap.xml avec Google Rich Results');

// 4. CORRECTIONS TRADUCTIONS
console.log('\n4️⃣  CORRECTIONS TRADUCTIONS (messages/*.json)\n');

console.log('Approche recommandée:');
console.log('  1. Générer un CSV avec suggestions de tronquage');
console.log('  2. Valider manuellement les raccourcissements');
console.log('  3. Appliquer les corrections\n');

console.log('Exemple de raccourcissements:\n');

const examples = {
  'home (en)': {
    ogTitle: 'Online Casino Bonus Comparison 2026 | GigaBonus...',
    suggestion: 'Best Casino Bonus Comparison 2026 | GigaBonus',
  },
  'about (en)': {
    description: 'Discover the GigaBonus team: casino experts since...',
    suggestion: 'GigaBonus team: casino experts since 2019. 500+ casinos reviewed.',
  },
};

Object.entries(examples).forEach(([page, { ogTitle, suggestion, description }]) => {
  console.log(`  📄 ${page}`);
  if (ogTitle) console.log(`     • ogTitle: "${ogTitle}"`);
  if (description) console.log(`     • description: "${description}"`);
  console.log(`     ➜ Suggestion: "${suggestion}"\n`);
});

// 5. CHECKLIST VALIDATION
console.log('\n5️⃣  CHECKLIST DE VALIDATION\n');

const checklist = [
  { task: 'Sitemap XML valide (1012 URLs)', status: '✅' },
  { task: 'Robots.txt générés dynamiquement', status: '✅' },
  { task: 'Métadonnées tronquées au rendu', status: '✅' },
  { task: 'Hreflang correct (11 locales)', status: '⏳' },
  { task: 'Canonicals pour chaque page', status: '⏳' },
  { task: 'Structured Data (JSON-LD)', status: '⏳' },
  { task: 'Headers de cache optimisés', status: '⏳' },
  { task: 'OpenGraph images présentes', status: '✅' },
];

checklist.forEach(({ task, status }) => {
  console.log(`  ${status} ${task}`);
});

// 6. PROCHAINES ÉTAPES
console.log('\n6️⃣  PROCHAINES ÉTAPES\n');

console.log('PHASE 1 (Immédiate - code fixes):');
console.log('  → Vérifier hreflang dans metadata');
console.log('  → Valider canonicals et alternates.languages');
console.log('  → Tester structured data avec Google Rich Results\n');

console.log('PHASE 2 (Traductions):');
console.log('  → Générer CSV avec suggestions de tronquage');
console.log('  → Valider avec équipe linguistique/SEO');
console.log('  → Appliquer corrections dans messages/*.json\n');

console.log('PHASE 3 (Tests):');
console.log('  → Re-run audit: npm run audit-seo-multilingual.js');
console.log('  → Valider sitemap: npm run test:sitemap');
console.log('  → Lancer Ahrefs/SEMrush audit sur le live\n');

console.log('═'.repeat(70));
console.log('\n✨ Rapport généré - Suivez le plan phase par phase.\n');
