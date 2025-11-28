import React from 'react';
import { Lightbulb, MapPin, Layout } from 'lucide-react';

interface UsageExampleProps {
  title: string;
  description: string;
  context: string;
  icon?: 'page' | 'section' | 'pattern';
}

export function UsageExample({ 
  title, 
  description, 
  context,
  icon = 'pattern'
}: UsageExampleProps) {
  const iconMap = {
    page: Layout,
    section: MapPin,
    pattern: Lightbulb,
  };

  const IconComponent = iconMap[icon];

  const colorMap = {
    page: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
      icon: 'text-purple-600'
    },
    section: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      icon: 'text-blue-600'
    },
    pattern: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
      icon: 'text-amber-600'
    }
  };

  const colors = colorMap[icon];

  return (
    <div className={`${colors.bg} ${colors.border} border rounded-lg p-4`}>
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
          <IconComponent className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <h5 className={`text-sm ${colors.text} mb-1`} style={{ fontWeight: 700 }}>
            {title}
          </h5>
          <p className="text-xs text-slate-700 mb-2 leading-relaxed">
            {description}
          </p>
          <div className="text-xs text-slate-600 bg-white bg-opacity-60 rounded px-2 py-1 inline-block">
            <span className="opacity-60">Used in:</span> {context}
          </div>
        </div>
      </div>
    </div>
  );
}

interface UsageExamplesProps {
  examples?: Array<{
    title: string;
    description: string;
    context: string;
    icon?: 'page' | 'section' | 'pattern';
  }>;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function UsageExamples({ examples, title, description, children }: UsageExamplesProps) {
  // If using the new format with title, description, and children
  if (title || description || children) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
        {title && (
          <h4 className="text-sm text-slate-700 mb-2" style={{ fontWeight: 700 }}>
            {title}
          </h4>
        )}
        {description && (
          <p className="text-xs text-slate-600 mb-3">
            {description}
          </p>
        )}
        {children && (
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            {children}
          </div>
        )}
      </div>
    );
  }

  // Original format with examples array
  return (
    <div className="space-y-3">
      <h4 className="text-sm text-slate-700 mb-3" style={{ fontWeight: 700 }}>
        Real-World Usage Examples
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {examples && examples.map((example, index) => (
          <UsageExample key={index} {...example} />
        ))}
      </div>
    </div>
  );
}
