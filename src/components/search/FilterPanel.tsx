import React from 'react';
import { Filter, ChevronDown, ChevronUp, CheckCircle, Circle } from 'lucide-react';

export type FilterCategory = 'all' | 'primitives' | 'navigation' | 'panels' | 'cards' | 'sections' | 'templates' | 'pages' | 'salesforce';
export type FilterStatus = 'all' | 'documented' | 'partial' | 'none';

interface FilterPanelProps {
  selectedCategory: FilterCategory;
  selectedStatus: FilterStatus;
  onCategoryChange: (category: FilterCategory) => void;
  onStatusChange: (status: FilterStatus) => void;
  showTags?: boolean;
  selectedTags?: string[];
  onTagToggle?: (tag: string) => void;
}

export function FilterPanel({
  selectedCategory,
  selectedStatus,
  onCategoryChange,
  onStatusChange,
  showTags = false,
  selectedTags = [],
  onTagToggle
}: FilterPanelProps) {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const categories: Array<{ value: FilterCategory; label: string; color: string }> = [
    { value: 'all', label: 'All Components', color: 'bg-slate-100 text-slate-700' },
    { value: 'primitives', label: '🔹 Primitives', color: 'bg-slate-100 text-slate-700' },
    { value: 'navigation', label: '🧭 Navigation', color: 'bg-teal-100 text-teal-700' },
    { value: 'panels', label: '📊 Panels', color: 'bg-purple-100 text-purple-700' },
    { value: 'cards', label: '🎴 Domain Cards', color: 'bg-emerald-100 text-emerald-700' },
    { value: 'sections', label: '🏗️ Sections', color: 'bg-orange-100 text-orange-700' },
    { value: 'templates', label: '📄 Templates', color: 'bg-rose-100 text-rose-700' },
    { value: 'pages', label: '🌐 Site Pages', color: 'bg-blue-100 text-blue-700' },
    { value: 'salesforce', label: '⚡ Salesforce', color: 'bg-indigo-100 text-indigo-700' }
  ];

  const statuses: Array<{ value: FilterStatus; label: string; icon: typeof CheckCircle }> = [
    { value: 'all', label: 'All Statuses', icon: Filter },
    { value: 'documented', label: 'Documented', icon: CheckCircle },
    { value: 'partial', label: 'Partial Docs', icon: Circle },
    { value: 'none', label: 'No Docs', icon: Circle }
  ];

  const availableTags = [
    'Accessibility',
    'Interactive',
    'Form',
    'Data Display',
    'Navigation',
    'Feedback',
    'Layout'
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-50 to-white hover:from-slate-100 hover:to-slate-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-slate-600" />
          <h3 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
            Filters
          </h3>
          {(selectedCategory !== 'all' || selectedStatus !== 'all' || selectedTags.length > 0) && (
            <span className="px-2 py-0.5 text-xs bg-emerald-100 text-emerald-700 rounded-full">
              {
                (selectedCategory !== 'all' ? 1 : 0) +
                (selectedStatus !== 'all' ? 1 : 0) +
                selectedTags.length
              } active
            </span>
          )}
        </div>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-slate-600" />
        ) : (
          <ChevronDown className="h-4 w-4 text-slate-600" />
        )}
      </button>

      {isExpanded && (
        <div className="p-4 border-t border-slate-200 space-y-4">
          {/* Category Filter */}
          <div>
            <h4 className="text-xs text-slate-600 mb-2" style={{ fontWeight: 700 }}>
              Category
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => onCategoryChange(category.value)}
                  className={`px-3 py-2 text-xs rounded-lg border transition-all ${
                    selectedCategory === category.value
                      ? `${category.color} border-current shadow-sm`
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                  style={{ fontWeight: selectedCategory === category.value ? 600 : 400 }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Documentation Status Filter */}
          <div>
            <h4 className="text-xs text-slate-600 mb-2" style={{ fontWeight: 700 }}>
              Documentation Status
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {statuses.map((status) => {
                const Icon = status.icon;
                return (
                  <button
                    key={status.value}
                    onClick={() => onStatusChange(status.value)}
                    className={`flex items-center gap-2 px-3 py-2 text-xs rounded-lg border transition-all ${
                      selectedStatus === status.value
                        ? 'bg-emerald-100 text-emerald-700 border-emerald-300 shadow-sm'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                    style={{ fontWeight: selectedStatus === status.value ? 600 : 400 }}
                  >
                    <Icon className="h-3 w-3" />
                    {status.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tags Filter */}
          {showTags && (
            <div>
              <h4 className="text-xs text-slate-600 mb-2" style={{ fontWeight: 700 }}>
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => onTagToggle?.(tag)}
                    className={`px-2 py-1 text-xs rounded border transition-all ${
                      selectedTags.includes(tag)
                        ? 'bg-blue-100 text-blue-700 border-blue-300'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Clear Filters */}
          {(selectedCategory !== 'all' || selectedStatus !== 'all' || selectedTags.length > 0) && (
            <button
              onClick={() => {
                onCategoryChange('all');
                onStatusChange('all');
                selectedTags.forEach(tag => onTagToggle?.(tag));
              }}
              className="w-full px-3 py-2 text-xs text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
              style={{ fontWeight: 600 }}
            >
              Clear All Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
