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

import { Star, CheckCircle2, XCircle, Trophy, CreditCard, Gamepad2, Shield, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AvisLuckyTreasurePage() {
  const locale = useLocale();
    const { countryCode: userCountry } = useUserCountry();
  
const casino = casinos.find(c => c.id === 6);
  
  

  
    
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
        "@type": "Casino",
        "name": "Avis Lucky Treasure 2025",
        "image": "https://gigabonus.win/images/luckytreasure.webp"
      },
      "author": {
        "@type": "Person",
        "name": "Alexandre Martin",
        "jobTitle": "Expert Casino Senior"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.3",
        "bestRating": "10",
        "worstRating": "1"
      },
      "reviewBody": "Lucky Treasure, le casino généreux avec bonus 200% sans wager strict et no deposit bonus.",
      "datePublished": "2025-10-18",
      "publisher": {
        "@type": "Organization",
        "name": "GigaBonus"
      }
    },
    {
      "@type": "Article",
      "headline": "🎰 Avis Lucky Treasure 2025 : Bonus 200% Sans Wager Strict + No Deposit | GigaBonus",
      "description": "⭐ Avis complet Lucky Treasure 2025 : bonus 200% sans wager strict + no deposit + cashback quotidien. Le trésor des joueurs ! Test par nos experts.",
      "image": "https://gigabonus.win/images/luckytreasure.webp",
      "datePublished": "2025-10-18T10:00:00+01:00",
      "dateModified": "2025-11-28T00:45:35.316Z",
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
        title="🎰 Avis Lucky Treasure 2025 : Bonus 200% Sans Wager Strict + No Deposit | GigaBonus"
        description="⭐ Avis complet Lucky Treasure 2025 : bonus 200% sans wager strict + no deposit + cashback quotidien. Le trésor des joueurs ! Test par nos experts."
        keywords="avis lucky treasure, lucky treasure casino, bonus lucky treasure, lucky treasure 2025, no deposit lucky treasure, lucky treasure fiable"
        canonical="https://gigabonus.win/blog/avis-luckytreasure-2025"
        ogTitle="🎰 Avis Lucky Treasure 2025 : Bonus 200% Sans Wager Strict"
        ogDescription="⭐ Test complet Lucky Treasure : bonus 200% sans wager strict, no deposit, cashback quotidien. Avis d'experts."
        ogImage="https://gigabonus.win/images/luckytreasure.webp"
        twitterTitle="🎰 Avis Lucky Treasure 2025 : Bonus 200% Sans Wager Strict"
        twitterDescription="⭐ Test complet Lucky Treasure : bonus 200% sans wager strict, no deposit, cashback quotidien. Avis d'experts."
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/images/luckytreasure.webp" 
                alt="Lucky Treasure Casino Logo" 
                width="200"
                height="96"
                loading="eager"
                className="h-24 w-auto object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Avis Complet Lucky Treasure 2025</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
              <Star className="h-6 w-6 fill-primary/30 text-primary/30" />
              <span className="text-xl font-semibold ml-2">4.3/5</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime="2025-10-18">Publié le 18 octobre 2025</time>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lucky Treasure : le trésor des joueurs avec un bonus 200% sans wager strict + no deposit + cashback quotidien !
            </p>
          </header>

          <div className="glass-card rounded-2xl p-8 mb-12 bg-primary/5 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Bonus de Bienvenue Exclusif</h3>
                <p className="text-3xl font-bold text-primary">200% jusqu'à 500€</p>
                <p className="text-muted-foreground mt-2">+ 100 FS ⭐ Sans Wager Strict !</p>
              </div>
              <a href="https://www.luckytreasurelinks.com/click/85/337/2140/1">
                <Button size="lg" className="text-lg px-8 py-6" disabled={!isAvailableInCountry}>
                  Réclamez le Bonus <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <article className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">Notre Avis sur Lucky Treasure Casino</h2>
            <p className="text-foreground mb-4 leading-relaxed">
              Lucky Treasure est un véritable trésor avec son bonus de 200% + 100 FS <strong>sans wager strict</strong> ! Le no deposit bonus, le cashback quotidien et les promotions régulières en font l'un des casinos les plus généreux du marché. Cette absence de wager contraignant est un énorme avantage qui permet de retirer vos gains plus facilement.
            </p>
            <p className="text-foreground leading-relaxed">
              Dans cet avis complet, nous explorons tous les avantages de Lucky Treasure : bonus exceptionnels, promotions quotidiennes, méthodes de paiement et sécurité. Découvrez pourquoi ce casino mérite son nom de "Lucky Treasure" pour les joueurs réguliers.
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
                  <span>Bonus 200% sans wager strict 🌟</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>No deposit bonus offert</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Cashback quotidien automatique</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>100 free spins inclus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Promotions quotidiennes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Retraits cryptos rapides</span>
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
                  <span>Catalogue de jeux moins fourni</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Pas de section sport</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Programme VIP basique</span>
                </li>
              </ul>
            </div>
          </div>

          <article className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Trophy className="h-8 w-8" />
              Bonus et Promotions Lucky Treasure
            </h2>
            
            <div className="space-y-6">
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-2xl font-bold mb-3">🎁 Bonus de Bienvenue : 200% jusqu'à 500€</h3>
                <p className="text-foreground mb-4">
                  Le gros point fort de Lucky Treasure : <strong>pas de wager strict</strong> ! Cela signifie que vous pouvez retirer vos gains plus facilement. Le bonus de 200% est généreux et les 100 free spins offrent de nombreuses opportunités.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Montant :</strong> 200% jusqu'à 500€ + 100 FS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Dépôt minimum :</strong> 20€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Wager :</strong> Sans wager strict ⭐</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Validité :</strong> 30 jours</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-2xl font-bold mb-3">🎁 Bonus Sans Dépôt</h3>
                <p className="text-foreground">
                  Lucky Treasure propose un <strong>bonus no deposit</strong> pour tester le casino sans risque ! Parfait pour découvrir la plateforme avant de déposer.
                </p>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-2xl font-bold mb-3">💰 Cashback Quotidien</h3>
                <p className="text-foreground">
                  Récupérez une partie de vos pertes <strong>chaque jour</strong> avec le cashback automatique. Un filet de sécurité apprécié !
                </p>
              </div>
            </div>
          </article>

          <article className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Gamepad2 className="h-8 w-8" />
              Jeux Disponibles sur Lucky Treasure
            </h2>
            <p className="text-foreground mb-6">
              Lucky Treasure propose une sélection de jeux de qualité des meilleurs fournisseurs.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">🎰 Machines à Sous</h3>
                <p className="text-sm text-muted-foreground mb-3">Plus de 1500 slots</p>
                <ul className="space-y-2 text-sm">
                  <li>• Sweet Bonanza</li>
                  <li>• Gates of Olympus</li>
                  <li>• Big Bass Bonanza</li>
                  <li>• Le Bandit</li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">🎲 Casino Live</h3>
                <p className="text-sm text-muted-foreground mb-3">Tables en direct</p>
                <ul className="space-y-2 text-sm">
                  <li>• Blackjack</li>
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
              Méthodes de Paiement sur Lucky Treasure
            </h2>
            <p className="text-foreground mb-6">
              Lucky Treasure accepte les méthodes essentielles avec un dépôt minimum de 20€.
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
                    <span>Cashlib</span>
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
              Lucky Treasure opère sous licence Curaçao avec cryptage SSL pour sécuriser toutes les transactions.
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
                <Star className="h-8 w-8 fill-primary/30 text-primary/30" />
              </div>
              <span className="text-3xl font-bold">4.3/5</span>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>Lucky Treasure</strong> porte très bien son nom ! L'absence de wager strict sur le bonus de 200% + 100 FS est un énorme avantage. Parfait pour les joueurs réguliers qui veulent maximiser leurs chances !
            </p>
          </article>

          <div className="glass-card rounded-2xl p-8 text-center bg-primary/5 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Découvrez le Trésor !</h3>
            <a href="https://www.luckytreasurelinks.com/click/85/337/2140/1">
              <Button size="lg" className="text-lg px-12 py-6" disabled={!isAvailableInCountry}>
                Jouer sur Lucky Treasure <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              +18 ans | Jouer comporte des risques
            </p>
          </div>

          <SEOEnrichedBlog 
            casinoName="Lucky Treasure"
            bonus={casino?.bonusText || "200% jusqu'à 500€ + 100 FS"}
            rating={4.3}
            reviewsCount={2900}
            slug="luckytreasure"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};



