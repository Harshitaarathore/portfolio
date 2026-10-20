import { motion } from 'framer-motion';
import { timeline } from '../data';

export default function Timeline() {
  return (
    <section className="section">
      <h2 className="title">Education & Experience</h2>
      <div className="timeline">
        {timeline.map((t, i) => (
          <motion.div
            className="t-item"
            key={t.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="t-year">{t.year}</span>
            <h3>{t.title}</h3>
            <p>{t.place}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}