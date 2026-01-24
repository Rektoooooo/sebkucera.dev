import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

// Custom theme using only the allowed colors
const customTheme: { [key: string]: React.CSSProperties } = {
  'pre[class*="language-"]': {
    background: 'rgb(10, 10, 10)',
    color: 'rgb(237, 237, 237)',
    margin: 0,
    padding: '1rem',
    fontSize: '0.875rem',
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  },
  'code[class*="language-"]': {
    background: 'transparent',
    color: 'rgb(237, 237, 237)',
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  },
  'comment': { color: 'rgb(96, 96, 104)' },
  'prolog': { color: 'rgb(96, 96, 104)' },
  'doctype': { color: 'rgb(96, 96, 104)' },
  'cdata': { color: 'rgb(96, 96, 104)' },
  'punctuation': { color: 'rgb(237, 237, 237)' },
  'property': { color: 'rgb(217, 145, 120)' },
  'tag': { color: 'rgb(217, 145, 120)' },
  'boolean': { color: '#a855f7' },
  'number': { color: 'rgb(217, 145, 120)' },
  'constant': { color: 'rgb(217, 145, 120)' },
  'symbol': { color: '#22c55e' },
  'deleted': { color: '#ff5f56' },
  'selector': { color: '#22c55e' },
  'attr-name': { color: 'rgb(217, 145, 120)' },
  'string': { color: '#22c55e' },
  'char': { color: '#22c55e' },
  'builtin': { color: '#3b82f6' },
  'inserted': { color: '#22c55e' },
  'operator': { color: 'rgb(237, 237, 237)' },
  'entity': { color: 'rgb(217, 145, 120)' },
  'url': { color: '#3b82f6' },
  'variable': { color: '#22c55e' },
  'atrule': { color: '#a855f7' },
  'attr-value': { color: '#22c55e' },
  'function': { color: '#3b82f6' },
  'keyword': { color: '#a855f7' },
  'regex': { color: 'rgb(217, 145, 120)' },
  'important': { color: '#a855f7' },
  'class-name': { color: 'rgb(217, 145, 120)' },
};

export default function CodeBlock({
  code,
  language = "typescript",
  filename,
  showLineNumbers = true
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-bg-primary rounded-lg overflow-hidden border border-white/5">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-bg-terminal border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-control-close" />
            <div className="w-3 h-3 rounded-full bg-control-minimize" />
            <div className="w-3 h-3 rounded-full bg-control-maximize" />
          </div>
          {filename && (
            <span className="text-text-muted text-sm font-mono">{filename}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="text-text-muted hover:text-text-primary text-xs font-mono transition-colors px-2 py-1 rounded hover:bg-white/5"
        >
          {copied ? "copied!" : "copy"}
        </button>
      </div>
      {/* Code */}
      <div className="code-block overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={customTheme}
          showLineNumbers={showLineNumbers}
          lineNumberStyle={{
            color: 'rgb(96, 96, 104)',
            paddingRight: '1rem',
            minWidth: '2.5em',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
