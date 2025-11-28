import React from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeSnippetProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export function CodeSnippet({ 
  code, 
  language = 'tsx', 
  title,
  showLineNumbers = false 
}: CodeSnippetProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400" style={{ fontWeight: 600 }}>
              {title}
            </span>
            <span className="text-xs text-slate-500">
              {language}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2 py-1 text-xs text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                Copy
              </>
            )}
          </button>
        </div>
      )}
      <div className="relative">
        {!title && (
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors z-10"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                Copy
              </>
            )}
          </button>
        )}
        <pre className="p-4 overflow-x-auto text-xs leading-relaxed">
          <code className="text-slate-100">
            {showLineNumbers ? (
              <div>
                {lines.map((line, index) => (
                  <div key={index} className="flex">
                    <span className="inline-block w-8 text-right pr-4 text-slate-600 select-none">
                      {index + 1}
                    </span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
