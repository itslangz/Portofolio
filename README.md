# 🎬 GILANG — Cinematic Portfolio (v2.0)
> **Architect. Code. Deploy. Repeat.**  
> Portofolio interaktif sinematik berbasis modern web stack untuk Software Engineer & UI/UX Designer.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![esbuild](https://img.shields.io/badge/Bundler-esbuild-FFCF00?style=for-the-badge&logo=esbuild&logoColor=black)](https://esbuild.github.io/)
[![Lucide](https://img.shields.io/badge/Icons-Lucide_React-F5C518?style=for-the-badge&logo=lucide&logoColor=black)](https://lucide.dev/)
[![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)](#)

---

## 📌 Tentang Project

**GILANG Cinematic Portfolio** adalah website portofolio interaktif berperforma tinggi dengan tema *editorial brutalist* gelap (*cinematic dark aesthetic*). Menggabungkan kehalusan gerak **Framer Motion**, simulasi fisika jaring gelombang pita 3D murni pada **HTML5 Canvas**, serta sistem modal interaktif inovatif dengan mockup **Browser Chrome** (mendukung *Live Preview* iframe & *Screenshot mode*).

Portofolio ini dirancang secara khusus untuk memamerkan proyek rekayasa perangkat lunak (*Web & Mobile Development*) dan desain pengalaman pengguna (*UI/UX Design*) dengan navigasi yang cepat, mulus, dan berorientasi aksesibilitas tinggi.

---

## ✨ Fitur-Fitur Unggulan

### 1. 🎥 Hero Sinematik Parallax
- **Typography Editorial Eksklusif**: Menggunakan perpaduan font *display* bertipe brutalist (`Anton`), tipografi modern (`Manrope`), serta aksen tulisan tangan (`Caveat`).
- **Scroll-Driven Parallax**: Foto portrait dan tipografi bergerak secara independen berdasarkan kedalaman scroll pengguna (`scrollYProgress`).
- **Realtime Status Indicator**: Badge ketersediaan proyek (*"AVAILABLE FOR COLLABORATION"*) dan pin lokasi (*Bone, Indonesia*).
- **Magnetic CTA Button**: Tombol interaktif dengan pegas fisika (*spring dynamics*) yang merespons tarikan kursor mouse.

### 2. 🌊 Interactive 3D Wave Ribbon Mesh Canvas
- **Pure Canvas Math (Tanpa Lib 3D Berat)**: Jaring gelombang pita 3D yang dirender secara real-time pada resolusi tinggi menggunakan konteks 2D HTML5 Canvas.
- **Interaksi Mouse Halus**: Gelombang bereaksi dinamis terhadap pergerakan kursor mouse pengguna menggunakan teknik *linear interpolation (lerping)*.
- **Adaptif DPI & Resize**: Terhubung dengan `ResizeObserver` dan memperhitungkan `devicePixelRatio` layar retina.

### 3. 💻 Inovatif Browser Chrome Preview Modal
- **Mockup Browser Lengkap**: Setiap proyek yang diklik akan membuka jendela modal interaktif bergaya jendela browser modern (lengkap dengan 3 traffic light dots, ikon gembok SSL, dan address bar).
- **Dual View Mode**: Pengguna dapat beralih antara:
  - **Live Preview Mode**: Memuat langsung website secara live di dalam `iframe` sandbox yang aman.
  - **Screenshot Mode**: Pratinjau gambar still beresolusi tinggi dengan filter kontras optimal.
- **Direct Navigation**: Tombol cepat untuk membuka website proyek langsung di tab baru.

### 4. 🔍 Filter Kategori & Pencarian Realtime
- **Dynamic Category Filter**: Filter instan berdasarkan kategori proyek (*Semua*, *Websites*).
- **Instant Search Engine**: Kolom pencarian instan yang memfilter proyek berdasarkan judul, kategori, maupun peran (*role*) secara real-time.
- **Smooth Layout Transitions**: Grid proyek tertata ulang otomatis dengan animasi tata letak (*layout animations*) dari Framer Motion.

### 5. 🏢 Marquee Logo Brand & Kemitraan
- **Infinite Auto-Scroll**: Deretan logo brand dan institusi yang berjalan halus menggunakan `useAnimationFrame`.
- **Interaksi Kendali**: Kontrol jeda/putar (*Pause/Play*), navigasi geser manual (*Previous/Next*), serta tombol ekspansi **"Lihat Semua"** menjadi grid penuh (*Full Grid View*).

### 6. 📐 Behind The Screens & 5-Step Process
- **Pendidikan & Toolkit Kreatif**: Informasi latar belakang pendidikan (SMKN 1 Bone & Universitas Dipa Makassar), daftar tag keahlian, dan ikon software yang dikuasai.
- **Process Roadmap**: Visualisasi 5 tahap alur kerja rekayasa perangkat lunak:
  1. `01 / THE IDEA` — Identifikasi masalah & target pengguna.
  2. `02 / THE PLAN` — Arsitektur sistem, database, dan wireframe UI/UX.
  3. `03 / THE CRAFT` — Coding bersih, modular, dan responsif.
  4. `04 / THE POLISH` — Pengujian performa, aksesibilitas, dan sentuhan visual.
  5. `05 / THE DEPLOY` — Deployment ke production dan serah terima sistem.

### 7. 💼 The Journey (Accordion Pengalaman Kerja)
- Riwayat karier profesional interaktif (Software Engineer di BPS Kabupaten Bone & UI/UX Designer di ZeeTech) dengan transisi buka-tutup halus.
- Terintegrasi harmonis dengan latar belakang gelombang ribbon canvas di baliknya.

### 8. 💬 Direct WhatsApp Project Brief Generator
- Formulir cerdas untuk calon klien menulis nama, jenis proyek (*Web Dev, Mobile App Android, UI/UX Design, Back Office*), dan rincian ide.
- Otomatis mengubah form input menjadi pesan WhatsApp terstruktur dan langsung membuka tautan `https://wa.me/` resmi.

### 9. ⚡ Aksesibilitas & Performa Tinggi
- **Reading Progress Bar**: Indikator persentase membaca di puncak halaman.
- **Motion Toggle Switch**: Tombol on/off global untuk animasi, tersimpan otomatis di `localStorage` dan menghormati setelan OS `prefers-reduced-motion`.
- **Keyboard Navigation & Trap Focus**: Menutup modal dengan tombol `Escape` dan navigasi `Tab` terkunci di dalam dialog aktif.
- **Ultra-Fast Bundling**: Menggunakan **esbuild** murni tanpa overhead webpack/bundler lambat, menghasilkan output bundle yang sangat ramping dan cepat dimuat.

---

<br/>

<!-- ============================================================ -->
<!--                    PROJECT BLUEPRINT CARD                    -->
<!-- ============================================================ -->

<div align="center">
  <table width="100%" style="border: 2px solid #f5c518; border-radius: 12px; background: #11100e; padding: 20px;">
    <tr>
      <td>

<h2 align="center">🎴 BLUEPRINT & RESEP PROYEK (PROJECT RECIPE CARD)</h2>
<p align="center"><em>Panduan lengkap, prompt AI, aset, dan langkah persiapan untuk mereplikasi proyek ini dari awal.</em></p>

---

### 🤖 1. Prompt untuk Membuat Project Ini

> Salin dan tempel prompt di bawah ini ke AI Coding Assistant (seperti Claude, ChatGPT, Gemini, atau Antigravity) untuk membuat ulang website portofolio sinematik ini:

```markdown
Buatkan sebuah website portofolio interaktif bertema "Cinematic Brutalist Dark" untuk seorang Software Engineer & UI/UX Designer bernama Gilang Ryan Eka Putra.

Spesifikasi & Kebutuhan Teknis:
1. Tech Stack:
   - React 19 + ReactDOM
   - Framer Motion (untuk transisi, layout animations, dan scroll-driven parallax)
   - Lucide React (untuk ikon antarmuka)
   - esbuild sebagai bundler super cepat (bundle, minify, sourcemap ke Asset/dist/)
   - HTML5 Canvas murni untuk animasi visual interaktif
   - CSS3 modern murni dengan CSS Variables, responsif dari layar smartphone (320px) hingga layar lebar (1800px+)

2. Desain & Estetika:
   - Background tema gelap (#090909) dengan aksen warna emas/kuning-chartreuse (#f5c518 / #c3dc0f) dan panel (#101010).
   - Tekstur noise overlay halus di seluruh halaman menggunakan data-uri SVG turbulence.
   - Tipografi: Anton (heading display besar sinematik), Manrope (teks isi yang bersih), dan Caveat (aksen handwriting aksentuasi).

3. Fitur yang Harus Dibuat:
   - Sticky Header: Wordmark brand, navigasi desktop & drawer mobile responsif, tombol toggle on/off motion (tersimpan di localStorage), serta quick link kontak.
   - Reading Progress Bar: Bar penanda scroll di bagian paling atas layar.
   - Hero Section: Parallax scroll bertingkat, cut-out foto portrait transparan, teks besar "PORTOFOLIO", status badge ketersediaan kolaborasi, lokasi, dan magnetic button.
   - Interactive 3D Wave Ribbon Canvas: Animasi jaring gelombang pita sinusoidal 3D pada HTML5 Canvas yang merespons tarikan kursor mouse (lerping).
   - Portfolio Showcase:
     * Data proyek dimuat dari file JSON terpisah (projects.json).
     * Filter kategori dan live search bar instan berdasarkan nama dan kata kunci.
     * Modal dialog interaktif dengan frame "Mockup Browser Chrome" (dots tombol, address bar).
     * Tab switch di dalam modal: "Live Preview" (iframe interaktif) dan "Screenshot" (gambar preview).
   - Marquee Brand Strip: Deretan logo mitra yang berjalan otomatis tak terbatas dengan tombol Pause/Play, geser manual, dan opsi "Lihat Semua" ke format grid.
   - About & Creative Roadmap: Riwayat pendidikan terstruktur, badge keahlian, ikon software/tools yang digunakan, quote sinematik, dan 5 tahap alur kerja rekayasa perangkat lunak (The Idea -> The Plan -> The Craft -> The Polish -> The Deploy).
   - Experience Accordion: Daftar riwayat kerja yang dapat dibuka/tutup dengan animasi spring Framer Motion.
   - Contact & WhatsApp Brief Form: Kontak direct (Email, GitHub, Instagram, Phone) dan form ringkasan proyek yang otomatis menyusun format pesan lalu membukanya langsung di WhatsApp Web/App.
   - Aksesibilitas: Mendukung prefers-reduced-motion, navigasi keyboard (Esc untuk menutup modal, trap focus tab), skip-to-content link, dan teks alt media.

4. Arsitektur File:
   - index.html (entry HTML)
   - src/app.jsx (komponen React utama)
   - src/styles.css (desain styling responsif)
   - src/data/projects.json (data karya)
   - src/data/brands.json (data brand partner)
   - scripts/build.mjs (skrip build esbuild)
   - scripts/dev.mjs (skrip watch & reload otomatis)
   - live_preview.js (local static server sederhana tanpa library eksternal)
   - scripts/check.mjs (skrip verifikasi integritas aset & output build)
```

---

### 🎨 2. Aset yang Harus Dipersiapkan

Pastikan seluruh aset berikut telah disiapkan di dalam folder `Asset/` dan `src/data/`:

| Kategori Aset | Lokasi / File | Deskripsi & Spesifikasi |
| :--- | :--- | :--- |
| **Foto Portrait Utama** | `Asset/img/gueh.png` | Foto diri beresolusi tinggi (min. 1024x1536px) berlatar belakang transparan (cutout PNG) untuk efek kedalaman hero. |
| **Preview Mockup Proyek** | `Asset/img/gamestore-preview.png`<br/>`Asset/img/mutiarailmu-preview.png`<br/>`Asset/img/pagulung-preview.png`<br/>`Asset/img/bolata-preview.png` | Screenshot/mockup aplikasi (resolusi 16:9 atau 1920x1080px) untuk kartu galeri dan pratinjau modal. |
| **Ikon Software & Tools (SVG)** | `Asset/svg/antigravity.svg`<br/>`Asset/svg/vscode.svg`<br/>`Asset/svg/claude.svg`<br/>`Asset/svg/gemini.svg`<br/>`Asset/svg/stitch.svg`<br/>`Asset/svg/androidstudio.svg`<br/>`Asset/svg/unity.svg` | Ikon vektor berformat SVG dengan ukuran viewBox standar (24x24 atau 32x32) untuk section *Software & Tools*. |
| **Logo Mitra & Brand (PNG/SVG)** | `Asset/svg/brand/*.png` | Logo instansi dan klien dengan latar belakang transparan (misal Diskominfo, DPMPTSP, Magma, Unwir, dll). |
| **Favicon** | `Asset/img/favicon.svg` | Ikon browser modern berformat vektor SVG. |
| **Google Fonts** | CDN via `index.html` | Font keluarga `Anton` (Display), `Manrope` (Sans), dan `Caveat` (Cursive/Handwriting). |
| **Data Proyek & Brand (JSON)** | `src/data/projects.json`<br/>`src/data/brands.json` | File data terstruktur memuat judul, deskripsi, link live, tahun, peran, dan nama file aset. |

---

### 🛠️ 3. Langkah-Langkah yang Harus Dipersiapkan (Setup Guide)

Berikut adalah tahapan lengkap mempersiapkan dan menjalankan proyek dari nol:

#### Langkah 1: Siapkan Lingkungan Kerja (Prerequisites)
Pastikan telah menginstal:
- **Node.js** (Versi 18 LTS atau yang lebih baru)
- **npm** (Bawaan Node.js)
- **Git** (Untuk version control dan deployment)

#### Langkah 2: Inisialisasi Proyek & Struktur Folder
Buat folder proyek baru dan buat struktur direktori berikut:
```bash
mkdir Portofolio && cd Portofolio
mkdir -p Asset/dist Asset/img Asset/svg/brand src/data scripts
```

#### Langkah 3: Inisialisasi `package.json` & Instalasi Dependensi
Jalankan perintah instalasi dependensi utama dan devDependencies:
```bash
# Dependensi aplikasi
npm install react@^19.2.0 react-dom@^19.2.0 framer-motion@^12.23.0 lucide-react@^0.468.0

# Dev dependencies untuk bundler super cepat
npm install -D esbuild@^0.25.0
```

#### Langkah 4: Konfigurasi Skrip Bundling (`scripts/build.mjs`)
Buat skrip build menggunakan esbuild di `scripts/build.mjs`:
```javascript
import { build } from 'esbuild';

await build({
  entryPoints: ['src/app.jsx'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: 'Asset/dist/app.js',
  loader: { '.jsx': 'jsx' },
  jsx: 'automatic',
  target: ['es2020'],
  define: { 'process.env.NODE_ENV': '"production"' }
});

console.log('Portfolio built: index.html + Asset/dist/app.js + Asset/dist/app.css');
```

Tambahkan scripts di `package.json`:
```json
"scripts": {
  "build": "node scripts/build.mjs",
  "dev": "node scripts/dev.mjs",
  "start": "node live_preview.js",
  "check": "node scripts/check.mjs"
}
```

#### Langkah 5: Buat Kode Sumber & Gaya Desain
1. Salin file data proyek ke `src/data/projects.json`.
2. Buat komponen interaktif utama di `src/app.jsx`.
3. Tulis aturan styling responsif di `src/styles.css`.
4. Hubungkan output bundle di `index.html`.

#### Langkah 6: Jalankan Verifikasi & Build Proyek
```bash
# Build bundel javascript dan css ke Asset/dist/
npm run build

# Periksa kelengkapan aset & hasil build
npm run check
```

#### Langkah 7: Jalankan Local Development Server
```bash
npm start
# Server aktif di: http://localhost:4173
```

      </td>
    </tr>
  </table>
</div>

<!-- ============================================================ -->
<!--                 AKHIR PROJECT BLUEPRINT CARD                 -->
<!-- ============================================================ -->

<br/>

---

## 📂 Struktur Direktori Proyek

```text
Portofolio/
├── Asset/
│   ├── cv/                         # Dokumen Curriculum Vitae (PDF)
│   ├── dist/                       # Output build dari esbuild (bundle production)
│   │   ├── app.css                 # Bundled CSS
│   │   └── app.js                  # Bundled JavaScript
│   ├── img/                        # Aset foto & screenshot pratinjau proyek
│   │   ├── gueh.png                # Foto portrait cutout transparan
│   │   ├── bolata-preview.png      # Pratinjau Back Office BPS Bone
│   │   ├── gamestore-preview.png   # Pratinjau GameStore
│   │   ├── mutiarailmu-preview.png # Pratinjau SI Ekskul Mutiara Ilmu
│   │   ├── pagulung-preview.png    # Pratinjau POS & Stok Pagulung
│   │   └── favicon.svg             # Favicon situs
│   └── svg/                        # Vektor ikon software & brand partners
│       └── brand/                  # Logo instansi & mitra kolaborasi
├── scripts/
│   ├── build.mjs                   # Skrip kompilasi production menggunakan esbuild
│   ├── check.mjs                   # Skrip pengujian kelengkapan aset & file penting
│   ├── dev.mjs                     # Skrip watch mode untuk pengembangan lokal
│   └── download_assets.mjs         # Skrip penolong unduh aset otomatis
├── src/
│   ├── data/
│   │   ├── brands.json             # Data daftar logo brand/institusi
│   │   └── projects.json           # Data portofolio karya (link, deskripsi, gambar)
│   ├── app.jsx                     # Komponen utama React & interaksi UI
│   └── styles.css                  # Berkas CSS styling global & responsif
├── index.html                      # Entry HTML utama aplikasi
├── live_preview.js                 # Server HTTP node.js ringan untuk testing lokal
├── package.json                    # Metadata proyek & daftar dependensi
└── README.md                       # Dokumentasi lengkap proyek
```

---

## 🚀 Panduan Memulai Cepat (Quick Start)

### 1. Klon Repositori
```bash
git clone git@github.com:itslangz/Portofolio.git
cd Portofolio
```

### 2. Pasang Dependensi
```bash
npm install
```

### 3. Jalankan Mode Pengembangan (Dev Mode)
```bash
# Menjalankan build watcher otomatis
npm run dev

# Di terminal terpisah, jalankan server pratinjau lokal
npm start
```
Buka peramban di `http://localhost:4173` untuk melihat tampilan portofolio.

### 4. Build untuk Production
```bash
npm run build
```
File siap saji akan dibuat di folder `Asset/dist/app.js` dan `Asset/dist/app.css`.

---

## 🌐 Deployment

Proyek ini telah dikonfigurasi dan dapat di-*deploy* secara instan ke berbagai penyedia hosting statis modern:

- **Vercel**: Mendukung file konfigurasi bawaan `vercel.json` dan `.vercelignore`.
- **GitHub Pages**: Cukup arahkan deployment branch `main` ke root directory `/`.
- **Netlify / Cloudflare Pages**: Jalankan build command `npm run build` dengan publish directory `./`.

---

## 👤 Profil & Kontak Pengembang

**Gilang Ryan Eka Putra**  
*Software Engineer & UI/UX Designer*  
📍 Bone, Sulawesi Selatan, Indonesia

- 📧 **Email**: [gilangryan.ken@gmail.com](mailto:gilangryan.ken@gmail.com)
- 🐙 **GitHub**: [@itslangz](https://github.com/itslangz)
- 📸 **Instagram**: [@laaanggz_](https://www.instagram.com/laaanggz_/)
- 💬 **WhatsApp**: [+62 896-7454-7361](https://wa.me/6289674547361)

---

<p align="center">
  <sub>Dibuat dengan dedikasi untuk rekayasa perangkat lunak dan desain antarmuka berkualitas tinggi. © 2026 GILANG.</sub>
</p>
