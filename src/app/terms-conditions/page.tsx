import { Metadata } from "next";

import ContactCard from "@/components/Legal/ContactCard";
import LegalList from "@/components/Legal/LegalList";
import LegalSection from "@/components/Legal/LegalSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | BrosBrain Ltd",
  description:
    "Terms and Conditions governing the use of BrosBrain Ltd website and services.",
};
const acceptanceterms = [
  "Are at least 18 years old or have legal authority to enter into this agreement.",
  "Will comply with all applicable laws.",
  "Accept these Terms and our Privacy Policy."
]
const services = [
  "Custom Software Development",
  "AI-powered applications",
  "Cloud infrastructure and DevOps",
  "Mobile application development",
  "Web application development",
  "API integrations",
  "Technical consulting",
  "SaaS platforms",
];

const clientResponsibilities = [
  "Provide accurate project requirements.",
  "Keep your account credentials secure.",
  "Use the Services lawfully.",
  "Respect intellectual property rights.",
  "Not attempt to disrupt or compromise our systems.",
];
const intellectualProperty = [
  "All website content, branding, software, and documentation remain the property of BrosBrain Ltd.",
  "Clients retain ownership of their own data and content.",
  "Ownership of custom-developed software will be defined in the applicable service agreement.",

];

const aiservices = [
  "AI-generated content may contain inaccuracies.",
  "AI outputs should be reviewed before use.",
  "Final business decisions remain your responsibility.",
  "We do not guarantee AI-generated results will always be complete or accurate."
];


const confidentiality = [
  "with written permission,",
  "when required by law,",
  "or where necessary to deliver contracted services.",
];
const prohibitedUse = [
  "Upload malicious software.",
  "Reverse engineer our software where prohibited.",
  "Access unauthorized systems.",
  "Use the Services for illegal purposes.",
  "Disrupt the operation or security of the website.",
];
const paymentsUse = [
  "Fees are agreed before work begins.",
  "Invoices are payable according to agreed payment terms.",
  "Late payments may result in suspension of Services.",

];
const warranties = [
  "Services will be uninterrupted.",
  "Software will be completely error-free.",
  "Every defect can be resolved immediately.",

];

