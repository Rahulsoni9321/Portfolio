"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../ui/ContactForm";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTwitterX, BsCalendar2Check } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FiFileText, FiArrowUpRight } from "react-icons/fi";

const socialLinks = [
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/Rahulsoni9321", cmd: "connect --github" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/rahul-soni-50b806203/", cmd: "connect --linkedin" },
  { icon: <BsTwitterX />, label: "Twitter", href: "https://twitter.com/SoniRahul3108", cmd: "connect --twitter" },
  { icon: <MdEmail />, label: "Email", href: "mailto:rahulsoni9321@gmail.com", cmd: "mailto --open" },
  { icon: <FaYoutube />, label: "YouTube", href: "https://www.youtube.com/@index.developers", cmd: "connect --youtube" },
];

export default function ContactMe() {
  const [terminalHover, setTerminalHover] = useState<string | null>(null);

  return (
    <div className="w-full min-h-screen relative overflow-hidden flex items-center" id="contact-inner">
      {/* ── animated mesh background ── */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #080810 0%, #0d1117 40%, #0a0d16 100%)" }} />

      {/* Pulsing accent orbs */}
      {[
        { top: "10%", left: "5%", size: "380px", color: "var(--accent-start)", delay: 0 },
        { top: "60%", right: "5%", size: "300px", color: "var(--accent-end)", delay: 1.5 },
      ].map((orb, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ width: orb.size, height: orb.size, top: orb.top, left: (orb as any).left, right: (orb as any).right, background: orb.color, filter: "blur(110px)" }}
          animate={{ opacity: [0.04, 0.1, 0.04], scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,210,255,0.4) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        {/* ── Hero text ── */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: -24 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }} viewport={{ once: true }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-[0.18em] uppercase mb-5"
            style={{ background: "rgba(0,210,255,0.1)", border: "1px solid rgba(0,210,255,0.2)", color: "var(--accent-start)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for new opportunities
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight mb-4">
            <span className="text-white">Let&apos;s </span>
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, var(--accent-start), var(--accent-end))" }}>
              Build
            </span>
            <br />
            <span className="text-white">Something </span>
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, var(--accent-end), var(--accent-start))" }}>
              Great.
            </span>
          </h2>
          <p className="text-sm md:text-base max-w-lg mx-auto mt-4" style={{ color: "var(--text-muted)" }}>
            Backend engineer open to full-time roles, freelance projects, and exciting collaborations.
          </p>
        </motion.div>

        {/* ── Main 3-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-6 items-start">

          {/* ── LEFT: Identity panel ── */}
          <motion.div className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>

            {/* Status card */}
            <div className="rounded-2xl p-5 overflow-hidden relative"
              style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", backdropFilter: "blur(12px)" }}>
              <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, var(--accent-start), transparent 70%)" }} />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>Currently available</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-0.5">Rahul Soni</h3>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>Backend & Full Stack Engineer · Mumbai, IN</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {["Node.js", "AWS", "MongoDB", "AI/LLM"].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-semibold"
                      style={{ background: "rgba(0,210,255,0.1)", border: "1px solid rgba(0,210,255,0.2)", color: "var(--accent-start)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Terminal social links */}
            <div className="rounded-2xl overflow-hidden"
              style={{ background: "#0d1117", border: "1px solid #30363d" }}>
              {/* Terminal title bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "#30363d" }}>
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
                <span className="ml-3 text-[11px] font-mono" style={{ color: "#6e7681" }}>rahul@portfolio ~ %</span>
              </div>
              {/* Terminal lines */}
              <div className="p-4 font-mono space-y-2">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer" aria-label={s.label}
                    className="flex items-center gap-2 text-xs py-1 px-2 rounded-lg transition-all duration-150 group"
                    style={{
                      color: terminalHover === s.label ? "var(--accent-start)" : "#8b949e",
                      background: terminalHover === s.label ? "rgba(0,210,255,0.07)" : "transparent",
                      textDecoration: "none",
                    }}
                    onMouseEnter={() => setTerminalHover(s.label)}
                    onMouseLeave={() => setTerminalHover(null)}
                  >
                    <span style={{ color: "#58a6ff" }}>$</span>
                    <span style={{ color: "#7ee787" }}>rahul</span>
                    <span style={{ color: "#58a6ff" }}>run</span>
                    <span className="flex-1" style={{ color: terminalHover === s.label ? "var(--accent-start)" : "#e6edf3" }}>
                      {s.cmd}
                    </span>
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Resume + BMC buttons */}
            <div className="flex gap-3">
              <a href={process.env.RESUME_LINK}
                target="_blank" rel="noopener noreferrer" aria-label="Download Resume"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                style={{ background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--glow-accent)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                <FiFileText className="w-4 h-4" /> Resume
              </a>
              {/* TODO: Replace index.developer_rahulsoni with your actual BMC username */}
              <a href="https://www.buymeacoffee.com/index.developer_rahulsoni"
                target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent-start)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)"; (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}>
                ☕ Coffee
              </a>
            </div>
          </motion.div>

          {/* ── CENTER: Contact form ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }} viewport={{ once: true }}
            className="rounded-2xl p-7 relative overflow-hidden"
            style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", backdropFilter: "blur(16px)" }}>
            {/* Subtle top-right glow */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-15 pointer-events-none blur-2xl"
              style={{ background: "var(--accent-start)" }} />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-8 rounded-full" style={{ background: "linear-gradient(90deg, var(--accent-start), var(--accent-end))" }} />
                <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>Send a Message</h3>
              </div>
              <ContactForm />
            </div>
          </motion.div>

          {/* ── RIGHT: Cal.com + quick pitch ── */}
          <motion.div className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>

            {/* Meet card */}
            {/* TODO: Replace YOUR_CAL_USERNAME with your actual Cal.com username */}
            <div className="rounded-2xl p-6 relative overflow-hidden"
              style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", backdropFilter: "blur(12px)" }}>
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 blur-2xl pointer-events-none rounded-full"
                style={{ background: "var(--accent-end)" }} />
              <div className="relative z-10">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>
                  Book a call
                </p>
                <h3 className="text-lg font-bold text-white mb-1">30-min strategy session</h3>
                <p className="text-xs mb-5" style={{ color: "var(--text-muted)" }}>
                  Let&apos;s align on your project goals, tech stack, or career questions.
                </p>
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "var(--glow-accent)" }} whileTap={{ scale: 0.97 }}
                  data-cal-link="rahul-soni-ksb0wb/30min" data-cal-config='{"layout":"month_view"}'
                  aria-label="Book a meeting" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white cursor-pointer border-0 outline-none"
                  style={{ background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))", transition: "all 0.25s ease" }}>
                  <BsCalendar2Check /> Book a Time Slot
                </motion.button>
              </div>
            </div>

            {/* What I bring card */}
            <div className="rounded-2xl p-5"
              style={{ background: "var(--card-bg)", border: "1px solid var(--border-subtle)", backdropFilter: "blur(12px)" }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>
                What I bring
              </p>
              {[
                { icon: "⚡", text: "Fast, production-grade backends" },
                { icon: "☁️", text: "Cloud-native AWS architectures" },
                { icon: "🤖", text: "LLM & AI integrations" },
                { icon: "🔌", text: "Real-time & streaming systems" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 py-2 border-b last:border-0" style={{ borderColor: "var(--border-subtle)" }}>
                  <span className="text-base">{item.icon}</span>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Response time chip */}
            <div className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-medium"
              style={{ background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.18)", color: "#4ade80" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Typically responds within 24 hours
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
