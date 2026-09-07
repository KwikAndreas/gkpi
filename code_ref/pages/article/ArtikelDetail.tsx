import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { supabase } from "../../api/supabase";
import SEOComponent from "../../components/SEOComponent";
import { useSEOMetadata } from "../../hooks/useSEOMetadata";

const ArtikelDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [data, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get SEO metadata for this specific article
  const { metadata: seoMetadata } = useSEOMetadata("artikel", data?.id || null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) {
        setError("ID Artikel tidak ditemukan.");
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase
          .from("artikel")
          .select("*")
          .eq("id", id)
          .single();
        if (error || !data) {
          setError("Artikel tidak ditemukan.");
        } else {
          setArticle(data);
        }
      } catch (err) {
        setError("Gagal memuat artikel.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto p-8 text-center text-xl text-gray-600">
        Memuat artikel...
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
        Artikel tidak ditemukan.
      </div>
    );
  }

  // Generate default SEO data
  const generateSEOData = () => {
    const defaultTitle =
      seoMetadata?.title || `${data.judul} - GKI Cipinang Indah`;
    const defaultDescription =
      seoMetadata?.description ||
      `${data.ringkasan}... Baca artikel lengkap dari ${data.penulis} di website resmi GKI Cipinang Indah.`;
    const defaultKeywords =
      seoMetadata?.keywords ||
      `${data.judul}, artikel rohani, ${data.penulis}, GKI Cipinang Indah`;
    const defaultCanonical =
      seoMetadata?.canonical_url || `https://gkicinda.id/artikel/${data.id}`;
    const defaultImage =
      seoMetadata?.image_url ||
      data.media_url ||
      "https://gkicinda.id/gkicinda.png";

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data.judul,
      description: data.ringkasan,
      image: defaultImage,
      datePublished: data.tanggal,
      dateModified: seoMetadata?.modified_time || data.tanggal,
      author: {
        "@type": "Person",
        name: data.penulis,
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
          onClick={() => navigate("/artikel")}
          className="inline-flex items-center mb-8 text-[#ce9226] hover:text-[#b58021] transition-colors duration-300 font-semibold text-sm uppercase tracking-wider group"
        >
          <div className="bg-[#ce9226]/10 p-2 rounded-full mr-3 group-hover:bg-[#ce9226]/20 transition-colors">
            <FaArrowLeft className="text-[#ce9226]" />
          </div>
          Kembali ke Artikel
        </motion.button>

        <header className="mb-10 text-center md:text-left">
          <div className="inline-block bg-[#ce9226]/10 text-[#ce9226] font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
            Artikel Rohani
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.15] tracking-tight">
            {data.judul}
          </h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-500 font-medium">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 mr-3 flex items-center justify-center text-gray-500 font-bold">
                {data.penulis ? data.penulis.charAt(0).toUpperCase() : "?"}
              </div>
              <span className="text-gray-700 font-bold">{data.penulis}</span>
            </div>
            <span className="hidden md:inline text-gray-300">|</span>
            <div className="flex items-center text-gray-500">
              <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {data.tanggal}
            </div>
          </div>
        </header>

        {data.media_url && (
          <div className="mb-12 relative rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={data.media_url}
              alt={data.judul}
              className="w-full object-cover max-h-[600px]"
            />
          </div>
        )}

        <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-[#ce9226] hover:prose-a:text-[#b58021]">
          {data.isi}
        </div>
      </motion.div>
    </>
  );
};

export default ArtikelDetail;
