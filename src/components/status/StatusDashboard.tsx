import React, { useState } from 'react';
import { 
  ComponentStatusBadge, 
  componentRegistry, 
  getStatusStats, 
  getComponentsByCategory,
  getComponentsByStatus,
  ComponentStatusType,
  ComponentMetadata 
} from './ComponentStatus';
import { 
  Package, 
  Navigation, 
  Layout, 
  CreditCard, 
  Layers, 
  FileText,
  Filter,
  CheckCircle2,
  TrendingUp,
  Database,
  Search
} from 'lucide-react';

type FilterType = 'all' | ComponentStatusType;
type CategoryFilter = 'all' | ComponentMetadata['category'];

export const StatusDashboard: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<FilterType>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = getStatusStats();

  const getCategoryIcon = (category: ComponentMetadata['category']) => {
    switch (category) {
      case 'primitive': return Package;
      case 'navigation': return Navigation;
      case 'panel': return Layout;
      case 'card': return CreditCard;
      case 'section': return Layers;
      case 'template': return FileText;
    }
  };

  const getCategoryColor = (category: ComponentMetadata['category']) => {
    switch (category) {
      case 'primitive': return 'text-slate-600 bg-slate-50 border-slate-200';
      case 'navigation': return 'text-teal-600 bg-teal-50 border-teal-200';
      case 'panel': return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'card': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'section': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'template': return 'text-rose-600 bg-rose-50 border-rose-200';
    }
  };

  const filteredComponents = componentRegistry.filter(component => {
    // Status filter
    if (statusFilter !== 'all' && component.status !== statusFilter) {
      return false;
    }

    // Category filter
    if (categoryFilter !== 'all' && component.category !== categoryFilter) {
      return false;
    }

    // Search filter
    if (searchQuery && !component.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    return true;
  });

  const categories: Array<{ id: CategoryFilter; name: string }> = [
    { id: 'all', name: 'All' },
    { id: 'primitive', name: 'Primitives' },
    { id: 'navigation', name: 'Navigation' },
    { id: 'panel', name: 'Panels' },
    { id: 'card', name: 'Cards' },
    { id: 'section', name: 'Sections' },
    { id: 'template', name: 'Templates' }
  ];

  const statusFilters: Array<{ id: FilterType; name: string; count: number }> = [
    { id: 'all', name: 'All', count: stats.total },
    { id: 'complete', name: 'Complete', count: stats.complete },
    { id: 'salesforce-ready', name: 'Salesforce Ready', count: stats.salesforceReady },
    { id: 'needs-lwc', name: 'Needs LWC', count: stats.needsLWC },
    { id: 'in-progress', name: 'In Progress', count: stats.inProgress },
    { id: 'planned', name: 'Planned', count: stats.planned }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-500 text-white rounded-lg">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl text-slate-900 mb-2" style={{ fontWeight: 700 }}>
              Component Status Dashboard
            </h1>
            <p className="text-sm text-slate-700 mb-4">
              Track implementation progress across all TTDS components. See which components are complete,
              in development, or ready for Salesforce integration.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="text-2xl text-slate-900 mb-1" style={{ fontWeight: 700 }}>
                  {stats.total}
                </div>
                <div className="text-xs text-slate-600">Total Components</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <div className="text-2xl text-emerald-600 mb-1" style={{ fontWeight: 700 }}>
                  {stats.complete}
                </div>
                <div className="text-xs text-emerald-700">✅ Complete</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="text-2xl text-purple-600 mb-1" style={{ fontWeight: 700 }}>
                  {stats.salesforceReady}
                </div>
                <div className="text-xs text-purple-700">⚡ Salesforce Ready</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-2xl text-blue-600 mb-1" style={{ fontWeight: 700 }}>
                  {stats.needsLWC}
                </div>
                <div className="text-xs text-blue-700">📝 Needs LWC</div>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <div className="text-2xl text-amber-600 mb-1" style={{ fontWeight: 700 }}>
                  {stats.inProgress}
                </div>
                <div className="text-xs text-amber-700">🚧 In Progress</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-700" style={{ fontWeight: 600 }}>
                  Overall Progress
                </span>
                <span className="text-xs text-slate-600">
                  {stats.complete + stats.salesforceReady} / {stats.total} components ready
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div className="flex h-full">
                  <div 
                    className="bg-emerald-500"
                    style={{ width: `${(stats.complete / stats.total) * 100}%` }}
                    title={`${stats.complete} Complete`}
                  />
                  <div 
                    className="bg-purple-500"
                    style={{ width: `${(stats.salesforceReady / stats.total) * 100}%` }}
                    title={`${stats.salesforceReady} Salesforce Ready`}
                  />
                  <div 
                    className="bg-blue-400"
                    style={{ width: `${(stats.needsLWC / stats.total) * 100}%` }}
                    title={`${stats.needsLWC} Needs LWC`}
                  />
                  <div 
                    className="bg-amber-400"
                    style={{ width: `${(stats.inProgress / stats.total) * 100}%` }}
                    title={`${stats.inProgress} In Progress`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-sm"
            />
          </div>

          {/* Category Filter */}
          <div>
            <div className="text-xs text-slate-600 mb-2" style={{ fontWeight: 600 }}>
              Category
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setCategoryFilter(category.id)}
                  className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
                    categoryFilter === category.id
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                  }`}
                  style={{ fontWeight: categoryFilter === category.id ? 700 : 500 }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <div className="text-xs text-slate-600 mb-2" style={{ fontWeight: 600 }}>
              Status
            </div>
            <div className="flex flex-wrap gap-2">
              {statusFilters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setStatusFilter(filter.id)}
                  className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
                    statusFilter === filter.id
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                  }`}
                  style={{ fontWeight: statusFilter === filter.id ? 700 : 500 }}
                >
                  {filter.name} ({filter.count})
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters Summary */}
          {(statusFilter !== 'all' || categoryFilter !== 'all' || searchQuery) && (
            <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
              <span className="text-xs text-slate-600">
                Showing {filteredComponents.length} of {stats.total} components
              </span>
              <button
                onClick={() => {
                  setStatusFilter('all');
                  setCategoryFilter('all');
                  setSearchQuery('');
                }}
                className="text-xs text-emerald-600 hover:text-emerald-700"
                style={{ fontWeight: 600 }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Component List */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs text-slate-700" style={{ fontWeight: 700 }}>
                  Component
                </th>
                <th className="text-left px-6 py-3 text-xs text-slate-700" style={{ fontWeight: 700 }}>
                  Category
                </th>
                <th className="text-left px-6 py-3 text-xs text-slate-700" style={{ fontWeight: 700 }}>
                  Status
                </th>
                <th className="text-left px-6 py-3 text-xs text-slate-700" style={{ fontWeight: 700 }}>
                  Implementation
                </th>
                <th className="text-left px-6 py-3 text-xs text-slate-700" style={{ fontWeight: 700 }}>
                  Salesforce
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredComponents.map((component, index) => {
                const CategoryIcon = getCategoryIcon(component.category);
                const categoryColor = getCategoryColor(component.category);
                
                return (
                  <tr 
                    key={component.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm text-slate-900" style={{ fontWeight: 600 }}>
                          {component.name}
                        </div>
                        {component.description && (
                          <div className="text-xs text-slate-600 mt-0.5">
                            {component.description}
                          </div>
                        )}
                        {component.tags && component.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {component.tags.map(tag => (
                              <span 
                                key={tag}
                                className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border ${categoryColor} text-xs`}>
                        <CategoryIcon className="h-3.5 w-3.5" />
                        <span style={{ fontWeight: 600 }}>
                          {component.category.charAt(0).toUpperCase() + component.category.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <ComponentStatusBadge status={component.status} size="md" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <div className={`h-2 w-2 rounded-full ${component.designComplete ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                          <span className="text-xs text-slate-600">Design</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className={`h-2 w-2 rounded-full ${component.codeComplete ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                          <span className="text-xs text-slate-600">Code</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <div className={`h-2 w-2 rounded-full ${component.lwcAvailable ? 'bg-purple-500' : 'bg-slate-300'}`} />
                          <span className="text-xs text-slate-600">LWC</span>
                        </div>
                        {component.salesforceObjectsMapped && (
                          <div className="flex items-center gap-1.5">
                            <Database className="h-3 w-3 text-blue-600" />
                            <span className="text-xs text-blue-700" style={{ fontWeight: 600 }}>
                              Objects Mapped
                            </span>
                          </div>
                        )}
                        {component.dependencies && component.dependencies.length > 0 && (
                          <div className="text-xs text-slate-500 mt-1">
                            {component.dependencies.slice(0, 2).join(', ')}
                            {component.dependencies.length > 2 && ` +${component.dependencies.length - 2}`}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filteredComponents.length === 0 && (
            <div className="text-center py-12">
              <Filter className="h-12 w-12 text-slate-300 mx-auto mb-3" />
              <p className="text-sm text-slate-600">
                No components match your filters
              </p>
              <button
                onClick={() => {
                  setStatusFilter('all');
                  setCategoryFilter('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-sm text-emerald-600 hover:text-emerald-700"
                style={{ fontWeight: 600 }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
        <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
          Status Legend
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <ComponentStatusBadge status="complete" size="md" />
            <p className="text-xs text-slate-600">
              Design and code are fully complete and production-ready. No Salesforce conversion needed yet.
            </p>
          </div>
          <div className="space-y-2">
            <ComponentStatusBadge status="salesforce-ready" size="md" />
            <p className="text-xs text-slate-600">
              Component has been converted to Lightning Web Component and is ready for Salesforce deployment.
            </p>
          </div>
          <div className="space-y-2">
            <ComponentStatusBadge status="needs-lwc" size="md" />
            <p className="text-xs text-slate-600">
              React component is complete but requires conversion to LWC for Salesforce integration.
            </p>
          </div>
          <div className="space-y-2">
            <ComponentStatusBadge status="in-progress" size="md" />
            <p className="text-xs text-slate-600">
              Component is currently in active development. Design or code may be incomplete.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
