import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Webfern - Création de Sites Web Modernes",
  description: "Nous créons des sites web modernes et minimalistes pour les entreprises qui veulent se démarquer.",
  icons: {
    icon: '/icon2fav.png',
    shortcut: '/icon2fav.png',
    apple: '/icon2fav.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icon2fav.png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="flex flex-col min-h-screen">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased flex flex-col flex-grow`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
