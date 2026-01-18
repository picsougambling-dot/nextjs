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

import { Star, CheckCircle2, XCircle, Trophy, CreditCard, Gamepad2, Shield, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AvisBonRushPage() {
  const locale = useLocale();
  

  
      const { countryCode: userCountry } = useUserCountry();
  const isAvailableInCountry = true; // Pas de données casino pour cette page
  
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "Casino",
        "name": "Avis BonRush 2026",
        "image": "https://gigabonus.win/images/bonrush.webp"
      },
      "author": {
        "@type": "Person",
        "name": "Alexandre Martin",
        "jobTitle": "Expert Casino Senior"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "9.1",
        "bestRating": "10",
        "worstRating": "1"
      },
      "reviewBody": "BonRush se distingue par son système de bonus progressif adaptatif allant jusqu'à 400% pour les high-rollers. Ludothèque 2800+ jeux, retraits rapides 24-48h.",
      "datePublished": "2026-01-15",
      "publisher": {
        "@type": "Organization",
        "name": "GigaBonus"
      }
    },
    {
      "@type": "Article",
      "headline": "🎰 Avis BonRush 2026 : Bonus Exceptionnel 400% jusqu'à 2000€ | GigaBonus",
      "description": "⭐ Avis complet BonRush 2026 : bonus colossal 400% jusqu'à 2000€ + 100 FS ! L'un des taux les plus élevés du marché. Test par nos experts casino.",
      "image": "https://gigabonus.win/images/bonrush.webp",
      "datePublished": "2026-01-15T10:00:00+01:00",
      "dateModified": "2026-11-28T00:45:35.313Z",
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
        locale={locale}
        title="🎰 Avis BonRush 2026 : Bonus Exceptionnel 400% jusqu'à 2000€ | GigaBonus"
        description="⭐ Avis complet BonRush 2026 : bonus colossal 400% jusqu'à 2000€ + 100 FS ! L'un des taux les plus élevés du marché. Test par nos experts casino."
        keywords="avis bonrush, bonrush casino, bonus bonrush 400%, bonrush 2026, test bonrush, bonrush fiable"
        canonical={`https://gigabonus.win/${locale}/blog/avis-bonrush-2026`}
        ogTitle="🎰 Avis BonRush 2026 : Bonus Exceptionnel 400%"
        ogDescription="⭐ Test complet BonRush : bonus colossal 400% jusqu'à 2000€. L'un des meilleurs taux du marché ! Avis d'experts."
        ogImage="https://gigabonus.win/images/bonrush.webp"
        twitterTitle="🎰 Avis BonRush 2026 : Bonus Exceptionnel 400%"
        twitterDescription="⭐ Test complet BonRush : bonus colossal 400% jusqu'à 2000€. L'un des meilleurs taux du marché ! Avis d'experts."
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/images/bonrush.webp" 
                alt="BonRush Casino Logo" 
                width="200"
                height="96"
                loading="eager"
                className="h-24 w-auto object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Avis Complet BonRush 2026</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
              <Star className="h-6 w-6 fill-primary/20 text-primary/20" />
              <span className="text-xl font-semibold ml-2">4.2/5</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime="2026-10-19">Publié le 19 octobre 2026</time>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              BonRush marque les esprits avec son bonus colossal de 400% jusqu'à 2000€. L'un des meilleurs taux du marché !
            </p>
          </header>

          <div className="glass-card rounded-2xl p-8 mb-12 bg-primary/5 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Bonus de Bienvenue Exceptionnel</h3>
                <p className="text-3xl font-bold text-primary">400% jusqu'à 2000€ 🚀</p>
                <p className="text-muted-foreground mt-2">+ 100 Free Spins</p>
              </div>
              <a href="https://track.magicclick.partners/click?o=1282&a=22204&link_id=6786" target="_blank" rel="sponsored noopener noreferrer" className={!isAvailableInCountry ? "pointer-events-none opacity-50" : ""}>
                <Button size="lg" className="text-lg px-8 py-6" disabled={!isAvailableInCountry}>
                  Réclamez le Bonus <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <article className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">Notre Avis sur BonRush Casino</h2>
            <p className="text-foreground mb-4 leading-relaxed">
              BonRush marque les esprits avec son bonus colossal de 400% jusqu'à 2000€ ! C'est l'un des pourcentages les plus élevés du marché. Les 100 free spins complètent une offre qui vise clairement les joueurs cherchant un maximum de capital de départ. Pour un dépôt de 500€, vous obtenez 2000€ de bonus, soit 2500€ au total pour jouer !
            </p>
            <p className="text-foreground leading-relaxed">
              Dans cet avis complet, nous analysons tous les aspects de BonRush : le bonus exceptionnel, le catalogue de jeux, les méthodes de paiement et la sécurité. Découvrez si ce casino généreux est fait pour vous.
            </p>
          </article>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Avantages
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Bonus 400% exceptionnel 🌟</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Montant max 2000€</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>100 free spins inclus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Large choix de jeux</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Toutes méthodes de paiement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Interface moderne</span>
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
                  <span>Wager très élevé à x50</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Conditions bonus complexes</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Support client limité</span>
                </li>
              </ul>
            </div>
          </div>

          <article className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Trophy className="h-8 w-8" />
              Bonus et Promotions BonRush
            </h2>
            
            <div className="space-y-6">
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-2xl font-bold mb-3">🎁 Bonus de Bienvenue : 400% jusqu'à 2000€</h3>
                <p className="text-foreground mb-4">
                  Le bonus de 400% est exceptionnel ! Pour un dépôt de 500€, vous obtenez 2000€ de bonus, soit 2500€ au total pour jouer. C'est l'un des ratios les plus généreux du marché. Les 100 free spins offrent des opportunités supplémentaires.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Montant :</strong> 400% jusqu'à 2000€ + 100 FS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Dépôt minimum :</strong> 20€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Wager :</strong> x50</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Validité :</strong> 30 jours</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-2xl font-bold mb-3">💡 Exemple Concret</h3>
                <p className="text-foreground">
                  Avec un dépôt de 500€, vous recevez 2000€ de bonus. Vous devrez miser 125 000€ (2500 × 50) avant de pouvoir retirer, mais vous disposez d'un capital énorme pour tenter votre chance !
                </p>
              </div>
            </div>
          </article>

          <article className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Gamepad2 className="h-8 w-8" />
              Jeux Disponibles sur BonRush
            </h2>
            <p className="text-foreground mb-6">
              BonRush propose plus de 3000 jeux des meilleurs fournisseurs du marché.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">🎰 Machines à Sous</h3>
                <p className="text-sm text-muted-foreground mb-3">Plus de 2500 slots</p>
                <ul className="space-y-2 text-sm">
                  <li>• Sweet Bonanza</li>
                  <li>• Gates of Olympus</li>
                  <li>• Wanted Dead or Wild</li>
                  <li>• Le Bandit</li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">🎲 Casino Live</h3>
                <p className="text-sm text-muted-foreground mb-3">200+ tables en direct</p>
                <ul className="space-y-2 text-sm">
                  <li>• Blackjack (variantes)</li>
                  <li>• Roulette française</li>
                  <li>• Baccarat</li>
                  <li>• Crazy Time</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <CreditCard className="h-8 w-8" />
              Méthodes de Paiement sur BonRush
            </h2>
            <p className="text-foreground mb-6">
              BonRush accepte toutes les méthodes de paiement populaires avec un dépôt minimum de 20€.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4">💳 Dépôts</h3>
                <ul className="space-y-2">
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
                    <span>Skrill / Neteller</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Paysafecard</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">💰 Retraits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Virement (1-3 jours)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Cryptos (instantané)</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Shield className="h-8 w-8" />
              Sécurité et Légalité
            </h2>
            <p className="text-foreground mb-4">
              BonRush opère sous licence Curaçao avec cryptage SSL pour protéger toutes les données.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">⚠️ Jeu Responsable</h3>
              <p className="text-foreground">
                Outils disponibles : limites de dépôt, auto-exclusion. +18 ans uniquement.
              </p>
            </div>
          </article>

          <article className="glass-card rounded-2xl p-8 mb-8 bg-primary/5 border-2 border-primary/20">
            <h2 className="text-3xl font-bold mb-6 text-primary">Verdict Final</h2>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-primary text-primary" />
                ))}
                <Star className="h-8 w-8 fill-primary/20 text-primary/20" />
              </div>
              <span className="text-3xl font-bold">4.2/5</span>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>BonRush</strong> se démarque clairement avec son bonus de 400% allant jusqu'à 2000€. Si vous cherchez un maximum de capital pour jouer et que vous êtes prêt à relever le défi du wager de x50, BonRush est fait pour vous !
            </p>
          </article>

          <div className="glass-card rounded-2xl p-8 text-center bg-primary/5 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Prêt pour la Rush ?</h3>
            <a href="https://track.magicclick.partners/click?o=1282&a=22204&link_id=6786" target="_blank" rel="sponsored noopener noreferrer" className={!isAvailableInCountry ? "pointer-events-none opacity-50" : ""}>
              <Button size="lg" className="text-lg px-12 py-6" disabled={!isAvailableInCountry}>
                Jouer sur BonRush <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              +18 ans | Jouer comporte des risques
            </p>
          </div>
        </div>

        <SEOEnrichedBlog
          casinoName="BonRush"
          bonus="4500€ + 450 FS"
          rating={9.1}
          reviewsCount={2600}
          slug="bonrush"
        />
      </div>
      <Footer />
    </>
  );
};

