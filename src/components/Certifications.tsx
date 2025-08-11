import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { certificationsData } from '../utils/constants';

export const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-900 mb-4">
            Certifications
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((certification, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="p-2 bg-blue-600/10 rounded-full">
                  <Award size={20} className="text-blue-700" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-blue-900 leading-tight">
                  {certification}
                </h3>
              </div>
              <CheckCircle size={20} className="text-blue-700 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};