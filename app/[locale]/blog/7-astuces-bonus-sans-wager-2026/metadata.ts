import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog7AstucesBonusSansWager2026' });
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    keywords: t('seo.keywords'),
    openGraph: {
      title: t('seo.ogTitle'),
      description: t('seo.ogDescription'),
      images: ["https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-11831/1767509374104_image_1767509373664.png"]
    },
  };
}
