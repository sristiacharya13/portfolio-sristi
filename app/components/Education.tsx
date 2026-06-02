"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
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
            05 / Education
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
          Academic{" "}
          <span
            style={{
              fontFamily: "Instrument Serif, serif",
              fontStyle: "italic",
              color: "var(--accent-pink)",
            }}
          >
            foundation
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ borderColor: "rgba(255,255,255,0.14)" }}
          style={{
            padding: "48px",
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.07)",
            background: "var(--bg)",
            position: "relative",
            overflow: "hidden",
            transition: "border-color 0.3s",
          }}
        >
          {/* Background decoration */}
          <div
            style={{
              position: "absolute",
              right: -60,
              top: -60,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(227,253,245,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 32,
              alignItems: "start",
            }}
            className="edu-grid"
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 12px",
                  borderRadius: 100,
                  background: "rgba(227,253,245,0.08)",
                  border: "1px solid rgba(227,253,245,0.15)",
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "DM Mono, monospace",
                    fontSize: 10,
                    color: "var(--accent-green)",
                    letterSpacing: "0.08em",
                  }}
                >
                  MASTER OF COMPUTER APPLICATIONS
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(20px, 3vw, 30px)",
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  marginBottom: 6,
                  lineHeight: 1.2,
                }}
              >
                NMAM Institute of Technology, Nitte
              </h3>

              <div
                style={{
                  fontFamily: "DM Mono, monospace",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 32,
                  letterSpacing: "0.02em",
                }}
              >
                Graduated: November 2025
              </div>

              <div
                style={{ display: "flex", gap: 32, flexWrap: "wrap" }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "DM Mono, monospace",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.1em",
                      marginBottom: 4,
                    }}
                  >
                    CGPA
                  </div>
                  <div
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: 36,
                      color: "var(--accent-green)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    8.91
                    <span
                      style={{
                        fontSize: 16,
                        color: "rgba(255,255,255,0.3)",
                        fontWeight: 400,
                      }}
                    >
                      /10
                    </span>
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "DM Mono, monospace",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.1em",
                      marginBottom: 4,
                    }}
                  >
                    FOCUS AREAS
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    {[
                      "Software Engineering",
                      "Database Systems",
                      "Web Technologies",
                      "Machine Learning",
                    ].map((area) => (
                      <div
                        key={area}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <div
                          style={{
                            width: 3,
                            height: 3,
                            borderRadius: "50%",
                            background: "var(--accent-green)",
                            opacity: 0.6,
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "DM Mono, monospace",
                            fontSize: 12,
                            color: "rgba(255,255,255,0.5)",
                          }}
                        >
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Large CGPA display */}
            <div
              style={{
                textAlign: "right",
                position: "relative",
              }}
              className="cgpa-side"
            >
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(60px, 10vw, 110px)",
                  color: "rgba(227,253,245,0.05)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                MCA
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
          }
          .cgpa-side {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
