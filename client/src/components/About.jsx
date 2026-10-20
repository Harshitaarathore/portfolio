import { motion } from 'framer-motion';
import { fadeUp } from '../animations';

export default function About() {
  return (
    <section className="section">
      <h2 className="title">About me</h2>
      <motion.div className="about" {...fadeUp}>
        <img
          src="/profile.jpg"
          alt="Harshita Rathore"
          className="photo"
          onError={(e) => (e.target.style.display = 'none')}
        />
        <div>
          <p>
            I'm a Computer Science undergraduate with solid fundamentals in Python and C, and
            hands-on experience building full-stack apps with Node.js, React and MySQL. I'm also
            building a foundation in cybersecurity: network security and secure coding.
            Most of my learning happens by shipping real things.
          </p>
          <ul className="facts">
            <li>📍 Jaipur, Rajasthan, India</li>
            <li>🎓 Student, B.Tech CS (2024 — 2028)</li>
            <li>💼 Open to internships and hackathon teams</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}