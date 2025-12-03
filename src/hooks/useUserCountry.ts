'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseUserCountryResult {
  countryCode: string | null;
  loading: boolean;
}

const CACHE_KEY = 'user_country_code';
const CACHE_TIMESTAMP_KEY = 'user_country_timestamp';
const CACHE_DURATION = 2000; // 2 secondes de cache (très court pour détecter rapidement les changements VPN)

/**
 * Hook pour récupérer le pays de l'utilisateur depuis l'API
 * Détecte automatiquement les changements de pays (ex: changement de VPN)
 */
export function useUserCountry(): UseUserCountryResult {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUserCountry = useCallback(async (forceRefresh: boolean = false) => {
    try {
      // Si pas de refresh forcé, utiliser le cache seulement s'il est très récent (< 2 secondes)
      // Cela permet d'éviter les requêtes multiples dans le même cycle, mais garantit une détection fraîche au rechargement
      if (!forceRefresh) {
        const cachedCountry = sessionStorage.getItem(CACHE_KEY);
        const cachedTimestamp = sessionStorage.getItem(CACHE_TIMESTAMP_KEY);
        
        if (cachedCountry && cachedTimestamp) {
          const cacheAge = Date.now() - parseInt(cachedTimestamp, 10);
          // Cache très court : seulement pour éviter les requêtes multiples simultanées
          if (cacheAge < CACHE_DURATION) {
            setCountryCode(cachedCountry);
            setLoading(false);
            // Vérifier quand même en arrière-plan pour détecter un changement
            setTimeout(() => {
              fetch('/api/geo', { cache: 'no-store' })
                .then(res => res.json())
                .then(data => {
                  if (data.success && data.countryCode && data.countryCode !== cachedCountry) {
                    const newCountry = data.countryCode as string;
                    setCountryCode(newCountry);
                    sessionStorage.setItem(CACHE_KEY, newCountry);
                    sessionStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
                  }
                })
                .catch(() => {
                  // Ignorer les erreurs en arrière-plan
                });
            }, 1000);
            return;
          }
        }
      }

      // Faire une requête fraîche (toujours au chargement de page)
      const response = await fetch('/api/geo?t=' + Date.now(), {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      const data = await response.json();

      if (data.success && data.countryCode) {
        const country = data.countryCode as string;
        setCountryCode(country);
        sessionStorage.setItem(CACHE_KEY, country);
        sessionStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
      } else {
        // Pas de pays détecté, on laisse à null (affichera tous les casinos)
        setCountryCode(null);
        sessionStorage.removeItem(CACHE_KEY);
        sessionStorage.removeItem(CACHE_TIMESTAMP_KEY);
      }
    } catch (error) {
      console.warn('[useUserCountry] Failed to detect country:', error);
      // En cas d'erreur, on laisse à null (affichera tous les casinos)
      setCountryCode(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Au chargement de la page, vider le cache pour forcer une nouvelle détection
    // Cela garantit que les changements de VPN sont détectés immédiatement
    const pageLoadTime = Date.now();
    const lastLoadTime = sessionStorage.getItem('last_page_load_time');
    
    // Si c'est un nouveau chargement de page (pas juste un re-render), vider le cache
    if (!lastLoadTime || (pageLoadTime - parseInt(lastLoadTime, 10)) > 1000) {
      sessionStorage.removeItem(CACHE_KEY);
      sessionStorage.removeItem(CACHE_TIMESTAMP_KEY);
      sessionStorage.setItem('last_page_load_time', pageLoadTime.toString());
      fetchUserCountry(true);
    } else {
      fetchUserCountry(false);
    }
  }, [fetchUserCountry]);

  return { countryCode, loading };
}

