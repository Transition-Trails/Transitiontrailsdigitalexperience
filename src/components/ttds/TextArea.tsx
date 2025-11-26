import React from 'react';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  resizable?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      helperText,
      error,
      fullWidth = false,
      resizable = true,
      className = '',
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const inputId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    const baseTextAreaStyles = 'w-full px-3 py-2 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-slate-50';
    
    const stateStyles = hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
      : 'border-slate-300 hover:border-slate-400 focus:border-emerald-500 focus:ring-emerald-200';

    const resizeStyles = resizable ? 'resize-y' : 'resize-none';

    return (
      <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label htmlFor={inputId} className="text-slate-700">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          className={`${baseTextAreaStyles} ${stateStyles} ${resizeStyles} ${className}`}
          aria-invalid={hasError}
          aria-describedby={helperText || error ? `${inputId}-description` : undefined}
          {...props}
        />
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

TextArea.displayName = 'TextArea';
