import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classement Meilleurs Bookmakers 2025 | GigaBonus",
  description: "Top des meilleurs bookmakers et sites de paris sportifs 2025. Bonus exclusifs, cotes compétitives et paris en direct.",
  alternates: {
    canonical: "https://gigabonus.fr/meilleurs-bookmakers",
  },
};

export default function MeilleursBookmakersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
