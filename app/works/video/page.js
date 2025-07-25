import Link from 'next/link';
import Image from 'next/image';
import { worksData } from '@/app/works/works-data';

export const metadata = {
  title: 'Video Production Works - Kanakina Design Studio',
  description: 'これまでに手がけた映像制作の実績一覧です。',
};

const VideoWorksPage = () => {
  const videoWorks = worksData.filter(work => work.category === 'video');

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Video Production</h1>
      <p className="text-center mb-5">企画から撮影、編集、そしてYouTubeやTikTokでの運用まで、一貫した映像制作を提供します。</p>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {videoWorks.map((work) => (
          <div key={work.id} className="col">
            <div className="card h-100 shadow-sm">
              <Link href={`/works/video/${work.id}`} className="text-decoration-none text-dark">
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

export default VideoWorksPage;