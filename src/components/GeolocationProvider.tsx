'use client';

import { useEffect } from "react";
import { useGeolocation } from "@/hooks/useGeolocation";

/**
 * GeolocationProvider component that initializes geolocation detection
 * and automatic language switching on app load
 */
export const GeolocationProvider = ({ children }: { children: React.ReactNode }) => {
  const geoData = useGeolocation();

  useEffect(() => {
    if (geoData.detected && !geoData.loading) {
      console.log(`🌍 Detected location: ${geoData.country_name} (${geoData.country_code})`);
    }
  }, [geoData]);

  return <>{children}</>;
};
