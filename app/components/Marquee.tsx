"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ROLES = [
  "Full-Stack Developer",
  "API Architect",
  "React Engineer",
  "AWS Builder",
  "AI Integrator",
  "Artist",
  "Good Vibes",
];

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 600], [0, -200]);

  const repeated = [...ROLES, ...ROLES, ...ROLES];

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        padding: "24px 0",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <motion.div
        style={{ x, display: "flex", gap: 48, width: "max-content" }}
        animate={{ x: [0, -600] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {repeated.map((role, i) => (
          <span
            key={i}
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(18px, 2.5vw, 28px)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              whiteSpace: "nowrap",
            }}
          >
            {role}
            <span
              style={{
                margin: "0 24px",
                color: "var(--accent-green)",
              }}
            >
              ★
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
