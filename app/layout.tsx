// Root layout minimal - le middleware next-intl gère la redirection
// Ce layout est nécessaire pour Next.js mais ne doit pas contenir de HTML
// car le layout [locale] gère tout le HTML
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Le middleware redirige automatiquement / vers /fr
  // Ce layout ne doit pas rediriger pour éviter les boucles
  // Retourner les enfants sans wrapper HTML (le layout [locale] s'en charge)
  return <>{children}</>;
}

