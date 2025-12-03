'use client';


import { useState, useMemo, useEffect } from "react";
import { casinos } from "@/data/casinos";
import { CasinoCard } from "@/components/CasinoCard";
import { CasinoTable } from "@/components/CasinoTable";
import { FilterBar } from "@/components/FilterBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnrichedPayment from '@/components/SEOEnrichedPayment';
import SEOHead from '@/components/SEOHead';
import { Ticket } from "lucide-react";
import { useUserCountry } from "@/hooks/useUserCountry";

export default function DepotNeosurfPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(9);

  // Récupérer le pays de l'utilisateur pour filtrer les casinos
  const { countryCode: userCountry } = useUserCountry();

  const neosurfCasinos = useMemo(() => {
    return casinos.filter((casino) => casino.methods.includes("neosurf")).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return neosurfCasinos.filter((casino) => {
      const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBonus = bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);
      const matchesWager =
        wagerFilter === "all" ||
        (wagerFilter === "none" && casino.wager === null) ||
        (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));

      // Country filter
      const matchesCountry =
        !userCountry ||
        !casino.availableCountries ||
        casino.availableCountries.length === 0 ||
        casino.availableCountries.includes(userCountry);

      return matchesSearch && matchesBonus && matchesWager && matchesCountry;
    });
  }, [neosurfCasinos, searchTerm, bonusFilter, wagerFilter, userCountry]);

  const displayedCasinos = useMemo(() => {
    return filteredCasinos.slice(0, displayedCount);
  }, [filteredCasinos, displayedCount]);

  const hasMoreCasinos = filteredCasinos.length > displayedCount;

  const loadMore = () => {
    setDisplayedCount(prev => prev + 6);
  };

  useEffect(() => {
    setDisplayedCount(9);
  }, [searchTerm, bonusFilter, wagerFilter]);

  
  const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Casinos Acceptant Neosurf 2025 : Dépôt par Code Prépayé | GigaBonus",
      "description": "Guide complet des casinos acceptant Neosurf. Dépôts sécurisés avec codes prépayés, bonus exclusifs et retraits rapides !",
      "image": "https://gigabonus.win/images/methods/neosurf.webp",
      "datePublished": "2025-01-15T10:00:00+01:00",
      "dateModified": "2025-11-28T00:51:35.111Z",
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
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Alexandre Martin",
        "jobTitle": "Expert Casino Senior"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "8.8",
        "bestRating": "10"
      },
      "itemReviewed": {
        "@type": "Product",
        "name": "Casinos Acceptant Neosurf 2025"
      },
      "datePublished": "2025-01-15"
    }
  ]
};

  return (
    <>
      <SEOHead
        title="Casinos Acceptant Neosurf 2025 : Dépôt par Code Prépayé | GigaBonus"
        description="Guide complet des casinos acceptant Neosurf. Dépôts sécurisés avec codes prépayés, bonus exclusifs et retraits rapides !"
        keywords="casino neosurf, dépôt neosurf, code neosurf casino, casino prépayé neosurf, neosurf 2025"
        canonical="https://gigabonus.win/depot/neosurf"
        ogTitle="Casinos Acceptant Neosurf 2025 : Dépôt par Code Prépayé | GigaBonus"
        ogDescription="Guide complet des casinos acceptant Neosurf. Dépôts sécurisés avec codes prépayés, bonus exclusifs et retraits rapides !"
        ogImage="https://gigabonus.win/images/methods/neosurf.webp"
        twitterTitle="Casinos Acceptant Neosurf 2025 : Dépôt par Code Prépayé | GigaBonus"
        twitterDescription="Guide complet des casinos acceptant Neosurf. Dépôts sécurisés avec codes prépayés, bonus exclusifs et retraits rapides !"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-primary dark:text-gradient">Casinos Acceptant Neosurf</span>
              </h1>
            
            </div>
          </header>

          {/* SEO Intro Section */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground text-center">
              <p className="text-lg leading-relaxed">
                En <strong className="text-primary">2025</strong>, <strong className="text-primary">Neosurf</strong> s'impose comme l'une des solutions de paiement prépayé les plus populaires pour jouer au casino en ligne. 
                Sur <strong className="text-primary">GigaBonus.win</strong>, découvrez notre sélection exclusive de <strong className="text-primary">casinos acceptant Neosurf</strong> avec des bonus attractifs et des conditions de mise transparentes.
              </p>
              <p className="text-lg leading-relaxed">
                Profitez d'une <strong className="text-primary">confidentialité totale</strong> en utilisant simplement votre <strong className="text-primary">code à 10 chiffres</strong> sans partager vos informations bancaires. 
                Avec plus de <strong className="text-primary">135 000 points de vente</strong> en France et des <strong className="text-primary">dépôts instantanés</strong>, Neosurf offre simplicité et sécurité pour tous vos dépôts casino.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>100% anonyme</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Dépôt instantané</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Sans carte bancaire</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>135k points de vente</span>
                </div>
              </div>
            </div>
          </section>

          <FilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            bonusFilter={bonusFilter}
            onBonusChange={setBonusFilter}
            wagerFilter={wagerFilter}
            onWagerChange={setWagerFilter}
          />

          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">{filteredCasinos.length}</span> casino
              {filteredCasinos.length > 1 ? "s" : ""} trouvé{filteredCasinos.length > 1 ? "s" : ""}
            </p>
          </div>

          <Tabs defaultValue="cards" className="w-full">
            <TabsList className="glass-card mb-8 p-1 grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="cards" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Vue Cartes
              </TabsTrigger>
              <TabsTrigger value="table" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Vue Tableau
              </TabsTrigger>
            </TabsList>

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
                        Voir plus de casinos ({filteredCasinos.length - displayedCount} restants)
                      </button>
                    </div>
                  )}
                </>
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
              <h2 className="text-3xl font-bold mb-4">Qu'est-ce que Neosurf ?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Neosurf</strong> est un voucher prépayé très populaire en Europe pour jouer en ligne. Similaire à Paysafecard, Neosurf vous permet de déposer anonymement sur les casinos sans carte bancaire ni compte e-wallet. Achetez votre code à 10 chiffres et utilisez-le immédiatement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Créée en 2004 en France, <strong className="text-primary">Neosurf</strong> est aujourd'hui acceptée dans plus de 20 000 sites web à travers le monde avec 135 000 points de vente en Europe. Son système de bons prépayés protège vos données bancaires tout en vous permettant de contrôler vos dépenses.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Mode d'emploi : Déposer avec Neosurf</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="font-semibold text-foreground mb-3">Suivez ces étapes simples :</p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">1.</span>
                    <div>
                      <strong className="text-foreground">Trouvez un point de vente Neosurf</strong>
                      <p>Utilisez le localisateur sur Neosurf.com pour trouver le point de vente le plus proche (bureau de tabac, presse, supermarché).</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">2.</span>
                    <div>
                      <strong className="text-foreground">Achetez votre bon Neosurf</strong>
                      <p>Choisissez le montant (15€ à 150€) et payez en espèces. Vous recevez un ticket avec un code à 10 caractères.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">3.</span>
                    <div>
                      <strong className="text-foreground">Entrez votre code sur le casino</strong>
                      <p>Saisissez le code à 10 caractères et le montant. Vos fonds sont disponibles immédiatement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ - Neosurf casinos</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Où trouver et acheter Neosurf ?</h3>
                  <p className="text-muted-foreground">Neosurf est disponible dans plus de 135 000 points de vente en France : bureaux de tabac, kiosques à presse, supermarchés, stations-service. Utilisez le localisateur sur Neosurf.com.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Y a-t-il des frais avec Neosurf ?</h3>
                  <p className="text-muted-foreground">Neosurf ne facture aucun frais d'utilisation pour les dépôts. Après 6 mois d'inactivité, des frais de 2€ par mois sont prélevés du solde.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Mon code a-t-il une date d'expiration ?</h3>
                  <p className="text-muted-foreground">Les bons Neosurf sont valables 12 mois à partir de la date d'achat.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SEOEnrichedPayment
        paymentName="Neosurf"
        description="code prépayé simple pour dépôts anonymes et instantanés"
        advantages={["100% anonyme", "Dépôt instantané", "Sans carte bancaire", "135k points de vente"]}
        casinoCount={neosurfCasinos.length}
      />
      <Footer />
    </>
  );
};


