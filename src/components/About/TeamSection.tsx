import React from 'react';
import Link from 'next/link';

const teamMembers = [
  {
    id: 1,
    name: "Waqas Ahmad",
    role: "CEO",
    bio: "An innovative leader with over 20 years of diverse industry experience, our CEO has a proven track record of success. Having honed his expertise at esteemed organizations such as Google, Facebook, and Microsoft, he founded Closeloop, headquartered in California, to revolutionize the IT landscape.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600",
    linkedin: "#"
  },
  {
    id: 2,
    name: "Sehrish Noor",
    role: "VP - Delivery",
    bio: "With 13+ years of industry experience, Sehrish manages client relations and communication at Closeloop. She oversees software architecture, engineering design, and delivery, ensuring seamless execution. Sehrish excels at translating business requirements & collaborating with the extended engineering team for success.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600",
    linkedin: "#"
  },
  {
    id: 3,
    name: "Saurabh Sharma",
    role: "VP - Engineering",
    bio: "With over 15 years of hands-on experience, Saurabh oversees all software endeavors at Closeloop. He is instrumental in ensuring the delivery of high-quality projects, leveraging his extensive software engineering expertise and strategic insights. His visionary leadership drives Closeloop's software initiatives to unparalleled success.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=600",
    linkedin: "#"
  }
];

export default function TeamSection() {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col">
              {/* Profile Photo */}
              <div className="w-full aspect-square mb-8 overflow-hidden bg-white">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Name + LinkedIn Icon — LEFT ALIGNED */}
              <div className="flex items-center justify-between mb-2 text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <Link
                  href={member.linkedin}
                  className="text-gray-800 hover:text-blue-700 transition-colors flex-shrink-0"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="2" />
                    <path fill="white" d="M6.2 7.5c.9 0 1.6-.7 1.6-1.5S7.1 4.5 6.2 4.5 4.6 5.2 4.6 6s.7 1.5 1.6 1.5zm-1.2 9h2.5V9H5v7.5zm4 0h2.4v-4.2c0-1.1.4-1.9 1.5-1.9s1.6.8 1.6 1.9V16.5h2.4v-4.4c0-2.4-1.3-3.5-3.1-3.5s-2.7 1.4-2.7 1.4v-1.1H9v7.6z" />
                  </svg>
                </Link>
              </div>

              {/* Role — CENTER ALIGNED as requested */}
              <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-left">
                {member.role}
              </p>

              {/* Bio — LEFT ALIGNED as requested */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed text-left">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}