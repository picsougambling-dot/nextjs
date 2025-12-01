'use client';


import { useEffect } from "react";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import Footer from "@/components/Footer";
import SEOEnrichedBlog from "@/components/SEOEnrichedBlog";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";

import { Star, CheckCircle2, XCircle, Trophy, CreditCard, Gamepad2, Shield, ExternalLink, Calendar, Coins, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AvisSpinDinastyPage() {
  const casino = casinos.find(c => c.id === 8);
  
  

  const relatedLinks = [
    {
      title: "Bonus Sans Wager",
      description: "Casinos avec bonus sans conditions de mise",
      href: "/bonus-sans-wager"
    },
    {
      title: "Avis Kings Chance 2025",
      description: "Casino avec bonus 150% sans wager strict",
      href: "/blog/avis-kingschance-2025"
    },
    {
      title: "Top Casinos Crypto 2025",
      description: "Découvrez les meilleurs casinos crypto",
      href: "/top-casinos-crypto"
    }
  ];

  
  const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "Casino",
        "name": "Avis Spin Dinasty 2025",
        "image": "https://gigabonus.win/images/spindinasty.webp"
      },
      "author": {
        "@type": "Person",
        "name": "Alexandre Martin",
        "jobTitle": "Expert Casino Senior"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.5",
        "bestRating": "10",
        "worstRating": "1"
      },
      "reviewBody": "Spin Dinasty, le casino avec un bonus de 200% jusqu'à 500€ + 50 Free Spins sans wager strict.",
      "datePublished": "2025-10-09",
      "publisher": {
        "@type": "Organization",
        "name": "GigaBonus"
      }
    },
    {
      "@type": "Article",
      "headline": "🎰 Avis Spin Dinasty 2025 : Test Complet + Bonus 200% jusqu'à 500€ + 50 FS | GigaBonus",
      "description": "⭐ Avis complet Spin Dinasty 2025 : bonus 200% + 50 FS sans wager strict, retraits rapides, cryptos acceptées. Test détaillé par nos experts.",
      "image": "https://gigabonus.win/images/spindinasty.webp",
      "datePublished": "2025-10-09T10:00:00+01:00",
      "dateModified": "2025-11-28T00:45:35.337Z",
      "author": {
        "@type": "Person",
        "name": "Alexandre Martin"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GigaBonus",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gigabonus.win/gigabonus-logo.webp"
        }
      }
    }
  ]
};

  return (
    <>
      <SEOHead
        title="🎰 Avis Spin Dinasty 2025 : Test Complet + Bonus 200% jusqu'à 500€ + 50 FS | GigaBonus"
        description="⭐ Avis complet Spin Dinasty 2025 : bonus 200% + 50 FS sans wager strict, retraits rapides, cryptos acceptées. Test détaillé par nos experts."
        keywords="avis spin dinasty, spin dinasty casino, bonus spin dinasty, spin dinasty 2025, test spin dinasty, spin dinasty fiable"
        canonical="https://gigabonus.win/blog/avis-spindinasty-2025"
        ogTitle="🎰 Avis Spin Dinasty 2025 : Test Complet + Bonus 200%"
        ogDescription="⭐ Notre test détaillé de Spin Dinasty : bonus 200% + 50 FS sans wager strict. Avis d'experts."
        ogImage="https://gigabonus.win/images/spindinasty.webp"
        twitterTitle="🎰 Avis Spin Dinasty 2025 : Test Complet + Bonus 200%"
        twitterDescription="⭐ Notre test détaillé de Spin Dinasty : bonus 200% + 50 FS sans wager strict. Avis d'experts."
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/images/spindinasty.webp" 
                alt="Spin Dinasty Casino Logo - Avis 2025" 
                width="200"
                height="96"
                loading="eager"
                className="h-24 w-auto object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Avis Complet Spin Dinasty 2025</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-6 w-6 ${i < 4 ? 'fill-primary text-primary' : 'text-gray-300'}`} />
              ))}
              <span className="text-xl font-semibold ml-2">4.5/5</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime="2025-10-09">Publié le 9 octobre 2025</time>
              <span>•</span>
              <span>Mis à jour : 9 octobre 2025</span>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre avis détaillé sur Spin Dinasty, le casino avec un bonus généreux de 200% et des conditions de mise souples.
            </p>
          </header>

          <div className="glass-card rounded-2xl p-8 mb-12 bg-primary/5 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Bonus de Bienvenue Généreux</h2>
                <p className="text-3xl font-bold text-primary">200% jusqu'à 500€ + 50 FS</p>
                <p className="text-muted-foreground mt-2">Pas de wager strict • Dépôt min : 20€</p>
              </div>
              <a href="https://www.spindynastylinks.com/click/93/416/2140/1" target="_blank" rel="sponsored noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-6">
                  Réclamez le Bonus <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <article className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Notre Avis sur Spin Dinasty Casino</h2>
            <p className="text-foreground mb-4 leading-relaxed">
              Spin Dinasty se distingue par son <strong>bonus de 200% jusqu'à 500€</strong> accompagné de <strong>50 Free Spins</strong> et surtout par ses <strong>conditions de mise souples</strong> sans wager strict. Cette flexibilité en fait une option attractive pour les joueurs qui souhaitent retirer leurs gains plus facilement.
            </p>
            <p className="text-foreground leading-relaxed">
              Le casino accepte les <strong>cryptomonnaies</strong> et propose des <strong>retraits rapides en 24-48h</strong>. Avec une collection de plus de 3000 jeux et un support client réactif, Spin Dinasty offre une expérience de jeu complète sous licence Curaçao.
            </p>
          </article>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Avantages
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Bonus 200% très généreux</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Pas de wager strict</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Cryptomonnaies acceptées</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Retraits rapides (24-48h)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>3000+ jeux disponibles</span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-orange-500 flex items-center gap-2">
                <XCircle className="h-6 w-6" />
                Inconvénients
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Bonus plafonné à 500€</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Vérification KYC obligatoire</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Moins de méthodes que concurrents</span>
                </li>
              </ul>
            </div>
          </div>

          <article className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Trophy className="h-8 w-8" />
              Bonus et Promotions Spin Dinasty
            </h2>
            
            <div className="space-y-6">
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-2xl font-bold mb-3">🎁 Bonus de Bienvenue : 200% jusqu'à 500€ + 50 FS</h3>
                <p className="text-foreground mb-4">
                  Spin Dinasty offre un <strong>bonus de 200%</strong> sur votre premier dépôt jusqu'à 500€, accompagné de <strong>50 Free Spins</strong>, le tout avec des conditions de mise souples.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Montant :</strong> 200% jusqu'à 500€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Free Spins :</strong> 50 FS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Dépôt minimum :</strong> 20€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Wager :</strong> Conditions souples</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-2xl font-bold mb-3">🔄 Promotions Régulières</h3>
                <p className="text-foreground">
                  Reload bonus et cashback hebdomadaire pour fidéliser les joueurs réguliers.
                </p>
              </div>
            </div>
          </article>

          <section className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Gamepad2 className="h-8 w-8" />
              Catalogue de Jeux Spin Dinasty
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="text-3xl mb-3">🎰</div>
                <h3 className="font-bold mb-2">Machines à Sous</h3>
                <p className="text-sm text-muted-foreground">2500+ slots de tous les providers majeurs</p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="text-3xl mb-3">🎲</div>
                <h3 className="font-bold mb-2">Casino Live</h3>
                <p className="text-sm text-muted-foreground">Tables avec croupiers en direct</p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="text-3xl mb-3">🃏</div>
                <h3 className="font-bold mb-2">Jeux de Table</h3>
                <p className="text-sm text-muted-foreground">Blackjack, Roulette, Baccarat</p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Coins className="h-8 w-8" />
              Méthodes de Paiement
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-4">💳 Méthodes Acceptées</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Cartes bancaires</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Cryptomonnaies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Cashlib</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Virement bancaire</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">⚡ Délais et Limites</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Dépôt minimum : <strong className="text-foreground">20€</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Retrait minimum : <strong className="text-foreground">50€</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Délai retrait : <strong className="text-foreground">24-48h</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-16 bg-blue-500/5 border-2 border-blue-500/20">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Shield className="h-8 w-8" />
              Sécurité et Licence
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Spin Dinasty opère sous <strong className="text-foreground">licence Curaçao eGaming</strong> avec un <strong className="text-foreground">chiffrement SSL</strong> pour protéger toutes les transactions.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Licence Valide</p>
                    <p className="text-sm">Curaçao eGaming</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Jeu Responsable</p>
                    <p className="text-sm">Outils de protection</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-16 text-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20">
            <h2 className="text-3xl font-bold mb-4 text-primary">Prêt à Rejoindre Spin Dinasty ?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Profitez du <strong className="text-foreground">bonus de 200% + 50 FS</strong> avec des conditions souples et des retraits rapides.
            </p>
            <a 
              href="https://www.spindynastylinks.com/click/93/416/2140/1" 
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Jouer sur Spin Dinasty
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              18+ | Jouer comporte des risques | <a href="https://www.joueurs-info-service.fr" className="underline hover:text-primary">Aide & Support</a>
            </p>
          </section>

          <RelatedLinks links={relatedLinks} />

          <SEOEnrichedBlog 
            casinoName="Spin Dinasty"
            bonus={casino?.bonusText || "200% jusqu'à 500€ + 50 FS"}
            rating={4.5}
            reviewsCount={2700}
            slug="spindinasty"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};



