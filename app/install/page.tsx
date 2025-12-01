'use client';

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Smartphone, Zap, Download, Wifi, Bell } from "lucide-react";

export default function InstallPage() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    document.title = "Installer l'App GigaBonus | Progressive Web App";

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
      console.log('App installée avec succès');
    }
    
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "GigaBonus - Progressive Web App",
    "description": "Installez l'application GigaBonus sur votre appareil pour une expérience optimale. Accès instantané, mode hors ligne, et notifications.",
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
        title="Installer l'App GigaBonus | Progressive Web App | GigaBonus"
        description="Installez l'application GigaBonus sur votre appareil pour une expérience optimale. Accès instantané, mode hors ligne, notifications push et bien plus encore."
        keywords="installer gigabonus, app gigabonus, pwa gigabonus, application casino, installer app casino, progressive web app casino"
        canonical="https://gigabonus.fr/install"
        ogTitle="Installer l'App GigaBonus | Progressive Web App"
        ogDescription="Installez l'application GigaBonus sur votre appareil pour une expérience optimale. Accès instantané, mode hors ligne, notifications."
        ogImage="https://gigabonus.fr/og-image.png"
        twitterTitle="Installer l'App GigaBonus | Progressive Web App"
        twitterDescription="Installez l'application GigaBonus sur votre appareil pour une expérience optimale."
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
                Installer l'App GigaBonus
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Profitez d'une expérience optimale avec l'application mobile GigaBonus. 
                Accès instantané, mode hors ligne, et bien plus encore.
              </p>
            </header>

            {/* Install Button */}
            {isInstallable && (
              <div className="glass-card rounded-2xl p-8 text-center mb-12 border-2 border-primary/20">
                <Download className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-3">Installation Rapide</h2>
                <p className="text-muted-foreground mb-6">
                  Cliquez sur le bouton ci-dessous pour installer GigaBonus sur votre appareil
                </p>
                <Button 
                  onClick={handleInstallClick}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Installer Maintenant
                </Button>
              </div>
            )}

            {/* Avantages */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi Installer l'App ?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Accès Ultra-Rapide</h3>
                      <p className="text-muted-foreground">
                        Lancez l'app en un clic depuis votre écran d'accueil. 
                        Temps de chargement instantané grâce au cache intelligent.
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
                      <h3 className="text-xl font-bold mb-2">Mode Hors Ligne</h3>
                      <p className="text-muted-foreground">
                        Consultez vos casinos favoris même sans connexion internet. 
                        Les pages visitées restent accessibles.
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
                      <h3 className="text-xl font-bold mb-2">Notifications Exclusives</h3>
                      <p className="text-muted-foreground">
                        Recevez des alertes pour les nouveaux bonus exclusifs et promotions limitées (prochainement).
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
                      <h3 className="text-xl font-bold mb-2">Expérience Native</h3>
                      <p className="text-muted-foreground">
                        Interface plein écran optimisée pour mobile et desktop. 
                        Fonctionne comme une vraie application.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Installation Guides */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold mb-8 text-center">Guide d'Installation</h2>

              {/* Android Chrome */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  📱 Android (Chrome)
                </h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li>1. Ouvrez gigabonus.fr dans Chrome</li>
                  <li>2. Appuyez sur le menu ⋮ (trois points en haut à droite)</li>
                  <li>3. Sélectionnez "Installer l'application" ou "Ajouter à l'écran d'accueil"</li>
                  <li>4. Confirmez l'installation</li>
                  <li>5. L'icône GigaBonus apparaît sur votre écran d'accueil ✅</li>
                </ol>
              </div>

              {/* iOS Safari */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  🍎 iPhone/iPad (Safari)
                </h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li>1. Ouvrez gigabonus.fr dans Safari</li>
                  <li>2. Appuyez sur le bouton Partager 📤 (en bas de l'écran)</li>
                  <li>3. Faites défiler et sélectionnez "Sur l'écran d'accueil"</li>
                  <li>4. Donnez un nom (ex: "GigaBonus") et confirmez</li>
                  <li>5. L'application est maintenant sur votre iPhone ✅</li>
                </ol>
              </div>

              {/* Desktop */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  💻 Ordinateur (Chrome/Edge)
                </h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li>1. Ouvrez gigabonus.fr dans Chrome ou Edge</li>
                  <li>2. Cliquez sur l'icône ➕ dans la barre d'adresse (à droite)</li>
                  <li>3. Ou allez dans Menu {'>'} "Installer GigaBonus"</li>
                  <li>4. Confirmez l'installation</li>
                  <li>5. L'app s'ouvre dans une fenêtre dédiée ✅</li>
                </ol>
              </div>
            </section>

            {/* CTA Final */}
            <div className="mt-12 text-center glass-card rounded-2xl p-8 bg-gradient-to-br from-primary/5 to-pink-500/5">
              <h2 className="text-2xl font-bold mb-3">Prêt à Profiter de la Meilleure Expérience ?</h2>
              <p className="text-muted-foreground mb-6">
                Installez GigaBonus maintenant et accédez instantanément aux meilleurs bonus casino
              </p>
              {isInstallable ? (
                <Button 
                  onClick={handleInstallClick}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Installer l'Application
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Suivez les instructions ci-dessus pour installer l'app sur votre appareil
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

