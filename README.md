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

---

## 🎴 BLUEPRINT & RESEP PROYEK (PROJECT RECIPE CARD)
> **PANDUAN LENGKAP & REPRODUKSI PROYEK 100% IDENTIK**  
> Bagian card ini menyediakan prompt AI terstruktur (termasuk metode *pull* langsung dari GitHub), potongan kode penting (*critical snippets*), inventaris aset, dan panduan teknis langkah demi langkah.

---

</div>

### 🤖 1. Prompt untuk Membuat Project Ini

Pilih salah satu metode di bawah ini sesuai kebutuhan Anda:

#### ⚡ Opsi A: Prompt Mengambil / Pull Langsung dari GitHub (Rekomendasi Cepat)

Salin prompt di bawah ini ke AI Coding Agent Anda (seperti Antigravity, Claude Code, Cursor, atau ChatGPT) agar agen langsung mengambil kode sumber lengkap dari GitHub:

```markdown
Tolong lakukan clone dan setup project portofolio interaktif sinematik Gilang langsung dari repositori GitHub resminya:

- Repository: https://github.com/itslangz/Portofolio.git
- Branch: main

Instruksi Tugas untuk Agent:
1. Periksa direktori kerja. Jika belum di-clone, jalankan perintah:
   git clone https://github.com/itslangz/Portofolio.git .
   (Atau jika sudah di dalam repo lokal, jalankan `git pull origin main` untuk sinkronisasi kode terbaru).
2. Pasang seluruh dependensi proyek dengan menjalankan:
   npm install
3. Kompilasi bundle aplikasi menggunakan esbuild:
   npm run build
4. Jalankan script verifikasi kelengkapan aset:
   npm run check
5. Aktifkan local development server dengan:
   npm start
   (Buka http://localhost:4173 untuk memastikan tampilan dan interaksi berjalan mulus).
6. Pertahankan seluruh arsitektur yang ada:
   - React 19 + Framer Motion 12 + Lucide React
   - Animasi 3D Wave Ribbon Mesh Canvas pada src/app.jsx
   - Modal interaktif Mockup Browser Chrome dengan Live Preview Iframe & Screenshot toggle
   - Sistem auto-marquee brand partners dengan kendali jeda/putar
   - Direct WhatsApp Brief Generator pada form kontak
```

---

#### 🛠️ Opsi B: Master Prompt Pembuatan Ulang dari Nol + Potongan Kode Kunci

Jika ingin menginstruksikan AI untuk membangun ulang portofolio ini dari nol namun menghasilkan tampilan, animasi, dan fungsi yang **persis sama**, gunakan prompt komprehensif berikut yang telah dilengkapi potongan kode esensial:

````markdown
Buatkan sebuah website portofolio interaktif bertema "Cinematic Brutalist Dark" untuk Software Engineer & UI/UX Designer bernama Gilang Ryan Eka Putra.

Website ini harus memiliki hasil yang PERSIS SAMA dengan spesifikasi arsitektur dan potongan kode kunci berikut:

