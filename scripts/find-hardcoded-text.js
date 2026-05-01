const fs = require('fs');
const path = require('path');

// Patterns de textes français hardcodés à rechercher
const hardcodedPatterns = [
  /title=["']([^"']*🔥[^"']*|Avis.*2026[^"']*|Notre Test Complet[^"']*)/i,
  /description=["']([^"']*🏆[^"']*|Test complet[^"']*|Découvrez[^"']*)/i,
  /Jouer Maintenant/i,
  /Jouer[^a-zA-Z]/i,
  /Dépôt minimum/i,
  /Conditions de mise/i,
  /Retraits.*24-48h/i,
  /Méthodes de Paiement/i,
  /Comment S'inscrire/i,
  /FAQ.*Questions Fréquentes/i,
  /Avantages et Inconvénients/i,
  /Points Forts/i,
  /À Propos de/i,
  /Bonus de Bienvenue/i,
  /Cashback/i,
  /Récompenses/i,
  /Free Spins/i,
  /Tours Gratuits/i
];

// Fonction pour vérifier si un fichier contient du texte hardcodé
function checkHardcodedText(filePath, relativePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  // Vérifier SEOHead hardcodé
  if (content.includes('<SEOHead') && !content.includes("title={t(") && !content.includes("title={tBlog(")) {
    const seoMatch = content.match(/<SEOHead[^>]*title=["']([^"']+)["']/);
    if (seoMatch && !seoMatch[1].includes('{t(') && !seoMatch[1].includes('{tBlog(')) {
      issues.push({
        type: 'SEO',
        line: 'SEOHead title',
        text: seoMatch[1].substring(0, 80) + '...'
      });
    }
  }
  
  // Vérifier h1/h2 hardcodés
  const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  if (h1Match && !h1Match[1].includes('{t(') && !h1Match[1].includes('{tBlog(')) {
    if (h1Match[1].includes('Avis') || h1Match[1].includes('2026') || h1Match[1].includes('Test Complet')) {
      issues.push({
        type: 'H1',
        line: 'H1 title',
        text: h1Match[1].substring(0, 80) + '...'
      });
    }
  }
  
  // Vérifier boutons hardcodés
  if (content.includes('Jouer Maintenant') || (content.includes('>Jouer<') && !content.includes('{t('))) {
    issues.push({
      type: 'Button',
      line: 'Button text',
      text: 'Jouer Maintenant / Jouer'
    });
  }
  
  // Vérifier sections communes hardcodées
  if (content.includes('Dépôt minimum') && !content.includes('{t(')) {
    issues.push({
      type: 'Content',
      line: 'Dépôt minimum',
      text: 'Textes hardcodés dans les offres'
    });
  }
  
  if (content.includes('Conditions de mise') && !content.includes('{t(')) {
    issues.push({
      type: 'Content',
      line: 'Conditions de mise',
      text: 'Textes hardcodés dans les offres'
    });
  }
  
  if (content.includes('Méthodes de Paiement Acceptées') && !content.includes('{t(')) {
    issues.push({
      type: 'Content',
      line: 'Méthodes de Paiement',
      text: 'Section hardcodée'
    });
  }
  
  if (content.includes("Comment S'inscrire") && !content.includes('{t(')) {
    issues.push({
      type: 'Content',
      line: "Comment S'inscrire",
      text: 'Section hardcodée'
    });
  }
  
  if (content.includes('FAQ') && content.includes('Questions Fréquentes') && !content.includes('{t(')) {
    issues.push({
      type: 'Content',
      line: 'FAQ',
      text: 'Section FAQ hardcodée'
    });
  }
  
  return issues;
}

// Fonction principale
function main() {
  const basePath = path.join(__dirname, '..', 'app', '[locale]');
  const results = {
    casino: {},
    blog: {}
  };
  
  console.log('🔍 Recherche de textes hardcodés...\n');
  
  // Vérifier les pages de casino
  const casinoDirs = fs.readdirSync(basePath, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.includes('-') && d.name !== 'blog' && d.name !== 'about' && d.name !== 'depot' && d.name !== 'install' && !d.name.includes('.'))
    .map(d => d.name);
  
  casinoDirs.forEach(casinoName => {
    const pagePath = path.join(basePath, casinoName, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const issues = checkHardcodedText(pagePath, `app/[locale]/${casinoName}/page.tsx`);
      if (issues.length > 0) {
        results.casino[casinoName] = issues;
      }
    }
  });
  
  // Vérifier les pages d'avis blog
  const blogPath = path.join(basePath, 'blog');
  if (fs.existsSync(blogPath)) {
    const blogDirs = fs.readdirSync(blogPath, { withFileTypes: true })
      .filter(d => d.isDirectory() && d.name.startsWith('avis-'))
      .map(d => d.name);
    
    blogDirs.forEach(avisName => {
      const pagePath = path.join(blogPath, avisName, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const issues = checkHardcodedText(pagePath, `app/[locale]/blog/${avisName}/page.tsx`);
        if (issues.length > 0) {
          results.blog[avisName] = issues;
        }
      }
    });
  }
  
  // Afficher les résultats
  console.log('📊 RÉSULTATS DE L\'AUDIT\n');
  console.log('='.repeat(60));
  
  const casinoCount = Object.keys(results.casino).length;
  const blogCount = Object.keys(results.blog).length;
  const totalIssues = Object.values(results.casino).flat().length + Object.values(results.blog).flat().length;
  
  console.log(`\n📁 Pages de Casino avec textes hardcodés: ${casinoCount}`);
  if (casinoCount > 0) {
    Object.entries(results.casino).forEach(([name, issues]) => {
      console.log(`\n  ⚠️  ${name}:`);
      issues.forEach(issue => {
        console.log(`     - ${issue.type}: ${issue.text}`);
      });
    });
  }
  
  console.log(`\n📁 Pages d'Avis Blog avec textes hardcodés: ${blogCount}`);
  if (blogCount > 0) {
    Object.entries(results.blog).forEach(([name, issues]) => {
      console.log(`\n  ⚠️  ${name}:`);
      issues.forEach(issue => {
        console.log(`     - ${issue.type}: ${issue.text}`);
      });
    });
  }
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`\n📈 RÉSUMÉ:`);
  console.log(`   - Total pages casino avec problèmes: ${casinoCount}`);
  console.log(`   - Total pages blog avec problèmes: ${blogCount}`);
  console.log(`   - Total problèmes détectés: ${totalIssues}`);
  
  if (totalIssues === 0) {
    console.log(`\n✅ Aucun texte hardcodé critique détecté !`);
  } else {
    console.log(`\n⚠️  Des textes hardcodés restent à traduire.`);
  }
}

main();
