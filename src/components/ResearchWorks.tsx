import React from 'react';

const ResearchWorks: React.FC = () => {
  const navigateTo = (page: string) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
  };

  return (
    <section id="research-works" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-900 mb-8">
          Research Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {/* LinkedIn Card */}
          <div 
            className="bg-white border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center"
            onClick={() => navigateTo('linkedin')}
          >
            <h3 className="text-xl font-bold text-blue-900 mb-2">LinkedIn</h3>
            <p className="text-blue-900/80 mb-4">An analysis of LinkedIn's professional networking ecosystem.</p>
            <span className="inline-block px-4 py-2 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium">View Research</span>
          </div>
          {/* Flipkart Card */}
          <div 
            className="bg-white border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center"
            onClick={() => navigateTo('flipkart')}
          >
            <h3 className="text-xl font-bold text-blue-900 mb-2">Flipkart</h3>
            <p className="text-blue-900/80 mb-4">A case study on Flipkart's e-commerce platform.</p>
            <span className="inline-block px-4 py-2 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium">View Research</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchWorks;
