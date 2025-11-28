import React from 'react';
import { Palette, Maximize2, Type, Circle, Box, Frame, Package, Download, Code, Eye, ChevronRight } from 'lucide-react';
import { ColorTokenDisplay } from './ColorTokenDisplay';
import { SpacingTokenDisplay } from './SpacingTokenDisplay';
import { TypographyTokenDisplay } from './TypographyTokenDisplay';
import { RadiusElevationTokenDisplay } from './RadiusElevationTokenDisplay';
import { BorderIconTokenDisplay } from './BorderIconTokenDisplay';

type TokenCategory = 'overview' | 'colors' | 'spacing' | 'typography' | 'radius-elevation' | 'borders-icons';

export function DesignTokenVisualizer() {
  const [activeCategory, setActiveCategory] = React.useState<TokenCategory>('overview');

  const categories = [
    { id: 'overview' as TokenCategory, name: 'Overview', icon: Eye, color: 'bg-slate-100 text-slate-700 border-slate-300' },
    { id: 'colors' as TokenCategory, name: 'Colors', icon: Palette, color: 'bg-emerald-100 text-emerald-700 border-emerald-300' },
    { id: 'spacing' as TokenCategory, name: 'Spacing', icon: Maximize2, color: 'bg-purple-100 text-purple-700 border-purple-300' },
    { id: 'typography' as TokenCategory, name: 'Typography', icon: Type, color: 'bg-blue-100 text-blue-700 border-blue-300' },
    { id: 'radius-elevation' as TokenCategory, name: 'Radius & Elevation', icon: Circle, color: 'bg-teal-100 text-teal-700 border-teal-300' },
    { id: 'borders-icons' as TokenCategory, name: 'Borders & Icons', icon: Frame, color: 'bg-orange-100 text-orange-700 border-orange-300' },
  ];

  const tokenStats = {
    colors: 16,
    spacing: 7,
    typography: 8,
    radius: 3,
    elevation: 3,
    borders: 3,
    icons: 3
  };

  const totalTokens = Object.values(tokenStats).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6" id="design-tokens">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-8 text-white shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Palette className="h-8 w-8" />
              <h1 className="text-2xl" style={{ fontWeight: 700 }}>
                TTDS Design Token System
              </h1>
            </div>
            <p className="text-emerald-50 text-sm max-w-2xl">
              A complete visual reference of all design tokens in the Transition Trails Design System. 
              Use these tokens to maintain consistency across all components and applications.
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl mb-1" style={{ fontWeight: 700 }}>
              {totalTokens}
            </div>
            <div className="text-emerald-100 text-xs">Total Tokens</div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-xl" style={{ fontWeight: 700 }}>{tokenStats.colors}</div>
            <div className="text-emerald-100 text-xs">Colors</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-xl" style={{ fontWeight: 700 }}>{tokenStats.spacing}</div>
            <div className="text-emerald-100 text-xs">Spacing</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-xl" style={{ fontWeight: 700 }}>{tokenStats.typography}</div>
            <div className="text-emerald-100 text-xs">Typography</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-xl" style={{ fontWeight: 700 }}>{tokenStats.radius}</div>
            <div className="text-emerald-100 text-xs">Radius</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-xl" style={{ fontWeight: 700 }}>{tokenStats.elevation}</div>
            <div className="text-emerald-100 text-xs">Elevation</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-xl" style={{ fontWeight: 700 }}>{tokenStats.borders}</div>
            <div className="text-emerald-100 text-xs">Borders</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-xl" style={{ fontWeight: 700 }}>{tokenStats.icons}</div>
            <div className="text-emerald-100 text-xs">Icon Sizes</div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  isActive
                    ? `${category.color} shadow-sm`
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
                style={{ fontWeight: isActive ? 700 : 500 }}
              >
                <Icon className="h-4 w-4" />
                {category.name}
                {isActive && <ChevronRight className="h-4 w-4" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        {activeCategory === 'overview' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg text-slate-900 mb-3" style={{ fontWeight: 700 }}>
                Token-Driven Design System
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                The TTDS is built on design tokens - reusable values that ensure consistency across 
                all components. Tokens are implemented as CSS variables and can be used directly in 
                your styles or through Tailwind utility classes.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-emerald-500 text-white rounded-lg">
                    <Code className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
                    Consistency
                  </h3>
                </div>
                <p className="text-xs text-slate-600">
                  Use the same values everywhere. No more guessing hex codes or pixel values.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-blue-500 text-white rounded-lg">
                    <Palette className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
                    Themeable
                  </h3>
                </div>
                <p className="text-xs text-slate-600">
                  CSS variables enable easy theme switching and brand customization.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-purple-500 text-white rounded-lg">
                    <Package className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
                    Scalable
                  </h3>
                </div>
                <p className="text-xs text-slate-600">
                  Update once, reflect everywhere. Perfect for growing design systems.
                </p>
              </div>
            </div>

            {/* Usage Guide */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
                How to Use Design Tokens
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs text-slate-700 mb-2" style={{ fontWeight: 700 }}>
                    1. CSS Variables (Recommended)
                  </h4>
                  <div className="px-4 py-3 bg-white border border-slate-200 rounded text-xs font-mono">
                    <div>.my-component {'{'}</div>
                    <div>{'  '}background-color: var(--ttds-color-surface-0);</div>
                    <div>{'  '}padding: var(--ttds-space-16);</div>
                    <div>{'  '}border-radius: var(--ttds-radius-md);</div>
                    <div>{'}'}</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs text-slate-700 mb-2" style={{ fontWeight: 700 }}>
                    2. Tailwind Classes
                  </h4>
                  <div className="px-4 py-3 bg-white border border-slate-200 rounded text-xs font-mono">
                    &lt;div className=&quot;bg-white p-4 rounded-lg border border-slate-200&quot;&gt;
                  </div>
                </div>

                <div>
                  <h4 className="text-xs text-slate-700 mb-2" style={{ fontWeight: 700 }}>
                    3. Inline Styles (When Necessary)
                  </h4>
                  <div className="px-4 py-3 bg-white border border-slate-200 rounded text-xs font-mono">
                    &lt;div style=&#123;&#123; padding: &quot;var(--ttds-space-16)&quot; &#125;&#125;&gt;
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categories.slice(1).map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-3 p-4 rounded-lg border transition-all hover:shadow-md ${category.color}`}
                  >
                    <Icon className="h-5 w-5" />
                    <div className="text-left">
                      <div className="text-sm" style={{ fontWeight: 700 }}>
                        {category.name}
                      </div>
                      <div className="text-xs opacity-75">
                        View tokens
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {activeCategory === 'colors' && <ColorTokenDisplay />}
        {activeCategory === 'spacing' && <SpacingTokenDisplay />}
        {activeCategory === 'typography' && <TypographyTokenDisplay />}
        {activeCategory === 'radius-elevation' && <RadiusElevationTokenDisplay />}
        {activeCategory === 'borders-icons' && <BorderIconTokenDisplay />}
      </div>

      {/* Quick Reference */}
      <div className="bg-gradient-to-r from-slate-50 to-stone-100 rounded-lg p-6 border border-slate-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-sm text-slate-900 mb-2" style={{ fontWeight: 700 }}>
              Quick Reference
            </h3>
            <p className="text-xs text-slate-600">
              All tokens are defined in <code className="px-1 py-0.5 bg-white rounded text-xs font-mono">/styles/globals.css</code>
            </p>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors">
            <Download className="h-3 w-3" />
            Export Tokens
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="text-xs text-slate-700 mb-2" style={{ fontWeight: 700 }}>
              Key Principles
            </h4>
            <ul className="text-xs text-slate-600 space-y-1">
              <li>• Always use tokens, never hard-coded values</li>
              <li>• Use CSS variables for consistency</li>
              <li>• Follow WCAG AA contrast requirements</li>
              <li>• Pair icons with text labels</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="text-xs text-slate-700 mb-2" style={{ fontWeight: 700 }}>
              Guidelines Reference
            </h4>
            <p className="text-xs text-slate-600">
              For complete TTDS guidelines including design philosophy, component architecture, 
              and templates, see <code className="px-1 py-0.5 bg-slate-100 rounded font-mono">/guidelines/Guidelines.md</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
