import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { industriesData } from '../data/industries';
import { 
  IconFactory, 
  IconCheck, 
  IconArrowRight, 
  IconCog, 
  IconLayers 
} from '../components/Icons';

export default function Industries() {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-4 bg-slate-800 text-sky-400 border border-slate-700">
              Industrial Sectors
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Industries & Processing Applications
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Discover how our comminution, milling, and sizing engineering solves processing challenges across aggregate production, hard rock extraction, and fine powder micronization.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Matrix */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {industriesData.map((industry, index) => (
            <div
              key={industry.id}
              id={industry.id}
              className="scroll-mt-28 bg-white rounded-lg border border-slate-200 overflow-hidden"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Media Column (5 cols) */}
                <div className={`lg:col-span-5 bg-slate-900 relative min-h-[280px] lg:min-h-full ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <img
                    src={industry.image}
                    alt={industry.name}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90"
                    onError={(e) => {
                      e.target.src = "/images/industries/industry-mining.svg";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-slate-950 px-3 py-1 rounded text-xs font-semibold text-sky-400 uppercase tracking-wider border border-slate-800">
                    Application Profile 0{index + 1}
                  </div>
                </div>

                {/* Content Column (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
                      <IconFactory className="w-4 h-4" />
                      <span>{industry.name}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                      {industry.name}
                    </h2>

                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                      {industry.detailedOverview}
                    </p>

                    {/* Typical Materials */}
                    {industry.typicalMaterials && (
                      <div className="mb-6">
                        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                          <IconLayers className="w-3.5 h-3.5 text-orange-600" />
                          <span>Typical Materials Handled:</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.typicalMaterials.map((mat, i) => (
                            <span key={i} className="px-3 py-1 rounded bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Typical Flowsheet Considerations */}
                    {industry.recommendedEquipment && (
                      <div className="mb-8">
                        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                          <IconCog className="w-3.5 h-3.5 text-sky-700" />
                          <span>Key Machinery Stages Configured:</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                          {industry.recommendedEquipment.map((eq, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <IconCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                              <span>{eq}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <Link
                      to={`/contact?material=${encodeURIComponent(industry.name)}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors"
                    >
                      <span>Inquire For This Application</span>
                      <IconArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to="/about#capabilities"
                      className="text-xs font-semibold text-slate-600 hover:text-sky-700"
                    >
                      Review Engineering Capabilities →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Don't See Your Specific Material Listed?"
        description="Our application testing facility conducts rock abrasion index testing, Bond work index determinations, and laser diffraction grain size analysis."
        buttonText="Request Material Test Consultation"
        buttonLink="/contact"
      />
    </div>
  );
}
