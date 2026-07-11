'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Service } from '@/data/services';
import {
  ArrowRight, CheckCircle, ChevronDown, ChevronUp, Clock, Shield, Zap, Layers, Code,
  ListChecks, FileCheck, UserCheck, Rocket
} from 'lucide-react';
import {
  SiHtml5, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiPhp,
  SiMongodb, SiPostgresql, SiSwift, SiKotlin, SiFlutter, SiFirebase, SiGraphql,
  SiGooglecloud, SiDocker, SiKubernetes, SiFigma,
  SiGoogleanalytics, SiSemrush, SiHubspot, SiMailchimp
} from 'react-icons/si';
import { IoLogoCss3 } from "react-icons/io5";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa6";
import { TbBrandAdobeXd } from "react-icons/tb";

// Tech Icon Mapping
const techIconMap: Record<string, React.ReactNode> = {
  'HTML5': <SiHtml5 className="w-9 h-9" />,
  'CSS3 / Tailwind': <IoLogoCss3 className="w-9 h-9" />,
  'JavaScript': <SiJavascript className="w-9 h-9" />,
  'React.js': <SiReact className="w-9 h-9" />,
  'Next.js': <SiNextdotjs className="w-9 h-9" />,
  'Node.js': <SiNodedotjs className="w-9 h-9" />,
  'Python / Django': <SiPython className="w-9 h-9" />,
  'PHP / Laravel': <SiPhp className="w-9 h-9" />,
  'MongoDB': <SiMongodb className="w-9 h-9" />,
  'PostgreSQL': <SiPostgresql className="w-9 h-9" />,
  'Swift': <SiSwift className="w-9 h-9" />,
  'Kotlin': <SiKotlin className="w-9 h-9" />,
  'Flutter': <SiFlutter className="w-9 h-9" />,
  'React Native': <SiReact className="w-9 h-9" />,
  'Firebase': <SiFirebase className="w-9 h-9" />,
  'GraphQL': <SiGraphql className="w-9 h-9" />,
  'AWS': <FaAws className="w-9 h-9" />,
  'Azure': <VscAzure className="w-9 h-9" />,
  'Google Cloud': <SiGooglecloud className="w-9 h-9" />,
  'Docker': <SiDocker className="w-9 h-9" />,
  'Kubernetes': <SiKubernetes className="w-9 h-9" />,
  'Figma': <SiFigma className="w-9 h-9" />,
  'Adobe XD': <TbBrandAdobeXd className="w-9 h-9" />,
  'Google Analytics': <SiGoogleanalytics className="w-9 h-9" />,
  'Semrush': <SiSemrush className="w-9 h-9" />,
  'HubSpot': <SiHubspot className="w-9 h-9" />,
  'Mailchimp': <SiMailchimp className="w-9 h-9" />,
};

// Hiring Step Icon Mapping
const stepIconMap: Record<string, React.ReactNode> = {
  'list-checks': <ListChecks className="w-7 h-7" />,
  'file-check': <FileCheck className="w-7 h-7" />,
  'user-check': <UserCheck className="w-7 h-7" />,
  'rocket': <Rocket className="w-7 h-7" />,
};

