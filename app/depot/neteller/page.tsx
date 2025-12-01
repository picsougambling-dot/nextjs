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

export default function DepotNetellerPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(9);

  

  const netellerCasinos = useMemo(() => {
    return casinos.filter((casino) => casino.methods.includes("neteler")).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return netellerCasinos.filter((casino) => {
      const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBonus = bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);
      const matchesWager =
        wagerFilter === "all" ||
        (wagerFilter === "none" && casino.wager === null) ||
        (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));

      return matchesSearch && matchesBonus && matchesWager;
    });
  }, [netellerCasinos, searchTerm, bonusFilter, wagerFilter]);

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
      "headline": "Casinos Acceptant Neteller 2025 : E-Wallet Premium | GigaBonus",
      "description": "Guide des casinos acceptant Neteller. Dépôts et retraits instantanés avec e-wallet premium, bonus exclusifs !",
      "image": "https://gigabonus.win/images/methods/neteller.webp",
      "datePublished": "2025-01-15T10:00:00+01:00",
      "dateModified": "2025-11-28T00:51:35.117Z",
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
        "ratingValue": "9.1",
        "bestRating": "10"
      },
      "itemReviewed": {
        "@type": "Product",
        "name": "Casinos Acceptant Neteller 2025"
      },
      "datePublished": "2025-01-15"
    }
  ]
};

  return (
    <>
      <SEOHead
        title="Casinos Acceptant Neteller 2025 : E-Wallet Premium | GigaBonus"
        description="Guide des casinos acceptant Neteller. Dépôts et retraits instantanés avec e-wallet premium, bonus exclusifs !"
        keywords="casino neteller, dépôt neteller, e-wallet neteller casino, neteller casino 2025, paiement neteller"
        canonical="https://gigabonus.win/depot/neteller"
        ogTitle="Casinos Acceptant Neteller 2025 : E-Wallet Premium | GigaBonus"
        ogDescription="Guide des casinos acceptant Neteller. Dépôts et retraits instantanés avec e-wallet premium, bonus exclusifs !"
        ogImage="https://gigabonus.win/images/methods/neteller.webp"
        twitterTitle="Casinos Acceptant Neteller 2025 : E-Wallet Premium | GigaBonus"
        twitterDescription="Guide des casinos acceptant Neteller. Dépôts et retraits instantanés avec e-wallet premium, bonus exclusifs !"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-primary dark:text-gradient">Casinos Acceptant Neteller</span>
              </h1>
            
            </div>
          </header>

          {/* SEO Intro Section */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground text-center">
              <p className="text-lg leading-relaxed">
                En <strong className="text-primary">2025</strong>, <strong className="text-primary">Neteller</strong> reste l'un des e-wallets les plus populaires et fiables pour les joueurs de casino en ligne. 
                Sur <strong className="text-primary">GigaBonus.fr</strong>, découvrez notre sélection de <strong className="text-primary">casinos acceptant Neteller</strong> avec des bonus attractifs et des transactions ultra-rapides.
              </p>
              <p className="text-lg leading-relaxed">
                Profitez de <strong className="text-primary">dépôts et retraits instantanés</strong>, d'une <strong className="text-primary">sécurité maximale</strong> et d'une réputation mondiale établie depuis plus de 20 ans. 
                Neteller offre également un <strong className="text-primary">programme VIP exclusif</strong> et une carte de paiement pour vos achats quotidiens.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Transactions instantanées</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Programme VIP</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Carte de paiement</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Leader mondial</span>
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
              <h2 className="text-3xl font-bold mb-4">Qu'est-ce que Neteller ?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Neteller</strong> est l'un des portefeuilles électroniques les plus anciens et fiables du marché. Très apprécié des joueurs de casino en ligne, il offre une sécurité optimale et des transactions ultra-rapides. En 2025, Neteller reste une référence pour déposer et retirer sur les meilleurs casinos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fondé en 1999 et régulé par la FCA britannique, <strong className="text-primary">Neteller</strong> a acquis une réputation solide auprès de millions d'utilisateurs dans le monde. Avec son programme VIP et ses fonctionnalités avancées, Neteller offre une expérience premium pour les joueurs réguliers.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Comment déposer avec Neteller ?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="font-semibold text-foreground mb-3">Procédure simple en 5 étapes :</p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">1.</span>
                    <div>
                      <strong className="text-foreground">Créez votre compte Neteller</strong>
                      <p>Inscription gratuite sur Neteller.com en quelques minutes. Vérification d'identité requise pour débloquer toutes les fonctionnalités.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">2.</span>
                    <div>
                      <strong className="text-foreground">Alimentez votre compte Neteller</strong>
                      <p>Rechargez par carte bancaire, virement ou depuis un autre e-wallet. Les fonds sont disponibles instantanément.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">3.</span>
                    <div>
                      <strong className="text-foreground">Choisissez Neteller au casino</strong>
                      <p>Dans la section dépôt, sélectionnez Neteller parmi les méthodes de paiement.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">4.</span>
                    <div>
                      <strong className="text-foreground">Connectez-vous à Neteller</strong>
                      <p>Vous serez redirigé vers l'interface sécurisée Neteller pour vous authentifier.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">5.</span>
                    <div>
                      <strong className="text-foreground">Confirmez le paiement</strong>
                      <p>Validez le montant et la transaction. Vos fonds arrivent instantanément sur le casino.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Programme VIP Neteller et avantages</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-primary">Neteller</strong> propose un programme de fidélité VIP qui récompense les utilisateurs actifs. Plus vous utilisez Neteller, plus vous accumulez de points qui peuvent être échangés contre des cashbacks, des frais réduits et d'autres avantages exclusifs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Les membres VIP bénéficient également de limites de transaction plus élevées, d'un support client prioritaire et de promotions exclusives. C'est un vrai atout pour les joueurs réguliers qui effectuent de nombreuses transactions.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ - Neteller casinos</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Neteller est-il sûr pour jouer en ligne ?</h3>
                  <p className="text-muted-foreground">Absolument. Neteller utilise un cryptage SSL 128-bit de niveau bancaire et est régulé par la FCA britannique. L'authentification à deux facteurs ajoute une couche de sécurité supplémentaire.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Puis-je obtenir un bonus avec Neteller ?</h3>
                  <p className="text-muted-foreground">Oui, presque tous les casinos acceptent Neteller pour les bonus de bienvenue et promotions. Certains casinos offrent même des bonus exclusifs pour les dépôts Neteller.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Y a-t-il des limites de dépôt ?</h3>
                  <p className="text-muted-foreground">Les limites varient selon les casinos, mais Neteller permet généralement des transactions élevées. Les comptes VIP Neteller ont des limites encore plus hautes.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Combien coûte Neteller ?</h3>
                  <p className="text-muted-foreground">Les dépôts sur casinos sont gratuits. Les retraits de Neteller vers votre banque peuvent avoir des frais de 1-2%. Rechargement par carte bancaire : environ 2,5%.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Puis-je avoir une carte Neteller ?</h3>
                  <p className="text-muted-foreground">Oui, Neteller propose des cartes prépayées MasterCard (virtuelles et physiques) pour dépenser directement votre solde Neteller.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SEOEnrichedPayment
        paymentName="Neteller"
        description="portefeuille électronique fiable avec 20 ans d'expérience"
        advantages={["Transactions instantanées", "Programme VIP", "Carte de paiement", "Leader mondial"]}
        casinoCount={netellerCasinos.length}
      />
      <Footer />
    </>
  );
};


