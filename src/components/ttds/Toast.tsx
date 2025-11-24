import React from 'react';
import { CheckCircle, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';

export type ToastVariant = 'success' | 'warning' | 'error' | 'info';
export type ToastPosition = 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center';

export interface ToastProps {
  variant?: ToastVariant;
  message: React.ReactNode;
  action?: React.ReactNode;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      variant = 'info',
      message,
      action,
      onClose,
      showCloseButton = true,
    },
    ref
  ) => {
    const baseStyles = 'flex items-start gap-3 p-4 rounded-lg shadow-lg border min-w-[320px] max-w-md';

    const variantConfig = {
      success: {
        styles: 'bg-emerald-50 border-emerald-200 text-emerald-900',
        icon: <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />,
      },
      warning: {
        styles: 'bg-amber-50 border-amber-200 text-amber-900',
        icon: <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0" />,
      },
      error: {
        styles: 'bg-red-50 border-red-200 text-red-900',
        icon: <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />,
      },
      info: {
        styles: 'bg-blue-50 border-blue-200 text-blue-900',
        icon: <Info className="h-5 w-5 text-blue-600 flex-shrink-0" />,
      },
    };

    const config = variantConfig[variant];

    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        className={`${baseStyles} ${config.styles}`}
      >
        {config.icon}
        <div className="flex-1 min-w-0">
          <div className="text-sm">{message}</div>
          {action && <div className="mt-2">{action}</div>}
        </div>
        {showCloseButton && onClose && (
          <button
            onClick={onClose}
            className="text-current opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-current rounded flex-shrink-0"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';

// Toast Container Component for managing multiple toasts
export interface ToastContainerProps {
  position?: ToastPosition;
  children?: React.ReactNode;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  position = 'top-right',
  children,
}) => {
  const positionStyles: Record<ToastPosition, string> = {
    'top-right': 'top-4 right-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  };

  return (
    <div className={`fixed ${positionStyles[position]} z-50 flex flex-col gap-2`}>
      {children}
    </div>
  );
};

ToastContainer.displayName = 'ToastContainer';
