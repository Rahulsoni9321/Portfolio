"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectDetails, MiniProjectDetails } from "@/conifg";
import { FiExternalLink, FiGithub, FiChevronRight } from "react-icons/fi";
import { HiOutlineTerminal } from "react-icons/hi";
import { GrGithub } from "react-icons/gr";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProjectSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div
      id="projects"
      className="w-full relative overflow-hidden py-20"
      style={{
        background: "linear-gradient(160deg, #0a0a14 0%, #101018 50%, var(--bg-dark-start) 100%)",
      }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,210,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* --- Featured Projects --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.22em] uppercase mb-3 block" style={{ color: "var(--text-muted)" }}>
            What I&apos;ve Built
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, var(--accent-start), var(--accent-end))" }}
          >
            Projects
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full" style={{
            background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
          }} />
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {ProjectDetails.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col"
              style={{
                background: "var(--card-bg)",
                border: `1px solid ${hoveredProject === project.id ? "var(--border-accent)" : "var(--border-subtle)"}`,
                boxShadow: hoveredProject === project.id ? "var(--glow-accent)" : "none",
                transition: "all 0.4s ease",
                transform: hoveredProject === project.id ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              {/* Image layer — blends into card with no hard cut */}
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <img
                  src={project.bgurl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Top fade: transparent → dark */}
                <div className="absolute inset-x-0 top-0 h-16"
                  style={{ background: "linear-gradient(to bottom, rgba(10,10,20,0.5), transparent)" }} />
                {/* Bottom fade: dark → card-bg (seamless blend) */}
                <div className="absolute inset-x-0 bottom-0 h-32"
                  style={{ background: "linear-gradient(to bottom, transparent 0%, var(--card-bg) 100%)" }} />

                {/* Project number badge */}
                <div
                  className="absolute top-4 left-4 text-6xl font-extrabold opacity-20 select-none pointer-events-none"
                  style={{ color: "var(--accent-start)", lineHeight: 1 }}
                >
                  0{idx + 1}
                </div>

                {/* Live / GitHub quick buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))" }}
                  >
                    <FiExternalLink className="w-3 h-3" />
                    Live
                  </a>
                  <a
                    href="https://github.com/Rahulsoni9321"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                    style={{ background: "rgba(0,0,0,0.7)", border: "1px solid var(--border-accent)", backdropFilter: "blur(8px)" }}
                  >
                    <FiGithub className="w-3 h-3" />
                    Code
                  </a>
                </div>
              </div>

              {/* Content — directly below image, no border line */}
              <div className="px-6 pb-6 pt-0 flex-1 flex flex-col" style={{ background: "var(--card-bg)" }}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                    {project.title}
                  </h3>
                  <FiChevronRight
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: "var(--accent-start)" }}
                  />
                </div>

                {/* Description — show first 2 points */}
                <div className="space-y-1.5 mb-4">
                  {project.description.slice(0, 2).map((pt, i) => (
                    <p key={i} className="text-xs leading-relaxed flex items-start gap-2" style={{ color: "var(--text-muted)" }}>
                      <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent-start)" }} />
                      {pt}
                    </p>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.Techstack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        background: "var(--card-bg)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--accent-start)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Mini Projects --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
            Mini Projects
          </h3>
          <div className="mx-auto mt-3 h-px w-12" style={{ background: "var(--border-accent)" }} />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {MiniProjectDetails.map((project, idx) => (
            <motion.a
              key={idx}
              variants={cardVariants}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} project`}
              className="group flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-subtle)",
                backdropFilter: "blur(12px)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
                (e.currentTarget as HTMLElement).style.background = "var(--card-hover-bg)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--glow-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                (e.currentTarget as HTMLElement).style.background = "var(--card-bg)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Terminal icon */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--accent-start), var(--accent-end))" }}
              >
                <HiOutlineTerminal className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{project.title}</h4>
                  <FiExternalLink
                    className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: "var(--accent-start)" }}
                  />
                </div>
                <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--text-muted)" }}>
                  {project.description[0]}
                </p>
              </div>
            </motion.a>
          ))}

          {/* GitHub CTA */}
          <motion.a
            variants={cardVariants}
            href="https://github.com/Rahulsoni9321/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore GitHub profile"
            className="group md:col-span-2 flex items-center justify-center gap-3 p-5 rounded-2xl transition-all duration-300"
            style={{
              background: "var(--card-bg)",
              border: "1px dashed var(--border-accent)",
              backdropFilter: "blur(12px)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--card-hover-bg)";
              (e.currentTarget as HTMLElement).style.boxShadow = "var(--glow-accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--card-bg)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <GrGithub className="w-5 h-5" style={{ color: "var(--accent-start)" }} />
            <span className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
              More on GitHub — Stay Tuned 🚀
            </span>
            <FiChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: "var(--accent-start)" }} />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectSection;
