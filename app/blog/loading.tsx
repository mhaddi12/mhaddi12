import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-tag-row">
        <span className="skeleton skeleton-tag" />
        <span className="skeleton skeleton-tag" />
      </div>
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text skeleton-text--short" />
      <div className="skeleton-meta">
        <span className="skeleton skeleton-meta-item" />
        <span className="skeleton skeleton-meta-item" />
      </div>
    </div>
  );
}

export default function BlogLoading() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh' }}>
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '50px' }}>
            <span className="eyebrow">Articles</span>
            <div className="skeleton skeleton-heading" style={{ marginTop: '16px' }} />
            <div className="skeleton skeleton-subtext" style={{ marginTop: '14px' }} />
          </div>
          <div className="blog-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
