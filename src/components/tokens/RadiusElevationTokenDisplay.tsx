import React from 'react';
import { Copy, Check, Circle, Box } from 'lucide-react';

interface RadiusToken {
  name: string;
  cssVar: string;
  value: string;
  usage: string;
}

interface ElevationToken {
  name: string;
  cssVar: string;
  value: string;
  usage: string;
}

const RADIUS_TOKENS: RadiusToken[] = [
  { name: 'Radius SM', cssVar: '--ttds-radius-sm', value: '0.375rem', usage: 'Chips, badges, small buttons' },
  { name: 'Radius MD', cssVar: '--ttds-radius-md', value: '0.5rem', usage: 'Cards, buttons, inputs (default)' },
  { name: 'Radius LG', cssVar: '--ttds-radius-lg', value: '0.75rem', usage: 'Panels, modals, large containers' },
];

const ELEVATION_TOKENS: ElevationToken[] = [
  { name: 'Elevation None', cssVar: '--ttds-elevation-none', value: 'none', usage: 'Flat surfaces, no depth' },
  { name: 'Elevation SM', cssVar: '--ttds-elevation-sm', value: '0 1px 3px rgba(0,0,0,0.08)', usage: 'Cards, subtle lift' },
  { name: 'Elevation MD', cssVar: '--ttds-elevation-md', value: '0 4px 12px rgba(0,0,0,0.12)', usage: 'Modals, dropdowns, floating elements' },
];

