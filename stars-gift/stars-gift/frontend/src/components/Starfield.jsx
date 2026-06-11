import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { STARS } from "../data/stars";

// Ambient drifting starfield drawn on canvas, with named clickable stars layered on top.
const AmbientCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dotCount = Math.min(260, Math.floor((width * height) / 7000));
    const dots = Array.from({ length: dotCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random() * 0.7 + 0.15,
      ax: (Math.random() - 0.5) * 0.005,
      vx: (Math.random() - 0.5) * 0.04,
      vy: (Math.random() - 0.5) * 0.02,
      phase: Math.random() * Math.PI * 2,
    }));

    let frame;
    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      // soft milky-way band
      const grad = ctx.createLinearGradient(0, height * 0.2, width, height * 0.8);
      grad.addColorStop(0, "rgba(40,55,90,0)");
      grad.addColorStop(0.5, "rgba(70,80,130,0.06)");
      grad.addColorStop(1, "rgba(40,55,90,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = width;
        if (d.x > width) d.x = 0;
        if (d.y < 0) d.y = height;
        if (d.y > height) d.y = 0;
        const twinkle = 0.6 + 0.4 * Math.sin(t * 0.001 + d.phase);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${d.a * twinkle})`;
        ctx.fill();
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden
    />
  );
};

// Draw constellation lines connecting our named stars (visual texture only)
const ConstellationLines = () => {
  // We'll connect stars within the same constellation visually; here every named
  // star is solo from a different constellation, so we instead draw a faint
  // "spring triangle"-style connection through three brightest: Arcturus-Spica-Regulus.
  const triangle = [
    STARS.find((s) => s.id === "arcturus"),
    STARS.find((s) => s.id === "spica"),
    STARS.find((s) => s.id === "regulus"),
    STARS.find((s) => s.id === "arcturus"),
  ];
  const path = triangle
    .map((s, i) => `${i === 0 ? "M" : "L"} ${s.x} ${s.y}`)
    .join(" ");
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d={path}
        stroke="rgba(253,224,71,0.10)"
        strokeWidth="0.08"
        fill="none"
        strokeDasharray="0.4 0.6"
      />
    </svg>
  );
};

export const Starfield = ({ onStarClick, discoveredIds }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-10 overflow-hidden bg-[#030408]"
      data-testid="starfield"
    >
      <AmbientCanvas />
      <ConstellationLines />

      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Named, clickable stars */}
      {STARS.map((star, idx) => {
        const found = discoveredIds.includes(star.id);
        return (
          <motion.button
            key={star.id}
            onClick={() => onStarClick(star)}
            data-testid={`star-${star.id}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${star.x}%`, top: `${star.y}%` }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.6 + idx * 0.18, ease: "easeOut" }}
            aria-label={`Star ${star.name}`}
          >
            {/* outer halo */}
            <motion.span
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: star.size * 10,
                height: star.size * 10,
                background: `radial-gradient(circle, ${star.color}55 0%, ${star.color}11 40%, transparent 70%)`,
              }}
              animate={{ scale: [1, 1.15, 1], opacity: found ? [0.4, 0.5, 0.4] : [0.7, 1, 0.7] }}
              transition={{ duration: 3.5 + (idx % 3), repeat: Infinity, ease: "easeInOut" }}
            />
            {/* core dot */}
            <span
              className="relative block rounded-full"
              style={{
                width: star.size * 2.4,
                height: star.size * 2.4,
                background: star.color,
                boxShadow: `0 0 ${star.size * 6}px ${star.color}, 0 0 ${star.size * 14}px ${star.color}88`,
                opacity: found ? 0.55 : 1,
              }}
            />
            {/* discovered tick */}
            {found && (
              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-amber-200/70"
                style={{ width: star.size * 3.6, height: star.size * 3.6 }}
              />
            )}
            {/* label on hover */}
            <span
              className="absolute left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap font-sans text-[10px] tracking-[0.35em] uppercase text-amber-100/0 group-hover:text-amber-100/80 transition-opacity duration-500"
              style={{ top: "100%" }}
            >
              {star.name}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
};
