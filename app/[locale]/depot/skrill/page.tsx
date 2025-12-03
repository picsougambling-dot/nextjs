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
import { useUserCountry } from "@/hooks/useUserCountry";

export default function DepotSkrillPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(9);

  // Récupérer le pays de l'utilisateur pour filtrer les casinos
  const { countryCode: userCountry } = useUserCountry();

  const skrillCasinos = useMemo(() => {
    return casinos.filter((casino) => casino.methods.includes("skrill")).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return skrillCasinos.filter((casino) => {
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
  }, [skrillCasinos, searchTerm, bonusFilter, wagerFilter, userCountry]);

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
      "headline": "Casinos Acceptant Skrill 2025 : E-Wallet Rapide et Sécurisé | GigaBonus",
      "description": "Découvrez les casinos acceptant Skrill. Dépôts et retraits ultra-rapides avec e-wallet, bonus exclusifs !",
      "image": "https://gigabonus.win/images/methods/skrill.webp",
      "datePublished": "2025-01-15T10:00:00+01:00",
      "dateModified": "2025-11-28T00:51:35.115Z",
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
        "ratingValue": "9.2",
        "bestRating": "10"
      },
      "itemReviewed": {
        "@type": "Product",
        "name": "Casinos Acceptant Skrill 2025"
      },
      "datePublished": "2025-01-15"
    }
  ]
};

  return (
    <>
      <SEOHead
        title="Casinos Acceptant Skrill 2025 : E-Wallet Rapide et Sécurisé | GigaBonus"
        description="Découvrez les casinos acceptant Skrill. Dépôts et retraits ultra-rapides avec e-wallet, bonus exclusifs !"
        keywords="casino skrill, dépôt skrill, e-wallet skrill casino, skrill casino 2025, paiement skrill"
        canonical="https://gigabonus.win/depot/skrill"
        ogTitle="Casinos Acceptant Skrill 2025 : E-Wallet Rapide et Sécurisé | GigaBonus"
        ogDescription="Découvrez les casinos acceptant Skrill. Dépôts et retraits ultra-rapides avec e-wallet, bonus exclusifs !"
        ogImage="https://gigabonus.win/images/methods/skrill.webp"
        twitterTitle="Casinos Acceptant Skrill 2025 : E-Wallet Rapide et Sécurisé | GigaBonus"
        twitterDescription="Découvrez les casinos acceptant Skrill. Dépôts et retraits ultra-rapides avec e-wallet, bonus exclusifs !"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-primary dark:text-gradient">Casinos Acceptant Skrill</span>
              </h1>
            
            </div>
          </header>

          {/* SEO Intro Section */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground text-center">
              <p className="text-lg leading-relaxed">
                En <strong className="text-primary">2025</strong>, <strong className="text-primary">Skrill</strong> s'impose comme le leader mondial des portefeuilles électroniques pour casinos en ligne. 
                Sur <strong className="text-primary">GigaBonus.win</strong>, découvrez notre sélection de <strong className="text-primary">casinos acceptant Skrill</strong> avec des bonus exclusifs et des conditions optimales.
              </p>
              <p className="text-lg leading-relaxed">
                Bénéficiez de <strong className="text-primary">transactions instantanées</strong>, de <strong className="text-primary">frais réduits</strong> et d'une sécurité maximale régulée FCA. 
                Skrill offre également un <strong className="text-primary">programme de récompenses</strong> et une carte Mastercard pour gérer vos finances au quotidien.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Transactions instantanées</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Frais réduits</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Programme récompenses</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Carte Mastercard</span>
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
              <h2 className="text-3xl font-bold mb-4">Qu'est-ce que Skrill ?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Skrill</strong> est un portefeuille électronique très populaire dans l'univers des casinos en ligne. Il permet de déposer et retirer vos gains rapidement, sans communiquer vos informations bancaires directement au casino. Simple, rapide et sécurisé, Skrill est accepté par de nombreux sites en 2025.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Anciennement connu sous le nom de Moneybookers, <strong className="text-primary">Skrill</strong> a été fondé en 2001 et est aujourd'hui l'un des e-wallets les plus utilisés au monde. Régulé par la FCA, Skrill traite des millions de transactions chaque jour pour les joueurs de casino, paris sportifs et poker en ligne.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Mode d'emploi : Déposer avec Skrill</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="font-semibold text-foreground mb-3">Guide pratique en 5 étapes :</p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">1.</span>
                    <div>
                      <strong className="text-foreground">Ouvrez un compte Skrill</strong>
                      <p>Rendez-vous sur Skrill.com et créez votre compte gratuitement. La vérification d'identité est obligatoire (carte d'identité).</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">2.</span>
                    <div>
                      <strong className="text-foreground">Chargez votre compte Skrill</strong>
                      <p>Alimentez votre portefeuille par carte bancaire (instantané) ou virement (1-3 jours). Vous pouvez aussi recevoir des fonds d'autres utilisateurs Skrill.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">3.</span>
                    <div>
                      <strong className="text-foreground">Sélectionnez Skrill sur votre casino</strong>
                      <p>Dans la section caisse/dépôt, choisissez Skrill comme méthode de paiement.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">4.</span>
                    <div>
                      <strong className="text-foreground">Connectez-vous à Skrill</strong>
                      <p>Vous serez redirigé vers la page de connexion sécurisée Skrill. Entrez vos identifiants.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">5.</span>
                    <div>
                      <strong className="text-foreground">Validez votre dépôt</strong>
                      <p>Confirmez le montant et autorisez la transaction. Vos fonds sont crédités instantanément.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Skrill VIP et programme de fidélité</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong className="text-primary">programme VIP Skrill</strong> récompense les utilisateurs actifs avec des avantages exclusifs. Plus vous utilisez Skrill, plus vous montez dans les niveaux VIP (Bronze, Silver, Gold, Diamond, VIP), débloquant des frais réduits, des cashbacks et un support prioritaire.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Les membres VIP Diamond peuvent bénéficier de frais de transaction réduits jusqu'à 0% sur certaines opérations, un gestionnaire de compte dédié et des invitations à des événements exclusifs. C'est l'un des programmes VIP les plus généreux du marché des e-wallets.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ - Skrill sur les casinos en ligne</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Y a-t-il des frais avec Skrill ?</h3>
                  <p className="text-muted-foreground">Les dépôts sur casinos sont gratuits. Pour recharger Skrill par carte : environ 2,5%. Retrait vers votre banque : 5,50€ fixe ou 2% du montant.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Les bonus sont-ils disponibles avec Skrill ?</h3>
                  <p className="text-muted-foreground">Oui, la plupart des casinos acceptent Skrill pour activer les bonus de bienvenue et promotions régulières. Vérifiez toujours les termes du bonus.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Combien de temps prend un retrait Skrill ?</h3>
                  <p className="text-muted-foreground">Généralement entre 24 et 48 heures, c'est l'une des méthodes les plus rapides pour retirer vos gains de casino.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Skrill accepte-t-il les cryptomonnaies ?</h3>
                  <p className="text-muted-foreground">Oui, vous pouvez acheter et vendre des cryptos directement sur Skrill (Bitcoin, Ethereum, Litecoin, etc.) et les utiliser pour vos transactions casino.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quelle est la différence entre Skrill et Neteller ?</h3>
                  <p className="text-muted-foreground">Skrill et Neteller appartiennent au même groupe (Paysafe). Les deux sont similaires, mais Skrill a des frais légèrement plus bas et est plus orienté vers les cryptos.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SEOEnrichedPayment
        paymentName="Skrill"
        description="e-wallet leader mondial pour transactions instantanées et sécurisées"
        advantages={["Transactions instantanées", "Programme VIP", "Carte Mastercard", "Frais réduits"]}
        casinoCount={skrillCasinos.length}
      />
      <Footer />
    </>
  );
};


