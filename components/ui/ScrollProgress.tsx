"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

    return (
        <motion.div
            style={{
                scaleX,
                transformOrigin: "left",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, var(--accent-start), var(--accent-end))",
                zIndex: 9999,
                pointerEvents: "none",
            }}
        />
    );
}
