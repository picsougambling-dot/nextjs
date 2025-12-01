import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casinos Dépôt MiFinity Sécurisé France | GigaBonus 2025",
  description: "Meilleurs casinos acceptant MiFinity. E-wallet moderne avec transactions instantanées et sécurisées.",
  alternates: {
    canonical: "https://gigabonus.fr/depot/mifinity",
  },
};

export default function DepotMifinityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
