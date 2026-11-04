import React, { useState, useEffect, useRef, useContext, createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence, MotionConfig, useScroll, useTransform, useSpring, useReducedMotion, useAnimationFrame, useInView } from 'framer-motion';
import { ArrowUpRight, ArrowDown, ArrowRight, Play, X, Menu, Mail, Phone, MapPin, Instagram, Github, Pause, Search, Plus, Minus, ChevronLeft, ChevronRight, ExternalLink, Download } from 'lucide-react';
import archive from './data/projects.json';
import brands from './data/brands.json';
import './styles.css';

const MotionContext = createContext(true);
const EASE = [0.22, 1, 0.36, 1];
const categories = ['Semua', 'Websites'];
const featured = archive;
const experiences = [
  {
    date: '2026 · SEKARANG',
    title: 'Software Engineer',
    place: 'BPS Kabupaten Bone',
    text: 'Mengembangkan dan memelihara aplikasi web serta integrasi layanan digital untuk optimalisasi pengelolaan data dan pelayanan publik.'
  },
  {
    date: '2025 – 2026',
    title: 'UI/UX Designer',
    place: 'ZeeTech',
    text: 'Merancang arsitektur informasi, wireframe, design system, dan prototipe antarmuka interaktif yang berfokus pada kenyamanan pengguna.'
  },
];
const software = [
  { name: 'Antigravity', icon: './Asset/svg/antigravity.svg' },
  { name: 'VS Code', icon: './Asset/svg/vscode.svg' },
  { name: 'Claude AI', icon: './Asset/svg/claude.svg' },
  { name: 'Gemini', icon: './Asset/svg/gemini.svg' },
  { name: 'Stitch AI', icon: './Asset/svg/stitch.svg' },
  { name: 'Android Studio', icon: './Asset/svg/androidstudio.svg' },
  { name: 'Unity', icon: './Asset/svg/unity.svg' }
];
const certificates = [];
const awards = [];

function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const enabled = useContext(MotionContext);
  const Component = motion[as];
  return <Component className={className} initial={enabled ? { opacity: 0, y: 32 } : false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.12 }} transition={{ duration: enabled ? 0.75 : 0, delay, ease: EASE }}>{children}</Component>;
}

function MediaImage({ src, alt, className = '', priority = false, ...props }) {
  const [state, setState] = useState('loading');
  const imgRef = useRef(null);
  useEffect(() => {
    const img = imgRef.current;
    setState(img?.complete ? (img.naturalWidth ? 'loaded' : 'error') : 'loading');
  }, [src]);
  return <span className={`media-image ${state} ${className}`}>
    {state === 'error' && <span className="image-fallback"><span className="display">G.</span><span>Pratinjau tidak tersedia</span></span>}
    <img ref={imgRef} src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} width="960" height="600" onLoad={() => setState('loaded')} onError={() => setState('error')} {...props} />
  </span>;
}

function Magnetic({ children, className = '', ...props }) {
  const enabled = useContext(MotionContext);
  const x = useSpring(0, { stiffness: 220, damping: 20 });
  const y = useSpring(0, { stiffness: 220, damping: 20 });
  return <motion.a className={className} style={{ x, y }} onPointerMove={e => {
    if (!enabled || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.12); y.set((e.clientY - r.top - r.height / 2) * 0.2);
  }} onPointerLeave={() => { x.set(0); y.set(0); }} {...props}>{children}</motion.a>;
}

function Header({ enabled, onToggle }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: '-15% 0px -65% 0px' });
    document.querySelectorAll('main > section[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
  }, []);
  return <header className="site-header">
    <a className="wordmark" href="#home" aria-label="Gilang, beranda">GILANG<span>®</span></a>
    <nav className="desktop-nav" aria-label="Navigasi utama">{[['portfolio', 'Karya'], ['about', 'Tentang'], ['experience', 'Perjalanan'], ['contact', 'Kontak']].map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>)}</nav>
    <div className="header-actions"><button className="motion-toggle" onClick={onToggle} aria-label={enabled ? 'Jeda animasi' : 'Aktifkan animasi'} aria-pressed={!enabled}>{enabled ? <Pause size={13} /> : <Play size={13} />}<span>Motion {enabled ? 'on' : 'off'}</span></button><a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={16} /></a><button className="menu-toggle icon-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Tutup menu' : 'Buka menu'}>{open ? <X /> : <Menu />}</button></div>
    <AnimatePresence>{open && <motion.nav id="mobile-menu" className="mobile-menu" aria-label="Navigasi mobile" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
      {[['home', 'Beranda'], ['portfolio', 'Karya'], ['about', 'Tentang'], ['experience', 'Perjalanan'], ['contact', 'Kontak']].map(([id, label], i) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}<ArrowUpRight size={18} /></a>)}
      <a href="./Asset/cv/Gilang_Ryan_Eka_Putra_CV.pdf" download="CV_Gilang_Ryan_Eka_Putra.pdf" onClick={() => setOpen(false)}><span>06</span>Unduh CV<Download size={18} /></a>
    </motion.nav>}</AnimatePresence>
  </header>;
}

