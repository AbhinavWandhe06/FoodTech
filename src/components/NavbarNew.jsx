import { useState, useRef, useCallback, useEffect } from "react";
import '../style/navbar.css';

/* ─── Data ─────────────────────────────────── */
const MENUS = {
  courses: {
    label: "Courses", emoji: "📚",
    gridCols: "1fr 1fr 280px",
    tagGridCols: "repeat(3, 1fr)",
    featured: { badge: "🌟 BESTSELLER", title: "Food Tech Masterclass 2025", desc: "From zero to industry-ready. Live sessions, certificate & placement support.", btn: "Explore →", bg: "linear-gradient(145deg,#1a3c2b,rgba(26,60,43,0.85))" },
    cols: [
      {
        heading: "By Category", items: [
          { emoji: "📋", grad: "linear-gradient(135deg,#1a3c2b,#2d5a40)", title: "GATE Food Technology", badge: "Top Exam" },
          { emoji: "🏛️", grad: "linear-gradient(135deg,#2d5a40,#4a8c65)", title: "ICAR Exams", sub: "Food, Dairy Technology" },
          { emoji: "🎓", grad: "linear-gradient(135deg,#0f2419,#1a3c2b)", title: "University Entrances", sub: "State & central" },
          { emoji: "💼", grad: "linear-gradient(135deg,#d4870a,#c98a1a)", title: "Industry Certs", sub: "FSSAI, ISO, HACCP" },
        ]
      },
      {
        heading: "Popular Subjects", type: "tags",
        tagGridCols: "repeat(3, 1fr)",
        tags: [
          { emoji: "🔬", label: "Food Microbiology", color: "#1a3c2b" },
          { emoji: "🥗", label: "Food Law & Regulations", color: "#d4870a" },
          { emoji: "🧪", label: "Food Engineering", color: "#2d5a40" },
          { emoji: "🛡️", label: "Food Processing", color: "#b45309" },
          { emoji: "✅", label: "Food Chemistry", color: "#c2410c" },
          { emoji: "🥛", label: "Dairy Technology", color: "#0369a1" }
        ],
      },
    ],
  },
  tests: {
    label: "Test Series", emoji: "📝",
    gridCols: "1fr 1fr 240px",
    featured: { badge: "🎯 NEW BATCH", title: "GATE 2026 Full Test Series", desc: "50 full-length mocks · 200 topic tests · Peer rankings · Video solutions.", btn: "Start Free →", bg: "linear-gradient(145deg,#d4870a,rgba(212,135,10,0.85))" },
    cols: [
      {
        heading: "Exam Type", items: [
          { emoji: "📋", grad: "linear-gradient(135deg,#1a3c2b,#2d5a40)", title: "GATE Food Tech", sub: "Full mock tests" },
          // { emoji: "🎯", grad: "linear-gradient(135deg,#d4870a,#e8a020)", title: "IIT JAM", sub: "Topic wise + full tests" },
          { emoji: "🏛️", grad: "linear-gradient(135deg,#2d5a40,#4a8c65)", title: "ICAR Exams", sub: "Sectional practice" },
          { emoji: "🎓", grad: "linear-gradient(135deg,#0f2419,#1a3c2b)", title: "University Entrances", sub: "State & central" },
          { emoji: "💼", grad: "linear-gradient(135deg,#d4870a,#c98a1a)", title: "Industry Certs", sub: "FSSAI, ISO, HACCP" },
        ]
      },
      {
        heading: "Test Format", items: [
          { emoji: "⚡", grad: "linear-gradient(135deg,#f5c842,#e8a020)", title: "Quick Practice", sub: "10–20 questions" },
          // { emoji: "📝", grad: "linear-gradient(135deg,#1a3c2b,#2d5a40)", title: "Sectional Tests", sub: "Topic deep dives" },
          { emoji: "🕐", grad: "linear-gradient(135deg,#0f2419,#1a3c2b)", title: "Full Mock Exams", sub: "Timed simulation" },
          { emoji: "📊", grad: "linear-gradient(135deg,#d4870a,#e8a020)", title: "Analytics Dashboard", sub: "Detailed insights" },
        ]
      },
    ],
  },
  // mentors: {
  //   label: "1-on-1 Mentors", emoji: "👨‍🏫",
  //   gridCols: "200px 1fr 240px",
  //   featured: { badge: "⭐ FEATURED", title: "Free Discovery Call", desc: "30-min session with a top mentor. Get your personalized learning path.", btn: "Book Free →", bg: "linear-gradient(145deg,#1a3c2b,rgba(26,60,43,0.85))" },
  //   cols: [
  //     {
  //       heading: "Consultation Type", items: [
  //         { emoji: "🎯", grad: "linear-gradient(135deg,#1a3c2b,#2d5a40)", title: "Career Guidance", sub: "Industry roadmap" },
  //         { emoji: "📚", grad: "linear-gradient(135deg,#d4870a,#e8a020)", title: "Exam Strategy", sub: "Personalized prep plan" },
  //         { emoji: "🔬", grad: "linear-gradient(135deg,#2d5a40,#4a8c65)", title: "Research Mentoring", sub: "PhD / thesis help" },
  //         { emoji: "💼", grad: "linear-gradient(135deg,#0f2419,#1a3c2b)", title: "Interview Prep", sub: "Mock + live feedback" },
  //       ]
  //     },
  //     {
  //       heading: "Top Mentors", type: "mentors",
  //       mentors: [
  //         { av: "👩‍🔬", name: "Dr. Priya Sharma", spec: "Food Science · IIT Bombay", stars: "★★★★★", sessions: "1.2k" },
  //         { av: "👨‍🏫", name: "Prof. Arjun Mehta", spec: "GATE Expert · 10 yrs exp", stars: "★★★★★", sessions: "980" },
  //         { av: "👩‍🍳", name: "Dr. Anjali Kulkarni", spec: "Nutrition & Dietetics", stars: "★★★★★", sessions: "2.1k" },
  //         { av: "👨‍💼", name: "Rahul Tiwari", spec: "Industry Pro · Nestlé", stars: "★★★★☆", sessions: "640" },
  //       ],
  //     },
  //   ],
  // },
  resources: {
    label: "Resources", emoji: "📖",
    gridCols: "1fr 1fr 240px",
    featured: { badge: "🆓 FREE DOWNLOAD", title: "GATE 2025 Formula Sheet", desc: "Curated by toppers. All major topics. Instant download, no signup needed.", btn: "Download →", bg: "linear-gradient(145deg,#2d5a40,rgba(45,90,64,0.9))" },
    cols: [
      {
        heading: "Free Resources", items: [
          { emoji: "📰", grad: "linear-gradient(135deg,#1a3c2b,#2d5a40)", title: "Blog & Articles", sub: "Weekly insights" },
          { emoji: "📹", grad: "linear-gradient(135deg,#d4870a,#e8a020)", title: "YouTube Lectures", sub: "Free video lessons", badge: "free" },
          { emoji: "📄", grad: "linear-gradient(135deg,#2d5a40,#4a8c65)", title: "Previous Papers", sub: "GATE, ICAR, State-FSO" },
          { emoji: "🗒️", grad: "linear-gradient(135deg,#0f2419,#1a3c2b)", title: "Study Notes", sub: "Downloadable PDFs" },
        ]
      },
      // {
      //   heading: "Community", items: [
      //     { emoji: "💬", grad: "linear-gradient(135deg,#1a3c2b,#2d5a40)", title: "Discussion Forum", sub: "Ask doubts anytime" },
      //     { emoji: "🏅", grad: "linear-gradient(135deg,#d4870a,#e8a020)", title: "Success Stories", sub: "Toppers speak" },
      //     { emoji: "📅", grad: "linear-gradient(135deg,#2d5a40,#4a8c65)", title: "Live Webinars", sub: "Free every week", badge: "live" },
      //     { emoji: "🤝", grad: "linear-gradient(135deg,#0f2419,#1a3c2b)", title: "Alumni Network", sub: "5,000+ members" },
      //   ]
      // },
    ],
  },
};

