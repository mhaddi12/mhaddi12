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
import { jsonLdScript, personId } from '@/lib/seo';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  await connectDB();
  const post = await Post.findOne({ slug, published: true }).lean();
  if (!post) return { title: 'Not found', robots: { index: false, follow: false } };

  const published = post.publishedAt.toISOString();

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: 'article',
      publishedTime: published,
      modifiedTime: published,
      tags: post.tags,
      ...(post.coverImage ? { images: [{ url: post.coverImage }] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  await connectDB();

  const post = await Post.findOneAndUpdate(
    { slug, published: true },
    { $inc: { views: 1 } },
    { returnDocument: 'after', timestamps: false },
  ).lean();

  if (!post) notFound();

  const published = new Date(post.publishedAt).toISOString();
  const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
  const pageUrl = `${siteConfig.url}/blog/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: published,
        dateModified: published,
        author: { '@type': 'Person', name: siteConfig.name, url: siteConfig.url },
        publisher: { '@id': personId },
        mainEntityOfPage: pageUrl,
        url: pageUrl,
        inLanguage: 'en',
        ...(post.coverImage ? { image: [post.coverImage] } : {}),
        keywords: post.tags.join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.url}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
      <main style={{ paddingTop: '100px' }}>
        <article className="wrap blog-post">

          <nav className="blog-back" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {' / '}
            <Link href="/blog">Blog</Link>
            {' / '}
            <span>{post.title}</span>
          </nav>

          {/* Header */}
          <header className="blog-post-header">
            <div className="tags" style={{ marginBottom: '16px' }}>
              {post.tags.map((t: string) => <span key={t} className="tag">{t}</span>)}
            </div>
            <h1>{post.title}</h1>
            <div className="blog-post-meta">
              <Link href="/">{siteConfig.name}</Link>
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
            <Link href="/#contact" className="btn btn-primary" style={{ display: 'inline-flex' }}>Hire Me →</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