function Hero({ onProject }) {
  const ref = useRef(null);
  const enabled = useContext(MotionContext);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 85]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -55]);
  return <section id="home" className="hero" ref={ref}>
    <div className="hero-top"><span>SOFTWARE ENGINEER /<br/><span className="muted">UI/UX DESIGNER</span></span><span className="availability"><i />AVAILABLE FOR COLLABORATION</span></div>
    <motion.div className="hero-title display" aria-hidden="true" style={enabled ? { y: titleY } : {}} initial={enabled ? { clipPath: 'inset(0 0 100% 0)' } : false} animate={{ clipPath: 'inset(0 0 0% 0)' }} transition={{ duration: 1.4, ease: EASE }}>PORTOFOLIO</motion.div>
    <motion.div className="hero-portrait" style={enabled ? { y: portraitY, scale: portraitScale } : {}} initial={enabled ? { opacity: 0 } : false} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.2 }}><img src="./Asset/img/gueh.png" alt="Gilang Ryan Eka Putra" width="1024" height="1536" fetchPriority="high" /></motion.div>
    <motion.div className="hero-intro" style={enabled ? { y: copyY } : {}} initial={enabled ? { opacity: 0, x: -35 } : false} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.35, ease: EASE }}>
      <p className="handwriting">Hello, I’m</p><h1 className="display">GILANG<span>.</span></h1><p className="hero-role">SOFTWARE ENGINEER &<br />UI/UX DESIGNER</p><p className="hero-description">Architect. Code. Deploy. Repeat.<br />Saya mengubah ide menjadi solusi digital yang nyata dan terstruktur.</p>
      <Magnetic href="#portfolio" className="primary-link">Lihat karya saya <ArrowDown size={17}/></Magnetic>
      <span className="hero-location"><MapPin size={12} /> BONE, INDONESIA</span>
    </motion.div>
    <motion.div className="hero-side" initial={enabled ? { opacity: 0, x: 30 } : false} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.55, ease: EASE }}>
      <div className="hero-manifesto"><span className="crosshair" aria-hidden="true">✳</span><p>Every code.<br />A different dimension.</p></div>
      <a className="text-link" href="./Asset/cv/Gilang_Ryan_Eka_Putra_CV.pdf" download="CV_Gilang_Ryan_Eka_Putra.pdf">UNDUH RESUME / CV <Download size={15}/></a>
    </motion.div>
    <div className="hero-bottom"><span className="hero-scroll">SCROLL TO DISCOVER <ArrowDown size={13}/></span><span className="edition">SELECTED WORK / 2024–2026</span></div>
  </section>;
}

function ProjectCard({ project, index, onOpen }) {
  const enabled = useContext(MotionContext);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const liveUrl = project.link || project.url || project.media;
  return <motion.article ref={ref} className="project-card" layout initial={enabled ? { opacity: 0, y: 32 } : false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.08 }} transition={{ duration: enabled ? 0.6 : 0, delay: (index % 3) * 0.06, ease: EASE }} exit={{ opacity: 0, scale: 0.96 }}>
    <button className="project-open" onClick={() => onOpen(project)} aria-label={`Buka preview ${project.title}`}><motion.div className="project-picture" style={enabled ? { y } : {}}><MediaImage src={project.image} alt={project.title}/></motion.div><span className="project-type">{liveUrl?.startsWith('http') ? 'LIVE PREVIEW' : 'WEBSITE'}</span><span className="project-hover"><ArrowUpRight size={22}/></span><span className="project-frame" aria-hidden="true" /></button>
    <button className="project-caption" onClick={() => onOpen(project)}><span className="project-number display">{String(index + 1).padStart(2, '0')}</span><span><h3>{project.title}</h3><span className="project-category">{project.category}{project.year ? ` / ${project.year}` : ''}</span></span><ArrowUpRight size={20}/></button>
  </motion.article>;
}

function BrandStrip() {
  const enabled = useContext(MotionContext);
  const ref = useRef(null);
  const loopWidth = useRef(0);
  const inView = useInView(ref);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (!ref.current || showAll) return;
    const update = () => { loopWidth.current = ref.current?.querySelector('.brand-set')?.getBoundingClientRect().width || 0; };
    const observer = new ResizeObserver(update);
    observer.observe(ref.current); update();
    return () => observer.disconnect();
  }, [showAll]);
  useAnimationFrame((time, delta) => {
    if (!enabled || paused || interacting || !inView || showAll || !ref.current || !loopWidth.current) return;
    const el = ref.current;
    el.scrollLeft += Math.min(delta, 40) * 0.038;
    if (el.scrollLeft >= loopWidth.current) el.scrollLeft -= loopWidth.current;
  });
  const move = direction => { setPaused(true); ref.current?.scrollBy({ left: direction * ref.current.clientWidth * .7, behavior: enabled ? 'smooth' : 'instant' }); };
  if (!brands.length) return null;
  return <Reveal className="brand-section"><div className="brand-heading"><p>BEEN PART OF<br/><strong>THE BIGGER PICTURE.</strong></p><div><button className="brand-all" onClick={() => setShowAll(v => !v)} aria-expanded={showAll} aria-controls="brand-collection">{showAll ? 'TAMPILKAN DERET' : `LIHAT SEMUA (${brands.length})`}{showAll ? <Minus size={14}/> : <Plus size={14}/>}</button>{!showAll && <><button className="icon-button brand-pause" aria-label={paused ? 'Putar animasi logo' : 'Jeda animasi logo'} aria-pressed={paused} onClick={() => setPaused(v => !v)}>{paused ? <Play size={13}/> : <Pause size={13}/>}</button><button className="icon-button" onClick={() => move(-1)} aria-label="Logo sebelumnya"><ChevronLeft size={17}/></button><button className="icon-button" onClick={() => move(1)} aria-label="Logo selanjutnya"><ChevronRight size={17}/></button></>}</div></div><div id="brand-collection" className={showAll ? 'brand-full-grid' : 'brand-viewport'} ref={ref} onPointerEnter={e => { if(e.pointerType==='mouse') setInteracting(true); }} onPointerLeave={() => setInteracting(false)} onPointerDown={() => setPaused(true)} onFocusCapture={() => setInteracting(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false); }} tabIndex={showAll ? undefined : 0} role={showAll ? 'list' : 'region'} aria-label="Logo brand dan institusi, geser untuk melihat semuanya">
      {showAll ? brands.map(b => <div className="brand-logo" key={b.file} role="listitem"><img src={`./Asset/svg/brand/${b.file}`} alt={b.name} title={b.name} width="150" height="60" loading="lazy"/><span>{b.name}</span></div>) : <div className="brand-rail">{[0,1].map(copy => <div className="brand-set" key={copy} aria-hidden={copy === 1 ? true : undefined}>{brands.map(b => <div className="brand-logo" key={b.file}><img src={`./Asset/svg/brand/${b.file}`} alt={copy ? '' : b.name} title={b.name} width="150" height="60" loading="lazy" draggable="false"/></div>)}</div>)}</div>}
    </div></Reveal>;
}

