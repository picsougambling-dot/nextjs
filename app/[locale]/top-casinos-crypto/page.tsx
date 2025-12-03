'use client';

import { useState, useMemo, useEffect } from "react";
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
import { Bitcoin, Shield, Zap, Lock } from "lucide-react";

export default function TopCasinosCryptoPage() {
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [bonusFilter, setBonusFilter] = useState("all");
  const [wagerFilter, setWagerFilter] = useState("all");
  const [displayedCount, setDisplayedCount] = useState(9);


  // Filter out Magical Spin and show all other casinos
  const allCasinos = useMemo(() => {
    return casinos.filter((casino) => casino.name !== "Magical Spin").sort((a, b) => a.rank - b.rank);
  }, []);

  const filteredCasinos = useMemo(() => {
    return allCasinos.filter((casino) => {
      const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBonus = bonusFilter === "all" || casino.bonusPercent >= parseInt(bonusFilter);
      const matchesWager =
        wagerFilter === "all" ||
        (wagerFilter === "none" && casino.wager === null) ||
        (wagerFilter !== "none" && casino.wager === parseInt(wagerFilter));

      return matchesSearch && matchesBonus && matchesWager;
    });
  }, [allCasinos, searchTerm, bonusFilter, wagerFilter]);

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
        "headline": "Top Casinos Crypto 2025 : Bitcoin, Ethereum & Cryptomonnaies",
        "description": "Découvrez le top des casinos crypto acceptant Bitcoin, Ethereum, USDT. Retraits instantanés, anonymat total, bonus exclusifs !",
        "image": "https://gigabonus.win/images/methods/crypto.webp",
        "datePublished": "2025-01-15T10:00:00+01:00",
        "dateModified": new Date().toISOString(),
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
          "name": "Casinos Crypto",
          "description": "Casinos en ligne acceptant les cryptomonnaies"
        },
        "reviewBody": "Les casinos crypto offrent des avantages uniques : retraits instantanés, anonymat total, et transactions sécurisées grâce à la blockchain.",
        "datePublished": "2025-01-15"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Top Casinos Crypto 2025 : Bitcoin, Ethereum & Cryptomonnaies | GigaBonus"
        description="Découvrez le top des casinos crypto acceptant Bitcoin, Ethereum, USDT. Retraits instantanés, anonymat total, bonus exclusifs et transactions sécurisées !"
        keywords="casinos crypto, casino bitcoin, casino ethereum, casino USDT, casinos cryptomonnaies, retraits crypto instantanés, casino anonyme crypto 2025"
        canonical="https://gigabonus.win/top-casinos-crypto"
        ogTitle="Top Casinos Crypto 2025 : Bitcoin, Ethereum & Cryptomonnaies"
        ogDescription="Découvrez le top des casinos crypto acceptant Bitcoin, Ethereum, USDT. Retraits instantanés, anonymat total !"
        ogImage="https://gigabonus.win/images/methods/crypto.webp"
        twitterTitle="Top Casinos Crypto 2025 : Bitcoin, Ethereum & Cryptomonnaies"
        twitterDescription="Découvrez le top des casinos crypto acceptant Bitcoin, Ethereum, USDT."
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16 mt-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-primary dark:text-gradient">Top Casinos Crypto 2025</span>
              </h1>
            
            </div>
          </header>

          {/* SEO Intro Section */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground text-center">
              <p className="text-lg leading-relaxed">
                En <strong className="text-primary">2025</strong>, les <strong className="text-primary">casinos crypto</strong> dominent le marché du jeu en ligne avec une offre révolutionnaire. 
                Sur <strong className="text-primary">GigaBonus.win</strong>, découvrez notre TOP 8 exclusif : <strong className="text-primary">Stake</strong>, <strong className="text-primary">Gamdom</strong>, <strong className="text-primary">Roobet</strong>, <strong className="text-primary">Rainbet</strong>, <strong className="text-primary">Betfury</strong>, <strong className="text-primary">Shuffle</strong>, <strong className="text-primary">Moonroll</strong> et <strong className="text-primary">Howl.gg</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Profitez de <strong className="text-primary">transactions instantanées</strong> en Bitcoin, Ethereum, Litecoin et USDT, de <strong className="text-primary">retraits ultra-rapides</strong> (souvent en moins de 30 minutes), et d&apos;un <strong className="text-primary">anonymat total</strong> sans vérification KYC. 
                Ces plateformes offrent également des <strong className="text-primary">bonus crypto exclusifs</strong>, des jeux provably fair et une expérience utilisateur optimisée pour les cryptomonnaies.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Anonymat total</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Retraits en 30min</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Sans KYC</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-bold">✓</span>
                  <span>Bonus crypto exclusifs</span>
                </div>
              </div>
            </div>
          </section>

          {/* Additional SEO Content */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground">
              <h2 className="text-3xl font-bold mb-4">Pourquoi choisir un casino crypto en 2025 ?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les <strong className="text-primary">casinos crypto</strong> ont révolutionné l&apos;industrie du jeu en ligne en éliminant les intermédiaires bancaires traditionnels. En 2025, jouer avec des cryptomonnaies offre des avantages considérables que les méthodes de paiement classiques ne peuvent égaler.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="border border-primary/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">⚡</span> Transactions Ultra-Rapides
                  </h3>
                  <p className="text-sm text-muted-foreground">Dépôts instantanés et retraits traités en 5-30 minutes contre 3-5 jours pour les virements bancaires. La blockchain permet des transferts 24h/24 sans délai d&apos;approbation.</p>
                </div>
                <div className="border border-primary/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">🔒</span> Anonymat Total
                  </h3>
                  <p className="text-sm text-muted-foreground">Aucune vérification KYC requise sur la plupart des casinos crypto. Jouez avec votre pseudo et votre adresse wallet, sans partager de données personnelles ou bancaires.</p>
                </div>
                <div className="border border-primary/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">💰</span> Frais Minimaux
                  </h3>
                  <p className="text-sm text-muted-foreground">Pas de frais bancaires, pas de conversion de devises. Seuls les gas fees blockchain (quelques centimes à quelques euros) sont à prévoir lors de l&apos;envoi.</p>
                </div>
                <div className="border border-primary/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">🎁</span> Bonus Crypto Exclusifs
                  </h3>
                  <p className="text-sm text-muted-foreground">Les casinos crypto offrent souvent des bonus plus généreux avec des conditions plus souples que les bonus classiques. Certains proposent même des rakeback permanents.</p>
                </div>
                <div className="border border-primary/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">🌍</span> Accessibilité Mondiale
                  </h3>
                  <p className="text-sm text-muted-foreground">Les cryptos ne connaissent pas de frontières. Jouez depuis n&apos;importe quel pays sans restriction bancaire ni blocage de paiement international.</p>
                </div>
                <div className="border border-primary/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary">🎲</span> Jeux Provably Fair
                  </h3>
                  <p className="text-sm text-muted-foreground">De nombreux casinos crypto utilisent la technologie provably fair permettant de vérifier l&apos;équité de chaque partie via la blockchain. Transparence totale garantie.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground">
              <h2 className="text-3xl font-bold mb-4">Guide complet : Comment jouer sur un casino crypto</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vous débutez avec les <strong className="text-primary">casinos en cryptomonnaies</strong> ? Suivez notre guide étape par étape pour commencer à jouer en toute sécurité.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">1.</span>
                  <div>
                    <strong className="text-foreground">Créez un portefeuille crypto (wallet)</strong>
                    <p className="text-muted-foreground">Téléchargez un wallet sécurisé comme <strong className="text-primary">Metamask</strong> (navigateur), <strong className="text-primary">Trust Wallet</strong> (mobile) ou <strong className="text-primary">Ledger</strong> (hardware wallet). Notez précieusement votre phrase de récupération de 12 ou 24 mots sur papier. Sans elle, vous perdrez l&apos;accès à vos fonds définitivement.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">2.</span>
                  <div>
                    <strong className="text-foreground">Achetez des cryptomonnaies</strong>
                    <p className="text-muted-foreground">Sur une plateforme d&apos;échange régulée (<strong className="text-primary">Binance</strong>, <strong className="text-primary">Coinbase</strong>, <strong className="text-primary">Kraken</strong>), achetez la crypto de votre choix avec carte bancaire ou virement SEPA. Pour débuter, privilégiez Bitcoin (BTC) ou USDT (stablecoin) qui sont acceptés partout.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">3.</span>
                  <div>
                    <strong className="text-foreground">Transférez vers votre wallet personnel</strong>
                    <p className="text-muted-foreground">Envoyez vos cryptos depuis l&apos;exchange vers votre wallet personnel. Cette étape garantit votre contrôle total sur vos fonds (principe &quot;Not your keys, not your crypto&quot;).</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">4.</span>
                  <div>
                    <strong className="text-foreground">Choisissez un casino crypto de confiance</strong>
                    <p className="text-muted-foreground">Utilisez notre classement GigaBonus pour sélectionner un casino fiable. Vérifiez sa réputation, ses licences et les avis de la communauté.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">5.</span>
                  <div>
                    <strong className="text-foreground">Créez votre compte casino</strong>
                    <p className="text-muted-foreground">Inscrivez-vous en quelques secondes avec un pseudo et un email. La plupart des casinos crypto ne demandent pas de KYC immédiat.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">6.</span>
                  <div>
                    <strong className="text-foreground">Déposez vos cryptos</strong>
                    <p className="text-muted-foreground">Le casino génère une adresse de dépôt unique. Copiez-la, retournez sur votre wallet, collez l&apos;adresse et envoyez le montant souhaité. <strong className="text-primary">Vérifiez TOUJOURS l&apos;adresse</strong> et le réseau (network) utilisé avant de confirmer.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">7.</span>
                  <div>
                    <strong className="text-foreground">Attendez les confirmations blockchain</strong>
                    <p className="text-muted-foreground">Votre dépôt apparaît généralement en 5-15 minutes après 3-6 confirmations réseau. Vous pouvez suivre la transaction sur un explorateur blockchain.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl">8.</span>
                  <div>
                    <strong className="text-foreground">Profitez du bonus de bienvenue</strong>
                    <p className="text-muted-foreground">Activez votre bonus crypto dès le premier dépôt. Les conditions de mise (wager) sont souvent plus avantageuses sur les casinos crypto.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground">
              <h2 className="text-3xl font-bold mb-4">Les cryptomonnaies acceptées sur les casinos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les <strong className="text-primary">casinos crypto 2025</strong> acceptent une large gamme de cryptomonnaies. Voici les plus populaires et leurs spécificités.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">🟠 Bitcoin (BTC)</h3>
                  <p className="text-muted-foreground">La crypto de référence, acceptée par 100% des casinos crypto. Transactions sécurisées mais parfois lentes (30-60min) et frais variables (1-10€ selon la congestion du réseau). Idéale pour les gros montants et le stockage de valeur.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">⟠ Ethereum (ETH)</h3>
                  <p className="text-muted-foreground">Deuxième crypto mondiale, très utilisée sur les casinos. Plus rapide que Bitcoin (5-15min), supporte les smart contracts. Les frais peuvent être élevés en période de forte activité (gas fees). Parfaite pour les transactions moyennes.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">Ⱡ Litecoin (LTC)</h3>
                  <p className="text-muted-foreground">Version &quot;light&quot; de Bitcoin. Ultra-rapide (2-5min), frais minimaux (quelques centimes). Excellente pour les joueurs réguliers qui déposent/retirent fréquemment. Très populaire sur Stake et Gamdom.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">₮ Tether (USDT) & USDC</h3>
                  <p className="text-muted-foreground">Stablecoins indexés sur le dollar (1 USDT = 1 USD). <strong className="text-primary">Parfait pour éviter la volatilité</strong> des cryptos. Le plus utilisé sur les casinos crypto en 2025. Disponible sur plusieurs réseaux : ERC-20 (Ethereum), TRC-20 (Tron), BEP-20 (BSC).</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">🔷 Bitcoin Cash (BCH)</h3>
                  <p className="text-muted-foreground">Fork de Bitcoin avec frais très bas et transactions ultra-rapides. Alternative économique au BTC pour les petits et moyens montants.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">🐕 Dogecoin (DOGE)</h3>
                  <p className="text-muted-foreground">Crypto meme devenue sérieuse. Frais quasi-nuls, transactions rapides. Très populaire sur Stake et idéale pour les micro-transactions et tips.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">💎 Ripple (XRP) & autres altcoins</h3>
                  <p className="text-muted-foreground">De nombreux casinos acceptent aussi Ripple, Cardano (ADA), Polkadot (DOT), Solana (SOL) et autres altcoins. Consultez la page de dépôt de chaque casino pour la liste complète.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-foreground">
              <h2 className="text-3xl font-bold mb-4">Sécurité : Bonnes pratiques sur les casinos crypto</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Jouer avec des <strong className="text-primary">cryptomonnaies</strong> offre une grande liberté, mais implique également une responsabilité totale. Suivez ces règles essentielles.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">Ne partagez JAMAIS votre seed phrase</strong>
                    <p className="text-sm text-muted-foreground">Votre phrase de récupération de 12-24 mots donne accès total à vos fonds. Notez-la sur papier, jamais numériquement. Aucun site légitime ne vous la demandera.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">Vérifiez TOUJOURS l&apos;adresse de dépôt</strong>
                    <p className="text-sm text-muted-foreground">Copiez-collez l&apos;adresse et vérifiez les 6 premiers et 6 derniers caractères. Les malwares peuvent remplacer l&apos;adresse dans votre presse-papier. Une erreur = perte définitive.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">Utilisez le bon réseau (network)</strong>
                    <p className="text-sm text-muted-foreground">USDT existe sur Ethereum (ERC-20), Tron (TRC-20) et BSC (BEP-20). <strong className="text-primary">Envoyez TOUJOURS sur le bon réseau</strong> indiqué par le casino, sinon vos fonds sont perdus.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">Commencez par un montant test</strong>
                    <p className="text-sm text-muted-foreground">Pour votre premier dépôt sur un nouveau casino, envoyez un petit montant (10-20€) pour vérifier que tout fonctionne correctement.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">Privilégiez un wallet personnel aux exchanges</strong>
                    <p className="text-sm text-muted-foreground">Stocker vos cryptos sur Binance ou Coinbase signifie ne pas en avoir le contrôle réel. Un wallet non-custodial vous donne la vraie propriété de vos fonds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">Activez l&apos;authentification 2FA partout</strong>
                    <p className="text-sm text-muted-foreground">Sur votre exchange, votre wallet et votre compte casino. Utilisez Google Authenticator ou Authy plutôt que les SMS.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-1">•</span>
                  <div>
                    <strong className="text-foreground">Méfiez-vous des bonus trop généreux</strong>
                    <p className="text-sm text-muted-foreground">Un bonus 500% ou 1000% cache souvent des conditions impossibles. Les meilleurs casinos crypto proposent des bonus réalistes avec wager raisonnable (20-40x).</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pure Crypto Casinos Section */}
          <section className="mb-12 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary dark:text-secondary">
              🎰 Casinos Crypto Recommandés en 2025
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Gamdom */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/gamdom.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/gamdom.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/gamdom.webp" alt="Logo du casino crypto Gamdom" width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://gamdom.com/r/picsou777" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Jouer
                  </a>
                </div>
              </article>

              {/* Stake */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/stake.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/stake.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/stake.webp" alt="Logo du casino crypto Stake" width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://stake.com/?c=PICSOU" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Jouer
                  </a>
                </div>
              </article>

              {/* Roobet */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/roobet.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/roobet.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/roobet.webp" alt="Logo du casino crypto Roobet" width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://roobet.com/?ref=j7660024" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Jouer
                  </a>
                </div>
              </article>

              {/* Rainbet */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/rainbet.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/rainbet.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/rainbet.webp" alt="Logo du casino crypto Rainbet" width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://rainbet.com/?r=picsou" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Jouer
                  </a>
                </div>
              </article>

              {/* Betfury */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/betfury.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/betfury.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/betfury.webp" alt="Logo du casino crypto Betfury" width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://betfury.com/?r=PICSOU" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Jouer
                  </a>
                </div>
              </article>

              {/* Shuffle */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/shuffle.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/shuffle.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/shuffle.webp" alt="Logo du casino crypto Shuffle" width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://shuffle.com/?r=ia2Msb2k4h" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Jouer
                  </a>
                </div>
              </article>

              {/* Moonroll */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/moonroll.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/moonroll.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/moonroll.webp" alt="Logo du casino crypto Moonroll" width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://moonroll.io/r/picsou" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Jouer
                  </a>
                </div>
              </article>

              {/* Howl.gg */}
              <article className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/images/howlgg.webp" 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/howlgg.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 p-6 h-64 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <img src="/images/howlgg.webp" alt="Logo du casino crypto Howl.gg" width={150} height={64} loading="lazy" className="h-16 w-auto object-contain mb-4" />
                  <a 
                    href="https://howl.gg/r/picsou777" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Jouer
                  </a>
                </div>
              </article>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-6xl mx-auto overflow-x-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary dark:text-secondary">
              Classement des meilleurs casinos crypto par GigaBonus.win
            </h2>
            <table className="w-full text-left">
              <caption className="sr-only">Comparatif 2025 des casinos crypto avec bonus et conditions vérifiées</caption>
              <thead>
                <tr className="border-b border-border text-center">
                  <th scope="col" className="py-3 px-4 text-center">#</th>
                  <th scope="col" className="py-3 px-4 text-center">Casino</th>
                  <th scope="col" className="py-3 px-4 text-center">Jouer</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">🥇</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://gamdom.com/r/picsou777" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/gamdom.webp" alt="Gamdom Casino Crypto" width={100} height={40} loading="lazy" className="h-10 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://gamdom.com/r/picsou777" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      Activer
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">🥈</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://stake.com/?c=PICSOU" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/stake.webp" alt="Stake Casino Crypto" width={100} height={40} loading="lazy" className="h-10 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://stake.com/?c=PICSOU" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      Activer
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">🥉</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://roobet.com/?ref=j7660024" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/roobet.webp" alt="Roobet Casino Crypto" width={100} height={40} loading="lazy" className="h-10 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://roobet.com/?ref=j7660024" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      Activer
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">4</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://rainbet.com/?r=picsou" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/rainbet.webp" alt="RainBet Casino Crypto" width={100} height={40} loading="lazy" className="h-10 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://rainbet.com/?r=picsou" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      Activer
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">5</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://betfury.com/?r=PICSOU" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/betfury.webp" alt="BetFury Casino Crypto" width={100} height={40} loading="lazy" className="h-10 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://betfury.com/?r=PICSOU" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      Activer
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">6</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://shuffle.com/?r=ia2Msb2k4h" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/shuffle.webp" alt="Shuffle Casino Crypto" width={100} height={40} loading="lazy" className="h-10 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://shuffle.com/?r=ia2Msb2k4h" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      Activer
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">7</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://moonroll.io/r/picsou" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/moonroll.webp" alt="MoonRoll Casino Crypto" width={100} height={48} loading="lazy" className="h-12 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://moonroll.io/r/picsou" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      Activer
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 text-center">
                  <td className="py-3 px-4 text-center">8</td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://howl.gg/r/picsou777" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src="/images/howlgg.webp" alt="Howl Casino Crypto" width={100} height={48} loading="lazy" className="h-12 w-auto mx-auto" />
                    </a>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="https://howl.gg/r/picsou777" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors inline-block">
                      Activer
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Selection Criteria */}
          <section className="glass-card rounded-2xl p-8 mb-12 max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-secondary">
              🔍 Comment avons-nous sélectionné ces casinos crypto&nbsp;?
            </h2>
            <div className="space-y-4 text-foreground">
              <p>
                Chez <strong className="text-primary">GigaBonus.win</strong>, nous testons chaque casino crypto listé selon des critères stricts : 
                <strong className="text-primary"> transactions instantanées</strong>, <strong className="text-primary">bonus réellement profitables</strong>, 
                <strong className="text-primary"> confidentialité utilisateur</strong> et <strong className="text-primary">plateforme sans KYC obligatoire</strong>.
              </p>
              <p>
                Que vous jouiez avec <strong className="text-primary">Bitcoin</strong>, <strong className="text-primary">Ethereum</strong>, <strong className="text-primary">USDT</strong> ou autres altcoins, 
                notre objectif est de vous présenter des sites fiables, transparents, et adaptés à un usage crypto natif. 
                Tous les sites du classement acceptent les cryptomonnaies en dépôt comme en retrait, 
                souvent sans vérification d'identité.
              </p>
              <p>
                🔐 En 2025, les joueurs recherchent des solutions rapides, anonymes et sans frais bancaires. 
                Les casinos crypto sont la réponse idéale à ces attentes, à condition de choisir les bonnes plateformes.
                C'est pourquoi nous mettons à jour ce classement chaque semaine.
              </p>
            </div>
          </section>

          {/* Additional Info - Other Casinos accepting crypto */}
          <section className="mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary dark:text-secondary">
              🎲 Autres Casinos Acceptant les Cryptomonnaies
            </h2>
            <p className="text-center text-foreground mb-8">
              En plus des casinos crypto purs, de nombreux casinos traditionnels acceptent également les cryptomonnaies. 
              Découvrez-les ci-dessous avec nos filtres avancés.
            </p>
          </section>

          {/* Filters */}
          <FilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            bonusFilter={bonusFilter}
            onBonusChange={setBonusFilter}
            wagerFilter={wagerFilter}
            onWagerChange={setWagerFilter}
          />

          {/* Results count */}
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">{filteredCasinos.length}</span> casino
              {filteredCasinos.length > 1 ? "s" : ""} trouvé{filteredCasinos.length > 1 ? "s" : ""}
            </p>
          </div>

          {/* Tabs for Card/Table view */}
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
                    Aucun casino crypto ne correspond à vos critères de recherche.
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
                    Aucun casino crypto ne correspond à vos critères de recherche.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* FAQ Section */}
          <section className="mt-16 max-w-4xl mx-auto space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ - Casinos Crypto</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quel est le meilleur casino crypto en 2025 ?</h3>
                  <p className="text-muted-foreground">Stake et Gamdom dominent le marché en 2025. Stake offre la plus grande variété de jeux et un programme VIP exceptionnel, tandis que Gamdom séduit par ses bonus généreux et son interface intuitive. Les deux acceptent Bitcoin, Ethereum, Litecoin et USDT.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Les casinos crypto sont-ils légaux ?</h3>
                  <p className="text-muted-foreground">Oui, les cryptomonnaies sont légales dans la plupart des pays. Elles sont simplement un moyen de paiement comme un autre. Cependant, vérifiez toujours la législation de votre pays concernant les jeux d&apos;argent en ligne.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Dois-je vérifier mon identité (KYC) sur un casino crypto ?</h3>
                  <p className="text-muted-foreground">La plupart des casinos crypto purs (Stake, Gamdom, Roobet) ne demandent pas de KYC pour les dépôts et retraits standards. Certains peuvent demander une vérification pour les très gros montants (+10000€) ou en cas d&apos;activité suspecte.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quelles cryptomonnaies sont acceptées ?</h3>
                  <p className="text-muted-foreground">Les casinos crypto acceptent généralement Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Bitcoin Cash (BCH), Tether (USDT), Ripple (XRP), Dogecoin (DOGE) et de nombreuses autres altcoins. Stake et Gamdom supportent plus de 20 cryptos différentes.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Les retraits crypto sont-ils vraiment rapides ?</h3>
                  <p className="text-muted-foreground">Oui, les retraits crypto sont généralement traités en quelques minutes à quelques heures maximum. Une fois la transaction blockchain confirmée (3-12 confirmations selon la crypto), vos fonds arrivent sur votre wallet. Bien plus rapide que les 3-5 jours des virements bancaires.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Y a-t-il des frais sur les dépôts crypto ?</h3>
                  <p className="text-muted-foreground">Les casinos crypto ne facturent généralement aucun frais de dépôt. Seuls les frais de réseau blockchain (gas fees) s&apos;appliquent, payés lors de l&apos;envoi depuis votre wallet. Ces frais varient de quelques centimes à quelques euros selon la crypto et le réseau utilisé.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Puis-je jouer directement en crypto ?</h3>
                  <p className="text-muted-foreground">Oui, les casinos crypto purs comme Stake, Gamdom ou Roobet permettent de jouer directement en BTC, ETH ou USDT sans conversion. Vos gains sont également payés dans la même crypto. D&apos;autres casinos convertissent automatiquement en euros ou dollars.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comment acheter des cryptos pour jouer ?</h3>
                  <p className="text-muted-foreground">Créez un compte sur une plateforme d&apos;échange (Binance, Coinbase, Kraken), achetez vos cryptos avec carte bancaire ou virement, puis transférez-les vers votre wallet personnel (Metamask, Trust Wallet). Ensuite, envoyez depuis votre wallet vers l&apos;adresse du casino.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <div className="mt-16">
            <RelatedLinks
              title="🎰 Découvrez d'autres sélections"
              links={[
              {
                title: "Casinos Sans KYC",
                description: "Jouez anonymement sans vérification d'identité",
                href: "/casinos-sans-kyc"
              },
              {
                title: "Bonus Cashback",
                description: "Récupérez une partie de vos pertes chaque semaine",
                href: "/bonus-cashback"
              },
              {
                title: "Dépôt Crypto",
                description: "Guide complet pour déposer en cryptomonnaies",
                href: "/depot/crypto"
              },
              {
                title: "Top Slots 2025",
                description: "Les meilleures machines à sous crypto de l'année",
                href: "/top-slots-2025"
              }
            ]}
            />
          </div>
        </div>
      </div>
      
      {/* SEO Enriched Guide Content */}
      <SEOEnrichedGuide
        locale={locale}
        guideName="Casinos Crypto"
        description="Les casinos crypto révolutionnent l'industrie du jeu en ligne avec des transactions rapides, anonymes et sécurisées via Bitcoin, Ethereum, et autres cryptomonnaies."
        topCasinos={[
          { name: "SpinStar", slug: "spinstar", bonus: "700% jusqu'à 10,000€", rating: 9.8 },
          { name: "HunnyPlay", slug: "hunnyplay", bonus: "200% jusqu'à 200€", rating: 9.4 },
          { name: "Kings Chance", slug: "kingschance", bonus: "150% jusqu'à 500€", rating: 9.5 },
          { name: "Lucky Treasure", slug: "luckytreasure", bonus: "200% jusqu'à 2000€", rating: 9.3 },
          { name: "SlotRush", slug: "slotrush", bonus: "100% jusqu'à 500€", rating: 9.2 }
        ]}
      />
      
      <Footer />
    </>
  );
};


