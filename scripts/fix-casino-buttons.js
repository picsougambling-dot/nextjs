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

function fixButtons(filePath, casinoName) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Vérifier si Common est déjà importé
  if (!content.includes("useTranslations('Common')")) {
    // Ajouter l'import si useTranslations n'existe pas
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
      // Mettre à jour l'import existant pour inclure useTranslations si nécessaire
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
        // Chercher où insérer (après les autres useTranslations ou useRef)
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

  // Remplacer "Jouer Maintenant" par {tCommon('playNow')}
  if (content.includes('Jouer Maintenant')) {
    content = content.replace(/Jouer Maintenant/g, "{tCommon('playNow')}");
    modified = true;
  }

  // Remplacer ">Jouer<" par {tCommon('play')} (mais pas dans les commentaires ou strings)
  // Pattern plus précis pour éviter les faux positifs
  content = content.replace(/>Jouer</g, (match, offset) => {
    // Vérifier que ce n'est pas dans une string ou un commentaire
    const before = content.slice(0, offset);
    const after = content.slice(offset);
    
    // Compter les guillemets avant pour voir si on est dans une string
    const singleQuotes = (before.match(/'/g) || []).length;
    const doubleQuotes = (before.match(/"/g) || []).length;
    
    // Si nombre impair de guillemets, on est dans une string
    if (singleQuotes % 2 !== 0 || doubleQuotes % 2 !== 0) {
      return match; // Ne pas remplacer
    }
    
    // Vérifier les commentaires
    const lastComment = before.lastIndexOf('//');
    const lastNewline = before.lastIndexOf('\n');
    if (lastComment > lastNewline) {
      return match; // Dans un commentaire
    }
    
    return `>{tCommon('play')}<`;
  });
  
  if (content.includes(">{tCommon('play')}<")) {
    modified = true;
  }

  // Remplacer aussi "Jouer sur {casino.name} Maintenant" ou variantes
  content = content.replace(/Jouer sur \{[^}]+\} Maintenant/g, "{tCommon('playNow')}");
  if (content.includes("{tCommon('playNow')}")) {
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
}

function main() {
  console.log('🔧 Correction des boutons hardcodés dans les pages de casino...\n');
  
  let fixedCount = 0;
  let skippedCount = 0;

  casinoDirs.forEach(casinoName => {
    const pagePath = path.join(__dirname, '..', 'app', '[locale]', casinoName, 'page.tsx');
    
    if (!fs.existsSync(pagePath)) {
      console.log(`⚠️  ${casinoName} - Fichier non trouvé`);
      return;
    }

    if (fixButtons(pagePath, casinoName)) {
      console.log(`✅ ${casinoName} - Boutons corrigés`);
      fixedCount++;
    } else {
      console.log(`⏭️  ${casinoName} - Pas de boutons hardcodés ou déjà corrigé`);
      skippedCount++;
    }
  });

  console.log(`\n📊 Résumé:`);
  console.log(`   - Pages corrigées: ${fixedCount}`);
  console.log(`   - Pages ignorées: ${skippedCount}`);
}

main();
