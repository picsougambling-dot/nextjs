const fs = require('fs');
const path = require('path');

// Pages à vérifier (sans les pages spécifiques de casinos)
const pagesToCheck = [
  'app/[locale]/page.tsx',
  'app/[locale]/depot/skrill/page.tsx',
  'app/[locale]/depot/neteller/page.tsx',
  'app/[locale]/depot/neosurf/page.tsx',
  'app/[locale]/depot/cashlib/page.tsx',
  'app/[locale]/depot/paysafecard/page.tsx',
  'app/[locale]/depot/virement/page.tsx',
  'app/[locale]/depot/jetonbank/page.tsx',
  'app/[locale]/depot/mifinity/page.tsx',
  'app/[locale]/depot/carte/page.tsx',
  'app/[locale]/depot/crypto/page.tsx',
  'app/[locale]/top-casinos-crypto/page.tsx',
  'app/[locale]/casinos-sans-kyc/page.tsx',
  'app/[locale]/bonus-cashback/page.tsx',
  'app/[locale]/bonus-sans-wager/page.tsx',
  'app/[locale]/top-slots-2026/page.tsx',
  'app/[locale]/astuces-casino/page.tsx',
  'app/[locale]/meilleurs-bookmakers/page.tsx',
  'app/[locale]/calculateur-roulette/page.tsx',
  'app/[locale]/calculateur-cotes-sportives/page.tsx',
  'app/[locale]/install/page.tsx',
  'app/[locale]/about/page.tsx',
];

// Mots français communs qui ne devraient pas apparaître dans le code (sauf dans les traductions)
const frenchWords = [
  'Casino',
  'Bonus',
  'Dépôt',
  'Retrait',
  'Jouer',
  'Gratuit',
  'Sans',
  'Avec',
  'Plus',
  'Moins',
  'Annuler',
  'Valider',
  'Confirmer',
  'Continuer',
  'Suivant',
  'Précédent',
  'Rechercher',
  'Filtrer',
  'Trier',
  'Voir',
  'Tous',
  'Aucun',
  'Charger',
  'Afficher',
  'Masquer',
  'Réduire',
  'Développer',
  'Télécharger',
  'Partager',
  'Imprimer',
  'Envoyer',
  'Recevoir',
  'Supprimer',
  'Modifier',
  'Créer',
  'Ajouter',
  'Sauvegarder',
  'Enregistrer',
  'Ouvrir',
  'Fermer',
  'Déconnexion',
  'Connexion',
  'Inscription',
  'Mot de passe',
  'Email',
  'Téléphone',
  'Adresse',
  'Ville',
  'Code postal',
  'Pays',
  'Date',
  'Heure',
  'Minute',
  'Seconde',
  'Jour',
  'Semaine',
  'Mois',
  'Année',
  'Maintenant',
  'Aujourd\'hui',
  'Hier',
  'Demain',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
  'Dimanche',
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];

// Patterns de texte français à détecter
const frenchPatterns = [
  /"[^"]*(Casino|Bonus|Dépôt|Retrait|Jouer|Gratuit|Sans|Avec)[^"]*"/gi,
  />\s*([A-ZÉÈÊËÀÁÂÄÇ][a-zéèêëàáâäç]+(?:\s+[A-ZÉÈÊËÀÁÂÄÇ][a-zéèêëàáâäç]+)*)\s*</g,
  /title=["']([^"']*(Casino|Bonus|Dépôt|Retrait|Jouer)[^"']*)["']/gi,
  /alt=["']([^"']*(Casino|Bonus|Dépôt|Retrait|Jouer)[^"']*)["']/gi,
];

const issues = [];

console.log('🔍 Analyse des pages pour détecter les textes non traduits...\n');

pagesToCheck.forEach(pagePath => {
  const fullPath = path.join(pagePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Fichier non trouvé: ${fullPath}`);
    return;
  }
  
  const content = fs.readFileSync(fullPath, 'utf8');
  const lines = content.split('\n');
  
  // Ignorer les lignes de commentaires et les imports
  const codeLines = lines.filter((line, index) => {
    const trimmed = line.trim();
    return !trimmed.startsWith('//') && 
           !trimmed.startsWith('*') &&
           !trimmed.startsWith('import ') &&
           !trimmed.startsWith('export ') &&
           !trimmed.startsWith('const ') && trimmed.includes('=') && !trimmed.includes('useTranslations') &&
           !trimmed.includes('t(') &&
           !trimmed.includes('t.raw(');
  });
  
  // Chercher des textes français hardcodés
  codeLines.forEach((line, lineNum) => {
    // Chercher des strings avec des mots français
    frenchWords.forEach(word => {
      // Patterns pour détecter du texte français dans le JSX
      const patterns = [
        new RegExp(`>([^<]*${word}[^<]*)<`, 'gi'),
        new RegExp(`["']([^"']*${word}[^"']*)["']`, 'gi'),
      ];
      
      patterns.forEach(pattern => {
        const matches = line.match(pattern);
        if (matches) {
          matches.forEach(match => {
            // Vérifier si ce n'est pas déjà dans un t() ou useTranslations
            if (!line.includes('t(') && 
                !line.includes('useTranslations') && 
                !line.includes('t.raw(') &&
                !line.includes('//') &&
                match.length > 3) {
              
              // Ignorer les noms de composants, variables, etc.
              if (!match.includes('className') && 
                  !match.includes('id=') &&
                  !match.includes('href=') &&
                  !match.includes('src=') &&
                  !match.startsWith('http')) {
                
                issues.push({
                  file: pagePath,
                  line: lineNum + 1,
                  text: match.trim(),
                  context: line.trim().substring(0, 100)
                });
              }
            }
          });
        }
      });
    });
  });
});

if (issues.length > 0) {
  console.log(`\n❌ ${issues.length} problème(s) potentiel(s) détecté(s):\n`);
  
  // Grouper par fichier
  const byFile = {};
  issues.forEach(issue => {
    if (!byFile[issue.file]) {
      byFile[issue.file] = [];
    }
    byFile[issue.file].push(issue);
  });
  
  Object.keys(byFile).forEach(file => {
    console.log(`\n📄 ${file}:`);
    byFile[file].slice(0, 10).forEach(issue => {
      console.log(`  Ligne ${issue.line}: ${issue.text}`);
      console.log(`    Contexte: ${issue.context}...`);
    });
    if (byFile[file].length > 10) {
      console.log(`  ... et ${byFile[file].length - 10} autre(s) problème(s)`);
    }
  });
} else {
  console.log('\n✅ Aucun problème détecté !');
}

// Sauvegarder le rapport
fs.writeFileSync('untranslated-report.json', JSON.stringify(issues, null, 2));
console.log(`\n📊 Rapport sauvegardé dans untranslated-report.json`);

