"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

const SectionDots = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [hoveredDot, setHoveredDot] = useState<string | null>(null);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: 0.4, rootMargin: "-10% 0px -10% 0px" }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3 items-center"
            role="navigation"
            aria-label="Section navigation"
        >
            {sections.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                    <div key={id} className="relative flex items-center justify-end">
                        {/* Tooltip label */}
                        <AnimatePresence>
                            {hoveredDot === id && (
                                <motion.span
                                    initial={{ opacity: 0, x: 8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 8 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute right-8 text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap pointer-events-none"
                                    style={{
                                        background: "rgba(0,0,0,0.8)",
                                        border: "1px solid var(--border-subtle)",
                                        color: "var(--text-secondary)",
                                        backdropFilter: "blur(8px)",
                                    }}
                                >
                                    {label}
                                </motion.span>
                            )}
                        </AnimatePresence>

                        {/* Dot */}
                        <button
                            onClick={() => scrollTo(id)}
                            onMouseEnter={() => setHoveredDot(id)}
                            onMouseLeave={() => setHoveredDot(null)}
                            aria-label={`Navigate to ${label} section`}
                            className="relative flex items-center justify-center rounded-full transition-all duration-300 outline-none"
                            style={{
                                width: isActive ? "12px" : "8px",
                                height: isActive ? "12px" : "8px",
                                background: isActive
                                    ? "linear-gradient(135deg, var(--accent-start), var(--accent-end))"
                                    : "rgba(255,255,255,0.25)",
                                boxShadow: isActive ? "var(--glow-accent)" : "none",
                                border: isActive
                                    ? "none"
                                    : "1px solid rgba(255,255,255,0.2)",
                            }}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="active-dot-ring"
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        boxShadow: "0 0 0 3px var(--accent-start)",
                                        opacity: 0.4,
                                    }}
                                />
                            )}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default SectionDots;
