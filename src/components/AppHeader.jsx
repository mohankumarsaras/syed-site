import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  IconMenu, 
  IconX 
} from './Icons';

export default function AppHeader({ activeTab, onTabSelect, tabs }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelect = (idx) => {
    onTabSelect(idx);
    setMobileMenuOpen(false);
  };

  return (
    <header className="flex-shrink-0 z-50 w-full bg-black border-b border-zinc-800 select-none">
      {/* Main Single Navigation Bar - Removed top sub-header completely */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => handleSelect(0)} 
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center p-2 group-hover:border-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full" fill="none">
              <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" stroke="#ffffff" strokeWidth="10" strokeLinejoin="round" />
              <circle cx="50" cy="50" r="18" fill="#ffffff" />
            </svg>
          </div>
          <div>
            <div className="text-base sm:text-lg font-black tracking-tight text-white font-heading leading-tight">
              {siteConfig.logoText}
            </div>
            <div className="text-[10px] tracking-wider text-zinc-400 font-bold uppercase">
              {siteConfig.logoSubtext}
            </div>
          </div>
        </button>

        {/* Center Section Tabs (Desktop): Solid black and white */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800">
          {tabs.map((tab, idx) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => onTabSelect(idx)}
                className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  isActive
                    ? 'text-black bg-white font-extrabold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action: Clean Solid White Quote Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onTabSelect(tabs.length - 1)}
            className="px-4 py-2 bg-white hover:bg-zinc-200 text-black font-extrabold rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>Get Quote</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900 border border-zinc-800 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <IconX className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-t border-zinc-800 px-4 py-3 space-y-1.5">
          <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1 px-3">
            Navigation
          </div>
          {tabs.map((tab, idx) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-bold'
                    : 'text-zinc-300 hover:bg-zinc-900'
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[10px] font-mono text-zinc-500">0{idx + 1}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
