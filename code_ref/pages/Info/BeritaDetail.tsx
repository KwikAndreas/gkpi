import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { supabase } from "../../api/supabase";
import SEOComponent from "../../components/SEOComponent";
import { useSEOMetadata } from "../../hooks/useSEOMetadata";

const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const BeritaDetail: React.FC = () => {
  const { judul } = useParams<{ judul: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get SEO metadata for this specific news item
  const { metadata: seoMetadata } = useSEOMetadata("berita", data?.id || null);

  useEffect(() => {
    const fetchBerita = async () => {
      if (!judul) {
        setError("Judul Berita tidak ditemukan.");
        setLoading(false);
        return;
      }
      try {
        // Decode the slug from URL
        const decodedSlug = decodeURIComponent(judul);

        // Fetch all berita and find matching slug
        const { data: allBerita, error } = await supabase
          .from("berita")
          .select("*");

        if (error) {
          setError("Berita tidak ditemukan.");
          setLoading(false);
          return;
        }

        // Find the matching berita by comparing slugs
        const matchingBerita = allBerita?.find(
          (item: any) => createSlug(item.judul) === decodedSlug,
        );

        if (!matchingBerita) {
          setError("Berita tidak ditemukan.");
        } else {
          setData(matchingBerita);
        }
      } catch (err) {
        setError("Gagal memuat berita.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBerita();
  }, [judul]);

  if (loading) {
    return (
      <div className="container mx-auto p-8 text-center text-xl text-gray-600">
        Memuat berita...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-8 text-center text-xl text-red-600">
        {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container mx-auto p-8 text-center text-xl text-gray-600">
        Berita tidak ditemukan.
      </div>
    );
  }

  // Generate default SEO data
  const generateSEOData = () => {
    const createSlug = (text: string): string => {
      return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    };

    const defaultTitle =
      seoMetadata?.title || `${data.judul} - Berita GKI Cipinang Indah`;
    const defaultDescription =
      seoMetadata?.description ||
      `${data.deskripsi.substring(
        0,
        150,
      )}... Baca berita lengkap dari GKI Cipinang Indah Jakarta Timur.`;
    const defaultKeywords =
      seoMetadata?.keywords ||
      `${data.judul}, berita gereja, GKI Cipinang Indah, Jakarta Timur`;
    const defaultCanonical =
      seoMetadata?.canonical_url ||
      `https://gkicinda.id/info/berita/${createSlug(data.judul)}`;
    const defaultImage =
      seoMetadata?.image_url ||
      data.media_url ||
      "https://gkicinda.id/gkicinda.png";

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: data.judul,
      description: data.deskripsi,
      image: defaultImage,
      datePublished: data.tanggal,
      dateModified: seoMetadata?.modified_time || data.tanggal,
      author: {
        "@type": "Organization",
        name: "GKI Cipinang Indah",
      },
      publisher: {
        "@type": "Organization",
        name: "GKI Cipinang Indah",
        logo: {
          "@type": "ImageObject",
          url: "https://gkicinda.id/gkicinda.png",
        },
      },
      url: defaultCanonical,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": defaultCanonical,
      },
    };

    return {
      defaultTitle,
      defaultDescription,
      defaultKeywords,
      defaultCanonical,
      defaultImage,
      schemaData,
    };
  };

  const seoData = generateSEOData();

  return (
    <>
      <SEOComponent
        metadata={seoMetadata}
        defaultTitle={seoData.defaultTitle}
        defaultDescription={seoData.defaultDescription}
        defaultKeywords={seoData.defaultKeywords}
        defaultCanonical={seoData.defaultCanonical}
        defaultImage={seoData.defaultImage}
        defaultType="article"
        schemaData={seoData.schemaData}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl px-4 py-12 md:py-16"
      >
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => navigate("/info")}
          className="inline-flex items-center mb-8 text-green-600 hover:text-green-700 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider group"
        >
          <div className="bg-green-50 p-2 rounded-full mr-3 group-hover:bg-green-100 transition-colors">
            <FaArrowLeft className="text-green-600" />
          </div>
          Kembali ke Info
        </motion.button>

        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.15] tracking-tight">
            {data.judul}
          </h1>
          <div className="flex items-center justify-center md:justify-start text-gray-500 font-medium">
            <svg className="w-5 h-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{data.tanggal}</span>
          </div>
        </header>

        {data.media_url && (
          <div className="mb-12 relative rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={data.media_url}
              alt={data.judul}
              className={`w-full object-cover ${
                data.ratio === 169
                  ? "aspect-video"
                  : data.ratio === 43
                    ? "aspect-[4/3]"
                    : "max-h-[600px]"
              }`}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        )}
        
        {data.tipeMedia === "video" && data.media_url && (
          <div className="w-full aspect-video mb-12 rounded-3xl overflow-hidden shadow-lg bg-black border border-gray-100 relative group">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={data.media_url}
              title={data.judul}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-green-600 hover:prose-a:text-green-700">
          {data.deskripsi}
        </div>
      </motion.div>
    </>
  );
};

export default BeritaDetail;
