'use client';

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  
  useEffect(() => {
    document.title = "Page Non Trouvée | GigaBonus";
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
    
    // Force remove loader on 404 page
    const loader = document.getElementById('initial-loader');
    if (loader && loader.parentNode) {
      try {
        loader.style.display = 'none';
        loader.classList.add('fade-out');
        setTimeout(() => {
          const loaderCheck = document.getElementById('initial-loader');
          if (loaderCheck && loaderCheck.parentNode) {
            try {
              loaderCheck.remove();
            } catch (e) {
              if (loaderCheck.parentNode) {
                try {
                  loaderCheck.parentNode.removeChild(loaderCheck);
                } catch (err) {
                  // Ignorer l'erreur
                }
              }
            }
          }
        }, 400);
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
              <a href="/">
                <Home className="w-5 h-5 mr-2" />
                Retour à l'accueil
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};


