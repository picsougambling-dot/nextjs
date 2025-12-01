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
import SEOEnrichedPayment from "@/components/SEOEnrichedPayment";
import SEOHead from "@/components/SEOHead";
import { CreditCard } from "lucide-react";

export default function DepotCartePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(9);

  

  const carteCasinos = useMemo(() => {
    return casinos.filter((casino) => casino.methods.includes("CB")).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return carteCasinos.filter((casino) => {
      const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBonus = bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);
      const matchesWager =
        wagerFilter === "all" ||
        (wagerFilter === "none" && casino.wager === null) ||
        (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));

      return matchesSearch && matchesBonus && matchesWager;
    });
  }, [carteCasinos, searchTerm, bonusFilter, wagerFilter]);

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
      "headline": "Casinos Acceptant Carte Bancaire 2025 : CB, Visa, Mastercard | GigaBonus",
      "description": "Découvrez les casinos en ligne acceptant Carte Bancaire, Visa et Mastercard. Dépôts instantanés et sécurisés, bonus exclusifs !",
      "image": "https://gigabonus.win/images/methods/carte-bancaire.webp",
      "datePublished": "2025-01-15T10:00:00+01:00",
      "dateModified": "2025-11-28T00:51:35.108Z",
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
        "ratingValue": "9.4",
        "bestRating": "10"
      },
      "itemReviewed": {
        "@type": "Product",
        "name": "Casinos Acceptant Carte Bancaire 2025"
      },
      "datePublished": "2025-01-15"
    }
  ]
};

  return (
    <>
      <SEOHead
        title="Casinos Acceptant Carte Bancaire 2025 : CB, Visa, Mastercard | GigaBonus"
        description="Découvrez les casinos en ligne acceptant Carte Bancaire, Visa et Mastercard. Dépôts instantanés et sécurisés, bonus exclusifs !"
        keywords="casino carte bancaire, dépôt CB casino, casino visa mastercard, paiement carte casino, casino CB 2025"
        canonical="https://gigabonus.win/depot/carte"
        ogTitle="Casinos Acceptant Carte Bancaire 2025 : CB, Visa, Mastercard | GigaBonus"
        ogDescription="Découvrez les casinos en ligne acceptant Carte Bancaire, Visa et Mastercard. Dépôts instantanés et sécurisés, bonus exclusifs !"
        ogImage="https://gigabonus.win/images/methods/carte-bancaire.webp"
        twitterTitle="Casinos Acceptant Carte Bancaire 2025 : CB, Visa, Mastercard | GigaBonus"
        twitterDescription="Découvrez les casinos en ligne acceptant Carte Bancaire, Visa et Mastercard. Dépôts instantanés et sécurisés, bonus exclusifs !"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-primary dark:text-gradient">Casinos Acceptant la Carte Bancaire</span>
              </h1>
            
            </div>
          </header>

          {/* SEO Intro Section */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground text-center">
              <p className="text-lg leading-relaxed">
                En <strong className="text-primary">2025</strong>, la <strong className="text-primary">carte bancaire</strong> reste le moyen de paiement le plus universel et pratique pour jouer au casino en ligne. 
                Sur <strong className="text-primary">GigaBonus.fr</strong>, découvrez notre sélection de <strong className="text-primary">casinos acceptant Visa et Mastercard</strong> avec des bonus généreux et des transactions sécurisées 3D Secure.
              </p>
              <p className="text-lg leading-relaxed">
                Profitez de <strong className="text-primary">dépôts instantanés</strong>, d'une <strong className="text-primary">sécurité maximale</strong> avec protocoles de chiffrement bancaire et protection contre la fraude. 
                Aucun compte tiers requis : utilisez directement votre carte Visa, Mastercard ou même American Express selon les casinos.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Dépôt instantané</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Sécurité 3D Secure</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Universellement accepté</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Sans compte tiers</span>
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
              <h2 className="text-3xl font-bold mb-4">Cartes bancaires : la méthode universelle pour les casinos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les <strong className="text-primary">cartes bancaires</strong> (Visa, Mastercard, CB) restent la méthode de paiement la plus utilisée sur les casinos en ligne. Simple, rapide et universelle, votre carte vous permet de déposer instantanément et de commencer à jouer en quelques secondes. Acceptée par quasiment tous les casinos en 2025.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le protocole <strong className="text-primary">3D Secure</strong> garantit la sécurité de vos transactions en ajoutant une étape de vérification via SMS ou application bancaire. Cette protection supplémentaire empêche les transactions non autorisées et sécurise vos achats en ligne.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Comment déposer par carte bancaire ?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="font-semibold text-foreground mb-3">Processus ultra-simple en 4 étapes :</p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">1.</span>
                    <div>
                      <strong className="text-foreground">Accédez à la section dépôt</strong>
                      <p>Connectez-vous à votre casino et cliquez sur "Dépôt" ou "Caisse".</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">2.</span>
                    <div>
                      <strong className="text-foreground">Sélectionnez Carte Bancaire</strong>
                      <p>Choisissez Visa, Mastercard ou CB comme méthode de paiement.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">3.</span>
                    <div>
                      <strong className="text-foreground">Entrez vos informations</strong>
                      <p>Renseignez le numéro de carte (16 chiffres), la date d'expiration et le code CVV (3 chiffres au dos). Le casino crypte immédiatement ces données.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">4.</span>
                    <div>
                      <strong className="text-foreground">Validez avec 3D Secure</strong>
                      <p>Confirmez via SMS, notification bancaire ou code depuis votre app. Vos fonds sont crédités instantanément.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Sécurité des paiements par carte bancaire</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La <strong className="text-primary">sécurité</strong> est primordiale lors des transactions par carte bancaire sur les casinos en ligne. Tous les casinos légitimes utilisent un cryptage SSL 256-bit qui protège vos données bancaires de bout en bout. Vos informations de carte sont chiffrées et ne peuvent être interceptées.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le système <strong className="text-primary">3D Secure</strong> (Verified by Visa, Mastercard SecureCode) ajoute une couche de protection en demandant une authentification supplémentaire via votre banque. Cette vérification empêche toute utilisation frauduleuse de votre carte.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ - Carte bancaire casinos</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ma banque peut-elle bloquer les paiements casino ?</h3>
                  <p className="text-muted-foreground">Certaines banques françaises bloquent les transactions vers des casinos offshore. Si c'est le cas, contactez votre banque ou utilisez un e-wallet comme Skrill, Neteller ou MiFinity.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Les cartes prépayées sont-elles acceptées ?</h3>
                  <p className="text-muted-foreground">Oui, la plupart des casinos acceptent les cartes Visa et Mastercard prépayées pour les dépôts. Pratique pour mieux gérer votre budget.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Puis-je retirer sur ma carte ?</h3>
                  <p className="text-muted-foreground">Oui, mais les délais sont plus longs (3-5 jours). Certains casinos préfèrent virer les gains directement sur votre compte bancaire pour plus de rapidité.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Y a-t-il des frais pour payer par carte ?</h3>
                  <p className="text-muted-foreground">La plupart des casinos ne facturent pas de frais pour les dépôts par carte bancaire. Vérifiez toujours les conditions avant de déposer.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Mes données bancaires sont-elles protégées ?</h3>
                  <p className="text-muted-foreground">Oui, les casinos utilisent un cryptage SSL 256-bit. Vos données ne sont jamais stockées en clair et transitent via des passerelles de paiement sécurisées (Stripe, PaySafe, etc.).</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SEOEnrichedPayment
        paymentName="Carte Bancaire"
        description="paiements universels acceptés partout avec sécurité 3D Secure"
        advantages={["Universellement acceptée", "Transactions instantanées", "Sécurité 3D Secure", "Sans compte tiers"]}
        casinoCount={carteCasinos.length}
      />
      <Footer />
    </>
  );
};

