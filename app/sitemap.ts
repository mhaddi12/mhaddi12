import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/data';
import { connectDB } from '@/lib/mongodb';
import { Post } from '@/models/Post';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const siteUpdated = new Date(siteConfig.updated);
  const privacyUpdated = new Date(siteConfig.privacyUpdated);

  let posts: { slug: string; publishedAt?: Date }[] = [];
  try {
    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('DB timeout')), 8000),
    );
    await Promise.race([connectDB(), timeout]);
    posts = await Post.find({ published: true })
      .select('slug publishedAt')
      .sort({ publishedAt: -1 })
      .lean();
  } catch {
    posts = [];
  }

  const latestPost = posts.reduce<Date | null>((latest, post) => {
    if (!post.publishedAt) return latest;
    const published = new Date(post.publishedAt);
    return !latest || published > latest ? published : latest;
  }, null);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: siteUpdated,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: latestPost ?? siteUpdated,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: privacyUpdated,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : siteUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
