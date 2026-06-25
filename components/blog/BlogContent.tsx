'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import InlineBlogAd from './InlineBlogAd';

const AD_EVERY = 3; // inject ad after every 3 paragraphs

export default function BlogContent({ content }: { content: string }) {
  const paragraphs = content.split(/\n\n+/).filter((p) => p.trim());

  return (
    <div className="blog-content">
      {paragraphs.map((para, i) => (
        <div key={i}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{para}</ReactMarkdown>
          {(i + 1) % AD_EVERY === 0 && i < paragraphs.length - 1 && (
            <InlineBlogAd index={i} />
          )}
        </div>
      ))}
    </div>
  );
}
