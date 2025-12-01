import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adresse email protégée | GigaBonus",
  description:
    "Cette page informe sur la protection des adresses email affichées sur GigaBonus.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EmailProtectionFallbackPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <div className="max-w-2xl text-center space-y-4 bg-muted/30 border border-border rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-foreground">
          Adresse email protégée
        </h1>
        <p className="text-muted-foreground">
          Vous avez ouvert un lien technique utilisé pour masquer les adresses
          email publiques. Normalement, vous êtes automatiquement redirigé vers
          l’adresse de contact correspondante.
        </p>
        <p className="text-muted-foreground">
          Si vous voyez cette page, merci de revenir en arrière et d’activer
          JavaScript, ou contactez directement notre équipe depuis la page
          principale.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-primary-foreground font-semibold"
        >
          Revenir sur GigaBonus
        </Link>
      </div>
    </main>
  );
}

