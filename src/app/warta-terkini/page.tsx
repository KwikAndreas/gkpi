import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { FileText, Download, BookOpen, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { latestWarta, latestRenungan } from "@/data/wartaData";

export const metadata: Metadata = {
  title: "Warta Jemaat & Renungan - GKPI Kartini",
  description: "Warta mingguan terkini dan renungan firman Tuhan jemaat GKPI Kartini Jakarta Pusat.",
};

export default function WartaTerkini() {
  return (
    <div className="container py-10 sm:py-16 px-4">
      {/* Header Halaman */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text-title)] mb-4">
          Warta Jemaat & Renungan
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-[var(--color-text-body)] max-w-2xl mx-auto leading-relaxed">
          Informasi pelayanan, warta mingguan, dan siraman firman Tuhan bagi jemaat GKPI Kartini.
        </p>
        <div className="theme-divider mt-6">
          <div className="theme-divider-bar"></div>
        </div>
      </div>

      <div className="warta-grid grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* 1. Kartu Warta Jemaat */}
        <Card className="warta-card flex flex-col h-full border-t-[6px] border-t-[var(--color-primary)] border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="warta-card-header-icon w-14 h-14 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
              <FileText size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold font-heading text-[var(--color-text-title)]">
                  Warta Jemaat
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold uppercase bg-red-50 text-[var(--color-primary)] border border-red-100">
                  {latestWarta.edition}
                </span>
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-0.5">
                <Calendar size={13} />
                <span>{latestWarta.date}</span>
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div>
              <h3 className="font-heading font-bold text-xl text-[var(--color-text-title)] leading-snug">
                {latestWarta.theme}
              </h3>
              <p className="text-xs font-semibold text-[var(--color-primary)] mt-1">
                {latestWarta.scripture} &bull; Khotbah: {latestWarta.speakerKU1_2}
              </p>
            </div>

            <p className="text-[var(--color-text-body)] text-sm sm:text-base leading-relaxed line-clamp-3">
              {latestWarta.summary}
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href={latestWarta.pdfUrl}
              download="Warta-Jemaat-GKPI-6-September-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] font-bold text-sm transition-all shadow-sm active:scale-95 flex-1"
            >
              <Download size={18} />
              <span>Unduh PDF</span>
            </a>

            <Link
              href="/warta-terkini/baca"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl border-2 border-[var(--color-primary)]/20 hover:border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] font-bold text-sm transition-all flex-1"
            >
              <FileText size={18} />
              <span>Baca Online</span>
            </Link>
          </div>
        </Card>

        {/* 2. Kartu Renungan */}
        <Card className="renungan-card flex flex-col h-full border-t-[6px] border-t-gray-800 border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="renungan-card-header-icon w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 shrink-0">
              <BookOpen size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold font-heading text-[var(--color-text-title)]">
                  Renungan Mingguan
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold uppercase bg-amber-50 text-amber-700 border border-amber-200">
                  {latestRenungan.scriptureRef}
                </span>
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-0.5">
                <Calendar size={13} />
                <span>{latestRenungan.dateFormatted}</span>
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <h3 className="font-heading font-bold text-xl text-[var(--color-text-title)] leading-snug">
              {latestRenungan.title}
            </h3>
            <p className="text-xs font-semibold text-[var(--color-primary)]">
              Oleh: {latestRenungan.author} ({latestRenungan.authorRole})
            </p>
            <p className="warta-quote-text text-[var(--color-text-body)] italic text-sm sm:text-base leading-relaxed line-clamp-3 pt-1">
              &quot;{latestRenungan.scriptureText}&quot;
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 mt-6">
            <Link
              href="/warta-terkini/renungan"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-sm transition-all shadow-sm active:scale-95"
            >
              <BookOpen size={18} />
              <span>Baca Selengkapnya</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
