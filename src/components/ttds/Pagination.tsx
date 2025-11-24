import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  showFirstLast?: boolean;
  maxPageButtons?: number;
  className?: string;
}

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      showFirstLast = true,
      maxPageButtons = 7,
      className = '',
    },
    ref
  ) => {
    // Generate page numbers with ellipsis
    const getPageNumbers = () => {
      const pages: (number | 'ellipsis-start' | 'ellipsis-end')[] = [];
      
      if (totalPages <= maxPageButtons) {
        // Show all pages
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Always show first page
        pages.push(1);

        const leftSiblingIndex = Math.max(currentPage - 1, 2);
        const rightSiblingIndex = Math.min(currentPage + 1, totalPages - 1);

        const showLeftEllipsis = leftSiblingIndex > 2;
        const showRightEllipsis = rightSiblingIndex < totalPages - 1;

        if (!showLeftEllipsis && showRightEllipsis) {
          // Show: 1 2 3 4 5 ... 10
          for (let i = 2; i < Math.min(maxPageButtons - 1, totalPages); i++) {
            pages.push(i);
          }
          pages.push('ellipsis-end');
        } else if (showLeftEllipsis && !showRightEllipsis) {
          // Show: 1 ... 6 7 8 9 10
          pages.push('ellipsis-start');
          for (let i = Math.max(totalPages - (maxPageButtons - 3), 2); i < totalPages; i++) {
            pages.push(i);
          }
        } else {
          // Show: 1 ... 4 5 6 ... 10
          pages.push('ellipsis-start');
          for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
            pages.push(i);
          }
          pages.push('ellipsis-end');
        }

        // Always show last page
        pages.push(totalPages);
      }

      return pages;
    };

    const pages = getPageNumbers();

    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        onPageChange?.(page);
      }
    };

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        className={`flex items-center justify-center gap-1 ${className}`}
      >
        {/* First Page */}
        {showFirstLast && (
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            aria-label="Go to first page"
            className={`
              p-2 rounded-lg transition-colors
              ${
                currentPage === 1
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
            `}
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>
        )}

        {/* Previous */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Go to previous page"
          className={`
            p-2 rounded-lg transition-colors
            ${
              currentPage === 1
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
          `}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {pages.map((page, index) => {
            if (page === 'ellipsis-start' || page === 'ellipsis-end') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-3 py-1.5 text-slate-400 text-sm"
                  aria-hidden="true"
                >
                  ...
                </span>
              );
            }

            const isActive = page === currentPage;

            return (
              <button
                key={page}
                onClick={() => handlePageChange(page as number)}
                aria-label={`Go to page ${page}`}
                aria-current={isActive ? 'page' : undefined}
                className={`
                  min-w-[2.25rem] px-3 py-1.5 text-sm rounded-lg transition-all duration-200
                  ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100'
                  }
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
                `}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Next */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
          className={`
            p-2 rounded-lg transition-colors
            ${
              currentPage === totalPages
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
          `}
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Last Page */}
        {showFirstLast && (
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            aria-label="Go to last page"
            className={`
              p-2 rounded-lg transition-colors
              ${
                currentPage === totalPages
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
            `}
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        )}
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';
