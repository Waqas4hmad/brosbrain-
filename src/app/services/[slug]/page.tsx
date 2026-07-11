import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import ServiceDetail from '../../../components/Service/ServiceDetail'; // ✅ Correct default import
import Breadcrumb from '@/components/Common/Breadcrumb';
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return { title: `${service.title} | BrosBrain Tech`, description: service.shortDesc };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);
  if (!service) notFound();

  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
          <Breadcrumb
        pageName={service.title}
        description=""
      />
        <ServiceDetail service={service} />
      </div>
    </section>
  );
}