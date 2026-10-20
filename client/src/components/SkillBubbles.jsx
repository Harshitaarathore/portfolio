import { useLayoutEffect, useMemo, useRef, useState } from "react";

// level (0-100) only controls bubble SIZE. It is never shown on screen.
const SKILLS = [
  { name: "Python", level: 85, cat: "Languages" },
  { name: "C", level: 80, cat: "Languages" },
  { name: "C++", level: 70, cat: "Languages" },
  { name: "JavaScript", level: 85, cat: "Languages" },
  { name: "HTML", level: 90, cat: "Frontend" },
  { name: "CSS", level: 85, cat: "Frontend" },
  { name: "React", level: 75, cat: "Frontend" },
  { name: "Node.js", level: 80, cat: "Backend" },
  { name: "Express", level: 75, cat: "Backend" },
  { name: "Flask", level: 75, cat: "Backend" },
  { name: "MySQL", level: 80, cat: "Backend" },
  { name: "MongoDB", level: 70, cat: "Backend" },
  { name: "Supabase", level: 70, cat: "Backend" },
  { name: "Pandas", level: 75, cat: "ML & Tools" },
  { name: "NumPy", level: 70, cat: "ML & Tools" },
  { name: "Scikit-learn", level: 70, cat: "ML & Tools" },
  { name: "Git", level: 85, cat: "ML & Tools" },
  { name: "Docker", level: 60, cat: "ML & Tools" },
  { name: "Figma", level: 70, cat: "ML & Tools" },
];

const TABS = ["All", "Languages", "Frontend", "Backend", "ML & Tools"];

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const easeOutBack = (t) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

// Inline styles so bubbles look right even if index.css has problems
const bubbleStyle = {
  position: "absolute",
  left: 0,
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  cursor: "grab",
  userSelect: "none",
  touchAction: "none",
  transform: "scale(0)",
  willChange: "transform",
  background:
    "radial-gradient(circle at 30% 25%, #b03a58 0%, #8a2a44 40%, #5a1a2e 100%)",
  boxShadow:
    "0 14px 28px rgba(90,26,46,0.28), inset 0 -8px 16px rgba(0,0,0,0.25), inset 0 6px 10px rgba(255,255,255,0.18)",
  color: "#fdf3e7",
  fontFamily: '"Fraunces", serif',
  fontWeight: 600,
  textAlign: "center",
};

