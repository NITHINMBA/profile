import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experienceData } from '../utils/constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-navy-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-accent-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <div key={index} className="bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">
                    {experience.role}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-accent-400 font-medium mb-2">
                    {experience.company}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 text-sm">
                  <div className="flex items-center text-navy-600 dark:text-navy-300">
                    <Calendar size={16} className="mr-1" />
                    {experience.duration}
                  </div>
                  {experience.current && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Current
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                {experience.responsibilities.map((responsibility, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle size={16} className="text-primary-600 dark:text-accent-400 mt-1 flex-shrink-0" />
                    <p className="text-navy-600 dark:text-navy-300">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};