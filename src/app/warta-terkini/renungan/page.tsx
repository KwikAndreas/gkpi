import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, User, Share2, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { latestRenungan } from "@/data/wartaData";

export const metadata: Metadata = {
  title: `${latestRenungan.title} - Renungan GKPI Kartini`,
  description: `Renungan firman Tuhan dari ${latestRenungan.scriptureRef} oleh ${latestRenungan.author}.`,
};

export default function RenunganDetail() {
  const shareText = encodeURIComponent(
    `*${latestRenungan.title}*\n${latestRenungan.scriptureRef}\nOleh: ${latestRenungan.author}\n\nBaca renungan selengkapnya di web GKPI Kartini: https://gkpikartini.id/warta-terkini/renungan`
  );

  return (
    <div className="container py-12 md:py-16 px-4">
      {/* Tombol Navigasi Kembali */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link
          href="/warta-terkini"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Warta Jemaat</span>
        </Link>
      </div>

      {/* Kontainer Artikel Utama */}
      <article className="max-w-4xl mx-auto bg-white rounded-2xl md:rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10 md:p-14">
        {/* Meta Header */}
        <div className="border-b border-gray-100 pb-8 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[var(--color-primary)] border border-red-100">
              Renungan Mingguan
            </span>
            <span className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
              <Calendar size={14} />
              {latestRenungan.dateFormatted}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-title)] tracking-tight leading-tight mb-6">
            {latestRenungan.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-10 h-10 rounded-full bg-red-50 text-[var(--color-primary)] border border-red-200 flex items-center justify-center font-bold font-heading shrink-0">
              AT
            </div>
            <div>
              <p className="font-bold text-[var(--color-text-title)] text-base">
                {latestRenungan.author}
              </p>
              <p className="text-xs text-gray-500">{latestRenungan.authorRole}</p>
            </div>
          </div>
        </div>

        {/* Nats Alkitab - Callout Box Beraksen */}
        <div className="bg-red-50/70 border-l-4 border-[var(--color-primary)] rounded-r-2xl p-6 md:p-8 mb-10 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-3">
            <BookOpen size={16} />
            <span>Nats Bacaan Alkitab: {latestRenungan.scriptureRef}</span>
          </div>
          <blockquote className="text-lg md:text-xl font-serif italic text-gray-800 leading-relaxed">
            {latestRenungan.scriptureText}
          </blockquote>
        </div>

        {/* Isi Renungan - Tipografi Ramah Lansia (text-lg md:text-xl leading-relaxed) */}
        <div className="space-y-6 text-gray-800 text-lg md:text-xl leading-relaxed">
          {latestRenungan.content.map((paragraph, idx) => (
            <p key={idx} className="font-normal text-justify">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Kotak Refleksi & Penerapan */}
        <div className="mt-10 p-6 md:p-8 bg-amber-50/80 rounded-2xl border border-amber-200/80">
          <div className="flex items-center gap-2 text-amber-900 font-bold font-heading text-lg mb-2">
            <Sparkles size={18} className="text-amber-600 shrink-0" />
            <span>Refleksi Pribadi</span>
          </div>
          <p className="text-base md:text-lg text-amber-950 leading-relaxed font-medium italic">
            &ldquo;{latestRenungan.reflectionQuestion}&rdquo;
          </p>
        </div>

        {/* Footer Artikel & Tombol Share */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/warta-terkini"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold text-sm transition-all"
          >
            <ArrowLeft size={16} />
            <span>Kembali ke Warta</span>
          </Link>

          <a
            href={`https://wa.me/?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 font-semibold text-sm transition-all shadow-xs"
          >
            <FaWhatsapp size={18} />
            <span>Bagikan ke WhatsApp</span>
          </a>
        </div>
      </article>
    </div>
  );
}
