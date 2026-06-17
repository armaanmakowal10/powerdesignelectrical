import React from 'react';

// Animated circuit-trace background (used by the blog hero and the legal page).
// Traces are paths of horizontal/vertical segments that crawl forward, fade in
// and out, and respawn. The canvas sizes itself to its nearest sized parent.
export default function CircuitBg({ className = 'blog-circuit-bg' }) {
  const canvasRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const rafRef = React.useRef(0);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Each trace: a path of horizontal/vertical segments that crawls forward
    const TRACE_COUNT = 10;
    const COLOR = '99, 149, 255';

    const makeTrace = (w, h) => {
      const x = Math.random() * w;
      const y = Math.random() * h;
      return {
        x, y,
        segments: [],
        maxLen: 60 + Math.random() * 120,
        curLen: 0,
        dir: Math.random() < 0.5 ? 0 : 1, // 0=horiz, 1=vert
        speed: 0.4 + Math.random() * 0.8,
        alpha: 0,
        fadeIn: true,
        life: 0,
        maxLife: 180 + Math.random() * 200,
        dotX: x, dotY: y,
      };
    };

    resize();
    const w = () => canvas.width / (window.devicePixelRatio || 1);
    const h = () => canvas.height / (window.devicePixelRatio || 1);

    let traces = Array.from({ length: TRACE_COUNT }, () => makeTrace(w(), h()));

    const draw = () => {
      const cw = w(); const ch = h();
      ctx.clearRect(0, 0, cw, ch);

      traces = traces.map((t) => {
        // Fade
        if (t.fadeIn) {
          t.alpha = Math.min(1, t.alpha + 0.025);
          if (t.alpha >= 1) t.fadeIn = false;
        }
        t.life++;
        if (t.life > t.maxLife) t.alpha = Math.max(0, t.alpha - 0.03);
        if (t.alpha <= 0 && t.life > t.maxLife) return makeTrace(cw, ch);

        // Grow dot along direction
        const spd = t.speed;
        if (t.dir === 0) t.dotX += spd;
        else t.dotY += spd;
        t.curLen += spd;

        // Occasionally turn
        if (t.curLen >= t.maxLen) {
          t.segments.push({ x: t.dotX, y: t.dotY });
          t.curLen = 0;
          t.maxLen = 40 + Math.random() * 80;
          t.dir = t.dir === 0 ? 1 : 0;
          // Trim old segments to avoid infinite memory
          if (t.segments.length > 12) t.segments.shift();
        }

        // Draw trace path
        const allPoints = [{ x: t.x, y: t.y }, ...t.segments, { x: t.dotX, y: t.dotY }];
        if (allPoints.length < 2) return t;

        ctx.save();
        ctx.globalAlpha = t.alpha * 0.55;
        ctx.strokeStyle = `rgba(${COLOR}, 1)`;
        ctx.lineWidth = 1;
        ctx.shadowColor = `rgba(${COLOR}, 0.8)`;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.moveTo(allPoints[0].x, allPoints[0].y);
        for (let i = 1; i < allPoints.length; i++) ctx.lineTo(allPoints[i].x, allPoints[i].y);
        ctx.stroke();

        // Leading dot
        ctx.globalAlpha = t.alpha * 0.9;
        ctx.fillStyle = `rgba(${COLOR}, 1)`;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(t.dotX, t.dotY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return t;
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); };
  }, []);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
