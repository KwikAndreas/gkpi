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

const KegiatanDetail: React.FC = () => {
  const { judul } = useParams<{ judul: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get SEO metadata for this specific activity
  const { metadata: seoMetadata } = useSEOMetadata(
    "kegiatan",
    data?.id || null,
  );

  useEffect(() => {
    const fetchKegiatan = async () => {
      if (!judul) {
        setError("Judul Kegiatan tidak ditemukan.");
        setLoading(false);
        return;
      }
      try {
        // Decode the slug from URL
        const decodedSlug = decodeURIComponent(judul);

        // Fetch all kegiatan and find matching slug
        const { data: allKegiatan, error } = await supabase
          .from("kegiatan")
          .select("*");

        if (error) {
          setError("Kegiatan tidak ditemukan.");
          setLoading(false);
          return;
        }

        // Find the matching kegiatan by comparing slugs
        const matchingKegiatan = allKegiatan?.find(
          (item: any) => createSlug(item.judul) === decodedSlug,
        );

        if (!matchingKegiatan) {
          setError("Kegiatan tidak ditemukan.");
        } else {
          setData(matchingKegiatan);
        }
      } catch (err) {
        setError("Gagal memuat kegiatan.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchKegiatan();
  }, [judul]);

  if (loading) {
    return (
      <div className="container mx-auto p-8 text-center text-xl text-gray-600">
        Memuat kegiatan...
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
        Kegiatan tidak ditemukan.
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
      seoMetadata?.title || `${data.judul} - Kegiatan GKI Cipinang Indah`;
    const defaultDescription =
      seoMetadata?.description ||
      `${data.deskripsi.substring(
        0,
        150,
      )}... Informasi lengkap tentang kegiatan ${
        data.judul
      } di GKI Cipinang Indah Jakarta Timur. Jadwal: ${data.jadwal}`;
    const defaultKeywords =
      seoMetadata?.keywords ||
      `${data.judul}, kegiatan gereja, jadwal kegiatan, GKI Cipinang Indah, Jakarta Timur`;
    const defaultCanonical =
      seoMetadata?.canonical_url ||
      `https://gkicinda.id/info/kegiatan/${createSlug(data.judul)}`;
    const defaultImage =
      seoMetadata?.image_url ||
      data.media_url ||
      "https://gkicinda.id/gkicinda.png";

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: data.judul,
      description: data.deskripsi,
      image: defaultImage,
      startDate: data.jadwal,
      organizer: {
        "@type": "Organization",
        name: "GKI Cipinang Indah",
        url: "https://gkicinda.id",
      },
      location: {
        "@type": "Place",
        name: "GKI Cipinang Indah",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jln. Perkutut-Kepodang No.18",
          addressLocality: "Duren Sawit",
          addressRegion: "Jakarta Timur",
          postalCode: "13430",
          addressCountry: "ID",
        },
      },
      url: defaultCanonical,
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
          className="inline-flex items-center mb-8 text-[#ce9226] hover:text-[#b58021] transition-colors duration-300 font-semibold text-sm uppercase tracking-wider group"
        >
          <div className="bg-[#ce9226]/10 p-2 rounded-full mr-3 group-hover:bg-[#ce9226]/20 transition-colors">
            <FaArrowLeft className="text-[#ce9226]" />
          </div>
          Kembali ke Info
        </motion.button>

        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.15] tracking-tight">
            {data.judul}
          </h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="flex items-center text-gray-700 bg-gray-50 px-4 py-2 rounded-xl font-medium border border-gray-100 shadow-sm">
              <svg className="w-5 h-5 mr-2 text-[#ce9226]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{data.jadwal}</span>
            </div>
          </div>
        </header>

        {data.media_url && (
          <div className="mb-12 relative rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={data.media_url}
              alt={data.judul}
              className="w-full object-cover max-h-[600px]"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        )}

        <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-[#ce9226] hover:prose-a:text-[#b58021]">
          {data.deskripsi}
        </div>
      </motion.div>
    </>
  );
};

export default KegiatanDetail;
