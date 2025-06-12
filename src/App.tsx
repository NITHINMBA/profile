import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { useScrollSpy } from './hooks/useScrollSpy';
import { navigationItems } from './utils/constants';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionIds = navigationItems.map(item => item.id);
  const activeSection = useScrollSpy(sectionIds);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 transition-colors duration-300">
      <Navigation 
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main>
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;