import React from 'react';
import { personalInfo } from '../utils/constants';

interface FooterProps {
  compact?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ compact = false }) => {
  return (
    <footer className="border-t border-gray-200">
      <div className={`mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center ${compact ? 'py-4' : 'py-10'}`}>
        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/NITHINMBA" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ filter: 'grayscale(1)' }}>
              <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.16c-3.23.7-3.91-1.4-3.91-1.4-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.58-.29-5.29-1.29-5.29-5.75 0-1.27.46-2.31 1.2-3.13-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.2a11.08 11.08 0 0 1 5.83 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.59.23 2.76.11 3.05.75.82 1.2 1.86 1.2 3.13 0 4.47-2.72 5.46-5.31 5.74.43.37.81 1.1.81 2.22v3.29c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
            </svg>
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ filter: 'grayscale(1)' }}>
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.06V23h-4v-5.9c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.12V23h-4V8.5z"/>
            </svg>
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ filter: 'grayscale(1)' }}>
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 18V8l8 6 8-6v10H4Z"/>
            </svg>
          </a>
        </div>
        {!compact && <p className="mt-6 text-sm text-gray-500">Copyright © Nithin 2025</p>}
      </div>
    </footer>
  );
};