1. SPESIFIKASI UMUM & TEMA DESAIN:
- Palet Warna: Dark background (#090909), Panel card (#101010), Aksen Gold/Chartreuse (#f5c518 / #c3dc0f), Border line (#292323 / #4a3e1a), Teks putih krem (#f2efeb), Muted text (#a09c9a).
- Noise Overlay: Gunakan data-uri SVG turbulence berulang sebagai pseudo-element body::after dengan pointer-events: none dan opacity: 0.035.
- Tipografi: Anton (display brutalist), Manrope (body text), dan Caveat (handwriting cursive).
- Tech Stack: React 19, Framer Motion 12, Lucide React, esbuild bundler, HTML5 Canvas 2D math.

2. POTONGAN KODE KUNCI (WAJIB DIIMPLEMENTASIKAN PERSIS):

A. Formula Gelombang 3D Ribbon Mesh Canvas (src/app.jsx - WaveCanvas):
```javascript
// Konfigurasi Gelombang Jaring
const config = {
  lineCount: 45,          // Jumlah garis jaring
  pointsPerLine: 120,     // Kehalusan lengkungan garis
  speed: 0.015,           // Kecepatan gerak gelombang
  color: '195, 220, 15',  // Warna RGB (Kuning-Hijau / Chartreuse)
  maxOpacity: 0.38        // Ketebalan/transparansi maksimal garis
};

// Formula Puntiran 3D (Ribbon Mesh) & Tracking Kursor Mouse:
for (let i = 0; i < config.lineCount; i++) {
  ctx.beginPath();
  const normIndex = i / config.lineCount;
  const alpha = Math.sin(normIndex * Math.PI) * config.maxOpacity;
  ctx.strokeStyle = `rgba(${config.color}, ${alpha.toFixed(3)})`;
  ctx.lineWidth = 0.85;

  for (let j = 0; j <= config.pointsPerLine; j++) {
    const progress = j / config.pointsPerLine;
    const baseX = progress * width;
    const baseY = height * 0.88 - (progress * height * 0.48);

    const wave1 = Math.sin(progress * 6.5 - time + i * 0.055) * 115;
    const wave2 = Math.cos(progress * 3.5 + time * 0.6 + i * 0.085) * 65;
    const spreadX = Math.cos(progress * 5 - time * 0.8) * (i * 2.2);
    const spreadY = Math.sin(progress * 4 + i * 0.05) * (i * 3.4);
    const mousePull = (mouse.y - 0.5) * 70 * Math.sin(progress * Math.PI);

    const x = baseX + spreadX;
    const y = baseY + wave1 + wave2 + spreadY + mousePull;

    if (j === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}
```

B. Modal Interaktif Mockup Browser Chrome (Dual Mode: Live Preview & Screenshot):
```jsx
function ProjectDialog({ project, onClose }) {
  const liveUrl = project.link || project.url || project.media;
  const [viewMode, setViewMode] = useState(liveUrl ? 'live' : 'still');
  const [loading, setLoading] = useState(true);

  return (
    <motion.div className="dialog-backdrop" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="project-dialog" role="dialog" aria-modal="true">
        <div className="dialog-heading">
          <span className="eyebrow">{project.category} {project.year && ` / ${project.year}`}</span>
          <button onClick={onClose} className="icon-button"><X/></button>
        </div>

        {liveUrl && (
          <div className="browser-chrome">
            <div className="browser-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="browser-address">
              <span className="browser-lock">🔒</span>
              <span className="browser-url">{liveUrl}</span>
            </div>
            <div className="browser-actions">
              {project.image && (
                <div className="browser-tabs">
                  <button className={`browser-tab-btn ${viewMode === 'live' ? 'active' : ''}`} onClick={() => setViewMode('live')}>Live Preview</button>
                  <button className={`browser-tab-btn ${viewMode === 'still' ? 'active' : ''}`} onClick={() => setViewMode('still')}>Screenshot</button>
                </div>
              )}
              <a className="browser-btn" href={liveUrl} target="_blank" rel="noopener noreferrer">Buka Tab Baru <ExternalLink size={12}/></a>
            </div>
          </div>
        )}

        {viewMode === 'live' && liveUrl ? (
          <div className="dialog-media browser-frame">
            {loading && <div className="media-loading"><span className="loading-ring"/><p>Memuat live preview website…</p></div>}
            <iframe src={liveUrl} title={project.title} loading="lazy" onLoad={() => setLoading(false)} sandbox="allow-scripts allow-same-origin allow-forms allow-popups"/>
          </div>
        ) : (
          <div className="dialog-media still">
            <MediaImage src={project.image} alt={project.title} priority />
          </div>
        )}

        <div className="dialog-description">
          <div>
            <h2>{project.title}</h2>
            {project.role && <span className="accent">{project.role}</span>}
            <p>{project.description}</p>
          </div>
          {liveUrl && <a className="solid-button" href={liveUrl} target="_blank" rel="noopener noreferrer">Kunjungi Website <ArrowUpRight size={16}/></a>}
        </div>
      </div>
    </motion.div>
  );
}
```

C. Tombol Fisika Magnetik (Magnetic Button dengan useSpring):
```jsx
function Magnetic({ children, className = '', ...props }) {
  const enabled = useContext(MotionContext);
  const x = useSpring(0, { stiffness: 220, damping: 20 });
  const y = useSpring(0, { stiffness: 220, damping: 20 });
  return (
    <motion.a className={className} style={{ x, y }} onPointerMove={e => {
      if (!enabled || e.pointerType !== 'mouse') return;
      const r = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - r.left - r.width / 2) * 0.12);
      y.set((e.clientY - r.top - r.height / 2) * 0.2);
    }} onPointerLeave={() => { x.set(0); y.set(0); }} {...props}>
      {children}
    </motion.a>
  );
}
```

D. WhatsApp Project Brief Auto-Generator:
```jsx
const send = e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const text = `Halo Gilang, saya ${data.get('name')}.\n\nJenis proyek: ${data.get('type')}\n${data.get('message')}`;
  window.open(`https://wa.me/6289674547361?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  setSent(true);
};
```

E. Skrip Bundler Cepat esbuild (scripts/build.mjs):
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
```

3. FITUR UTAMA LAINNYA:
- Parallax Hero dengan scroll-driven scale & Y offset (`scrollYProgress`).
- Filter & Realtime Search Bar untuk galeri portofolio (GameStore, Ekskul Mutiara Ilmu, POS Pagulung, BOLATA BPS Bone).
- Marquee logo partner tak terbatas dengan kontrol Pause/Play dan tombol expand "Lihat Semua" ke format grid.
- Section About dengan roadmap alur kerja 5 tahap (The Idea, The Plan, The Craft, The Polish, The Deploy), tag keahlian, dan deretan ikon software.
- Accordion riwayat karier (BPS Bone & ZeeTech).
- Motion toggle switch yang terhubung dengan `localStorage` dan menghormati `prefers-reduced-motion`.
````

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

