import React from "react";
import type { Metadata } from "next";
import { 
  Church, 
  GraduationCap, 
  Building2, 
  FileText, 
  Users, 
  Landmark, 
  Calendar,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Printer,
  Clock
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Profil Gereja - GKPI Kartini",
  description: "Profil lengkap GKPI Kartini. Sejarah gereja, visi misi, daftar pelayan firman, dan kontak sekretariat jemaat.",
};

interface Milestone {
  year: string;
  title: string;
  date: string;
  icon: React.ElementType;
  desc: string;
}

interface HambaTuhan {
  id: number;
  name: string;
  title: string;
  role: string;
  phone: string;
  phoneRaw: string;
  initials: string;
}

const milestones: Milestone[] = [
  {
    year: "1963",
    title: "Kelahiran GKPI & Kebaktian Perdana",
    date: "1 & 21 Desember 1963",
    icon: Church,
    desc: "Kebaktian perdana di ruang tamu Jl. Kartini Raya No. 10 (~50 jemaat) diprakarsai para penatua pendiri, disusul persembahan rumah sebagai gedung gereja sekaligus perayaan Natal pertama.",
  },
  {
    year: "1969",
    title: "Sekolah Anugerah & Pendeta Pertama",
    date: "Januari & Juli 1969",
    icon: GraduationCap,
    desc: "Mendirikan Sekolah Kristen Anugerah (165 siswa awal) sebagai ladang penginjilan, serta penahbisan Pdt. Tjeng Oen Tek sebagai pendeta pertama di GKPI pada 20 Juli 1969.",
  },
  {
    year: "1974",
    title: "Pembangunan Gedung 3 Lantai",
    date: "7 Februari 1974",
    icon: Building2,
    desc: "Peresmian gedung gereja bertingkat 3 di Jl. Kartini Raya No. 10 guna menampung pertumbuhan pesat jemaat dan efektivitas kegiatan belajar mengajar sekolah.",
  },
  {
    year: "1989",
    title: "Pengakuan Resmi Departemen Agama",
    date: "SK Bimas Kristen No. 41/1989",
    icon: FileText,
    desc: "GKPI resmi ditetapkan dan terdaftar sebagai Lembaga Keagamaan di bawah Bimas Kristen Departemen Agama RI berdasarkan SK Bimas Kristen No. 41 Tahun 1989.",
  },
  {
    year: "2000 & 2007",
    title: "Pemekaran Pos PI Mandiri",
    date: "Citeureup & Harapan Indah",
    icon: Users,
    desc: "Pendewasaan pos penginjilan menjadi gereja mandiri: GKPI Jemaat Citeureup Bogor (21 Agustus 2000) dan GKPI Jemaat Harapan Indah Bekasi (12 Agustus 2007).",
  },
  {
    year: "2010",
    title: "Pembentukan Sinode GKPI",
    date: "17 November 2010",
    icon: Landmark,
    desc: "Dengan 3 jemaat mandiri yang telah dewasa, Sidang Raya Pertama secara resmi mengukuhkan dan mendirikan Sinode Gereja Kristen Pengabar Injil (Sinode GKPI).",
  },
];

const hambaTuhanList: HambaTuhan[] = [
  {
    id: 1,
    name: "Pdt. Em. Natan Hidayat, S. Th.",
    title: "Pendeta Emeritus",
    role: "Pelayanan Pastoral & Penggembalaan",
    phone: "0812 8122 2833",
    phoneRaw: "081281222833",
    initials: "NH",
  },
  {
    id: 2,
    name: "GI. Daniel Indarso Hidayat, M. Div",
    title: "Guru Injil",
    role: "Pelayanan Firman & Pengajaran",
    phone: "0815 9940 440",
    phoneRaw: "08159940440",
    initials: "DH",
  },
  {
    id: 3,
    name: "GI. Aning Indarso Hidayat, S. Th.",
    title: "Guru Injil",
    role: "Pelayanan Firman & Pembinaan",
    phone: "0812 7853 111",
    phoneRaw: "08127853111",
    initials: "AH",
  },
  {
    id: 4,
    name: "Ev. Abraham Tonapa, M. Th.",
    title: "Evangelis",
    role: "Pemberitaan Injil & Misi Jemaat",
    phone: "0813 1133 4106",
    phoneRaw: "081311334106",
    initials: "AT",
  },
];