export default function SkillBubbles() {
  const [tab, setTab] = useState("All");
  const boxRef = useRef(null);

  const visible = useMemo(
    () => (tab === "All" ? SKILLS : SKILLS.filter((s) => s.cat === tab)),
    [tab]
  );

  useLayoutEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const els = Array.from(box.querySelectorAll(".sk-bubble"));
    let W = box.clientWidth || 900;
    let H = box.clientHeight || 560;

    // ---- SIZE SETTINGS (change these to taste) ----
    const MIN_R = 30; // radius of the weakest skill
    const MAX_R = 72; // radius of the strongest skill
    const LOW = 55; // level that gets MIN_R
    const HIGH = 90; // level that gets MAX_R
    // -----------------------------------------------

    const scale = clamp(W / 1000, 0.55, 1);
    const boost = visible.length < 10 ? 1.25 : 1; // fewer bubbles = bigger

    const bodies = els.map((el, i) => {
      const sk = visible[i];
      const t = clamp((sk.level - LOW) / (HIGH - LOW), 0, 1);
      const r = (MIN_R + t * (MAX_R - MIN_R)) * scale * boost;
      el.style.width = `${r * 2}px`;
      el.style.height = `${r * 2}px`;
      const fs = Math.min(r * 0.34, (r * 1.7) / (sk.name.length * 0.6));
      el.style.fontSize = `${Math.max(9, fs)}px`;
      const a = Math.random() * Math.PI * 2;
      return {
        el,
        r,
        cr: 0,
        m: r * r,
        x: W / 2 + Math.cos(a) * 4,
        y: H / 2 + Math.sin(a) * 4,
        vx: Math.cos(a) * 40,
        vy: Math.sin(a) * 40,
        grow: -i * 0.03, // small stagger so they pop out one by one
        ph: Math.random() * 6.28,
        drag: false,
        tx: 0,
        ty: 0,
        ox: 0,
        oy: 0,
      };
    });

    const pos = (e) => {
      const rect = box.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const cleanups = bodies.map((b) => {
      const down = (e) => {
        b.drag = true;
        b.el.setPointerCapture(e.pointerId);
        const p = pos(e);
        b.ox = b.x - p.x;
        b.oy = b.y - p.y;
        b.tx = p.x;
        b.ty = p.y;
        b.el.style.cursor = "grabbing";
      };
      const move = (e) => {
        if (!b.drag) return;
        const p = pos(e);
        b.tx = p.x;
        b.ty = p.y;
      };
      const up = () => {
        b.drag = false;
        b.el.style.cursor = "grab";
      };
      b.el.addEventListener("pointerdown", down);
      b.el.addEventListener("pointermove", move);
      b.el.addEventListener("pointerup", up);
      b.el.addEventListener("pointercancel", up);
      return () => {
        b.el.removeEventListener("pointerdown", down);
        b.el.removeEventListener("pointermove", move);
        b.el.removeEventListener("pointerup", up);
        b.el.removeEventListener("pointercancel", up);
      };
    });

    const onResize = () => {
      W = box.clientWidth || 900;
      H = box.clientHeight || 560;
    };
    window.addEventListener("resize", onResize);

    let raf;
    let last = performance.now();
    let time = 0;

    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;
      if (dt <= 0) return;
      time += dt;

      const kx = 0.1 * clamp(H / W, 0.25, 1);
      const ky = 0.1 * clamp(W / H, 0.25, 1);

      for (const b of bodies) {
        b.grow += dt / 0.9;
        b.cr = b.r * easeOutBack(clamp(b.grow, 0, 1));

        if (b.drag) {
          const nx = b.tx + b.ox;
          const ny = b.ty + b.oy;
          b.vx = clamp(b.vx * 0.5 + ((nx - b.x) / dt) * 0.5, -700, 700);
          b.vy = clamp(b.vy * 0.5 + ((ny - b.y) / dt) * 0.5, -700, 700);
          b.x = nx;
          b.y = ny;
          continue;
        }

        // pull to center + gentle wandering = floating feel
        b.vx += ((W / 2 - b.x) * kx + Math.cos(time * 0.7 + b.ph) * 70) * dt;
        b.vy += ((H / 2 - b.y) * ky + Math.sin(time * 0.6 + b.ph * 1.7) * 70) * dt;
        const damp = Math.exp(-1.4 * dt);
        b.vx *= damp;
        b.vy *= damp;
        b.x += b.vx * dt;
        b.y += b.vy * dt;
      }

      // collisions
      for (let it = 0; it < 2; it++) {
        for (let i = 0; i < bodies.length; i++) {
          for (let j = i + 1; j < bodies.length; j++) {
            const a = bodies[i];
            const b = bodies[j];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const d = Math.hypot(dx, dy) || 0.01;
            const min = a.cr + b.cr + 3;
            if (d >= min) continue;
            const nx = dx / d;
            const ny = dy / d;
            const ov = min - d;
            const ia = a.drag ? 0 : 1 / a.m;
            const ib = b.drag ? 0 : 1 / b.m;
            const s = ia + ib;
            if (!s) continue;
            a.x -= (nx * ov * ia) / s;
            a.y -= (ny * ov * ia) / s;
            b.x += (nx * ov * ib) / s;
            b.y += (ny * ov * ib) / s;
            const rel = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
            if (rel < 0) {
              const j2 = (-1.4 * rel) / s;
              a.vx -= j2 * ia * nx;
              a.vy -= j2 * ia * ny;
              b.vx += j2 * ib * nx;
              b.vy += j2 * ib * ny;
            }
          }
        }
      }

      // walls + draw
      for (const b of bodies) {
        const m = b.cr + 2;
        if (b.x < m) { b.x = m; b.vx = Math.abs(b.vx) * 0.5; }
        if (b.x > W - m) { b.x = W - m; b.vx = -Math.abs(b.vx) * 0.5; }
        if (b.y < m) { b.y = m; b.vy = Math.abs(b.vy) * 0.5; }
        if (b.y > H - m) { b.y = H - m; b.vy = -Math.abs(b.vy) * 0.5; }
        b.el.style.transform = `translate3d(${b.x - b.r}px, ${b.y - b.r}px, 0) scale(${b.cr / b.r})`;
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      cleanups.forEach((c) => c());
      window.removeEventListener("resize", onResize);
    };
  }, [visible]);

  return (
    <div className="skillbubbles">
      <div className="sb-tabs">
        {TABS.map((t) => (
          <button
            key={t}
            className={`sb-tab ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <p className="sb-hint">✦ Bigger bubble = stronger skill. Drag them around!</p>
      <div
        className="sb-stage"
        ref={boxRef}
        style={{
          position: "relative",
          width: "100%",
          height: window.innerWidth < 640 ? 480 : 560,
          overflow: "hidden",
        }}
      >
        {visible.map((s) => (
          <div className="sk-bubble" key={s.name} title={`${s.name}: ${s.level}% proficiency`}>
            <span style={{ pointerEvents: "none", padding: "0 6px", lineHeight: 1.1 }}>
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}