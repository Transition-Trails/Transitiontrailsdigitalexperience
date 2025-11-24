import React from 'react';
import { X, LucideIcon } from 'lucide-react';

export type TagVariant = 
  | 'default'
  | 'trail'
  | 'platform'
  | 'topic'
  | 'primary'
  | 'secondary';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: TagVariant;
  label: string;
  icon?: LucideIcon;
  removable?: boolean;
  onRemove?: () => void;
}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      variant = 'default',
      label,
      icon: Icon,
      removable = false,
      onRemove,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm border transition-all duration-200';

    const variantStyles: Record<TagVariant, string> = {
      default: 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200',
      trail: 'bg-emerald-100 border-emerald-300 text-emerald-800 hover:bg-emerald-200',
      platform: 'bg-blue-100 border-blue-300 text-blue-800 hover:bg-blue-200',
      topic: 'bg-purple-100 border-purple-300 text-purple-800 hover:bg-purple-200',
      primary: 'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700',
      secondary: 'bg-slate-600 border-slate-600 text-white hover:bg-slate-700',
    };

    return (
      <div
        ref={ref}
        role="tag"
        aria-label={label}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {Icon && <Icon className="h-3.5 w-3.5 flex-shrink-0" />}
        <span className="whitespace-nowrap">{label}</span>
        {removable && onRemove && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="ml-1 hover:opacity-70 transition-opacity flex-shrink-0"
            aria-label={`Remove ${label} tag`}
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    );
  }
);

Tag.displayName = 'Tag';
