import { servicesData } from '@/app/services/services-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const service = servicesData.find(s => s.id === params.serviceId);
  if (!service) {
    return {
      title: 'Service Not Found'
    }
  }
  return {
    title: `${service.title} - Kanakina Design Studio`,
    description: service.description,
  }
}

export async function generateStaticParams() {
  return servicesData.map(service => ({
    serviceId: service.id,
  }));
}

const ServiceDetailPage = ({ params }) => {
  const serviceId = params.serviceId;
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    notFound();
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">{service.title}</h1>
      
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="bg-light p-4 rounded shadow-sm">
            <p className="lead">{service.description}</p>
          </div>
          <div className="mt-4 text-center">
            <Link href="/services" className="btn btn-outline-secondary">&larr; Back to Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
