"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const certs = [
  {
    title: "Python and Flask Framework Complete Course",
    issuer: "Udemy",
    date: "Sep 2024",
    icon: "🐍",
    accent: "var(--accent-green)",
  },
  {
    title: "Full Stack Web Development Course 2024",
    issuer: "Udemy",
    date: "Sep 2024",
    icon: "🌐",
    accent: "var(--accent-pink)",
  },
  {
    title: "The Git and GitHub Bootcamp",
    issuer: "Udemy",
    date: "May 2024",
    icon: "🔧",
    accent: "#a8f5d8",
  },
  {
    title: "Docker for Beginners: Hands-On Practice (+12 hrs)",
    issuer: "Udemy",
    date: "Jul 2024",
    icon: "🐳",
    accent: "#f5e8a8",
  },
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="certifications"
      ref={ref}
      style={{
        padding: "120px 24px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
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
          04 / Certifications
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
        Continuous{" "}
        <span
          style={{
            fontFamily: "Instrument Serif, serif",
            fontStyle: "italic",
            color: "var(--accent-green)",
          }}
        >
          learning
        </span>
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {certs.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.09 }}
            whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.14)" }}
            style={{
              padding: "28px 24px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.07)",
              background: "var(--surface)",
              transition: "border-color 0.3s, transform 0.3s",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background: `linear-gradient(to right, transparent, ${cert.accent}40, transparent)`,
              }}
            />

            <div
              style={{
                fontSize: 28,
                marginBottom: 16,
                display: "block",
              }}
            >
              {cert.icon}
            </div>

            <h3
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: "#fff",
                lineHeight: 1.35,
                marginBottom: 10,
                letterSpacing: "-0.01em",
              }}
            >
              {cert.title}
            </h3>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "auto",
              }}
            >
              <span
                style={{
                  fontFamily: "DM Mono, monospace",
                  fontSize: 11,
                  color: cert.accent,
                  opacity: 0.8,
                  letterSpacing: "0.04em",
                }}
              >
                {cert.issuer}
              </span>
              <span
                style={{
                  fontFamily: "DM Mono, monospace",
                  fontSize: 10,
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.04em",
                }}
              >
                {cert.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
