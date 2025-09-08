import React, { useState } from 'react';
// import { Footer } from './Footer';
import { personalInfo } from '../utils/constants';
import { useRoleCycler } from './HomeRoleScript';
import { Footer } from './Footer';
import { AnimatedAvatar } from './AnimatedAvatar';

const ChatbotModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 animate-fade-in" style={{ backdropFilter: 'blur(6px)' }}>
  <div className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full mx-4 sm:mx-0 p-0 overflow-hidden animate-scale-in flex flex-col" style={{ minHeight: 420, maxHeight: '90vh', width: '100%', boxShadow: '0 8px 40px rgba(59,130,246,0.18)' }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-white rounded-full p-2 shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Close chatbot modal"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L16 16M16 6L6 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="flex-1 w-full h-full flex items-center justify-center" style={{ minHeight: 0 }}>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/UaurO-7gcDkSJT_8ZfeQY"
            width="100%"
            height="100%"
            style={{ minHeight: 420, height: '100%', border: 0, borderRadius: '1rem', background: 'transparent' }}
            frameBorder="0"
            allow="clipboard-write"
            title="AskNithin Chatbot"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  useRoleCycler('roleText');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="home-container bg-white flex-col justify-between" style={{ width: '100vw', maxWidth: '100vw' }}>
      <main className="flex-1 w-full flex flex-col lg:flex-row items-center justify-center pt-20 sm:pt-24 pb-2 sm:pb-3" style={{ width: '100%', minHeight: 0 }}>
        {/* Left Column - Welcome Message */}
        <div className="flex-1 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 lg:pl-8 min-h-0">
          <p className="text-[7.5vw] sm:text-3xl text-gray-600 font-normal mb-1 leading-none">Hey,</p>
          <p className="text-[10.5vw] sm:text-6xl font-bold tracking-tight leading-tight mb-1">
            <span className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              I'm Nithin.
            </span>
          </p>
          <p className="text-[4.8vw] sm:text-3xl font-normal tracking-tight leading-tight mb-2">
            <span className="text-gray-900">Aspiring in</span>
            <span
              id="roleText"
              className="inline-block opacity-100 text-gray-700 italic ml-2 align-baseline min-w-[20ch]"
            >
              Product Management
            </span>
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              AskNithin
            </button>
            <div className="w-12 h-12 sm:w-14 sm:h-14 ml-2 flex items-center justify-center">
              <AnimatedAvatar className="w-full h-full" />
            </div>
          </div>
          <div className="mt-2">
            <span className="block text-xs sm:text-sm text-gray-400 font-medium tracking-wide" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.02em' }}>
              Nithin's personalized AI Assistant
            </span>
          </div>
          <ChatbotModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
        {/* Right Column - Photo */}
        <div className="flex-1 flex justify-center items-center px-4 lg:px-0 min-h-0 mt-6 sm:mt-0">
          <img
            src={personalInfo.profileImage}
            alt="Nithin - Professional Headshot"
            loading="eager"
            decoding="async"
            className="w-[62vw] sm:w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover rounded-2xl"
            style={{
              maxHeight: 'calc(var(--vh, 1vh) * 100 - 260px)',
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
      <Footer compact />
    </div>
  );
};


