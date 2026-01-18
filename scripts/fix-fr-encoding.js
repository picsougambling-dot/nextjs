const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'messages', 'fr.json');
const backupPath = filePath + '.bak';

try {
  const raw = fs.readFileSync(filePath);
  fs.writeFileSync(backupPath, raw);
  // Interpret bytes as latin1 (ISO-8859-1) and write as UTF-8
  const latin1 = raw.toString('latin1');
  fs.writeFileSync(filePath, latin1, 'utf8');
  console.log('Ré-encodage terminé. Sauvegarde créée:', backupPath);
} catch (err) {
  console.error('Erreur:', err.message);
  process.exit(1);
}
