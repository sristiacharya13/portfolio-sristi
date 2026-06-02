"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Carpe Diem AI Solutions Pvt Ltd",
    period: "May 2025 – May 2026",
    type: "Full-Stack",
    accent: "var(--accent-green)",
    bullets: [
      "Engineered full-stack backend modules with end-to-end PostgreSQL/MySQL schemas, REST APIs (Node.js/Express.js), and real-time data sync.",
      "Implemented JWT-based authentication, integrating MERN stack with Moodle LMS — boosting login reliability by 25% and reducing auth drop-offs.",
      "Delivered custom Moodle plugins for course enrollment and activity tracking for 120+ active users; optimized SQL to automate reporting workflows.",
      "Audited 20+ pull requests for security gaps, query inefficiencies, and code maintainability — catching issues before they reached production.",
    ],
    tech: ["Node.js", "Express.js", "React", "MySQL", "MongoDB", "AWS"],
  },
  {
    role: "Front-End Developer Intern",
    company: "Marble Software Pvt Ltd (CogniMuse)",
    period: "January 2025 – March 2025",
    type: "Frontend",
    accent: "var(--accent-pink)",
    bullets: [
      "Optimized page-load performance of core product pages by 60% via targeted React.js/Next.js refactoring and CSS improvements.",
      "Architected a reusable TypeScript + Tailwind CSS component library that standardized cross-device layouts and accelerated frontend delivery.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: "120px 24px",
        background: "var(--surface)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
            Experience
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
          Where I&apos;ve{" "}
          <span
            style={{
              fontFamily: "Instrument Serif, serif",
              fontStyle: "italic",
              color: "var(--accent-pink)",
            }}
          >
            worked
          </span>
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ borderColor: "rgba(255,255,255,0.14)" }}
              style={{
                padding: "36px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.07)",
                background: "var(--bg)",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s",
              }}
            >
              {/* Left accent bar */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 3,
                  background: exp.accent,
                  borderRadius: "20px 0 0 20px",
                  opacity: 0.6,
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
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "3px 10px",
                      borderRadius: 100,
                      background: `${exp.accent}15`,
                      border: `1px solid ${exp.accent}30`,
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "DM Mono, monospace",
                        fontSize: 10,
                        color: exp.accent,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: 20,
                      color: "#fff",
                      letterSpacing: "-0.02em",
                      marginBottom: 4,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      fontFamily: "DM Mono, monospace",
                      fontSize: 13,
                      color: exp.accent,
                      opacity: 0.8,
                    }}
                  >
                    {exp.company}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "DM Mono, monospace",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.04em",
                    padding: "6px 12px",
                    borderRadius: 6,
                    border: "1px solid rgba(255,255,255,0.08)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {exp.period}
                </div>
              </div>

              <div style={{ marginBottom: 24, paddingLeft: 0 }}>
                {exp.bullets.map((b, bi) => (
                  <div
                    key={bi}
                    style={{
                      display: "flex",
                      gap: 12,
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        color: exp.accent,
                        opacity: 0.6,
                        fontFamily: "DM Mono, monospace",
                        fontSize: 12,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      →
                    </span>
                    <span
                      style={{
                        fontFamily: "DM Mono, monospace",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                      }}
                    >
                      {b}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {exp.tech.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontFamily: "DM Mono, monospace",
                      fontSize: 11,
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
