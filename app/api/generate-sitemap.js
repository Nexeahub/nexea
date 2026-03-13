// app/api/generate-sitemap.js
import fs from "fs";
import path from "path";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.nexea.com.ng";

export default async function generateSitemap() {
  // Only static pages since you have no dynamic posts
  const staticPages = ["", "register", "privacy", "terms"];

  const sitemapEntries = staticPages
    .map(
      (page) => `
  <url>
    <loc>${BASE_URL}/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

  // Save to public folder
  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap);
  console.log("✅ sitemap.xml generated successfully!");
}

generateSitemap();
