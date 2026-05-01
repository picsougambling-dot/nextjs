/**
 * Script Node.js pour optimiser les images
 * Utilise Sharp (installé temporairement si nécessaire)
 * 
 * Usage: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');

// Vérifier si sharp est disponible
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('❌ Sharp n\'est pas installé.');
  console.log('');
  console.log('📦 Installation :');
  console.log('   npm install --save-dev sharp');
  console.log('');
  console.log('Puis relancez ce script.');
  process.exit(1);
}

async function optimizeImages() {
  console.log('=== Optimisation des images ===\n');

  // 1. Convertir diamond.png en WebP (128x128)
  const diamondPng = path.join(__dirname, '..', 'public', 'diamond.png');
  const diamondWebp = path.join(__dirname, '..', 'public', 'diamond.webp');

  if (fs.existsSync(diamondPng)) {
    console.log('🔄 Conversion : diamond.png → diamond.webp (128x128)');
    try {
      const stats = fs.statSync(diamondPng);
      const originalSize = stats.size / 1024;

      await sharp(diamondPng)
        .resize(128, 128, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .webp({ quality: 85 })
        .toFile(diamondWebp);

      const newStats = fs.statSync(diamondWebp);
      const newSize = newStats.size / 1024;
      const savings = originalSize - newSize;
      const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

      console.log(`   ✅ Succès : ${originalSize.toFixed(1)} KiB → ${newSize.toFixed(1)} KiB (économie: ${savings.toFixed(1)} KiB, -${savingsPercent}%)`);
    } catch (error) {
      console.error(`   ❌ Erreur : ${error.message}`);
    }
  } else {
    console.log('⚠️  Fichier introuvable : diamond.png');
  }

  console.log('');

  // 2. Optimiser kingschance.webp (490x196, quality 75)
  const kingschanceWebp = path.join(__dirname, '..', 'public', 'images', 'kingschance.webp');
  const kingschanceWebpTemp = path.join(__dirname, '..', 'public', 'images', 'kingschance-optimized.webp');

  if (fs.existsSync(kingschanceWebp)) {
    console.log('🔄 Optimisation : kingschance.webp (490x196, quality 75)');
    try {
      const stats = fs.statSync(kingschanceWebp);
      const originalSize = stats.size / 1024;

      await sharp(kingschanceWebp)
        .resize(490, 196, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .webp({ quality: 75 })
        .toFile(kingschanceWebpTemp);

      // Remplacer l'ancien fichier
      fs.renameSync(kingschanceWebpTemp, kingschanceWebp);

      const newStats = fs.statSync(kingschanceWebp);
      const newSize = newStats.size / 1024;
      const savings = originalSize - newSize;
      const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

      console.log(`   ✅ Succès : ${originalSize.toFixed(1)} KiB → ${newSize.toFixed(1)} KiB (économie: ${savings.toFixed(1)} KiB, -${savingsPercent}%)`);
    } catch (error) {
      console.error(`   ❌ Erreur : ${error.message}`);
    }
  } else {
    console.log('⚠️  Fichier introuvable : kingschance.webp');
  }

  console.log('');
  console.log('✅ Optimisation terminée');
}

optimizeImages().catch(console.error);
