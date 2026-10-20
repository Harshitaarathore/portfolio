import { motion } from 'framer-motion';
import { fadeUp } from '../animations';

export default function SectionHead({ num, label, title }) {
  return (
    <motion.div className="section-head" {...fadeUp}>
      <div className="giant-num">{num}</div>
      <div className="eyebrow-mono">{num} — {label}</div>
      <h2 className="section-title">{title}</h2>
    </motion.div>
  );
}