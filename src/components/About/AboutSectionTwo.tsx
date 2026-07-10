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
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop",
    link: "/services/agentic-ai"
  }
  ,
  {
    id: 5,
    title: "Data analytics and Visualization",
    description: "As a data analytics services provider, we deliver big data solutions ranging from customized self-service analytics tools to fully custom AI-enabled applications with agents capable of acting on users’ behalf",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    link: "/services/agentic-ai"
  },
  {
    id: 6,
    title: "Web Design and Development",
    description:"With 20 years of experience in web application development services, *instinctools delivers secure, scalable, and high-performing web solutions, tailored to your business goals and the needs of your customers. Industry-specific enterprise web apps or customer-centered solutions — we are up for any challenge.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    link: "/services/agentic-ai"
  },
  {
    id: 7,
    title: "Mobile App Development",
    description: "In a market crowded with mobile developers, many create apps but only few meet challenges. We do. Baseline features and bold innovations. End-to-end development and target support for critical stages. Enterprise-grade and consumer-facing solutions.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    link: "/services/agentic-ai"
  },
  {
    id: 8,
    title: "Ecommerce development",
    description: "One Stop Solution for all your Ecommerce needs, from design to development and maintenance.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    link: "/services/agentic-ai"
  }
  
];

export default function EngineeringServicesPage() {
  return (
    <main className="min-h-screen  px-6 py-16 md:px-12 lg:px-20">
      {/* Page Header - Exact match to original */}
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  leading-tight text-center">
          Engineering services<br />and featured competencies
        </h1>
      </div>

      {/* 2x2 Grid - Exact layout alignment */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        {services.map((service, index) => (
  
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