// SEO Utilities untuk optimasi tambahan
export interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}

export const staticRoutes: SitemapEntry[] = [
  {
    url: "https://gkicinda.id/",
    lastModified: new Date().toISOString(),
    changeFreq: "weekly",
    priority: 1.0,
  },
  {
    url: "https://gkicinda.id/profil",
    lastModified: new Date().toISOString(),
    changeFreq: "monthly",
    priority: 0.9,
  },
  {
    url: "https://gkicinda.id/jadwal-kebaktian",
    lastModified: new Date().toISOString(),
    changeFreq: "weekly",
    priority: 0.9,
  },
  {
    url: "https://gkicinda.id/shalom",
    lastModified: new Date().toISOString(),
    changeFreq: "daily",
    priority: 0.8,
  },
  {
    url: "https://gkicinda.id/berita",
    lastModified: new Date().toISOString(),
    changeFreq: "daily",
    priority: 0.8,
  },
  {
    url: "https://gkicinda.id/artikel",
    lastModified: new Date().toISOString(),
    changeFreq: "daily",
    priority: 0.8,
  },
  {
    url: "https://gkicinda.id/download",
    lastModified: new Date().toISOString(),
    changeFreq: "monthly",
    priority: 0.6,
  },
];

export const generateSitemap = (entries: SitemapEntry[]): string => {
  const urlEntries = entries
    .map(
      (entry) => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

// Structured Data untuk Rich Snippets
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GKI Cipinang Indah",
  alternateName: "Gereja Kristen Indonesia Cipinang Indah",
  url: "https://gkicinda.id",
  logo: "https://gkicinda.id/gkicinda.png",
  description:
    "Gereja Kristen Indonesia yang melayani jemaat di Jakarta Timur, Duren Sawit",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jln. Perkutut-Kepodang No.18",
    addressLocality: "Cipinang Indah",
    addressRegion: "Jakarta Timur",
    postalCode: "13430",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "General Information",
    url: "https://gkicinda.id",
  },
  sameAs: [
    "https://www.facebook.com/pages/GKI%20Cipinang%20Indah/122038508445665",
    "https://www.instagram.com/gkicipinangindah/",
    "https://www.youtube.com/@gkicipinangindah",
  ],
});

// Breadcrumb Schema
export const generateBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
