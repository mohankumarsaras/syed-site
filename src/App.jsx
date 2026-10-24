import React, { useState, useEffect, useRef, useCallback } from 'react';
import AppHeader from './components/AppHeader';
import SwipeDock from './components/SwipeDock';
import HomeSlide from './slides/HomeSlide';
import MachinerySlide from './slides/MachinerySlide';
import ApplicationsSlide from './slides/ApplicationsSlide';
import AboutSlide from './slides/AboutSlide';
import ContactSlide from './slides/ContactSlide';

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'machinery', label: 'Machinery' },
  { id: 'applications', label: 'Applications' },
  { id: 'about', label: 'About & Owner' },
  { id: 'contact', label: 'Sales & Quote' }
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [preselectedMaterial, setPreselectedMaterial] = useState('');
  
  // Touch gesture state
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const isSwiping = useRef(false);

  // Wheel debounce state to prevent ultra-fast scrolling
  const lastWheelTime = useRef(0);

  const tabs = TABS;
  const totalSlides = tabs.length;

  const handleNext = useCallback(() => {
    setActiveIndex(prev => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleNavigate = useCallback((tabId, material = '') => {
    const idx = tabs.findIndex(t => t.id === tabId);
    if (idx !== -1) {
      setActiveIndex(idx);
    }
    if (material) {
      setPreselectedMaterial(material);
    }
  }, [tabs]);

  const handleSelectQuote = useCallback((materialName) => {
    handleNavigate('contact', materialName);
  }, [handleNavigate]);

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setActiveIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setActiveIndex(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, totalSlides]);

  // Touch Swipe Handlers (Left <-> Right)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
    isSwiping.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isSwiping.current) return;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (!isSwiping.current) return;
    isSwiping.current = false;

    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 45;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Trackpad / Horizontal Wheel Support
  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 600) return;

    const deltaX = e.deltaX;
    const deltaY = e.deltaY;

    if (Math.abs(deltaX) > 35) {
      lastWheelTime.current = now;
      if (deltaX > 0) handleNext();
      else handlePrev();
    } else if (Math.abs(deltaY) > 50 && e.shiftKey) {
      lastWheelTime.current = now;
      if (deltaY > 0) handleNext();
      else handlePrev();
    }
  };

  return (
    <div 
      className="h-screen w-screen overflow-hidden flex flex-col bg-black text-white select-none relative font-sans"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
    >
      {/* Top Application Header */}
      <AppHeader
        activeTab={tabs[activeIndex].id}
        onTabSelect={(idx) => setActiveIndex(idx)}
        tabs={tabs}
      />

      {/* Main Horizontal Carousel Container */}
      <main className="flex-1 w-full relative overflow-hidden bg-black pb-12">
        <div
          className="h-full flex transition-transform duration-500 ease-out will-change-transform"
          style={{
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${(activeIndex * 100) / totalSlides}%)`
          }}
        >
          {/* Slide 1: Home Showcase */}
          <div className="h-full" style={{ width: `${100 / totalSlides}%` }}>
            <HomeSlide onNavigate={handleNavigate} />
          </div>

          {/* Slide 2: Machinery Catalog */}
          <div className="h-full" style={{ width: `${100 / totalSlides}%` }}>
            <MachinerySlide onSelectQuote={handleSelectQuote} />
          </div>

          {/* Slide 3: Application Flowsheets */}
          <div className="h-full" style={{ width: `${100 / totalSlides}%` }}>
            <ApplicationsSlide onSelectQuote={handleSelectQuote} />
          </div>

          {/* Slide 4: About & Leadership */}
          <div className="h-full" style={{ width: `${100 / totalSlides}%` }}>
            <AboutSlide onNavigate={handleNavigate} />
          </div>

          {/* Slide 5: Sales Office & Instant Quote Form */}
          <div className="h-full" style={{ width: `${100 / totalSlides}%` }}>
            <ContactSlide initialMaterial={preselectedMaterial} />
          </div>
        </div>
      </main>

      {/* Static Fixed Footer */}
      <SwipeDock />
    </div>
  );
}
