'use client';

import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOEnrichedBlog from "@/components/SEOEnrichedBlog";
import SEOHead from "@/components/SEOHead";
import { casinos } from "@/data/casinos";
import { Star, CheckCircle2, XCircle, Trophy, CreditCard, Gamepad2, Shield, Coins, Gift, Calendar, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RelatedLinks from "@/components/RelatedLinks";

export default function AvisI24SlotsPage() {
  const casino = casinos.find(c => c.id === 15);

  if (!casino) {
    return <div>Casino non trouvé</div>;
  }

  const relatedLinks = [
    {
      title: "Top Casinos Crypto 2025",
      description: "Découvrez les meilleurs casinos acceptant les cryptomonnaies",
      href: "/top-casinos-crypto"
    },
    {
      title: "Bonus Sans Wager",
      description: "Casinos avec bonus sans conditions de mise",
      href: "/bonus-sans-wager"
    },
    {
      title: "Casinos Sans KYC",
      description: "Jouez sans vérification d'identité",
      href: "/casinos-sans-kyc"
    },
    {
      title: "Avis RX Casino 2025",
      description: "Programme de promotions quotidiennes unique",
      href: "/blog/avis-rxcasino-2025"
    }
  ];

  
  const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Review",
      "itemReviewed": {
        "@type": "Casino",
        "name": "Avis I24Slots 2025",
        "image": "https://gigabonus.fr/images/i24slots.webp"
      },
      "author": {
        "@type": "Person",
        "name": "Alexandre Martin",
        "jobTitle": "Expert Casino Senior"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.2",
        "bestRating": "10",
        "worstRating": "1"
      },
      "reviewBody": "I24Slots se distingue par son excellent programme VIP et son bonus de bienvenue généreux. Le casino propose 6000+ jeux et des retraits rapides.",
      "datePublished": "2025-11-21",
      "publisher": {
        "@type": "Organization",
        "name": "GigaBonus"
      }
    },
    {
      "@type": "Article",
      "headline": "Avis I24Slots 2025 : Bonus VIP et Programme de Fidélité | GigaBonus",
      "description": "Avis complet sur I24Slots : bonus 100% + 150 FS, programme VIP exclusif, retraits rapides. Découvrez notre test détaillé et notre analyse experte 2025.",
      "image": "https://gigabonus.fr/images/i24slots.webp",
      "datePublished": "2025-11-21T10:00:00+01:00",
      "dateModified": "2025-11-28T00:45:35.341Z",
      "author": {
        "@type": "Person",
        "name": "Alexandre Martin"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GigaBonus",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gigabonus.fr/gigabonus-logo.webp"
        }
      }
    }
  ]
};

  return (
    <>
      <SEOHead
        title="Avis I24Slots 2025 : Bonus VIP et Programme de Fidélité | GigaBonus"
        description="Avis complet sur I24Slots : bonus 100% + 150 FS, programme VIP exclusif, retraits rapides. Découvrez notre test détaillé et notre analyse experte 2025."
        keywords="avis i24slots, i24slots bonus, i24slots vip, casino programme fidélité, i24slots retrait, i24slots 2025"
        canonical="https://gigabonus.fr/blog/avis-i24slots-2025"
        ogTitle="Avis I24Slots 2025 : Bonus VIP et Programme de Fidélité"
        ogDescription="Test complet I24Slots : bonus 100% + 150 FS, programme VIP, retraits rapides. Avis expert 2025."
        ogImage="https://gigabonus.fr/images/i24slots.webp"
        twitterTitle="Avis I24Slots 2025 : Bonus VIP et Programme de Fidélité"
        twitterDescription="Test complet I24Slots : bonus 100% + 150 FS, programme VIP, retraits rapides. Avis expert 2025."
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/images/i24slots.webp" 
                alt="I24Slots Casino Logo - Avis et Test Complet 2025 avec bonus 100% + 150 FS" 
                width="200"
                height="96"
                loading="eager"
                className="h-24 w-auto object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Avis Complet I24Slots 2025</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-6 w-6 ${i < 4 ? 'fill-primary text-primary' : 'text-gray-300'}`} />
              ))}
              <span className="text-xl font-semibold ml-2">8.5/10</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime="2024-08-05">Publié le 5 août 2024</time>
              <span>•</span>
              <span>Mis à jour : 5 août 2024</span>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre avis détaillé sur I24Slots, le casino premium avec un programme VIP exceptionnel et un bonus de 100% jusqu'à 500€ + 150 FS.
            </p>
          </header>

          {/* CTA Principal */}
          <div className="glass-card rounded-2xl p-8 mb-12 bg-primary/5 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Bonus de Bienvenue Exclusif</h2>
                <p className="text-3xl font-bold text-primary">100% jusqu'à 500€ + 150 FS</p>
                <p className="text-muted-foreground mt-2">Wager : x40 • Dépôt minimum : 20€</p>
              </div>
              <Link href="/i24slots">
                <Button size="lg" className="text-lg px-8 py-6">
                  Réclamez le Bonus <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Introduction */}
          <article className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Notre Avis sur I24Slots Casino</h2>
            <p className="text-foreground mb-4 leading-relaxed">
              I24Slots adopte une stratégie différente de la majorité des casinos en ligne : plutôt que de séduire avec un énorme bonus de bienvenue, il mise tout sur un programme de fidélité à long terme. Cette approche vise les joueurs réguliers qui cherchent à maximiser leurs gains sur la durée plutôt que de profiter d'un coup unique.
            </p>
            <p className="text-foreground leading-relaxed">
              Le casino se distingue par son système VIP à 8 niveaux qui offre des avantages croissants : cashback amélioré, gestionnaire de compte dédié, bonus personnalisés, retraits prioritaires et même des cadeaux physiques. Avec plus de 6000 jeux et des retraits en 24-48h, I24Slots offre une expérience premium.
            </p>
          </article>

          {/* Avantages et Inconvénients */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Avantages
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Programme VIP avec avantages croissants</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>6000+ jeux de providers réputés</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>150 free spins sur premier dépôt</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Support client 24/7 en français</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Retraits rapides (24-48h)</span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-orange-500 flex items-center gap-2">
                <XCircle className="h-6 w-6" />
                Inconvénients
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Wager x40 sur le bonus de bienvenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Dépôt minimum 20€ (plus élevé)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Programme VIP accessible qu'aux gros joueurs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bonus et Promotions */}
          <article className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Trophy className="h-8 w-8" />
              Bonus et Promotions I24Slots
            </h2>
            
            <div className="space-y-6">
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-2xl font-bold mb-3">🎁 Bonus de Bienvenue : 100% jusqu'à 500€ + 150 FS</h3>
                <p className="text-foreground mb-4">
                  I24Slots offre un pack de bienvenue complet avec 100% de bonus sur votre premier dépôt jusqu'à 500€, accompagné de 150 Free Spins à utiliser sur Book of Dead.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Montant :</strong> 100% jusqu'à 500€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Free Spins :</strong> 150 FS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Dépôt minimum :</strong> 20€</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Wager :</strong> x40</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Validité :</strong> 30 jours</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-2xl font-bold mb-3">👑 Programme VIP à 8 Niveaux</h3>
                <p className="text-foreground mb-4">
                  Progressez à travers 8 niveaux VIP et débloquez des avantages exclusifs : cashback jusqu'à 15%, gestionnaire dédié, bonus personnalisés et cadeaux de luxe.
                </p>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-2xl font-bold mb-3">🎯 Promotions Hebdomadaires</h3>
                <p className="text-foreground">
                  Reload du lundi (50% jusqu'à 200€), Free Spins du mercredi et Cashback du weekend (10% sur vos pertes).
                </p>
              </div>
            </div>
          </article>

          {/* Games Section */}
          <section className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Trophy className="h-8 w-8" />
              Catalogue de Jeux I24Slots
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              <p>
                I24Slots propose une impressionnante collection de plus de <strong className="text-foreground">6000 jeux</strong> couvrant toutes les catégories populaires. Le casino travaille avec les <strong className="text-foreground">meilleurs providers du marché</strong> pour garantir qualité et diversité.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="text-3xl mb-3">🎰</div>
                <h3 className="font-bold mb-2">Machines à Sous</h3>
                <p className="text-sm text-muted-foreground">4000+ slots dont les dernières sorties Pragmatic Play, Play'n GO, NetEnt</p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="text-3xl mb-3">🎲</div>
                <h3 className="font-bold mb-2">Casino Live</h3>
                <p className="text-sm text-muted-foreground">Tables Evolution Gaming avec croupiers francophones</p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="text-3xl mb-3">🃏</div>
                <h3 className="font-bold mb-2">Jeux de Table</h3>
                <p className="text-sm text-muted-foreground">Blackjack, Roulette, Baccarat, Poker en versions multiples</p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="text-3xl mb-3">💎</div>
                <h3 className="font-bold mb-2">Jackpots</h3>
                <p className="text-sm text-muted-foreground">Mega Moolah, Divine Fortune et autres jackpots progressifs</p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold mb-2">Mini-Jeux</h3>
                <p className="text-sm text-muted-foreground">Crash games, Plinko, Dice et autres jeux instantanés</p>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="text-3xl mb-3">⚽</div>
                <h3 className="font-bold mb-2">Paris Sportifs</h3>
                <p className="text-sm text-muted-foreground">Section sport avec cotes compétitives</p>
              </div>
            </div>
          </section>

          {/* Payment Methods */}
          <section className="glass-card rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Coins className="h-8 w-8" />
              Méthodes de Paiement
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              <p>
                I24Slots accepte un large éventail de <strong className="text-foreground">méthodes de paiement</strong> pour faciliter les dépôts et retraits. Le casino supporte les moyens traditionnels et les cryptomonnaies.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  💳 Méthodes Acceptées
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Cartes bancaires (Visa, Mastercard)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Cryptomonnaies (Bitcoin, Ethereum, USDT)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>E-wallets (Skrill, Neteller, MiFinity)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Paysafecard, Neosurf, Cashlib</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Virement bancaire</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  ⚡ Délais et Limites
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Dépôt minimum : <strong className="text-foreground">20€</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Retrait minimum : <strong className="text-foreground">50€</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Retrait maximum : <strong className="text-foreground">5 000€/semaine</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Délai de retrait : <strong className="text-foreground">24-48h</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Crypto : retraits plus rapides (12-24h)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="glass-card rounded-2xl p-8 mb-16 bg-blue-500/5 border-2 border-blue-500/20">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Shield className="h-8 w-8" />
              Sécurité et Licence
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I24Slots opère sous <strong className="text-foreground">licence Curaçao eGaming</strong>, garantissant un cadre réglementaire pour ses opérations. Le casino utilise le <strong className="text-foreground">chiffrement SSL 256-bit</strong> pour protéger toutes les transactions et données personnelles.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Licence Valide</p>
                    <p className="text-sm">Curaçao eGaming #365/JAZ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Jeu Responsable</p>
                    <p className="text-sm">Limites de dépôt et auto-exclusion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Fairness</p>
                    <p className="text-sm">RNG certifiés par iTech Labs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Support 24/7</p>
                    <p className="text-sm">Chat live en français disponible</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="glass-card rounded-2xl p-8 mb-16 text-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20">
            <h2 className="text-3xl font-bold mb-4 text-primary">Prêt à Rejoindre I24Slots ?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Profitez du <strong className="text-foreground">bonus de bienvenue 100% + 150 FS</strong> et découvrez le programme VIP le plus généreux du marché. Parfait pour les joueurs fidèles qui cherchent des récompenses à long terme.
            </p>
            <Link 
              href="/i24slots" 
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Jouer sur I24Slots
              <ArrowRight className="h-5 w-5" />
            </Link>
            <p className="text-xs text-muted-foreground mt-4">
              18+ | Jouer comporte des risques | <a href="https://www.joueurs-info-service.fr" className="underline hover:text-primary">Aide & Support</a>
            </p>
          </section>

          {/* Related Links */}
          <RelatedLinks links={relatedLinks} />

          <SEOEnrichedBlog 
            casinoName="i24Slots"
            bonus={casino?.bonusText || "400% jusqu'à 15 000€ + 500 FS"}
            rating={4.2}
            reviewsCount={2200}
            slug="i24slots"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};



