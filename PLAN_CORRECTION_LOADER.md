# Plan de Correction - Problèmes de Loader et Changement de Langue

## Problèmes Identifiés

### 1. Erreur `removeChild` lors du changement de langue
**Cause** : Le script du loader s'exécute à chaque changement de route et tente de supprimer un élément qui peut déjà être supprimé ou déplacé par Next.js lors de la navigation.

**Localisation** : `app/[locale]/layout.tsx` lignes 280-402

### 2. Script du loader multiple
**Cause** : Le script est dans le layout, donc il s'exécute à chaque navigation. Plusieurs listeners (DOMContentLoaded, load, timeout, error) peuvent déclencher `removeLoader()` simultanément.

**Localisation** : `app/[locale]/layout.tsx` lignes 375-398

### 3. not-found.tsx utilise removeChild
**Cause** : Le fichier `not-found.tsx` contient encore du code qui utilise `removeChild()`.

**Localisation** : `app/[locale]/not-found.tsx` lignes 18-38

## Solutions Proposées

### Solution 1 : Convertir le loader en composant React (RECOMMANDÉ)
**Avantages** :
- Gestion du cycle de vie par React
- Pas de manipulation directe du DOM
- Compatible avec les changements de route Next.js
- Plus facile à maintenir

**Implémentation** :
1. Créer un composant `InitialLoader.tsx` client-side
2. Utiliser `useEffect` pour gérer l'affichage/masquage
3. Détecter les changements de route avec `usePathname()`
4. Remplacer le script inline par ce composant

### Solution 2 : Désactiver le script lors des navigations
**Avantages** :
- Solution rapide
- Pas de refactoring majeur

**Implémentation** :
1. Détecter les navigations Next.js avec `window.next.router`
2. Ne pas exécuter le script si une navigation est en cours
3. Nettoyer les listeners avant les changements de route

### Solution 3 : Utiliser uniquement le masquage CSS
**Avantages** :
- Évite complètement les erreurs removeChild
- Simple et efficace

**Implémentation** :
1. Ne jamais supprimer le loader du DOM
2. Utiliser uniquement `display: none` et classes CSS
3. Le loader reste dans le DOM mais invisible

## Plan d'Action Recommandé

### Étape 1 : Corriger not-found.tsx (URGENT)
- Remplacer `removeChild()` par `remove()` ou masquage CSS

### Étape 2 : Simplifier le script du loader (URGENT)
- Supprimer tous les appels à `removeChild()`
- Utiliser uniquement `remove()` ou masquage CSS
- Ajouter une détection de navigation Next.js pour désactiver le script

### Étape 3 : Convertir en composant React (OPTIONNEL mais recommandé)
- Créer `src/components/InitialLoader.tsx`
- Remplacer le script inline par le composant
- Gérer le cycle de vie avec React hooks

## Fichiers à Modifier

1. `app/[locale]/layout.tsx` - Script du loader
2. `app/[locale]/not-found.tsx` - Suppression de removeChild
3. `src/components/InitialLoader.tsx` - Nouveau composant (si Solution 1)

