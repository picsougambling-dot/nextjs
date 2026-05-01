# 🎬 Guide Simple : Conversion GIF → MP4

## 📋 LISTE DES FICHIERS À CONVERTIR (5 fichiers)

### Fichiers GIF à convertir (dans `src/assets/`) :

1. ✅ `src/assets/popup-kingschance.gif` → `popup-kingschance.mp4`
2. ✅ `src/assets/popup-luckytreasure.gif` → `popup-luckytreasure.mp4`
3. ✅ `src/assets/popup-spindinasty.gif` → `popup-spindinasty.mp4`
4. ✅ `src/assets/popup-spinaura.gif` → `popup-spinaura.mp4`
5. ✅ `src/assets/popup-bonus.gif` → `popup-bonus.mp4`

---

## 🌐 ÉTAPE 1 : Utiliser un outil en ligne

### Option recommandée : CloudConvert

**Lien :** https://cloudconvert.com/gif-to-mp4

### Instructions :

1. **Ouvrir le site** : https://cloudconvert.com/gif-to-mp4

2. **Pour chaque GIF (répéter 5 fois) :**
   - Cliquer sur "Select File"
   - Naviguer vers : `C:\Users\jojo7\Desktop\gigabonus2026\src\assets\`
   - Sélectionner un GIF (ex: `popup-kingschance.gif`)
   - Cliquer sur "Convert"
   - Attendre la conversion
   - Cliquer sur "Download"
   - **Renommer le fichier téléchargé** pour qu'il ait le bon nom :
     - `popup-kingschance.mp4`
     - `popup-luckytreasure.mp4`
     - `popup-spindinasty.mp4`
     - `popup-spinaura.mp4`
     - `popup-bonus.mp4`

3. **Placer les MP4 dans le même dossier** :
   - Copier les 5 fichiers MP4 téléchargés
   - Les coller dans : `C:\Users\jojo7\Desktop\gigabonus2026\src\assets\`
   - ✅ Vous devriez avoir les GIF ET les MP4 dans le même dossier

---

## 📁 RÉSULTAT ATTENDU

Après conversion, dans le dossier `src/assets/`, vous devriez avoir :

```
src/assets/
├── popup-kingschance.gif      (ancien, on garde)
├── popup-kingschance.mp4       ✅ NOUVEAU
├── popup-luckytreasure.gif    (ancien, on garde)
├── popup-luckytreasure.mp4     ✅ NOUVEAU
├── popup-spindinasty.gif      (ancien, on garde)
├── popup-spindinasty.mp4       ✅ NOUVEAU
├── popup-spinaura.gif         (ancien, on garde)
├── popup-spinaura.mp4          ✅ NOUVEAU
├── popup-bonus.gif            (ancien, on garde)
└── popup-bonus.mp4             ✅ NOUVEAU
```

---

## 🖼️ ÉTAPE 2 : Optimiser les images (optionnel, peut attendre)

### Pour `diamond.png` → `diamond.webp` :

**Outil en ligne :** https://squoosh.app/

1. Aller sur https://squoosh.app/
2. Cliquer sur "Click to upload"
3. Sélectionner : `C:\Users\jojo7\Desktop\gigabonus2026\public\diamond.png`
4. Dans les paramètres :
   - **Format** : WebP
   - **Qualité** : 85
   - **Resize** : 128 x 128
5. Cliquer sur "Download"
6. Renommer en `diamond.webp`
7. Placer dans : `C:\Users\jojo7\Desktop\gigabonus2026\public\diamond.webp`

### Pour optimiser `kingschance.webp` :

1. Aller sur https://squoosh.app/
2. Uploader : `C:\Users\jojo7\Desktop\gigabonus2026\public\images\kingschance.webp`
3. Paramètres :
   - **Format** : WebP
   - **Qualité** : 75
   - **Resize** : 490 x 196
4. Télécharger et remplacer le fichier existant

---

## ✅ VÉRIFICATION

Après toutes les conversions, vous devriez avoir :

### Dans `src/assets/` :
- ✅ `popup-kingschance.mp4`
- ✅ `popup-luckytreasure.mp4`
- ✅ `popup-spindinasty.mp4`
- ✅ `popup-spinaura.mp4`
- ✅ `popup-bonus.mp4`

### Dans `public/` :
- ✅ `diamond.webp` (optionnel pour l'instant)

### Dans `public/images/` :
- ✅ `kingschance.webp` optimisé (optionnel pour l'instant)

---

## 📝 PROCHAINE ÉTAPE

**Une fois les 5 MP4 créés et placés dans `src/assets/`, dites-moi et je modifierai le code !**

Les modifications de code seront :
1. Changer les références GIF → MP4 dans le code
2. Remplacer `<img>` par `<video>` pour les bannières
3. Optimiser les autres images

---

## 🆘 AIDE

**Le fichier téléchargé a un nom bizarre ?**
- Renommez-le manuellement pour qu'il corresponde exactement au nom attendu (ex: `popup-kingschance.mp4`)

**Vous ne trouvez pas le dossier `src/assets/` ?**
- Chemin complet : `C:\Users\jojo7\Desktop\gigabonus2026\src\assets\`

**Autre outil en ligne si CloudConvert ne fonctionne pas :**
- https://ezgif.com/gif-to-mp4
- https://convertio.co/gif-mp4/
