import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Video, Calendar, Phone, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Jadwal Kebaktian - GKPI Kartini",
  description: "Jadwal lengkap ibadah umum, kategorial, dan persekutuan doa di GKPI Jemaat Kartini Jakarta Pusat.",
};

interface ScheduleSession {
  day: string;
  time: string;
  format: "Onsite" | "Online";
  frequencyDesc?: string;
}

interface ScheduleItem {
  id: number;
  name: string;
  subtitle?: string;
  language?: string;
  sessions: ScheduleSession[];
}

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const schedules: ScheduleItem[] = [
  {
    id: 1,
    name: "KEBAKTIAN UMUM I",
    subtitle: "Ibadah Pagi & Perjamuan Kudus",
    language: "IND",
    sessions: [
      {
        day: "Minggu",
        time: "07.30 WIB",
        format: "Onsite",
        frequencyDesc: "Setiap Hari Minggu",
      },
    ],
  },
  {
    id: 2,
    name: "KEBAKTIAN UMUM II",
    subtitle: "Ibadah Raya Dwi Bahasa (Mandarin - Indonesia)",
    language: "MAND - IND",
    sessions: [
      {
        day: "Minggu",
        time: "09.30 WIB",
        format: "Onsite",
        frequencyDesc: "Setiap Hari Minggu",
      },
    ],
  },
  {
    id: 3,
    name: "SEKOLAH MINGGU",
    subtitle: "Ibadah Pembinaan Iman Anak (Balita - SD)",
    sessions: [
      {
        day: "Minggu",
        time: "09.30 WIB",
        format: "Onsite",
        frequencyDesc: "Setiap Hari Minggu",
      },
    ],
  },
  {
    id: 4,
    name: "KEBAKTIAN GEMA (REMAJA SMP - SMA)",
    subtitle: "Ibadah & Komunitas Generasi Remaja",
    sessions: [
      {
        day: "Minggu",
        time: "10.00 WIB",
        format: "Onsite",
        frequencyDesc: "Setiap Hari Minggu",
      },
    ],
  },
  {
    id: 5,
    name: "PERSEKUTUAN PEMUDA",
    subtitle: "Ibadah & Fellowship Pemuda Dewasa Muda",
    sessions: [
      {
        day: "Sabtu II",
        time: "17.00 WIB",
        format: "Onsite",
        frequencyDesc: "Sabtu Minggu Ke-3 Setiap Bulan",
      },
      {
        day: "Minggu IV",
        time: "11.30 WIB",
        format: "Onsite",
        frequencyDesc: "Minggu Minggu Ke-4 Setiap Bulan",
      },
    ],
  },
  {
    id: 6,
    name: "PERSEKUTUAN WANITA-USIA INDAH",
    subtitle: "Persekutuan Kaum Wanita & Lanjut Usia",
    sessions: [
      {
        day: "Rabu I-III-V",
        time: "11.00 WIB",
        format: "Onsite",
        frequencyDesc: "Rabu Minggu Ke-1, Ke-3, & Ke-5 Setiap Bulan",
      },
    ],
  },
  {
    id: 7,
    name: "PERSEKUTUAN DOA",
    subtitle: "Ibadah Doa & Penguatan Rohani Jemaat",
    sessions: [
      {
        day: "Kamis",
        time: "19.00 WIB",
        format: "Onsite",
        frequencyDesc: "Setiap Kamis Malam (Tatap Muka di Gereja)",
      },
      {
        day: "Sabtu",
        time: "07.00 WIB",
        format: "Online",
        frequencyDesc: "Setiap Sabtu Pagi (Daring / Online)",
      },
    ],
  },
  {
    id: 8,
    name: "PERSEKUTUAN PASUTRI",
    subtitle: "Pembinaan Keluarga & Pasangan Suami Istri",
    sessions: [
      {
        day: "Sabtu IV",
        time: "17.00 WIB",
        format: "Onsite",
        frequencyDesc: "Sabtu Minggu Ke-4 Setiap Bulan",
      },
    ],
  },
];

