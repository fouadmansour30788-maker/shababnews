'use client';

import { useEffect, useRef } from 'react';

/**
 * Lightweight 2D particle-network constellation — a dependency-free port of
 * the rebuild's Three.js hero (drifting coloured points + proximity lines).
 */
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const palette = ['#0ea5aa', '#0b7d81', '#1466c2', '#7c44d6', '#c8890f', '#0ea5aa', '#e0408a'];
    let w = 0;
    let h = 0;
    let dpr = 1;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    type P = { x: number; y: number; vx: number; vy: number; c: string; r: number };
    let pts: P[] = [];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas!.clientWidth;
      h = canvas!.clientHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = w < 768 ? 70 : 150;
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        c: palette[(Math.random() * palette.length) | 0],
        r: Math.random() * 1.6 + 0.6,
      }));
    }

    const DIST = 130;
    let raf = 0;

    function frame() {
      raf = requestAnimationFrame(frame);
      ctx!.clearRect(0, 0, w, h);

      mouse.tx += (mouse.x - mouse.tx) * 0.04;
      mouse.ty += (mouse.y - mouse.ty) * 0.04;
      const ox = mouse.tx * 18;
      const oy = mouse.ty * 12;

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      // lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < DIST) {
            ctx!.globalAlpha = (1 - d / DIST) * 0.22;
            ctx!.strokeStyle = '#0ea5aa';
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x + ox, a.y + oy);
            ctx!.lineTo(b.x + ox, b.y + oy);
            ctx!.stroke();
          }
        }
      }

      // points
      for (const p of pts) {
        ctx!.globalAlpha = 0.9;
        ctx!.fillStyle = p.c;
        ctx!.beginPath();
        ctx!.arc(p.x + ox, p.y + oy, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function onMove(e: MouseEvent) {
      mouse.x = e.clientX / window.innerWidth - 0.5;
      mouse.y = e.clientY / window.innerHeight - 0.5;
    }

    resize();
    frame();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return <canvas ref={ref} id="hero-canvas" />;
}
