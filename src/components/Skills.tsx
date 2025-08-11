import React from 'react';
import * as Icons from 'lucide-react';
import { skillsData } from '../utils/constants';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent size={24} /> : <Icons.Circle size={24} />;
  };

  const SkillCard: React.FC<{ skill: any; index: number }> = ({ skill, index }) => (
    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-center space-x-4 mb-3">
        <div className="text-blue-700 group-hover:scale-110 transition-transform">
          {getIcon(skill.icon)}
        </div>
        <h3 className="font-semibold text-blue-900">{skill.name}</h3>
      </div>
      {skill.description && (
        <p className="text-sm text-blue-900/80">{skill.description}</p>
      )}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-900 mb-4">
            Skills & Expertise
          </h2>
          
        </div>

        {/* Technical Tools */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-900 mb-8 text-center">
            Technical Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.technicalTools.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-900 mb-8 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.coreCompetencies.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Technologies & Frameworks */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-900 mb-8 text-center">
            Technologies & Frameworks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.technologies.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};