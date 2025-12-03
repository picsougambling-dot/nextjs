import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/atlantisslots", {
    title: "Avis AtlantisSlots Casino Bonus Cash | GigaBonus 2025",
    description: "Avis complet AtlantisSlots Casino 2025. Bonus cash, thème Atlantis et retraits rapides.",
    canonical: "/atlantisslots",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AtlantisslotsLayout({ children, params }: Props) {
  await params;
  return children;
}
