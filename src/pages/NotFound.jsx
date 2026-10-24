import React from 'react';
import { Link } from 'react-router-dom';
import { IconHome, IconArrowRight } from '../components/Icons';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-lg border border-slate-200 p-8 sm:p-10 text-center">
        <div className="text-4xl font-black text-slate-900 font-mono mb-3">
          404
        </div>

        <h1 className="text-xl font-bold text-slate-900 mb-2">
          Page Not Found
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          The requested page or resource could not be found.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
          >
            <IconHome className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            to="/industries"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
          >
            <span>View Industries</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
