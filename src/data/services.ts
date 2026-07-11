// ==============================
// SERVICES DATA – COMPLETE FILE
// ==============================
export interface Service {
  id: string;
  slug: string;
  icon: string;
  image: string;
  title: string;
  shortDesc: string;
  fullIntro: string;
  features: string[];
  techStack: string[];
  process: { num: number; title: string; desc: string }[];
  hiringProcess: {
    title: string;
    desc: string;
    icon: string;
  }[];
  faqs: { q: string; a: string }[];
  ctaText: string;
  ctaSubtext: string;
}

export const servicesData: Service[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    icon: '🌐',
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    title: 'Web Development',
    shortDesc: 'Custom websites, web apps, and e-commerce platforms built with modern technologies.',
    fullIntro: 'We build fast, secure, and scalable web solutions that turn your ideas into fully functional digital products — whether you need a simple landing page or a complex enterprise web application.',
    features: [
      'Custom Responsive Design',
      'SEO Optimized Structure',
      'High Performance & Speed',
      'Cross-Browser Compatibility',
      'CMS & E-Commerce Integration',
      'Ongoing Support & Maintenance'
    ],
    techStack: ['HTML5', 'CSS3 / Tailwind', 'JavaScript', 'React.js', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL'],
    process: [
      { num: 1, title: 'Discovery', desc: 'Understand goals & requirements' },
      { num: 2, title: 'Design', desc: 'Create wireframes & visuals' },
      { num: 3, title: 'Development', desc: 'Build & test your solution' },
      { num: 4, title: 'Launch', desc: 'Deploy & go live' },
      { num: 5, title: 'Support', desc: 'Maintain & improve' }
    ],
    hiringProcess: [
      {
        title: 'Share Your Requirements',
        desc: 'Tell us about your project, target users, and the web skills you need (Next.js, React, Node.js, e-commerce, etc.)',
        icon: 'list-checks'
      },
      {
        title: 'Get a Tailored Proposal',
        desc: 'Custom plan with pricing, team structure, engagement model, and timeline within 48 hours.',
        icon: 'file-check'
      },
      {
        title: 'Screen and Interview',
        desc: 'Meet developers directly. Review code samples, past projects, and run technical assessments.',
        icon: 'user-check'
      },
      {
        title: 'Onboard and Start',
        desc: 'Developer joins your team within 48 hours of approval. Integrated with your tools (Slack, Jira, GitHub).',
        icon: 'rocket'
      }
    ],
    faqs: [
      { q: 'How long does it take to build a website?', a: 'Simple sites take 2–4 weeks; complex platforms take 2–6 months based on scope.' },
      { q: 'Will my site work on mobile?', a: 'Yes — all our builds are fully responsive and mobile-first designed.' },
      { q: 'Can I update content myself?', a: 'Absolutely — we integrate easy-to-use CMS tools for self-management.' }
    ],
    ctaText: 'Start Your Web Project Today',
    ctaSubtext: 'Let’s build a website that grows your business.'
  },
  {
    id: 'mobile-apps',
    slug: 'mobile-apps',
    icon: '📱',
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",

    title: 'Mobile App Development',
    shortDesc: 'Native & cross-platform apps for iOS and Android with seamless user experience.',
    fullIntro: 'We build high-performance mobile apps that work seamlessly on iOS and Android, delivering smooth experiences and meeting your business needs.',
    features: [
      'Native & Cross-Platform Builds',
      'App Store / Play Store Approval',
      'Push Notifications & Analytics',
      'Offline Functionality',
      'Secure Authentication',
      'Regular Updates & Compliance'
    ],
    techStack: ['Swift', 'Kotlin', 'Flutter', 'React Native', 'Firebase', 'GraphQL'],
    process: [
      { num: 1, title: 'Strategy', desc: 'Define app goals & features' },
      { num: 2, title: 'UX/UI', desc: 'Design app screens & flow' },
      { num: 3, title: 'Coding', desc: 'Build for iOS & Android' },
      { num: 4, title: 'Testing', desc: 'Fix bugs & optimize' },
      { num: 5, title: 'Publish', desc: 'Launch to app stores' }
    ],
    hiringProcess: [
      {
        title: 'Share Your Requirements',
        desc: 'Tell us about your app idea, target platforms, and skills needed (Swift, SwiftUI, HealthKit, etc.)',
        icon: 'list-checks'
      },
      {
        title: 'Get a Tailored Proposal',
        desc: 'Custom plan with pricing, team structure, engagement model, and timeline within 48 hours.',
        icon: 'file-check'
      },
      {
        title: 'Screen and Interview',
        desc: 'Meet developers directly. Review code samples, past projects, and run technical assessments.',
        icon: 'user-check'
      },
      {
        title: 'Onboard and Start',
        desc: 'Developer joins your team within 48 hours of approval. Integrated with your tools (Slack, Jira, GitHub).',
        icon: 'rocket'
      }
    ],
    faqs: [
      { q: 'Do you build for both iOS and Android?', a: 'Yes — we offer native builds or cross-platform for both stores.' },
      { q: 'How do you handle app store rejection?', a: 'We follow all guidelines and assist fully with resubmissions.' },
      { q: 'Can you maintain an existing app?', a: 'Absolutely — we take over updates, bug fixes, and feature additions.' }
    ],
    ctaText: 'Build Your App Now',
    ctaSubtext: 'Turn your app idea into reality.'
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    icon: '🎨',
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    title: 'UI/UX Design',
    shortDesc: 'User-centered design that looks great and delivers intuitive interactions.',
    fullIntro: 'We create beautiful, usable designs that align with your brand and keep users engaged from the first click.',
    features: [
      'User Research & Personas',
      'Wireframes & Prototypes',
      'High-Fidelity Visuals',
      'Design System Creation',
      'Usability Testing',
      'Responsive Layouts'
    ],
    techStack: ['Figma', 'Adobe XD', 'Sketch'],
    process: [
      { num: 1, title: 'Research', desc: 'Study users & competitors' },
      { num: 2, title: 'Wireframe', desc: 'Map structure & flow' },
      { num: 3, title: 'Prototype', desc: 'Test interactions' },
      { num: 4, title: 'Design', desc: 'Final branding & visuals' },
      { num: 5, title: 'Handover', desc: 'Deliver assets to devs' }
    ],
    hiringProcess: [
      {
        title: 'Share Your Requirements',
        desc: 'Tell us about your brand, product goals, and design expertise you need (Figma, prototyping, etc.)',
        icon: 'list-checks'
      },
      {
        title: 'Get a Tailored Proposal',
        desc: 'Custom plan with pricing, team structure, engagement model, and timeline within 48 hours.',
        icon: 'file-check'
      },
      {
        title: 'Screen and Interview',
        desc: 'Meet designers directly. Review portfolios, case studies, and run design challenges.',
        icon: 'user-check'
      },
      {
        title: 'Onboard and Start',
        desc: 'Designer joins your team within 48 hours of approval. Integrated with your tools (Figma, Miro, Jira).',
        icon: 'rocket'
      }
    ],
    faqs: [
      { q: 'How many design revisions do I get?', a: 'We include unlimited revisions until you are fully satisfied.' },
      { q: 'Do you provide source files?', a: 'Yes — all editable Figma/XD files are yours upon completion.' },
      { q: 'Can you redesign an existing product?', a: 'Yes — we improve UX while keeping your brand identity.' }
    ],
    ctaText: 'Upgrade Your Design',
    ctaSubtext: 'Create experiences users love.'
  },
  {
    id: 'custom-software',
    slug: 'custom-software',
    icon: '⚙️',
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200&h=600",

    title: 'Custom Software',
    shortDesc: 'Bespoke enterprise software to streamline workflows and boost efficiency.',
    fullIntro: 'We build tailored software solutions that fit your unique business processes perfectly, eliminating gaps in off-the-shelf tools.',
    features: [
      'Bespoke Workflow Automation',
      'Legacy System Integration',
      'Role-Based Access Control',
      'Real-Time Reporting',
      'Scalable Architecture',
      'Compliance & Security'
    ],
    techStack: ['Python / Django', 'PHP / Laravel', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker'],
    process: [
      { num: 1, title: 'Analysis', desc: 'Map workflows & gaps' },
      { num: 2, title: 'Architecture', desc: 'Plan system design' },
      { num: 3, title: 'Build', desc: 'Code core features' },
      { num: 4, title: 'Validate', desc: 'Test with your team' },
      { num: 5, title: 'Deploy', desc: 'Rollout & train users' }
    ],
    hiringProcess: [
      {
        title: 'Share Your Requirements',
        desc: 'Tell us about your business workflows, pain points, and tech stack you need.',
        icon: 'list-checks'
      },
      {
        title: 'Get a Tailored Proposal',
        desc: 'Custom plan with pricing, team structure, engagement model, and timeline within 48 hours.',
        icon: 'file-check'
      },
      {
        title: 'Screen and Interview',
        desc: 'Meet engineers directly. Review system architecture work and technical assessments.',
        icon: 'user-check'
      },
      {
        title: 'Onboard and Start',
        desc: 'Developer joins your team within 48 hours of approval. Integrated with your tools (Azure, Jira, Confluence).',
        icon: 'rocket'
      }
    ],
    faqs: [
      { q: 'Can it connect with my existing tools?', a: 'Yes — we build APIs to integrate with almost any software.' },
      { q: 'Who owns the code?', a: 'You get full ownership of all source code.' },
      { q: 'What about future updates?', a: 'We offer flexible maintenance and upgrade contracts.' }
    ],
    ctaText: 'Get Tailored Software',
    ctaSubtext: 'Work smarter with tools built for you.'
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    icon: '☁️',
    title: 'Cloud & DevOps',
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop",

    shortDesc: 'Secure cloud migration, hosting, and automated CI/CD pipelines.',
    fullIntro: 'We help you move to the cloud safely and set up automated workflows to ship code faster and with fewer errors.',
    features: [
      'Multi-Cloud Migration',
      'Auto-Scaling Infrastructure',
      'CI/CD Pipeline Setup',
      'Backup & Disaster Recovery',
      'Cost Optimization',
      '24/7 Monitoring'
    ],
    techStack: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'GraphQL'],
    process: [
      { num: 1, title: 'Audit', desc: 'Assess current setup' },
      { num: 2, title: 'Plan', desc: 'Choose cloud & tools' },
      { num: 3, title: 'Migrate', desc: 'Move data & apps safely' },
      { num: 4, title: 'Automate', desc: 'Set up pipelines' },
      { num: 5, title: 'Optimize', desc: 'Improve speed & cost' }
    ],
    hiringProcess: [
      {
        title: 'Share Your Requirements',
        desc: 'Tell us about your infrastructure, current setup, and skills needed (AWS, Kubernetes, etc.)',
        icon: 'list-checks'
      },
      {
        title: 'Get a Tailored Proposal',
        desc: 'Custom plan with pricing, team structure, engagement model, and timeline within 48 hours.',
        icon: 'file-check'
      },
      {
        title: 'Screen and Interview',
        desc: 'Meet DevOps engineers directly. Review infrastructure projects and technical assessments.',
        icon: 'user-check'
      },
      {
        title: 'Onboard and Start',
        desc: 'Specialist joins your team within 48 hours of approval. Integrated with your tools (GitHub Actions, Jira).',
        icon: 'rocket'
      }
    ],
    faqs: [
      { q: 'Which cloud provider do you work with?', a: 'AWS, Azure, Google Cloud, and hybrid setups.' },
      { q: 'Will migration cause downtime?', a: 'We use zero-downtime strategies for all critical systems.' },
      { q: 'Can you reduce my cloud costs?', a: 'Most clients see 20–40% savings after our optimization.' }
    ],
    ctaText: 'Modernize Your Infrastructure',
    ctaSubtext: 'Scale safely and reliably.'
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    icon: '📈',
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    title: 'Digital Marketing',
    shortDesc: 'SEO, social media, and paid campaigns to grow your online reach.',
    fullIntro: 'Data-driven marketing strategies that bring targeted visitors, build your brand, and turn leads into customers.',
    features: [
      'Technical & Content SEO',
      'PPC & Paid Social Ads',
      'Social Media Management',
      'Email Marketing',
      'Conversion Optimization',
      'Monthly Performance Reports'
    ],
    techStack: ['Google Analytics', 'Semrush', 'HubSpot', 'Mailchimp'],
    process: [
      { num: 1, title: 'Audit', desc: 'Review current performance' },
      { num: 2, title: 'Strategy', desc: 'Set goals & channels' },
      { num: 3, title: 'Execute', desc: 'Launch campaigns' },
      { num: 4, title: 'Track', desc: 'Measure results' },
      { num: 5, title: 'Optimize', desc: 'Improve ROI over time' }
    ],
    hiringProcess: [
      {
        title: 'Share Your Requirements',
        desc: 'Tell us about your goals, audience, and marketing skills you need (SEO, PPC, etc.)',
        icon: 'list-checks'
      },
      {
        title: 'Get a Tailored Proposal',
        desc: 'Custom plan with pricing, team structure, engagement model, and timeline within 48 hours.',
        icon: 'file-check'
      },
      {
        title: 'Screen and Interview',
        desc: 'Meet specialists directly. Review campaign results, case studies, and strategy discussions.',
        icon: 'user-check'
      },
      {
        title: 'Onboard and Start',
        desc: 'Marketer joins your team within 48 hours of approval. Integrated with your tools (GA4, Meta Business Suite, HubSpot).',
        icon: 'rocket'
      }
    ],
    faqs: [
      { q: 'How fast will I see results?', a: 'Paid ads work immediately; SEO takes 3–6 months for full impact.' },
      { q: 'Do you guarantee leads?', a: 'We guarantee transparent execution and improve conversion rates over time.' },
      { q: 'Can I stop at any time?', a: 'All plans are month-to-month with no lock-in contracts.' }
    ],
    ctaText: 'Grow Your Audience',
    ctaSubtext: 'Get noticed by the people who matter.'
  }
];