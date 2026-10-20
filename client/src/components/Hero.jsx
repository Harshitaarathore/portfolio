import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { API } from '../config';

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

export default function Hero() {
  const typed = useTypewriter();
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="eyebrow">Hello, I'm</p>
        <h1>Harshita <em>Rathore</em></h1>
        <h2 className="typed">{typed}<span className="cursor">|</span></h2>
        <p className="hero-sub">B.Tech CS student at JKLU, building full-stack systems one hackathon at a time.</p>
        <div className="btn-row">
          <a className="btn solid" href={`${API}/api/resume/pdf`}>Download CV (PDF)</a>
          <a className="btn outline" href={`${API}/api/resume/docx`}>Download CV (Word)</a>
        </div>
      </motion.div>
    </section>
  );
}