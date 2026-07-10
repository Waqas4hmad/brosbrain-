'use client';
import { useState } from 'react';
import RatingBadges from './RatingBadges';
import TestimonialCard from './TestimonialCard';

// Testimonial Data — add more here for slider
const testimonials = [
  {
    id: 1,
    quote: "Brosbrian Solutions has delivered multiple app versions, meeting the client's expectations. The team adheres to schedules and is responsive to needs, communicating via virtual meetings, emails, and messaging apps. Their ability to quickly learn the client's business nuances is impressive.",
    name: "Barrett Williams",
    role: "CIO, GSC Enterprises, Inc",
    avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "Working with Brosbrian Solutions was a game-changer for our product launch. They delivered ahead of schedule, maintained excellent quality, and adapted quickly to our changing requirements. Highly recommended!",
    name: "Sarah Mitchell",
    role: "CTO, TechFlow Solutions",
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 3,
    quote: "The team’s technical expertise and transparent communication made the entire development process smooth and stress-free. Our application performance improved by 40% after their work.",
    name: "David Chen",
    role: "VP Engineering, StartupX",
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-12">
        
        {/* Left Side: Rating Badges */}
        <RatingBadges />

        {/* Right Side: Testimonial + Navigation */}
        <div className="relative flex-1 w-full">
          <TestimonialCard 
            quote={current.quote}
            name={current.name}
            role={current.role}
            avatarSrc={current.avatarSrc}
          />

          {/* Arrow Navigation */}
          <div className="absolute -right-4 md:right-0 -bottom-16 md:bottom-0 flex gap-4">
            <button
              onClick={goToPrev}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent border border-amber-500 text-gray-400 hover:border-yellow-500 hover:text-yellow-500 transition-colors"
              aria-label="Previous review"
            >
              ←
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent border border-width-5 border-amber-500 text-gray-400 hover:border-yellow-500 hover:text-yellow-500 transition-colors"
              aria-label="Next review"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}