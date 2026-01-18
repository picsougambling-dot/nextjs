import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/config/site';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = siteConfig.locales.includes(locale as any) ? locale : siteConfig.defaultLocale;
  const t = await getTranslations({ locale: validLocale, namespace: 'BlogPages.avis-betify-2026' });
  
  return generateMultilingualMetadata(locale, "/blog/avis-betify-2026", {
    title: t('seoTitle'),
    description: t('seoDescription'),
    canonical: "/blog/avis-betify-2026",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function AvisBetify2026Layout({ children, params }: Props) {
  await params;
  return children;
}
