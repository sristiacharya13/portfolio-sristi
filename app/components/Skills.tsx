"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Backend",
    accent: "var(--accent-green)",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "FastAPI", level: 85 },
      { name: "Python", level: 85 },
      { name: "REST API Design", level: 92 },
      { name: "JWT Authentication", level: 88 },
    ],
  },
  {
    category: "Frontend",
    accent: "var(--accent-pink)",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 82 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML5 / CSS3", level: 90 },
    ],
  },
  {
    category: "Database",
    accent: "#a8f5d8",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 82 },
      { name: "SQLite", level: 78 },
    ],
  },
  {
    category: "Cloud & DevOps",
    accent: "#f5a8e8",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 78 },
      { name: "AWS IAM / Cognito", level: 75 },
      { name: "Git / GitHub", level: 90 },
      { name: "Docker (Beginner)", level: 65 },
    ],
  },
  {
    category: "AI / ML",
    accent: "#b8f5c8",
    skills: [
      { name: "LangGraph", level: 75 },
      { name: "LLM Integration", level: 78 },
      { name: "Random Forest", level: 72 },
      { name: "YOLOv8", level: 70 },
    ],
  },
];

function SkillBar({
  name,
  level,
  accent,
  delay,
}: {
  name: string;
  level: number;
  accent: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ marginBottom: 14 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <span
          style={{
            fontFamily: "DM Mono, monospace",
            fontSize: 12,
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "0.02em",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "DM Mono, monospace",
            fontSize: 11,
            color: "rgba(255,255,255,0.3)",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: 3,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: "100%",
            background: accent,
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "120px 24px",
        background: "var(--surface)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
            02 / Skills
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
          Tech stack &{" "}
          <span
            style={{
              fontFamily: "Instrument Serif, serif",
              fontStyle: "italic",
              color: "var(--accent-pink)",
            }}
          >
            proficiencies
          </span>
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              whileHover={{ borderColor: "rgba(255,255,255,0.14)" }}
              style={{
                padding: "28px 24px",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.07)",
                background: "var(--bg)",
                transition: "border-color 0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: group.accent,
                    boxShadow: `0 0 10px ${group.accent}`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {group.category}
                </span>
              </div>

              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  accent={group.accent}
                  delay={gi * 0.08 + si * 0.04}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
