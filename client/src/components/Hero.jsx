import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { API } from '../config';
import Sparkle from './Sparkle';

const words = ['Full-Stack Developer', 'CS Undergraduate', 'Cybersecurity Learner', 'Hackathon Builder'];

function useTypewriter() {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const delay = !del && text === word ? 1200 : del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del && text === word) setDel(true);
      else if (del && text === '') { setDel(false); setI(i + 1); }
      else setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
}

const Letters = ({ text, delay = 0 }) =>
  text.split('').map((ch, i) => (
    <motion.span
      key={i}
      style={{ display: 'inline-block' }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + i * 0.05, duration: 0.5 }}
    >
      {ch}
    </motion.span>
  ));

const socials = [
  { label: 'Email', href: 'mailto:rharshita175@gmail.com', icon: (<><path d="M4 4h16v16H4z" /><path d="M4 6l8 7 8-7" /></>) },
  { label: 'GitHub', href: 'https://github.com/Harshitaarathore', icon: <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 015 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshita-rathore-72006531a', icon: (<><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M7 7v.01M12 17v-4.5a2 2 0 014 0V17M12 17v-7" /></>) },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Harshita_Rathore/', icon: <path d="M9 6l-5 6 5 6M15 6l5 6-5 6" /> },
];

export default function Hero() {
  const typed = useTypewriter();
  const [imgOk, setImgOk] = useState(true);
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 600], [0, -120]);
  const goDown = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero">
      <div className="hero-bgwrap">
        <motion.span className="hero-bgtext" style={{ x }}>RATHORE</motion.span>
      </div>

      <Sparkle size={18} style={{ top: '14%', left: '8%' }} duration={6} />
      <Sparkle size={26} color="#C9A24B" style={{ top: '22%', right: '10%' }} duration={9} />
      <Sparkle size={14} style={{ bottom: '24%', left: '46%' }} duration={5} />
      <Sparkle size={20} color="#C9A24B" style={{ bottom: '12%', left: '12%' }} duration={8} />

      <div className="hero-center">
        <div className="hero-title-block">
          <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            Hello, I'm
          </motion.p>
          <h1 className="hero-name">
            <Letters text="Harshita" />
            <br />
            <em><Letters text="Rathore" delay={0.45} /></em>
          </h1>
          <h2 className="typed">{typed}<span className="cursor">|</span></h2>
          <motion.p className="hero-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
            CS undergrad building full-stack systems and cutting her teeth on cybersecurity — one hackathon at a time.
          </motion.p>
          <motion.div className="btn-row" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
            <a className="btn solid" href={`${API}/api/resume/pdf`}>Download CV (PDF) ↓</a>
            <a className="btn outline" href={`${API}/api/resume/docx`}>Download CV (Word) ↓</a>
          </motion.div>
          <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            {socials.map((s) => (
              <a
                key={s.label}
                className="icon-btn"
                href={s.href}
                aria-label={s.label}
                title={s.label}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24">{s.icon}</svg>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="photo-slot"
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="block" />
          <div className={imgOk ? 'frame has-img' : 'frame'}>
            {imgOk ? (
              <img src="/profile.jpg" alt="Harshita Rathore" onError={() => setImgOk(false)} />
            ) : (
              <div className="hint">ADD YOUR PHOTO<br />client/public/profile.jpg</div>
            )}
          </div>
          <Sparkle size={26} color="#C9A24B" style={{ bottom: -16, right: -14 }} />
          <div className="doodle">🔒</div>
        </motion.div>
      </div>

      <button className="scroll-cue" onClick={goDown}>
        <div className="scroll-pill">
          <svg viewBox="0 0 24 24"><path d="M12 4v16M6 14l6 6 6-6" /></svg>
        </div>
        SCROLL
      </button>
    </section>
  );
}