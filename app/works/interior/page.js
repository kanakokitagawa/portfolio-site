import Link from 'next/link';
import Image from 'next/image';
import { worksData } from '@/app/works/works-data';

export const metadata = {
  title: 'Interior Design Works - Kanakina Design Studio',
  description: 'これまでに手がけたインテリアデザインの実績一覧です。',
};

const InteriorWorksPage = () => {
  const interiorWorks = worksData.filter(work => work.category === 'interior');

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Interior Design</h1>
      <p className="text-center mb-5">空間全体のコンセプト設計から、家具やサインの細部に至るまで、一貫したデザインを提供します。</p>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {interiorWorks.map((work) => (
          <div key={work.id} className="col">
            <div className="card h-100 shadow-sm">
              <Link href={`/works/interior/${work.id}`} className="text-decoration-none text-dark">
                <div className="square-card">
                  <Image
                    src={work.image}
                    alt={work.title}
                    layout="fill"
                    objectFit="cover"
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{work.title}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteriorWorksPage;