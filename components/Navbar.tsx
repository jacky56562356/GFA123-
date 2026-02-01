
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  
  // 用户提供的最新 Logo 直链地址
  const logoUrl = "https://i.ibb.co/B582n2Dk/1755827874220993959.png"; 

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28"> {/* 增加高度以适应更大的 Logo */}
          <div className="flex items-center">
            <a href="#/" className="flex items-center gap-6 group">
              {/* 移除了装饰框、背景和边框，直接展示 Logo */}
              <div className="relative flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
                {!imgError ? (
                  <img 
                    src={logoUrl} 
                    alt="GFA Logo" 
                    className="h-20 w-auto object-contain z-10" // 大幅增加高度到 h-20
                    onError={() => {
                      console.error("Logo failed to load");
                      setImgError(true);
                    }}
                  />
                ) : (
                  <svg className="w-12 h-12 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black gold-gradient leading-none tracking-tighter">GFA联盟</span>
                <span className="text-[11px] text-gray-500 uppercase tracking-[0.25em] font-bold mt-2">Global Film Alliance</span>
              </div>
            </a>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.path}
                  href={`#${item.path}`}
                  className={`px-3 py-2 rounded-md text-[11px] font-black uppercase tracking-widest transition-all hover:text-[#D4AF37] ${
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
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

      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-xl text-lg font-black text-gray-300 hover:text-white hover:bg-white/5 transition-all"
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
