import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <h1 className={playfair.className}></h1>
     
        <Navbar />
        <main className='min-h-screen max-w-7xl mx-auto px-4 py-8'>{children}</main>
      </body>
    </html>
  );
}
