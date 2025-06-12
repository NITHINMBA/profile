import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '../utils/constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-accent-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div key={index} className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-navy-800 dark:to-navy-700 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="p-3 bg-primary-600 dark:bg-accent-600 rounded-full">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 dark:text-white">
                      {education.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-accent-400 font-medium">
                      {education.institution}
                    </p>
                  </div>
                </div>
                {education.score && (
                  <div className="flex items-center space-x-2 bg-white dark:bg-navy-900 px-4 py-2 rounded-full">
                    <Award size={16} className="text-primary-600 dark:text-accent-400" />
                    <span className="text-sm font-semibold text-navy-900 dark:text-white">
                      {education.score}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-navy-600 dark:text-navy-300">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};