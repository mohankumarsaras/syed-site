import React from 'react';
import { siteConfig } from '../config/siteConfig';

export default function SwipeDock() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 w-full bg-black border-t border-zinc-800 select-none py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-zinc-400">
        <div>
          © {new Date().getFullYear()} {siteConfig.companyName}
        </div>
        <div>
          Owned by <strong className="text-white font-bold">{siteConfig.owner.name}</strong>
        </div>
      </div>
    </footer>
  );
}
