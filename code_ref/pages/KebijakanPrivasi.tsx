import React from "react";
import { motion } from "framer-motion";

const KebijakanPrivasi: React.FC = () => {
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
        Kebijakan Privasi
      </h1>
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed sm:prose-base md:prose-lg">
        <p>
          Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
          menggunakan, dan melindungi informasi pribadi Anda saat Anda
          menggunakan aplikasi kami.
        </p>
        <ol>
          <li>
            <strong>Informasi yang Kami Kumpulkan</strong>: Kami dapat
            mengumpulkan informasi tertentu secara otomatis, seperti alamat IP
            Anda, jenis perangkat, dan data penggunaan aplikasi.
          </li>
          <li>
            <strong>Penggunaan Informasi</strong>: Informasi yang kami kumpulkan
            digunakan untuk menyediakan, memelihara, dan meningkatkan aplikasi
            kami, serta untuk berkomunikasi dengan Anda.
          </li>
          <li>
            <strong>Berbagi Informasi</strong>: Kami tidak akan membagikan
            informasi pribadi Anda dengan pihak ketiga kecuali jika diwajibkan
            oleh hukum atau dengan izin Anda.
          </li>
          <li>
            <strong>Keamanan Data</strong>: Kami mengambil langkah-langkah yang
            wajar untuk melindungi informasi pribadi Anda dari akses yang tidak
            sah atau pengungkapan.
          </li>
          <li>
            <strong>Layanan YouTube API</strong>: Aplikasi ini menggunakan
            Layanan YouTube API. Dengan menggunakan aplikasi ini, Anda setuju
            untuk terikat oleh{" "}
            <a
              href="https://www.youtube.com/t/terms"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(206, 146, 38)" }}
            >
              Ketentuan Layanan YouTube
            </a>
            .
          </li>
          <li>
            <strong>Kebijakan Privasi Google</strong>: Penggunaan Anda atas
            Layanan YouTube API juga tunduk pada{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(206, 146, 38)" }}
            >
              Kebijakan Privasi Google
            </a>
            .
          </li>
          <li>
            <strong>Kontak</strong>: Jika Anda memiliki pertanyaan atau
            kekhawatiran tentang Kebijakan Privasi ini, silakan hubungi kami di{" "}
            <a href="mailto:gkicinda@yahoo.com">gkicinda@yahoo.com</a>.
          </li>
        </ol>
        <p>Terima kasih telah menggunakan website kami!</p>
      </div>
    </motion.div>
  );
};

export default KebijakanPrivasi;
