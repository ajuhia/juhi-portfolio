
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SkillsGrid from '@/components/SkillsGrid';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="font-poppins bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <SkillsGrid />
      <Projects />
      <Education />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
