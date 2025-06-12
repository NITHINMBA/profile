import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navigationItems } from '../utils/constants';
import { useDarkMode } from '../hooks/useDarkMode';

interface NavigationProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen
}) => {
  const [isDark, setIsDark] = useDarkMode();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-navy-900/90 backdrop-blur-md border-b border-gray-200 dark:border-navy-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-navy-900 dark:text-white">
              Nithiyananthan M
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-primary-600 dark:text-accent-400'
                      : 'text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-accent-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-navy-600 dark:text-navy-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-navy-900 shadow-lg border-b border-gray-200 dark:border-navy-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-primary-600 dark:text-accent-400 bg-primary-50 dark:bg-navy-800'
                    : 'text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-accent-400 hover:bg-gray-50 dark:hover:bg-navy-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};