import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      gridTemplateColumns: {
        procedure: ".7fr .3fr",
      },
      backgroundImage: {
        procedure: "url(/wc-bg2.webp)",
        background: "url(/banners/Banner_fondo.png)",
        registro: "url(/banners/Cabecera_Medidas_3.jpg)",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(calc(-78%))" },
        },
        slideUp2: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(calc(-89%))" },
        },
        heroSlide: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        opposite: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        herotext1: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        oppositeText1: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        opacity1: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        opacity2: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        stretch: {
          "0%": {height: '0%'},
          "100%": {height: "100%"}
        },
      },
      animation: {
        slideUp: "slideUp 5s ease-in-out forwards",
        slideUp2: "slideUp2 2s ease-in-out forwards",
        slideUp3: "slideUp2 3s ease-in-out forwards",
        slideUp4: "slideUp2 4s ease-in-out forwards",
        slideUp5: "slideUp 4s ease-in-out forwards",

        heroSlide1: "heroSlide 2s ease-in-out forwards",
        opposite1: "opposite 2s ease-in-out forwards",
        heroText1: "herotext1 2s ease-in-out forwards",
        oppositeText1: "oppositeText1 2s ease-in-out forwards",
        opacity1: "opacity1 2s ease-in-out forwards",
        opacity2: "opacity2 2s ease-in-out forwards",
        stretch: "stretch 2s ease-in-out forwards",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
