"use client";

import React, { useEffect, useState } from "react";

const NEW_SITE_URL = "https://bonuscasinoelite.com";
const COUNTDOWN_SECONDS = 3;

type Lang =
  | "en"
  | "fr"
  | "de"
  | "es"
  | "ru"
  | "it"
  | "br"
  | "pt"
  | "nl"
  | "lv"
  | "fi";

interface Translation {
  title: string;
  message: string;
  redirectIn: (s: number) => string;
  cta: string;
  newSite: string;
}

const translations: Record<Lang, Translation> = {
  fr: {
    title: "GigaBonus devient",
    newSite: "BonusCasinoElite.com",
    message:
      "Notre site déménage ! Vous allez être redirigé automatiquement vers notre nouvelle plateforme.",
    redirectIn: (s) => `Redirection dans ${s} seconde${s > 1 ? "s" : ""}…`,
    cta: "Y aller maintenant",
  },
  en: {
    title: "GigaBonus is becoming",
    newSite: "BonusCasinoElite.com",
    message:
      "Our site is moving! You will be automatically redirected to our new platform.",
    redirectIn: (s) => `Redirecting in ${s} second${s > 1 ? "s" : ""}…`,
    cta: "Go now",
  },
  de: {
    title: "GigaBonus wird zu",
    newSite: "BonusCasinoElite.com",
    message:
      "Unsere Seite zieht um! Sie werden automatisch zu unserer neuen Plattform weitergeleitet.",
    redirectIn: (s) => `Weiterleitung in ${s} Sekunde${s > 1 ? "n" : ""}…`,
    cta: "Jetzt gehen",
  },
  es: {
    title: "GigaBonus se convierte en",
    newSite: "BonusCasinoElite.com",
    message:
      "¡Nuestro sitio se muda! Serás redirigido automáticamente a nuestra nueva plataforma.",
    redirectIn: (s) => `Redirigiendo en ${s} segundo${s > 1 ? "s" : ""}…`,
    cta: "Ir ahora",
  },
  it: {
    title: "GigaBonus diventa",
    newSite: "BonusCasinoElite.com",
    message:
      "Il nostro sito sta cambiando! Sarai reindirizzato automaticamente alla nuova piattaforma.",
    redirectIn: (s) => `Reindirizzamento tra ${s} second${s > 1 ? "i" : "o"}…`,
    cta: "Vai ora",
  },
  ru: {
    title: "GigaBonus становится",
    newSite: "BonusCasinoElite.com",
    message:
      "Наш сайт переезжает! Вы будете автоматически перенаправлены на новую платформу.",
    redirectIn: (s) => `Перенаправление через ${s} сек…`,
    cta: "Перейти сейчас",
  },
  br: {
    title: "GigaBonus está se tornando",
    newSite: "BonusCasinoElite.com",
    message:
      "Nosso site está mudando! Você será redirecionado automaticamente para nossa nova plataforma.",
    redirectIn: (s) => `Redirecionando em ${s} segundo${s > 1 ? "s" : ""}…`,
    cta: "Ir agora",
  },
  pt: {
    title: "GigaBonus está a tornar-se",
    newSite: "BonusCasinoElite.com",
    message:
      "O nosso site está a mudar! Será redirecionado automaticamente para a nossa nova plataforma.",
    redirectIn: (s) => `A redirecionar em ${s} segundo${s > 1 ? "s" : ""}…`,
    cta: "Ir agora",
  },
  nl: {
    title: "GigaBonus wordt",
    newSite: "BonusCasinoElite.com",
    message:
      "Onze site verhuist! U wordt automatisch doorgestuurd naar ons nieuwe platform.",
    redirectIn: (s) => `Doorsturen over ${s} seconde${s > 1 ? "n" : ""}…`,
    cta: "Ga nu",
  },
  lv: {
    title: "GigaBonus kļūst par",
    newSite: "BonusCasinoElite.com",
    message:
      "Mūsu vietne pārvietojas! Jūs tiksiet automātiski novirzīts uz mūsu jauno platformu.",
    redirectIn: (s) => `Novirzīšana pēc ${s} sekund${s > 1 ? "ēm" : "es"}…`,
    cta: "Iet tagad",
  },
  fi: {
    title: "GigaBonuksesta tulee",
    newSite: "BonusCasinoElite.com",
    message:
      "Sivustomme muuttaa! Sinut ohjataan automaattisesti uudelle alustallemme.",
    redirectIn: (s) => `Uudelleenohjaus ${s} sekunnin kuluttua…`,
    cta: "Mene nyt",
  },
};

