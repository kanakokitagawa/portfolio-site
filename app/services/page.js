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
            <Link href={`/services/${service.id}`} className="text-decoration-none service-polaroid-link">
              <div className="service-polaroid position-relative shadow-lg">
                <div className="polaroid-image-container">
                  <Image 
                    src={service.image || '/placeholder.jpg'} // デフォルト画像
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="service-polaroid-image"
                  />
                </div>
                <div className="polaroid-text-area p-3">
                  <h5 className="fw-bold text-dark">{service.title}</h5>
                </div>
                <div className="polaroid-light position-absolute top-0 start-50 translate-middle-x"></div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;