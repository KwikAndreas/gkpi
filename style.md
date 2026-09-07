# Rincian Teknis Styling UI/UX GKPI Kartini (Tri-Style System)

Dokumen ini adalah referensi utama (_blueprint_) sistem desain antarmuka untuk proyek website GKPI Kartini (Public & Admin). Sistem desain ini mendukung **Style 0 (Default Utama)** dan **Style 1 & 2 (Tampilan Eksperimental)** yang dapat diatur melalui string konfigurasi CSS (`"0"`, `"1"`, atau `"2"`):

1. **Style `0`**: **Warm Minimalist (Default Resmi GKPI - Tidak Diubah)**
   - Mengusung standar aksesibilitas ramah senior (50+) dan kehangatan komunitas sesuai [AGENTS.md](file:///d:/kerja/gkpi/gkpi/AGENTS.md).
   - Latar belakang `bg-gray-50` (`#f9fafb`), kartu putih bersih dengan batas abu-abu tegas (`border-gray-200`), tombol sudut `rounded-xl` (12px), dan judul klasik font Serif (*Playfair Display*).

2. **Style `1`**: **Elegant Traditional (Eksperimental: Sacred Cathedral Heritage)**
   - Nuansa katedral sakral dan warisan tradisi gerejawi yang megah, anggun, dan berwibawa.
   - Latar belakang krim perkamen antik (*antique warm parchment* `#fbf8f1`), kartu *warm ivory* dengan bingkai atas emas antik (`border-t-3 border-[#c59b27]`), sudut tajam formal `rounded-sm` (4px), aksen merah anggur pekat (*deep burgundy* `#7f1d1d`), tombol huruf kapital berjarak renggang (*uppercase letter-spacing*), ornamen pemisah salib/diamond (`✦ — † — ✦`), dan penomoran kartu angka Romawi (`I`, `II`, `III`).

3. **Style `2`**: **Modern Classic (Eksperimental: Editorial Luxury)**
   - Nuansa publikasi editorial mewah kontemporer (*Kinfolk / Aesop editorial luxury*).
   - Latar belakang netral studio alabaster (`#f6f6f3`), kartu putih murni berujung kurva bento `rounded-2xl` (18px) dengan batas *hairline* ultra-tipis (`#e5e5e0`), bayangan melayang lapang (*airy elevation*), aksen tipografi serif miring dinamis (*italic accent*), tombol modern *squircle* `rounded-xl` (14px), dan penomoran modern (`01`, `02`, `03`).

---

## 1. Mekanisme Pengaturan Style (CSS String: 0, 1, atau 2)

Sistem style dapat diatur melalui:

### Cara 1: Mengatur Langsung di `app/globals.css`
Pada `app/globals.css`, token style didefinisikan berdasarkan selektor:
- Style 0: `:root, [data-style="0"]` (Default sistem)
- Style 1: `[data-style="1"]`
- Style 2: `[data-style="2"]`

### Cara 2: Melalui Environment Variable `NEXT_PUBLIC_APP_STYLE` (Deployment / Production)
Atur variabel lingkungan di file `.env.production` atau dashboard hosting (Vercel/Netlify):
```bash
NEXT_PUBLIC_APP_STYLE=0 # (0 = Warm Minimalist, 1 = Elegant Traditional, 2 = Modern Classic)
```
Di `layout.tsx`, sistem membaca `process.env.NEXT_PUBLIC_APP_STYLE || FALLBACK_STYLE`. Lihat panduan lengkap di [PETUNJUK_STYLE_DEPLOYMENT.md](file:///d:/kerja/gkpi/gkpi/PETUNJUK_STYLE_DEPLOYMENT.md).

### Cara 3: Melalui Komponen `StyleSwitcher` Interaktif (Mode Development Saja)
Widget saklar mengambang (*floating switcher*) di pojok kanan bawah otomatis aktif **hanya saat `npm run dev`** untuk kemudahan pengujian. Di mode produksi / deployment, widget ini otomatis dihilangkan (*zero overhead*).

---

## 2. Perbandingan Spesifikasi Token Desain

| Token CSS | Style 0: Warm Minimalist (Default) | Style 1: Elegant Traditional | Style 2: Modern Classic |
| :--- | :--- | :--- | :--- |
| **Konsep Utama** | Kehangatan komunitas, kontras jelas, ramah senior | Megah sakral, katedral, formal heraldik | Mewah editorial, kontemporer, bento bersih |
| **`--theme-font-heading`** | `var(--font-playfair), serif` | `var(--font-playfair), serif` (Uppercase wide) | `var(--font-playfair), serif` (Italic accent) |
| **`--theme-font-body`** | `var(--font-jakarta), sans-serif` | `var(--font-jakarta), sans-serif` | `var(--font-jakarta), sans-serif` |
| **`--theme-primary`** | `#d8261c` (Merah GKPI) | `#7f1d1d` (Deep Burgundy) | `#b91c1c` (Modern Crimson) |
| **`--theme-accent-gold`** | `-` | `#c59b27` (Antique Gold) | `-` |
| **`--theme-surface-bg`** | `#f9fafb` (gray-50) | `#fbf8f1` (Antique Parchment Cream) | `#f6f6f3` (Studio Alabaster) |
| **`--theme-surface-card`** | `#ffffff` (Pure White) | `#fffefb` (Warm Ivory) | `#ffffff` (Pure White) |
| **`--theme-border-card`** | `#e5e7eb` (gray-200) | `#e7dfcb` (Antique Stone Frame) | `#e5e5e0` (Hairline Border) |
| **`--theme-radius-btn`** | `0.75rem` (`rounded-xl` / 12px) | `0.25rem` (`rounded-sm` / 4px) | `0.875rem` (14px Squircle) |
| **`--theme-radius-card`** | `0.75rem` (`rounded-xl` / 12px) | `0.25rem` (`rounded-sm` / 4px) | `1.25rem` (`rounded-2xl` / 20px) |
| **Gaya Kartu (Card)** | Border abu-abu tegas, shadow lembut | Bingkai atas emas antik (`border-t-3`), sudut tajam | Bento modern, hairline border, airy shadow |
| **Gaya Tombol (Button)**| Bold sans-serif, sudut `rounded-xl` | Huruf kapital berjarak renggang font Serif | Sleek modern sans-serif squircle |
| **Ornamen Divider** | Batang merah solid 24px | Fleuron sakral salib emas (`✦ — † — ✦`) | Garis hairline dengan bintang mikro |
| **Penomoran Kartu** | Tidak ada | Angka Romawi Emas (`I`, `II`, `III`) | Angka Modern Abu-abu (`01`, `02`, `03`) |

---

## 3. Rincian Transformasi Struktur Komponen & Layout Halaman

| Halaman | Style 0: Warm Minimalist (Default) | Style 1: Elegant Traditional | Style 2: Modern Classic |
| :--- | :--- | :--- | :--- |
| **Beranda (`/`)** | Grid 3-kolom standar simetris; kartu putih reguler; sosial media lingkaran warna. | Kartu berbingkai emas + angka Romawi emas (`I`, `II`, dll.); lencana heraldik emas klasik untuk sosial media. | **Bento Grid Asimetris** (kartu pertama melebar 2 kolom); strip pil editorial horizontal untuk sosial media. |
| **Galeri (`/galeri`)** | Grid 3-kolom standar; sudut `rounded-xl`. | **Bingkai lukisan museum emas antik ganda** dengan plat nama kuningan klasik. | **Bento Masonry Asimetris** (foto utama berukuran 2x2); label pil kaca mengambang (*frosted glass pill*). |
| **Jadwal (`/jadwal`)** | Tabel standar dengan header merah GKPI. | **Buku register katedral** marun dengan border emas tebal. | **Bento card container** modern dengan bayangan studio lapang. |
| **Warta (`/warta-terkini`)**| Grid 2-kolom simetris seimbang; aksen atas merah 6px; ikon lingkaran penuh. | **Folio liturgis katedral berbingkai emas 2px** & header marun 6px; ikon stempel persegi heraldik emas. | **Asymmetric Editorial Spread (Rasio 1 : 1.2)** dengan ruang renungan lebih lapang; bento hairline 1px; kutipan miring besar. |
| **Profil (`/profil`)** | Kartu sejarah bergaris samping merah; kartu visi misi rounded-2xl; foto pendeta bulat penuh. | **Piagam paroki bergaris ganda emas 4px (`double`)**; plakat visi misi berbingkai emas; **bingkai potret tegak emas 4px** untuk pastor. | **Kartu monolitik bento modern (radius 24px)**; lencana pil slate; **bingkai potret squircle modern (radius 20px)** dengan hairline border. |