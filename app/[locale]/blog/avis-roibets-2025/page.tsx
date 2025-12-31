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

export default function AvisRoiBetsPage() {
  const locale = useLocale();
    const { countryCode: userCountry } = useUserCountry();
  
const casino = casinos.find(c => c.id === 11);
  
  
    
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
          "name": "RoiBets Casino",
          "image": "https://gigabonus.win/images/roibets.webp"
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
        "datePublished": "2025-01-18",
        "dateModified": "2025-11-21",
        "reviewBody": "RoiBets Casino mérite une note de 4.0/5 pour son bookmaker de qualité professionnelle et son bonus de 200%."
      },
      {
        "@type": "Article",
        "headline": "Avis RoiBets Casino 2025 : Test Complet - Bonus 200% + Bookmaker",
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
        "datePublished": "2025-01-18",
        "dateModified": "2025-11-21",
        "image": "https://gigabonus.win/images/roibets.webp"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quel est le bonus de bienvenue de RoiBets ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RoiBets offre un bonus de 200% jusqu'à 1500€ avec wager x40 et bookmaker complet."
            }
          },
          {
            "@type": "Question",
            "name": "RoiBets est-il un bookmaker ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, RoiBets propose un bookmaker de qualité professionnelle avec streaming gratuit."
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
        title="👑 Avis RoiBets 2025 : Le Roi des Paris | 200% + Bookmaker"
        description="🏆 RoiBets : Bonus 200% jusqu'à 1500€ | Bookmaker complet | Wager x40 | 5 paiements | Note 4.0/5 | Test roi des paris sportifs 2025 ⚡"
        keywords="avis roibets, roibets casino, bonus 200%, bookmaker, roi paris sportifs, roibets test, wager x40, casino 2025"
        canonical="https://gigabonus.win/blog/avis-roibets-2025"
        ogTitle="👑 Avis RoiBets 2025 : Le Roi des Paris | 200% + Bookmaker"
        ogDescription="🏆 RoiBets : Bonus 200% jusqu'à 1500€ | Bookmaker complet | Wager x40 ⚡"
        ogImage="https://gigabonus.win/images/roibets.webp"
        twitterTitle="👑 Avis RoiBets 2025 : Le Roi des Paris | 200% + Bookmaker"
        twitterDescription="🏆 RoiBets : Bonus 200% jusqu'à 1500€ | Bookmaker complet ⚡"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <img 
              src="/images/roibets.webp" 
              alt="RoiBets Casino Logo" 
              width="200" 
              height="96" 
              className="h-24 w-auto mx-auto mb-6" 
            />
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-primary">Avis RoiBets Casino 2025</span>
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
                <p className="text-3xl font-bold text-primary">200% jusqu'à 1500€</p>
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
              Notre Avis sur RoiBets Casino
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">RoiBets Casino</strong> porte bien son nom en se positionnant comme le 
                <strong className="text-foreground"> roi des paris sportifs</strong>. Cette plateforme hybride combine casino en ligne et 
                bookmaker professionnel avec un <strong className="text-foreground">bonus de 200% jusqu'à 1500€</strong>. Le focus principal 
                reste clairement les <strong className="text-foreground">paris sportifs</strong> avec une couverture exhaustive de tous les 
                sports majeurs mondiaux.
              </p>
              <p>
                Le casino propose une <strong className="text-foreground">ludothèque correcte de plus de 1800 jeux</strong> incluant les slots 
                populaires de Pragmatic Play et NetEnt. Cependant, c'est vraiment la section <strong className="text-foreground">paris sportifs 
                premium</strong> qui brille avec des cotes compétitives, des paris live avec streaming, et une interface bookmaker intuitive. 
                Les <strong className="text-foreground">retraits sous 24-48h</strong> et le support 24/7 complètent l'offre.
              </p>
              <p>
                RoiBets accepte 5 méthodes de paiement modernes : cartes bancaires, virements, Cashlib, cryptomonnaies et e-wallets pour des 
                transactions flexibles. La <strong className="text-foreground">licence Curaçao</strong> et le 
                <strong className="text-foreground"> cryptage SSL 256-bit</strong> garantissent sécurité et fiabilité.
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
                  <span>Bonus 200% jusqu'à 1500€ généreux</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Bookmaker complet avec cotes compétitives</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Paris live avec streaming en direct</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Retraits rapides en 24-48h</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>5 méthodes de paiement dont cryptos</span>
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
                  <span>Wager x40 plus élevé que la moyenne</span>
                </li>
                <li className="flex gap-2">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Catalogue casino limité comparé aux leaders</span>
                </li>
                <li className="flex gap-2">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Focus sport peut décevoir puristes casino</span>
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
                  Le <strong className="text-foreground">bonus de 200% jusqu'à 1500€</strong> s'adresse aux joueurs casino avec un wager 
                  standard de x40. Montant généreux mais conditions de mise sérieuses nécessitant stratégie.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Montant : 200% jusqu'à 1500€</span>
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
                  Bonus Paris Sportifs
                </h3>
                <p className="text-muted-foreground">
                  Les parieurs bénéficient d'offres dédiées avec rollover équitable. Le bookmaker couvre football (Ligue 1, Champions League), 
                  tennis (ATP, WTA), basketball (NBA), et eSports avec <strong className="text-foreground">paris en direct + streaming gratuit</strong>.
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
              RoiBets accepte <strong className="text-foreground">5 méthodes de paiement</strong> sécurisées adaptées aux besoins des parieurs.
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
                <strong className="text-foreground">RoiBets Casino</strong> garantit la sécurité royale avec un 
                <strong className="text-foreground"> cryptage SSL 256-bit</strong> de niveau bancaire. La 
                <strong className="text-foreground"> licence Curaçao eGaming</strong> certifie le respect des normes internationales. 
                Les paris sportifs sont soumis à des audits réguliers pour garantir l'équité des cotes.
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
                  <p className="text-sm">Traitement royal</p>
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
                <strong>RoiBets Casino</strong> mérite une note de <strong className="text-primary">4.0/5</strong> principalement pour son 
                <strong> bookmaker de qualité professionnelle</strong>. Le bonus de 200% avec wager x40 reste standard mais généreux. 
                L'expérience paris sportifs est excellente avec streaming gratuit et cotes compétitives.
              </p>
              <p className="text-lg text-foreground">
                Recommandé pour : les <strong className="text-primary">parieurs sportifs</strong> recherchant une plateforme complète 
                casino + bookmaker avec retraits rapides et support réactif. Moins adapté aux puristes casino.
              </p>
              <div className="flex justify-center mt-6">
                <a 
                  href={casino?.playUrl || ""} 
                  target="_blank" 
                  rel="sponsored noopener noreferrer" className={!isAvailableInCountry ? "pointer-events-none opacity-50" : ""}
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-xl px-8 py-6" disabled={!isAvailableInCountry}>
                    <ExternalLink className="mr-2 h-6 w-6" />
                    Jouer sur RoiBets
                  </Button>
                </a>
              </div>
            </div>
          </section>

          <SEOEnrichedBlog 
            casinoName="RoiBets"
            bonus={casino?.bonusText || "200% jusqu'à 1500€"}
            rating={4.0}
            reviewsCount={1800}
            slug="roibets"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

