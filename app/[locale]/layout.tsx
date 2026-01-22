import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { siteConfig } from '@/config/site';
import { Providers } from "@/components/Providers";
import { DisclaimerProvider } from "@/contexts/DisclaimerContext";
import DecorativeShapes from "@/components/DecorativeShapes";
import ScrollToTop from "@/components/ScrollToTop";
import DisclaimerModal from "@/components/DisclaimerModal";
import "../globals.css";
import { sanitizeSEOFields } from '@/lib/seo-utils';
import { isBot } from '@/lib/bot-detection';

type Props = {
  children: React.ReactNode;les 
  params: Promise<{ locale: string }>;
};

const locales = siteConfig.locales;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#e91e63",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  // Ne pas utiliser notFound() dans generateMetadata d'un layout racine
  // Utiliser la locale par défaut si invalide
  const validLocale = locales.includes(locale as any) ? locale : siteConfig.defaultLocale;

  // Obtenir les traductions pour les métadonnées
  const t = await getTranslations({ locale: validLocale, namespace: 'SEO.home' });

  const baseUrl = siteConfig.url;
  const currentUrl = `${baseUrl}/${locale}`;
  
  // Générer les URLs pour toutes les langues
  const languages: Record<string, string> = {};
  locales.forEach((loc) => {
    languages[loc] = `${baseUrl}/${loc}`;
  });
  const sanitized = sanitizeSEOFields({
    title: t('title'),
    description: t('description'),
    ogTitle: t('ogTitle'),
    ogDescription: t('ogDescription'),
    twitterTitle: t('twitterTitle'),
    twitterDescription: t('twitterDescription'),
  });

  return {
    title: {
      default: sanitized.title || t('title'),
      template: "%s",
    },
    description: sanitized.description || t('description'),
    keywords: (t('keywords') || '').split(', ').filter(Boolean),
    authors: [{ name: "GigaBonus" }],
    creator: "GigaBonus",
    publisher: "GigaBonus",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: languages,
    },
    openGraph: {
      type: "website",
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : locale === 'de' ? 'de_DE' : locale === 'es' ? 'es_ES' : locale === 'ru' ? 'ru_RU' : locale === 'it' ? 'it_IT' : locale === 'br' ? 'pt_BR' : locale === 'pt' ? 'pt_PT' : locale === 'nl' ? 'nl_NL' : locale === 'lv' ? 'lv_LV' : locale === 'fi' ? 'fi_FI' : 'en_US',
      url: currentUrl,
      siteName: "GigaBonus",
      title: sanitized.ogTitle || t('ogTitle'),
      description: sanitized.ogDescription || t('ogDescription'),
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: sanitized.ogTitle || t('ogTitle'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: sanitized.twitterTitle || t('twitterTitle'),
      description: sanitized.twitterDescription || t('twitterDescription'),
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // google: "YOUR_VERIFICATION_CODE", // À ajouter quand disponible
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon.ico",
    },
    manifest: "/manifest.webmanifest",
  };
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  
  // Valider que la locale est supportée
  // Ne pas utiliser notFound() dans un layout racine - utiliser redirect() à la place
  if (!locales.includes(locale as any)) {
    const { redirect } = await import('next/navigation');
    redirect(`/${siteConfig.defaultLocale}`);
  }

  // Charger les messages pour la locale spécifique
  const messages = await getMessages({ locale });
  
  // Obtenir les traductions pour les Schema.org
  const validLocale = locales.includes(locale as any) ? locale : siteConfig.defaultLocale;
  const t = await getTranslations({ locale: validLocale, namespace: 'SEO.home' });

  // Détecter si c'est un bot/crawler (ne pas afficher le disclaimer)
  const botDetected = await isBot();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Google Analytics - Ultra Deferred (First Interaction or 5s) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var gaLoaded = false;
                var gaInitiated = false;
                
                function loadGA() {
                  if (gaLoaded) return;
                  gaLoaded = true;
                  
                  var script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TVGXTR18DQ';
                  document.body.appendChild(script);
                  
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-TVGXTR18DQ', { send_page_view: false });
                  gtag('event', 'page_view', { send_to: 'G-TVGXTR18DQ' });
                }
                
                // Option 1: Premier scroll/touch/mousemove (meilleure UX)
                function onFirstInteraction() {
                  if (!gaInitiated) {
                    gaInitiated = true;
                    loadGA();
                    window.removeEventListener('scroll', onFirstInteraction, { passive: true });
                    window.removeEventListener('touchstart', onFirstInteraction, { passive: true });
                    window.removeEventListener('mousemove', onFirstInteraction, { passive: true });
                  }
                }
                
                // Listeners passifs pour meilleure performance
                window.addEventListener('scroll', onFirstInteraction, { passive: true });
                window.addEventListener('touchstart', onFirstInteraction, { passive: true });
                window.addEventListener('mousemove', onFirstInteraction, { passive: true });
                
                // Option 2: Timeout de sécurité (5s au lieu de 2s)
                setTimeout(function() {
                  if (!gaInitiated) {
                    gaInitiated = true;
                    loadGA();
                  }
                }, 5000);
              })();
            `,
          }}
        />
        
        {/* Schema.org JSON-LD for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "GigaBonus",
              "url": siteConfig.url,
              "description": t('description'),
              "publisher": {
                "@type": "Organization",
                "name": "GigaBonus",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${siteConfig.url}/pwa-512x512.png`,
                },
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${siteConfig.url}/?search={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        
        {/* Schema.org JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GigaBonus",
              "url": siteConfig.url,
              "logo": `${siteConfig.url}/pwa-512x512.png`,
              "description": t('description'),
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "availableLanguage": ["French", "English", "Spanish", "German", "Russian"],
              },
            }),
          }}
        />
        
        {/* Favicon - Multiple formats for better compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/pwa-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        {/* Script to remove loader immediately on refresh and prevent re-appearance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Initialize flags if not already set
                if (typeof window.__LOADER_REMOVED__ === 'undefined') {
                  window.__LOADER_REMOVED__ = false;
                }
                if (typeof window.__LOADER_REMOVING__ === 'undefined') {
                  window.__LOADER_REMOVING__ = false;
                }
                if (typeof window.__LOADER_SCRIPT_RUNNING__ === 'undefined') {
                  window.__LOADER_SCRIPT_RUNNING__ = false;
                }
                
                // Remove loader immediately if page is already loaded (refresh scenario)
                if (document.readyState === 'complete' || document.readyState === 'interactive') {
                  // Vérifier si le loader a déjà été supprimé
                  if (window.__LOADER_REMOVED__ || window.__LOADER_REMOVING__) {
                    return;
                  }
                  
                  const loader = document.getElementById('initial-loader');
                  if (loader && document.body.contains(loader)) {
                    // Marquer comme en cours de suppression
                    window.__LOADER_REMOVING__ = true;
                    window.__LOADER_REMOVED__ = true;
                    
                    try {
                      // Utiliser uniquement remove() - ne jamais utiliser removeChild()
                      loader.style.display = 'none';
                      loader.remove();
                    } catch (e) {
                      // Si remove() échoue, simplement cacher l'élément
                      try {
                        loader.style.display = 'none';
                        loader.style.visibility = 'hidden';
                        loader.style.opacity = '0';
                        loader.style.pointerEvents = 'none';
                      } catch (err) {
                        // Ignorer complètement si tout échoue
                      }
                    } finally {
                      window.__LOADER_REMOVING__ = false;
                    }
                  }
                }
              })();
            `,
          }}
        />
        {/* Initial Loader */}
        <div 
          id="initial-loader" 
          className="loader-container" 
          style={{ display: 'none' }}
          suppressHydrationWarning
        >
          <Image 
            src="/gigabonus-logo.webp" 
            alt="GigaBonus" 
            width={140}
            height={140}
            className="loader-logo"
            priority
            quality={90}
          />
        </div>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <DisclaimerProvider>
            {!botDetected && <DisclaimerModal language={locale as any} />}
            <Providers>
              <DecorativeShapes />
              {children}
              <ScrollToTop />
            </Providers>
          </DisclaimerProvider>
        </NextIntlClientProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Détecter si Next.js est en train de naviguer
                // Ne pas exécuter le script lors des navigations
                if (typeof window !== 'undefined' && window.next && window.next.router && window.next.router.isReady) {
                  // Si Next.js est en train de naviguer, ne pas exécuter
                  return;
                }
                
                // Skip if loader already removed
                if (window.__LOADER_REMOVED__) {
                  return;
                }
                
                // Flag pour éviter les exécutions multiples
                if (window.__LOADER_REMOVING__) {
                  return;
                }
                
                // Flag pour éviter les exécutions multiples du script
                if (window.__LOADER_SCRIPT_RUNNING__) {
                  return;
                }
                window.__LOADER_SCRIPT_RUNNING__ = true;
                
                // Remove initial loader after page load or on error
                let loaderRemoved = false;
                
                function hideLoader() {
                  // Protection multiple : vérifier tous les flags
                  if (loaderRemoved || window.__LOADER_REMOVED__ || window.__LOADER_REMOVING__) {
                    return;
                  }
                  
                  // Marquer comme en cours de suppression
                  window.__LOADER_REMOVING__ = true;
                  loaderRemoved = true;
                  window.__LOADER_REMOVED__ = true;
                  
                  const loader = document.getElementById('initial-loader');
                  if (!loader) {
                    window.__LOADER_REMOVING__ = false;
                    return;
                  }
                  
                  // Vérifier que l'élément est toujours dans le DOM
                  if (!document.body.contains(loader)) {
                    window.__LOADER_REMOVING__ = false;
                    return;
                  }
                  
                  try {
                    // Utiliser uniquement le masquage CSS - ne jamais supprimer du DOM
                    loader.style.display = 'none';
                    loader.style.visibility = 'hidden';
                    loader.style.opacity = '0';
                    loader.style.pointerEvents = 'none';
                    loader.classList.add('fade-out');
                  } catch (e) {
                    // Ignorer les erreurs silencieusement
                  } finally {
                    window.__LOADER_REMOVING__ = false;
                  }
                }
                
                // Show loader only if page is loading (première visite)
                if (document.readyState === 'loading') {
                  const loader = document.getElementById('initial-loader');
                  if (loader && !window.__LOADER_REMOVED__) {
                    loader.style.display = 'flex';
                  }
                }
                
                // Execute immediately if DOM is ready
                if (document.readyState === 'complete' || document.readyState === 'interactive') {
                  // Use requestAnimationFrame to ensure DOM is ready
                  requestAnimationFrame(function() {
                    setTimeout(hideLoader, 100);
                  });
                } else {
                  // Wait for DOM to be ready
                  document.addEventListener('DOMContentLoaded', function() {
                    setTimeout(hideLoader, 100);
                  }, { once: true });
                }
                
                // Hide loader when page is fully loaded
                window.addEventListener('load', function() {
                  setTimeout(hideLoader, 200);
                }, { once: true });
                
                // Safety timeout: force hide after 800ms max
                setTimeout(hideLoader, 800);
                
                // Hide loader on navigation errors (404, etc.)
                window.addEventListener('error', hideLoader, { once: true });
                window.addEventListener('unhandledrejection', hideLoader, { once: true });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}

