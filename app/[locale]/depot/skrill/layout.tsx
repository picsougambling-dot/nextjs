import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/depot/skrill", {
    title: "Casinos Dépôt Skrill Retraits 24h | GigaBonus 2025",
    description: "Meilleurs casinos acceptant Skrill. E-wallet populaire avec dépôts instantanés et retraits en 24h.",
    canonical: "/depot/skrill",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function SkrillLayout({ children, params }: Props) {
  await params;
  return children;
}
