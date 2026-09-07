import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2a2a2a] text-white pt-16 pb-8 mt-12 border-t-[8px] border-[#ce9226]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/gkicinda_white.png" alt="GKI CINDA Logo" className="w-12 h-12" />
              <span className="text-xl font-bold tracking-tight">GKI Cipinang Indah</span>
            </div>
            <p className="text-white/80 leading-relaxed max-w-xs text-sm">
              Ruang bagi kasih Kristus yang mempersatukan kita untuk beriman dan bertumbuh dalam persekutuan, kesaksian, dan pelayanan.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-6 tracking-tight">Lokasi Kami</h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Jln. Perkutut-Kepodang No.18, Cipinang Indah, Pd. Bambu, Kec. Duren Sawit, Jakarta Timur, Jakarta 13430
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-6 tracking-tight">Media Sosial</h3>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/pages/GKI%20Cipinang%20Indah/122038508445665/#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/gkicipinangindah/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@gkicipinangindah"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8 text-center text-sm text-white/70 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} GKI Cipinang Indah. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.youtube.com/t/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Ketentuan Layanan YouTube
            </a>
            <span>|</span>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Kebijakan Privasi Google
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
