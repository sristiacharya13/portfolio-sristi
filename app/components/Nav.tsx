"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          background: scrolled
            ? "rgba(0,0,0,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: 18,
            color: "#fff",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "var(--accent-green)" }}>S</span>
          <span style={{ color: "var(--accent-pink)" }}>A</span>
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                fontSize: 13,
                fontFamily: "DM Mono, monospace",
                padding: "6px 12px",
                borderRadius: 6,
                transition: "color 0.2s, background 0.2s",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              marginLeft: 8,
              padding: "8px 18px",
              borderRadius: 8,
              background: "var(--accent-green)",
              color: "#000",
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
          }}
          className="show-mobile"
          aria-label="Menu"
        >
          <div style={{ width: 22, height: 16, position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ display: "block", height: 1.5, background: menuOpen ? "var(--accent-green)" : "#fff", transition: "0.3s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", height: 1.5, background: "#fff", transition: "0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", height: 1.5, background: menuOpen ? "var(--accent-green)" : "#fff", transition: "0.3s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </div>
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              background: "rgba(0,0,0,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              zIndex: 99,
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  fontSize: 15,
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 600,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
