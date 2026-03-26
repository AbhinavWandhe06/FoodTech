import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);

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
        if (footerRef.current) observer.observe(footerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <footer className={`ft-site-footer ${isVisible ? "ft-visible" : "ft-hidden"}`} ref={footerRef}>
            {/* ── TOP PRE-FOOTER CTA ── */}
            <div className="ft-pre-footer">
                <div className="ft-pf-content">
                    <h2 className="ft-pf-heading">Ready to ace your exam?</h2>
                    <p className="ft-pf-desc">Join 50,000+ top rankers using FoodTech to prepare smarter, not harder.</p>
                </div>
                <div className="ft-pf-actions">
                    <button className="ft-btn ft-btn-primary">Start Free Trial</button>
                    <button className="ft-btn ft-btn-outline">Contact Sales</button>
                </div>
            </div>

            <div className="ft-divider" />

            {/* ── MAIN FOOTER LINKS ── */}
            <div className="ft-main">
                {/* Brand Column */}
                <div className="ft-brand-col">
                    <div className="ft-logo">
                        <span className="ft-logo-icon">🍏</span> FoodTech
                    </div>
                    <p className="ft-brand-desc">
                        The ultimate destination for GATE Food Technology, ICAR, State-FSO, and industry certifications. Elevating food science education through technology.
                    </p>
                    <div className="ft-socials">
                        <a href="#" className="ft-social-icon" aria-label="Twitter">𝕏</a>
                        <a href="#" className="ft-social-icon" aria-label="LinkedIn">in</a>
                        <a href="#" className="ft-social-icon" aria-label="YouTube">▶</a>
                        <a href="#" className="ft-social-icon" aria-label="Instagram">ig</a>
                    </div>
                </div>

                {/* Link Columns */}
                <div className="ft-links-col">
                    <h4 className="ft-col-title">Product</h4>
                    <ul className="ft-link-list">
                        <li><a href="#">GATE Food Tech</a></li>
                        <li><a href="#">ICAR Exams</a></li>
                        <li><a href="#">FSSAI Central</a></li>
                        <li><a href="#">State FSO Series</a></li>
                        <li><a href="#">University Enters</a></li>
                        <li><a href="#">Mock Test Platform <span className="ft-badge">New</span></a></li>
                    </ul>
                </div>

                <div className="ft-links-col">
                    <h4 className="ft-col-title">Resources</h4>
                    <ul className="ft-link-list">
                        <li><a href="#">Previous Year Papers</a></li>
                        <li><a href="#">Syllabus PDFs</a></li>
                        <li><a href="#">Food Science Blog</a></li>
                        <li><a href="#">Success Stories</a></li>
                        <li><a href="#">Salary Calculator</a></li>
                        <li><a href="#">Cutoff Analysis</a></li>
                    </ul>
                </div>

                <div className="ft-links-col">
                    <h4 className="ft-col-title">Company</h4>
                    <ul className="ft-link-list">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Our Mentors</a></li>
                        <li><a href="#">Press Kit</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Partner Program</a></li>
                    </ul>
                </div>

                {/* Newsletter Box */}
                <div className="ft-newsletter-col">
                    <h4 className="ft-col-title">Stay Updated</h4>
                    <p className="ft-news-desc">Get the latest exam notifications and free PDFs in your inbox.</p>
                    <form className="ft-news-form" onSubmit={e => e.preventDefault()}>
                        <div className="ft-input-group">
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                    <div className="ft-contact-info">
                        <span>📞 +91 98765 43210</span>
                        <span>✉️ support@foodtech.edu</span>
                        <span>🏢 123 Tech Park, Bangalore, IN</span>
                    </div>
                </div>
            </div>

            {/* ── BOTTOM COPYRIGHT ── */}
            <div className="ft-bottom">
                <div className="ft-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <span className="ft-dot">•</span>
                    <a href="#">Terms of Service</a>
                    <span className="ft-dot">•</span>
                    <a href="#">Refund Policy</a>
                    <span className="ft-dot">•</span>
                    <a href="#">Sitemap</a>
                </div>
                <div className="ft-copyright">
                    <p>&copy; {new Date().getFullYear()} FoodTech Education Pvt Ltd. All rights reserved.</p>
                    <p className="ft-disclaimer">Not affiliated with GATE or ICAR official boards.</p>
                </div>
            </div>
        </footer>
    );
}
