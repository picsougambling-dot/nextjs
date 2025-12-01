import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Bonus Sans Wager Retrait Immédiat | GigaBonus 2025",
  description: "Meilleurs bonus casino sans conditions de mise. Retirez vos gains immédiatement sans wager. Offres exclusives 2025.",
  alternates: {
    canonical: `${siteConfig.url}/bonus-sans-wager`,
  },
};

export default function BonusSansWagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}