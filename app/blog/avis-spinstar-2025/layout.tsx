import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = {
  title: "Avis SpinStar Casino 2025 et Bonus 700% | GigaBonus",
  description: "Avis détaillé SpinStar Casino 2025. Bonus 700% jusqu'à 10 000€ + 725 Free Spins analysé par nos experts.",
  alternates: { canonical: `${siteConfig.url}/blog/avis-spinstar-2025` },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }