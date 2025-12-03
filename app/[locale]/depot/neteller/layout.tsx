import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "/depot/neteller", {
    title: "Casinos Dépôt Neteller Instantané | GigaBonus 2025",
    description: "Casinos en ligne acceptant Neteller. E-wallet fiable avec dépôts instantanés et retraits rapides en 24h.",
    canonical: "/depot/neteller",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function NetellerLayout({ children, params }: Props) {
  await params;
  return children;
}
