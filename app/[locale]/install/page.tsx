'use client';

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from 'next-intl';
import { getTranslatedCanonical } from '@/lib/get-translated-canonical';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Smartphone, Zap, Download, Wifi, Bell } from "lucide-react";

export default function InstallPage() {
  const locale = useLocale();
  const t = useTranslations('GuidePages.install');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    document.title = t('documentTitle');

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log(t('console.installed'));
    }
    
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": t('schema.name'),
    "description": t('schema.description'),
    "applicationCategory": "CasinoApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <SEOHead
        locale={locale}
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords={t('seoKeywords')}
        canonical={getTranslatedCanonical('/install', locale)}
        ogTitle={t('ogTitle')}
        ogDescription={t('ogDescription')}
        ogImage="https://gigabonus.win/og-image.png"
        twitterTitle={t('twitterTitle')}
        twitterDescription={t('twitterDescription')}
        schema={schemaData}
      />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-1 pt-28 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />

            {/* Header */}
            <header className="text-center mb-12 mt-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-primary/10 mb-6">
                <Smartphone className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-pink-500 to-rose-500 bg-clip-text text-transparent">
                {t('title')}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('header.description')}
              </p>
            </header>

            {/* Install Button */}
            {isInstallable && (
              <div className="glass-card rounded-2xl p-8 text-center mb-12 border-2 border-primary/20">
                <Download className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-3">{t('installButton.title')}</h2>
                <p className="text-muted-foreground mb-6">
                  {t('installButton.description')}
                </p>
                <Button 
                  onClick={handleInstallClick}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {t('installButton.buttonText')}
                </Button>
              </div>
            )}

            {/* Avantages */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">{t('benefits.title')}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t('benefits.fastAccess.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('benefits.fastAccess.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Wifi className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t('benefits.offline.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('benefits.offline.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bell className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t('benefits.notifications.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('benefits.notifications.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{t('benefits.native.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('benefits.native.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Installation Guides */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold mb-8 text-center">{t('guides.title')}</h2>

              {/* Android Chrome */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  {t('guides.android.title')}
                </h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li>{t('guides.android.steps.1')}</li>
                  <li>{t('guides.android.steps.2')}</li>
                  <li>{t('guides.android.steps.3')}</li>
                  <li>{t('guides.android.steps.4')}</li>
                  <li>{t('guides.android.steps.5')}</li>
                </ol>
              </div>

              {/* iOS Safari */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  {t('guides.ios.title')}
                </h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li>{t('guides.ios.steps.1')}</li>
                  <li>{t('guides.ios.steps.2')}</li>
                  <li>{t('guides.ios.steps.3')}</li>
                  <li>{t('guides.ios.steps.4')}</li>
                  <li>{t('guides.ios.steps.5')}</li>
                </ol>
              </div>

              {/* Desktop */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  {t('guides.desktop.title')}
                </h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li>{t('guides.desktop.steps.1')}</li>
                  <li>{t('guides.desktop.steps.2')}</li>
                  <li>{t('guides.desktop.steps.3')}</li>
                  <li>{t('guides.desktop.steps.4')}</li>
                  <li>{t('guides.desktop.steps.5')}</li>
                </ol>
              </div>
            </section>

            {/* CTA Final */}
            <div className="mt-12 text-center glass-card rounded-2xl p-8 bg-gradient-to-br from-primary/5 to-pink-500/5">
              <h2 className="text-2xl font-bold mb-3">{t('cta.title')}</h2>
              <p className="text-muted-foreground mb-6">
                {t('cta.description')}
              </p>
              {isInstallable ? (
                <Button 
                  onClick={handleInstallClick}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {t('installButton.buttonTextAlt')}
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground">
                  {t('cta.fallback')}
                </p>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

