'use client';
import { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import InlineBlogAd from '@/components/blog/InlineBlogAd';

function CopyButton({ codeRef }: { codeRef: React.RefObject<HTMLPreElement | null> }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    const text = codeRef.current?.querySelector('code')?.innerText ?? '';
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button className="code-copy-btn" onClick={copy} aria-label="Copy code">
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

function CodeBlock({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const ref = useRef<HTMLPreElement>(null);

  return (
    <div className="code-block-wrapper">
      <CopyButton codeRef={ref} />
      <pre ref={ref} {...props}>
        {children}
      </pre>
    </div>
  );
}

export default function BlogContent({ content }: { content: string }) {
  const paragraphs = content.split(/\n\n+/);
  const mid = Math.max(1, Math.floor(paragraphs.length / 2));
  const firstHalf = paragraphs.slice(0, mid).join('\n\n');
  const secondHalf = paragraphs.slice(mid).join('\n\n');

  return (
    <div className="blog-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} components={{ pre: CodeBlock }}>
        {firstHalf}
      </ReactMarkdown>
      <InlineBlogAd index={0} />
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} components={{ pre: CodeBlock }}>
        {secondHalf}
      </ReactMarkdown>
    </div>
  );
}
