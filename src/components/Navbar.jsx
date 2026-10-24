import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { navigationConfig } from '../data/navigation';
import { IconMenu, IconX, IconPhone, IconMail, IconArrowRight } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      {/* Top Sales & Support Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="text-slate-300">
              Sales Desk:
            </span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400 hover:underline"
            >
              <IconMail className="w-3.5 h-3.5 text-sky-400" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="text-slate-400 hidden md:inline">
              {siteConfig.contact.businessHours}
            </span>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1.5"
            >
              <IconPhone className="w-3.5 h-3.5" />
              <span>{siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all ${scrolled ? 'py-2.5' : 'py-3.5'}`}>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded bg-slate-950 flex items-center justify-center border border-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-6 h-6" fill="none">
                <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" stroke="#0284c7" strokeWidth="10" strokeLinejoin="round" />
                <circle cx="50" cy="50" r="18" fill="#f97316" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-slate-900 leading-none">
                {siteConfig.logoText}
              </div>
              <div className="text-[10px] tracking-wider text-slate-500 font-bold uppercase mt-0.5">
                {siteConfig.logoSubtext}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3" aria-label="Main Navigation">
            {navigationConfig.mainNav.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-semibold rounded transition-colors ${
                    isActive
                      ? 'text-sky-700 bg-sky-50 font-bold'
                      : 'text-slate-700 hover:text-sky-700 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Quotation CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded bg-orange-600 hover:bg-orange-700 text-white transition-colors"
            >
              <span>Get Quotation</span>
              <IconArrowRight className="w-4 h-4 hidden sm:inline" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navigationConfig.mainNav.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded text-base font-semibold ${
                    isActive ? 'bg-sky-50 text-sky-700' : 'text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-100">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-orange-600 text-white font-bold rounded uppercase tracking-wider text-xs"
              >
                <span>Get Quotation</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
