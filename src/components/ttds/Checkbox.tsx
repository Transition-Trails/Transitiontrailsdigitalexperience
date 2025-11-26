import React from 'react';
import { Check, Minus } from 'lucide-react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      indeterminate = false,
      className = '',
      id,
      checked,
      ...props
    },
    ref
  ) => {
    const inputId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    
    const internalRef = React.useRef<HTMLInputElement>(null);
    const combinedRef = (ref as any) || internalRef;

    React.useEffect(() => {
      if (combinedRef.current) {
        combinedRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, combinedRef]);

    return (
      <div className="inline-flex items-center gap-2">
        <div className="relative">
          <input
            ref={combinedRef}
            type="checkbox"
            id={inputId}
            checked={checked}
            className="peer sr-only"
            {...props}
          />
          <label
            htmlFor={inputId}
            className="flex items-center justify-center w-5 h-5 rounded border-2 border-slate-300 bg-white cursor-pointer transition-all duration-200 hover:border-slate-400 peer-focus:ring-2 peer-focus:ring-offset-1 peer-focus:ring-emerald-200 peer-checked:bg-emerald-600 peer-checked:border-emerald-600 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"
          >
            {indeterminate ? (
              <Minus className="h-3 w-3 text-white" strokeWidth={3} />
            ) : (
              checked && <Check className="h-3 w-3 text-white" strokeWidth={3} />
            )}
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

Checkbox.displayName = 'Checkbox';
