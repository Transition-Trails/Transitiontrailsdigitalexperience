import React from 'react';

export type SkeletonVariant = 'line' | 'circle' | 'rectangle';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant = 'line', width, height, className = '', ...props }, ref) => {
    const baseStyles = 'bg-slate-200 animate-pulse relative overflow-hidden';

    // Shimmer effect
    const shimmerStyles = `
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
      before:animate-shimmer
    `;

    const variantStyles = {
      line: 'rounded h-4',
      circle: 'rounded-full',
      rectangle: 'rounded-lg',
    };

    const style: React.CSSProperties = {
      width: width || (variant === 'circle' ? '40px' : '100%'),
      height: height || (variant === 'circle' ? '40px' : variant === 'rectangle' ? '200px' : '16px'),
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${shimmerStyles} ${className}`}
        style={style}
        aria-label="Loading..."
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

// Skeleton Text Block Component
export interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

export const SkeletonText: React.FC<SkeletonTextProps> = ({ lines = 3, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`} role="status" aria-label="Loading text">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="line"
          width={index === lines - 1 ? '70%' : '100%'}
        />
      ))}
    </div>
  );
};

// Skeleton Card Component
export interface SkeletonCardProps {
  hasImage?: boolean;
  className?: string;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ hasImage = true, className = '' }) => {
  return (
    <div
      className={`p-6 bg-white border border-slate-200 rounded-lg space-y-4 ${className}`}
      role="status"
      aria-label="Loading card"
    >
      {hasImage && <Skeleton variant="rectangle" height={160} />}
      <div className="space-y-3">
        <Skeleton variant="line" width="60%" height={20} />
        <SkeletonText lines={2} />
      </div>
      <div className="flex items-center gap-3">
        <Skeleton variant="circle" width={32} height={32} />
        <div className="flex-1">
          <Skeleton variant="line" width="40%" />
        </div>
      </div>
    </div>
  );
};

// Skeleton List Component
export interface SkeletonListProps {
  items?: number;
  className?: string;
}

export const SkeletonList: React.FC<SkeletonListProps> = ({ items = 3, className = '' }) => {
  return (
    <div className={`space-y-3 ${className}`} role="status" aria-label="Loading list">
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg">
          <Skeleton variant="circle" width={48} height={48} />
          <div className="flex-1 space-y-2">
            <Skeleton variant="line" width="80%" />
            <Skeleton variant="line" width="60%" />
          </div>
        </div>
      ))}
    </div>
  );
};
