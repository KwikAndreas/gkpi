import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExclamationCircle, FaHome } from "react-icons/fa";

const BadRequest: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100"
    >
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <FaExclamationCircle className="text-8xl text-orange-500 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-orange-600 mb-2">400</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Permintaan Tidak Valid
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-xl text-gray-600 mb-4 max-w-md mx-auto">
            Permintaan yang Anda kirim tidak dapat dipahami oleh server.
          </p>
          <p className="text-gray-500">
            Silakan periksa kembali URL atau data yang Anda masukkan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: "rgb(206, 146, 38)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "rgba(206, 146, 38, 0.8)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "rgb(206, 146, 38)")
            }
          >
            <FaHome className="mr-2" />
            Kembali ke Beranda
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BadRequest;
