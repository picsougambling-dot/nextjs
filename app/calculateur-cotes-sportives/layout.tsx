import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur Cotes Sportives en Ligne | GigaBonus 2025",
  description: "Calculateur de cotes sportives gratuit. Convertissez les cotes décimales, fractionnelles et américaines. Calculez vos gains potentiels.",
  alternates: {
    canonical: "https://gigabonus.fr/calculateur-cotes-sportives",
  },
};

export default function CalculateurCotesSportivesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
