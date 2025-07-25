import Image from 'next/image';
import { worksData } from '@/app/works/works-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const work = worksData.find(w => w.id === params.workId && w.category === 'video');
  if (!work) {
    return {
      title: 'Work Not Found'
    }
  }
  return {
    title: `${work.title} - Video Work`,
    description: `Kanakina Design Studioが手がけた映像制作「${work.title}」の詳細です。`,
  }
}

export async function generateStaticParams() {
  const videoWorks = worksData.filter(work => work.category === 'video');
  return videoWorks.map(work => ({
    workId: work.id,
  }));
}

const WorkDetailPage = async ({ params }) => {
  const workId = params.workId;
  const work = worksData.find(w => w.id === workId && w.category === 'video');

  if (!work) {
    notFound();
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">{work.title}</h1>
      
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {work.videoUrl ? (
            // 動画がある場合は動画プレイヤーのみ表示
            <div className="mb-4 ratio ratio-16x9">
              <iframe 
                src={work.videoUrl} 
                title={work.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            // 動画がない場合は画像を表示
            work.image && (
              <div className="mb-4 text-center">
                <Image 
                  src={work.image} 
                  alt={work.title} 
                  width={800} 
                  height={600} 
                  className="img-fluid rounded"
                  style={{ objectFit: 'contain' }} // アスペクト比を保つ
                />
              </div>
            )
          )}

          <div className="bg-light p-4 rounded">
            <p className="lead">{work.description || '詳細な説明は現在準備中です。'}</p>
          </div>
          <div className="mt-4">
            <Link href="/works/video" className="btn btn-outline-secondary">&larr; Back to Video Works</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPage;