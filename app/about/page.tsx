'use client';

import { useEffect } from "react";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import RelatedLinks from "@/components/RelatedLinks";
import SEOHead from "@/components/SEOHead";
import { Trophy, Shield, Users, Target, Award, Heart, Zap, CheckCircle2 } from "lucide-react";

export default function AboutPage() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "GigaBonus",
      "url": "https://gigabonus.win",
      "logo": "https://gigabonus.win/gigabonus-logo.webp",
      "foundingDate": "2019",
      "description": "Comparateur expert des meilleurs bonus de casinos en ligne en France. Tests indépendants et avis transparents depuis 2019.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR"
      },
      "knowsAbout": [
        "Casino en ligne",
        "Bonus casino",
        "Jeux d'argent en ligne",
        "Cryptomonnaies casino",
        "Sécurité casino"
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="À Propos de GigaBonus | Équipe d'Experts Casino 2025"
        description="Découvrez l'équipe GigaBonus : experts casino depuis 2019, +500 casinos testés, méthodologie transparente. Notre mission : vous guider vers les meilleurs bonus."
        keywords="gigabonus équipe, experts casino en ligne, avis casino fiables, test casino indépendant, méthodologie test casino, équipe GigaBonus"
        canonical="https://gigabonus.win/about"
        ogTitle="À Propos de GigaBonus | Équipe d'Experts Casino 2025"
        ogDescription="Équipe d'experts casino depuis 2019. +500 casinos testés avec méthodologie transparente."
        ogImage="https://gigabonus.win/gigabonus-logo.webp"
        twitterTitle="À Propos de GigaBonus | Équipe d'Experts Casino 2025"
        twitterDescription="Équipe d'experts casino depuis 2019. +500 casinos testés."
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <header className="mb-16 mt-8 text-center">
            <div className="flex justify-center mb-6">
              <Trophy className="h-16 w-16 text-primary animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">À Propos de GigaBonus</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Votre guide de confiance pour naviguer dans l'univers des casinos en ligne depuis 2019
            </p>
          </header>

          {/* Mission Section */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Notre Mission</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Chez <strong>GigaBonus</strong>, notre mission est simple : <strong>vous aider à trouver les meilleurs bonus de casinos en ligne</strong> tout en garantissant votre sécurité et transparence totale.
              </p>
              <p>
                Depuis <strong>2019</strong>, nous testons, analysons et comparons des centaines de casinos pour vous offrir des avis <strong>indépendants</strong>, <strong>détaillés</strong> et <strong>100% fiables</strong>.
              </p>
              <p className="text-primary font-semibold">
                Nous ne recommandons que des casinos que nous testerions nous-mêmes avec notre propre argent.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Casinos Testés</div>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Ans d'Expérience</div>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Tests Indépendants</div>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Veille Active</div>
            </div>
          </section>

          {/* Méthodologie Section */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Notre Méthodologie de Test</h2>
            </div>
            <p className="text-lg mb-6">
              Chaque casino listé sur GigaBonus passe par un <strong>processus de test rigoureux</strong> en 8 étapes :
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">1. Licence & Légalité</h3>
                  <p className="text-muted-foreground">Vérification de la licence (Curaçao, MGA, UKGC). Aucun casino illégal sur notre site.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">2. Sécurité des Données</h3>
                  <p className="text-muted-foreground">Cryptage SSL 256-bit, protection des données personnelles et bancaires.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">3. Test des Bonus</h3>
                  <p className="text-muted-foreground">Analyse des conditions de mise, wagering, délais, restrictions. Transparence totale.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">4. Rapidité des Retraits</h3>
                  <p className="text-muted-foreground">Tests réels de retraits pour mesurer les délais effectifs (24h-72h).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">5. Qualité du Support</h3>
                  <p className="text-muted-foreground">Tests du chat 24/7, temps de réponse, compétence des agents.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">6. Catalogue de Jeux</h3>
                  <p className="text-muted-foreground">Variété, qualité des providers (Pragmatic, Hacksaw, Evolution Gaming).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">7. Méthodes de Paiement</h3>
                  <p className="text-muted-foreground">Cryptos, cartes bancaires, e-wallets. Frais et limites analysés.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">8. Expérience Mobile</h3>
                  <p className="text-muted-foreground">Interface responsive, fluidité, tous les jeux accessibles sur mobile.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Équipe Section */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold text-primary">L'Équipe GigaBonus</h2>
            </div>
            <p className="text-lg mb-8">
              Notre équipe est composée de <strong>joueurs passionnés</strong> et d'<strong>experts en sécurité</strong> qui testent quotidiennement les casinos en ligne.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Experts Casino</h3>
                <p className="text-muted-foreground">6+ ans d'expérience dans l'industrie du jeu en ligne</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Analystes Sécurité</h3>
                <p className="text-muted-foreground">Spécialistes en cybersécurité et cryptographie</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Testeurs Qualité</h3>
                <p className="text-muted-foreground">Tests quotidiens de nouveaux casinos et bonus</p>
              </div>
            </div>
          </section>

          {/* Valeurs Section */}
          <section className="glass-card rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Nos Valeurs</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 text-gray-900 dark:text-gray-100 rounded-r-xl">
                <h3 className="font-bold text-xl mb-3 text-violet-900 dark:text-violet-100">🎯 Indépendance Totale</h3>
                <p className="leading-relaxed">
                  Nos avis sont 100% indépendants. Nous testons chaque casino avec nos propres fonds et ne sommes influencés par aucun opérateur.
                </p>
              </div>
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 text-gray-900 dark:text-gray-100 rounded-r-xl">
                <h3 className="font-bold text-xl mb-3 text-violet-900 dark:text-violet-100">🔒 Sécurité Avant Tout</h3>
                <p className="leading-relaxed">
                  Nous ne recommandons que des casinos avec licences valides, cryptage SSL et RNG certifiés. Votre sécurité est notre priorité #1.
                </p>
              </div>
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 text-gray-900 dark:text-gray-100 rounded-r-xl">
                <h3 className="font-bold text-xl mb-3 text-violet-900 dark:text-violet-100">📊 Transparence Totale</h3>
                <p className="leading-relaxed">
                  Nous détaillons tous nos tests : avantages, inconvénients, conditions cachées. Pas de publicité mensongère, que des faits.
                </p>
              </div>
              <div className="p-6 border-l-4 border-violet-700 dark:border-violet-400 bg-violet-50 dark:bg-violet-950 text-gray-900 dark:text-gray-100 rounded-r-xl">
                <h3 className="font-bold text-xl mb-3 text-violet-900 dark:text-violet-100">⚡ Mise à Jour Continue</h3>
                <p className="leading-relaxed">
                  Notre équipe surveille les changements de bonus 24/7. Tous nos avis sont régulièrement actualisés pour refléter la réalité actuelle.
                </p>
              </div>
            </div>
          </section>

          {/* Certification Section */}
          <section className="glass-card rounded-2xl p-8 mb-12 bg-violet-50 dark:bg-violet-950 border-2 border-violet-700/40 dark:border-violet-400/40">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Engagements & Certifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">
                  <strong>Jeu Responsable :</strong> Nous promouvons le jeu responsable et incluons systématiquement des liens vers les organismes d'aide (Joueurs Info Service).
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">
                  <strong>Tests Réguliers :</strong> Chaque casino est re-testé tous les 3 mois pour garantir la fiabilité de nos recommandations.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">
                  <strong>Communauté Active :</strong> Nous écoutons les retours de nos utilisateurs pour améliorer constamment nos services.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="glass-card rounded-2xl p-8 text-center bg-primary/10 border-2 border-primary/30">
            <h2 className="text-3xl font-bold mb-4">Rejoignez des milliers de joueurs satisfaits</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Découvrez les meilleurs casinos en ligne testés et approuvés par notre équipe d'experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" className="inline-block">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors">
                  Voir les Meilleurs Casinos
                </button>
              </a>
              <a href="/blog" className="inline-block">
                <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-bold text-lg hover:bg-secondary/90 transition-colors">
                  Lire nos Avis Détaillés
                </button>
              </a>
            </div>
          </section>

          {/* Related Links */}
          <div className="mt-12">
            <RelatedLinks
              title="📚 En Savoir Plus"
              links={[
                {
                  title: "Blog Casino 2025",
                  description: "Avis détaillés des meilleurs casinos en ligne",
                  href: "/blog"
                },
                {
                  title: "Méthodologie de Test",
                  description: "Comment nous testons et évaluons les casinos",
                  href: "/about"
                },
                {
                  title: "Top Casinos Crypto",
                  description: "Les meilleurs casinos acceptant les cryptomonnaies",
                  href: "/top-casinos-crypto"
                },
                {
                  title: "Astuces Casino",
                  description: "Stratégies et conseils d'experts pour maximiser vos gains",
                  href: "/astuces-casino"
                }
              ]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

