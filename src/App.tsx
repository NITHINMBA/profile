import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { ProductDesigns } from './components/ProductDesigns';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';

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
    <div className={`${activeSection === 'home' ? 'full-height overflow-hidden' : 'min-h-screen'} bg-white text-blue-900 transition-colors duration-300`}>
      <Navigation 
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      
      {activeSection === 'home' ? (
        <div className="h-full flex flex-col">
          <Home />
        </div>
      ) : (
        <main className="pt-24">
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'product-designs' && (
            <ProductDesigns />
          )}
          {activeSection === 'research-works' && (
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Works</h1>
                <p className="text-gray-600">Coming soon...</p>
              </div>
            </div>
          )}
          {activeSection === 'about' && <AboutMe />}
        </main>
      )}
      
      {activeSection !== 'home' && <Footer />}
    </div>
  );
}

export default App;