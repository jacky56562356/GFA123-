
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#/" className="flex items-center gap-3 group">
              <img 
                src="https://ibb.co/FkjwP9Cv" 
                alt="GFA Logo" 
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  // Fallback if the ibb.co link doesn't serve direct image
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden text-2xl font-black gold-gradient">GFA</span>
              <span className="text-xl font-bold tracking-tighter text-white group-hover:gold-gradient transition-all">GFA联盟</span>
            </a>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.path}
                  href={`#${item.path}`}
                  className={`px-3 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all hover:text-[#D4AF37] ${
                    currentPath === `#${item.path}` ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] rounded-none' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-black border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-xl text-base font-bold text-gray-300 hover:text-white hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
