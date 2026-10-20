import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import ProjectsSection from '../components/ProjectsSection';
import Certifications from '../components/Certifications';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <ProjectsSection compact />
      <Certifications />
    </>
  );
}