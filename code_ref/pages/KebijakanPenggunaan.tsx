import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const KebijakanPenggunaan: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8 sm:px-6 md:px-8 max-w-3xl"
    >
      <h1
        className="text-4xl font-bold mb-8 text-center"
        style={{ color: "rgb(206, 146, 38)" }}
      >
        Kebijakan Penggunaan & Ketentuan Layanan
      </h1>

      <section className="mb-8">
        <h2
          className="text-3xl font-semibold mb-4"
          style={{ color: "rgb(206, 146, 38)" }}
        >
          Ketentuan Penggunaan Klien API YouTube
        </h2>
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6 sm:prose-base md:prose-lg">
          <p>
            Dengan menggunakan website ini, Anda dianggap telah membaca dan
            menyetujui ketentuan berikut:
          </p>
          <ul className="list-decimal list-inside space-y-4">
            <li>
              <span className="font-bold">Penerimaan Ketentuan:</span>
              <div className="ml-4">
                Anda setuju mengikuti aturan yang berlaku di aplikasi ini dan
                juga{" "}
                <a
                  href="https://www.youtube.com/t/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(206, 146, 38)" }}
                >
                  Ketentuan Layanan YouTube
                </a>
                . Jika tidak setuju, mohon jangan gunakan aplikasi ini.
              </div>
            </li>
            <li>
              <span className="font-bold">Penggunaan yang Diizinkan:</span>
              <div className="ml-4">
                Gunakan aplikasi ini hanya untuk tujuan yang baik dan sesuai
                hukum. Jangan gunakan untuk hal yang melanggar aturan atau
                merugikan orang lain.
              </div>
            </li>
            <li>
              <span className="font-bold">Privasi Anda:</span>
              <div className="ml-4">
                Data Anda diatur dalam{" "}
                <Link
                  to="#kebijakan-privasi"
                  style={{ color: "rgb(206, 146, 38)" }}
                >
                  Kebijakan Privasi
                </Link>{" "}
                di bawah ini. Kami jelaskan apa saja yang kami kumpulkan dan
                bagaimana kami menggunakannya.
              </div>
            </li>
            <li>
              <span className="font-bold">Perubahan Ketentuan:</span>
              <div className="ml-4">
                Aturan ini bisa berubah sewaktu-waktu. Kami akan memperbarui
                halaman ini jika ada perubahan.
              </div>
            </li>
            <li>
              <span className="font-bold">Kontak:</span>
              <div className="ml-4">
                Jika ada pertanyaan, silakan hubungi kami di{" "}
                <a
                  href="mailto:gkicinda@yahoo.com"
                  style={{ color: "rgb(206, 146, 38)" }}
                >
                  gkicinda@yahoo.com
                </a>
                .
              </div>
            </li>
          </ul>
          <p>Terima kasih telah menggunakan website kami!</p>
        </div>
      </section>

      <section id="kebijakan-privasi">
        <h2
          className="text-3xl font-semibold mb-4"
          style={{ color: "rgb(206, 146, 38)" }}
        >
          Kebijakan Privasi
        </h2>
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6 sm:prose-base md:prose-lg">
          <p>
            Kami ingin Anda tahu bagaimana data Anda digunakan di aplikasi ini:
          </p>
          <ul className="list-decimal list-inside space-y-4">
            <li>
              <span className="font-bold">Data yang Kami Kumpulkan:</span>
              <div className="ml-4">
                Kami bisa mengumpulkan data seperti alamat IP, jenis perangkat,
                dan aktivitas Anda di aplikasi ini. Data ini tidak digunakan
                untuk mengidentifikasi Anda secara pribadi.
              </div>
            </li>
            <li>
              <span className="font-bold">Cara Kami Menggunakan Data:</span>
              <div className="ml-4">
                Data digunakan untuk memperbaiki layanan, menjaga keamanan, dan
                memberikan pengalaman terbaik untuk Anda.
              </div>
            </li>
            <li>
              <span className="font-bold">Berbagi Data:</span>
              <div className="ml-4">
                Kami tidak membagikan data pribadi Anda ke pihak lain, kecuali
                jika diwajibkan oleh hukum.
              </div>
            </li>
            <li>
              <span className="font-bold">Keamanan Data:</span>
              <div className="ml-4">
                Kami berusaha menjaga data Anda tetap aman dan tidak
                disalahgunakan.
              </div>
            </li>
            <li>
              <span className="font-bold">Layanan YouTube API:</span>
              <div className="ml-4">
                Aplikasi ini menggunakan layanan YouTube API. Dengan menggunakan
                aplikasi ini, Anda juga tunduk pada{" "}
                <a
                  href="https://www.youtube.com/t/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(206, 146, 38)" }}
                >
                  Ketentuan Layanan YouTube
                </a>
                .
              </div>
            </li>
            <li>
              <span className="font-bold">Kebijakan Privasi Google:</span>
              <div className="ml-4">
                Penggunaan YouTube API juga mengikuti{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(206, 146, 38)" }}
                >
                  Kebijakan Privasi Google
                </a>
                .
              </div>
            </li>
            <li>
              <span className="font-bold">Kontak:</span>
              <div className="ml-4">
                Jika ada pertanyaan soal privasi, hubungi kami di{" "}
                <a
                  href="mailto:gkicinda@yahoo.com"
                  style={{ color: "rgb(206, 146, 38)" }}
                >
                  gkicinda@yahoo.com
                </a>
                .
              </div>
            </li>
          </ul>
          <p>Terima kasih atas kepercayaan Anda!</p>
        </div>
      </section>

      <div className="text-center mt-8">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded w-full sm:w-auto"
          onClick={handleGoBack}
        >
          Kembali
        </button>
      </div>
    </motion.div>
  );
};

export default KebijakanPenggunaan;
