import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { API } from '../config';
import { fadeUp } from '../animations';

const COLS = 8, ROWS = 8, CW = 40, RH = 46;
const WORDS = [
  { w: 'REACT', r: 0, c: 1 },
  { w: 'NODE', r: 1, c: 3 },
  { w: 'MONGO', r: 2, c: 0 },
  { w: 'PYTHON', r: 3, c: 1 },
  { w: 'SECURE', r: 4, c: 2 },
  { w: 'FLASK', r: 5, c: 0 },
  { w: 'GIT', r: 6, c: 4 },
  { w: 'DOCKER', r: 7, c: 1 },
];
const FILL = 'XQVKZWMRNTBXKQWZVXMKQRNWTZ';

const grid = Array.from({ length: ROWS }, (_, r) =>
  Array.from({ length: COLS }, (_, c) => ({ ch: FILL[(r * 7 + c * 3) % FILL.length], hi: false }))
);
WORDS.forEach(({ w, r, c }) => w.split('').forEach((ch, i) => { grid[r][c + i] = { ch, hi: true }; }));

function WordGrid() {
  return (
    <svg className="word-grid" viewBox={`-8 -4 ${COLS * CW + 16} ${ROWS * RH + 8}`}>
      {grid.map((row, r) =>
        row.map((cell, c) => (
          <text key={`${r}-${c}`} x={c * CW + CW / 2} y={r * RH + 32} className={cell.hi ? 'letter-hi' : 'letter-dim'}>
            {cell.ch}
          </text>
        ))
      )}
      {WORDS.map(({ w, r, c }, i) => (
        <motion.ellipse
          key={w}
          className="word-circle"
          cx={(c + w.length / 2) * CW}
          cy={r * RH + 23}
          rx={(w.length * CW) / 2 + 4}
          ry={20}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: i * 0.25 }}
        />
      ))}
    </svg>
  );
}

export default function About() {
  const [imgOk, setImgOk] = useState(true);
  return (
    <section id="about" className="section">
      <div className="wrap about-grid">
        <motion.div {...fadeUp}>
          <div className="eyebrow-mono">Profile</div>
          <h2 className="intro-title">Hello, I'm<br /><em>Harshita!</em></h2>
          <p className="intro-body">
            I'm a Computer Science undergraduate with solid fundamentals in Python and C, sharpened
            through projects like a DBMS-driven Lost &amp; Found Management System. I build full-stack apps
            with Node.js, React and MySQL, and I'm building a foundation in cybersecurity — system security,
            networking and secure coding. Most of my learning happens by shipping real things.
          </p>
          <div className="about-id">
            {imgOk && <img className="avatar" src="/profile.jpg" alt="Harshita" onError={() => setImgOk(false)} />}
            <ul className="facts">
              <li>📍 Jaipur, Rajasthan, India</li>
              <li>🎓 Student — B.Tech CS (2024 — 2028)</li>
            </ul>
          </div>
          <div className="cta-row">
            <Link className="btn solid" to="/projects">View my work →</Link>
            <a className="btn outline" href={`${API}/api/resume/pdf`}>Download résumé ↓</a>
          </div>
        </motion.div>

        <motion.div className="word-wrap" {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="badge-pill">✦ OPEN TO INTERNSHIPS</div>
          <WordGrid />
          <div className="contact-card">
            JKLU · Jaipur<br />rharshita175@gmail.com<br />Student / Fresher
          </div>
        </motion.div>
      </div>
    </section>
  );
}