# 📘 Panduan Pengaturan Style & Deployment (Tri-Style System)

Dokumen ini menjelaskan cara mengatur dan memilih tampilan antarmuka (**Style 0, 1, atau 2**) ketika website GKPI Kartini masuk ke tahap **Production / Deployment**, serta bagaimana widget penguji (*StyleSwitcher*) dikelola secara otomatis.

---

## 🔒 1. Perilaku Otomatis Antara Development vs Production

Sistem styling GKPI telah dikonfigurasi dengan deteksi lingkungan (*environment detection*):

| Lingkungan (*Environment*) | Kondisi | Perilaku Widget `StyleSwitcher` |
| :--- | :--- | :--- |
| **Mode Development** | Menjalankan `npm run dev` | **MUNCUL** di pojok kanan bawah untuk kemudahan pengujian visual secara *real-time*. |
| **Mode Production** | `npm run build` / Deployment (Vercel, VPS, dll.) | **TIDAK MUNCUL SAMA SEKALI** (otomatis di-*strip* dari kode & DOM produksi demi keamanan dan kerapian tampilan jemaat). |

---

## 🚀 2. Cara Memilih Style untuk Mode Production / Deployment

Ada **2 cara praktis** untuk menentukan style mana yang ingin Anda terapkan saat website di-deploy:

### Cara 1: Menggunakan Environment Variable (Sangat Direkomendasikan ⭐)
Cara ini adalah standar industri terbaik karena Anda **tidak perlu mengubah atau men-commit ulang kode sumber**. Anda cukup mengatur variabel lingkungan di server hosting.

Nama variabel:
```bash
NEXT_PUBLIC_APP_STYLE
```

Pilihan nilai:
* `0` = **Warm Minimalist** (Standar Resmi GKPI Kartini - Default)
* `1` = **Elegant Traditional** (Nuansa Sakral Katedral & Emas Antik)
* `2` = **Modern Classic** (Nuansa Editorial Luxury & Bento Grid)

#### Contoh Penerapan di Berbagai Platform Hosting:

#### A. Jika Deploy di Vercel:
1. Buka dashboard proyek Anda di **Vercel**.
2. Masuk ke menu **Settings** > **Environment Variables**.
3. Tambahkan variabel baru:
   * **Key**: `NEXT_PUBLIC_APP_STYLE`
   * **Value**: `0`, `1`, atau `2`
   * **Environment**: Centang *Production* dan *Preview*.
4. Klik **Save**, lalu lakukan *Redeploy*. Tampilan website akan langsung menggunakan style yang Anda pilih.

#### B. Jika Deploy di Server VPS / Docker / PM2:
Buat atau edit file `.env.production` di root proyek:
```env
NEXT_PUBLIC_APP_STYLE=1
```
Lalu jalankan build produksi:
```bash
npm run build
npm run start
```

---

### Cara 2: Mengatur Langsung di Kode Sumber (`src/app/layout.tsx`)
Jika Anda tidak menggunakan environment variable, website akan menggunakan nilai **`FALLBACK_STYLE`** yang tertulis di dalam kode sumber:

Buka file [src/app/layout.tsx](file:///d:/kerja/gkpi/gkpi/src/app/layout.tsx), cari baris 25:
```tsx
// Pengaturan style default jika tidak ada environment variable:
// "0" = Warm Minimalist (Default Resmi GKPI - AGENTS.md)
// "1" = Elegant Traditional (Sacred Cathedral Heritage)
// "2" = Modern Classic (Editorial Luxury)
const FALLBACK_STYLE: "0" | "1" | "2" = "0"; // <-- Ganti ke "1" atau "2" jika diinginkan
```
*   Ubah `"0"` menjadi `"1"` untuk Elegant Traditional.
*   Ubah `"0"` menjadi `"2"` untuk Modern Classic.
*   Biarkan `"0"` untuk tetap memakai Warm Minimalist default resmi.

---

## 📋 3. Rangkuman Karakteristik Style

| Kode | Nama Style | Karakteristik Utama | Cocok Untuk |
| :---: | :--- | :--- | :--- |
| **`0`** | **Warm Minimalist** *(Standar Resmi)* | Bersih, kontras tinggi, ramah jemaat lansia/senior (50+), merah khas GKPI (`#d8261c`), kartu putih di atas abu-abu lembut (`bg-gray-50`). | **Tampilan Resmi Publik Harian** |
| **`1`** | **Elegant Traditional** | Ornamen fleuron liturgis (`✦ — † — ✦`), bingkai ganda emas antik (`#c59b27`), marun katedral (`#7f1d1d`), angka Romawi, gaya lukisan museum. | **Masa Perayaan Liturgis Sakral** (Paskah, Natal, Ulang Tahun Gereja) |
| **`2`** | **Modern Classic** | Layout Bento Grid asimetris (2x2), kartu monolitik putih berujung squircle (`rounded-2xl`), garis *hairline* ultra-tipis, pil kaca mengambang. | **Tampilan Kontemporer Dinamis** (Menjangkau Milenial & Gen-Z) |

---

## 🧪 4. Cara Menguji Tampilan Produksi Secara Lokal

Sebelum Anda mempublikasikan (*publish*) ke server sungguhan, Anda bisa menguji apakah tombol switcher benar-benar hilang di laptop Anda sendiri:

1. **Jalankan Build Produksi:**
   ```bash
   npm run build
   ```
2. **Jalankan Server Produksi:**
   ```bash
   npm run start
   ```
3. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.
4. Perhatikan:
   * Widget switcher di pojok kanan bawah **pasti hilang total**.
   * Website menampilkan tema sesuai nilai `NEXT_PUBLIC_APP_STYLE` atau `FALLBACK_STYLE` yang Anda tentukan.
