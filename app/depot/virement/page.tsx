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
import { Building2 } from "lucide-react";

export default function DepotVirementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(9);

  

  const virementCasinos = useMemo(() => {
    return casinos.filter((casino) => casino.methods.includes("virement")).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return virementCasinos.filter((casino) => {
      const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBonus = bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);
      const matchesWager =
        wagerFilter === "all" ||
        (wagerFilter === "none" && casino.wager === null) ||
        (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));

      return matchesSearch && matchesBonus && matchesWager;
    });
  }, [virementCasinos, searchTerm, bonusFilter, wagerFilter]);

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
      "headline": "Casinos Acceptant Virement Bancaire 2025 : Transfert Direct | GigaBonus",
      "description": "Découvrez les casinos acceptant virement bancaire. Dépôts sécurisés par transfert direct, bonus exclusifs !",
      "image": "https://gigabonus.win/images/methods/virement-bancaire.webp",
      "datePublished": "2025-01-15T10:00:00+01:00",
      "dateModified": "2025-11-28T00:51:35.121Z",
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
        "ratingValue": "8.5",
        "bestRating": "10"
      },
      "itemReviewed": {
        "@type": "Product",
        "name": "Casinos Acceptant Virement Bancaire 2025"
      },
      "datePublished": "2025-01-15"
    }
  ]
};

  return (
    <>
      <SEOHead
        title="Casinos Acceptant Virement Bancaire 2025 : Transfert Direct | GigaBonus"
        description="Découvrez les casinos acceptant virement bancaire. Dépôts sécurisés par transfert direct, bonus exclusifs !"
        keywords="casino virement bancaire, dépôt virement casino, transfert bancaire casino, virement casino 2025"
        canonical="https://gigabonus.win/depot/virement"
        ogTitle="Casinos Acceptant Virement Bancaire 2025 : Transfert Direct | GigaBonus"
        ogDescription="Découvrez les casinos acceptant virement bancaire. Dépôts sécurisés par transfert direct, bonus exclusifs !"
        ogImage="https://gigabonus.win/images/methods/virement-bancaire.webp"
        twitterTitle="Casinos Acceptant Virement Bancaire 2025 : Transfert Direct | GigaBonus"
        twitterDescription="Découvrez les casinos acceptant virement bancaire. Dépôts sécurisés par transfert direct, bonus exclusifs !"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-primary dark:text-gradient">Casinos Acceptant le Virement Bancaire</span>
              </h1>
            
            </div>
          </header>

          {/* SEO Intro Section */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground text-center">
              <p className="text-lg leading-relaxed">
                En <strong className="text-primary">2025</strong>, le <strong className="text-primary">virement bancaire</strong> demeure la méthode de paiement la plus sécurisée pour les gros montants sur les casinos en ligne. 
                Sur <strong className="text-primary">GigaBonus.fr</strong>, découvrez notre sélection de <strong className="text-primary">casinos acceptant les virements bancaires</strong> avec des bonus généreux et des limites de dépôt élevées.
              </p>
              <p className="text-lg leading-relaxed">
                Bénéficiez d'une <strong className="text-primary">sécurité maximale</strong> avec traçabilité complète et <strong className="text-primary">aucuns frais casino</strong>. 
                Idéal pour les <strong className="text-primary">high rollers</strong> et les joueurs recherchant la tranquillité d'esprit d'une transaction directe banque-à-banque.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Sécurité maximale</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Gros montants</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Traçabilité totale</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Sans frais casino</span>
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
              <h2 className="text-3xl font-bold mb-4">Le virement bancaire pour les casinos en ligne</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong className="text-primary">virement bancaire</strong> est la méthode de paiement la plus traditionnelle et sécurisée pour jouer en ligne. Bien que moins rapide que les e-wallets ou crypto, il reste très apprécié pour les gros dépôts et les joueurs qui préfèrent les transactions directes depuis leur banque.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En 2025, le <strong className="text-primary">virement SEPA</strong> (Single Euro Payments Area) permet des transactions rapides et peu coûteuses entre comptes bancaires européens. C'est la méthode idéale pour les joueurs high-roller qui effectuent des dépôts importants, car il n'y a généralement pas de limite maximale.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Comment effectuer un virement bancaire ?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="font-semibold text-foreground mb-3">Guide pratique étape par étape :</p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">1.</span>
                    <div>
                      <strong className="text-foreground">Demandez les coordonnées bancaires</strong>
                      <p>Sur votre casino, sélectionnez "Virement bancaire" et notez l'IBAN, le BIC et le nom du bénéficiaire fournis.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">2.</span>
                    <div>
                      <strong className="text-foreground">Accédez à votre banque en ligne</strong>
                      <p>Connectez-vous à votre espace bancaire ou utilisez votre application mobile.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">3.</span>
                    <div>
                      <strong className="text-foreground">Effectuez le virement</strong>
                      <p>Créez un nouveau virement avec les coordonnées du casino. Ajoutez obligatoirement votre identifiant joueur en référence/motif du virement.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">4.</span>
                    <div>
                      <strong className="text-foreground">Attendez la confirmation</strong>
                      <p>Le virement prend 1-3 jours ouvrables. Certains casinos créditent votre compte dès réception de la notification bancaire.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Virement SEPA vs virement international</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong className="text-primary">virement SEPA</strong> (Single Euro Payments Area) est utilisé pour les transactions entre comptes européens en euros. Il est gratuit ou peu coûteux (généralement 0-1€) et prend 1-2 jours ouvrables. La plupart des casinos européens utilisent le SEPA.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le <strong className="text-primary">virement international</strong> (SWIFT) est nécessaire pour les casinos offshore hors zone SEPA. Il coûte plus cher (15-30€) et prend 3-5 jours. Privilégiez toujours le SEPA quand c'est possible pour économiser sur les frais.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ - Virement bancaire</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Combien de temps prend un virement ?</h3>
                  <p className="text-muted-foreground">Pour les dépôts SEPA : 1 à 3 jours ouvrés. Pour les retraits : 3 à 5 jours ouvrés selon les banques. Les virements internationaux peuvent prendre jusqu'à 7 jours.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Y a-t-il des frais ?</h3>
                  <p className="text-muted-foreground">Les casinos ne facturent généralement pas de frais pour les virements SEPA. Votre banque peut appliquer des frais selon votre contrat (0-1€ en SEPA, 15-30€ en international).</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Puis-je obtenir un bonus par virement ?</h3>
                  <p className="text-muted-foreground">Oui, le virement bancaire est accepté pour tous les bonus de bienvenue et promotions, sauf mention contraire du casino.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quelle est la limite de dépôt par virement ?</h3>
                  <p className="text-muted-foreground">Le virement bancaire n'a généralement pas de limite maximale, ce qui le rend idéal pour les high-rollers. La limite minimale varie de 20€ à 100€ selon les casinos.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Dois-je fournir des documents ?</h3>
                  <p className="text-muted-foreground">Pour les dépôts, non. Pour les retraits, le casino peut demander une vérification d'identité (KYC) avec RIB pour confirmer que le compte bancaire est bien le vôtre.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SEOEnrichedPayment
        paymentName="Virement Bancaire"
        description="méthode traditionnelle sécurisée pour gros montants"
        advantages={["Sécurité maximale", "Gros montants", "Traçabilité totale", "Sans frais casino"]}
        casinoCount={virementCasinos.length}
      />
      <Footer />
    </>
  );
};


