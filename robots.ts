// app/robots.ts
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://northstarcountertop.ca/sitemap.xml',
  };
}
