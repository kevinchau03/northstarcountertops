import type { MetadataRoute } from "next";
import { seoPages, siteUrl } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until actual content revision dates are available.
  return Object.keys(seoPages).map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
