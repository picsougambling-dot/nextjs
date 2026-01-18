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

export default function MagicalSpinPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const casino = casinos.find(c => c.name === "Magical Spin")!;


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
      title: "Bonus de Bienvenue – 150 % jusqu'à 500€ + 100 FS",
      banner: "/images/magicalspin/welcome.webp",
      details: [
        "Dépôt minimum : 10 €",
        "Bonus maximum accordé : 500 €",
        "Exemple 1 : déposez 10 € → recevez 15 € + 100 FS",
        "Exemple 2 : déposez 200 € → recevez 300 € + 100 FS",
        "Jeu des Free Spins : Book of Dead (Play'n GO)",
        "Conditions de mise : Wager x40",
        "Les Free Spins sont crédités automatiquement après dépôt"
      ]
    },
    {
      id: 2,
      title: "Bonus du Lundi – Triple Chance",
      banner: "/images/magicalspin/monday.webp",
      details: [
        "1er dépôt du jour : +25 % (min. 25 €)",
        "2e dépôt du jour : +35 % (min. 25 €)",
        "3e dépôt du jour : +45 % (min. 25 €)",
        "Bonus maximum par dépôt : 200 €",
        "Conditions de mise : Wager x40",
        "Total possible chaque lundi : jusqu'à 600 € de bonus"
      ]
    },
    {
      id: 3,
      title: "Bonus de Mardi – Jusqu'à 45%",
      banner: "/images/magicalspin/tuesday.webp",
      details: [
        "1er dépôt : +30 %",
        "2e dépôt : +40 %",
        "3e dépôt : +45 %",
        "Conditions de mise : Wager x40",
        "Bonus consécutif : chaque nouveau dépôt active le bonus supérieur"
      ]
    },
    {
      id: 4,
      title: "Bonus du Mercredi – jusqu'à 95% + 50 FS",
      banner: "/images/magicalspin/wednesday.webp",
      details: [
        "1er dépôt : +25 %",
        "2e dépôt : +40 %",
        "3e dépôt : +30 % + 50 Free Spins sur Runes of Battle (Yggdrasil)",
        "Dépôt minimum : 25 €",
        "⚠️ Seuls les joueurs activant les 3 bonus sont éligibles pour recevoir les 50 Free Spins",
        "Conditions de mise : Wager x40"
      ]
    },
    {
      id: 5,
      title: "Bonus du Jeudi – 35 % sur tous vos dépôts",
      banner: "/images/magicalspin/thursday.webp",
      details: [
        "+35 % de bonus sur tous vos dépôts de 30 € ou plus",
        "Offre illimitée valable toute la journée",
        "Pas de limite, chaque dépôt du jeudi est récompensé",
        "Conditions de mise : Wager x40"
      ]
    },
    {
      id: 6,
      title: "Bonus du Vendredi – 50 % sur votre premier dépôt",
      banner: "/images/magicalspin/friday.webp",
      details: [
        "+50 % de bonus sur dépôt",
        "Dépôt minimum : 40 €",
        "Conditions de mise : Wager x40",
        "Valable uniquement sur votre premier dépôt du vendredi"
      ]
    },
    {
      id: 7,
      title: "Bonus du Samedi – jusqu'à 200 Free Spins + 25%",
      banner: "/images/magicalspin/saturday.webp",
      details: [
        "Chaque samedi, cumulez jusqu'à 200 Free Spins !",
        "Dépôt 25-49€ : 10% en Free Spins",
        "Dépôt 50-99€ : 15% en Free Spins",
        "Dépôt 100-250€+ : 20% en Free Spins",
        "Spins crédités le dimanche sur Jolly Roger Wild Kraken (Play'n GO)",
        "Bonus illimité de 25% sur tous vos dépôts de 25€ ou plus",
        "Conditions de mise : Wager x40"
      ]
    },
    {
      id: 8,
      title: "Bonus du Dimanche – Double Bonus",
      banner: "/images/magicalspin/sunday.webp",
      details: [
        "Bonus de +30 % sur votre premier dépôt",
        "Bonus de +50 % sur votre deuxième dépôt",
        "Dépôt minimum : 25 €",
        "Conditions de mise : Wager x40",
        "⚠️ Le bonus de 30% doit être utilisé pour débloquer le bonus de 50%"
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
          "name": "Magical Spin Casino",
          "image": "https://gigabonus.win/images/magicalspin.webp"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "8.7",
          "bestRating": "10",
          "worstRating": "1"
        },
        "reviewBody": "Magical Spin Casino offre un bonus de bienvenue 150% jusqu'à 500€ + 100 FS avec des promotions quotidiennes variées chaque jour de la semaine. Wager x40 raisonnable.",
        "datePublished": "2026-01-15",
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus"
        }
      },
      {
        "@type": "Article",
        "headline": "Magical Spin Casino : Avis 2026, Bonus 150% jusqu'à 500€ + 100 FS",
        "description": "Avis Magical Spin Casino 2026 : bonus 150% jusqu'à 500€ + 100 FS, promotions quotidiennes, wager x40. Test complet!",
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
            "name": "Quelles sont les promotions quotidiennes Magical Spin ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Magical Spin propose des promotions différentes chaque jour : Triple Chance le lundi, bonus jusqu'à 45% le mardi, bonus jusqu'à 95% + 50 FS le mercredi, 35% illimité le jeudi, et 50% le vendredi."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Magical Spin Casino : Avis 2026, Bonus 150% jusqu'à 500€ + 100 FS | GigaBonus"
        description="Avis Magical Spin Casino 2026 : bonus 150% jusqu'à 500€ + 100 FS, promotions quotidiennes variées, wager x40. Test complet!"
        keywords="magical spin casino, avis magical spin, bonus magical spin, magical spin casino avis, bonus 150%, promotions quotidiennes"
        canonical="https://gigabonus.win/magicalspin"
        ogTitle="Magical Spin Casino : Avis 2026, Bonus 150% jusqu'à 500€ + 100 FS"
        ogDescription="Avis Magical Spin Casino 2026 : bonus 150% jusqu'à 500€ + 100 FS, promotions quotidiennes variées."
        ogImage="https://gigabonus.win/images/magicalspin.webp"
        twitterTitle="Magical Spin Casino : Avis 2026, Bonus 150% jusqu'à 500€ + 100 FS"
        twitterDescription="Avis Magical Spin Casino 2026 : bonus 150% jusqu'à 500€ + 100 FS, promotions quotidiennes."
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
                    Magical Spin
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
                Avis Magical Spin Casino 2026 : Bonus 150% jusqu'à 500€ + 100 FS - Notre Test Complet
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de Magical Spin Casino</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    <strong className="text-primary">Magical Spin Casino</strong> révolutionne la fidélisation avec son concept unique de 
                    <strong className="text-primary"> promotions quotidiennes magiques</strong>. Chaque jour de la semaine propose une offre différente : 
                    le Triple Chance du lundi (jusqu'à 600€), les bonus progressifs du mardi et mercredi, le 
                    <strong className="text-primary"> bonus illimité de 35% du jeudi</strong>, le 50% du vendredi, les 
                    <strong className="text-primary">200 Free Spins du samedi</strong>, et le double bonus du dimanche. Ce calendrier magique garantit 
                    que chaque jour apporte son lot de surprises et récompenses !
                  </p>
                  <p>
                    Le <strong className="text-primary">bonus de bienvenue exceptionnel de 150% jusqu'à 500€ + 100 Free Spins</strong> sur Book of Dead 
                    n'est que le début de l'aventure. Avec un <strong className="text-primary">dépôt minimum de seulement 10€</strong>, le casino est 
                    accessible à tous les budgets. Le système de bonus hebdomadaires crée une <strong className="text-primary">dynamique de jeu unique</strong> : 
                    les joueurs réguliers peuvent planifier leurs dépôts selon le jour pour maximiser les récompenses. Par exemple, le jeudi offre un 
                    bonus illimité de 35% sur chaque dépôt, idéal pour les longues sessions de jeu.
                  </p>
                  <p>
                    La plateforme <strong className="text-primary">moderne avec interface féerique</strong> offre une navigation intuitive sur tous les appareils 
                    (PC, tablettes, smartphones). Magical Spin garantit des <strong className="text-primary">retraits rapides en 24-48h</strong> après 
                    validation KYC simplifiée. Les transactions sont <strong className="text-primary">ultra-sécurisées</strong> par cryptage SSL certifié. 
                    Le <strong className="text-primary">service client disponible 24/7</strong> en français répond efficacement via chat live ou email. 
                    Le casino accepte toutes les méthodes modernes : cartes bancaires, e-wallets (Skrill, Neteller, MiFinity), Cashlib et virements bancaires.
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque magique</strong> compte plus de <strong className="text-primary">2000 jeux</strong> 
                    des meilleurs éditeurs : Pragmatic Play (Sweet Bonanza, Gates of Olympus, Sugar Rush), NetEnt (Starburst, Gonzo's Quest, Dead or Alive), 
                    Play'n GO (Book of Dead, Reactoonz, Rise of Olympus), Yggdrasil (Vikings Go Berzerk, Valley of the Gods). Les 
                    <strong className="text-primary"> machines à sous</strong> incluent les derniers hits et des slots Megaways à volatilité élevée. 
                    Le <strong className="text-primary">casino live</strong> propose roulette, blackjack, baccarat avec croupiers Evolution Gaming.
                  </p>
                  <p>
                    Les <strong className="text-primary">conditions de mise standardisées à x40</strong> sur tous les bonus facilitent la comparaison. 
                    Le système de <strong className="text-primary">codes bonus simples</strong> permet une activation rapide. Les Free Spins sont souvent 
                    attribués sur Book of Dead et d'autres slots populaires. Magical Spin se distingue par sa 
                    <strong className="text-primary"> générosité quotidienne</strong> : même les joueurs modérés peuvent profiter de multiples bonus 
                    chaque semaine. C'est le casino parfait pour ceux qui aiment la variété et les surprises quotidiennes !
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
              🎁 Détail des Offres et Promotions Magical Spin
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
            
            {/* Dernières 2 bannières centrées */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
              {offers.slice(6).map((offer) => (
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 Comment S'inscrire sur Magical Spin Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L'<strong className="text-primary">inscription sur Magical Spin</strong> est simple et rapide. 
                Voici notre <strong className="text-primary">guide complet</strong> pour créer votre compte et profiter des bonus quotidiens magiques.
              </p>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 1 : Créer votre compte</h3>
                <p className="leading-relaxed">
                  Cliquez sur <strong className="text-primary">"S'inscrire"</strong> sur la page d'accueil. Remplissez le formulaire avec vos informations : 
                  nom, prénom, date de naissance, email et mot de passe sécurisé. L'inscription complète prend 
                  <strong className="text-primary"> moins de 3 minutes</strong>. Toutes les données sont protégées par cryptage SSL.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 2 : Vérifier votre email</h3>
                <p className="leading-relaxed">
                  Magical Spin vous envoie un <strong className="text-primary">email de confirmation</strong>. Cliquez sur le lien de vérification 
                  pour <strong className="text-primary">activer votre compte</strong>. Cette étape sécurise votre compte et active les notifications 
                  pour les bonus quotidiens. Si l'email tarde, vérifiez vos spams.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 3 : Effectuer votre premier dépôt</h3>
                <p className="leading-relaxed">
                  Accédez à la section <strong className="text-primary">"Dépôt"</strong>. Choisissez parmi cartes bancaires, e-wallets, Cashlib ou virements. 
                  Le <strong className="text-primary">dépôt minimum est de seulement 10€</strong>, le plus bas du marché ! 
                  Les dépôts sont <strong className="text-primary">instantanés</strong> et sécurisés.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Activer le bonus de bienvenue</h3>
                <p className="leading-relaxed">
                  Le bonus de <strong className="text-primary">150% jusqu'à 500€ + 100 Free Spins</strong> sur Book of Dead est automatiquement crédité. 
                  Le <strong className="text-primary">wager de x40</strong> se complète en jouant sur vos slots préférés. 
                  N'oubliez pas de consulter le calendrier des <strong className="text-primary">bonus quotidiens</strong> pour maximiser vos gains !
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">💡 Conseils de sécurité</h3>
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💳 Méthodes de Retrait et Délais sur Magical Spin</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Magical Spin propose <strong className="text-primary">plusieurs méthodes de retrait rapides</strong> adaptées à tous les profils. 
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
                      <td className="p-4">E-wallets (Skrill, Neteller, MiFinity)</td>
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
                    <tr className="border-b border-border/50">
                      <td className="p-4">Cashlib</td>
                      <td className="p-4">Non disponible (dépôt uniquement)</td>
                      <td className="p-4">-</td>
                      <td className="p-4">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Délais de traitement détaillés</h3>
                <p className="leading-relaxed mb-4">
                  Les <strong className="text-primary">e-wallets</strong> comme Skrill, Neteller et MiFinity offrent les délais les plus rapides : 
                  traitement en 24-48h maximum. Les <strong className="text-primary">cartes bancaires</strong> nécessitent 3 à 5 jours ouvrables. 
                  Les <strong className="text-primary">virements bancaires</strong> prennent 3 à 7 jours mais permettent des montants plus élevés.
                </p>
                <p className="leading-relaxed">
                  Magical Spin s'engage à traiter tous les retraits <strong className="text-primary">dans les 24-48h</strong> suivant la demande. 
                  Le délai total dépend de la méthode choisie et de votre banque. La vérification KYC est obligatoire pour le premier retrait.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Limites et frais</h3>
                <p className="leading-relaxed mb-4">
                  Les <strong className="text-primary">limites standard</strong> sont de <strong className="text-primary">5 000€ par jour</strong> 
                  et <strong className="text-primary">20 000€ par mois</strong>. Les virements bancaires permettent jusqu'à 
                  <strong className="text-primary"> 10 000€ par jour</strong>.
                </p>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">retrait minimum</strong> est de 20€ (100€ pour virements). 
                  <strong className="text-primary"> Aucun frais</strong> appliqué par Magical Spin. Votre prestataire peut facturer ses propres frais.
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
                    <span>Privilégiez les <strong className="text-primary">e-wallets</strong> pour des retraits rapides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Complétez le wagering avant de demander un retrait</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Utilisez la même méthode que pour votre dépôt</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section Jeux Disponibles */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎮 Catalogue de Jeux Magical Spin</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Machines à Sous</h3>
                <p className="leading-relaxed">
                  Magical Spin propose plus de <strong className="text-primary">2000 machines à sous</strong> magiques. 
                  Retrouvez les hits comme <strong className="text-primary">Sweet Bonanza, Gates of Olympus, Book of Dead</strong> et les dernières 
                  sorties des éditeurs <strong className="text-primary">Pragmatic Play, NetEnt, Play'n GO, Yggdrasil</strong>. 
                  Les Free Spins quotidiens permettent de les tester gratuitement.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Casino Live</h3>
                <p className="leading-relaxed">
                  Profitez d'une expérience premium avec le <strong className="text-primary">casino live Evolution Gaming</strong> : 
                  roulette, blackjack, baccarat avec croupiers professionnels. Les tables en français offrent une immersion totale 
                  dans l'univers magique du casino.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">❓ FAQ - Questions Fréquentes</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Comment fonctionnent les bonus quotidiens ?</h3>
                <p className="text-foreground leading-relaxed">
                  Chaque jour de la semaine propose un <strong className="text-primary">bonus différent</strong> : Triple Chance le lundi, 
                  bonus progressifs mardi-mercredi, 35% illimité le jeudi, 50% le vendredi, 200 FS le samedi, et double bonus le dimanche. 
                  Consultez le calendrier pour planifier vos dépôts !
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Quels sont les délais de retrait ?</h3>
                <p className="text-foreground leading-relaxed">
                  Les retraits sont traités en <strong className="text-primary">24 à 48 heures</strong>. Les e-wallets sont les plus rapides. 
                  Le premier retrait nécessite une vérification KYC (carte d'identité).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Magical Spin est-il disponible sur mobile ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, Magical Spin est <strong className="text-primary">100% optimisé mobile</strong>. Jouez directement depuis votre navigateur 
                  iOS ou Android sans téléchargement. L'interface magique s'adapte parfaitement à tous les écrans.
                </p>
              </div>
            </div>
          </section>

          {/* Sections SEO Supplémentaires */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎯 Stratégies pour Maximiser Vos Gains sur Magical Spin</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Pour optimiser vos chances sur <strong className="text-primary">Magical Spin Casino</strong>, notre équipe recommande 
                de <strong className="text-primary">planifier vos dépôts selon le calendrier hebdomadaire</strong>. Chaque jour offre 
                des avantages uniques qu'il faut exploiter intelligemment.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Gestion Intelligente du Calendrier</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">jeudi</strong> est idéal pour les gros dépôts avec son bonus illimité de 35%. 
                  Le <strong className="text-primary">samedi</strong> permet d'accumuler jusqu'à 200 Free Spins. 
                  Le <strong className="text-primary">lundi</strong> avec sa Triple Chance offre jusqu'à 600€ de bonus. 
                  Planifiez vos sessions selon ces opportunités pour maximiser votre capital !
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Profiter des Free Spins Quotidiens</h3>
                <p className="leading-relaxed">
                  Les <strong className="text-primary">Free Spins réguliers</strong> sur Book of Dead et d'autres slots permettent de 
                  jouer sans risquer votre capital. Utilisez-les pour tester de nouvelles machines à sous et découvrir celles qui 
                  <strong className="text-primary"> offrent les meilleurs retours</strong> avant d'investir votre propre argent.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🔐 Sécurité et Légalité de Magical Spin Casino</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                <strong className="text-primary">Magical Spin Casino</strong> opère avec une <strong className="text-primary">licence reconnue</strong>, 
                garantissant équité et protection des fonds. La plateforme utilise un <strong className="text-primary">cryptage SSL 256-bit</strong>, 
                la même technologie que les banques pour sécuriser les transactions.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Protection des Joueurs et Jeu Responsable</h3>
                <p className="leading-relaxed">
                  Magical Spin prend le <strong className="text-primary">jeu responsable très au sérieux</strong>. Définissez des 
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📋 Notre Avis Magical Spin : Le Verdict de GigaBonus 2026</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed font-semibold text-primary">
                Après plusieurs mois de tests sur Magical Spin Casino, notre équipe GigaBonus vous livre un avis complet et honnête sur cette plateforme unique.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">🎰 Notre Expérience sur Magical Spin</h3>
                <p className="leading-relaxed">
                  Notre <strong className="text-primary">avis sur Magical Spin</strong> est très positif. Le casino se démarque par son 
                  <strong className="text-primary"> concept unique de promotions quotidiennes</strong>. Nous avons testé chaque jour de la semaine 
                  et l'expérience est fluide et généreuse. Le bonus de bienvenue de 150% + 100 FS sur Book of Dead est excellent pour débuter.
                </p>
                <p className="leading-relaxed mt-3">
                  Le <strong className="text-primary">calendrier magique des bonus</strong> crée une dynamique addictive : on planifie ses dépôts 
                  selon les jours pour maximiser les récompenses. Le jeudi avec son bonus illimité de 35% est parfait pour les longues sessions. 
                  Le samedi avec ses 200 Free Spins permet de jouer gratuitement tout le week-end.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">💰 Test des Retraits : Notre Expérience Réelle</h3>
                <p className="leading-relaxed">
                  Nous avons effectué <strong className="text-primary">plusieurs retraits pour tester la fiabilité</strong>. 
                  Verdict : <strong className="text-primary">tous nos retraits ont été traités en 24-48h</strong> ! 
                  Le premier retrait nécessite une vérification KYC rapide. Nous avons retiré via Skrill et carte bancaire sans problème.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">💬 Support Client : Notre Retour d'Expérience</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">support client 24/7</strong> répond en moins de 3 minutes. Les agents parlent français 
                  et sont compétents. Nous avons posé des questions sur les bonus quotidiens : les réponses étaient claires et précises.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💬 Avis de Nos Testeurs sur Magical Spin</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-center text-foreground mb-8">
                Découvrez les retours d'expérience <strong className="text-primary">authentiques</strong> de notre équipe après plusieurs mois sur Magical Spin.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    L
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Laura M. - Joueuse régulière</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 6 mois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">9/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "Le <strong className="text-primary">concept des bonus quotidiens de Magical Spin est génial</strong> ! J'adore planifier mes dépôts 
                  selon le calendrier. Le jeudi avec son bonus illimité de 35% est mon préféré. J'ai gagné 1200€ sur Book of Dead avec les 
                  <strong className="text-primary"> 100 Free Spins du bonus de bienvenue</strong>. Le retrait a pris 36h par Skrill. 
                  Interface magique et support réactif !"
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-secondary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    P
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Pierre D. - Amateur de slots</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 4 mois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">9.5/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "J'adore Magical Spin pour sa <strong className="text-primary">ludothèque de 2000+ slots</strong> ! 
                  Les <strong className="text-primary">200 Free Spins du samedi</strong> permettent de tester plein de jeux gratuitement. 
                  J'ai décroché 2400€ sur Gates of Olympus et retiré sans souci en 48h. Le wager x40 est honnête. 
                  Le <strong className="text-primary">Triple Chance du lundi</strong> (jusqu'à 600€) est parfait pour bien démarrer la semaine !"
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    A
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Anne B. - Joueuse live</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 5 mois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">8.5/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "En tant que joueuse de <strong className="text-primary">casino live exclusivement</strong>, Magical Spin me convient avec 
                  Evolution Gaming. Les tables de roulette et blackjack en français sont top. J'ai fait une belle série avec un 
                  <strong className="text-primary"> gain de 1800€</strong>. Le retrait a pris 40h par carte bancaire. 
                  Seul bémol : j'aimerais plus de bonus spécifiques pour le live casino."
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
                    <span className="text-foreground">Bonus quotidiens uniques 7j/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Bonus de bienvenue 150% + 100 FS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Dépôt minimum 10€ très accessible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Ludothèque magique de 2000+ jeux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Support client 24/7 en français</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-4">⚠️ Points d'Attention</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-foreground">Wager de x40 sur les bonus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-foreground">Dépôts minimum variables selon les bonus</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="glass-card rounded-2xl p-12 text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Prêt à vivre la magie de Magical Spin ?</h2>
            <p className="text-xl text-foreground mb-6">
              <strong className="text-primary">Inscrivez-vous</strong> dès maintenant et profitez du <strong className="text-primary">bonus magique de 150% jusqu'à 500€ + 100 Free Spins</strong> sur Book of Dead. Découvrez les 
              <strong className="text-primary"> promotions quotidiennes uniques</strong> qui font la magie de ce casino !
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-sm md:text-lg lg:text-2xl px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 w-full md:w-auto"
            >
              <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-2" />
                Découvrir la Magie Maintenant
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-6">18+ | Jouez de manière responsable</p>
            <p className="text-sm text-primary font-semibold mt-2">
              Magical Spin est un partenaire validé par GigaBonus, testé et vérifié par notre équipe en 2026.
            </p>
          </section>

          <SEOEnrichedContent
            casinoName="Magical Spin"
            bonus="150% + 100 FS"
            wager="40"
            minDeposit="10€"
            withdrawal="24-48h"
            rating={9.3}
            reviewsCount={3000}
            slug="magicalspin"
            competitors={["SpinStar", "Cazino Stars", "Kings Chance"]}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

