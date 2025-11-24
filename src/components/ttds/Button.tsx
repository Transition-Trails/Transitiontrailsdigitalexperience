import React from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'iconOnly';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      loading = false,
      fullWidth = false,
      iconLeft,
      iconRight,
      children,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles: Record<ButtonVariant, string> = {
      primary: 'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 focus:ring-emerald-500',
      secondary: 'bg-white text-slate-700 border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 active:bg-slate-100 focus:ring-slate-400',
      ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus:ring-slate-400',
      iconOnly: 'bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 focus:ring-slate-400 aspect-square',
    };

    const sizeStyles: Record<ButtonSize, string> = {
      small: variant === 'iconOnly' ? 'h-8 w-8 p-1.5' : 'h-8 px-3 text-sm',
      medium: variant === 'iconOnly' ? 'h-10 w-10 p-2' : 'h-10 px-4',
      large: variant === 'iconOnly' ? 'h-12 w-12 p-2.5' : 'h-12 px-6',
    };

    const widthStyles = fullWidth ? 'w-full' : '';

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            {iconLeft && <span className="flex items-center">{iconLeft}</span>}
            {variant !== 'iconOnly' && children}
            {iconRight && <span className="flex items-center">{iconRight}</span>}
            {variant === 'iconOnly' && children}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
