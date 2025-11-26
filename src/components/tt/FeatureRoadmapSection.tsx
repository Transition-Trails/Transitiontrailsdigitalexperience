import React from 'react';
import { CheckCircle, Clock, Calendar } from 'lucide-react';

export type RoadmapStatus = 'planned' | 'in-progress' | 'done';
export type ColumnLayout = '1-column' | '2-column' | '3-column';
export type RoadmapDensity = 'default' | 'compact';

export interface RoadmapFeature {
  name: string;
  description?: string;
  status: RoadmapStatus;
}

export interface RoadmapColumn {
  title: string; // "Now", "Next", "Later"
  features: RoadmapFeature[];
}

export interface TTFeatureRoadmapSectionProps extends React.HTMLAttributes<HTMLElement> {
  // Required Fields
  columns: RoadmapColumn[]; // Array of columns (Now, Next, Later)
  
  // Optional Fields
  sectionTitle?: string; // Default: "Roadmap"
  sectionDescription?: string;
  showLegend?: boolean; // Show status chip legend (default: true)
  showHeader?: boolean; // Show section header (default: true)
  
  // Variants
  columnLayout?: ColumnLayout; // 3-column | 2-column | 1-column (responsive)
  density?: RoadmapDensity; // default | compact
  
  // Styling
  backgroundColor?: string;
}

// Helper: Get status chip styling
const getStatusStyles = (status: RoadmapStatus): { bg: string; text: string; border: string } => {
  const styles: Record<RoadmapStatus, { bg: string; text: string; border: string }> = {
    'planned': {
      bg: 'bg-slate-100',
      text: 'text-slate-700',
      border: 'border-slate-200'
    },
    'in-progress': {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      border: 'border-blue-200'
    },
    'done': {
      bg: 'bg-emerald-100',
      text: 'text-emerald-700',
      border: 'border-emerald-200'
    }
  };
  return styles[status];
};

// Helper: Get status label
const getStatusLabel = (status: RoadmapStatus): string => {
  const labels: Record<RoadmapStatus, string> = {
    'planned': 'Planned',
    'in-progress': 'In Progress',
    'done': 'Done'
  };
  return labels[status];
};

// Helper: Get status icon
const getStatusIcon = (status: RoadmapStatus): React.ReactNode => {
  const icons: Record<RoadmapStatus, React.ReactNode> = {
    'planned': <Calendar className="w-3.5 h-3.5" aria-hidden="true" />,
    'in-progress': <Clock className="w-3.5 h-3.5" aria-hidden="true" />,
    'done': <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
  };
  return icons[status];
};

// Feature Row Component
interface FeatureRowProps {
  feature: RoadmapFeature;
  density: RoadmapDensity;
}

const FeatureRow: React.FC<FeatureRowProps> = ({ feature, density }) => {
  const statusStyle = getStatusStyles(feature.status);
  const isCompact = density === 'compact';

  return (
    <div
      className={`bg-white rounded-lg border border-slate-200 ${isCompact ? 'p-3' : 'p-4'} space-y-2 hover:border-slate-300 transition-colors`}
      role="listitem"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className={`${isCompact ? 'text-sm' : 'text-base'} text-slate-900 leading-tight`}>
            {feature.name}
          </h4>
          {!isCompact && feature.description && (
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              {feature.description}
            </p>
          )}
        </div>
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border flex-shrink-0 ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
          role="status"
          aria-label={`Status: ${getStatusLabel(feature.status)}`}
        >
          {getStatusIcon(feature.status)}
          <span>{getStatusLabel(feature.status)}</span>
        </span>
      </div>
    </div>
  );
};

// Status Legend Component
const StatusLegend: React.FC = () => {
  const statuses: RoadmapStatus[] = ['planned', 'in-progress', 'done'];

  return (
    <div
      className="flex flex-wrap items-center gap-4"
      role="group"
      aria-label="Status legend"
    >
      <span className="text-sm text-slate-600">Status:</span>
      {statuses.map((status) => {
        const style = getStatusStyles(status);
        return (
          <div key={status} className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border ${style.bg} ${style.text} ${style.border}`}
              role="img"
              aria-label={getStatusLabel(status)}
            >
              {getStatusIcon(status)}
              <span>{getStatusLabel(status)}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export const TTFeatureRoadmapSection = React.forwardRef<HTMLElement, TTFeatureRoadmapSectionProps>(
  (
    {
      columns,
      sectionTitle = 'Roadmap',
      sectionDescription,
      showLegend = true,
      showHeader = true,
      columnLayout = '3-column',
      density = 'default',
      backgroundColor = 'bg-slate-50',
      className = '',
      ...props
    },
    ref
  ) => {
    // Determine grid columns based on layout
    const getGridCols = (): string => {
      const layouts: Record<ColumnLayout, string> = {
        '3-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        '2-column': 'grid-cols-1 md:grid-cols-2',
        '1-column': 'grid-cols-1'
      };
      return layouts[columnLayout];
    };

    return (
      <section
        ref={ref}
        className={`${backgroundColor} py-16 px-6 ${className}`}
        aria-labelledby="roadmap-title"
        {...props}
      >
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Section Header */}
          {showHeader && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h2
                  id="roadmap-title"
                  className="text-3xl text-slate-900"
                >
                  {sectionTitle}
                </h2>
                {sectionDescription && (
                  <p className="text-lg text-slate-600 max-w-3xl">
                    {sectionDescription}
                  </p>
                )}
              </div>

              {/* Status Legend */}
              {showLegend && <StatusLegend />}
            </div>
          )}

          {/* Roadmap Columns */}
          <div className={`grid ${getGridCols()} gap-8`} role="list">
            {columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="space-y-4"
                role="region"
                aria-labelledby={`column-${columnIndex}-title`}
              >
                {/* Column Header */}
                <div className="space-y-1">
                  <h3
                    id={`column-${columnIndex}-title`}
                    className="text-xl text-slate-900"
                  >
                    {column.title}
                  </h3>
                  <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
                </div>

                {/* Feature List */}
                <div className="space-y-3" role="list">
                  {column.features.map((feature, featureIndex) => (
                    <FeatureRow
                      key={featureIndex}
                      feature={feature}
                      density={density}
                    />
                  ))}
                </div>

                {/* Empty State */}
                {column.features.length === 0 && (
                  <div className="bg-white rounded-lg border border-dashed border-slate-300 p-6 text-center">
                    <p className="text-sm text-slate-500">No features planned yet</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

TTFeatureRoadmapSection.displayName = 'TTFeatureRoadmapSection';
