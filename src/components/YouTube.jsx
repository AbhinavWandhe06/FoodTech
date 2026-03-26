import React, { useEffect, useRef, useState } from "react";
import "./YouTube.css";

const videos = [
    {
        id: 1,
        title: "GATE Food Technology 2025 — Complete Strategy",
        views: "42K views",
        ago: "2 weeks ago",
        duration: "28:14",
        thumb: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=500&q=80",
        tag: "Strategy"
    },
    {
        id: 2,
        title: "Food Chemistry — Maillard Reaction Explained",
        views: "28K views",
        ago: "1 month ago",
        duration: "19:52",
        thumb: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&q=80",
        tag: "Chemistry"
    },
    {
        id: 3,
        title: "ICAR 2025 Cutoffs & Rank Analysis",
        views: "55K views",
        ago: "3 weeks ago",
        duration: "22:07",
        thumb: "https://images.unsplash.com/photo-1559757175-7b5f9a2b1b18?w=500&q=80",
        tag: "Analysis"
    }
];

const stats = [
    { value: "50K+", label: "Subscribers" },
    { value: "200+", label: "Videos" },
    { value: "2M+",  label: "Total Views" },
    { value: "4.9★", label: "Avg Rating" },
];

export default function YouTube() {
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
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="yt-section" ref={sectionRef}>

            {/* ── HERO BANNER ── */}
            <div className={`yt-banner ${isVisible ? "yt-visible" : "yt-hidden"}`}>

                {/* Decorative blobs */}
                <div className="yt-blob yt-blob-1" />
                <div className="yt-blob yt-blob-2" />

                <div className="yt-banner-inner">

                    {/* Left text */}
                    <div className="yt-left">
                        <span className="yt-eyebrow">
                            <span className="yt-yt-icon">▶</span>
                            YouTube Channel
                        </span>

                        <h2 className="yt-heading">
                            Learn Food Tech{" "}
                            <span className="yt-hl">
                                Visually
                                <svg className="yt-underline" viewBox="0 0 260 24" fill="none">
                                    <path d="M5 10C70 6 190 8 255 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 14C85 10 175 12 245 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </h2>

                        <p className="yt-desc">
                            Free lectures, exam walkthroughs, and expert sessions — updated weekly.
                            Join thousands of food tech aspirants learning on our channel.
                        </p>

                        {/* Stats row */}
                        <div className="yt-stats">
                            {stats.map(s => (
                                <div key={s.label} className="yt-stat">
                                    <span className="yt-stat-val">{s.value}</span>
                                    <span className="yt-stat-lbl">{s.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="yt-ctas">
                            <a href="#" className="yt-btn-sub">
                                <span className="yt-btn-icon">▶</span>
                                Subscribe Now
                            </a>
                            <a href="#" className="yt-btn-ghost">
                                View All Videos →
                            </a>
                        </div>
                    </div>

                    {/* Right: big featured image */}
                    <div className="yt-right">
                        <div className="yt-featured-frame">
                            <img
                                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=700&q=80"
                                alt="Featured video"
                                className="yt-featured-img"
                            />
                            <div className="yt-featured-overlay" />
                            {/* Play button */}
                            <div className="yt-play-btn">
                                <div className="yt-play-ring" />
                                <span className="yt-play-icon">▶</span>
                            </div>
                            {/* Duration badge */}
                            <span className="yt-dur-badge">35:20</span>
                            {/* Tag badge */}
                            <span className="yt-feat-tag">Featured</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── VIDEO CARDS ── */}
            <div className={`yt-videos-wrap ${isVisible ? "yt-visible" : "yt-hidden"}`}
                 style={{ animationDelay: "0.2s" }}>
                <p className="yt-recent-label">
                    <span className="yt-dot-live" />
                    Recent Uploads
                </p>
                <div className="yt-grid">
                    {videos.map((v, i) => (
                        <div
                            key={v.id}
                            className="yt-card"
                            style={{ "--vi": i }}
                        >
                            <div className="yt-thumb-wrap">
                                <img src={v.thumb} alt={v.title} className="yt-thumb" />
                                <div className="yt-thumb-overlay" />
                                <span className="yt-thumb-dur">{v.duration}</span>
                                <div className="yt-mini-play">▶</div>
                                <span className="yt-vtag">{v.tag}</span>
                            </div>
                            <div className="yt-card-body">
                                <p className="yt-card-title">{v.title}</p>
                                <div className="yt-card-meta">
                                    <span>{v.views}</span>
                                    <span className="yt-meta-dot" />
                                    <span>{v.ago}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
