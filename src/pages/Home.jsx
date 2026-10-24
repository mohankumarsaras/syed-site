import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import IndustryCard from '../components/IndustryCard';
import CTASection from '../components/CTASection';
import { industriesData } from '../data/industries';
import { siteConfig } from '../config/siteConfig';
import { 
  IconWrench, 
  IconShield, 
  IconHeadphones, 
  IconLayers, 
  IconCheck, 
  IconArrowRight 
} from '../components/Icons';

export default function Home() {
  const displayIndustries = industriesData.slice(0, 6);

  return (
    <div className="flex flex-col bg-white">
      {/* HERO SECTION */}
      <HeroSection />

      {/* CORE ENGINEERING PILLARS */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tagline="Engineering Value"
            title="Engineering Solutions That Work for Your Business"
            description="Our equipment design and supply methodology centers on operational reliability, reduced downtime, and responsive aftermarket support."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 h-full">
              <div className="w-12 h-12 rounded bg-sky-100 text-sky-700 flex items-center justify-center mb-5">
                <IconWrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Application-Focused Engineering</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Systems configured according to rock hardness, feed gradation, and moisture levels rather than generic assumptions.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 h-full">
              <div className="w-12 h-12 rounded bg-orange-100 text-orange-700 flex items-center justify-center mb-5">
                <IconShield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Reliable Equipment Design</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Heavy-duty welded or cast steel chassis, forged alloy shafts, and standard OEM components designed for continuous duty.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 h-full">
              <div className="w-12 h-12 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                <IconHeadphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Support & Spare Parts</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct assistance with wear liner replacement schedules, bearing maintenance guides, and ongoing operational consultation.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 h-full">
              <div className="w-12 h-12 rounded bg-slate-200 text-slate-800 flex items-center justify-center mb-5">
                <IconLayers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Flowsheet Optimization</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tailored integration between comminution stages, vibrating screens, pulverizers, and conveyors to balance circuit throughput.
              </p>
            </div>
          </div>

          {/* Leadership Commitment Quote */}
          {siteConfig.owner && (
            <div className="mt-10 p-6 rounded-lg bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-orange-400 font-bold block mb-1">
                  Owner & Executive Leadership
                </span>
                <p className="text-sm text-slate-300 italic">
                  "{siteConfig.owner.bio}"
                </p>
              </div>
              <div className="flex-shrink-0 text-left sm:text-right border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-6">
                <div className="font-bold text-white text-sm">{siteConfig.owner.name}</div>
                <div className="text-xs text-sky-400">{siteConfig.owner.title}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TARGET INDUSTRIES & APPLICATIONS */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light
            tagline="Target Sectors"
            title="Industries Served"
            description="Heavy-duty comminution and sizing solutions engineered to process abrasive ores, hard stone, and fine chemical powders across diverse sectors."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayIndustries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded border border-slate-700 transition-colors"
            >
              <span>Explore All Industries & Applications</span>
              <IconArrowRight className="w-4 h-4 text-sky-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* APPLICATIONS & FLOWSHEET SOLUTIONS */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-4 bg-slate-200 text-orange-700 border border-slate-300">
                Application Engineering
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Solutions Designed Around Your Application
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Selecting industrial machinery is never one-size-fits-all. Every installation depends critically on the physical characteristics of the feed material, target size distribution, daily operating cycles, and local environmental standards.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-sky-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Material Hardness & Abrasiveness:</strong> Selecting manganese or high-chrome metallurgy according to Mohs hardness.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-sky-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Target Particle Granulometry:</strong> Designing multi-stage reduction to limit oversized flakiness and maintain tight sizing.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-sky-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Throughput & Power Efficiency:</strong> Balancing drive horsepower with circuit recycles to lower kilowatt-hours per ton.
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors"
                >
                  <span>Submit Project Requirements</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-sky-700"
                >
                  <span>Browse Application Matrix</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-900 shadow-sm">
              <img
                src="/images/products/complete-plant.svg"
                alt="Industrial Crushing and Milling Engineering Diagram"
                className="w-full aspect-[4/3] object-cover opacity-90"
              />
              <div className="p-5 bg-slate-950 text-white border-t border-slate-800">
                <h4 className="text-base font-bold text-sky-400">Integrated Turnkey Flowsheet Layouts</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Illustration of synchronized primary comminution, secondary crushing, multi-deck sizing screens, and closed-loop recirculating circuits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CONSULTATION CTA */}
      <CTASection />
    </div>
  );
}
