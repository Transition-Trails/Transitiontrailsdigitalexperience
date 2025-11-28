import React from 'react';
import { Copy, Check, Palette } from 'lucide-react';

interface ColorToken {
  name: string;
  cssVar: string;
  value: string;
  usage: string;
  category: 'surface' | 'text' | 'accent' | 'status';
}

const COLOR_TOKENS: ColorToken[] = [
  // Neutral Surfaces
  { name: 'Surface 0', cssVar: '--ttds-color-surface-0', value: '#FFFFFF', usage: 'Primary background, cards', category: 'surface' },
  { name: 'Surface 1', cssVar: '--ttds-color-surface-1', value: '#F8FAFC', usage: 'Subtle backgrounds, hover states', category: 'surface' },
  { name: 'Surface 2', cssVar: '--ttds-color-surface-2', value: '#F1F5F9', usage: 'Dividers, borders, separators', category: 'surface' },
  { name: 'Surface 3', cssVar: '--ttds-color-surface-3', value: '#E2E8F0', usage: 'Disabled states, placeholders', category: 'surface' },
  
  // Text Colors
  { name: 'Text Primary', cssVar: '--ttds-color-text-primary', value: '#0F172A', usage: 'Main body text, headings', category: 'text' },
  { name: 'Text Secondary', cssVar: '--ttds-color-text-secondary', value: '#475569', usage: 'Supporting text, descriptions', category: 'text' },
  { name: 'Text Tertiary', cssVar: '--ttds-color-text-tertiary', value: '#94A3B8', usage: 'Subtle text, hints, captions', category: 'text' },
  { name: 'Text Inverse', cssVar: '--ttds-color-text-inverse', value: '#FFFFFF', usage: 'Text on dark backgrounds', category: 'text' },
  { name: 'Text Link', cssVar: '--ttds-color-text-link', value: '#10B981', usage: 'Hyperlinks, interactive text', category: 'text' },
  
  // Accent Colors
  { name: 'Accent Primary', cssVar: '--ttds-color-accent-primary', value: '#10B981', usage: 'Primary CTA, active states', category: 'accent' },
  { name: 'Accent Secondary', cssVar: '--ttds-color-accent-secondary', value: '#0EA5E9', usage: 'Secondary actions, info', category: 'accent' },
  { name: 'Accent Highlight', cssVar: '--ttds-color-accent-highlight', value: '#F59E0B', usage: 'Highlights, emphasis', category: 'accent' },
  
  // Status Colors
  { name: 'Status Success', cssVar: '--ttds-color-status-success', value: '#10B981', usage: 'Success states, confirmations', category: 'status' },
  { name: 'Status Warning', cssVar: '--ttds-color-status-warning', value: '#F59E0B', usage: 'Warnings, caution', category: 'status' },
  { name: 'Status Info', cssVar: '--ttds-color-status-info', value: '#0EA5E9', usage: 'Information, neutral alerts', category: 'status' },
  { name: 'Status Critical', cssVar: '--ttds-color-status-critical', value: '#EF4444', usage: 'Errors, critical alerts', category: 'status' },
];

export function ColorTokenDisplay() {
  const [copiedToken, setCopiedToken] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, tokenName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const groupedTokens = React.useMemo(() => {
    return {
      surface: COLOR_TOKENS.filter(t => t.category === 'surface'),
      text: COLOR_TOKENS.filter(t => t.category === 'text'),
      accent: COLOR_TOKENS.filter(t => t.category === 'accent'),
      status: COLOR_TOKENS.filter(t => t.category === 'status'),
    };
  }, []);

  const CategorySection = ({ title, tokens, icon }: { title: string; tokens: ColorToken[]; icon: React.ReactNode }) => (
    <div>
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>{title}</h3>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {tokens.map((token) => (
          <div
            key={token.cssVar}
            className="group bg-white border border-slate-200 rounded-lg p-4 hover:border-emerald-300 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              {/* Color Swatch */}
              <div className="flex-shrink-0">
                <div
                  className="w-16 h-16 rounded-lg border-2 border-slate-300 shadow-sm"
                  style={{ backgroundColor: token.value }}
                />
                <div className="mt-2 text-xs text-slate-600 text-center font-mono">
                  {token.value}
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
                    className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded transition-colors"
                    title="Copy CSS variable"
                  >
                    {copiedToken === token.cssVar ? (
                      <Check className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Tailwind Class Alternative */}
                <div className="mt-2 text-xs text-slate-500">
                  <span className="font-mono">
                    {token.category === 'text' && `text-slate-900 / text-slate-600 / text-slate-400`}
                    {token.category === 'surface' && `bg-white / bg-slate-50 / bg-slate-100`}
                    {token.category === 'accent' && `bg-emerald-500 / bg-blue-500 / bg-amber-500`}
                    {token.category === 'status' && `bg-emerald-500 / bg-amber-500 / bg-blue-500 / bg-red-500`}
                  </span>
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
      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-6 border border-emerald-200">
        <div className="flex items-start gap-3">
          <Palette className="h-5 w-5 text-emerald-600 mt-0.5" />
          <div>
            <h3 className="text-sm text-slate-900 mb-2" style={{ fontWeight: 700 }}>
              TTDS Color System
            </h3>
            <p className="text-xs text-slate-600 mb-3">
              All colors in the Transition Trails Design System follow WCAG AA contrast requirements. 
              Use CSS variables for consistency and theme support.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 bg-white rounded border border-emerald-200 text-emerald-700">
                {COLOR_TOKENS.length} tokens
              </span>
              <span className="px-2 py-1 bg-white rounded border border-emerald-200 text-emerald-700">
                WCAG AA
              </span>
              <span className="px-2 py-1 bg-white rounded border border-emerald-200 text-emerald-700">
                CSS Variables
              </span>
            </div>
          </div>
        </div>
      </div>

      <CategorySection
        title="Neutral Surfaces"
        tokens={groupedTokens.surface}
        icon={<div className="w-4 h-4 bg-slate-200 rounded" />}
      />

      <CategorySection
        title="Text Colors"
        tokens={groupedTokens.text}
        icon={<div className="text-slate-900 text-sm" style={{ fontWeight: 700 }}>Aa</div>}
      />

      <CategorySection
        title="Accent Colors"
        tokens={groupedTokens.accent}
        icon={<div className="w-4 h-4 bg-emerald-500 rounded-full" />}
      />

      <CategorySection
        title="Status Colors"
        tokens={groupedTokens.status}
        icon={<div className="flex gap-1">
          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
          <div className="w-2 h-2 bg-amber-500 rounded-full" />
          <div className="w-2 h-2 bg-red-500 rounded-full" />
        </div>}
      />
    </div>
  );
}
