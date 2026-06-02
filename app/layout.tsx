import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sristi Acharya — Software Developer",
  description: "Full-Stack Software Developer specializing in Node.js, React, FastAPI, and AWS. Building scalable APIs and modern web applications.",
  keywords: ["Software Developer", "Full Stack", "Node.js", "React", "FastAPI", "AWS"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ background: '#000' }}>
      <body>{children}</body>
    </html>
  );
}
