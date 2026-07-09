import React from 'react';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
const services = [
  {
    id: 1,
    title: "Digital product engineering",
    description: "We deliver end-to-end product design, development, testing, and modernization to build scalable, user-centric digital solutions aligned with your business goals.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200&h=600",
    link: "/services/digital-product-engineering"
  },
  {
    id: 2,
    title: "Business process automation",
    description: "Automate repetitive workflows, eliminate manual errors, and accelerate operations with custom intelligent automation and RPA solutions.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200&h=600",
    link: "/services/business-process-automation"
  },
  {
    id: 3,
    title: "AI-powered application engineering",
    description: "Integrate advanced machine learning, computer vision, and predictive analytics into your applications to unlock smarter decision-making.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=600",
    link: "/services/ai-application-engineering"
  },
  {
    id: 4,
    title: "Agentic AI",
    description: "Build autonomous AI agents that can independently plan, reason, execute tasks, and adapt to dynamic environments without constant human input.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200&h=600",
    link: "/services/agentic-ai"
  }
  ,
  {
    id: 5,
    title: "Data analytics and Visualization",
    description: "Quick yet level-headed decisions and sustainable business growth don’t happen by chance. They come from processing complex, messy, and vast datasets into analytics-ready signals that fuel your business processes and decision-making. As a data analytics services provider, we deliver big data solutions ranging from customized self-service analytics tools to fully custom AI-enabled applications with agents capable of acting on users’ behalf",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200&h=600",
    link: "/services/agentic-ai"
  },
  {
    id: 6,
    title: "Web Design and Development",
    description:"With 20 years of experience in web application development services, *instinctools delivers secure, scalable, and high-performing web solutions, tailored to your business goals and the needs of your customers. Industry-specific enterprise web apps or customer-centered solutions — we are up for any challenge.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200&h=600",
    link: "/services/agentic-ai"
  },
  {
    id: 7,
    title: "Mobile App Development",
    description: "In a market crowded with mobile developers, many create apps but only few meet challenges. We do. Baseline features and bold innovations. End-to-end development and target support for critical stages. Enterprise-grade and consumer-facing solutions. Backed by hard-earned technical expertise you won’t just find anywhere, *instinctools’ custom mobile app development services are designed to meet the real demands of your users, your business, and your product.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200&h=600",
    link: "/services/agentic-ai"
  },
  {
    id: 8,
    title: "Ecommerce development",
    description: "One Stop Solution for all your Ecommerce needs, from design to development and maintenance.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200&h=600",
    link: "/services/agentic-ai"
  }
  
];

export default function EngineeringServicesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-12 lg:px-20">
      {/* Page Header - Exact match to original */}
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center">
          Engineering services<br />and featured competencies
        </h1>
      </div>

      {/* 2x2 Grid - Exact layout alignment */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        {services.map((service, index) => (
    //       <section className="relative w-full bg-white py-12 md:py-16 overflow-hidden">
    //   {/* Subtle background network pattern */}
    //   <div className="absolute inset-0 opacity-5 pointer-events-none">
    //     <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
    //       <path d="M0 200 L300 150 L500 250 L700 100 L900 220 L1200 180" stroke="#0f172a" strokeWidth="1" strokeDasharray="4 4" />
    //       <circle cx="300" cy="150" r="4" fill="#0f172a" />
    //       <circle cx="500" cy="250" r="4" fill="#0f172a" />
    //       <circle cx="700" cy="100" r="4" fill="#0f172a" />
    //       <circle cx="900" cy="220" r="4" fill="#0f172a" />
    //     </svg>
    //   </div>

    //   {/* Top divider line */}
    //   <div className="absolute top-0 left-0 w-full h-px bg-gray-200" />

    //   <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
    //     {/* Left: Title */}
    //     <div className="w-full md:w-1/2">
    //       <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 leading-tight">
    //         Digital product<br />engineering
    //       </h2>
    //     </div>

    //     {/* Right: Slanted / Diagonal Image */}
    //     <div className="w-full md:w-1/2 flex justify-end">
    //       <div className="relative w-full max-w-xl md:max-w-2xl">
    //         {/* Slanted container to match your cut */}
    //         <div className="clip-diagonal overflow-hidden">
    //           <img
    //             src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200&h=600"
    //             alt="Digital product engineering team"
    //             className="w-full h-auto object-cover"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Add hover content exactly as before */}
    //   <div className="absolute inset-0 bg-white/95 opacity-0 translate-y-4 transition-all duration-400 hover:opacity-100 hover:translate-y-0 flex flex-col justify-center px-6 md:px-12">
    //     <div className="max-w-7xl mx-auto w-full">
    //       <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 mb-6">
    //         Digital product engineering
    //       </h2>
    //       <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
    //         We deliver end-to-end design, development, testing, and modernization of scalable, user-centric digital products aligned perfectly with your long-term business goals.
    //       </p>
    //       <Link
    //         href="/services/digital-product-engineering"
    //         className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-800 transition-colors"
    //       >
    //         Learn more
    //         <svg className="ml-2 h-5 w-5 transition-transform hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    //         </svg>
    //       </Link>
    //     </div>
    //   </div>
    // </section>
     <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          link={service.link}
          reverse={index % 2 !== 0} // alternate image left/right
        />
        ))}
      </div>
    </main>
  );
}