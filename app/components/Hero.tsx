"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ROLES = [
  "Full-Stack Developer",
  "API Architect",
  "React Engineer",
  "AWS Builder",
  "AI Integrator",
  "Artist",
  "Good Vibes"
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0 24px",
      }}
    >
      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(227,253,245,0.07) 0%, transparent 70%)",
          top: "10%",
          left: "60%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,230,250,0.06) 0%, transparent 70%)",
          bottom: "15%",
          left: "20%",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      {/* Spline scene container */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.5,
          zIndex: 0,
        }}
      >
        <iframe
          src="https://my.spline.design/clarityfulldarkambient-0bde4f54b4a66c52d97e5f11b2063c9a/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ opacity: 0.35, pointerEvents: "none" }}
          loading="lazy"
          title="3D background"
        />
      </div>

      <motion.div
        style={{ y, opacity, position: "relative", zIndex: 1, maxWidth: 860, width: "100%", textAlign: "left" }}
      >
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(88px, 14vw, 176px)",
            lineHeight: 1.0,
            letterSpacing: "0.04em",
            marginBottom: 16,
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          Sristi Acharya
        </motion.h1>
      </motion.div>
    </section>
  );
}