export default function ProfilGereja() {
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

      {/* 1. Seksi Sejarah Singkat */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl font-bold mb-4 text-[var(--color-text-title)] inline-block border-b-2 border-[var(--color-primary)] pb-2">
            Sejarah Singkat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Perjalanan iman, dedikasi pelayanan, dan pemeliharaan Tuhan bagi Gereja Kristen Pengabar Injil sejak 1963.
          </p>
        </div>

        {/* Kartu Narasi Rangkuman On-Point */}
        <div className="profile-history-card bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 relative overflow-hidden group hover:shadow-md transition-all duration-300 mb-10">
          <div className="profile-history-accent absolute top-0 left-0 w-2 h-full bg-[var(--color-primary)]"></div>
          <div className="profile-history-glow absolute -right-16 -top-16 w-64 h-64 bg-red-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
          
          <div className="relative z-10 text-[var(--color-text-body)] text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Perjalanan <span className="font-bold text-[var(--color-text-title)]">Gereja Kristen Pengabar Injil (GKPI)</span> berakar dari kebaktian perdana pada <span className="font-semibold text-[var(--color-primary)]">1 Desember 1963</span> di ruang tamu sebuah rumah jemaat di <span className="font-semibold text-[var(--color-text-title)]">Jl. Kartini Raya No. 10, Jakarta Pusat</span>, yang dihadiri sekitar 50 jemaat. Perintisan ini diprakarsai oleh para mantan penatua (Pnt. Thong Lukas, Tan Bian Pek, Tan Hui Su, Tjeng Oen Tek, Yo Giok Siu, dan Ang Han Ing) yang berkomitmen memberitakan Injil. Tepat pada 21 Desember 1963, rumah tersebut dipersembahkan sebagai tempat ibadah sekaligus merayakan Natal pertama jemaat GKPI.
            </p>
            <p>
              Pelayanan berkembang pesat dengan lahirnya visi penginjilan melalui pendidikan. Pada <span className="font-semibold text-[var(--color-text-title)]">15 Januari 1969</span>, didirikanlah <span className="font-bold text-[var(--color-text-title)]">Sekolah Kristen Anugerah</span> (165 siswa pertama). Menjawab kebutuhan penggembalaan, pada <span className="font-semibold text-[var(--color-primary)]">20 Juli 1969</span>, <span className="font-bold text-[var(--color-text-title)]">Pdt. Tjeng Oen Tek</span> ditahbiskan sebagai pendeta pertama di GKPI. Untuk menampung pertumbuhan jemaat dan murid sekolah, gedung gereja dibangun kembali menjadi bangunan tiga lantai yang diresmikan pada <span className="font-semibold text-[var(--color-text-title)]">7 Februari 1974</span>.
            </p>
            <p>
              Kiprah GKPI semakin kokoh dengan pengakuan resmi pemerintah melalui <span className="font-semibold text-[var(--color-text-title)]">SK Bimas Kristen Departemen Agama RI No. 41 Tahun 1989</span>. Semangat penginjilan terus berbuah melalui pemekaran pos penginjilan (Pos PI) menjadi jemaat mandiri: <span className="font-bold text-[var(--color-text-title)]">GKPI Jemaat Citeureup Bogor</span> (dewasa pada 21 Agustus 2000) dan <span className="font-bold text-[var(--color-text-title)]">GKPI Jemaat Harapan Indah Bekasi</span> (dewasa pada 12 Agustus 2007). Puncaknya, dengan hadirnya tiga gereja mandiri, pada <span className="font-bold text-[var(--color-primary)]">17 November 2010</span> dalam Sidang Raya Pertama, secara resmi terbentuklah <span className="font-bold text-[var(--color-text-title)]">Sinode Gereja Kristen Pengabar Injil (Sinode GKPI)</span>.
            </p>
          </div>
          
          <div className="text-right text-[var(--color-primary)] font-semibold mt-6 relative z-10 text-sm md:text-base">
            <span>&mdash; Disarikan dari dokumen Sejarah Singkat Gereja Kristen Pengabar Injil</span>
          </div>
        </div>

        {/* Tonggak Bersejarah (Key Milestones Grid) */}
        <div>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-[var(--color-text-title)] mb-6 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
            <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
            <span>Tonggak Bersejarah GKPI</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, idx) => {
              const IconComponent = m.icon;
              return (
                <div 
                  key={idx}
                  className="history-milestone-card bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md hover:border-gray-300 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="history-milestone-badge bg-red-50 text-[var(--color-primary)] font-bold text-sm px-3.5 py-1 rounded-full border border-red-100">
                        {m.year}
                      </span>
                      <div className="history-milestone-icon w-10 h-10 rounded-xl bg-red-50 text-[var(--color-primary)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="font-heading font-bold text-lg text-[var(--color-text-title)] mb-1 leading-snug">
                      {m.title}
                    </h4>
                    <p className="text-xs font-semibold text-gray-500 mb-3 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{m.date}</span>
                    </p>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Seksi Visi & Misi */}
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
              Menjadi Gereja/Jemaat yang tanggap dan mampu mempengaruhi
              perkembangan jaman untuk kembali kepada Kristus
            </p>
            <br></br>
            <p className="text-[var(--color-text-body)] leading-relaxed text-lg font-medium">
              加恩堂 -- 异象:<br></br>
              成为能够回应并有能力影响时代的发展来归向基督。
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
              <li>Menaklukan segala pikiran kepada Kristus (II Korintus 10: 5)</li>
              <li>Menjadi serupa dengan Kristus (Roma 8: 29)</li>

              <br></br>

              <li>加恩堂 -- 使命:
                <br></br>
                夺回一切所有的心意(林后10:5)
                <br></br>
                成为基督的样式。(罗8:29)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Seksi Pelayan Firman & Hamba Tuhan */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl font-bold mb-4 text-[var(--color-text-title)] inline-block border-b-2 border-[var(--color-primary)] pb-2">
            Pelayan Firman & Hamba Tuhan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Hamba-hamba Tuhan yang setia melayani dalam penggembalaan, pemberitaan Firman, dan konseling jemaat di GKPI Kartini.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hambaTuhanList.map((hamba) => (
            <div
              key={hamba.id}
              className="profile-tablet-card bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between items-center text-center hover:shadow-md hover:border-gray-300 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center w-full">
                {/* Avatar Box / Inisial */}
                <div className="pastor-avatar-box w-20 h-20 rounded-full bg-red-50 text-[var(--color-primary)] border-2 border-[var(--color-primary)] flex items-center justify-center font-heading font-bold text-2xl mb-4 shadow-xs group-hover:scale-105 transition-transform duration-300">
                  {hamba.initials}
                </div>

                {/* Badge Jabatan Pelayanan */}
                <span className="profile-role-badge text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-50 text-[var(--color-primary)] border border-red-100 mb-3">
                  {hamba.title}
                </span>

                {/* Nama Lengkap & Gelar */}
                <h3 className="font-heading text-lg font-bold text-[var(--color-text-title)] mb-1 leading-snug">
                  {hamba.name}
                </h3>

                <p className="text-xs text-gray-500 mb-5">
                  {hamba.role}
                </p>
              </div>

              {/* Tombol Kontak Cepat Telepon & WhatsApp */}
              <div className="w-full pt-4 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={`tel:${hamba.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-bold text-sm transition-all duration-200 border border-[var(--color-primary)]/20"
                >
                  <Phone size={15} />
                  <span>{hamba.phone}</span>
                </a>

                <a
                  href={`https://wa.me/62${hamba.phoneRaw.replace(/^0/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white font-semibold text-xs transition-all duration-200 border border-emerald-200"
                >
                  <FaWhatsapp size={15} />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Seksi Tata Usaha & Sekretariat */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl font-bold mb-4 text-[var(--color-text-title)] inline-block border-b-2 border-[var(--color-primary)] pb-2">
            Tata Usaha & Sekretariat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Pelayanan administrasi, informasi resmi, dan kebutuhan pastoral jemaat GKPI Kartini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Jam Operasional */}
          <div className="profile-tablet-card bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--color-text-title)]">
                    Jam Operasional Kantor
                  </h3>
                  <p className="text-xs text-gray-500">Waktu pelayanan sekretariat jemaat</p>
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="flex justify-between items-center py-2.5 px-4 rounded-xl bg-red-50/60 border border-red-100">
                  <span className="font-semibold text-gray-700">Senin</span>
                  <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Libur</span>
                </div>
                <div className="flex justify-between items-center py-2.5 px-4 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-gray-700">Selasa - Jumat</span>
                  <span className="text-gray-800 font-bold text-sm">08.30 - 17.00 WIB</span>
                </div>
                <div className="flex justify-between items-center py-2.5 px-4 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-gray-700">Sabtu</span>
                  <span className="text-gray-800 font-bold text-sm">08.30 - 12.30 WIB</span>
                </div>
                <div className="flex justify-between items-center py-2.5 px-4 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-gray-700">Minggu</span>
                  <span className="text-gray-800 font-bold text-sm">06.00 - 10.00 WIB</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-6 italic text-center">
              * Pelayanan konseling dan kunjungan pastoral di luar jam operasional dapat diatur melalui perjanjian terlebih dahulu.
            </p>
          </div>

          {/* Kontak & Saluran Komunikasi Resmi */}
          <div className="profile-tablet-card bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[var(--color-text-title)]">
                    Kontak & Alamat Lengkap
                  </h3>
                  <p className="text-xs text-gray-500">Saluran resmi komunikasi GKPI Kartini</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-gray-200 flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-0.5">
                    <Phone size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Telepon Kantor</p>
                    <div className="flex flex-wrap gap-2 text-base font-bold text-[var(--color-primary)]">
                      <a href="tel:0213864674" className="hover:underline">(021) 3864674</a>
                      <span className="text-gray-400 font-normal">,</span>
                      <a href="tel:0213457635" className="hover:underline">(021) 3457635</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-gray-200 flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-0.5">
                    <Printer size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Fax</p>
                    <p className="text-base font-bold text-gray-800">(021) 3441749</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-gray-200 flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-0.5">
                    <Mail size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Email Resmi</p>
                    <a href="mailto:sekretariatgkpikartini@gmail.com" className="text-sm font-semibold text-[var(--color-primary)] hover:underline break-all">
                      sekretariatgkpikartini@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-gray-200 flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-0.5">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">Alamat Domisili</p>
                    <p className="text-sm font-medium text-gray-800 leading-relaxed">
                      Jl. Kartini Raya No. 10 - 11, RT.6/RW.5, Pasar Baru, Sawah Besar, Jakarta Pusat 10710
                    </p>
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
