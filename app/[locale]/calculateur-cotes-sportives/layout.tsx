import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/calculateur-cotes-sportives", {
    title: "Calculateur Cotes Sportives en Ligne | GigaBonus 2025",
    description: "Calculateur de cotes sportives gratuit. Convertissez les cotes décimales, fractionnelles et américaines. Calculez vos gains potentiels.",
    canonical: "/calculateur-cotes-sportives",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function CalculateurCotesSportivesLayout({ children, params }: Props) {
  await params;
  return children;
}
