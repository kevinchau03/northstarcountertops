import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { serviceAreas } from "./lib/serviceAreas";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Northstar Countertops",
  description: "Custom marble, quartz, and granite countertops serving Scarborough, Toronto, Markham, Durham Region, York Region, Peel Region, Burlington, and Hamilton.",
  openGraph: {
    title: "Northstar Countertops | Custom Marble & Quartz in Ontario",
    description: "Luxury countertops and custom stonework for kitchens, bathrooms, and businesses across the GTA and Hamilton.",
    url: "https://northstarcountertops.ca",
    siteName: "Northstar Countertops",
    images: [
      {
        url: "https://northstarcountertops.ca/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Northstar Countertops showroom with marble table",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Northstar Countertops",
      url: "https://northstarcountertops.ca",
      telephone: "+1-416-356-8269",
      address: {
        "@type": "PostalAddress",
        streetAddress: "54 Howden Rd B",
        addressLocality: "Scarborough",
        addressRegion: "ON",
        postalCode: "M1R 3E4",
        addressCountry: "CA"
      },
      image: "https://northstarcountertops.ca/og-image.jpg",
      priceRange: "$$",
      areaServed: serviceAreas.map((area) => ({
        "@type": "City",
        name: area,
        address: {
          "@type": "PostalAddress",
          addressRegion: "ON",
          addressCountry: "CA"
        }
      })),
      sameAs: [
        "https://www.facebook.com/NSCountertops/",
        "https://www.instagram.com/nscountertop/?hl=en"
      ]
    }),
  }}
/>
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
