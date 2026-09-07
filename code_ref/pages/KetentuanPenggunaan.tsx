import React from "react";
import { motion } from "framer-motion";

const KetentuanPenggunaan: React.FC = () => {
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
        Ketentuan Penggunaan Klien API YouTube
      </h1>
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed sm:prose-base md:prose-lg">
        <p>
          Selamat datang di website kami! Dengan menggunakan aplikasi ini, Anda
          setuju untuk terikat oleh ketentuan-ketentuan berikut:
        </p>
        <ol>
          <li>
            <strong>Penerimaan Ketentuan</strong>: Dengan mengakses atau
            menggunakan aplikasi ini, Anda setuju untuk terikat oleh Ketentuan
            Penggunaan ini dan{" "}
            <a
              href="https://www.youtube.com/t/terms"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(206, 146, 38)" }}
            >
              Ketentuan Layanan YouTube
            </a>
            . Jika Anda tidak setuju dengan ketentuan ini, mohon untuk tidak
            menggunakan aplikasi ini.
          </li>
          <li>
            <strong>Penggunaan yang Diizinkan</strong>: Anda setuju untuk
            menggunakan API YouTube hanya untuk tujuan yang diizinkan dan sesuai
            dengan semua hukum, peraturan, dan praktik atau pedoman yang berlaku
            secara luas.
          </li>
          <li>
            <strong>Privasi</strong>: Penggunaan Anda atas aplikasi ini juga
            tunduk pada{" "}
            <a href="/kebijakan-privasi" style={{ color: "rgb(206, 146, 38)" }}>
              Kebijakan Privasi
            </a>{" "}
            kami, yang menjelaskan bagaimana kami mengumpulkan, menggunakan, dan
            mengungkapkan informasi Anda.
          </li>
          <li>
            <strong>Perubahan Ketentuan</strong>: Kami berhak untuk mengubah
            atau memperbarui Ketentuan Penggunaan ini dari waktu ke waktu tanpa
            pemberitahuan sebelumnya. Perubahan akan berlaku segera setelah
            diposting di aplikasi ini.
          </li>
          <li>
            <strong>Kontak</strong>: Jika Anda memiliki pertanyaan atau
            kekhawatiran tentang Ketentuan Penggunaan ini, silakan hubungi kami
            di <a href="mailto:gkicinda@yahoo.com">gkicinda@yahoo.com</a>.
          </li>
        </ol>
        <p>Terima kasih telah menggunakan aplikasi kami!</p>
      </div>
    </motion.div>
  );
};

export default KetentuanPenggunaan;
