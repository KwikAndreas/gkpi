import Image from "next/image";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800&auto=format&fit=crop", alt: "Ibadah Minggu" },
  { id: 2, src: "https://images.unsplash.com/photo-1544621430-80faeb652e8f?q=80&w=800&auto=format&fit=crop", alt: "Sekolah Minggu" },
  { id: 3, src: "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?q=80&w=800&auto=format&fit=crop", alt: "Pemuda Gereja" },
  { id: 4, src: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=800&auto=format&fit=crop", alt: "Paduan Suara" },
  { id: 5, src: "https://images.unsplash.com/photo-1511649475669-e288648b2339?q=80&w=800&auto=format&fit=crop", alt: "Kegiatan Sosial" },
  { id: 6, src: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800&auto=format&fit=crop", alt: "Perayaan Natal" },
];

export default function Galeri() {
  return (
    <div className="container py-16">
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text-title)] mb-4">
          Galeri Dokumentasi
        </h1>
        <p className="text-lg md:text-2xl text-[var(--color-text-body)] max-w-2xl mx-auto leading-relaxed">
          Dokumentasi momen-momen berharga dalam pelayanan dan persekutuan di GKPI.
        </p>
        <div className="theme-divider mt-6">
          <div className="theme-divider-bar"></div>
        </div>
      </div>

      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className={`gallery-item gallery-item-${index} group relative overflow-hidden rounded-[var(--radius-card)] bg-gray-100 aspect-square border border-[var(--color-border-card)] shadow-[var(--theme-shadow-card)] hover:shadow-[var(--theme-shadow-card-hover)] transition-all duration-300`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="gallery-caption-box absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 w-full">
                <h3 className="gallery-caption-title text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
