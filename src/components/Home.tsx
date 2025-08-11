import React from 'react';
import { personalInfo } from '../utils/constants';
import { aboutInfo } from '../utils/constants';
import { useRoleCycler } from './HomeRoleScript';

export const Home: React.FC = () => {
  useRoleCycler('roleText');
  
  return (
    <section id="home" className="min-h-[80vh] bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Welcome Message */}
          <div className="text-left lg:pl-8">
            <p className="text-2xl sm:text-3xl text-gray-600 font-normal mb-2">Hey,</p>
            <p className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-2">
              <span className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                I'm Nithin.
              </span>
            </p>
            <p className="text-2xl sm:text-3xl font-normal tracking-tight leading-tight mb-2 whitespace-nowrap">
              <span className="text-gray-900">Aspiring in</span>
              <span
                id="roleText"
                className="inline-block opacity-100 text-gray-700 italic ml-2 align-baseline min-w-[24ch]"
              >
                Product Management
              </span>
            </p>
            
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'about' }))}
                className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                About Me
              </button>
            </div>
          </div>
          
          {/* Right Column - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full mb-6 max-w-none"
              style={{ height: '100vh' }}
            >
              <img
                src="https://github.com/NITHINMBA/profile/blob/gh-pages/Photoff.jpg?raw=true"
                alt="Nithin - Professional Headshot"
                loading="eager"
                decoding="async"
                className="img-premium-mono img-soft-fade w-full h-full object-cover object-[50%_20%]"
                style={{
                  height: '100vh',
                  imageRendering: 'auto'
                }}
                onError={(e) => {
                  console.error('Failed to load Photoff.jpg, trying fallback');
                  e.currentTarget.src = 'https://github.com/NITHINMBA/profile/blob/gh-pages/Photoff.jpg?raw=true';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


