import { motion } from 'framer-motion';
import { timeline } from '../data';
import SectionHead from './SectionHead';

export default function Timeline() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead num="01" label="Education & Experience" title={<>Where it's <em>grounded</em></>} />
        <div className="timeline">
          <motion.div
            className="tl-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />
          {timeline.map((t) => (
            <motion.div
              className="t-item"
              key={t.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: 8 }}
            >
              <motion.span
                className="t-dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 0.2 }}
              />
              <span className="t-type">{t.type}</span>
              <span className="t-year">{t.year}</span>
              <h3>{t.title}</h3>
              <p>{t.place}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}