function Portfolio({ onProject }) {
  const [category, setCategory] = useState('Semua');
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [limit, setLimit] = useState(9);
  const results = archive.filter(p => (category === 'Semua' || p.category === category) && `${p.title} ${p.category} ${p.role}`.toLowerCase().includes(query.toLowerCase()));
  const projects = expanded || category !== 'Semua' || query ? results.slice(0, limit) : featured;
  return <section id="portfolio" className="portfolio section-wrap">
    <Reveal className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>KARYA YANG BICARA<span className="accent">.</span></h2></div><button className="text-link" onClick={() => { if (expanded) { setExpanded(false); setCategory('Semua'); setQuery(''); } else { setExpanded(true); setLimit(9); } }}>{expanded ? 'KARYA PILIHAN' : 'SEMUA KARYA'}<ArrowRight size={21}/></button></Reveal>
    <Reveal className="portfolio-toolbar">
      <div className="filters" role="group" aria-label="Kategori karya">
        {categories.map(c => <button key={c} className={category === c ? 'selected' : ''} aria-pressed={category === c} onClick={() => { setCategory(c); setExpanded(true); setLimit(9); }}>{c}{c === category && <motion.span className="filter-line" layoutId="filter-line"/>}</button>)}
      </div>
      <label className="search-box"><Search size={15}/><span>Cari</span><input aria-label="Cari karya" type="search" placeholder="Judul atau kategori…" value={query} onChange={e => { setQuery(e.target.value); setExpanded(true); setLimit(9); }}/></label>
    </Reveal>
    <motion.div className="project-grid" layout><AnimatePresence mode="popLayout">{projects.map((p, i) => <ProjectCard key={p.category + p.title + (p.link || p.media || i)} project={p} index={i} onOpen={onProject}/>)}</AnimatePresence></motion.div>
    {projects.length === 0 && <div className="empty-state"><p>Tidak ada karya untuk “{query}”.</p><button className="text-link" onClick={() => { setQuery(''); setCategory('Semua'); }}>Reset pencarian <X size={15}/></button></div>}
    {expanded && results.length > limit && <div className="load-more"><button className="outline-button" onClick={() => setLimit(v => v + 9)}>Tampilkan karya lainnya <Plus size={16}/></button><span>{projects.length} dari {results.length} karya</span></div>}
  </section>;
}

const processSteps = [
  ['01', 'THE IDEA', 'Mendengarkan kebutuhan Anda. Menentukan problem statement, target pengguna, dan arah solusi.'],
  ['02', 'THE PLAN', 'Merancang arsitektur sistem, database, wireframe, dan alur interaksi antarmuka (UI/UX).'],
  ['03', 'THE CRAFT', 'Menulis kode yang bersih, efisien, dan modular. Mengintegrasikan logika bisnis dan tampilan responsif.'],
  ['04', 'THE POLISH', 'Testing performa, optimasi aksesibilitas, dan refining detail visual antarmuka pengguna.'],
  ['05', 'THE DEPLOY', 'Deployment ke production, dokumentasi sistem, dan penyerahan aplikasi siap pakai.'],
];

function Awards({onProject}) {
  return null;
}

function Breakdown() {
  return null;
}

function About() {
  return <section id="about" className="about section-wrap">
    <Reveal className="about-lead"><div><span className="eyebrow">02 / BEHIND THE SCREENS</span><h2 className="display">BUKAN SEKADAR KODE.<br/>TAPI CARA <span className="accent">BERKARYA.</span></h2></div><p>I am an Informatics graduate with a strong interest in software development, especially Web Development and Android Development. I enjoy learning new technologies.</p></Reveal>
    <div className="studio-grid">
      <Reveal className="education-panel">
        <h3 className="panel-heading">EDUCATION & SKILLS</h3>
        <p className="eyebrow accent">PENDIDIKAN</p>
        <div className="education-row"><strong>SMKN 1 Bone</strong><span>Teknik Komputer & Jaringan</span><p>Dasar jaringan komputer, administrasi sistem, dan infrastruktur IT.</p></div>
        <div className="education-row"><strong>Universitas Dipa Makassar</strong><span>Teknik Informatika</span><p>Rekayasa perangkat lunak, algoritma, pemrograman web & mobile.</p></div>
        <p className="eyebrow accent skills-heading">CREATIVE TOOLKIT</p>
        <div className="skill-tags">{['Web Development', 'Mobile Development', 'UI/UX Designer', 'IT Engineer'].map(s => <span key={s}>{s}</span>)}</div>
        <p className="eyebrow accent skills-heading">SOFTWARE & TOOLS</p>
        <div className="software-row">
          {software.map(item => (
            <img key={item.name} src={item.icon} alt={item.name} title={item.name} width="28" height="28" loading="lazy" />
          ))}
        </div>
      </Reveal>
      <div className="process-panel">
        <Reveal><h3 className="panel-heading">FROM CODE TO EXPERIENCE</h3></Reveal>
        <div className="process-list">
          <div className="process-track"><div style={{ height: '100%' }}/></div>
          {processSteps.map(([num, title, text], i) => <Reveal key={num} className="process-row" delay={i * 0.035}><span className="process-num display">{num}</span><span className="process-node"/><div><h4>{title}</h4><p>{text}</p></div></Reveal>)}
        </div>
      </div>
      <Reveal className="quote-panel">
        <span className="quote-mark display">“</span>
        <blockquote>Dari Sebuah Kode,<br/><em>Sampai Visual<br/>Yang Keren.</em></blockquote>
        <span className="handwriting">Gilang</span>
        <div className="quote-bottom">ARCHITECT. CODE.<br/>DEPLOY. REPEAT.<span className="quote-symbol" aria-hidden="true">✳</span></div>
      </Reveal>
    </div>
  </section>;
}

