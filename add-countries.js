const fs = require('fs');

// Lire le fichier
let content = fs.readFileSync('src/data/casinos.ts', 'utf8');

// Remplacer tous les patterns qui se terminent par rating: X.X suivi de }, ou }
// En ajoutant availableCountries: ['FR'] avant la fermeture
content = content.replace(/(\s+rating: [0-9.]+)(\r?\n\s+\})/g, (match, rating, closing) => {
  // Vérifier si availableCountries existe déjà
  if (match.includes('availableCountries')) {
    return match;
  }
  // Ajouter availableCountries après rating
  return rating + ',\n    availableCountries: [\'FR\']' + closing;
});

// Écrire le fichier
fs.writeFileSync('src/data/casinos.ts', content, 'utf8');

console.log('✅ availableCountries: [\'FR\'] ajouté à tous les casinos !');
