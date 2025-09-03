import React from 'react';
// import { Footer } from './Footer';
import { personalInfo } from '../utils/constants';
import { useRoleCycler } from './HomeRoleScript';

export const Home: React.FC = () => {
  useRoleCycler('roleText');

  return (
    <div className="h-screen flex flex-col bg-white" style={{ height: '100vh', width: '100vw', maxWidth: '100vw', overflow: 'hidden' }}>
      <main className="flex-1 w-full flex flex-col lg:flex-row items-center justify-center pt-24" style={{ width: '100%', height: '100%' }}>
        {/* Left Column - Welcome Message */}
        <div className="flex-1 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 lg:pl-8 min-h-0">
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
        <div className="flex-1 flex justify-center items-center px-4 lg:px-0 min-h-0">
          <img
            src={personalInfo.profileImage}
            alt="Nithin - Professional Headshot"
            loading="eager"
            decoding="async"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover rounded-2xl"
            style={{
              maxHeight: 'calc(100vh - 120px)', // Account for navigation and padding
              width: '100%',
              objectFit: 'cover',
              display: 'block',
              margin: '0 auto'
            }}
            onError={(e) => {
              e.currentTarget.src = 'https://raw.githubusercontent.com/NITHINMBA/profile/main/public/Photo%20cut%20bw.JPG';
            }}
          />
        </div>
      </main>
  {/* Footer removed: already rendered globally in App.tsx */}
    </div>
  );
};


