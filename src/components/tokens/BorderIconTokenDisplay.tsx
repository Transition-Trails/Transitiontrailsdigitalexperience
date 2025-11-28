import React from 'react';
import { Copy, Check, Frame, Maximize, Package, Mail, Heart, Star, Settings, User, Bell, Search, Filter, Download, Upload, Edit, Trash2, Eye, EyeOff, Lock, Unlock, Calendar, Clock, MapPin, Globe, Home, Phone, MessageCircle, Camera, Image, FileText, Folder, File, Link, Share2, ArrowRight, ChevronRight, Plus, Minus, X, Check as CheckIcon, AlertCircle, Info, HelpCircle, Zap } from 'lucide-react';

interface BorderToken {
  name: string;
  cssVar: string;
  value: string;
  usage: string;
}

interface IconSize {
  name: string;
  cssVar: string;
  value: string;
  pixels: number;
  usage: string;
}

const BORDER_TOKENS: BorderToken[] = [
  { name: 'Border Default', cssVar: '--ttds-border-default', value: '1px solid #E2E8F0', usage: 'Default borders, dividers' },
  { name: 'Border Strong', cssVar: '--ttds-border-strong', value: '2px solid #CBD5E1', usage: 'Emphasized borders, focus states' },
  { name: 'Border Focus', cssVar: '--ttds-border-focus', value: '2px solid #10B981', usage: 'Focus rings, active states' },
];

const ICON_SIZES: IconSize[] = [
  { name: 'Icon SM', cssVar: '--ttds-icon-sm', value: '1rem', pixels: 16, usage: 'Inline icons, buttons' },
  { name: 'Icon MD', cssVar: '--ttds-icon-md', value: '1.25rem', pixels: 20, usage: 'Default icons, navigation' },
  { name: 'Icon LG', cssVar: '--ttds-icon-lg', value: '1.5rem', pixels: 24, usage: 'Feature icons, hero sections' },
];

const SAMPLE_ICONS = [
  { Icon: Mail, name: 'Mail' },
  { Icon: Heart, name: 'Heart' },
  { Icon: Star, name: 'Star' },
  { Icon: Settings, name: 'Settings' },
  { Icon: User, name: 'User' },
  { Icon: Bell, name: 'Bell' },
  { Icon: Search, name: 'Search' },
  { Icon: Filter, name: 'Filter' },
  { Icon: Download, name: 'Download' },
  { Icon: Upload, name: 'Upload' },
  { Icon: Edit, name: 'Edit' },
  { Icon: Trash2, name: 'Trash' },
  { Icon: Eye, name: 'Eye' },
  { Icon: Lock, name: 'Lock' },
  { Icon: Calendar, name: 'Calendar' },
  { Icon: Clock, name: 'Clock' },
  { Icon: MapPin, name: 'MapPin' },
  { Icon: Globe, name: 'Globe' },
  { Icon: Home, name: 'Home' },
  { Icon: Phone, name: 'Phone' },
  { Icon: MessageCircle, name: 'Message' },
  { Icon: Camera, name: 'Camera' },
  { Icon: Image, name: 'Image' },
  { Icon: FileText, name: 'File' },
  { Icon: Folder, name: 'Folder' },
  { Icon: Link, name: 'Link' },
  { Icon: Share2, name: 'Share' },
  { Icon: ArrowRight, name: 'Arrow' },
  { Icon: Plus, name: 'Plus' },
  { Icon: X, name: 'Close' },
  { Icon: CheckIcon, name: 'Check' },
  { Icon: AlertCircle, name: 'Alert' },
  { Icon: Info, name: 'Info' },
  { Icon: HelpCircle, name: 'Help' },
  { Icon: Zap, name: 'Zap' },
];

