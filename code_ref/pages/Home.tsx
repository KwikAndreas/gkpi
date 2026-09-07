import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import {
  CalendarDays,
  BookOpen,
  Church,
  Newspaper,
  Download,
  ArrowRight
} from "lucide-react";
import YoutubeWidget from "../components/YoutubeWidget";
import PrivacyTermsPopup from "../components/PrivacyTermsPopup";
import SEOComponent from "../components/SEOComponent";

type FeatureCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
};

// const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
// const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const API_BASE_URL = `${SUPABASE_URL}/functions/v1/youtube-proxy`;

// const getUpcomingLiveVideoId = async (): Promise<string | null> => {
//   try {
//     const res = await fetch(`${API_BASE_URL}?action=upcoming-live`, {
//       headers: {
//         'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
//         'Content-Type': 'application/json',
//       },
//     });
//     if (!res.ok) {
//       return null;
//     }
//     const data = await res.json();
//     return data.videoId || null;
//   } catch {
//     return null;
//   }
// };

const Home: React.FC = () => {
  const [upcomingLiveId, setUpcomingLiveId] = useState<string | null>(null);
  const [showOnlineService, setShowOnlineService] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   getUpcomingLiveVideoId().then((id) => {
  //     setUpcomingLiveId(id);
  //     setShowOnlineService(!!id);
  //   });
  // }, []);

  useEffect(() => {
    const hasAgreed = localStorage.getItem("privacyTermsAgreed");
    if (!hasAgreed) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    localStorage.setItem("privacyTermsAgreed", "true");
    setShowPopup(false);
  };

  const featureCards: FeatureCard[] = [
    {
      title: "Profil Gereja",
      description: "Kenali lebih dekat sejarah, visi, dan misi Gereja",
      icon: <Church className="w-8 h-8 text-primary" />,
      link: "/profil",
    },
    {
      title: "Jadwal Kebaktian",
      description: "Informasi jadwal kebaktian reguler",
      icon: <CalendarDays className="w-8 h-8 text-primary" />,
      link: "/jadwal-kebaktian",
    },
    {
      title: "Renungan",
      description: "Renungan harian, bacaan Alkitab, dan pokok doa mingguan.",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      link: "/shalom",
    },
    {
      title: "Profil Gereja",
      description: "Kenali lebih dekat sejarah, visi, dan misi gereja.",
      icon: <Church className="w-8 h-8 text-primary" />,
      link: "/profil",
    },
    {
      title: "Berita & Kegiatan",
      description: "Temukan informasi terbaru dan dokumentasi kegiatan gereja.",
      icon: <Newspaper className="w-8 h-8 text-primary" />,
      link: "/info",
    },
    {
      title: "Artikel",
      description: "Baca artikel rohani dan inspiratif.",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      link: "/artikel",
    },
    {
      title: "Pusat Unduhan",
      description: "Unduh warta jemaat, liturgi, dan aplikasi gereja.",
      icon: <Download className="w-8 h-8 text-primary" />,
      link: "/download",
    },
  ];

  let featureCardsWithOnline: (
    | FeatureCard
    | { title: "Online Service"; link: string }
  )[] = [...featureCards];
  if (showOnlineService && upcomingLiveId) {
    featureCardsWithOnline.splice(1, 0, {
      title: "Online Service",
      link: `https://www.youtube.com/watch?v=${upcomingLiveId}`,
    });
  }

  return (
    <div className="relative overflow-hidden w-full">
      <SEOComponent
        defaultTitle="Beranda - GKI Cipinang Indah"
        defaultDescription="Selamat datang di website resmi GKI Cipinang Indah Jakarta Timur. Tempat di mana kasih Kristus mempersatukan kita dalam persekutuan, pertumbuhan iman, dan pelayanan. Temukan jadwal kebaktian, online service, berita, dan kegiatan gereja."
        defaultKeywords="GKI Cipinang Indah, Gereja Kristen Indonesia, Jakarta Timur, Beranda, Online Service, Live Streaming, Kebaktian Online, Jadwal Ibadah"
        defaultCanonical="https://gkicinda.id/"
        defaultImage="https://gkicinda.id/gkicinda.png"
        defaultType="website"
      />
      <PrivacyTermsPopup isOpen={showPopup} onClose={handleClosePopup} />
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-12 text-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: "url('/images/IMG_20230131_174922.webp')",
            filter: "blur(1px)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/50 backdrop-blur-[2px]"></div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-6xl mx-auto px-4"
        >
          <div className="flex justify-center mb-6">
            <img
              src="/gkicinda_white.png"
              alt="Logo GKI Cipinang Indah Putih"
              className="h-44 md:h-36 lg:h-44 w-auto drop-shadow-2xl"
            />
          </div>
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight leading-tight">
              Selamat Datang di <br />
              <span className="text-primary font-black drop-shadow-sm">GKI Cipinang Indah</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed">
              Ruang bagi kasih Kristus yang mempersatukan kita untuk beriman dan
              bertumbuh dalam persekutuan, kesaksian, dan pelayanan.
          </p>
          <Link
              to="/profil"
              className="inline-flex items-center bg-primary hover:bg-[var(--color-primary-hover)] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Kenali Lebih Jauh
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
        </motion.div>
      </section>

      {/* Pelayanan Section */}
      <section className="container mx-auto py-24 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            Pelayanan
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {showOnlineService && upcomingLiveId && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 p-0 flex flex-col md:flex-row overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="md:w-2/5 overflow-hidden relative">
                <img
                  src={`https://img.youtube.com/vi/${upcomingLiveId}/hqdefault.jpg`}
                  alt="Online Service Thumbnail"
                  className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  Live
                </div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Online Service
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Ikuti kebaktian online secara langsung bersama kami melalui YouTube. Mari beribadah meskipun dari rumah.
                </p>
                <div>
                  <a
                    href={`https://www.youtube.com/watch?v=${upcomingLiveId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
                  >
                    <FaYoutube className="w-5 h-5 mr-2" />
                    Tonton Sekarang
                  </a>
                </div>
              </div>
            </div>
          )}

          {featureCards.map((card) => (
            <Link
              to={card.link}
              key={card.title}
              className="group bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[var(--color-primary-light)] transition-all duration-300 flex flex-col"
            >
              <div className="bg-[var(--color-primary-light)] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                {card.description}
              </p>
              <div className="text-primary font-semibold flex items-center mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
                Selengkapnya <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Youtube Section */}
      <section className="py-8 rounded-[3rem] mx-4 md:mx-auto max-w-7xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
              Siaran Langsung & Video Terbaru
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Ikuti kebaktian atau simak video terbaru dari kanal YouTube kami.
            </p>
          </div>
          <YoutubeWidget />
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 tracking-tight">
            Ayo Terhubung
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
            Ikuti akun sosial media untuk update kegiatan dan inspirasi rohani
            setiap hari.
          </p>
          <div className="flex justify-center space-x-6 md:space-x-12 items-center">
            <a
              href="https://web.facebook.com/pages/GKI%20Cipinang%20Indah/122038508445665/#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <FaFacebook className="w-8 h-8" />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/gkicipinangindah/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <FaInstagram className="w-8 h-8" />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-pink-600 transition-colors">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@gkicipinangindah"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <FaYoutube className="w-8 h-8" />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-red-600 transition-colors">YouTube</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
