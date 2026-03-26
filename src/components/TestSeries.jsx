import React, { useEffect, useRef, useState } from "react";
import "./TestSeries.css";

const examData = [
    {
        id: 1,
        emoji: "📋",
        title: "GATE Food Tech",
        sub: "Full Mock Exams",
        color: "#10b981",
        delay: "0.05s",
        stat: "300+",
        statLabel: "Questions",
        formats: ["Quick Practice", "Full Mock", "Analytics"]
    },
    {
        id: 2,
        emoji: "🏛️",
        title: "ICAR Exams",
        sub: "Sectional Practice",
        color: "#3b82f6",
        delay: "0.15s",
        stat: "250+",
        statLabel: "Questions",
        formats: ["Topic-wise", "All-India Rank", "Weak Area Track"]
    },
    {
        id: 3,
        emoji: "🎓",
        title: "University Entrances",
        sub: "State & Central",
        color: "#8b5cf6",
        delay: "0.25s",
        stat: "200+",
        statLabel: "Questions",
        formats: ["Prev. Papers", "Uni Pattern", "Performance"]
    },
    {
        id: 4,
        emoji: "💼",
        title: "Industry Certs",
        sub: "FSSAI, ISO, HACCP",
        color: "#f59e0b",
        delay: "0.35s",
        stat: "150+",
        statLabel: "Questions",
        formats: ["Standards", "Cert Prep", "Score Sheet"]
    }
];

export default function TestSeries() {
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
        <section className="ts-section" ref={sectionRef}>
            <div className={`ts-wrap ${isVisible ? "ts-visible" : "ts-hidden"}`}>

                {/* Header */}
                <div className="ts-header">
                    <span className="ts-eyebrow">
                        <span className="ts-eyebrow-dot" />
                        Available Series
                    </span>
                    <h2 className="ts-heading">
                        Choose Your{" "}
                        <span className="hl-text-ts">
                            Test Series
                            <svg className="ts-underline" viewBox="0 0 300 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 10C80 6 220 8 295 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 14C100 10 200 12 285 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </h2>
                    <p className="ts-subheading">
                        Real exam simulations with in-depth analytics to sharpen your strategy.
                    </p>
                </div>

                {/* Unique Track Layout */}
                <div className="ts-track">
                    {examData.map((exam) => (
                        <div
                            key={exam.id}
                            className="ts-row"
                            style={{ "--c": exam.color, "--d": exam.delay }}
                        >
                            {/* Left: accent bar + emoji */}
                            <div className="ts-row-left">
                                <div className="ts-accent-bar" />
                                <div className="ts-emoji-ring">
                                    {exam.emoji}
                                </div>
                            </div>

                            {/* Center: title + pills */}
                            <div className="ts-row-center">
                                <div className="ts-row-titles">
                                    <span className="ts-row-name">{exam.title}</span>
                                    <span className="ts-row-sub">{exam.sub}</span>
                                </div>
                                <div className="ts-pills">
                                    {exam.formats.map(f => (
                                        <span key={f} className="ts-pill">{f}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Right: stat + CTA */}
                            <div className="ts-row-right">
                                <div className="ts-stat">
                                    <span className="ts-stat-num" style={{ color: exam.color }}>{exam.stat}</span>
                                    <span className="ts-stat-lbl">{exam.statLabel}</span>
                                </div>
                                <button className="ts-cta" style={{ "--c": exam.color }}>
                                    Start →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}