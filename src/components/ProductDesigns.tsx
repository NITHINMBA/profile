import React, { useState } from 'react';
import { personalInfo, productDesignContent } from '../utils/constants';

export const ProductDesigns: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'intro' | 'mockup'>('intro');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMockup = () => {
    if (productDesignContent.mockupUrl) {
      setActiveTab('mockup');
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-24 pb-16">
          {/* Sidebar */}
          <aside className="md:col-span-3">
            <div className="sticky top-28 flex md:flex-col gap-3">
              <button
                onClick={() => setActiveTab('intro')}
                className={`px-5 py-3 rounded-lg border transition-all duration-200 text-sm font-medium ${
                  activeTab === 'intro'
                    ? 'bg-gray-900 text-white border-gray-900 shadow-lg shadow-gray-900/10'
                    : 'bg-white text-gray-800 border-gray-200 hover:border-gray-300'
                }`}
              >
                Product Intro
              </button>
              <button
                onClick={openMockup}
                className={`px-5 py-3 rounded-lg border transition-all duration-200 text-sm font-medium ${
                  activeTab === 'mockup'
                    ? 'bg-gray-900 text-white border-gray-900 shadow-lg shadow-gray-900/10'
                    : 'bg-white text-gray-800 border-gray-200 hover:border-gray-300'
                }`}
              >
                Mock-up
              </button>
            </div>
          </aside>

          {/* Content */}
          <section className="md:col-span-9">
            {/* Intro Content */}
            {activeTab === 'intro' && (
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  {productDesignContent.logo ? (
                    <img
                      src={productDesignContent.logo}
                      alt="Product logo"
                      className="w-16 h-16 object-contain rounded-xl border border-gray-200"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl border border-gray-200 bg-gray-50" />
                  )}
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{productDesignContent.title || 'Product Designs'}</h1>
                    <p className="mt-2 text-gray-600 text-sm">By {personalInfo.displayName}</p>
                  </div>
                </div>

                <div className="prose prose-neutral max-w-none">
                  <p className="text-lg leading-8 text-gray-700">{productDesignContent.description}</p>
                </div>

                {productDesignContent.highlights && productDesignContent.highlights.length > 0 && (
                  <ul className="grid sm:grid-cols-2 gap-3 mt-2">
                    {productDesignContent.highlights.map((point, idx) => (
                      <li key={idx} className="text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {productDesignContent.mockupUrl && (
                  <div>
                    <button
                      onClick={openMockup}
                      className="mt-2 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      View Mock-up
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M13 5h6v6h-2V8.41l-6.29 6.3-1.42-1.42L15.59 7H13V5Z"/></svg>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Modal for mockup */}
            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/50" onClick={closeModal} />
                <div className="relative bg-white rounded-xl shadow-2xl w-[95vw] h-[80vh] max-w-5xl overflow-hidden">
                  <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-md bg-gray-900 text-white text-xs hover:bg-gray-800"
                  >
                    Close
                  </button>
                  {productDesignContent.mockupUrl ? (
                    <iframe
                      src={productDesignContent.mockupUrl}
                      title="Mockup Preview"
                      className="w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">No mock-up available</div>
                  )}
                </div>
              </div>
            )}
          </section>
        </div>

        {/* CTA Section */}
        <div className="mb-16">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.2)]">
            <div>
              <p className="text-base sm:text-lg font-semibold tracking-tight text-gray-900">Want to see full document</p>
              <p className="text-sm text-gray-600 mt-1">Request access to the complete product brief and assets.</p>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Email Me
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.01L12 13 2 6.01V6Zm0 3.64V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.64l-9.12 5.9a2 2 0 0 1-2.16 0L2 9.64Z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


