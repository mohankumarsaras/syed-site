import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import RevealOnScroll from '../components/RevealOnScroll';
import { projectsData } from '../data/projects';
import { MapPin, Cog, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Project Profiles' },
    { id: 'cement-and-construction', label: 'Aggregates & Quarrying' },
    { id: 'mineral-powder-processing', label: 'Powder Micronization' },
    { id: 'mining-and-minerals', label: 'Ore Crushing & Mining' }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.industrySlug === selectedFilter);

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-sky-500/20 text-sky-400 border border-sky-500/30">
              <span>Engineering Flowsheets</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Projects & Case Study Profiles
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore plant layouts, flowsheet configurations, and comminution solutions designed to overcome abrasive material challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[73px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedFilter === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Detailed Project Profiles */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              id={project.id}
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Media Image (5 cols) */}
                <div className="lg:col-span-5 bg-slate-950 relative min-h-[300px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90"
                    onError={(e) => {
                      e.target.src = "/images/projects/project-granite.svg";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-xs text-sky-400 px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider border border-sky-500/20">
                    {project.industry}
                  </div>
                </div>

                {/* Content Column (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                      {project.title}
                    </h2>

                    {project.location && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        <span>{project.location}</span>
                      </div>
                    )}

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Challenges vs Solution Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
                        <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                          <span>Operational Challenges:</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-amber-800">
                          {project.keyChallenges.map((c, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-amber-500">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200">
                        <h4 className="text-xs font-bold text-sky-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                          <span>Engineered Solutions:</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-sky-800">
                          {project.engineeredSolution.map((s, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-sky-500">•</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Machinery Used */}
                    {project.equipmentUsed && (
                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Cog className="w-3.5 h-3.5 text-orange-500" />
                          <span>Key Equipment Integrated:</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.equipmentUsed.map((eq, i) => (
                            <span key={i} className="px-3 py-1 rounded bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                              {eq}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/contact?material=${encodeURIComponent(project.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-xs"
                    >
                      <span>Inquire Regarding Similar Flowsheet</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honest Case Study Disclosure Notice */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-500 text-center">
          <strong className="text-slate-700">Notice to Prospective Clients:</strong> All case profiles displayed reflect engineering design archetypes and technical flowsheet principles. Actual client references, geographic locations, and verified plant production figures can be updated via <code className="bg-white px-1.5 py-0.5 rounded font-mono">src/data/projects.js</code> upon client authorization.
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
