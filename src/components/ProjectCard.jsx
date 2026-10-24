import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Cog, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:border-sky-400">
      <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
        <img
          src={project.image || "/images/projects/project-granite.svg"}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          onError={(e) => {
            e.target.src = "/images/projects/project-granite.svg";
          }}
        />
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-sky-400 px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wide border border-sky-500/20">
          {project.industry}
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
          {project.title}
        </h3>

        {project.location && (
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
            <MapPin className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>
        )}

        <p className="mt-3 text-sm text-slate-600 line-clamp-2 leading-relaxed flex-1">
          {project.summary}
        </p>

        {project.equipmentUsed && project.equipmentUsed.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-2">
              <Cog className="w-3.5 h-3.5 text-sky-600" />
              <span>Configured Machinery:</span>
            </div>
            <ul className="text-xs text-slate-600 space-y-1">
              {project.equipmentUsed.slice(0, 2).map((eq, i) => (
                <li key={i} className="flex items-center gap-1.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  <span className="truncate">{eq}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/projects#${project.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 tracking-wide uppercase"
          >
            <span>Review Profile</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to={`/contact?material=${encodeURIComponent(project.title)}`}
            className="text-xs font-semibold text-orange-600 hover:text-orange-700"
          >
            Request Specs
          </Link>
        </div>
      </div>
    </div>
  );
}
