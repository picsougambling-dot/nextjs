'use client';

import { useState, useEffect } from 'react';

interface UseUserCountryResult {
  countryCode: string | null;
  loading: boolean;
}

/**
 * Hook pour récupérer le pays de l'utilisateur depuis l'API
 * Met en cache le résultat dans sessionStorage pour éviter les appels multiples
 */
export function useUserCountry(): UseUserCountryResult {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserCountry = async () => {
      // Vérifier le cache sessionStorage
      const cachedCountry = sessionStorage.getItem('user_country_code');
      if (cachedCountry) {
        setCountryCode(cachedCountry);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/geo');
        const data = await response.json();

        if (data.success && data.countryCode) {
          const country = data.countryCode as string;
          setCountryCode(country);
          // Mettre en cache pour cette session
          sessionStorage.setItem('user_country_code', country);
        } else {
          // Pas de pays détecté, on laisse à null (affichera tous les casinos)
          setCountryCode(null);
        }
      } catch (error) {
        console.warn('[useUserCountry] Failed to detect country:', error);
        // En cas d'erreur, on laisse à null (affichera tous les casinos)
        setCountryCode(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserCountry();
  }, []);

  return { countryCode, loading };
}

