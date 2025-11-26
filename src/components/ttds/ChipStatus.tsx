import React from 'react';
import { CheckCircle, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';

export type ChipStatusVariant = 'success' | 'warning' | 'error' | 'info';

export interface ChipStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ChipStatusVariant;
  label: string;
  icon?: boolean;
  selected?: boolean;
  disabled?: boolean;
  onRemove?: () => void;
}

export const ChipStatus = React.forwardRef<HTMLDivElement, ChipStatusProps>(
  (
    {
      variant = 'info',
      label,
      icon = true,
      selected = false,
      disabled = false,
      onRemove,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all duration-200 border-2';

    const variantConfig = {
      success: {
        styles: selected
          ? 'bg-emerald-600 border-emerald-600 text-white'
          : 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100',
        icon: <CheckCircle className="h-4 w-4" />,
      },
      warning: {
        styles: selected
          ? 'bg-amber-600 border-amber-600 text-white'
          : 'bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100',
        icon: <AlertTriangle className="h-4 w-4" />,
      },
      error: {
        styles: selected
          ? 'bg-red-600 border-red-600 text-white'
          : 'bg-red-50 border-red-200 text-red-800 hover:bg-red-100',
        icon: <AlertCircle className="h-4 w-4" />,
      },
      info: {
        styles: selected
          ? 'bg-blue-600 border-blue-600 text-white'
          : 'bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100',
        icon: <Info className="h-4 w-4" />,
      },
    };

    const config = variantConfig[variant];
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer';

    return (
      <div
        ref={ref}
        role="status"
        aria-label={`${variant} status: ${label}`}
        className={`${baseStyles} ${config.styles} ${disabledStyles} ${className}`}
        {...props}
      >
        {icon && config.icon}
        <span>{label}</span>
        {onRemove && !disabled && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="ml-1 hover:opacity-70 transition-opacity"
            aria-label={`Remove ${label}`}
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    );
  }
);

ChipStatus.displayName = 'ChipStatus';
