import React from 'react';
import { Experience } from './Experience';
import { Skills } from './Skills';
import { Education } from './Education';
import { Certifications } from './Certifications';
import { Contact } from './Contact';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="bg-white">
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </section>
  );
};


