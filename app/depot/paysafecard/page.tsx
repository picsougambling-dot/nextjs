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

export default function DepotPaysafecardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(9);

  

  const paysafeCasinos = useMemo(() => {
    return casinos.filter((casino) => casino.methods.includes("paysafe")).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return paysafeCasinos.filter((casino) => {
      const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBonus = bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);
      const matchesWager =
        wagerFilter === "all" ||
        (wagerFilter === "none" && casino.wager === null) ||
        (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));

      return matchesSearch && matchesBonus && matchesWager;
    });
  }, [paysafeCasinos, searchTerm, bonusFilter, wagerFilter]);

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
      "headline": "Casinos Acceptant Paysafecard 2025 : Dépôt Prépayé Sécurisé | GigaBonus",
      "description": "Guide des casinos acceptant Paysafecard. Dépôts sécurisés avec codes prépayés, bonus exclusifs et retraits rapides !",
      "image": "https://gigabonus.win/images/methods/paysafecard.webp",
      "datePublished": "2025-01-15T10:00:00+01:00",
      "dateModified": "2025-11-28T00:51:35.114Z",
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
        "ratingValue": "8.9",
        "bestRating": "10"
      },
      "itemReviewed": {
        "@type": "Product",
        "name": "Casinos Acceptant Paysafecard 2025"
      },
      "datePublished": "2025-01-15"
    }
  ]
};

  return (
    <>
      <SEOHead
        title="Casinos Acceptant Paysafecard 2025 : Dépôt Prépayé Sécurisé | GigaBonus"
        description="Guide des casinos acceptant Paysafecard. Dépôts sécurisés avec codes prépayés, bonus exclusifs et retraits rapides !"
        keywords="casino paysafecard, dépôt paysafecard, code paysafecard casino, casino prépayé paysafecard, paysafecard 2025"
        canonical="https://gigabonus.win/depot/paysafecard"
        ogTitle="Casinos Acceptant Paysafecard 2025 : Dépôt Prépayé Sécurisé | GigaBonus"
        ogDescription="Guide des casinos acceptant Paysafecard. Dépôts sécurisés avec codes prépayés, bonus exclusifs et retraits rapides !"
        ogImage="https://gigabonus.win/images/methods/paysafecard.webp"
        twitterTitle="Casinos Acceptant Paysafecard 2025 : Dépôt Prépayé Sécurisé | GigaBonus"
        twitterDescription="Guide des casinos acceptant Paysafecard. Dépôts sécurisés avec codes prépayés, bonus exclusifs et retraits rapides !"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-primary dark:text-gradient">Casinos Acceptant Paysafecard</span>
              </h1>
            
            </div>
          </header>

          {/* SEO Intro Section */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground text-center">
              <p className="text-lg leading-relaxed">
                En <strong className="text-primary">2025</strong>, <strong className="text-primary">Paysafecard</strong> demeure le leader mondial des solutions de paiement prépayé pour casinos en ligne. 
                Sur <strong className="text-primary">GigaBonus.fr</strong>, découvrez notre sélection de <strong className="text-primary">casinos acceptant Paysafecard</strong> avec les meilleurs bonus et conditions de mise.
              </p>
              <p className="text-lg leading-relaxed">
                Avec <strong className="text-primary">650 000 points de vente</strong> dans le monde, Paysafecard offre un <strong className="text-primary">anonymat total</strong> et des <strong className="text-primary">dépôts instantanés</strong>. 
                Utilisez simplement votre code PIN à 16 chiffres sans partager d'informations bancaires et contrôlez parfaitement votre budget.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>100% anonyme</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>650k points de vente</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Sans carte bancaire</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Contrôle budget</span>
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
              <h2 className="text-3xl font-bold mb-4">Qu'est-ce que Paysafecard ?</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Paysafecard</strong> est le leader des vouchers prépayés pour jouer en ligne. Vous achetez un code à 16 chiffres en bureau de tabac ou en ligne, puis vous l'utilisez pour déposer anonymement sur votre casino. Simple, sûr et sans compte bancaire requis. Idéal pour protéger votre vie privée et contrôler votre budget.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Avantages de Paysafecard</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>100% anonyme</strong> : Aucune information bancaire partagée</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Contrôle du budget</strong> : Limitez vos dépenses au montant du voucher</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Pas de compte requis</strong> : Utilisez directement votre code PIN</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Disponible partout</strong> : 650 000 points de vente dans le monde</span>
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ - Paysafecard</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Où acheter Paysafecard ?</h3>
                  <p className="text-muted-foreground">En bureau de tabac, stations-service, supermarchés, ou en ligne sur le site officiel Paysafecard.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Puis-je retirer avec Paysafecard ?</h3>
                  <p className="text-muted-foreground">Non, Paysafecard ne permet que les dépôts. Pour retirer, utilisez virement, e-wallet ou crypto.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Y a-t-il des limites ?</h3>
                  <p className="text-muted-foreground">Oui, un code Paysafecard classique est limité à 50-250 €. Vous pouvez combiner plusieurs codes.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SEOEnrichedPayment
        paymentName="Paysafecard"
        description="voucher prépayé anonyme sans compte bancaire requis"
        advantages={["100% anonyme", "650k points de vente", "Sans carte bancaire", "Contrôle budget"]}
        casinoCount={paysafeCasinos.length}
      />
      <Footer />
    </>
  );
};


