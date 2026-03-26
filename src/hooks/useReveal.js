// useReveal.js
// Lightweight scroll-reveal hook — no framer-motion dependency
import { useEffect, useRef } from "react";

/**
 * @param {Object} options
 * @param {number} options.threshold - 0 to 1, when to trigger
 * @param {string} options.variant   - 'up' | 'left' | 'right' | 'scale' | 'fade'
 * @param {number} options.delay     - delay in ms added to el's own style
 */
export default function useReveal({ threshold = 0.12, variant = "up", delay } = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Add reveal class + variant class
        el.classList.add("reveal");
        if (variant === "left")  el.classList.add("reveal-left");
        if (variant === "right") el.classList.add("reveal-right");
        if (variant === "scale") el.classList.add("reveal-scale");
        if (variant === "fade")  el.classList.add("reveal-fade");
        if (delay) el.style.transitionDelay = `${delay}ms`;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible");
                    observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, variant, delay]);

    return ref;
}
