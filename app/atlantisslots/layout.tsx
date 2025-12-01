import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Avis AtlantisSlots Casino Bonus Cash | GigaBonus 2025",
  description: "Avis complet AtlantisSlots Casino 2025. Bonus cash, thème Atlantis et retraits rapides.",
  alternates: { canonical: `${siteConfig.url}/atlantisslots` },
};

export default function AtlantisslotsLayout({ children }: { children: React.ReactNode }) {
  return children;
}