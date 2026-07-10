import React from 'react';
import Link from 'next/link';

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  reverse?: boolean; // for alternating layout
};

export default function ServiceCard({
  title,
  description,
  image,
  link,
  reverse = false,
}: ServiceCardProps) {
  return (
    <section className="group relative w-full  py-12 md:py-16 overflow-hidden border-t border-gray-200">

      {/* Subtle background network pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
          <path d="M0 200 L300 150 L500 250 L700 100 L900 220 L1200 180" stroke="#0f172a" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="300" cy="150" r="4" fill="#0f172a" />
          <circle cx="500" cy="250" r="4" fill="#0f172a" />
          <circle cx="700" cy="100" r="4" fill="#0f172a" />
          <circle cx="900" cy="220" r="4" fill="#0f172a" />
        </svg>
      </div>

      <div className={`max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 ${reverse ? 'flex-row-reverse' : ''}`}>
        {/* Left / Title Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-1xl lg:text-2xl font-bold leading-tight">
            {title.split(' ').slice(0, -1).join(' ')}<br />
            {title.split(' ').slice(-1)}
          </h2>
        </div>

        {/* Right / Diagonal Image Side */}
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="relative w-full max-w-xl md:max-w-2xl">
            <div className="clip-diagonal overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hover Overlay: Description + Learn More */}
      <div className="absolute inset-0 bg-white/98 opacity-0 translate-y-3 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 flex flex-col justify-center px-6 md:px-12">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-400 hidden group-hover:block" />

        <div className="max-w-7xl mx-auto w-full ">

          <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
            {description}
          </p>
          {/* <Link
            href={link}
            className="inline-flex items-center text-gray-900 font-semibold text-base hover:text-amber-600 transition-colors"
          >
            Learn more
            <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link> */}
        </div>
  
      </div>
    </section>
  );
}