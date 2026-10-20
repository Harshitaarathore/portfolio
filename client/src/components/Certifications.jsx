import { motion } from 'framer-motion';
import { certs } from '../data';
import { fadeUp } from '../animations';

export default function Certifications() {
  return (
    <section className="section alt">
      <h2 className="title">Certifications & Achievements</h2>
      <div className="cert-grid">
        {certs.map((c) => (
          <motion.a className="card cert" key={c.name} href={c.link} target="_blank" rel="noreferrer" {...fadeUp}>
            <h3>{c.name}</h3>
            <p>{c.by} · View certificate ↗</p>
          </motion.a>
        ))}
        <motion.div className="card cert" {...fadeUp}>
          <h3>🏆 Smart India Hackathon 2025</h3>
          <p>National-level participation</p>
        </motion.div>
        <motion.div className="card cert" {...fadeUp}>
          <h3>🏆 LNM Hack 2026</h3>
          <p>Built TrustLens MVP in 72 hours</p>
        </motion.div>
      </div>
    </section>
  );
}