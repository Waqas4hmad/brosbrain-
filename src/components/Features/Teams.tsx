import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-instinct-dark text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-instinct-red text-3xl font-black">*</span>
            <span className="text-2xl font-semibold bg-gradient-to-r from-instinct-blue to-white bg-clip-text text-transparent">
              instinctools
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#" className="hover:text-instinct-green transition-colors">AI</Link>
            <Link href="#" className="hover:text-instinct-green transition-colors">Data</Link>
            <Link href="#" className="hover:text-instinct-green transition-colors">Development</Link>
            <Link href="#" className="hover:text-instinct-green transition-colors">Consulting</Link>
            <Link href="#" className="hover:text-instinct-green transition-colors">Industries</Link>
            <Link href="#" className="hover:text-instinct-green transition-colors">Clients</Link>
            <Link href="#" className="hover:text-instinct-green transition-colors">Insights</Link>
            <Link href="#" className="hover:text-instinct-green transition-colors">About us</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="text-white hover:text-instinct-green transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="border-2 border-instinct-green text-instinct-green px-6 py-2 font-medium hover:bg-instinct-green hover:text-white transition-all">
              CONTACT US
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative overflow-hidden">
        {/* Subtle network background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="servicesNetwork" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="2" fill="#94A3B8" />
                <circle cx="160" cy="80" r="2" fill="#94A3B8" />
                <circle cx="80" cy="160" r="2" fill="#94A3B8" />
                <path d="M40 40 L160 80 L80 160" stroke="#94A3B8" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#servicesNetwork)" />
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Service 1 */}
          <div className="flex items-center gap-6 border-b border-gray-200 pb-8">
            <h2 className="text-2xl md:text-3xl font-bold flex-1">
              AI-powered<br />application engineering
            </h2>
            <div className="w-64 h-40 relative flex-shrink-0 rounded overflow-hidden shadow-md">
              <Image
                src="/ai-chip.jpg"
                alt="AI chip on circuit board"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex items-center gap-6 border-b border-gray-200 pb-8">
            <h2 className="text-2xl md:text-3xl font-bold flex-1">
              Agentic AI
            </h2>
            <div className="w-64 h-40 relative flex-shrink-0 rounded overflow-hidden shadow-md">
              <Image
                src="/agentic-ai.jpg"
                alt="Developers working on AI systems"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex items-center gap-6 border-b border-gray-200 pb-8">
            <h2 className="text-2xl md:text-3xl font-bold flex-1">
              Data analytics<br />and visualization
            </h2>
            <div className="w-64 h-40 relative flex-shrink-0 rounded overflow-hidden shadow-md">
              <Image
                src="/data-analytics.jpg"
                alt="Team analyzing data charts"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Service 4 */}
          <div className="flex items-center gap-6 border-b border-gray-200 pb-8">
            <h2 className="text-2xl md:text-3xl font-bold flex-1">
              Web design<br />and development
            </h2>
            <div className="w-64 h-40 relative flex-shrink-0 rounded overflow-hidden shadow-md">
              <Image
                src="/web-dev.jpg"
                alt="UI designer working on color palette"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Service 5 */}
          <div className="flex items-center gap-6 border-b border-gray-200 pb-8">
            <h2 className="text-2xl md:text-3xl font-bold flex-1">
              Mobile app<br />development
            </h2>
            <div className="w-64 h-40 relative flex-shrink-0 rounded overflow-hidden shadow-md">
              <Image
                src="/mobile-dev.jpg"
                alt="Smartphone showing fitness app"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Service 6 */}
          <div className="flex items-center gap-6 border-b border-gray-200 pb-8">
            <h2 className="text-2xl md:text-3xl font-bold flex-1">
              Ecommerce<br />development
            </h2>
            <div className="w-64 h-40 relative flex-shrink-0 rounded overflow-hidden shadow-md">
              <Image
                src="/ecommerce.jpg"
                alt="Mobile payment and credit card"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="fixed right-6 bottom-12 flex flex-col items-center gap-2">
          <div className="w-6 h-6 border-t-2 border-r-2 border-instinct-green rotate-[-45deg]" />
          <div className="w-6 h-10 border-2 border-instinct-green rounded-full flex items-start justify-center pt-1">
            <div className="w-1.5 h-3 bg-instinct-green rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}