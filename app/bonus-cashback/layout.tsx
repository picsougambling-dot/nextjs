import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Bonus Cashback Casino Quotidien France | GigaBonus 2025",
  description: "Casinos avec les meilleurs bonus cashback quotidiens et hebdomadaires. Récupérez jusqu'à 25% de vos pertes.",
  alternates: {
    canonical: `${siteConfig.url}/bonus-cashback`,
  },
};

export default function BonusCashbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}