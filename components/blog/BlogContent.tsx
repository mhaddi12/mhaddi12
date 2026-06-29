'use client';
import { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

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
  return (
    <div className="blog-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{ pre: CodeBlock }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
