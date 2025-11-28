import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ComponentDocSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function ComponentDocSection({ 
  title, 
  children,
  defaultExpanded = false 
}: ComponentDocSectionProps) {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-50 to-white hover:from-slate-100 hover:to-slate-50 transition-colors"
      >
        <h4 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
          {title}
        </h4>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-slate-600" />
        ) : (
          <ChevronDown className="h-4 w-4 text-slate-600" />
        )}
      </button>
      {isExpanded && (
        <div className="px-4 py-4 border-t border-slate-200">
          {children}
        </div>
      )}
    </div>
  );
}
