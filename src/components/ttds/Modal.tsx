import React from 'react';
import { X } from 'lucide-react';

export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  showCloseButton?: boolean;
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
}

export const Modal: React.FC<ModalProps> = ({
  open = false,
  onClose,
  header,
  footer,
  children,
  showCloseButton = true,
  size = 'medium',
}) => {
  React.useEffect(() => {
    if (open) {
      // Add ARIA attributes for accessibility
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open && onClose) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  const sizeStyles = {
    small: 'max-w-md',
    medium: 'max-w-2xl',
    large: 'max-w-4xl',
    fullscreen: 'max-w-[95vw] max-h-[95vh]',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-header"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className={`relative bg-white rounded-lg shadow-2xl border border-slate-200 w-full ${sizeStyles[size]} max-h-[90vh] overflow-hidden flex flex-col`}
      >
        {/* Header */}
        {(header || showCloseButton) && (
          <div
            id="modal-header"
            className="modal-header flex items-center justify-between gap-4 px-6 py-4 border-b border-slate-200 flex-shrink-0"
          >
            {header && <div className="flex-1 text-slate-900">{header}</div>}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="text-slate-500 hover:text-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-emerald-500 rounded"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="modal-body p-6 overflow-y-auto flex-1">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="modal-footer px-6 py-4 border-t border-slate-200 flex-shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';
