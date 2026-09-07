import React, { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = "GKI Cipinang Indah - Gereja Kristen Indonesia Jakarta Timur",
  description = "Website resmi GKI Cipinang Indah Jakarta Timur. Temukan jadwal kebaktian, renungan Shalom, berita terkini, kegiatan jemaat, artikel rohani, dan informasi gereja.",
  keywords = "GKI Cipinang Indah, Gereja Kristen Indonesia, Jakarta Timur, Kebaktian, Shalom, Renungan, Artikel Rohani",
  image = "https://gkicinda.id/gkicinda.png",
  url = "https://gkicinda.id/",
  type = "website",
  author = "GKI Cipinang Indah",
}) => {
  const siteName = "GKI Cipinang Indah";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  useEffect(() => {
    document.title = fullTitle;

    const updateMetaTag = (
      name: string,
      content: string,
      property?: boolean
    ) => {
      const attribute = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);

    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", siteName, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:url", url);
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [fullTitle, description, keywords, image, url, type, author, siteName]);

  return null;
};

export default SEO;
