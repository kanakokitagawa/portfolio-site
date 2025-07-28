import Image from 'next/image';
import { worksData } from '@/app/works/works-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// ページのタイトルなどを動的に設定します
export async function generateMetadata({ params }) {
  const work = worksData.find(w => w.id === params.workId && w.category === 'interior');
  if (!work) {
    return {
      title: 'Work Not Found'
    }
  }
  return {
    title: `${work.title} - Interior Work`,
    description: `Kanakina Design Studioが手がけたインテリアデザイン「${work.title}」の詳細です。`,
  }
}

// Next.jsがビルド時にページのパスを事前に生成するために使います
export async function generateStaticParams() {
  const interiorWorks = worksData.filter(work => work.category === 'interior');
  return interiorWorks.map(work => ({
    workId: work.id,
  }));
}


const WorkDetailPage = async ({ params }) => {
  // paramsが非同期で渡されるのを待つ必要はありません。Next.jsが処理します。
  const workId = params.workId;
  const work = worksData.find(w => w.id === workId && w.category === 'interior');

  // データが見つからない場合は404ページを表示します
  if (!work) {
    notFound();
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">{work.title}</h1>
      
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {work.image && (
            <div className="mb-4 text-center">
              <Image 
                src={work.image} 
                alt={work.title} 
                width={800} 
                height={600} 
                className="img-fluid rounded shadow"
                style={{ objectFit: 'contain' }} // アスペクト比を保つ
              />
            </div>
          )}

          {work.videoUrl && (
            <div className="mb-4 ratio ratio-16x9">
              <iframe 
                src={work.videoUrl} 
                title={work.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="p-4 rounded text-dark">
            <p className="lead">{work.description}</p>
          </div>
          <div className="mt-4">
            <Link href="/works/interior" className="btn btn-outline-secondary">&larr; Back to Interior Works</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailPage;