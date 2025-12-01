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

export default function DepotCashlibPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(9);

  

  const cashlibCasinos = useMemo(() => {
    return casinos.filter((casino) => casino.methods.includes("cashlib")).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return cashlibCasinos.filter((casino) => {
      const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBonus = bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);
      const matchesWager =
        wagerFilter === "all" ||
        (wagerFilter === "none" && casino.wager === null) ||
        (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));

      return matchesSearch && matchesBonus && matchesWager;
    });
  }, [cashlibCasinos, searchTerm, bonusFilter, wagerFilter]);

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
      "headline": "Casinos Acceptant Cashlib 2025 : Dépôt par Code Prépayé | GigaBonus",
      "description": "Découvrez les casinos acceptant Cashlib. Dépôts anonymes avec codes prépayés français, bonus et retraits rapides !",
      "image": "https://gigabonus.fr/images/methods/cashlib.webp",
      "datePublished": "2025-01-15T10:00:00+01:00",
      "dateModified": "2025-11-28T00:51:35.112Z",
      "author": {
        "@type": "Person",
        "name": "Alexandre Martin"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GigaBonus",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gigabonus.fr/gigabonus-logo.webp"
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
        "ratingValue": "8.7",
        "bestRating": "10"
      },
      "itemReviewed": {
        "@type": "Product",
        "name": "Casinos Acceptant Cashlib 2025"
      },
      "datePublished": "2025-01-15"
    }
  ]
};

  return (
    <>
      <SEOHead
        title="Casinos Acceptant Cashlib 2025 : Dépôt par Code Prépayé | GigaBonus"
        description="Découvrez les casinos acceptant Cashlib. Dépôts anonymes avec codes prépayés français, bonus et retraits rapides !"
        keywords="casino cashlib, dépôt cashlib, code cashlib casino, casino prépayé cashlib, cashlib 2025"
        canonical="https://gigabonus.fr/depot/cashlib"
        ogTitle="Casinos Acceptant Cashlib 2025 : Dépôt par Code Prépayé | GigaBonus"
        ogDescription="Découvrez les casinos acceptant Cashlib. Dépôts anonymes avec codes prépayés français, bonus et retraits rapides !"
        ogImage="https://gigabonus.fr/images/methods/cashlib.webp"
        twitterTitle="Casinos Acceptant Cashlib 2025 : Dépôt par Code Prépayé | GigaBonus"
        twitterDescription="Découvrez les casinos acceptant Cashlib. Dépôts anonymes avec codes prépayés français, bonus et retraits rapides !"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-primary dark:text-gradient">Casinos Acceptant Cashlib</span>
              </h1>
            
            </div>
          </header>

          {/* SEO Intro Section */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground text-center">
              <p className="text-lg leading-relaxed">
                En <strong className="text-primary">2025</strong>, <strong className="text-primary">Cashlib</strong> reste la solution de paiement prépayé préférée des joueurs souhaitant un anonymat total. 
                Sur <strong className="text-primary">GigaBonus.fr</strong>, découvrez notre sélection de <strong className="text-primary">casinos acceptant Cashlib</strong> pour des dépôts simples avec votre code à 16 chiffres.
              </p>
              <p className="text-lg leading-relaxed">
                Achetez votre voucher en <strong className="text-primary">bureau de tabac ou en ligne</strong>, puis déposez instantanément sans carte bancaire. 
                Cashlib garantit une <strong className="text-primary">confidentialité absolue</strong> et un <strong className="text-primary">contrôle total</strong> de votre budget de jeu.
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
              <h2 className="text-3xl font-bold mb-4">Qu'est-ce que Cashlib ?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Cashlib</strong> est un voucher prépayé qui permet de déposer sur les casinos en ligne sans carte bancaire ni compte e-wallet. Vous achetez un code Cashlib en bureau de tabac ou en ligne, puis vous l'utilisez pour déposer anonymement. Idéal pour contrôler votre budget et protéger vos données personnelles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cashlib fonctionne comme un coupon que vous achetez en ligne ou dans des points de vente physiques. Chaque coupon contient un <strong className="text-primary">code unique à 16 chiffres</strong> que vous utilisez pour effectuer vos dépôts. Cette méthode est particulièrement appréciée pour sa simplicité et sa discrétion, car elle ne nécessite aucune information bancaire.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Comment utiliser Cashlib sur un casino ?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="font-semibold text-foreground mb-3">Guide étape par étape :</p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">1.</span>
                    <div>
                      <strong className="text-foreground">Achetez un coupon Cashlib</strong>
                      <p>Rendez-vous sur le site officiel Cashlib.com ou dans un point de vente agréé (bureau de tabac, supermarché). Choisissez le montant souhaité.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">2.</span>
                    <div>
                      <strong className="text-foreground">Conservez votre code</strong>
                      <p>Après l'achat, vous recevez un code à 16 chiffres. Gardez-le précieusement, il est unique et non remboursable.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">3.</span>
                    <div>
                      <strong className="text-foreground">Sélectionnez Cashlib au casino</strong>
                      <p>Dans la section dépôt de votre casino, choisissez Cashlib comme méthode de paiement.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">4.</span>
                    <div>
                      <strong className="text-foreground">Entrez votre code</strong>
                      <p>Saisissez le code à 16 chiffres et le montant. Vos fonds sont crédités instantanément.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Pourquoi choisir Cashlib ?</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Anonymat total</strong> : Aucune donnée bancaire communiquée au casino</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Contrôle du budget</strong> : Dépensez uniquement le montant du voucher</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Pas de compte requis</strong> : Utilisez directement votre code à 16 chiffres</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Disponible partout</strong> : Achat en ligne ou dans +250 000 points de vente</span>
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Sécurité et confidentialité avec Cashlib</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-primary">Cashlib</strong> offre un niveau de confidentialité inégalé pour vos transactions de casino en ligne. En utilisant un système de coupons prépayés, vous ne partagez jamais vos informations bancaires, ce qui élimine tout risque de fraude ou de piratage de vos données financières.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                De plus, Cashlib vous aide à <strong className="text-primary">contrôler votre budget de jeu</strong>. En achetant un coupon d'un montant fixe, vous ne dépensez que ce que vous avez prévu, évitant ainsi les dépenses impulsives. C'est l'outil idéal pour un jeu responsable.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ - Cashlib</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Où acheter un voucher Cashlib ?</h3>
                  <p className="text-muted-foreground">En bureau de tabac, Relay, ou en ligne sur le site officiel Cashlib via carte bancaire. Plus de 250 000 points de vente sont disponibles en France.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Puis-je retirer avec Cashlib ?</h3>
                  <p className="text-muted-foreground">Non, Cashlib ne permet que les dépôts. Pour retirer, utilisez une autre méthode (virement, e-wallet, crypto).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Les bonus sont-ils disponibles ?</h3>
                  <p className="text-muted-foreground">Oui, la plupart des casinos acceptent Cashlib pour activer les bonus de bienvenue et autres promotions.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quels sont les montants disponibles ?</h3>
                  <p className="text-muted-foreground">Les coupons Cashlib sont disponibles en montants fixes : 10€, 20€, 50€, 100€ et 250€. Vous pouvez utiliser plusieurs coupons pour des montants plus importants.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Y a-t-il des frais ?</h3>
                  <p className="text-muted-foreground">Cashlib ne facture pas de frais d'utilisation. Cependant, certains casinos peuvent appliquer de petits frais de traitement. Vérifiez toujours les conditions du casino.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SEOEnrichedPayment
        paymentName="Cashlib"
        description="voucher prépayé pour contrôler votre budget de jeu"
        advantages={["100% anonyme", "Dépôt instantané", "Sans carte bancaire", "Contrôle budget"]}
        casinoCount={cashlibCasinos.length}
      />
      <Footer />
    </>
  );
};


