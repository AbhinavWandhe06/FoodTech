import React, { useEffect, useState, useRef } from "react";
import "./WhyChooseUs.css";

const features = [
  { icon: "🎥", title: "Daily Live", desc: "Interactive sessions with industry experts." },
  { icon: "📝", title: "10 Million +", desc: "Curated tests & food-science notes." },
  { icon: "🧠", title: "24 x 7", desc: "Instant doubt clearing for every concept." },
  { icon: "🏢", title: "100 +", desc: "Hybrid offline centers across India." }
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Starts animation as soon as the edge is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="why-container">
        {features.map((f, i) => (
          <div
            key={i}
            className={`why-card ${isVisible ? "animate-rise" : "hidden-state"}`}
            style={{ animationDelay: `${i * 0.2}s` }} // 0.2s gap between each card
          >
            <div className="icon-wrapper">
              <span className="feature-icon">{f.icon}</span>
            </div>
            <div className="why-content">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
            {i !== features.length - 1 && <div className="divider"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}