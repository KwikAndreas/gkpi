import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FileText, Download, BookOpen } from "lucide-react";

// Placeholder data fetching function (mocking Supabase query)
async function getLatestWarta() {
  // In the future, this will be: supabase.from('warta').select('*').eq('is_active', true).order('published_at', { ascending: false }).limit(1).single()
  return {
    id: "uuid-1",
    title: "Warta Jemaat - Minggu, 7 September 2026",
    content: "Puji syukur kepada Tuhan, pada minggu ini kita merayakan...",
    pdf_url: "#",
    published_at: new Date().toISOString(),
  };
}

async function getLatestRenungan() {
  // In the future, this will be: supabase.from('renungan').select('*').eq('is_active', true).order('published_at', { ascending: false }).limit(1).single()
  return {
    id: "uuid-2",
    title: "Renungan Harian: Mengandalkan Tuhan",
    author: "Pdt. J. Simanjuntak",
    content: "Dalam kehidupan kita sehari-hari, seringkali kita dihadapkan pada tantangan yang terlihat mustahil untuk diatasi. Namun, firman Tuhan dalam Amsal 3:5-6 mengingatkan kita untuk 'Percayalah kepada TUHAN dengan segenap hatimu, dan janganlah bersandar kepada pengertianmu sendiri.'",
    published_at: new Date().toISOString(),
  };
}

export default async function WartaTerkini() {
  const warta = await getLatestWarta();
  const renungan = await getLatestRenungan();

  return (
    <div className="container py-10 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text-title)] mb-4">
          Warta Jemaat
        </h1>
        <p className="text-lg md:text-2xl text-[var(--color-text-body)] max-w-2xl mx-auto leading-relaxed">
          Informasi terkini dan siraman rohani untuk jemaat GKPI.
        </p>
        <div className="theme-divider mt-6">
          <div className="theme-divider-bar"></div>
        </div>
      </div>

      <div className="warta-grid grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Warta Section */}
        <Card className="warta-card flex flex-col h-full border-t-[6px] border-t-[var(--color-primary)] border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="warta-card-header-icon w-14 h-14 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)]">
              <FileText size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-heading text-[var(--color-text-title)]">Warta Jemaat</h2>
              <p className="text-sm text-gray-500">
                Terbaru: {new Date(warta.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="font-heading font-bold text-xl mb-4 text-[var(--color-text-title)]">{warta.title}</h3>
            <p className="text-[var(--color-text-body)] mb-6 line-clamp-3 leading-relaxed">
              {warta.content}
            </p>
          </div>
          
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 mt-auto">
            <Button variant="primary" className="flex items-center justify-center gap-2 flex-1 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
              <Download size={18} />
              Unduh PDF
            </Button>
            <Button variant="outline" className="flex items-center justify-center gap-2 flex-1 hover:bg-gray-50 transition-all">
              <FileText size={18} />
              Baca Online
            </Button>
          </div>
        </Card>

        {/* Renungan Section */}
        <Card className="renungan-card flex flex-col h-full border-t-[6px] border-t-gray-800 border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="renungan-card-header-icon w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-800">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-heading text-[var(--color-text-title)]">Renungan</h2>
              <p className="text-sm text-gray-500">
                Terbaru: {new Date(renungan.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="font-heading font-bold text-xl mb-1 text-[var(--color-text-title)]">{renungan.title}</h3>
            <p className="text-sm text-[var(--color-primary)] font-medium mb-4">Oleh: {renungan.author}</p>
            <p className="warta-quote-text text-[var(--color-text-body)] mb-6 italic leading-relaxed">
              &quot;{renungan.content}&quot;
            </p>
          </div>
          
          <div className="pt-6 border-t border-gray-100 mt-auto">
            <Button variant="secondary" className="w-full flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <BookOpen size={18} />
              Baca Selengkapnya
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
