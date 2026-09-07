import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Gereja - GKPI Kartini",
  description: "Profil lengkap GKPI Kartini. Sejarah gereja, visi misi, dan informasi pendeta yang melayani.",
};

interface Pendeta {
  id: number;
  name: string;
  email: string;
  foto: string;
  counselingSchedule: string;
}

export default function ProfilGereja() {
  const pendeta: Pendeta[] = [
    {
      id: 1,
      name: "Pdt. GKPI Kartini, S.Th.",
      email: "pendeta@gkpikartini.org",
      foto: "https://images.unsplash.com/photo-1544640808-32cb4fbad06e?q=80&w=800&auto=format&fit=crop",
      counselingSchedule: "Selasa sampai Jumat, 10.00 - 15.00 WIB (kecuali dengan perjanjian)",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:p-8">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text-title)] tracking-tight">
          Profil GKPI Kartini
        </h1>
        <div className="theme-divider">
          <div className="theme-divider-bar"></div>
        </div>
      </div>

      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl font-bold mb-4 text-[var(--color-text-title)] inline-block border-b-2 border-[var(--color-primary)] pb-2">
            Sejarah Singkat
          </h2>
        </div>
        <div className="profile-history-card bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 relative overflow-hidden group hover:shadow-md transition-all duration-300">
          <div className="profile-history-accent absolute top-0 left-0 w-2 h-full bg-[var(--color-primary)]"></div>
          <div className="profile-history-glow absolute -right-16 -top-16 w-64 h-64 bg-red-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
          <blockquote className="relative z-10 italic text-[var(--color-text-body)] text-lg md:text-xl leading-relaxed mb-6">
            <p className="mb-4">
              <span className="font-bold text-[var(--color-text-title)]">Pelayanan Jemaat</span> di GKPI Kartini telah dirintis sejak lama
              melalui persekutuan keluarga-keluarga di kawasan sekitar, melalui
              kegiatan-kegiatan <span className="font-bold text-[var(--color-text-title)]">Perayaan Natal</span>,{" "}
              <span className="font-bold text-[var(--color-text-title)]">Sekolah Minggu</span>,
              <span className="font-bold text-[var(--color-text-title)]">Paduan Suara</span>, dan{" "}
              <span className="font-bold text-[var(--color-text-title)]">Pemahaman Alkitab</span>.
            </p>
            <p className="mb-4">
              Penyertaan dan pemeliharaan Tuhan tak pernah berhenti. Gereja ini terus bertumbuh dan 
              menjadi berkat bagi masyarakat sekitar serta mewartakan kasih Kristus dengan setia 
              sampai hari ini.
            </p>
          </blockquote>
          <div className="text-right text-[var(--color-primary)] font-semibold mt-2 relative z-10">
            <span>&mdash; Disarikan dari dokumen sejarah GKPI Kartini</span>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl font-bold mb-4 text-[var(--color-text-title)] inline-block border-b-2 border-[var(--color-primary)] pb-2">
            Visi & Misi
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="profile-tablet-card bg-white rounded-2xl shadow-sm border border-gray-200 p-8 xl:p-10 border-t-[6px] border-t-[var(--color-primary)] flex flex-col items-center text-center hover:shadow-md hover:border-gray-300 transition-all duration-300">
            <div className="profile-tablet-badge w-16 h-16 bg-red-50 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-heading font-bold">V</span>
            </div>
            <h3 className="font-heading text-3xl font-bold mb-4 text-[var(--color-text-title)]">
              Visi
            </h3>
            <p className="text-[var(--color-text-body)] leading-relaxed text-lg font-medium">
              Menjadi murid Kristus yang menyatakan kasih Allah kepada sesama
              dalam ikatan <span className="font-bold text-[var(--color-text-title)]">keluarga Allah</span>{" "}
              yang saling mengasihi dan membangun.
            </p>
          </div>
          
          <div className="profile-tablet-card bg-white rounded-2xl shadow-sm border border-gray-200 p-8 xl:p-10 border-t-[6px] border-t-[var(--color-primary)] flex flex-col hover:shadow-md hover:border-gray-300 transition-all duration-300">
            <div className="flex flex-col items-center mb-6">
              <div className="profile-tablet-badge w-16 h-16 bg-red-50 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-heading font-bold">M</span>
              </div>
              <h3 className="font-heading text-3xl font-bold text-[var(--color-text-title)]">
                Misi
              </h3>
            </div>
            <ul className="list-disc text-[var(--color-text-body)] leading-relaxed text-lg space-y-3 pl-6 marker:text-[var(--color-primary)]">
              <li>Proses pemuridan melalui program pembinaan yang berkesinambungan, sistematis dan efektif.</li>
              <li>Menjadikan <span className="font-bold text-[var(--color-text-title)]">Khotbah</span> sebagai sarana yang menggugah dan mengubah hidup.</li>
              <li>Meningkatkan ibadah yang kontemplatif namun semarak dan kreatif.</li>
              <li>Menjadi Gereja yang anggotanya saling mengenal, saling peduli, dan saling berbagi.</li>
              <li>Mewujudkan aksi kasih nyata baik kepada jemaat maupun masyarakat sekitar.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl font-bold mb-4 text-[var(--color-text-title)] inline-block border-b-2 border-[var(--color-primary)] pb-2">
            Tim Pelayanan & Sekretariat
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="profile-tablet-card bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="p-6 bg-gray-50/80 border-b border-gray-100 flex items-center justify-center">
              <h3 className="font-heading text-2xl font-bold text-[var(--color-text-title)]">
                Pendeta Jemaat
              </h3>
            </div>
            <div className="p-8">
              {pendeta.map((pastor) => (
                <div key={pastor.id} className="flex flex-col items-center">
                  <div className="mb-6 relative">
                    <div className="pastor-glow absolute inset-0 bg-[var(--color-primary)] rounded-full blur-md opacity-20 transform scale-105"></div>
                    <div className="pastor-photo-frame">
                      <img
                        src={pastor.foto}
                        alt={`Foto ${pastor.name}`}
                        className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-md z-10"
                      />
                    </div>
                  </div>
                  <div className="text-center space-y-4 w-full">
                    <h4 className="font-heading text-2xl font-bold text-[var(--color-primary)]">
                      {pastor.name}
                    </h4>
                    {pastor.email && (
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center justify-center gap-2">
                        <span className="text-xl">✉</span>
                        <span className="text-[var(--color-text-body)] font-medium">{pastor.email}</span>
                      </div>
                    )}
                    {pastor.counselingSchedule && (
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <p className="font-bold text-[var(--color-text-title)] mb-2">Jadwal Konseling:</p>
                        <p className="text-[var(--color-text-body)] text-base leading-relaxed">{pastor.counselingSchedule}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-tablet-card bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="p-6 bg-gray-50/80 border-b border-gray-100 flex items-center justify-center">
              <h3 className="font-heading text-2xl font-bold text-[var(--color-text-title)]">
                Tata Usaha & Sekretariat
              </h3>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200 text-[var(--color-primary)] font-heading">
                  Jam Operasional
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-[var(--color-text-body)]">Senin</span>
                    <span className="text-red-600 font-bold">Libur</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-[var(--color-text-body)]">Selasa - Jumat</span>
                    <span className="text-gray-600">08.30 - 17.00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-[var(--color-text-body)]">Sabtu</span>
                    <span className="text-gray-600">08.30 - 12.30 WIB</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-[var(--color-text-body)]">Minggu</span>
                    <span className="text-gray-600">06.00 - 10.00 WIB</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200 text-[var(--color-primary)] font-heading">
                  Hubungi Kami
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                      <span className="text-sm font-medium">☎</span>
                    </div>
                    <div>
                      <p className="text-[var(--color-text-title)] font-medium">Telepon</p>
                      <p className="text-gray-600 text-sm">021.3864674</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                      <span className="text-sm font-medium">✉</span>
                    </div>
                    <div>
                      <p className="text-[var(--color-text-title)] font-medium">Email</p>
                      <p className="text-gray-600 text-sm">sekretariat@gkpikartini.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
