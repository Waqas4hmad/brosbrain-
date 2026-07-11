'use client';
import Link from 'next/link';
import { 
  MapPin, Phone, Mail, ArrowRight
} from 'lucide-react';
import Image from 'next/image';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-gray-300 pt-20 pb-8">
      <div className="container mx-auto px-5">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-6">
          <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo1.png"
                    alt="logo"
                    className="w-60 dark:hidden"
                    width={80}
                    height={20}
                  />
                  <Image
                    src="/images/logo/logo2.png"
                    alt="logo"
                    className="hidden w-60 dark:block"
                    width={80}
                    height={20}
                  />
                </Link>
             <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  BrosBrain Ltd is a trusted technology partner delivering innovative software solutions, web and mobile application development, AI-powered products, cloud services, and IT consulting. We help businesses of all sizes accelerate digital transformation with reliable, scalable, and high-quality technology solutions.
                </p>
            <div className="flex gap-4 pt-2">
        <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/brosbrain"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/brosbrain"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                </div>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 className="text-black dark:text-white text-lg font-semibold mb-6 pb-2 border-b ">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Web Development', path: '/services/web-development' },
                { name: 'Mobile App Development', path: '/services/mobile-apps' },
                { name: 'UI/UX Design', path: '/services/ui-ux-design' },
                { name: 'Custom Software', path: '/services/custom-software' },
                { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
                { name: 'Digital Marketing', path: '/services/digital-marketing' },
              ].map((service) => (
                <li key={service.path}>
                  <Link 
                    href={service.path}
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <p className='text-black dark:text-white hover:text-blue-400' >{service.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-black dark:text-white text-lg font-semibold mb-6 pb-2 border-b ">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-blue-400 text-black dark:text-white">About Us</Link></li>
              {/* <li><Link href="/projects" className="hover:text-blue-400 transition-colors">Our Projects</Link></li> */}
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors text-black dark:text-white">Blog & Insights</Link></li>
              {/* <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li> */}
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors text-black dark:text-white">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors text-black dark:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-blue-400 transition-colors text-black dark:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Map */}
          <div className="space-y-6">
            <h4 className="text-black dark:text-white text-lg font-semibold mb-6 pb-2 border-b ">Find Us</h4>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className='text-black dark:text-white'>618 Washwood Heath Rd, Birmingham<br />West Midlands, UK, B82 HG</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className='text-black dark:text-white'>+44 745 536 6977</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className='text-black dark:text-white'>hello@brosbrain.co.uk</span>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="rounded-xl overflow-hidden border border-white/10 h-40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38187.84001530903!2d-1.928775773267843!3d52.47766080379087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487040c692b4c73f%3A0x2e685ab44d7f0c7d!2sBirmingham%2C%20UK!5e0!3m2!1sen!2suk!4v1720715500000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(80%) invert(92%) contrast(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BrosBrain Location Map"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} BrosBrain Tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="text-gray-500 hover:text-blue-400 transition-colors">Terms & Conditions</Link>
            {/* <Link href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38187.84001530903!2d-1.928775773267843!3d52.47766080379087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487040c692b4c73f%3A0x2e685ab44d7f0c7d!2sBirmingham%2C%20UK!5e0!3m2!1sen!2suk!4v1720715500000!5m2!1sen!2suk" className="text-gray-500 hover:text-blue-400 transition-colors">Sitemap</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}