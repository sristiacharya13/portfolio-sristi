/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    name: 'Node.js',
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Python",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "PHP",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
  },
  {
    name: "HTML5",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "CSS3",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "JavaScript",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Tailwind CSS",
    url: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Next.js",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "AWS",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Docker",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  },
  {
    name: "Linux",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
  },
  {
    name: "MongoDB",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "MySQL",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "PostgreSQL",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  },
];

const SIZES = [76, 90, 82, 96, 72];

const toolkit = [
  { name: "Cursor", monogram: "Cu", category: "AI Coding", accent: "var(--accent-green)", glow: "rgba(227,253,245,0.18)", logo: "https://cdn.simpleicons.org/cursor/FFFFFF" },
  { name: "Claude", monogram: "Cl", category: "Coding/ Debugging/ Learning", accent: "var(--accent-green)", glow: "rgba(227,253,245,0.18)", logo: "https://cdn.simpleicons.org/claude" },
  { name: "ChatGPT", monogram: "G", category: "AI Assistant", accent: "var(--accent-green)", glow: "rgba(227,253,245,0.18)", logo: "/images/icons8-chatgpt-50.png" },
  { name: "Kilo Code", monogram: "K", category: "AI Coding", accent: "var(--accent-green)", glow: "rgba(227,253,245,0.18)", logo: "/images/kilo-code.svg", logoColor: "#FFFFFF" },
  { name: "Cline", monogram: "Ci", category: "AI Coding", accent: "var(--accent-green)", glow: "rgba(227,253,245,0.18)", logo: "/images/cline.svg", logoColor: "#FFFFFF" },
  //{ name: "Roo", monogram: "R", category: "AI Coding", accent: "var(--accent-green)", glow: "rgba(227,253,245,0.18)", logo: "/images/roocode.svg", logoColor: "#FFFFFF" },
  { name: "Replit", monogram: "Re", category: "Vibe Coding", accent: "var(--accent-green)", glow: "rgba(227,253,245,0.18)", logo: "https://cdn.simpleicons.org/replit" },
  { name: "Bolt", monogram: "B", category: "Vibe Coding", accent: "var(--accent-green)", glow: "rgba(227,253,245,0.18)", logo: "/images/bolt.svg"},
  { name: "Lovable", monogram: "Lo", category: "Vibe Coding", accent: "var(--accent-green)", glow: "rgba(227,253,245,0.18)", logo: "/images/lovable-color.svg" },
  { name: "v0.dev", monogram: "v0", category: "Vibe Coding", accent: "var(--accent-green)", glow: "rgba(227,253,245,0.18)", logo: "/images/v0.svg", logoColor: "#FFFFFF" },
  { name: "Perplexity", monogram: "P", category: "Research", accent: "var(--accent-pink)", glow: "rgba(255,230,250,0.18)", logo: "https://cdn.simpleicons.org/perplexity" },
  //{ name: "ChatGPT", monogram: "G", category: "Research", accent: "var(--accent-pink)", glow: "rgba(255,230,250,0.18)", logo: "/images/chatgpt.svg" },
  //{ name: "Claude", monogram: "Cl", category: "Research", accent: "var(--accent-pink)", glow: "rgba(255,230,250,0.18)", logo: "https://cdn.simpleicons.org/claude" },
  { name: "Grammarly", monogram: "Gr", category: "Writing", accent: "var(--accent-green)", glow: "rgba(227,253,245,0.18)", logo: "https://cdn.simpleicons.org/grammarly" },
  { name: "Notion", monogram: "N", category: "Productivity", accent: "var(--accent-pink)", glow: "rgba(255,230,250,0.18)", logo: "https://cdn.simpleicons.org/notion/FFFFFF" },
  { name: "VS Code", monogram: "VS", category: "Development", accent: "var(--accent-pink)", glow: "rgba(255,230,250,0.18)", logo: "/images/visual-studio-code.svg" }, 
  { name: "NotebookLM", monogram: "N", category: "Learning", accent: "var(--accent-pink)", glow: "rgba(255,230,250,0.18)", logo: "/images/notebooklm.svg" }, 
  { name: "GOOGLE GEMINI", monogram: "G", category: "AI Assistant", accent: "var(--accent-pink)", glow: "rgba(255,230,250,0.18)", logo: "/images/google-gemini.svg"},
];

function floatParams(i: number) {
  const duration = 4 + (i % 5) * 0.45;
  const delay = (i * 0.37) % 3;
  const amp = 10 + (i % 3) * 4;
  const rotate = i % 2 === 0 ? 3 : -3;
  return { duration, delay, amp, rotate };
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
            fontFamily: "Barlow, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(48px, 9vw, 120px)",
            lineHeight: 1.0,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "#fff",
            marginBottom: 56,
          }}
        >
          Tech Stack &amp; Proficiencies
        </motion.h2>

        {/* Floating logo constellation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px 28px",
            minHeight: 360,
          }}
        >
          {skills.map((skill, i) => {
            const { duration, delay, amp, rotate } = floatParams(i);
            const size = SIZES[i % SIZES.length];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={
                  inView
                    ? { opacity: 1, scale: 1, y: [0, -amp, 0], rotate: [0, rotate, 0] }
                    : { opacity: 0 }
                }
                transition={{
                  opacity: { duration: 0.5, delay: 0.3 + i * 0.04 },
                  scale: { duration: 0.5, delay: 0.3 + i * 0.04 },
                  y: { duration, delay, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration, delay, repeat: Infinity, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.14 }}
                title={skill.name}
                style={{
                  width: size,
                  height: size,
                  borderRadius: 22,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                  boxShadow: "0 0 26px rgba(255,255,255,0.06), inset 0 0 18px rgba(255,255,255,0.03)",
                  backdropFilter: "blur(6px)",
                  cursor: "default",
                }}
              >
                <img
                  src={skill.url}
                  alt={skill.name}
                  style={{ width: "60%", height: "60%", objectFit: "contain" }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* My Toolkit — productivity & workflow tools */}
        <div style={{ marginTop: 120, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 72 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "DM Mono, monospace",
                fontSize: 11,
                color: "var(--text-muted)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Toolkit / Workflow
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "linear-gradient(to right, rgba(255,255,255,0.12), transparent)",
              }}
            />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 9vw, 120px)",
              lineHeight: 1.0,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: 12,
            }}
          >
            My Toolkit
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: 14,
              color: "var(--text-secondary)",
              maxWidth: 560,
              marginBottom: 56,
              lineHeight: 1.6,
            }}
          >
            Beyond the languages and frameworks I build with, these are the AI tools and
            productivity software I reach for daily to code faster, research smarter, write
            better, and stay organized.
          </motion.p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
              gap: 22,
            }}
          >
            {toolkit.map((tool, i) => (
              <motion.div
                key={`${tool.name}-${tool.category}`}
                initial={{ opacity: 0, y: 26 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.06 }}
                whileHover={{ scale: 1.04, y: -6 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 18,
                  padding: "36px 22px",
                  borderRadius: 22,
                  border: "1px solid var(--border)",
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
                  cursor: "default",
                  transition:
                    "border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tool.accent;
                  e.currentTarget.style.boxShadow = `0 14px 40px ${tool.glow}`;
                  e.currentTarget.style.background =
                    "linear-gradient(160deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.35)";
                  e.currentTarget.style.background =
                    "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))";
                }}
              >
                <span
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: 22,
                    color: tool.logo ? "inherit" : "#000",
                    background: tool.logo
                      ? "transparent"
                      : `linear-gradient(135deg, ${tool.accent}, rgba(255,255,255,0.7))`,
                    boxShadow: tool.logo ? "none" : `0 6px 22px ${tool.glow}`,
                  }}
                >
                  {tool.logo ? (
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      style={{ width: 44, height: 44, objectFit: "contain", color: tool.logoColor }}
                    />
                ) : (
                  <span
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 18,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: 22,
                      color: tool.accent,
                      border: `1px solid ${tool.accent}`,
                      background: "transparent",
                    }}
                  >
                    {tool.monogram}
                  </span>
                )}
                </span>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 800,
                      fontSize: 18,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#fff",
                      lineHeight: 1.1,
                    }}
                  >
                    {tool.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "DM Mono, monospace",
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: tool.accent,
                    }}
                  >
                    {tool.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
