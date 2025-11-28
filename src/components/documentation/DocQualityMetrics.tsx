import React from 'react';
import { 
  componentRegistry 
} from '../status/ComponentStatus';
import { 
  Target, 
  Code, 
  Zap, 
  Database,
  Award,
  TrendingUp
} from 'lucide-react';

export const DocQualityMetrics: React.FC = () => {
  // Calculate various quality metrics
  const totalComponents = componentRegistry.length;
  
  const designComplete = componentRegistry.filter(c => c.designComplete).length;
  const codeComplete = componentRegistry.filter(c => c.codeComplete).length;
  const lwcAvailable = componentRegistry.filter(c => c.lwcAvailable).length;
  const salesforceObjectsMapped = componentRegistry.filter(c => c.salesforceObjectsMapped).length;
  
  const fullyComplete = componentRegistry.filter(c => 
    c.designComplete && c.codeComplete && c.lwcAvailable && c.salesforceObjectsMapped
  ).length;
  
  const readyForProduction = componentRegistry.filter(c => 
    c.designComplete && c.codeComplete
  ).length;

  const designPercentage = Math.round((designComplete / totalComponents) * 100);
  const codePercentage = Math.round((codeComplete / totalComponents) * 100);
  const lwcPercentage = Math.round((lwcAvailable / totalComponents) * 100);
  const salesforcePercentage = Math.round((salesforceObjectsMapped / totalComponents) * 100);
  const productionReadyPercentage = Math.round((readyForProduction / totalComponents) * 100);

  const metrics = [
    {
      icon: Target,
      label: 'Design Complete',
      count: designComplete,
      total: totalComponents,
      percentage: designPercentage,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      progressColor: 'bg-purple-500'
    },
    {
      icon: Code,
      label: 'Code Complete',
      count: codeComplete,
      total: totalComponents,
      percentage: codePercentage,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      progressColor: 'bg-blue-500'
    },
    {
      icon: Zap,
      label: 'LWC Available',
      count: lwcAvailable,
      total: totalComponents,
      percentage: lwcPercentage,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      progressColor: 'bg-amber-500'
    },
    {
      icon: Database,
      label: 'Salesforce Mapped',
      count: salesforceObjectsMapped,
      total: totalComponents,
      percentage: salesforcePercentage,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      progressColor: 'bg-teal-500'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-lg p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          <h4 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
            Documentation Quality Metrics
          </h4>
        </div>
        <p className="text-xs text-slate-600">
          Comprehensive tracking of design, code, and Salesforce implementation progress
        </p>
      </div>

      {/* Main Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div 
              key={metric.label}
              className={`bg-white rounded-lg p-4 border ${metric.borderColor}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`p-1.5 ${metric.bgColor} rounded ${metric.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className={`text-xs ${metric.color} mb-0.5`} style={{ fontWeight: 700 }}>
                    {metric.label}
                  </div>
                  <div className="text-xs text-slate-600">
                    {metric.count}/{metric.total}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                <div 
                  className={`h-full ${metric.progressColor} transition-all duration-500`}
                  style={{ width: `${metric.percentage}%` }}
                />
              </div>

              {/* Percentage */}
              <div className={`text-right text-xs ${metric.color}`} style={{ fontWeight: 600 }}>
                {metric.percentage}%
              </div>
            </div>
          );
        })}
      </div>

      {/* Production Ready Highlight */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-5 border-2 border-emerald-200">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-500 text-white rounded-lg">
            <Award className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-sm text-emerald-900" style={{ fontWeight: 700 }}>
                Production Ready Components
              </h5>
              <span className="text-2xl text-emerald-600" style={{ fontWeight: 700 }}>
                {productionReadyPercentage}%
              </span>
            </div>
            <div className="h-3 bg-white rounded-full overflow-hidden mb-2 border border-emerald-200">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                style={{ width: `${productionReadyPercentage}%` }}
              />
            </div>
            <p className="text-xs text-emerald-800">
              <span style={{ fontWeight: 700 }}>{readyForProduction} of {totalComponents}</span> components 
              have both design and code complete (ready for implementation)
            </p>
          </div>
        </div>
      </div>

      {/* Fully Complete Highlight */}
      {fullyComplete > 0 && (
        <div className="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 text-purple-600" />
            <div>
              <div className="text-sm text-purple-900 mb-1" style={{ fontWeight: 700 }}>
                🎉 {fullyComplete} Fully Complete Component{fullyComplete !== 1 ? 's' : ''}
              </div>
              <p className="text-xs text-purple-700">
                Design, code, LWC, and Salesforce objects all mapped and ready!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
