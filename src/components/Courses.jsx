import React, { useState, useEffect, useRef } from "react";
import "./courses.css";

const subjects = [
    {
        id: "food-chem",
        title: "Food Chemistry",
        tag: "Core Science",
        icon: "⚗️",
        accentColor: "#22c55e",
        image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=700&q=80",
        desc: "Understand the composition, reactions, and molecular properties of food. Covers water activity, lipid chemistry, Maillard reactions, and food additives.",
        topics: ["Carbohydrates & Proteins", "Lipid Oxidation", "Maillard Reaction", "Water Activity"],
        lessons: 42,
        hours: "28 hrs",
        level: "Foundation",
        btn: "Explore Chemistry",
    },
    {
        id: "food-micro",
        title: "Food Microbiology",
        tag: "Safety & Quality",
        icon: "🦠",
        accentColor: "#3b82f6",
        image: "https://images.unsplash.com/photo-1559757175-7b5f9a2b1b18?w=700&q=80",
        desc: "Learn about microorganisms in food systems, pathogen control, fermentation science, and modern food safety strategies from farm to fork.",
        topics: ["Pathogen Control", "Fermentation Science", "HACCP Principles", "Spoilage Organisms"],
        lessons: 38,
        hours: "24 hrs",
        level: "Intermediate",
        btn: "Explore Microbiology",
    },
    {
        id: "food-eng",
        title: "Food Engineering",
        tag: "Processing",
        icon: "⚙️",
        accentColor: "#f59e0b",
        image: "https://images.unsplash.com/photo-1565087572921-4c7b5b2e3d4e?w=700&q=80",
        desc: "Master thermodynamics, fluid mechanics, mass & heat transfer as applied to food processing operations and industrial production systems.",
        topics: ["Heat Transfer", "Mass Balance", "Evaporation & Drying", "Rheology"],
        lessons: 55,
        hours: "36 hrs",
        level: "Advanced",
        btn: "Explore Engineering",
    },
    {
        id: "food-tech",
        title: "Food Technology",
        tag: "Industry Ready",
        icon: "🏭",
        accentColor: "#8b5cf6",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=700&q=80",
        desc: "End-to-end processing of cereals, dairy, meat, and beverages. Covers packaging technology, industrial protocols, and product development.",
        topics: ["Dairy Technology", "Cereal Processing", "Packaging Systems", "Product Development"],
        lessons: 60,
        hours: "40 hrs",
        level: "Comprehensive",
        btn: "Explore Technology",
    },
    {
        id: "food-quality",
        title: "Food Quality",
        tag: "Regulatory",
        icon: "✅",
        accentColor: "#10b981",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80",
        desc: "Quality control systems, regulatory compliance, FSSAI standards, ISO certifications, and sensory evaluation techniques used in the food industry.",
        topics: ["FSSAI Standards", "ISO 22000", "Sensory Evaluation", "Statistical QC"],
        lessons: 34,
        hours: "22 hrs",
        level: "Regulatory",
        btn: "Explore Quality",
    },
    {
        id: "food-biotech",
        title: "Food Biotechnology",
        tag: "Emerging Tech",
        icon: "🧬",
        accentColor: "#ec4899",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=700&q=80",
        desc: "Explore enzyme technology, genetic modification, fermentation engineering, and novel applications of biotechnology in the food sector.",
        topics: ["Enzyme Technology", "GMO & Biofortification", "Probiotics", "Biosensors"],
        lessons: 36,
        hours: "26 hrs",
        level: "Advanced",
        btn: "Explore Biotechnology",
    },
];

