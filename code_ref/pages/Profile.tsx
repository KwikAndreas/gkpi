import React from "react";
import SEOComponent from "../components/SEOComponent";

interface Pendeta {
  id: number;
  name: string;
  email: string;
  foto: string;
  fotoFallback?: string;
  counselingSchedule: string;
}

const ProfilGereja: React.FC = () => {
  const pendeta: Pendeta[] = [
    {
      id: 1,
      name: "Pdt. Prioutomo, S. Si. (Teol.)",
      email: "io.prioutomo@gmail.com",
      foto: "/images/Pdt_Prioutomo.webp",
      fotoFallback: "/images/Pdt_Prioutomo.png",
      counselingSchedule:
        "Selasa sampai Jumat, 10.00 - 15.00 WIB (kecuali dengan perjanjian)",
    },
  ];

  return (
    <>
      <SEOComponent
        defaultTitle="Profil Gereja - GKI Cipinang Indah"
        defaultDescription="Profil lengkap GKI Cipinang Indah Jakarta Timur. Sejarah gereja, visi misi, dan informasi pendeta yang melayani. Kenali lebih dekat Gereja Kristen Indonesia di Duren Sawit sejak 1983."
        defaultKeywords="Profil GKI Cipinang Indah, Sejarah Gereja, Visi Misi Gereja, Pendeta GKI, GKI Jakarta Timur, Gereja Kristen Indonesia, Pdt Prioutomo"
        defaultCanonical="https://gkicinda.id/profil"
        defaultImage="https://gkicinda.id/gkicinda.png"
        defaultType="website"
      />
      <div className="container mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            Profil GKI Cipinang Indah
          </h1>
          <div className="w-24 h-1 bg-[#ce9226] mx-auto rounded-full"></div>
        </div>

        <section className="mb-10">
          <h2
            className="text-3xl font-semibold mb-4 border-b-2 pb-2"
            style={{ color: "rgb(206, 146, 38)" }}
          >
            Sejarah Singkat
          </h2>
          <div className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 rounded-xl shadow-inner px-6 py-8 md:px-12 md:py-10 border-l-8 border-yellow-600">
            <div className="absolute left-0 top-0 w-2 h-16 bg-yellow-400 rounded-br-xl"></div>
            <blockquote className="italic text-gray-800 text-lg md:text-xl leading-relaxed mb-6">
              <p className="mb-4">
                <span className="font-bold">Pelayanan Jemaat</span> di GKI
                Cipinang Indah telah dirintis sejak tahun
                <span className="font-bold">1983</span> melalui persekutuan
                keluarga-keluarga di kawasan Cipinang Indah, melalui
                kegiatan-kegiatan{" "}
                <span className="font-bold">Perayaan Natal</span>,{" "}
                <span className="font-bold">Sekolah Minggu</span>,
                <span className="font-bold">Paduan Suara</span>, dan{" "}
                <span className="font-bold">Pemahaman Alkitab</span>.
              </p>
              <p className="mb-4">
                Pada tanggal <span className="font-bold">7 April 1986</span>,
                persekutuan ini kemudian ditetapkan oleh Majelis Jemaat GKI
                Cawang menjadi{" "}
                <span className="font-bold">
                  Pos Kebaktian, Pelayanan dan Kesaksian (Pos KPK)
                </span>{" "}
                di Cipinang Indah dengan menggunakan kediaman Keluarga
                Nismaniady Bustam di Jl. Bambu Mas Raya No. 9 Pondok Bambu
                sebagai tempat persekutuan.
              </p>
              <p className="mb-4">
                Dalam perjalanannya, tempat persekutuan Pos KPK berpindah-pindah
                dari satu tempat ke tempat lain di antaranya: ruang Kantor PT
                Inti Utama Dharma RE di kawasan Perumahan Cipinang Indah; Kantor
                Pemasaran PT Inti Utama Dharma RE di Jl. Casablanca; dan
                kediaman Keluarga I.J. Sahulata di Perumahan Cipinang Indah I.
              </p>
              <p className="mb-4">
                Pada tanggal <span className="font-bold">13 Desember 1992</span>
                , dengan dukungan yang diberikan Majelis Jemaat GKI Cawang
                melalui Persidangan Majelis Klasis Jakarta Selatan, Pos KPK ini
                ditingkatkan menjadi{" "}
                <span className="font-bold">
                  Bakal Jemaat (Bajem) GKI Cawang
                </span>{" "}
                di Cipinang Indah. BAJEM ini menggunakan ruang Aula SMPK V BPK
                Penabur, Cipinang Indah II sebagai tempat ibadah jemaat.
              </p>
              <p className="mb-4">
                Atas perkenanan Sang Kepala Gereja,{" "}
                <span className="font-bold">Yesus Kristus</span>, pada tanggal{" "}
                <span className="font-bold">20 September 1999</span>, BAJEM
                Cipinang Indah diresmikan menjadi{" "}
                <span className="font-bold">Jemaat GKI Cipinang Indah</span>,
                yang merupakan Jemaat ke-80 dalam lingkup Sinode Wilayah Jawa
                Barat (SW Jabar) dan Jemaat ke-5 dalam lingkup GKI Klasis
                Jakarta Selatan.
              </p>
              <p className="mb-4">
                Penyertaan dan pemeliharaan Tuhan tak pernah berhenti. Kerinduan
                untuk memiliki sarana gereja yang sudah dimulai sejak{" "}
                <span className="font-bold">2001</span>
                akhirnya terwujud pada tahun{" "}
                <span className="font-bold">2004</span> dengan selesainya
                pembangunan gereja GKI Cipinang Indah (gereja yang ditempati
                saat ini).
              </p>
              <p className="mb-4">
                Dari sisi penggembalaan jemaat, setelah periode pelayanan
                pendeta-pendeta konsulen dari GKI Cawang, pada tanggal{" "}
                <span className="font-bold">4 April 2005</span>,{" "}
                <span className="font-bold">Pdt. Suryadi Niman, S.Th</span>{" "}
                diteguhkan sebagai pendeta GKI dengan basis pelayanan di GKI
                Cipinang Indah yang kemudian disusul dengan penahbisan{" "}
                <span className="font-bold">
                  Pdt. Verawati Hia, S.Si. Theol
                </span>{" "}
                pada tanggal <span className="font-bold">18 Maret 2013</span>{" "}
                dan penahbisan{" "}
                <span className="font-bold">Pdt. Prioutomo, S.Si.(Teol.)</span>{" "}
                pada tanggal <span className="font-bold">21 November 2022</span>
                .
              </p>
              <p className="mb-4">
                Pada <span className="font-bold">24 September 2023</span>, Pdt.
                Suryadi Niman menyelesaikan pelayanan secara struktural dan
                memasuki masa emeritasi. Pada{" "}
                <span className="font-bold">3 Maret 2025</span>, Pdt. Verawati
                Hia memenuhi panggilan mutasi pelayanan ke Jemaat GKI Guntur,
                Bandung.
              </p>
            </blockquote>
            <div className="text-right text-yellow-700 font-semibold mt-2">
              <span>Disarikan dari dokumen sejarah GKI Cipinang Indah</span>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2
            className="text-3xl font-semibold mb-8 border-b-2 pb-2 text-center"
            style={{ color: "rgb(206, 146, 38)" }}
          >
            Visi & Misi
          </h2>
          <div className="flex flex-col gap-8 items-stretch">
            <div
              className="bg-white rounded-2xl shadow-lg p-10 border-t-4 flex flex-col items-start"
              style={{ borderTopColor: "rgb(206, 146, 38)" }}
            >
              <h3
                className="text-2xl font-extrabold mb-4 uppercase tracking-wide text-left"
                style={{ color: "rgb(206, 146, 38)" }}
              >
                Visi
              </h3>
              <p className="text-gray-800 leading-relaxed text-lg text-left font-medium">
                Menjadi murid Kristus yang menyatakan kasih Allah kepada sesama
                dalam ikatan <span className="font-bold">keluarga Allah</span>{" "}
                yang saling mengasihi dan membangun.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl shadow-lg p-10 border-t-4 flex flex-col items-start"
              style={{ borderTopColor: "rgb(206, 146, 38)" }}
            >
              <h3
                className="text-2xl font-extrabold mb-4 uppercase tracking-wide text-left"
                style={{ color: "rgb(206, 146, 38)" }}
              >
                Misi
              </h3>
              <ul className="list-disc list-inside text-gray-800 leading-relaxed text-lg space-y-2">
                <li>
                  Proses pemuridan melalui program pembinaan yang
                  berkesinambungan, sistematis dan efektif.
                </li>
                <li>
                  Menjadikan <span className="font-bold">Khotbah</span> sebagai
                  sarana yang menggugah dan mengubah hidup.
                </li>
                <li>
                  Meningkatkan ibadah yang kontemplatif namun semarak dan
                  kreatif.
                </li>
                <li>
                  Menjadi Gereja yang anggotanya saling mengenal, saling peduli,
                  dan saling berbagi.
                </li>
                <li>
                  Mewujudkan aksi kasih nyata baik kepada jemaat maupun
                  masyarakat sekitar.
                </li>
                <li>
                  Mewujudkan kerjasama yang sinergis dengan Gereja dan lembaga
                  sekitar dalam pelayanan kepada masyarakat.
                </li>
                <li>
                  Menyediakan sarana penunjang yang{" "}
                  <span className="font-bold">excellent</span>.
                </li>
                <li>
                  Menyediakan sumber daya manusia yang mumpuni dan melayani.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section Pendeta & Tata Usaha dengan design profesional */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bagian Pendeta Jemaat */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="p-6"
                style={{ backgroundColor: "rgb(206, 146, 38)" }}
              >
                <h3 className="text-2xl font-bold text-white text-center">
                  Pendeta Jemaat
                </h3>
              </div>

              <div className="p-8">
                {pendeta.map((pastor) => (
                  <div key={pastor.id} className="flex flex-col items-center">
                    {/* Foto Pendeta */}
                    <div className="mb-6">
                      <img
                        src={pastor.foto}
                        alt={`Foto ${pastor.name}`}
                        className="w-36 h-36 rounded-full object-cover border-4 shadow-md"
                        style={{ borderColor: "rgba(206, 146, 38, 0.3)" }}
                        onError={(e) => {
                          console.error(
                            "Failed to load primary image:",
                            pastor.foto,
                          );
                          if (
                            pastor.fotoFallback &&
                            e.currentTarget.src !==
                              window.location.origin + pastor.fotoFallback
                          ) {
                            e.currentTarget.src = pastor.fotoFallback;
                            return;
                          }
                          console.error("All images failed, showing initials");
                          e.currentTarget.style.display = "none";
                          const fallback = e.currentTarget
                            .nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.classList.remove("hidden");
                            fallback.classList.add("flex");
                          }
                        }}
                      />
                      <div
                        className="w-36 h-36 rounded-full items-center justify-center text-white text-3xl font-bold shadow-md hidden"
                        style={{ backgroundColor: "rgb(206, 146, 38)" }}
                      >
                        {pastor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                    </div>

                    {/* Info Pendeta */}
                    <div className="text-center space-y-4 w-full">
                      <h4
                        className="text-xl font-bold"
                        style={{ color: "rgb(206, 146, 38)" }}
                      >
                        {pastor.name}
                      </h4>

                      {/* Email */}
                      {pastor.email && (
                        <div
                          className="bg-gray-50 rounded-lg p-4 border-l-4"
                          style={{ borderLeftColor: "rgb(206, 146, 38)" }}
                        >
                          <div className="text-gray-700">
                            <span className="font-medium text-gray-900">
                              Email:
                            </span>{" "}
                            {pastor.email}
                          </div>
                        </div>
                      )}

                      {/* Jadwal Konseling */}
                      {pastor.counselingSchedule && (
                        <div
                          className="bg-gray-50 rounded-lg p-4 border-l-4"
                          style={{ borderLeftColor: "rgb(206, 146, 38)" }}
                        >
                          <div className="text-left">
                            <p className="font-medium text-gray-900 mb-2">
                              Jadwal Konseling:
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {pastor.counselingSchedule}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bagian Tata Usaha & Sekretariat */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="p-6"
                style={{ backgroundColor: "rgb(206, 146, 38)" }}
              >
                <h3 className="text-2xl font-bold text-white text-center">
                  Tata Usaha & Sekretariat
                </h3>
              </div>

              <div className="p-8">
                {/* Jam Operasional */}
                <div className="mb-8">
                  <h4
                    className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200"
                    style={{ color: "rgb(206, 146, 38)" }}
                  >
                    Jam Operasional
                  </h4>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-800">Senin</span>
                      <span className="text-red-600 font-bold">Libur</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-800">
                        Selasa - Jumat
                      </span>
                      <span className="text-gray-600">08.30 - 17.00 WIB</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-800">Sabtu</span>
                      <span className="text-gray-600">08.30 - 12.30 WIB</span>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-gray-800">Minggu</span>
                      <span className="text-gray-600">06.00 - 10.00 WIB</span>
                    </div>
                  </div>
                </div>

                {/* Kontak Information */}
                <div>
                  <h4
                    className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200"
                    style={{ color: "rgb(206, 146, 38)" }}
                  >
                    Hubungi Kami
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: "rgba(206, 146, 38, 0.1)" }}
                      >
                        <span
                          className="text-sm font-medium"
                          style={{ color: "rgb(206, 146, 38)" }}
                        >
                          ☎
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">Telepon</p>
                        <p className="text-gray-600 text-sm">021.8660.9850</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: "rgba(206, 146, 38, 0.1)" }}
                      >
                        <span
                          className="text-sm font-medium"
                          style={{ color: "rgb(206, 146, 38)" }}
                        >
                          📠
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">Fax</p>
                        <p className="text-gray-600 text-sm">021.8661.3027</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: "rgba(206, 146, 38, 0.1)" }}
                      >
                        <span
                          className="text-sm font-medium"
                          style={{ color: "rgb(206, 146, 38)" }}
                        >
                          ✉
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">Email</p>
                        <p className="text-gray-600 text-sm">
                          gkicinda@yahoo.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfilGereja;