function WaveCanvas() {
  const canvasRef = useRef(null);
  const enabled = useContext(MotionContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let time = 0;
    let animId;

    // Konfigurasi Gelombang Jaring
    const config = {
      lineCount: 45,          // Jumlah garis jaring
      pointsPerLine: 120,     // Kehalusan lengkungan garis
      speed: 0.015,           // Kecepatan gerak gelombang
      color: '195, 220, 15',  // Warna RGB (Kuning-Hijau / Chartreuse)
      maxOpacity: 0.38        // Ketebalan/transparansi maksimal garis
    };

    // Pelacakan kursor untuk efek interaktif halus
    const mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };

    const onMouseMove = (e) => {
      mouse.targetX = e.clientX / window.innerWidth;
      mouse.targetY = e.clientY / window.innerHeight;
    };

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : canvas.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || 600;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', resizeCanvas);

    let ro;
    if (typeof ResizeObserver !== 'undefined' && canvas.parentElement) {
      ro = new ResizeObserver(() => {
        resizeCanvas();
        if (!enabled) drawWaves();
      });
      ro.observe(canvas.parentElement);
    }

    resizeCanvas();

    function drawWaves() {
      ctx.clearRect(0, 0, width, height);

      // Transisi pergerakan mouse (lerping)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      for (let i = 0; i < config.lineCount; i++) {
        ctx.beginPath();

        // Garis bagian tengah lebih terang dibanding garis pinggir
        const normIndex = i / config.lineCount;
        const alpha = Math.sin(normIndex * Math.PI) * config.maxOpacity;
        ctx.strokeStyle = `rgba(${config.color}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 0.85;

        for (let j = 0; j <= config.pointsPerLine; j++) {
          const progress = j / config.pointsPerLine; // 0 (kiri) sampai 1 (kanan)

          // Jalur diagonal dari kiri bawah ke kanan atas
          const baseX = progress * width;
          const baseY = height * 0.88 - (progress * height * 0.48);

          // Rumus puntiran 3D (Ribbon Mesh Effect)
          const wave1 = Math.sin(progress * 6.5 - time + i * 0.055) * 115;
          const wave2 = Math.cos(progress * 3.5 + time * 0.6 + i * 0.085) * 65;

          // Pergeseran antar-garis agar menciptakan efek pita berputar (twist)
          const spreadX = Math.cos(progress * 5 - time * 0.8) * (i * 2.2);
          const spreadY = Math.sin(progress * 4 + i * 0.05) * (i * 3.4);

          // Efek tarikan halus saat kursor digerakkan
          const mousePull = (mouse.y - 0.5) * 70 * Math.sin(progress * Math.PI);

          const x = baseX + spreadX;
          const y = baseY + wave1 + wave2 + spreadY + mousePull;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      if (enabled) {
        time += config.speed;
        animId = requestAnimationFrame(drawWaves);
      }
    }

    drawWaves();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (ro) ro.disconnect();
      if (animId) cancelAnimationFrame(animId);
    };
  }, [enabled]);

  return <canvas id="wave-canvas" ref={canvasRef} />;
}

function Journey({ onProject }) {
  const [open, setOpen] = useState(0);
  return <section id="experience" className="journey section-wrap">
    <WaveCanvas />
    <Reveal className="section-heading"><div><span className="eyebrow">03 / THE JOURNEY</span><h2>TERUS BERGERAK. TERUS BERKARYA<span className="accent">.</span></h2></div></Reveal>
    <div className="journey-grid">
      <div className="experience-list">
        {experiences.map((job, i) => <Reveal className={`experience-row ${open === i ? 'is-open' : ''}`} key={job.title}>
          <button aria-expanded={open === i} aria-controls={`job-${i}`} onClick={() => setOpen(open === i ? null : i)}>
            <span className="experience-date">{job.date}</span>
            <span><h3>{job.title}</h3><span className="experience-place">{job.place}</span></span>
            {open === i ? <Minus size={18}/> : <Plus size={18}/>}
          </button>
          <AnimatePresence initial={false}>
            {open === i && <motion.div id={`job-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE }}><p>{job.text}</p></motion.div>}
          </AnimatePresence>
        </Reveal>)}
      </div>
      <Reveal className="journey-portrait" delay={0.15}>
        <img src="./Asset/img/gueh.png" alt="Gilang Ryan Eka Putra" width="480" height="640" loading="lazy" />
      </Reveal>
    </div>
  </section>;
}

