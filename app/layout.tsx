import Header from "@/components/user/Header";
import Footer from "@/components/user/Footer";
import Providers from "./providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AV-TRADE | Wholesale Dry Fruits, Spices & Organic Grains in Lucknow",
  description:
    "AV-TRADE is a leading grocery and wholesale platform in Lucknow, offering premium dry fruits, spices, grains, pulses, and organic sweeteners. From almonds and cashews to turmeric and basmati rice - we deliver purity, freshness, and trust to homes and businesses across India.",
  keywords: [
    "AV-TRADE",
    "dry fruits supplier Lucknow",
    "wholesale groceries India",
    "buy almonds online",
    "organic grains",
    "spices and pulses",
    "grocery store Lucknow",
    "wholesale dry fruits India",
    "premium spices",
    "basmati rice",
    "AV-TRADE Lucknow",
    "nuts and seeds online",
    "AV-TradeCorp",
  ],
  authors: [{ name: "AV-TRADE Team" }],
  creator: "AV-TRADE",
  publisher: "AV-TRADE",
  openGraph: {
    title: "AV-TRADE | Premium Dry Fruits, Spices & Grains in Lucknow",
    description:
      "Discover 100% authentic dry fruits, pulses, spices, and grains with AV-TRADE - Lucknow's trusted wholesale and retail grocery platform. Freshly packed, high-quality, and affordable for every home and business.",
    url: "https://www.avtradecorp.com",
    siteName: "AV-TRADE",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.avtradecorp.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AV-TRADE - Premium Dry Fruits & Grocery Supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AV-TRADE | Trusted Supplier of Dry Fruits & Spices",
    description:
      "Buy fresh dry fruits, organic pulses, and aromatic spices online from AV-TRADE Lucknow - your reliable wholesale grocery partner.",
    images: ["https://www.avtradecorp.com/og-image.jpg"],
    creator: "@AVTradeCorp",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.avtradecorp.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* <PromoStrip /> */}
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
