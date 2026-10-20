import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data';
import SectionHead from './SectionHead';
import SkillBubbles from "./SkillBubbles";

export default function Skills() {
  return (
    <section className="section alt" id="skills">
      <div className="wrap">
        <SectionHead num="02" label="Skills" title={<>What I <em>build</em> with</>} />
        <SkillBubbles />
      </div>
    </section>
  );
}