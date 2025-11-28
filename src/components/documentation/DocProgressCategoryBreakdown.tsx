import React from 'react';
import { 
  componentRegistry, 
  ComponentMetadata 
} from '../status/ComponentStatus';
import { 
  Box, 
  Navigation, 
  Layout, 
  CreditCard, 
  Layers, 
  FileText 
} from 'lucide-react';

interface CategoryStats {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  total: number;
  documented: number;
  partial: number;
  color: string;
  bgColor: string;
  borderColor: string;
}

const getCategoryIcon = (category: ComponentMetadata['category']) => {
  switch (category) {
    case 'primitive': return Box;
    case 'navigation': return Navigation;
    case 'panel': return Layout;
    case 'card': return CreditCard;
    case 'section': return Layers;
    case 'template': return FileText;
    default: return Box;
  }
};

const getCategoryColor = (category: ComponentMetadata['category']) => {
  switch (category) {
    case 'primitive':
      return {
        color: 'text-blue-700',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        progressColor: 'bg-blue-500'
      };
    case 'navigation':
      return {
        color: 'text-purple-700',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        progressColor: 'bg-purple-500'
      };
    case 'panel':
      return {
        color: 'text-teal-700',
        bgColor: 'bg-teal-50',
        borderColor: 'border-teal-200',
        progressColor: 'bg-teal-500'
      };
    case 'card':
      return {
        color: 'text-emerald-700',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        progressColor: 'bg-emerald-500'
      };
    case 'section':
      return {
        color: 'text-amber-700',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200',
        progressColor: 'bg-amber-500'
      };
    case 'template':
      return {
        color: 'text-rose-700',
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-200',
        progressColor: 'bg-rose-500'
      };
  }
};

export const DocProgressCategoryBreakdown: React.FC = () => {
  const categories: ComponentMetadata['category'][] = [
    'primitive',
    'navigation',
    'panel',
    'card',
    'section',
    'template'
  ];

  const categoryStats: CategoryStats[] = categories.map(category => {
    const components = componentRegistry.filter(c => c.category === category);
    const documented = components.filter(c => 
      c.status === 'complete' || c.status === 'salesforce-ready' || c.status === 'needs-lwc'
    ).length;
    const partial = components.filter(c => c.status === 'in-progress').length;
    const colors = getCategoryColor(category);

    return {
      name: category.charAt(0).toUpperCase() + category.slice(1) + 's',
      icon: getCategoryIcon(category),
      total: components.length,
      documented,
      partial,
      color: colors.color,
      bgColor: colors.bgColor,
      borderColor: colors.borderColor,
      progressColor: colors.progressColor
    };
  });

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <div className="mb-4">
        <h4 className="text-sm text-slate-900 mb-1" style={{ fontWeight: 700 }}>
          Documentation by Category
        </h4>
        <p className="text-xs text-slate-600">
          Track progress across component categories
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryStats.map((stat) => {
          const Icon = stat.icon;
          const percentage = stat.total > 0 
            ? Math.round((stat.documented / stat.total) * 100) 
            : 0;

          return (
            <div 
              key={stat.name}
              className={`${stat.bgColor} rounded-lg p-4 border ${stat.borderColor}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`p-1.5 bg-white rounded ${stat.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h5 className={`text-xs ${stat.color} mb-0.5`} style={{ fontWeight: 700 }}>
                    {stat.name}
                  </h5>
                  <p className="text-xs text-slate-600">
                    {stat.documented}/{stat.total} complete
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-white rounded-full overflow-hidden border border-slate-200 mb-2">
                <div 
                  className={`h-full ${stat.progressColor} transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                />
              </div>

              {/* Percentage */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">{percentage}% documented</span>
                {stat.partial > 0 && (
                  <span className="text-amber-600" style={{ fontWeight: 600 }}>
                    +{stat.partial} partial
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 pt-6 border-t border-slate-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl text-slate-900 mb-1" style={{ fontWeight: 700 }}>
              {categoryStats.reduce((sum, cat) => sum + cat.total, 0)}
            </div>
            <div className="text-xs text-slate-600">Total Components</div>
          </div>
          <div>
            <div className="text-2xl text-emerald-600 mb-1" style={{ fontWeight: 700 }}>
              {categoryStats.reduce((sum, cat) => sum + cat.documented, 0)}
            </div>
            <div className="text-xs text-slate-600">Documented</div>
          </div>
          <div>
            <div className="text-2xl text-amber-600 mb-1" style={{ fontWeight: 700 }}>
              {categoryStats.reduce((sum, cat) => sum + cat.partial, 0)}
            </div>
            <div className="text-xs text-slate-600">In Progress</div>
          </div>
        </div>
      </div>
    </div>
  );
};
