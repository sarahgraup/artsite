import type { Config } from "tailwindcss";
import  { fontFamily } from'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        host: ["var(--font-host)", ...fontFamily.sans],
        cinzel: ["var(--font-header)", ...fontFamily.serif],
        combo: ["var(--font-combo)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
        italiana: ["var(--font-italiana)", ...fontFamily.mono],
        dosis: ["var(--font-dosis)", ...fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)", // Add accent color
        muted: "var(--muted)", // For subtle backgrounds
        sienna: {
          50: "var(--color-sienna-50)",
          100: "var(--color-sienna-100)",
          200: "var(--color-sienna-200)",
          300: "var(--color-sienna-300)",
          400: "var(--color-sienna-400)",
          500: "var(--color-sienna-500)",
          600: "var(--color-sienna-600)",
          700: "var(--color-sienna-700)",
          800: "var(--color-sienna-800)",
          900: "var(--color-sienna-900)",
        },
        dorado: {
          300: "var(--color-dorado-300)",
          600: "var(--color-dorado-600)",
          900: "var(--color-dorado-900)",
        },
        bluemine: {
          700: "var(--color-blumine-700)",
        },
        creamy: {
          50: "var(--color-creamy-50)",
          300: "var(--color-creamy-300)",
        },
      },
      borderRadius: {},
      spacing: {
        "gallery-gap": "2rem", // Consistent gallery spacing
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out", // For image loading
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;