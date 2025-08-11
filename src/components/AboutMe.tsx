import React, { useEffect, useRef } from 'react';
import { personalInfo, aboutInfo, experienceData, skillsData, educationData, certificationsData } from '../utils/constants';

export const AboutMe: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observerRef.current = observer;
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const addRef = (el: HTMLElement | null, index: number) => {
    sectionRefs.current[index] = el;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Particles Background */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Hero Section */}
      <section className="about-hero py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h1 
            ref={(el) => addRef(el, 0)}
            className="hero-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 fade-in-up"
          >
            About Me
          </h1>
          <p 
            ref={(el) => addRef(el, 1)}
            className="hero-bio text-xl sm:text-2xl max-w-4xl mx-auto mb-12 fade-in-up"
          >
            {aboutInfo.description}
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 
            ref={(el) => addRef(el, 2)}
            className="text-4xl font-bold text-gray-900 mb-16 text-center slide-in-left"
          >
            Professional Experience
          </h2>
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div 
                key={index}
                ref={(el) => addRef(el, 3 + index)}
                className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start ${
                  index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
                }`}
              >
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</p>
                  <p className="text-gray-600 mb-4">{exp.duration}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-2">•</span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {exp.company.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 
            ref={(el) => addRef(el, 6)}
            className="text-4xl font-bold text-gray-900 mb-16 text-center scale-in"
          >
            Skills & Expertise
          </h2>
          
          {/* Technical Tools */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Technical Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
              {skillsData.technicalTools.map((tool, index) => (
                <div 
                  key={index}
                  ref={(el) => addRef(el, 7 + index)}
                  className="skill-icon text-center fade-in-up"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-white text-2xl">🔧</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{tool.name}</p>
                  <p className="text-xs text-gray-500">{tool.description}</p>
                  <div className="skill-tooltip">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Core Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.coreCompetencies.map((skill, index) => (
                <div 
                  key={index}
                  ref={(el) => addRef(el, 14 + index)}
                  className="skill-icon p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 fade-in-up"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">💡</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{skill.name}</h4>
                  <div className="skill-tooltip">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h2 
                ref={(el) => addRef(el, 20)}
                className="text-3xl font-bold text-gray-900 mb-8 slide-in-left"
              >
                Education
              </h2>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div 
                    key={index}
                    ref={(el) => addRef(el, 21 + index)}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 fade-in-up"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-600 text-sm mb-1">{edu.duration}</p>
                    <p className="text-gray-500 text-sm">{edu.location}</p>
                    {edu.score && <p className="text-green-600 font-semibold text-sm mt-2">{edu.score}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 
                ref={(el) => addRef(el, 23)}
                className="text-3xl font-bold text-gray-900 mb-8 slide-in-right"
              >
                Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificationsData.map((cert, index) => (
                  <div 
                    key={index}
                    ref={(el) => addRef(el, 24 + index)}
                    className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 fade-in-up"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">🏆</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
