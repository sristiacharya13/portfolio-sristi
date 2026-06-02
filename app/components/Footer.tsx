"use client";
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "32px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 1100,
        margin: "0 auto",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <span
        style={{
          fontFamily: "DM Mono, monospace",
          fontSize: 11,
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.04em",
        }}
      >
        © 2025 Sristi Acharya. Designed & built with Next.js + Framer Motion.
      </span>
      <span
        style={{
          fontFamily: "DM Mono, monospace",
          fontSize: 11,
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.04em",
        }}
      >
        Bengaluru, India 🇮🇳
      </span>
    </footer>
  );
}
