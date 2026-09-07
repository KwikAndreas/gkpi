import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import type { SEOMetadata } from "../hooks/useSEOMetadata";
import { generateOrganizationSchema } from "../utils/seoUtils";

interface SEOComponentProps {
  metadata?: SEOMetadata | null;
  defaultTitle?: string;
  defaultDescription?: string;
  defaultKeywords?: string;
  defaultImage?: string;
  defaultCanonical?: string;
  defaultAuthor?: string;
  defaultType?: string;
  schemaData?: any;
}

const SEOComponent: React.FC<SEOComponentProps> = ({
  metadata,
  defaultTitle = "GKI Cipinang Indah - Gereja Kristen Indonesia Jakarta Timur",
  defaultDescription = "Website resmi GKI Cipinang Indah Jakarta Timur - Gereja Kristen Indonesia yang melayani jemaat di Duren Sawit.",
  defaultKeywords = "GKI Cipinang Indah, Gereja Kristen Indonesia, Jakarta Timur",
  defaultImage = "https://gkicinda.id/gkicinda.png",
  defaultCanonical = "https://gkicinda.id/",
  defaultAuthor = "GKI Cipinang Indah",
  defaultType = "website",
  schemaData,
}) => {
  const title = metadata?.title || defaultTitle;
  const description = metadata?.description || defaultDescription;
  const keywords = metadata?.keywords || defaultKeywords;
  const imageUrl = metadata?.image_url || defaultImage;
  const canonicalUrl = metadata?.canonical_url || defaultCanonical;
  const author = metadata?.author || defaultAuthor;
  const ogTitle = metadata?.og_title || title;
  const ogDescription = metadata?.og_description || description;
  const ogImage = metadata?.og_image || imageUrl;
  const ogType = metadata?.og_type || defaultType;
  const twitterTitle = metadata?.twitter_title || title;
  const twitterDescription = metadata?.twitter_description || description;
  const twitterImage = metadata?.twitter_image || imageUrl;

  const generateSchema = () => {
    if (schemaData) {
      return schemaData;
    }

    const baseSchema: any = {
      "@context": "https://schema.org",
      "@type": metadata?.schema_type || "WebPage",
      name: title,
      description: description,
      url: canonicalUrl,
      image: imageUrl,
      author: {
        "@type": "Organization",
        name: author,
      },
      publisher: {
        "@type": "Organization",
        name: "GKI Cipinang Indah",
        logo: {
          "@type": "ImageObject",
          url: "https://gkicinda.id/gkicinda.png",
        },
      },
    };

    if (metadata?.published_time) {
      baseSchema.datePublished = metadata.published_time;
    }

    if (metadata?.modified_time) {
      baseSchema.dateModified = metadata.modified_time;
    }

    return baseSchema;
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="GKI Cipinang Indah" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:site" content="@gkicipinangindah" />

      {metadata?.published_time && (
        <meta
          property="article:published_time"
          content={metadata.published_time}
        />
      )}
      {metadata?.modified_time && (
        <meta
          property="article:modified_time"
          content={metadata.modified_time}
        />
      )}
      {metadata?.author && (
        <meta property="article:author" content={metadata.author} />
      )}

      <script type="application/ld+json">
        {JSON.stringify(generateSchema(), null, 2)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(generateOrganizationSchema(), null, 2)}
      </script>
    </Helmet>
  );
};

export default memo(SEOComponent);
