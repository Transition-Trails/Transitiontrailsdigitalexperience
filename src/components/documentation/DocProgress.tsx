import React from 'react';
import { BookOpen, CheckCircle, Circle, TrendingUp } from 'lucide-react';

interface DocProgressProps {
  total: number;
  documented: number;
  partial?: number;
  showDetails?: boolean;
}

export function DocProgress({ 
  total, 
  documented, 
  partial = 0,
  showDetails = true 
}: DocProgressProps) {
  const percentage = Math.round((documented / total) * 100);
  const partialPercentage = Math.round((partial / total) * 100);
  const remaining = total - documented - partial;

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
          <BookOpen className="h-5 w-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
              Documentation Progress
            </h4>
            <span className="text-sm text-slate-600">
              {documented}/{total}
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
            <div 
              className="absolute left-0 top-0 h-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
            {partial > 0 && (
              <div 
                className="absolute top-0 h-full bg-amber-400 transition-all duration-500"
                style={{ 
                  left: `${percentage}%`,
                  width: `${partialPercentage}%` 
                }}
              />
            )}
          </div>

          {showDetails && (
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3 w-3 text-emerald-600" />
                <span className="text-slate-600">
                  <span className="text-emerald-700" style={{ fontWeight: 600 }}>
                    {documented}
                  </span> Complete
                </span>
              </div>
              {partial > 0 && (
                <div className="flex items-center gap-1.5">
                  <Circle className="h-3 w-3 text-amber-600 fill-amber-600" />
                  <span className="text-slate-600">
                    <span className="text-amber-700" style={{ fontWeight: 600 }}>
                      {partial}
                    </span> Partial
                  </span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Circle className="h-3 w-3 text-slate-400" />
                <span className="text-slate-600">
                  <span className="text-slate-700" style={{ fontWeight: 600 }}>
                    {remaining}
                  </span> Remaining
                </span>
              </div>
            </div>
          )}

          {percentage === 100 && (
            <div className="mt-3 pt-3 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 rounded px-2 py-1">
                <CheckCircle className="h-3 w-3" />
                <span style={{ fontWeight: 600 }}>All components documented!</span>
              </div>
            </div>
          )}

          {percentage < 100 && percentage >= 75 && (
            <div className="mt-3 pt-3 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs text-blue-700 bg-blue-50 rounded px-2 py-1">
                <TrendingUp className="h-3 w-3" />
                <span style={{ fontWeight: 600 }}>
                  Almost there! {total - documented - partial} components remaining
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface DocProgressStatsProps {
  categories: Array<{
    name: string;
    total: number;
    documented: number;
    color: string;
  }>;
}

export function DocProgressStats({ categories }: DocProgressStatsProps) {
  const totalComponents = categories.reduce((sum, cat) => sum + cat.total, 0);
  const totalDocumented = categories.reduce((sum, cat) => sum + cat.documented, 0);
  const overallPercentage = Math.round((totalDocumented / totalComponents) * 100);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-lg p-6">
      <div className="mb-4">
        <h3 className="text-lg text-slate-900 mb-2" style={{ fontWeight: 700 }}>
          Documentation Coverage
        </h3>
        <p className="text-sm text-slate-600">
          Track progress across all component categories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {categories.map((category) => {
          const percentage = Math.round((category.documented / category.total) * 100);
          
          return (
            <div key={category.name} className="bg-white rounded-lg border border-slate-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm text-slate-700" style={{ fontWeight: 600 }}>
                  {category.name}
                </h4>
                <span className="text-xs text-slate-500">
                  {category.documented}/{category.total}
                </span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${category.color} transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div className="mt-2 text-xs text-slate-600">
                {percentage}% complete
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg border-2 border-blue-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
            Overall Progress
          </h4>
          <span className="text-2xl text-blue-600" style={{ fontWeight: 700 }}>
            {overallPercentage}%
          </span>
        </div>
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500"
            style={{ width: `${overallPercentage}%` }}
          />
        </div>
        <div className="mt-3 text-xs text-slate-600">
          {totalDocumented} of {totalComponents} components documented
        </div>
      </div>
    </div>
  );
}
