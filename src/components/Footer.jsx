import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { navigationConfig } from '../data/navigation';
import { IconMail, IconPhone, IconMapPin, IconArrowRight, IconShield } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand & Profile */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-slate-900 border border-slate-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-6 h-6" fill="none">
                  <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" stroke="#0284c7" strokeWidth="10" strokeLinejoin="round" />
                  <circle cx="50" cy="50" r="18" fill="#f97316" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight block leading-none">
                  {siteConfig.logoText}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  {siteConfig.logoSubtext}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              {siteConfig.shortDescription}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <IconShield className="w-4 h-4 text-sky-400" />
              <span>Heavy Comminution & Mineral Processing Machinery Sales</span>
            </div>

            {/* Social links */}
            <div className="pt-3 flex items-center gap-3">
              {siteConfig.socialLinks.linkedin && (
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-slate-900 hover:bg-sky-700 hover:text-white flex items-center justify-center text-slate-400 border border-slate-800 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <span className="font-bold text-xs">in</span>
                </a>
              )}
              {siteConfig.socialLinks.youtube && (
                <a
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded bg-slate-900 hover:bg-red-700 hover:text-white flex items-center justify-center text-slate-400 border border-slate-800 transition-colors"
                  aria-label="YouTube Channel"
                >
                  <span className="font-bold text-xs">YT</span>
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 border-l-2 border-orange-500 pl-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationConfig.quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-slate-600">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Sectors & Applications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 border-l-2 border-sky-500 pl-2">
              Industry Sectors
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationConfig.industryLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-slate-600">›</span>
                    <span className="truncate">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Sales Office & Inquiries */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 border-l-2 border-orange-500 pl-2">
              Business Sales Office
            </h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <IconMapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.plotNo}, {siteConfig.contact.address.city}, {siteConfig.contact.address.country} - {siteConfig.contact.address.postalCode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <IconMail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white hover:underline">
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <IconPhone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300"
                >
                  <span>Request Sales Quotation</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-slate-900 bg-black/40 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {currentYear} {siteConfig.companyName}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>B2B Machinery Sales Platform</span>
            <span>Comminution & Milling Machinery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
