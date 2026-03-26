import React, { useEffect, useRef, useState } from "react";
import "./Resources.css";

const resources = [
    {
        id: 1,
        icon: "📰",
        title: "Blog & Articles",
        tagline: "Weekly insights curated by toppers",
        desc: "Deep-dive articles on food science, industry trends, exam strategy and research updates written by IIFPTians and GATE toppers.",
        tags: ["Food Science", "Exam Tips", "Industry Trends"],
        color: "#f59e0b",
        cta: "Read Articles",
        img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
    },
    {
        id: 2,
        icon: "📄",
        title: "Previous Papers",
        tagline: "GATE, ICAR, State-FSO & more",
        desc: "Year-wise solved question papers for GATE Food Tech, ICAR-AIEEA, State FSO exams and university entrances — all in one place.",
        tags: ["GATE 2024", "ICAR Papers", "State FSO"],
        color: "#ef4444",
        cta: "Download Papers",
        img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
    },
    {
        id: 3,
        icon: "🗒️",
        title: "Study Notes",
        tagline: "Downloadable PDF course material",
        desc: "Concise, exam-ready PDF notes curated from top coaching materials, covering every topic in the Food Technology syllabus.",
        tags: ["PDF Notes", "All Subjects", "Free Download"],
        color: "#10b981",
        cta: "Get Notes",
        img: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&q=80",
    },
];

export default function Resources() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="res-section" ref={sectionRef}>
            <div className={`res-container ${isVisible ? "res-visible" : "res-hidden"}`}>

                {/* Header */}
                <div className="res-header">
                    <span className="res-eyebrow">
                        <span className="res-eyebrow-dot" />
                        Free Resources
                    </span>
                    <h2 className="res-heading">
                        Everything You Need to{" "}
                        <span className="hl-text-res">
                            Succeed
                            <svg className="res-underline" viewBox="0 0 260 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 10C70 6 190 8 255 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 14C85 10 175 12 245 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </h2>
                    <p className="res-subheading">
                        Access curated notes, solved papers, and expert articles — all free, all in one place.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="res-grid">
                    {resources.map((item, i) => (
                        <div
                            key={item.id}
                            className="res-card"
                            style={{ "--res-color": item.color, "--res-delay": `${i * 0.12}s` }}
                        >
                            {/* Card Image */}
                            <div className="res-img-wrap">
                                <img src={item.img} alt={item.title} className="res-img" />
                                <div className="res-img-overlay" />
                                <span className="res-icon-badge">{item.icon}</span>
                            </div>

                            {/* Card Body */}
                            <div className="res-body">
                                <div className="res-tags">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="res-tag" style={{
                                            background: `${item.color}18`,
                                            color: item.color,
                                            borderColor: `${item.color}30`
                                        }}>{tag}</span>
                                    ))}
                                </div>

                                <h3 className="res-title">{item.title}</h3>
                                <p className="res-tagline">{item.tagline}</p>
                                <p className="res-desc">{item.desc}</p>

                                <button className="res-btn" style={{ background: "#22c55e" }}>
                                    {item.cta}
                                    <span className="res-btn-arrow">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}