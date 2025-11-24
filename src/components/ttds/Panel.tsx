import React from 'react';

export type PanelElevation = 0 | 1 | 2;

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: PanelElevation;
  header?: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  (
    {
      elevation = 0,
      header,
      actions,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'bg-white rounded-lg border border-slate-200';

    const elevationStyles: Record<PanelElevation, string> = {
      0: 'shadow-none',
      1: 'shadow-sm',
      2: 'shadow-md',
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${elevationStyles[elevation]} ${className}`}
        {...props}
      >
        {(header || actions) && (
          <div className="panel-header flex items-center justify-between gap-4 px-6 py-4 border-b border-slate-200">
            {header && <div className="flex-1">{header}</div>}
            {actions && <div className="flex items-center gap-2">{actions}</div>}
          </div>
        )}
        <div className="panel-body p-6">
          {children}
        </div>
      </div>
    );
  }
);

Panel.displayName = 'Panel';
