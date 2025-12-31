const fs = require('fs');
const path = require('path');

// Trouver toutes les pages d'avis
function findAvisPages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      if (file.startsWith('avis-') && fs.existsSync(path.join(filePath, 'page.tsx'))) {
        results.push(path.join(filePath, 'page.tsx'));
      } else {
        results = results.concat(findAvisPages(filePath));
      }
    }
  });
  
  return results;
}

const avisPages = findAvisPages('app/[locale]/blog');

console.log(`🔧 Correction des erreurs de syntaxe dans ${avisPages.length} pages...\n`);

avisPages.forEach((filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 1. Corriger les balises <a> avec >> au lieu de >
  if (content.includes('">>')) {
    content = content.replace(/(")>>/g, '$1>');
    modified = true;
    console.log(`✅ Corrigé >> dans ${path.basename(path.dirname(filePath))}`);
  }

  // 2. Supprimer les attributs disabled en double
  if (content.includes('disabled={!isAvailableInCountry} disabled={!isAvailableInCountry}')) {
    content = content.replace(
      /disabled=\{!isAvailableInCountry\}\s+disabled=\{!isAvailableInCountry\}/g,
      'disabled={!isAvailableInCountry}'
    );
    modified = true;
    console.log(`✅ Corrigé disabled en double dans ${path.basename(path.dirname(filePath))}`);
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log(`\n✅ Correction terminée !`);

