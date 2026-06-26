import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function BlogPostLoading() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <div className="wrap">
          <div className="blog-post">
            <div className="skeleton skeleton-back" style={{ height: '18px', width: '80px', marginBottom: '36px' }} />

            <div className="blog-post-header">
              <div className="skeleton-tag-row">
                <span className="skeleton skeleton-tag" />
                <span className="skeleton skeleton-tag" />
              </div>
              <div className="skeleton" style={{ height: '48px', width: '80%', marginBottom: '16px', borderRadius: '10px' }} />
              <div className="skeleton" style={{ height: '48px', width: '55%', marginBottom: '20px', borderRadius: '10px' }} />
              <div className="skeleton-meta">
                <span className="skeleton skeleton-meta-item" />
                <span className="skeleton skeleton-meta-item" />
              </div>
              <div className="skeleton" style={{ height: '70px', width: '100%', marginTop: '20px', borderRadius: '10px' }} />
            </div>

            <div className="blog-content" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[100, 90, 100, 75, 100, 85, 60].map((w, i) => (
                <div key={i} className="skeleton skeleton-text" style={{ width: `${w}%` }} />
              ))}
              <div className="skeleton" style={{ height: '32px', width: '50%', margin: '20px 0 10px', borderRadius: '8px' }} />
              {[100, 88, 100, 70, 100, 65].map((w, i) => (
                <div key={`b${i}`} className="skeleton skeleton-text" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
