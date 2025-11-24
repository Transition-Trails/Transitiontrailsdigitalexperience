import React from 'react';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      className = '',
      id,
      checked,
      ...props
    },
    ref
  ) => {
    const inputId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="inline-flex items-center gap-2">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            checked={checked}
            className="peer sr-only"
            {...props}
          />
          <label
            htmlFor={inputId}
            className="flex items-center w-11 h-6 rounded-full bg-slate-300 cursor-pointer transition-all duration-200 hover:bg-slate-400 peer-focus:ring-2 peer-focus:ring-offset-1 peer-focus:ring-emerald-200 peer-checked:bg-emerald-600 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"
          >
            <div className="w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 translate-x-0.5 peer-checked:translate-x-5.5" />
          </label>
        </div>
        {label && (
          <label htmlFor={inputId} className="cursor-pointer select-none text-slate-700">
            {label}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
