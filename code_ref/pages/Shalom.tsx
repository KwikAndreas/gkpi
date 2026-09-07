import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../api/supabase";
import SEOComponent from "../components/SEOComponent";

type Shalom = {
  id: number;
  kategori: string;
  judul: string;
  ayat_alkitab: string;
  tampilan_pasal: string;
};

const Shalom: React.FC = () => {
  const [shalomList, setShalomList] = useState<Shalom[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchShalom = async () => {
    const { data, error } = await supabase
      .from("shalom")
      .select("*")
      .order("tanggal_berlaku", { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setShalomList(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchShalom();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-8 text-center text-xl text-gray-600">
        Memuat...
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

  if (!shalomList || shalomList.length === 0) {
    return (
      <div className="container mx-auto p-8 text-center text-xl text-gray-600">
        Data Shalom tidak ditemukan.
      </div>
    );
  }

  const renunganList = shalomList.filter(
    (item) => item.kategori.toLowerCase() === "renungan",
  );
  const bacaanList = shalomList.filter(
    (item) => item.kategori.toLowerCase() === "bacaan",
  );
  const pokokDoaList = shalomList.filter(
    (item) => item.kategori.toLowerCase() === "pokok-doa",
  );

  // Generate SEO data for the page
  const generatePageSEO = () => {
    const defaultSEO = {
      title:
        "Shalom - Renungan Harian, Bacaan Alkitab & Pokok Doa - GKI Cipinang Indah",
      description:
        "Temukan renungan harian, bacaan Alkitab sepekan, dan pokok doa mingguan dari GKI Cipinang Indah. Dapatkan nutrisi rohani untuk pertumbuhan iman dan kehidupan spiritual yang lebih dalam.",
      keywords:
        "shalom, renungan harian, bacaan alkitab, pokok doa, devosi, spiritual, rohani, GKI Cipinang Indah, renungan kristen, firman tuhan",
      canonical: "https://gkicinda.id/shalom",
      type: "website",
    };

    const latestRenungan = renunganList[0];
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Shalom - Renungan Harian & Bacaan Alkitab",
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
      ...(latestRenungan && {
        mainEntity: {
          "@type": "Article",
          headline: latestRenungan.judul,
          description: latestRenungan.ayat_alkitab,
          author: {
            "@type": "Organization",
            name: "GKI Cipinang Indah",
          },
          publisher: {
            "@type": "Organization",
            name: "GKI Cipinang Indah",
          },
        },
      }),
    };

    return { defaultSEO, schemaData };
  };

  const { defaultSEO, schemaData } = generatePageSEO();

  return (
    <>
      <SEOComponent
        defaultTitle={defaultSEO.title}
        defaultDescription={defaultSEO.description}
        defaultKeywords={defaultSEO.keywords}
        defaultCanonical={defaultSEO.canonical}
        defaultType={defaultSEO.type}
        schemaData={schemaData}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto p-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            Shalom
          </h1>
          <div className="w-24 h-1 bg-[#ce9226] mx-auto rounded-full"></div>
        </div>

        <motion.section
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-yellow-600"
        >
          <h2 className="text-3xl font-semibold text-yellow-700 mb-4">
            Renungan Harian
          </h2>
          {renunganList.length === 0 ? (
            <p className="text-gray-600 italic">Belum ada renungan.</p>
          ) : (
            renunganList.map((item) => (
              <div key={item.id} className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.judul}
                </h3>
                <p
                  className="italic mb-4"
                  style={{ color: "rgb(206, 146, 38)" }}
                >
                  {item.ayat_alkitab}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {item.tampilan_pasal}
                </p>
              </div>
            ))
          )}
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.section
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-600"
          >
            <h2 className="text-3xl font-semibold text-green-700 mb-4">
              Bacaan Alkitab Sepekan
            </h2>
            {bacaanList.length === 0 ? (
              <p className="text-gray-600 italic">Belum ada bacaan Alkitab.</p>
            ) : (
              bacaanList.map((item) => (
                <div key={item.id} className="mb-6">
                  <p className="text-gray-800 text-lg mb-2">
                    Judul: {item.judul}
                  </p>
                  <p className="text-gray-800 text-lg mb-2">
                    Ayat:{" "}
                    <span className="font-medium">{item.ayat_alkitab}</span>
                  </p>
                  <p className="text-gray-700 leading-relaxed text-md">
                    {item.tampilan_pasal}
                  </p>
                </div>
              ))
            )}
          </motion.section>

          <motion.section
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-600"
          >
            <h2 className="text-3xl font-semibold text-purple-700 mb-4">
              Pokok Doa Mingguan
            </h2>
            {pokokDoaList.length === 0 ? (
              <p className="text-gray-600 italic">Belum ada pokok doa.</p>
            ) : (
              pokokDoaList.map((item) => (
                <div key={item.id} className="mb-6">
                  <p className="text-gray-800 text-lg mb-2">
                    Judul: {item.judul}
                  </p>
                  <p className="text-gray-800 text-lg mb-2">
                    Ayat:{" "}
                    <span className="font-medium">{item.ayat_alkitab}</span>
                  </p>
                  <p className="text-gray-700 leading-relaxed text-md">
                    {item.tampilan_pasal}
                  </p>
                </div>
              ))
            )}
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default Shalom;
