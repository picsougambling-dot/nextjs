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

export default function AvisSlotRushPage() {
  const locale = useLocale();
    const { countryCode: userCountry } = useUserCountry();
  
const casino = casinos.find(c => c.id === 4);
  
  
    
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
          "name": "SlotRush Casino",
          "image": "https://gigabonus.win/images/slotrush.webp"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.0",
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
        "datePublished": "2025-01-20",
        "dateModified": "2025-11-21",
        "reviewBody": "SlotRush Casino mérite une note de 4.0/5 pour son excellent équilibre entre casino généreux et bookmaker complet."
      },
      {
        "@type": "Article",
        "headline": "Avis SlotRush Casino 2025 : Test Complet - Bonus 350% + Bookmaker",
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
        "datePublished": "2025-01-20",
        "dateModified": "2025-11-21",
        "image": "https://gigabonus.win/images/slotrush.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quel est le bonus de bienvenue de SlotRush ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SlotRush offre un bonus de 350% jusqu'à 4000€ + 200 FS avec wager x40 et bookmaker intégré."
            }
          },
          {
            "@type": "Question",
            "name": "SlotRush est-il un bookmaker ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, SlotRush propose un bookmaker complet avec paris sportifs en plus du casino."
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
        title="🎰 Avis SlotRush 2025 : Casino + Bookmaker | 350% + 200 FS"
        description="🏆 SlotRush : Bonus 350% + 200 FS | Bookmaker intégré | Wager x40 | Paris sportifs | Note 4.0/5 | Test casino + sport 2025 ⚡"
        keywords="avis slotrush, slotrush casino, bonus 350%, bookmaker casino, 200 free spins, slotrush test, paris sportifs, wager x40"
        canonical="https://gigabonus.win/blog/avis-slotrush-2025"
        ogTitle="🎰 Avis SlotRush 2025 : Casino + Bookmaker | 350% + 200 FS"
        ogDescription="🏆 SlotRush : Bonus 350% + 200 FS | Bookmaker intégré | Wager x40 ⚡"
        ogImage="https://gigabonus.win/images/slotrush.webp"
        twitterTitle="🎰 Avis SlotRush 2025 : Casino + Bookmaker | 350% + 200 FS"
        twitterDescription="🏆 SlotRush : Bonus 350% + 200 FS | Bookmaker intégré ⚡"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <img 
              src="/images/slotrush.webp" 
              alt="SlotRush Casino Logo" 
              width="200" 
              height="96" 
              className="h-24 w-auto mx-auto mb-6" 
            />
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-primary">Avis SlotRush Casino 2025</span>
            </h1>
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
              <Star className="h-6 w-6 text-gray-300" />
              <span className="text-xl ml-2">4.0/5</span>
            </div>
          </header>

          {/* Bonus Section */}
          <div className="glass-card rounded-2xl p-8 mb-12 bg-primary/5 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Bonus de Bienvenue</h2>
                <p className="text-3xl font-bold text-primary">350% jusqu'à 4000€ + 200 FS</p>
                <p className="text-muted-foreground mt-2">Wager : x40</p>
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
              Notre Avis sur SlotRush Casino
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">SlotRush Casino</strong> combine intelligemment casino en ligne et bookmaker sous une 
                interface moderne et fluide. Le <strong className="text-foreground">bonus massif de 350% jusqu'à 4000€ + 200 Free Spins</strong> 
                en fait l'une des offres les plus généreuses de 2025. Avec un <strong className="text-foreground">wager de x40</strong>, les 
                conditions restent équilibrées vu l'ampleur du bonus.
              </p>
              <p>
                La <strong className="text-foreground">ludothèque riche de plus de 3000 jeux</strong> couvre tous les genres : machines à sous 
                (Sweet Bonanza, Gates of Olympus, Megaways), jeux de table (blackjack, roulette, baccarat), casino live avec croupiers Evolution Gaming, 
                et crash games (Aviator, JetX). La section <strong className="text-foreground">bookmaker professionnelle</strong> propose des cotes 
                compétitives sur tous les sports avec paris live et streaming.
              </p>
              <p>
                SlotRush garantit des <strong className="text-foreground">retraits rapides en 24-48h</strong> après validation KYC simplifiée. 
                Le casino accepte cartes bancaires, virements, e-wallets, Cashlib et <strong className="text-foreground">cryptomonnaies</strong> 
                pour des transactions sécurisées par SSL 256-bit. Le support 24/7 en français répond efficacement via chat live.
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
                  <span>Bonus massif 350% jusqu'à 4000€ + 200 FS</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Bookmaker intégré avec paris live</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>3000+ jeux incluant derniers hits</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Retraits rapides 24-48h crypto prioritaires</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Support 24/7 réactif en français</span>
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
                  <span>Wager x40 nécessite stratégie de jeu</span>
                </li>
                <li className="flex gap-2">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Pas de programme VIP public détaillé</span>
                </li>
                <li className="flex gap-2">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Interface bookmaker peut intimider débutants</span>
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
                  Le <strong className="text-foreground">bonus colossal de 350% jusqu'à 4000€ + 200 Free Spins</strong> est parmi les plus 
                  élevés du marché français. Le wager x40 reste équitable vu l'ampleur du montant. Les 200 FS sont distribués progressivement 
                  pour maintenir l'engagement.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Montant : 350% jusqu'à 4000€</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Free Spins : 200 FS progressifs</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Wager : x40 (dépôt + bonus)</span>
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
                  Offres Paris Sportifs
                </h3>
                <p className="text-muted-foreground">
                  Le bookmaker propose des promotions dédiées aux parieurs : boost de cotes, paris gratuits, et combos majorés. 
                  Couverture complète du football européen, tennis, basketball NBA et eSports avec 
                  <strong className="text-foreground"> paris en direct + streaming gratuit</strong>.
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
              SlotRush accepte <strong className="text-foreground">5 méthodes de paiement</strong> modernes pour transactions rapides et sécurisées.
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
                <strong className="text-foreground">SlotRush Casino</strong> protège vos données avec un 
                <strong className="text-foreground"> cryptage SSL 256-bit</strong> certifié niveau bancaire. La 
                <strong className="text-foreground"> licence Curaçao eGaming valide</strong> garantit l'équité des jeux et le respect 
                des normes internationales. Tous les jeux sont audités régulièrement par des organismes indépendants.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Cryptage SSL</p>
                  <p className="text-sm">256-bit certifié</p>
                </div>
                <div className="text-center">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Retraits 24-48h</p>
                  <p className="text-sm">Crypto prioritaire</p>
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
                <strong>SlotRush Casino</strong> mérite une note de <strong className="text-primary">4.0/5</strong> pour son excellent 
                équilibre entre <strong>casino généreux et bookmaker complet</strong>. Le bonus de 350% + 200 FS figure parmi les meilleurs 
                du marché, et le wager x40 reste gérable avec les 4000€ de capital bonus potentiel.
              </p>
              <p className="text-lg text-foreground">
                Recommandé pour : les joueurs polyvalents recherchant une <strong className="text-primary">plateforme tout-en-un</strong> 
                casino + sport avec bonus massif, retraits rapides et support réactif. Idéal pour maximiser son capital initial.
              </p>
              <div className="flex justify-center mt-6">
                <a 
                  href={casino?.playUrl || ""} 
                  target="_blank" 
                  rel="sponsored noopener noreferrer" className={!isAvailableInCountry ? "pointer-events-none opacity-50" : ""}
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-xl px-8 py-6" disabled={!isAvailableInCountry}>
                    <ExternalLink className="mr-2 h-6 w-6" />
                    Jouer sur SlotRush
                  </Button>
                </a>
              </div>
            </div>
          </section>

          <SEOEnrichedBlog 
            casinoName="SlotRush"
            bonus={casino?.bonusText || "350% jusqu'à 4000€ + 200 FS"}
            rating={4.0}
            reviewsCount={2000}
            slug="slotrush"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

