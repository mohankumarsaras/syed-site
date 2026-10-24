import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconPhone } from './Icons';
import { siteConfig } from '../config/siteConfig';

export default function CTASection({
  headline = "Looking to Purchase Machinery or Set Up a Plant?",
  description = "Get in touch with our commercial sales team for equipment pricing, technical specifications, and project quotations.",
  buttonText = "Request a Quote",
  buttonLink = "/contact"
}) {
  return (
    <section className="bg-slate-900 text-white py-16 sm:py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-6 bg-slate-800 text-orange-400 border border-slate-700">
          Commercial Machinery Sales
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto text-balance">
          {headline}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={buttonLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded transition-colors"
          >
            <span>{buttonText}</span>
            <IconArrowRight className="w-5 h-5" />
          </Link>

          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded border border-slate-700 transition-colors"
          >
            <IconPhone className="w-4 h-4 text-sky-400" />
            <span>Call Business Sales Desk</span>
          </a>
        </div>

        <div className="mt-8 text-xs text-slate-400">
          Direct assistance from our dedicated industrial sales team for quotations, plant budgeting, and dispatch schedules.
        </div>
      </div>
    </section>
  );
}
