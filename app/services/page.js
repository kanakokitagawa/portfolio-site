import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from './services-data';

export const metadata = {
  title: 'My Services - Kanakina Design Studio',
  description: 'Kanakina Design Studioが提供するサービス一覧です。',
};

const ServicesPage = () => {
  return (
    <div className="container py-5 text-center">
      <h1 className="mb-5">My Services</h1>
      <div className="row justify-content-center g-4">
        {servicesData.map((service) => (
          <div key={service.id} className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <Link href={`/services/${service.id}`} className="text-decoration-none service-frame-link">
              <div className="service-frame position-relative d-flex flex-column align-items-center justify-content-end p-3 shadow-lg">
                <div className="frame-light position-absolute top-0 start-50 translate-middle-x"></div>
                <Image 
                  src={service.image || '/placeholder.jpg'} // デフォルト画像
                  alt={service.title}
                  width={200}
                  height={200}
                  className="img-fluid mb-3 service-frame-image"
                />
                <h5 className="fw-bold text-dark">{service.title}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
