'use client';

import { useRef, useEffect } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  CheckCircle2, 
  Shield, 
  Trophy, 
  CreditCard,
  Star,
  Zap,
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

export default function LuckyTrunkPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const casino = casinos.find(c => c.name === "Lucky Trunk")!;


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
    "virement": "/images/methods/virement-bancaire.webp",
    "myfinity": "/images/methods/mifinity.webp",
    "neosurf": "/images/methods/neosurf.webp",
    "cashlib": "/images/methods/cashlib.webp",
    "jetonbank": "/images/methods/jetonbank.webp",
  };

  const methodLabels: Record<string, string> = {
    "CB": "Carte Bancaire",
    "virement": "Virement Bancaire",
    "myfinity": "MiFinity",
    "neosurf": "Neosurf",
    "cashlib": "Cashlib",
    "jetonbank": "Jeton Bank",
  };

  const offers = [
    {
      id: 1,
      title: "Bonus de Bienvenue Sans Wager – 300% jusqu'à 1200€",
      image: "/images/luckytrunk/welcome.webp",
      details: [
        "Dépôt minimum : 20 €",
        "Bonus exceptionnel : 300% jusqu'à 1200 €",
        "Sans conditions de wager : retraits immédiats",
        "Aucune mise obligatoire sur le bonus",
        "Liberté totale de retrait à tout moment",
        "Méthodes acceptées : CB, virements, MiFinity, Neosurf, Cashlib, Jeton Bank",
        "Support client 24/7 : support@luckytrunk.com, chat live"
      ]
    },
    {
      id: 2,
      title: "Section Bookmaker – Paris Sportifs",
      details: [
        "Cotes compétitives sur tous les sports majeurs",
        "Paris live en direct",
        "Football, Tennis, Basketball, eSports",
        "Interface bookmaker intuitive",
        "Statistiques en temps réel",
        "Cashout disponible",
        "Bonus sport réguliers"
      ]
    }
  ];

  const withdrawalMethods = [
    { method: "Cartes Bancaires", delay: "24-48h", min: "20€", max: "5 000€" },
    { method: "Virement Bancaire", delay: "2-5 jours", min: "50€", max: "10 000€" },
    { method: "MiFinity", delay: "Instantané", min: "20€", max: "5 000€" },
    { method: "Neosurf", delay: "24h", min: "20€", max: "2 500€" },
    { method: "Cashlib", delay: "24h", min: "20€", max: "2 500€" },
    { method: "Jeton Bank", delay: "Instantané", min: "20€", max: "5 000€" },
  ];

  const gamesCategories = [
    {
      title: "Machines à Sous Premium",
      icon: <Trophy className="w-6 h-6" />,
      games: [
        "Gates of Olympus (Pragmatic Play)",
        "Sweet Bonanza (Pragmatic Play)",
        "The Dog House Megaways (Pragmatic Play)",
        "Book of Dead (Play'n GO)",
        "Starburst (NetEnt)"
      ]
    },
    {
      title: "Casino Live Immersif",
      icon: <Users className="w-6 h-6" />,
      games: [
        "Roulette Française Live",
        "Blackjack Premium VIP",
        "Baccarat Squeeze Live",
        "Crazy Time (Evolution)",
        "Monopoly Live (Evolution)"
      ]
    },
    {
      title: "Crash Games Populaires",
      icon: <Zap className="w-6 h-6" />,
      games: [
        "Aviator (Spribe)",
        "Spaceman (Pragmatic Play)",
        "JetX (SmartSoft)",
        "Limbo",
        "Plinko"
      ]
    },
    {
      title: "Jeux de Table Classiques",
      icon: <Gift className="w-6 h-6" />,
      games: [
        "Poker Texas Hold'em",
        "Blackjack Classique",
        "Roulette Européenne",
        "Baccarat",
        "Craps"
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
          "name": "Lucky Trunk Casino",
          "image": "https://gigabonus.win/images/luckytrunk.webp"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "9.4",
          "bestRating": "10",
          "worstRating": "1"
        },
        "reviewBody": "Lucky Trunk révolutionne le marché avec son bonus 300% SANS WAGER jusqu'à 1200€. Retraits libres immédiats, bookmaker intégré, et 2000+ jeux. Une offre exceptionnelle pour les joueurs qui veulent la liberté totale.",
        "datePublished": "2025-01-15",
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus"
        }
      },
      {
        "@type": "Article",
        "headline": "Lucky Trunk : Bonus 300% Sans Wager + Bookmaker + Retraits Libres",
        "description": "Test complet de Lucky Trunk : bonus sans conditions, bookmaker, 2000+ jeux, retraits immédiats.",
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
            "name": "Qu'est-ce qu'un bonus sans wager ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le bonus sans wager de Lucky Trunk signifie aucune condition de mise obligatoire. Vous pouvez retirer vos gains immédiatement sans devoir miser 40x ou 50x."
            }
          },
          {
            "@type": "Question",
            "name": "Lucky Trunk propose-t-il des paris sportifs ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, Lucky Trunk intègre une section bookmaker complète avec cotes compétitives, paris live, football, tennis, basketball et eSports."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="🎁 Lucky Trunk Casino : Bonus 300% SANS WAGER + Bookmaker 2025"
        description="💎 Lucky Trunk : Bonus 300% Sans Wager jusqu'à 1200€ | Retraits LIBRES | Bookmaker intégré | 6 méthodes paiement | Dépôt 20€ ⚡"
        keywords="lucky trunk casino, bonus sans wager, casino sans conditions, bookmaker casino, bonus 300%, retraits libres, casino 2025, paris sportifs"
        canonical="https://gigabonus.win/luckytrunk"
        ogTitle="Lucky Trunk : Bonus 300% SANS WAGER + Bookmaker"
        ogDescription="💎 Bonus 300% Sans Wager | Retraits LIBRES | Bookmaker ⚡"
        ogImage="https://gigabonus.win/images/luckytrunk.webp"
        twitterTitle="Lucky Trunk : Bonus 300% SANS WAGER + Bookmaker"
        twitterDescription="💎 Bonus 300% Sans Wager | Retraits LIBRES | Bookmaker ⚡"
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
                    alt={`Logo ${casino.name} Casino`}
                    width={256}
                    height={256}
                    loading="eager"
                    className="w-64 h-64 object-contain drop-shadow-2xl"
                  />
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                    {casino.bonusText}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center mt-4">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/50 text-lg px-4 py-2">
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Sans Wager
                    </Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/50 text-lg px-4 py-2">
                      <Trophy className="mr-2 h-5 w-5" />
                      Bookmaker Intégré
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
                Avis Lucky Trunk Casino 2025 : Bonus 300% Sans Wager + Bookmaker - Notre Test Complet
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de Lucky Trunk Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">Lucky Trunk Casino</strong> révolutionne le marché en 2025 avec son 
                    <strong className="text-primary"> bonus exceptionnel de 300% jusqu'à 1200€ SANS CONDITIONS DE WAGER</strong>. Cette offre 
                    ultra-rare permet de retirer vos gains immédiatement sans contraintes de mise obligatoires. Fini les conditions 
                    impossibles à remplir : avec Lucky Trunk, vous jouez en toute liberté et retirez quand vous voulez.
                  </p>
                  <p>
                    Le casino combine une <strong className="text-primary">plateforme de jeux premium</strong> avec une 
                    <strong className="text-primary"> section bookmaker performante</strong> pour parier sur vos sports favoris. L'interface 
                    moderne et intuitive garantit une navigation fluide sur desktop, tablette et mobile sans téléchargement requis. Le 
                    <strong className="text-primary"> support client réactif disponible 24/7</strong> en français répond à toutes vos questions 
                    via chat live et email (support@luckytrunk.com).
                  </p>
                  <p>
                    La <strong className="text-primary">sécurité maximale</strong> est garantie par un cryptage SSL 256-bit militaire protégeant 
                    toutes vos données personnelles et transactions financières. Lucky Trunk détient une licence Curaçao valide et respecte 
                    scrupuleusement les standards internationaux de jeu responsable. Les dépôts et retraits sont possibles via 
                    <strong className="text-primary"> 6 méthodes sécurisées</strong> : cartes bancaires, virements, MiFinity, Neosurf, Cashlib et Jeton Bank.
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque complète</strong> de Lucky Trunk propose plus de 
                    <strong className="text-primary"> 2000 jeux</strong> des meilleurs fournisseurs : Pragmatic Play, NetEnt, Play'n GO, Evolution Gaming, 
                    Hacksaw Gaming. Les <strong className="text-primary">slots populaires</strong> incluent Gates of Olympus, Sweet Bonanza, 
                    The Dog House Megaways, Book of Dead, Starburst. Le <strong className="text-primary">casino live immersif</strong> propose 
                    des tables VIP avec croupiers professionnels pour la roulette, le blackjack et le baccarat.
                  </p>
                  <p>
                    Lucky Trunk se distingue par sa <strong className="text-primary">double offre casino + bookmaker</strong>. La section 
                    paris sportifs propose des cotes compétitives sur football, tennis, basketball, eSports avec paris live en direct, 
                    statistiques temps réel et cashout disponible. Les amateurs de sensations fortes apprécieront les 
                    <strong className="text-primary"> crash games Aviator, Spaceman et JetX</strong> pour des gains potentiels immédiats.
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
                  <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Sans Wager</p>
                  <p className="text-xs text-muted-foreground">Retraits libres</p>
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
                  <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Bookmaker</p>
                  <p className="text-xs text-muted-foreground">Paris sportifs</p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Méthodes de Paiement Acceptées</h3>
                <div className="flex flex-wrap gap-4">
                  {casino.methods.map((method) => (
                    <img 
                      key={method}
                      src={methodLogos[method]} 
                      alt={methodLabels[method]}
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
              🎁 Détail des Offres et Promotions Lucky Trunk
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 Comment S'inscrire sur Lucky Trunk Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L'<strong className="text-primary">inscription sur Lucky Trunk</strong> est rapide et simple.
                Voici notre <strong className="text-primary">guide complet</strong> pour créer votre compte et profiter du bonus sans wager.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Étape 1 : Créer votre compte</h3>
                  <p className="leading-relaxed">
                    Cliquez sur <strong className="text-primary">"S'inscrire"</strong> sur la page d'accueil. Remplissez le formulaire avec 
                    nom, prénom, date de naissance, email et mot de passe sécurisé. L'inscription prend 
                    <strong className="text-primary"> moins de 2 minutes</strong>.
                  </p>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Étape 2 : Vérifier votre email</h3>
                  <p className="leading-relaxed">
                    Recevez un <strong className="text-primary">email de confirmation</strong>. Cliquez sur le lien pour 
                    <strong className="text-primary"> activer votre compte</strong> et sécuriser votre profil.
                  </p>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Étape 3 : Effectuer votre dépôt</h3>
                  <p className="leading-relaxed">
                    Le <strong className="text-primary">dépôt minimum est de 20€</strong>. Choisissez parmi CB, virement, MiFinity, Neosurf, 
                    Cashlib ou Jeton Bank. Dépôt <strong className="text-primary">instantané et sécurisé</strong>.
                  </p>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Recevoir votre bonus 300%</h3>
                  <p className="leading-relaxed">
                    Le bonus de 300% jusqu'à 1200€ est automatiquement crédité. 
                    <strong className="text-primary"> Aucun wager requis</strong> : retirez librement vos gains !
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Conseils de Sécurité</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Utilisez un mot de passe fort et unique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Activez l'authentification à deux facteurs si disponible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ne partagez jamais vos identifiants</span>
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💰 Méthodes de Retrait Lucky Trunk</h2>
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
                  Lucky Trunk traite les retraits <strong className="text-primary">rapidement et efficacement</strong>. Les portefeuilles 
                  électroniques (MiFinity, Jeton Bank) offrent les délais les plus rapides avec des retraits quasi-instantanés. Les cartes 
                  bancaires sont traitées sous 24-48h, tandis que les virements prennent 2-5 jours ouvrés selon votre banque.
                </p>
                <p className="text-foreground leading-relaxed">
                  Pour <strong className="text-primary">maximiser la rapidité</strong> de vos retraits, nous recommandons de compléter la 
                  vérification KYC dès votre inscription (pièce d'identité et justificatif de domicile). Les retraits seront alors validés 
                  automatiquement sans délai supplémentaire.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  <Gift className="inline-block w-5 h-5 mr-2" />
                  Notre Conseil pour les Retraits
                </h3>
                <p className="text-foreground leading-relaxed">
                  Profitez du <strong className="text-primary">bonus sans wager</strong> : vos gains sont instantanément retirables ! 
                  Utilisez MiFinity ou Jeton Bank pour des retraits express. Planifiez vos retraits les jours ouvrés pour éviter les 
                  délais bancaires du weekend.
                </p>
              </div>
            </div>
          </section>

          {/* Catalogue de Jeux */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">🎮 Catalogue de Jeux Lucky Trunk</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Lucky Trunk propose une <strong className="text-foreground">ludothèque premium de plus de 2000 jeux</strong> des meilleurs 
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
                Nouveautés Régulières
              </h3>
              <p className="text-foreground leading-relaxed">
                Lucky Trunk enrichit constamment sa ludothèque avec les <strong className="text-primary">dernières sorties</strong> des 
                éditeurs partenaires. Chaque semaine, découvrez de nouveaux slots, des tables live exclusives et des crash games innovants.
              </p>
            </div>
          </section>

          {/* Stratégies pour Maximiser Gains */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">🎯 Stratégies pour Maximiser vos Gains</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Profiter du Bonus Sans Wager</h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Déposez le maximum pour obtenir 1200€ de bonus</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Retirez vos gains sans attendre</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Aucune condition de mise à remplir</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Liberté totale sur tous les jeux</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Sélection des Jeux à Fort RTP</h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Book of Dead</strong> - RTP 96.21%</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Starburst</strong> - RTP 96.09%</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Blackjack Live</strong> - RTP 99.5%</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Privilégiez les jeux RTP {'>'} 96%</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Gestion du Bankroll</h3>
                <ul className="space-y-2">
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Définissez un budget quotidien strict</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Ne misez jamais plus de 5% par spin</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Retirez régulièrement vos gains</span>
                  </li>
                  <li className="text-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span>Utilisez les limites de dépôt</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">
                <Trophy className="inline-block w-5 h-5 mr-2" />
                Stratégie Complète Sans Wager
              </h3>
              <p className="text-foreground leading-relaxed">
                Avec un bonus <strong className="text-primary">sans conditions de mise</strong>, votre stratégie est simple : 
                <strong className="text-primary"> jouez librement et retirez quand vous voulez</strong>. Pas besoin de calculer des wagering 
                requirements complexes. Vous gagnez 500€ ? Retirez immédiatement. C'est le principal avantage de Lucky Trunk face aux casinos 
                traditionnels avec wager x35-x50.
              </p>
            </div>
          </section>

          {/* Sécurité et Légalité */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">🔒 Sécurité et Légalité de Lucky Trunk</h2>
            
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
                      <p className="text-muted-foreground text-sm">Protection militaire de toutes vos données</p>
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
                      <p className="text-muted-foreground text-sm">Double vérification pour sécuriser votre compte</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-foreground">Stockage Sécurisé</strong>
                      <p className="text-muted-foreground text-sm">Données bancaires jamais conservées localement</p>
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
                Lucky Trunk prend la <strong className="text-primary">protection des joueurs très au sérieux</strong>. Le casino propose 
                des outils complets de jeu responsable pour vous aider à garder le contrôle.
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
                Lucky Trunk est un <strong className="text-primary">casino totalement sécurisé</strong> avec licence valide, cryptage militaire 
                et engagement fort pour le jeu responsable. Vous pouvez jouer <strong className="text-primary">en toute confiance</strong>.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">❓ Questions Fréquentes sur Lucky Trunk Casino</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Lucky Trunk est-il fiable et légal ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, <strong className="text-primary">Lucky Trunk est totalement fiable</strong>. Le casino opère sous licence Curaçao valide, 
                  utilise un cryptage SSL 256-bit militaire et respecte toutes les normes internationales de sécurité et jeu responsable.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Le bonus sans wager est-il vraiment légitime ?</h3>
                <p className="text-foreground leading-relaxed">
                  Absolument ! Lucky Trunk propose un <strong className="text-primary">bonus authentique de 300% jusqu'à 1200€ sans conditions 
                  de wager</strong>. Vos gains sont immédiatement retirables sans contraintes de mise. C'est l'un des rares casinos à proposer 
                  une telle offre transparente.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Quels sont les délais de retrait réels ?</h3>
                <p className="text-foreground leading-relaxed">
                  Les retraits Lucky Trunk sont <strong className="text-primary">traités rapidement</strong> : MiFinity et Jeton Bank en 
                  quelques heures, cartes bancaires sous 24-48h, virements sous 2-5 jours ouvrés. Complétez votre KYC en avance pour accélérer 
                  le processus.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Puis-je parier sur les sports avec Lucky Trunk ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui ! Lucky Trunk dispose d'une <strong className="text-primary">section bookmaker complète</strong> avec cotes compétitives 
                  sur football, tennis, basketball, eSports. Paris live en direct, statistiques temps réel et cashout disponible.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Quel est le dépôt minimum pour le bonus ?</h3>
                <p className="text-foreground leading-relaxed">
                  Le <strong className="text-primary">dépôt minimum est de 20€</strong> pour activer le bonus de bienvenue 300%. 
                  C'est très accessible et permet à tous les joueurs de profiter de cette offre exceptionnelle.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Quels jeux sont disponibles sur Lucky Trunk ?</h3>
                <p className="text-foreground leading-relaxed">
                  Lucky Trunk propose <strong className="text-primary">plus de 2000 jeux</strong> : machines à sous premium (Gates of Olympus, 
                  Sweet Bonanza, Book of Dead), casino live avec croupiers professionnels, crash games (Aviator, Spaceman, JetX), jeux de table 
                  classiques et paris sportifs.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Lucky Trunk accepte-t-il les cryptomonnaies ?</h3>
                <p className="text-foreground leading-relaxed">
                  Non, Lucky Trunk n'accepte pas directement les cryptomonnaies. Les méthodes disponibles sont : 
                  <strong className="text-primary"> CB, virements bancaires, MiFinity, Neosurf, Cashlib et Jeton Bank</strong>. Toutes offrent 
                  sécurité et rapidité maximales.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Puis-je jouer sur mobile ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui ! Lucky Trunk est <strong className="text-primary">100% optimisé pour mobile</strong>. L'interface responsive fonctionne 
                  parfaitement sur smartphones et tablettes iOS/Android sans téléchargement d'application. Jouez partout, tout le temps.
                </p>
              </div>
            </div>
          </section>

          {/* Notre Verdict */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">🏆 Notre Verdict Final sur Lucky Trunk Casino</h2>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center gap-3 bg-primary/20 border-2 border-primary rounded-2xl px-8 py-4 mb-4">
                <Star className="w-10 h-10 text-primary fill-primary" />
                <span className="text-5xl font-bold text-primary">9.0</span>
                <span className="text-2xl text-foreground">/10</span>
              </div>
              <Badge className="bg-green-500 text-white text-lg px-6 py-2">
                Excellent Casino - Recommandé par GigaBonus
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
                    <span><strong>Bonus sans wager exceptionnel 300%</strong> jusqu'à 1200€</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Retraits immédiats sans conditions</strong> de mise</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Section bookmaker complète</strong> avec cotes attractives</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Ludothèque de <strong>2000+ jeux</strong> premium</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Dépôt minimum accessible</strong> de 20€</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>6 méthodes de paiement</strong> sécurisées</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Support client 24/7</strong> réactif en français</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Licence Curaçao valide</strong> et sécurité SSL militaire</span>
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
                    <span>Pas de cryptomonnaies acceptées</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <XCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Application mobile native non disponible</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground">
                    <XCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Catalogue bookmaker moins étendu que spécialistes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">🎯 Conclusion Finale</h3>
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  <strong className="text-primary">Lucky Trunk Casino</strong> se positionne comme une <strong className="text-primary">référence 
                  incontournable</strong> en 2025 grâce à son bonus révolutionnaire de 300% jusqu'à 1200€ <strong className="text-primary">sans 
                  aucune condition de wager</strong>. Cette transparence totale et cette liberté de retrait immédiat constituent un avantage 
                  énorme face aux casinos traditionnels qui imposent des wagering requirements souvent impossibles à remplir.
                </p>
                <p className="leading-relaxed">
                  La <strong className="text-primary">double offre casino + bookmaker</strong> répond aux attentes des joueurs polyvalents qui 
                  souhaitent alterner entre slots premium, casino live et paris sportifs sur une seule plateforme sécurisée. Les 2000+ jeux des 
                  meilleurs éditeurs mondiaux garantissent un divertissement permanent et varié.
                </p>
                <p className="leading-relaxed">
                  La <strong className="text-primary">sécurité maximale</strong> (licence Curaçao, SSL 256-bit), les <strong className="text-primary">
                  retraits rapides sous 24-48h</strong> et le <strong className="text-primary">support client 24/7</strong> renforcent la confiance 
                  des joueurs. L'accessibilité avec un dépôt minimum de 20€ ouvre Lucky Trunk à tous les profils de joueurs.
                </p>
                <p className="leading-relaxed font-semibold">
                  Notre équipe GigaBonus recommande chaleureusement Lucky Trunk aux joueurs recherchant <strong className="text-primary">liberté, 
                  transparence et bonus généreux sans contraintes</strong>. Note finale : <strong className="text-primary">9.0/10</strong>.
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
                  Rejoindre Lucky Trunk Casino
                </a>
              </Button>
            </div>
          </section>

          {/* Avis de Nos Testeurs */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">💬 Avis de Nos Testeurs Professionnels</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="glass-card rounded-xl p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">MR</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-foreground">Marc Roussel</h3>
                      <p className="text-sm text-muted-foreground">32 ans - Testeur depuis 5 ans</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    "Le bonus sans wager de Lucky Trunk est une <strong className="text-primary">révolution totale</strong>. 
                    J'ai gagné 800€ sur Gates of Olympus et j'ai pu retirer immédiatement sans calculer de wagering x35 ou x40. 
                    La liberté totale ! Le bookmaker est correct pour les paris sportifs, même si moins complet que les spécialistes. 
                    Support réactif en français. Je recommande vivement ce casino transparent."
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">SD</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-foreground">Sophie Dubois</h3>
                      <p className="text-sm text-muted-foreground">28 ans - Testeuse depuis 3 ans</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    "Lucky Trunk est devenu mon casino préféré ! Le <strong className="text-primary">bonus 300% sans conditions</strong> 
                    change complètement l'expérience. Plus besoin de stresser sur des wagering impossibles. J'alterne entre les slots live 
                    (Crazy Time, Monopoly) et les paris tennis. Les retraits MiFinity sont ultra-rapides (2-3h). Interface mobile impeccable. 
                    Seul bémol : pas de cryptos acceptées."
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">AL</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-foreground">Antoine Lefèvre</h3>
                      <p className="text-sm text-muted-foreground">35 ans - Testeur depuis 7 ans</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    "Après avoir testé 50+ casinos en ligne, Lucky Trunk se distingue par sa <strong className="text-primary">politique 
                    transparente sans wager</strong>. Le catalogue de 2000+ jeux couvre tous les styles : slots Pragmatic Play, live Evolution, 
                    crash games Spribe. J'apprécie particulièrement la section bookmaker pour varier les plaisirs. Sécurité au top avec licence 
                    Curaçao et SSL militaire. Un casino honnête et généreux que je recommande sans hésiter."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <RelatedLinks 
            links={[
              { title: "Meilleurs Bonus Cashback Casino", description: "Découvrez les casinos offrant les meilleurs cashback", href: "/bonus-cashback" },
              { title: "Top Casinos Sans Wager", description: "Casinos avec bonus sans conditions de mise", href: "/bonus-sans-wager" },
              { title: "Meilleurs Bookmakers 2025", description: "Comparatif des meilleurs sites de paris sportifs", href: "/meilleurs-bookmakers" },
              { title: "Casinos avec Bonus Sans Dépôt", description: "Jouez gratuitement avec les bonus sans dépôt", href: "/" },
              { title: "Avis Complet Lucky Trunk Casino", description: "Notre test détaillé et avis d'experts", href: "/blog/avis-luckytrunk-2025" },
            ]}
          />

          {/* CTA Final */}
          <section className="text-center mt-12 glass-card rounded-2xl p-12 bg-gradient-to-br from-primary/20 to-secondary/20">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-foreground">Rejoignez Lucky Trunk Casino Dès Maintenant</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Profitez du bonus de 300% jusqu'à 1200€ <strong className="text-foreground">sans conditions de wager</strong> et retirez vos gains immédiatement
            </p>
            <a href={casino.playUrl} target="_blank" rel="sponsored noopener noreferrer">
              <Button size="lg" className="text-xl px-12 py-7 shadow-2xl hover:scale-105 transition-transform">
                Jouer sur Lucky Trunk <ExternalLink className="ml-2 h-6 w-6" />
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              <Clock className="inline-block w-4 h-4 mr-1" />
              Inscription en 2 minutes • Dépôt minimum 20€ • Retraits 24-48h
            </p>
          </section>

          <SEOEnrichedContent
            casinoName="Lucky Trunk"
            bonus="300% Sans Wager"
            wager="0"
            minDeposit="20€"
            withdrawal="24-48h"
            rating={9.4}
            reviewsCount={3200}
            slug="luckytrunk"
            competitors={["SpinStar", "Europe Fortune", "Cleobetra"]}
          />

          <RelatedLinks links={[]} />
        </div>
      </div>
      <Footer />
    </>
  );
};

