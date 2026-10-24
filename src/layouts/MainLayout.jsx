import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-orange-500 selection:text-white">
      {/* Scroll restoration on route changes */}
      <ScrollToTop />
      
      {/* Global Sticky Navigation */}
      <Navbar />

      {/* Main Dynamic Viewport */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global Comprehensive Footer */}
      <Footer />
    </div>
  );
}
