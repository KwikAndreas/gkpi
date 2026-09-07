import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLock, FaHome } from "react-icons/fa";

const Unauthorized: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-100"
    >
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <FaLock className="text-8xl text-yellow-500 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-yellow-600 mb-2">401</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Tidak Terotorisasi
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-xl text-gray-600 mb-4 max-w-md mx-auto">
            Anda harus masuk terlebih dahulu untuk mengakses halaman ini.
          </p>
          <p className="text-gray-500">Silakan login dengan akun yang valid.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-4"
        >
          <div>
            <Link
              to="/login"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl mr-4"
            >
              <FaLock className="mr-2" />
              Login
            </Link>
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
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Unauthorized;
