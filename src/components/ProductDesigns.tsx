import React, { useState } from 'react';
import { personalInfo, productDesignContent, healHubContent } from '../utils/constants';

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
  <div className={`bg-white border border-gray-200 rounded-lg p-4 ${className}`}>
    <h3 className="font-bold text-md text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start">
        <span className="text-blue-500 mr-2 mt-1">●</span>
        <span className="text-sm text-gray-600">{item}</span>
      </li>
    ))}
  </ul>
);

export const ProductDesigns: React.FC = () => {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const renderHealHubContent = () => (
    <div className="text-left space-y-6 p-2">
      <p className="text-base leading-relaxed text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-200">{healHubContent.description}</p>
      
      <Section title={healHubContent.problemStatement.title}>
        <p className="text-sm text-gray-600 mb-3">{healHubContent.problemStatement.description}</p>
        <BulletList items={healHubContent.problemStatement.points} />
      </Section>

      <div className="grid md:grid-cols-2 gap-6">
        <Section title={healHubContent.asIsProcess.title}>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
            {healHubContent.asIsProcess.steps.map((s, i) => <li key={i}>{s}</li>)}
          </ol>
          <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500">
            <p><strong>Actors:</strong> {healHubContent.asIsProcess.actors}</p>
            <p><strong>Pain Points:</strong> <span className="text-red-600">{healHubContent.asIsProcess.painPoints}</span></p>
          </div>
        </Section>
        <Section title={healHubContent.toBeProcess.title}>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
            {healHubContent.toBeProcess.steps.map((s, i) => <li key={i}>{s}</li>)}
          </ol>
          <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500">
            <p><strong>Actors:</strong> {healHubContent.toBeProcess.actors}</p>
            <p><strong>Benefits:</strong> <span className="text-green-600">{healHubContent.toBeProcess.benefits}</span></p>
          </div>
        </Section>
      </div>

      <Section title={healHubContent.systemFeatures.title}>
        <div className="grid sm:grid-cols-2 gap-4">
          {healHubContent.systemFeatures.modules.map(m => (
            <div key={m.title} className="p-3 bg-gray-50 rounded-md border">
              <h4 className="font-semibold text-sm text-gray-700 mb-2">{m.title}</h4>
              <BulletList items={m.points} />
            </div>
          ))}
        </div>
      </Section>

      <div className="grid md:grid-cols-2 gap-6">
        <Section title={healHubContent.nonFunctionalRequirements.title}>
          <BulletList items={healHubContent.nonFunctionalRequirements.points} />
        </Section>
        <Section title={healHubContent.stakeholderEngagements.title}>
          <BulletList items={healHubContent.stakeholderEngagements.engagements} />
           <p className="text-xs text-gray-500 mt-3 pt-3 border-t">{healHubContent.stakeholderEngagements.methods}</p>
        </Section>
      </div>

      <Section title={healHubContent.impact.title}>
        <BulletList items={healHubContent.impact.points} />
      </Section>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-24 pb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 text-center">Product Designs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {/* SheSaves Card */}
            <div className={`bg-white border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center cursor-pointer ${openCard === 'shesaves' ? 'ring-2 ring-blue-500' : ''}`} onClick={() => setOpenCard(openCard === 'shesaves' ? null : 'shesaves')}>
              <span className="mb-3">
                <svg width="40" height="40" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#E0F2FE"/><path d="M16 10a6 6 0 0 1 6 6v4a6 6 0 0 1-12 0v-4a6 6 0 0 1 6-6Z" stroke="#2563EB" strokeWidth="2"/><path d="M16 14v4" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <h2 className="text-xl font-bold text-blue-900 mb-2">SheSaves</h2>
              {openCard === 'shesaves' && (
                <div className="w-full mt-4 text-left">
                  <div className="flex items-center gap-3 mb-3">
                    {productDesignContent.logo ? (
                      <img src={productDesignContent.logo} alt="SheSaves logo" className="w-12 h-12 object-contain rounded-xl border border-gray-200" />
                    ) : (
                      <div className="w-12 h-12 rounded-xl border border-gray-200 bg-gray-50" />
                    )}
                    <div>
                      <p className="text-gray-600 text-sm">By {personalInfo.displayName}</p>
                    </div>
                  </div>
                  <div className="prose prose-neutral max-w-none mb-4">
                    <p className="text-base leading-relaxed text-gray-700">{productDesignContent.description}</p>
                  </div>
                  {productDesignContent.mockupUrl && (
                    <a href={productDesignContent.mockupUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">View Mock-up</a>
                  )}
                </div>
              )}
            </div>
            {/* HealHub Card */}
            <div className={`bg-white border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center cursor-pointer ${openCard === 'healhub' ? 'ring-2 ring-blue-500' : ''}`} onClick={() => setOpenCard(openCard === 'healhub' ? null : 'healhub')}>
              <span className="mb-3">
                <svg width="40" height="40" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#FEE2E2"/><path d="M16 11v10M11 16h10" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <h2 className="text-xl font-bold text-blue-900 mb-2">HealHub</h2>
              {openCard === 'healhub' && (
                <div className="w-full mt-4">
                  {renderHealHubContent()}
                  <div className="text-center mt-4">
                    <button className="inline-block px-4 py-2 rounded-lg bg-gray-200 text-gray-500 text-sm font-medium cursor-not-allowed" disabled>View Mock-up</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="my-16">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
            <div>
              <p className="text-lg font-semibold tracking-tight text-gray-900">Want to see the full document?</p>
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


