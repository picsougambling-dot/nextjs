import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/spinstar", {
    title: "Avis SpinStar Casino 700% Bonus + 725 FS | GigaBonus 2025",
    description: "Avis complet SpinStar Casino 2025. Bonus de bienvenue 700% jusqu'à 10 000€ + 725 Free Spins. Test détaillé, retraits et programme VIP.",
    canonical: "/spinstar",
    ogImage: "https://gigabonus.win/images/spinstar.webp",
  });
}

export default async function SpinstarLayout({ children, params }: Props) {
  await params; // Attendre params pour la validation
  return children;
}