export function RadiusElevationTokenDisplay() {
  const [copiedToken, setCopiedToken] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, tokenName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Radius Tokens */}
      <div>
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6 border border-teal-200 mb-6">
          <div className="flex items-start gap-3">
            <Circle className="h-5 w-5 text-teal-600 mt-0.5" />
            <div>
              <h3 className="text-sm text-slate-900 mb-2" style={{ fontWeight: 700 }}>
                TTDS Border Radius
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Consistent rounded corners (6-8px range) create the modern, approachable feel of the 
                Transition Trails brand. Use these tokens for all component borders.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-white rounded border border-teal-200 text-teal-700">
                  {RADIUS_TOKENS.length} tokens
                </span>
                <span className="px-2 py-1 bg-white rounded border border-teal-200 text-teal-700">
                  6-8px range
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {RADIUS_TOKENS.map((token) => (
            <div
              key={token.cssVar}
              className="bg-white border border-slate-200 rounded-lg p-4 hover:border-teal-300 hover:shadow-md transition-all"
            >
              {/* Visual Preview */}
              <div className="mb-4 flex items-center justify-center">
                <div
                  className="w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-500 border-2 border-teal-600"
                  style={{ borderRadius: token.value }}
                />
              </div>

              {/* Token Info */}
              <h4 className="text-sm text-slate-900 mb-1 text-center" style={{ fontWeight: 700 }}>
                {token.name}
              </h4>
              <p className="text-xs text-slate-600 mb-3 text-center">
                {token.usage}
              </p>

              {/* Value */}
              <div className="text-center mb-3">
                <div className="text-lg text-teal-600 font-mono" style={{ fontWeight: 700 }}>
                  {token.value}
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  {parseFloat(token.value) * 16}px
                </div>
              </div>

              {/* CSS Variable */}
              <div className="flex items-center gap-2">
                <code className="flex-1 px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-900 font-mono">
                  var({token.cssVar})
                </code>
                <button
                  onClick={() => copyToClipboard(`var(${token.cssVar})`, token.cssVar)}
                  className="p-1.5 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded transition-colors"
                  title="Copy CSS variable"
                >
                  {copiedToken === token.cssVar ? (
                    <Check className="h-4 w-4 text-teal-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Tailwind Class */}
              <div className="mt-2 text-center">
                <code className="px-2 py-1 bg-teal-50 border border-teal-200 rounded text-xs text-teal-700 font-mono">
                  {token.name === 'Radius SM' ? 'rounded-md' :
                   token.name === 'Radius MD' ? 'rounded-lg' :
                   'rounded-xl'}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Elevation Tokens */}
      <div>
        <div className="bg-gradient-to-r from-slate-50 to-stone-100 rounded-lg p-6 border border-slate-300 mb-6">
          <div className="flex items-start gap-3">
            <Box className="h-5 w-5 text-slate-600 mt-0.5" />
            <div>
              <h3 className="text-sm text-slate-900 mb-2" style={{ fontWeight: 700 }}>
                TTDS Elevation (Shadows)
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Minimal shadows create subtle depth without overwhelming the clean design. Use sparingly 
                to highlight interactive or floating elements.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-white rounded border border-slate-300 text-slate-700">
                  {ELEVATION_TOKENS.length} tokens
                </span>
                <span className="px-2 py-1 bg-white rounded border border-slate-300 text-slate-700">
                  Minimal style
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ELEVATION_TOKENS.map((token) => (
            <div
              key={token.cssVar}
              className="bg-white border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-all"
            >
              {/* Visual Preview */}
              <div className="mb-4 flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-stone-50">
                <div
                  className="w-20 h-20 bg-white rounded-lg border border-slate-200"
                  style={{ boxShadow: token.value }}
                />
              </div>

              {/* Token Info */}
              <h4 className="text-sm text-slate-900 mb-1 text-center" style={{ fontWeight: 700 }}>
                {token.name}
              </h4>
              <p className="text-xs text-slate-600 mb-3 text-center">
                {token.usage}
              </p>

              {/* CSS Variable */}
              <div className="flex items-center gap-2 mb-2">
                <code className="flex-1 px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-900 font-mono overflow-x-auto whitespace-nowrap">
                  var({token.cssVar})
                </code>
                <button
                  onClick={() => copyToClipboard(`var(${token.cssVar})`, token.cssVar)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-colors"
                  title="Copy CSS variable"
                >
                  {copiedToken === token.cssVar ? (
                    <Check className="h-4 w-4 text-slate-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Tailwind Class */}
              <div className="text-center">
                <code className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-xs text-slate-700 font-mono">
                  {token.name === 'Elevation None' ? 'shadow-none' :
                   token.name === 'Elevation SM' ? 'shadow-sm' :
                   'shadow-md'}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Combined Example */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
          Radius + Elevation Combined
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div
              className="w-full h-32 bg-gradient-to-br from-emerald-400 to-teal-500 mb-3 flex items-center justify-center text-white"
              style={{ 
                borderRadius: RADIUS_TOKENS[0].value,
                boxShadow: ELEVATION_TOKENS[1].value 
              }}
            >
              <div>
                <div className="text-sm" style={{ fontWeight: 700 }}>SM Radius</div>
                <div className="text-xs opacity-90">SM Elevation</div>
              </div>
            </div>
            <div className="text-xs text-slate-600">Small components</div>
          </div>
          
          <div className="text-center">
            <div
              className="w-full h-32 bg-gradient-to-br from-blue-400 to-indigo-500 mb-3 flex items-center justify-center text-white"
              style={{ 
                borderRadius: RADIUS_TOKENS[1].value,
                boxShadow: ELEVATION_TOKENS[1].value 
              }}
            >
              <div>
                <div className="text-sm" style={{ fontWeight: 700 }}>MD Radius</div>
                <div className="text-xs opacity-90">SM Elevation</div>
              </div>
            </div>
            <div className="text-xs text-slate-600">Default cards</div>
          </div>
          
          <div className="text-center">
            <div
              className="w-full h-32 bg-gradient-to-br from-purple-400 to-pink-500 mb-3 flex items-center justify-center text-white"
              style={{ 
                borderRadius: RADIUS_TOKENS[2].value,
                boxShadow: ELEVATION_TOKENS[2].value 
              }}
            >
              <div>
                <div className="text-sm" style={{ fontWeight: 700 }}>LG Radius</div>
                <div className="text-xs opacity-90">MD Elevation</div>
              </div>
            </div>
            <div className="text-xs text-slate-600">Modals, panels</div>
          </div>
        </div>
      </div>
    </div>
  );
}
