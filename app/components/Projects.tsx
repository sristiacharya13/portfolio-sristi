"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "AI-Powered HCP Interaction Logging",
    subtitle: "LangGraph Multi-Agent System",
    description:
      "Orchestrated a multi-tool AI agent using LangGraph and Llama-3.3-70B for extracting, logging, editing, and querying healthcare interaction data from free-text. Built a modular FastAPI backend with clear segregation between routes, services, and agent layers.",
    tags: ["LangGraph", "Llama-3.3-70B", "FastAPI", "Python"],
    accent: "var(--accent-green)",
    highlights: [
      "Multi-tool AI agent orchestration",
      "Healthcare data extraction pipeline",
      "Modular FastAPI architecture",
    ],
    featured: true,
  },
  {
    number: "02",
    title: "TestLab",
    subtitle: "Software Testing & Analysis Platform",
    description:
      "Unified QA platform integrating API automation, code complexity analysis, UI testing, and DB validation. Embedded ML-powered bug prediction using Random Forest and YOLOv8 for visual defect detection. Natural-language SQL generation for MySQL, PostgreSQL, and SQLite.",
    tags: ["Python", "Next.js", "TypeScript", "Random Forest", "YOLOv8"],
    accent: "var(--accent-pink)",
    highlights: [
      "ML bug prediction (Random Forest)",
      "Visual defect detection (YOLOv8)",
      "NL-to-SQL for 3 database engines",
    ],
    featured: true,
  },
  {
    number: "03",
    title: "Art Blender",
    subtitle: "Neural Style Transfer Web App",
    description:
      "Designed and implemented a VGG-19 Neural Style Transfer Flask web application that lets users generate stylized artwork from uploaded images within seconds.",
    tags: ["Python", "Flask", "VGG-19", "Neural Networks"],
    accent: "#a8f5d8",
    highlights: [
      "VGG-19 deep learning model",
      "Real-time style transfer",
      "Flask-powered web UI",
    ],
    featured: false,
  },
  {
    number: "04",
    title: "Cloud Security: IAM Management",
    subtitle: "AWS Infrastructure & Permissions",
    description:
      "Configured IAM users, groups, roles, and policies in a live AWS environment for granular permission management. Set up EC2 access controls following the principle of least privilege.",
    tags: ["AWS", "IAM", "EC2", "Cloud Security"],
    accent: "#f5e8a8",
    highlights: [
      "IAM user/group/role setup",
      "EC2 access controls",
      "Principle of least privilege",
    ],
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "120px 24px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 20,
        }}
      >
        <span
          style={{
            fontFamily: "DM Mono, monospace",
            fontSize: 11,
            color: "var(--accent-green)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          03 / Projects
        </span>
        <div
          style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to right, rgba(227,253,245,0.2), transparent)",
          }}
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: "Syne, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(28px, 4vw, 44px)",
          letterSpacing: "-0.025em",
          marginBottom: 64,
          color: "#fff",
        }}
      >
        Things I&apos;ve{" "}
        <span
          style={{
            fontFamily: "Instrument Serif, serif",
            fontStyle: "italic",
            color: "var(--accent-green)",
          }}
        >
          built
        </span>
      </motion.h2>

      {/* Featured projects (large) */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 24 }}>
        {projects
          .filter((p) => p.featured)
          .map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} large />
          ))}
      </div>

      {/* Smaller projects */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}
        className="small-projects-grid"
      >
        {projects
          .filter((p) => !p.featured)
          .map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i + 2} large={false} />
          ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .small-projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  large,
}: {
  project: (typeof projects)[0];
  index: number;
  large: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      style={{
        padding: large ? "40px 36px" : "28px 24px",
        borderRadius: 20,
        border: "1px solid rgba(255,255,255,0.07)",
        background: "var(--surface)",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "border-color 0.3s",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.14)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)")
      }
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${project.accent}10 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 20,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: 11,
              color: project.accent,
              letterSpacing: "0.1em",
              marginBottom: 8,
            }}
          >
            {project.number}
          </div>
          <h3
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: large ? 24 : 18,
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: 4,
            }}
          >
            {project.title}
          </h3>
          <div
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: 12,
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.02em",
            }}
          >
            {project.subtitle}
          </div>
        </div>

        {/* Arrow icon */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.3)",
            flexShrink: 0,
          }}
        >
          ↗
        </div>
      </div>

      <p
        style={{
          fontFamily: "DM Mono, monospace",
          fontSize: large ? 14 : 12,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.75,
          marginBottom: 24,
        }}
      >
        {project.description}
      </p>

      {large && (
        <div style={{ marginBottom: 24 }}>
          {project.highlights.map((h) => (
            <div
              key={h}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 6,
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: project.accent,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "DM Mono, monospace",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {h}
              </span>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "4px 10px",
              borderRadius: 6,
              background: `${project.accent}12`,
              border: `1px solid ${project.accent}25`,
              fontFamily: "DM Mono, monospace",
              fontSize: 11,
              color: project.accent,
              letterSpacing: "0.03em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
