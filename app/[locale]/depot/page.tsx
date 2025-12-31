'use client';

import { Link } from '@/i18n/navigation';
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { CreditCard, Coins, Wallet, Banknote, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTranslatedCanonical } from '@/lib/get-translated-canonical';
import { useLocale, useTranslations } from 'next-intl';

export default function DepotPage() {
  const locale = useLocale();
  const t = useTranslations('DepotPages.main');
  
  const depositMethods = [
    {
      name: t('methods.carte.name'),
      slug: "carte",
      icon: CreditCard,
      description: t('methods.carte.description'),
      href: "/depot/carte"
    },
    {
      name: t('methods.crypto.name'),
      slug: "crypto",
      icon: Coins,
      description: t('methods.crypto.description'),
      href: "/depot/crypto"
    },
    {
      name: t('methods.neosurf.name'),
      slug: "neosurf",
      icon: Wallet,
      description: t('methods.neosurf.description'),
      href: "/depot/neosurf"
    },
    {
      name: t('methods.skrill.name'),
      slug: "skrill",
      icon: Wallet,
      description: t('methods.skrill.description'),
      href: "/depot/skrill"
    },
    {
      name: t('methods.neteller.name'),
      slug: "neteller",
      icon: Wallet,
      description: t('methods.neteller.description'),
      href: "/depot/neteller"
    },
    {
      name: t('methods.paysafecard.name'),
      slug: "paysafecard",
      icon: Banknote,
      description: t('methods.paysafecard.description'),
      href: "/depot/paysafecard"
    },
    {
      name: t('methods.cashlib.name'),
      slug: "cashlib",
      icon: Smartphone,
      description: t('methods.cashlib.description'),
      href: "/depot/cashlib"
    },
    {
      name: t('methods.virement.name'),
      slug: "virement",
      icon: CreditCard,
      description: t('methods.virement.description'),
      href: "/depot/virement"
    },
    {
      name: t('methods.mifinity.name'),
      slug: "mifinity",
      icon: Wallet,
      description: t('methods.mifinity.description'),
      href: "/depot/mifinity"
    },
    {
      name: t('methods.jetonbank.name'),
      slug: "jetonbank",
      icon: Wallet,
      description: t('methods.jetonbank.description'),
      href: "/depot/jetonbank"
    }
  ];

  return (
    <>
      <SEOHead
        locale={locale}
        title={t('title')}
        description={t('description')}
        keywords={t('keywords')}
        canonical={getTranslatedCanonical('/depot', locale)}
      />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Breadcrumbs />

          <div className="text-center mb-12 mt-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              {t('h1')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('subtitle')}
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
                        {t('seeCasinos')}
                      </Button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="glass-card rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              {t('howToChoose')}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p dangerouslySetInnerHTML={{ __html: t('content.p1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('content.p2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('content.p3') }} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

