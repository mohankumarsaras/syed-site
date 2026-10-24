import React, { useState } from 'react';
import { industriesData } from '../data/industries';
import { IconCheck, IconLayers, IconChevronLeft, IconChevronRight } from '../components/Icons';

export default function ApplicationsSlide({ onSelectQuote }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentIndustry = industriesData[activeIndex] || industriesData[0];

  const handlePrev = () => {
    setActiveIndex(prev => (prev > 0 ? prev - 1 : industriesData.length - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev < industriesData.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 overflow-y-auto no-scrollbar bg-black text-white">
      {/* Slide Top Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-900 text-white border border-zinc-700 mb-1">
            Circular Economy Sectors
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white font-heading">
            E-Waste Recycling & Scrap Metal Recovery Applications
          </h2>
        </div>

        {/* Industry Switcher Buttons: Solid Black/White */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 no-scrollbar">
          {industriesData.map((ind, idx) => (
            <button
              key={ind.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-3 py-1 rounded-md text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                idx === activeIndex
                  ? 'bg-white text-black font-extrabold'
                  : 'bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800'
              }`}
            >
              {ind.name.split('&')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Industry Layout */}
      <div className="max-w-7xl mx-auto w-full my-auto py-2 sm:py-4">
        <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Visual Industry Media & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black border border-zinc-800 relative group">
              <img
                src={currentIndustry.image}
                alt={currentIndustry.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/industries/industry-mining.svg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              
              <div className="absolute top-3 left-3 bg-black/90 px-2.5 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider border border-zinc-700">
                Recovery Stream 0{activeIndex + 1}
              </div>

              {/* Prev / Next controls */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  aria-label="Previous stream"
                  className="p-2 rounded bg-black/90 hover:bg-zinc-900 text-white border border-zinc-700 cursor-pointer transition-colors"
                >
                  <IconChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next stream"
                  className="p-2 rounded bg-black/90 hover:bg-zinc-900 text-white border border-zinc-700 cursor-pointer transition-colors"
                >
                  <IconChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              {currentIndustry.shortDescription}
            </p>
          </div>

          {/* Right Column: Typical Scrap Materials, Flowsheet & Recommended Units (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-1">
                Material Separation Flowsheet
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {currentIndustry.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {currentIndustry.detailedOverview}
              </p>
            </div>

            {/* Typical Materials Processed */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Typical E-Waste / Scrap Input Streams:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentIndustry.typicalMaterials.map((mat, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-200 bg-zinc-900 px-3 py-1.5 rounded-md border border-zinc-800"
                  >
                    <IconCheck className="w-3.5 h-3.5 text-white" />
                    <span>{mat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Recommended Equipment */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Recommended Turnkey Flowsheet Machinery:
              </div>
              <div className="space-y-1.5">
                {currentIndustry.recommendedEquipment.map((eq, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-black border border-zinc-800 text-xs text-zinc-200 hover:border-zinc-600 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <IconLayers className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="font-semibold">{eq}</span>
                    </div>
                    <button
                      onClick={() => onSelectQuote(`${currentIndustry.name} - ${eq}`)}
                      className="text-[11px] text-white hover:underline font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Configure & Quote →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
