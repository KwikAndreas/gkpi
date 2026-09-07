"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Profil", path: "/profil" },
    { name: "Jadwal", path: "/jadwal" },
    { name: "Kalender", path: "/kalender" },
    { name: "Warta Jemaat", path: "/warta-terkini" },
    { name: "Galeri", path: "/galeri" },
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
          href="/"
          className="text-2xl font-semibold flex items-center group"
        >
          <Image
            src="/logo_gkpi_128.svg"
            alt="Logo GKPI"
            width={45}
            height={40}
            className="mr-3 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-[var(--color-text-title)] font-bold text-xl hidden sm:inline tracking-tight">
            GKPI KARTINI
          </span>
          <span className="text-[var(--color-text-title)] font-bold text-lg sm:hidden tracking-tight">
            GKPI
          </span>
        </Link>

        <nav className="hidden md:flex space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative px-4 py-2 font-medium text-sm lg:text-base transition-all duration-300 rounded-[var(--radius-nav-pill)] ${
                  isActive
                    ? "bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] font-semibold shadow-sm"
                    : "text-gray-600 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] border border-transparent"
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
            className="text-gray-700 hover:text-[var(--color-primary)] transition-colors focus:outline-none p-2 rounded-full hover:bg-[var(--color-primary-light)]"
            aria-label="Toggle Menu"
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
            className="md:hidden absolute top-full left-0 w-full bg-[var(--color-surface-card)] border-t border-[var(--color-border-card)] shadow-xl py-4 px-4 flex flex-col space-y-2 z-40"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={toggleMobileMenu}
                  className={`block px-6 py-3 text-lg rounded-[var(--radius-btn)] transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] font-semibold shadow-sm"
                      : "text-gray-700 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]"
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
}
