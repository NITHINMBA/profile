import React, { useState } from 'react';
import { navigationItems } from '../utils/constants';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorksDropdownOpen, setIsWorksDropdownOpen] = useState(false);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* Desktop Navigation - Dynamic Island Style */}
      <div className="hidden md:flex dynamic-island-nav px-8 py-4">
        {navigationItems.map(item => (
          <div key={item.id} className="relative">
            {item.id === 'projects' ? (
              <div
                onMouseEnter={() => setIsWorksDropdownOpen(true)}
                onMouseLeave={() => setIsWorksDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavigate(item.id)}
                  className={`nav-item px-6 py-2 text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id ? 'active' : 'hover:text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
                {/* Works Dropdown */}
                {isWorksDropdownOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[180px] z-50">
                    <button
                      onClick={() => handleNavigate('product-designs')}
                      className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 ${
                        activeSection === 'product-designs' ? 'bg-gray-100 text-blue-600' : ''
                      }`}
                    >
                      Product Designs
                    </button>
                    <button
                      onClick={() => handleNavigate('research-works')}
                      className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 ${
                        activeSection === 'research-works' ? 'bg-gray-100 text-blue-600' : ''
                      }`}
                    >
                      Research Works
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => handleNavigate(item.id)}
                className={`nav-item px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id ? 'active' : 'hover:text-gray-700'
                }`}
              >
                {item.label}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Toggle Button - Dynamic Island Style */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="dynamic-island-nav px-6 py-3 flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center w-6 h-5">
            <span className={`w-6 h-0.5 bg-blue-700 rounded-full transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-blue-700 rounded-full transition-all duration-300 mt-1 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-blue-700 rounded-full transition-all duration-300 mt-1 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </div>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 mobile-menu min-w-[200px] py-4">
            {navigationItems.map(item => (
              <div key={item.id}>
                {item.id === 'projects' ? (
                  <div>
                    <button
                      onClick={() => handleNavigate(item.id)}
                      className={`w-full text-left px-6 py-3 text-sm font-medium text-blue-900 transition-all duration-200 hover:bg-blue-50 ${
                        activeSection === item.id ? 'bg-blue-100' : ''
                      }`}
                    >
                      {item.label}
                    </button>
                    {/* Mobile Works Sub-sections */}
                    <div className="pl-4">
                      <button
                        onClick={() => handleNavigate('product-designs')}
                        className={`w-full text-left px-6 py-2 text-sm text-gray-600 transition-all duration-200 hover:bg-gray-50 ${
                          activeSection === 'product-designs' ? 'bg-gray-100 text-blue-600' : ''
                        }`}
                      >
                        Product Designs
                      </button>
                      <button
                        onClick={() => handleNavigate('research-works')}
                        className={`w-full text-left px-6 py-2 text-sm text-gray-600 transition-all duration-200 hover:bg-gray-50 ${
                          activeSection === 'research-works' ? 'bg-gray-100 text-blue-600' : ''
                        }`}
                      >
                        Research Works
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigate(item.id)}
                    className={`w-full text-left px-6 py-3 text-sm font-medium text-blue-900 transition-all duration-200 hover:bg-blue-50 ${
                      activeSection === item.id ? 'bg-blue-100' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};