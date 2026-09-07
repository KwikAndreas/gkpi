import React from "react";
import { Clock, MapPin, Video } from "lucide-react";

const schedules = [
  { id: 1, name: "Ibadah Umum I (Pagi)", time: "07:30 WIB", type: "On-Site & Live Streaming", location: "Gedung Gereja Utama" },
  { id: 2, name: "Ibadah Umum II (Siang)", time: "10:00 WIB", type: "On-Site", location: "Gedung Gereja Utama" },
  { id: 3, name: "Sekolah Minggu", time: "07:30 & 10:00 WIB", type: "On-Site", location: "Gedung Sekolah Minggu" },
  { id: 4, name: "Ibadah Pemuda & Remaja", time: "18:00 WIB", type: "On-Site", location: "Gedung Gereja Utama" },
  { id: 5, name: "Ibadah Tengah Minggu", time: "Rabu, 19:30 WIB", type: "On-Site & Zoom", location: "Ruang Serbaguna" },
];

export default function JadwalKebaktian() {
  return (
    <div className="container py-16">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text-title)] mb-4">
          Jadwal Kebaktian
        </h1>
        <p className="text-lg md:text-2xl text-[var(--color-text-body)] max-w-2xl mx-auto leading-relaxed">
          Informasi jam dan jenis pelayanan ibadah di GKPI Kartini.
        </p>
        <div className="theme-divider mt-6">
          <div className="theme-divider-bar"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="schedule-table-wrap overflow-x-auto rounded-[var(--radius-card)] shadow-[var(--theme-shadow-card)] border border-[var(--color-border-card)]">
          <table className="schedule-table w-full text-left border-collapse bg-[var(--color-surface-card)]">
            <thead>
              <tr className="bg-[var(--color-primary)] text-white">
                <th className="p-5 font-bold text-lg whitespace-nowrap">Judul Kebaktian</th>
                <th className="p-5 font-bold text-lg whitespace-nowrap">Waktu</th>
                <th className="p-5 font-bold text-lg whitespace-nowrap">Jenis / Platform</th>
                <th className="p-5 font-bold text-lg whitespace-nowrap">Lokasi</th>
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
                  <td className="p-5 font-semibold text-[var(--color-text-title)]">
                    {schedule.name}
                  </td>
                  <td className="p-5 text-[var(--color-text-body)]">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-[var(--color-primary)]" />
                      <span>{schedule.time}</span>
                    </div>
                  </td>
                  <td className="p-5 text-[var(--color-text-body)]">
                    <div className="flex items-center gap-2">
                      <Video size={16} className="text-[var(--color-primary)]" />
                      <span>{schedule.type}</span>
                    </div>
                  </td>
                  <td className="p-5 text-[var(--color-text-body)]">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[var(--color-primary)]" />
                      <span>{schedule.location}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
