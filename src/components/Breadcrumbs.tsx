'use client';

import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { ChevronRight, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbConfig {
  [key: string]: string;
}

const breadcrumbNames: BreadcrumbConfig = {
  "": "Accueil",
  "about": "Équipe GigaBonus",
  "blog": "Blog",
  "casino": "Casinos",
  "depot": "Méthodes de Dépôt",
  "top-casinos-crypto": "Top Casinos Crypto",
  "top-slots-2026": "Top Slots 2026",
  "bonus-sans-wager": "Bonus Sans Wager",
  "bonus-cashback": "Bonus Cashback",
  "casinos-sans-kyc": "Casinos Sans KYC",
  "astuce-casino": "Astuces Casino",
  "avis-megawin-2026": "Avis Megawin 2026",
  "avis-richroyal-2026": "Avis Rich Royal 2026",
  "avis-winrolla-2026": "Avis WinRolla 2026",
  "avis-cleobetra-2026": "Avis Cleobetra 2026",
  "avis-rxcasino-2026": "Avis RX Casino 2026",
  "avis-mrpacho-2026": "Avis Mr Pacho 2026",
  "avis-europefortune-2026": "Avis Europe Fortune 2026",
  "avis-spindinasty-2026": "Avis Spin Dinasty 2026",
  "avis-magicalspin-2026": "Avis Magical Spin 2026",
  "avis-playregal-2026": "Avis Play Regal 2026",
  "avis-vegasplus-2026": "Avis Vegas Plus 2026",
  "avis-machance-2026": "Avis MaChance 2026",
  "avis-uniquecasino-2026": "Avis Unique Casino 2026",
  "avis-cazinostars-2026": "Avis Cazino Stars 2026",
  "avis-atlantisslots-2026": "Avis Atlantis Slots 2026",
  "avis-casinointense-2026": "Avis Casino Intense 2026",
  "avis-luckytreasure-2026": "Avis Lucky Treasure 2026",
  "avis-bonrush-2026": "Avis BonRush 2026",
  "avis-betify-2026": "Avis Betify 2026",
  "atlantis-slots": "Atlantis Slots",
  "betify": "Betify",
  "billybets": "BillyBets",
  "casinointense": "Casino Intense",
  "cazinostars": "Cazino Stars",
  "cleobetra": "Cleobetra",
  "europefortune": "Europe Fortune",
  "i24slots": "i24 Slots",
  "kingschance": "Kings Chance",
  "luckytreasure": "Lucky Treasure",
  "machance": "MaChance",
  "magicalspin": "Magical Spin",
  "megawin": "Megawin",
  "mrpacho": "Mr Pacho",
  "playregal": "Play Regal",
  "richroyal": "Rich Royal",
  "rockstar": "Rockstar",
  "rxcasino": "RX Casino",
  "spindinasty": "Spin Dinasty",
  "vegasplus": "Vegas Plus",
  "winrolla": "WinRolla",
  "uniquecasino": "Unique Casino",
  "carte-bancaire": "Carte Bancaire",
  "cashlib": "Cashlib",
  "crypto": "Cryptomonnaies",
  "jetonbank": "Jeton Bank",
  "mifinity": "MiFinity",
  "neosurf": "Neosurf",
  "neteller": "Neteller",
  "paysafecard": "Paysafecard",
  "skrill": "Skrill",
  "virement": "Virement Bancaire",
};

const Breadcrumbs = () => {
  const pathname = usePathname(); // Pathname localisé (sans locale)
  const locale = useLocale();
  const pathnames = pathname.split("/").filter((x) => x);
  const siteConfig = { url: "https://gigabonus.win" };

  // Generate breadcrumb JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": `${siteConfig.url}/${locale}/`
      },
      ...pathnames.map((path, index) => {
        const url = `${siteConfig.url}/${locale}/${pathnames.slice(0, index + 1).join("/")}`;
        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": breadcrumbNames[path] || path,
          "item": url
        };
      })
    ]
  };

  if (pathnames.length === 0) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <nav aria-label="Breadcrumb" className="py-4 px-4 max-w-7xl mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  <span className="sr-only">Accueil</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {pathnames.map((path, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              const name = breadcrumbNames[path] || path;

              // S'assurer que routeTo est valide
              if (!routeTo || routeTo === '/') return null;

              return (
                <BreadcrumbItem key={routeTo}>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                  {isLast ? (
                    <BreadcrumbPage>{name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={routeTo}>{name}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
    </>
  );
};

export default Breadcrumbs;
