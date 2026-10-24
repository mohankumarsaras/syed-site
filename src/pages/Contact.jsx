import React from 'react';
import { useSearchParams } from 'react-router-dom';
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

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedMaterial = searchParams.get('material') || '';

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-4 bg-slate-800 text-orange-400 border border-slate-700">
              Commercial & Machinery Sales
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Contact Our Business Sales Team
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Connect directly with our commercial sales and marketing division for machinery price quotations, ex-works delivery terms, and turnkey project estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Direct Contact & Office Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8">
                <h2 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">
                  Business Sales Office
                </h2>

                <div className="space-y-6 text-sm">
                  {/* Executive Leadership / Owner */}
                  {siteConfig.owner && (
                    <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                      <div className="w-10 h-10 rounded bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                        <IconUser className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{siteConfig.owner.name}</div>
                        <div className="text-xs text-orange-600 font-semibold">{siteConfig.owner.title}</div>
                        <div className="text-slate-500 text-xs mt-0.5">Proprietor & Commercial Directorate</div>
                      </div>
                    </div>
                  )}

                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded bg-orange-100 text-orange-700 flex items-center justify-center flex-shrink-0">
                      <IconMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Commercial & Sales Office</div>
                      <div className="text-slate-600 mt-0.5 leading-relaxed text-xs">
                        {siteConfig.contact.address.plotNo}<br />
                        {siteConfig.contact.address.city}, {siteConfig.contact.address.stateRegion}<br />
                        {siteConfig.contact.address.country} - {siteConfig.contact.address.postalCode}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                      <IconMail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Sales Inquiries</div>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-sky-700 hover:underline text-xs mt-0.5 block font-medium"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <IconPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Sales Hotline / WhatsApp</div>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-slate-700 hover:text-slate-900 font-semibold text-xs mt-0.5 block"
                      >
                        {siteConfig.contact.phone}
                      </a>
                      <span className="text-[11px] text-slate-500">Call / WhatsApp during business hours</span>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                      <IconClock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Business Hours</div>
                      <div className="text-slate-600 text-xs mt-0.5">
                        {siteConfig.contact.businessHours}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Transparency Box */}
              <div className="p-6 rounded-lg bg-slate-900 text-slate-300 text-xs space-y-3 border border-slate-800">
                <div className="flex items-center gap-2 text-sky-400 font-bold uppercase tracking-wider text-[11px]">
                  <IconShield className="w-4 h-4" />
                  <span>Commercial Quotation Policy</span>
                </div>
                <p className="leading-relaxed text-slate-400">
                  All commercial quotations and proforma estimates are issued under formal terms directly by our business sales team.
                </p>
              </div>
            </div>

            {/* Right Column: Full Professional Quotation Form (7 cols) */}
            <div className="lg:col-span-7">
              <QuoteForm initialMaterial={preselectedMaterial} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
