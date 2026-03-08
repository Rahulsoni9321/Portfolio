"use client";
import React from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Languages",
    skills: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "WebSockets" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (S3, EC2, Lambda)" },
      { name: "AWS MediaConvert" },
      { name: "AWS CloudFront" },
      { name: "CDN" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Serverless" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Mongoose" },
      { name: "Aggregation Pipelines" },
    ],
  },
  {
    title: "Messaging & Streaming",
    skills: [
      { name: "Apache Kafka" },
      { name: "RabbitMQ" },
      { name: "WebSockets" },
      { name: "Twilio Media Streams" },
      { name: "Real-time Streaming" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "LLM Integration" },
      { name: "Speech-to-Text (Deepgram)" },
      { name: "Text-to-Speech" },
      { name: "Real-time Streaming Systems" },
      { name: "Llama 3" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    title: "Tools & Architecture",
    skills: [
      { name: "Microservices" },
      { name: "API Gateway" },
      { name: "Pre-signed Multipart Uploads" },
      { name: "Custom Logging" },
      { name: "System Design" },
      { name: "Git" },
    ],
  },
];

const chipVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.35, ease: "easeOut" },
  }),
};

const categoryVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" },
  }),
};

const Skills = () => {
  return (
    <motion.div
      id="skills"
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full relative overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(160deg, var(--bg-dark-start) 0%, #1a1a2e 50%, var(--bg-dark-end) 100%)",
      }}
    >
      {/* Subtle animated grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 block"
            style={{ color: "var(--text-muted)" }}
          >
            What I Work With
          </span>
          <h2
            className="text-4xl md:text-5xl 2xl:text-6xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
            }}
          >
            Skills
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
            }}
          />
          <p
            className="mt-4 text-sm max-w-xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            I thrive on diverse challenges, embodying a techstack-independent approach. Here&apos;s my current arsenal:
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              custom={catIdx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={categoryVariants}
              className="rounded-2xl p-6 group"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-subtle)",
                backdropFilter: "blur(12px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--card-hover-bg)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border-accent)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "var(--glow-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--card-bg)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border-subtle)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
                  }}
                />
                <h3
                  className="text-xs font-bold tracking-[0.15em] uppercase"
                  style={{ color: "var(--accent-start)" }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill.name}
                    custom={catIdx * 10 + skillIdx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={chipVariants}
                    whileHover={{
                      scale: 1.06,
                      boxShadow: "var(--glow-accent)",
                    }}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium cursor-default"
                    style={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-secondary)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--card-hover-bg)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--border-accent)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--accent-start)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--card-bg)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--border-subtle)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text-secondary)";
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
