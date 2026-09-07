import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { trackPageView } from "./utils/analytics";

const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));
const Calendar = lazy(() => import("./pages/Kalender"));
const Downloads = lazy(() => import("./pages/Download"));
const Shalom = lazy(() => import("./pages/Shalom"));
const InfoPage = lazy(() => import("./pages/Info"));
const ArtikelPage = lazy(() => import("./pages/Artikel"));
const JadwalKebaktian = lazy(() => import("./pages/JadwalKebaktian"));
const ArtikelDetail = lazy(() => import("./pages/article/ArtikelDetail"));
const KebijakanPenggunaan = lazy(() => import("./pages/KebijakanPenggunaan"));
const KebijakanPrivasi = lazy(() => import("./pages/KebijakanPrivasi"));
const BeritaDetail = lazy(() => import("./pages/Info/BeritaDetail"));
const KegiatanDetail = lazy(() => import("./pages/Info/KegiatanDetail"));

import NotFound from "./pages/error/NotFound";
import BadRequest from "./pages/error/BadRequest";
import Unauthorized from "./pages/error/Unauthorized";
import Forbidden from "./pages/error/Forbidden";
import InternalServerError from "./pages/error/InternalServerError";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div
      className="animate-spin rounded-full h-12 w-12 border-b-2"
      style={{ borderBottomColor: "rgb(206, 146, 38)" }}
    ></div>
    <span className="ml-3 text-gray-600">Memuat halaman...</span>
  </div>
);

// Component untuk tracking page views
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view setiap kali route berubah
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <PageTracker />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 p-4 max-w-6xl mx-auto w-full">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jadwal-kebaktian" element={<JadwalKebaktian />} />
              <Route path="/shalom" element={<Shalom />} />
              <Route path="/profil" element={<Profile />} />
              <Route path="/artikel" element={<ArtikelPage />} />
              <Route path="/artikel/:id" element={<ArtikelDetail />} />
              <Route path="/info" element={<InfoPage />} />
              <Route path="/info/berita/:judul" element={<BeritaDetail />} />
              <Route
                path="/info/kegiatan/:judul"
                element={<KegiatanDetail />}
              />
              <Route path="/kalender" element={<Calendar />} />
              <Route path="/download" element={<Downloads />} />
              <Route
                path="/ketentuan-penggunaan"
                element={<KebijakanPenggunaan />}
              />
              <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />

              <Route path="/error/400" element={<BadRequest />} />
              <Route path="/error/401" element={<Unauthorized />} />
              <Route path="/error/403" element={<Forbidden />} />
              <Route path="/error/500" element={<InternalServerError />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
