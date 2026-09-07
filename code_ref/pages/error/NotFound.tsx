import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 p-8 text-center"
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
        className="text-8xl font-extrabold mb-4"
        style={{ color: "rgb(206, 146, 38)" }}
      >
        404
      </motion.h1>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
      >
        Halaman Tidak Ditemukan
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg text-gray-600 mb-8 max-w-lg"
      >
        Maaf, halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau
        untuk sementara tidak tersedia.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link
          to="/"
          className="inline-block text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg shadow-md hover:shadow-lg"
          style={{ backgroundColor: "rgb(206, 146, 38)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(206, 146, 38, 0.8)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "rgb(206, 146, 38)")
          }
        >
          Kembali ke Beranda
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
