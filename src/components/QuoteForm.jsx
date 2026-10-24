import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { IconSend, IconCheckCircle, IconAlertCircle, IconRefresh } from './Icons';

export default function QuoteForm({ initialMaterial = "", className = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    businessEmail: "",
    companyName: "",
    requirementsNote: ""
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
    
    // Validate Indian mobile number (10 digits, optionally starting with +91 or 0)
    const cleanMobile = formData.mobileNumber.replace(/[\s-]/g, '');
    if (!cleanMobile) {
      errors.mobileNumber = "10-digit mobile number is required.";
    } else if (!/^(?:\+91|0)?[6-9]\d{9}$/.test(cleanMobile)) {
      errors.mobileNumber = "Enter a valid 10-digit Indian mobile number (e.g. 9876543210).";
    }

    if (!formData.businessEmail.trim()) {
      errors.businessEmail = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errors.businessEmail = "Please enter a valid email address.";
    }

    if (!formData.companyName.trim()) errors.companyName = "Company / Firm name is required.";

    if (!formData.requirementsNote.trim()) {
      errors.requirementsNote = "Please describe your machinery requirements or inquiry details.";
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
    <div className={`bg-white rounded-lg border border-slate-200 p-6 sm:p-8 ${className}`}>
      {formStatus.submitted ? (
        <div className="text-center py-6">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded flex items-center justify-center mx-auto mb-4 border border-emerald-200">
            <IconCheckCircle className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Commercial Sales Inquiry Received</h3>

          {formStatus.isDemo ? (
            <div className="my-6 p-4 rounded bg-amber-50 border border-amber-200 text-amber-900 text-left text-xs space-y-2">
              <div className="font-semibold text-amber-800">
                Notice: Prototype Sales Preview
              </div>
              <p>
                In accordance with project standards, this enquiry form does not send fake API dispatches. No backend endpoint is currently configured in <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">src/config/siteConfig.js</code>.
              </p>
              <div className="bg-white p-3 rounded border border-amber-200 font-mono text-[11px] text-slate-700">
                <div>Contact: {formData.fullName} (+91 {formData.mobileNumber})</div>
                <div>Email: {formData.businessEmail}</div>
                <div>Company: {formData.companyName}</div>
                <div>Inquiry: {formData.requirementsNote}</div>
              </div>
            </div>
          ) : (
            <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm">
              Thank you for reaching out. Our business sales team will review your requirements and connect with an official quotation.
            </p>
          )}

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
          >
            <IconRefresh className="w-4 h-4" />
            <span>Submit Another Sales Inquiry</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900">
              Request Machinery Price Quotation
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Connect directly with our commercial sales team. Share your requirements for ex-works or delivered price quotes.
            </p>
          </div>

          {formStatus.error && (
            <div className="mb-6 p-3 rounded bg-red-50 border border-red-200 text-red-800 flex items-start gap-2.5 text-xs">
              <IconAlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-600" />
              <span>{formStatus.error}</span>
            </div>
          )}

          {/* Clean B2B Core Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* Contact Person */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Contact Person Name <span className="text-orange-600">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Sharma"
                className={`w-full px-3.5 py-2 rounded border text-sm text-slate-900 bg-white transition-colors focus:outline-none ${
                  validationErrors.fullName ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-sky-700'
                }`}
              />
              {validationErrors.fullName && (
                <p className="mt-1 text-xs text-red-600">{validationErrors.fullName}</p>
              )}
            </div>

            {/* Mobile / WhatsApp */}
            <div>
              <label htmlFor="mobileNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Mobile / WhatsApp Number <span className="text-orange-600">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                  +91
                </span>
                <input
                  id="mobileNumber"
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="98765 43210"
                  className={`w-full pl-12 pr-3.5 py-2 rounded border text-sm text-slate-900 bg-white transition-colors focus:outline-none ${
                    validationErrors.mobileNumber ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-sky-700'
                  }`}
                />
              </div>
              {validationErrors.mobileNumber && (
                <p className="mt-1 text-xs text-red-600">{validationErrors.mobileNumber}</p>
              )}
            </div>

            {/* Business Email */}
            <div>
              <label htmlFor="businessEmail" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address <span className="text-orange-600">*</span>
              </label>
              <input
                id="businessEmail"
                type="email"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
                placeholder="rajesh@company.in"
                className={`w-full px-3.5 py-2 rounded border text-sm text-slate-900 bg-white transition-colors focus:outline-none ${
                  validationErrors.businessEmail ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-sky-700'
                }`}
              />
              {validationErrors.businessEmail && (
                <p className="mt-1 text-xs text-red-600">{validationErrors.businessEmail}</p>
              )}
            </div>

            {/* Company / Firm Name */}
            <div>
              <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Company / Firm / Trader Name <span className="text-orange-600">*</span>
              </label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Sharma Stone Crusher & Minerals Pvt Ltd"
                className={`w-full px-3.5 py-2 rounded border text-sm text-slate-900 bg-white transition-colors focus:outline-none ${
                  validationErrors.companyName ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-sky-700'
                }`}
              />
              {validationErrors.companyName && (
                <p className="mt-1 text-xs text-red-600">{validationErrors.companyName}</p>
              )}
            </div>
          </div>

          {/* Requirements Note */}
          <div className="mb-5">
            <label htmlFor="requirementsNote" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Specific Machinery Requirements / Comments <span className="text-orange-600">*</span>
            </label>
            <textarea
              id="requirementsNote"
              name="requirementsNote"
              rows={4}
              value={formData.requirementsNote}
              onChange={handleChange}
              placeholder="Describe your machinery requirements, equipment model, expected output, plant capacity, or delivery location details..."
              className={`w-full px-3.5 py-2.5 rounded border text-sm text-slate-900 bg-white transition-colors focus:outline-none ${
                validationErrors.requirementsNote ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-sky-700'
              }`}
            ></textarea>
            {validationErrors.requirementsNote && (
              <p className="mt-1 text-xs text-red-600">{validationErrors.requirementsNote}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-xs text-slate-500">
              * Required fields. All commercial inquiries handled confidentially.
            </div>
            <button
              type="submit"
              disabled={formStatus.submitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              {formStatus.submitting ? (
                <span>Processing Inquiry...</span>
              ) : (
                <>
                  <IconSend className="w-4 h-4" />
                  <span>Send Sales Inquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
