import Link from 'next/link';

interface Post {
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  publishedAt: string;
  views: number;
}

export default function PostCard({ post }: { post: Post }) {
  const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} className="post-card" prefetch={false}>
      <div className="post-meta">
        <span className="post-date mono">{date}</span>
        <span className="post-views mono">{post.views} views</span>
      </div>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <div className="tags" style={{ marginTop: '16px' }}>
        {post.tags.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
      <span className="post-read-more">Read article →</span>
    </Link>
  );
}
