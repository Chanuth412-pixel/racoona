import React, { useState, useEffect } from 'react';

interface Props {
  contactUrl: string;
}

export default function StickyAssessmentCTA({ contactUrl }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show widget after scrolling down 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 transition-all duration-300 transform translate-y-0 opacity-100">
      <a
        href={contactUrl}
        className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-900 text-white hover:bg-emerald-600 transition-all duration-300 shadow-xl border border-slate-700/50 hover:border-emerald-400 group backdrop-blur-md"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="font-sans font-bold text-sm tracking-tight">
          Schedule Assessment
        </span>
        <svg
          className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
}
