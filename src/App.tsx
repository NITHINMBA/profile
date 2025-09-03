import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';
import { navigationItems } from './utils/constants';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handler = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };

    window.addEventListener('navigate', handler as EventListener);
    return () => window.removeEventListener('navigate', handler as EventListener);
  }, []);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className={`${activeSection === 'home' ? 'h-screen overflow-hidden' : 'min-h-screen'} bg-white text-blue-900 transition-colors duration-300`}>
      <Navigation 
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      
      {activeSection === 'home' ? (
        <Home />
      ) : (
        <main className="pt-24">
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'about' && <AboutMe />}
        </main>
      )}
      
      {activeSection !== 'home' && <Footer />}
    </div>
  );
}

export default App;