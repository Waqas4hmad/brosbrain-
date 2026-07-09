'use client'; // Required for state in Next.js App Router

import React, { useState } from 'react';

// Tab content data
const tabs = [
  {
    id: 'mission',
    label: 'Our Mission',
    heading: 'At Closeloop, our mission is to innovate and evolve, crafting digital solutions that withstand the test of time.',
    description: "We're dedicated to fostering honest client relationships, providing tailored strategies and cutting-edge technology solutions across diverse domains. From mobile development to AI integration and beyond, we collaborate with businesses worldwide, ensuring their success in an ever-changing landscape. With our group of developers and innovative thinkers, we turn ideas into digital solutions that exceed expectations and make a mark in the industry. Come aboard as we shape the tech landscape, making strides, one breakthrough at a time."
  },
  {
    id: 'vision',
    label: 'Our Vision',
    heading: 'To be the most trusted technology partner, empowering businesses to lead in the digital future.',
    description: "We envision a world where technology seamlessly solves complex challenges, drives meaningful growth, and creates lasting value for every business we serve. We strive to set new standards of excellence in software engineering, innovation, and client success globally."
  },
  {
    id: 'values',
    label: 'Our Values',
    heading: 'Integrity, Innovation, Collaboration, and Excellence guide everything we do.',
    description: "We prioritize transparency in every interaction, embrace curiosity to push boundaries, work as one team with our clients, and never settle for less than our best. These values define our culture and shape every solution we deliver."
  }
];

export default function MissionVisionValues() {
  const [activeTab, setActiveTab] = useState('mission');

  // Get current tab content
  const currentContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <h1 className="mb-4 text-xl font-semibold py-5 "> Our Methodology</h1>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800 leading-tight mb-8">
                   Our systematic approach blends innovation with tried-and-tested strategies to deliver tailored solutions that exceed expectations.</h3>

        <div className="flex flex-wrap gap-8 md:gap-12 border-b border-gray-200 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-4 text-xl md:text-xl font-medium transition-colors ${activeTab === tab.id
                  ? 'text-slate-800'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              {tab.label}
              {/* Active Tab Indicator — matches your teal line */}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-500" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight mb-8">
            {currentContent?.heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {currentContent?.description}
          </p>
        </div>
      </div>
    </section>
  );
}