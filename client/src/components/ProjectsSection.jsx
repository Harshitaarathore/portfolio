import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import SectionHead from './SectionHead';

const allTech = ['All', ...new Set(projects.flatMap((p) => p.tech))];
const slug = (name) => 'proj-' + name.replace(/\W+/g, '-').toLowerCase();

// compact = true  -> Home page (short list, click goes to /projects)
// compact = false -> Projects page (full details, expandable)
export default function ProjectsSection({ compact = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState(location.state?.open || projects[0].name);
  const shown = filter === 'All' ? projects : projects.filter((p) => p.tech.includes(filter));

  // When arriving from Home, scroll to the clicked project
  useEffect(() => {
    if (compact) return;
    const target = location.state?.open;
    if (!target) return;
    const t = setTimeout(() => {
      document.getElementById(slug(target))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
    return () => clearTimeout(t);
  }, [compact, location.state]);

  const handleHeadClick = (p, isOpen) => {
    if (compact) {
      navigate('/projects', { state: { open: p.name } });
    } else {
      setOpen(isOpen ? null : p.name);
    }
  };

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <SectionHead
          num="03"
          label="Projects"
          title={<>Things I've <em>shipped</em></>}
        />

        <div className="filters">
          {allTech.map((t) => (
            <button key={t} className={filter === t ? 'chip active' : 'chip'} onClick={() => setFilter(t)}>
              {t}
            </button>
          ))}
        </div>
        <p className="click-hint">
          {compact ? '✦ Click a project to see full details' : '✦ Click a project to expand full details'}
        </p>

        <div className="proj-list">
          <AnimatePresence initial={false}>
            {shown.map((p) => {
              const isOpen = !compact && open === p.name;
              return (
                <motion.div
                  key={p.name}
                  id={slug(p.name)}
                  className={isOpen ? 'proj-card open' : 'proj-card'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  style={{ scrollMarginTop: 100 }}
                >
                  <div className="proj-head" onClick={() => handleHeadClick(p, isOpen)}>
                    <div className="proj-thumb">{p.icon}</div>
                    <div className="proj-main">
                      <div className="proj-top">
                        <span className="proj-name">{p.name}</span>
                        <span className="stamp">{p.stamp}</span>
                      </div>
                      <div className="proj-date">{p.date}</div>
                      <div className="proj-teaser">{p.teaser}</div>
                    </div>
                    <div className="chevron">
                      {compact ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {!compact && (
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="proj-body-inner">
                            <ul className="proj-desc">
                              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                            </ul>
                            <div className="stack">
                              {p.tech.map((t) => <span className="stack-chip" key={t}>{t}</span>)}
                            </div>
                            <div className="proj-links">
                              <a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                              <a className="btn ghost" href={p.live} target="_blank" rel="noreferrer">Live Demo ↗</a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {compact && (
          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <Link to="/projects" className="btn">View all projects in detail →</Link>
          </div>
        )}
      </div>
    </section>
  );
}