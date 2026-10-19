import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { serviceAreas } from "./lib/serviceAreas";
import { siteUrl, siteName, socialImage } from "./lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: "%s | " + siteName },
  description: "Custom marble, quartz, and granite countertops serving Scarborough, Toronto, the GTA, and Hamilton.",
  openGraph: {
    siteName,
    images: [socialImage],
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
      "@type": "HomeAndConstructionBusiness",
      "@id": `${siteUrl}/#business`,
      description: "Countertop contractor in Scarborough, Toronto, Ontario, providing custom stone fabrication and installation.",
      name: "Northstar Countertops",
      url: siteUrl,
      telephone: "+1-416-356-8269",
      address: {
        "@type": "PostalAddress",
        streetAddress: "54 Howden Rd B",
        addressLocality: "Scarborough",
        addressRegion: "ON",
        postalCode: "M1R 3E4",
        addressCountry: "CA"
      },
      image: `${siteUrl}/images/IMG_8084.webp`,
      logo: `${siteUrl}/northstar_logo.jpg`,
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      }, {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "00:00",
        closes: "00:00",
      }],
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
