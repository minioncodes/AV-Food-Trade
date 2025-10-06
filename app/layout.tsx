import Header from "@/components/user/Header";
import Footer from "@/components/user/Footer";
import Providers from "./providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AV Trade Corporation | Wholesale Dry Fruits, Spices & Organic Grains in Lucknow",
  description:
    "AV Trade Corporation is a leading grocery and wholesale platform in Lucknow, offering premium dry fruits, spices, grains, pulses, and organic sweeteners. From almonds and cashews to turmeric and basmati rice - we deliver purity, freshness, and trust to homes and businesses across India.",
  keywords: [
    "AV Trade Corporation",
    "dry fruits supplier Lucknow",
    "wholesale groceries India",
    "buy almonds online",
    "organic grains",
    "spices and pulses",
    "grocery store Lucknow",
    "wholesale dry fruits India",
    "premium spices",
    "basmati rice",
    "AV Trade Corporation Lucknow",
    "nuts and seeds online",
    "AV-TradeCorp",
  ],
  authors: [{ name: "AV Trade Corporation Team" }],
  creator: "AV Trade Corporation",
  publisher: "AV Trade Corporation",
  openGraph: {
    title: "AV Trade Corporation | Premium Dry Fruits, Spices & Grains in Lucknow",
    description:
      "Discover 100% authentic dry fruits, pulses, spices, and grains with AV Trade Corporation - Lucknow's trusted wholesale and retail grocery platform. Freshly packed, high-quality, and affordable for every home and business.",
    url: "https://www.avtradecorp.com",
    siteName: "AV Trade Corporation",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.avtradecorp.com/og-img.png",
        width: 1200,
        height: 630,
        alt: "AV Trade Corporation - Premium Dry Fruits & Grocery Supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AV Trade Corporation | Trusted Supplier of Dry Fruits & Spices",
    description:
      "Buy fresh dry fruits, organic pulses, and aromatic spices online from AV Trade Corporation Lucknow - your reliable wholesale grocery partner.",
    images: ["https://www.avtradecorp.com/og-img.png"],
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
