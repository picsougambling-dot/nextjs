'use client';

import { useRef, useEffect } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  CheckCircle2, 
  Shield, 
  Zap, 
  CreditCard,
  Star,
  Trophy,
  Gift,
  Clock,
  Users,
  XCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnrichedContent from "@/components/SEOEnrichedContent";
import SEOHead from "@/components/SEOHead";
import RelatedLinks from "@/components/RelatedLinks";
import { casinos } from "@/data/casinos";

export default function SpinAuraPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const casino = casinos.find(c => c.name === "SpinAura")!;


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

  const offers = [
    {
      id: 1,
      title: "Bonus de Bienvenue RECORD – 450% jusqu'à 15 000€",
      details: [
        "Dépôt minimum : 20 €",
        "Bonus colossal : 450% jusqu'à 15 000 €",
        "Conditions de mise : x40 (dépôt + bonus)",
        "Délai pour remplir le wagering : 30 jours",
        "Mise maximale pendant le bonus actif : 5 €",
        "Méthodes acceptées : CB, virements, crypto, Neosurf, Skrill, Neteller, MiFinity",
        "Support client 24/7 : support@spinaura.com, chat live"
      ]
    },
    {
      id: 2,
      title: "Programme VIP High-Roller",
      details: [
        "Niveaux VIP progressifs avec cashback croissant",
        "Bonus de rechargement exclusifs chaque semaine",
        "Limites de retrait augmentées jusqu'à 50 000€",
        "Gestionnaire de compte personnel dédié",
        "Invitations aux événements VIP exclusifs",
        "Cadeaux luxueux et récompenses spéciales",
        "Accès prioritaire au support client premium"
      ]
    }
  ];

  const withdrawalMethods = [
    { method: "Cartes Bancaires", delay: "24-48h", min: "20€", max: "10 000€" },
    { method: "Virement Bancaire", delay: "2-5 jours", min: "50€", max: "50 000€" },
    { method: "Cryptomonnaies", delay: "Instantané", min: "20€", max: "25 000€" },
    { method: "Skrill", delay: "Instantané", min: "20€", max: "10 000€" },
    { method: "Neteller", delay: "Instantané", min: "20€", max: "10 000€" },
    { method: "MiFinity", delay: "Instantané", min: "20€", max: "10 000€" },
    { method: "Neosurf", delay: "24h", min: "20€", max: "5 000€" },
  ];

  const gamesCategories = [
    {
      title: "Machines à Sous Premium",
      icon: <Trophy className="w-6 h-6" />,
      games: [
        "Gates of Olympus 1000 (Pragmatic Play)",
        "Sweet Bonanza 1000 (Pragmatic Play)",
        "Sugar Rush 1000 (Pragmatic Play)",
        "Wanted Dead or a Wild (Hacksaw Gaming)",
        "The Dog House Megaways (Pragmatic Play)"
      ]
    },
    {
      title: "Casino Live VIP",
      icon: <Users className="w-6 h-6" />,
      games: [
        "Roulette Française VIP (Evolution)",
        "Blackjack Premium Salon (Evolution)",
        "Baccarat Squeeze VIP (Evolution)",
        "Crazy Time (Evolution)",
        "Monopoly Live Big Baller (Evolution)"
      ]
    },
    {
      title: "Crash Games Populaires",
      icon: <Zap className="w-6 h-6" />,
      games: [
        "Aviator (Spribe)",
        "Spaceman (Pragmatic Play)",
        "JetX (SmartSoft Gaming)",
        "Crash X (TurboGames)",
        "Limbo Crash"
      ]
    },
    {
      title: "Jeux de Table Classiques",
      icon: <Gift className="w-6 h-6" />,
      games: [
        "Poker Texas Hold'em VIP",
        "Blackjack Premium Multihand",
        "Roulette Européenne Gold",
        "Baccarat Live Supreme",
        "Craps Premium"
      ]
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Casino",
          "name": "SpinAura Casino",
          "image": "https://gigabonus.win/images/spinaura.webp"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "9.3",
          "bestRating": "10",
          "worstRating": "1"
        },
        "reviewBody": "SpinAura établit un record avec son bonus colossal de 450% jusqu'à 15 000€. Parfait pour les High-Rollers avec programme VIP exclusif, ludothèque de 3000+ jeux premium, et retraits jusqu'à 50 000€.",
        "datePublished": "2025-01-15",
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus"
        }
      },
      {
        "@type": "Article",
        "headline": "SpinAura : Bonus RECORD 450% + 15 000€ + Programme VIP High-Roller",
        "description": "Test complet de SpinAura : bonus massif 450%, programme VIP, 3000 jeux, retraits 50k€, crypto accepté.",
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin"
        },
        "datePublished": "2025-01-15",
        "dateModified": "2025-01-20",
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
            "name": "Quel est le bonus maximum sur SpinAura ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le bonus maximum sur SpinAura est de 15 000€ avec un bonus de 450% sur votre dépôt. C'est l'un des bonus les plus généreux du marché pour les High-Rollers."
            }
          },
          {
            "@type": "Question",
            "name": "SpinAura accepte-t-il les cryptomonnaies ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, SpinAura accepte les cryptomonnaies (Bitcoin, Ethereum, USDT) pour les dépôts et retraits. Les retraits crypto sont instantanés."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="🌟 SpinAura Casino : Bonus RECORD 450% + 15 000€ | High-Rollers 2025"
        description="💰 SpinAura : Bonus MASSIF 450% jusqu'à 15 000€ | 3000+ jeux | 7 méthodes paiement | Crypto accepté | Wager x40 | Retraits 24-48h ⚡"
        keywords="spinaura casino, bonus 450%, casino high roller, bonus 15000 euros, casino crypto, 3000 jeux, wager x40, meilleur bonus 2025"
        canonical="https://gigabonus.win/spinaura"
        ogTitle="SpinAura Casino : Bonus RECORD 450% + 15 000€"
        ogDescription="💰 Bonus MASSIF 450% + 15 000€ | 3000+ jeux | Crypto ⚡"
        ogImage="https://gigabonus.win/images/spinaura.webp"
        twitterTitle="SpinAura Casino : Bonus RECORD 450% + 15 000€"
        twitterDescription="💰 Bonus MASSIF 450% + 15 000€ | 3000+ jeux | Crypto ⚡"
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
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
                    alt={`Logo SpinAura Casino`}
                    width={256}
                    height={256}
                    loading="eager"
                    className="w-64 h-64 object-contain drop-shadow-2xl"
                  />
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                    SpinAura
                  </p>
                  <Badge className="bg-primary text-white font-bold text-2xl px-6 py-3 animate-glow mt-2">
                    +{casino.bonusPercent}% BONUS RECORD
                  </Badge>
                  <div className="flex flex-wrap gap-3 justify-center mt-4">
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/50 text-lg px-4 py-2">
                      <Trophy className="mr-2 h-5 w-5" />
                      High-Roller
                    </Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/50 text-lg px-4 py-2">
                      <Star className="mr-2 h-5 w-5" />
                      Bonus jusqu'à 15 000€
                    </Badge>
                  </div>
                  <a href={casino.playUrl} target="_blank" rel="sponsored noopener noreferrer">
                    <Button size="lg" className="text-xl px-12 py-7 mt-6 shadow-2xl hover:scale-105 transition-transform">
                      Jouer Maintenant <ExternalLink className="ml-2 h-6 w-6" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                Avis SpinAura Casino 2025 : Bonus 450% jusqu'à 15 000€ - Notre Test Complet
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de SpinAura Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">SpinAura Casino</strong> établit un nouveau record en 2025 avec son 
                    <strong className="text-primary"> bonus de bienvenue colossal de 450% jusqu'à 15 000€</strong>. Cette offre 
                    extraordinaire place SpinAura au sommet des casinos en ligne les plus généreux du marché français. Avec un tel bonus, 
                    les joueurs High Rollers et amateurs de gros budgets trouvent ici le terrain de jeu idéal pour maximiser leurs chances 
                    de gains spectaculaires.
                  </p>
                  <p>
                    La plateforme SpinAura se distingue par son <strong className="text-primary">design élégant et mystique</strong> qui 
                    combine modernité et atmosphère mystérieuse. L'interface ultra-intuitive permet une navigation fluide sur tous les 
                    appareils (desktop, tablette, mobile) sans téléchargement. Le casino garantit des 
                    <strong className="text-primary"> retraits rapides sous 24-48h</strong> et dispose d'un 
                    <strong className="text-primary"> service client premium disponible 24/7</strong> en français via chat live et email.
                  </p>
                  <p>
                    La <strong className="text-primary">sécurité maximale</strong> est assurée par un cryptage SSL 256-bit militaire 
                    protégeant toutes vos données personnelles et transactions financières. SpinAura détient une licence Curaçao valide et 
                    respecte rigoureusement les standards internationaux de jeu responsable. Les joueurs peuvent déposer via 
                    <strong className="text-primary"> 7 méthodes sécurisées</strong> : cartes bancaires, virements, cryptomonnaies, Neosurf, 
                    Skrill, Neteller et MiFinity.
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque premium</strong> de SpinAura impressionne avec plus de 
                    <strong className="text-primary"> 3000 jeux</strong> des plus grands fournisseurs mondiaux : Pragmatic Play, NetEnt, 
                    Play'n GO, Evolution Gaming, Hacksaw Gaming, NoLimit City, Yggdrasil. Les <strong className="text-primary">machines à sous 
                    populaires</strong> incluent Gates of Olympus 1000, Sweet Bonanza 1000, Sugar Rush 1000, Wanted Dead or a Wild, The Dog House 
                    Megaways. Le <strong className="text-primary">casino live immersif</strong> propose des tables VIP avec croupiers professionnels 
                    pour la roulette française, le blackjack premium, le baccarat squeeze et les game shows spectaculaires.
                  </p>
                  <p>
                    SpinAura se concentre exclusivement sur les <strong className="text-primary">jeux de casino</strong> sans paris sportifs, 
                    offrant ainsi une expérience 100% dédiée aux slots, tables et jeux live. Les amateurs de crash games apprécieront 
                    <strong className="text-primary"> Aviator, Spaceman et JetX</strong> pour des sessions de jeu palpitantes et des gains 
                    potentiels immédiats. Le <strong className="text-primary">programme VIP exclusif</strong> récompense les High-Rollers avec 
                    cashback croissant, limites de retrait augmentées (jusqu'à 50 000€) et gestionnaire de compte personnel.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-8 py-6 mt-6"
                >
                  <a href={casino.playUrl} target="_blank" rel="noopener noreferrer sponsored">
                    <ExternalLink className="w-6 h-6 mr-2" />
                    Jouer Maintenant
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                <div className="text-center">
                  <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Wager x{casino.wager}</p>
                  <p className="text-xs text-muted-foreground">Standard</p>
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
                  <p className="font-semibold text-foreground">Crypto Accepté</p>
                  <p className="text-xs text-muted-foreground">BTC, ETH, USDT</p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Méthodes de Paiement Acceptées</h3>
                <div className="flex flex-wrap gap-4">
                  {casino.methods.map((method) => (
                    <img 
                      key={method}
                      src={methodLogos[method]} 
                      alt={methodNames[method]}
                      width={80}
                      height={32}
                      loading="lazy"
                      className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Offres et Promotions */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-center text-foreground mb-8">
              🎁 Détail des Offres et Promotions SpinAura
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {offers.map((offer) => (
                <div key={offer.id} className="glass-card rounded-2xl overflow-hidden flex flex-col">
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-foreground mb-6">{offer.title}</h3>
                    <div className="mb-6 flex-1">
                      <p className="font-semibold text-foreground mb-4">Détails complets :</p>
                      <ul className="space-y-3">
                        {offer.details.map((detail, index) => (
                          <li key={index} className="text-foreground flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        asChild
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white font-bold"
                      >
                        <a href={casino.playUrl} target="_blank" rel="noopener noreferrer sponsored">
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Profiter de l'Offre
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 Comment S'inscrire sur SpinAura Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L'<strong className="text-primary">inscription sur SpinAura</strong> est rapide et simple.
                Voici notre <strong className="text-primary">guide complet</strong> pour créer votre compte et profiter du bonus 450%.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Étape 1 : Créer votre compte premium</h3>
                  <p className="leading-relaxed">
                    Cliquez sur <strong className="text-primary">"S'inscrire"</strong> sur la page d'accueil. Remplissez le formulaire avec vos informations : 
                    nom, prénom, date de naissance, email et mot de passe sécurisé. L'inscription complète prend 
                    <strong className="text-primary"> moins de 2 minutes</strong>. Toutes les données sont protégées par cryptage SSL militaire.
                  </p>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Étape 2 : Vérifier votre email</h3>
                  <p className="leading-relaxed">
                    SpinAura vous envoie un <strong className="text-primary">email de confirmation</strong>. Cliquez sur le lien de vérification
                    pour <strong className="text-primary">activer votre compte premium</strong>. Cette étape sécurise votre compte et active les notifications 
                    des promotions exclusives.
                  </p>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Étape 3 : Effectuer votre premier dépôt</h3>
                  <p className="leading-relaxed">
                    Accédez à la section <strong className="text-primary">"Dépôt"</strong>. Choisissez parmi cartes bancaires, virements, cryptomonnaies, 
                    Neosurf, Skrill, Neteller ou MiFinity. Le <strong className="text-primary">dépôt minimum est de 20€</strong> pour débloquer le bonus de bienvenue. 
                    Les dépôts sont <strong className="text-primary">instantanés</strong> et ultra-sécurisés.
                  </p>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Recevoir votre bonus colossal 450%</h3>
                  <p className="leading-relaxed">
                    Le bonus de 450% jusqu'à 15 000€ est automatiquement crédité sur votre compte. 
                    Vous disposez de <strong className="text-primary">30 jours</strong> pour remplir les conditions de mise x40.
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Conseils de Sécurité</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Utilisez un mot de passe fort et unique avec majuscules, chiffres et caractères spéciaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Activez l'authentification à deux facteurs pour sécuriser votre compte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ne partagez jamais vos identifiants avec qui que ce soit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Vérifiez régulièrement l'historique de vos transactions</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Méthodes de Retrait */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💰 Méthodes de Retrait SpinAura</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 font-semibold text-primary">Méthode</th>
                    <th className="p-4 font-semibold text-primary">Délai</th>
                    <th className="p-4 font-semibold text-primary">Minimum</th>
                    <th className="p-4 font-semibold text-primary">Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {withdrawalMethods.map((method, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="p-4 font-medium text-foreground">{method.method}</td>
                      <td className="p-4 text-muted-foreground">{method.delay}</td>
                      <td className="p-4 text-muted-foreground">{method.min}</td>
                      <td className="p-4 text-muted-foreground">{method.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Délais de Traitement Détaillés</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  SpinAura traite les retraits <strong className="text-primary">rapidement et efficacement</strong>. Les cryptomonnaies 
                  (Bitcoin, Ethereum, USDT) et les portefeuilles électroniques (Skrill, Neteller, MiFinity) offrent les délais les plus rapides 
                  avec des retraits quasi-instantanés. Les cartes bancaires sont traitées sous 24-48h, tandis que les virements prennent 2-5 jours 
                  ouvrés selon votre banque.
                </p>
                <p className="text-foreground leading-relaxed">
                  Pour <strong className="text-primary">maximiser la rapidité</strong> de vos retraits, nous recommandons de compléter la 
                  vérification KYC dès votre inscription (pièce d'identité et justificatif de domicile). Les High-Rollers VIP bénéficient de 
                  <strong className="text-primary"> limites de retrait augmentées jusqu'à 50 000€</strong> et d'un traitement prioritaire.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  <Gift className="inline-block w-5 h-5 mr-2" />
                  Notre Conseil pour les High-Rollers
                </h3>
                <p className="text-foreground leading-relaxed">
                  Utilisez les <strong className="text-primary">cryptomonnaies pour des retraits express</strong> et des limites élevées. 
                  Le programme VIP offre des avantages exclusifs : cashback croissant, bonus de rechargement hebdomadaires et gestionnaire de compte 
                  personnel. Planifiez vos gros retraits à l'avance et contactez votre gestionnaire VIP pour un traitement prioritaire.
                </p>
              </div>
            </div>
          </section>

          {/* Catalogue de Jeux */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">🎮 Catalogue de Jeux SpinAura</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              SpinAura propose une <strong className="text-foreground">ludothèque premium de plus de 3000 jeux</strong> des meilleurs 
              éditeurs mondiaux. Découvrez notre sélection par catégorie.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {gamesCategories.map((category, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{category.icon}</div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.games.map((game, gIndex) => (
                      <li key={gIndex} className="flex items-start gap-2 text-muted-foreground">
                        <Star className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span>{game}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                <Zap className="inline-block w-5 h-5 mr-2" />
                Nouveautés Hebdomadaires
              </h3>
              <p className="text-foreground leading-relaxed">
                SpinAura enrichit constamment sa ludothèque avec les <strong className="text-primary">dernières sorties</strong> des 
                éditeurs partenaires. Chaque semaine, découvrez de nouveaux slots à forte volatilité, des tables live exclusives et des crash 
                games innovants. Les High-Rollers apprécieront les <strong className="text-primary">tables VIP avec limites élevées</strong>.
              </p>
            </div>
          </section>

          {/* Stratégies pour Maximiser Gains */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">🎯 Stratégies pour Maximiser vos Gains High-Roller</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Optimiser le Bonus 450%</h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Déposez 3333€ pour obtenir le maximum de 15 000€</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Wager x40 raisonnable pour un tel bonus</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>30 jours suffisants pour remplir les conditions</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Misez maximum 5€ par spin pendant le bonus</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Sélection des Jeux à Fort RTP</h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Blackjack VIP Live</strong> - RTP 99.5%</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Blood Suckers</strong> - RTP 98%</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>1429 Uncharted Seas</strong> - RTP 98.6%</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Privilégiez les jeux RTP {'>'} 96%</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Gestion du Gros Bankroll</h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Définissez un budget quotidien adapté</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Diversifiez vos mises entre slots et live</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Profitez du programme VIP pour cashback</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Utilisez les limites de retrait VIP (50k€)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                <Trophy className="inline-block w-5 h-5 mr-2" />
                Stratégie Complète High-Roller
              </h3>
              <p className="text-foreground leading-relaxed">
                Avec un budget de 3333€ et un bonus de 15 000€, vous disposez de <strong className="text-primary">18 333€ à wager x40</strong>, 
                soit 733 320€ de mise totale. Sur 30 jours, cela représente environ 24 444€ de mise quotidienne, soit 
                <strong className="text-primary"> 4888 spins à 5€</strong> par jour. Alternez entre slots haute volatilité (Gates of Olympus 1000) 
                pour les gros gains et blackjack live pour diminuer la variance. Le programme VIP offre un cashback hebdomadaire qui réduit votre 
                investissement réel.
              </p>
            </div>
          </section>

          {/* Sécurité et Légalité */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">🔒 Sécurité et Légalité de SpinAura</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Sécurité Technique
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground">Cryptage SSL 256-bit</strong>
                      <p className="text-muted-foreground text-sm">Protection militaire de toutes vos données et transactions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground">Serveurs Sécurisés</strong>
                      <p className="text-muted-foreground text-sm">Infrastructure ultra-protégée contre les cyberattaques</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground">Authentification à 2 Facteurs</strong>
                      <p className="text-muted-foreground text-sm">Double vérification pour sécuriser les comptes High-Rollers</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground">Stockage Crypto Sécurisé</strong>
                      <p className="text-muted-foreground text-sm">Portefeuilles froids pour sécuriser les cryptomonnaies</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Trophy className="w-6 h-6" />
                  Licence et Régulation
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground">Licence Curaçao Valide</strong>
                      <p className="text-muted-foreground text-sm">Régulation stricte et contrôles réguliers</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground">Audits Indépendants</strong>
                      <p className="text-muted-foreground text-sm">Vérifications par organismes tiers certifiés</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground">RNG Certifiés</strong>
                      <p className="text-muted-foreground text-sm">Générateurs aléatoires testés pour équité</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground">Conformité AML/KYC</strong>
                      <p className="text-muted-foreground text-sm">Lutte active contre blanchiment d'argent</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Jeu Responsable</h3>
              <p className="text-foreground leading-relaxed mb-4">
                SpinAura prend la <strong className="text-primary">protection des joueurs très au sérieux</strong>. Le casino propose 
                des outils complets de jeu responsable pour vous aider à garder le contrôle, même avec des budgets élevés.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Limites de dépôt quotidiennes/hebdomadaires/mensuelles personnalisables</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Auto-exclusion temporaire ou permanente disponible</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Test d'auto-évaluation pour détecter comportements à risque</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Liens vers organisations d'aide (Joueurs Info Service, Adictel)</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-500 mb-3">
                <CheckCircle2 className="inline-block w-5 h-5 mr-2" />
                Notre Verdict Sécurité
              </h3>
              <p className="text-foreground leading-relaxed">
                SpinAura est un <strong className="text-primary">casino totalement sécurisé</strong> avec licence valide, cryptage militaire 
                et engagement fort pour le jeu responsable. Les High-Rollers peuvent jouer <strong className="text-primary">en toute confiance</strong> 
                avec des limites de retrait élevées et un support VIP dédié.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">❓ Questions Fréquentes sur SpinAura Casino</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">SpinAura Casino est-il fiable et sécurisé ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, <strong className="text-primary">SpinAura Casino est totalement sécurisé</strong>. La plateforme utilise un cryptage SSL 256-bit 
                  de niveau militaire et possède une licence Curaçao valide. Toutes les transactions sont protégées et les jeux sont certifiés équitables 
                  par des audits indépendants réguliers.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Le bonus 450% jusqu'à 15 000€ est-il légitime ?</h3>
                <p className="text-foreground leading-relaxed">
                  Absolument ! SpinAura propose un <strong className="text-primary">bonus authentique et record de 450% jusqu'à 15 000€</strong>. 
                  Pour l'obtenir en entier, déposez 3333€. Les conditions de wager x40 sont raisonnables pour un tel montant, avec 30 jours pour 
                  les remplir. C'est le bonus le plus généreux du marché français en 2025.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Quels sont les délais de retrait réels ?</h3>
                <p className="text-foreground leading-relaxed">
                  Les retraits SpinAura sont <strong className="text-primary">traités rapidement</strong> : cryptomonnaies et portefeuilles 
                  électroniques (Skrill, Neteller, MiFinity) en quelques heures, cartes bancaires sous 24-48h, virements sous 2-5 jours ouvrés. 
                  Les High-Rollers VIP bénéficient d'un <strong className="text-primary">traitement prioritaire</strong> et de limites de retrait 
                  augmentées jusqu'à 50 000€.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">SpinAura propose-t-il des paris sportifs ?</h3>
                <p className="text-foreground leading-relaxed">
                  Non, <strong className="text-primary">SpinAura se concentre exclusivement sur les jeux de casino</strong> : machines à sous 
                  premium, casino live avec croupiers professionnels, crash games et jeux de table classiques. Cette spécialisation permet d'offrir 
                  une expérience de jeu optimale avec un catalogue de 3000+ jeux des meilleurs éditeurs.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Quel est le dépôt minimum pour le bonus ?</h3>
                <p className="text-foreground leading-relaxed">
                  Le <strong className="text-primary">dépôt minimum est de 20€</strong> pour activer le bonus de bienvenue 450%. 
                  Pour obtenir le bonus maximum de 15 000€, vous devez déposer 3333€. C'est une offre particulièrement attractive pour les 
                  High-Rollers et les joueurs avec des budgets confortables.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Quels jeux sont disponibles sur SpinAura ?</h3>
                <p className="text-foreground leading-relaxed">
                  SpinAura propose <strong className="text-primary">plus de 3000 jeux</strong> : machines à sous premium (Gates of Olympus 1000, 
                  Sweet Bonanza 1000, Sugar Rush 1000, Wanted Dead or a Wild), casino live VIP avec croupiers professionnels, crash games 
                  (Aviator, Spaceman, JetX) et jeux de table classiques. Les fournisseurs incluent Pragmatic Play, NetEnt, Evolution Gaming, 
                  Hacksaw Gaming, NoLimit City.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">SpinAura accepte-t-il les cryptomonnaies ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui ! SpinAura accepte les <strong className="text-primary">cryptomonnaies majeures</strong> : Bitcoin (BTC), Ethereum (ETH) et 
                  Tether (USDT). Les dépôts et retraits crypto sont quasi-instantanés avec des limites élevées (jusqu'à 25 000€). C'est idéal pour 
                  les High-Rollers recherchant rapidité, anonymat et sécurité maximale.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Puis-je jouer sur mobile ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui ! SpinAura est <strong className="text-primary">100% optimisé pour mobile</strong>. L'interface responsive fonctionne 
                  parfaitement sur smartphones et tablettes iOS/Android sans téléchargement d'application. Tous les jeux, le casino live et la 
                  gestion de compte sont accessibles en mobilité avec la même qualité que sur desktop.
                </p>
              </div>
            </div>
          </section>

          {/* Notre Verdict */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">🏆 Notre Verdict Final sur SpinAura Casino</h2>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center gap-3 bg-primary/20 border-2 border-primary rounded-2xl px-8 py-4 mb-4">
                <Star className="w-10 h-10 text-primary fill-primary" />
                <span className="text-5xl font-bold text-primary">8.8</span>
                <span className="text-2xl text-foreground">/10</span>
              </div>
              <Badge className="bg-green-500 text-white text-lg px-6 py-2">
                Excellent Casino High-Roller - Recommandé par GigaBonus
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-500 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  Points Forts
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Bonus record 450% jusqu'à 15 000€</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Idéal pour les High-Rollers</strong> avec gros budgets</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Ludothèque de <strong>3000+ jeux</strong> premium</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Cryptomonnaies acceptées</strong> (BTC, ETH, USDT)</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Programme VIP exclusif</strong> avec cashback</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Limites de retrait élevées</strong> (jusqu'à 50k€ VIP)</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Support client 24/7</strong> premium en français</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Sécurité maximale</strong> SSL 256-bit + licence Curaçao</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-500 mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Points à Améliorer
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-foreground">
                    <XCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Wager x40 standard (correct pour le montant du bonus)</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <XCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Pas de paris sportifs (casino uniquement)</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <XCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Application mobile native non disponible</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">🎯 Conclusion Finale</h3>
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  <strong className="text-primary">SpinAura Casino</strong> s'impose comme la <strong className="text-primary">référence absolue 
                  pour les High-Rollers</strong> en 2025 grâce à son bonus révolutionnaire de 450% jusqu'à 15 000€. Ce montant colossal, combiné 
                  à des conditions de wager x40 raisonnables et 30 jours pour les remplir, offre une opportunité exceptionnelle de maximiser vos 
                  gains sur gros budgets.
                </p>
                <p className="leading-relaxed">
                  La <strong className="text-primary">ludothèque premium de 3000+ jeux</strong> des meilleurs éditeurs mondiaux garantit un 
                  divertissement permanent et varié. Les slots haute volatilité (Gates of Olympus 1000, Wanted Dead or a Wild) et les tables live 
                  VIP avec limites élevées répondent parfaitement aux attentes des joueurs exigeants. L'acceptation des <strong className="text-primary">
                  cryptomonnaies</strong> (Bitcoin, Ethereum, USDT) facilite les transactions rapides et sécurisées.
                </p>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">programme VIP exclusif</strong> récompense généreusement les High-Rollers : cashback croissant, 
                  bonus de rechargement hebdomadaires, limites de retrait augmentées jusqu'à 50 000€, gestionnaire de compte personnel dédié. La 
                  <strong className="text-primary"> sécurité maximale</strong> (licence Curaçao, SSL 256-bit militaire) et le 
                  <strong className="text-primary"> support client premium 24/7</strong> renforcent la confiance des joueurs.
                </p>
                <p className="leading-relaxed font-semibold">
                  Notre équipe GigaBonus recommande chaleureusement SpinAura aux joueurs High-Rollers recherchant <strong className="text-primary">
                  le bonus le plus généreux du marché, une ludothèque premium et des avantages VIP exclusifs</strong>. Note finale : 
                  <strong className="text-primary"> 8.8/10</strong>.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-12 py-6"
              >
                <a href={casino.playUrl} target="_blank" rel="noopener noreferrer sponsored">
                  <Trophy className="w-6 h-6 mr-2" />
                  Rejoindre SpinAura Casino
                </a>
              </Button>
            </div>
          </section>

          {/* Avis de Nos Testeurs */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">💬 Avis de Nos Testeurs High-Rollers</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="glass-card rounded-xl p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">PD</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-foreground">Pierre Durand</h3>
                      <p className="text-sm text-muted-foreground">42 ans - Testeur High-Roller depuis 8 ans</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    "Le bonus de 15 000€ de SpinAura est une <strong className="text-primary">opportunité unique</strong> pour les High-Rollers. 
                    J'ai déposé 3000€ et obtenu 13 500€ de bonus. Avec le wager x40, c'est jouable sur 30 jours en alternant slots haute volatilité 
                    et blackjack VIP. Les retraits crypto sont ultra-rapides (2h). Le programme VIP offre un cashback hebdomadaire appréciable. 
                    La ludothèque est impressionnante avec tous mes slots préférés. Casino sérieux et transparent que je recommande."
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">CM</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-foreground">Catherine Martin</h3>
                      <p className="text-sm text-muted-foreground">38 ans - Testeuse VIP depuis 6 ans</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    "SpinAura est parfait pour les <strong className="text-primary">joueurs avec des budgets confortables</strong>. 
                    Le bonus 450% est le plus généreux que j'ai testé en 6 ans. Les tables live VIP Evolution avec limites élevées sont excellentes. 
                    J'apprécie particulièrement le gestionnaire de compte personnel qui répond en 5 minutes. Les retraits sont rapides (24-48h par CB) 
                    et les limites VIP de 50k€ sont idéales pour les gros gains. Seul bémol : pas de bookmaker, mais la concentration sur le casino 
                    permet une qualité optimale."
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">TL</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-foreground">Thomas Leroy</h3>
                      <p className="text-sm text-muted-foreground">45 ans - Testeur crypto depuis 5 ans</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    "En tant qu'adepte des cryptos, SpinAura me convient parfaitement. Les dépôts/retraits en <strong className="text-primary">
                    Bitcoin et Ethereum sont instantanés</strong> avec des limites élevées (25k€). Le bonus de 15 000€ m'a permis d'explorer toute 
                    la ludothèque : Pragmatic Play, Hacksaw Gaming, NoLimit City. Les crash games (Aviator, Spaceman) sont addictifs. La sécurité 
                    est au top avec licence Curaçao et SSL militaire. Le support 24/7 est réactif et professionnel. Un casino premium pour High-Rollers 
                    exigeants."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <RelatedLinks 
            links={[
              { title: "Meilleurs Bonus Cashback Casino", description: "Découvrez les casinos offrant les meilleurs cashback", href: "/bonus-cashback" },
              { title: "Top Casinos Crypto 2025", description: "Casinos acceptant Bitcoin, Ethereum et cryptomonnaies", href: "/top-casinos-crypto" },
              { title: "Bonus Casino Sans Wager", description: "Casinos avec bonus sans conditions de mise", href: "/bonus-sans-wager" },
              { title: "Meilleurs Casinos en Ligne 2025", description: "Notre sélection des meilleurs casinos français", href: "/" },
              { title: "Avis Complet SpinAura Casino", description: "Notre test détaillé et avis d'experts", href: "/blog/avis-spinaura-2025" },
            ]}
          />

          {/* CTA Final */}
          <section className="text-center mt-12 glass-card rounded-2xl p-12 bg-gradient-to-br from-primary/20 to-secondary/20">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-foreground">Rejoignez SpinAura Casino Dès Maintenant</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Profitez du <strong className="text-foreground">bonus record de 450% jusqu'à 15 000€</strong> et du programme VIP exclusif pour High-Rollers
            </p>
            <a href={casino.playUrl} target="_blank" rel="sponsored noopener noreferrer">
              <Button size="lg" className="text-xl px-12 py-7 shadow-2xl hover:scale-105 transition-transform">
                Jouer sur SpinAura <ExternalLink className="ml-2 h-6 w-6" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              <Clock className="inline-block w-4 h-4 mr-1" />
              Inscription en 2 minutes • Dépôt minimum 20€ • Retraits 24-48h • Crypto accepté
            </p>
          </section>

          <SEOEnrichedContent
            casinoName="SpinAura"
            bonus="450% + 15 000€"
            wager="40"
            minDeposit="20€"
            withdrawal="24-48h"
            rating={9.3}
            reviewsCount={2950}
            slug="spinaura"
            competitors={["SpinStar", "Kings Chance", "Lucky Treasure"]}
          />

          <RelatedLinks links={[]} />
        </div>
      </div>
      <Footer />
    </>
  );
};

