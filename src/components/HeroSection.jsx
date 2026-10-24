import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconShield, IconCog, IconCheckCircle } from './Icons';

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  return (
    <section className="relative min-h-[560px] lg:min-h-[640px] flex items-center bg-slate-900 text-white overflow-hidden">
      {/* Background Media Container (HTML5 Video with Static Fallback) */}
      <div className="absolute inset-0 z-0">
        {!hasVideoError && (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero/industrial-hero.svg"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setHasVideoError(true)}
            className="w-full h-full object-cover opacity-25"
          >
            <source src="/media/hero-video.mp4" type="video/mp4" />
          </video>
        )}

        {/* Fallback Poster Image */}
        <img
          src="/images/hero/industrial-hero.svg"
          alt="Heavy Industrial Crushing and Mineral Processing Engineering"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            videoLoaded && !hasVideoError ? 'opacity-0 pointer-events-none' : 'opacity-25'
          }`}
        />

        {/* Solid Background Color Overlay */}
        <div className="absolute inset-0 bg-slate-950/85"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-3xl">
          {/* Engineering Category Pill */}
          <div className="inline-block px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-6 bg-slate-800 text-sky-400 border border-slate-700">
            Industrial Comminution & Process Engineering
          </div>

          {/* Primary Directive Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Engineered for Performance. <br className="hidden sm:inline" />
            <span className="text-sky-400">
              Built for Industry.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
            Specialized engineering and processing solutions designed to meet demanding production requirements in stone crushing, mineral pulverizing, and bulk solids handling.
          </p>

          {/* Call to Actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/industries"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm uppercase tracking-wider rounded transition-colors"
            >
              <span>Explore Industries & Solutions</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm uppercase tracking-wider rounded transition-colors"
            >
              <span>Request a Quote</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust-Focused Supporting Themes */}
          <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <IconShield className="w-5 h-5 text-sky-400 flex-shrink-0" />
              <span>Abrasive Material Flowsheets</span>
            </div>
            <div className="flex items-center gap-2.5">
              <IconCog className="w-5 h-5 text-orange-400 flex-shrink-0" />
              <span>Heavy-Duty OEM Engineering</span>
            </div>
            <div className="flex items-center gap-2.5">
              <IconCheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Lifecycle Aftermarket Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
