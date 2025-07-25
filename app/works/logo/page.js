import Link from 'next/link';
import Image from 'next/image';
import { worksData } from '@/app/works/works-data';

export const metadata = {
  title: 'Logo Design Works - Kanakina Design Studio',
  description: 'これまでに手がけたロゴデザインの実績一覧です。',
};

const LogoWorksPage = () => {
  const logoWorks = worksData.filter(work => work.category === 'logo');

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Logo Design</h1>
      <p className="text-center mb-5">ブランドの顔となるロゴデザイン。コンセプトから丁寧にヒアリングし、唯一無二のロゴを制作します。</p>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {logoWorks.map((work) => (
          <div key={work.id} className="col">
            <div className="card h-100 shadow-sm">
              <Link href={`/works/logo/${work.id}`} className="text-decoration-none text-dark">
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

export default LogoWorksPage;