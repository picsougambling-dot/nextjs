'use client';

import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useUserCountry } from '@/hooks/useUserCountry';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, XCircle, TrendingUp, Shield, Gift, Wallet, Star } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import SEOEnrichedBlog from '@/components/SEOEnrichedBlog';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { casinos } from '@/data/casinos';

export default function AvisMaChance() {
  const locale = useLocale();
    const { countryCode: userCountry } = useUserCountry();
  
const casino = casinos.find(c => c.id === 13);

    
  // Vérifier si le casino est disponible dans le pays de l'utilisateur
  // Si userCountry est null, ne pas afficher (comme sur les autres pages)
  const isAvailableInCountry = !!userCountry && (
    !casino?.availableCountries || 
    casino.availableCountries.length === 0 || 
    casino.availableCountries.includes(userCountry)
  );
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "OnlineBusiness",
      "name": "MaChance Casino",
      "image": "/images/machance.webp"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.4",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "GigaBonus"
    },
    "datePublished": "2026-10-13",
    "reviewBody": "MaChance Casino se distingue par son bonus généreux de 150% jusqu'à 500€ + 100 free spins avec un wager modéré de x40. La roue de la fortune quotidienne et le programme VIP ajoutent une dimension ludique appréciable."
  };

  if (!casino) {
    return <div>Casino non trouvé</div>;
  }

  
  // Si le casino n'est pas disponible dans le pays, ne pas afficher la page
  if (!isAvailableInCountry) {
    return (
      <>
        <Navbar />
        <Breadcrumbs />
        <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Casino non disponible</h1>
            <p className="text-muted-foreground mb-8">Ce casino n'est pas disponible dans votre pays.</p>
            <Link href={`/${locale}/blog`}>
              <Button>Retour au blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        locale={locale}
        title="Avis MaChance Casino 2026 : Test Complet & Bonus | GigaBonus"
        description="Découvrez notre avis détaillé sur MaChance Casino en 2026. Test complet : bonus 150% jusqu'à 500€ + 100 free spins, wager x40, retraits rapides."
        keywords="avis machance, machance casino, bonus machance, avis machance 2026, casino machance"
        canonical={`https://gigabonus.win/${locale}/blog/avis-machance-2026`}
        ogTitle="Avis MaChance Casino 2026 : Test Complet & Bonus"
        ogDescription="Découvrez notre avis détaillé sur MaChance Casino en 2026. Test complet : bonus 150% jusqu'à 500€ + 100 free spins."
        ogImage="https://gigabonus.win/images/machance.webp"
        twitterTitle="Avis MaChance Casino 2026 : Test Complet & Bonus"
        twitterDescription="Découvrez notre avis détaillé sur MaChance Casino en 2026. Test complet : bonus 150% jusqu'à 500€ + 100 free spins."
        schema={jsonLd}
      />
      <Navbar />
      <div className="min-h-screen bg-background pt-28">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumbs />
          
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="default">Avis Casino</Badge>
                <Badge variant="outline">2026</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Avis MaChance Casino 2026 : Test Complet
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <time dateTime="2026-10-13">13 octobre 2026</time>
                <span>•</span>
                <span>Lecture : 8 min</span>
              </div>
            </header>

            <Card className="mb-8 overflow-hidden">
              <img 
                src="/images/machance.webp" 
                alt="MaChance Casino interface et bonus"
                className="w-full h-auto"
              />
            </Card>

            <div className="prose prose-lg max-w-none">
              <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
                <div className="flex items-start gap-4">
                  <Star className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-foreground">Notre Verdict</h2>
                    <p className="text-muted-foreground mb-4">
                      MaChance offre un excellent équilibre entre généreux bonus et conditions raisonnables. Le pack de bienvenue de 150% + 100 free spins avec un wager de x40 est très compétitif. La roue de la fortune quotidienne ajoute une touche ludique qui plaira aux joueurs réguliers.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                        <Star className="w-5 h-5 fill-primary/40 text-primary/40" />
                      </div>
                      <span className="font-bold text-foreground">4.4/5</span>
                    </div>
                  </div>
                </div>
              </Card>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground flex items-center gap-2">
                <Gift className="w-8 h-8 text-primary" />
                Bonus et Promotions
              </h2>
              
              <Card className="p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Bonus de Bienvenue</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <span className="font-semibold">Montant</span>
                    <span className="text-primary font-bold">150% jusqu'à 500€ + 100 FS</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="font-semibold">Wager</span>
                    <span className="font-bold">x40</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="font-semibold">Dépôt minimum</span>
                    <span className="font-bold">20€</span>
                  </div>
                </div>
              </Card>

              <p className="mb-4">
                Le bonus de MaChance combine un pourcentage élevé (150%) avec des free spins généreux. Pour un dépôt de 100€, vous recevez 150€ de bonus et devez miser 10 000€ ((100 + 150) × 40) pour débloquer vos gains. Un bon compromis entre générosité et faisabilité.
              </p>

              <Card className="p-6 mb-6 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-bold mb-3 text-foreground">🎡 Roue de la Fortune</h3>
                <p className="text-muted-foreground">
                  Chaque jour, tournez la roue de la fortune pour gagner des free spins, du cashback ou des bonus ! Cette fonctionnalité exclusive ajoute du fun et des récompenses quotidiennes.
                </p>
              </Card>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground flex items-center gap-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                Points Forts et Faibles
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6 border-green-500/20 bg-green-500/5">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    Points Forts
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Bonus 150% + 100 FS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Wager raisonnable à x40</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Roue de la fortune quotidienne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Cashback hebdomadaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Programme VIP attractif</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 border-red-500/20 bg-red-500/5">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <XCircle className="w-6 h-6 text-red-500" />
                    Points Faibles
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Vérification KYC parfois lente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Limites de retrait mensuelles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Support client non 24/7</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground flex items-center gap-2">
                <Wallet className="w-8 h-8 text-primary" />
                Méthodes de Paiement
              </h2>

              <Card className="p-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <img src="/images/methods/carte-bancaire.webp" alt="Carte Bancaire" className="w-8 h-8" />
                    <span className="text-sm font-medium">CB</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <img src="/images/methods/cashlib.webp" alt="Cashlib" className="w-8 h-8" />
                    <span className="text-sm font-medium">Cashlib</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <img src="/images/methods/neosurf.webp" alt="Neosurf" className="w-8 h-8" />
                    <span className="text-sm font-medium">Neosurf</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <img src="/images/methods/virement-bancaire.webp" alt="Virement" className="w-8 h-8" />
                    <span className="text-sm font-medium">Virement</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <img src="/images/methods/crypto.webp" alt="Crypto" className="w-8 h-8" />
                    <span className="text-sm font-medium">Crypto</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                    <img src="/images/methods/jetonbank.webp" alt="JetonBank" className="w-8 h-8" />
                    <span className="text-sm font-medium">JetonBank</span>
                  </div>
                </div>
              </Card>

              <p className="mb-6">
                MaChance accepte une gamme complète de méthodes de paiement avec un dépôt minimum de 20€. Les retraits sont traités sous 24-48h pour les e-wallets et cryptos, et 3-5 jours pour les virements bancaires.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground flex items-center gap-2">
                <Shield className="w-8 h-8 text-primary" />
                Sécurité et Fiabilité
              </h2>

              <p className="mb-4">
                MaChance opère sous licence Curaçao et utilise le cryptage SSL pour protéger toutes les données sensibles. Le casino collabore exclusivement avec des fournisseurs de jeux certifiés et audités régulièrement.
              </p>

              <Card className="p-6 mb-6 bg-amber-500/10 border-amber-500/20">
                <h3 className="text-xl font-bold mb-3 text-foreground">⚠️ Jeu Responsable</h3>
                <p className="text-muted-foreground">
                  MaChance propose des outils de jeu responsable : limites de dépôt, auto-exclusion temporaire ou permanente, et liens vers des organisations d'aide. Strictement interdit aux moins de 18 ans.
                </p>
              </Card>

              <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">Conclusion</h2>

              <p className="mb-4">
                <strong>MaChance Casino</strong> est un excellent choix pour les joueurs recherchant un bon équilibre entre bonus généreux et conditions accessibles. Le wager de x40 est raisonnable, et la roue de la fortune quotidienne ajoute une dimension ludique bienvenue.
              </p>

              <p className="mb-6">
                Le programme VIP et le cashback hebdomadaire complètent une offre déjà solide. Si vous cherchez un casino fiable avec des promotions régulières et un bonus de bienvenue attractif, MaChance mérite vraiment votre attention.
              </p>

              <Card className="p-6 text-center">
                <p className="text-xl font-bold mb-4 text-foreground">Tentez votre chance !</p>
                <Button asChild size="lg" className="text-lg px-8" disabled={!isAvailableInCountry}>
                  <a 
                    href="https://tinkerkov.com/api/v3/offer/321?aff_sub=%7Bclick_id%7D&aff_sub2=%7Bweb_id%7D&aff_sub4=seo&affiliate_id=889&url_id=838&free_1=/registration"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Jouer sur MaChance
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  +18 | Jouer comporte des risques
                </p>
              </Card>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}
