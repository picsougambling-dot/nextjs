const fs = require('fs');
const path = require('path');

// Trouver tous les layouts dans app/[locale]/blog qui ont des noms de fonctions invalides
const blogDir = path.join(__dirname, '..', 'app', '[locale]', 'blog');

function findLayoutFiles(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      const layoutPath = path.join(fullPath, 'layout.tsx');
      if (fs.existsSync(layoutPath)) {
        files.push(layoutPath);
      }
    }
  }
  
  return files;
}

const layoutFiles = findLayoutFiles(blogDir);

let fixedCount = 0;

for (const filePath of layoutFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Vérifier si le layout a un nom de fonction invalide (avec tiret)
  const invalidFunctionMatch = content.match(/export default async function ([^(]+)\(/);
  
  if (invalidFunctionMatch) {
    const invalidName = invalidFunctionMatch[1].trim();
    
    // Si le nom contient un tiret, le corriger
    if (invalidName.includes('-')) {
      console.log(`Fixing: ${filePath}`);
      console.log(`  Invalid function name: ${invalidName}`);
      
      // Générer un nom valide en PascalCase sans tirets
      const validName = invalidName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      
      console.log(`  Valid function name: ${validName}`);
      
      // Remplacer le nom de fonction
      const newContent = content.replace(
        new RegExp(`export default async function ${invalidName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\(`),
        `export default async function ${validName}(`
      );
      
      fs.writeFileSync(filePath, newContent, 'utf8');
      fixedCount++;
      console.log(`  ✓ Fixed\n`);
    }
  }
}

console.log(`\n✅ Fixed ${fixedCount} blog layouts!`);

