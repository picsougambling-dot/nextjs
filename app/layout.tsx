import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import DecorativeShapes from "@/components/DecorativeShapes";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GigaBonus",
    template: "%s",
  },
  description: "Comparateur N°1 des bonus de casino en ligne 2025 ⭐ Bonus jusqu'à 700% + 725 Free Spins ✓ Avis d'experts ✓ Casinos fiables et sécurisés ✓ Retraits rapides",
  keywords: ["comparateur bonus casino", "meilleurs bonus casino 2025", "bonus casino en ligne", "casino fiable", "bonus 400%", "bonus sans wager", "casino crypto", "cashback casino", "free spins", "wager casino", "depot casino"],
  authors: [{ name: "GigaBonus" }],
  creator: "GigaBonus",
  publisher: "GigaBonus",
  metadataBase: new URL("https://gigabonus.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://gigabonus.fr",
    siteName: "GigaBonus",
    title: "GigaBonus | Meilleurs Casinos en Ligne 2025 avec Bonus Exclusifs",
    description: "Comparateur des meilleurs casinos en ligne 2025 avec bonus exclusifs jusqu'à 300%. Revues détaillées, casinos crypto, retraits rapides.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GigaBonus - Comparateur de Casinos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GigaBonus | Meilleurs Casinos en Ligne 2025 avec Bonus Exclusifs",
    description: "Comparateur des meilleurs casinos en ligne 2025 avec bonus exclusifs jusqu'à 300%. Revues détaillées, casinos crypto, retraits rapides.",
    images: ["/og-image.png"],
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
  themeColor: "#e91e63",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Google Analytics - Ultra Deferred */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                setTimeout(function() {
                  var script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TVGXTR18DQ';
                  document.body.appendChild(script);
                  
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);} 
                  gtag('js', new Date());
                  gtag('config', 'G-TVGXTR18DQ');
                }, 2000);
              });
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
              "url": "https://gigabonus.fr",
              "description": "Comparateur des meilleurs bonus de casino en ligne 2025",
              "publisher": {
                "@type": "Organization",
                "name": "GigaBonus",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://gigabonus.fr/pwa-512x512.png",
                },
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://gigabonus.fr/?search={search_term_string}",
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
              "url": "https://gigabonus.fr",
              "logo": "https://gigabonus.fr/pwa-512x512.png",
              "description": "Comparateur des meilleurs bonus de casino en ligne avec avis d'experts",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "availableLanguage": ["French", "English", "Spanish", "German", "Portuguese", "Italian"],
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
                if (window.__LOADER_REMOVED__ || window.__LOADER_REMOVING__) return;
                
                const loader = document.getElementById('initial-loader');
                if (loader && loader.parentNode) {
                  // Marquer comme en cours de suppression
                  window.__LOADER_REMOVING__ = true;
                  window.__LOADER_REMOVED__ = true;
                  
                  try {
                    loader.style.display = 'none';
                    loader.remove();
                  } catch (e) {
                    // Si remove() échoue, utiliser removeChild de manière sécurisée
                    try {
                      if (loader.parentNode) {
                        loader.parentNode.removeChild(loader);
                      }
                    } catch (err) {
                      // Ignorer l'erreur si l'élément n'existe plus
                      console.warn('Loader already removed');
                    }
                  } finally {
                    window.__LOADER_REMOVING__ = false;
                  }
                }
              }
            `,
          }}
        />
        {/* Initial Loader */}
        <div id="initial-loader" className="loader-container" style={{ display: 'none' }}>
          <img 
            src="/gigabonus-logo.webp" 
            alt="GigaBonus" 
            className="loader-logo"
            width="140"
            height="140"
          />
        </div>
        <Providers>
          <DecorativeShapes />
          {children}
          <ScrollToTop />
        </Providers>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Skip if loader already removed
                if (window.__LOADER_REMOVED__) return;
                
                // Flag pour éviter les exécutions multiples
                if (window.__LOADER_REMOVING__) return;
                
                // Flag pour éviter les exécutions multiples du script
                if (window.__LOADER_SCRIPT_RUNNING__) return;
                window.__LOADER_SCRIPT_RUNNING__ = true;
                
                // Remove initial loader after page load or on error
                let loaderRemoved = false;
                
                function removeLoader() {
                  // Protection multiple : vérifier tous les flags
                  if (loaderRemoved || window.__LOADER_REMOVED__ || window.__LOADER_REMOVING__) return;
                  
                  // Marquer comme en cours de suppression
                  window.__LOADER_REMOVING__ = true;
                  loaderRemoved = true;
                  window.__LOADER_REMOVED__ = true;
                  
                  const loader = document.getElementById('initial-loader');
                  if (!loader) {
                    window.__LOADER_REMOVING__ = false;
                    return;
                  }
                  
                  // Vérifier que l'élément est toujours dans le DOM avant de le modifier
                  if (!loader.parentNode) {
                    window.__LOADER_REMOVING__ = false;
                    return;
                  }
                  
                  try {
                    loader.style.display = 'none';
                    loader.classList.add('fade-out');
                    
                    setTimeout(function() {
                      // Vérifier à nouveau avant de supprimer
                      const loaderCheck = document.getElementById('initial-loader');
                      if (!loaderCheck) {
                        window.__LOADER_REMOVING__ = false;
                        return;
                      }
                      
                      if (!loaderCheck.parentNode) {
                        window.__LOADER_REMOVING__ = false;
                        return;
                      }
                      
                      try {
                        // Essayer remove() d'abord
                        loaderCheck.remove();
                      } catch (e) {
                        // Si remove() échoue, utiliser removeChild de manière sécurisée
                        try {
                          if (loaderCheck.parentNode) {
                            loaderCheck.parentNode.removeChild(loaderCheck);
                          }
                        } catch (err) {
                          // Ignorer l'erreur si l'élément n'existe plus
                          console.warn('Loader already removed');
                        }
                      } finally {
                        window.__LOADER_REMOVING__ = false;
                      }
                    }, 400);
                  } catch (e) {
                    window.__LOADER_REMOVING__ = false;
                    console.warn('Error removing loader:', e);
                  }
                }
                
                // Show loader only if page is loading
                if (document.readyState === 'loading') {
                  const loader = document.getElementById('initial-loader');
                  if (loader) {
                    loader.style.display = 'flex';
                  }
                }
                
                // Execute immediately if DOM is ready
                if (document.readyState === 'complete' || document.readyState === 'interactive') {
                  // Use requestAnimationFrame to ensure DOM is ready
                  requestAnimationFrame(function() {
                    setTimeout(removeLoader, 100);
                  });
                } else {
                  // Wait for DOM to be ready
                  document.addEventListener('DOMContentLoaded', function() {
                    setTimeout(removeLoader, 100);
                  }, { once: true });
                }
                
                // Remove loader when page is fully loaded
                window.addEventListener('load', function() {
                  setTimeout(removeLoader, 200);
                }, { once: true });
                
                // Safety timeout: force remove after 800ms max
                setTimeout(removeLoader, 800);
                
                // Remove loader on navigation errors (404, etc.)
                window.addEventListener('error', removeLoader, { once: true });
                window.addEventListener('unhandledrejection', removeLoader, { once: true });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}

