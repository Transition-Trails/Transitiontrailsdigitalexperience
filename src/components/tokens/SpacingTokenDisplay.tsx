import React from 'react';
import { Copy, Check, Maximize2 } from 'lucide-react';

interface SpacingToken {
  name: string;
  cssVar: string;
  value: string;
  pixels: number;
  usage: string;
}

const SPACING_TOKENS: SpacingToken[] = [
  { name: 'Space 4', cssVar: '--ttds-space-4', value: '0.25rem', pixels: 4, usage: 'Tight spacing, icon gaps' },
  { name: 'Space 8', cssVar: '--ttds-space-8', value: '0.5rem', pixels: 8, usage: 'Compact layouts, button padding' },
  { name: 'Space 12', cssVar: '--ttds-space-12', value: '0.75rem', pixels: 12, usage: 'Default element spacing' },
  { name: 'Space 16', cssVar: '--ttds-space-16', value: '1rem', pixels: 16, usage: 'Standard component padding' },
  { name: 'Space 24', cssVar: '--ttds-space-24', value: '1.5rem', pixels: 24, usage: 'Section spacing, card padding' },
  { name: 'Space 32', cssVar: '--ttds-space-32', value: '2rem', pixels: 32, usage: 'Large gaps, panel spacing' },
  { name: 'Space 40', cssVar: '--ttds-space-40', value: '2.5rem', pixels: 40, usage: 'Major section breaks' },
];

export function SpacingTokenDisplay() {
  const [copiedToken, setCopiedToken] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, tokenName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
        <div className="flex items-start gap-3">
          <Maximize2 className="h-5 w-5 text-purple-600 mt-0.5" />
          <div>
            <h3 className="text-sm text-slate-900 mb-2" style={{ fontWeight: 700 }}>
              TTDS Spacing System
            </h3>
            <p className="text-xs text-slate-600 mb-3">
              Consistent spacing creates visual harmony. Use these tokens for padding, margins, and gaps. 
              Based on a 4px baseline grid.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 bg-white rounded border border-purple-200 text-purple-700">
                {SPACING_TOKENS.length} tokens
              </span>
              <span className="px-2 py-1 bg-white rounded border border-purple-200 text-purple-700">
                4px baseline
              </span>
              <span className="px-2 py-1 bg-white rounded border border-purple-200 text-purple-700">
                Rem-based
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {SPACING_TOKENS.map((token) => (
          <div
            key={token.cssVar}
            className="bg-white border border-slate-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              {/* Visual Representation */}
              <div className="flex-shrink-0 w-32">
                <div className="bg-slate-50 rounded-lg p-2 border border-slate-200">
                  <div
                    className="bg-purple-500 rounded"
                    style={{ 
                      width: `${token.pixels}px`, 
                      height: `${token.pixels}px`,
                      minWidth: '4px',
                      minHeight: '4px'
                    }}
                  />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-lg text-purple-600" style={{ fontWeight: 700 }}>
                    {token.pixels}px
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    {token.value}
                  </div>
                </div>
              </div>

              {/* Token Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h4 className="text-sm text-slate-900 mb-1" style={{ fontWeight: 700 }}>
                      {token.name}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {token.usage}
                    </p>
                  </div>
                </div>

                {/* CSS Variable */}
                <div className="mt-3 flex items-center gap-2">
                  <code className="flex-1 px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-900 font-mono">
                    var({token.cssVar})
                  </code>
                  <button
                    onClick={() => copyToClipboard(`var(${token.cssVar})`, token.cssVar)}
                    className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded transition-colors"
                    title="Copy CSS variable"
                  >
                    {copiedToken === token.cssVar ? (
                      <Check className="h-4 w-4 text-purple-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Tailwind Class */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs text-slate-500">Tailwind:</span>
                  <code className="px-2 py-1 bg-purple-50 border border-purple-200 rounded text-xs text-purple-700 font-mono">
                    p-{token.pixels / 4}
                  </code>
                  <code className="px-2 py-1 bg-purple-50 border border-purple-200 rounded text-xs text-purple-700 font-mono">
                    m-{token.pixels / 4}
                  </code>
                  <code className="px-2 py-1 bg-purple-50 border border-purple-200 rounded text-xs text-purple-700 font-mono">
                    gap-{token.pixels / 4}
                  </code>
                </div>

                {/* Usage Example */}
                <div className="mt-3 bg-slate-50 rounded p-3 border border-slate-200">
                  <div className="text-xs text-slate-600 mb-2">Example Usage:</div>
                  <div 
                    className="bg-white border-2 border-purple-300 rounded flex items-center justify-center text-xs text-purple-600"
                    style={{ padding: token.value }}
                  >
                    Element with {token.pixels}px padding
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spacing Scale Visualization */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
          Spacing Scale Comparison
        </h3>
        <div className="space-y-2">
          {SPACING_TOKENS.map((token) => (
            <div key={token.cssVar} className="flex items-center gap-3">
              <div className="w-16 text-xs text-slate-600 font-mono text-right">
                {token.pixels}px
              </div>
              <div
                className="bg-purple-500 rounded h-4"
                style={{ width: `${token.pixels * 2}px` }}
              />
              <div className="text-xs text-slate-600">
                {token.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
