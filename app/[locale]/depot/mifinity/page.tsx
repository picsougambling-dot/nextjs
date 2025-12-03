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
import { Wallet } from "lucide-react";

export default function DepotMiFinityPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(9);

  

  const miFinityCasinos = useMemo(() => {
    return casinos.filter((casino) => casino.methods.includes("myfinity")).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return miFinityCasinos.filter((casino) => {
      const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBonus = bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);
      const matchesWager =
        wagerFilter === "all" ||
        (wagerFilter === "none" && casino.wager === null) ||
        (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));

      return matchesSearch && matchesBonus && matchesWager;
    });
  }, [miFinityCasinos, searchTerm, bonusFilter, wagerFilter]);

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
      "headline": "Casinos Acceptant MiFinity 2025 : E-Wallet Moderne | GigaBonus",
      "description": "Découvrez les casinos acceptant MiFinity. Dépôts et retraits rapides avec e-wallet moderne, bonus exclusifs !",
      "image": "https://gigabonus.win/images/methods/mifinity.webp",
      "datePublished": "2025-01-15T10:00:00+01:00",
      "dateModified": "2025-11-28T00:51:35.118Z",
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
        "name": "Casinos Acceptant MiFinity 2025"
      },
      "datePublished": "2025-01-15"
    }
  ]
};

  return (
    <>
      <SEOHead
        title="Casinos Acceptant MiFinity 2025 : E-Wallet Moderne | GigaBonus"
        description="Découvrez les casinos acceptant MiFinity. Dépôts et retraits rapides avec e-wallet moderne, bonus exclusifs !"
        keywords="casino mifinity, dépôt mifinity, e-wallet mifinity casino, mifinity casino 2025, paiement mifinity"
        canonical="https://gigabonus.win/depot/mifinity"
        ogTitle="Casinos Acceptant MiFinity 2025 : E-Wallet Moderne | GigaBonus"
        ogDescription="Découvrez les casinos acceptant MiFinity. Dépôts et retraits rapides avec e-wallet moderne, bonus exclusifs !"
        ogImage="https://gigabonus.win/images/methods/mifinity.webp"
        twitterTitle="Casinos Acceptant MiFinity 2025 : E-Wallet Moderne | GigaBonus"
        twitterDescription="Découvrez les casinos acceptant MiFinity. Dépôts et retraits rapides avec e-wallet moderne, bonus exclusifs !"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-primary dark:text-gradient">Casinos Acceptant MiFinity</span>
              </h1>
            
            </div>
          </header>

          {/* SEO Intro Section */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground text-center">
              <p className="text-lg leading-relaxed">
                En <strong className="text-primary">2025</strong>, <strong className="text-primary">MiFinity</strong> révolutionne les paiements casino avec une solution moderne et polyvalente. 
                Sur <strong className="text-primary">GigaBonus.win</strong>, découvrez notre sélection de <strong className="text-primary">casinos acceptant MiFinity</strong> offrant bonus exclusifs et transactions instantanées.
              </p>
              <p className="text-lg leading-relaxed">
                Bénéficiez d'un <strong className="text-primary">e-wallet tout-en-un</strong> avec cartes virtuelles, support crypto et <strong className="text-primary">retraits rapides</strong>. 
                Régulé par la FCA, MiFinity garantit une sécurité maximale tout en offrant des frais compétitifs pour gérer vos finances de jeu.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Transactions instantanées</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Cartes virtuelles</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Support crypto</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Régulé FCA</span>
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
              <h2 className="text-3xl font-bold mb-4">Qu'est-ce que MiFinity ?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>MiFinity</strong> est un portefeuille électronique moderne qui gagne rapidement en popularité auprès des joueurs de casino en ligne. Lancé récemment, il offre une interface intuitive, des transactions rapides et une sécurité optimale. MiFinity est particulièrement apprécié pour ses frais réduits et sa simplicité d'utilisation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Régulé par la FCA (Financial Conduct Authority), <strong className="text-primary">MiFinity</strong> combine les avantages des e-wallets traditionnels avec des fonctionnalités innovantes comme les cartes virtuelles et le support des cryptomonnaies. Cette solution de paiement tout-en-un permet aux joueurs de gérer leurs finances de jeu de manière professionnelle et sécurisée.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Comment utiliser MiFinity sur un casino ?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="font-semibold text-foreground mb-3">Guide complet en 5 étapes :</p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">1.</span>
                    <div>
                      <strong className="text-foreground">Créez votre compte MiFinity</strong>
                      <p>Rendez-vous sur le site officiel MiFinity et créez votre compte gratuitement en quelques minutes. La vérification d'identité est requise pour activer toutes les fonctionnalités.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">2.</span>
                    <div>
                      <strong className="text-foreground">Alimentez votre compte MiFinity</strong>
                      <p>Rechargez votre portefeuille par carte bancaire, virement, ou même cryptomonnaies. Les fonds sont disponibles instantanément ou en quelques heures selon la méthode.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">3.</span>
                    <div>
                      <strong className="text-foreground">Sélectionnez MiFinity au casino</strong>
                      <p>Dans la section dépôt de votre casino, choisissez MiFinity parmi les méthodes de paiement disponibles.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">4.</span>
                    <div>
                      <strong className="text-foreground">Connectez-vous et confirmez</strong>
                      <p>Vous serez redirigé vers l'interface MiFinity pour vous connecter et autoriser le paiement de manière sécurisée.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">5.</span>
                    <div>
                      <strong className="text-foreground">Validez la transaction</strong>
                      <p>Confirmez le montant et la transaction. Vos fonds sont crédités instantanément sur votre compte casino.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Pourquoi utiliser MiFinity ?</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Frais réduits</strong> : Transactions moins coûteuses que la concurrence</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Multi-devises</strong> : Gérez plusieurs devises dans un seul compte</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Carte virtuelle</strong> : Obtenez une carte MiFinity pour vos achats en ligne</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Support crypto</strong> : Possibilité d'intégrer des cryptomonnaies</span>
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ - MiFinity</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">MiFinity est-il fiable ?</h3>
                  <p className="text-muted-foreground">Oui, MiFinity est régulé et licencié par la FCA et utilise des protocoles de sécurité avancés.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comment créer un compte MiFinity ?</h3>
                  <p className="text-muted-foreground">Inscription gratuite en quelques minutes sur le site officiel MiFinity avec vérification d'identité.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Les retraits sont-ils rapides ?</h3>
                  <p className="text-muted-foreground">Oui, la plupart des casinos traitent les retraits MiFinity en 24-48h maximum.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SEOEnrichedPayment
        paymentName="MiFinity"
        description="e-wallet polyvalent avec cartes virtuelles et support crypto"
        advantages={["Transactions instantanées", "Cartes virtuelles", "Support crypto", "Régulé FCA"]}
        casinoCount={miFinityCasinos.length}
      />
      <Footer />
    </>
  );
};