export default function ServiceDetail({ service }: { service: Service }) {
  const [visibleTech, setVisibleTech] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setVisibleTech([]);
    service.techStack.forEach((tech, index) => {
      setTimeout(() => {
        setVisibleTech(prev => [...prev, tech]);
      }, index * 150);
    });
  }, [service.techStack]);

  return (
    <div className="space-y-24 overflow-hidden">
      {/* Hero Header */}
      <section className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative rounded-[2rem] overflow-hidden p-10 md:p-16">
          {/* Background Image with Soft Fade */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Team working together"
              className="w-full h-full object-cover object-center opacity-10"
            />
            {/* Soft Gradient Fade Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-50/95 via-slate-50/98 to-slate-50"></div> */}
          </div>
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="text-7xl md:text-8xl p-6 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 shadow-xl">
              {service.icon}
            </div>
            <div className="text-center md:text-left max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">{service.title} Services</h2>
              <p className="text-xl md:text-2xl  leading-relaxed">{service.fullIntro}</p>
            </div>
          </div>
        </div>
      </section>
      {/* How to Hire Section – With Background Image & Fade */}

      {/* What We Offer */}
      <section className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center gap-4 mb-10">
          <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white shadow-lg">
            <CheckCircle className="w-7 h-7" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold ">What We Offer</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, i) => (
            <div
              key={i}
              className="relative group p-7  rounded-2xl border border-gray-100 hover:border-transparent transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex items-start gap-4">
                <span className="text-blue-600 text-xl mt-1 group-hover:scale-125 transition-transform duration-300">✅</span>
                <span className="font-semibold text-lg group-hover:text-blue-800 transition-colors">{feature}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies – 3D Rotating & Floating */}
      <section className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center gap-4 mb-12">
          <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white shadow-lg">
            <Zap className="w-7 h-7" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold ">Technologies We Master</h3>
        </div>

        <div className="relative py-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-200/30 via-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>

          <div className="flex flex-wrap justify-center gap-8 relative z-10">
            {service.techStack.map((tech, i) => (
              <div
                key={i}
                className={`group perspective-1000 transition-all duration-700 ${visibleTech.includes(tech) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                  }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-32 h-36 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center gap-3 p-4 transition-all duration-500 hover:shadow-2xl hover:border-blue-300 animate-float">
                  <div className="transition-transform duration-700 group-hover:rotateY-180">
                    <div className=" group-hover:text-blue-600 transition-colors duration-300">
                      {techIconMap[tech] || <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">{tech.split(' ')[0]}</div>}
                    </div>
                  </div>
                  <span className="text-sm font-semibold  text-center group-hover:text-blue-700 transition-colors">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          .perspective-1000 { perspective: 1000px; }
          .hover\\:rotateY-180:hover { transform: rotateY(180deg); }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-5px) rotate(1deg); }
            50% { transform: translateY(-10px) rotate(0deg); }
            75% { transform: translateY(-5px) rotate(-1deg); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float:nth-child(odd) { animation-delay: -3s; }
        `}</style>
      </section>

      {/* Our Workflow */}
      <section className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center gap-4 mb-12">
          <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl text-white shadow-lg">
            <Layers className="w-7 h-7" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold ">Our Workflow</h3>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {service.process.map((step, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-3 transition-all duration-500 text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-2xl mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <h4 className="font-bold text-xl  mb-3 group-hover:text-blue-700 transition-colors">{step.title}</h4>
                <p className=" text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center gap-4 mb-10">
          <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl text-white shadow-lg">
            <Shield className="w-7 h-7" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold ">Common Questions</h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {service.faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-blue-500 transition-colors duration-300"
              >
                <h4 className="font-semibold text-lg  pr-6">{faq.q}</h4>
                <div className={`p-2 rounded-full bg-blue-50 text-blue-600 transition-all duration-300 ${openFaq === i ? 'rotate-180 bg-amber-100' : ''}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-60 px-6 pb-6' : 'max-h-0'
                }`}>
                <p className="text-slate-600 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative rounded-[2rem] overflow-hidden p-10 md:p-16">
          {/* Background Image with Soft Fade */}
          <div className="absolute inset-0 z-0">
            <img
              src=" https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Team working together"
              className="w-full h-full object-cover object-center opacity-10"
            />
            {/* Soft Gradient Fade Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-50/95 via-slate-50/98 to-slate-50"></div> */}
          </div>

          {/* Content (Above Background) */}
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold  mb-4">
                How to <span className="text-red-500">Hire</span> {service.title} Experts
              </h2>
              <p className="text-xl  max-w-2xl mx-auto">
                We make it easy to bring the right talent on board fast, efficient and aligned with your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Arrow connectors between cards (desktop only) */}
              <div className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 z-0"></div>

              {service.hiringProcess.map((step, i) => (
                <div key={i} className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                  {/* Step Icon */}
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {stepIconMap[step.icon]}
                  </div>

                  {/* Arrow between steps */}
                  {i < service.hiringProcess.length - 1 && (
                    <div className="hidden lg:flex absolute top-16 -right-3 text-gray-400 z-20">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden rounded-[2rem] my-12">
        {/* Background Image + Soft Fade Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1467232004584-aec5a4f460f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Start your web development project"
            className="w-full h-full object-cover object-center opacity-10 scale-105 transition-transform duration-10000 hover:scale-110"
          />
          {/* Multi-layer Gradient for Depth & Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-indigo-900/80 to-slate-900/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_60%)]"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 px-6 py-20 md:py-28 md:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-200 mb-6 border border-white/20">
              🚀 No commitment – start with a free consultation
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Start Your Web Project
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mt-2">
                Today
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Turn your ideas into a fast, beautiful, high-performing website. We handle design, development, and launch – so you can focus on growing your business.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-blue-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 ">
                  Get Your Free Quote
                </span>

                <ArrowRight className="w-6 h-6" />
              </Link>
              {/* <button className="px-10 py-4 bg-white text-indigo-900 font-bold rounded-xl hover:bg-blue-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg">
          Get Free Quote
        </button>
        <button className="px-10 py-4 bg-transparent border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/70 transition-all duration-300">
          View Our Work
        </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}