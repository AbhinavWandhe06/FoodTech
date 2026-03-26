import React from "react";
import "./hero.css";
import heroImgLight from "../images/hero_ph1.png";
import heroImgDark from "../images/hero_ph2.png";
import LiquidTabs from "./LiquidTabs";

export default function HeroPro({ darkMode }) {
    return (
        <section className="hero-pro">
            <LiquidTabs />

            <div className="hero-pro-container">

                {/* LEFT CONTENT */}
                <div className="hero-pro-left">

                    <div className="hero-tag">
                        🌿 India's #1 FoodTech Learning Platform
                    </div>

                    <h1>
                        Learn <span className="hl-text">
                            Food Technology
                            <svg className="h-underline" viewBox="0 0 300 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 10C80 6 220 8 295 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 14C100 10 200 12 285 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span><br />
                        Like Never Before
                    </h1>

                    <p>
                        Structured courses, AI-powered test series, and real-time analytics —
                        everything you need to crack GATE, ICAR and build a strong career.
                    </p>

                    {/* CTA */}
                    <div className="hero-pro-actions">
                        <a href="#" className="btn-primary">Start Free →</a>
                        <a href="#" className="btn-secondary">▶ Watch Demo</a>
                    </div>



                </div>

                {/* RIGHT IMAGE */}
                <div className="hero-pro-right">
                    <img src={darkMode ? heroImgDark : heroImgLight} alt="FoodTech Platform Preview" />
                </div>

            </div>
        </section>
    );
}