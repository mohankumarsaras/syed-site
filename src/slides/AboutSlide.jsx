import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  IconShield, 
  IconWrench, 
  IconCheck, 
  IconFactory, 
  IconArrowRight 
} from '../components/Icons';

export default function AboutSlide({ onNavigate }) {
  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 overflow-y-auto no-scrollbar bg-black text-white">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-900 text-white border border-zinc-700 mb-1">
            Corporate Leadership & E-Waste Facility
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white font-heading">
            Engineering Excellence in E-Waste & Scrap Recycling Systems
          </h2>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center gap-1.5 text-xs text-white hover:underline font-bold uppercase tracking-wider cursor-pointer"
        >
          <span>Connect with Project Desk</span>
          <IconArrowRight className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      {/* Main Grid: Leadership Card + Workshop Capabilities */}
      <div className="max-w-7xl mx-auto w-full my-auto py-2 sm:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Owner & Leadership Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950 p-5 sm:p-6 rounded-xl border border-zinc-800 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-white text-black flex items-center justify-center font-black text-xl flex-shrink-0">
                SI
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  Site Owner & Managing Director
                </span>
                <h3 className="text-xl font-bold text-white font-heading mt-0.5">
                  {siteConfig.owner.name}
                </h3>
                <p className="text-xs text-zinc-300 font-medium">
                  {siteConfig.owner.role}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-black border border-zinc-800 text-xs text-zinc-300 leading-relaxed italic">
              "{siteConfig.owner.bio}"
            </div>

            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <IconShield className="w-4 h-4 text-white flex-shrink-0" />
                <span>Dry Separation Technology (Zero Chemical Pollution)</span>
              </div>
              <div className="flex items-center gap-2">
                <IconFactory className="w-4 h-4 text-white flex-shrink-0" />
                <span>Heavy Heavy-Duty Shredder Rotor Fabrication Bays</span>
              </div>
              <div className="flex items-center gap-2">
                <IconWrench className="w-4 h-4 text-white flex-shrink-0" />
                <span>OEM Tooling & Alloy Shredder Blade Replacements</span>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-zinc-400">Project Sales Directorate:</span>
              <span className="font-bold text-white">{siteConfig.contact.address.city}</span>
            </div>
          </div>

          {/* Right Column: 4 Core Workshop Competencies (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-black text-white border border-zinc-800 flex items-center justify-center">
                <IconFactory className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-sm font-bold text-white font-heading">
                High-Torque Dual Shaft Fabrication
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Precision CNC machining and hex-shaft forging for extreme torque e-waste shredders handling server frames, chassis, and dense metal housings.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-black text-white border border-zinc-800 flex items-center justify-center">
                <IconWrench className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-sm font-bold text-white font-heading">
                Electrostatic Separator Assembly
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                High-voltage corona electrostatic sorting units manufactured to separate 0.05 mm pulverized copper from circuit board epoxy powder.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-black text-white border border-zinc-800 flex items-center justify-center">
                <IconShield className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-sm font-bold text-white font-heading">
                Hydraulic Baler Engineering
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                High-tonnage compaction hydraulic rams and Hardox 500 lined chambers designed for high-density automotive and non-ferrous scrap cube baling.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-black text-white border border-zinc-800 flex items-center justify-center">
                <IconCheck className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-sm font-bold text-white font-heading">
                Air Emission & Dust Filtration Testing
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Integrated pulse-jet negative-pressure cyclone dust collector verification to guarantee zero micro-dust escape in recycling workshops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
