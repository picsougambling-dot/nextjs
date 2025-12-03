'use client';

import { useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  const locale = useLocale();
  
  useEffect(() => {
    document.title = "Page Non Trouvée | GigaBonus";
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
    
    // Force hide loader on 404 page - utiliser uniquement le masquage CSS
    const loader = document.getElementById('initial-loader');
    if (loader && document.body.contains(loader)) {
      try {
        // Utiliser uniquement le masquage CSS - ne jamais utiliser removeChild()
        loader.style.display = 'none';
        loader.style.visibility = 'hidden';
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        loader.classList.add('fade-out');
      } catch (e) {
        // Ignorer l'erreur si l'élément n'existe plus
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-12 text-center">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
              <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Oups ! Page introuvable
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                La page que vous recherchez n'existe pas ou a été déplacée. 
                Retournez à l'accueil pour découvrir les meilleurs casinos en ligne.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold"
            >
              <Link href={`/${locale}`}>
                <Home className="w-5 h-5 mr-2" />
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

