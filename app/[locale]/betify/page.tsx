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

export default function BetifyPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const casino = casinos.find(c => c.name === "Betify")!;


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
      title: "Bonus de bienvenue – Jusqu'à 100 FS sans Wager",
      banner: "/images/betify/welcome.webp",
      details: [
        "🎁 Dépose 20€ → 40 Free Spins",
        "🎁 Dépose 50€ → 100 Free Spins",
        "Offre valable sur le 1er dépôt uniquement",
        "1 seul bonus par joueur / IP / foyer",
        "Free Spins sans wager – gains en cash réel",
        "Maximum de gains : 250€",
        "Dépôt à miser 1× avant retrait",
        "Non cumulable avec le bonus dépôt / freebet",
        "Free Spins activables dans l'onglet « Bonus » après dépôt"
      ]
    },
    {
      id: 2,
      title: "Bonus de Bienvenue – 100 % Jusqu'à 500 €",
      banner: "/images/betify/bonus.webp",
      details: [
        "💰 Dépôt de 100€ → joue avec 200€",
        "Bonus max : 500€",
        "Code promo à utiliser : WL500",
        "Wager : 35× (bonus)",
        "Offre valable uniquement sur le 1er dépôt",
        "1 seul bonus par joueur / IP / foyer",
        "Non cumulable avec freebet ou freespins",
        "Contact : support@betify.com ou Livechat 24/7"
      ]
    },
    {
      id: 3,
      title: "Bonus de Bienvenue Sports – 50% Jusqu'à 100 €",
      banner: "/images/betify/sport.webp",
      details: [
        "⚽ Dépôt de 100€ → +50€ en freebet",
        "Montant max : 100€ de bonus",
        "Bonus crédité sur demande au support",
        "Validité : 14 jours après activation",
        "Offre réservée au 1er dépôt",
        "1 seule utilisation par joueur / IP / foyer",
        "Non cumulable avec freespins ou bonus 100%",
        "Contacte le support depuis le Livechat après ton dépôt pour activer le bonus"
      ]
    },
    {
      id: 4,
      title: "Bonus du Week-End – Jusqu'à 2000 FS",
      banner: "/images/betify/weekend.webp",
      details: [
        "🎰 1€ déposé = 1 Free Spin sur la machine sélectionnée",
        "La Slot change chaque semaine",
        "Valeur par spin : 0,20€",
        "Jusqu'à 2000 Free Spins (pour 2000€ déposés)",
        "Code à indiquer : #MAXIFY",
        "Valable chaque semaine du vendredi 00h au dimanche 23h59",
        "Gains des Free Spins sans condition de mise (wager x1)",
        "1 seule participation par joueur / IP",
        "Activation via le support dans les 4h après dépôt"
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
          "name": "Betify Casino",
          "image": "https://gigabonus.win/images/betify.webp"
        },
        "author": {
          "@type": "Person",
          "name": "Alexandre Martin",
          "jobTitle": "Expert Casino Senior"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "8.8",
          "bestRating": "10",
          "worstRating": "1"
        },
        "reviewBody": "Betify Casino combine casino et paris sportifs avec des bonus innovants : Free Spins sans wager, bonus dépôt 100%, et freebet sport. Plateforme moderne avec 3000+ jeux.",
        "datePublished": "2026-01-15",
        "publisher": {
          "@type": "Organization",
          "name": "GigaBonus"
        }
      },
      {
        "@type": "Article",
        "headline": "Betify Casino : Avis 2026, Bonus Sport et Casino",
        "description": "Avis Betify Casino 2026 : bonus innovants sans wager, casino et paris sportifs, 3000+ jeux. Test complet!",
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
            "name": "Les Free Spins Betify ont-ils un wager ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non, les Free Spins de bienvenue Betify sont sans wager. Les gains sont en cash réel, mais le dépôt doit être misé 1x avant retrait."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Betify Casino : Avis 2026, Bonus Sport et Casino | GigaBonus"
        description="Avis Betify Casino 2026 : bonus innovants sans wager, casino et paris sportifs, 3000+ jeux. Test complet!"
        keywords="betify casino, avis betify, bonus betify, betify casino avis, free spins sans wager, casino bookmaker"
        canonical="https://gigabonus.win/betify"
        ogTitle="Betify Casino : Avis 2026, Bonus Sport et Casino"
        ogDescription="Avis Betify Casino 2026 : bonus innovants sans wager, casino et paris sportifs, 3000+ jeux."
        ogImage="https://gigabonus.win/images/betify.webp"
        twitterTitle="Betify Casino : Avis 2026, Bonus Sport et Casino"
        twitterDescription="Avis Betify Casino 2026 : bonus innovants sans wager, casino et paris sportifs."
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
                    alt={`Logo ${casino.name} Casino - Bonus ${casino.bonusPercent}%`}
                    width={256}
                    height={256}
                    loading="eager"
                    className="w-64 h-64 object-contain drop-shadow-2xl"
                  />
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                    Betify
                  </p>
                  <Badge className="bg-primary text-white font-bold text-2xl px-6 py-3 animate-glow mt-2">
                    +{casino.bonusPercent}% BONUS
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
                Betify Casino : Avis 2026, Bonus Sport et Casino Jusqu'à 500€ + 100 Free Spins
              </h1>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">À Propos de Betify</h2>
                <div className="space-y-4 text-foreground max-w-4xl mx-auto">
                  <p>
                    Lancé en 2024, <strong className="text-primary">Betify</strong> s'impose rapidement comme une <strong className="text-primary">plateforme de jeu complète et innovante</strong> qui combine habilement casino en ligne et paris sportifs sous une seule interface élégante. Cette double offre permet aux joueurs français de profiter d'une expérience de jeu unifiée sans avoir à jongler entre plusieurs plateformes. Dès votre inscription, vous bénéficiez d'un <strong className="text-primary">choix exceptionnel de trois bonus de bienvenue</strong> adaptés à votre style de jeu : les fans de slots peuvent opter pour jusqu'à <strong className="text-primary">100 Free Spins sans wager</strong> (gains retirables immédiatement), les joueurs casino traditionnels apprécieront le <strong className="text-primary">bonus de 100% jusqu'à 500€</strong> avec le code WL500, tandis que les amateurs de sport profiteront du <strong className="text-primary">bonus de 50% jusqu'à 100€ en freebet</strong>. Cette flexibilité dans les offres de bienvenue démontre la volonté de Betify de s'adapter aux préférences de chaque joueur.
                  </p>
                  <p>
                    L'<strong className="text-primary">interface moderne et intuitive</strong> de Betify a été conçue pour offrir une navigation fluide sur tous les appareils, que vous jouiez depuis votre ordinateur, tablette ou smartphone. La plateforme se distingue par ses <strong className="text-primary">retraits rapides</strong> traités sous 24-48h selon la méthode choisie, avec un processus de vérification simplifié pour les premiers retraits. La sécurité des transactions est assurée par un <strong className="text-primary">cryptage SSL 256-bit</strong> de dernière génération, garantissant la protection de vos données personnelles et financières. Le <strong className="text-primary">support client disponible 24/7</strong> via livechat ou email (support@betify.com) répond rapidement en français à toutes vos questions, qu'il s'agisse de bonus, de méthodes de paiement ou de problèmes techniques. Un point fort particulier : le <strong className="text-primary">bonus du week-end révolutionnaire</strong> qui transforme chaque euro déposé du vendredi au dimanche en un Free Spin (valeur 0,20€), permettant de gagner jusqu'à <strong className="text-primary">2000 Free Spins</strong> en utilisant le code #MAXIFY – et ces gains sont soumis à un wager minimal de x1 seulement !
                  </p>
                  <p>
                    La <strong className="text-primary">ludothèque casino impressionnante</strong> propose plus de 3000 jeux soigneusement sélectionnés parmi les catalogues des meilleurs éditeurs mondiaux comme Pragmatic Play, NetEnt, Evolution Gaming, Yggdrasil et bien d'autres. Les amateurs de <strong className="text-primary">machines à sous</strong> trouveront leur bonheur avec des titres populaires comme Gates of Olympus, Sweet Bonanza, Book of Dead, ainsi que des jackpots progressifs offrant des gains potentiels de plusieurs millions d'euros. La section <strong className="text-primary">live casino avec croupiers en direct</strong> comprend de nombreuses tables de roulette (française, européenne, américaine), blackjack (classique, VIP, Party), baccarat et des game shows captivants comme Crazy Time, Monopoly Live et Deal or No Deal. Les joueurs nostalgiques apprécieront tous les <strong className="text-primary">jeux de table classiques</strong> en version RNG pour des parties rapides. Côté paris sportifs, Betify couvre une <strong className="text-primary">gamme complète de sports majeurs</strong> : football (Ligue 1, Premier League, Champions League), tennis (ATP, WTA, Grand Chelem), basketball (NBA, Euroligue), sports américains, sports de combat, eSports et bien plus. Les cotes sont compétitives et le site propose des paris pré-match et en direct avec des statistiques détaillées. C'est véritablement une <strong className="text-primary">expérience de jeu polyvalente et généreuse</strong> qui attend les joueurs français en 2026 !
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
                  <p className="font-semibold text-foreground">Retraits Rapides</p>
                  <p className="text-xs text-muted-foreground">Efficace</p>
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
                        width={80}
                        height={32}
                        loading="lazy"
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
              🎁 Détail des Offres et Promotions Betify
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">📝 Comment S'inscrire sur Betify Casino ?</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                L'<strong className="text-primary">inscription sur Betify</strong> est simple et rapide, ne prenant que quelques minutes. 
                Voici notre <strong className="text-primary">guide complet</strong> pour créer votre compte et choisir parmi les 3 bonus disponibles.
              </p>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 1 : Créer votre compte</h3>
                <p className="leading-relaxed">
                  Cliquez sur le bouton <strong className="text-primary">"S'inscrire"</strong> visible sur la page d'accueil de Betify. Remplissez le formulaire avec vos informations : 
                  nom, prénom, date de naissance, email et mot de passe sécurisé. L'inscription complète prend <strong className="text-primary">moins de 3 minutes</strong>.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 2 : Vérifier votre email</h3>
                <p className="leading-relaxed">
                  Après soumission du formulaire, Betify vous enverra un <strong className="text-primary">email de confirmation</strong>. Cliquez sur le lien de vérification 
                  pour <strong className="text-primary">activer votre compte</strong>. Si l'email tarde, vérifiez vos spams.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 3 : Effectuer votre premier dépôt</h3>
                <p className="leading-relaxed">
                  Accédez à la section <strong className="text-primary">"Dépôt"</strong>. Betify accepte cartes bancaires, e-wallets, cryptomonnaies et cartes prépayées. 
                  Le <strong className="text-primary">dépôt minimum est de 20€</strong>. Choisissez votre méthode et validez.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Étape 4 : Choisir votre bonus</h3>
                <p className="leading-relaxed">
                  Betify propose <strong className="text-primary">3 bonus au choix</strong> : 100 FS sans wager, bonus casino 100% (code WL500), ou bonus sport 50%. 
                  Sélectionnez celui qui correspond à votre style de jeu avant de confirmer le dépôt.
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
                    <span>Vérifiez que vous êtes sur le <strong className="text-primary">site officiel</strong> de Betify</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Méthodes de Retrait */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💳 Méthodes de Retrait et Délais sur Betify</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Betify propose <strong className="text-primary">plusieurs méthodes de retrait rapides</strong> adaptées à tous les profils de joueurs. 
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
                      <td className="p-4">E-wallets (Skrill, Neteller)</td>
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
                  Les <strong className="text-primary">e-wallets</strong> garantissent un traitement en 24-48h maximum.
                </p>
                <p className="leading-relaxed">
                  Betify s'engage à traiter tous les retraits <strong className="text-primary">dans les 24-48h</strong> suivant la demande.
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
                    <span>Privilégiez les <strong className="text-primary">cryptomonnaies ou e-wallets</strong> pour des retraits ultra-rapides</span>
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎮 Catalogue de Jeux Betify</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Machines à Sous</h3>
                <p className="leading-relaxed">
                  Betify dispose d'une ludothèque impressionnante avec plus de <strong>3000 machines à sous</strong>. Retrouvez les hits comme 
                  <strong> Sweet Bonanza, Gates of Olympus, Book of Dead</strong> et les dernières sorties des éditeurs <strong>Pragmatic Play, NetEnt</strong> et <strong>Play'n GO</strong>.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Casino Live et Paris Sportifs</h3>
                <p className="leading-relaxed">
                  Profitez d'une expérience complète avec le <strong>casino live</strong> haute définition (Blackjack, Roulette, Baccarat) et une section 
                  <strong> paris sportifs</strong> couvrant football, tennis, basketball et eSports avec des cotes compétitives.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">❓ FAQ - Questions Fréquentes</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Quel bonus de bienvenue choisir ?</h3>
                <p className="text-foreground leading-relaxed">
                  Betify propose <strong className="text-primary">3 bonus au choix</strong> : 100 FS sans wager (20€ = 40 FS, 50€ = 100 FS), 
                  bonus 100% jusqu'à 500€ (code WL500), ou bonus sport 50% jusqu'à 100€. Choisissez selon votre style de jeu !
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Comment profiter du bonus weekend ?</h3>
                <p className="text-foreground leading-relaxed">
                  Du vendredi au dimanche, déposez avec le code <strong className="text-primary">#MAXIFY</strong> pour recevoir 
                  1 Free Spin par euro déposé (jusqu'à 2000 FS). Contactez le support dans les 4h après dépôt pour activation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Betify est-il fiable ?</h3>
                <p className="text-foreground leading-relaxed">
                  Oui, Betify détient une <strong className="text-primary">licence Curaçao</strong> et utilise un <strong className="text-primary">cryptage SSL 256 bits</strong> 
                  pour protéger vos données. Les retraits sont traités en <strong className="text-primary">24-48h</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Sections SEO Supplémentaires */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🎯 Stratégies pour Maximiser Vos Gains sur Betify</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                Pour optimiser vos chances de succès sur <strong className="text-primary">Betify Casino</strong>, notre équipe d'experts vous recommande 
                de <strong className="text-primary">choisir le bonus adapté</strong> à votre style de jeu. Les 100 FS sans wager sont parfaits pour tester sans risque.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Profiter du Bonus Weekend</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">bonus weekend de Betify</strong> est unique : 1 Free Spin par euro déposé du vendredi au dimanche. 
                  Avec un dépôt de 200€, vous recevez <strong className="text-primary">200 Free Spins</strong> à 0,20€ chacun, soit 40€ de crédit de jeu. 
                  Et les gains ne nécessitent qu'un wager x1 !
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Combiner Casino et Paris Sportifs</h3>
                <p className="leading-relaxed">
                  Betify excelle dans la <strong className="text-primary">combinaison casino + sport</strong>. Profitez des bonus casino en semaine 
                  et du bonus sport pour les événements majeurs. Cette polyvalence maximise vos opportunités de gains.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">🔐 Sécurité et Légalité de Betify Casino</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                <strong className="text-primary">Betify Casino</strong> opère avec une <strong className="text-primary">licence Curaçao eGaming</strong>, 
                garantissant le respect des normes internationales. Le site utilise un <strong className="text-primary">cryptage SSL 256 bits</strong> pour protéger toutes les transactions.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Support Client 24/7</h3>
                <p className="leading-relaxed">
                  Le <strong className="text-primary">support Betify est disponible 24/7</strong> via livechat et email (support@betify.com). 
                  Les agents répondent rapidement en français et peuvent vous aider pour activer les bonus ou résoudre tout problème.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">⭐ Notre Verdict GigaBonus sur Betify Casino</h2>
            <div className="space-y-6 text-foreground max-w-4xl mx-auto">
              <p className="leading-relaxed">
                <strong className="text-primary">Betify Casino</strong> se distingue en 2026 par sa <strong className="text-primary">polyvalence exceptionnelle</strong> 
                combinant casino en ligne et paris sportifs. L'offre de <strong className="text-primary">3 bonus au choix</strong> (100 FS sans wager, bonus casino 100% jusqu'à 500€, 
                bonus sport 50% jusqu'à 100€) permet à chaque joueur de trouver la promotion qui lui correspond.
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-3">Points Forts de Betify</h3>
                <p className="leading-relaxed">
                  La plateforme brille par son <strong className="text-primary">bonus weekend révolutionnaire</strong> (1 FS par euro déposé), 
                  sa ludothèque de <strong className="text-primary">3000+ jeux</strong>, ses retraits rapides et son support 24/7. 
                  La section paris sportifs avec cotes compétitives est un vrai plus.
                </p>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">💬 Avis de Nos Testeurs sur Betify</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-center text-foreground mb-8">
                Découvrez les retours d'expérience <strong className="text-primary">authentiques</strong> de notre équipe de testeurs.
              </p>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    L
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Lucas T. - Fan de slots</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 4 mois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">9/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "Les <strong className="text-primary">100 Free Spins sans wager</strong> sont un vrai cadeau ! J'ai gagné 180€ et pu tout retirer directement. 
                  Le bonus weekend est génial aussi, je récupère des centaines de tours chaque semaine."
                </p>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-secondary">
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    M
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary">Marine B. - Joueuse polyvalente</p>
                    <p className="text-sm text-muted-foreground">Membre depuis 3 mois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">8.5/10</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "J'adore pouvoir alterner entre <strong className="text-primary">casino et paris sportifs</strong> sur la même plateforme. 
                  Le bonus sport m'a permis de tester les paris en direct pendant le foot. Interface très fluide et support réactif !"
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
                    <span className="text-foreground">3 bonus au choix selon votre style de jeu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Free Spins sans wager - gains retirables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Bonus weekend jusqu'à 2000 Free Spins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Casino + Paris sportifs sur une seule plateforme</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-500 mb-4">⚠️ Points d'Attention</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-foreground">Les bonus ne sont pas cumulables entre eux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span className="text-foreground">Activation du bonus weekend via le support</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="glass-card rounded-2xl p-12 text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">Prêt à rejoindre Betify ?</h2>
            <p className="text-xl text-foreground mb-6">
              <strong className="text-primary">Inscrivez-vous</strong> dès maintenant et choisissez parmi 
              <strong className="text-primary"> plusieurs bonus de bienvenue</strong> : Free Spins sans wager, 
              bonus casino ou bonus sport ! Profitez également du <strong className="text-primary">bonus week-end jusqu'à 2000 FS</strong> 
              chaque semaine. Rejoignez une plateforme <strong className="text-primary">complète et généreuse</strong> en 2026 !
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-sm md:text-lg lg:text-2xl px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 w-full md:w-auto"
            >
              <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-2" />
                Profiter des Bonus Maintenant
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-6">18+ | Jouez de manière responsable</p>
            <p className="text-sm text-primary font-semibold mt-2">
              Betify est un partenaire validé par GigaBonus, testé et vérifié par notre équipe en 2026.
            </p>
          </section>
        </div>
      </div>
      <SEOEnrichedContent
        casinoName="Betify"
        bonus="100% Casino + 50% Sport + 2000 FS"
        wager="35"
        minDeposit="20€"
        withdrawal="24-48h"
        rating={9.2}
        reviewsCount={2600}
        slug="betify"
      />
      <Footer />
    </>
  );
};

