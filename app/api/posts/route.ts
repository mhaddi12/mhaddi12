import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Post } from '@/models/Post';

export const dynamic = 'force-dynamic';

export async function GET() {
  await connectDB();
  const posts = await Post.find({ published: true })
    .select('title slug excerpt tags coverImage publishedAt views')
    .sort({ publishedAt: -1 })
    .lean();
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-blog-secret');
  if (secret !== process.env.BLOG_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();
  const body = await req.json();

  if (!body.title || !body.slug || !body.excerpt || !body.content) {
    return NextResponse.json({ error: 'title, slug, excerpt, content are required' }, { status: 400 });
  }

  const post = await Post.create(body);
  return NextResponse.json(post, { status: 201 });
}
