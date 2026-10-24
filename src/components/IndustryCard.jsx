import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconFactory } from './Icons';

export default function IndustryCard({ industry }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:border-slate-400 transition-colors flex flex-col h-full">
      <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
        <img
          src={industry.image || "/images/industries/industry-mining.svg"}
          alt={industry.name}
          loading="lazy"
          className="w-full h-full object-cover opacity-85"
          onError={(e) => {
            e.target.src = "/images/industries/industry-mining.svg";
          }}
        />
        <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 p-4 border-t border-slate-800">
          <div className="flex items-center gap-1.5 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <IconFactory className="w-3.5 h-3.5" />
            <span>Industrial Sector</span>
          </div>
          <h3 className="text-lg font-bold text-white">
            {industry.name}
          </h3>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm text-slate-600 leading-relaxed flex-1">
          {industry.shortDescription}
        </p>

        {industry.typicalMaterials && (
          <div className="mt-4 pt-3 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Common Materials:</div>
            <div className="flex flex-wrap gap-1.5">
              {industry.typicalMaterials.slice(0, 3).map((mat, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium border border-slate-200">
                  {mat}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/industries#${industry.id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 tracking-wide uppercase"
          >
            <span>Learn More</span>
            <IconArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to={`/contact?material=${encodeURIComponent(industry.name)}`}
            className="text-xs text-orange-600 hover:text-orange-700 font-semibold"
          >
            Inquire For Application
          </Link>
        </div>
      </div>
    </div>
  );
}
