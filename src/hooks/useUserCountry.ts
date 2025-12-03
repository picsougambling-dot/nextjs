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
    fetchUserCountry(false);
    
    // Détecter les événements de focus pour re-vérifier (quand l'utilisateur revient sur l'onglet)
    const handleFocus = () => {
      const cachedTimestamp = sessionStorage.getItem(CACHE_TIMESTAMP_KEY);
      if (cachedTimestamp) {
        const cacheAge = Date.now() - parseInt(cachedTimestamp, 10);
        // Si le cache a plus de 5 minutes, re-vérifier
        if (cacheAge > 300000) {
          fetchUserCountry(true);
        }
      }
    };

    // Détecter le changement de visibilité (quand l'utilisateur revient sur l'onglet)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        handleFocus();
      }
    };

    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [fetchUserCountry]);

  return { countryCode, loading };
}

