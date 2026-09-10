import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer-theme bg-[#1e1e1e] text-white border-t-[6px] border-[var(--color-primary)]">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left items-start">
          {/* Kolom 1: Identitas */}
          <div className="flex flex-col items-center md:items-start gap-3 sm:gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image 
                src="/logo_gkpi_128.svg" 
                alt="Logo GKPI" 
                width={40} 
                height={40} 
                className="w-10 h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-heading font-bold text-2xl tracking-tight text-white footer-brand-title">
                GKPI KARTINI
              </span>
            </Link>
            <p className="footer-desc-text text-gray-300 text-sm md:text-base leading-relaxed max-w-sm">
              Gereja Yang Berbuah Dalam Perubahan Zaman (Yohanes 15:1-8).
            </p>
          </div>

          {/* Kolom 2: Kontak & Lokasi */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h3 className="font-heading text-lg md:text-xl font-bold mb-4 sm:mb-5 text-white tracking-wide footer-section-title">
              Hubungi Kami
            </h3>
            <div className="footer-contact-list space-y-3.5 text-gray-300 text-sm md:text-base w-full max-w-sm">
              <div className="footer-contact-item flex items-start gap-3 justify-start text-left bg-white/5 md:bg-transparent p-3 md:p-0 rounded-xl md:rounded-none">
                <div className="footer-icon-box w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <p className="footer-contact-text leading-relaxed">
                  Jl. Kartini Raya No.10 11, RT.6/RW.5, Pasar Baru, Sawah Besar, Jakarta Pusat 10710
                </p>
              </div>
              <div className="footer-contact-item flex items-center gap-3 justify-start text-left bg-white/5 md:bg-transparent p-3 md:p-0 rounded-xl md:rounded-none">
                <div className="footer-icon-box w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                  <Phone size={18} />
                </div>
                <a 
                  href="tel:0213864674" 
                  className="footer-phone-link hover:text-white hover:underline transition-colors font-medium text-white/90"
                >
                  (021) 3864674
                </a>
              </div>
            </div>
          </div>

          {/* Kolom 3: Media Sosial */}
          <div className="flex flex-col items-center md:items-start gap-4 sm:gap-5">
            <h3 className="font-heading text-lg md:text-xl font-bold text-white tracking-wide footer-section-title">
              Terhubung dengan Kami
            </h3>
            <div className="flex gap-4 items-center">
              <a
                href="#"
                className="footer-social-btn w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#1877F2] hover:scale-110 shadow-sm"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/gemagkpi/"
                className="footer-social-btn w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#E4405F] hover:scale-110 shadow-sm"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@gkpikartini7684"
                className="footer-social-btn w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#FF0000] hover:scale-110 shadow-sm"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="footer-bottom-bar border-t border-white/10 bg-black/25">
        <div className="container mx-auto px-4 py-5 pb-24 md:pb-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs md:text-sm text-gray-400 text-center md:text-left">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} GKPI Kartini. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#" className="footer-legal-link hover:text-white transition-colors py-1">Kebijakan Privasi</a>
            <span className="footer-legal-dot text-gray-600 hidden sm:inline">•</span>
            <a href="#" className="footer-legal-link hover:text-white transition-colors py-1">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
