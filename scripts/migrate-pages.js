const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
const localeDir = path.join(appDir, '[locale]');

// Liste des dossiers à exclure (déjà dans [locale] ou fichiers spéciaux)
const excludeDirs = ['[locale]', 'globals.css', 'sitemap.ts', 'robots.ts', 'not-found.tsx'];

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (excludeDirs.includes(entry.name)) {
      continue;
    }

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copier tous les dossiers de app/ vers app/[locale]/
const entries = fs.readdirSync(appDir, { withFileTypes: true });

for (const entry of entries) {
  if (entry.isDirectory() && !excludeDirs.includes(entry.name)) {
    const srcPath = path.join(appDir, entry.name);
    const destPath = path.join(localeDir, entry.name);
    console.log(`Copying ${entry.name}...`);
    copyDirectory(srcPath, destPath);
  }
}

console.log('Migration completed!');

