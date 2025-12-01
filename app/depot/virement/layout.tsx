import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casinos Dépôt Virement Bancaire Sécurisé | GigaBonus 2025",
  description: "Casinos en ligne acceptant les virements bancaires SEPA. Dépôts sécurisés pour les gros montants.",
  alternates: {
    canonical: "https://gigabonus.fr/depot/virement",
  },
};

export default function DepotVirementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
