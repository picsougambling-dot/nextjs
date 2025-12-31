'use client';

import { useEffect } from "react";
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useUserCountry } from '@/hooks/useUserCountry';
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnrichedBlog from "@/components/SEOEnrichedBlog";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";
import { Star, CheckCircle2, XCircle, Trophy, ExternalLink, CreditCard, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AvisHotLootPage() {
  const locale = useLocale();
    const { countryCode: userCountry } = useUserCountry();
  
const casino = casinos.find(c => c.id === 9);
  
  
    
  // Vérifier si le casino est disponible dans le pays de l'utilisateur
  const isAvailableInCountry = !!userCountry && (
    !casino?.availableCountries || 
    casino.availableCountries.length === 0 || 
    casino.availableCountries.includes(userCountry)
  );
const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "OnlineBusiness",
          "name": "HotLoot Casino",
          "image": "https://gigabonus.win/images/hotloot.webp"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.1",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior",
          "description": "Expert en casinos en ligne avec 15 ans d'expérience et plus de 500 casinos testés"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus",
          "url": "https://gigabonus.win"
        },
        "datePublished": "2025-01-15",
        "dateModified": "2025-11-21",
        "reviewBody": "HotLoot mérite une note de 4.1/5 pour sa combinaison casino + bookmaker réussie avec bonus de 300% et wager x30 favorable."
      },
      {
        "@type": "Article",
        "headline": "Avis HotLoot Casino 2025 : Test Complet - Bonus 300% + Bookmaker",
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus",
          "url": "https://gigabonus.win",
          "logo": {
            "@type": "ImageObject",
            "url": "https://gigabonus.win/gigabonus-logo.webp"
          }
        },
        "datePublished": "2025-01-15",
        "dateModified": "2025-11-21",
        "image": "https://gigabonus.win/images/hotloot.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quel est le bonus de bienvenue de HotLoot ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HotLoot offre un bonus de 300% jusqu'à 1200€ avec un wager favorable de x30."
            }
          },
          {
            "@type": "Question",
            "name": "HotLoot est-il un bookmaker ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, HotLoot propose à la fois un casino et un bookmaker complet avec paris sportifs."
            }
          }
        ]
      }
    ]
  };

  if (!casino) {
    return <div>Casino non trouvé</div>;
  }

  // Si le casino n'est pas disponible dans le pays, ne pas afficher la page
  if (!isAvailableInCountry) {
    return (
      <>
        <Navbar />
        <Breadcrumbs />
        <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Casino non disponible</h1>
            <p className="text-muted-foreground mb-8">Ce casino n'est pas disponible dans votre pays.</p>
            <Link href={`/${locale}/blog`}>
              <Button>Retour au blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        locale={locale}
        title="🔥 Avis HotLoot 2025 : Casino + Bookmaker | 300% Wager x30"
        description="🏆 HotLoot : Bonus 300% jusqu'à 1200€ | Bookmaker complet | Wager x30 favorable | 5 paiements | Note 4.1/5 | Test casino + paris sportifs 2025 ⚡"
        keywords="avis hotloot, hotloot casino, bonus 300%, bookmaker, wager x30, hotloot test, paris sportifs, casino 2025"
        canonical="https://gigabonus.win/blog/avis-hotloot-2025"
        ogTitle="🔥 Avis HotLoot 2025 : Casino + Bookmaker | 300% Wager x30"
        ogDescription="🏆 HotLoot : Bonus 300% jusqu'à 1200€ | Bookmaker complet | Wager x30 favorable ⚡"
        ogImage="https://gigabonus.win/images/hotloot.webp"
        twitterTitle="🔥 Avis HotLoot 2025 : Casino + Bookmaker | 300% Wager x30"
        twitterDescription="🏆 HotLoot : Bonus 300% jusqu'à 1200€ | Bookmaker complet ⚡"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <img 
              src="/images/hotloot.webp" 
              alt="HotLoot Casino Logo" 
              width="200" 
              height="96" 
              className="h-24 w-auto mx-auto mb-6" 
            />
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-primary">Avis HotLoot Casino 2025</span>
            </h1>
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
              <Star className="h-6 w-6 text-gray-300" />
              <span className="text-xl ml-2">4.1/5</span>
            </div>
          </header>

          {/* Bonus Section */}
          <div className="glass-card rounded-2xl p-8 mb-12 bg-primary/5 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Bonus de Bienvenue</h2>
                <p className="text-3xl font-bold text-primary">300% jusqu'à 1200€</p>
                <p className="text-muted-foreground mt-2">Wager : x30</p>
              </div>
              <a 
                href={casino?.playUrl || ""} 
                target="_blank" 
                rel="sponsored noopener noreferrer" className={!isAvailableInCountry ? "pointer-events-none opacity-50" : ""}
              >
                <Button size="lg" disabled={!isAvailableInCountry}>
                  Réclamez le Bonus <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Notre Avis */}
          <article className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Trophy className="h-8 w-8" />
              Notre Avis sur HotLoot Casino
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">HotLoot Casino</strong> se positionne comme une plateforme 2-en-1 combinant 
                <strong className="text-foreground"> casino en ligne et bookmaker complet</strong>. Lancé en 2024, ce casino nouvelle génération 
                séduit par son <strong className="text-foreground">bonus généreux de 300% jusqu'à 1200€</strong> avec un 
                <strong className="text-foreground"> wager favorable de x30</strong>, bien plus accessible que la moyenne du marché (x40-x50).
              </p>
              <p>
                Le casino propose une <strong className="text-foreground">ludothèque de plus de 2500 jeux</strong> incluant les derniers hits de 
                Pragmatic Play, NetEnt et Play'n GO. La section <strong className="text-foreground">paris sportifs</strong> couvre tous les sports majeurs 
                (football, tennis, basketball) avec des cotes compétitives et des paris en direct. Les 
                <strong className="text-foreground"> retraits sous 24-48h</strong> et le support 24/7 complètent cette offre polyvalente.
              </p>
              <p>
                HotLoot accepte 5 méthodes de paiement modernes : cartes bancaires, virements, Cashlib, cryptomonnaies et e-wallets pour des 
                transactions flexibles et sécurisées. La <strong className="text-foreground">licence Curaçao</strong> et le 
                <strong className="text-foreground"> cryptage SSL 256-bit</strong> garantissent la sécurité maximale des données et des fonds.
              </p>
            </div>
          </article>

          {/* Avantages / Inconvénients */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Avantages
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Bonus 300% généreux avec wager x30 favorable</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Bookmaker intégré avec cotes compétitives</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Retraits rapides en 24-48h toutes méthodes</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>5 méthodes de paiement dont cryptos</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Support client 24/7 réactif en français</span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-destructive flex items-center gap-2">
                <XCircle className="h-6 w-6" />
                Inconvénients
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Catalogue de jeux moins fourni que concurrents</span>
                </li>
                <li className="flex gap-2">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Pas de programme VIP détaillé visible</span>
                </li>
                <li className="flex gap-2">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Interface bookmaker perfectible</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bonus et Promotions */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">🎁 Bonus et Promotions</h2>
            
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 bg-primary/5">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  Bonus de Bienvenue Casino
                </h3>
                <p className="text-muted-foreground mb-4">
                  Le <strong className="text-foreground">bonus de 300% jusqu'à 1200€</strong> est l'un des plus généreux du marché. 
                  Avec un wager de x30, il se démarque favorablement de la concurrence (généralement x40-x50). 
                  Dépôt minimum accessible de 20€.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Montant : 300% jusqu'à 1200€</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Wager : x30 (dépôt + bonus)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Validité : 30 jours</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6 bg-primary/5">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  Bonus Sport
                </h3>
                <p className="text-muted-foreground">
                  Les amateurs de paris sportifs bénéficient d'offres dédiées avec cotes minimales compétitives. 
                  Le bookmaker couvre football, tennis, basketball et eSports avec paris en direct.
                </p>
              </div>
            </div>
          </section>

          {/* Méthodes de Paiement */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <CreditCard className="h-8 w-8" />
              Méthodes de Paiement
            </h2>
            <p className="text-muted-foreground mb-6">
              HotLoot accepte <strong className="text-foreground">5 méthodes de paiement</strong> sécurisées pour dépôts et retraits.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="glass-card rounded-xl p-4 text-center">
                <img src="/images/methods/carte-bancaire.webp" alt="Carte Bancaire" className="h-12 mx-auto mb-2" />
                <p className="font-semibold">Carte Bancaire</p>
                <p className="text-xs text-muted-foreground">Instantané</p>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <img src="/images/methods/virement-bancaire.webp" alt="Virement" className="h-12 mx-auto mb-2" />
                <p className="font-semibold">Virement</p>
                <p className="text-xs text-muted-foreground">1-3 jours</p>
              </div>
              <div className="glass-card rounded-xl p-4 text-center">
                <img src="/images/methods/crypto.webp" alt="Cryptos" className="h-12 mx-auto mb-2" />
                <p className="font-semibold">Cryptomonnaies</p>
                <p className="text-xs text-muted-foreground">Instantané</p>
              </div>
            </div>
          </section>

          {/* Sécurité et Fiabilité */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Shield className="h-8 w-8" />
              Sécurité et Fiabilité
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">HotLoot Casino</strong> garantit la sécurité maximale avec un 
                <strong className="text-foreground"> cryptage SSL 256-bit</strong> de niveau bancaire protégeant toutes les transactions 
                et données personnelles. La <strong className="text-foreground">licence Curaçao eGaming</strong> assure le respect des 
                normes internationales de jeu responsable.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Cryptage SSL</p>
                  <p className="text-sm">256-bit militaire</p>
                </div>
                <div className="text-center">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Retraits 24-48h</p>
                  <p className="text-sm">Traitement rapide</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Support 24/7</p>
                  <p className="text-sm">Chat + Email</p>
                </div>
              </div>
            </div>
          </section>

          {/* Notre Verdict */}
          <section className="glass-card rounded-2xl p-8 mb-8 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Trophy className="h-8 w-8" />
              Notre Verdict Final
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-foreground">
                <strong>HotLoot Casino</strong> mérite une note de <strong className="text-primary">4.1/5</strong> pour sa combinaison 
                casino + bookmaker réussie. Le <strong>bonus de 300% avec wager x30 favorable</strong> le place parmi les offres les plus 
                accessibles de 2025. Les retraits rapides et le support réactif compensent un catalogue de jeux moins étendu que certains 
                concurrents.
              </p>
              <p className="text-lg text-foreground">
                Recommandé pour : les joueurs recherchant une <strong className="text-primary">plateforme polyvalente</strong> casino + sport 
                avec des conditions de bonus équitables et des retraits rapides.
              </p>
              <div className="flex justify-center mt-6">
                <a 
                  href={casino?.playUrl || ""} 
                  target="_blank" 
                  rel="sponsored noopener noreferrer" className={!isAvailableInCountry ? "pointer-events-none opacity-50" : ""}
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-xl px-8 py-6" disabled={!isAvailableInCountry}>
                    <ExternalLink className="mr-2 h-6 w-6" />
                    Jouer sur HotLoot
                  </Button>
                </a>
              </div>
            </div>
          </section>

          <SEOEnrichedBlog 
            casinoName="HotLoot"
            bonus={casino?.bonusText || "300% jusqu'à 1200€"}
            rating={4.1}
            reviewsCount={1900}
            slug="hotloot"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

