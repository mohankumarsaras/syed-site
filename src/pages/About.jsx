import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { siteConfig } from '../config/siteConfig';
import { 
  IconShield, 
  IconCheck, 
  IconLayers, 
  IconCompass
} from '../components/Icons';

export default function About() {
  return (
    <div className="flex flex-col bg-slate-50">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-4 bg-slate-800 text-sky-400 border border-slate-700">
              Corporate Profile
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Engineering Expertise & Manufacturing Capability
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Committed to the design, engineering, and manufacturing of heavy comminution, fine grinding, and bulk material processing machinery for global industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction & Profile */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                tagline="About Our Organization"
                title="Focused on Heavy-Duty Mineral & Aggregate Solutions"
                centered={false}
              />
              <p className="text-slate-600 leading-relaxed mb-4">
                {siteConfig.companyName} operates as an industrial machinery manufacturing and engineering provider. Our core focus centers on developing reliable, wear-resistant, and high-throughput systems for stone crushing plants, industrial mineral pulverizing mills, screening stations, and continuous material conveyors.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We collaborate directly with quarry operators, mining contractors, cement plants, and chemical mineral processors to evaluate feed characteristics and engineer equipment matched to harsh operational environments.
              </p>

              {/* Leadership & Proprietor Note */}
              {siteConfig.owner && (
                <div className="p-5 rounded-lg bg-slate-900 text-white border border-slate-800 shadow-sm mt-6">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-base">
                      SI
                    </div>
                    <div>
                      <div className="font-bold text-slate-100 text-base leading-tight">
                        {siteConfig.owner.name}
                      </div>
                      <div className="text-xs text-orange-400 font-medium">
                        {siteConfig.owner.title}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {siteConfig.owner.bio}
                  </p>
                </div>
              )}
            </div>

            <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-900 shadow-sm">
              <img
                src="/images/about/factory-assembly.svg"
                alt="Industrial Machinery Assembly Bay"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-4 bg-slate-950 text-slate-300 text-xs flex justify-between items-center border-t border-slate-800">
                <span className="font-semibold text-slate-200">Heavy Fabrication & Machining Bay</span>
                <span className="text-sky-400">Engineering Profile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tagline="Organizational Principles"
            title="Mission & Operational Vision"
            description="Engineering principles and customer-focused directives guiding our manufacturing operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-slate-200 h-full">
              <div className="w-12 h-12 rounded bg-sky-100 text-sky-700 flex items-center justify-center mb-6">
                <IconCompass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To supply robust, energy-conscious industrial machinery and technical flowsheet support that maximize plant uptime and aggregate quality for mineral operations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-slate-200 h-full">
              <div className="w-12 h-12 rounded bg-orange-100 text-orange-700 flex items-center justify-center mb-6">
                <IconLayers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be a reliable international engineering partner recognized for application accuracy, high-durability wear components, and responsive aftermarket collaboration.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-slate-200 h-full">
              <div className="w-12 h-12 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                <IconShield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Integrity in Specification</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We never over-promise on crushing throughput or mill fineness. Equipment recommendations are substantiated by laboratory testing and realistic operational factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering & Manufacturing Capabilities */}
      <section id="capabilities" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tagline="Manufacturing Scope"
            title="Engineering & Workshop Capabilities"
            description="From heavy plate cutting and thermal stress relieving to precision boring and dynamic balancing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-900 text-base mb-2">Heavy Plate Fabrication & Welding</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated submerged arc welding and CNC plasma profile cutting for primary jaw crusher side-plates, cone frames, and vibratory screen side-channels.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-900 text-base mb-2">Large-Diameter Machining & Boring</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Horizontal and vertical boring mills handling oversized crusher housings, spherical roller bearing seats, and mill bull gears with tight tolerances.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-900 text-base mb-2">Thermal Stress Relieving</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thermal annealing heat-treatment applied to heavy welded structures prior to final machining to prevent internal residual tension and micro-cracking.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-900 text-base mb-2">Dynamic Balancing of Rotors</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Computerized dynamic balancing of pulverizer cages, classifier wheels, and eccentric shafts to reduce foundation vibration and bearing fatigue.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-900 text-base mb-2">Trial Pre-Assembly & Inspection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Factory trial assembly of crushing chambers, hydraulic power packs, and drive couplings to guarantee dimensional fit prior to shipping.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-900 text-base mb-2">Modular Skid Engineering</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designing pre-wired, skid-mounted portable units that compress on-site civil concrete work and accelerate plant commissioning schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control & After-Sales Services */}
      <section id="quality" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-900 shadow-sm">
              <img
                src="/images/about/quality-testing.svg"
                alt="Quality Testing and Ultrasonic Flaw Inspection"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-4 bg-slate-950 text-slate-300 text-xs flex justify-between items-center border-t border-slate-800">
                <span className="font-semibold text-slate-200">Non-Destructive Testing Facility</span>
                <span className="text-sky-400">Quality Program</span>
              </div>
            </div>

            <div>
              <SectionHeading
                tagline="Quality Approach"
                title="Stringent Inspection & After-Sales Support"
                centered={false}
              />
              <p className="text-slate-600 leading-relaxed mb-6">
                Industrial processing machinery operates under rigorous impact and friction loads. Our quality philosophy emphasizes raw material inspection, weld ultrasonic testing, and dependable after-sales parts availability.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Metallurgical Verification</h4>
                    <p className="text-xs text-slate-600">Chemical spectrometry and hardness validation on all wear plates, manganese casting teeth, and roller tires.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">OEM Spare Parts Supply</h4>
                    <p className="text-xs text-slate-600">Continuous availability of replacement jaws, mantles, concave liners, grinding rollers, and classifier mesh.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Installation Consultation</h4>
                    <p className="text-xs text-slate-600">Field engineering guidance for civil foundation anchor loading, electrical motor interconnection, and commissioning trial runs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Ready to Discuss Machinery for Your Facility?"
        description="Connect with our technical engineering department to review drawings, plant layouts, and material test specifications."
        buttonText="Contact Our Engineering Team"
        buttonLink="/contact"
      />
    </div>
  );
}
