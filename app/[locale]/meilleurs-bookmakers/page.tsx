'use client';


import { useState, useMemo, useEffect, lazy, Suspense } from "react";
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { casinos } from "@/data/casinos";
import { CasinoCard } from "@/components/CasinoCard";
import { CasinoTable } from "@/components/CasinoTable";
import { FilterBar } from "@/components/FilterBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOEnrichedGuide from "@/components/SEOEnrichedGuide";
import SEOHead from "@/components/SEOHead";
import { Defer } from "@/components/Defer";

// Lazy load below-the-fold components
const Footer = lazy(() => import("@/components/Footer"));
const RelatedLinks = lazy(() => import("@/components/RelatedLinks"));

export default function MeilleursBookmakersPage() {
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [methodFilter, setMethodFilter] = useState("all");

  // Filtrer uniquement les bookmakers
  const bookmakerCasinos = useMemo(() => {
    return casinos.filter(casino => casino.isBookmaker === true).sort((a, b) => a.rank - b.rank);
  }, []);

  const getInitialCount = () => {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth >= 1024) return 9;
    if (window.innerWidth >= 768) return 6;
    return 5;
  };

  const [displayedCount, setDisplayedCount] = useState(getInitialCount());

  

  const filteredCasinos = useMemo(() => {
    return bookmakerCasinos.filter((casino) => {
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

      return matchesSearch && matchesBonus && matchesWager && matchesMethod;
    });
  }, [searchTerm, bonusFilter, wagerFilter, methodFilter, bookmakerCasinos]);

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
  }, [searchTerm, bonusFilter, wagerFilter, methodFilter]);

  
  const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Meilleurs Bookmakers 2025 : Top Sites de Paris Sportifs | GigaBonus",
      "description": "Comparateur des meilleurs bookmakers 2025 : cotes compétitives, bonus exclusifs, paris sportifs et casino. Guide complet !",
      "image": "https://gigabonus.win/gigabonus-logo.webp",
      "datePublished": "2025-01-15T10:00:00+01:00",
      "dateModified": "2025-11-28T00:51:35.128Z",
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
        title="Meilleurs Bookmakers 2025 : Top Sites de Paris Sportifs | GigaBonus"
        description="Comparateur des meilleurs bookmakers 2025 : cotes compétitives, bonus exclusifs, paris sportifs et casino. Guide complet !"
        keywords="meilleurs bookmakers, meilleur bookmaker, sites paris sportifs, bookmaker 2025, comparateur bookmaker"
        canonical="https://gigabonus.win/meilleurs-bookmakers"
        ogTitle="Meilleurs Bookmakers 2025 : Top Sites de Paris Sportifs | GigaBonus"
        ogDescription="Comparateur des meilleurs bookmakers 2025 : cotes compétitives, bonus exclusifs, paris sportifs et casino. Guide complet !"
        ogImage="https://gigabonus.win/gigabonus-logo.webp"
        twitterTitle="Meilleurs Bookmakers 2025 : Top Sites de Paris Sportifs | GigaBonus"
        twitterDescription="Comparateur des meilleurs bookmakers 2025 : cotes compétitives, bonus exclusifs, paris sportifs et casino. Guide complet !"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="lcp-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-primary dark:text-gradient">Meilleurs Bookmakers & Bonus Paris Sportifs 2025</span>
              </h1>
            </div>
          </header>

          <section aria-labelledby="intro" className="rounded-2xl p-6 md:p-8 mb-12 max-w-4xl mx-auto text-center border border-border bg-card">
            <p id="intro" className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Découvrez notre sélection exclusive des meilleurs bookmakers avec casino intégré. Profitez de bonus paris sportifs généreux et pariez sur vos sports favoris avec les meilleures cotes.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-foreground">
              <li className="flex items-center justify-center gap-2"><span className="text-primary font-semibold">⚽</span>Paris sportifs & Casino</li>
              <li className="flex items-center justify-center gap-2"><span className="text-primary font-semibold">📊</span>Cotes compétitives</li>
              <li className="flex items-center justify-center gap-2"><span className="text-primary font-semibold">🎁</span>Bonus exclusifs</li>
            </ul>
          </section>

          {/* SEO Content - Intro */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-primary dark:text-secondary text-center">
              Les Meilleurs Sites de Paris Sportifs en 2025
            </h2>
            <div className="space-y-4 text-foreground">
              <p>
                Bienvenue sur la section dédiée aux <strong className="text-primary">meilleurs bookmakers</strong> de GigaBonus. 
                Nous avons sélectionné pour vous les <strong className="text-primary">sites de paris sportifs les plus fiables</strong> qui combinent 
                <strong className="text-primary"> casino en ligne et paris sportifs</strong> dans une seule plateforme.
              </p>
              <p>
                Que vous soyez fan de <strong className="text-primary">football, basketball, tennis ou sports électroniques</strong>, 
                ces bookmakers proposent des <strong className="text-primary">cotes compétitives</strong>, des <strong className="text-primary">paris en direct</strong> 
                et des <strong className="text-primary">bonus sports généreux</strong> pour maximiser vos gains.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  ⚽ Casino + Paris Sportifs : Le Meilleur des Deux Mondes
                </h3>
                <p className="text-foreground">
                  Ces plateformes hybrides vous permettent de profiter à la fois des <strong className="text-primary">machines à sous</strong>, 
                  des <strong className="text-primary">jeux de table</strong> et des <strong className="text-primary">paris sportifs</strong> avec un seul compte. 
                  Bénéficiez de <strong className="text-primary">bonus combinés</strong> et d'une expérience de jeu complète.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  🎁 Bonus Paris Sportifs Exclusifs
                </h3>
                <p className="text-foreground">
                  Profitez de <strong className="text-primary">bonus de bienvenue sport</strong> allant jusqu'à <strong className="text-primary">400%</strong>, 
                  de <strong className="text-primary">paris gratuits (freebets)</strong> et de <strong className="text-primary">cashback sur vos paris</strong>. 
                  Des promotions spéciales sont régulièrement proposées sur les grands événements sportifs.
                </p>
              </div>
            </div>
          </section>

          {/* Filters */}
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
            />
          </Defer>

          {/* Results count */}
          <div className="mb-6 text-center h-8 flex items-center justify-center">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">{filteredCasinos.length}</span> bookmaker
              {filteredCasinos.length > 1 ? "s" : ""} trouvé{filteredCasinos.length > 1 ? "s" : ""}
            </p>
          </div>

          {/* Tabs for Card/Table view */}
          <Defer when="idle">
            <Tabs defaultValue="cards" className="w-full">
              <TabsList className="glass-card mb-8 p-1 grid w-full max-w-md mx-auto grid-cols-2 h-12">
                <TabsTrigger value="cards" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Vue Cartes
                </TabsTrigger>
                <TabsTrigger value="table" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Vue Tableau
                </TabsTrigger>
              </TabsList>

              {/* Cards View */}
              <TabsContent value="cards" className="mt-0">
                {filteredCasinos.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {displayedCasinos.map((casino) => (
                        <CasinoCard key={casino.id} casino={casino} />
                      ))}
                    </div>
                    {hasMoreCasinos && (
                      <div className="flex justify-center mt-8">
                        <button
                          onClick={loadMore}
                          className="glass-card px-8 py-4 rounded-xl font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                          Voir plus de bookmakers ({filteredCasinos.length - displayedCount} restants)
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="glass-card rounded-2xl p-12 text-center">
                    <p className="text-muted-foreground text-lg">
                      Aucun bookmaker ne correspond à vos critères de recherche.
                    </p>
                  </div>
                )}
              </TabsContent>

              {/* Table View */}
              <TabsContent value="table" className="mt-0 min-h-[700px]">
                {filteredCasinos.length > 0 ? (
                  <>
                    <CasinoTable casinos={displayedCasinos} />
                    {hasMoreCasinos && (
                      <div className="flex justify-center mt-8">
                        <button
                          onClick={loadMore}
                          className="glass-card px-8 py-4 rounded-xl font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                          Voir plus de bookmakers ({filteredCasinos.length - displayedCount} restants)
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="glass-card rounded-2xl p-12 text-center">
                    <p className="text-muted-foreground text-lg">
                      Aucun bookmaker ne correspond à vos critères de recherche.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </Defer>

          {/* SEO Content - Guide */}
          <section className="glass-card rounded-2xl p-8 mt-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground text-center">
              Guide Complet : Comment Choisir un Bookmaker ?
            </h2>
            <div className="space-y-6 text-foreground">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  📊 Les Cotes et Marges
                </h3>
                <p>
                  Les <strong className="text-primary">cotes</strong> déterminent vos gains potentiels. Plus elles sont élevées, plus vous gagnez. 
                  Les meilleurs bookmakers proposent des <strong className="text-primary">cotes compétitives</strong> avec des marges réduites, 
                  généralement entre <strong className="text-primary">2% et 5%</strong> sur les sports populaires.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  ⚡ Paris en Direct (Live Betting)
                </h3>
                <p>
                  Les <strong className="text-primary">paris en direct</strong> vous permettent de parier pendant le match avec des cotes qui évoluent en temps réel. 
                  C'est idéal pour profiter des opportunités et ajuster votre stratégie selon le déroulement de la rencontre.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  🎁 Types de Bonus Paris Sportifs
                </h3>
                <p>
                  <strong className="text-primary">Bonus de bienvenue sport :</strong> Bonus sur votre premier dépôt dédié aux paris sportifs.<br/>
                  <strong className="text-primary">Paris gratuits (Freebets) :</strong> Pariez sans risque avec des mises offertes.<br/>
                  <strong className="text-primary">Cashback sport :</strong> Récupérez une partie de vos pertes sur vos paris.<br/>
                  <strong className="text-primary">Bonus combiné :</strong> Boostez vos paris combinés avec des cotes améliorées.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  🏆 Sports Disponibles
                </h3>
                <p>
                  Les bookmakers de notre sélection couvrent tous les <strong className="text-primary">sports majeurs</strong> : 
                  Football, Basketball, Tennis, Rugby, MMA, Boxe, Formule 1, et bien plus. 
                  Vous trouverez également des <strong className="text-primary">paris eSports</strong> sur League of Legends, CS:GO, Dota 2, etc.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  💳 Méthodes de Paiement pour Paris Sportifs
                </h3>
                <p>
                  Tous nos bookmakers acceptent les <strong className="text-primary">méthodes de paiement populaires</strong> : 
                  Carte bancaire, cryptomonnaies, Skrill, Neteller, Cashlib, Neosurf et Paysafecard. 
                  Les <strong className="text-primary">dépôts sont instantanés</strong> et les <strong className="text-primary">retraits rapides</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-violet-900 dark:text-violet-100">
                  🔒 Sécurité et Jeu Responsable
                </h3>
                <p>
                  Tous les bookmakers listés sont <strong className="text-primary">fiables et sécurisés</strong>. 
                  Ils proposent des <strong className="text-primary">outils de jeu responsable</strong> : limites de dépôt, d'auto-exclusion et de temps de jeu. 
                  Pariez toujours de manière responsable et ne misez que ce que vous pouvez vous permettre de perdre.
                </p>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <Suspense fallback={<div className="h-64"></div>}>
            <Defer when="idle">
              <div className="mt-16">
                <RelatedLinks
                  title="Voir Aussi"
                  links={[
                    {
                      title: "Tous les Casinos",
                      description: "Découvrez tous nos casinos en ligne avec bonus généreux",
                      href: "/"
                    },
                    {
                      title: "Top Casinos Crypto",
                      description: "Les meilleurs casinos acceptant les cryptomonnaies",
                      href: "/top-casinos-crypto"
                    },
                    {
                      title: "Bonus Cashback",
                      description: "Récupérez une partie de vos pertes avec les bonus cashback",
                      href: "/bonus-cashback"
                    },
                    {
                      title: "Bonus Sans Wager",
                      description: "Bonus sans conditions de mise pour retirer immédiatement",
                      href: "/bonus-sans-wager"
                    }
                  ]}
                />
              </div>
            </Defer>
          </Suspense>
        </div>
      </div>
      
      {/* SEO Enriched Guide Content */}
      <SEOEnrichedGuide
        locale={locale}
        guideName="Meilleurs Bookmakers"
        description="Les meilleurs bookmakers 2025 combinent paris sportifs et casino avec bonus jusqu'à 400% et cotes compétitives sur tous les sports."
        topCasinos={[
          { name: "SpinStar", slug: "spinstar", bonus: "700% jusqu'à 10,000€", rating: 9.3 },
          { name: "SlotRush", slug: "slotrush", bonus: "100% jusqu'à 500€", rating: 9.2 },
          { name: "Betify", slug: "betify", bonus: "100% jusqu'à 500€", rating: 9.1 },
          { name: "Cleobetra", slug: "cleobetra", bonus: "100% jusqu'à 500€", rating: 9.0 },
          { name: "Lucky Trunk", slug: "luckytrunk", bonus: "100% jusqu'à 1000€", rating: 8.9 }
        ]}
      />

      <Suspense fallback={<div className="h-64"></div>}>
        <Defer when="idle">
          <Footer />
        </Defer>
      </Suspense>
    </>
  );
};



