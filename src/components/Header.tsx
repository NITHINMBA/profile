import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react';
import { personalInfo } from '../utils/constants';

export const Header: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-navy-900 dark:to-navy-800 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={personalInfo.profileImage}
              alt="Nithiyananthan M"
              className="w-32 h-32 sm:w-40 sm:h-40 mx-auto border-4 border-white dark:border-navy-700 shadow-xl object-cover"
            />
          </div>
          {/* Name and Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-white mb-4 animate-slide-up">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-primary-600 dark:text-accent-400 font-medium mb-6 animate-slide-up">
            {personalInfo.title}
          </h2>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-navy-600 dark:text-navy-300 max-w-4xl mx-auto mb-8 leading-relaxed animate-slide-up">
            {personalInfo.tagline}
          </p>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-slide-up">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center space-x-2 text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
            >
              <Mail size={20} />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center space-x-2 text-navy-600 dark:text-navy-300 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
            >
              <Phone size={20} />
              <span>{personalInfo.phone}</span>
            </a>
            <div className="flex items-center space-x-2 text-navy-600 dark:text-navy-300">
              <MapPin size={20} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 dark:bg-accent-600 dark:hover:bg-accent-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Linkedin size={20} className="mr-2" />
              Connect on LinkedIn
            </a>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-navy-300 dark:border-navy-600 text-base font-medium rounded-lg text-navy-700 dark:text-navy-200 bg-white dark:bg-navy-800 hover:bg-gray-50 dark:hover:bg-navy-700 transition-colors shadow-md hover:shadow-lg">
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};