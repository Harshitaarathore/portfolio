import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';

const allTech = ['All', ...new Set(projects.flatMap((p) => p.tech))];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? projects : projects.filter((p) => p.tech.includes(filter));

  return (
    <section className="section">
      <h2 className="title">Projects</h2>
      <div className="filters">
        {allTech.map((t) => (
          <button key={t} className={filter === t ? 'chip active' : 'chip'} onClick={() => setFilter(t)}>
            {t}
          </button>
        ))}
      </div>
      <div className="proj-grid">
        <AnimatePresence>
          {shown.map((p) => (
            <motion.div
              className="card proj"
              key={p.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -8 }}
            >
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="badges">
                {p.tech.map((t) => <span className="badge" key={t}>{t}</span>)}
              </div>
              <div className="btn-row">
                <a className="btn solid small" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                <a className="btn outline small" href={p.live} target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}