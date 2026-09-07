import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { supabase } from "../api/supabase";
import { useNavigate } from "react-router-dom";
import SEOComponent from "../components/SEOComponent";

const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const truncateText = (text: string, maxLength: number = 100): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

type BeritaItem = {
  id: number;
  tipe: "berita";
  judul: string;
  deskripsi: string;
  tanggal: string;
  media_url: string;
  tipeMedia: "foto" | "video";
};

type KegiatanItem = {
  id: number;
  tipe: "kegiatan";
  judul: string;
  deskripsi: string;
  jadwal: string;
  media_url: string;
};

type InfoItem = BeritaItem | KegiatanItem;

const Info: React.FC = () => {
  const [berita, setBerita] = useState<BeritaItem[]>([]);
  const [kegiatan, setKegiatan] = useState<KegiatanItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchAll = useCallback(async () => {
    try {
      setLoading(true);
      const [beritaResponse, kegiatanResponse] = await Promise.all([
        supabase
          .from("berita")
          .select("*")
          .order("tanggal", { ascending: false }),
        supabase
          .from("kegiatan")
          .select("*")
          .order("jadwal", { ascending: false }),
      ]);

      setBerita(
        (beritaResponse.data || []).map((item: any) => ({
          ...item,
          tipe: "berita",
        })),
      );
      setKegiatan(
        (kegiatanResponse.data || []).map((item: any) => ({
          ...item,
          tipe: "kegiatan",
        })),
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      setBerita([]);
      setKegiatan([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const allInfo: InfoItem[] = useMemo(
    () => [...berita, ...kegiatan],
    [berita, kegiatan],
  );

  // Memoized SEO data generation
  const seoData = useMemo(() => {
    const defaultSEO = {
      title: "Info Kegiatan & Berita Gereja - GKI Cipinang Indah",
      description:
        "Temukan informasi terkini tentang kegiatan gereja, berita terbaru, dan pengumuman penting dari GKI Cipinang Indah Jakarta Timur. Tetap terhubung dengan komunitas iman kami.",
      keywords:
        "berita gereja, kegiatan gereja, pengumuman gereja, info terbaru, GKI Cipinang Indah, aktivitas jemaat, program gereja",
      canonical: "https://gkicinda.id/info",
      type: "website",
    };

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Info Kegiatan & Berita Gereja",
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
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: allInfo.length,
        itemListElement: allInfo.slice(0, 10).map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.judul,
          description: item.deskripsi,
          url: `https://gkicinda.id/info/${item.tipe}/${createSlug(
            item.judul,
          )}`,
        })),
      },
    };

    return { defaultSEO, schemaData };
  }, [allInfo]);

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
        className="container mx-auto p-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            Info & Berita Gereja
          </h1>
          <div className="w-24 h-1 bg-[#ce9226] mx-auto rounded-full"></div>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full flex flex-col items-center justify-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ce9226] mb-4"></div>
              <span className="text-gray-500 font-medium">Memuat informasi...</span>
            </div>
          ) : allInfo.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-16 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-lg">Belum ada info yang tersedia saat ini.</p>
            </div>
          ) : (
            allInfo.map((item, index) =>
              item.tipe === "berita" ? (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col cursor-pointer group"
                  onClick={() =>
                    navigate(`/info/berita/${createSlug(item.judul)}`)
                  }
                >
                  <div className="relative overflow-hidden">
                    {item.tipeMedia === "foto" ? (
                      <img
                        src={item.media_url}
                        alt={item.judul}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    ) : (
                      <div className="relative w-full h-56 bg-black flex items-center justify-center group-hover:opacity-90 transition-opacity">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full pointer-events-none"
                          src={item.media_url}
                          title={item.judul}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        <div className="absolute inset-0 bg-black/20"></div>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                      {item.tanggal}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-3 leading-snug">
                      {item.judul}
                    </h2>
                    <p className="text-gray-600 leading-relaxed flex-grow text-sm">
                      {truncateText(item.deskripsi)}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-md shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col cursor-pointer group"
                  onClick={() =>
                    navigate(`/info/kegiatan/${createSlug(item.judul)}`)
                  }
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.media_url}
                      alt={item.judul}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.jadwal}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#ce9226] transition-colors mb-3 leading-snug">
                      {item.judul}
                    </h2>
                    <p className="text-gray-600 leading-relaxed flex-grow text-sm">
                      {truncateText(item.deskripsi)}
                    </p>
                  </div>
                </motion.div>
              ),
            )
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Info;
