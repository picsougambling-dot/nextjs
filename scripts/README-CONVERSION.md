# 📦 Guide de conversion des assets pour optimiser les performances

## 🎯 Objectif
Réduire la taille des assets pour améliorer le score PageSpeed Insights :
- **GIF → MP4** : Économie estimée ~666 KiB par GIF
- **PNG → WebP** : Économie estimée ~68 KiB
- **Optimisation WebP** : Économie estimée ~36 KiB

---

## 🎬 ÉTAPE 1 : Convertir les GIF en MP4 (5 fichiers)

### Option A : Utiliser ffmpeg (recommandé)

#### Installation de ffmpeg sur Windows :

**Méthode 1 : Chocolatey (recommandé)**
```powershell
choco install ffmpeg
```

**Méthode 2 : Installation manuelle**
1. Télécharger depuis : https://ffmpeg.org/download.html
2. Extraire dans un dossier (ex: `C:\ffmpeg`)
3. Ajouter au PATH système :
   - Ouvrir "Variables d'environnement"
   - Ajouter `C:\ffmpeg\bin` au PATH

#### Conversion automatique :
```powershell
.\scripts\convert-gifs-to-mp4.ps1
```

#### Conversion manuelle (si le script ne fonctionne pas) :
```powershell
# Pour chaque GIF, exécuter :
ffmpeg -i "src\assets\popup-kingschance.gif" -vf "scale=800:-1:flags=lanczos" -c:v libx264 -preset slow -crf 28 -an -movflags +faststart "src\assets\popup-kingschance.mp4"
ffmpeg -i "src\assets\popup-luckytreasure.gif" -vf "scale=800:-1:flags=lanczos" -c:v libx264 -preset slow -crf 28 -an -movflags +faststart "src\assets\popup-luckytreasure.mp4"
ffmpeg -i "src\assets\popup-spindinasty.gif" -vf "scale=800:-1:flags=lanczos" -c:v libx264 -preset slow -crf 28 -an -movflags +faststart "src\assets\popup-spindinasty.mp4"
ffmpeg -i "src\assets\popup-spinaura.gif" -vf "scale=800:-1:flags=lanczos" -c:v libx264 -preset slow -crf 28 -an -movflags +faststart "src\assets\popup-spinaura.mp4"
ffmpeg -i "src\assets\popup-bonus.gif" -vf "scale=800:-1:flags=lanczos" -c:v libx264 -preset slow -crf 28 -an -movflags +faststart "src\assets\popup-bonus.mp4"
```

### Option B : Utiliser un outil en ligne (si ffmpeg n'est pas disponible)

**Recommandé : https://cloudconvert.com/gif-to-mp4**

1. Aller sur https://cloudconvert.com/gif-to-mp4
2. Uploader chaque GIF :
   - `src/assets/popup-kingschance.gif`
   - `src/assets/popup-luckytreasure.gif`
   - `src/assets/popup-spindinasty.gif`
   - `src/assets/popup-spinaura.gif`
   - `src/assets/popup-bonus.gif`
3. Paramètres recommandés :
   - **Codec** : H.264
   - **Qualité** : Moyenne-Haute (CRF 28)
   - **Résolution** : 800px de largeur (ou conserver l'original)
   - **Audio** : Aucun
4. Télécharger les MP4 et les placer dans `src/assets/`

**Alternative : https://ezgif.com/gif-to-mp4**

---

## 🖼️ ÉTAPE 2 : Optimiser les images

### Installation de Sharp (si nécessaire) :
```bash
npm install --save-dev sharp
```

### Exécution du script :
```bash
node scripts/optimize-images.js
```

Ce script va :
1. ✅ Convertir `public/diamond.png` → `public/diamond.webp` (128x128, quality 85)
2. ✅ Optimiser `public/images/kingschance.webp` (490x196, quality 75)

### Option manuelle (outils en ligne) :

**Pour diamond.png → diamond.webp :**
- https://squoosh.app/ (recommandé)
- Uploader `public/diamond.png`
- Format : WebP
- Qualité : 85
- Dimensions : 128x128
- Télécharger et remplacer `public/diamond.webp`

**Pour kingschance.webp :**
- https://squoosh.app/
- Uploader `public/images/kingschance.webp`
- Format : WebP
- Qualité : 75
- Dimensions : 490x196
- Télécharger et remplacer `public/images/kingschance.webp`

---

## ✅ Vérification

Après conversion, vous devriez avoir :

### Fichiers MP4 créés :
- ✅ `src/assets/popup-kingschance.mp4`
- ✅ `src/assets/popup-luckytreasure.mp4`
- ✅ `src/assets/popup-spindinasty.mp4`
- ✅ `src/assets/popup-spinaura.mp4`
- ✅ `src/assets/popup-bonus.mp4`

### Images optimisées :
- ✅ `public/diamond.webp` (128x128)
- ✅ `public/images/kingschance.webp` (490x196, optimisé)

---

## 📝 PROCHAINE ÉTAPE

Une fois les conversions terminées, **dites-moi** et je modifierai le code pour utiliser les nouveaux fichiers.

**Modifications prévues :**
1. `src/data/promos.ts` : Changer `bannerGif` → `bannerVideo` (MP4)
2. `src/components/PromoPopup.tsx` : Remplacer `<img>` par `<video>` pour les bannières
3. `src/components/Diamonds.tsx` : Utiliser `next/image` avec `diamond.webp`
4. `src/components/PromoPopup.tsx` : Utiliser `next/image` pour les logos casino

---

## 🆘 Problèmes courants

**ffmpeg non reconnu :**
- Vérifier que ffmpeg est dans le PATH : `ffmpeg -version`
- Redémarrer le terminal après installation

**Sharp non trouvé :**
- Installer : `npm install --save-dev sharp`
- Vérifier : `node -e "console.log(require('sharp'))"`

**Erreur de permissions :**
- Exécuter PowerShell en tant qu'administrateur
- Vérifier que les fichiers ne sont pas ouverts dans un autre programme
