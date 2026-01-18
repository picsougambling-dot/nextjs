const fs = require('fs');
const path = require('path');

/**
 * Script pour convertir un sitemap texte en format XML valide
 * Format d'entrée: URL DATE CHANGEFREQ PRIORITY
 * Format de sortie: XML Sitemap Protocol standard
 */

// Fonction pour échapper les caractères XML spéciaux
function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Fonction pour formater la date en ISO 8601
function formatDate(dateString) {
  // Si la date est déjà au format ISO, la retourner telle quelle
  if (dateString.includes('T') && dateString.includes('Z')) {
    // Convertir Z en +00:00 pour le format ISO 8601 complet
    return dateString.replace('Z', '+00:00');
  }
  
  // Sinon, essayer de parser et formater
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      // Si la date est invalide, utiliser la date actuelle
      return new Date().toISOString().replace('Z', '+00:00');
    }
    return date.toISOString().replace('Z', '+00:00');
  } catch (e) {
    // En cas d'erreur, utiliser la date actuelle
    return new Date().toISOString().replace('Z', '+00:00');
  }
}

// Fonction pour valider les valeurs
function validateChangeFreq(freq) {
  const validFreqs = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];
  return validFreqs.includes(freq.toLowerCase()) ? freq.toLowerCase() : 'weekly';
}

function validatePriority(priority) {
  const num = parseFloat(priority);
  if (isNaN(num) || num < 0 || num > 1) {
    return '0.8'; // Priorité par défaut
  }
  return num.toString();
}

// Fonction principale de conversion
function convertSitemapToXml(inputFile, outputFile) {
  console.log(`📖 Lecture du fichier: ${inputFile}`);
  
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ Erreur: Le fichier ${inputFile} n'existe pas`);
    process.exit(1);
  }

  const content = fs.readFileSync(inputFile, 'utf-8');
  const lines = content.split('\n').filter(line => line.trim() !== '');

  console.log(`📊 ${lines.length} lignes trouvées`);

  // Vérifier la limite de 50,000 URLs
  if (lines.length > 50000) {
    console.warn(`⚠️  Attention: ${lines.length} URLs trouvées (limite: 50,000)`);
    console.warn(`   Seules les 50,000 premières seront incluses`);
  }

  // Construire le XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  let processedCount = 0;
  const maxUrls = Math.min(lines.length, 50000);

  for (let i = 0; i < maxUrls; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Parser la ligne: URL DATE CHANGEFREQ PRIORITY
    // Format: https://gigabonus.win/en 2026-12-11T00:03:45.195Z daily 1
    const parts = line.split(/\s+/);
    
    if (parts.length < 2) {
      console.warn(`⚠️  Ligne ${i + 1} ignorée (format invalide): ${line}`);
      continue;
    }

    const url = parts[0];
    const date = parts[1] || new Date().toISOString();
    const changeFreq = parts[2] || 'weekly';
    const priority = parts[3] || '0.8';

    // Valider et formater
    const formattedDate = formatDate(date);
    const validChangeFreq = validateChangeFreq(changeFreq);
    const validPriority = validatePriority(priority);

    // Échapper l'URL
    const escapedUrl = escapeXml(url);

    // Ajouter l'entrée XML
    xml += '  <url>\n';
    xml += `    <loc>${escapedUrl}</loc>\n`;
    xml += `    <lastmod>${formattedDate}</lastmod>\n`;
    xml += `    <changefreq>${validChangeFreq}</changefreq>\n`;
    xml += `    <priority>${validPriority}</priority>\n`;
    xml += '  </url>\n';

    processedCount++;
  }

  xml += '</urlset>';

  // Sauvegarder le fichier
  fs.writeFileSync(outputFile, xml, 'utf-8');
  
  console.log(`✅ Conversion terminée!`);
  console.log(`   ${processedCount} URLs converties`);
  console.log(`   Fichier sauvegardé: ${outputFile}`);
  
  // Vérifier la taille du fichier
  const stats = fs.statSync(outputFile);
  const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`   Taille du fichier: ${fileSizeMB} MB`);
  
  if (stats.size > 50 * 1024 * 1024) {
    console.warn(`⚠️  Attention: Le fichier dépasse 50MB (limite recommandée)`);
    console.warn(`   Considérez diviser le sitemap en plusieurs fichiers`);
  }

  // Validation basique
  if (xml.includes('&amp;') || xml.includes('&lt;') || xml.includes('&gt;')) {
    console.log(`✓ Caractères spéciaux correctement échappés`);
  }

  console.log(`\n🎉 Sitemap XML généré avec succès!`);
}

// Point d'entrée
const args = process.argv.slice(2);

if (args.length < 1) {
  console.log('Usage: node scripts/convert-sitemap-to-xml.js <input-file> [output-file]');
  console.log('');
  console.log('Exemple:');
  console.log('  node scripts/convert-sitemap-to-xml.js sitemap.txt sitemap.xml');
  process.exit(1);
}

const inputFile = args[0];
const outputFile = args[1] || 'sitemap.xml';

convertSitemapToXml(inputFile, outputFile);

