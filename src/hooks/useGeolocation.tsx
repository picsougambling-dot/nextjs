import { useEffect, useState } from "react";

interface GeolocationData {
  country_code: string;
  country_name: string;
  detected: boolean;
  loading: boolean;
}

// Mapping country codes to Weglot language codes
const countryToLanguageMap: Record<string, string> = {
  US: "en",
  GB: "en",
  CA: "en",
  AU: "en",
  NZ: "en",
  IE: "en",
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  CL: "es",
  PE: "es",
  VE: "es",
  DE: "de",
  AT: "de",
  CH: "de",
  PT: "pt",
  BR: "pt",
  IT: "it",
  FR: "fr",
  BE: "fr",
  LU: "fr",
  MC: "fr",
};

export const useGeolocation = () => {
  const [geoData, setGeoData] = useState<GeolocationData>({
    country_code: "",
    country_name: "",
    detected: false,
    loading: true,
  });

  useEffect(() => {
    const detectLocation = async () => {
      // Check if user has already manually selected a language
      const manualLanguageChoice = localStorage.getItem("weglot_manual_language");
      if (manualLanguageChoice) {
        setGeoData({
          country_code: "",
          country_name: "",
          detected: false,
          loading: false,
        });
        return;
      }

      // Check if we already detected the location in this session
      const sessionDetected = sessionStorage.getItem("geolocation_detected");
      if (sessionDetected) {
        const data = JSON.parse(sessionDetected);
        setGeoData({ ...data, loading: false });
        return;
      }

      try {
        // Use ipapi.co for geolocation (free tier: 1000 requests/day)
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) throw new Error("Geolocation failed");

        const data = await response.json();
        const countryCode = data.country_code || "";
        const countryName = data.country_name || "";

        const geoInfo = {
          country_code: countryCode,
          country_name: countryName,
          detected: true,
          loading: false,
        };

        setGeoData(geoInfo);
        sessionStorage.setItem("geolocation_detected", JSON.stringify(geoInfo));

        // Auto-switch language based on country
        const targetLanguage = countryToLanguageMap[countryCode];
        if (targetLanguage && typeof window !== "undefined" && (window as any).Weglot) {
          const currentLanguage = (window as any).Weglot.getCurrentLang();
          if (currentLanguage !== targetLanguage) {
            // Only switch if it's different from current language
            setTimeout(() => {
              (window as any).Weglot.switchTo(targetLanguage);
            }, 500);
          }
        }
      } catch (error) {
        console.warn("Geolocation detection failed:", error);
        setGeoData({
          country_code: "",
          country_name: "",
          detected: false,
          loading: false,
        });
      }
    };

    detectLocation();
  }, []);

  return geoData;
};

export const getLanguageFromCountry = (countryCode: string): string => {
  return countryToLanguageMap[countryCode] || "fr";
};
