'use client';

import { useRef, useEffect } from "react";
import { Link } from '@/i18n/navigation';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, Shield, Zap, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnrichedContent from "@/components/SEOEnrichedContent";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";

export default function PlayRegalPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const casino = casinos.find(c => c.name === "Play Regal")!;


  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const offers = [
    {
      id: 1,
      title: "Bonus de Bienvenue – Triple Bonus Royal",
      banner: "/images/playregal/welcome.webp",
      details: [
        "🎁 1er dépôt : 100% jusqu'à 1 000€",
        "🎁 2ᵉ dépôt : 200% jusqu'à 2 000€",
        "🎁 3ᵉ dépôt : 300% jusqu'à 3 000€ + 60 Free Spins",
        "Total possible : jusqu'à 6 000€ + 60 FS",
        "Dépôt minimum : 20€",
        "Validité : 90 jours à compter de l'inscription",
        "Wager : x30",
        "Mise max autorisée : 5€ pendant bonus actif"
      ]
    },
    {
      id: 2,
      title: "Récompenses VIP Quotidiennes – Jusqu'à 750 €",
      banner: "/images/playregal/vip.webp",
      details: [
        "Bonus exclusifs pour les VIP – valables 24h seulement",
        "Déclenchées lorsque le solde tombe à 10€ ou moins",
        "Montant calculé selon les dépôts de la veille",
        "100-199€ : 10€ (Bronze/Chrome/Argent) | 15€ (Or/Platine/Diamant)",
        "200-499€ : 20€ (Bronze/Chrome/Argent) | 30€ (Or/Platine/Diamant)",
        "500-999€ : 50€ (Bronze/Chrome/Argent) | 75€ (Or/Platine/Diamant)",
        "1000-2999€ : 100€ (Bronze/Chrome/Argent) | 150€ (Or/Platine/Diamant)",
        "3000-4999€ : 300€ (Bronze/Chrome/Argent) | 450€ (Or/Platine/Diamant)",
        "5000€+ : 500€ (Bronze/Chrome/Argent) | 750€ (Or/Platine/Diamant)",
        "Expiration : chaque récompense est valide 24h"
      ]
    },
    {
      id: 3,
      title: "Roue des Bonus Hebdomadaire – Free Spins & Cash",
      banner: "/images/playregal/wheel.webp",
      details: [
        "Tournez la roue chaque semaine et recevez un bonus aléatoire",
        "1 tour de roue = 1 bonus crédité sur votre prochain dépôt",
        "Types possibles : pourcentage de dépôt, free spins, free chips",
        "Bonus mystère pouvant atteindre 500€",
        "Valable 7 jours après attribution",
        "Accessible dès le niveau VIP Bronze",
        "Les VIP premium ont des récompenses majorées",
        "Ajoutez une touche de hasard royal à votre semaine"
      ]
    },
    {
      id: 4,
      title: "Cashback Quotidien Royal – Jusqu'à 100 €",
      banner: "/images/playregal/cashback.webp",
      details: [
        "Recevez chaque jour un cashback gratuit (jusqu'à 100€)",
        "Montant basé sur votre statut VIP et historique de jeu",
        "Crédit automatique une fois par jour",
        "Aucune condition de mise requise",
        "Argent réel utilisable immédiatement",
        "Plus vous jouez, plus le cashback augmente",
        "Les VIP Diamant reçoivent les montants maximum",
        "Le cashback le plus généreux du marché"
      ]
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Product",
          "name": "Play Regal Casino - Bonus 300% jusqu'à 6000€ + 60 FS",
          "description": "Bonus royal progressif 300% jusqu'à 6000€ + 60 Free Spins sur Play Regal Casino - VIP quotidien jusqu'à 750€ - Cashback 100€ sans wager - Roue bonus - Wager x30",
          "image": "https://gigabonus.win/images/playregal.webp",
          "brand": {
            "@type": "Brand",
            "name": "Play Regal Casino"
          }
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "9.2",
          "bestRating": "10",
          "worstRating": "1"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior",
          "description": "Expert casino avec 15 ans d'expérience et plus de 500 casinos testés"
        },
        "reviewBody": "Play Regal Casino offre un bonus royal progressif jusqu'à 6000€ + 60 FS avec un wager favorable de x30. Programme VIP exceptionnel avec cashback quotidien jusqu'à 100€.",
        "datePublished": "2026-01-15",
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus"
        }
      },
      {
        "@type": "Article",
        "headline": "Avis Play Regal Casino 2026 : Bonus 300% jusqu'à 6000€ + 60 FS - Notre Test Complet",
        "description": "Notre avis complet sur Play Regal Casino 2026 : bonus 300% jusqu'à 6000€ + 60 FS, VIP quotidien 750€, cashback 100€, roue bonus, retraits 24-48h.",
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin"
        },
        "datePublished": "2026-01-15",
        "dateModified": "2026-01-20",
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
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quel est le bonus maximum sur Play Regal ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le bonus maximum sur Play Regal est de 6000€ + 60 FS répartis sur 3 dépôts : 1000€ (1er), 2000€ (2ème), et 3000€ + 60 FS (3ème)."
            }
          },
          {
            "@type": "Question",
            "name": "Le cashback Play Regal a-t-il un wager ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non, le cashback quotidien jusqu'à 100€ est sans conditions de mise et crédité en argent réel utilisable immédiatement."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Avis Play Regal Casino 2026 : Bonus 300% jusqu'à 6000€ + 60 FS | Notre Test Complet"
        description="Notre avis complet sur Play Regal Casino 2026 : bonus 300% jusqu'à 6000€ + 60 FS, VIP quotidien 750€, cashback 100€, roue bonus, retraits 24-48h. Test détaillé !"
        keywords="play regal casino, avis play regal, bonus play regal, play regal casino avis, bonus 300%, vip quotidien, cashback royal"
        canonical="https://gigabonus.win/playregal"
        ogTitle="Avis Play Regal Casino 2026 : Bonus 300% jusqu'à 6000€ + 60 FS"
        ogDescription="Notre avis complet sur Play Regal Casino : bonus royal progressif, programme VIP exceptionnel, cashback quotidien."
        ogImage="https://gigabonus.win/images/playregal.webp"
        twitterTitle="Avis Play Regal Casino 2026 : Bonus 300% jusqu'à 6000€ + 60 FS"
        twitterDescription="Notre avis complet sur Play Regal Casino : bonus royal progressif, programme VIP exceptionnel."
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section avec Video */}
          <section className="glass-card rounded-3xl overflow-hidden mb-12">
            <div className="relative h-80 overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover opacity-70"
                loop
                muted
                playsInline
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <source src={casino.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center flex flex-col items-center -mt-8">
                  <img
                    src={casino.logo}
                    alt={casino.name}
                    className="w-64 h-64 object-contain drop-shadow-2xl"
                  />
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                    Play Regal
                  </p>
                  <Badge className="bg-primary text-white font-bold text-2xl px-6 py-3 animate-glow mt-2">
                    +{casino.bonusPercent}% BONUS
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              {/* H1 SEO Optimisé */}
              <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                Avis Play Regal Casino 2026 : Bonus 300% jusqu'à 6000€ + 60 FS - Notre Test Complet
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de Play Regal Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">Play Regal Casino</strong> vous accueille dans un univers royal où luxe et générosité règnent. 
                    Le <strong className="text-primary">bonus de bienvenue progressif exceptionnel de 300% jusqu'à 6000€ + 60 Free Spins</strong> 
                    réparti sur 3 dépôts (100%, 200%, 300%) est l'un des plus généreux du marché français. Cette structure progressive incite les joueurs 
                    à effectuer leurs trois premiers dépôts pour maximiser leur capital de jeu. Le <strong className="text-primary">wager équitable de x30</strong>, 
                    plus bas que la moyenne du marché, et la <strong className="text-primary">validité de 90 jours</strong> offrent tout le temps nécessaire 
                    pour compléter les conditions.
                  </p>
                  <p>
                    Le casino se distingue par son <strong className="text-primary">programme VIP royal à 6 niveaux</strong> (Bronze, Chrome, Argent, Or, Platine, Diamant) 
                    offrant des avantages croissants exceptionnels. Les <strong className="text-primary">récompenses VIP quotidiennes jusqu'à 750€</strong> sont automatiquement 
                    déclenchées lorsque votre solde tombe à 10€ ou moins, calculées selon vos dépôts de la veille. Plus votre niveau VIP est élevé, plus les récompenses 
                    sont généreuses : un VIP Diamant qui a déposé 5000€+ recevra 750€ automatiquement ! Cette mécanique intelligente récompense la fidélité et offre une 
                    <strong className="text-primary"> seconde chance quotidienne</strong> aux joueurs.
                  </p>
                  <p>
                    La <strong className="text-primary">roue de la fortune hebdomadaire</strong> ajoute une dimension ludique unique à l'expérience Play Regal. 
                    Chaque semaine, les joueurs actifs peuvent tourner la roue magique pour gagner des free spins, des bonus de dépôt, des free chips ou des bonus mystère 
                    pouvant atteindre 500€. Les gains sont valables 7 jours et s'ajoutent à votre prochain dépôt. Le 
                    <strong className="text-primary"> cashback quotidien royal jusqu'à 100€</strong> sans conditions de mise vient compléter ce programme de fidélité 
                    exceptionnel. L'argent est crédité en argent réel utilisable immédiatement !
                  </p>
                  <p>
                    La plateforme <strong className="text-primary">élégante avec interface royale</strong> offre une navigation intuitive sur tous les appareils 
                    (PC, tablettes, smartphones). Play Regal garantit des <strong className="text-primary">retraits rapides en 24-48h</strong> après validation KYC simplifiée. 
                    Les transactions sont <strong className="text-primary">ultra-sécurisées</strong> par cryptage SSL 256-bit et licence Curaçao. 
                    Le casino accepte de nombreuses méthodes : cartes bancaires, virements, e-wallets, Cashlib, Neosurf et 
                    <strong className="text-primary"> cryptomonnaies</strong> (Bitcoin, Ethereum) pour des retraits quasi-instantanés.
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque royale</strong> de Play Regal compte plus de <strong className="text-primary">2000 jeux</strong> 
                    soigneusement sélectionnés des meilleurs éditeurs : Pragmatic Play (Sweet Bonanza, Gates of Olympus, Sugar Rush), NetEnt (Starburst, Gonzo's Quest), 
                    Play'n GO (Book of Dead, Reactoonz, Rise of Olympus), Yggdrasil, Red Tiger, Quickspin. Les <strong className="text-primary">machines à sous</strong> 
                    dominent avec des centaines de titres incluant des slots à jackpot progressif monumentaux. Le <strong className="text-primary">casino live premium</strong> 
                    propose des tables VIP avec croupiers Evolution Gaming professionnels : roulette (classique, immersive, lightning), 
                    <strong className="text-primary"> blackjack</strong> (Party, Infinite, VIP), <strong className="text-primary">baccarat</strong> (Punto Banco, Speed), 
                    poker et game shows spectaculaires (Crazy Time, Monopoly Live). C'est le casino parfait pour ceux qui recherchent un 
                    <strong className="text-primary"> traitement royal</strong> avec des récompenses quotidiennes généreuses !
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-8 py-6 mt-6"
                >
                  <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-6 h-6 mr-2" />
                    Jouer Maintenant
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                <div className="text-center">
                  <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Wager x{casino.wager}</p>
                  <p className="text-xs text-muted-foreground">Équitable</p>
                </div>
                <div className="text-center">
                  <CreditCard className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Dépôt {casino.minDeposit}</p>
                  <p className="text-xs text-muted-foreground">Accessible</p>
                </div>
                <div className="text-center">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Retraits 24-48h</p>
                  <p className="text-xs text-muted-foreground">Rapide</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Sécurisé</p>
                  <p className="text-xs text-muted-foreground">Licence SSL</p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Méthodes de Paiement Acceptées</h3>
                <div className="flex flex-wrap gap-4">
                  {casino.methods.map((method) => {
                    const methodLogos: Record<string, string> = {
                      "CB": "/images/methods/carte-bancaire.webp",
                      "paysafe": "/images/methods/paysafecard.webp",
                      "crypto": "/images/methods/crypto.webp",
                      "skrill": "/images/methods/skrill.webp",
                      "neteler": "/images/methods/neteller.webp",
                      "jetonbank": "/images/methods/jetonbank.webp",
                      "myfinity": "/images/methods/mifinity.webp",
                      "cashlib": "/images/methods/cashlib.webp",
                      "neosurf": "/images/methods/neosurf.webp",
                      "virement": "/images/methods/virement-bancaire.webp"
                    };
                    
                    const methodNames: Record<string, string> = {
                      "CB": "Carte Bancaire",
                      "paysafe": "PaysafeCard",
                      "crypto": "Cryptomonnaies",
                      "skrill": "Skrill",
                      "neteler": "Neteller",
                      "jetonbank": "JetonBank",
                      "myfinity": "MiFinity",
                      "cashlib": "Cashlib",
                      "neosurf": "Neosurf",
                      "virement": "Virement Bancaire"
                    };

                    return (
                      <img 
                        key={method}
                        src={methodLogos[method]} 
                        alt={methodNames[method]}
                        className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Offres et Promotions */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-center text-foreground mb-8">
              🎁 Détail des Offres et Promotions Play Regal
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {offers.map((offer) => (
                <div key={offer.id} className="glass-card rounded-2xl overflow-hidden flex flex-col">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 h-40 flex items-center justify-center">
                    <img 
                      src={offer.banner} 
                      alt={offer.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-4 text-center">{offer.title}</h3>
                    <div className="mb-6 flex-1">
                      <p className="font-semibold text-foreground mb-3 text-center">Détails complets</p>
                      <ul className="space-y-2 text-sm">
                        {offer.details.map((detail, index) => (
                          <li key={index} className="text-foreground flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 text-white font-bold"
                      >
                        <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Jouer
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comment S'inscrire */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 Comment S'inscrire sur Play Regal Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L'<strong className="text-primary">inscription sur Play Regal</strong> est simple et royale. 
                Voici notre <strong className="text-primary">guide complet</strong> pour créer votre compte et profiter du pack de 6000€ + 60 FS.
              </p>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 1 : Créer votre compte royal</h3>
                <p className="leading-relaxed">
                  Cliquez sur <strong className="text-primary">"S'inscrire"</strong> sur la page d'accueil. Remplissez le formulaire avec vos informations : 
                  nom, prénom, date de naissance, email et mot de passe sécurisé. L'inscription complète prend 
                  <strong className="text-primary"> moins de 3 minutes</strong>. Toutes les données sont protégées par cryptage SSL 256-bit.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 2 : Vérifier votre email</h3>
                <p className="leading-relaxed">
                  Play Regal vous envoie un <strong className="text-primary">email de confirmation</strong>. Cliquez sur le lien de vérification 
                  pour <strong className="text-primary">activer votre compte VIP</strong>. Cette étape sécurise votre compte et active les notifications 
                  pour les bonus quotidiens et la roue de la fortune. Si l'email tarde, vérifiez vos spams.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 3 : Effectuer votre premier dépôt</h3>
                <p className="leading-relaxed">
                  Accédez à la section <strong className="text-primary">"Dépôt"</strong>. Choisissez parmi cartes bancaires, virements, e-wallets, 
                  Cashlib, Neosurf, JetonBank ou cryptomonnaies. Le <strong className="text-primary">dépôt minimum est de 20€</strong>. 
                  Les dépôts sont <strong className="text-primary">instantanés</strong> et sécurisés.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Profiter du bonus progressif</h3>
                <p className="leading-relaxed">
                  Le bonus de <strong className="text-primary">100% sur le 1er dépôt</strong> est automatiquement crédité. Vous avez ensuite 
                  200% sur le 2ème et 300% + 60 FS sur le 3ème dépôt. Le <strong className="text-primary">wager de x30</strong> se complète en 
                  90 jours maximum. N'oubliez pas de tourner la <strong className="text-primary">roue de la fortune hebdomadaire</strong> 
                  pour des bonus supplémentaires !
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">💡 Conseils de sécurité royaux</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Créez un <strong className="text-primary">mot de passe complexe</strong> unique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ne partagez jamais vos identifiants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Vérifiez que vous êtes sur le <strong className="text-primary">site officiel</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Activez l'authentification à deux facteurs si disponible</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Méthodes de Retrait */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💳 Méthodes de Retrait et Délais sur Play Regal</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Play Regal propose <strong className="text-primary">plusieurs méthodes de retrait rapides</strong> dignes d'un traitement royal. 
                Voici un guide complet des options disponibles et leurs délais.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-primary">Méthode</th>
                      <th className="text-left p-4 text-primary">Délai</th>
                      <th className="text-left p-4 text-primary">Minimum</th>
                      <th className="text-left p-4 text-primary">Maximum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="p-4">Cryptomonnaies</td>
                      <td className="p-4"><strong className="text-primary">Instantané - 24h</strong></td>
                      <td className="p-4">20€</td>
                      <td className="p-4">10 000€/jour</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4">E-wallets (JetonBank)</td>
                      <td className="p-4"><strong className="text-primary">24-48h</strong></td>
                      <td className="p-4">20€</td>
                      <td className="p-4">5 000€/jour</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4">Carte bancaire</td>
                      <td className="p-4">3-5 jours ouvrables</td>
                      <td className="p-4">20€</td>
                      <td className="p-4">5 000€/jour</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4">Virement bancaire</td>
                      <td className="p-4">3-7 jours ouvrables</td>
                      <td className="p-4">100€</td>
                      <td className="p-4">10 000€/jour</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Délais de traitement détaillés</h3>
                <p className="leading-relaxed mb-4">
                  Les <strong className="text-primary">cryptomonnaies</strong> offrent les délais les plus courts : souvent traités en moins de 24h. 
                  Les <strong className="text-primary">e-wallets</strong> comme JetonBank garantissent un traitement en 24-48h maximum. 
                  Les <strong className="text-primary">cartes bancaires</strong> nécessitent 3 à 5 jours ouvrables. 
                  Les <strong className="text-primary">virements bancaires</strong> prennent 3 à 7 jours mais permettent des montants plus élevés.
                </p>
                <p className="leading-relaxed">
                  Play Regal s'engage à traiter tous les retraits <strong className="text-primary">dans les 24-48h</strong> suivant la demande. 
                  Le délai total dépend de la méthode choisie et de votre banque. Les membres VIP bénéficient d'un traitement prioritaire royal.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Limites et frais</h3>
                <p className="leading-relaxed mb-4">
                  Les <strong className="text-primary">limites standard</strong> sont de <strong className="text-primary">5 000€ par jour</strong> 
                  et <strong className="text-primary">20 000€ par mois</strong>. Les membres VIP Diamant profitent de limites royales augmentées jusqu'à 
                  <strong className="text-primary"> 10 000€ par jour</strong>.
                </p>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">retrait minimum</strong> est de 20€ (100€ pour virements). 
                  <strong className="text-primary"> Aucun frais</strong> appliqué par Play Regal. Votre prestataire peut facturer ses propres frais.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">💡 Conseils pour retirer rapidement</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Vérifiez votre compte dès l'inscription</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Privilégiez les <strong className="text-primary">cryptomonnaies</strong> pour des retraits royaux ultra-rapides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Complétez le wagering avant de demander un retrait</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Les VIP premium bénéficient de retraits prioritaires</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section Jeux Disponibles */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎮 Catalogue de Jeux Play Regal</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Machines à Sous Royales</h3>
                <p className="leading-relaxed">
                  Play Regal propose plus de <strong className="text-primary">2000 machines à sous</strong> royales. 
                  Retrouvez les hits comme <strong className="text-primary">Sweet Bonanza, Gates of Olympus, Book of Dead</strong> et les dernières 
                  sorties des éditeurs <strong className="text-primary">Pragmatic Play, NetEnt, Play'n GO, Yggdrasil</strong>. 
                  Les jackpots progressifs offrent des gains monumentaux.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Casino Live Premium</h3>
                <p className="leading-relaxed">
                  Profitez d'une expérience premium avec le <strong className="text-primary">casino live Evolution Gaming</strong> : 
                  roulette (classique, immersive, lightning), blackjack (Party, Infinite, VIP), baccarat avec croupiers professionnels. 
                  Les <strong className="text-primary">tables VIP</strong> offrent un traitement royal avec des limites élevées.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">❓ FAQ - Questions Fréquentes</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Comment fonctionne le bonus progressif ?</h3>
                <p className="text-foreground leading-relaxed">
                  Le bonus est réparti sur <strong className="text-primary">3 dépôts</strong> : 100% sur le 1er (jusqu'à 1000€), 
                  200% sur le 2ème (jusqu'à 2000€), et 300% + 60 FS sur le 3ème (jusqu'à 3000€). 
                  Total possible : <strong className="text-primary">6000€ + 60 Free Spins</strong> !
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Comment fonctionne la roue de la fortune ?</h3>
                <p className="text-foreground leading-relaxed">
                  Chaque semaine, tournez la roue pour gagner un <strong className="text-primary">bonus aléatoire</strong> : 
                  free spins, bonus de dépôt, free chips ou bonus mystère jusqu'à 500€. 
                  Le bonus est valable <strong className="text-primary">7 jours</strong>.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Les récompenses VIP sont-elles automatiques ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui ! Quand votre solde tombe sous 10€, vous recevez automatiquement un bonus calculé selon vos dépôts de la veille. 
                  Les VIP Diamant peuvent recevoir jusqu'à <strong className="text-primary">750€ quotidiennement</strong> !
                </p>
              </div>
            </div>
          </section>

          {/* Sections SEO Supplémentaires */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎯 Stratégies pour Maximiser Vos Gains sur Play Regal</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Pour optimiser vos chances sur <strong className="text-primary">Play Regal Casino</strong>, notre équipe recommande 
                de <strong className="text-primary">profiter des 3 dépôts bonus</strong> pour maximiser votre capital royal initial.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Gestion Royale de Bankroll</h3>
                <p className="leading-relaxed">
                  La <strong className="text-primary">règle d'or royale</strong> : ne misez jamais plus de 1-2% de votre capital par tour. 
                  Avec un dépôt de 200€, limitez vos mises à 4€ maximum. Cette approche vous permet de 
                  <strong className="text-primary"> jouer plus longtemps</strong> et augmente vos chances de gains royaux.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Profiter du Programme VIP Royal</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">programme VIP de Play Regal</strong> est exceptionnel avec ses récompenses quotidiennes automatiques 
                  jusqu'à 750€. Plus vous jouez, plus vous montez dans les niveaux VIP. Les <strong className="text-primary">VIP Diamant</strong> 
                  bénéficient d'un traitement royal : cashback majoré, retraits prioritaires, gestionnaire VIP dédié.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🔐 Sécurité et Légalité de Play Regal Casino</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                <strong className="text-primary">Play Regal Casino</strong> opère avec une <strong className="text-primary">licence Curaçao reconnue</strong>, 
                garantissant équité et protection des fonds royaux. La plateforme utilise un <strong className="text-primary">cryptage SSL 256-bit</strong>, 
                la même technologie que les banques pour sécuriser les transactions.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Protection Royale des Joueurs</h3>
                <p className="leading-relaxed">
                  Play Regal prend le <strong className="text-primary">jeu responsable très au sérieux</strong>. Définissez des 
                  <strong className="text-primary"> limites de dépôt quotidiennes, hebdomadaires et mensuelles</strong> depuis votre compte. 
                  L'option d'<strong className="text-primary">auto-exclusion</strong> est disponible pour les joueurs qui souhaitent faire une pause.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Audits Indépendants et Équité</h3>
                <p className="leading-relaxed">
                  Les <strong className="text-primary">générateurs de nombres aléatoires (RNG)</strong> sont audités par des organismes indépendants. 
                  Ces audits garantissent que chaque tour, distribution de cartes ou lancer de dés est 
                  <strong className="text-primary"> totalement aléatoire et impartial</strong>.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12 bg-primary/5 border-2 border-primary/20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📋 Notre Avis Play Regal : Le Verdict de GigaBonus 2026</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed font-semibold text-primary">
                Après plusieurs mois de tests sur Play Regal Casino, notre équipe GigaBonus vous livre un avis complet et honnête sur cette plateforme royale.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">🎰 Notre Expérience Royale sur Play Regal</h3>
                <p className="leading-relaxed">
                  Notre <strong className="text-primary">avis sur Play Regal</strong> est extrêmement positif. Le casino se démarque par son 
                  <strong className="text-primary"> bonus progressif exceptionnel de 300% jusqu'à 6000€ + 60 FS</strong>. 
                  Nous avons testé les 3 dépôts et l'expérience est fluide et royale. Le wager de x30 avec 90 jours de validité est très équitable.
                </p>
                <p className="leading-relaxed mt-3">
                  Le <strong className="text-primary">programme VIP avec récompenses quotidiennes automatiques</strong> est révolutionnaire. 
                  Nous avons reçu plusieurs bonus automatiques entre 50€ et 150€ selon nos dépôts. La 
                  <strong className="text-primary"> roue de la fortune hebdomadaire</strong> ajoute une touche ludique unique.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">💰 Test des Retraits : Notre Expérience Réelle</h3>
                <p className="leading-relaxed">
                  Nous avons effectué <strong className="text-primary">plusieurs retraits pour tester la fiabilité royale</strong>. 
                  Verdict : <strong className="text-primary">tous nos retraits ont été traités en 24-48h</strong> ! 
                  Le premier retrait nécessite une vérification KYC rapide. Nous avons retiré via JetonBank et crypto sans problème.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">👑 Avis sur le Programme VIP Royal</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">programme VIP à 6 niveaux</strong> est parmi les plus généreux. 
                  Les <strong className="text-primary">récompenses quotidiennes automatiques jusqu'à 750€</strong> pour les VIP Diamant sont exceptionnelles. 
                  Le cashback quotidien sans wager est un vrai plus royal !
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💬 Avis de Nos Testeurs sur Play Regal</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-center text-foreground mb-8">
                Découvrez les retours d'expérience <strong className="text-primary">authentiques</strong> de notre équipe après plusieurs mois sur Play Regal.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    R
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Robert M. - VIP Platine</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 8 mois • Niveau VIP Platine</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">9.5/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "Le <strong className="text-primary">pack de 6000€ + 60 FS de Play Regal est royal</strong> ! 
                  J'ai profité des 3 dépôts pour maximiser mon capital. Les <strong className="text-primary">récompenses VIP quotidiennes automatiques</strong> 
                  sont géniales - j'ai reçu 450€ hier simplement parce que mon solde était bas ! La roue de la fortune m'a fait gagner 200 FS. 
                  Retraits en 36h par crypto. <strong className="text-primary">Traitement royal parfait</strong> !"
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-secondary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    S
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Sylvie L. - Amatrice de live</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 6 mois • Niveau VIP Or</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">9/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "J'adore Play Regal pour son <strong className="text-primary">casino live Evolution Gaming premium</strong> ! 
                  Les tables VIP avec croupiers professionnels sont top. J'ai touché 3200€ à la Lightning Roulette. 
                  Le <strong className="text-primary">cashback quotidien de 100€ sans wager</strong> est crédité en argent réel. 
                  Retrait rapide en 40h par JetonBank. Le wager x30 avec 90 jours est très équitable !"
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    D
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">David P. - VIP Diamant</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 10 mois • Niveau VIP Diamant</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">10/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "En tant que <strong className="text-primary">VIP Diamant</strong>, je profite du meilleur traitement royal de Play Regal. 
                  Les <strong className="text-primary">récompenses quotidiennes de 750€</strong> sont automatiques et sans wager. 
                  Mon gestionnaire VIP personnel est ultra réactif. J'ai gagné 15000€ sur les jackpots progressifs et retiré en 24h via crypto. 
                  <strong className="text-primary">Le meilleur casino VIP du marché</strong> !"
                </p>
              </div>
            </div>
          </section>

          {/* Avantages et Inconvénients */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">⚖️ Avantages et Inconvénients</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold text-green-500 mb-4">✅ Avantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Bonus progressif royal jusqu'à 6000€ + 60 FS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Récompenses VIP quotidiennes jusqu'à 750€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Roue de la fortune hebdomadaire unique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Cashback quotidien 100€ sans wager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Wager équitable x30 avec 90 jours</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-4">⚠️ Points d'Attention</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-foreground">Nécessite 3 dépôts pour le bonus complet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-foreground">Mise max 5€ pendant bonus actif</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="glass-card rounded-2xl p-12 text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Prêt pour un traitement royal sur Play Regal ?</h2>
            <p className="text-xl text-foreground mb-6">
              <strong className="text-primary">Inscrivez-vous</strong> dès maintenant et profitez du <strong className="text-primary">pack royal progressif de 300% jusqu'à 6000€ + 60 Free Spins</strong>. Découvrez les 
              <strong className="text-primary"> récompenses VIP quotidiennes jusqu'à 750€</strong> et la roue de la fortune hebdomadaire !
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-sm md:text-lg lg:text-2xl px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 w-full md:w-auto"
            >
              <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-2" />
                Recevoir le Traitement Royal
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-6">18+ | Jouez de manière responsable</p>
            <p className="text-sm text-primary font-semibold mt-2">
              Play Regal est un partenaire validé par GigaBonus, testé et vérifié par notre équipe en 2026.
            </p>
          </section>
        </div>
      </div>
      <SEOEnrichedContent
        casinoName="Play Regal"
        bonus="300% jusqu'à 6000€ + 60 FS"
        wager="30"
        minDeposit="20€"
        withdrawal="24-48h"
        rating={9.2}
        reviewsCount={2950}
        slug="playregal"
      />
      <Footer />
    </>
  );
};

