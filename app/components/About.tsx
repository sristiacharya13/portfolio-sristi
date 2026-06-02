"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "25%", label: "Login reliability boost" },
  { value: "60%", label: "Page load improvement" },
  { value: "120+", label: "Active users served" },
  { value: "20+", label: "PRs security audited" },
];

function AnimatedCounter({ value }: { value: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      style={{
        fontFamily: "Syne, sans-serif",
        fontWeight: 800,
        fontSize: "clamp(28px, 4vw, 44px)",
        color: "var(--accent-green)",
        letterSpacing: "-0.02em",
        display: "block",
      }}
    >
      {value}
    </motion.span>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
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
          marginBottom: 60,
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
          01 / About
        </span>
        <div
          style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(to right, rgba(227,253,245,0.2), transparent)",
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
        className="about-grid"
      >
        {/* Left: Text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: 24,
              color: "#fff",
            }}
          >
            Engineer by craft,{" "}
            <span
              style={{
                fontFamily: "Instrument Serif, serif",
                fontStyle: "italic",
                color: "var(--accent-pink)",
              }}
            >
              builder
            </span>{" "}
            by nature.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: 14,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.85,
              marginBottom: 20,
            }}
          >
            I&apos;m a Software Developer with an MCA (CGPA 8.91) from NMAM Institute
            of Technology. I specialize in building full-stack systems that actually
            ship — REST APIs, authentication pipelines, and cloud-deployed applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: "DM Mono, monospace",
              fontSize: 14,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.85,
              marginBottom: 32,
            }}
          >
            At Carpe Diem AI Solutions, I engineered backend modules handling real-time
            data sync across platforms, implemented JWT authentication for 120+ active
            users, and caught production-critical issues across 20+ security-focused code reviews.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            {["Node.js", "React", "FastAPI", "PostgreSQL", "AWS"].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "5px 12px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 6,
                  fontFamily: "DM Mono, monospace",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.04em",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: Stats */}
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                style={{
                  padding: "32px 28px",
                  background: "var(--surface)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <AnimatedCounter value={s.value} />
                <span
                  style={{
                    fontFamily: "DM Mono, monospace",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.4,
                    letterSpacing: "0.02em",
                  }}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Location / availability */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            style={{
              marginTop: 20,
              padding: "16px 20px",
              borderRadius: 12,
              border: "1px solid rgba(255,230,250,0.15)",
              background: "rgba(255,230,250,0.04)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "DM Mono, monospace",
                  fontSize: 11,
                  color: "var(--accent-pink)",
                  marginBottom: 2,
                  letterSpacing: "0.06em",
                }}
              >
                LOCATION
              </div>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                India 🇮🇳
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontFamily: "DM Mono, monospace",
                  fontSize: 11,
                  color: "var(--accent-green)",
                  marginBottom: 2,
                  letterSpacing: "0.06em",
                }}
              >
                STATUS
              </div>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Open to roles
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
