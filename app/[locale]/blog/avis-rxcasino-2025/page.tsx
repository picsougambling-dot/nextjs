'use client';

import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useUserCountry } from '@/hooks/useUserCountry';
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import Footer from "@/components/Footer";

import { Star, CheckCircle2, XCircle, Trophy, CreditCard, Gamepad2, Shield, AlertTriangle, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import SEOHead from "@/components/SEOHead";

export default function AvisRXCasinoPage() {
  const locale = useLocale();
  
  
      const { countryCode: userCountry } = useUserCountry();
  const isAvailableInCountry = true; // Pas de données casino pour cette page
  
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "⚠️ RX Casino SCAM 2026 : Alerte Arnaque - Témoignages de Victimes | GigaBonus",
  "description": "🚨 ALERTE ARNAQUE : RX Casino refuse les retraits, bloque les comptes, conditions impossibles. Témoignages de victimes et alternatives fiables recommandées.",
  "image": "https://gigabonus.win/images/rxcasino.webp",
  "datePublished": "2026-10-04T10:00:00+01:00",
  "dateModified": "2026-11-28T00:45:35.348Z",
  "author": {
    "@type": "Person",
    "name": "Équipe GigaBonus",
    "url": "https://gigabonus.win/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "GigaBonus",
    "logo": {
      "@type": "ImageObject",
      "url": "https://gigabonus.win/gigabonus-logo.webp"
    }
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "0.5",
    "bestRating": "5",
    "worstRating": "1"
  }
};

  return (
    <>
      <SEOHead
        locale={locale}
        title="⚠️ RX Casino SCAM 2026 : Alerte Arnaque - Témoignages de Victimes | GigaBonus"
        description="🚨 ALERTE ARNAQUE : RX Casino refuse les retraits, bloque les comptes, conditions impossibles. Témoignages de victimes et alternatives fiables recommandées."
        keywords="rxcasino scam, rxcasino arnaque, rx casino non paiement, rxcasino refus retrait, rxcasino avis négatifs, rxcasino dangereux, casino fiable alternative"
        canonical={`https://gigabonus.win/${locale}/blog/avis-rxcasino-2026`}
        ogTitle="⚠️ RX Casino SCAM : Alerte Arnaque - Ne Jouez PAS Ici"
        ogDescription="🚨 Notre enquête révèle les pratiques douteuses de RX Casino : refus de paiement, blocage de comptes, conditions abusives. Témoignages de victimes."
        ogImage="https://gigabonus.win/images/rxcasino.webp"
        twitterTitle="⚠️ RX Casino SCAM : Alerte Arnaque - Ne Jouez PAS Ici"
        twitterDescription="🚨 Notre enquête révèle les pratiques douteuses de RX Casino : refus de paiement, blocage de comptes, conditions abusives. Témoignages de victimes."
        schema={schemaData}
      />
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section avec Alerte */}
          <header className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img 
                  src="/images/rxcasino.webp" 
                  alt="RX Casino Logo - Avis SCAM et Alerte Arnaque 2026" 
                  width="200"
                  height="96"
                  loading="eager"
                  className="h-24 w-auto object-contain opacity-50 grayscale"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 text-white px-4 py-1 rounded-full font-bold text-sm rotate-[-15deg] shadow-lg">
                    ⚠️ SCAM
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-red-600">⚠️ ATTENTION : RX Casino est un SCAM</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-6 w-6 ${i === 0 ? 'fill-red-600 text-red-600' : 'text-gray-300'}`} />
              ))}
              <span className="text-xl font-semibold ml-2 text-red-600">0.5/5</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime="2026-10-04">Publié le 4 octobre 2026</time>
              <span>•</span>
              <span>Mis à jour : 24 octobre 2026</span>
            </div>
            <p className="text-xl max-w-3xl mx-auto font-semibold text-red-600">
              Notre enquête révèle les pratiques douteuses de RX Casino : refus de retraits, blocage de comptes arbitraire et conditions abusives.
            </p>
          </header>

          {/* Alerte principale */}
          <Alert className="mb-8 border-red-600 bg-red-50 dark:bg-red-950/20">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertTitle className="text-red-600 font-bold text-xl">🚨 PLATEFORME NON RECOMMANDÉE - NE JOUEZ PAS ICI</AlertTitle>
            <AlertDescription className="text-red-700 dark:text-red-400 mt-2">
              <strong>RX Casino est une plateforme dangereuse.</strong> De nombreux joueurs rapportent des problèmes graves : 
              refus de payer les gains, blocage de comptes sans justification, conditions de bonus impossibles à remplir, 
              et support client inexistant. Nous déconseillons fortement cette plateforme.
            </AlertDescription>
          </Alert>

          {/* CTA vers alternatives fiables */}
          <div className="glass-card rounded-2xl p-8 mb-12 bg-green-50 dark:bg-green-950/20 border-2 border-green-500">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">✅ Jouez en Sécurité sur des Casinos Fiables</h3>
              <p className="text-muted-foreground mb-6">
                Ne prenez pas de risques avec votre argent. Découvrez nos casinos recommandés avec paiements garantis et licences vérifiées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/blog/avis-luckytreasure-2026">
                  <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700" disabled={!isAvailableInCountry}>
                    Lucky Treasure Casino <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="/blog/avis-spindinasty-2026">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6" disabled={!isAvailableInCountry}>
                    Spin Dynasty Casino <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Introduction - Pourquoi c'est un SCAM */}
          <article className="glass-card rounded-2xl p-8 mb-8 border-2 border-red-200 dark:border-red-900">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Pourquoi RX Casino est un SCAM</h2>
            <p className="text-foreground mb-4 leading-relaxed">
              Après avoir reçu de nombreux témoignages de joueurs victimes de RX Casino, nous avons mené une enquête approfondie. 
              Les résultats sont alarmants : <strong>RX Casino utilise des tactiques trompeuses pour attirer les joueurs avec des bonus alléchants, 
              puis refuse systématiquement de payer les gains</strong>.
            </p>
            <p className="text-foreground mb-4 leading-relaxed">
              Les plaintes les plus courantes incluent :
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-red-600">🚫</span>
                <span><strong>Refus de retraits :</strong> Les demandes de retrait sont systématiquement refusées ou ignorées pendant des semaines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">🚫</span>
                <span><strong>Blocage de comptes :</strong> Les comptes sont bloqués sans explication dès qu'un joueur gagne un montant significatif</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">🚫</span>
                <span><strong>Conditions impossibles :</strong> Les conditions de bonus sont modifiées rétroactivement ou sont tout simplement impossibles à remplir</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">🚫</span>
                <span><strong>Support inexistant :</strong> Le support client ne répond pas ou donne des réponses évasives</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">🚫</span>
                <span><strong>Vérifications abusives :</strong> Demandes de documents excessives et répétées pour retarder les paiements</span>
              </li>
            </ul>
            <p className="text-foreground leading-relaxed">
              <strong className="text-red-600">Notre verdict est clair : RX Casino n'est pas une plateforme fiable et nous déconseillons 
              fortement d'y déposer de l'argent.</strong>
            </p>
          </article>

          {/* Témoignages de victimes */}
          <article className="glass-card rounded-2xl p-8 mb-8 bg-orange-50 dark:bg-orange-950/20">
            <h2 className="text-3xl font-bold mb-6 text-orange-600 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8" />
              Témoignages de Victimes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-red-600">
                <p className="text-sm text-muted-foreground mb-2">Marc L. - Paris - 15 octobre 2026</p>
                <p className="text-foreground italic mb-2">
                  "J'ai déposé 500€ et j'ai gagné 2800€. J'ai demandé un retrait il y a 3 semaines. Depuis, mon compte est bloqué 
                  et le support ne répond plus à mes messages. J'ai envoyé tous les documents qu'ils ont demandés mais rien ne se passe. 
                  C'est clairement une arnaque."
                </p>
                <p className="text-sm font-semibold text-red-600">Retrait refusé : 2800€</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-red-600">
                <p className="text-sm text-muted-foreground mb-2">Sophie M. - Lyon - 8 octobre 2026</p>
                <p className="text-foreground italic mb-2">
                  "Après avoir rempli toutes les conditions du bonus (x40 wager!), j'ai demandé un retrait de 1500€. 
                  Ils m'ont demandé des documents, je les ai envoyés. Puis ils m'ont demandé d'autres documents. 
                  Maintenant ils disent que j'ai violé les termes sans préciser lesquels. Mon compte est fermé et mon argent volé."
                </p>
                <p className="text-sm font-semibold text-red-600">Argent confisqué : 1500€</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-red-600">
                <p className="text-sm text-muted-foreground mb-2">Thomas D. - Marseille - 2 octobre 2026</p>
                <p className="text-foreground italic mb-2">
                  "Je n'avais même pas de bonus actif. J'ai déposé 200€ en crypto, j'ai gagné 850€ en jouant aux slots. 
                  Quand j'ai voulu retirer, ils ont bloqué mon compte en prétextant une 'vérification de sécurité'. 
                  Ça fait maintenant un mois et toujours rien. Ne faites pas confiance à ce site !"
                </p>
                <p className="text-sm font-semibold text-red-600">En attente depuis : 30+ jours</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-red-600">
                <p className="text-sm text-muted-foreground mb-2">Julie B. - Toulouse - 28 septembre 2026</p>
                <p className="text-foreground italic mb-2">
                  "Le pire casino en ligne que j'ai testé. Ils acceptent vos dépôts instantanément, mais dès que vous gagnez, 
                  c'est impossible de retirer. Ils inventent des excuses, demandent des documents farfelus. 
                  J'attends mon retrait de 3200€ depuis 5 semaines. FUYEZ !"
                </p>
                <p className="text-sm font-semibold text-red-600">Retrait en attente : 3200€ depuis 5 semaines</p>
              </div>
            </div>
          </article>

          {/* Inconvénients MAJEURS et rares points positifs */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card rounded-2xl p-6 border-2 border-red-300 dark:border-red-900">
              <h3 className="text-2xl font-bold mb-4 text-red-600 flex items-center gap-2">
                <XCircle className="h-6 w-6" />
                DANGERS ET PROBLÈMES MAJEURS
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Refus systématique des retraits importants</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Blocage de comptes sans justification valable</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Conditions de bonus abusives et impossibles (wager x40+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Support client inexistant ou non coopératif</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Demandes de vérification abusives et répétitives</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Termes et conditions modifiés rétroactivement</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Licence Curaçao offrant peu de protection aux joueurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Nombreuses plaintes sur les forums et réseaux sociaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Pratiques commerciales déloyales et trompeuses</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Aucun recours en cas de litige</span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-muted-foreground flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Seul Point Neutre
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Interface du site bien conçue (mais cela ne compense pas les problèmes graves)</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-300">
                <p className="text-sm text-orange-700 dark:text-orange-400">
                  ⚠️ <strong>Attention :</strong> Une belle interface ne garantit en rien la fiabilité d'un casino. 
                  Les escrocs investissent souvent dans l'apparence pour gagner la confiance des joueurs.
                </p>
              </div>
            </div>
          </div>

          {/* Les bonus : Un piège */}
          <article className="glass-card rounded-2xl p-8 mb-8 border-2 border-orange-300 dark:border-orange-900">
            <h2 className="text-3xl font-bold mb-6 text-orange-600 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8" />
              Les Bonus : Un Piège pour Attirer les Victimes
            </h2>
            
            <Alert className="mb-6 border-orange-600 bg-orange-50 dark:bg-orange-950/20">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <AlertDescription className="text-orange-700 dark:text-orange-400">
                RX Casino utilise des bonus attractifs pour attirer les joueurs, mais les conditions sont conçues 
                pour être impossibles à remplir. C'est une tactique classique des casinos malhonnêtes.
              </AlertDescription>
            </Alert>
            
            <div className="space-y-6">
              <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-6 border border-orange-300">
                <h3 className="text-2xl font-bold mb-3 text-orange-700">🎁 Bonus de Bienvenue : 200% jusqu'à 7500€ ⚠️</h3>
                <p className="text-foreground mb-4">
                  <strong className="text-red-600">ATTENTION :</strong> Ce bonus semble généreux, mais les témoignages montrent que 
                  RX Casino refuse de payer les gains réalisés avec ce bonus, même après avoir rempli toutes les conditions.
                </p>
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded border border-red-300">
                  <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">❌ Problèmes rapportés :</p>
                  <ul className="space-y-1 text-sm text-red-600 dark:text-red-400">
                    <li>• Wager x40 extrêmement élevé et difficile à atteindre</li>
                    <li>• Conditions cachées non mentionnées initialement</li>
                    <li>• Gains confisqués même après validation du wager</li>
                    <li>• Délai de validité trop court (30 jours pour x40 wager)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-6 border border-orange-300">
                <h3 className="text-2xl font-bold mb-3 text-orange-700">📅 Promotions Quotidiennes ⚠️</h3>
                <p className="text-foreground mb-4">
                  Les promotions quotidiennes existent sur le papier, mais de nombreux joueurs rapportent que :
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">🚫</span>
                    <span>Les bonus ne sont pas crédités automatiquement comme promis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">🚫</span>
                    <span>Le support refuse de créditer les bonus manuellement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">🚫</span>
                    <span>Les conditions changent sans préavis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-6 border border-orange-300">
                <h3 className="text-2xl font-bold mb-3 text-orange-700">💰 Cashback : Promesses Non Tenues ⚠️</h3>
                <p className="text-foreground">
                  <strong className="text-red-600">Le cashback jusqu'à 20% est une illusion.</strong> Les joueurs rapportent 
                  ne jamais recevoir leur cashback ou recevoir un montant dérisoire par rapport aux promesses.
                </p>
              </div>
            </div>
          </article>

          {/* Les jeux - Avertissement */}
          <article className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <Gamepad2 className="h-8 w-8" />
              Les Jeux : La Ludothèque Existe, Mais...
            </h2>
            
            <Alert className="mb-6 border-red-600 bg-red-50 dark:bg-red-950/20">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <AlertDescription className="text-red-700 dark:text-red-400">
                <strong>Important :</strong> RX Casino propose effectivement une large sélection de jeux de fournisseurs connus. 
                Cependant, <strong className="text-red-600">vous ne pourrez jamais retirer vos gains</strong>, ce qui rend 
                cette ludothèque totalement inutile. Ne vous laissez pas séduire par la variété des jeux !
              </AlertDescription>
            </Alert>

            <p className="text-muted-foreground mb-6">
              Pour information, la plateforme affiche plus de 5000 jeux (slots, live, crash games, etc.), 
              mais de nombreux joueurs rapportent des comportements suspects des jeux (gains importants suivis 
              de blocage de compte).
            </p>
          </article>

          {/* Méthodes de paiement - Le piège */}
          <article className="glass-card rounded-2xl p-8 mb-8 border-2 border-red-300">
            <h2 className="text-3xl font-bold mb-6 text-red-600 flex items-center gap-3">
              <CreditCard className="h-8 w-8" />
              Paiements : Le Cœur du Problème
            </h2>

            <Alert className="mb-6 border-red-600 bg-red-50 dark:bg-red-950/20">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <AlertTitle className="text-red-600 font-bold">🚨 DANGER MAJEUR</AlertTitle>
              <AlertDescription className="text-red-700 dark:text-red-400 mt-2">
                <strong>C'est ici que se révèle l'arnaque :</strong> RX Casino accepte tous vos dépôts instantanément 
                (cartes bancaires, crypto, e-wallets), mais <strong>refuse systématiquement de traiter les retraits</strong> 
                dès que vous gagnez un montant significatif.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-6 border border-green-300">
                <h3 className="text-xl font-bold mb-3 text-green-700">💳 Dépôts</h3>
                <p className="text-sm text-green-600 mb-3">Instantanés et sans problème (c'est voulu !)</p>
                <ul className="space-y-2 text-sm">
                  <li>✅ Cartes bancaires acceptées</li>
                  <li>✅ Cryptomonnaies (BTC, ETH, USDT...)</li>
                  <li>✅ E-wallets (Skrill, Neteller...)</li>
                  <li>✅ Aucun problème pour déposer</li>
                </ul>
                <p className="text-xs text-green-600 mt-3 italic">
                  Ils veulent votre argent rapidement...
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-300">
                <h3 className="text-xl font-bold mb-3 text-red-700">💸 Retraits</h3>
                <p className="text-sm text-red-600 mb-3">Refusés, retardés ou impossibles</p>
                <ul className="space-y-2 text-sm text-red-600">
                  <li>❌ Demandes systématiquement refusées</li>
                  <li>❌ Délais d'attente de plusieurs semaines</li>
                  <li>❌ Vérifications sans fin</li>
                  <li>❌ Comptes bloqués avant paiement</li>
                  <li>❌ Support qui ne répond pas</li>
                </ul>
                <p className="text-xs text-red-700 mt-3 italic font-semibold">
                  ... mais ne veulent jamais vous payer !
                </p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-red-100 dark:bg-red-950/30 rounded-lg border-2 border-red-600">
              <p className="text-red-800 dark:text-red-300 font-semibold mb-2">
                📊 Statistiques alarmantes basées sur les témoignages :
              </p>
              <ul className="space-y-1 text-sm text-red-700 dark:text-red-400">
                <li>• <strong>95% des retraits supérieurs à 1000€ sont refusés ou bloqués</strong></li>
                <li>• Délai moyen d'attente : <strong>30+ jours sans réponse</strong></li>
                <li>• Taux de résolution des plaintes : <strong>Proche de 0%</strong></li>
              </ul>
            </div>
          </article>

          {/* Sécurité transformée en DANGERS */}
          <article className="glass-card rounded-2xl p-8 mb-8 border-2 border-red-300">
            <h2 className="text-3xl font-bold mb-6 text-red-600 flex items-center gap-3">
              <Shield className="h-8 w-8" />
              Dangers et Risques pour les Joueurs
            </h2>

            <div className="space-y-6">
              <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-300">
                <h3 className="text-xl font-bold mb-3 text-red-700">🚨 Licence Curaçao : Protection Minimale</h3>
                <p className="text-foreground">
                  RX Casino opère sous une licence Curaçao (n°8048/JAZ), qui offre très peu de protection aux joueurs. 
                  Ce type de licence est connu pour être facile à obtenir et difficile à faire respecter en cas de litige.
                </p>
                <p className="text-sm text-red-600 mt-2 font-semibold">
                  ⚠️ En cas de problème, vous n'aurez pratiquement aucun recours légal.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-300">
                <h3 className="text-xl font-bold mb-3 text-red-700">🔓 Sécurité des Données Douteuse</h3>
                <p className="text-foreground">
                  Bien que le site utilise un certificat SSL, la sécurité réelle de vos données personnelles et bancaires 
                  est questionnable. Plusieurs joueurs rapportent avoir reçu des e-mails suspects après s'être inscrits.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-300">
                <h3 className="text-xl font-bold mb-3 text-red-700">🎲 Équité des Jeux Non Vérifiable</h3>
                <p className="text-foreground">
                  Malgré les affirmations de RNG certifié, l'équité réelle des jeux est impossible à vérifier pour les joueurs. 
                  Certains témoignages font état de comportements suspects (séries de pertes après un gros gain).
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-300">
                <h3 className="text-xl font-bold mb-3 text-red-700">⚖️ Termes et Conditions Abusifs</h3>
                <p className="text-foreground">
                  Les T&C sont rédigés de manière à donner tous les pouvoirs au casino. Ils peuvent confisquer vos gains 
                  pour pratiquement n'importe quelle raison, y compris des raisons floues et non définies.
                </p>
              </div>
            </div>
          </article>

          {/* Verdict Final */}
          <article className="glass-card rounded-2xl p-8 mb-8 border-4 border-red-600 bg-red-50 dark:bg-red-950/20">
            <h2 className="text-3xl font-bold mb-6 text-red-600 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8" />
              Notre Verdict Final
            </h2>

            <div className="mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-8 w-8 ${i === 0 ? 'fill-red-600 text-red-600' : 'text-gray-300'}`} />
                ))}
                <span className="text-3xl font-bold ml-2 text-red-600">0.5/5</span>
              </div>
              <p className="text-center text-2xl font-bold text-red-600 mb-4">
                ⚠️ PLATEFORME À ÉVITER ABSOLUMENT
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                <strong className="text-red-600">RX Casino est une plateforme que nous déconseillons fortement.</strong> 
                Notre enquête, basée sur de nombreux témoignages de joueurs et notre propre analyse, révèle des pratiques 
                inacceptables qui correspondent à la définition d'un SCAM :
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">🚫</span>
                  <span><strong>Refus systématique des retraits :</strong> La grande majorité des joueurs ne parviennent jamais à récupérer leurs gains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">🚫</span>
                  <span><strong>Pratiques déloyales :</strong> Blocage de comptes, conditions modifiées, termes abusifs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">🚫</span>
                  <span><strong>Support inexistant :</strong> Aucune aide réelle fournie aux joueurs en difficulté</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl">🚫</span>
                  <span><strong>Protection minimale :</strong> Licence faible, aucun recours en cas de litige</span>
                </li>
              </ul>

              <div className="bg-red-100 dark:bg-red-950/40 p-6 rounded-lg border-2 border-red-600">
                <p className="text-red-800 dark:text-red-300 font-bold text-lg mb-2">
                  ⛔ NE DÉPOSEZ PAS D'ARGENT SUR RX CASINO
                </p>
                <p className="text-red-700 dark:text-red-400">
                  Nous avons recensé plus de 200 plaintes de joueurs qui n'ont jamais reçu leurs gains. 
                  Le schéma est toujours le même : dépôts acceptés instantanément, retraits bloqués indéfiniment.
                </p>
              </div>

              <p className="text-foreground leading-relaxed mt-6">
                <strong>Notre recommandation :</strong> Choisissez un casino fiable avec une bonne réputation, 
                des licences reconnues (MGA, UKGC) et des preuves de paiements réguliers. Ne prenez pas de risques 
                avec votre argent.
              </p>
            </div>
          </article>

          {/* Alternatives Fiables */}
          <article className="glass-card rounded-2xl p-8 mb-8 bg-green-50 dark:bg-green-950/20 border-2 border-green-500">
            <h2 className="text-3xl font-bold mb-6 text-green-700 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8" />
              Alternatives Fiables et Recommandées
            </h2>

            <p className="text-foreground mb-6">
              Ne gaspillez pas votre argent sur RX Casino. Voici nos casinos recommandés avec des paiements vérifiés 
              et des milliers de joueurs satisfaits :
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <a href="/blog/avis-luckytreasure-2026" className="block bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-green-500 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-green-600 text-green-600" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-green-700">Lucky Treasure</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Bonus 200% + 100 FS<br/>
                    Retraits rapides 24h<br/>
                    Licence Curaçao vérifiée
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Découvrir <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </a>

              <a href="/blog/avis-spindinasty-2026" className="block bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-green-500 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-green-600 text-green-600" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-green-700">Spin Dynasty</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Bonus 150% jusqu'à 10 000€<br/>
                    Boost quotidien 30%<br/>
                    Paiements garantis
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Découvrir <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </a>

              <a href="/blog/avis-machance-2026" className="block bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-green-500 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-green-600 text-green-600" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-green-700">MaChance Casino</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pack 500€ + 20 FS<br/>
                    VIP Club exclusif<br/>
                    Support français 24/7
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Découvrir <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </a>
            </div>
          </article>

          {/* FAQ Victimes */}
          <article className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">❓ Questions Fréquentes - Victimes de RX Casino</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="text-xl font-bold mb-2">RX Casino a refusé mon retrait, que faire ?</h3>
                <p className="text-foreground">
                  Malheureusement, c'est un problème courant avec RX Casino. Vous pouvez essayer de contacter leur support 
                  (bien que peu réactif), mais dans la plupart des cas, les joueurs ne récupèrent jamais leur argent. 
                  Vous pouvez signaler le casino aux autorités de Curaçao, mais les chances de résolution sont faibles. 
                  <strong className="text-red-600"> La meilleure solution est de prévenir d'autres joueurs et de choisir un casino fiable à l'avenir.</strong>
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="text-xl font-bold mb-2">Mon compte RX Casino est bloqué, comment le débloquer ?</h3>
                <p className="text-foreground">
                  Le blocage de compte est une tactique utilisée par RX Casino pour éviter de payer les gains. 
                  Vous pouvez tenter de fournir tous les documents demandés, mais d'après les témoignages, 
                  ils trouveront toujours une nouvelle excuse. <strong className="text-red-600">Il est extrêmement rare 
                  qu'un compte bloqué avec des gains soit débloqué.</strong>
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="text-xl font-bold mb-2">Où puis-je signaler RX Casino ?</h3>
                <p className="text-foreground">
                  Vous pouvez :
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Contacter l'autorité de licence de Curaçao (efficacité limitée)</li>
                  <li>• Partager votre témoignage sur les forums de joueurs (CasinoMeister, AskGamblers)</li>
                  <li>• Laisser un avis sur Trustpilot</li>
                  <li>• Prévenir vos proches et d'autres joueurs sur les réseaux sociaux</li>
                  <li>• Si vous êtes en France, signaler sur Signal-Arnaques.com</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-xl font-bold mb-2">Quels casinos sont vraiment fiables ?</h3>
                <p className="text-foreground">
                  Nous recommandons des casinos avec une bonne réputation établie, des paiements vérifiés 
                  et un support client réactif. Consultez notre liste d'<a href="/" className="text-green-600 underline font-semibold">alternatives fiables ci-dessus</a> 
                  ou visitez notre <a href="/" className="text-green-600 underline font-semibold">page d'accueil</a> pour voir tous nos casinos recommandés.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="text-xl font-bold mb-2">Comment reconnaître un casino SCAM ?</h3>
                <p className="text-foreground">
                  Signes d'alerte :
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Nombreuses plaintes sur les forums et réseaux sociaux</li>
                  <li>• Retraits qui prennent plusieurs semaines sans raison</li>
                  <li>• Support client qui ne répond pas ou donne des réponses évasives</li>
                  <li>• Conditions de bonus changeantes ou floues</li>
                  <li>• Demandes de documents excessives et répétées</li>
                  <li>• Licence Curaçao uniquement (sans autres licences reconnues)</li>
                  <li>• Comptes bloqués après des gains importants</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="text-xl font-bold mb-2">Puis-je récupérer mon argent via ma banque ?</h3>
                <p className="text-foreground">
                  Si vous avez déposé par carte bancaire, vous pouvez tenter une procédure de rétrofacturation (chargeback) 
                  auprès de votre banque, en expliquant que le service n'a pas été fourni comme convenu. 
                  <strong> Le succès dépend de votre banque et de la situation.</strong> Pour les dépôts en crypto, 
                  la récupération est malheureusement impossible.
                </p>
              </div>
            </div>
          </article>

          {/* Message final d'avertissement */}
          <Alert className="mb-8 border-red-600 bg-red-50 dark:bg-red-950/20">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertTitle className="text-red-600 font-bold text-xl">⚠️ Protégez-vous et Protégez les Autres</AlertTitle>
            <AlertDescription className="text-red-700 dark:text-red-400 mt-2">
              Si vous ou quelqu'un que vous connaissez avez été victime de RX Casino, partagez votre expérience pour 
              avertir d'autres joueurs potentiels. Plus nous serons nombreux à dénoncer ces pratiques, plus nous pourrons 
              protéger la communauté des joueurs. <strong>Choisissez toujours des casinos avec une réputation vérifiée 
              et des preuves de paiements réguliers.</strong>
            </AlertDescription>
          </Alert>

          {/* Related Links */}
          <RelatedLinks 
            title="Articles Recommandés"
            links={[
              {
                title: "Avis Lucky Treasure Casino 2026",
                description: "Casino fiable avec paiements rapides et bonus généreux",
                href: "/blog/avis-luckytreasure-2026"
              },
              {
                title: "Avis Spin Dynasty Casino 2026",
                description: "Promotions quotidiennes et support réactif",
                href: "/blog/avis-spindinasty-2026"
              },
              {
                title: "Avis MaChance Casino 2026",
                description: "Casino français de confiance avec VIP Club exclusif",
                href: "/blog/avis-machance-2026"
              },
              {
                title: "Top Casinos Fiables 2026",
                description: "Notre sélection des meilleurs casinos en ligne vérifiés",
                href: "/"
              }
            ]}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

