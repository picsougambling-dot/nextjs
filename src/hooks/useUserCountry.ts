'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface UseUserCountryResult {
  countryCode: string | null;
  loading: boolean;
}

const CACHE_KEY = 'user_country_code';
const CACHE_TIMESTAMP_KEY = 'user_country_timestamp';
const CACHE_DURATION = 5000; // 5 secondes de cache (très court pour éviter les requêtes simultanées, mais permet une détection rapide)

/**
 * Hook pour récupérer le pays de l'utilisateur depuis ipapi.co
 * Détecte automatiquement les changements de pays (ex: changement de VPN)
 * Utilise ipapi.co/json/ directement depuis le client pour éviter les problèmes de headers sur Vercel
 */
export function useUserCountry(): UseUserCountryResult {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchingRef = useRef<boolean>(false);

  const fetchUserCountry = useCallback(async (forceRefresh: boolean = false) => {
    // Éviter les appels multiples simultanés
    if (fetchingRef.current && !forceRefresh) {
      console.log('[useUserCountry] Already fetching, skipping...');
      return;
    }
    
    fetchingRef.current = true;
    try {
      // Si pas de refresh forcé, utiliser le cache seulement s'il est très récent (< 5 secondes)
      // Cela évite les requêtes simultanées mais garantit une détection fraîche
      if (!forceRefresh) {
        const cachedCountry = sessionStorage.getItem(CACHE_KEY);
        const cachedTimestamp = sessionStorage.getItem(CACHE_TIMESTAMP_KEY);
        
        if (cachedCountry && cachedTimestamp) {
          const cacheAge = Date.now() - parseInt(cachedTimestamp, 10);
          // Utiliser le cache seulement s'il est très récent (< 5 secondes)
          if (cacheAge < CACHE_DURATION) {
            console.log('[useUserCountry] Using very recent cache:', cachedCountry, `(age: ${Math.round(cacheAge / 1000)}s)`);
            setCountryCode(cachedCountry);
            setLoading(false);
            fetchingRef.current = false;
            return;
          } else {
            console.log('[useUserCountry] Cache expired, fetching new country...');
          }
        }
      }

      // Essayer d'abord l'API route (meilleure pour Vercel)
      // Si ça échoue, fallback sur ipapi.co/json/ directement
      console.log('[useUserCountry] Trying API route first...');
      let country: string | null = null;
      
      try {
        const apiResponse = await fetch(`/api/geo?t=${Date.now()}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        
        if (apiResponse.ok) {
          const apiData = await apiResponse.json();
          console.log('[useUserCountry] API route response:', JSON.stringify(apiData, null, 2));
          
          if (apiData.success && apiData.countryCode) {
            country = apiData.countryCode.toUpperCase() as string;
            console.log('[useUserCountry] ✓ Country detected via API route:', country);
          } else {
            console.warn('[useUserCountry] ✗ API route returned no country:', {
              success: apiData.success,
              countryCode: apiData.countryCode,
              error: apiData.error
            });
          }
        } else {
          console.warn('[useUserCountry] API route not OK, status:', apiResponse.status);
        }
      } catch (apiError) {
        console.warn('[useUserCountry] API route failed, trying ipapi.co directly...', apiError);
        
        // Fallback sur ipapi.co/json/ seulement si l'API route a vraiment échoué
        try {
          console.log('[useUserCountry] Fetching country from ipapi.co...');
          const response = await fetch(`https://ipapi.co/json/?t=${Date.now()}`, {
            cache: 'no-store',
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache'
            }
          });
          
          console.log('[useUserCountry] ipapi.co response status:', response.status, response.ok);
          
          if (response.ok) {
            const data = await response.json();
            console.log('[useUserCountry] ipapi.co response data:', JSON.stringify(data, null, 2));

            if (data.country_code) {
              country = data.country_code.toUpperCase() as string;
              console.log('[useUserCountry] ✓ Country detected via ipapi.co:', country);
            } else {
              console.warn('[useUserCountry] ✗ No country_code in ipapi.co response:', data);
            }
          } else {
            const errorText = await response.text();
            console.error('[useUserCountry] ipapi.co HTTP error:', response.status, errorText);
          }
        } catch (ipapiError) {
          console.error('[useUserCountry] ipapi.co also failed:', ipapiError);
        }
      }

      if (country) {
        setCountryCode(country);
        sessionStorage.setItem(CACHE_KEY, country);
        sessionStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
      } else {
        // Pas de pays détecté, on laisse à null (pas de casinos affichés)
        console.warn('[useUserCountry] ✗ No country detected');
        setCountryCode(null);
        sessionStorage.removeItem(CACHE_KEY);
        sessionStorage.removeItem(CACHE_TIMESTAMP_KEY);
      }
    } catch (error) {
      console.error('[useUserCountry] Failed to detect country:', error);
      // En cas d'erreur, on laisse à null (pas de casinos affichés)
      setCountryCode(null);
    } finally {
      setLoading(false);
      fetchingRef.current = false;
    }
  }, []);

  useEffect(() => {
    // Au montage, toujours vérifier le cache d'abord (même s'il est expiré, on l'utilise temporairement)
    // Cette vérification se fait de manière synchrone pour éviter tout délai
    const cachedCountry = sessionStorage.getItem(CACHE_KEY);
    const cachedTimestamp = sessionStorage.getItem(CACHE_TIMESTAMP_KEY);
    
    if (cachedCountry) {
      // Utiliser le cache immédiatement s'il existe (même expiré, pour éviter l'affichage vide)
      setCountryCode(cachedCountry);
      setLoading(false);
      const cacheAge = cachedTimestamp ? Date.now() - parseInt(cachedTimestamp, 10) : Infinity;
      console.log('[useUserCountry] Using cache:', cachedCountry, `(age: ${Math.round(cacheAge / 1000)}s)`);
      
      // Si le cache est expiré, faire une nouvelle détection en arrière-plan
      if (!cachedTimestamp || cacheAge >= CACHE_DURATION) {
        console.log('[useUserCountry] Cache expired, fetching fresh country in background...');
        // Utiliser setTimeout pour éviter de bloquer le rendu
        setTimeout(() => {
          fetchUserCountry(true);
        }, 100);
      }
    } else {
      // Pas de cache, forcer une nouvelle détection
      console.log('[useUserCountry] No cache, forcing fresh detection...');
      fetchUserCountry(true);
    }
  }, [fetchUserCountry]);
  
  // Écouter les changements de route pour s'assurer que le cache est toujours utilisé
  useEffect(() => {
    // Vérifier périodiquement si le cache existe et mettre à jour le state si nécessaire
    const checkCache = () => {
      const cachedCountry = sessionStorage.getItem(CACHE_KEY);
      if (cachedCountry && cachedCountry !== countryCode) {
        console.log('[useUserCountry] Cache found after route change, updating state:', cachedCountry);
        setCountryCode(cachedCountry);
        setLoading(false);
      }
    };
    
    // Vérifier immédiatement
    checkCache();
    
    // Vérifier après un court délai (au cas où le cache serait mis à jour)
    const timeout = setTimeout(checkCache, 200);
    
    return () => clearTimeout(timeout);
  }, [countryCode]);

  return { countryCode, loading };
}

