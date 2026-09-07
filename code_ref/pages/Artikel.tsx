import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { supabase } from "../api/supabase";
import { Link } from "react-router-dom";
import SEOComponent from "../components/SEOComponent";

const ArtikelPage: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const truncateText = (text: string, maxLength: number = 120): string => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  const fetchArtikel = useCallback(async () => {
    try {
      setLoading(true);
      const { data: artikelData } = await supabase
        .from("artikel")
        .select("*")
        .order("created_at", { ascending: false });
      setData(artikelData || []);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArtikel();
  }, [fetchArtikel]);

  // Memoized SEO data generation
  const seoData = useMemo(() => {
    const defaultSEO = {
      title: "Artikel Rohani Terbaru - GKI Cipinang Indah",
      description:
        "Baca artikel rohani terbaru, renungan, dan tulisan inspiratif dari GKI Cipinang Indah. Dapatkan wawasan spiritual dan pemahaman Alkitab yang mendalam untuk pertumbuhan iman Anda.",
      keywords:
        "artikel rohani, renungan kristen, tulisan inspiratif, pemahaman alkitab, wawasan spiritual, GKI Cipinang Indah, artikel gereja",
      canonical: "https://gkicinda.id/artikel",
      type: "website",
    };

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Artikel Rohani GKI Cipinang Indah",
      description: defaultSEO.description,
      url: defaultSEO.canonical,
      publisher: {
        "@type": "Organization",
        name: "GKI Cipinang Indah",
        logo: {
          "@type": "ImageObject",
          url: "https://gkicinda.id/gkicinda.png",
        },
      },
      blogPost: data.slice(0, 10).map((article) => ({
        "@type": "BlogPosting",
        headline: article.judul,
        description: article.ringkasan,
        datePublished: article.tanggal,
        author: {
          "@type": "Person",
          name: article.penulis,
        },
        publisher: {
          "@type": "Organization",
          name: "GKI Cipinang Indah",
        },
        url: `https://gkicinda.id/artikel/${article.id}`,
        image: article.media_url || "https://gkicinda.id/gkicinda.png",
      })),
    };

    return { defaultSEO, schemaData };
  }, [data]);

  if (loading) {
    return (
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2"
            style={{ borderBottomColor: "rgb(206, 146, 38)" }}
          ></div>
          <span className="ml-3 text-gray-600">Memuat artikel...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOComponent
        defaultTitle={seoData.defaultSEO.title}
        defaultDescription={seoData.defaultSEO.description}
        defaultKeywords={seoData.defaultSEO.keywords}
        defaultCanonical={seoData.defaultSEO.canonical}
        defaultType={seoData.defaultSEO.type}
        schemaData={seoData.schemaData}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto p-4 md:p-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            Artikel Terbaru
          </h1>
          <div className="w-24 h-1 bg-[#ce9226] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.length === 0 ? (
            <div className="col-span-full text-center text-gray-600 py-12 bg-white rounded-xl shadow-sm border border-gray-100">
              <p className="text-lg">Tidak ada artikel yang tersedia saat ini.</p>
            </div>
          ) : (
            data.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group"
              >
                {article.media_url && (
                  <div className="relative overflow-hidden">
                    <img
                      src={article.media_url}
                      alt={article.judul}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      onContextMenu={(e) => e.preventDefault()}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    <span>{article.tanggal}</span>
                  </div>
                  <Link to={`/artikel/${article.id}`}>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#ce9226] transition-colors duration-300 mb-3 leading-snug">
                      {article.judul}
                    </h2>
                  </Link>
                  <p className="text-gray-500 text-sm mb-4 italic font-medium">
                    Oleh {article.penulis}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {truncateText(article.ringkasan, 120)}
                  </p>
                  <Link
                    to={`/artikel/${article.id}`}
                    className="inline-flex items-center text-[#ce9226] font-semibold mt-auto opacity-90 group-hover:opacity-100 transition-opacity"
                  >
                    Baca Selengkapnya 
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </>
  );
};

export default ArtikelPage;
