import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '../utils/constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-900 mb-4">
            Education
          </h2>
          
        </div>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div key={index} className="bg-white border border-blue-100 rounded-xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="p-3 bg-blue-600/10 rounded-full">
                      <GraduationCap size={24} className="text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900">
                      {education.degree}
                    </h3>
                    <p className="text-blue-900/80 font-medium">
                      {education.institution}
                    </p>
                  </div>
                </div>
                {education.score && (
                  <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                    <Award size={16} className="text-blue-700" />
                    <span className="text-sm font-semibold text-blue-800">
                      {education.score}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-navy-600 dark:text-navy-300">
                <div className="flex items-center space-x-2 text-blue-900/80">
                  <Calendar size={16} />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-900/80">
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