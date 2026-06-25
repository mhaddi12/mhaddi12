import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPost extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverImage?: string;
  publishedAt: Date;
  views: number;
  published: boolean;
}

const PostSchema = new Schema<IPost>(
  {
    title:       { type: String, required: true, trim: true },
    slug:        { type: String, required: true, lowercase: true, trim: true },
    excerpt:     { type: String, required: true },
    content:     { type: String, required: true },
    tags:        [{ type: String, trim: true }],
    coverImage:  { type: String },
    publishedAt: { type: Date, default: Date.now },
    views:       { type: Number, default: 0 },
    published:   { type: Boolean, default: true },
  },
  { timestamps: true },
);

PostSchema.index({ slug: 1 });
PostSchema.index({ publishedAt: -1 });
PostSchema.index({ tags: 1 });

export const Post: Model<IPost> =
  mongoose.models.Post ?? mongoose.model<IPost>('Post', PostSchema);
