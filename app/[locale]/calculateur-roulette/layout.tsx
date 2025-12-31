import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";
import { siteConfig } from '@/config/site';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  // Obtenir les traductions SEO
  const validLocale = siteConfig.locales.includes(locale as any) ? locale : siteConfig.defaultLocale;
  const t = await getTranslations({ locale: validLocale, namespace: 'GuidePages.calculateurRoulette' });
  
  return generateMultilingualMetadata(locale, "/calculateur-roulette", {
    title: t('seoTitle'),
    description: t('seoDescription'),
    canonical: "/calculateur-roulette",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function CalculateurRouletteLayout({ children, params }: Props) {
  await params;
  return children;
}
