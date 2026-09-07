import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Jadwal", path: "/jadwal-kebaktian" },
    { name: "Renungan", path: "/shalom" },
    { name: "Profil", path: "/profil" },
    { name: "Artikel", path: "/artikel" },
    { name: "Info", path: "/info" },
    { name: "Kalender", path: "/kalender" },
    { name: "Download", path: "/download" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass p-4 sticky top-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-semibold flex items-center group"
        >
          <img
            src="gkicinda.png"
            alt="Logo Gereja GKI CINDA"
            className="h-10 w-10 inline-block mr-3 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-gray-900 font-bold text-xl hidden sm:inline tracking-tight">
            GKI CIPINANG INDAH
          </span>
          <span className="text-gray-900 font-bold text-lg sm:hidden tracking-tight">
            GKI CINDA
          </span>
        </Link>

        <nav className="hidden md:flex space-x-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 font-medium text-sm lg:text-base transition-colors duration-300 rounded-full ${
                  isActive
                    ? "text-primary bg-[var(--color-primary-light)] font-semibold"
                    : "text-gray-600 hover:text-primary hover:bg-[var(--color-primary-light)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-primary transition-colors focus:outline-none p-2 rounded-full hover:bg-[var(--color-primary-light)]"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 px-4 flex flex-col space-y-2 z-40"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={toggleMobileMenu}
                  className={`block px-6 py-3 text-lg rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--color-primary-light)] text-primary font-semibold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
