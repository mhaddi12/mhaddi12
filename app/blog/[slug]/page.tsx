import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { connectDB } from '@/lib/mongodb';
import { Post } from '@/models/Post';
import BlogContent from '@/components/blog/BlogContent';
import FloatingBlogAd from '@/components/blog/FloatingBlogAd';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/lib/data';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  await connectDB();
  const post = await Post.findOne({ slug, published: true }).lean();
  if (!post) return {};

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishedAt.toISOString(),
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  await connectDB();

  const post = await Post.findOneAndUpdate(
    { slug, published: true },
    { $inc: { views: 1 } },
    { returnDocument: 'after' },
  ).lean();

  if (!post) notFound();

  const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <article className="wrap blog-post">

          {/* Back link */}
          <Link href="/blog" className="blog-back">← Back to Blog</Link>

          {/* Header */}
          <header className="blog-post-header">
            <div className="tags" style={{ marginBottom: '16px' }}>
              {post.tags.map((t: string) => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1>{post.title}</h1>
            <div className="blog-post-meta">
              <span className="mono">{date}</span>
              <span className="mono">{post.views} views</span>
            </div>
            <p className="blog-post-excerpt">{post.excerpt}</p>
          </header>

          {/* Content */}
          <BlogContent content={post.content} />

          {/* Floating ad — slides up from bottom-right after 25% scroll, dismissible */}
          <FloatingBlogAd />

          {/* Footer */}
          <div className="blog-post-footer">
            <Link href="/blog" className="btn btn-ghost" style={{ display: 'inline-flex' }}>← More Articles</Link>
            <Link href="#contact" className="btn btn-primary" style={{ display: 'inline-flex' }}>Hire Me →</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
