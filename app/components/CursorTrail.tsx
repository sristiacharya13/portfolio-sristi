"use client";
import { useEffect, useRef } from "react";

const PALETTE = ["#E3FDF5", "#FFE6FA", "#a8f5d8", "#f5e8a8"];

function hexToRgba(hex: string, a: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

function makeCanvas(w: number, h: number, dpr: number) {
  const c = document.createElement("canvas");
  c.width = Math.max(1, Math.floor(w * dpr));
  c.height = Math.max(1, Math.floor(h * dpr));
  const ctx = c.getContext("2d")!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { c, ctx };
}

type Speck = { dx: number; dy: number; r: number; ci: number };

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;

    let spray = makeCanvas(1, 1, dpr);
    let mask = makeCanvas(1, 1, dpr);
    let gradText = makeCanvas(1, 1, dpr);
    let work = makeCanvas(1, 1, dpr);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      spray = makeCanvas(W, H, dpr);
      mask = makeCanvas(W, H, dpr);
      gradText = makeCanvas(W, H, dpr);
      work = makeCanvas(W, H, dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Stable airbrush texture (fixed offsets so the puff doesn't shimmer)
    const specks: Speck[] = [];
    const SPRAY = 135;
    for (let i = 0; i < 28; i++) {
      const ang = Math.random() * Math.PI * 2;
      const rad = Math.sqrt(Math.random()) * SPRAY;
      specks.push({
        dx: Math.cos(ang) * rad,
        dy: Math.sin(ang) * rad,
        r: 10 + Math.random() * 26,
        ci: Math.floor(Math.random() * PALETTE.length),
      });
    }

    const mouse = { x: 0, y: 0, inside: false };
    let intensity = 0;

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > W || y > H) {
        mouse.inside = false;
        return;
      }
      mouse.x = x;
      mouse.y = y;
      mouse.inside = true;
    };
    const onLeave = () => {
      mouse.inside = false;
    };

    const renderGradText = () => {
      gradText.ctx.clearRect(0, 0, W, H);
      const el = document.getElementById("hero-title");
      if (!el) return;
      const cs = getComputedStyle(el);
      const fontSize = parseFloat(cs.fontSize);
      const ls = parseFloat(cs.letterSpacing) || 0;
      gradText.ctx.font = `${cs.fontWeight} ${fontSize}px ${cs.fontFamily}`;
      gradText.ctx.textBaseline = "middle";
      gradText.ctx.textAlign = "left";
      if ("letterSpacing" in gradText.ctx) {
        (gradText.ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing =
          `${ls}px`;
      }
      const hero = canvas.parentElement!.getBoundingClientRect();
      const tr = el.getBoundingClientRect();
      const x = tr.left - hero.left;
      const y = tr.top - hero.top + tr.height / 2;
      const grad = gradText.ctx.createLinearGradient(
        x,
        y - fontSize / 2,
        x + tr.width,
        y + fontSize / 2
      );
      PALETTE.forEach((c, i) => grad.addColorStop(i / (PALETTE.length - 1), c));
      gradText.ctx.fillStyle = grad;
      gradText.ctx.fillText(el.textContent || "", x, y);
    };

    const drawDab = (
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      r: number,
      color: string,
      cA: number,
      mA: number
    ) => {
      c.globalCompositeOperation = "source-over";
      const g = c.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, hexToRgba(color, cA));
      g.addColorStop(0.55, hexToRgba(color, cA * 0.55));
      g.addColorStop(1, hexToRgba(color, 0));
      c.fillStyle = g;
      c.beginPath();
      c.arc(x, y, r, 0, Math.PI * 2);
      c.fill();

      if (mA > 0) {
        const m = c.createRadialGradient(x, y, 0, x, y, r);
        m.addColorStop(0, `rgba(255,255,255,${mA})`);
        m.addColorStop(0.55, `rgba(255,255,255,${mA * 0.55})`);
        m.addColorStop(1, "rgba(255,255,255,0)");
        c.fillStyle = m;
        c.beginPath();
        c.arc(x, y, r, 0, Math.PI * 2);
        c.fill();
      }
    };

    let baseIdx = 0;
    let raf = 0;
    const draw = () => {
      baseIdx = (baseIdx + 0.01) % PALETTE.length;
      const target = mouse.inside ? 1 : 0;
      intensity += (target - intensity) * 0.18;

      spray.ctx.clearRect(0, 0, W, H);
      mask.ctx.clearRect(0, 0, W, H);

      if (intensity > 0.01) {
        const core = PALETTE[Math.floor(baseIdx) % PALETTE.length];
        // Soft brush body at the live cursor (no history -> no trail)
        drawDab(spray.ctx, mouse.x, mouse.y, 82, core, 0.5 * intensity, 0.9 * intensity);
        drawDab(mask.ctx, mouse.x, mouse.y, 82, core, 0, 0.9 * intensity);
        for (const s of specks) {
          const color = PALETTE[(Math.floor(baseIdx) + s.ci) % PALETTE.length];
          drawDab(
            spray.ctx,
            mouse.x + s.dx,
            mouse.y + s.dy,
            s.r,
            color,
            0.32 * intensity,
            0.5 * intensity
          );
          drawDab(mask.ctx, mouse.x + s.dx, mouse.y + s.dy, s.r, color, 0, 0.5 * intensity);
        }
      }

      renderGradText();

      work.ctx.clearRect(0, 0, W, H);
      work.ctx.globalCompositeOperation = "source-over";
      work.ctx.drawImage(gradText.c, 0, 0, W, H);
      work.ctx.globalCompositeOperation = "destination-in";
      work.ctx.drawImage(mask.c, 0, 0, W, H);
      work.ctx.globalCompositeOperation = "source-over";

      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(spray.c, 0, 0, W, H);
      ctx.drawImage(work.c, 0, 0, W, H);

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("blur", onLeave);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );
}
