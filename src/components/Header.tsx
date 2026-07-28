import React from 'react';
import { PageTab } from '../types';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenStore: () => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs: PageTab[] = ['HOME', 'PRODUCTS', 'SPORTS', 'ABOUT'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 border-b border-neutral-100/80 backdrop-blur-md py-3.5 md:py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center transition-all duration-300 shadow-sm shadow-neutral-100/20">
      
      {/* Top row with Logo and Optional info */}
      <div className="w-full md:w-auto flex justify-between items-center md:flex-1">
        {/* Dynamic Premium Brand Logo */}
        <div 
          className="flex items-center cursor-pointer group select-none"
          onClick={() => setActiveTab('HOME')}
          id="header-logo"
        >
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-lg md:text-xl font-black tracking-[0.25em] font-display text-neutral-900 transition-colors duration-300 group-hover:text-[#FF6A00]">
                ELECTRONA
              </span>
            </div>
            <span className="text-[6.5px] tracking-[0.55em] font-mono text-neutral-450 font-bold uppercase group-hover:text-[#FF6A00] transition-colors duration-300">
              Performance Labs
            </span>
          </div>
        </div>

        {/* Small mobile indicator */}
        <div className="flex md:hidden items-center gap-1.5 px-2 py-0.5 rounded border border-neutral-100 bg-neutral-50/50">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
          <span className="text-[8px] font-mono font-bold text-neutral-400 uppercase tracking-widest">v1.2 // LIVE</span>
        </div>
      </div>

      {/* Navigation Links - Clean and elegant with Space Grotesk */}
      <nav className="flex items-center justify-center gap-6 md:gap-8 flex-1">
        {tabs.map((tab) => {
          const isSelected = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative font-sans font-semibold text-xs tracking-[0.18em] transition-all duration-300 py-1.5 cursor-pointer select-none uppercase shrink-0 ${
                isSelected 
                  ? 'text-neutral-900' 
                  : 'text-neutral-450 hover:text-neutral-900'
              }`}
              id={`nav-link-${tab.toLowerCase()}`}
            >
              {tab}
              {/* Premium micro thin bar indicator */}
              {isSelected ? (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF6A00] rounded-full" />
              ) : (
                <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-neutral-300 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Right Side Login Button */}
<div className="hidden md:flex md:flex-1 justify-end">
  <button
    onClick={() => setActiveTab("LOGIN")}
    className="px-4 py-2 border border-[#FF6A00] rounded-md text-xs font-semibold text-black hover:bg-[#FF6A00] hover:text-white transition-all duration-300">
    LOGIN
  </button>
</div>

</header>
  );
}