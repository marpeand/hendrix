import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import CONFIG from "@/blog.config";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: CONFIG.title,
    template: `%s | ${CONFIG.title}`,
  },
  description: CONFIG.siteDescription,
  metadataBase: new URL(CONFIG.baseURL),
  openGraph: {
    title: CONFIG.title,
    url: CONFIG.baseURL,
    siteName: `${CONFIG.title}'s website`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${CONFIG.baseURL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${CONFIG.title}'s website`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    shortcut: `${CONFIG.baseURL}/favicon.ico`,
  },
  alternates: {
    types: {
      "application/rss+xml": `${CONFIG.baseURL}/rss.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={CONFIG.language} className={inter.className}>
      <body className="dark:bg-dark bg-white text-white max-w-6xl flex flex-col mx-auto">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main className="flex items-center my-6 flex flex-col mx-4">
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
