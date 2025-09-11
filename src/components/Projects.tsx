import React from 'react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-900 mb-8">
          Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {/* Research Works Card */}
          <div className="bg-white border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center" onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'research-works' }))}>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Research Works</h3>
            <p className="text-blue-900/80 mb-4">Explore my research, case studies, and publications.</p>
            <span className="inline-block px-4 py-2 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium">View Research</span>
          </div>
          {/* Product Designs Card */}
          <div className="bg-white border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center" onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'product-designs' }))}>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Product Designs</h3>
            <p className="text-blue-900/80 mb-4">See my product design work and mockups.</p>
            <span className="inline-block px-4 py-2 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium">View Designs</span>
          </div>
        </div>
      </div>
    </section>
  );
};