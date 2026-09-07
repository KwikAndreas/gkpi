"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import {
  CalendarDays,
  BookOpen,
  Church,
  Newspaper,
  Download,
  ArrowRight
} from "lucide-react";
import { YoutubeWidget } from "@/components/YoutubeWidget";
import Image from "next/image";

type FeatureCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
};

export default function Home() {
  const isLive = false; 

  const featureCards: FeatureCard[] = [
    {
      title: "Profil Gereja",
      description: "Kenali lebih dekat sejarah, visi, dan misi Gereja",
      icon: <Church className="w-8 h-8 text-[var(--color-primary)]" />,
      link: "/profil",
    },
    {
      title: "Jadwal Kebaktian",
      description: "Informasi jadwal kebaktian reguler",
      icon: <CalendarDays className="w-8 h-8 text-[var(--color-primary)]" />,
      link: "/jadwal",
    },
    {
      title: "Kalender",
      description: "Informasi lengkap kegiatan pelayanan bulanan.",
      icon: <Newspaper className="w-8 h-8 text-[var(--color-primary)]" />,
      link: "/kalender",
    },
    {
      title: "Warta Jemaat",
      description: "Renungan harian, bacaan Alkitab, dan warta mingguan.",
      icon: <BookOpen className="w-8 h-8 text-[var(--color-primary)]" />,
      link: "/warta-terkini",
    },
    {
      title: "Galeri",
      description: "Dokumentasi kegiatan dan momen ibadah gereja.",
      icon: <Church className="w-8 h-8 text-[var(--color-primary)]" />,
      link: "/galeri",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full">
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-12 text-center relative min-h-[70vh] flex flex-col justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            filter: "blur(1px)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/50 backdrop-blur-[2px]"></div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-6xl mx-auto px-4"
        >
          <div className="flex justify-center mb-6">
            <Image 
              src="/logo_gkpi_transparent.png" 
              alt="Logo GKPI" 
              width={128} 
              height={128} 
            />
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-white tracking-tight leading-tight">
              <span className="hero-title-prefix">Selamat Datang di</span> <br />
              <span className="hero-highlight text-[var(--color-primary)] font-black drop-shadow-sm">GKPI KARTINI</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed">
              Mewartakan kasih Kristus, melayani dengan sepenuh hati, dan membangun jemaat yang berakar di dalam Firman-Nya.
          </p>
          <Link
              href="/profil"
              className="inline-flex items-center justify-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold py-3 px-6 rounded-[var(--radius-btn)] transition-all shadow-sm active:scale-95"
            >
              Kenali Lebih Jauh
              <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Pelayanan Section */}
      <section className="container mx-auto py-24 px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text-title)] tracking-tight">
            Pelayanan
          </h2>
          <div className="theme-divider">
            <div className="theme-divider-bar"></div>
          </div>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {isLive && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 card-theme bg-[var(--color-surface-card)] rounded-[var(--radius-card)] shadow-[var(--theme-shadow-card)] border border-[var(--color-border-card)] p-0 flex flex-col md:flex-row overflow-hidden group hover:shadow-[var(--theme-shadow-card-hover)] hover:border-[var(--color-border-card-hover)] transition-all duration-300">
              <div className="md:w-2/5 overflow-hidden relative">
                <img
                  src="/images/hero.jpg"
                  alt="Online Service Thumbnail"
                  className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  Live
                </div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-[var(--color-text-title)] mb-4">
                  Online Service
                </h3>
                <p className="text-[var(--color-text-body)] text-lg mb-8 leading-relaxed">
                  Ikuti kebaktian online secara langsung bersama kami melalui YouTube. Mari beribadah meskipun dari rumah.
                </p>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold py-3 px-8 rounded-[var(--radius-btn)] transition-colors duration-300"
                  >
                    <FaYoutube className="w-5 h-5 mr-2" />
                    Tonton Sekarang
                  </a>
                </div>
              </div>
            </div>
          )}

          {featureCards.map((card, idx) => {
            const roman = ["I", "II", "III", "IV", "V"][idx] || "";
            const modern = `0${idx + 1}`;
            return (
              <Link
                href={card.link}
                key={card.title}
                className={`card-theme service-card-${idx} group bg-[var(--color-surface-card)] rounded-[var(--radius-card)] p-6 border border-[var(--color-border-card)] shadow-[var(--theme-shadow-card)] hover:shadow-[var(--theme-shadow-card-hover)] hover:border-[var(--color-border-card-hover)] transition-all duration-300 flex flex-col relative`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-[var(--radius-card)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <div className="card-indexing">
                    <span className="card-index-traditional">{roman}</span>
                    <span className="card-index-modern">{modern}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--color-text-title)] group-hover:text-[var(--color-primary)] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[var(--color-text-body)] mb-6 flex-grow leading-relaxed">
                  {card.description}
                </p>
                <div className="text-[var(--color-primary)] font-semibold flex items-center mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
                  Selengkapnya <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Youtube Section */}
      <section className="py-8 rounded-[3rem] mx-4 md:mx-auto max-w-7xl">
        <div className="container mx-auto px-4 md:px-6 pt-12 pb-4">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[var(--color-text-title)] tracking-tight">
              Siaran Langsung & Video Terbaru
            </h2>
            <div className="theme-divider mb-4">
              <div className="theme-divider-bar"></div>
            </div>
            <p className="text-base md:text-lg text-[var(--color-text-body)] max-w-2xl mx-auto">
              Ikuti kebaktian atau simak video terbaru dari kanal YouTube kami.
            </p>
          </div>
          <YoutubeWidget />
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-4 text-[var(--color-text-title)] tracking-tight">
            Ayo Terhubung
          </h2>
          <div className="theme-divider mb-8">
            <div className="theme-divider-bar"></div>
          </div>
          <p className="text-lg text-[var(--color-text-body)] mb-12 max-w-xl mx-auto">
            Ikuti akun sosial media untuk update kegiatan dan inspirasi rohani setiap hari.
          </p>
          <div className="social-container flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 items-center">
            <a
              href="#"
              className="social-link-card group flex flex-col items-center"
            >
              <div className="social-icon-box w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <FaFacebook className="w-8 h-8" />
              </div>
              <span className="social-label text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Facebook</span>
            </a>
            <a
              href="#"
              className="social-link-card group flex flex-col items-center"
            >
              <div className="social-icon-box w-16 h-16 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <FaInstagram className="w-8 h-8" />
              </div>
              <span className="social-label text-sm font-semibold text-gray-700 group-hover:text-pink-600 transition-colors">Instagram</span>
            </a>
            <a
              href="#"
              className="social-link-card group flex flex-col items-center"
            >
              <div className="social-icon-box w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <FaYoutube className="w-8 h-8" />
              </div>
              <span className="social-label text-sm font-semibold text-gray-700 group-hover:text-red-600 transition-colors">YouTube</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
