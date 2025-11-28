import React from 'react';
import { Copy, Check, Type } from 'lucide-react';

interface TypographyToken {
  name: string;
  cssVar: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  usage: string;
  category: 'heading' | 'body' | 'caption';
}

const TYPOGRAPHY_TOKENS: TypographyToken[] = [
  // Headings
  { name: 'Heading XL', cssVar: '--ttds-type-heading-xl', fontSize: '2rem', lineHeight: '2.5rem', fontWeight: '700', usage: 'Page titles, hero headings', category: 'heading' },
  { name: 'Heading LG', cssVar: '--ttds-type-heading-lg', fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '700', usage: 'Section headings', category: 'heading' },
  { name: 'Heading MD', cssVar: '--ttds-type-heading-md', fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '700', usage: 'Subsection headings', category: 'heading' },
  { name: 'Heading SM', cssVar: '--ttds-type-heading-sm', fontSize: '1rem', lineHeight: '1.5rem', fontWeight: '700', usage: 'Card titles, labels', category: 'heading' },
  
  // Body
  { name: 'Body LG', cssVar: '--ttds-type-body-lg', fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: '400', usage: 'Large body text, intros', category: 'body' },
  { name: 'Body MD', cssVar: '--ttds-type-body-md', fontSize: '1rem', lineHeight: '1.5rem', fontWeight: '400', usage: 'Default body text', category: 'body' },
  { name: 'Body SM', cssVar: '--ttds-type-body-sm', fontSize: '0.875rem', lineHeight: '1.25rem', fontWeight: '400', usage: 'Small body text, descriptions', category: 'body' },
  
  // Caption
  { name: 'Caption', cssVar: '--ttds-type-caption', fontSize: '0.75rem', lineHeight: '1rem', fontWeight: '400', usage: 'Captions, helper text, timestamps', category: 'caption' },
];

export function TypographyTokenDisplay() {
  const [copiedToken, setCopiedToken] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, tokenName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const groupedTokens = React.useMemo(() => {
    return {
      heading: TYPOGRAPHY_TOKENS.filter(t => t.category === 'heading'),
      body: TYPOGRAPHY_TOKENS.filter(t => t.category === 'body'),
      caption: TYPOGRAPHY_TOKENS.filter(t => t.category === 'caption'),
    };
  }, []);

  const CategorySection = ({ title, tokens }: { title: string; tokens: TypographyToken[] }) => (
    <div>
      <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>{title}</h3>
      <div className="space-y-4">
        {tokens.map((token) => (
          <div
            key={token.cssVar}
            className="bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all"
          >
            {/* Live Preview */}
            <div className="mb-4 pb-4 border-b border-slate-200">
              <div
                style={{
                  fontSize: token.fontSize,
                  lineHeight: token.lineHeight,
                  fontWeight: token.fontWeight,
                }}
                className="text-slate-900"
              >
                The quick brown fox jumps over the lazy dog
              </div>
            </div>

            {/* Token Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm text-slate-900 mb-2" style={{ fontWeight: 700 }}>
                  {token.name}
                </h4>
                <p className="text-xs text-slate-600 mb-3">
                  {token.usage}
                </p>

                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Size:</span>
                    <span className="text-slate-900 font-mono">{token.fontSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Line Height:</span>
                    <span className="text-slate-900 font-mono">{token.lineHeight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Weight:</span>
                    <span className="text-slate-900 font-mono">{token.fontWeight}</span>
                  </div>
                </div>
              </div>

              <div>
                {/* CSS Variable */}
                <div className="mb-2">
                  <div className="text-xs text-slate-500 mb-1">CSS Variable:</div>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-900 font-mono">
                      var({token.cssVar})
                    </code>
                    <button
                      onClick={() => copyToClipboard(`var(${token.cssVar})`, token.cssVar)}
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      title="Copy CSS variable"
                    >
                      {copiedToken === token.cssVar ? (
                        <Check className="h-4 w-4 text-blue-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Tailwind Classes */}
                <div>
                  <div className="text-xs text-slate-500 mb-1">Tailwind Classes:</div>
                  <div className="flex flex-wrap gap-1">
                    <code className="px-2 py-1 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700 font-mono">
                      {token.fontSize === '2rem' ? 'text-4xl' :
                       token.fontSize === '1.5rem' ? 'text-2xl' :
                       token.fontSize === '1.25rem' ? 'text-xl' :
                       token.fontSize === '1.125rem' ? 'text-lg' :
                       token.fontSize === '1rem' ? 'text-base' :
                       token.fontSize === '0.875rem' ? 'text-sm' :
                       'text-xs'}
                    </code>
                    <code className="px-2 py-1 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700 font-mono">
                      {token.fontWeight === '700' ? 'font-bold' : 'font-normal'}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
        <div className="flex items-start gap-3">
          <Type className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="text-sm text-slate-900 mb-2" style={{ fontWeight: 700 }}>
              TTDS Typography System
            </h3>
            <p className="text-xs text-slate-600 mb-3">
              Consistent typography creates clear hierarchy and improves readability. All type scales use 
              rem units for accessibility and maintain optimal line heights for comfortable reading.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 bg-white rounded border border-blue-200 text-blue-700">
                {TYPOGRAPHY_TOKENS.length} tokens
              </span>
              <span className="px-2 py-1 bg-white rounded border border-blue-200 text-blue-700">
                Rem-based
              </span>
              <span className="px-2 py-1 bg-white rounded border border-blue-200 text-blue-700">
                Accessible
              </span>
            </div>
          </div>
        </div>
      </div>

      <CategorySection title="Headings" tokens={groupedTokens.heading} />
      <CategorySection title="Body Text" tokens={groupedTokens.body} />
      <CategorySection title="Caption & Small Text" tokens={groupedTokens.caption} />

      {/* Type Scale Hierarchy */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
          Type Scale Hierarchy
        </h3>
        <div className="space-y-3">
          {TYPOGRAPHY_TOKENS.map((token) => (
            <div
              key={token.cssVar}
              style={{
                fontSize: token.fontSize,
                lineHeight: token.lineHeight,
                fontWeight: token.fontWeight,
              }}
              className="text-slate-900 border-b border-slate-100 pb-2"
            >
              {token.name} - {token.usage}
            </div>
          ))}
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h3 className="text-sm text-slate-900 mb-2" style={{ fontWeight: 700 }}>
          ⚠️ Important: Typography Token Usage
        </h3>
        <p className="text-xs text-slate-700 mb-2">
          Do NOT use Tailwind typography classes (text-2xl, font-bold, leading-none) unless specifically 
          requested by the user.
        </p>
        <p className="text-xs text-slate-600">
          We have default typography setup for each HTML element in /styles/globals.css. Only override 
          when necessary for specific design requirements.
        </p>
      </div>
    </div>
  );
}
