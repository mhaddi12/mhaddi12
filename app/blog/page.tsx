import type { Metadata } from 'next';
import { connectDB } from '@/lib/mongodb';
import { Post } from '@/models/Post';
import PostCard from '@/components/blog/PostCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/lib/data';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: 'Flutter development tips, mobile app architecture, Node.js backends, and lessons from shipping production apps.',
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: 'Flutter development tips and mobile app engineering articles.',
    url: `${siteConfig.url}/blog`,
  },
};

export default async function BlogPage() {
  await connectDB();
  const posts = await Post.find({ published: true })
    .select('title slug excerpt tags publishedAt views')
    .sort({ publishedAt: -1 })
    .lean();

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh' }}>
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '50px' }}>
            <span className="eyebrow">Articles</span>
            <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', fontWeight: 700, marginTop: '16px' }}>
              Blog
            </h1>
            <p style={{ color: 'var(--muted)', marginTop: '14px', fontSize: '1.05rem' }}>
              Flutter development, mobile architecture, and lessons from shipping production apps.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="blog-empty">
              <p>No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => (
                <PostCard
                  key={String(post._id)}
                  post={{
                    title: post.title,
                    slug: post.slug,
                    excerpt: post.excerpt,
                    tags: post.tags,
                    publishedAt: post.publishedAt.toISOString(),
                    views: post.views,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