function Contact({ onProject }) {
  const [sent, setSent] = useState(false);
  const send = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `Halo Gilang, saya ${data.get('name')}.\n\nJenis proyek: ${data.get('type')}\n${data.get('message')}`;
    window.open(`https://wa.me/6289674547361?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };
  return <section id="contact" className="contact section-wrap">
    <div className="contact-grid">
      <Reveal className="contact-intro">
        <span className="eyebrow">04 / YOUR NEXT STORY</span>
        <h2 className="display">LET’S WORK<br/>TOGETHER<span className="accent">.</span></h2>
        <p>Punya ide atau proyek perangkat lunak yang ingin diwujudkan?<br/>Mari buat sistem yang andal dan antarmuka yang berdampak.</p>
        <Magnetic href="https://wa.me/6289674547361" target="_blank" rel="noopener noreferrer" className="contact-cta">
          <span className="round-arrow"><ArrowUpRight size={21}/></span>MULAI PERCAKAPAN
        </Magnetic>
      </Reveal>
      <Reveal className="contact-links" delay={0.1}>
        <a href="mailto:gilangryan.ken@gmail.com"><Mail/><span><small>EMAIL</small>gilangryan.ken@gmail.com</span><ArrowUpRight size={16}/></a>
        <a href="https://github.com/itslangz" target="_blank" rel="noopener noreferrer"><Github/><span><small>GITHUB</small>github.com/itslangz</span><ArrowUpRight size={16}/></a>
        <a href="https://www.instagram.com/laaanggz_/" target="_blank" rel="noopener noreferrer"><Instagram/><span><small>INSTAGRAM</small>@laaanggz_</span><ArrowUpRight size={16}/></a>
        <a href="tel:+6289674547361"><Phone/><span><small>PHONE / WHATSAPP</small>+62 896-7454-7361</span><ArrowUpRight size={16}/></a>
        <div><MapPin/><span><small>BASED IN</small>Bone, Indonesia</span></div>
      </Reveal>
    </div>
    <Reveal>
      <details className="project-brief">
        <summary>Ceritakan proyek Anda <Plus size={19}/></summary>
        <form onSubmit={send}>
          <label>Nama Anda<input name="name" required placeholder="Nama atau institusi" autoComplete="name" maxLength="100"/></label>
          <label>Jenis proyek<select name="type"><option>Web Development</option><option>Mobile App (Android)</option><option>UI/UX Design</option><option>Sistem Informasi / Back Office</option><option>Kolaborasi lainnya</option></select></label>
          <label className="brief-message">Tentang proyek<textarea name="message" required rows="3" placeholder="Ceritakan ide, kebutuhan sistem, atau tantangan yang dihadapi…" maxLength="3000"/></label>
          <button className="solid-button" type="submit">Lanjut ke WhatsApp <ArrowUpRight size={18}/></button>
          <p className="form-note" role="status">{sent ? 'Draft pesan siap di WhatsApp. Tekan Kirim di sana untuk memulai percakapan.' : 'Brief akan dibuka sebagai draft pesan di WhatsApp.'}</p>
        </form>
      </details>
    </Reveal>
  </section>;
}

function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);
  const enabled = useContext(MotionContext);
  const liveUrl = project.link || project.url || project.media;
  const [viewMode, setViewMode] = useState(liveUrl ? 'live' : 'still');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const previous = document.activeElement;
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    ref.current?.focus();
    const listener = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const nodes = [...ref.current.querySelectorAll('button, a[href], input, select, textarea, iframe')].filter(n => !n.disabled && n.getClientRects().length);
        const first = nodes[0]; const last = nodes.at(-1);
        if (e.shiftKey && (document.activeElement === first || document.activeElement === ref.current)) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener('keydown', listener);
    return () => { document.body.style.overflow = old; window.removeEventListener('keydown', listener); previous?.focus(); };
  }, [onClose]);

  return <motion.div className="dialog-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <motion.div ref={ref} className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" tabIndex="-1" initial={enabled ? { y: 45, scale: 0.97 } : false} animate={{ y: 0, scale: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.35, ease: EASE }}>
      <div className="dialog-heading">
        <span className="eyebrow">{project.category} {project.year && ` / ${project.year}`}</span>
        <button onClick={onClose} className="icon-button" aria-label="Tutup karya"><X/></button>
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
                <button
                  type="button"
                  className={`browser-tab-btn ${viewMode === 'live' ? 'active' : ''}`}
                  onClick={() => setViewMode('live')}
                >
                  Live Preview
                </button>
                <button
                  type="button"
                  className={`browser-tab-btn ${viewMode === 'still' ? 'active' : ''}`}
                  onClick={() => setViewMode('still')}
                >
                  Screenshot
                </button>
              </div>
            )}
            <a className="browser-btn" href={liveUrl} target="_blank" rel="noopener noreferrer" title="Buka di tab baru">
              Buka Tab Baru <ExternalLink size={12}/>
            </a>
          </div>
        </div>
      )}

      {viewMode === 'live' && liveUrl ? (
        <div className="dialog-media browser-frame">
          {loading && (
            <div className="media-loading">
              <span className="loading-ring" />
              <p>Memuat live preview website…</p>
            </div>
          )}
          <iframe
            src={liveUrl}
            title={project.title}
            loading="lazy"
            onLoad={() => setLoading(false)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      ) : (
        <div className="dialog-media still">
          <MediaImage src={project.image} alt={project.title} priority />
        </div>
      )}

      <div className="dialog-description">
        <div>
          <h2 id="dialog-title">{project.title}</h2>
          {project.role && <span className="accent">{project.role}</span>}
          <p>{project.description}</p>
        </div>
        {liveUrl && (
          <a className="solid-button" href={liveUrl} target="_blank" rel="noopener noreferrer">
            Kunjungi Website <ArrowUpRight size={16}/>
          </a>
        )}
      </div>
    </motion.div>
  </motion.div>;
}

function App() {
  const reduced = useReducedMotion();
  const [motionOn, setMotionOn] = useState(() => { try { return localStorage.getItem('renando-motion') !== 'off'; } catch { return true; } });
  const enabled = motionOn && !reduced;
  const [project, setProject] = useState(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28, restDelta: 0.001 });
  useEffect(() => { document.documentElement.dataset.motion = enabled ? 'on' : 'off'; }, [enabled]);
  const toggle = () => { setMotionOn(!motionOn); try { localStorage.setItem('renando-motion', motionOn ? 'off' : 'on'); } catch {} };
  const close = React.useCallback(() => setProject(null), []);
  return <MotionContext.Provider value={enabled}>
    <MotionConfig reducedMotion={enabled ? 'user' : 'always'} transition={{ ease: EASE }}>
      <a className="skip-link" href="#portfolio">Lewati ke karya</a>
      <motion.div className="reading-progress" style={{ scaleX: enabled ? progress : scrollYProgress }}/>
      <Header enabled={enabled} onToggle={toggle}/>
      <main>
        <Hero onProject={setProject}/>
        <Portfolio onProject={setProject}/>
        <About/>
        <Journey onProject={setProject}/>
        <Contact onProject={setProject}/>
      </main>
      <footer className="footer">
        <a className="wordmark" href="#home">GILANG<span>®</span></a>
        <span>© {new Date().getFullYear()} GILANG. ARCHITECT. CODE. DEPLOY. REPEAT.</span>
        <div>
          <a href="https://github.com/itslangz" target="_blank" rel="noopener noreferrer" aria-label="GitHub itslangz"><Github size={17}/></a>
          <a href="https://www.instagram.com/laaanggz_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram laaanggz_"><Instagram size={17}/></a>
          <a href="#home" aria-label="Kembali ke atas"><ArrowUpRight size={18}/></a>
        </div>
      </footer>
      <AnimatePresence>{project && <ProjectDialog key={project.title} project={project} onClose={close}/>}</AnimatePresence>
    </MotionConfig>
  </MotionContext.Provider>;
}

createRoot(document.getElementById('root')).render(<App/>);
