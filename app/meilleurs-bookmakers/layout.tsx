import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Classement Meilleurs Bookmakers 2025 | GigaBonus",
  description: "Top des meilleurs bookmakers et sites de paris sportifs 2025. Bonus exclusifs, cotes compétitives et paris en direct.",
  alternates: {
    canonical: `${siteConfig.url}/meilleurs-bookmakers`,
  },
};

export default function MeilleursBookmakersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}