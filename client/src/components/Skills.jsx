import { motion } from 'framer-motion';
import { skills } from '../data';
import { fadeUp } from '../animations';

export default function Skills() {
  return (
    <section className="section alt">
      <h2 className="title">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, list]) => (
          <motion.div className="card" key={category} {...fadeUp}>
            <h3>{category}</h3>
            {list.map((s) => (
              <div className="skill" key={s.name} data-tip={`${s.name}: ${s.level}% proficiency`}>
                <div className="skill-top"><span>{s.name}</span><span>{s.level}%</span></div>
                <div className="bar">
                  <motion.div
                    className="fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}