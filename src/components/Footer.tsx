import Link from "next/link";
import Image from "next/image";
import { Facebook, Youtube, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-card border-t border-border mt-8 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
          {/* Logo & Description */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center mb-2">
              <Image 
                src="/gigabonus-logo.webp" 
                alt="GigaBonus Logo" 
                className="h-12 sm:h-14 w-auto object-contain"
                width={96}
                height={96}
              />
            </Link>
            <p className="text-xs text-muted-foreground hidden lg:block">
              Comparateur de bonus casinos 2025
            </p>
          </div>

          {/* Casinos Populaires */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-primary">Casinos</h3>
            <ul className="space-y-1">
              <li><Link href="/spinstar" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">SpinStar</Link></li>
              <li><Link href="/kingschance" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">Kings Chance</Link></li>
              <li><Link href="/hunnyplay" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">HunnyPlay</Link></li>
              <li><Link href="/luckytreasure" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">Lucky Treasure</Link></li>
            </ul>
          </div>

          {/* Guides & Bonus */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-primary">Guides</h3>
            <ul className="space-y-1">
              <li><Link href="/bonus-cashback" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">Cashback</Link></li>
              <li><Link href="/top-casinos-crypto" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">Casinos Crypto</Link></li>
              <li><Link href="/meilleurs-bookmakers" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">Bookmakers</Link></li>
              <li><Link href="/top-slots-2025" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">Top Slots</Link></li>
            </ul>
          </div>

          {/* Outils Pratiques */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-primary">Outils</h3>
            <ul className="space-y-1">
              <li><Link href="/calculateur-roulette" className="text-xs text-muted-foreground hover:text-primary transition-colors">Calc. Roulette</Link></li>
              <li><Link href="/calculateur-cotes-sportives" className="text-xs text-muted-foreground hover:text-primary transition-colors">Calc. Cotes</Link></li>
              <li><Link href="/astuces-casino" className="text-xs text-muted-foreground hover:text-primary transition-colors">Astuces</Link></li>
              <li><Link href="/install" className="text-xs text-muted-foreground hover:text-primary transition-colors">Installer App</Link></li>
            </ul>
          </div>

          {/* Méthodes de Paiement */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-primary">Paiements</h3>
            <ul className="space-y-1">
              <li><Link href="/depot/carte" className="text-xs text-muted-foreground hover:text-primary transition-colors">Carte</Link></li>
              <li><Link href="/depot/crypto" className="text-xs text-muted-foreground hover:text-primary transition-colors">Crypto</Link></li>
              <li><Link href="/depot/neosurf" className="text-xs text-muted-foreground hover:text-primary transition-colors">Neosurf</Link></li>
              <li><Link href="/depot/skrill" className="text-xs text-muted-foreground hover:text-primary transition-colors">Skrill</Link></li>
            </ul>
          </div>

          {/* Plus */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-primary">Plus</h3>
            <ul className="space-y-1">
              <li><Link href="/winmachance" className="text-xs text-muted-foreground hover:text-primary transition-colors">WinMaChance</Link></li>
              <li><Link href="/betify" className="text-xs text-muted-foreground hover:text-primary transition-colors">Betify</Link></li>
              <li><Link href="/uniquecasino" className="text-xs text-muted-foreground hover:text-primary transition-colors">Unique Casino</Link></li>
              <li><Link href="/blog" className="text-xs text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Avis Récents */}
          <div>
            <h3 className="font-semibold text-sm mb-2 text-primary">Avis Récents</h3>
            <ul className="space-y-1">
              <li><Link href="/blog/avis-roibets-2025" className="text-xs text-muted-foreground hover:text-primary transition-colors">RoiBets</Link></li>
              <li><Link href="/blog/avis-rockstar-2025" className="text-xs text-muted-foreground hover:text-primary transition-colors">Rockstar</Link></li>
              <li><Link href="/blog/avis-i24slots-2025" className="text-xs text-muted-foreground hover:text-primary transition-colors">i24Slots</Link></li>
              <li><Link href="/blog/avis-europefortune-2025" className="text-xs text-muted-foreground hover:text-primary transition-colors">EuropeFortune</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-4 pt-3">
          {/* Social & Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-3">
            <a 
              href="https://fr.trustpilot.com/review/gigabonus.win" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-200 touch-manipulation active:opacity-70"
            >
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span className="hidden sm:inline">Trustpilot</span>
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61578579597076" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-200 touch-manipulation active:opacity-70"
              aria-label="Facebook GigaBonus"
            >
              <Facebook className="w-4 h-4" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a 
              href="https://www.youtube.com/@GigaBonusFr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors duration-200 touch-manipulation active:opacity-70"
              aria-label="YouTube GigaBonus"
            >
              <Youtube className="w-4 h-4" />
              <span className="hidden sm:inline">YouTube</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} GigaBonus.fr | <Link href="/about" className="hover:text-primary transition-colors">À propos</Link> | Jouez responsable 18+
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