const isBot = () => {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent.toLowerCase();
  return [
    "googlebot",
    "bingbot",
    "slurp",
    "duckduckbot",
    "baiduspider",
    "yandexbot",
    "facebot",
    "ia_archiver",
    "ahrefsbot",
    "semrushbot",
    "mj12bot",
    "petalbot",
    "lighthouse",
    "pagespeed",
    "gtmetrix",
    "headless",
    "phantomjs",
    "selenium",
    "webdriver",
    "crawler",
    "spider",
    "bot",
  ].some((p) => ua.includes(p));
};

interface Props {
  language?: string;
}

export default function MigrationRedirect({ language }: Props) {
  const [mounted, setMounted] = useState(false);
  const [seconds, setSeconds] = useState(COUNTDOWN_SECONDS);
  const [shouldRender, setShouldRender] = useState(false);

  const lang: Lang = (translations[language as Lang] ? language : "en") as Lang;
  const t = translations[lang];

  useEffect(() => {
    setMounted(true);
    if (isBot()) return;
    setShouldRender(true);
  }, []);

  useEffect(() => {
    if (!shouldRender) return;
    if (seconds <= 0) {
      window.location.replace(NEW_SITE_URL);
      return;
    }
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [seconds, shouldRender]);

  if (!mounted || !shouldRender) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="migration-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        background:
          "radial-gradient(ellipse at center, rgba(20, 8, 30, 0.97) 0%, rgba(0, 0, 0, 0.99) 100%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily:
          "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        color: "#fff",
        textAlign: "center",
        animation: "migration-fade-in 0.3s ease-out",
      }}
    >
      <style>{`
        @keyframes migration-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes migration-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes migration-logo-glow {
          0%, 100% {
            filter: drop-shadow(0 0 24px rgba(233, 30, 99, 0.45)) drop-shadow(0 0 48px rgba(180, 60, 255, 0.25));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 32px rgba(233, 30, 99, 0.65)) drop-shadow(0 0 64px rgba(180, 60, 255, 0.4));
            transform: scale(1.04);
          }
        }
        .migration-progress-bar {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          overflow: hidden;
          margin: 24px auto 0;
          max-width: 320px;
        }
        .migration-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #e91e63, #ff6b9d);
          border-radius: 999px;
          transition: width 1s linear;
        }
        .migration-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(233, 30, 99, 0.45);
        }
      `}</style>

      <div style={{ maxWidth: 560, width: "100%" }}>
        <img
          src="/bonuscasinoelite-logo.webp"
          alt="BonusCasinoElite"
          width={280}
          height={186}
          style={{
            width: "min(280px, 60vw)",
            height: "auto",
            margin: "0 auto 24px",
            display: "block",
            animation: "migration-logo-glow 2.4s ease-in-out infinite",
          }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />

        <div
          style={{
            fontSize: "clamp(14px, 2.4vw, 16px)",
            color: "#ff6b9d",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          {t.title}
        </div>

        <h1
          id="migration-title"
          style={{
            fontSize: "clamp(28px, 6vw, 48px)",
            fontWeight: 800,
            margin: 0,
            background: "linear-gradient(135deg, #fff 0%, #ff6b9d 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "migration-pulse 2.5s ease-in-out infinite",
            lineHeight: 1.1,
          }}
        >
          {t.newSite}
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2.4vw, 17px)",
            color: "rgba(255, 255, 255, 0.8)",
            margin: "20px auto 0",
            maxWidth: 460,
            lineHeight: 1.5,
          }}
        >
          {t.message}
        </p>

        <div
          style={{
            marginTop: 28,
            fontSize: "clamp(14px, 2vw, 15px)",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          {t.redirectIn(seconds)}
        </div>

        <div className="migration-progress-bar">
          <div
            className="migration-progress-fill"
            style={{
              width: `${
                ((COUNTDOWN_SECONDS - seconds) / COUNTDOWN_SECONDS) * 100
              }%`,
            }}
          />
        </div>

        <button
          type="button"
          className="migration-cta"
          onClick={() => window.location.replace(NEW_SITE_URL)}
          style={{
            marginTop: 32,
            padding: "14px 36px",
            fontSize: "clamp(15px, 2.2vw, 16px)",
            fontWeight: 700,
            color: "#fff",
            background: "linear-gradient(135deg, #e91e63 0%, #ff6b9d 100%)",
            border: "none",
            borderRadius: 999,
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(233, 30, 99, 0.35)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            letterSpacing: "0.02em",
          }}
        >
          {t.cta} →
        </button>
      </div>
    </div>
  );
}
