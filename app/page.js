import Link from 'next/link';

export const metadata = {
  title: 'Kanakina Design Studio - Branding Designer',
  description: 'インテリアデザイン、映像制作、ブランディング、EC、音楽活動など、幅広いクリエイティブなサービスを提供しています。',
};

export default function Home() {
  return (
    <div className="container px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold" style={{ color: '#FFFFFF' }}>Kanakina Design Studio</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4" style={{ color: '#FFFFFF', fontSize: '1rem' }}>
          何から始めたら良いか分からない方へ。Kanakina Design Studioは、あなたのビジネスやプロジェクトをトータルでブランディングし、唯一無二の価値を創造します。私たちの作品をご覧いただき、お気軽にお問い合わせください。
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link href="/services" className="btn btn-primary btn-lg px-4 gap-3">My Services</Link>
        </div>
      </div>
    </div>
  );
}
