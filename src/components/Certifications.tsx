import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { certificationsData } from '../utils/constants';

export const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-navy-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-accent-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((certification, index) => (
            <div key={index} className="bg-white dark:bg-navy-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="p-2 bg-primary-100 dark:bg-accent-900 rounded-full">
                  <Award size={20} className="text-primary-600 dark:text-accent-400" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-navy-900 dark:text-white leading-tight">
                  {certification}
                </h3>
              </div>
              <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};