const TICKER_ITEMS = [
  { key: 0, text: ["🎉 New batch starting ", "March 1st", " — Enroll & save ", "30%"] },
  { key: 1, text: ["📚 Free demo class every ", "Sunday 10AM", "", ""] },
  { key: 2, text: ["🏆 ", "50,000+", " students placed successfully", ""] },
  { key: 3, text: ["⚡ ", "GATE 2026", " test series now live", ""] },
];

/* ─── Desktop Sub-components ───────────────── */
function Badge({ type }) {
  if (!type) return null;
  return <span className={`fto-badge fto-badge-${type}`}>{type.toUpperCase()}</span>;
}

function LinkRow({ emoji, grad, title, sub, badge }) {
  return (
    <a href="#" className="fto-link-row">
      <span className="fto-link-icon" style={{ background: grad }}>{emoji}</span>
      <span className="fto-link-info">
        <strong>{title}{badge && <Badge type={badge} />}</strong>
        <span>{sub}</span>
      </span>
      <span className="fto-link-arrow">›</span>
    </a>
  );
}

function TagsCol({ col }) {
  const gridCols = col.tagGridCols || "1fr 1fr";
  return (
    <div>
      <div className="fto-sec-label">{col.heading}</div>
      <div className="fto-tag-grid" style={{ gridTemplateColumns: gridCols }}>
        {col.tags.map(t => (
          <a key={t.label} href="#" className="fto-tag"
            style={{ borderColor: `${t.color}4d`, background: `${t.color}14` }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.boxShadow = `0 6px 20px ${t.color}26`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = `${t.color}4d`; e.currentTarget.style.boxShadow = "none"; }}
          >
            <span>{t.emoji}</span>{t.label}
          </a>
        ))}
      </div>
      {col.stats && (
        <div className="fto-stats">
          {col.stats.map(s => (
            <div key={s.label} className="fto-stat">
              <div style={{ fontSize: 17, marginBottom: 2 }}>{s.emoji}</div>
              <strong className="fto-stat-val">{s.val}</strong>
              <span className="fto-stat-lab">{s.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MentorsCol({ col }) {
  return (
    <div>
      <div className="fto-sec-label">{col.heading}</div>
      {col.mentors.map(m => (
        <a key={m.name} href="#" className="fto-mentor-card">
          <span className="fto-mentor-av">{m.av}</span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <strong className="fto-mentor-name">{m.name}</strong>
            <span className="fto-mentor-spec">{m.spec}</span>
            <span className="fto-mentor-stars">{m.stars}</span>
          </span>
          <span className="fto-mentor-sessions">{m.sessions} sessions</span>
        </a>
      ))}
    </div>
  );
}

function ItemsCol({ col }) {
  return (
    <div>
      <div className="fto-sec-label">{col.heading}</div>
      {col.items.map(item => <LinkRow key={item.title} {...item} />)}
    </div>
  );
}

function MegaCol({ col }) {
  if (col.type === "tags") return <TagsCol col={col} />;
  if (col.type === "mentors") return <MentorsCol col={col} />;
  return <ItemsCol col={col} />;
}

function FeaturedCard({ f }) {
  return (
    <div className="fto-featured" style={{ background: f.bg }}>
      <div className="fto-feat-circle1" />
      <div className="fto-feat-circle2" />
      <div className="fto-feat-badge">{f.badge}</div>
      <p className="fto-feat-title">{f.title}</p>
      <p className="fto-feat-desc">{f.desc}</p>
      <a href="#" className="fto-feat-btn">{f.btn}</a>
    </div>
  );
}

function MegaPanel({ menuKey, data, isOpen, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`fto-mega${isOpen ? " open" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="fto-mega-grid" style={{ gridTemplateColumns: data.gridCols }}>
        {data.cols.map((col, i) => <MegaCol key={i} col={col} />)}
        <FeaturedCard f={data.featured} />
      </div>
    </div>
  );
}

/* ─── Mobile Accordion Menu ─────────────────── */
function MobileMenuItems({ col }) {
  if (col.type === "tags") {
    return (
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8 }}>{col.heading}</div>
        <div className="fto-mob-tag-grid">
          {col.tags.map(t => (
            <a key={t.label} href="#" className="fto-mob-tag"
              style={{ borderColor: `${t.color}50`, background: `${t.color}12` }}>
              <span>{t.emoji}</span>{t.label}
            </a>
          ))}
        </div>
        {col.stats && (
          <div className="fto-mob-stats">
            {col.stats.map(s => (
              <div key={s.label} className="fto-mob-stat">
                <strong className="fto-mob-stat-val">{s.val}</strong>
                <span className="fto-mob-stat-lab">{s.emoji} {s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (col.type === "mentors") {
    return (
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8 }}>{col.heading}</div>
        {col.mentors.map(m => (
          <a key={m.name} href="#" className="fto-mob-mentor">
            <span className="fto-mob-mentor-av">{m.av}</span>
            <span>
              <span className="fto-mob-mentor-name">{m.name}</span>
              <span className="fto-mob-mentor-spec">{m.spec}</span>
              <span className="fto-mob-mentor-stars">{m.stars} · {m.sessions} sessions</span>
            </span>
            <span style={{ marginLeft: "auto", color: "#9ca3af", fontSize: 14 }}>›</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8 }}>{col.heading}</div>
      {col.items.map(item => (
        <a key={item.title} href="#" className="fto-mob-link">
          <span className="fto-mob-link-icon" style={{ background: item.grad }}>{item.emoji}</span>
          <span className="fto-mob-link-info">
            <strong>{item.title}{item.badge && <Badge type={item.badge} />}</strong>
            <span>{item.sub}</span>
          </span>
          <span className="fto-mob-link-arrow">›</span>
        </a>
      ))}
    </div>
  );
}

function MobileAccordionItem({ menuKey, data, isOpen, onToggle }) {
  return (
    <div className="fto-acc-item">
      <button
        className={`fto-acc-trigger${isOpen ? " open" : ""}`}
        onClick={() => onToggle(menuKey)}
      >
        <span className="fto-acc-trigger-emoji">{data.emoji}</span>
        <span className="fto-acc-trigger-label">{data.label}</span>
        <svg className="fto-acc-trigger-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>
      <div className={`fto-acc-panel${isOpen ? " open" : ""}`}>
        <div className="fto-acc-panel-inner">
          {/* Show all column sections */}
          {data.cols.map((col, i) => (
            <div key={i} style={{ marginBottom: i < data.cols.length - 1 ? 18 : 0 }}>
              <MobileMenuItems col={col} />
            </div>
          ))}
          {/* Mini featured card */}
          <div className="fto-mob-featured" style={{ background: data.featured.bg }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: 14, background: "rgba(255,255,255,0.04)" }} />
            <div className="fto-mob-feat-badge">{data.featured.badge}</div>
            <div className="fto-mob-feat-title">{data.featured.title}</div>
            <a href="#" className="fto-mob-feat-btn">{data.featured.btn}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDrawer({ isOpen, onClose }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggle = (key) => setOpenMenu(prev => prev === key ? null : key);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fto-drawer-overlay${isOpen ? " open" : ""}`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div className={`fto-drawer${isOpen ? " open" : ""}`} role="dialog" aria-modal="true">
        {/* Header */}
        <div className="fto-drawer-header">
          <a href="#" className="fto-logo" onClick={onClose}>
            <div className="fto-logo-icon" style={{ animation: "none" }}>🌿</div>
            <div>
              <span className="fto-logo-name">FoodTech</span>
              <span className="fto-logo-sub">ONLINE</span>
            </div>
          </a>
          <button className="fto-drawer-close" onClick={onClose} aria-label="Close menu">✕</button>
        </div>

        {/* Body */}
        <div className="fto-drawer-body">
          {/* Accordion menus */}
          {Object.entries(MENUS).map(([key, data]) => (
            <MobileAccordionItem
              key={key}
              menuKey={key}
              data={data}
              isOpen={openMenu === key}
              onToggle={toggle}
            />
          ))}

          {/* Static links */}
          {["Blog", "About"].map(l => (
            <a key={l} href="#" className="fto-mob-static-link">
              <span>{l}</span>
              <span style={{ color: "#9ca3af", fontSize: 14 }}>›</span>
            </a>
          ))}

          {/* CTA block */}
          <div className="fto-mob-ctas">
            <a href="#" className="fto-mob-cta-primary">Start Free →</a>
            <a href="#" className="fto-mob-cta-ghost">Login</a>
          </div>

          {/* Bottom stats */}
          <div style={{ padding: "0 20px" }}>
            <div className="fto-mob-stats">
              <div className="fto-mob-stat">
                <strong className="fto-mob-stat-val">200+</strong>
                <span className="fto-mob-stat-lab">📚 Courses</span>
              </div>
              <div className="fto-mob-stat">
                <strong className="fto-mob-stat-val">50K+</strong>
                <span className="fto-mob-stat-lab">👩‍🎓 Students</span>
              </div>
              <div className="fto-mob-stat">
                <strong className="fto-mob-stat-val">95%</strong>
                <span className="fto-mob-stat-lab">🏆 Pass Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Main export ───────────────────────────── */
export default function FoodTechNavbar({ darkMode, toggleTheme }) {
  const [active, setActive] = useState(null);     // desktop mega
  const [drawerOpen, setDrawerOpen] = useState(false); // mobile drawer
  const [scrolled, setScrolled] = useState(false);
  const timer = useRef(null);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") { closeAll(); setDrawerOpen(false); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const kill = () => { if (timer.current) { clearTimeout(timer.current); timer.current = null; } };
  const defer = () => { kill(); timer.current = setTimeout(() => setActive(null), 100); };
  const openMenu = useCallback(k => { kill(); setActive(k); }, []);
  const closeAll = () => { kill(); setActive(null); };

  const allTickers = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className={`fto${darkMode ? " fto-dark" : ""}`} style={{ background: "transparent", transition: "background 0.3s" }}>

      {/* ── Announcement ticker ── */}
      {/* <div className="fto-topbar">
        <div className="fto-topbar-shimmer" />
        <div className="fto-ticker-wrap">
          <div className="fto-ticker-inner">
            {allTickers.map((item, idx) => (
              <span key={idx} style={{ display: "inline-flex", alignItems: "center" }}>
                {item.text[0]}
                {item.text[1] && <strong className="hi">{item.text[1]}</strong>}
                {item.text[2]}
                {item.text[3] && <strong className="hi">{item.text[3]}</strong>}
                <span style={{ opacity: 0.3, margin: "0 32px" }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div> */}

      {/* ── Desktop Backdrop ── */}
      <div className={`fto-backdrop${active ? " visible" : ""}`} onClick={closeAll} />

      {/* ── Navbar ── */}
      <nav className={`fto-nav${scrolled ? " scrolled" : ""}`}>
        {/* Logo */}
        <a href="#" className="fto-logo">
          <div className="fto-logo-icon">🌿</div>
          <div>
            <span className="fto-logo-name">FoodTech</span>
            <span className="fto-logo-sub">ONLINE</span>
          </div>
        </a>

        {/* Desktop nav links */}
        <ul className="fto-nav-links">
          {Object.entries(MENUS).map(([key, data]) => (
            <li key={key} onMouseEnter={() => openMenu(key)} onMouseLeave={defer}>
              <button className={`fto-trigger${active === key ? " active" : ""}`}>
                <span>{data.emoji}</span>
                {data.label}
                <svg viewBox="0 0 16 16" fill="none" strokeWidth="2.5">
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </button>
            </li>
          ))}
          {["Blog", "About"].map(l => (
            <li key={l}><a href="#" className="fto-trigger">{l}</a></li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="fto-ctas-desktop">
          <button
            className="fto-theme-toggle"
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <a href="#" className="fto-btn-ghost">Login</a>
          <a href="#" className="fto-btn-primary">Start Free →</a>
        </div>

        {/* Mobile right: CTA + Hamburger */}
        <div className="fto-nav-right">
          <button
            className="fto-theme-toggle"
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <a href="#" className="fto-btn-primary-sm">Start Free →</a>
          <button
            className={`fto-hamburger${drawerOpen ? " open" : ""}`}
            onClick={() => setDrawerOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={drawerOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Desktop Mega panels ── */}
      {Object.entries(MENUS).map(([key, data]) => (
        <MegaPanel
          key={key}
          menuKey={key}
          data={data}
          isOpen={active === key}
          onMouseEnter={() => openMenu(key)}
          onMouseLeave={defer}
        />
      ))}

      {/* ── Mobile Drawer ── */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* ── Demo hero section ── */}
      {/* <div className="fto-hero">
        <div className="fto-hero-pill">✨ India's #1 Food Technology Learning Platform</div>
        <h1>
          Master <em>Food Technology</em><br />
          <span>The Smarter Way</span>
        </h1>
        <p>
          Expert-led courses, AI-powered mock tests, and 1-on-1 mentorship —
          all in one place.
        </p>
        <div className="fto-hero-btns">
          <a href="#" className="fto-hero-btn-primary">Explore All Courses</a>
          <a href="#" className="fto-hero-btn-outline">▶ Watch Demo</a>
        </div>
      </div> */}
    </div>
  );
}
