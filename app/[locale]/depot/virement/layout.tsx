import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/depot/virement", {
    title: "Casinos Dépôt Virement Bancaire Sécurisé | GigaBonus 2025",
    description: "Casinos en ligne acceptant les virements bancaires SEPA. Dépôts sécurisés pour les gros montants.",
    canonical: "/depot/virement",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function VirementLayout({ children, params }: Props) {
  await params;
  return children;
}
