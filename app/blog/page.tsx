import type { Metadata } from 'next';
import Link from 'next/link';
import { connectDB } from '@/lib/mongodb';
import { Post } from '@/models/Post';
import PostCard from '@/components/blog/PostCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/lib/data';
import { jsonLdScript, personId, websiteId } from '@/lib/seo';

export const dynamic = 'force-dynamic';

const blogTitle = 'Flutter and Mobile App Development Blog';
const blogDescription =
  'Flutter tutorials, mobile architecture, and Node.js lessons from apps shipped in production, by Muhammad Haddi in Lahore.';

export const metadata: Metadata = {
  title: blogTitle,
  description: blogDescription,
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: `${blogTitle} | ${siteConfig.name}`,
    description: blogDescription,
    url: '/blog',
    type: 'website',
  },
};

export default async function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${siteConfig.url}/blog#blog`,
        name: blogTitle,
        description: blogDescription,
        url: `${siteConfig.url}/blog`,
        inLanguage: 'en',
        publisher: { '@id': personId },
        isPartOf: { '@id': websiteId },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.url}/blog` },
        ],
      },
    ],
  };

  await connectDB();
  const posts = await Post.find({ published: true })
    .select('title slug excerpt tags publishedAt views')
    .sort({ publishedAt: -1 })
    .lean();

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
      <main style={{ paddingTop: '100px', minHeight: '80vh' }}>
        <div className="wrap">
          <nav className="blog-back" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {' / '}
            <span>Blog</span>
          </nav>
          <div className="sec-head" style={{ marginBottom: '50px' }}>
            <span className="eyebrow">Articles</span>
            <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', fontWeight: 700, marginTop: '16px' }}>
              Flutter and mobile app development
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
