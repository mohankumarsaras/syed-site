import React from 'react';

export default function SectionHeading({ 
  tagline, 
  title, 
  description, 
  centered = true, 
  light = false 
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {tagline && (
        <div className={`inline-block px-2.5 py-1 rounded text-xs font-semibold tracking-wider uppercase mb-3 ${
          light ? 'bg-slate-800 text-sky-400 border border-slate-700' : 'bg-slate-100 text-sky-700 border border-slate-200'
        }`}>
          {tagline}
        </div>
      )}
      
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      
      {description && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