export default function CoursesSection() {
    const [active, setActive] = useState(subjects[0]);
    const [animKey, setAnimKey] = useState(0);
    const [imgLoaded, setImgLoaded] = useState(false);

    // Auto-rotation and visibility
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const previewRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActive((prev) => {
                const currentIndex = subjects.findIndex(s => s.id === prev.id);
                const nextIndex = (currentIndex + 1) % subjects.length;
                setImgLoaded(false);
                setAnimKey(k => k + 1);
                return subjects[nextIndex];
            });
        }, 4500); 
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handleSelect = (sub) => {
        if (active?.id !== sub.id) {
            setIsAutoPlaying(false);
            setImgLoaded(false);
            setActive(sub);
            setAnimKey((k) => k + 1);
        }
        
        // On mobile, scroll the screen back up to the preview panel smoothly
        if (window.innerWidth <= 900 && previewRef.current) {
            setTimeout(() => {
                const yOffset = -80; // Offset for a typical fixed navbar
                const y = previewRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }, 50);
        }
    };

    return (
        <section className="c-section" ref={sectionRef}>

            <div className={`c-container ${isVisible ? "animate-spawn" : "hidden-spawn"}`}>
                
                {/* ── Header ── */}
                <div className="c-header">
                    <span className="c-eyebrow">
                        <span className="c-eyebrow-dot" />
                        Academic Curriculum
                    </span>
                    <h2 className="c-heading">
                        Explore Your <span className="hl-text-course">
                            Subjects
                            <svg className="c-underline" viewBox="0 0 300 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 10C80 6 220 8 295 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 14C100 10 200 12 285 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </h2>
                    <p className="c-subheading">
                        Select a subject to preview the curriculum, key topics, and start mastering your domain.
                    </p>
                </div>

                {/* ── Grid ── */}
                <div className="c-grid">

                    {/* ──────────── PREVIEW PANEL ──────────── */}
                    <div
                        className="c-preview-panel"
                        ref={previewRef}
                        style={{ borderTop: `4px solid ${active.accentColor}` }}
                    >
                        <div key={animKey} className="c-preview-content">
                            {/* Hero image */}
                            <div className="c-img-wrap">
                                <img
                                    src={active.image}
                                    alt={active.title}
                                    onLoad={() => setImgLoaded(true)}
                                    className="c-img"
                                    style={{
                                        opacity: imgLoaded ? 1 : 0,
                                        transition: "opacity 0.6s ease",
                                    }}
                                />
                                {/* Glass Tag Overlay */}
                                <span className="c-img-tag" style={{ 
                                    background: `${active.accentColor}dd`, 
                                    color: "#fff",
                                    borderColor: `${active.accentColor}` 
                                }}>
                                    {active.icon} {active.tag}
                                </span>
                            </div>

                            {/* Body */}
                            <div className="c-preview-body">
                                <div className="c-meta-row">
                                    <span className="c-level-badge" style={{
                                        background: `${active.accentColor}1A`,   /* 10% opacity hex */
                                        color: active.accentColor,
                                        borderColor: `${active.accentColor}33`,  /* 20% opacity hex */
                                    }}>
                                        {active.level}
                                    </span>
                                    <span className="c-meta-dot" />
                                    <span className="c-meta-text">📖 {active.lessons} Lessons</span>
                                    <span className="c-meta-dot" />
                                    <span className="c-meta-text">⏱ {active.hours}</span>
                                </div>

                                <h3 className="c-preview-title">{active.title}</h3>
                                <p className="c-preview-desc">{active.desc}</p>

                                <div className="c-topics-wrap">
                                    <div className="c-topics-list">
                                        {active.topics.map((t) => (
                                            <span key={t} className="c-topic-chip" style={{
                                                background: `${active.accentColor}1A`,
                                                color: active.accentColor,
                                                borderColor: `${active.accentColor}25`,
                                            }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    className="c-cta-btn"
                                    style={{ background: active.accentColor }}
                                >
                                    {active.btn}
                                    <span className="c-cta-arrow">→</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ──────────── LIST PANEL ──────────── */}
                    <div className="c-list-panel">
                        {subjects.map((sub) => {
                            const isActive = active?.id === sub.id;
                            return (
                                <div
                                    key={sub.id}
                                    onClick={() => handleSelect(sub)}
                                    className="c-list-item"
                                    style={isActive ? {
                                        background: `${sub.accentColor}1A`,
                                        borderColor: `${sub.accentColor}40`,
                                        boxShadow: `0 8px 30px ${sub.accentColor}25`,
                                        transform: "translateX(8px) scale(1.02)",
                                    } : {}}
                                >
                                    <div className="c-item-icon" style={{
                                        background: isActive ? `${sub.accentColor}33` : undefined,
                                        boxShadow: isActive ? `0 2px 15px ${sub.accentColor}55` : undefined,
                                        transform: isActive ? "scale(1.1)" : "none",
                                    }}>
                                        <span style={{ fontSize: 18 }}>{sub.icon}</span>
                                    </div>

                                    <div className="c-item-text">
                                        <p className="c-item-title" style={isActive ? { color: sub.accentColor } : {}}>
                                            {sub.title}
                                        </p>
                                        <p className="c-item-meta">{sub.lessons} lessons</p>
                                    </div>

                                    <span className="c-item-arrow" style={{
                                        color: isActive ? sub.accentColor : undefined,
                                        transform: isActive ? "translateX(4px)" : "none",
                                    }}>
                                        ›
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}