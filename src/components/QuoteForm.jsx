import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { IconSend, IconCheckCircle, IconAlertCircle, IconRefresh } from './Icons';

export default function QuoteForm({ initialMaterial = "", className = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    businessEmail: "",
    companyName: "",
    requirementsNote: initialMaterial ? `Requirement for ${initialMaterial} processing equipment.` : ""
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    isDemo: false
  });

  const [validationErrors, setValidationErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Please enter contact person name.";
    
    const cleanMobile = formData.mobileNumber.replace(/[\s-]/g, '');
    if (!cleanMobile) {
      errors.mobileNumber = "10-digit mobile number is required.";
    } else if (!/^(?:\+91|0)?[6-9]\d{9}$/.test(cleanMobile)) {
      errors.mobileNumber = "Enter a valid 10-digit mobile number.";
    }

    if (!formData.businessEmail.trim()) {
      errors.businessEmail = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errors.businessEmail = "Please enter a valid email address.";
    }

    if (!formData.companyName.trim()) errors.companyName = "Company / Firm name is required.";

    if (!formData.requirementsNote.trim()) {
      errors.requirementsNote = "Please describe your machinery requirements.";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: null, isDemo: false });

    const endpoint = siteConfig.enquiryService.endpointUrl;

    if (!endpoint || siteConfig.enquiryService.isDemoMode) {
      setTimeout(() => {
        setFormStatus({
          submitting: false,
          submitted: true,
          error: null,
          isDemo: true
        });
      }, 500);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Sales service responded with HTTP status ${response.status}`);
      }

      setFormStatus({
        submitting: false,
        submitted: true,
        error: null,
        isDemo: false
      });
    } catch (err) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: err.message || "Failed to deliver enquiry. Please contact our sales team directly via phone or WhatsApp.",
        isDemo: false
      });
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      mobileNumber: "",
      businessEmail: "",
      companyName: "",
      requirementsNote: ""
    });
    setFormStatus({ submitting: false, submitted: false, error: null, isDemo: false });
  };

  return (
    <div className={`bg-zinc-950 p-5 sm:p-7 rounded-xl border border-zinc-800 ${className}`}>
      {formStatus.submitted ? (
        <div className="text-center py-6">
          <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
            <IconCheckCircle className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 font-heading">Commercial Inquiry Received</h3>

          {formStatus.isDemo ? (
            <div className="my-5 p-4 rounded-lg bg-black border border-zinc-800 text-left text-xs space-y-2">
              <div className="font-bold text-white">
                Executive Routing Confirmation
              </div>
              <p className="text-zinc-300">
                Inquiry registered for review by <strong>{siteConfig.owner?.name || "Syed Ismail"}</strong> & commercial dispatch desk.
              </p>
              <div className="bg-zinc-900 p-3 rounded border border-zinc-800 font-mono text-[11px] text-zinc-300 space-y-0.5">
                <div><span className="text-zinc-500">Contact:</span> {formData.fullName} ({formData.mobileNumber})</div>
                <div><span className="text-zinc-500">Email:</span> {formData.businessEmail}</div>
                <div><span className="text-zinc-500">Company:</span> {formData.companyName}</div>
                <div className="truncate"><span className="text-zinc-500">Note:</span> {formData.requirementsNote}</div>
              </div>
            </div>
          ) : (
            <p className="text-zinc-300 max-w-md mx-auto mb-6 text-sm">
              Thank you. Our business sales team will review your specifications and issue an official quotation.
            </p>
          )}

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-extrabold text-xs uppercase tracking-wider rounded-lg hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            <IconRefresh className="w-4 h-4 text-black" />
            <span>Submit Another Inquiry</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
            <h3 className="text-base font-bold text-white font-heading">
              Direct Sales Specification Request
            </h3>
            <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
              Official Quotation
            </span>
          </div>

          {formStatus.error && (
            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white flex items-start gap-2.5 text-xs">
              <IconAlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-white" />
              <span>{formStatus.error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Contact Person */}
            <div>
              <label htmlFor="fullName" className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
                Contact Person <span className="text-white">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Sharma"
                className={`w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm text-white bg-black border transition-colors focus:outline-none ${
                  validationErrors.fullName ? 'border-white focus:border-white' : 'border-zinc-800 focus:border-white'
                }`}
              />
              {validationErrors.fullName && (
                <p className="mt-1 text-[11px] text-zinc-400">{validationErrors.fullName}</p>
              )}
            </div>

            {/* Mobile / WhatsApp */}
            <div>
              <label htmlFor="mobileNumber" className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
                Mobile / WhatsApp <span className="text-white">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400">
                  +91
                </span>
                <input
                  id="mobileNumber"
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="98765 43210"
                  className={`w-full pl-11 pr-3.5 py-2 rounded-lg text-xs sm:text-sm text-white bg-black border transition-colors focus:outline-none ${
                    validationErrors.mobileNumber ? 'border-white focus:border-white' : 'border-zinc-800 focus:border-white'
                  }`}
                />
              </div>
              {validationErrors.mobileNumber && (
                <p className="mt-1 text-[11px] text-zinc-400">{validationErrors.mobileNumber}</p>
              )}
            </div>

            {/* Business Email */}
            <div>
              <label htmlFor="businessEmail" className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
                Corporate Email <span className="text-white">*</span>
              </label>
              <input
                id="businessEmail"
                type="email"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
                placeholder="purchasing@company.in"
                className={`w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm text-white bg-black border transition-colors focus:outline-none ${
                  validationErrors.businessEmail ? 'border-white focus:border-white' : 'border-zinc-800 focus:border-white'
                }`}
              />
              {validationErrors.businessEmail && (
                <p className="mt-1 text-[11px] text-zinc-400">{validationErrors.businessEmail}</p>
              )}
            </div>

            {/* Company / Firm Name */}
            <div>
              <label htmlFor="companyName" className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
                Firm / Enterprise <span className="text-white">*</span>
              </label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Apex Minerals Ltd"
                className={`w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm text-white bg-black border transition-colors focus:outline-none ${
                  validationErrors.companyName ? 'border-white focus:border-white' : 'border-zinc-800 focus:border-white'
                }`}
              />
              {validationErrors.companyName && (
                <p className="mt-1 text-[11px] text-zinc-400">{validationErrors.companyName}</p>
              )}
            </div>
          </div>

          {/* Requirements Note */}
          <div>
            <label htmlFor="requirementsNote" className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
              Machinery Model / Material & Capacity Needs <span className="text-white">*</span>
            </label>
            <textarea
              id="requirementsNote"
              name="requirementsNote"
              rows={2}
              value={formData.requirementsNote}
              onChange={handleChange}
              placeholder="e.g. Jaw Crusher 150 TPH or Raymond Roller Mill 325 mesh calcite..."
              className={`w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm text-white bg-black border transition-colors focus:outline-none resize-none ${
                validationErrors.requirementsNote ? 'border-white focus:border-white' : 'border-zinc-800 focus:border-white'
              }`}
            ></textarea>
            {validationErrors.requirementsNote && (
              <p className="mt-1 text-[11px] text-zinc-400">{validationErrors.requirementsNote}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            <span className="text-[11px] text-zinc-400">
              Direct review by sales desk & owner Syed Ismail.
            </span>
            <button
              type="submit"
              disabled={formStatus.submitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white hover:bg-zinc-200 disabled:opacity-50 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              {formStatus.submitting ? (
                <span>Transmitting...</span>
              ) : (
                <>
                  <IconSend className="w-3.5 h-3.5 text-black" />
                  <span>Send Proposal Request</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
