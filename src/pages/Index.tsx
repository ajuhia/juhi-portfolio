
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Connect from '@/components/Connect';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Community from '@/components/Community';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="font-poppins bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Connect />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Certifications />
      <Community />
      <Contact />
    </div>
  );
};

export default Index;
