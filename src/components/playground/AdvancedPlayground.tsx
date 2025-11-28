import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Layers,
  BookOpen,
  Zap
} from 'lucide-react';

interface PlaygroundTip {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
}

export const AdvancedPlaygroundFeatures: React.FC = () => {
  const tips: PlaygroundTip[] = [
    {
      title: 'Real-Time Updates',
      description: 'See your changes instantly as you modify component props. No need to refresh or rebuild.',
      icon: Zap,
      color: 'text-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    },
    {
      title: 'Code Generation',
      description: 'Automatically generates clean, copy-ready React/TSX code based on your current configuration.',
      icon: Code2,
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    {
      title: 'Component Library',
      description: 'Access to all TTDS primitives and domain components. More components added regularly.',
      icon: Layers,
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Learning Tool',
      description: 'Perfect for understanding how props affect components. Great for onboarding and experimentation.',
      icon: BookOpen,
      color: 'text-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <div className="mt-8 space-y-6">
      {/* Features Grid */}
      <div>
        <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
          Playground Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div 
                key={index}
                className={`${tip.bgColor} rounded-lg p-5 border ${tip.borderColor}`}
              >
                <div className={`p-2 ${tip.color} bg-white rounded-lg w-fit mb-3`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className={`text-sm ${tip.color} mb-2`} style={{ fontWeight: 700 }}>
                  {tip.title}
                </h4>
                <p className="text-xs text-slate-600">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-purple-500 text-white rounded-lg">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm text-purple-900 mb-2" style={{ fontWeight: 700 }}>
              Coming Soon to Playground
            </h4>
            <ul className="space-y-1 text-xs text-purple-800">
              <li>• <strong>Complex Domain Cards:</strong> Event Session, Partner Project, and Community Post cards</li>
              <li>• <strong>Template Previews:</strong> Full page template configurations</li>
              <li>• <strong>Theme Switching:</strong> Test components in light and dark modes</li>
              <li>• <strong>Responsive Preview:</strong> See components at different breakpoints</li>
              <li>• <strong>Accessibility Checker:</strong> Real-time WCAG compliance validation</li>
              <li>• <strong>Share Configurations:</strong> Generate shareable links to your component setups</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
        <h4 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
          How to Use the Playground
        </h4>
        <div className="space-y-3 text-sm text-slate-700">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs" style={{ fontWeight: 700 }}>
              1
            </div>
            <div>
              <strong>Select a Component</strong> from the dropdown menu to load it into the playground
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs" style={{ fontWeight: 700 }}>
              2
            </div>
            <div>
              <strong>Adjust Props</strong> using the controls in the Props Editor panel
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs" style={{ fontWeight: 700 }}>
              3
            </div>
            <div>
              <strong>Watch the Preview</strong> update in real-time as you modify props
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs" style={{ fontWeight: 700 }}>
              4
            </div>
            <div>
              <strong>Copy the Code</strong> when you're happy with the result and use it in your project
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
