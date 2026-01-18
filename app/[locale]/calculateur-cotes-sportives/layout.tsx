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
  const t = await getTranslations({ locale: validLocale, namespace: 'GuidePages.calculateurCotesSportives' });
  
  return generateMultilingualMetadata(locale, "/calculateur-cotes-sportives", {
    title: t('seoTitle'),
    description: t('seoDescription'),
    canonical: "/calculateur-cotes-sportives",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function CalculateurCotesSportivesLayout({ children, params }: Props) {
  await params;
  return children;
}
