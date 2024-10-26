// app/sitemap/route.ts

import { siteConfig } from "@/config/site"


const BASE_URL = siteConfig.links.home;
const BLOG_URL = siteConfig.links.blog;


const generateSitemap = () => {
  const pages = [
    { url: `${BASE_URL}`, lastModified: new Date().toISOString() },
    { url: `${BLOG_URL}`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/terms-conditions`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/login`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/signup`, lastModified: new Date().toISOString() }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
      .map(({ url, lastModified }) => `
          <url>
            <loc>${url}</loc>
            <lastmod>${lastModified}</lastmod>
            <changefreq>daily</changefreq>
              <priority>1</priority>
          </url>
        `)
      .join('')}
    </urlset>
  `;

  return sitemap;
};

export async function GET() {
  const sitemap = generateSitemap();
  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate'
    }
  });
}
