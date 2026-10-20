import { motion } from 'framer-motion';
import { certs } from '../data';
import { fadeUp } from '../animations';
import SectionHead from './SectionHead';

// Hackathons & events. Add a link: '/certificates/file.pdf' when you get a certificate.
const achievements = [
  {
    title: '🏆 Smart India Hackathon 2025',
    text: 'National-level hackathon participation, Sep 2025',
    // link: '/certificates/sih-2025.pdf',
  },
  {
    title: '🏆 LNM Hack 2026',
    text: 'Led a team of 3 to build the TrustLens MVP in 72 hours',
    // link: '/certificates/lnm-hack-2026.pdf',
  },
  {
    title: '🏆 Women Who Master Hackathon',
    text: 'Participation certificate',
    link: '/certificates/women-who-master.pdf',
  },
  {
    title: '🎖️ Adobe',
    text: 'Participation certificate',
    link: '/certificates/adobe.pdf',
  },
  {
    title: '🎖️ Gemini QuizWar',
    text: 'Participation certificate',
    link: '/certificates/gemini-quizwar.pdf',
  },
  {
    title: '🎖️ TRIQ',
    text: 'Participation certificate',
    link: '/certificates/triq.pdf',
  },
  {
    title: '🎖️ Unstop Week of Wins',
    text: 'Participation certificate',
    link: '/certificates/unstop-week-of-wins.pdf',
  },
    {
    title: '🏆 Zomathon — The Data Hackathon',
    text: 'Participated in the data hackathon by Coding Ninjas x Eternal',
    link: '/certificates/Cert-1.pdf',
  },
];

export default function Certifications() {
  return (
    <section className="section alt" id="certifications">
      <div className="wrap">
        <SectionHead num="04" label="Certifications" title={<>Always <em>learning</em></>} />

        <div className="cert-strip">
          {certs.map((c, i) => (
            <motion.a
              className="cert-chip"
              key={c.name}
              href={c.link || undefined}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -4 }}
            >
              {c.name} {c.link && <span className="cdate">Cert ↗</span>}
            </motion.a>
          ))}
        </div>

        <div className="ach-grid">
          {achievements.map((a, i) => (
            <motion.a
              key={a.title}
              className="card ach"
              href={a.link || undefined}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              {a.link && (
                <span className="cdate" style={{ display: 'inline-block', marginTop: 10 }}>
                  View certificate ↗
                </span>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}