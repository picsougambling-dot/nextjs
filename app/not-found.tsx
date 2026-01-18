// Page not-found à la racine
// Avec next-intl et localePrefix: 'always', cette page ne devrait jamais être atteinte
// car le middleware redirige toutes les routes vers une locale
// Mais Next.js nécessite ce fichier pour le build
// Rediriger vers la page 404 localisée par défaut
export default function RootNotFound() {
  // Rediriger vers la page 404 avec la locale par défaut
  // Next.js gérera automatiquement l'affichage de app/[locale]/not-found.tsx
  return null;
}

