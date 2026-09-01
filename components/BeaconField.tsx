'use client';

import { useEffect, useRef } from 'react';

/**
 * Ambient hero animation: a drifting survey grid, a slow waterline swell,
 * and a beacon that periodically "sets" itself with a crosshair pulse.
 * Plain canvas 2D — no shader/WebGL dependency, kept deliberately restrained.
 */
export default function BeaconField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let frameId: number;
    let running = true;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    const spacing = 46;
    const start = performance.now();

    function draw(now: number) {
      const t = (now - start) / 1000;
      ctx!.clearRect(0, 0, width, height);

      // drifting grid
      const drift = (t * 4) % spacing;
      ctx!.strokeStyle = 'rgba(247, 245, 241, 0.055)';
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      for (let x = -spacing + drift; x < width + spacing; x += spacing) {
        ctx!.moveTo(x, 0);
        ctx!.lineTo(x, height);
      }
      for (let y = -spacing + drift; y < height + spacing; y += spacing) {
        ctx!.moveTo(0, y);
        ctx!.lineTo(width, y);
      }
      ctx!.stroke();

      // waterline swell near the bottom third
      const baseY = height * 0.82;
      for (let layer = 0; layer < 2; layer++) {
        ctx!.beginPath();
        ctx!.strokeStyle = layer === 0 ? 'rgba(211, 63, 50, 0.16)' : 'rgba(247, 245, 241, 0.08)';
        ctx!.lineWidth = layer === 0 ? 1.5 : 1;
        const amp = 8 + layer * 4;
        const wavelength = 220 + layer * 60;
        const phase = t * (0.35 + layer * 0.15) + layer * 1.4;
        for (let x = 0; x <= width; x += 8) {
          const y = baseY + layer * 26 + Math.sin(x / wavelength + phase) * amp;
          if (x === 0) ctx!.moveTo(x, y);
          else ctx!.lineTo(x, y);
        }
        ctx!.stroke();
      }

      // beacon: crosshair + pulsing ring, cycles every 4.2s
      const cx = width * 0.76;
      const cy = height * 0.32;
      const cycle = 4.2;
      const phase2 = t % cycle;
      const pulse = phase2 / cycle;

      ctx!.strokeStyle = 'rgba(211, 63, 50, 0.35)';
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.moveTo(cx - 26, cy);
      ctx!.lineTo(cx + 26, cy);
      ctx!.moveTo(cx, cy - 26);
      ctx!.lineTo(cx, cy + 26);
      ctx!.stroke();

      const ringRadius = 6 + pulse * 46;
      const ringOpacity = Math.max(0, 0.55 * (1 - pulse));
      ctx!.beginPath();
      ctx!.strokeStyle = `rgba(211, 63, 50, ${ringOpacity})`;
      ctx!.lineWidth = 1.5;
      ctx!.arc(cx, cy, ringRadius, 0, Math.PI * 2);
      ctx!.stroke();

      ctx!.beginPath();
      ctx!.fillStyle = '#d33f32';
      ctx!.arc(cx, cy, 3.5, 0, Math.PI * 2);
      ctx!.fill();

      if (running) frameId = requestAnimationFrame(draw);
    }
    frameId = requestAnimationFrame(draw);

    const hero = canvas.closest('.hero');
    let observer: IntersectionObserver | undefined;
    if (hero) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          running = entry.isIntersecting;
          if (running) frameId = requestAnimationFrame(draw);
          else cancelAnimationFrame(frameId);
        });
      });
      observer.observe(hero);
    }

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      observer?.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="beacon-field" aria-hidden="true" />;
}
