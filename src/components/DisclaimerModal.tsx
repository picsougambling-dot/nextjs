"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { disclaimerTranslations } from "../i18n/disclaimerTranslations";
import { useDisclaimer } from "../contexts/DisclaimerContext";

// Type alias for locale languages
type Lang = keyof typeof disclaimerTranslations;

interface Props {
  language?: Lang;
}

export default function DisclaimerModal({ language }: Props) {
  const { isDisclaimerAccepted, isDisclaimerOpen, setDisclaimerAccepted, setDisclaimerOpen } = useDisclaimer();
  const [lang, setLang] = useState<Lang>("en");

  // Détecter si c'est un bot/crawler (PageSpeed Insights, Googlebot, etc.)
  const isBot = () => {
    if (typeof window === "undefined" || typeof navigator === "undefined") return false;
    const userAgent = navigator.userAgent.toLowerCase();
    const botPatterns = [
      'googlebot',
      'google page speed',
      'lighthouse',
      'pagespeed',
      'gtmetrix',
      'pingdom',
      'bingbot',
      'slurp',
      'duckduckbot',
      'baiduspider',
      'yandexbot',
      'sogou',
      'exabot',
      'facebot',
      'ia_archiver',
      'ahrefsbot',
      'semrushbot',
      'dotbot',
      'mj12bot',
      'megaindex',
      'blexbot',
      'petalbot',
      'headless',
      'phantomjs',
      'selenium',
      'webdriver',
      'crawler',
      'spider',
      'bot'
    ];
    return botPatterns.some(pattern => userAgent.includes(pattern));
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Ne pas afficher le disclaimer pour les bots/crawlers
    if (isBot()) {
      setDisclaimerAccepted(true);
      setDisclaimerOpen(false);
      return;
    }
    
    const stored = localStorage.getItem("disclaimerAccepted");
    const hasAccepted = stored === "true";
    
    if (hasAccepted) {
      setDisclaimerAccepted(true);
      setDisclaimerOpen(false);
      return;
    }

    // detect language from prop or url (/fr/..., /en/...)
    if (language) {
      setLang(language);
    } else {
      const seg = window.location.pathname.split("/").filter(Boolean)[0];
      if (seg && Object.keys(disclaimerTranslations).includes(seg)) {
        // @ts-ignore
        setLang(seg);
      } else if (seg === "pt") {
        // fallback: if /pt uses pt-PT by default
        setLang("pt-PT");
      }
    }

    // show modal on first visit
    setDisclaimerOpen(true);
    // lock scroll
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [language, setDisclaimerAccepted, setDisclaimerOpen]);

  useEffect(() => {
    if (!isDisclaimerOpen) return;
    // prevent ESC close or background click: intercept keydown
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isDisclaimerOpen]);

  const t = disclaimerTranslations[lang] || disclaimerTranslations["en"];

  function accept() {
    localStorage.setItem("disclaimerAccepted", "true");
    setDisclaimerAccepted(true);
    setDisclaimerOpen(false);
    document.documentElement.style.overflow = "";
  }

  if (!isDisclaimerOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      {/* Full Screen Dark Background with Gradient - Blocks all clicks */}
      <div className="absolute inset-0 bg-black/90 bg-gradient-to-br from-[#0f0f1a] via-[#1a0f2e] to-[#0f0f1a] pointer-events-auto" onClick={(e) => e.stopPropagation()} />

      {/* Content Container */}
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-6 lg:p-8 animate-fadeIn pointer-events-auto z-[10000]">
        <div className="w-full max-w-4xl bg-[#0f0f1a]/95 border border-[#280556]/30 rounded-2xl shadow-2xl p-5 md:p-8 space-y-6 pointer-events-auto relative z-[10001] max-h-[90vh] overflow-y-auto">
          
          {/* Logo and Title */}
          <div className="flex flex-col items-center gap-2 md:gap-3 text-center">
            <Image 
              src="/gigabonus-logo.webp" 
              alt="GigaBonus" 
              width={160}
              height={160}
              quality={90}
              priority
              className="drop-shadow-xl w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain"
            />
            <h2 id="disclaimer-title" className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-500 text-center leading-tight">
              {t.title}
            </h2>
          </div>

          {/* Intro Text */}
          <p className="text-sm md:text-base text-gray-300 text-center">
            {t.intro}
          </p>

          {/* Warning Points */}
          <ul className="space-y-2 text-gray-200">
            <li className="flex gap-3 items-start">
              <span className="text-xl md:text-2xl mt-0.5">🚫</span>
              <span className="text-xs md:text-sm"><strong>{t.points.under18}</strong></span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-xl md:text-2xl mt-0.5">⚠️</span>
              <span className="text-xs md:text-sm"><strong>{t.points.risks}</strong></span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-xl md:text-2xl mt-0.5">🎯</span>
              <span className="text-xs md:text-sm"><strong>{t.points.responsible}</strong></span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-xl md:text-2xl mt-0.5">💰</span>
              <span className="text-xs md:text-sm"><strong>{t.points.budget}</strong></span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-xl md:text-2xl mt-0.5">📊</span>
              <span className="text-xs md:text-sm"><strong>{t.points.probabilities}</strong></span>
            </li>
          </ul>

          {/* Help Section */}
          <div className="p-4 md:p-5 bg-[#1a0f2e]/50 border border-[#280556]/30 rounded-lg space-y-3">
            <h3 className="text-lg md:text-xl font-bold text-amber-400">{t.helpHeading}</h3>
            <p className="text-xs md:text-sm text-gray-300">{t.helpText}</p>

            <ul className="space-y-3">
              {t.helpResources.map((r, idx) => (
                <li key={idx} className="flex flex-col md:flex-row md:items-center md:gap-4 text-xs md:text-sm">
                  <span className="font-semibold text-gray-200">{r.label}</span>
                  <div className="flex gap-3 flex-wrap mt-2 md:mt-0">
                    {r.phone ? (
                      <a href={`tel:${r.phone}`} className="text-amber-400 hover:text-amber-300 font-semibold">
                        {r.phone}
                      </a>
                    ) : null}
                    {r.url ? (
                      <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">
                        {r.url}
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Checkbox and Button */}
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                className="w-5 h-5 rounded accent-amber-500 cursor-pointer"
                checked={isDisclaimerAccepted}
                onChange={(e) => setDisclaimerAccepted(e.target.checked)}
                aria-required
              />
              <span className="text-xs md:text-sm text-gray-300">{t.checkbox}</span>
            </label>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-[11px] md:text-sm text-gray-500">{t.note}</p>
              <button
                onClick={accept}
                disabled={!isDisclaimerAccepted}
                className="px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                aria-disabled={!isDisclaimerAccepted}
              >
                {t.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
