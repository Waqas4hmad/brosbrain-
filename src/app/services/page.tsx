import { servicesData } from '@/data/services';
import ServiceCard from '../../components/Service/ServiceCard';
import Breadcrumb from '@/components/Common/Breadcrumb';

export default function ServicesPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5 pt-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Our Expert Services</h1>
          <p className="text-lg text-slate-500">
            We build scalable, high-performance digital solutions tailored to your business goals — from concept to launch and beyond.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
          {servicesData.map((service, index) => (
            <ServiceCard 
            key={service.id} 
            reverse={index % 2 !== 0} 
            service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}