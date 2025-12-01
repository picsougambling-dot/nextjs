'use client';

import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { CreditCard, Coins, Wallet, Banknote, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DepotPage() {
  const depositMethods = [
    {
      name: "Carte Bancaire",
      slug: "carte",
      icon: CreditCard,
      description: "Visa, Mastercard - Dépôts instantanés",
      href: "/depot/carte"
    },
    {
      name: "Cryptomonnaies",
      slug: "crypto",
      icon: Coins,
      description: "Bitcoin, Ethereum, USDT - Retraits rapides",
      href: "/depot/crypto"
    },
    {
      name: "Neosurf",
      slug: "neosurf",
      icon: Wallet,
      description: "Carte prépayée - Anonyme et sécurisé",
      href: "/depot/neosurf"
    },
    {
      name: "Skrill",
      slug: "skrill",
      icon: Wallet,
      description: "E-wallet populaire - Transactions rapides",
      href: "/depot/skrill"
    },
    {
      name: "Neteller",
      slug: "neteller",
      icon: Wallet,
      description: "E-wallet fiable - Retraits en 24h",
      href: "/depot/neteller"
    },
    {
      name: "Paysafecard",
      slug: "paysafecard",
      icon: Banknote,
      description: "Carte prépayée - Sans compte bancaire",
      href: "/depot/paysafecard"
    },
    {
      name: "Cashlib",
      slug: "cashlib",
      icon: Smartphone,
      description: "Carte prépayée française - Disponible en tabac",
      href: "/depot/cashlib"
    },
    {
      name: "Virement Bancaire",
      slug: "virement",
      icon: CreditCard,
      description: "Virement SEPA - Dépôts sécurisés",
      href: "/depot/virement"
    },
    {
      name: "MiFinity",
      slug: "mifinity",
      icon: Wallet,
      description: "E-wallet moderne - Transactions instantanées",
      href: "/depot/mifinity"
    },
    {
      name: "Jeton Bank",
      slug: "jetonbank",
      icon: Wallet,
      description: "E-wallet international - Multi-devises",
      href: "/depot/jetonbank"
    }
  ];

  return (
    <>
      <SEOHead
        title="Méthodes de Dépôt Casino 2025 | Guide Complet"
        description="Découvrez toutes les méthodes de dépôt disponibles dans les casinos en ligne : carte bancaire, crypto, e-wallets, cartes prépayées. Guide complet avec avantages et délais."
        keywords="méthodes dépôt casino, carte bancaire casino, crypto casino, skrill casino, neteller casino, paysafecard casino"
        canonical="https://gigabonus.fr/depot"
      />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Breadcrumbs />

          <div className="text-center mb-12 mt-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Méthodes de Dépôt Casino 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choisissez la méthode de dépôt qui vous convient le mieux parmi notre sélection complète de solutions de paiement sécurisées
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {depositMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Link
                  key={method.slug}
                  href={method.href}
                  className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform border-2 border-transparent hover:border-primary/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {method.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {method.description}
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Voir les casinos →
                      </Button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Comment choisir votre méthode de dépôt ?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Chaque méthode de dépôt présente ses avantages spécifiques. Les <strong className="text-foreground">cartes bancaires</strong> sont idéales pour les dépôts instantanés et la simplicité. Les <strong className="text-foreground">cryptomonnaies</strong> offrent l'anonymat et des retraits ultra-rapides. Les <strong className="text-foreground">e-wallets</strong> comme Skrill et Neteller combinent rapidité et sécurité.
              </p>
              <p>
                Les <strong className="text-foreground">cartes prépayées</strong> (Neosurf, Paysafecard, Cashlib) sont parfaites pour contrôler vos dépenses et rester anonyme. Le <strong className="text-foreground">virement bancaire</strong> convient aux gros montants avec une sécurité maximale.
              </p>
              <p>
                Consultez nos guides détaillés pour chaque méthode ci-dessus pour découvrir les casinos qui les acceptent, les délais de traitement, les frais éventuels et nos recommandations d'experts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

