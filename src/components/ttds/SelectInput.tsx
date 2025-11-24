import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  options?: { value: string; label: string }[];
}

export const SelectInput = React.forwardRef<HTMLSelectElement, SelectInputProps>(
  (
    {
      label,
      helperText,
      error,
      fullWidth = false,
      options = [],
      className = '',
      id,
      children,
      ...props
    },
    ref
  ) => {
    const inputId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    const baseSelectStyles = 'w-full px-3 py-2 pr-10 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50 appearance-none bg-white cursor-pointer';
    
    const stateStyles = hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
      : 'border-slate-300 hover:border-slate-400 focus:border-emerald-500 focus:ring-emerald-200';

    return (
      <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label htmlFor={inputId} className="text-slate-700">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            className={`${baseSelectStyles} ${stateStyles} ${className}`}
            aria-invalid={hasError}
            aria-describedby={helperText || error ? `${inputId}-description` : undefined}
            {...props}
          >
            {children || options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
        </div>
        {(helperText || error) && (
          <p
            id={`${inputId}-description`}
            className={`text-sm ${error ? 'text-red-600' : 'text-slate-500'}`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

SelectInput.displayName = 'SelectInput';
