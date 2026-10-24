import React, { useState } from 'react';
import { products, productCategories } from '../data/products';
import { IconArrowRight, IconCog, IconChevronLeft, IconChevronRight } from '../components/Icons';

export default function MachinerySlide({ onSelectQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const currentProduct = filteredProducts[activeProductIndex] || filteredProducts[0] || products[0];

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setActiveProductIndex(0);
  };

  const handlePrevProduct = () => {
    setActiveProductIndex(prev => (prev > 0 ? prev - 1 : filteredProducts.length - 1));
  };

  const handleNextProduct = () => {
    setActiveProductIndex(prev => (prev < filteredProducts.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="h-full w-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 overflow-y-auto no-scrollbar bg-black text-white">
      {/* Slide Top Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-900 text-white border border-zinc-700 mb-1">
            E-Waste & Scrap Machinery Portfolio
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white font-heading">
            Industrial E-Waste Shredders, PCB Lines & Scrap Balers
          </h2>
        </div>

        {/* Category Filter Chips: Solid Black/White */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 no-scrollbar">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-3 py-1 rounded-md text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-white text-black'
                : 'bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800'
            }`}
          >
            All Machinery ({products.length})
          </button>
          {productCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-3 py-1 rounded-md text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-black'
                  : 'bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.name.split('&')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Product Showcase */}
      <div className="max-w-7xl mx-auto w-full my-auto py-2 sm:py-4">
        <div className="bg-zinc-950 rounded-xl border border-zinc-800 p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Visual Product Media (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black border border-zinc-800 relative group">
              <img
                src={currentProduct.images?.[0] || "/images/products/complete-plant.svg"}
                alt={currentProduct.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/products/complete-plant.svg";
                }}
              />
              <div className="absolute top-3 left-3 bg-black/90 px-2.5 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider border border-zinc-700">
                {currentProduct.categoryName}
              </div>

              {/* Prev / Next Model Navigation Overlays */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                <button
                  onClick={handlePrevProduct}
                  aria-label="Previous product model"
                  className="p-2 rounded bg-black/90 hover:bg-zinc-900 text-white border border-zinc-700 cursor-pointer transition-colors"
                >
                  <IconChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-zinc-200 bg-black/90 px-2.5 py-1.5 rounded border border-zinc-700 font-bold">
                  {activeProductIndex + 1}/{filteredProducts.length}
                </span>
                <button
                  onClick={handleNextProduct}
                  aria-label="Next product model"
                  className="p-2 rounded bg-black/90 hover:bg-zinc-900 text-white border border-zinc-700 cursor-pointer transition-colors"
                >
                  <IconChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Model Details, Specs & Quote Action (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-1">
                Recycling System Technical Data
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {currentProduct.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {currentProduct.description || currentProduct.shortDescription}
              </p>
            </div>

            {/* Technical Specifications Grid: Solid black/white */}
            {currentProduct.specifications && (
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 pt-1">
                {currentProduct.specifications.map((spec, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-black border border-zinc-800">
                    <div className="text-[10px] text-zinc-400 uppercase font-semibold">
                      {spec.parameter}
                    </div>
                    <div className="text-xs font-bold text-white truncate mt-0.5">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Product Key Advantages */}
            {currentProduct.features && (
              <div className="flex flex-wrap gap-2 pt-1">
                {currentProduct.features.map((feat, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-[11px] text-zinc-200 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                    <IconCog className="w-3 h-3 text-white" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            )}

            {/* Action Bar: Solid White CTA */}
            <div className="pt-2">
              <button
                onClick={() => onSelectQuote(currentProduct.name)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-zinc-200 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                <span>Request Quotation for {currentProduct.name.split(' ').slice(0, 3).join(' ')}</span>
                <IconArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Model Selector Pills */}
      <div className="max-w-7xl mx-auto w-full pt-2">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <span className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider whitespace-nowrap">
            Recycling Units:
          </span>
          {filteredProducts.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveProductIndex(idx)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                idx === activeProductIndex
                  ? 'bg-white text-black font-bold'
                  : 'text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800'
              }`}
            >
              {p.name.split(' ').slice(0, 4).join(' ')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
