'use client';

import TeamSection from "./TeamSection";
import ValuesSection from "./MissionVisionValues";
export default function AboutUs() {
  return (
    <section className="w-full py-20 bg-white text-gray-900 dark:bg-gray-dark dark:text-gray-100 transition-colors duration-300">
      <div className="px-6 md:px-12 lg:px-20 xl:px-28 ">



        {/* :white_check_mark: Flex Layout - No Grid */}
        <div className="flex flex-col md:flex-row  items-start w-full">

          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <p className="text-sm uppercase tracking-widest font-medium text-gray-500 dark:text-gray-400 mb-4">Who We Are
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold  ">We are a team of innovative disruptors who believe in the power of people and technology - and this is reflected in the solutions we create.
            </h2>
          </div>

          {/* Right Column with Divider Line */}
          <div className="w-full md:w-1/2 pl-8 lg:pl-12 border-l border-gray-200 dark:border-gray-800 pt-5 md:pt-5 lg:pt-10">
            <div className="space-y-5 text-base md:text-lg  text-gray-700 dark:text-gray-300">
              <p>Headquartered in Birmingham, United Kingdom , with engineering centers in India, Closeloop bridges the gap between business vision and technical execution.
              </p>
              <p>We work with growth-stage startups as well as enterprises bringing the same rigor, accountability, and Silicon Valley-caliber thinking to every engagement.
              </p>
              <p>Whether it is AI, Next-Gen Engineering, Platform Engineering, cutting-edge mobile and web applications, designing CRM & ERP solutions, leveraging the cloud, or harnessing data analytics, we empower you to thrive in the digital age.
              </p>
            </div>
          </div>

        </div>

        {/* Section Footer Label */}
        {/* <div className="mt-20 text-center text-sm uppercase tracking-widest ">
          <p className="mb-4 text-xl font-bold "> Our Experts</p>
          <h1 className="mb-4 text-2xl font-bold py-5 ">Meet the Visionaries Driving Closeloop's Success</h1>

          <p>Our team embodies diversity, expertise, and a shared commitment to excellence.</p>
          <TeamSection />
        </div> */}

        <ValuesSection />
      </div>
    </section>
  );
}