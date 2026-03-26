import { useEffect, useState } from "react";
import "./liquidTabs.css";

const ITEMS = [
    { text: "New Batch Starting March 1st – Enroll Now!", badge: "🎉 NEW", badgeColor: "#4ade80" },
    { text: "Free Demo Class Every Sunday 10 AM", badge: "📚 LIVE", badgeColor: "#60a5fa" },
    { text: "50,000+ Students Successfully Placed", badge: "🏆 MILESTONE", badgeColor: "#facc15" },
    { text: "GATE 2026 Test Series Now Live", badge: "⚡ TRENDING", badgeColor: "#f87171" },
];

export default function AnnouncementSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ITEMS.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="liquid-wrapper">
            <div className="liquid-glass-container">
                {/* Background animated blobs for liquid effect */}
                <div className="liquid-blob blob-1"></div>
                <div className="liquid-blob blob-2"></div>
                <div className="liquid-blob blob-3"></div>

                <div className="liquid-content">
                    {/* HEDING FOR ANNOUNCEMENT */}
                    <div className="liquid-header">
                        <span className="sparkle-icon">✨</span>
                        <span className="header-text">Announcements</span>
                        <div className="divider"></div>
                    </div>

                    <div className="carousel-viewport">
                        <div
                            className="carousel-track"
                            style={{ transform: `translateY(-${index * 100}%)` }}
                        >
                            {ITEMS.map((item, i) => (
                                <div key={i} className="carousel-item">
                                    <span 
                                        className="item-badge" 
                                        style={{ borderColor: item.badgeColor }}
                                    >
                                        {item.badge}
                                    </span>
                                    <span className="item-text">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DOTS NAVIGATION */}
                <div className="liquid-dots">
                    {ITEMS.map((_, i) => (
                        <div 
                            key={i} 
                            className={`dot ${i === index ? 'active' : ''}`}
                            onClick={() => setIndex(i)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}