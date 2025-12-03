'use client';

import { useState, useMemo } from "react";
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { casinos } from "@/data/casinos";
import { CasinoCard } from "@/components/CasinoCard";
import { CasinoTable } from "@/components/CasinoTable";
import { FilterBar } from "@/components/FilterBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import RelatedLinks from "@/components/RelatedLinks";
import SEOEnrichedGuide from "@/components/SEOEnrichedGuide";
import SEOHead from "@/components/SEOHead";
import { TrendingDown } from "lucide-react";
import { useUserCountry } from "@/hooks/useUserCountry";

export default function BonusCashbackPage() {
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [methodFilter, setMethodFilter] = useState("all");

  // Récupérer le pays de l'utilisateur pour filtrer les casinos
  const { countryCode: userCountry } = useUserCountry();

  const cashbackCasinos = useMemo(() => {
    const cashbackCasinoNames = [
      "Mr Pacho",
      "BillyBets",
      "Cleobetra", 
      "RichRoyal",
      "WinRolla",
      "Play Regal",
      "Vegas Plus",
      "WinMaChance",
      "Unique Casino"
    ];
    
    return casinos.filter((casino) => 
      cashbackCasinoNames.some(name => 
        casino.name.toLowerCase() === name.toLowerCase()
      )
    ).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return cashbackCasinos.filter((casino) => {
      const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBonus = bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);
      const matchesWager =
        wagerFilter === "all" ||
        (wagerFilter === "none" && casino.wager === null) ||
        (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));
      const matchesMethod =
        methodFilter === "all" ||
        casino.methods.some((method) => method.toLowerCase() === methodFilter.toLowerCase());

      // Country filter
      const matchesCountry =
        !userCountry ||
        !casino.availableCountries ||
        casino.availableCountries.length === 0 ||
        casino.availableCountries.includes(userCountry);

      return matchesSearch && matchesBonus && matchesWager && matchesMethod && matchesCountry;
    });
  }, [cashbackCasinos, searchTerm, bonusFilter, wagerFilter, methodFilter, userCountry]);

  return (
    <>
      <SEOHead
        title="Bonus Cashback Casino 2025 : Meilleurs Cashbacks Hebdomadaires | GigaBonus"
        description="Découvrez les meilleurs bonus cashback des casinos 2025. Récupérez vos pertes chaque semaine! Comparatif complet des cashbacks quotidiens, hebdomadaires et VIP."
        keywords="bonus cashback casino, cashback hebdomadaire casino, cashback sans wager, casino cashback quotidien, bonus cashback VIP, meilleur cashback casino 2025"
        canonical="https://gigabonus.win/bonus-cashback"
        ogTitle="Bonus Cashback Casino 2025 : Meilleurs Cashbacks Hebdomadaires"
        ogDescription="Découvrez les meilleurs bonus cashback des casinos 2025. Récupérez vos pertes chaque semaine!"
        ogImage="https://gigabonus.win/og-image.png"
        twitterTitle="Bonus Cashback Casino 2025 : Meilleurs Cashbacks Hebdomadaires"
        twitterDescription="Découvrez les meilleurs bonus cashback des casinos 2025. Récupérez vos pertes chaque semaine!"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Review",
              "itemReviewed": {
                "@type": "Product",
                "name": "Bonus Cashback Casino 2025"
              },
              "author": {
                "@type": "Person",
                "name": "Alexandre Martin",
                "jobTitle": "Expert Casino Senior",
                "description": "Expert en bonus casino avec 15 ans d'expérience et plus de 500 plateformes testées"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "9.5",
                "bestRating": "10",
                "worstRating": "0"
              },
              "reviewBody": "Les bonus cashback permettent de récupérer 5-25% de vos pertes hebdomadaires. Guide complet 2025 des meilleurs cashbacks.",
              "datePublished": "2025-01-15",
              "publisher": {
                "@type": "Organization",
                "name": "GigaBonus"
              }
            },
            {
              "@type": "Article",
              "headline": "Bonus Cashback Casino 2025 : Guide Complet Meilleurs Cashbacks",
              "author": {
                "@type": "Person",
                "name": "Alexandre Martin"
              },
              "datePublished": "2025-01-15",
              "dateModified": "2025-01-15",
              "publisher": {
                "@type": "Organization",
                "name": "GigaBonus",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://gigabonus.win/gigabonus-logo.webp"
                }
              },
              "description": "Découvrez les meilleurs bonus cashback des casinos 2025. Récupérez vos pertes chaque semaine! Comparatif complet des cashbacks quotidiens, hebdomadaires et VIP."
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Le cashback a-t-il des conditions de mise ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cela dépend des casinos. Certains offrent du cashback sans wager (argent réel), d'autres avec un wager faible de 1x à 5x. Toujours vérifier les termes et conditions du casino."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Puis-je cumuler cashback et bonus de bienvenue ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Généralement non. Les pertes prises en compte pour le cashback sont calculées après déduction des bonus actifs. Mais le cashback hebdomadaire s'applique après la fin de votre bonus de bienvenue."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quand est versé le cashback ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le cashback hebdomadaire est souvent versé le lundi ou mardi. Le cashback quotidien arrive le lendemain de vos pertes. Les VIP peuvent recevoir leur cashback plus rapidement."
                  }
                }
              ]
            }
          ]
        }}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-primary">Bonus Cashback Casino 2025</span>
              </h1>
              
              <div className="glass-card rounded-2xl p-8 text-left space-y-4">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Les <strong className="text-foreground">bonus cashback casino</strong> représentent l'une des promotions les plus avantageuses du marché en 2025. Contrairement aux bonus de bienvenue classiques avec wager élevé, le <strong className="text-foreground">cashback</strong> vous permet de <strong className="text-foreground">récupérer un pourcentage de vos pertes</strong> chaque semaine, souvent sans conditions de mise ou avec des exigences très faibles.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Notre sélection des <strong className="text-foreground">meilleurs casinos avec cashback hebdomadaire</strong> vous présente les établissements les plus généreux, offrant entre <strong className="text-foreground">5% et 25% de cashback</strong> selon votre niveau VIP. Certains casinos proposent même du <strong className="text-foreground">cashback quotidien sans wager</strong>, versé directement en argent réel retirable.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Que vous soyez joueur de <strong className="text-foreground">slots</strong>, amateur de <strong className="text-foreground">live casino</strong> ou parieur sportif, le cashback s'adapte à votre style de jeu et vous offre une <strong className="text-foreground">protection contre les pertes</strong> tout en récompensant votre fidélité.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">5-25%</div>
                    <div className="text-xs text-muted-foreground mt-1">Taux de cashback</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">0-3x</div>
                    <div className="text-xs text-muted-foreground mt-1">Conditions wager</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">24-72h</div>
                    <div className="text-xs text-muted-foreground mt-1">Délai de versement</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/10">
                    <div className="text-2xl font-bold text-primary">Illimité</div>
                    <div className="text-xs text-muted-foreground mt-1">Récurrence</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

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

          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">{filteredCasinos.length}</span> casino
              {filteredCasinos.length > 1 ? "s" : ""} trouvé{filteredCasinos.length > 1 ? "s" : ""}
            </p>
          </div>

          <Tabs defaultValue="cards" className="w-full">
            <TabsList className="glass-card mb-8 p-1 grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="cards" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Vue Cartes
              </TabsTrigger>
              <TabsTrigger value="table" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Vue Tableau
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cards" className="mt-0">
              {filteredCasinos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCasinos.map((casino) => (
                    <CasinoCard key={casino.id} casino={casino} />
                  ))}
                </div>
              ) : (
                <div className="glass-card rounded-2xl p-12 text-center">
                  <p className="text-muted-foreground text-lg">
                    Aucun casino ne correspond à vos critères de recherche.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="table" className="mt-0">
              {filteredCasinos.length > 0 ? (
                <CasinoTable casinos={filteredCasinos} />
              ) : (
                <div className="glass-card rounded-2xl p-12 text-center">
                  <p className="text-muted-foreground text-lg">
                    Aucun casino ne correspond à vos critères de recherche.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <section className="mt-16 max-w-4xl mx-auto space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Qu'est-ce qu'un bonus cashback casino ?</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Un <strong className="text-foreground">bonus cashback</strong> est une promotion qui vous permet de <strong className="text-foreground">récupérer un pourcentage de vos pertes nettes</strong> sur une période définie (quotidienne, hebdomadaire ou mensuelle). Contrairement aux bonus de dépôt classiques qui exigent des conditions de mise élevées, le <strong className="text-foreground">cashback casino</strong> offre généralement des termes beaucoup plus flexibles.
                </p>
                <p>
                  Le fonctionnement est simple : le casino calcule vos <strong className="text-foreground">pertes nettes</strong> (mises - gains) sur la période définie, puis vous reverse un pourcentage de ce montant. Par exemple, avec un <strong className="text-foreground">cashback hebdomadaire de 10%</strong> et 500 € de pertes, vous recevez 50 € de bonus ou d'argent réel selon les termes.
                </p>
                <p>
                  Ce qui rend le cashback particulièrement attractif, c'est sa <strong className="text-foreground">récurrence automatique</strong>. Contrairement au bonus de bienvenue que vous ne recevez qu'une fois, le <strong className="text-foreground">cashback hebdomadaire</strong> ou quotidien se renouvelle indéfiniment tant que vous jouez. C'est la promotion idéale pour les <strong className="text-foreground">joueurs réguliers</strong> qui recherchent une protection continue.
                </p>
                <p>
                  Les <strong className="text-foreground">meilleurs casinos cashback 2025</strong> proposent des taux entre 10% et 25% pour les VIP, avec parfois un <strong className="text-foreground">cashback sans wager</strong> versé en argent réel directement retirable. Découvrez d'autres types de promotions sur notre <Link href="/" className="text-primary underline hover:text-primary/80">comparateur de bonus casino</Link>.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Types de cashback casino</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">🔄 Cashback quotidien</h3>
                  <p>Récupérez un % de vos pertes chaque jour. Idéal pour les joueurs actifs qui veulent une sécurité quotidienne.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">📅 Cashback hebdomadaire</h3>
                  <p>Le plus courant. Vous récupérez entre 5% et 20% de vos pertes de la semaine, souvent le lundi.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">🎯 Cashback VIP</h3>
                  <p>Réservé aux joueurs VIP avec des pourcentages plus élevés (jusqu'à 25%) et sans limite de montant.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">💎 Cashback live casino</h3>
                  <p>Spécifique aux jeux de casino en direct (roulette, blackjack, baccarat).</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Pourquoi choisir un casino avec cashback ?</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Limite les pertes</strong> : Récupérez une partie de vos mises perdues</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Conditions souples</strong> : Souvent sans wager ou avec un wager faible (1x à 3x)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Fidélisation</strong> : Récompense votre régularité sur le casino</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Argent réel</strong> : Certains cashbacks sont versés directement en argent réel</span>
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Comment fonctionne le cashback ?</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">Jouez normalement</h3>
                    <p className="text-sm">Faites vos mises sur les jeux éligibles (slots, live casino, paris sportifs selon l'offre)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Le casino calcule vos pertes</h3>
                    <p className="text-sm">À la fin de la période (jour, semaine), le casino calcule automatiquement vos pertes nettes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">Recevez votre cashback</h3>
                    <p className="text-sm">Vous recevez un % de vos pertes en bonus ou argent réel selon les conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">Utilisez votre cashback</h3>
                    <p className="text-sm">Rejouez avec votre cashback (conditions allégées) ou retirez-le si c'est de l'argent réel</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Exemple concret de cashback</h2>
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vous jouez 1 000 € en une semaine sur un casino avec <strong>cashback hebdomadaire de 10%</strong>.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Vous gagnez 300 € sur vos sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Perte nette de la semaine : 1 000 € - 300 € = <strong>700 € de pertes</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Cashback reçu : 700 € × 10% = <strong>70 € de bonus</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Ce bonus peut avoir un wager de 1x à 3x ou être en argent réel direct</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ - Bonus Cashback</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Le cashback a-t-il des conditions de mise ?</h3>
                  <p className="text-muted-foreground">Cela dépend des casinos. Certains offrent du cashback sans wager (argent réel), d'autres avec un wager faible de 1x à 5x. Toujours vérifier les T&C.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Puis-je cumuler cashback et bonus de bienvenue ?</h3>
                  <p className="text-muted-foreground">Généralement non. Les pertes prises en compte pour le cashback sont calculées après déduction des bonus actifs. Mais le cashback hebdomadaire s'applique après votre bonus de bienvenue.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quand est versé le cashback ?</h3>
                  <p className="text-muted-foreground">Le cashback hebdomadaire est souvent versé le lundi ou mardi. Le cashback quotidien arrive le lendemain de vos pertes.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Y a-t-il un montant minimum de pertes ?</h3>
                  <p className="text-muted-foreground">Oui, certains casinos exigent un minimum de pertes (ex: 50 € de pertes minimum) pour recevoir le cashback.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Le cashback est-il plafonné ?</h3>
                  <p className="text-muted-foreground">Oui, la plupart des cashbacks ont un plafond (ex: max 500 € de cashback par semaine). Les VIP ont souvent des plafonds plus élevés ou illimités.</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Cashback vs Bonus classique : Quelle différence ?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-3 font-semibold">Critère</th>
                      <th className="p-3 font-semibold text-primary">Bonus Cashback</th>
                      <th className="p-3 font-semibold">Bonus Classique</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Conditions de mise</td>
                      <td className="p-3 text-primary">0x à 3x (souvent 1x)</td>
                      <td className="p-3">30x à 50x</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Récurrence</td>
                      <td className="p-3 text-primary">Hebdomadaire ou quotidien</td>
                      <td className="p-3">Une seule fois</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Montant</td>
                      <td className="p-3 text-primary">5-25% des pertes</td>
                      <td className="p-3">100-200% du dépôt</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Type de crédit</td>
                      <td className="p-3 text-primary">Argent réel ou bonus faible wager</td>
                      <td className="p-3">Bonus avec wager élevé</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Durée de validité</td>
                      <td className="p-3 text-primary">7-30 jours</td>
                      <td className="p-3">7-14 jours</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Avantage principal</td>
                      <td className="p-3 text-primary">Protection contre les pertes</td>
                      <td className="p-3">Gros capital de départ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">
                💡 <strong>Notre recommandation</strong> : Pour les joueurs réguliers, le cashback est plus avantageux sur le long terme car il offre une protection récurrente sans exigences de mise élevées.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Comment calculer son cashback casino ?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Le calcul du <strong className="text-foreground">cashback hebdomadaire</strong> ou quotidien suit une formule simple, mais il est important de comprendre les subtilités pour maximiser vos gains.
                </p>
                
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 space-y-4">
                  <h3 className="font-semibold text-lg text-foreground">📊 Formule de base du cashback</h3>
                  <div className="font-mono text-sm bg-background/50 p-4 rounded border border-border">
                    Cashback = (Total des mises - Total des gains) × Taux de cashback
                  </div>
                  
                  <h4 className="font-semibold text-foreground mt-4">Exemple 1 : Cashback hebdomadaire classique</h4>
                  <ul className="space-y-2 ml-4">
                    <li>• Total misé sur la semaine : <strong>2 000 €</strong></li>
                    <li>• Total des gains : <strong>1 400 €</strong></li>
                    <li>• Pertes nettes : 2 000 € - 1 400 € = <strong className="text-primary">600 €</strong></li>
                    <li>• Taux de cashback : <strong>15%</strong></li>
                    <li>• Cashback reçu : 600 € × 15% = <strong className="text-primary">90 €</strong></li>
                  </ul>
                  
                  <h4 className="font-semibold text-foreground mt-4">Exemple 2 : Cashback VIP sans wager</h4>
                  <ul className="space-y-2 ml-4">
                    <li>• Total misé : <strong>5 000 €</strong></li>
                    <li>• Total des gains : <strong>3 800 €</strong></li>
                    <li>• Pertes nettes : <strong className="text-primary">1 200 €</strong></li>
                    <li>• Taux cashback VIP : <strong>20%</strong></li>
                    <li>• Cashback versé en argent réel : <strong className="text-primary">240 €</strong> (retirable immédiatement)</li>
                  </ul>
                </div>
                
                <p className="leading-relaxed">
                  <strong className="text-foreground">Points importants à considérer :</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Seules les <strong className="text-foreground">pertes nettes</strong> comptent (pas les mises totales)</li>
                  <li>• Certains jeux peuvent être <strong className="text-foreground">exclus du calcul</strong> (vérifiez les T&C)</li>
                  <li>• Les <strong className="text-foreground">bonus actifs</strong> peuvent ne pas compter dans le calcul des pertes</li>
                  <li>• Il existe souvent un <strong className="text-foreground">minimum de pertes</strong> requis (ex: 50 € de pertes minimum)</li>
                  <li>• Le cashback peut être <strong className="text-foreground">plafonné</strong> (ex: max 500 € par semaine)</li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Meilleurs casinos pour le cashback par catégorie</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">🏆 Meilleur cashback sans wager</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-foreground">RX Casino</strong> et <strong className="text-foreground">Lucky Treasure</strong> proposent du cashback quotidien versé en argent réel sans conditions de mise. Vous pouvez retirer votre cashback immédiatement.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    → Idéal pour : Joueurs qui veulent de l'argent réel retirable
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">💎 Meilleur cashback VIP</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-foreground">Play Regal</strong> et <strong className="text-foreground">Vegas Plus</strong> offrent jusqu'à <strong>25% de cashback</strong> pour leurs membres VIP Diamond, avec des plafonds illimités et versement express.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    → Idéal pour : High rollers et joueurs réguliers
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">🎰 Meilleur cashback live casino</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-foreground">Mr Pacho</strong>, <strong className="text-foreground">RichRoyal</strong> et <strong className="text-foreground">BillyBets</strong> proposent un cashback spécifique sur les jeux en direct (roulette, blackjack, baccarat) avec des taux majorés de 15-20%.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    → Idéal pour : Fans de croupiers en direct
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">📅 Meilleur cashback hebdomadaire</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-foreground">Unique Casino</strong> et <strong className="text-foreground">WinMaChance</strong> versent chaque lundi un cashback de 10-15% avec wager 1x seulement. Programme automatique sans inscription.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    → Idéal pour : Joueurs de slots réguliers
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-xl mb-3 text-foreground">⚽ Meilleur cashback paris sportifs</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-foreground">Cleobetra</strong> et <strong className="text-foreground">WinRolla</strong> offrent un cashback hebdomadaire de 10% sur vos paris sportifs perdants, cumulable avec les bonus casino.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    → Idéal pour : Parieurs sportifs
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-primary/5 border-2 border-primary/20">
              <h2 className="text-3xl font-bold mb-4">💡 Nos conseils d'experts pour maximiser votre cashback</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span><strong className="text-foreground">Privilégiez le cashback sans wager</strong> : Un cashback de 10% sans wager est souvent plus rentable qu'un cashback de 20% avec wager 5x.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span><strong className="text-foreground">Concentrez votre jeu</strong> : Jouez sur un seul casino pour maximiser vos pertes et donc votre cashback. 500 € de pertes sur un casino = 50-75 € de cashback, contre 25-37 € si réparti sur deux casinos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span><strong className="text-foreground">Vérifiez les jeux exclus</strong> : Certains casinos excluent les slots à faible volatilité (Book of, Starburst) ou les jeux de table du calcul du cashback.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span><strong className="text-foreground">Montez en niveau VIP</strong> : Le cashback augmente avec votre statut VIP. Passez de 10% (Bronze) à 20-25% (Diamond) en accumulant des points de fidélité.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span><strong className="text-foreground">Timing stratégique</strong> : Si vous êtes proche du seuil de pertes minimum (ex: 45 € de pertes pour un seuil de 50 €), misez 5 € de plus pour activer le cashback.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span><strong className="text-foreground">Combinez avec le rakeback crypto</strong> : Certains casinos crypto offrent un double système cashback + rakeback, doublant vos remises.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span><strong className="text-foreground">Activez les notifications</strong> : Paramétrez des alertes email/SMS pour ne jamais oublier de réclamer votre cashback (certains expirent après 7 jours).</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Related Links */}
          <div className="mt-12">
            <RelatedLinks
              links={[
                {
                  title: "Bonus Sans Wager",
                  description: "Découvrez les casinos proposant des bonus sans conditions de mise",
                  href: "/bonus-sans-wager"
                },
                {
                  title: "Casinos Sans KYC",
                  description: "Jouez anonymement sans vérification d'identité",
                  href: "/casinos-sans-kyc"
                },
                {
                  title: "Comparateur de Bonus Casino",
                  description: "Comparez tous les bonus de bienvenue des casinos en ligne",
                  href: "/"
                },
                {
                  title: "Top Casinos Crypto 2025",
                  description: "Meilleurs casinos acceptant les cryptomonnaies avec cashback",
                  href: "/top-casinos-crypto"
                }
              ]}
            />
          </div>
        </div>
      </div>
      
      {/* SEO Enriched Guide Content */}
      <SEOEnrichedGuide
        locale={locale}
        guideName="Bonus Cashback"
        description="Les bonus cashback permettent de récupérer 5-25% de vos pertes hebdomadaires ou quotidiennes, souvent sans conditions de mise."
        topCasinos={[
          { name: "Play Regal", slug: "playregal", bonus: "100% jusqu'à 300€", rating: 9.4 },
          { name: "Vegas Plus", slug: "vegasplus", bonus: "200% jusqu'à 500€", rating: 9.3 },
          { name: "Ma Chance", slug: "machance", bonus: "100% jusqu'à 200€", rating: 9.2 },
          { name: "Unique Casino", slug: "uniquecasino", bonus: "200% jusqu'à 500€", rating: 9.1 },
          { name: "Cleobetra", slug: "cleobetra", bonus: "100% jusqu'à 500€", rating: 9.0 }
        ]}
      />
      
      <Footer />
    </>
  );
};

