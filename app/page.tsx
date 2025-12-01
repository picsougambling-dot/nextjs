'use client';

import { useState, useMemo, useEffect, lazy, Suspense } from "react";
import Link from 'next/link';
import { casinos } from "@/data/casinos";
import { CasinoCard } from "@/components/CasinoCard";
import { CasinoTable } from "@/components/CasinoTable";
import { FilterBar } from "@/components/FilterBar";
import { EmptyState } from "@/components/EmptyState";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Defer } from "@/components/Defer";
import { PromoPopup } from "@/components/PromoPopup";
import SEOEnrichedGuide from "@/components/SEOEnrichedGuide";
import { CounterAnimation } from "@/components/CounterAnimation";
import SEOHead from "@/components/SEOHead";

// Lazy load below-the-fold components
const Footer = lazy(() => import("@/components/Footer"));
const RelatedLinks = lazy(() => import("@/components/RelatedLinks"));

export default function IndexPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [methodFilter, setMethodFilter] = useState("all");
  const [bookmakerFilter, setBookmakerFilter] = useState("all");
  const [providerFilter, setProviderFilter] = useState("all");

  const getInitialCount = () => {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth >= 1024) return 9;
    if (window.innerWidth >= 768) return 6;
    return 5; // mobile: 5 cartes max au chargement
  };

  const [displayedCount, setDisplayedCount] = useState(getInitialCount());

  const filteredCasinos = useMemo(() => {
    return casinos
      .filter((casino) => {
        // Search filter
        const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());

        // Bonus filter
        const matchesBonus =
          bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);

        // Wager filter
        const matchesWager =
          wagerFilter === "all" ||
          (wagerFilter === "none" && casino.wager === null) ||
          (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));

        // Payment method filter
        const matchesMethod =
          methodFilter === "all" || casino.methods.includes(methodFilter);

        // Bookmaker filter
        const matchesBookmaker =
          bookmakerFilter === "all" ||
          (bookmakerFilter === "bookmaker" && casino.isBookmaker === true) ||
          (bookmakerFilter === "casino-only" && !casino.isBookmaker);

        // Provider filter
        const matchesProvider =
          providerFilter === "all" || casino.providers?.includes(providerFilter);

        return matchesSearch && matchesBonus && matchesWager && matchesMethod && matchesBookmaker && matchesProvider;
      })
      .sort((a, b) => a.rank - b.rank); // Tri par rang
  }, [searchTerm, bonusFilter, wagerFilter, methodFilter, bookmakerFilter, providerFilter]);

  const displayedCasinos = useMemo(() => {
    return filteredCasinos.slice(0, displayedCount);
  }, [filteredCasinos, displayedCount]);

  const hasMoreCasinos = filteredCasinos.length > displayedCount;

  const loadMore = () => {
    setDisplayedCount(prev => prev + 6);
  };

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(getInitialCount());
  }, [searchTerm, bonusFilter, wagerFilter, methodFilter, bookmakerFilter]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "WebApplication",
          "name": "Comparateur Casino GigaBonus"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 9.8,
          "bestRating": 10,
          "reviewCount": 4500
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior",
          "description": "15 ans d'expérience, 500+ casinos testés"
        },
        "reviewBody": "Comparateur #1 des bonus casino 2025 avec filtres avancés par wager, méthodes de paiement et pourcentage de bonus.",
        "datePublished": "2025-11-20",
        "dateModified": "2025-11-20"
      },
      {
        "@type": "Article",
        "headline": "Comparateur de Bonus de Casinos en Ligne 2025",
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus",
          "url": "https://gigabonus.win"
        },
        "datePublished": "2025-11-20",
        "dateModified": "2025-11-20"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Comment utiliser le comparateur GigaBonus ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Utilisez les filtres pour sélectionner vos critères (pourcentage bonus, wager, méthodes de paiement). Comparez instantanément les offres en vue cartes ou tableau. Cliquez sur 'Jouer' pour profiter du bonus."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Comparateur de Bonus de Casinos en Ligne 2025 | GigaBonus"
        description="🎰 Comparateur #1 des bonus casino 2025 : trouvez les meilleurs bonus jusqu'à 400%, filtrez par wager, méthodes de paiement. 23+ casinos fiables comparés. Guide complet gratuit !"
        keywords="comparateur bonus casino, meilleurs bonus casino 2025, bonus casino en ligne, casino fiable, bonus 400%, bonus sans wager, casino crypto, cashback casino, free spins, wager casino, depot casino"
        canonical="https://gigabonus.win/"
        ogTitle="Comparateur de Bonus de Casinos en Ligne 2025 | GigaBonus"
        ogDescription="🎰 Comparateur #1 des bonus casino : trouvez les meilleurs bonus jusqu'à 400%. 23+ casinos fiables comparés avec filtres avancés."
        ogImage="https://gigabonus.win/og-image.png"
        twitterTitle="Comparateur de Bonus de Casinos en Ligne 2025 | GigaBonus"
        twitterDescription="🎰 Comparateur #1 des bonus casino : trouvez les meilleurs bonus jusqu'à 400%. Filtres avancés par wager et méthodes de paiement."
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <PromoPopup />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
        {/* H1 optimisé pour LCP + Hero Stats */}
        <header className="text-center mb-16 mt-8 relative">
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <h1 className="lcp-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent group">
              Comparateur de Bonus de Casinos en Ligne
              {/* Subtle golden particles on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <span className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/60 rounded-full blur-sm animate-float" />
                <span className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/60 rounded-full blur-sm animate-float" style={{ animationDelay: '0.3s' }} />
                <span className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent/60 rounded-full blur-sm animate-float" style={{ animationDelay: '0.6s' }} />
              </span>
            </h1>
            
            {/* Stats Counter with animated icons */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-foreground/80">
              <div className="flex items-center gap-2 group/stat">
                <span className="text-2xl group-hover/stat:animate-bounce-mini transition-transform">🎰</span>
                <span className="text-base md:text-lg font-medium"><CounterAnimation end={32} duration={1500} /> Casinos</span>
              </div>
              <div className="flex items-center gap-2 group/stat">
                <span className="text-2xl group-hover/stat:animate-bounce-mini transition-transform" style={{ animationDelay: '0.1s' }}>💰</span>
                <span className="text-base md:text-lg font-medium"><CounterAnimation end={50} duration={1800} suffix="M€+" /> en Bonus</span>
              </div>
              <div className="flex items-center gap-2 group/stat">
                <span className="text-2xl group-hover/stat:animate-bounce-mini transition-transform" style={{ animationDelay: '0.2s' }}>👥</span>
                <span className="text-base md:text-lg font-medium"><CounterAnimation end={2500} duration={2000} suffix="+" /> Joueurs</span>
              </div>
            </div>

          </div>
        </header>

        <section aria-labelledby="intro" className="rounded-2xl p-6 md:p-8 mb-12 max-w-4xl mx-auto text-center border border-border bg-card cv-auto">
          <p id="intro" className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Comparez instantanément les meilleures offres de casinos fiables. Filtrez par bonus, conditions de mise et méthodes de paiement pour trouver l'offre idéale.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-foreground">
            <li className="flex items-center justify-center gap-2"><span className="text-primary font-semibold">✓</span>Comparaison instantanée</li>
            <li className="flex items-center justify-center gap-2"><span className="text-primary font-semibold">✓</span>Casinos vérifiés</li>
            <li className="flex items-center justify-center gap-2"><span className="text-primary font-semibold">✓</span>Filtres avancés</li>
          </ul>
        </section>

        {/* SEO Content - Intro */}
        <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary dark:text-secondary">
            Les Meilleurs Bonus de Casinos en 2025
          </h2>
          <div className="space-y-4 text-foreground">
            <p>
              Bienvenue sur <strong className="text-primary">GigaBonus</strong>, votre <strong className="text-primary">comparateur expert</strong> des meilleurs bonus de casinos en ligne. 
              Notre plateforme vous permet de comparer en temps réel <strong className="text-primary">casinos fiables</strong> et leurs <strong className="text-primary">offres exclusives</strong> de bienvenue.
            </p>
            <p>
              Que vous recherchiez un <strong className="text-primary">bonus de 100%, 200%, 300% ou même 400%</strong>, 
              des <strong className="text-primary">conditions de mise favorables</strong>, ou des casinos acceptant vos <strong className="text-primary">méthodes de paiement préférées</strong> (Carte Bancaire, Crypto, Cashlib, Neosurf, Paysafecard), 
              notre système de <strong className="text-primary">filtres avancés</strong> vous aide à trouver l'offre idéale en quelques clics.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                🎰 Les Meilleurs Bonus du Moment
              </h3>
              <p className="text-foreground">
                Découvrez notre sélection des <strong className="text-primary">offres les plus généreuses</strong> du marché. 
                Du <strong className="text-primary">bonus classique 100%</strong> jusqu'aux <strong className="text-primary">offres exceptionnelles de 400%</strong>, nous avons analysé chaque promotion pour vous garantir 
                les <strong className="text-primary">meilleures conditions de jeu et de retrait</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                ⚡ Filtres Intelligents et Comparaison Rapide
              </h3>
              <p className="text-foreground">
                Utilisez nos filtres pour affiner votre recherche selon vos préférences : <strong className="text-primary">pourcentage de bonus</strong>, <strong className="text-primary">conditions de mise (wager)</strong>, 
                <strong className="text-primary">méthodes de paiement acceptées</strong>. Comparez facilement les offres en <strong className="text-primary">vue cartes ou tableau</strong> 
                pour prendre la meilleure décision.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <div id="casinos">
        <Defer when="idle">
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          bonusFilter={bonusFilter}
          onBonusChange={setBonusFilter}
          wagerFilter={wagerFilter}
          onWagerChange={setWagerFilter}
          methodFilter={methodFilter}
              onMethodChange={setMethodFilter}
              bookmakerFilter={bookmakerFilter}
              onBookmakerChange={setBookmakerFilter}
              providerFilter={providerFilter}
              onProviderChange={setProviderFilter}
              filteredCount={filteredCasinos.length}
            />
        </Defer>
        </div>

        {/* Tabs for Card/Table view */}
        <Defer when="idle">
          <Tabs defaultValue="cards" className="w-full">
            <TabsList className="glass-card mb-8 p-1 grid w-full max-w-md mx-auto grid-cols-2 h-12 relative">
              <TabsTrigger 
                value="cards" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20"
              >
                Vue Cartes
              </TabsTrigger>
              <TabsTrigger 
                value="table" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20"
              >
                Vue Tableau
              </TabsTrigger>
            </TabsList>

            {/* Cards View */}
            <TabsContent value="cards" className="mt-0 animate-fade-in-up" style={{ perspective: '1000px' }}>
              {filteredCasinos.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedCasinos.map((casino, index) => (
                      <div 
                        key={casino.id} 
                        className="animate-card-deal"
                        style={{ 
                          animationDelay: `${index * 0.05}s`,
                          opacity: 0,
                          animationFillMode: 'forwards'
                        }}
                      >
                        <CasinoCard casino={casino} index={index} />
                      </div>
                    ))}
                  </div>
                  {hasMoreCasinos && (
                    <div className="flex justify-center mt-8">
                      <button
                        onClick={loadMore}
                        className="glass-card px-8 py-4 rounded-xl font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 border border-border hover:border-primary"
                      >
                        Voir plus de casinos 🎰 ({filteredCasinos.length - displayedCount} restants)
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <EmptyState onReset={() => {
                  setSearchTerm("");
                  setBonusFilter("all");
                  setWagerFilter("all");
                  setMethodFilter("all");
                  setBookmakerFilter("all");
                }} />
              )}
            </TabsContent>

            {/* Table View */}
            <TabsContent value="table" className="mt-0 min-h-[700px] animate-fade-in-up" style={{ perspective: '1000px' }}>
              {filteredCasinos.length > 0 ? (
                <>
                  <CasinoTable casinos={displayedCasinos} />
                  {hasMoreCasinos && (
                    <div className="flex justify-center mt-8">
                      <button
                        onClick={loadMore}
                        className="glass-card px-8 py-4 rounded-xl font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
                      >
                        Voir plus de casinos ({filteredCasinos.length - displayedCount} restants)
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <EmptyState onReset={() => {
                  setSearchTerm("");
                  setBonusFilter("all");
                  setWagerFilter("all");
                  setMethodFilter("all");
                  setBookmakerFilter("all");
                }} />
              )}
            </TabsContent>
          </Tabs>
        </Defer>

        {/* SEO Content - Bottom */}
        <section className="glass-card rounded-2xl p-8 mt-16 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Guide Complet : Comment Choisir le Meilleur Bonus de Casino ?
          </h2>
          <div className="space-y-6 text-foreground">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                💰 Comprendre les Bonus de Casino
              </h3>
              <p>
                Les bonus de bienvenue sont des <strong className="text-primary">offres promotionnelles</strong> proposées par les casinos en ligne pour attirer de nouveaux joueurs. 
                Ils peuvent aller de <strong className="text-primary">100% à 400% de votre premier dépôt</strong>, souvent accompagnés de <strong className="text-primary">tours gratuits</strong> (free spins).
              </p>
              <p className="mt-2">
                Par exemple, un <strong className="text-primary">bonus de 200%</strong> jusqu'à 500€ signifie que si vous déposez 250€, vous recevrez 500€ de bonus, 
                portant votre <strong className="text-primary">solde total à 750€</strong> pour jouer.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                🎲 Les Conditions de Mise (Wager)
              </h3>
              <p>
                Le wager représente le <strong className="text-primary">nombre de fois</strong> que vous devez miser le montant du bonus avant de pouvoir <strong className="text-primary">retirer vos gains</strong>. 
                Par exemple, un <strong className="text-primary">wager de x35</strong> sur un bonus de 100€ signifie que vous devrez miser <strong className="text-primary">3500€ au total</strong>. 
                Certains casinos proposent même des <strong className="text-primary">bonus sans wager</strong>, ce qui est idéal pour les joueurs.
              </p>
              <p className="mt-2">
                <strong className="text-primary">Conseil :</strong> Privilégiez les <strong className="text-primary">wagers entre x30 et x40</strong> pour des conditions plus accessibles. 
                Les bonus sans wager sont rares mais offrent la <strong className="text-primary">meilleure valeur</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                💳 Méthodes de Paiement Disponibles
              </h3>
              <p>
                Notre comparateur vous permet de filtrer les casinos selon vos <strong className="text-primary">méthodes de paiement préférées</strong>. 
                Découvrez notre guide complet pour <a href="/depot/carte" className="text-primary underline hover:text-primary/80">déposer par carte bancaire</a>, 
                utiliser les <a href="/depot/crypto" className="text-primary underline hover:text-primary/80">cryptomonnaies</a> (Bitcoin, Ethereum), 
                <a href="/depot/cashlib" className="text-primary underline hover:text-primary/80">Cashlib</a>, 
                <a href="/depot/neosurf" className="text-primary underline hover:text-primary/80">Neosurf</a>, ou 
                <a href="/depot/paysafecard" className="text-primary underline hover:text-primary/80">Paysafecard</a>. 
                Tous les casinos listés acceptent un <strong className="text-primary">dépôt minimum accessible</strong> à partir de 20€.
              </p>
              <p className="mt-2">
                Les <a href="/top-casinos-crypto" className="text-primary underline hover:text-primary/80">casinos crypto</a> offrent des <strong className="text-primary">transactions rapides et anonymes</strong>, 
                tandis que les <strong className="text-primary">cartes prépayées</strong> permettent de mieux contrôler votre budget.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                🔒 Sécurité et Fiabilité
              </h3>
              <p>
                Tous les casinos présents sur <strong className="text-primary">GigaBonus</strong> sont sélectionnés pour leur <strong className="text-primary">fiabilité et leur réputation</strong>. 
                Ils proposent des <strong className="text-primary">jeux équitables</strong>, des <strong className="text-primary">transactions sécurisées</strong> et un <strong className="text-primary">service client réactif</strong>. 
                N'oubliez pas de toujours <strong className="text-primary">jouer de manière responsable</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                📊 Types de Bonus Expliqués
              </h3>
              <p>
                <strong className="text-primary">Bonus de bienvenue :</strong> Accordé lors de votre premier dépôt, c'est le plus généreux.<br/>
                <strong className="text-primary">Free Spins :</strong> Tours gratuits sur les machines à sous, souvent inclus avec le bonus.<br/>
                <strong className="text-primary">Bonus sans dépôt :</strong> Rare, permet de jouer sans investir son propre argent.<br/>
                <strong className="text-primary">Bonus de rechargement :</strong> Pour vos dépôts suivants, généralement moins élevé que le bonus de bienvenue.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                ❓ Questions Fréquentes (FAQ)
              </h3>
              <div className="space-y-4 mt-4">
                <div>
                  <p className="font-semibold text-primary">Quel est le meilleur bonus de casino en 2025 ?</p>
                  <p className="mt-1">Les bonus de 300% à 400% offrent le plus de fonds de jeu, mais vérifiez toujours les <strong className="text-primary">conditions de mise</strong>.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Puis-je retirer directement mon bonus ?</p>
                  <p className="mt-1">Non, vous devez remplir les <strong className="text-primary">conditions de wager</strong> avant de pouvoir retirer vos gains issus du bonus.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Les casinos crypto sont-ils fiables ?</p>
                  <p className="mt-1">Oui, les <strong className="text-primary">casinos acceptant les cryptomonnaies</strong> listés sur GigaBonus sont <strong className="text-primary">vérifiés et sécurisés</strong>.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Quel est le dépôt minimum requis ?</p>
                  <p className="mt-1">La plupart des casinos de notre comparateur acceptent des <strong className="text-primary">dépôts à partir de 20€</strong>.</p>
                </div>
              </div>

              {/* Derniers avis casinos – maillage discret */}
              <div className="mt-6 text-xs text-muted-foreground flex flex-wrap justify-center gap-x-3 gap-y-1">
                <span className="font-semibold text-primary">Derniers avis :</span>
                <Link href="/blog/avis-playregal-2025" className="hover:text-primary transition-colors">PlayRegal</Link>
                <span>·</span>
                <Link href="/blog/avis-magicalspin-2025" className="hover:text-primary transition-colors">MagicalSpin</Link>
                <span>·</span>
                <Link href="/blog/avis-vegasplus-2025" className="hover:text-primary transition-colors">VegasPlus</Link>
                <span>·</span>
                <Link href="/blog/avis-uniquecasino-2025" className="hover:text-primary transition-colors">UniqueCasino</Link>
                <span>·</span>
                <Link href="/blog/avis-cazinostars-2025" className="hover:text-primary transition-colors">CazinoStars</Link>
                <span>·</span>
                <Link href="/blog/avis-atlantisslots-2025" className="hover:text-primary transition-colors">AtlantisSlots</Link>
                <span>·</span>
                <Link href="/blog/avis-casinointense-2025" className="hover:text-primary transition-colors">CasinoIntense</Link>
                <span>·</span>
                <Link href="/blog/avis-bonrush-2025" className="hover:text-primary transition-colors">BonRush</Link>
                <span>·</span>
                <Link href="/blog/avis-betify-2025" className="hover:text-primary transition-colors">Betify</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section Sécurité et Licences */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">🔐 Sécurité et Fiabilité de Nos Casinos Partenaires</h2>
          <div className="space-y-6 text-foreground">
            <p className="leading-relaxed text-center max-w-3xl mx-auto">
              Tous les casinos listés sur <strong className="text-primary">GigaBonus</strong> sont rigoureusement sélectionnés et vérifiés par notre équipe. 
              Nous nous assurons que chaque plateforme respecte les <strong className="text-primary">standards de sécurité</strong> les plus élevés.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Cryptage SSL</h3>
                <p className="text-sm">Toutes les transactions sont protégées par un cryptage SSL 256-bit pour garantir la sécurité de vos données personnelles et bancaires.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Licences Vérifiées</h3>
                <p className="text-sm">Chaque casino possède une licence de jeu valide délivrée par des autorités reconnues (Curaçao, Malta Gaming Authority, UK Gambling Commission).</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎲</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Jeux Équitables</h3>
                <p className="text-sm">Tous les jeux sont certifiés RNG (Random Number Generator) et audités par des organismes indépendants comme eCOGRA et iTech Labs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Comment Choisir */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎯 Comment Utiliser Notre Comparateur ?</h2>
          <div className="space-y-6 text-foreground">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
              <div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Utilisez les Filtres</h3>
                <p className="leading-relaxed">
                  Affinez votre recherche selon vos préférences : <strong>pourcentage de bonus</strong> (100%, 200%, 300%), 
                  <strong> conditions de mise</strong> (wager x30, x40, sans wager), et <strong>méthodes de paiement</strong> 
                  (CB, Crypto, Neosurf, Paysafecard).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
              <div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Comparez les Offres</h3>
                <p className="leading-relaxed">
                  Visualisez rapidement les bonus en <strong>vue cartes</strong> ou analysez en détail avec la <strong>vue tableau</strong>. 
                  Comparez le montant du bonus, le wager, les free spins et les méthodes de paiement disponibles.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
              <div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Choisissez et Jouez</h3>
                <p className="leading-relaxed">
                  Une fois votre casino sélectionné, cliquez sur <strong>"Jouer"</strong> pour être redirigé vers la plateforme. 
                  Inscrivez-vous, effectuez votre dépôt et profitez de votre <strong>bonus de bienvenue</strong> !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Types de Jeux */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎰 Découvrez les Meilleurs Jeux de Casino en Ligne</h2>
          <div className="space-y-6 text-foreground">
            <p className="leading-relaxed text-center max-w-3xl mx-auto">
              Les casinos en ligne offrent une <strong className="text-primary">variété de jeux impressionnante</strong>, 
              allant des <strong className="text-primary">machines à sous classiques</strong> aux <strong className="text-primary">tables de jeu en direct</strong> 
              avec de vrais croupiers.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="p-6 border border-border rounded-xl hover:border-primary transition-colors">
                <div className="text-4xl mb-3">🎰</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Machines à Sous</h3>
                <p className="text-sm">
                  Les <strong>slots en ligne</strong> sont les jeux les plus populaires. Découvrez des milliers de titres avec des 
                  <strong> thèmes variés</strong>, des <strong>jackpots progressifs</strong> et des <strong>bonus captivants</strong>. 
                  Explorez notre guide des <a href="/top-slots-2025" className="text-primary underline hover:text-primary/80">meilleurs slots 2025</a>.
                </p>
              </div>
              <div className="p-6 border border-border rounded-xl hover:border-primary transition-colors">
                <div className="text-4xl mb-3">🃏</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Jeux de Table</h3>
                <p className="text-sm">
                  <strong>Blackjack, Roulette, Baccarat, Poker</strong>... Les jeux de table classiques sont disponibles en 
                  plusieurs variantes. Consultez nos <a href="/astuces-casino" className="text-primary underline hover:text-primary/80">astuces casino</a> 
                  pour améliorer vos stratégies.
                </p>
              </div>
              <div className="p-6 border border-border rounded-xl hover:border-primary transition-colors">
                <div className="text-4xl mb-3">🎥</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Casino en Direct</h3>
                <p className="text-sm">
                  Vivez l'expérience d'un <strong>casino réel</strong> depuis chez vous avec des <strong>croupiers en direct</strong>, 
                  diffusion HD et <strong>interaction en temps réel</strong>. Ambiance authentique garantie !
                </p>
              </div>
              <div className="p-6 border border-border rounded-xl hover:border-primary transition-colors">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Jackpots Progressifs</h3>
                <p className="text-sm">
                  Tentez de décrocher des <strong>gains colossaux</strong> avec les machines à sous à jackpot progressif. 
                  Les cagnottes peuvent atteindre <strong>plusieurs millions d'euros</strong> !
                </p>
              </div>
              <div className="p-6 border border-border rounded-xl hover:border-primary transition-colors">
                <div className="text-4xl mb-3">🎲</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Jeux Instantanés</h3>
                <p className="text-sm">
                  <strong>Crash games, Dice, Plinko</strong>... Les jeux crypto instantanés offrent des <strong>sessions rapides</strong> 
                  et des <strong>gains immédiats</strong>. Parfait pour les joueurs pressés !
                </p>
              </div>
              <div className="p-6 border border-border rounded-xl hover:border-primary transition-colors">
                <div className="text-4xl mb-3">⚽</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Paris Sportifs</h3>
                <p className="text-sm">
                  Certains casinos proposent également des <strong>paris sportifs</strong> avec des cotes compétitives 
                  sur <strong>football, basketball, tennis</strong> et plus encore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Avantages Casino en Ligne */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">✨ Pourquoi Jouer sur un Casino en Ligne ?</h2>
          <div className="space-y-6 text-foreground">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🏠</span>
                  <div>
                    <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Confort et Accessibilité</h3>
                    <p className="text-sm leading-relaxed">
                      Jouez <strong>24h/24 depuis votre canapé</strong>, sur ordinateur, tablette ou smartphone. 
                      Plus besoin de vous déplacer dans un casino physique !
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🎁</span>
                  <div>
                    <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Bonus Généreux</h3>
                    <p className="text-sm leading-relaxed">
                      Les casinos en ligne offrent des <strong>bonus de bienvenue allant jusqu'à 400%</strong>, 
                      des <strong>free spins quotidiens</strong> et des <strong>programmes VIP lucratifs</strong>.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🎮</span>
                  <div>
                    <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Variété de Jeux</h3>
                    <p className="text-sm leading-relaxed">
                      Accédez à <strong>des milliers de jeux</strong> de fournisseurs renommés comme 
                      <strong> Pragmatic Play, Evolution, NetEnt</strong> et bien d'autres.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">💳</span>
                  <div>
                    <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Options de Paiement Flexibles</h3>
                    <p className="text-sm leading-relaxed">
                      Utilisez votre <strong>méthode préférée</strong> : carte bancaire, crypto, e-wallets, 
                      cartes prépayées. Dépôts instantanés et <strong>retraits rapides</strong>.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🔒</span>
                  <div>
                    <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Sécurité Renforcée</h3>
                    <p className="text-sm leading-relaxed">
                      <strong>Cryptage SSL</strong>, licences officielles et <strong>audits réguliers</strong> 
                      garantissent la sécurité de vos fonds et données personnelles.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">📱</span>
                  <div>
                    <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Jeu Mobile Optimisé</h3>
                    <p className="text-sm leading-relaxed">
                      Tous les casinos modernes proposent une <strong>version mobile responsive</strong> 
                      ou une <strong>application dédiée</strong> pour jouer en déplacement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Tendances 2025 */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">🚀 Tendances des Casinos en Ligne 2025</h2>
          <div className="space-y-6 text-foreground">
            <p className="leading-relaxed text-center max-w-3xl mx-auto">
              L'industrie des casinos en ligne évolue rapidement. Découvrez les <strong className="text-primary">innovations majeures de 2025</strong> 
              qui transforment l'expérience de jeu.
            </p>
            <div className="space-y-4 mt-8">
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">💎 Casinos Crypto et Web3</h3>
                <p className="text-sm leading-relaxed">
                  Les <a href="/top-casinos-crypto" className="text-primary underline hover:text-primary/80">casinos crypto</a> 
                  gagnent en popularité avec des <strong>transactions instantanées</strong>, des <strong>frais réduits</strong> 
                  et une <strong>anonymat total</strong>. Bitcoin, Ethereum, USDT et autres cryptomonnaies sont largement acceptés.
                </p>
              </div>
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">🎯 Bonus Sans Wager</h3>
                <p className="text-sm leading-relaxed">
                  Les <a href="/bonus-sans-wager" className="text-primary underline hover:text-primary/80">bonus sans conditions de mise</a> 
                  deviennent plus courants. Vos gains sont <strong>immédiatement retirables</strong>, sans exigences de mise compliquées.
                </p>
              </div>
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">🔐 Casinos Sans KYC</h3>
                <p className="text-sm leading-relaxed">
                  Les <a href="/casinos-sans-kyc" className="text-primary underline hover:text-primary/80">casinos sans vérification d'identité</a> 
                  permettent de jouer <strong>anonymement</strong> avec des <strong>inscriptions instantanées</strong>. Parfait pour ceux qui valorisent leur vie privée.
                </p>
              </div>
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">🎮 Gamification Avancée</h3>
                <p className="text-sm leading-relaxed">
                  Les casinos intègrent des <strong>systèmes de missions</strong>, <strong>tournois quotidiens</strong>, 
                  <strong>programmes de fidélité</strong> et <strong>classements compétitifs</strong> pour une expérience plus engageante.
                </p>
              </div>
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">💸 Cashback et Rakeback</h3>
                <p className="text-sm leading-relaxed">
                  Les <a href="/bonus-cashback" className="text-primary underline hover:text-primary/80">programmes de cashback</a> 
                  vous remboursent un <strong>pourcentage de vos pertes</strong>, souvent <strong>sans conditions</strong>. 
                  Une excellente façon de réduire les risques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Conseils Experts */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">💡 Conseils d'Experts pour Maximiser Vos Gains</h2>
          <div className="space-y-6 text-foreground">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-primary/5 rounded-xl">
                <h3 className="font-semibold text-lg text-primary mb-3 flex items-center gap-2">
                  <span>📖</span> Lisez Toujours les Conditions
                </h3>
                <p className="text-sm leading-relaxed">
                  Avant d'accepter un bonus, vérifiez le <strong>wager</strong>, les <strong>jeux éligibles</strong>, 
                  le <strong>montant maximum de retrait</strong> et la <strong>durée de validité</strong>. 
                  Les détails font la différence !
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-xl">
                <h3 className="font-semibold text-lg text-primary mb-3 flex items-center gap-2">
                  <span>🎰</span> Choisissez les Bons Jeux
                </h3>
                <p className="text-sm leading-relaxed">
                  Pour remplir le wager rapidement, privilégiez les <strong>slots à haute volatilité</strong> 
                  et vérifiez la <strong>contribution des jeux</strong> (généralement 100% pour les slots, moins pour les jeux de table).
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-xl">
                <h3 className="font-semibold text-lg text-primary mb-3 flex items-center gap-2">
                  <span>💰</span> Gérez Votre Bankroll
                </h3>
                <p className="text-sm leading-relaxed">
                  Définissez un <strong>budget clair</strong>, ne misez jamais plus que vous ne pouvez perdre 
                  et utilisez les <strong>limites de dépôt</strong> disponibles sur les plateformes responsables.
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-xl">
                <h3 className="font-semibold text-lg text-primary mb-3 flex items-center gap-2">
                  <span>🎁</span> Profitez des Promotions Récurrentes
                </h3>
                <p className="text-sm leading-relaxed">
                  Au-delà du bonus de bienvenue, surveillez les <strong>recharges hebdomadaires</strong>, 
                  les <strong>free spins du lundi</strong> et les <strong>tournois mensuels</strong>. 
                  Plus de valeur ajoutée !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Pourquoi GigaBonus */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">⭐ Pourquoi Choisir GigaBonus ?</h2>
          <div className="space-y-6 text-foreground">
            <p className="leading-relaxed text-center max-w-3xl mx-auto text-lg">
              <strong className="text-primary">GigaBonus</strong> est votre allié pour trouver les <strong className="text-primary">meilleures offres de casinos en ligne</strong>. 
              Notre mission : vous faire gagner du temps et de l'argent.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Comparaison Exhaustive</h3>
                <p className="text-sm">
                  Nous analysons <strong>tous les bonus du marché</strong> et mettons à jour notre base de données quotidiennement 
                  pour vous offrir les informations les plus récentes.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Avis Objectifs</h3>
                <p className="text-sm">
                  Nos revues sont <strong>impartiales et détaillées</strong>. Nous testons personnellement chaque casino 
                  pour évaluer la qualité du service, les délais de retrait et le support client.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Filtres Puissants</h3>
                <p className="text-sm">
                  Trouvez <strong>exactement ce que vous cherchez</strong> grâce à nos filtres intelligents : 
                  bonus, wager, méthodes de paiement, tout est personnalisable.
                </p>
              </div>
            </div>
            <div className="bg-primary/10 rounded-xl p-6 mt-8 text-center">
              <p className="text-lg font-semibold text-primary mb-2">
                🎉 Rejoignez des milliers de joueurs satisfaits qui utilisent GigaBonus pour trouver les meilleurs casinos !
              </p>
              <p className="text-sm text-foreground">
                Notre communauté grandit chaque jour grâce à notre <strong>transparence</strong>, notre <strong>réactivité</strong> 
                et notre engagement envers le <strong>jeu responsable</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section Témoignages */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">💬 Avis de Nos Utilisateurs</h2>
          <div className="space-y-6">
            <p className="text-center text-foreground max-w-3xl mx-auto mb-8">
              Des milliers de joueurs font confiance à <strong className="text-primary">GigaBonus</strong> pour trouver les meilleurs bonus. 
              Découvrez ce qu'ils en pensent !
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-sm italic text-foreground mb-4">
                  "Grâce à GigaBonus, j'ai trouvé un casino avec un bonus de <strong className="text-primary">300% sans wager</strong>. 
                  Le comparateur est ultra-intuitif et les filtres sont très pratiques !"
                </p>
                <p className="text-sm font-semibold text-primary">— Marc D., Paris</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-sm italic text-foreground mb-4">
                  "J'adore pouvoir filtrer par <strong className="text-primary">méthodes de paiement crypto</strong>. 
                  En 2 minutes j'ai trouvé le casino parfait pour moi. Site indispensable !"
                </p>
                <p className="text-sm font-semibold text-primary">— Sophie L., Lyon</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-sm italic text-foreground mb-4">
                  "Comparateur très complet avec des <strong className="text-primary">avis objectifs</strong>. 
                  J'ai pu comparer facilement tous les wagers et choisir le meilleur casino."
                </p>
                <p className="text-sm font-semibold text-primary">— Thomas R., Marseille</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Statistiques */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">📊 GigaBonus en Chiffres</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">23+</div>
              <p className="text-sm text-foreground">Casinos Comparés</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">400%</div>
              <p className="text-sm text-foreground">Bonus Maximum</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-sm text-foreground">Joueurs Satisfaits</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-foreground">Mises à Jour</p>
            </div>
          </div>
        </section>

        {/* Section Jeu Responsable Détaillée */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-6">🛡️ Engagement pour le Jeu Responsable</h2>
          <div className="space-y-6 text-foreground">
            <p className="leading-relaxed text-center max-w-3xl mx-auto">
              Chez <strong className="text-primary">GigaBonus</strong>, nous promouvons activement le <strong className="text-primary">jeu responsable</strong> 
              et la <strong className="text-primary">prévention de l'addiction au jeu</strong>. Tous nos casinos partenaires respectent les normes strictes 
              de protection des joueurs.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 border border-primary/30 rounded-xl">
                <h3 className="font-semibold text-lg text-primary mb-3">🎯 Conseils pour un Jeu Sain</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Fixez des <strong>limites de dépôt</strong> avant de commencer</li>
                  <li>• Ne jouez jamais pour récupérer vos pertes</li>
                  <li>• Prenez des <strong>pauses régulières</strong></li>
                  <li>• Ne considérez jamais le jeu comme une source de revenus</li>
                  <li>• Jouez uniquement avec de l'argent que vous pouvez vous permettre de perdre</li>
                </ul>
              </div>
              <div className="p-6 border border-primary/30 rounded-xl">
                <h3 className="font-semibold text-lg text-primary mb-3">🆘 Ressources d'Aide</h3>
                <p className="text-sm mb-3">
                  Si vous pensez avoir un problème avec le jeu, contactez ces organismes :
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Joueurs Info Service</strong> : 09 74 75 13 13</li>
                  <li>• <strong>ADICTEL</strong> : Centre de référence</li>
                  <li>• <strong>GamCare</strong> : Support international</li>
                  <li>• <strong>Auto-exclusion ARJEL</strong> disponible</li>
                </ul>
              </div>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 mt-6">
              <p className="text-center text-sm font-semibold">
                ⚠️ <strong>Interdit aux mineurs (-18 ans)</strong> - Le jeu peut être addictif - Jouez de manière responsable
              </p>
            </div>
          </div>
        </section>

        {/* Section FAQ Enrichie pour Featured Snippets */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">❓ Questions Fréquentes sur les Bonus de Casino</h2>
          <div className="space-y-6 text-foreground">
            <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
              <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Comment fonctionne un bonus de casino en ligne ?</h3>
              <p className="text-sm leading-relaxed">
                Un <strong>bonus de casino</strong> est une offre promotionnelle qui augmente votre dépôt initial. Par exemple, 
                avec un bonus de <strong>200%</strong>, si vous déposez 100€, vous recevrez 200€ supplémentaires, soit 300€ au total pour jouer. 
                Le bonus est soumis à des <strong>conditions de mise (wager)</strong> que vous devez remplir avant de retirer vos gains.
              </p>
            </div>
            <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
              <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Quel est le meilleur pourcentage de bonus en 2025 ?</h3>
              <p className="text-sm leading-relaxed">
                Les <strong>meilleurs bonus</strong> vont de <strong>300% à 400%</strong> de votre dépôt. Cependant, vérifiez toujours 
                les <strong>conditions de wager</strong>. Un bonus de 150% avec un wager de x30 peut être plus avantageux 
                qu'un bonus de 400% avec un wager de x60. Notre comparateur vous aide à identifier les <strong>meilleures offres réelles</strong>.
              </p>
            </div>
            <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
              <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Qu'est-ce qu'un bonus sans wager ?</h3>
              <p className="text-sm leading-relaxed">
                Un <strong>bonus sans wager</strong> (ou sans condition de mise) signifie que vous pouvez <strong>retirer vos gains immédiatement</strong> 
                sans avoir à miser un certain montant. C'est le type de bonus le plus <strong>transparent et avantageux</strong>. 
                Le bonus initial est généralement déduit lors du retrait, mais tous vos gains restent à vous.
              </p>
            </div>
            <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
              <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Quelles méthodes de paiement sont acceptées sur les casinos en ligne ?</h3>
              <p className="text-sm leading-relaxed">
                Les casinos modernes acceptent : <strong>cartes bancaires</strong> (Visa, Mastercard), <strong>virements bancaires</strong>, 
                <strong>cryptomonnaies</strong> (Bitcoin, Ethereum, USDT), <strong>e-wallets</strong> (Skrill, Neteller, MiFinity), 
                et <strong>cartes prépayées</strong> (Paysafecard, Neosurf, Cashlib). Les <strong>dépôts sont instantanés</strong>, 
                les retraits prennent généralement entre <strong>24h et 72h</strong>.
              </p>
            </div>
            <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
              <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Les casinos en ligne sont-ils sûrs et légaux ?</h3>
              <p className="text-sm leading-relaxed">
                Oui, tous les casinos listés sur GigaBonus possèdent des <strong>licences officielles</strong> (Curaçao, MGA, UKGC) 
                et utilisent un <strong>cryptage SSL 256-bit</strong>. Les jeux sont certifiés <strong>RNG (Random Number Generator)</strong> 
                et audités par des organismes indépendants (eCOGRA, iTech Labs). Vos fonds et données personnelles sont <strong>100% protégés</strong>.
              </p>
            </div>
            <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 rounded-r-xl">
              <h3 className="font-semibold text-lg text-violet-900 dark:text-violet-100 mb-2">Combien de temps pour recevoir mes gains ?</h3>
              <p className="text-sm leading-relaxed">
                Les délais varient selon la méthode : <strong>cryptomonnaies</strong> (instantané à 12h), <strong>cartes bancaires</strong> (24-48h), 
                <strong>virements</strong> (2-5 jours). Après votre première vérification KYC, les retraits suivants sont généralement 
                <strong>traités sous 24h</strong>. Les casinos crypto offrent les <strong>retraits les plus rapides</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Casino Partners Showcase - Déplacé en bas */}
        <section className="glass-card rounded-2xl p-8 mt-12 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary dark:text-gradient">
            Nos Casinos Partenaires de Confiance
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            {casinos.slice(0, 7).map((casino) => (
              <a
                key={casino.id}
                href={casino.playUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer ${
                  casino.name === "BillyBets" ? "w-[90px] h-[90px]" : "w-20 h-20"
                }`}
              >
                <img
                  src={casino.logo}
                  alt={casino.name}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/64x64?text=" + casino.name.substring(0, 2);
                  }}
                />
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🔒</span>
              <div>
                <p className="font-semibold text-primary">Paiements Sécurisés</p>
                <p className="text-xs">SSL & Cryptage</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">⚡</span>
              <div>
                <p className="font-semibold text-primary">Retraits Rapides</p>
                <p className="text-xs">24h-48h</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🎮</span>
              <div>
                <p className="font-semibold text-primary">+1000 Jeux</p>
                <p className="text-xs">Slots & Live</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">💬</span>
              <div>
                <p className="font-semibold text-primary">Support 24/7</p>
                <p className="text-xs">Chat en direct</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links Section */}
        <Defer when="idle">
          <Suspense fallback={<div className="h-40" />}>
            <div className="mt-12">
              <RelatedLinks
                title="📚 Guides et Pages Populaires"
                links={[
                  {
                    title: "Bonus Sans Wager 2025",
                    description: "Découvrez les rares bonus sans conditions de mise avec retraits immédiats",
                    href: "/bonus-sans-wager"
                  },
                  {
                    title: "Bonus Cashback Casino",
                    description: "Récupérez jusqu'à 20% de vos pertes chaque semaine automatiquement",
                    href: "/bonus-cashback"
                  },
                  {
                    title: "Casinos Sans KYC",
                    description: "Jouez anonymement sans vérification d'identité sur ces casinos crypto",
                    href: "/casinos-sans-kyc"
                  },
                  {
                    title: "Top Casinos Crypto 2025",
                    description: "Meilleurs casinos Bitcoin, Ethereum et cryptos avec retraits instantanés",
                    href: "/top-casinos-crypto"
                  },
                  {
                    title: "Top 10 Slots 2025",
                    description: "Classement des machines à sous les plus lucratives avec RTP élevé",
                    href: "/top-slots-2025"
                  },
                  {
                    title: "Astuces Casino 2025",
                    description: "Stratégies gagnantes pour blackjack, roulette et slots testées par nos experts",
                    href: "/astuces-casino"
                  }
                ]}
               />
            </div>
          </Suspense>
        </Defer>
        </div>
      </div>
      
      <SEOEnrichedGuide 
        guideName="Comparateur Bonus Casino 2025"
        description="Comparateur #1 des bonus casino en ligne avec filtres avancés par wager, pourcentage et méthodes de paiement."
        topCasinos={[
          {
            name: casinos[0].name,
            slug: casinos[0].name.toLowerCase().replace(/\s+/g, '-'),
            bonus: casinos[0].bonusText,
            rating: 9.8
          },
          {
            name: casinos[1].name,
            slug: casinos[1].name.toLowerCase().replace(/\s+/g, '-'),
            bonus: casinos[1].bonusText,
            rating: 9.5
          },
          {
            name: casinos[2].name,
            slug: casinos[2].name.toLowerCase().replace(/\s+/g, '-'),
            bonus: casinos[2].bonusText,
            rating: 9.3
          }
        ]}
      />
      
      <Defer when="idle">
        <Suspense fallback={<div className="h-96" />}>
          <Footer />
        </Suspense>
      </Defer>
    </>
  );
};

