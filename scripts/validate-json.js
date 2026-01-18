const fs = require('fs');
const path = require('path');

const locales = ['en', 'fr', 'de', 'es', 'ru', 'it', 'br', 'pt', 'nl', 'lv', 'fi'];
const messagesDir = path.join(__dirname, '../messages');

let allValid = true;

locales.forEach(locale => {
  try {
    const filePath = path.join(messagesDir, `${locale}.json`);
    const content = fs.readFileSync(filePath, 'utf-8');
    JSON.parse(content);
    console.log(`✓ ${locale}.json is valid`);
  } catch(e) {
    console.error(`✗ ${locale}.json ERROR: ${e.message}`);
    console.error(`  Line: ${e.message.match(/line (\d+)/)?.[1] || 'unknown'}`);
    allValid = false;
  }
});

process.exit(allValid ? 0 : 1);

