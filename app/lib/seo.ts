import type { Metadata } from "next";

export const siteUrl = "https://northstarcountertops.ca";
export const siteName = "Northstar Countertops";
export const socialImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "White stone countertops and kitchen island in a Northstar Countertops project",
};

// This registry supplies page metadata and the sitemap. Add new public pages here.
export const seoPages = {
  "/": {
    title: "Custom Countertops in Scarborough & the GTA",
    description: "Custom marble, quartz, and granite countertops in Scarborough, Toronto, the GTA, and Hamilton. Explore our stonework and request a free project quote.",
  },
  "/about": {
    title: "About Our Countertop Team in Scarborough",
    description: "Meet Northstar Countertops, a Scarborough countertop contractor serving the GTA and Hamilton with custom stone fabrication and installation.",
  },
  "/services": {
    title: "Countertop Design, Fabrication & Installation",
    description: "Explore countertop design consultations, precision fabrication, professional installation, and stone care from Northstar Countertops in Scarborough.",
  },
  "/gallery": {
    title: "Countertop Project Gallery",
    description: "Browse Northstar Countertops projects featuring kitchen countertops, stone islands, and bathroom vanities. Find inspiration for your next renovation.",
  },
  "/contact": {
    title: "Contact Us for a Free Countertop Quote",
    description: "Request a free countertop quote from Northstar Countertops. Call (416) 356-8269 or visit 54 Howden Rd B in Scarborough, Monday–Friday, 9 a.m.–5 p.m.",
  },
  "/privacy": {
    title: "Privacy Policy",
    description: "Learn how Northstar Countertops collects, uses, and protects inquiry and project information, and how to contact us about your privacy rights.",
  },
} as const;

export function pageMetadata(path: keyof typeof seoPages): Metadata {
  const { title, description } = seoPages[path];
  const fullTitle = title + " | " + siteName;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: new URL(path, siteUrl).toString() },
    openGraph: {
      title: fullTitle,
      description,
      url: new URL(path, siteUrl).toString(),
      siteName,
      images: [socialImage],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage],
    },
  };
}
