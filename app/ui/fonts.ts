import { Inter, Host_Grotesk, Combo, Cinzel, Italiana, Dosis } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const host = Host_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-host",
});

export const header = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-header",
});

export const combo = Combo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-combo",
});


export const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
});

export const dosis = Dosis({
  subsets: ["latin"],
  weight: ["300", "400","500", "600", "700"],
  variable: "--font-dosis",
});


