"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sristiacharya1311@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "120px 24px 160px",
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
          06 / Contact
        </span>
        <div
          style={{
            flex: 1,
            height: 1,
            background:
              "linear-gradient(to right, rgba(227,253,245,0.2), transparent)",
          }}
        />
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 60px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 24,
              color: "#fff",
            }}
          >
            Let&apos;s build
            <br />
            something{" "}
            <span
              style={{
                fontFamily: "Instrument Serif, serif",
                fontStyle: "italic",
                color: "var(--accent-green)",
              }}
            >
              great.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: 14,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              maxWidth: 380,
            }}
          >
            I&apos;m actively looking for full-stack or backend engineering roles.
            Whether you have a position, project, or just want to connect — my
            inbox is open.
          </motion.p>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* Email copy */}
          <button
            onClick={copyEmail}
            style={{
              width: "100%",
              padding: "20px 24px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.09)",
              background: "var(--surface)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              transition: "border-color 0.2s, background 0.2s",
              textAlign: "left",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(227,253,245,0.25)";
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(227,253,245,0.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.09)";
              (e.currentTarget as HTMLButtonElement).style.background =
                "var(--surface)";
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "DM Mono, monospace",
                  fontSize: 10,
                  color: "var(--accent-green)",
                  letterSpacing: "0.1em",
                  marginBottom: 4,
                }}
              >
                EMAIL
              </div>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                sristiacharya1311@gmail.com
              </div>
            </div>
            <span
              style={{
                fontFamily: "DM Mono, monospace",
                fontSize: 11,
                color: copied ? "var(--accent-green)" : "rgba(255,255,255,0.3)",
                transition: "color 0.2s",
                letterSpacing: "0.06em",
              }}
            >
              {copied ? "COPIED ✓" : "COPY"}
            </span>
          </button>

          {/* Phone */}
          <a
            href="tel:+916361752029"
            style={{
              width: "100%",
              padding: "20px 24px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.09)",
              background: "var(--surface)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(255,230,250,0.25)";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255,230,250,0.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(255,255,255,0.09)";
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--surface)";
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "DM Mono, monospace",
                  fontSize: 10,
                  color: "var(--accent-pink)",
                  letterSpacing: "0.1em",
                  marginBottom: 4,
                }}
              >
                PHONE
              </div>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                +91 6361752029
              </div>
            </div>
            <span
              style={{
                fontFamily: "DM Mono, monospace",
                fontSize: 11,
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.06em",
              }}
            >
              CALL ↗
            </span>
          </a>

          {/* Social row */}
          <div style={{ display: "flex", gap: 12 }}>
            {[
              {
                label: "GitHub",
                href: "https://github.com/sristiacharya13",
                accent: "var(--accent-green)",
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/sristiacharya",
                accent: "var(--accent-pink)",
              },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                style={{
                  flex: 1,
                  padding: "16px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "var(--surface)",
                  textAlign: "center",
                  textDecoration: "none",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: s.accent,
                  transition: "border-color 0.2s",
                  display: "block",
                }}
              >
                {s.label} ↗
              </motion.a>
            ))}
          </div>

          {/* Primary CTA */}
          <motion.a
            href="mailto:sristiacharya1311@gmail.com"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "block",
              width: "100%",
              padding: "18px",
              borderRadius: 14,
              background: "var(--accent-green)",
              color: "#000",
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: 16,
              textAlign: "center",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              boxShadow: "0 0 40px rgba(227,253,245,0.15)",
              transition: "box-shadow 0.3s",
              marginTop: 4,
            }}
          >
            Send me an email →
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
