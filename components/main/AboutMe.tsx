"use client";
import React from "react";
import { motion } from "framer-motion";
import { AboutMeSection } from "@/conifg";
import { BsCalendar2Check } from "react-icons/bs";
import { FiCode, FiBriefcase, FiZap } from "react-icons/fi";

const stats = [
  { value: "2+", label: "Years Exp", icon: <FiBriefcase className="w-4 h-4" /> },
  { value: "10+", label: "Projects Built", icon: <FiCode className="w-4 h-4" /> },
  { value: "1M+", label: "Users Served", icon: <FiZap className="w-4 h-4" /> },
];

const floatingBadges = [
  { label: "Node.js", top: "8%", left: "-5%" },
  { label: "AWS", top: "25%", right: "-8%" },
  { label: "Kafka", bottom: "30%", left: "-8%" },
  { label: "Llama 3", bottom: "12%", right: "-6%" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AboutMe = () => {
  return (
    <div
      id="about"
      className="w-full relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0d0d14 0%, var(--bg-dark-start) 50%, #0a0a14 100%)",
      }}
    >
      {/* Animated grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "var(--accent-start)", transform: "translate(-30%, -30%)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-6 blur-3xl pointer-events-none"
        style={{ background: "var(--accent-end)", transform: "translate(30%, 30%)" }} />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Section label */}
        <motion.div variants={itemVariants} className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.22em] uppercase mb-3 block" style={{ color: "var(--text-muted)" }}>
            Who I Am
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent" style={{
            backgroundImage: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
          }}>
            About Me
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full" style={{
            background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
          }} />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Bio card — large left */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 rounded-3xl p-7 md:p-10 flex flex-col justify-between gap-8"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border-subtle)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                Backend Engineer &amp;{" "}
                <span className="bg-clip-text text-transparent" style={{
                  backgroundImage: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                }}>Full Stack Developer</span>
              </h3>
              <p className="text-sm md:text-base mb-6" style={{ color: "var(--text-muted)" }}>
                Based in Mumbai, India 🇮🇳
              </p>
              <div className="space-y-3">
                {AboutMeSection.map((text: string, idx: number) => (
                  <p key={idx} className="text-sm leading-relaxed flex items-start gap-2" style={{ color: "var(--text-secondary)" }}>
                    <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))" }} />
                    <span>{text.trim()}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* CTA */}
            {/* TODO: Replace YOUR_CAL_USERNAME with your actual Cal.com username */}
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "var(--glow-accent)" }}
              whileTap={{ scale: 0.97 }}
              data-cal-link="rahul-soni-ksb0wb/30min"
              data-cal-config='{"layout":"month_view"}'
              aria-label="Schedule a meeting via Cal.com"
              className="self-start flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white cursor-pointer border-0 outline-none"
              style={{
                background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                transition: "all 0.3s ease",
              }}
            >
              <BsCalendar2Check />
              Schedule a Meeting
            </motion.button>
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Avatar card */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-3xl overflow-hidden flex items-center justify-center"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-subtle)",
                backdropFilter: "blur(16px)",
                minHeight: "280px",
              }}
            >
              {/* Gradient mesh bg */}
              <div className="absolute inset-0 opacity-30"
                style={{ background: "radial-gradient(ellipse at 50% 50%, var(--accent-start) 0%, transparent 70%)" }} />

              {/* Floating badges */}
              {floatingBadges.map((b, i) => (
                <motion.div
                  key={b.label}
                  className="absolute px-2.5 py-1 rounded-full text-xs font-semibold z-10"
                  style={{
                    top: b.top, bottom: b.bottom, left: b.left, right: b.right,
                    background: "rgba(0,0,0,0.7)",
                    border: "1px solid var(--border-accent)",
                    color: "var(--accent-start)",
                    backdropFilter: "blur(8px)",
                  }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                >
                  {b.label}
                </motion.div>
              ))}

              {/* Avatar */}
              <div className="relative z-10">
                <div className="absolute -inset-1 rounded-full blur-sm opacity-70 animate-pulse"
                  style={{ background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))" }} />
                <div className="relative rounded-full p-0.5" style={{
                  background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                }}>
                  {/* Unsplash placeholder — replace with actual photo */}
                  <img
                    src="/bgimage2.jpg"
                    alt="Rahul Soni"
                    className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Stats cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-4 flex flex-col items-center gap-1 text-center"
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border-subtle)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span style={{ color: "var(--accent-start)" }}>{s.icon}</span>
                  <span className="text-xl font-extrabold" style={{
                    background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>{s.value}</span>
                  <span className="text-[10px] font-medium" style={{ color: "var(--text-muted)" }}>{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Currently building card */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl p-5 flex gap-3 items-start"
              style={{
                background: "rgba(245,158,11,0.06)",
                border: "1px solid rgba(245,158,11,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="text-xl mt-0.5">🔬</span>
              <div>
                <p className="text-xs font-bold tracking-wide uppercase mb-1" style={{ color: "#f59e0b" }}>Currently Building</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Real-time AI Voice Agent — Twilio + Deepgram + Llama 3
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
