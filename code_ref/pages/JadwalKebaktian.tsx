import React from "react";
import { motion } from "framer-motion";
import SEOComponent from "../components/SEOComponent";

const JadwalKebaktian: React.FC = () => {
  const jadwal = [
    { judul: "Kebaktian Umum I", waktu: "07:00 WIB", jenis: "(OnSite)" },
    { judul: "Kebaktian Umum II", waktu: "09:30 WIB", jenis: "(Hybrid)" },
    { judul: "Kebaktian Umum III", waktu: "17:00 WIB", jenis: "(OnSite)" },
    { judul: "Kebaktian Pemuda", waktu: "09:30 WIB", jenis: null },
    { judul: "Kebaktian Remaja", waktu: "09:30 WIB", jenis: null },
    { judul: "Kebaktian Tunas Remaja", waktu: "09:30 WIB", jenis: null },
    { judul: "Kebaktian Anak", waktu: "09:30 WIB", jenis: null },
  ];

  // Generate SEO data for the page
  const generatePageSEO = () => {
    const defaultSEO = {
      title: "Jadwal Kebaktian - GKI Cipinang Indah Jakarta Timur",
      description:
        "Lihat jadwal lengkap kebaktian di GKI Cipinang Indah Jakarta Timur. Kebaktian Umum, Pemuda, Remaja, Tunas Remaja, dan Anak setiap hari Minggu. Tersedia layanan OnSite dan Hybrid (Online + OnSite).",
      keywords:
        "jadwal kebaktian, kebaktian minggu, ibadah kristen, GKI Cipinang Indah, kebaktian umum, kebaktian pemuda, kebaktian remaja, kebaktian anak, hybrid service, online service",
      canonical: "https://gkicinda.id/jadwal-kebaktian",
      type: "website",
    };

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Jadwal Kebaktian GKI Cipinang Indah",
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
        name: "Jadwal Kebaktian",
        numberOfItems: jadwal.length,
        itemListElement: jadwal.map((item) => ({
          "@type": "Event",
          name: item.judul,
          startTime: item.waktu,
          eventAttendanceMode: item.jenis?.includes("Hybrid")
            ? "https://schema.org/MixedEventAttendanceMode"
            : "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          organizer: {
            "@type": "Organization",
            name: "GKI Cipinang Indah",
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
        })),
      },
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
        className="container mx-auto p-4 md:p-8 max-w-5xl"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            Jadwal Kebaktian
          </h1>
          <div className="w-24 h-1 bg-[#ce9226] mx-auto rounded-full"></div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr>
                <th
                  className="py-3 px-6 text-white text-left rounded-tl-lg"
                  style={{ backgroundColor: "rgb(206, 146, 38)" }}
                >
                  Judul
                </th>
                <th
                  className="py-3 px-6 text-white text-left"
                  style={{ backgroundColor: "rgb(206, 146, 38)" }}
                >
                  Waktu
                </th>
                <th
                  className="py-3 px-6 text-white text-left rounded-tr-lg"
                  style={{ backgroundColor: "rgb(206, 146, 38)" }}
                >
                  Jenis
                </th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((item, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3 px-6">{item.judul}</td>
                  <td className="py-3 px-6">{item.waktu}</td>
                  <td className="py-3 px-6 text-center">
                    {item.jenis ? (
                      item.jenis
                    ) : (
                      <span className="text-gray-400 font-bold">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-600 mt-10 text-md">
          *Jadwal dapat berubah sewaktu-waktu. Harap perhatikan pengumuman
          gereja.
        </p>
      </motion.div>
    </>
  );
};

export default JadwalKebaktian;
