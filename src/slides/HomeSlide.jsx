import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  IconArrowRight, 
  IconShield, 
  IconCog, 
  IconCheckCircle 
} from '../components/Icons';

export default function HomeSlide({ onNavigate }) {
  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 overflow-y-auto no-scrollbar bg-black text-white">
      {/* Top Banner Row: Clean solid badge and owner title */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900 text-white border border-zinc-700">
          <span>Industrial E-Waste & Metal Scrap Recovery Systems</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
          <span>Enterprise Proprietor:</span>
          <span className="text-white font-bold">{siteConfig.owner.name}</span>
        </div>
      </div>

      {/* Main Hero Showcase */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto py-2 sm:py-4">
        {/* Left Column: Vision & Action (7 cols) */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          <div className="space-y-3">
            {/* Pure solid text: no gradients */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-heading">
              Turnkey E-Waste & <br />
              <span className="text-white">
                Scrap Management Machinery.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
              Industrial dual-shaft shredders, PCB copper & precious metal recycling plants, eddy current non-ferrous separators, and hydraulic scrap balers engineered for high-recovery circular economy plants.
            </p>
          </div>

          {/* Quick Action Buttons: Solid White and Solid Dark Slate */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('machinery')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-zinc-200 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              <span>Explore E-Waste Machinery</span>
              <IconArrowRight className="w-4 h-4 text-black" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg border border-zinc-700 transition-colors cursor-pointer"
            >
              <span>Request Scrap Plant Quote</span>
              <IconArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Core Trust Badges in solid black and white */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
              <IconShield className="w-4 h-4 text-white mb-1.5" />
              <div className="text-xs font-bold text-white">99% Metal Purity</div>
              <div className="text-[10px] text-zinc-400">Dry electrostatic recovery</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
              <IconCog className="w-4 h-4 text-white mb-1.5" />
              <div className="text-xs font-bold text-white">Heavy Shredding</div>
              <div className="text-[10px] text-zinc-400">PCB, cables & car scrap</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
              <IconCheckCircle className="w-4 h-4 text-white mb-1.5" />
              <div className="text-xs font-bold text-white">Turnkey Projects</div>
              <div className="text-[10px] text-zinc-400">Direct sales & plant setup</div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Machinery Display Card (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 p-2">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black relative">
              <img
                src="/images/products/complete-plant.svg"
                alt="Automated E-Waste Recycling and Scrap Plant"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-zinc-950/95 border border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white font-heading">
                    {siteConfig.companyName}
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    Lead by {siteConfig.owner.name}
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-[11px] text-white hover:underline font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  <span>Company Profile</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Owner Quote Strip */}
      <div className="max-w-7xl mx-auto w-full pt-2">
        <div className="p-3.5 sm:p-4 rounded-lg bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs flex-shrink-0">
              SI
            </div>
            <p className="text-zinc-300 italic text-[11px] sm:text-xs">
              "{siteConfig.owner.bio}"
            </p>
          </div>
          <div className="flex-shrink-0 font-medium text-zinc-400 text-[11px]">
            — <strong className="text-white">{siteConfig.owner.name}</strong>, {siteConfig.owner.title}
          </div>
        </div>
      </div>
    </div>
  );
}
