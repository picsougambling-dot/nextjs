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
import { Bitcoin } from "lucide-react";

export default function DepotCryptoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(9);

  

  const cryptoCasinos = useMemo(() => {
    return casinos.filter((casino) => casino.methods.includes("crypto")).sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return cryptoCasinos.filter((casino) => {
      const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBonus = bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);
      const matchesWager =
        wagerFilter === "all" ||
        (wagerFilter === "none" && casino.wager === null) ||
        (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));

      return matchesSearch && matchesBonus && matchesWager;
    });
  }, [cryptoCasinos, searchTerm, bonusFilter, wagerFilter]);

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
      "headline": "Casinos Acceptant Crypto 2025 : Bitcoin, Ethereum | GigaBonus",
      "description": "Découvrez les casinos crypto acceptant Bitcoin, Ethereum, USDT. Transactions rapides, anonymes et sécurisées !",
      "image": "https://gigabonus.win/images/methods/crypto.webp",
      "datePublished": "2025-01-15T10:00:00+01:00",
      "dateModified": "2025-11-28T00:51:35.110Z",
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
        "ratingValue": "9.5",
        "bestRating": "10"
      },
      "itemReviewed": {
        "@type": "Product",
        "name": "Casinos Acceptant Crypto 2025"
      },
      "datePublished": "2025-01-15"
    }
  ]
};

  return (
    <>
      <SEOHead
        title="Casinos Acceptant Crypto 2025 : Bitcoin, Ethereum | GigaBonus"
        description="Découvrez les casinos crypto acceptant Bitcoin, Ethereum, USDT. Transactions rapides, anonymes et sécurisées !"
        keywords="casino bitcoin, casino crypto, casino ethereum, casino USDT, dépôt crypto casino, casino cryptomonnaie 2025"
        canonical="https://gigabonus.win/depot/crypto"
        ogTitle="Casinos Acceptant Crypto 2025 : Bitcoin, Ethereum | GigaBonus"
        ogDescription="Découvrez les casinos crypto acceptant Bitcoin, Ethereum, USDT. Transactions rapides, anonymes et sécurisées !"
        ogImage="https://gigabonus.win/images/methods/crypto.webp"
        twitterTitle="Casinos Acceptant Crypto 2025 : Bitcoin, Ethereum | GigaBonus"
        twitterDescription="Découvrez les casinos crypto acceptant Bitcoin, Ethereum, USDT. Transactions rapides, anonymes et sécurisées !"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-primary dark:text-gradient">Casinos Acceptant les Cryptomonnaies</span>
              </h1>
            </div>
          </header>

          {/* SEO Intro Section */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground text-center">
              <p className="text-lg leading-relaxed">
                En <strong className="text-primary">2025</strong>, les <strong className="text-primary">casinos acceptant les cryptomonnaies</strong> représentent la nouvelle génération du jeu en ligne. 
                Sur <strong className="text-primary">GigaBonus.win</strong>, découvrez notre sélection exclusive de plateformes acceptant <strong className="text-primary">Bitcoin (BTC)</strong>, <strong className="text-primary">Ethereum (ETH)</strong>, <strong className="text-primary">Litecoin (LTC)</strong>, <strong className="text-primary">Tether (USDT)</strong> et bien d'autres cryptomonnaies.
              </p>
              <p className="text-lg leading-relaxed">
                Profitez d'une expérience de jeu révolutionnaire avec des <strong className="text-primary">dépôts instantanés</strong>, des <strong className="text-primary">retraits ultra-rapides</strong> (souvent en moins d'une heure), et une <strong className="text-primary">confidentialité totale</strong> grâce à la technologie blockchain. 
                Comparez facilement les bonus, les conditions de mise et les méthodes de paiement pour trouver le casino crypto parfait.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Anonymat garanti</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Retraits en 1h</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Frais minimaux</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Sans KYC</span>
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
              <h2 className="text-3xl font-bold mb-4">Les cryptomonnaies sur les casinos en ligne : La révolution du paiement</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les <strong className="text-primary">cryptomonnaies</strong> (Bitcoin, Ethereum, Litecoin, USDT...) révolutionnent les casinos en ligne. Transactions anonymes, retraits ultra-rapides et frais réduits : les cryptos offrent une expérience de jeu moderne et sans contraintes. De plus en plus de casinos acceptent les cryptos en 2025.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En 2025, déposer avec des <strong className="text-primary">cryptomonnaies sur un casino</strong> est devenu la norme pour les joueurs avisés. La technologie blockchain garantit des transactions sécurisées, traçables et ultra-rapides, sans intermédiaire bancaire. Que vous utilisiez Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Tether (USDT) ou d'autres altcoins, les casinos crypto vous offrent une liberté totale.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Comment déposer des cryptos sur un casino ?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="font-semibold text-foreground mb-3">Guide complet étape par étape :</p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">1.</span>
                    <div>
                      <strong className="text-foreground">Créez un portefeuille crypto (wallet)</strong>
                      <p>Téléchargez un wallet sécurisé comme Metamask, Trust Wallet ou Ledger. Notez précieusement votre phrase de récupération (seed phrase) de 12 ou 24 mots. Sans elle, vous perdrez l'accès à vos fonds.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">2.</span>
                    <div>
                      <strong className="text-foreground">Achetez des cryptomonnaies</strong>
                      <p>Sur une plateforme d'échange (Binance, Coinbase, Kraken), achetez la crypto de votre choix avec carte bancaire ou virement. Transférez ensuite vos cryptos dans votre wallet personnel pour plus de sécurité.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">3.</span>
                    <div>
                      <strong className="text-foreground">Sélectionnez la crypto sur le casino</strong>
                      <p>Dans la section dépôt, choisissez la cryptomonnaie que vous souhaitez utiliser (Bitcoin, Ethereum, etc.). Le casino affichera une adresse de dépôt unique.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">4.</span>
                    <div>
                      <strong className="text-foreground">Envoyez vos cryptos</strong>
                      <p>Copiez l'adresse du casino, allez sur votre wallet, collez l'adresse et envoyez le montant souhaité. Vérifiez TOUJOURS l'adresse (copier-coller) et le réseau (network) utilisé.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold text-xl">5.</span>
                    <div>
                      <strong className="text-foreground">Confirmez la transaction</strong>
                      <p>La transaction apparaît généralement en quelques minutes sur le casino après les confirmations blockchain (3-6 confirmations pour Bitcoin, 12 pour Ethereum).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Les cryptomonnaies les plus populaires sur les casinos</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">🟠 Bitcoin (BTC)</h3>
                  <p>La crypto la plus connue et acceptée. Transactions sécurisées mais parfois lentes (30min-1h) et frais variables. Idéale pour les gros montants.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">⟠ Ethereum (ETH)</h3>
                  <p>Deuxième crypto mondiale. Plus rapide que Bitcoin (5-15min), utilisée aussi pour les jeux NFT et DeFi. Frais moyens (gas fees).</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Ⱡ Litecoin (LTC)</h3>
                  <p>Version "light" de Bitcoin. Très rapide (2-5min), frais minimaux. Excellente pour les joueurs réguliers.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">₮ Tether (USDT)</h3>
                  <p>Stablecoin indexé sur le dollar (1 USDT = 1 USD). Parfait pour éviter la volatilité des cryptos. Le plus utilisé sur les casinos crypto en 2025.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">🔷 Bitcoin Cash (BCH)</h3>
                  <p>Fork de Bitcoin avec frais très bas et transactions ultra-rapides. Alternative économique au BTC.</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Pourquoi choisir les cryptos pour jouer au casino ?</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-primary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-primary">🔒</span> Anonymat Total
                    </h3>
                    <p className="text-sm">Aucune donnée personnelle ou bancaire partagée. Seule votre adresse wallet est visible sur la blockchain publique.</p>
                  </div>
                  <div className="border border-primary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-primary">⚡</span> Retraits Express
                    </h3>
                    <p className="text-sm">Les retraits en crypto sont traités en quelques heures maximum, souvent instantanément. Fini les 3-5 jours d'attente des virements.</p>
                  </div>
                  <div className="border border-primary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-primary">💰</span> Frais Minimaux
                    </h3>
                    <p className="text-sm">Pas d'intermédiaire bancaire = frais réduits. Les frais blockchain sont généralement inférieurs à 1€.</p>
                  </div>
                  <div className="border border-primary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-primary">🎁</span> Bonus Exclusifs
                    </h3>
                    <p className="text-sm">De nombreux casinos offrent des bonus spéciaux crypto avec conditions plus favorables que les bonus classiques.</p>
                  </div>
                  <div className="border border-primary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-primary">🌍</span> Sans Frontières
                    </h3>
                    <p className="text-sm">Les cryptos fonctionnent partout dans le monde, aucune restriction géographique ou limite bancaire.</p>
                  </div>
                  <div className="border border-primary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-primary">🛡️</span> Sécurité Blockchain
                    </h3>
                    <p className="text-sm">Transactions cryptographiquement sécurisées et vérifiables. Impossible de falsifier une transaction blockchain.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Sécurité et bonnes pratiques avec les cryptos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pour jouer en <strong className="text-primary">toute sécurité avec des cryptomonnaies</strong>, suivez ces recommandations essentielles :
              </p>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">Vérifiez TOUJOURS l'adresse de dépôt</strong>
                    <p className="text-sm">Une erreur dans l'adresse = perte irréversible de vos fonds. Utilisez le copier-coller et vérifiez les premiers et derniers caractères.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">Utilisez le bon réseau (network)</strong>
                    <p className="text-sm">USDT existe sur plusieurs blockchains (ERC-20, TRC-20, BEP-20). Envoyez toujours sur le bon réseau indiqué par le casino.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">Conservez votre seed phrase en sécurité</strong>
                    <p className="text-sm">Notez votre phrase de récupération sur papier, jamais sur ordinateur. Ne la partagez JAMAIS avec personne.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">Commencez par un petit montant test</strong>
                    <p className="text-sm">Pour votre premier dépôt crypto, envoyez un petit montant pour vous assurer que tout fonctionne.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">Préférez un wallet personnel aux exchanges</strong>
                    <p className="text-sm">"Not your keys, not your crypto". Un wallet non-custodial vous donne le contrôle total de vos fonds.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ - Cryptomonnaies casinos</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quelles cryptos sont acceptées sur les casinos ?</h3>
                  <p className="text-muted-foreground">Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Bitcoin Cash (BCH), Tether (USDT), Ripple (XRP), Dogecoin (DOGE) et de nombreuses autres altcoins selon les casinos.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Dois-je vérifier mon identité (KYC) ?</h3>
                  <p className="text-muted-foreground">La plupart des casinos crypto ne demandent pas de KYC pour les dépôts et retraits standards. Certains peuvent demander une vérification pour les gros montants (+5000€) ou en cas d'activité suspecte.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Les retraits crypto sont-ils vraiment rapides ?</h3>
                  <p className="text-muted-foreground">Oui, avec les cryptos, les retraits sont souvent traités en quelques heures, parfois instantanément. Une fois la transaction blockchain confirmée (3-12 confirmations), vos fonds arrivent sur votre wallet.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Y a-t-il des frais pour déposer en crypto ?</h3>
                  <p className="text-muted-foreground">Les casinos ne facturent généralement aucun frais de dépôt crypto. Seuls les frais de réseau blockchain (gas fees) s'appliquent, payés lors de l'envoi depuis votre wallet.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Les bonus sont-ils disponibles avec les cryptos ?</h3>
                  <p className="text-muted-foreground">Oui, la plupart des casinos crypto offrent les mêmes bonus que pour les dépôts classiques, et même parfois des bonus exclusifs crypto avec des conditions plus avantageuses.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Que faire si j'envoie sur la mauvaise adresse ?</h3>
                  <p className="text-muted-foreground">Les transactions blockchain sont irréversibles. Vérifiez TOUJOURS l'adresse avant d'envoyer. Si vous faites une erreur, vos fonds sont perdus définitivement.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Puis-je jouer directement en crypto ?</h3>
                  <p className="text-muted-foreground">Certains casinos crypto permettent de jouer directement en BTC, ETH ou USDT sans conversion. D'autres convertissent automatiquement en euros ou dollars pour jouer.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Les cryptos sont-elles légales pour jouer au casino ?</h3>
                  <p className="text-muted-foreground">Oui, les cryptomonnaies sont légales dans la plupart des pays. Elles sont simplement un moyen de paiement comme un autre. Vérifiez la législation de votre pays concernant les jeux d'argent en ligne.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SEOEnrichedPayment
        paymentName="Crypto-monnaies"
        description="transactions anonymes et ultra-rapides avec Bitcoin, Ethereum et autres cryptos"
        advantages={["Anonymat total", "Retraits en 1h", "Frais minimaux", "Sans KYC"]}
        casinoCount={cryptoCasinos.length}
      />
      <Footer />
    </>
  );
};


