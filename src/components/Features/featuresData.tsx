import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
     <svg
       width="40"
  height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-current `}
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="32" height="32" rx="3" opacity="0.6" />
      <path d="M14 16l-4 4 4 4" />
      <path d="M26 16l4 4-4 4" />
      <path d="M16 28l8-16" />
    </svg>
    ),
    title: "CUSTOME SOFTWARE DEVELOPMENT",
    paragraph:
      "We specialise in creating captivating and feature-rich mobile applications that drive engagement, enhance user experiences, and propel your business forward. Whether native, hybrid or web app, our tailored range of services are designed to meet your unique needs and objectives.",
  },
  {
    id: 2,
    icon: (
     <svg
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 40 40"
  fill="none"
  className="stroke-current"
>
  <circle cx="20" cy="8" r="2" strokeWidth="2"/>
  <circle cx="11" cy="14" r="2" strokeWidth="2"/>
  <circle cx="29" cy="14" r="2" strokeWidth="2"/>
  <circle cx="9" cy="25" r="2" strokeWidth="2"/>
  <circle cx="31" cy="25" r="2" strokeWidth="2"/>
  <circle cx="20" cy="32" r="2" strokeWidth="2"/>

  <circle cx="20" cy="20" r="4" strokeWidth="2"/>

  <path d="M20 10V16M13 15L17 18M27 15L23 18M12 24L17 21M28 24L23 21M20 24V30"
        strokeWidth="2"
        strokeLinecap="round"/>
</svg>
    ),
    title: "AI & MACHINE LEARNING",
    paragraph:
      "We develop custom AI-powered applications, agentic workflows, private AI model fine-tuning, embedding database integration, and conversational AI pipelines that automate processes, enhance customer experiences, and drive operational efficiency. Our software engineering team delivers scalable, secure, and high-performance solutions tailored to your business objectives.",
  },
  {
    id: 3,
    icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-24 h-24 stroke-current" fill="none">
  <rect x="20" y="6" width="24" height="52" rx="4" strokeWidth="2.5"/>

  <rect x="24" y="14" width="6" height="6" strokeWidth="2"/>
  <rect x="34" y="14" width="6" height="6" strokeWidth="2"/>
  <rect x="24" y="24" width="6" height="6" strokeWidth="2"/>
  <rect x="34" y="24" width="6" height="6" strokeWidth="2"/>
  <rect x="24" y="34" width="16" height="10" strokeWidth="2"/>
</svg>
    ),
    title: "MOBILE APPLICATION DEVELOPMENT",
    paragraph:
      "We specialise in creating captivating and feature-rich mobile applications that drive engagement, enhance user experiences, and propel your business forward. Whether native, hybrid or web app, our tailored range of services are designed to meet your unique needs and objectives.",
  },
  {
    id: 4,
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"   className="w-24 h-24 stroke-current"
>
  <rect x="8" y="8" width="24" height="24" rx="3" strokeWidth="2"/>
  
  <path d="M18 8V14C18 15 19 16 20 16C21 16 22 15 22 14V8" strokeWidth="2"/>
  <path d="M22 32V26C22 25 21 24 20 24C19 24 18 25 18 26V32" strokeWidth="2"/>
  
  <path d="M8 18H14C15 18 16 19 16 20C16 21 15 22 14 22H8" strokeWidth="2"/>
  <path d="M32 22H26C25 22 24 21 24 20C24 19 25 18 26 18H32" strokeWidth="2"/>
</svg>
    ),
    title: "PRODUCT DEVELOPMENT",
    paragraph:
      "Our expertise lies in developing customised solutions that empower your business to thrive. We combine cutting-edge technology and a user-centric approach to explore possibilities, analyse challenges, and align strategies, ensuring that your project is set up for success right from the start.",
  },
  {
    id: 5,
    icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"   className="w-24 h-24 stroke-current"
>
  <rect x="6" y="10" width="10" height="10" rx="2" strokeWidth="2"/>
  <rect x="24" y="10" width="10" height="10" rx="2" strokeWidth="2"/>
  <rect x="15" y="24" width="10" height="10" rx="2" strokeWidth="2"/>

  <path d="M16 15H24M11 20L20 24M29 20L20 24" strokeWidth="2" strokeLinecap="round"/>
</svg>
    ),
    title: "BLOCKCHAIN DEVELOPMENT",
    paragraph:
      "We are now the #1 Blockchain agency in the UK. As leaders in blockchain technology, we leverage the power of decentralised systems. Whether you're exploring tokenisation, building a blockchain-based platform, or implementing smart contracts, we have the expertise to make your vision a reality.",
  },
  {
    id: 6,
    icon: (
    
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"   className="w-24 h-24 stroke-current"
>
  <rect x="8" y="10" width="24" height="20" rx="3" strokeWidth="2"/>

  {/* Users */}
  <circle cx="16" cy="18" r="2" strokeWidth="2"/>
  <circle cx="24" cy="18" r="2" strokeWidth="2"/>

  <path d="M12 26C13 23 15 22 16 22C17 22 19 23 20 26" strokeWidth="2" strokeLinecap="round"/>
  <path d="M20 26C21 23 23 22 24 22C25 22 27 23 28 26" strokeWidth="2" strokeLinecap="round"/>
</svg>
    ),
    title: "SAAS DEVELOPMENT",
    paragraph:
      "Build intelligent, cloud-native SaaS applications designed for performance, security, and scalability. We develop feature-rich platforms with seamless integrations, modern architecture, and exceptional user experiences that empower your business to grow faster.",
  },
];
export default featuresData;
