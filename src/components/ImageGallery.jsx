import React, { useState } from 'react';

export default function ImageGallery({ images = [], alt = "Machinery Image" }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[4/3] bg-slate-900 rounded-xl flex items-center justify-center text-slate-500 text-sm">
        No Machinery Image Available
      </div>
    );
  }

  const activeImage = images[selectedIndex] || images[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Primary Display */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md">
        <img
          src={activeImage}
          alt={`${alt} - View ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-300"
          onError={(e) => {
            e.target.src = "/images/products/jaw-crusher-main.svg";
          }}
        />
        <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-slate-900/80 backdrop-blur-xs text-xs font-mono text-slate-300 rounded border border-slate-700">
          Fig. 0{selectedIndex + 1} / 0{images.length}
        </div>
      </div>

      {/* Thumbnails (if multiple) */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`relative flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                selectedIndex === idx
                  ? 'border-orange-500 scale-102 ring-2 ring-orange-500/20'
                  : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/products/jaw-crusher-main.svg";
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
