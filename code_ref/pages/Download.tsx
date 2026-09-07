import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaAndroid, FaApple } from "react-icons/fa";
import { supabase } from "../api/supabase";
import { parse, isValid, format } from "date-fns";
import { id } from "date-fns/locale";
import SEOComponent from "../components/SEOComponent";

const BUCKET_NAME = "download";

interface DownloadFile {
  id: string;
  name: string;
  displayTitle: string;
  description: string;
  fullPath: string;
  date: Date | null;
}

const Download: React.FC = () => {
  const [filesToDisplay, setFilesToDisplay] = useState<DownloadFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndProcessFiles = async () => {
      setLoading(true);
      setErrorMessage(null);

      try {
        let liturgiFile: DownloadFile | null = null;
        const wartaJemaatFiles: DownloadFile[] = [];

        const { data: liturgiList, error: liturgiError } =
          await supabase.storage.from(BUCKET_NAME).list("public/");

        if (liturgiError) {
          console.error(
            "Error listing public/ folder for liturgi:",
            liturgiError.message,
          );
        } else {
          const foundLiturgi = (liturgiList || []).find(
            (item) =>
              item.name &&
              item.name.toLowerCase() === "liturgi kebaktian umum.pdf" &&
              item.metadata,
          );
          if (foundLiturgi) {
            liturgiFile = {
              id: foundLiturgi.id || foundLiturgi.name,
              name: foundLiturgi.name,
              displayTitle: "Liturgi Kebaktian Umum",
              description: "Panduan liturgi untuk kebaktian umum reguler.",
              fullPath: `public/${foundLiturgi.name}`,
              date: null,
            };
          }
        }

        const { data: wartaData, error: wartaError } = await supabase.storage
          .from(BUCKET_NAME)
          .list("public/warta-jemaat/");

        if (wartaError) {
          console.error(
            "Error listing Warta Jemaat folder:",
            wartaError.message,
          );
        } else {
          (wartaData || []).forEach((wartaItem) => {
            if (
              wartaItem.name &&
              wartaItem.metadata &&
              wartaItem.name.toLowerCase().startsWith("warta jemaat") &&
              wartaItem.name.endsWith(".pdf")
            ) {
              const wartaFullPath = `public/warta-jemaat/${wartaItem.name}`;
              const match = wartaItem.name.match(
                /WARTA JEMAAT (\d{1,2} \w+ \d{4})\.pdf/i,
              );
              let fileDate: Date | null = null;
              let displayDescription =
                "Informasi terbaru seputar kegiatan dan pengumuman gereja.";

              if (match && match[1]) {
                const dateString = match[1];
                const parsedDate = parse(
                  dateString,
                  "dd MMMM yyyy",
                  new Date(),
                  { locale: id },
                );

                if (isValid(parsedDate)) {
                  fileDate = parsedDate;
                  const formattedDateDesc = format(parsedDate, "dd MMMM", {
                    locale: id,
                  });
                  displayDescription = `Informasi terbaru seputar kegiatan dan pengumuman gereja tanggal ${formattedDateDesc}.`;
                }
              }

              wartaJemaatFiles.push({
                id: wartaItem.id || wartaItem.name,
                name: wartaItem.name,
                displayTitle: "Warta Jemaat",
                description: displayDescription,
                fullPath: wartaFullPath,
                date: fileDate,
              });
            }
          });
        }

        wartaJemaatFiles.sort((a, b) => {
          if (!a.date && !b.date) return 0;
          if (!a.date) return 1;
          if (!b.date) return -1;
          return b.date.getTime() - a.date.getTime();
        });

        const finalFiles: DownloadFile[] = [];

        if (liturgiFile) {
          finalFiles.push(liturgiFile);
        }

        if (wartaJemaatFiles.length > 0) {
          finalFiles.push(wartaJemaatFiles[0]);
        }

        setFilesToDisplay(finalFiles);
      } catch (err) {
        const error = err as Error;
        console.error("Error fetching or processing files:", error.message);
        setErrorMessage(
          "Gagal memuat daftar unduhan. Silakan coba lagi nanti.",
        );
        setFilesToDisplay([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAndProcessFiles();
  }, []);
  const handleDownload = async (fullPath: string, fileName: string) => {
    try {
      // Menggunakan fullPath untuk operasi download dari Supabase Storage
      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .download(fullPath);

      if (error) {
        console.error("Gagal mengunduh file:", error.message);
        setErrorMessage(
          `Gagal mengunduh "${fileName}". Pastikan file tersedia atau coba lagi.`,
        );
        return;
      }

      // Membuat URL objek dari blob data yang diunduh
      const url = URL.createObjectURL(data);
      // Membuat elemen link sementara
      const link = document.createElement("a");
      link.href = url;
      // Menetapkan nama file untuk diunduh
      link.download = fileName;
      // Menambahkan link ke DOM, mengklik, lalu menghapusnya
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // Membersihkan URL objek untuk menghindari kebocoran memori
      URL.revokeObjectURL(url);
    } catch (err) {
      const error = err as Error;
      console.error("Terjadi kesalahan saat mengunduh:", error.message);
      setErrorMessage("Terjadi kesalahan tak terduga saat mengunduh.");
    }
  };

  return (
    <>
      <SEOComponent
        defaultTitle="Download - GKI Cipinang Indah"
        defaultDescription="Pusat unduhan GKI Cipinang Indah. Unduh warta jemaat terbaru, liturgi kebaktian, dan aplikasi mobile gereja untuk Android dan iOS."
        defaultKeywords="Download GKI Cipinang Indah, Warta Jemaat, Liturgi Kebaktian, Aplikasi Gereja, PDF Gereja, GKI Mobile App"
        defaultCanonical="https://gkicinda.id/download"
        defaultImage="https://gkicinda.id/gkicinda.png"
        defaultType="website"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto p-4 md:p-8 max-w-6xl"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            Pusat Unduhan
          </h1>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)] mb-4"></div>
            <span className="text-gray-500 font-medium">Memuat daftar unduhan...</span>
          </div>
        ) : errorMessage ? (
          <div className="text-center bg-red-50 text-red-600 font-medium py-8 rounded-2xl">
            {errorMessage}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filesToDisplay.map((file, index) => (
              <motion.div
                key={file.id}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors duration-300">
                  <FaFilePdf className="text-red-500 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {file.displayTitle}
                </h2>
                <p className="text-gray-500 text-sm mb-8 flex-grow">
                  {file.description}
                </p>
                <button
                  className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  onClick={() => handleDownload(file.fullPath, file.name)}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <span className="mr-2">Unduh PDF</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M4.293 15.707a1 1 0 010-1.414L8.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </motion.div>
            ))}

            {/* Kartu Aplikasi Alkitab (konten statis) */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: filesToDisplay.length * 0.1 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center border border-indigo-100/50"
            >
              <div className="flex space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-green-600">
                  <FaAndroid size={24} />
                </div>
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gray-800">
                  <FaApple size={24} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                Aplikasi Alkitab
              </h2>
              <p className="text-gray-600 text-sm mb-8 flex-grow">
                Unduh aplikasi Alkitab populer untuk perangkat Android dan iOS (Rekomendasi).
              </p>
              <div className="flex flex-col space-y-3 w-full">
                <a
                  href="https://play.google.com/store/apps/details?id=com.sirma.mobile.bible.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border border-gray-200 hover:border-green-500 hover:text-green-600 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center justify-center shadow-sm hover:shadow-md"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <FaAndroid className="mr-2" size={18} /> Google Play
                </a>
                <a
                  href="https://apps.apple.com/us/app/bible/id282935706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border border-gray-200 hover:border-gray-800 hover:text-gray-900 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center justify-center shadow-sm hover:shadow-md"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <FaApple className="mr-2" size={18} /> App Store
                </a>
              </div>
            </motion.div>
          </div>
        )}
        <p className="text-center text-gray-500 mt-12 text-sm bg-gray-50 p-4 rounded-xl max-w-2xl mx-auto">
          * Pastikan perangkat Anda memiliki aplikasi pembaca PDF untuk membuka Warta Jemaat & Liturgi.
        </p>
      </motion.div>
    </>
  );
};

export default Download;
