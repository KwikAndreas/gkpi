import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  FileText, 
  Calendar, 
  Clock, 
  MapPin, 
  Video, 
  CreditCard, 
  Users, 
  ExternalLink,
  BookOpen,
  Bell
} from "lucide-react";
import { latestWarta } from "@/data/wartaData";

export const metadata: Metadata = {
  title: `Baca Online Warta Jemaat ${latestWarta.edition} - GKPI Kartini`,
  description: `Warta Jemaat resmi GKPI Kartini edisi ${latestWarta.date} dengan tema ${latestWarta.theme}.`,
};

export default function WartaBacaOnline() {
  return (
    <div className="container py-12 md:py-16 px-4">
      {/* Tombol Kembali */}
      <div className="max-w-5xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/warta-terkini"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Ringkasan Warta</span>
        </Link>

        <a
          href={latestWarta.pdfUrl}
          download="Warta-Jemaat-GKPI-6-September-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] font-semibold text-xs transition-all shadow-xs"
        >
          <Download size={15} />
          <span>Unduh Format PDF Asli (18 Hal)</span>
        </a>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Cover / Header Banner Warta */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-3 h-full bg-[var(--color-primary)]"></div>
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[var(--color-primary)] border border-red-100">
              Edisi {latestWarta.edition}
            </span>
            <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
              <Calendar size={13} />
              {latestWarta.date}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-title)] tracking-tight mb-2">
            {latestWarta.theme}
          </h1>
          <p className="font-heading text-xl text-gray-500 mb-6 font-medium">
            {latestWarta.themeChinese} &bull; <span className="text-[var(--color-primary)] font-bold">{latestWarta.scripture}</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 text-sm">
            <div>
              <span className="text-xs text-gray-400 block font-semibold uppercase tracking-wider">Pembicara KU 1 & 2</span>
              <p className="font-bold text-gray-800 text-base">{latestWarta.speakerKU1_2} ({latestWarta.speakerKU1_2Chinese})</p>
            </div>
            <div>
              <span className="text-xs text-gray-400 block font-semibold uppercase tracking-wider">Penerjemah KU 2 (Mandarin)</span>
              <p className="font-bold text-gray-800 text-base">{latestWarta.translatorKU2} ({latestWarta.translatorKU2Chinese})</p>
            </div>
          </div>
        </div>

        {/* Seksi 1: Warta & Pengumuman Jemaat */}
        <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--color-primary)] flex items-center justify-center shrink-0">
              <Bell size={20} />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-[var(--color-text-title)]">
                Warta & Pengumuman Jemaat
              </h2>
              <p className="text-xs text-gray-500">Informasi pelayanan dan kegiatan persekutuan minggu ini</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestWarta.announcements.map((group, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 space-y-3">
                <h3 className="font-heading font-bold text-lg text-[var(--color-text-title)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
                  <span>{group.title}</span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 leading-relaxed list-disc pl-5 marker:text-[var(--color-primary)]">
                  {group.items.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Seksi 2: Liturgi Ibadah KU 1 & KU 2 */}
        <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--color-primary)] flex items-center justify-center shrink-0">
              <BookOpen size={20} />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-[var(--color-text-title)]">
                Tata Ibadah & Liturgi KU 1 & 2
              </h2>
              <p className="text-xs text-gray-500">Susunan urutan kebaktian dan nyanyian jemaat</p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                  <th className="p-3.5 font-bold w-12 text-center">No</th>
                  <th className="p-3.5 font-bold">Bagian Liturgi</th>
                  <th className="p-3.5 font-bold">Unsur Tata Ibadah</th>
                  <th className="p-3.5 font-bold text-center">Sikap</th>
                  <th className="p-3.5 font-bold">Keterangan / Nats / Lagu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {latestWarta.liturgy.map((item) => (
                  <tr key={item.no} className="hover:bg-red-50/40 transition-colors">
                    <td className="p-3.5 text-center font-bold text-gray-500">{item.no}</td>
                    <td className="p-3.5 font-semibold text-gray-600">{item.part}</td>
                    <td className="p-3.5 font-bold text-gray-800">{item.element}</td>
                    <td className="p-3.5 text-center">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">
                        {item.stance}
                      </span>
                    </td>
                    <td className="p-3.5 text-gray-700">{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Seksi 3: Susunan Penatalayan Minggu Depan */}
        <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--color-primary)] flex items-center justify-center shrink-0">
              <Users size={20} />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-[var(--color-text-title)]">
                Jadwal Penatalayan Minggu Depan ({latestWarta.nextWeek.date})
              </h2>
              <p className="text-xs text-gray-500">
                Tema: <span className="font-bold text-gray-800">&ldquo;{latestWarta.nextWeek.theme}&rdquo;</span> ({latestWarta.nextWeek.scripture})
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3.5 font-bold w-1/3">Tugas Penatalayan</th>
                  <th className="p-3.5 font-bold w-1/3">Kebaktian Umum 1 (07.30 WIB)</th>
                  <th className="p-3.5 font-bold w-1/3">Kebaktian Umum 2 (09.30 WIB)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {latestWarta.nextWeek.penatalayan.map((row, idx) => (
                  <tr key={idx} className="hover:bg-red-50/40 transition-colors">
                    <td className="p-3.5 font-bold text-gray-800">{row.role}</td>
                    <td className="p-3.5 text-gray-700 font-medium">{row.ku1}</td>
                    <td className="p-3.5 text-gray-700 font-medium">{row.ku2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Seksi 4: Persekutuan Doa & Rekening Persembahan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Persekutuan Doa */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <h3 className="font-heading font-bold text-xl text-[var(--color-text-title)]">
                  Persekutuan Doa Jemaat
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                {latestWarta.prayerMeetings.map((pm, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-gray-800">{pm.day}, {pm.time}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold uppercase ${
                        pm.type === "Online" ? "bg-sky-50 text-sky-700 border border-sky-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}>
                        {pm.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{pm.locationOrLink}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rekening Persembahan */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <CreditCard size={18} />
                </div>
                <h3 className="font-heading font-bold text-xl text-[var(--color-text-title)]">
                  Rekening Persembahan
                </h3>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-red-50 to-amber-50 border border-red-100 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Bank Transfer & QRIS</span>
                <p className="text-2xl font-bold font-mono text-[var(--color-primary)] tracking-wide">
                  {latestWarta.persembahan.accountNumber}
                </p>
                <p className="text-sm font-bold text-gray-800">{latestWarta.persembahan.bank}</p>
                <p className="text-xs text-gray-600">a/n {latestWarta.persembahan.accountName}</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4 italic text-center">
              Persembahan dapat ditransfer langsung atau dipindai melalui QRIS pada warta fisik/PDF.
            </p>
          </div>
        </div>

        {/* Seksi 5: Viewer Dokumen PDF Lengkap */}
        <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
            <div>
              <h2 className="font-heading text-2xl font-bold text-[var(--color-text-title)]">
                Dokumen PDF Warta Jemaat (Lengkap)
              </h2>
              <p className="text-xs text-gray-500">Tampilan lengkap 18 halaman warta fisik</p>
            </div>

            <a
              href={latestWarta.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs transition-all border border-gray-200"
            >
              <ExternalLink size={15} />
              <span>Buka di Tab Baru</span>
            </a>
          </div>

          <div className="w-full h-[650px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
            <iframe
              src={`${latestWarta.pdfUrl}#toolbar=1&navpanes=0`}
              className="w-full h-full"
              title="Warta Jemaat GKPI Kartini PDF Viewer"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
