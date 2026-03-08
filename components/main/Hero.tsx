"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "../ui/Sparkles";
import { Spotlight } from "../ui/SpotLight";
import { Meteors } from "../ui/meteors";
import { motion } from "framer-motion";
import { FiArrowRight, FiFileText } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const ROLES = [
  "Backend Engineer",
  "Full Stack Developer",
  "Cloud & AWS Architect",
  "AI/LLM Integrator",
];

const techStack = [
  "Node.js", "TypeScript", "MongoDB", "AWS", "Redis", "Kafka", "Docker", "Llama 3",
];

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/Rahulsoni9321", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rahul-soni-50b806203/", label: "LinkedIn" },
  { icon: <BsTwitterX />, href: "https://twitter.com/SoniRahul3108", label: "Twitter" },
];

function TypewriterRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let timer: NodeJS.Timeout;

    if (typing) {
      if (displayed.length < role.length) {
        timer = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 55);
      } else {
        timer = setTimeout(() => setTyping(false), 1600);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, typing, roleIdx]);

  return (
    <span
      className="text-xl md:text-2xl font-medium"
      style={{ color: "rgba(255,255,255,0.6)" }}
    >
      {displayed}
      <span
        className="inline-block w-0.5 h-6 ml-0.5 align-middle animate-pulse"
        style={{ background: "var(--accent-start)" }}
      />
    </span>
  );
}

export default function Hero() {

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      id="home"
      className="relative flex items-center justify-center w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Background layers */}
      <SparklesCore
        id="hero-sparkles"
        speed={6}
        background="transparent"
        minSize={0.8}
        maxSize={1.4}
        particleDensity={28}
        className="absolute w-full h-full"
        particleColor="#FFFFFF"
      />
      <Spotlight className="absolute top-16 opacity-70" />
      <Meteors number={18} className="z-10" />

      {/* Subtle radial accent behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(0,210,255,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pt-20">
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold tracking-wide"
          style={{
            background: "rgba(0,210,255,0.08)",
            border: "1px solid rgba(0,210,255,0.25)",
            color: "var(--accent-start)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Open to full-time & freelance opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-4"
          style={{
            background: "linear-gradient(135deg, #ffffff 40%, rgba(0,210,255,0.7) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Rahul Soni
        </motion.h1>

        {/* Animated role typewriter isolated to prevent re-renders */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="h-10 flex items-center justify-center mb-8"
        >
          <TypewriterRole />
        </motion.div>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="max-w-xl text-sm md:text-base mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Building high-performance backend systems, cloud-native architectures,
          and real-time AI pipelines that scale to millions.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex items-center gap-4 mb-10 flex-wrap justify-center"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
              boxShadow: "0 0 20px rgba(0,210,255,0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(0,210,255,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,210,255,0.25)";
            }}
          >
            Contact Me <FiArrowRight className="w-4 h-4" />
          </button>

          <a
            href={process.env.RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-start)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent-start)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <FiFileText className="w-4 h-4" /> Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex items-center gap-5 mb-12"
        >
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-base transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.5)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-start)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent-start)";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,210,255,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        {/* Tech stack marquee row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap justify-center gap-2 max-w-2xl"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-[11px] font-semibold"
              style={{
                background: "rgba(0,210,255,0.06)",
                border: "1px solid rgba(0,210,255,0.18)",
                color: "rgba(0,210,255,0.7)",
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={() => scrollTo("experience")}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(0,210,255,0.5), transparent)" }}
        />
      </motion.div>
    </div>
  );
}
