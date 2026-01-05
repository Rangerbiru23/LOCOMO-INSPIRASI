import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CV LOCOMO INSPIRASI INDONESIA | Blockchain Development Company",
  description: "Leading blockchain development company in Indonesia, pioneering innovative solutions for decentralized applications and digital transformation.",
  keywords: ["blockchain", "cryptocurrency", "DeFi", "NFT", "smart contracts", "Web3", "CV LOCOMO INSPIRASI INDONESIA", "Indonesia"],
  authors: [{ name: "CV LOCOMO INSPIRASI INDONESIA" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⛓</text></svg>",
  },
  openGraph: {
    title: "CV LOCOMO INSPIRASI INDONESIA | Blockchain Development",
    description: "Leading blockchain development company in Indonesia, pioneering innovative solutions for decentralized applications.",
    url: "https://locomo-indonesia.com",
    siteName: "CV LOCOMO INSPIRASI INDONESIA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV LOCOMO INSPIRASI INDONESIA | Blockchain Development",
    description: "Leading blockchain development company in Indonesia, pioneering innovative solutions for decentralized applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="mg775rxh6hy3ea6jqji95bh796gkbu" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Montserrat:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
