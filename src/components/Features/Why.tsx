'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function WhyInstinctools() {
  const [isDark, setIsDark] = useState(false);

  // Optional: Load saved preference or system default
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(saved === 'dark' || (!saved && prefersDark));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Theme colors
  const theme = {
    bg: isDark ? '#0F172A' : '#FFFFFF',
    text: isDark ? '#F1F5F9' : '#1E293B',
    muted: isDark ? '#475569' : '#94A3B8',
    green: '#84CC16',
    yellow: '#FBBF24',
    purple: '#8B5CF6',
    red: '#EF4444',
    blue: '#38BDF8',
  };

  return (
    <section 
      className="relative w-full py-16 px-6 md:px-12 lg:px-20 overflow-hidden transition-colors duration-300"
      
    >
      {/* Theme Toggle Button */}
      {/* <button
        onClick={() => setIsDark(!isDark)}
        className="absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 z-50"
        style={{
          backgroundColor: isDark ? '#1E293B' : '#F1F5F9',
          color: theme.text,
          border: `1px solid ${theme.muted}`,
        }}
      >
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button> */}

      {/* Network Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="network" width="200" height="120" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill={theme.muted} />
              <circle cx="100" cy="60" r="2" fill={theme.muted} />
              <circle cx="180" cy="30" r="2" fill={theme.muted} />
              <circle cx="60" cy="100" r="2" fill={theme.muted} />
              <circle cx="140" cy="90" r="2" fill={theme.muted} />
              <path d="M20 20 L100 60 L180 30 M100 60 L60 100 L140 90" stroke={theme.muted} strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 transition-colors duration-300"
         
        >
          Why Brosbrain
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          
          {/* Item 1 */}
          <div className="flex flex-col">
            <h3 
              className="text-2xl md:text-3xl font-semibold mb-6 leading-tight transition-colors duration-300"
            
            >
              Increase speed<br />to market
            </h3>
            <div className="w-full h-[2px] relative" style={{ backgroundColor: theme.green }}>
              <div 
                className="absolute -top-3 left-0 w-10 h-7 flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: theme.green }}
              >
                01
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col">
            <h3 
              className="text-2xl md:text-3xl font-semibold mb-6 leading-tight transition-colors duration-300"
            >
              Reduce<br />development cost
            </h3>
            <div className="w-full h-[2px] relative" style={{ backgroundColor: theme.yellow }}>
              <div 
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-7 flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: theme.yellow }}
              >
                02
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col">
            <h3 
              className="text-2xl md:text-3xl font-semibold mb-6 leading-tight transition-colors duration-300"
            >
              Assure information<br />security
            </h3>
            <div className="w-full h-[2px] relative" style={{ backgroundColor: theme.purple }}>
              <div 
                className="absolute -top-3 right-0 w-10 h-7 flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: theme.purple }}
              >
                03
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col">
            <h3 
              className="text-2xl md:text-3xl font-semibold mb-6 leading-tight transition-colors duration-300"
            >
              Get high-quality<br />software
            </h3>
            <div className="w-full h-[2px] relative" style={{ backgroundColor: theme.red }}>
              <div 
                className="absolute -top-3 left-0 w-10 h-7 flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: theme.red }}
              >
                04
              </div>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col">
            <h3 
              className="text-2xl md:text-3xl font-semibold mb-6 leading-tight transition-colors duration-300"
            >
              Scale team up<br />and down
            </h3>
            <div className="w-full h-[2px] relative" style={{ backgroundColor: theme.blue }}>
              <div 
                className="absolute -top-3 right-0 w-10 h-7 flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: theme.blue }}
              >
                05
              </div>
            </div>
          </div>

         
<Link
  href="/contact" // Replace with your actual page path
  className="flex flex-col cursor-pointer transition-all duration-300 rounded-xl p-5 -m-5 hover:-translate-y-1.5"
  style={{
    backgroundColor: 'transparent',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = '0 16px 32px rgba(132, 204, 22, 0.2)';
    e.currentTarget.style.backgroundColor = 'rgba(132, 204, 22, 0.05)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.backgroundColor = 'transparent';
  }}
>
  <div className="flex items-center gap-3 mb-6">
  
    <h3
      className="text-2xl md:text-3xl font-semibold leading-tight transition-all duration-300"
      style={{ color: theme.green }}
    >
      Exclusive Delivery<br />Framework
    </h3>
      <span
      className="text-2xl font-bold flex-shrink-0 transition-transform duration-300 hover:translate-x-2 ml-5"
      style={{ color: theme.green }}
    >→</span>
  </div>
  <div
    className="w-full h-[2px] transition-transform duration-300 origin-left hover:scale-x-105"
    style={{ backgroundColor: theme.green }}
  ></div>
</Link>
        </div>
      </div>
    </section>
  );
}