
import React from 'react';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';

const ProjectsPage = () => {
  return (
    <div className="font-poppins bg-background text-foreground">
      <Navigation />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
