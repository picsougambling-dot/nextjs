import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "À Propos de GigaBonus : Experts Casinos | GigaBonus 2025",
  description: "Découvrez l'équipe GigaBonus, experts en casinos en ligne depuis 2020. Notre mission : vous guider vers les meilleurs bonus casino.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}