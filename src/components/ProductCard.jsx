import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Settings, ShieldCheck } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:border-sky-400">
      {/* Machinery Image Header */}
      <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden flex items-center justify-center">
        <img
          src={product.images?.[0] || "/images/products/jaw-crusher-main.svg"}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          onError={(e) => {
            e.target.src = "/images/products/jaw-crusher-main.svg";
          }}
        />
        <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-sky-400 border border-sky-500/30 px-2.5 py-1 rounded text-xs font-semibold tracking-wide uppercase">
          {product.categoryName || "Industrial Unit"}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed flex-1">
          {product.shortDescription}
        </p>

        {/* Highlight Specifications (if available) */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
            {product.specifications.slice(0, 2).map((spec, i) => (
              <div key={i} className="flex justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-700">{spec.parameter}:</span>
                <span className="truncate max-w-[55%] text-slate-600">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to={`/contact?product=${encodeURIComponent(product.name)}`}
            className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors shadow-xs"
          >
            <span>Quote</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
