import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export interface ComponentResult {
  id: string;
  name: string;
  category: string;
  description: string;
  href: string;
  docStatus: 'complete' | 'partial' | 'none';
  tags?: string[];
}

interface SearchResultsProps {
  results: ComponentResult[];
  searchQuery: string;
  onResultClick?: (result: ComponentResult) => void;
}

export function SearchResults({ results, searchQuery, onResultClick }: SearchResultsProps) {
  if (results.length === 0 && searchQuery) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg p-8 text-center">
        <div className="max-w-sm mx-auto">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
            <ExternalLink className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-lg text-slate-900 mb-2" style={{ fontWeight: 700 }}>
            No components found
          </h3>
          <p className="text-sm text-slate-600">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-slate-900">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Primitives': 'bg-slate-100 text-slate-700',
      'Navigation': 'bg-teal-100 text-teal-700',
      'Panels': 'bg-purple-100 text-purple-700',
      'Domain Cards': 'bg-emerald-100 text-emerald-700',
      'Sections': 'bg-orange-100 text-orange-700',
      'Templates': 'bg-rose-100 text-rose-700',
      'Site Pages': 'bg-blue-100 text-blue-700',
      'Salesforce': 'bg-indigo-100 text-indigo-700'
    };
    return colors[category] || 'bg-slate-100 text-slate-700';
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'complete': 'bg-emerald-100 text-emerald-700 border-emerald-300',
      'partial': 'bg-amber-100 text-amber-700 border-amber-300',
      'none': 'bg-slate-100 text-slate-600 border-slate-300'
    };
    return colors[status] || 'bg-slate-100 text-slate-600 border-slate-300';
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-slate-600">
          Found <span className="text-slate-900" style={{ fontWeight: 700 }}>{results.length}</span> component{results.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {results.map((result) => (
          <a
            key={result.id}
            href={result.href}
            onClick={(e) => {
              if (onResultClick) {
                e.preventDefault();
                onResultClick(result);
              }
            }}
            className="group bg-white border border-slate-200 rounded-lg p-4 hover:border-emerald-300 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-sm text-slate-900 group-hover:text-emerald-600 transition-colors" style={{ fontWeight: 700 }}>
                    {highlightMatch(result.name, searchQuery)}
                  </h3>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${getCategoryColor(result.category)}`}>
                    {result.category}
                  </span>
                </div>
                
                <p className="text-xs text-slate-600 mb-2 line-clamp-2">
                  {highlightMatch(result.description, searchQuery)}
                </p>

                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 text-xs rounded border ${getStatusColor(result.docStatus)}`}>
                    {result.docStatus === 'complete' ? 'Documented' : 
                     result.docStatus === 'partial' ? 'Partial Docs' : 
                     'No Docs'}
                  </span>
                  
                  {result.tags && result.tags.length > 0 && (
                    <div className="flex items-center gap-1">
                      {result.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-1.5 py-0.5 text-xs text-slate-500 bg-slate-100 rounded">
                          {tag}
                        </span>
                      ))}
                      {result.tags.length > 3 && (
                        <span className="text-xs text-slate-400">
                          +{result.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