export default function JadwalKebaktian() {
  return (
    <div className="container py-12 md:py-16 px-4">
      {/* Header Halaman */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text-title)] mb-4">
          Jadwal Kebaktian
        </h1>
        <p className="text-base md:text-xl text-[var(--color-text-body)] max-w-2xl mx-auto leading-relaxed">
          Informasi lengkap hari, jam, bahasa, dan bentuk pelayanan ibadah di GKPI Jemaat Kartini.
        </p>
        <div className="theme-divider mt-6">
          <div className="theme-divider-bar"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Mobile View: Responsive Stacked Cards (Zero horizontal scroll needed!) */}
        <div className="md:hidden space-y-4">
          {schedules.map((schedule, index) => (
            <div
              key={schedule.id}
              className="schedule-mobile-card bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-card)] p-5 shadow-[var(--theme-shadow-card)] border-t-[4px] border-t-[var(--color-primary)] transition-all"
            >
              {/* Header Kartu: Index + Judul + Badges */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <span className="card-index-traditional mr-2 font-bold text-sm">
                    {ROMAN_NUMERALS[index] || index + 1}.
                  </span>
                  <span className="card-index-modern mr-2 font-mono text-xs text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[var(--color-text-title)] inline leading-snug">
                    {schedule.name}
                  </h3>
                  {schedule.subtitle && (
                    <p className="text-xs text-gray-500 mt-0.5">{schedule.subtitle}</p>
                  )}
                </div>

                {schedule.language && (
                  <span className="shrink-0 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[var(--color-primary)] border border-red-100">
                    {schedule.language}
                  </span>
                )}
              </div>

              {/* Daftar Sesi Waktu Ibadah */}
              <div className="space-y-3 pt-3 border-t border-gray-100/80">
                {schedule.sessions.map((session, sIdx) => (
                  <div
                    key={sIdx}
                    className={`flex items-start gap-3 text-[var(--color-text-body)] ${
                      sIdx > 0 ? "pt-2.5 border-t border-dashed border-gray-100" : ""
                    }`}
                  >
                    <div className="schedule-mobile-icon-box w-8 h-8 rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                      {session.format === "Online" ? <Video size={16} /> : <Clock size={16} />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-base text-[var(--color-text-title)]">
                          {session.day}, {session.time}
                        </span>
                        <span
                          className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${
                            session.format === "Online"
                              ? "bg-sky-50 text-sky-700 border-sky-200"
                              : "bg-emerald-50 text-emerald-700 border-emerald-200"
                          }`}
                        >
                          {session.format}
                        </span>
                      </div>
                      {session.frequencyDesc && (
                        <span className="text-xs text-gray-500 block mt-0.5">
                          {session.frequencyDesc}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop / Tablet View: Full Data Table */}
        <div className="hidden md:block schedule-table-wrap overflow-x-auto rounded-[var(--radius-card)] shadow-[var(--theme-shadow-card)] border border-[var(--color-border-card)]">
          <table className="schedule-table w-full min-w-[640px] text-left border-collapse bg-[var(--color-surface-card)]">
            <thead>
              <tr className="bg-[var(--color-primary)] text-white">
                <th className="p-5 font-bold text-base lg:text-lg whitespace-nowrap w-2/5">
                  Kebaktian & Pelayanan
                </th>
                <th className="p-5 font-bold text-base lg:text-lg whitespace-nowrap w-2/5">
                  Hari & Waktu Pelaksanaan
                </th>
                <th className="p-5 font-bold text-base lg:text-lg whitespace-nowrap w-1/5 text-center">
                  Metode
                </th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, index) => (
                <tr
                  key={schedule.id}
                  className={
                    index !== schedules.length - 1
                      ? "border-b border-gray-100/60 hover:bg-[var(--color-primary-light)] transition-colors"
                      : "hover:bg-[var(--color-primary-light)] transition-colors"
                  }
                >
                  {/* Kolom 1: Nama Kebaktian + Bahasa Badge + Subtitle */}
                  <td className="p-5 align-middle">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-base lg:text-lg text-[var(--color-text-title)]">
                        {schedule.name}
                      </span>
                      {schedule.language && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[var(--color-primary)] border border-red-100">
                          {schedule.language}
                        </span>
                      )}
                    </div>
                    {schedule.subtitle && (
                      <p className="text-xs text-gray-500 mt-1">{schedule.subtitle}</p>
                    )}
                  </td>

                  {/* Kolom 2: Hari & Waktu (Mendukung multi-sesi seperti Persekutuan Doa) */}
                  <td className="p-5 align-middle text-[var(--color-text-body)]">
                    <div className="space-y-2">
                      {schedule.sessions.map((session, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-sm lg:text-base">
                          <Clock size={16} className="text-[var(--color-primary)] shrink-0" />
                          <span className="font-semibold text-[var(--color-text-title)]">
                            {session.day}
                          </span>
                          <span className="text-gray-400">&bull;</span>
                          <span className="font-bold text-[var(--color-primary)]">
                            {session.time}
                          </span>
                          {session.frequencyDesc && (
                            <span className="text-xs text-gray-500 hidden xl:inline">
                              ({session.frequencyDesc})
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </td>

                  {/* Kolom 3: Format / Metode Ibadah (Onsite / Online) */}
                  <td className="p-5 align-middle text-center">
                    <div className="flex flex-col items-center gap-1.5 justify-center">
                      {schedule.sessions.map((session, sIdx) => (
                        <span
                          key={sIdx}
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${
                            session.format === "Online"
                              ? "bg-sky-50 text-sky-700 border-sky-200"
                              : "bg-emerald-50 text-emerald-700 border-emerald-200"
                          }`}
                        >
                          {session.format === "Online" ? (
                            <Video size={12} />
                          ) : (
                            <MapPin size={12} />
                          )}
                          <span>{session.format}</span>
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Informasi Sekretariat & Pastoral Tambahan dari Jadwal Dokumen */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-heading font-bold text-lg md:text-xl text-[var(--color-text-title)]">
              GKPI Jemaat Kartini
            </h4>
            <p className="text-sm text-gray-600">
              Jl. Kartini Raya No. 10 - 11, Jakarta Pusat 10710 &bull; Telp: (021) 3864674, 3457635 &bull; Fax: (021) 3441749
            </p>
            <p className="text-xs text-gray-500">
              Email: <a href="mailto:sekretariatgkpikartini@gmail.com" className="text-[var(--color-primary)] hover:underline font-semibold">sekretariatgkpikartini@gmail.com</a>
            </p>
          </div>

          <Link
            href="/profil"
            className="shrink-0 inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] font-semibold text-sm transition-all shadow-xs active:scale-95"
          >
            <Phone size={16} />
            <span>Kontak Hamba Tuhan</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