export function BorderIconTokenDisplay() {
  const [copiedToken, setCopiedToken] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, tokenName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Border Tokens */}
      <div>
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 border border-orange-200 mb-6">
          <div className="flex items-start gap-3">
            <Frame className="h-5 w-5 text-orange-600 mt-0.5" />
            <div>
              <h3 className="text-sm text-slate-900 mb-2" style={{ fontWeight: 700 }}>
                TTDS Border Tokens
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Consistent border styles create clear boundaries and visual hierarchy. Use focus borders 
                to indicate interactive states and improve accessibility.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-white rounded border border-orange-200 text-orange-700">
                  {BORDER_TOKENS.length} tokens
                </span>
                <span className="px-2 py-1 bg-white rounded border border-orange-200 text-orange-700">
                  Focus states
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BORDER_TOKENS.map((token) => (
            <div
              key={token.cssVar}
              className="bg-white border border-slate-200 rounded-lg p-4 hover:border-orange-300 hover:shadow-md transition-all"
            >
              {/* Visual Preview */}
              <div className="mb-4 flex items-center justify-center p-4 bg-slate-50">
                <div
                  className="w-20 h-20 bg-white rounded-lg"
                  style={{ border: token.value }}
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
                  className="p-1.5 text-slate-400 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                  title="Copy CSS variable"
                >
                  {copiedToken === token.cssVar ? (
                    <Check className="h-4 w-4 text-orange-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Tailwind Class */}
              <div className="text-center">
                <code className="px-2 py-1 bg-orange-50 border border-orange-200 rounded text-xs text-orange-700 font-mono">
                  {token.name === 'Border Default' ? 'border border-slate-200' :
                   token.name === 'Border Strong' ? 'border-2 border-slate-300' :
                   'ring-2 ring-emerald-500'}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Icon Sizes */}
      <div>
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-6 border border-rose-200 mb-6">
          <div className="flex items-start gap-3">
            <Package className="h-5 w-5 text-rose-600 mt-0.5" />
            <div>
              <h3 className="text-sm text-slate-900 mb-2" style={{ fontWeight: 700 }}>
                TTDS Icon Sizes
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Consistent icon sizing ensures visual harmony. We use lucide-react icons throughout 
                the system. Icons should always be paired with text labels for accessibility.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-white rounded border border-rose-200 text-rose-700">
                  {ICON_SIZES.length} sizes
                </span>
                <span className="px-2 py-1 bg-white rounded border border-rose-200 text-rose-700">
                  Lucide icons
                </span>
                <span className="px-2 py-1 bg-white rounded border border-rose-200 text-rose-700">
                  {SAMPLE_ICONS.length}+ available
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {ICON_SIZES.map((size) => (
            <div
              key={size.cssVar}
              className="bg-white border border-slate-200 rounded-lg p-4 hover:border-rose-300 hover:shadow-md transition-all"
            >
              {/* Visual Preview */}
              <div className="mb-4 flex items-center justify-center p-4 bg-slate-50">
                <Star
                  className="text-rose-500"
                  style={{ 
                    width: size.value, 
                    height: size.value 
                  }}
                />
              </div>

              {/* Size Info */}
              <h4 className="text-sm text-slate-900 mb-1 text-center" style={{ fontWeight: 700 }}>
                {size.name}
              </h4>
              <p className="text-xs text-slate-600 mb-3 text-center">
                {size.usage}
              </p>

              <div className="text-center mb-3">
                <div className="text-lg text-rose-600 font-mono" style={{ fontWeight: 700 }}>
                  {size.pixels}px
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  {size.value}
                </div>
              </div>

              {/* CSS Variable */}
              <div className="flex items-center gap-2 mb-2">
                <code className="flex-1 px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-900 font-mono">
                  var({size.cssVar})
                </code>
                <button
                  onClick={() => copyToClipboard(`var(${size.cssVar})`, size.cssVar)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors"
                  title="Copy CSS variable"
                >
                  {copiedToken === size.cssVar ? (
                    <Check className="h-4 w-4 text-rose-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Tailwind/React Class */}
              <div className="text-center">
                <code className="px-2 py-1 bg-rose-50 border border-rose-200 rounded text-xs text-rose-700 font-mono">
                  {size.name === 'Icon SM' ? 'className="h-4 w-4"' :
                   size.name === 'Icon MD' ? 'className="h-5 w-5"' :
                   'className="h-6 w-6"'}
                </code>
              </div>
            </div>
          ))}
        </div>

        {/* Icon Library Preview */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
            Icon Library (Lucide React)
          </h3>
          <p className="text-xs text-slate-600 mb-4">
            Sample of commonly used icons. View full library at{' '}
            <a 
              href="https://lucide.dev/icons" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 underline"
            >
              lucide.dev
            </a>
          </p>

          <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-10 gap-4">
            {SAMPLE_ICONS.map(({ Icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                title={name}
              >
                <Icon className="h-6 w-6 text-slate-600 group-hover:text-rose-500 transition-colors" />
                <span className="text-xs text-slate-500 text-center truncate w-full">
                  {name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-xs text-blue-900">
              <span style={{ fontWeight: 700 }}>Usage:</span> Import from 'lucide-react' like{' '}
              <code className="px-1 py-0.5 bg-white rounded text-xs font-mono">
                import {'{ Star, Heart }'} from 'lucide-react'
              </code>
            </p>
          </div>
        </div>
      </div>

      {/* Accessibility Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h3 className="text-sm text-slate-900 mb-2" style={{ fontWeight: 700 }}>
          ⚠️ Accessibility: Never Use Icons Alone
        </h3>
        <p className="text-xs text-slate-700 mb-2">
          Icons must always be paired with text labels. Don't rely on icon-only meaning.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="bg-white rounded p-3 border border-green-300">
            <div className="flex items-center gap-2 text-xs text-green-700 mb-1" style={{ fontWeight: 700 }}>
              <CheckIcon className="h-4 w-4" /> Good
            </div>
            <button className="flex items-center gap-2 px-3 py-2 bg-emerald-500 text-white rounded-lg text-xs">
              <Download className="h-4 w-4" />
              Download
            </button>
          </div>
          <div className="bg-white rounded p-3 border border-red-300">
            <div className="flex items-center gap-2 text-xs text-red-700 mb-1" style={{ fontWeight: 700 }}>
              <X className="h-4 w-4" /> Bad
            </div>
            <button className="p-2 bg-emerald-500 text-white rounded-lg">
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
