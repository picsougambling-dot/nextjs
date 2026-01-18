'use client';

import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Link } from '@/i18n/navigation';
import { ExternalLink, Gift, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from 'next-intl';
import { useParams } from 'next/navigation';


const casinosSansWager = [
  {
    name: "Kings Chance",
    bonus: "150% jusqu'à 500€ + 40 FS",
    playUrl: "https://www.kingschanceclick.com/click/43/113/2136/1",
    highlight: "Sans wager strict",
    slug: "kingschance"
  },
  {
    name: "Spin Dinasty",
    bonus: "200% jusqu'à 500€ + 50 FS",
    playUrl: "https://www.spindynastylinks.com/click/93/423/2140/1",
    highlight: "Cryptos acceptées",
    slug: "spindinasty"
  },
  {
    name: "Lucky Treasure",
    bonus: "200% jusqu'à 500€ + 100 FS",
    playUrl: "https://www.luckytreasurelinks.com/click/85/337/2140/1",
    highlight: "25 FS sans dépôt",
    slug: "luckytreasure"
  }
];

export default function BlogPost() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('Blog7AstucesBonusSansWager2026');
  
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide bg-primary/10 px-3 py-1 rounded-full">
                {t('header.category')}
              </span>
              <span className="text-xs text-muted-foreground">{t('header.date')}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              {t('header.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('header.description')}
            </p>
          </header>
          
          <img 
            src="https://csuxjmfbwmkxiegfpljm.supabase.co/storage/v1/object/public/blog-images/organization-11831/1767509374104_image_1767509373664.png"
            alt={t('image.alt')}
            className="w-full h-auto rounded-2xl my-8 shadow-lg"
          />

          {/* Table des matières */}
          <nav className="glass-card rounded-2xl p-6 mb-12">
            <h2 className="text-xl font-bold mb-4 text-primary">{t('toc.title')}</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#comprendre" className="hover:text-primary transition-colors">{t('toc.items.comprendre')}</a></li>
              <li><a href="#identifier" className="hover:text-primary transition-colors">{t('toc.items.identifier')}</a></li>
              <li><a href="#conditions" className="hover:text-primary transition-colors">{t('toc.items.conditions')}</a></li>
              <li><a href="#casinos" className="hover:text-primary transition-colors">{t('toc.items.casinos')}</a></li>
              <li><a href="#filtres" className="hover:text-primary transition-colors">{t('toc.items.filtres')}</a></li>
              <li><a href="#freespins" className="hover:text-primary transition-colors">{t('toc.items.freespins')}</a></li>
              <li><a href="#gestion" className="hover:text-primary transition-colors">{t('toc.items.gestion')}</a></li>
            </ul>
          </nav>

          {/* Résumé rapide */}
          <div className="glass-card rounded-2xl p-6 mb-12 bg-primary/5 border-2 border-primary/20">
            <h2 className="text-xl font-bold mb-4 text-primary">{t('summary.title')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">{t('summary.points.verify.title')}</strong>
                  <p className="text-sm text-muted-foreground">{t('summary.points.verify.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">{t('summary.points.reliable.title')}</strong>
                  <p className="text-sm text-muted-foreground">{t('summary.points.reliable.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Gift className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">{t('summary.points.filters.title')}</strong>
                  <p className="text-sm text-muted-foreground">{t('summary.points.filters.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ExternalLink className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">{t('summary.points.responsible.title')}</strong>
                  <p className="text-sm text-muted-foreground">{t('summary.points.responsible.description')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <section id="comprendre" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">{t('sections.comprendre.title')}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('sections.comprendre.content.p1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('sections.comprendre.content.p2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('sections.comprendre.content.p3') }} />
              <div className="glass-card rounded-xl p-4 bg-primary/5 border border-primary/20 mt-6">
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: t('sections.comprendre.content.tip') }} />
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="identifier" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">{t('sections.identifier.title')}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('sections.identifier.content.p1') }} />
              <div className="glass-card rounded-xl p-6 my-6">
                <h3 className="font-bold text-foreground mb-4">{t('sections.identifier.checklist.title')}</h3>
                <ul className="space-y-2">
                  {t.raw('sections.identifier.checklist.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-primary">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p dangerouslySetInnerHTML={{ __html: t('sections.identifier.content.p2') }} />
            </div>
          </section>

          {/* CTA Section - Casinos Sans Wager */}
          <section className="glass-card rounded-2xl p-8 mb-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
            <h2 className="text-2xl font-bold mb-2 text-center text-foreground">{t('sections.cta.title')}</h2>
            <p className="text-center text-muted-foreground mb-8">{t('sections.cta.subtitle')}</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {casinosSansWager.map((casino, index) => (
                <div key={casino.slug} className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-4xl mb-3">{index === 0 ? '👑' : index === 1 ? '🎰' : '💎'}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{casino.name}</h3>
                  <p className="text-primary font-semibold mb-2">{casino.bonus}</p>
                  <span className="inline-block text-xs bg-primary/20 text-primary px-2 py-1 rounded-full mb-4">{casino.highlight}</span>
                  <div className="space-y-2">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <a href={casino.playUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('sections.cta.playNow')}
                      </a>
                    </Button>
                    <Link href={`/${casino.slug}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      {t('sections.cta.seeReview')}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="conditions" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">{t('sections.conditions.title')}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('sections.conditions.content.p1') }} />
              <div className="glass-card rounded-xl p-6 my-6">
                <h3 className="font-bold text-foreground mb-4">{t('sections.conditions.checklist.title')}</h3>
                <ul className="space-y-3">
                  {t.raw('sections.conditions.checklist.items').map((item: string, index: number) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
              <p dangerouslySetInnerHTML={{ __html: t('sections.conditions.content.p2') }} />
            </div>
          </section>

          {/* Section 4 */}
          <section id="casinos" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">{t('sections.casinos.title')}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('sections.casinos.content.p1') }} />
              <div className="glass-card rounded-xl p-6 my-6">
                <h3 className="font-bold text-foreground mb-4">{t('sections.casinos.checklist.title')}</h3>
                <ul className="space-y-3">
                  {t.raw('sections.casinos.checklist.items').map((item: string, index: number) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
              <p dangerouslySetInnerHTML={{ __html: t('sections.casinos.content.p2') }} />
            </div>
          </section>

          {/* Section 5 */}
          <section id="filtres" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">5. Utiliser les filtres avancés pour comparer les offres</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Les filtres avancés sont devenus un outil essentiel pour les joueurs qui cherchent le meilleur bonus sans wager en 2026. Ils permettent de trier rapidement les offres selon des critères précis.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="glass-card rounded-xl p-4">
                  <h4 className="font-bold text-foreground mb-2">Filtres clés</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Pourcentage du bonus</li>
                    <li>• Montant maximum</li>
                    <li>• Jeux éligibles</li>
                  </ul>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <h4 className="font-bold text-foreground mb-2">Critères avancés</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Méthodes de paiement</li>
                    <li>• Durée de validité</li>
                    <li>• Restrictions par pays</li>
                  </ul>
                </div>
              </div>
              <p>
                Les filtres avancés vous évitent de perdre du temps à examiner manuellement chaque offre. Utilisez notre <Link href="/" className="text-primary hover:underline">comparateur de casinos</Link> pour trouver les meilleures offres.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="freespins" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">6. Maximiser ses gains grâce aux free spins sans wager</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Les <strong className="text-foreground">free spins sans wager</strong> représentent une opportunité unique pour générer des gains réels sans risque financier supplémentaire.
              </p>
              <div className="glass-card rounded-xl p-6 my-6">
                <h3 className="font-bold text-foreground mb-4">Stratégies pour optimiser vos free spins :</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><span className="text-primary">🎯</span> Sélectionnez des jeux avec <strong className="text-foreground">RTP élevé</strong> (96%+)</li>
                  <li className="flex items-center gap-2"><span className="text-primary">📊</span> Privilégiez une <strong className="text-foreground">volatilité moyenne</strong></li>
                  <li className="flex items-center gap-2"><span className="text-primary">🎰</span> Choisissez des <Link href="/top-slots-2026" className="text-primary hover:underline">machines à sous populaires</Link></li>
                  <li className="flex items-center gap-2"><span className="text-primary">💰</span> Calculez précisément vos gains potentiels</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="gestion" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">7. Adopter une gestion responsable de son bonus</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Une gestion responsable de bonus de casino implique bien plus que de simplement recevoir et utiliser un bonus. Il s'agit de développer une approche stratégique qui protège votre capital.
              </p>
              <div className="glass-card rounded-xl p-6 my-6 bg-red-500/5 border border-red-500/20">
                <h3 className="font-bold text-foreground mb-4">⚠️ Principes clés de gestion responsable :</h3>
                <ul className="space-y-2">
                  <li>• <strong className="text-foreground">Définir un budget strict</strong></li>
                  <li>• <strong className="text-foreground">Fixer des limites de mise</strong></li>
                  <li>• <strong className="text-foreground">Suivre précisément vos dépenses</strong></li>
                  <li>• <strong className="text-foreground">Éviter la poursuite des pertes</strong></li>
                  <li>• <strong className="text-foreground">Savoir faire des pauses</strong></li>
                </ul>
              </div>
              <p>
                La discipline est votre meilleur allié. Un joueur responsable comprend que les bonus sont des opportunités de plaisir et non un moyen de s'enrichir rapidement. Consultez nos <Link href="/astuces-casino" className="text-primary hover:underline">astuces casino</Link> pour plus de conseils.
              </p>
            </div>
          </section>

          {/* CTA Final */}
          <section className="glass-card rounded-2xl p-8 mb-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">🎁 Prêt à profiter des meilleurs bonus sans wager ?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ne perdez plus de temps à déchiffrer des conditions opaques. Découvrez notre sélection de casinos avec bonus sans conditions de mise, testés et approuvés par notre équipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/bonus-sans-wager">
                  <Gift className="w-5 h-5 mr-2" />
                  Voir tous les bonus sans wager
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/">
                  Comparer tous les casinos
                </Link>
              </Button>
            </div>
          </section>

          {/* Articles connexes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">📚 Articles connexes</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/bonus-sans-wager" className="glass-card rounded-xl p-4 hover:scale-105 transition-transform">
                <div className="text-2xl mb-2">🎁</div>
                <h3 className="font-bold text-foreground mb-1">Bonus Sans Wager 2026</h3>
                <p className="text-sm text-muted-foreground">Guide complet des offres</p>
              </Link>
              <Link href="/astuces-casino" className="glass-card rounded-xl p-4 hover:scale-105 transition-transform">
                <div className="text-2xl mb-2">💡</div>
                <h3 className="font-bold text-foreground mb-1">Astuces Casino</h3>
                <p className="text-sm text-muted-foreground">Stratégies gagnantes</p>
              </Link>
              <Link href="/bonus-cashback" className="glass-card rounded-xl p-4 hover:scale-105 transition-transform">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="font-bold text-foreground mb-1">Bonus Cashback</h3>
                <p className="text-sm text-muted-foreground">Récupérez vos pertes</p>
              </Link>
            </div>
          </section>

        </article>
      </div>
      <Footer />
    </>
  );
}
