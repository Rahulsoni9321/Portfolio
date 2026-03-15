"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StickyBMC = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50" style={{ zIndex: 9999 }}>
            {/* TODO: Replace YOUR_BMC_USERNAME with your actual Buy Me a Coffee username */}
            <a
                href={process.env.BMC_USERLINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buy me a coffee"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="flex items-center gap-2 rounded-full text-white font-semibold text-sm shadow-2xl"
                style={{
                    background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                    boxShadow: hovered ? "var(--glow-accent), 0 8px 32px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    padding: hovered ? "10px 18px" : "12px",
                }}
            >
                {/* Coffee emoji always visible */}
                <span className="text-lg" style={{ lineHeight: 1 }}>☕</span>

                {/* Label expands on hover */}
                <AnimatePresence>
                    {hovered && (
                        <motion.span
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden whitespace-nowrap text-sm font-semibold"
                        >
                            Buy Me a Coffee
                        </motion.span>
                    )}
                </AnimatePresence>
            </a>

            {/* Pulse ring when not hovered */}
            {!hovered && (
                <span
                    className="absolute inset-0 rounded-full animate-ping opacity-20 pointer-events-none"
                    style={{ background: "var(--accent-start)" }}
                />
            )}
        </div>
    );
};

export default StickyBMC;
