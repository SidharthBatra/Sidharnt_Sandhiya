import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const title = `${siteConfig.coupleNames.first} & ${siteConfig.coupleNames.second} — Engagement Photos`;

export const metadata: Metadata = {
  title,
  description: siteConfig.welcomeMessage,
  openGraph: {
    title,
    description: siteConfig.welcomeMessage,
    images: ["/photos/hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream">{children}</body>
    </html>
  );
}
