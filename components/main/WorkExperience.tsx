"use client";
import React, { useState } from "react";
import { WorkExperienceDetails } from "@/conifg";
import { motion, AnimatePresence } from "framer-motion";
import { Spotlight } from "../ui/SpotLight";
import { BiLocationPlus, BiBuildings } from "react-icons/bi";
import { CgCalendar } from "react-icons/cg";
import { LuCode2 } from "react-icons/lu";

// Parse description into tabs, split by "──" prefix lines
function parseTabs(description: string[]) {
  const tabs: { title: string; bullets: string[] }[] = [];
  let current: { title: string; bullets: string[] } | null = null;
  for (const line of description) {
    if (line.startsWith("──")) {
      if (current) tabs.push(current);
      current = { title: line.replace("──", "").trim(), bullets: [] };
    } else {
      if (!current) current = { title: "Overview", bullets: [] };
      const cleaned = line.replace(/^[∗•\-\s]+/, "").trim();
      if (cleaned) current.bullets.push(cleaned);
    }
  }
  if (current) tabs.push(current);
  return tabs;
}

const cardAccents = [
  { from: "#00D2FF", to: "#3a7bd5" },
  { from: "#f093fb", to: "#f5576c" },
  { from: "#4facfe", to: "#00f2fe" },
];

export default function WorkExperience() {
  const [activeCompany, setActiveCompany] = useState(0);
  const details = WorkExperienceDetails;
  const current = details[activeCompany];
  const tabs = parseTabs(current.companyMetaData.description);
  const [activeTab, setActiveTab] = useState(0);
  const accent = cardAccents[activeCompany % cardAccents.length];

  const handleCompanyChange = (idx: number) => {
    setActiveCompany(idx);
    setActiveTab(0);
  };

  return (
    <div
      id="experience"
      className="relative min-h-screen overflow-hidden py-20"
      style={{ background: "linear-gradient(180deg, #08080f 0%, var(--bg-dark-start) 60%, #0a0a14 100%)" }}
    >
      <Spotlight className="absolute opacity-40" />

      {/* Grid bg */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase block mb-3" style={{ color: "var(--text-muted)" }}>
            Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, var(--accent-start), var(--accent-end))" }}>
            Work Experience
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full"
            style={{ background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))" }} />
        </motion.div>

        {/* Two-column layout: company list (left) + detail panel (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          {/* Left: Company selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-row lg:flex-col gap-3"
          >
            {details.map((item, idx) => {
              const isActive = activeCompany === idx;
              const acc = cardAccents[idx % cardAccents.length];
              return (
                <button
                  key={item.id}
                  onClick={() => handleCompanyChange(idx)}
                  className="relative text-left w-full rounded-2xl p-4 transition-all duration-300 outline-none overflow-hidden"
                  style={{
                    background: isActive ? "var(--card-hover-bg)" : "var(--card-bg)",
                    border: `1px solid ${isActive ? acc.from : "var(--border-subtle)"}`,
                    boxShadow: isActive ? `0 0 18px ${acc.from}30` : "none",
                  }}
                  aria-pressed={isActive}
                  aria-label={`View ${item.companyMetaData.name}`}
                >
                  {/* Accent glow bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                      style={{ background: `linear-gradient(180deg, ${acc.from}, ${acc.to})` }} />
                  )}
                  <div className="flex items-center gap-3 pl-1">
                    <img src={item.companyMetaData.logo} alt={item.companyMetaData.name}
                      className="w-9 h-9 rounded-lg object-cover flex-shrink-0 shadow" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold truncate" style={{ color: isActive ? "#fff" : "var(--text-secondary)" }}>
                        {item.companyMetaData.name}
                      </p>
                      <p className="text-[10px] mt-0.5" style={{ color: "var(--text-muted)" }}>{item.title}</p>
                    </div>
                    {item.companyMetaData.isPresent && (
                      <span className="ml-auto flex-shrink-0 text-[9px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: `${acc.from}22`, color: acc.from, border: `1px solid ${acc.from}44` }}>
                        NOW
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Right: Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCompany}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${accent.from}44`, boxShadow: `0 0 40px ${accent.from}12` }}
            >
              {/* Card banner */}
              <div className="relative px-7 pt-7 pb-5 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${accent.from}18 0%, ${accent.to}10 100%)` }}>
                {/* Glow orb */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-2xl pointer-events-none"
                  style={{ background: accent.from }} />

                <div className="flex items-start gap-5 relative z-10">
                  <img src={current.companyMetaData.logo} alt={current.companyMetaData.name}
                    className="w-16 h-16 rounded-2xl object-cover shadow-lg flex-shrink-0"
                    style={{ border: `2px solid ${accent.from}55` }} />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h2 className="text-2xl font-extrabold" style={{ color: "#fff" }}>
                        {current.companyMetaData.name}
                      </h2>
                      {current.companyMetaData.isPresent && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                          style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`, color: "#fff" }}>
                          ● Present
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <BiBuildings className="w-3.5 h-3.5" style={{ color: accent.from }} />
                      <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                        {current.companyMetaData.role}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <span className="flex gap-1.5 items-center text-xs" style={{ color: "var(--text-muted)" }}>
                        <CgCalendar style={{ color: accent.from }} />{current.companyMetaData.duration}
                      </span>
                      <span className="flex gap-1.5 items-center text-xs" style={{ color: "var(--text-muted)" }}>
                        <BiLocationPlus style={{ color: accent.to }} />{current.companyMetaData.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content area */}
              <div className="px-7 py-6" style={{ background: "var(--card-bg)" }}>
                {/* Project tabs */}
                {tabs.length > 1 && (
                  <div className="flex gap-2 mb-5 flex-wrap">
                    {tabs.map((tab, i) => {
                      const isActive = i === activeTab;
                      const inProg = tab.title.includes("In Progress");
                      return (
                        <button
                          key={i}
                          onClick={() => setActiveTab(i)}
                          className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 outline-none"
                          style={{
                            background: isActive ? (inProg ? "rgba(245,158,11,0.15)" : `${accent.from}22`) : "transparent",
                            border: `1px solid ${isActive ? (inProg ? "rgba(245,158,11,0.4)" : `${accent.from}66`) : "var(--border-subtle)"}`,
                            color: isActive ? (inProg ? "#f59e0b" : accent.from) : "var(--text-muted)",
                          }}
                        >
                          {tab.title}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Bullet list */}
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2.5 mb-6"
                  >
                    {(tabs[activeTab]?.bullets ?? []).map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }} />
                        <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{b}</span>
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>

                {/* Tech chips */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <LuCode2 className="w-3.5 h-3.5" style={{ color: "var(--text-muted)" }} />
                    <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--text-muted)" }}>
                      Tech Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {current.companyMetaData.technologies.map((tech: string) => (
                      <span key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
                        style={{
                          background: `${accent.from}12`,
                          border: `1px solid ${accent.from}33`,
                          color: accent.from,
                        }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
