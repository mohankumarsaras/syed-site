import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ImageGallery from '../components/ImageGallery';
import ProductCard from '../components/ProductCard';
import QuoteForm from '../components/QuoteForm';
import CTASection from '../components/CTASection';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Settings, 
  FileText, 
  Send, 
  Layers, 
  ShieldCheck, 
  Share2,
  ChevronRight
} from 'lucide-react';

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = useMemo(() => {
    return products.find(p => p.slug === slug);
  }, [slug]);

  // Related products from the same category or overall
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(p => p.id !== product.id && p.category === product.category)
      .slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 px-4 py-16">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm text-center max-w-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Product Not Found</h2>
          <p className="text-slate-600 text-sm mb-6">
            The requested machinery specification model does not exist or may have been relocated in the equipment catalog.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Machinery Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Breadcrumb Navigation Strip */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/products" className="hover:text-slate-900">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to={`/products?category=${product.category}`} className="hover:text-slate-900">
              {product.categoryName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-xs">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Hero & Specifications */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Column: Image Gallery (5 cols) */}
            <div className="lg:col-span-6">
              <div className="sticky top-28">
                <ImageGallery images={product.images} alt={product.name} />

                {/* OEM Configuration Badge */}
                <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-sky-600" />
                    <span>Configuration: <strong>{product.status || 'OEM Standard'}</strong></span>
                  </div>
                  <span className="text-orange-600 font-semibold">Factory Direct Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Information, Specs & Actions (7 cols) */}
            <div className="lg:col-span-6 flex flex-col">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 bg-sky-100 text-sky-800">
                  <span>{product.categoryName}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  {product.name}
                </h1>

                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4">
                <a
                  href="#quote-section"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Machinery Quotation</span>
                </a>

                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs uppercase tracking-wider rounded-lg border border-slate-300 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Catalog</span>
                </Link>
              </div>

              {/* Verified Technical Specifications Table */}
              <div className="mt-10 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-sky-600" />
                  <span>Technical & Construction Specifications</span>
                </h3>

                {product.specifications && product.specifications.length > 0 ? (
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm divide-y divide-slate-200">
                      <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                        <tr>
                          <th className="px-4 py-3 sm:px-6">Engineering Parameter</th>
                          <th className="px-4 py-3 sm:px-6">Specification Profile</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {product.specifications.map((spec, i) => (
                          <tr key={i} className="hover:bg-slate-50/70">
                            <td className="px-4 py-3 sm:px-6 font-medium text-slate-800">
                              {spec.parameter}
                            </td>
                            <td className="px-4 py-3 sm:px-6 text-slate-600">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-slate-100 text-xs text-slate-500">
                    Detailed engineering data sheets and mechanical drawings available upon application review.
                  </div>
                )}
              </div>

              {/* Supported Industrial Applications */}
              {product.applications && product.applications.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-orange-600" />
                    <span>Recommended Industrial Applications</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.applications.map((app, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Preselected Quotation Form Section */}
      <section id="quote-section" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Equipment Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Request Technical Proposal for {product.name}
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Our engineering team will assess your application specifications, material abrasiveness, and production targets.
            </p>
          </div>

          {/* Form preselected with current product name */}
          <QuoteForm initialProduct={product.name} />
        </div>
      </section>

      {/* Related Machinery Recommendations */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8">
              Related Processing Equipment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Global CTA */}
      <CTASection />
    </div>
  );
}
