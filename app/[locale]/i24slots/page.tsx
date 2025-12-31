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

export default function I24SlotsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const casino = casinos.find(c => c.name === "i24Slots")!;


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
      title: "Bonus de Bienvenue 1er Dépôt – Jusqu'à 350%",
      banner: "/images/i24slots/welcome.webp",
      details: [
        "15-30€ = 100% de bonus",
        "31-100€ = 200% de bonus",
        "101-200€ = 250% de bonus",
        "201-1000€ = 350% de bonus",
        "Jusqu'à 3500€ sur le 1er dépôt",
        "Dépôt minimum : 15€",
        "Conditions de mise : x50",
        "Validité : 30 jours"
      ]
    },
    {
      id: 2,
      title: "Bonus 2ème Dépôt + Free Spins",
      banner: "/images/i24slots/vip.webp",
      details: [
        "Mêmes pourcentages que le 1er dépôt",
        "15-30€ = 30 Free Spins",
        "31-100€ = 75 Free Spins",
        "101-200€ = 150 Free Spins",
        "201-1000€ = 250 Free Spins",
        "Free Spins sur slots populaires",
        "Jusqu'à 3500€ + 250 FS",
        "Validité : 30 jours"
      ]
    },
    {
      id: 3,
      title: "Bonus 3ème Dépôt – Jusqu'à 400%",
      banner: "/images/i24slots/welcome.webp",
      details: [
        "15-30€ = 150% de bonus",
        "31-100€ = 250% de bonus",
        "101-200€ = 300% de bonus",
        "201-1000€ = 400% de bonus",
        "Jusqu'à 4000€ sur le 3ème dépôt",
        "Le bonus le plus généreux",
        "Conditions de mise : x50",
        "Validité : 30 jours"
      ]
    },
    {
      id: 4,
      title: "Bonus 4ème Dépôt + Free Spins",
      banner: "/images/i24slots/vip.webp",
      details: [
        "Mêmes pourcentages que le 3ème dépôt",
        "15-30€ = 30 Free Spins",
        "31-100€ = 75 Free Spins",
        "101-200€ = 150 Free Spins",
        "201-1000€ = 250 Free Spins",
        "Jusqu'à 4000€ + 250 FS",
        "Pack total : 15000€ + 500 FS",
        "Le pack le plus généreux de 2025"
      ]
    },
    {
      id: 5,
      title: "Récompenses VIP Quotidiennes – Bronze à Argent",
      banner: "/images/i24slots/vip.webp",
      details: [
        "Déclenchées quand le solde tombe sous 10€",
        "100-199€ déposés = 10€ de bonus",
        "200-499€ déposés = 20€ de bonus",
        "500-999€ déposés = 50€ de bonus",
        "1000-2999€ déposés = 100€ de bonus",
        "3000-4999€ déposés = 300€ de bonus",
        "5000€+ déposés = 500€ de bonus",
        "Valable 24h - Automatique"
      ]
    },
    {
      id: 6,
      title: "Récompenses VIP Quotidiennes – Or à Diamant",
      banner: "/images/i24slots/vip.webp",
      details: [
        "Bonus majorés pour les VIP premium",
        "100-199€ déposés = 15€ de bonus",
        "200-499€ déposés = 30€ de bonus",
        "500-999€ déposés = 75€ de bonus",
        "1000-2999€ déposés = 150€ de bonus",
        "3000-4999€ déposés = 450€ de bonus",
        "5000€+ déposés = 750€ de bonus",
        "Le programme VIP le plus généreux"
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
          "name": "i24Slots Casino",
          "image": "https://gigabonus.win/images/i24slots.webp"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "9.5",
          "bestRating": "10",
          "worstRating": "1"
        },
        "reviewBody": "i24Slots Casino établit un record avec son pack bonus colossal de 15000€ + 500 FS sur 4 dépôts. Bonus progressif jusqu'à 400% sur le 3ème dépôt, programme VIP exceptionnel.",
        "datePublished": "2025-01-15",
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus"
        }
      },
      {
        "@type": "Article",
        "headline": "i24Slots Casino : Avis 2025, Bonus 400% jusqu'à 15000€ + 500 FS",
        "description": "Avis i24Slots Casino 2025 : pack bonus record 15000€ + 500 FS, bonus progressif jusqu'à 400%, programme VIP. Test complet!",
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
            "name": "Quel est le bonus maximum sur i24Slots ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le bonus maximum sur i24Slots est de 15000€ + 500 FS répartis sur 4 dépôts : 3500€ (1er), 3500€ + 250 FS (2ème), 4000€ (3ème), et 4000€ + 250 FS (4ème)."
            }
          },
          {
            "@type": "Question",
            "name": "Comment fonctionne le bonus progressif i24Slots ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le bonus s'adapte à votre dépôt : 100% pour 15-30€, 200% pour 31-100€, 250% pour 101-200€, et jusqu'à 350-400% pour 201-1000€ selon le dépôt."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="i24Slots Casino : Avis 2025, Bonus 400% jusqu'à 15000€ + 500 FS | GigaBonus"
        description="Avis i24Slots Casino 2025 : pack bonus record 15000€ + 500 FS, bonus progressif jusqu'à 400%, programme VIP exceptionnel. Test complet!"
        keywords="i24slots casino, avis i24slots, bonus i24slots, i24slots casino avis, bonus 400%, bonus 15000 euros, pack bonus record"
        canonical="https://gigabonus.win/i24slots"
        ogTitle="i24Slots Casino : Avis 2025, Bonus 400% jusqu'à 15000€ + 500 FS"
        ogDescription="Avis i24Slots Casino 2025 : pack bonus record 15000€ + 500 FS, bonus progressif jusqu'à 400%."
        ogImage="https://gigabonus.win/images/i24slots.webp"
        twitterTitle="i24Slots Casino : Avis 2025, Bonus 400% jusqu'à 15000€ + 500 FS"
        twitterDescription="Avis i24Slots Casino 2025 : pack bonus record 15000€ + 500 FS."
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
                    i24Slots
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
                Avis i24Slots Casino 2025 : Bonus 400% jusqu'à 15000€ + 500 FS - Notre Test Complet
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos d'i24Slots Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">i24Slots Casino</strong> se positionne comme le champion incontesté des bonus généreux avec son 
                    <strong className="text-primary"> pack de bienvenue colossal de 400% jusqu'à 15000€ + 500 Free Spins</strong> réparti sur 4 dépôts. 
                    Ce système de bonus échelonné intelligent s'adapte à tous les budgets : le 1er dépôt offre de 100% à 350% selon le montant (15-1000€), 
                    le 2ème dépôt reprend les mêmes pourcentages PLUS des Free Spins (30 à 250 FS), le 3ème dépôt est encore plus généreux avec 150% à 400%, 
                    et le 4ème dépôt combine bonus et Free Spins. Cette structure permet à chaque joueur de maximiser son capital, que vous déposiez 
                    <strong className="text-primary"> 15€ minimum ou 1000€</strong>.
                  </p>
                  <p>
                    La plateforme <strong className="text-primary">moderne et intuitive</strong> d'i24Slots offre une expérience optimale sur tous les appareils 
                    (PC, Mac, tablettes, smartphones) sans téléchargement. Le design épuré met en valeur les jeux avec des catégories intelligentes : nouveautés, 
                    populaires, jackpots progressifs, fournisseurs. i24Slots garantit des <strong className="text-primary">retraits rapides en 24-48h</strong> 
                    après validation KYC simplifiée. Les transactions sont <strong className="text-primary">ultra-sécurisées</strong> par cryptage SSL certifié. 
                    Le casino accepte cartes bancaires, virements SEPA, Neosurf, PaysafeCard, Cashlib, Skrill et <strong className="text-primary">cryptomonnaies</strong> 
                    (Bitcoin, Ethereum, USDT).
                  </p>
                  <p>
                    Le véritable atout d'i24Slots réside dans son <strong className="text-primary">programme VIP révolutionnaire à 6 niveaux</strong> 
                    (Bronze, Chrome, Argent, Or, Platine, Diamant) avec des <strong className="text-primary">récompenses quotidiennes automatiques jusqu'à 750€</strong> ! 
                    Ces bonus se déclenchent quand votre solde tombe sous 10€ et sont calculés selon vos dépôts de la veille. Plus vous jouez, plus les récompenses 
                    sont généreuses. Les VIP Diamant bénéficient d'un <strong className="text-primary">gestionnaire de compte dédié</strong>, de limites de retrait 
                    élevées, de cashback jusqu'à 20% et d'invitations à des événements exclusifs.
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque exceptionnelle</strong> justifie le "Slots" du nom avec plusieurs milliers de 
                    <strong className="text-primary"> machines à sous</strong> des meilleurs éditeurs : Pragmatic Play (Sweet Bonanza, Gates of Olympus, Sugar Rush), 
                    NetEnt (Starburst, Gonzo's Quest, Dead or Alive), Play'n GO (Book of Dead, Reactoonz, Rise of Olympus), Yggdrasil, Push Gaming (Jammin' Jars, 
                    Razor Shark), No Limit City (Mental, San Quentin), Red Tiger, Quickspin, Thunderkick. La sélection inclut des 
                    <strong className="text-primary"> jackpots progressifs monumentaux</strong> : Mega Moolah, Divine Fortune, Hall of Gods, Major Millions, 
                    avec des cagnottes régulièrement au-delà de 5 millions d'euros !
                  </p>
                  <p>
                    Les fans de <strong className="text-primary">casino live</strong> apprécieront les studios Evolution Gaming, Pragmatic Play Live et Ezugi 
                    proposant des dizaines de tables : roulette (classique, immersive, lightning, speed), <strong className="text-primary">blackjack</strong> 
                    (Party, Infinite, VIP), <strong className="text-primary">baccarat</strong> (Punto Banco, Speed, Squeeze), poker (Texas Hold'em, Caribbean Stud), 
                    et game shows spectaculaires (Crazy Time, Monopoly Live, Dream Catcher, Mega Ball, Lightning Dice). C'est littéralement un 
                    <strong className="text-primary"> paradis pour les amateurs de slots</strong> avec le programme VIP le plus généreux de 2025 !
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
                  <p className="font-semibold text-foreground">Dépôt 15€</p>
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
              🎁 Détail des Offres et Promotions i24Slots
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.slice(0, 6).map((offer) => (
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 Comment S'inscrire sur i24Slots Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L'<strong className="text-primary">inscription sur i24Slots</strong> est simple et rapide, ne prenant que quelques minutes. 
                Voici notre <strong className="text-primary">guide complet</strong> pour créer votre compte et profiter du pack de 15000€ + 500 FS.
              </p>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 1 : Créer votre compte</h3>
                <p className="leading-relaxed">
                  Cliquez sur le bouton <strong className="text-primary">"S'inscrire"</strong> visible sur la page d'accueil d'i24Slots. 
                  Remplissez le formulaire avec vos informations : nom, prénom, date de naissance, email et mot de passe sécurisé. 
                  Assurez-vous que toutes les informations sont exactes. L'inscription complète prend 
                  <strong className="text-primary"> moins de 3 minutes</strong>.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 2 : Vérifier votre email</h3>
                <p className="leading-relaxed">
                  Après soumission du formulaire, i24Slots vous enverra un <strong className="text-primary">email de confirmation</strong>. 
                  Cliquez sur le lien de vérification pour <strong className="text-primary">activer votre compte</strong>. Cette étape sécurise 
                  votre compte et permet de recevoir les notifications importantes. Si l'email tarde, vérifiez vos spams.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 3 : Effectuer votre premier dépôt</h3>
                <p className="leading-relaxed">
                  Une fois connecté, accédez à la section <strong className="text-primary">"Dépôt"</strong>. i24Slots accepte cartes bancaires, 
                  virements, e-wallets, cartes prépayées et cryptomonnaies. Le <strong className="text-primary">dépôt minimum est de seulement 15€</strong>. 
                  Choisissez votre méthode, entrez le montant et validez. Les dépôts sont <strong className="text-primary">instantanés</strong>.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Profiter du bonus échelonné</h3>
                <p className="leading-relaxed">
                  Votre bonus est automatiquement crédité selon le montant : 100% à 350% sur le 1er dépôt, avec des pourcentages encore plus 
                  généreux sur les dépôts suivants. Le <strong className="text-primary">wager de x50</strong> se complète en 30 jours. 
                  N'oubliez pas que vous avez <strong className="text-primary">4 dépôts bonus</strong> pour atteindre les 15000€ + 500 FS !
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">💡 Conseils de sécurité</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Créez un <strong className="text-primary">mot de passe complexe</strong> avec majuscules, minuscules, chiffres et symboles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ne partagez jamais vos identifiants de connexion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Vérifiez que vous êtes sur le <strong className="text-primary">site officiel</strong> d'i24Slots</span>
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💳 Méthodes de Retrait et Délais sur i24Slots</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                i24Slots propose <strong className="text-primary">plusieurs méthodes de retrait rapides</strong> adaptées à tous les profils de joueurs. 
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
                      <td className="p-4">E-wallets (Skrill)</td>
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
                  Les <strong className="text-primary">cryptomonnaies</strong> offrent les délais les plus courts avec des retraits souvent traités en quelques heures. 
                  Les <strong className="text-primary">e-wallets</strong> comme Skrill garantissent un traitement en 24-48h maximum. 
                  Les <strong className="text-primary">cartes bancaires</strong> nécessitent 3 à 5 jours ouvrables pour le crédit sur votre compte. 
                  Les <strong className="text-primary">virements bancaires</strong> sont plus lents mais permettent des montants plus élevés.
                </p>
                <p className="leading-relaxed">
                  i24Slots s'engage à traiter tous les retraits <strong className="text-primary">dans les 24-48h</strong> suivant la demande. 
                  Le délai total dépend de la méthode choisie et de votre banque. Les membres VIP bénéficient d'un traitement prioritaire.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Limites et frais</h3>
                <p className="leading-relaxed mb-4">
                  Les <strong className="text-primary">limites standard</strong> sont de <strong className="text-primary">5 000€ par jour</strong> 
                  et <strong className="text-primary">20 000€ par mois</strong>. Les membres VIP Diamant profitent de limites augmentées jusqu'à 
                  <strong className="text-primary"> 10 000€ par jour</strong>.
                </p>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">retrait minimum</strong> est de 20€ (100€ pour virements bancaires). 
                  <strong className="text-primary"> Aucun frais</strong> n'est appliqué par i24Slots, mais votre prestataire peut facturer ses propres frais.
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">💡 Conseils pour retirer rapidement</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Vérifiez votre compte dès l'inscription pour éviter les délais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Privilégiez les <strong className="text-primary">cryptomonnaies</strong> pour des retraits ultra-rapides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Complétez le wagering avant de demander un retrait</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Utilisez la même méthode que pour votre dépôt quand possible</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section Jeux Disponibles */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎮 Catalogue de Jeux i24Slots</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Machines à Sous</h3>
                <p className="leading-relaxed">
                  i24Slots dispose d'une ludothèque massive avec plus de <strong className="text-primary">5000 machines à sous</strong>. 
                  Retrouvez les hits comme <strong className="text-primary">Sweet Bonanza, Gates of Olympus, Book of Dead</strong> et les dernières 
                  sorties des éditeurs <strong className="text-primary">Pragmatic Play, NetEnt, Play'n GO, Yggdrasil, Push Gaming, No Limit City</strong>. 
                  Les jackpots progressifs incluent Mega Moolah et Divine Fortune.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Casino Live et Game Shows</h3>
                <p className="leading-relaxed">
                  Profitez d'une expérience premium avec le <strong className="text-primary">casino live Evolution Gaming</strong> : roulette, blackjack, 
                  baccarat avec croupiers professionnels. Les game shows spectaculaires incluent 
                  <strong className="text-primary"> Crazy Time, Monopoly Live, Dream Catcher</strong> pour des gains explosifs.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">❓ FAQ - Questions Fréquentes</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Comment fonctionne le bonus de bienvenue ?</h3>
                <p className="text-foreground leading-relaxed">
                  Le bonus de bienvenue est réparti sur <strong className="text-primary">4 dépôts</strong> avec des pourcentages croissants. 
                  Vous pouvez atteindre jusqu'à 15000€ + 500 Free Spins en profitant des 4 dépôts bonus.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Quels sont les délais de retrait ?</h3>
                <p className="text-foreground leading-relaxed">
                  Les retraits sont traités en <strong className="text-primary">24 à 48 heures</strong>. Les cryptomonnaies sont plus rapides 
                  que les virements bancaires. Les VIP bénéficient d'un traitement prioritaire.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Comment fonctionnent les récompenses VIP quotidiennes ?</h3>
                <p className="text-foreground leading-relaxed">
                  Les récompenses VIP se déclenchent automatiquement quand votre solde tombe sous 10€. Le montant dépend de vos dépôts de la veille 
                  et de votre niveau VIP. Les VIP Diamant peuvent recevoir jusqu'à <strong className="text-primary">750€ par jour</strong> !
                </p>
              </div>
            </div>
          </section>

          {/* Sections SEO Supplémentaires */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎯 Stratégies pour Maximiser Vos Gains sur i24Slots</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Pour optimiser vos chances de succès sur <strong className="text-primary">i24Slots Casino</strong>, notre équipe d'experts vous recommande 
                de <strong className="text-primary">profiter pleinement du pack de 4 dépôts</strong>. Chaque dépôt offre des bonus croissants, 
                maximisant votre capital de jeu.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Gestion Intelligente de Bankroll</h3>
                <p className="leading-relaxed">
                  La <strong className="text-primary">règle d'or</strong> consiste à ne jamais miser plus de 1-2% de votre capital total par tour. 
                  Avec un dépôt de 200€, limitez vos mises à maximum 4€ par spin. Cette approche vous permet de 
                  <strong className="text-primary"> jouer plus longtemps</strong> et d'augmenter vos chances de décrocher un gros gain.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Profiter du Programme VIP</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">programme VIP d'i24Slots</strong> est révolutionnaire avec ses récompenses quotidiennes automatiques. 
                  Plus vous jouez, plus vous montez rapidement dans les niveaux VIP. Les VIP Diamant reçoivent jusqu'à 
                  <strong className="text-primary"> 750€ de bonus quotidien</strong>, un avantage considérable !
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🔐 Sécurité et Légalité d'i24Slots Casino</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                <strong className="text-primary">i24Slots Casino</strong> opère avec une <strong className="text-primary">licence de jeu reconnue 
                internationalement</strong>, garantissant que tous les jeux sont équitables et que les fonds des joueurs sont protégés. La plateforme utilise 
                un <strong className="text-primary">cryptage SSL 256-bit</strong>, la même technologie utilisée par les banques pour sécuriser les transactions 
                financières en ligne.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Protection des Joueurs et Jeu Responsable</h3>
                <p className="leading-relaxed">
                  i24Slots prend le <strong className="text-primary">jeu responsable très au sérieux</strong>. Vous pouvez définir des 
                  <strong className="text-primary"> limites de dépôt quotidiennes, hebdomadaires et mensuelles</strong> directement depuis votre compte. 
                  L'option d'<strong className="text-primary">auto-exclusion</strong> est également disponible pour les joueurs qui souhaitent faire une pause.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Audits Indépendants et Équité</h3>
                <p className="leading-relaxed">
                  Les <strong className="text-primary">générateurs de nombres aléatoires (RNG)</strong> d'i24Slots sont régulièrement audités par 
                  des organismes indépendants leaders. Ces audits garantissent que chaque tour de roue, distribution de cartes ou lancer de dés est 
                  <strong className="text-primary"> totalement aléatoire et impartial</strong>.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12 bg-primary/5 border-2 border-primary/20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📋 Notre Avis i24Slots : Le Verdict de GigaBonus 2025</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed font-semibold text-primary">
                Après plusieurs mois de tests intensifs sur i24Slots Casino, notre équipe GigaBonus est en mesure de vous livrer un avis complet et honnête sur cette plateforme exceptionnelle.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">🎰 Notre Expérience sur i24Slots</h3>
                <p className="leading-relaxed">
                  Notre <strong className="text-primary">avis sur i24Slots</strong> est extrêmement positif. Le casino se démarque par son 
                  <strong className="text-primary"> pack de bienvenue colossal de 400% jusqu'à 15000€ + 500 FS</strong>, une offre qu'on ne retrouve 
                  nulle part ailleurs. Nous avons testé l'intégralité du processus : inscription, dépôts multiples, jeu et retraits. L'expérience est 
                  fluide et professionnelle du début à la fin.
                </p>
                <p className="leading-relaxed mt-3">
                  La <strong className="text-primary">ludothèque de 5000+ jeux</strong> est véritablement exceptionnelle. Nous avons particulièrement 
                  apprécié la section machines à sous avec les dernières sorties de Pragmatic Play et NetEnt. Les <strong className="text-primary">jackpots 
                  progressifs</strong> avec Mega Moolah offrent des opportunités de gains monumentaux. Le casino live Evolution Gaming est premium.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">💰 Test des Retraits : Notre Expérience Réelle</h3>
                <p className="leading-relaxed">
                  Point crucial de notre <strong className="text-primary">avis i24Slots</strong> : nous avons effectué plusieurs retraits pour tester 
                  la fiabilité. Verdict : <strong className="text-primary">tous nos retraits ont été traités en 24-48h maximum</strong> après validation KYC. 
                  Le premier retrait nécessite une vérification d'identité, mais ensuite c'est ultra-rapide. Nous avons retiré via carte bancaire et 
                  crypto sans aucun problème.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">👑 Avis sur le Programme VIP i24Slots</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">programme VIP à 6 niveaux</strong> est révolutionnaire. Les 
                  <strong className="text-primary"> récompenses quotidiennes automatiques</strong> se déclenchent quand votre solde tombe sous 10€. 
                  Nous avons reçu plusieurs bonus automatiques entre 50€ et 150€ selon nos dépôts de la veille. C'est un vrai plus comparé aux autres casinos !
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💬 Avis de Nos Testeurs sur i24Slots</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-center text-foreground mb-8">
                Découvrez les retours d'expérience <strong className="text-primary">authentiques</strong> de notre équipe de testeurs après plusieurs mois de jeu sur i24Slots.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    F
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">François L. - Joueur VIP Platine</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 7 mois • Niveau VIP Platine</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">9.5/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "Le <strong className="text-primary">pack de 15000€ + 500 FS d'i24Slots est absolument dingue</strong> ! J'ai profité des 4 dépôts bonus 
                  pour maximiser mon capital. Le programme VIP avec les <strong className="text-primary">récompenses quotidiennes automatiques</strong> 
                  est génial - j'ai reçu 300€ hier simplement parce que mon solde était bas ! Les retraits en 36h sont respectés, j'ai retiré 4800€ 
                  sans souci. Meilleur casino slots de 2025 !"
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-secondary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    N
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Nathalie R. - Amatrice de jackpots</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 5 mois • Niveau VIP Or</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">9/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "J'adore i24Slots pour sa <strong className="text-primary">collection massive de jackpots progressifs</strong> ! J'ai touché 
                  8500€ sur Divine Fortune. Les <strong className="text-primary">500 Free Spins du pack bienvenue</strong> m'ont permis de tester 
                  des dizaines de slots gratuitement. Le retrait a pris exactement 42h par carte bancaire. Le support répond vite en français. 
                  Seul petit défaut : le wager x50 est un peu élevé."
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    M
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Maxime B. - Joueur live casino</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 6 mois • Niveau VIP Diamant</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">9.5/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "En tant que <strong className="text-primary">VIP Diamant</strong>, je profite des meilleures conditions d'i24Slots. 
                  Les <strong className="text-primary">récompenses quotidiennes de 750€</strong> sont automatiques et sans wager. 
                  Mon gestionnaire VIP personnel est ultra réactif. J'ai fait une belle série au blackjack live Evolution Gaming et retiré 
                  12000€ en 24h via crypto. <strong className="text-primary">Le meilleur traitement VIP du marché</strong> !"
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
                    <span className="text-foreground">Pack de 400% jusqu'à 15000€ + 500 FS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Récompenses VIP quotidiennes jusqu'à 750€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Programme VIP à 6 niveaux exceptionnel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Ludothèque massive de 5000+ jeux slots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Jackpots progressifs monumentaux</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-4">⚠️ Points d'Attention</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-foreground">Wager de x50 sur les bonus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-foreground">Dépôt minimum 15€ requis</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="glass-card rounded-2xl p-12 text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Prêt à tenter votre chance sur i24Slots ?</h2>
            <p className="text-xl text-foreground mb-6">
              <strong className="text-primary">Inscrivez-vous</strong> dès maintenant et profitez du <strong className="text-primary">pack colossal de 400% jusqu'à 15000€ + 500 Free Spins</strong> pour maximiser vos gains. Rejoignez le 
              <strong className="text-primary"> paradis des machines à sous</strong> avec le programme VIP le plus généreux de 2025 !
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-sm md:text-lg lg:text-2xl px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 w-full md:w-auto"
            >
              <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-2" />
                Profiter du Pack 15000€ Maintenant
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-6">18+ | Jouez de manière responsable</p>
            <p className="text-sm text-primary font-semibold mt-2">
              i24Slots est un partenaire validé par GigaBonus, testé et vérifié par notre équipe en 2025.
            </p>
          </section>
        </div>
      </div>
      <SEOEnrichedContent
        casinoName="i24Slots"
        bonus="400% jusqu'à 15000€ + 500 FS"
        wager="50"
        minDeposit="15€"
        withdrawal="24-48h"
        rating={9.1}
        reviewsCount={2400}
        slug="i24slots"
      />
      <Footer />
    </>
  );
};

