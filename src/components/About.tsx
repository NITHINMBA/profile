import React from 'react';
import { CheckCircle } from 'lucide-react';
import { aboutInfo } from '../utils/constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-accent-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-navy-600 dark:text-navy-300 leading-relaxed mb-8">
              {aboutInfo.description}
            </p>
            
            <div className="space-y-4">
              {aboutInfo.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary-600 dark:text-accent-400 mt-1 flex-shrink-0" />
                  <p className="text-navy-700 dark:text-navy-200">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-navy-800 dark:to-navy-700 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-4">
              Quick Facts
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-navy-600 dark:text-navy-300">Experience:</span>
                <span className="text-navy-900 dark:text-white font-medium">1+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-600 dark:text-navy-300">Education:</span>
                <span className="text-navy-900 dark:text-white font-medium">MBA & B.Tech</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-600 dark:text-navy-300">Specialization:</span>
                <span className="text-navy-900 dark:text-white font-medium">AI-Driven BA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-600 dark:text-navy-300">Location:</span>
                <span className="text-navy-900 dark:text-white font-medium">Chennai, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};