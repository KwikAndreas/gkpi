import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-white border-t-[8px] border-[var(--color-primary)] pt-16 pb-8">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-start">
          {/* Kolom 1: Identitas */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo_gkpi_128.svg" 
                alt="Logo GKPI" 
                width={40} 
                height={40} 
              />
              <span className="font-bold text-xl tracking-tight text-white">
                GKPI KARTINI
              </span>
            </Link>
            <p className="text-white/80 text-sm max-w-sm">
              Mewartakan kasih Kristus, melayani dengan sepenuh hati, dan membangun jemaat yang berakar di dalam Firman-Nya di tengah kota Jakarta.
            </p>
          </div>

          {/* Kolom 2: Lokasi */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-6 text-white">Hubungi Kami</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin className="text-[var(--color-primary)] shrink-0 mt-0.5" size={18} />
                <span className="max-w-[200px]">Jl. Kartini Raya No.10 11, RT.6/RW.5, Pasar Baru, Sawah Besar, Jakarta Pusat 10710</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="text-[var(--color-primary)] shrink-0" size={18} />
                <span>(021) 3864674</span>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Media Sosial */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h3 className="text-xl font-bold mb-2">Terhubung dengan Kami</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-[#1877F2] group"
                aria-label="Facebook"
              >
                <FaFacebook size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.instagram.com/gemagkpi/"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-[#E4405F] group"
                aria-label="Instagram"
              >
                <FaInstagram size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.youtube.com/@gkpikartini7684"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-[#FF0000] group"
                aria-label="YouTube"
              >
                <FaYoutube size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} GKPI Kartini. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
