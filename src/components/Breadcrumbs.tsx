'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  "top-slots-2025": "Top Slots 2025",
  "bonus-sans-wager": "Bonus Sans Wager",
  "bonus-cashback": "Bonus Cashback",
  "casinos-sans-kyc": "Casinos Sans KYC",
  "astuce-casino": "Astuces Casino",
  "avis-megawin-2025": "Avis Megawin 2025",
  "avis-richroyal-2025": "Avis Rich Royal 2025",
  "avis-winrolla-2025": "Avis WinRolla 2025",
  "avis-cleobetra-2025": "Avis Cleobetra 2025",
  "avis-rxcasino-2025": "Avis RX Casino 2025",
  "avis-mrpacho-2025": "Avis Mr Pacho 2025",
  "avis-europefortune-2025": "Avis Europe Fortune 2025",
  "avis-spindinasty-2025": "Avis Spin Dinasty 2025",
  "avis-magicalspin-2025": "Avis Magical Spin 2025",
  "avis-playregal-2025": "Avis Play Regal 2025",
  "avis-vegasplus-2025": "Avis Vegas Plus 2025",
  "avis-machance-2025": "Avis MaChance 2025",
  "avis-uniquecasino-2025": "Avis Unique Casino 2025",
  "avis-cazinostars-2025": "Avis Cazino Stars 2025",
  "avis-atlantisslots-2025": "Avis Atlantis Slots 2025",
  "avis-casinointense-2025": "Avis Casino Intense 2025",
  "avis-luckytreasure-2025": "Avis Lucky Treasure 2025",
  "avis-bonrush-2025": "Avis BonRush 2025",
  "avis-betify-2025": "Avis Betify 2025",
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
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  // Generate breadcrumb JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://gigabonus.fr/"
      },
      ...pathnames.map((path, index) => {
        const url = `https://gigabonus.fr/${pathnames.slice(0, index + 1).join("/")}`;
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
                      <Link href={routeTo || '#'}>{name}</Link>
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
