import React from 'react';
import { ExternalLink, Code, FileText } from 'lucide-react';
import { projectsData } from '../utils/constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-navy-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white mb-4">
            Key Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-accent-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-navy-800 dark:to-navy-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-600 dark:text-accent-400 font-medium mb-4">
                  {project.role}
                </p>
                <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-navy-900 dark:text-white mb-3 flex items-center">
                  <FileText size={16} className="mr-2" />
                  Key Deliverables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((deliverable, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white dark:bg-navy-900 text-navy-700 dark:text-navy-200 text-sm rounded-full border border-gray-200 dark:border-navy-600">
                      {deliverable}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-navy-900 dark:text-white mb-3 flex items-center">
                  <Code size={16} className="mr-2" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary-100 dark:bg-accent-900 text-primary-700 dark:text-accent-200 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};