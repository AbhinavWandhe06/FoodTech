import React, { useEffect, useRef, useState } from "react";
import "./DownloadApp.css";

export default function DownloadApp() {
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
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="app-section" ref={sectionRef}>
            <div className={`app-poster ${isVisible ? "app-visible" : "app-hidden"}`}>

                {/* Mesmerizing Background Orbs */}
                <div className="app-orb app-orb-1" />
                <div className="app-orb app-orb-2" />
                <div className="app-orb app-orb-3" />

                <div className="app-poster-inner">

                    {/* Left: Text & CTAs */}
                    <div className="app-content">
                        <span className="app-eyebrow">
                            <span className="app-sparkle">✨</span> Try Our App
                        </span>

                        <h2 className="app-heading">
                            Take Your Prep <br />
                            <span className="app-hl">
                                Anywhere.
                                <svg className="app-underline" viewBox="0 0 260 24" fill="none">
                                    <path d="M5 10C70 6 190 8 255 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 14C85 10 175 12 245 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </h2>

                        <p className="app-desc">
                            Download the official FoodTech app to get instant access to live classes, 10,000+ mock questions, and downloadable PDF notes—all optimized for your mobile device.
                        </p>

                        <ul className="app-features">
                            <li><span className="app-check">✓</span> Offline Downloads for Videos & PDFs</li>
                            <li><span className="app-check">✓</span> Real-Time Push Notifications for Classes</li>
                            <li><span className="app-check">✓</span> Interactive Doubt Solving Engine</li>
                        </ul>

                        <div className="app-stores">
                            <button className="app-store-btn play-store">
                                <span className="app-store-icon">▶</span>
                                <div className="app-store-text">
                                    <span>GET IT ON</span>
                                    <strong>Google Play</strong>
                                </div>
                            </button>
                            <button className="app-store-btn apple-store">
                                <span className="app-store-icon"></span>
                                <div className="app-store-text">
                                    <span>Download on the</span>
                                    <strong>App Store</strong>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Right: Floating Phones */}
                    <div className="app-visual">
                        <div className="app-phone-group">
                            {/* Back Phone */}
                            <img
                                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=400"
                                alt="App Screen Back"
                                className="app-phone app-phone-back"
                            />
                            {/* Front Phone */}
                            <img
                                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400"
                                alt="App Screen Front"
                                className="app-phone app-phone-front"
                            />

                            {/* Floating decorative elements */}
                            {/* <div className="app-float-badge badge-1">🌟 4.9 Rating</div>
                            <div className="app-float-badge badge-2">🔥 10k+ Downloads</div> */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
