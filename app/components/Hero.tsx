"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ROLES = [
  "Full-Stack Developer",
  "API Architect",
  "React Engineer",
  "AWS Builder",
  "AI Integrator",
];

function TypewriterRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span>
      <span style={{ color: "var(--accent-pink)" }}>{displayed}</span>
      <span
        style={{
          display: "inline-block",
          width: 2,
          height: "0.85em",
          background: "var(--accent-pink)",
          marginLeft: 2,
          verticalAlign: "middle",
          animation: "blink 1s step-end infinite",
        }}
      />
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}

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
        alignItems: "center",
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
        style={{ y, opacity, position: "relative", zIndex: 1, maxWidth: 860, width: "100%", textAlign: "center" }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 100,
            border: "1px solid rgba(227,253,245,0.2)",
            background: "rgba(227,253,245,0.05)",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--accent-green)",
              display: "inline-block",
              boxShadow: "0 0 8px var(--accent-green)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <style>{`@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
          <span
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: 12,
              color: "var(--accent-green)",
              letterSpacing: "0.06em",
            }}
          >
            Available for opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(44px, 7vw, 88px)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: 16,
            color: "#fff",
          }}
        >
          Sristi Acharya
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(22px, 3.5vw, 42px)",
            letterSpacing: "-0.02em",
            marginBottom: 28,
            minHeight: "1.2em",
          }}
        >
          <TypewriterRole />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            fontFamily: "DM Mono, monospace",
            fontSize: "clamp(14px, 1.5vw, 16px)",
            color: "rgba(255,255,255,0.5)",
            maxWidth: 520,
            margin: "0 auto 48px",
            lineHeight: 1.7,
            letterSpacing: "0.01em",
          }}
        >
          Building production-ready REST APIs, auth systems, and full-stack
          applications using Node.js, React, FastAPI & AWS.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
        >
          <MagneticButton href="#projects" primary>
            View Projects
          </MagneticButton>
          <MagneticButton href="#contact" primary={false}>
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            marginTop: 56,
            display: "flex",
            gap: 24,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[
            { label: "GitHub", href: "https://github.com/sristiacharya13" },
            { label: "LinkedIn", href: "https://linkedin.com/in/sristiacharya" },
            { label: "Email", href: "mailto:sristiacharya1311@gmail.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "DM Mono, monospace",
                fontSize: 12,
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                letterSpacing: "0.08em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-green)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)")
              }
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "DM Mono, monospace",
            fontSize: 10,
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.1em",
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, rgba(227,253,245,0.5), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}

function MagneticButton({
  href,
  children,
  primary,
}: {
  href: string;
  children: React.ReactNode;
  primary: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "13px 28px",
        borderRadius: 10,
        fontFamily: "Syne, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        textDecoration: "none",
        letterSpacing: "0.01em",
        ...(primary
          ? {
              background: "var(--accent-green)",
              color: "#000",
              boxShadow: "0 0 30px rgba(227,253,245,0.2)",
            }
          : {
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.15)",
            }),
      }}
    >
      {children}
    </motion.a>
  );
}
