import React from 'react';
import QuoteForm from '../components/QuoteForm';
import { siteConfig } from '../config/siteConfig';
import { 
  IconMapPin, 
  IconMail, 
  IconPhone, 
  IconClock, 
  IconShield,
  IconUser
} from '../components/Icons';

export default function ContactSlide({ initialMaterial = "" }) {
  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 overflow-y-auto no-scrollbar bg-black text-white">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-900 text-white border border-zinc-700 mb-1">
            Commercial E-Waste & Scrap Project Desk
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white font-heading">
            Turnkey Plant Estimates & Equipment Proposals
          </h2>
        </div>

        <div className="text-xs text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
          Owner: <strong className="text-white font-bold">{siteConfig.owner.name}</strong> ({siteConfig.owner.title})
        </div>
      </div>

      {/* Main Grid: Office Details + Interactive Form */}
      <div className="max-w-7xl mx-auto w-full my-auto py-2 sm:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Direct Contact & Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* Executive Leadership Box */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center flex-shrink-0 font-bold">
                <IconUser className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                  Site Owner & Principal Director
                </span>
                <div className="font-bold text-white text-base font-heading">
                  {siteConfig.owner.name}
                </div>
                <div className="text-xs text-zinc-300 font-medium">
                  {siteConfig.owner.title}
                </div>
                <div className="text-[11px] text-zinc-400 mt-1">
                  Personally reviews E-Waste plant capacity proposals, flowsheet layouts, and scrap machine orders.
                </div>
              </div>
            </div>

            {/* Business Contact Details */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-black text-white border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <IconMapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">Works & Manufacturing Facility</div>
                  <div className="text-zinc-300 text-[11px] mt-0.5 leading-relaxed">
                    {siteConfig.contact.address.plotNo}, {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-black text-white border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <IconMail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">Project Sales Directorate</div>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-zinc-300 hover:text-white hover:underline text-[11px] block">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-black text-white border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <IconPhone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">Direct Sales & WhatsApp Line</div>
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-white font-bold text-[11px] block">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-black text-white border border-zinc-800 flex items-center justify-center flex-shrink-0">
                  <IconClock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">Office Hours</div>
                  <div className="text-zinc-400 text-[11px]">
                    {siteConfig.contact.businessHours}
                  </div>
                </div>
              </div>
            </div>

            {/* Policy badge */}
            <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center gap-2.5 text-[11px] text-zinc-400">
              <IconShield className="w-4 h-4 text-white flex-shrink-0" />
              <span>Certified technical proposals and ex-works plant quotations issued within 24 business hours.</span>
            </div>
          </div>

          {/* Right Column: Sleek Quotation Form (7 cols) */}
          <div className="lg:col-span-7">
            <QuoteForm initialMaterial={initialMaterial} />
          </div>
        </div>
      </div>
    </div>
  );
}
