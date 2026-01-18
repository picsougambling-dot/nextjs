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
  const t = await getTranslations({ locale: validLocale, namespace: 'DepotPages.virement' });
  
  return generateMultilingualMetadata(locale, "/depot/virement", {
    title: t('seoTitle'),
    description: t('seoDescription'),
    canonical: "/depot/virement",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function VirementLayout({ children, params }: Props) {
  await params;
  return children;
}
