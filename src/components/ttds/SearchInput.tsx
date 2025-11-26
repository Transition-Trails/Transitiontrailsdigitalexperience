import React from 'react';
import { Search, X } from 'lucide-react';

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  onClear?: () => void;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      label,
      helperText,
      error,
      fullWidth = false,
      onClear,
      className = '',
      id,
      value,
      ...props
    },
    ref
  ) => {
    const inputId = id || `search-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;
    const hasValue = value && value.toString().length > 0;

    const baseInputStyles = 'w-full pl-10 pr-10 py-2 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50';
    
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
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
          <input
            ref={ref}
            type="search"
            id={inputId}
            value={value}
            className={`${baseInputStyles} ${stateStyles} ${className}`}
            aria-invalid={hasError}
            aria-describedby={helperText || error ? `${inputId}-description` : undefined}
            {...props}
          />
          {hasValue && onClear && (
            <button
              type="button"
              onClick={onClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
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

SearchInput.displayName = 'SearchInput';
