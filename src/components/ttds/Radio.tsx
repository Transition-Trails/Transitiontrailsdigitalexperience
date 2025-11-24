import React from 'react';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="inline-flex items-center gap-2">
        <div className="relative">
          <input
            ref={ref}
            type="radio"
            id={inputId}
            className="peer sr-only"
            {...props}
          />
          <label
            htmlFor={inputId}
            className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-slate-300 bg-white cursor-pointer transition-all duration-200 hover:border-slate-400 peer-focus:ring-2 peer-focus:ring-offset-1 peer-focus:ring-emerald-200 peer-checked:border-emerald-600 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 scale-0 peer-checked:scale-100 transition-transform duration-200" />
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

Radio.displayName = 'Radio';
