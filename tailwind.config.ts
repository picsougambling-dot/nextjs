import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(255, 64, 129, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(255, 64, 129, 0.6)",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-30px)",
          },
        },
        "casino-float": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "33%": {
            transform: "translateY(-25px) rotate(120deg)",
          },
          "66%": {
            transform: "translateY(-15px) rotate(240deg)",
          },
        },
        "card-fall": {
          "0%": {
            transform: "translateY(-100px) rotate(0deg)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(calc(100vh + 100px)) rotate(360deg)",
            opacity: "0",
          },
        },
        "sparkle": {
          "0%, 100%": {
            opacity: "0",
            transform: "scale(0)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "shine-sweep": {
          "0%": {
            left: "-100%",
          },
          "100%": {
            left: "200%",
          },
        },
        "jackpot-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 hsl(var(--primary) / 0.4)",
          },
          "50%": {
            boxShadow: "0 0 20px 10px hsl(var(--primary) / 0)",
          },
        },
        "slot-spin": {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "dice-roll": {
          "0%": {
            transform: "rotate(0deg) rotateY(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) rotateY(360deg)",
          },
        },
        "card-deal": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px) rotate(-10deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) rotate(0deg)",
          },
        },
        "bounce-mini": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
        },
        "gradient-shift": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        "flip-3d": {
          "0%": {
            transform: "rotateY(0deg)",
            opacity: "1",
          },
          "50%": {
            transform: "rotateY(90deg)",
            opacity: "0.3",
          },
          "100%": {
            transform: "rotateY(0deg)",
            opacity: "1",
          },
        },
        "ripple": {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(4)",
            opacity: "0",
          },
        },
        "float-pulse": {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
            boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.5)",
          },
          "50%": {
            transform: "translateY(-10px) scale(1.02)",
            boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.6)",
          },
        },
        "orb-float": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -30px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "float": "float 12s ease-in-out infinite",
        "casino-float": "casino-float 8s ease-in-out infinite",
        "card-fall": "card-fall 20s linear infinite",
        "sparkle": "sparkle 1.5s ease-in-out infinite",
        "shine-sweep": "shine-sweep 2s ease-in-out infinite",
        "jackpot-pulse": "jackpot-pulse 2s ease-in-out infinite",
        "slot-spin": "slot-spin 0.5s ease-in-out",
        "dice-roll": "dice-roll 3s linear infinite",
        "card-deal": "card-deal 0.5s ease-out",
        "bounce-mini": "bounce-mini 0.6s ease-in-out",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "flip-3d": "flip-3d 0.4s ease-in-out",
        "ripple": "ripple 0.6s ease-out",
        "float-pulse": "float-pulse 3s ease-in-out infinite",
        "orb-float": "orb-float 20s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
