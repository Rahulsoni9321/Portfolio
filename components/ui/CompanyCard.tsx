"use client";
import { companyDetailsType } from "@/types/companyDetails";
import React, { useState } from "react";
import { BiLocationPlus } from "react-icons/bi";
import { CgCalendar } from "react-icons/cg";
import { LuCode2 } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

// Parses description array into named project tabs
// Lines starting with "──" are project section headers
function parseProjectTabs(description: string[]) {
    const tabs: { title: string; bullets: string[] }[] = [];
    let current: { title: string; bullets: string[] } | null = null;

    description.forEach((line) => {
        if (line.startsWith("──")) {
            if (current) tabs.push(current);
            current = { title: line.replace("──", "").trim(), bullets: [] };
        } else {
            if (!current) current = { title: "Overview", bullets: [] };
            current.bullets.push(line);
        }
    });
    if (current) tabs.push(current);
    return tabs;
}

const CompanyCard = ({
    hoverId,
    companyDetails,
    companyId,
    onMouseEnter,
    onMouseLeave,
}: {
    hoverId: number | null;
    companyDetails: companyDetailsType;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    companyId: number;
}) => {
    const isHovered = hoverId === companyId;
    const tabs = parseProjectTabs(companyDetails.description);
    const [activeTab, setActiveTab] = useState(0);

    const isInProgress = (title: string) => title.includes("In Progress");

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="relative rounded-2xl overflow-hidden transition-all duration-300"
            style={{
                background: isHovered ? "var(--card-hover-bg)" : "var(--card-bg)",
                border: `1px solid ${isHovered ? "var(--border-accent)" : "var(--border-subtle)"}`,
                backdropFilter: "blur(16px)",
                boxShadow: isHovered ? "var(--glow-accent)" : "none",
                transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                transition: "all 0.3s ease",
            }}
            aria-label={`Company card for ${companyDetails.name}`}
        >
            {/* Left accent bar */}
            <div
                className="absolute left-0 top-0 w-1 h-full"
                style={{ background: "linear-gradient(180deg, var(--accent-start), var(--accent-end))" }}
            />

            <div className="pl-6 pr-6 pt-6 pb-6 flex flex-col gap-5">
                {/* Header */}
                <div className="flex gap-4 items-start">
                    <img
                        className="w-12 h-12 rounded-xl object-cover shadow-lg flex-shrink-0"
                        src={companyDetails.logo}
                        alt={`${companyDetails.name} logo`}
                    />
                    <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                            <h2
                                className="text-2xl font-bold font-mono bg-clip-text text-transparent"
                                style={{ backgroundImage: "linear-gradient(135deg, var(--accent-start), var(--accent-end))" }}
                            >
                                {companyDetails.name}
                            </h2>
                            {companyDetails.isPresent && (
                                <span
                                    className="px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide"
                                    style={{
                                        background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                                        color: "#fff",
                                    }}
                                >
                                    ● Present
                                </span>
                            )}
                        </div>
                        <p className="text-sm font-normal mt-0.5" style={{ color: "var(--text-muted)" }}>
                            {companyDetails.role}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <span className="flex gap-1.5 items-center text-xs" style={{ color: "var(--text-muted)" }}>
                                <CgCalendar style={{ color: "var(--accent-start)" }} />
                                {companyDetails.duration}
                            </span>
                            <span className="flex gap-1.5 items-center text-xs" style={{ color: "var(--text-muted)" }}>
                                <BiLocationPlus style={{ color: "var(--accent-end)" }} />
                                {companyDetails.location}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tabs — only show if more than one project */}
                {tabs.length > 0 && (
                    <div>
                        {tabs.length > 1 && (
                            <div className="flex gap-2 mb-4 flex-wrap">
                                {tabs.map((tab, i) => {
                                    const isActive = i === activeTab;
                                    const inProg = isInProgress(tab.title);
                                    return (
                                        <button
                                            key={i}
                                            onClick={() => setActiveTab(i)}
                                            className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 outline-none"
                                            style={{
                                                background: isActive
                                                    ? inProg
                                                        ? "rgba(245,158,11,0.15)"
                                                        : "var(--card-hover-bg)"
                                                    : "transparent",
                                                border: `1px solid ${isActive
                                                    ? inProg
                                                        ? "rgba(245,158,11,0.4)"
                                                        : "var(--border-accent)"
                                                    : "var(--border-subtle)"}`,
                                                color: isActive
                                                    ? inProg
                                                        ? "#f59e0b"
                                                        : "var(--accent-start)"
                                                    : "var(--text-muted)",
                                            }}
                                        >
                                            {tab.title}
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {/* Tab content */}
                        <AnimatePresence mode="wait">
                            <motion.ul
                                key={activeTab}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-2"
                            >
                                {tabs[activeTab]?.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-2.5 group">
                                        <span
                                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform group-hover:scale-125"
                                            style={{ background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))" }}
                                        />
                                        <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                            {bullet}
                                        </span>
                                    </li>
                                ))}
                            </motion.ul>
                        </AnimatePresence>
                    </div>
                )}

                {/* Technologies */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <LuCode2 className="w-3.5 h-3.5" style={{ color: "var(--text-muted)" }} />
                        <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--text-muted)" }}>
                            Technologies
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {companyDetails.technologies.map((tech: string, idx: number) => (
                            <span
                                key={idx}
                                className="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
                                style={{
                                    background: "var(--card-bg)",
                                    border: "1px solid var(--border-subtle)",
                                    color: "var(--text-secondary)",
                                    backdropFilter: "blur(6px)",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
                                    (e.currentTarget as HTMLElement).style.color = "var(--accent-start)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;