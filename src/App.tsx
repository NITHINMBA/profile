import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { ProductDesigns } from './components/ProductDesigns';
import ResearchWorks from './components/ResearchWorks';
import LinkedinPage from './components/LinkedinPage';
import FlipkartPage from './components/FlipkartPage';
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

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'product-designs':
        return <ProductDesigns />;
      case 'research-works':
        return <ResearchWorks />;
      case 'linkedin':
        return <LinkedinPage />;
      case 'flipkart':
        return <FlipkartPage />;
      case 'about':
        return <AboutMe />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-white text-blue-900">
      <Navigation 
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      <div className="pt-20">
        {renderContent()}
      </div>
      {activeSection !== 'home' && <Footer />}
    </div>
  );
}

export default App;