const limitationOfLiability = [
  "We are not liable for indirect, incidental, or consequential damages.",
  "Our total liability is limited to the fees paid for the relevant Services during the preceding 12 months.",
];
const indemnification = [
  "misuse of the Services,",
  "violation of these Terms,",
  "infringement of third-party rights."
];
const termination = [
  "these Terms are violated,",
  "illegal activity is detected,",
  "continued access presents a security risk."
];
export default function TermsPage() {
  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container">

        <h1 className="mb-4 text-4xl font-bold text-black dark:text-white">
          Terms & Conditions
        </h1>

        <p className="mb-2 text-slate-500 text-black dark:text-white">
          Effective Date: July 1, 2022
        </p>

        <p className="mb-10 leading-8 text-slate-600 text-black dark:text-white">
          Welcome to Brosbrain Solutions ltd ("Company", "we", "our", or "us"). By accessing or using our website, products, software, or services ("Services"), you agree to these Terms of Service ("Terms"). If you do not agree, please do not use our Services.
        </p>

        <LegalSection title="1. About Us">
          <p className="text-black dark:text-white">
            BrosBrain Ltd is a technology company providing software development, AI solutions, cloud services, web and mobile applications, and technology consulting.
          </p>
        </LegalSection>

        <LegalSection title="2. Acceptance of Terms">
          <p className="text-black dark:text-white">
            By using our Services, you confirm that you:
          </p>
          <LegalList items={acceptanceterms} />

        </LegalSection>

        <LegalSection title="3. Our Services">
          <p className="text-black dark:text-white">
            We may provide services including:
          </p>
          <LegalList items={services} />

          <p className="text-black dark:text-white">
            Specific project terms may be governed by separate agreements.
          </p>
        </LegalSection>

        <LegalSection title="4. User Responsibilities">
          <p className="text-black dark:text-white">
            You agree to:
          </p>
          <LegalList items={clientResponsibilities} />
          <p className="text-black dark:text-white">
            You must not:
          </p>
          <LegalList items={prohibitedUse} />
        </LegalSection>

        <LegalSection title="5. Intellectual Property">
          <p className="text-black dark:text-white">
            Unless otherwise agreed:
          </p>
          <LegalList items={intellectualProperty} />
        </LegalSection>

        <LegalSection title="6. AI Services">
          <p className="text-black dark:text-white">
            Some Services use artificial intelligence technologies.
          </p>
          <p className="text-black dark:text-white">
            You acknowledge that:
          </p>
          <LegalList items={aiservices} />
        </LegalSection>

        <LegalSection title="7. Client Data">
          <p className="text-black dark:text-white">
            You retain ownership of all data you provide.
          </p>
          <p className="text-black dark:text-white">
            You grant us permission to process your data only as necessary to deliver the requested Services.
          </p>
          <p className="text-black dark:text-white">
            We handle personal information in accordance with our <Link className="text-blue-600 underline" href="/privacy">Privacy Policy</Link>.
          </p>
        </LegalSection>

        <LegalSection title="8. Confidentiality">
          <p className="text-black dark:text-white">
            We treat confidential client information with appropriate care.
          </p>
          <p className="text-black dark:text-white">
            Both parties agree not to disclose confidential information except:
          </p>
          <LegalList items={confidentiality} />

        </LegalSection>

        <LegalSection title="9. Service Availability">
          <p className="text-black dark:text-white">
            We aim to provide reliable Services but do not guarantee uninterrupted availability.
          </p>
          <p className="text-black dark:text-white">
            Maintenance, updates, network issues, or third-party service outages may occasionally affect availability.          </p>
        </LegalSection>

        <LegalSection title="10. Third-Party Services">
          <p className="text-black dark:text-white">
            Our Services may integrate with third-party providers including cloud platforms, payment processors, AI providers, or authentication services.
          </p>
          <p className="text-black dark:text-white">
            We are not responsible for the availability, security, or policies of third-party services.          </p>
        </LegalSection>

        <LegalSection title="11. Payments">
          <LegalList items={paymentsUse} />
        </LegalSection>

        <LegalSection title="12. Warranties">
          <p className="text-black dark:text-white">
            Services are provided on an **"as is"** and **"as available"** basis unless otherwise agreed in writing.
          </p>
          <p className="text-black dark:text-white">
            We make reasonable efforts to provide high-quality Services but do not guarantee that:
          </p>
          <LegalList items={warranties} />

        </LegalSection>

        <LegalSection title="13. Limitation of Liability">
          <p className="text-black dark:text-white">
            To the maximum extent permitted by law:
          </p>
          <LegalList items={limitationOfLiability} />
          <p className="text-black dark:text-white">
            Nothing in these Terms limits liability where such limitation is prohibited by law.
          </p>
        </LegalSection>

        <LegalSection title="14. Indemnification">
          <p className="text-black dark:text-white">
            You agree to indemnify and hold harmless BrosBrain Solutions Ltd from claims arising from:          </p>
            <LegalList items={indemnification} />
        </LegalSection>

        <LegalSection title="15. Termination">
          <p className="text-black dark:text-white">
            Either party may terminate Services according to the applicable agreement.
          </p>
          <p className="text-black dark:text-white">
            We may suspend or terminate access immediately if:
          </p>
          <LegalList items={termination} />
        </LegalSection>

        <LegalSection title="16. Changes to These Terms">
          <p className="text-black dark:text-white">
            We may update these Terms periodically.
          </p>
          <p className="text-black dark:text-white">
            The latest version will always be published on this page.
          </p>
          <p className="text-black dark:text-white">
            Continued use of the Services after updates constitutes acceptance of the revised Terms.
          </p>
        </LegalSection>

        <LegalSection title="17. Governing Law">
          <p className="text-black dark:text-white">
            These Terms are governed by the laws of **England and Wales**.
          </p>
           <p className="text-black dark:text-white">
            Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </LegalSection>

        <LegalSection title="18. Contact Information">
          <ContactCard />
        </LegalSection>

      </div>
    </section>
  );
}